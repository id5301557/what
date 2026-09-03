CIVIC PHOTO ARCHIVE / v10 responsive balance

PC (761px 이상)
---------------
- FILE 001 증사: 약 1/3 폭
- FILE 002 직업/학교 사진: 약 2/3 폭
- 두 카드 높이 520px 유지
- FILE 002는 cover로 프레임을 꽉 채움

모바일 (760px 이하)
-------------------
- FILE 001 증사: 화면 폭 82%, 중앙 정렬
- FILE 001: 4:5 비율로 표시
- FILE 002: 화면 폭 100%
- FILE 002: 실제 업로드 이미지와 유사한 2047:950 가로 비율 사용
- 기존 min-height 때문에 생기던 FILE 002 위쪽 공백 제거
- FILE 003~005는 기존처럼 전체 폭

적용
----
ZIP을 레포지토리 루트에 덮어쓰기.
gallery/*.html만 수정됩니다.
