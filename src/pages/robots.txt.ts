import type { APIContext } from 'astro';
import { SITE } from '../site.config';

export function GET(context: APIContext) {
  const site = (context.site ?? new URL(SITE.url)).toString().replace(/\/$/, '');
  const body = `User-agent: *
Allow: /

# 애드센스 크롤러 (광고 관련성을 높이려면 반드시 허용해야 합니다)
User-agent: Mediapartners-Google
Allow: /

User-agent: AdsBot-Google
Allow: /

Sitemap: ${site}/sitemap-index.xml
`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
