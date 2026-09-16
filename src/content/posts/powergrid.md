---
title: AI 데이터센터 18.4GW를 돌리려면 발전소를 40GW 넘게 더 지어야 합니다
description: 정부가 2035년까지 1000조 원을 들여 AI 데이터센터 18.4GW를 짓겠다고 했습니다. 그런데 계획된 가스발전 신규 설비는 19.5GW입니다. 병목은 그래픽카드가 아니라 전기 쪽에 있습니다.
pubDate: 2026-09-17
tags: ['구조 읽기', '자료 해부']
cover: '/images/pylonfield.png'
coverAlt: '안개 낀 빈 들판에 줄지어 선 철제 송전탑. 생성형 AI로 만든 이미지입니다.'
references:
  - title: 'AI데이터센터 병목은 GPU가 아닌 전력—18.4GW 전력망 프로젝트의 현실'
    url: 'https://www.valuetimes.kr/2026/09/korea-ai-datacenter-power-grid-bottleneck-2026.html'
    source: 밸류타임즈
    date: 2026-09
  - title: '배경훈 “2035년까지 18.4GW AI 데이터센터 구축할 것”'
    url: 'https://www.newscj.com/news/articleView.html?idxno=3416595'
    source: 천지일보
    date: 2026
  - title: "[이로운지적] AI 데이터센터 18.4GW로 확대…'3대 메가 프로젝트'와 탄소중립 충돌 우려"
    url: 'https://www.eroun.net/news/articleView.html?idxno=88676'
    source: 이로운넷
    date: 2026
  - title: '정부, 2035년까지 AI 데이터센터 18.4GW 구축…1000조 원 투입 초대형 프로젝트 추진'
    url: 'https://www.sbhnews.com/news/south-korea-ai-datacenter-megaproject-2026-07-28-AM-10-23'
    source: SBH뉴스
    date: 2026-07-28
  - title: 'AI 데이터센터 18GW 시대… ‘재생에너지’로 돌릴 수 있을까?'
    url: 'https://edata.ekn.kr/article/view/ekn202606300001'
    source: 에너지경제
    date: 2026-06-30
  - title: '정부, 2035년까지 1000조원 AI 데이터센터 투자 계획 발표'
    url: 'https://www.rocketpunch.com/en/discover/11574'
    source: 로켓펀치
    date: 2026
  - title: 'AI 데이터센터 투자 전방위 확산…MS·오라클 초대형 증설'
    url: 'https://404kresearch.substack.com/p/404k-semi-ai-technology-evening-brief'
    source: 404K Research
    date: 2026-09
  - title: '韓, 대미투자 합의 임박…에너지 분야에 1000억달러'
    url: 'https://www.hankyung.com/article/2026091071817'
    source: 한국경제
    date: 2026-09-10
---

인공지능 경쟁을 반도체 경쟁으로 읽는 것이 익숙합니다. 누가 더 좋은 칩을 확보하느냐가 승부를 가른다는 이야기입니다.

그런데 국내 데이터센터 업계에서 나오는 말은 조금 다릅니다. 그래픽카드를 아무리 확보해도 전기가 모자라면 가동률을 낮출 수밖에 없다는 것입니다.

숫자로 확인해 보겠습니다.

## 짓겠다고 한 것

정부 계획은 2035년까지 인공지능 데이터센터를 **18.4기가와트** 규모로 짓는 것입니다. 투입 금액은 1000조 원 이상으로 제시됐습니다.

<figure style="margin:2.4rem 0;">
  <figcaption style="font-size:.9rem;opacity:.75;margin-bottom:1.1rem;">AI 데이터센터 구축 계획</figcaption>
  <div style="font-size:.95rem;">
    <div style="display:flex;gap:1rem;padding:.9rem 0;border-bottom:1px solid currentColor;align-items:baseline;">
      <div style="flex:0 0 6rem;opacity:.7;">2029년까지</div>
      <div style="flex:1;">8.4GW</div>
    </div>
    <div style="display:flex;gap:1rem;padding:.9rem 0;background:var(--ink);color:var(--paper);margin:0 -.6rem;padding-left:.6rem;padding-right:.6rem;align-items:baseline;">
      <div style="flex:0 0 6rem;opacity:.75;">2035년까지</div>
      <div style="flex:1;font-weight:700;">18.4GW</div>
    </div>
  </div>
  <figcaption style="font-size:.84rem;opacity:.6;margin-top:1rem;">2035년까지 1000조 원 이상이 들어갑니다</figcaption>
