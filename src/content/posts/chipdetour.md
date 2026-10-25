---
title: "중국 회사가 빌려 쓰는 엔비디아 칩 — 같은 칩을 빌려주는 한국에도 미국 규칙이 생길 수 있다"
description: 중국에 팔 수 없는 엔비디아 최신 칩을 중국 회사들이 말레이시아 데이터센터에서 빌려 쓰고 있습니다. 미국 규칙이 누가 쓰는지는 묻지 않기 때문인데, 세금으로 같은 칩을 사서 대학에 빌려주는 한국에도 이 질문이 돌아올 수 있습니다.
pubDate: 2026-09-09
tags: ['구조 읽기', '자료 해부']
cover: '/images/pipevalves.png'
coverAlt: '서버랙이 양쪽으로 늘어선 데이터센터 통로. 생성형 AI로 만든 이미지입니다.'
references:
  - title: 'Expansion of End-User Controls To Cover Affiliates of Certain Listed Entities (90 FR 47201)'
    url: 'https://www.federalregister.gov/documents/2025/09/30/2025-19001/expansion-of-end-user-controls-to-cover-affiliates-of-certain-listed-entities'
    source: 미국 관보(상무부 산업안보국)
    date: 2025-09-30
  - title: 'One Year Suspension of Expansion of End-User Controls for Affiliates of Certain Listed Entities (90 FR 50857)'
    url: 'https://www.govinfo.gov/content/pkg/FR-2025-11-12/pdf/2025-19846.pdf'
    source: 미국 관보(상무부 산업안보국)
    date: 2025-11-12
  - title: 'Fact Sheet: President Donald J. Trump Strikes Deal on Economic and Trade Relations with China'
    url: 'https://www.whitehouse.gov/fact-sheets/2025/11/fact-sheet-president-donald-j-trump-strikes-deal-on-economic-and-trade-relations-with-china/'
    source: 백악관
    date: 2025-11-01
  - title: 'BIS Guidance on License Requirements for Advanced Computing Items (May 31, 2026)'
    url: 'https://www.bis.gov/media/documents/bis-guidance-may-31-2026.pdf'
    source: 미국 상무부 산업안보국
    date: 2026-05-31
  - title: 'Final Vote Results for Roll Call 13 (H.R. 2683, Remote Access Security Act)'
    url: 'https://clerk.house.gov/evs/2026/roll013'
    source: 미국 하원 사무처
    date: 2026-01-12
  - title: 'Malaysia Regulates Trade of US AI Chips'
    url: 'https://www.miti.gov.my/miti/resources/Media%20Release/[FINAL]%5FMITI%5FPress%5FStmt%5FMalaysia%5FRegulates%5FTrade%5Fof%5FUS%5FAI%5FChips%5F2025-07-14.pdf'
    source: 말레이시아 투자통상산업부
    date: 2025-07-14
  - title: 'Nvidia chip export loophole clouds US-China AI summit talks'
    url: 'https://asiatimes.com/2026/09/nvidia-chip-export-loophole-clouds-us-china-ai-summit-talks/'
    source: Asia Times
    date: 2026-09-08
  - title: "China's ByteDance to access 36,000 Blackwell GPU cluster through Malaysia cloud operator"
    url: 'https://www.tomshardware.com/pc-components/gpus/chinas-bytedance-to-access-36-000-blackwell-gpu-cluster-through-malaysia-cloud-operator-nvidia-confirms-no-objections-deal-is-in-line-with-us-export-controls'
    source: "Tom's Hardware"
    date: 2026-03-13
  - title: 'What the Remote Access Security Act Means for Export Controls Compliance Programs'
    url: 'https://www.lw.com/en/insights/what-the-remote-access-security-act-means-for-export-controls-compliance-programs'
    source: Latham & Watkins
    date: 2026-03-20
  - title: '정부 확보 GPU 1만 장, 산·학·연에 푼다'
    url: 'https://www.korea.kr/news/policyNewsView.do?newsId=148956711'
    source: 과학기술정보통신부(대한민국 정책브리핑)
    date: 2025-12-18
  - title: '정부, 첨단 GPU 4000여 장 산·학·연에 우선 배분'
    url: 'https://www.korea.kr/news/policyNewsView.do?newsId=148956932'
    source: 과학기술정보통신부(대한민국 정책브리핑)
    date: 2025-12-22
  - title: 'GPU 확보 사업(1차 추경, 1.46조원 규모) 참여 사업자(컨소시엄) 공모 결과'
    url: 'https://www.msit.go.kr/bbs/view.do?sCode=user&mPid=208&mId=307&bbsSeqNo=94&nttSeqNo=3185925'
    source: 과학기술정보통신부
    date: 2025-06
  - title: 'NVIDIA, South Korea Government and Industrial Giants Build AI Infrastructure and Ecosystem'
    url: 'https://nvidianews.nvidia.com/news/south-korea-ai-infrastructure'
    source: 엔비디아
    date: 2025-10-31
  - title: 'Framework for Artificial Intelligence Diffusion (90 FR 4544)'
    url: 'https://www.govinfo.gov/content/pkg/FR-2025-01-15/html/2025-00636.htm'
    source: 미국 관보(상무부 산업안보국)
    date: 2025-01-15
  - title: 'Department of Commerce Announces Rescission of Biden-Era Artificial Intelligence Diffusion Rule'
    url: 'https://www.bis.gov/press-release/department-commerce-announces-rescission-biden-era-artificial-intelligence-diffusion-rule-strengthens'
    source: 미국 상무부 산업안보국
    date: 2025-05-13
