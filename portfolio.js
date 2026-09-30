const projects = [
  {
    type: 'AI RESEARCH · EDGE COMPUTING', date: '2026.06 — 2026.08', mark: 'Flood', art: 'art-flood', image: 'with_Rajat.JPG',
    title: 'IEEE Design & Test Journal', subtitle: 'Benchmarking VLM Reasoning Segmentation for Embodied Flood Response at the Edge', link: 'https://arxiv.org/abs/2608.15410',
    description: '홍수 재난 대응을 위한 VLM 기반 reasoning segmentation benchmark와 데이터셋을 구축하고, LISA 기반 VLM 파인튜닝 및 MobileSAM·Split Computing·Feature Compression을 활용한 VLM 경량화를 수행하였습니다. NVIDIA Jetson AGX Xavier에서 Edge 환경을 평가하여 정확도·지연시간·에너지·통신량 간 trade-off를 분석하고 연구 결과를 IEEE Design & Test에 투고하였습니다.',
    impact: 'TinyViT 기반 경량화, 정확도·지연시간·에너지·통신량 trade-off 분석, 홍수 데이터셋 생성',
    tags: ['VLM', 'LISA', 'TinyViT', 'Split Computing', 'Jetson AGX Xavier', 'IEEE Design & Test']
  },
  {
    type: 'INDUSTRY COLLABORATION · AI AGENT', date: '2026.03 — 2026.06', mark: 'Ready', art: 'art-ready', image: '레디톡대표사진.png',
    title: '캡스톤 디자인 : ReadyTalk for Academy', subtitle: '학원 운영을 돕는 도메인 특화 AI 에이전트',
    description: '학원 도메인에 특화된 AI Agent를 개발하며 질의 유형에 따른 Multi-Agent 분류·라우팅, LLM 기반 RAG 질의응답, OCR을 활용한 시험지 분석 및 문제 자동 분류, 카카오톡 채널 연동과 사용자 인증·개인정보 접근 제어, React 기반 챗봇 UI 및 서비스 데이터 흐름을 구현하였습니다.',
    impact: 'RAG 기반 Multi-Agent 구조를 설계·구현',
    tags: ['AI Agent', 'RAG', 'OCR', 'React', '멀티테넌트', 'GCP']
  },
  {
    type: 'HACKATHON · BACKEND', date: '2025.11', mark: 'Meet', art: 'art-moyeoyo', image: '모여요대표사진.png',
    title: '멋쟁이사자처럼 교내 해커톤 : 모여요', subtitle: '모두의 일정에서 최적의 약속 날짜 찾기',
    description: '여러 사용자의 일정을 분석해 모두가 가능한 날짜를 찾는 서비스. Spring Boot 백엔드와 Docker 기반 배포를 담당했습니다.',
    impact: '서버 빌드와 JAR 인식, Docker 이미지 문제를 해결해 AWS 배포 환경 구성',
    tags: ['Spring Boot', 'Docker', 'AWS']
  },
  {
    type: 'RESEARCH · INFORMATION RETRIEVAL', date: '2025.09 — 2025.11', mark: 'Search', art: 'art-retriever', image: '학술대회제주도.JPG',
    title: '한국정보기술학회 추계종합학술대회 및 대학생 논문 경진 대회', subtitle: '데이터 특성에 따른 Sparse와 Dense Retriever의 성능–비용 비교 분석',
    description: '본 논문은 LLM 기반 질의응답 시스템에서 Sparse(BM25)와 Dense(E5+FAISS) 검색기의 성능과 효율성을 비교·분석하고, 데이터 특성에 따른 검색 성능 및 운영 환경별 적합성을 평가하여 효율적인 검색기 선택 기준을 제시하였습니다.',
    impact: '운영 환경별 검색기 선택 기준을 연구해 한국정보기술학회 대학생 논문 경진 대회에 참여',
    tags: ['BM25', 'E5', 'FAISS', 'RAG']
  },
  {
    type: 'HACKATHON · FRONTEND', date: '2025.08', mark: 'Clustory', art: 'art-clustory', image: '클러스토리대표사진.png',
    title: '멋쟁이사자처럼 중앙 해커톤 : Clustory', subtitle: '감정을 지도 위에 기록하는 플랫폼',
    description: 'Next.js와 Tailwind CSS를 활용해 감정 분석 결과를 시각화하는 대시보드 웹 애플리케이션을 개발하고, 컴포넌트를 구조적으로 분리하여 렌더링 성능과 유지보수성을 개선하였습니다.',
    impact: 'Naver Map 연동, 이미지 크롭·업로드, 감정 태그 편집과 재사용 가능한 모달 구현',
    tags: ['Next.js', 'Tailwind CSS', 'Naver Map', 'React']
  }
];

