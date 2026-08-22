import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

/** 초고(draft)를 뺀 전체 글을 최신순으로 반환 */
export async function getPublishedPosts(): Promise<Post[]> {
  const posts = await getCollection('posts', ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true;
  });
  return posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
}

/** 첫 화면에 크게 걸 대표글 */
export async function getFeaturedPosts(limit = 2): Promise<Post[]> {
  const posts = await getPublishedPosts();
  return posts.filter((p) => p.data.featured).slice(0, limit);
}

/** 모든 태그를 사용 빈도순으로 반환 */
export async function getAllTags(): Promise<{ tag: string; count: number }[]> {
  const posts = await getPublishedPosts();
  const map = new Map<string, number>();
  for (const post of posts) {
    for (const tag of post.data.tags) {
      map.set(tag, (map.get(tag) ?? 0) + 1);
    }
  }
  return [...map.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag, 'ko'));
}

/** 같은 시리즈에 속한 글들을 순서대로 반환 */
export async function getSeriesPosts(name: string): Promise<Post[]> {
  const posts = await getPublishedPosts();
  return posts
    .filter((p) => p.data.series?.name === name)
    .sort((a, b) => (a.data.series?.order ?? 0) - (b.data.series?.order ?? 0));
}

/** 모든 시리즈 목록 */
export async function getAllSeries(): Promise<
  { name: string; count: number; latest: Date }[]
> {
  const posts = await getPublishedPosts();
  const map = new Map<string, { count: number; latest: Date }>();
  for (const p of posts) {
    const name = p.data.series?.name;
    if (!name) continue;
    const cur = map.get(name);
    if (!cur) map.set(name, { count: 1, latest: p.data.pubDate });
    else {
      cur.count += 1;
      if (p.data.pubDate > cur.latest) cur.latest = p.data.pubDate;
    }
  }
  return [...map.entries()]
    .map(([name, v]) => ({ name, ...v }))
    .sort((a, b) => b.latest.valueOf() - a.latest.valueOf());
}

/** 'YYYY년 M월 D일' 형태로 날짜 표기 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Asia/Seoul',
  }).format(date);
}

/** 한국어 기준 읽는 데 걸리는 시간(분) — 분당 약 500자 */
export function readingTime(body: string | undefined): number {
  if (!body) return 1;
  const chars = body.replace(/\s/g, '').length;
  return Math.max(1, Math.round(chars / 500));
}

/**
 * 관련 글 추천.
 * 같은 시리즈 > 태그 일치 개수 > 최신순 으로 점수를 매깁니다.
 * 관련 글은 '한 번 온 독자가 두 번째 글을 읽게' 만드는 가장 효과적인 장치입니다.
 */
export function relatedPosts(current: Post, all: Post[], limit = 4): Post[] {
  const tags = new Set(current.data.tags);
  const series = current.data.series?.name;
  return all
    .filter((p) => p.id !== current.id)
    .map((p) => {
      let score = p.data.tags.filter((t) => tags.has(t)).length;
      if (series && p.data.series?.name === series) score += 5;
      return { post: p, score };
    })
    .sort(
      (a, b) =>
        b.score - a.score ||
        b.post.data.pubDate.valueOf() - a.post.data.pubDate.valueOf()
    )
    .slice(0, limit)
    .map((x) => x.post);
}

/** 태그를 URL에 쓰기 좋은 형태로 (공백 → 하이픈) */
export function tagToSlug(tag: string): string {
  return tag.trim().replace(/\s+/g, '-');
}

/** 마크다운 본문에서 검색용 평문 추출 */
export function toPlainText(body: string | undefined, limit = 1200): string {
  if (!body) return '';
  return body
    .replace(/^---[\s\S]*?---/, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[#>*_`|-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, limit);
}
