import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  // '_' 로 시작하는 파일은 발행되지 않습니다 (템플릿·메모 보관용)
  loader: glob({
    base: './src/content/posts',
    pattern: ['**/*.{md,mdx}', '!**/_*'],
  }),
  schema: z.object({
    /** 글 제목 (필수) */
    title: z.string(),
    /** 목록·검색결과에 보이는 요약 (필수, 두세 문장 권장) */
    description: z.string(),
    /** 발행일 'YYYY-MM-DD' (필수) */
    pubDate: z.coerce.date(),
    /** 수정일 (선택) */
    updatedDate: z.coerce.date().optional(),
    /** 태그 목록 (선택) */
    tags: z.array(z.string()).default([]),
    /** 대표 이미지 경로 (선택) 예: '/images/foo.jpg' */
    cover: z.string().optional(),
    /** 대표 이미지 설명 (선택) */
    coverAlt: z.string().optional(),

    /**
     * 연재 묶음 (선택). 같은 name 을 가진 글들이 하나의 시리즈로 묶입니다.
     * 시리즈는 독자가 다음 글로 이어 읽게 만들어 방문당 조회수를 크게 올립니다.
     *   series:
     *     name: 통계 읽는 법
     *     order: 2
     */
    series: z
      .object({
        name: z.string(),
        order: z.number(),
      })
      .optional(),

    /** true면 첫 화면 맨 위에 크게 노출됩니다 (대표글). 1~2편만 지정하세요 */
    featured: z.boolean().default(false),

    /**
     * 글에서 언급한 '이미 공개된' 자료의 출처 (선택).
     *
     * ⚠️ 본인이 쓴 기사를 링크하면 소속 매체가 그대로 드러납니다.
     *    통계·판결문·보도자료·타 매체 보도 등 제3의 공개 자료를 다세요.
     */
    references: z
      .array(
        z.object({
          title: z.string(),
          url: z.string().url(),
          source: z.string().optional(),
          date: z.coerce.date().optional(),
        })
      )
      .optional(),

    /** true면 발행되지 않습니다 (초고 보관용) */
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
