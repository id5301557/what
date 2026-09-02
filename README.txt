CIVIC SITE v1

구조
----
index.html
style.css
script.js
images/
  moving.png
  cards/
    miu.png
    mary.png
    lulu.png
    rio.png
    popo.png
    nero.png
    ian.png

GitHub에 올릴 때
---------------
1. moving.png은 루트가 아니라 images/moving.png 위치를 권장합니다.
2. 현재 레포지토리의 기존 moving 파일을 images 폴더로 옮기거나,
   이 패키지의 images/moving.png을 그대로 사용하면 됩니다.
3. index.html / style.css / script.js는 레포지토리 루트에 둡니다.
4. GitHub Desktop에서 Commit → Push origin.
5. Settings → Pages → Deploy from a branch → main / (root).

카드 원본 확대
-------------
각 네임카드를 클릭하면 dialog 창으로 크게 열립니다.

수정하기 좋은 곳
---------------
- 메인 문구: index.html의 HERO 부분
- 세계관 소개: index.html의 WORLD 부분
- 색상: style.css 맨 위 :root
- 카드 배열 순서: index.html의 .card-grid 내부
