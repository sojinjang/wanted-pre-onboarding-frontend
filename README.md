# wanted pre-onboarding frontend
2023 wanted 프리온보딩 프론트엔드 인턴십 사전과제 ([🔗 과제 가이드 링크](https://github.com/walking-sunset/selection-task))

## [**🔗 배포 링크 이동**](https://sojinjang.github.io/wanted-pre-onboarding-frontend/)
<img src="https://user-images.githubusercontent.com/111125577/218963015-93531672-81a9-4e43-b7a1-51700f6bad43.gif" width="600" />

## 🤹‍♀️ 기능 목록
### 1. SIGNUP / SIGNIN

- `/signup` 경로에 회원가입 기능을 개발해주세요
- `/signin` 경로에 로그인 기능을 개발해주세요

  - 페이지 안에 이메일 input, 비밀번호 input, 제출 button이 포함된 형태로 구성해주세요
  
✅ Assignment 1

- 회원가입과 로그인 페이지에 이메일과 비밀번호의 유효성 검사기능을 구현해주세요

  - 이메일 조건: `@` 포함
  - 비밀번호 조건: 8자 이상
  - 이메일과 비밀번호의 유효성 검사 조건은 별도의 추가 조건 부여 없이 위의 조건대로만 진행해주세요ㅗ
- 입력된 이메일과 비밀번호가 유효성 검사를 통과하지 못한다면 button에 `disabled` 속성을 부여해주세요

✅ Assignment 2

- 회원가입 페이지에서 버튼을 클릭 시 회원가입을 진행하고 회원가입이 정상적으로 완료되었을 시 `/signin` 경로로 이동해주세요

✅ Assignment 3

- 로그인 페이지에서 버튼을 클릭 시, 로그인을 진행하고 로그인이 정상적으로 완료되었을 시 `/todo` 경로로 이동해주세요

  - 로그인 API는 로그인이 성공했을 시 Response Body에 JWT를 포함해서 응답합니다.
  - 응답받은 JWT는 로컬 스토리지에 저장해주세요

✅ Assignment 4

- 로그인 여부에 따른 리다이렉트 처리를 구현해주세요

  - 로컬 스토리지에 토큰이 있는 상태로 `/signin` 또는 `/signup` 페이지에 접속한다면 `/todo` 경로로 리다이렉트 시켜주세요
  - 로컬 스토리지에 토큰이 없는 상태로 `/todo`페이지에 접속한다면 `/signin` 경로로 리다이렉트 시켜주세요

---

### 2. TODO LIST

✅ Assignment 5

- `/todo`경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 해주세요
- 목록에서는 TODO의 내용과 완료 여부가 표시되어야 합니다.
- TODO의 완료 여부는 `<input type="checkbox" />`를 통해 표현해주세요
- TODO는 `<li>` tag를 이용해 감싸주세요

✅ Assignment 6

- 리스트 페이지에 새로운 TODO를 입력할 수 있는 input과 추가 button을 만들어주세요
- 추가 button을 클릭하면 입력 input의 내용이 새로운 TODO로 추가되도록 해주세요

✅ Assignment 7

- TODO의 체크박스를 통해 완료 여부를 수정할 수 있도록 해주세요.

✅ Assignment 8

- TODO 우측에 수정버튼과 삭제 버튼을 만들어주세요


✅ Assignment 9

- 투두 리스트의 삭제 기능을 구현해주세요

  - 투두 리스트의 TODO 우측의 삭제버튼을 누르면 해당 아이템이 삭제되도록 해주세요

✅ Assignment 10

- 투두 리스트의 수정 기능을 구현해주세요

  - TODO 우측의 수정 버튼을 누르면 수정모드가 활성화 되도록 해주세요
  - 수정모드에서는 TODO의 내용을 변경할 수 있어야 합니다.
  - 수정모드에서는 TODO의 내용이 input창 안에 입력된 형태로 변경해주세요
  - 수정모드에서는 TODO의 우측에 제출버튼과 취소버튼이 표시되게 해주세요
  - 제출버튼을 누르면 수정한 내용을 제출해서 내용이 업데이트 될 수 있도록 해주세요
  - 취소버튼을 누르면 수정한 내용을 초기화 하고, 수정모드를 비활성화 해주세요
  
  
## 🏃 실행 방법

1. 레포지토리 클론

   ```bash
   git clone "https://github.com/sojinjang/wanted-pre-onboarding-frontend"
   ```

2. module 설치

   ```bash
   npm install
   ```

4. `.env` 설정

    ```bash
    REACT_APP_SERVER_URL=<백 서버 url>
    // https://pre-onboarding-selection-task.shop
    // 또는 http://localhost:8000 (https://github.com/walking-sunset/selection-task 로컬 서버 구동 시) 
    ```
    
5. 앱 실행
   ```
   npm start
   ```