---

미국은 엔비디아의 최신 인공지능(AI) 칩을 중국에 팔지 못하게 막고 있습니다. 2026년 3월에는 틱톡을 만든 중국 회사 바이트댄스가 바로 그 칩 3만6000장을 묶은 서버 시설을 쓰기로 했다는 보도가 나왔습니다. 시설은 말레이시아에 있습니다. 말레이시아 회사가 서버를 사서 자기 데이터센터에 두고, 바이트댄스가 인터넷으로 접속해 쓰는 방식입니다. 엔비디아는 이 거래가 미국 규칙에 맞는다고 밝혔습니다.

한국 정부도 칩을 데이터센터에 두고 이용자가 접속해 쓰게 하는 같은 방식으로 빌려줍니다. 2025년 추가경정예산 1조4600억 원으로 엔비디아 칩 약 1만3000장을 사서 네이버클라우드·카카오·NHN클라우드 데이터센터에 두었습니다. 2026년 2월부터는 대학과 연구기관에 무료로 빌려줍니다. 대부분이 엔비디아 최신 세대인 블랙웰 칩으로, 말레이시아 시설에 들어간 칩과 같은 세대입니다.

세금으로 산 이 칩을 누구에게 빌려줄 수 있는지도 미국 규칙이 정할 수 있습니다. 미국은 2025년 1월 한국을 포함한 해외 데이터센터에 「칩을 누구에게 빌려주는지」를 약속하게 하는 규칙을 냈다가, 지켜야 하는 날짜 이틀 전에 거둬들였습니다. 2026년 1월에는 미국 하원이 같은 질문을 법으로 만드는 법안을 통과시켰습니다. 미국이 칩 거래에서 무엇을 따지고 무엇을 따지지 않는지 알면, 「미국이 칩을 막았다」는 뉴스에서 실제로 무엇이 막혔는지 가려 볼 수 있습니다. 그 규칙이 한국 데이터센터에 적용되는지도 판단할 수 있습니다.

## 미국이 칩 거래에서 따지는 세 가지

수출 통제는 미국 상무부 산업안보국이 맡습니다. 어떤 물건을 어느 나라의 누구에게 팔 때 허가를 받아야 하는지 정하는 부서입니다. 이 부서가 AI 칩 거래에서 따지는 것은 칩이 팔려 쓰이기까지의 순서를 따라 세 가지입니다.

