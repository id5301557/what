CIVIC / ARCHIVE dual-site patch
=================================

이 패치는 사용자가 방금 제공한 최신 파일 3개만 기준으로 제작됨:
- index.zip
- gallery(2).zip
- profiles(1).zip

구조
----
/
├─ civic/      : 세이프티판
├─ archive/    : 현재 언세이프티판 보존
├─ images/     : 기존 레포의 이미지 폴더를 양쪽이 공동사용 (이 ZIP에는 미포함)
└─ route.html  : 선택사항. 두 경로를 확인하는 작은 진입 페이지

CIVIC
-----
- 최신 디자인, index, world, gallery, profile, 취미 등 유지
- 각 캐릭터 상세페이지의
  'RESTRICTED / PRIVATE BIOLOGICAL RECORD'
  블록만 제거
- 세계관의 유전/생리/원형인간 미스터리 등 비성적 설정은 유지

ARCHIVE
-------
- 사용자가 준 최신 프로필 내용을 그대로 보존
- PRIVATE BIOLOGICAL RECORD도 유지

공용 이미지
-----------
기존 repo root의 images/를 이동하거나 복사할 필요 없음.
새 HTML들의 이미지 경로는 자동으로:
- civic/index.html -> ../images/...
- civic/profiles/*.html -> ../../images/...
- archive도 동일
형태로 수정됨.

예상 GitHub Pages 주소
----------------------
기존 repo가 https://<user>.github.io/what/ 라면:
- Safety : https://<user>.github.io/what/civic/
- Unsafe : https://<user>.github.io/what/archive/
- 선택 진입페이지 : https://<user>.github.io/what/route.html

적용
----
1. 이 ZIP의 civic/, archive/, route.html을 repo 루트에 복사
2. 기존 images/ 폴더는 그대로 둠
3. GitHub Desktop에서 Commit -> Push origin

중요
----
기존 루트 index.html은 이 패치가 덮어쓰지 않음.
따라서 현재 공개 URL을 그대로 유지하면서 새 경로를 먼저 테스트할 수 있음.
테스트 후 원하면 루트 index.html을 CIVIC 진입용으로 바꾸는 것도 가능.
