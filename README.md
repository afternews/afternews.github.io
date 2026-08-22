# 다시 읽기 — 개인 블로그

공개된 자료를 놓고 사건이 아니라 구조를 읽는 정적 블로그.
Astro 기반, 애드센스 수익화 준비 완료.

## 문서 네 개를 이 순서로 읽으세요

| 순서 | 파일 | 내용 |
|---|---|---|
| 1 | [`시작하기.md`](./시작하기.md) | **설치부터 애드센스 신청까지 20단계.** 컴퓨터를 모른다는 전제로 씀 |
| 2 | [`리스크관리.md`](./리스크관리.md) | **현직 언론인 필독.** 직장과 문제가 생기지 않게 하는 원칙 |
| 3 | [`수익화-가이드.md`](./수익화-가이드.md) | 광고 자리 만드는 법, 수익 구조, 한 달 점검표 |
| 4 | [`skill/SKILL.md`](./skill/SKILL.md) | Claude와 함께 글 쓸 때의 작업 절차 |

별도로 받으신 `blog-checklist.html` 은 같은 내용을 눌러 가며 진행할 수 있는 체크리스트입니다.

## 명령어

```bash
npm install     # 처음 한 번
npm run dev     # http://localhost:4321 에서 미리보기
npm run build   # dist/ 에 정적 파일 생성
npm run preview # 빌드 결과 확인
```

## 폴더 구조

```
src/
├─ site.config.ts        ⭐ 제목·주소·애드센스 ID 등 모든 설정 (여기만 고치면 됨)
├─ content/posts/        ⭐ 글이 들어가는 곳 (.md 파일 하나 = 글 한 편)
│  └─ _템플릿-...md         복사해서 쓰는 새 글 틀 (_ 로 시작하면 발행 안 됨)
├─ pages/
│  ├─ index.astro          첫 화면
│  ├─ posts/               글 목록(페이지 넘김) · 글 상세
│  ├─ series/[name].astro  연재별 모아보기
│  ├─ search.astro         사이트 내 검색
│  ├─ search-index.json.ts 검색용 색인 (자동 생성)
│  ├─ tags/[tag].astro     태그별 목록
│  ├─ about.astro          소개 (애드센스 필수)
│  ├─ principles.astro     운영 원칙 — 무엇을 쓰지 않는지 공개 선언 (직장 리스크 방어)
│  ├─ contact.astro        문의 (애드센스 필수)
│  ├─ privacy.astro        개인정보처리방침 (애드센스 필수)
│  ├─ rss.xml.ts           RSS 피드
│  ├─ robots.txt.ts        검색로봇 안내 (자동)
│  └─ ads.txt.ts           애드센스 ads.txt (자동)
├─ components/
│  ├─ AdSlot.astro         광고 자리 (본문 위·아래·사이드바·목록)
│  ├─ InlineAds.astro    ⭐ 본문 중간 광고 자동 삽입 (문단 수를 세어 알아서 배치)
│  ├─ Toc.astro            목차 (데스크톱은 오른쪽 고정)
│  ├─ SeriesBox.astro      연재 안내 — 이어 읽기를 유도
│  ├─ ShareButtons.astro   공유 버튼
│  ├─ ReadingProgress.astro 읽기 진행률 + 스크롤 도달 분석
│  ├─ Pagination.astro     글 목록 페이지 넘김
│  ├─ BaseHead.astro       메타태그·구조화데이터·광고 스크립트
│  └─ CookieNotice.astro   쿠키 안내 배너
├─ layouts/Base.astro
├─ styles/global.css     ⭐ 색·폰트 (:root 변수만 바꿔도 분위기가 달라짐)
└─ lib/posts.ts           글 정렬·태그·읽는시간 계산
skill/                     Claude와 함께 글 쓸 때 쓰는 작업 절차 (SKILL.md)
public/
├─ og-default.png         공유할 때 뜨는 기본 이미지
├─ favicon.svg
└─ images/                글에 넣을 사진을 여기에
```

## 이미 되어 있는 것

- 애드센스 광고 슬롯 3곳 (본문 위·아래·목록 중간) — 게시자 ID만 넣으면 켜짐
- `ads.txt` · `google-adsense-account` 메타태그 자동 생성
- 개인정보처리방침 / 소개 / 문의 페이지 (애드센스 심사 필수 항목)
- 쿠키 안내 배너
- sitemap.xml · robots.txt · RSS 자동 생성
- Open Graph / 트위터 카드 / JSON-LD 구조화 데이터
- 다크 모드 자동 대응, 모바일 반응형
- 한글 장문 가독성에 맞춘 타이포그래피 (`word-break: keep-all`)
- 태그 분류, 관련 글 추천, 이전/다음 글, 읽는 시간 표시
- 공개 자료 출처 상자 (`references` 프런트매터)
- 초고 관리 (`draft: true`)
- **면책 고지 자동 삽입** — 모든 페이지 하단 + 글 끝 (`site.config.ts` 의 `disclosure`)
- **발행 전 자가 점검 9문항** — 글 템플릿에 내장
- **Claude 작업 절차 스킬** — `skill/SKILL.md` (별도 `blog-writing.skill` 파일로도 제공)

## 수익을 위해 들어간 것

**광고 (게시자 ID만 넣으면 전부 자동으로 켜집니다)**

- 본문 시작 직전 · 본문 끝 · 데스크톱 오른쪽 고정 · 글 목록 중간
- **본문 중간 광고 자동 삽입** — 4문단마다 최대 3개.
  글을 쓸 때 광고 위치를 신경 쓸 필요가 없습니다.
  규칙 변경은 `src/components/InlineAds.astro` 맨 위 숫자 세 개
- ads.txt · 인증 메타태그 자동 생성

**한 명이 여러 편을 읽게 만드는 장치** (수익에 가장 크게 기여합니다)

- 연재(series) — "3부작 중 2편"을 보여 주고 다음 편으로 연결
- 관련 글 4편 추천 (같은 연재 우선 → 태그 일치 순)
- 목차 (데스크톱 고정 / 모바일 접이식)
- 읽기 진행률 막대
- 사이트 내 검색 (서버 없이 동작)
- 이전/다음 글, 대표글, 태그·연재 모아보기

**유입을 늘리는 장치**

- sitemap · robots · RSS · JSON-LD 구조화 데이터 · Open Graph
- 공유 버튼 (X · 스레드 · 페이스북 · 링크 복사, 외부 SDK 없음)
- 글 목록 페이지 넘김 (한 페이지 12편, `src/lib/config.ts` 에서 조절)
- 구글 애널리틱스 + **스크롤 도달률 자동 기록** (어떤 글이 끝까지 읽히는지 파악)

## 새 글 쓰기

`src/content/posts/_템플릿-복사해서-쓰세요.md` 를 복사 → 이름 바꾸기 → 내용 채우기 →
`draft: true` 지우기 → GitHub에 올리면 1분 뒤 자동 배포.

## 배포

Vercel · Netlify · Cloudflare Pages 모두 설정 없이 자동 인식됩니다.
빌드 명령 `npm run build`, 출력 폴더 `dist`.