<figure style="margin:2.4rem 0;">
  <figcaption style="font-size:.9rem;opacity:.75;margin-bottom:1.2rem;">미국이 AI 칩 거래에서 따지는 세 가지와 2026년 9월 현재 규칙</figcaption>
  <div style="font-size:.92rem;">
    <div style="border-left:3px solid currentColor;padding:.5rem 0 .5rem 1rem;margin-bottom:1rem;">
      <div style="font-weight:700;">① 칩을 어디로 보내나</div>
      <div style="opacity:.8;margin-top:.35rem;line-height:1.8;">중국으로 보내려면 허가가 필요합니다. 말레이시아 같은 제3국에 보낸 뒤 중국으로 다시 옮기는 것도 허가를 받아야 합니다.</div>
    </div>
    <div style="border-left:3px solid currentColor;padding:.5rem 0 .5rem 1rem;margin-bottom:1rem;opacity:.85;">
      <div style="font-weight:700;">② 칩을 사는 회사가 어느 나라 회사인가</div>
      <div style="opacity:.8;margin-top:.35rem;line-height:1.8;">2023년 11월부터, 중국 회사가 다른 나라에 세운 법인에 팔 때도 허가가 필요합니다. 미국이 거래를 제한하는 회사가 지분 절반 이상을 가진 해외 회사까지 묶는 규칙은 2025년 11월부터 멈춰 있습니다.</div>
    </div>
    <div style="border-left:3px solid currentColor;padding:.5rem 0 .5rem 1rem;opacity:.7;">
      <div style="font-weight:700;">③ 칩을 실제로 누가 쓰나</div>
      <div style="opacity:.8;margin-top:.35rem;line-height:1.8;">규칙이 없습니다. 빌려 쓰는 것까지 허가를 받게 하는 법안이 하원을 통과했고, 상원은 아직 통과하지 않았습니다.</div>
    </div>
  </div>
  <figcaption style="font-size:.82rem;opacity:.6;margin-top:1rem;">칩을 중국 밖에 둔 채 중국 회사가 인터넷으로 빌려 쓰면 ①과 ②를 모두 지킨 거래가 될 수 있습니다. 자료: 미국 관보, 상무부 산업안보국 2026년 5월 31일 지침, 미국 하원</figcaption>
</figure>

미국 정부는 첫째와 둘째를 칩이 팔리는 순간에 따집니다. 셋째는 칩이 데이터센터에 설치된 뒤 날마다 누가 접속하느냐의 문제인데, 이것을 따지는 규칙은 지금 없습니다.

## 칩을 중국으로 보내지만 않으면 첫째 규칙은 지킵니다

중국에 바로 팔 수 없으니 칩은 동남아로 갑니다. 2025년 11월 월스트리트저널은 미국 캘리포니아의 서버 회사 에이브레스가 만든 서버 일부가 동남아에 도착한 뒤 중국으로 다시 옮겨졌다고 보도했습니다. 서버를 옮긴 쪽이 미국 허가 없이 중국에 보냈다면 첫째 규칙을 어긴 것입니다.

동남아 나라들도 이런 재수출을 막기 시작했습니다. 말레이시아 정부는 2025년 7월 14일부터 미국산 고성능 AI 칩을 다른 나라로 내보내거나 옮겨 실을 때 정부 허가를 받게 했습니다. 이 허가도 칩이 말레이시아를 떠날 때 받는 것입니다. 말레이시아 정부 발표문은 나라 안 데이터센터에서 누가 그 칩을 쓰는지는 다루지 않았습니다.

## 칩을 사는 회사를 따지는 규칙 하나는 미국이 협상에서 미뤘습니다

둘째 질문을 따지는 규칙은 두 개입니다. 하나는 2023년 11월부터 시행 중입니다. 중국에 본사를 둔 회사라면 싱가포르나 말레이시아에 세운 법인이 칩을 사도 미국 허가를 받아야 합니다. 산업안보국은 2026년 5월 31일 지침에서 이 규칙을 지금도 그대로 적용한다고 다시 밝혔습니다.

