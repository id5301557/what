CIVIC PHOTO ARCHIVE / v9 desktop image fill fix

PC 변경
-------
FILE 001:
- 기존처럼 프레임은 520px
- 증명사진 이미지를 세로 100%로 확대
- 정사각형 원본의 남는 좌우 부분만 프레임에서 자연스럽게 크롭
- 위쪽의 큰 빈 공간 제거

FILE 002:
- 프레임 520px 유지
- object-fit: cover 적용
- 위/아래의 얇은 레터박스 여백 제거

결과
----
FILE 001과 FILE 002의 실제 사진 영역이 같은 세로 높이로 보임.

모바일
------
기존 compact 레이아웃 유지, 변경 없음.

적용
----
ZIP을 레포지토리 루트에 덮어쓰기.
gallery/*.html만 수정됩니다.
