CIVIC SITE v2 — RECORD PAGES

추가된 기능
-----------
- WORLD 섹션 → world.html 상세 세계관 페이지
- 6명 시민 네임카드 → profiles/*.html 개인 상세 기록 페이지
- 이안 카드 → profiles/ian.html 셸터 전용 상세 기록 페이지
- 상세페이지는 생활기록부/개인기록부 스타일
- 성적/생물학적 특징은 RESTRICTED 접이식 영역으로 숨김
- 세계관의 원형인간·진실 설정도 RESTRICTED ARCHIVE로 접어둠

GitHub 구조
-----------
index.html
style.css
script.js
world.html
profiles/
  popo.html
  miu.html
  nero.html
  rio.html
  mary.html
  lulu.html
  ian.html
images/
  moving.png
  cards/*.png

moving.png은 루트보다 images/moving.png 권장.


v3 변경
-------
- 상세페이지에서 speech / caution / extra / route 성격의 표시 항목 삭제
  (발화 특성 / 해석 주의 / 수인 사회 인식 / 등장 동선)
- 사용자 제공 기존 관계만 RELATION RECORD로 추가
- 이안은 명시된 기존 관계가 없어서 관계 섹션 미표시
