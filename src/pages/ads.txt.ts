import { SITE } from '../site.config';

/**
 * ads.txt — 광고 사기를 막기 위한 파일입니다.
 * 애드센스가 "ads.txt 파일에 문제가 있습니다" 경고를 띄우면 이 파일이 없거나
 * 게시자 ID가 틀린 것입니다. site.config.ts 의 adsense.client 만 채우면 자동 생성됩니다.
 */
export function GET() {
  const client = SITE.adsense.client; // 'ca-pub-0000000000000000'
  const pub = client.replace(/^ca-/, ''); // 'pub-0000000000000000'
  const body = client
    ? `google.com, ${pub}, DIRECT, f08c47fec0942fa0\n`
    : '# 애드센스 게시자 ID를 site.config.ts 의 adsense.client 에 입력하면 자동으로 채워집니다.\n';

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