다른 하나가 2025년 9월 29일 시행된 계열사 규칙입니다. 미국 상무부는 국가 안보를 이유로 미국 물건을 팔 때 허가를 받게 한 회사 명단을 두는데, 이 명단에 오른 회사가 지분 50% 이상을 가진 해외 회사도 명단 회사처럼 다루게 한 규칙입니다.

미국 정부는 이 규칙을 6주 만에 멈췄습니다. 2025년 10월 말 트럼프 대통령과 시진핑 주석이 한국에서 만난 뒤, 백악관은 무역 합의를 설명하는 자료에서 계열사 규칙을 1년 동안 미루겠다고 밝혔습니다. 같은 자료에는 중국이 희토류 수출 통제 강화를 멈추기로 했다는 내용도 함께 들어 있습니다.

「미국이 새 규칙으로 막았다」는 뉴스를 보면 그 규칙이 지금 시행 중인지, 무역 협상에서 미뤄지지 않았는지까지 확인해야 실제로 무엇이 막혔는지 알 수 있습니다. 계열사 규칙은 2026년 11월 10일 다시 시행될 예정입니다.

## 칩을 누가 쓰는지 따지는 규칙은 지금 없습니다

바이트댄스가 쓰기로 한 말레이시아 시설은 지금 규칙으로는 막히지 않는 것으로 알려진 거래입니다. 기술 매체 톰스하드웨어가 옮긴 월스트리트저널 보도를 보면, 말레이시아 클라우드 회사 아올라니는 블랙웰 칩 약 3만6000장을 묶은 시설을 말레이시아에 두고 있습니다. 시설 가치는 약 25억 달러이고, 장비는 에이브레스를 거쳐 들여왔습니다.

아올라니와 바이트댄스의 거래를 세 질문으로 따져 보면 이렇습니다. 칩은 중국으로 가지 않았고, 칩을 산 곳은 말레이시아 회사입니다. 바이트댄스는 미국이 거래를 제한하는 회사 명단에 없습니다. 엔비디아는 클라우드 사업자를 자체 심사한 뒤 제품을 판다고 밝혔습니다. 또 미국 규칙은 중국처럼 미국이 칩 수출을 막는 나라 밖에서 하는 클라우드 사업을 허용한다고 설명했습니다.

에이브레스도 같은 방식으로 팔았습니다. 2026년 9월 6일 뉴욕타임스는 에이브레스가 2년 남짓 동안 동남아로 보낸 첨단 기술 제품이 56억 달러어치라고 보도했습니다. 그 가운데 블랙웰 칩을 단 컴퓨터가 30억 달러어치를 넘습니다. 서버를 산 곳은 말레이시아 클라우드 회사들이었고, 그 서버를 바이트댄스와 알리바바가 빌려 썼습니다.

미국 하원은 이 빈 곳을 메울 법안을 통과시켰습니다. 2026년 1월 12일 원격접속보안법이 찬성 369표, 반대 22표로 하원을 통과했습니다. 외국인이 인터넷으로 미국 칩에 접속하는 것도 수출처럼 허가 대상으로 삼을 권한을 대통령에게 주는 법입니다. 2026년 9월 기준으로 상원 통과와 대통령 서명이 남아 있어 아직 법이 아닙니다.

<figure style="margin:2.4rem 0;">
  <img src="/images/emptyracks.png" alt="문이 열린 채 비어 있는 데이터센터 서버랙 여러 대" width="1376" height="768" loading="lazy" decoding="async" style="width:100%;height:auto;" />
  <figcaption style="font-size:.82rem;opacity:.6;margin-top:.7rem;text-align:center;">문이 열린 채 비어 있는 데이터센터 서버랙. 생성형 AI로 만든 이미지입니다.</figcaption>
</figure>

## 미국은 한국 데이터센터에도 「누구에게 빌려주나」를 물으려 한 적이 있습니다