const experiences = [
  {
    date: '2026.04 — 2026.08', title: 'Research Assistant', org: 'UCI Dutt Research Group · University of California, Irvine',
    description: 'Split Computing, Quantization, ViT 관련 배경 지식을 학습하고, LISA 기반 VLM 실험과 결과 분석에 참여했습니다.',
    points: ['학교 GPU 자원에 SSH로 접속하여 LISA 기반 VLM 모델의 다양한 실험 수행 및 결과 분석', 'IEEE Design & Test 저널 논문 연구 및 투고 과정 참여', '연구실 주간 세미나에 참여하여 다양한 연구 주제를 공유하고 최신 연구 동향 및 연구 방법론 습득']
  },
  {
    date: '2025.07 — 2025.10', title: '학부연구생', org: 'KMU MI LAB · 국민대학교 인공지능 연구실',
    description: '컴퓨터 비전·딥러닝·생성형 모델의 핵심 개념을 학습하고 논문 리뷰·토론 및 강의 발표를 매주 2회씩 진행했습니다.',
    points: ['EECS 498-007 / 598-005: Deep Learning for Computer Vision (Justin Johnson) 강의자료를 통해 컴퓨터 비전과 생성형 모델 등 인공지능의 핵심 개념과 원리를 체계적으로 학습', 'Git 스터디에서 브랜치 전략과 버전 관리 기초 학습']
  }
];

const activities = [
  ['컴퓨터프로그래밍 과목 조교', '2025.09 — 2026.06', '비전공 학생의 기초 프로그래밍 학습 지원'],
  ['기후변화사업 Python 교육 멘토', '2024.03 — 2024.06', '타 전공 학부생 대상 Python 교육'],
  ['소프트웨어융합대학 Python 교육', '2024.03 — 2024.06', '1학년 학부생 대상 Python 강의']
];

const stacks = ['Python', 'PyTorch', 'TensorFlow', 'OpenCV', 'React.js', 'Next.js', 'JavaScript', 'Spring Boot', 'MySQL · SQLD', 'Hugging Face', 'Git', 'Docker'];

const projectRoot = document.querySelector('#project-list');
projectRoot.innerHTML = projects.map((project, index) => `
  <article class="project-card reveal">
    <div class="project-art ${project.art}" aria-label="${project.title} 이미지">${project.image ? `<img src="${project.image}" alt="${project.title} 관련 이미지">` : `<span>${project.mark}</span>`}</div>
    <div class="project-content">
      <div class="project-topline"><span class="project-type">${project.type}</span><span class="project-date">${project.date}</span></div>
      <h3>${project.title}</h3><p class="project-subtitle">${project.link ? `<a href="${project.link}" target="_blank" rel="noopener noreferrer">${project.subtitle} <span aria-hidden="true">↗</span></a>` : project.subtitle}</p>
      <p>${project.description}</p><div class="project-impact"><strong>Contribution</strong> · ${project.impact}</div>
      <div class="tags">${project.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
    </div>
  </article>`).join('');

document.querySelector('#experience-list').innerHTML = experiences.map(item => `
  <article class="experience-item reveal"><div class="experience-date">${item.date}</div><div><h3>${item.title}</h3><div class="org">${item.org}</div><p>${item.description}</p><ul>${item.points.map(point => `<li>${point}</li>`).join('')}</ul></div></article>`).join('');

document.querySelector('#activity-list').innerHTML = activities.map(([name, date, detail]) => `
  <div class="activity-row"><span>${name}<small>${detail}</small></span><small>${date}</small></div>`).join('');

document.querySelector('#stack-list').innerHTML = stacks.map(stack => `<span>${stack}</span>`).join('');

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  }), { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
} else {
  document.querySelectorAll('.reveal').forEach(element => element.classList.add('visible'));
}