</figure>

18.4기가와트가 어느 정도인지 감을 잡으려면 비교가 필요합니다. 대형 원자력발전소 한 기가 대략 1.4기가와트입니다. 데이터센터가 그 용량을 항상 다 쓰지는 않지만, 설비 규모로만 보면 원전 열세 기 분량에 해당합니다.

## 그걸 돌릴 전기

업계 추정으로는 이 계획을 실현하려면 2035년까지 **신규 발전설비 40기가와트에서 50기가와트**가 필요합니다.

현재 로드맵에 잡혀 있는 신규 가스발전은 **19.5기가와트**입니다.

<figure style="margin:2.4rem 0;">
  <figcaption style="font-size:.9rem;opacity:.75;margin-bottom:1.1rem;">2035년까지 필요한 것과 계획된 것</figcaption>
  <div style="font-size:.95rem;">
    <div style="display:flex;gap:1rem;padding:.9rem 0;background:var(--ink);color:var(--paper);margin:0 -.6rem;padding-left:.6rem;padding-right:.6rem;align-items:baseline;">
      <div style="flex:1;">업계 추정 필요 설비</div>
      <div style="flex:0 0 auto;font-weight:700;">40~50GW</div>
    </div>
    <div style="display:flex;gap:1rem;padding:.9rem 0;border-bottom:1px solid currentColor;align-items:baseline;">
      <div style="flex:1;">계획된 신규 가스발전</div>
      <div style="flex:0 0 auto;">19.5GW</div>
    </div>
  </div>
  <figcaption style="font-size:.84rem;opacity:.6;margin-top:1rem;">두 배에서 두 배 반까지 늘려야 맞춰집니다</figcaption>
</figure>

업계에서는 기존 계획을 50%에서 200%까지 확대해야 한다고 봅니다. 2040년 전력 수요 전망치도 종전보다 27기가와트, 약 19% 높게 다시 잡혀야 한다는 지적이 나옵니다.

발전소는 계획한다고 바로 서지 않습니다. 가스복합화력은 부지 선정부터 준공까지 대략 5년에서 7년, 송전선로 확보는 그보다 오래 걸리는 경우가 많습니다. 2035년이면 남은 시간이 9년입니다.

<figure style="margin:2.4rem 0;">
  <img src="/images/barefooting.png" alt="빈 부지에 콘크리트 기초와 앵커 볼트만 솟아 있고 그 위에 아무것도 세워져 있지 않다" width="1376" height="768" loading="lazy" decoding="async" style="width:100%;height:auto;" />
  <figcaption style="font-size:.82rem;opacity:.6;margin-top:.7rem;text-align:center;">기초는 놓였는데 위에 올릴 것이 아직 없습니다. 생성형 AI로 만든 이미지입니다.</figcaption>
</figure>

## 포항이 선택된 이유

이미 진행 중인 사업에서 이 제약이 어떻게 작동했는지 보이는 사례가 있습니다.

그래픽카드 17만 장 규모로 추진되는 포항 인공지능 컴퓨팅센터입니다. 부지 선정의 핵심 근거 가운데 하나가 **인근 원전에서 안정적으로 전력을 끌어올 수 있다는 점**이었습니다.

땅값도 아니고 인력도 아니고 전기였습니다. 앞으로 지어질 데이터센터들도 같은 기준으로 자리를 고르게 됩니다. 그러면 데이터센터는 송전선이 굵게 깔린 곳으로 몰립니다. 그런데 한 지역의 송전망이 더 받아 줄 수 있는 전기의 양에는 한계가 있고, 몰리는 만큼 그 한계가 빨리 차 버립니다.

## 계산에서 빠진 항목

여기에 하나가 더 걸립니다.

정부는 2035년까지 온실가스를 2018년 대비 53%에서 61% 줄이겠다고 목표를 제시했습니다. 그런데 환경단체 분석으로는 2029년까지 짓기로 한 8.4기가와트분 데이터센터만으로도 2035년까지 누적 온실가스 배출이 **8500만 톤** 늘어날 것으로 추산됩니다. 낙관적인 가정을 넣고도 그렇습니다. 한국이 1년 동안 내뿜는 온실가스가 6억 9000만 톤가량이니, 그 8분의 1쯤 되는 양이 데이터센터 몫으로 얹히는 셈입니다.

