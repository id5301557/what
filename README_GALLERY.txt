CIVIC SITE v4 — GALLERY FRAMEWORK

새 기능
-------
1. 메인 네비게이션에 GALLERY 추가
2. 각 캐릭터 상세페이지에 VISUAL RECORD / 대표 전신사진 추가
3. 대표 전신사진에서 각 캐릭터 개인 사진첩으로 이동
4. gallery.html = 전체 사진첩 폴더 화면
5. gallery/*.html = 캐릭터별 사진첩
6. 각 사진첩에 FILE 002~005 자리 미리 확보
7. 이안만 FIELD IMAGE RECORDS / SHELTER 스타일
8. 메인 애니메이션 경로 = images/moving_s.png

현재 대표 전신
-------------
miu.webp
nero.webp
lulu.webp
mary.png
popo.png
rio.png
ian.png

나중에 사진 추가
---------------
images/gallery/<character>/ 폴더에 사진을 넣고
gallery/<character>.html의 ADD PHOTO placeholder를 이미지 태그로 교체하면 됩니다.

예:
<figure class="photo">
  <img src="../images/gallery/miu/002.webp" alt="미우 일상 사진">
  <figcaption class="caption">FILE 002 / DAILY LIFE</figcaption>
</figure>


v5 / 증사 갤러리
----------------
- 각 캐릭터 상세페이지의 전신 VISUAL RECORD는 그대로 유지
- gallery.html 폴더 표지를 투명 증사로 변경
- 개인 gallery/<name>.html의 FILE 001을 증사로 변경
- 투명 증사의 배경은 CSS로 캐릭터별 색상 적용
- 이안은 SHELTER PERSONNEL 전용 어두운 배경

증사:
images/portraits/
  miu.webp
  nero.webp
  rio.webp
  popo.webp
  mary.webp
  lulu.webp
  ian.webp