빌려주는 대상은 다르지만, 한국 정부의 칩도 데이터센터에 둔 채 이용자가 접속해 쓰는 방식입니다. 과학기술정보통신부는 이 칩을 산업계, 대학과 연구기관, 국가 AI 사업에 나눠 빌려주고, 스타트업에는 시장 가격의 5%에서 10%만 받습니다. 엔비디아는 2025년 10월 말 경주 APEC 정상회의 기간에 한국 정부와 기업에 GPU 26만 장 이상을 공급한다고 발표했습니다. 여기서 GPU는 AI 계산에 쓰는 칩을 가리킵니다.

미국은 칩을 빌려주는 해외 데이터센터에 조건을 붙이려 한 적이 있습니다. 산업안보국이 2025년 1월 15일 관보에 낸 규칙은 나라를 세 등급으로 나눠 칩을 받을 수 있는 양을 정했습니다. 한국은 허가 없이 칩을 받을 수 있는 가장 위 등급에 들었지만 조건이 붙었습니다. 칩을 받는 회사는 이 등급 밖 나라의 회사가 가장 큰 규모의 AI 모델을 학습시키도록 칩을 빌려주지 않겠다고 약속해야 했습니다.

2025년 1월 규칙은 기업이 지켜야 하는 날짜가 오기 전에 철회됐습니다. 미국 상무부는 그 날짜 이틀 전인 2025년 5월 13일에 규칙을 거두겠다고 발표했습니다. 기업에 부담을 주고, 수십 개 나라를 아래 등급으로 내려 외교 관계를 해친다는 이유였습니다.

원격접속보안법이 생기면 산업안보국이 세부 규칙을 써야 누가 허가를 받아야 하는지 정해집니다. 미국 로펌 레이섬앤드왓킨스는 이 법이 미국에서 만든 칩이라면 다른 나라 데이터센터에 있어도 적용될 수 있다고 설명했습니다. 새 규칙이 2025년 1월 규칙처럼 쓰이면 한국 데이터센터도 칩을 누구에게 빌려주는지 확인하고 약속해야 할 수 있습니다. 어떤 칩을 누구에게 빌려줄 때 허가가 필요한지는 2026년 9월 현재 정해진 것이 없습니다.

## 제가 틀릴 수 있는 지점

말레이시아에 둔 칩을 중국 회사가 빌려 쓰는 것이 지금 규칙에서 허용된다는 판단은 엔비디아의 설명과 법률회사의 분석에 기댄 것입니다. 산업안보국이나 법원이 이런 거래를 두고 판단을 내린 적은 없고, 레이섬앤드왓킨스도 이를 확정된 법 해석이 아니라 아직 규칙이 없어 보이는 경우로 설명했습니다. 아올라니의 최종 소유주가 누구인지, 그래서 둘째 질문의 규칙에 걸리는지도 저는 확인하지 못했습니다.

새 규칙이 한국 데이터센터에 무엇을 요구할지는 2025년 1월 규칙을 근거로 한 제 짐작입니다. 법안을 지지한 미국 의원들이 문제 삼은 것은 중국 같은 통제 대상국의 접속이라, 한국 대학이나 스타트업이 쓰는 데에는 제한이 없을 가능성이 큽니다. 그 경우에도 데이터센터가 이용자가 누구인지 확인하는 일은 생길 수 있습니다. 정부 GPU 지원 사업 공고의 첨부 문서에 외국 기업이나 외국인 이용자를 다루는 조항이 있는지는 확인하지 못했습니다.

계열사 규칙 유예와 희토류 통제 유예가 같은 합의에 들어 있다는 것은 백악관 자료에 근거합니다. 산업안보국 관보에는 유예 이유가 없어, 두 조치를 직접 맞바꿨는지는 공식 문서로 확인되지 않습니다. 에이브레스 서버 30억 달러어치 가운데 얼마가 말레이시아에서 빌려주는 데 쓰였고 얼마가 중국으로 옮겨졌는지도 보도에서 확인되지 않습니다.