나머지 10기가와트는 이 추산에 들어가 있지 않습니다.

부족분을 가스로 메우면 배출이 늘어납니다. 태양광과 풍력으로 메우려면, 해가 지고 바람이 멎을 때 발전량이 뚝 떨어진다는 문제가 걸립니다. 데이터센터는 밤낮없이 같은 양의 전기를 요구하기 때문에 이 둘을 맞추기가 어렵습니다. 원전은 짓는 데 걸리는 시간이 더 깁니다.

세 선택지가 각각 다른 방향으로 걸려 있습니다.

## 같은 주에 나온 다른 소식

이 대목은 덧붙여 두는 편이 좋겠습니다.

같은 시기에 한국의 대미투자 첫 사업이 정해지고 있다는 보도가 나왔습니다. 미국 내 원자력발전소 최대 8기 건설과 텍사스 가스발전소 관련 투자입니다. 규모는 1000억 달러를 넘길 수 있다고 전해집니다.

두 소식은 서로 다른 협상에서 나온 것이고, 직접 연결된 사안이 아닙니다. 다만 나란히 놓고 보면 같은 시기에 한쪽에서는 국내 발전설비 부족이 지적되고 다른 쪽에서는 미국 발전설비에 자금이 배정되고 있습니다.

## 자주 묻는 질문

**Q. 18.4GW를 다 쓰는 건 아니지 않나요?**
맞습니다. 데이터센터의 실제 전력 사용률은 설비 용량보다 낮습니다. 다만 인공지능 연산은 기존 데이터센터보다 가동률이 높고 부하가 일정한 편이라, 여유를 크게 잡기 어렵습니다. 본문의 40~50GW는 업계가 그 점을 반영해 내놓은 추정치입니다.

**Q. 전기가 모자라면 어떻게 되나요?**
데이터센터가 안 돌아가는 게 아니라 가동률을 낮춥니다. 투자한 설비의 일부만 쓰게 된다는 뜻입니다. 또는 전력망 접속 대기가 길어져 준공은 됐는데 켜지 못하는 상황이 생깁니다. 미국과 아일랜드에서 이미 나타난 현상입니다.

**Q. 재생에너지로는 안 되나요?**
전량을 대기는 어렵습니다. 데이터센터는 24시간 일정한 전력을 요구하는데 태양광과 풍력은 그렇지 않습니다. 저장장치를 함께 깔면 가능하지만 비용이 크게 올라갑니다. 서남권 재생에너지를 활용하자는 제안이 나오는 것도 이 때문입니다.

**Q. 이 계획이 무리라는 뜻인가요?**
그렇게 읽을 근거는 이 자료들에 없습니다. 전력 확보 계획이 데이터센터 계획과 같은 속도로 제시되지 않았다는 것이 이 글이 확인한 내용입니다. 둘 중 하나가 조정되거나 둘 다 조정되면 숫자는 맞춰집니다.

## 제가 틀릴 수 있는 지점

첫째, 40~50GW는 정부 공식 수치가 아니라 업계 추정입니다. 가정에 따라 크게 달라지는 값이고, 원 추정의 전제를 저는 확인하지 못했습니다.

둘째, 19.5GW는 가스발전 신규 설비만 놓은 값입니다. 원전과 재생에너지 계획을 합치면 격차가 줄어듭니다. 이 글은 가장 큰 항목 하나를 비교 대상으로 삼았을 뿐입니다.

셋째, 온실가스 8500만 톤은 환경단체 분석값입니다. 산정 방식과 전제가 정부 추산과 다를 수 있습니다.

넷째, 대미투자 건과 국내 전력 부족을 나란히 놓은 것은 대비를 보여주기 위한 것이지 인과를 주장한 것이 아닙니다. 두 사안의 자금 출처와 결정 주체는 다릅니다.

---

인공지능 인프라 경쟁을 이야기할 때 세는 단위는 대체로 그래픽카드 장수입니다. 몇 만 장을 확보했는지가 헤드라인이 됩니다.

그런데 그래픽카드는 사 오면 되고, 발전소는 지어야 합니다. 사 오는 데는 돈이 들고 짓는 데는 시간이 듭니다. 돈은 늘릴 수 있지만 시간은 늘릴 수 없습니다.

2035년까지 9년이 남았습니다. 발전소 한 기를 세우는 데 필요한 시간과 비교하면, 계획을 세울 시간은 이미 많이 지나 있습니다.
