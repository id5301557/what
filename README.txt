CIVIC PHOTO ARCHIVE / v11 mobile natural ratio fix

PC
--
기존 v10 유지:
- FILE 001 약 1/3
- FILE 002 약 2/3
- 같은 높이 520px

모바일
------
- 강제 4:5 / 2047:950 aspect-ratio 제거
- FILE 001: 폭 72%, 중앙 정렬, 원본 이미지 비율 그대로
- FILE 002: 폭 100%, 원본 이미지 비율 그대로
- 이미지 자체가 카드 높이를 결정하므로 위/아래 빈 공간 없음
- FILE 002가 FILE 001보다 확실히 넓게 보임
- FILE 003~005 기존 레이아웃 유지

적용
----
ZIP 내부 gallery/*.html을 레포지토리 루트에 덮어쓰기.
