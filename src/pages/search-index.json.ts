import { getPublishedPosts, toPlainText } from '../lib/posts';

/**
 * 사이트 검색용 색인.
 * 서버가 필요 없도록 작은 JSON 파일 하나로 만들고, 브라우저에서 검색합니다.
 * 글이 수백 편이 되어도 파일 크기가 몇백 KB를 넘지 않습니다.
 */
export async function GET() {
  const posts = await getPublishedPosts();
  const index = posts.map((p) => ({
    u: `/posts/${p.id}`,
    t: p.data.title,
    d: p.data.description,
    g: p.data.tags,
    s: p.data.series?.name ?? '',
    p: p.data.pubDate.toISOString().slice(0, 10),
    b: toPlainText(p.body, 1500),
  }));

  return new Response(JSON.stringify(index), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
