# Frontend homework info

## view

### [더보기]

![전체 view](https://user-images.githubusercontent.com/81045794/183086108-9bac767f-af1d-4115-b464-fd35a73e2a3f.gif)

### [검색]

![검색](https://user-images.githubusercontent.com/81045794/183086523-9939c558-532c-422d-9bdf-6167a3d3eaa7.gif)

### [댓글보기]

![댓글보기](https://user-images.githubusercontent.com/81045794/183086959-64a4103c-9080-4f9d-b8f9-e75705d15dc5.gif)

---
## 사용한 스택 목록

- react
- JavaScript
- css
- github pages
---

## 프로젝트 실행 방법

- 본 repository를 clone합니다.
- codestates-fe-advanced-course 폴더 경로에 접근합니다.
- 터미널에 `npm install`을 입력해 필요한 라이브러리를 설치합니다.
- 이후 `npm start`를 통해 브라우저 상에서 구현된 섹션을 바로 확인할 수 있습니다.

---

## 구현한 기능 목록

1. 더보기 버튼을 클릭하여 게시글 10개씩 더보기 기능
2. 검색창을 통해 원하는 게시글 찾는 기능
3. 댓글을 클릭하여 댓글을 보는 기능
4. 뒤로가기를 클릭하여 메인페이지로 돌아가는 기능

---

## 구현 방법 혹은 구현하면서 어려웠던 점

1. 전체적인 데이터를 불러와 보여줄 떄 map함수를 통해 한 번에 데이터를 보여줄 수 있게 했습니다.

2. 댓글을 게시글마다 5개 씩 따로 보여줄 때 params를 통해 id별로 따로 데이터를 불러와 각 게시글의 댓글을 보여줄 수 있도록 했습니다.

## 추가 구현 사항에 대한 구현 방법과 설명

1. 게시글 title데이터를 filter해서 검색할 수 있는 창을 만들었습니다.

2. 더보기 기능은 데이터의 변경상태를 저장하여 기본적으로 로드되어 있는 10개의 게시글과 더보기버튼을 클릭 시 10개의 추가 데이터를 상태에 추가하여 유지합니다.

---
