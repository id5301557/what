CIVIC mystery Ian + mobile gallery patch

변경
----
1. index.html
   - 이안 영역을 클릭 전에는 ???로 완전히 은폐
   - 이안 카드/이름/이미지는 공개 화면에서 숨김
   - hover 시 노이즈 + RGB 어긋남 느낌의 글리치
   - 클릭 시 기존 profiles/ian.html로 이동
   - 공개 화면의 SHELTER NO.435 직접 노출도 UNKNOWN 정보로 교체

2. gallery.html
   - 이안 폴더를 ??? / UNKNOWN RECORD로 은폐
   - hover 시 노이즈 + 글리치
   - 클릭 시 gallery/ian.html로 이동
   - 하단 폴더 수 표기도 6 REGISTERED / 1 UNKNOWN으로 변경

3. gallery/*.html
   - 7명 전부 모바일 증사 영역 높이 축소
   - 기존 full-body 기준 560px 최소높이 제거
   - 모바일에서 증사 위쪽 불필요한 여백 감소
   - PC 레이아웃은 유지

적용
----
ZIP을 레포지토리 루트에 덮어쓰기.
