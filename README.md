# Webtoon App Project
배포 링크 : https://2realzoo.github.io/webtoon/

## 📝 프로젝트 소개


실제 프로젝트에 임하기 전, 한 달간 웹툰 사이트를 주제로 만든 웹앱입니다.


## ⏰ 개발 기간


2023.01.19 ~ 2023.02.09


## 👪 멤버 구성


- [이진주](https://github.com/2realzoo) : 요일 별 필터, 장르별 필터, 로그인 및 마이페이지, redux 리펙토링, 웹툰 검색 기능, custom hook 이용한 리펙토링, 웹툰 데이터 제작
- [이시온](https://github.com/sienna0715) : 웹툰 리스트 제작, 반응형 및 CSS 구현, 다크모드 구현, 웹툰 데이터 제작, 페이지 footer 제작
- [한현호](https://github.com/hyunhoh) : 웹툰 검색 기능, 웹툰 데이터 제작, 페이지 header 제작, README 총괄 리더


## ⚙ 개발 환경
- React
- Redux
- react-icons
- PostCSS
- Git


## 📌 주요 기능
- **웹툰 요일 별 정렬 및 장르 필터 기능**
    - 사이트 접속 시 현재 요일에 해당하는 웹툰 데이터 렌더링
    - redux 전역 상태로 활성화된 요일 관리, CSS로 현재 요일 강조
- **검색 기능**
    - redux 전역 상태로 검색 데이터 관리
- **로그인 및 마이페이지**
    - 정적 데이터 사용하여 간단한 로그인 기능 구현
    - local storage 이용하여 로그인 상태에 따른 페이지 관리
- **웹툰 리스트**
    - redux 전역 상태로 데이터 매핑하여 렌더링
- **다크모드**
    - createContext, useContext HOOK을 사용하여, 전역 상태로 다크모드/라이트모드를 구현
    - root(html)를 통해 전역 CSS 변수 색상과 클래스 dark가 생겼을 때의 색상을 따로 지정


## 🗣️ 소감
**이진주**
> 한창 공부에 지쳐갈 때쯤 첫 팀 프로젝트를 시작했다. 생각 없이 코딩 공부를 하다 보니 내가 가야 할 방향이 어디인지, 무엇 때문에 코딩을 시작했는지 잊어갔다. 정말 진부하지만, 팀으로 함께 하나의 프로젝트를 만들면서 내가 왜 코딩을 하고 싶었는지 다시 깨달을 수 있었다. 처음엔 막막하고 형태조차 잡히지 않았지만 프로젝트를 만들며 우리의 웹앱에 애정이 생겼고 이것저것 넣어야 할 기능들이 보이기 시작했다. 그 때문에 팀원분들을 괴롭힌 것 같아 죄송할 따름이다. 그래도 나의 욕심에 귀 기울여주시고 마냥 좋다고만 하는 게 아닌 진심으로 대화를 할 수 있어서 행복했다😁 마지막 쯤에는 도자기를 빚는 기분으로 찬찬히 프로젝트를 빚었다. 깃 에러로 고생했던 때가 엊그제 같은데... 
다들 잘 해내셨고 함께해서 감사했습니다! 두 분의 본 프로젝트가 기대됩니다😚

💬 현호: 우리 팀의 선장!! 저는 진주님만 믿고 있었습니다! 선장답게 프로젝트를 뚝딱뚝딱 너무나 잘 해내셨습니다.

💬 시온: 믿습니다. 진주교! 일을 안 하고 있으면, 매번 할 일을 주시는 진주님께 깊은 감명을 받았습니다. 어떻게 이렇게 열정적이고, 아이디어 뱅크지?! 하면서요... 심지어 잘 해... 그래서 전 항상 믿고 따름니다. 리더십 최강👍

**이시온**
> 복습 스터디와 프로젝트를 고민하다가 '일단 부딪혀보자!'라는 마인드로 시작했지만, 사실 처음하는 팀 프로젝트라서 누가 되지 않을까 걱정을 많이 했었다!!! 그래도 이렇게 대략 한 달이라는 시간이 훌쩍 지나서 되돌아보니 열심히 했다고 생각한다! 무엇보다 팀원분들의 놀라운 실력에 감탄하며, 많은 것들을 배울 수 있어서 너무 좋았다.
실제로 프로젝트를 해보니 지금까지 공부한 기능들이 더 잘 와닿았고, 더 많은 걸 꿈꾸게 되었다. 정말 프로젝트를 한 건 후회없는 선택인 것 같다:-D
시작부터 많은 굴곡이 있었는데(git...) 팀원들 덕분에 웃으면서 잘 지나온 것 같다! 정말 너무너무 좋은 경험이라 훗날 시간이 된다면, 리팩토링 해보는 날을 꿈꿔본다! 정말 잊지못할 첫 팀 프로젝트 였습니다.💜
이상 이 팀의 디자이너였습니다...😂

💬 현호: 우리 팀의 디자이너이자 질문봇!! 항상 좋은 질문해주셔서 덕분에 한 번 더 생각해 볼 수 있었습니다.

💬 진주: 외유내강 시온님! 해야할 땐 누구보다 단호하신 시온님... 매번 마지막까지 남으시고! 그녀가 왔다간 자리엔 풀리퀘만이 남아있었다...

**한현호**
> 처음하는 팀 프로젝트로 git를 협업도구로 다루어 봤는데 초반에 꽤 애를 먹었다. 작업을 진행하면서 git를 다루는 큰 틀을 이해할 수 있었다. 당연히 git을 완벽하게 이해하진 못했지만 큰 흐름을 파악했고 에러를 검색하는 방법 정도는 익힐 수 있었다. 진주님과 시온님 덕분에 만족할 만한 결과가 나온 것 같다. 두 분이 정말 고생을 많이 하셨다. 감사할 따름이다. 협업의 재미를 느낄 수 있었고 밑바닥부터 직접 작업해보니 복습 효과도 뛰어났던것 같다. 처음에는 어떻게 해야되나 살짝 막막했지만 두 분이 방향을 잘 잡고 차근차근 하나하나 진행하셔서 따라가기만해서 수월했습니다. 두 분 감사합니다.

💬 시온: 이 사람 찐 개발자;;;; 감성 어디감? 우리의 시간은...?! 매변 에러 해결해주셔서 감사합니다! 나의 정신적 지주✨ 엄마... 오디 갔오..?

💬 진주: 이 분 에러 해결사... 턱 막히는 부분에 항상 현호님을 불렀습니다. 우리 팀의 엄마? 항상 현호님 부르면 급 허무하게 에러 해결됨
