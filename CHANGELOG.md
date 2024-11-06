# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## Version 2024.11.06-4c6f110

### Features
- **husky**: hooks added :  - post-checkout, post-merge, post-rewrite, pre-commit, pre-push (7609644)
- **new tool**: DNS query (over HTTPS) (2df9373)
- **new tool**: JSON Editor (d20e932)
- **new tool**: Live code : Code Playground (f72eb4c)
-  add SVG as possible input format (cd04593)
- **i18n**: added Norwegian language (#1337) (aa8cba9)
- **new tool**: Code Highlighter (eb1beb8)
- **new tool**: Images Formats Converter (bac8c8d)
- **new tool**: Countries/ISO 3166 Searcher (98db1e7)
- **new tool**: Currency Converter (b241003)
- **new tool**: List Comparaison (f117a74)
-  use a better jsoneditor version + current selected node jsonpath (cf0d31f)
- **new tool**: Color Wheel (f9f9288)
- **new tool**: Exif Remover (ba1b5bc)
- **new tool**: curl converter (6d079f1)
- **new tool**: JSON To Schema (2c2b302)
- **TextAreaCopyable**: word wrap (42d1bf7)
- **TextAreaCopyable**: word wrap (43922ae)
- **MAC Address Converter**: add EUI-64 and IPv6 support (7437577)
- **New tool**: Image to CSS (c8dbec7)
- **New tool**: API Tester (c906f11)
- **new tool**: JS Unobfuscator (b5d3ed6)
- **new tool**: JSON Editor (a28ba6e)
- **new tool**: Text extractor form HTML (089853e)
-  add OCRized text statistics (7a1beb5)
-  refactor text stats to service (7f2bf11)
- **c-file-upload**: paste image (b7debec)
- **ui**: add c-monaco-editor to ui lib (65aad83)
- **Yaml Viewer**: add parsing validation (fd0a723)
- **new tool**: OCR Image (0d17698)
- **new tool**: GZIP String converter (3ad648d)
- **new tool**: IPv4/6 Range To CIDR (2fe369a)
- **new tool**: IP Geolocation (03f99d6)
- **new tool**: MAC Address Converter (4598eba)
- **new tool**: Docker Compose to Docker Run (a4f0522)
- **tool enhancement**: Docker Run to Docker Compose (39bc401)
- **ui**: add c-monaco-editor to ui lib (22e836b)
- **new tool**: Docker Compose Converter (1b17302)
- **new tool**: Image EXIF Reader (d7c207c)
-  :sparkles: Add tool uuid-converter (94eb67b)
- **aes**: specify the initialization vector in AES encryption (a4aad32)
- **new tool**: argon2 password hashing and verification (8bcca22)

### Bug fixes
- **tools**: removed buggy tools - image-to-css - curl-converter (4c6f110)
- **extract-text-from-html**: test case fixed (0f44e70)
- **ip-range-to-cdr**: eslint fix (3fa0d09)
- **Properties to YAML**: fix test case (5a724be)
- **aes**: missing error message (5744d6a)
- **husky**: fixed pre-push command (0afb64c)
- **husky**: updated test commands (ef2076d)
- **husky**: updated test commands (4713e96)
- **index**: title updated (d37b2c2)
- **argon2**: fixed broken test case (d3c850d)
- **yml**: yml intended (dd69e5e)
- **argon2**: import updated (d14f3e6)
- **lint**: lint issue fixed (08aa02c)
-  shiki building (ebc7956)
- **json-editor**: es-lint fixed (9aef12f)
- **json-editor**: fix ui (d71762d)
- **ci**: typecheck commented (209092f)
- **pnpm**: lock file updated (f40a621)
- **ci**: Update ci.yml (64bd09b)
- **pnpm-lock**: pnpm lock file updated (a3e87dc)
- **json-editor**: type added (ce3cc34)
- **e2e**: fixed broken test case (aa00aa9)
- **test case**: fixed broken test cases (8eab43b)
- **ui**: minor updates (3bb53a4)
- **ui**: footer broken link to version (9bc81cd)
- **peer-share**: fix file transfer (b494708)
- **icons,branding**: swap twitter to X (#1369) (ea8c4ed)
- **FavoriteButton**: pass tool path to favorite button (#1368) (ae13639)
- **readme**: refresh stale contributors graph (#1364) (c7b80fb)
- **yaml-to-json**: allow merge key to be parsed (#1359) (f836666)
-  intersection (393ac40)
-  changed UI (25dd3fe)
-  deps (157b861)
-  link to openstreetmap (a0b8cf0)
-  use ipinfo.io to allow https (a3e4ed9)
-  deps (6571963)
-  update queryParams (f747161)
-  build (e55d4fa)
-  eslint (5bc8da9)
-  last modif (45998fd)
-  final modifs (130183c)
-  nosonar in unit tests (c45a055)
- **Mac Address Converter**: update description (11206a5)
-  refactor with unit test (d14371c)
-  better ui, word wrap (ffc635e)
- **ui**: copy icon placement (7ebbddd)

### Refactoring
- **ui**: reference updated (3c67468)
- **ui**: reference updated (3b151a5)
- **ui**: reference updated (c39d162)
- **file-transfer**: cleaned ui (dbd0616)
-  :art: Lint checks (808f56e)

### Tests
- **eslint**: fixing correct title of tool text  from html (b2a4b96)

### Continuous integration
-  Remove unused uuid parser (6f64dc4)

### Chores
- **components**: minor update (be586f7)
- **pnpm**: lock updated (b73dd1b)
- **workflow**: github action updated (e12eb9a)
- **i18n**: lang file updated (424deca)
- **peer-share**: theme update (fdcb898)
-  update composerize (495b7eb)
-  fix strange corepack message (f76aaa2)
-  fix strange corepack message (239b7e0)
-  fix strange corepack message (42f39bf)
-  fix strange corepack message (068d79a)
-  update decomposerize (dbe2c38)
-  update composerize (e0de865)
- **github workflows**: ci and e2e tests: try updating to node 20 (e68f743)

### Other
-  Merge pull request #7 from sunnydanu/feat(new-tool)-microphone-tester (1e820a0)
-  Merge pull request #49 from sunnydanu/feat(new-tool)--countries-iso-3166-searcher (9cab523)
-  Merge pull request #48 from sunnydanu/feat(new-tool)--images-formats-converter (580f9af)
-  Merge pull request #54 from sunnydanu/feat(new-tool)--currency-converter (39e7a93)
-  Merge pull request #266 from sunnydanu/pr-1319-feat(new-tool)-code-highlighter (0b12ed9)
-  Merge pull request #63 from sunnydanu/feat(new-tool)--list-comparaison (79c0be5)
-  Merge pull request #81 from sunnydanu/feat(new-tool)--color-wheel (a39d39b)
-  Merge pull request #112 from sunnydanu/feat(new-tool)--curl-converter (c17a4b2)
-  Merge pull request #116 from sunnydanu/feat(new-tool)--json-to-schema (7f368c2)
-  Merge pull request #117 from sunnydanu/feat(new-tool)--image-to-css (babca45)
-  Merge pull request #139 from sunnydanu/feat(new-tool)--text-extractor-form-html (ecd3ff0)
-  Merge pull request #134 from sunnydanu/feat(new-tool)--js-unobfuscator (35bcebd)
-  Merge pull request #186 from sunnydanu/feat(yaml-viewer)--add-parsing-validation (087b153)
-  Merge pull request #97 from sunnydanu/feat(new-tool)--exif-remover (db4d1be)
-  Merge pull request #114 from sunnydanu/feat(new-tool)--api-tester (c716e0f)
-  Merge pull request #222 from sunnydanu/feat(new-tool)--ipv4-6-range-to-cidr (16c2d6d)
-  Merge pull request #224 from sunnydanu/feat(new-tool)--mac-address-converter (ff22510)
-  Merge pull request #225 from sunnydanu/feat(new-tool)--ip-geolocation (62d61cc)
-  Merge pull request #226 from sunnydanu/feat(new-tool)--image-exif-reader (035e2c3)
-  Merge pull request #227 from sunnydanu/feat(new-tool)--docker-compose-format-converter (c3a44c1)
-  Merge pull request #228 from sunnydanu/feat(new-tool)--docker-compose-to-docker-run (ee4df9e)
-  Merge pull request #230 from sunnydanu/feat(tool-enhancement)--docker-run-to-docker-compose-enhancements-and-fixes (d1cd610)
-  Merge pull request #231 from sunnydanu/feat(new-tool)--spring-boot-properties-to-yaml-converter (77f7c53)
-  Merge pull request #237 from sunnydanu/add-additional-git-commands-to-git-memo-content (a9727db)
-  Merge branch 'developing/2.0.0' into add-additional-git-commands-to-git-memo-content (7c45dd8)
-  Merge pull request #240 from sunnydanu/new-tool--uuid-converter (df9d486)
-  Merge branch 'developing/2.0.0' into add-additional-git-commands-to-git-memo-content (25380c0)
-  Merge pull request #256 from sunnydanu/feat(aes)--specify-the-initialization-vector-in-aes-encryption (c879124)
-  Merge pull request #201 from sunnydanu/feat(new-tool)--ocr-image (8c628b1)
-  Merge pull request #200 from sunnydanu/feat(new-tool)--gzip-string-converter (b57d406)
-  Merge pull request #5 from sunnydanu/feat(new-tool)-multi-link-downloader (3f79933)
-  Merge pull request #4 from sunnydanu/feat(json-to-csv)-add-example-default-value (60113e9)
-  Merge branch 'developing/2.0.0' into feat(json-to-csv)-add-example-default-value (1eb0b04)
-  Merge pull request #3 from sunnydanu/feat(new-tool)-ai-prompt-splitter (47d58c8)
-  Merge pull request #264 from sunnydanu/feature/add-husky-hooks (bab7d71)
-  Merge branch 'developing/2.0.0' into feat(emoji-picker)-implement-lazy-loading-to-improve-initial-load-search-performance-and-user-experience-updates (e140ab2)
-  Merge pull request #257 from sunnydanu/feat(new-tool)--argon2-password-hashing-and-verification (c95ac78)
-  feat(emoji-picker) add lazy loading to improve initial load performance (eb54661)
-  Merge pull request #261 from sunnydanu/update-fr-yml (fee025b)
-  Merge pull request #2 from sunnydanu/update-fr.yml (8261f29)
-  Merge branch 'developing/2.0.0' into update-fr.yml (e1da420)
-  Merge pull request #1 from sunnydanu/feat(new-tool)-image-resizer (8bae98d)
-  Merge pull request #258 from sunnydanu/feat(new-tool)--dns-query-(over-https) (c4c79fa)
-  Merge pull request #130 from sunnydanu/feat(new-tool)--json-editor (59fe5ad)
-  Merge branch 'main' into developing/2.0.0 (13ff2b4)
-  Merge pull request #259 from sunnydanu/feat(new-tool)--energy-expense-computer (258a500)
-  Merge branch 'developing/2.0.0' into feat(new-tool)--energy-expense-computer (13afb78)
-  Update README.md (28319e8)
-  Update FUNDING.yml (fd7d24f)
-  Update README.md (d28d556)
-  Merge branch 'main' into feat/dns-query (8c03359)
-  feat(new tool); Energy Expense Computer (d191b69)
-  chore(deps); removed obsolete packages (6c6bcc0)
-  package updated (800a820)
-  Merge remote-tracking branch 'origin/main' into feat/image-converter (e9a5541)
-  feat(new tool) multi-link-downloader (3c08533)
-  feat(new tool) image-resizer (7c7d980)
-  feat(new tool) AI prompt splitter (713d3e0)
-  feat(favorites) drag-and-drop favorites section (#1360) (0b1b98f)
-  Merge branch 'main' into main (269b5a3)
-  Update fr.yml (057f371)
-  feat(html-wysiwyg-editor) h3 fix (#1363) (1314973)
-  feat(json-to-csv) add example default value (e2498d6)
-  Merge remote-tracking branch 'origin/main' into feat/code-highlighter (87a6103)
-  The compilation toolset seems to have deleted some unused types and added the new for mic-tester (e8f1766)
-  register mic-tester component in the Web category (78b6224)
-  Create localizations for mic-tester component in de, en and pl (also initialize the pl localization, adding it to the dropdown selector at the top of the page) (cd96bf6)
-  Define and implement mic-tester tool (bd9afc7)
-  Merge remote-tracking branch 'origin/main' into feat/docker-run-to-docker-compose-enh (c6f9d46)
-  Merge branch 'main' into feat/currency-converter (468b015)
-  Merge branch 'main' into feat/list-comparer (1820f5f)
-  Merge branch 'main' into feat/json-editor (0566474)
-  Merge remote-tracking branch 'origin/main' into feat/json-editor (d289c9b)
-  Merge remote-tracking branch 'origin/main' into feat/docker-run-to-docker-compose-enh (3bd814f)
-  Merge branch 'main' into feat/color-wheel (b1cb1cc)
-  Merge remote-tracking branch 'origin/main' into feat/removeexif (476172a)
-  Merge remote-tracking branch 'origin/main' into feat/ip-geolocation (20e138c)
-  Merge remote-tracking branch 'origin/main' into feat/ocr-image (4cd72ae)
-  Merge branch 'main' into feat/mac-address-converter (12b0dc1)
-  Merge branch 'main' into feat/docker-run-to-docker-compose-enh (2dbed18)
-  Merge branch 'main' into feat/docker-compose-to-docker-run (a50e6a8)
-  Update dependencies (and composerize) (6efde9e)
-  Update dependencies (and decomposerize) (70c9cd6)
-  Fix build (654f7a8)
-  Merge branch 'main' into feat/ocr-image (12a8962)
-  Merge branch 'main' into feat/gzip (ecf0eac)
-  Merge branch 'main' into feat/mac-address-converter (00b85de)
-  Merge branch 'main' into feat/dockver-compose-converter (93d3ab6)
-  Merge branch 'main' into feat/image-exif-reader (5751977)
-  Merge branch 'main' into feat/docker-run-to-docker-compose-enh (9a28b89)
-  Merge branch 'main' into feat/docker-compose-to-docker-run (2c93029)
-  Add Spring Boot properties to YAML converter (e376a57)
-  Correct minor typo in git-memo.content.md (f7256fb)
-  Update git-memo.content.md (2d55c01)

### Merge branch 'developing/2.0.0' of https
-  //github.com/sunnydanu/godev.run into feat(new-tool)-microphone-tester Merge branch 'developing/2.0.0' of https://github.com/sunnydanu/godev.run into feat(new-tool)-microphone-tester (67adebc)
-  //github.com/sunnydanu/godev.run into feat(new-tool)-microphone-tester (266bd9c)
-  //github.com/sunnydanu/godev.run into feat(new-tool)--countries-iso-3166-searcher (5a30bd2)
-  //github.com/sunnydanu/godev.run into feat(new-tool)--images-formats-converter (f4cac03)
-  //github.com/sunnydanu/godev.run into feat(new-tool)--currency-converter (9025351)
-  //github.com/sunnydanu/godev.run into pr-1319-feat(new-tool)-code-highlighter (972ddcb)
-  //github.com/sunnydanu/godev.run into feat(new-tool)--currency-converter (05ad951)
-  //github.com/sunnydanu/godev.run into feat(new-tool)--list-comparaison (909dbaa)
-  //github.com/sunnydanu/godev.run into feat(new-tool)--color-wheel (acbc529)
-  //github.com/sunnydanu/godev.run into feat(new-tool)--color-wheel (e1c53a0)
-  //github.com/sunnydanu/godev.run into feat(new-tool)--curl-converter (18031b9)
-  //github.com/sunnydanu/godev.run into feat(new-tool)--json-to-schema (365384a)
-  //github.com/sunnydanu/godev.run into feat(new-tool)--image-to-css (2d16fa4)
-  //github.com/sunnydanu/godev.run into feat(new-tool)--json-to-schema (80f8a76)
-  //github.com/sunnydanu/godev.run into feat(new-tool)--text-extractor-form-html (6073537)
-  //github.com/sunnydanu/godev.run into feat(new-tool)--js-unobfuscator (aafbbaa)
-  //github.com/sunnydanu/godev.run into feat(yaml-viewer)--add-parsing-validation Merge branch 'developing/2.0.0' of https://github.com/sunnydanu/godev.run into feat(yaml-viewer)--add-parsing-validation (a9b6e82)
-  //github.com/sunnydanu/godev.run into feat(yaml-viewer)--add-parsing-validation (8912ea0)
-  //github.com/sunnydanu/godev.run into feat(new-tool)--exif-remover (37cadef)
-  //github.com/sunnydanu/godev.run into feat(new-tool)--exif-remover (fe567cd)
-  //github.com/sunnydanu/godev.run into feat(new-tool)--api-tester (b1027d8)
-  //github.com/sunnydanu/godev.run into feat(new-tool)--ipv4-6-range-to-cidr (86faf51)
-  //github.com/sunnydanu/godev.run into feat(new-tool)--ipv4-6-range-to-cidr (56d26d1)
-  //github.com/sunnydanu/godev.run into feat(new-tool)--mac-address-converter (0df3b72)
-  //github.com/sunnydanu/godev.run into feat(new-tool)--mac-address-converter (50f301f)
-  //github.com/sunnydanu/godev.run into feat(new-tool)--ip-geolocation (a986de3)
-  //github.com/sunnydanu/godev.run into feat(new-tool)--image-exif-reader (1f3644b)
-  //github.com/sunnydanu/godev.run into feat(new-tool)--docker-compose-format-converter (31de42c)
-  //github.com/sunnydanu/godev.run into feat(new-tool)--docker-compose-to-docker-run (db46bfd)
-  //github.com/sunnydanu/godev.run into feat(tool-enhancement)--docker-run-to-docker-compose-enhancements-and-fixes (a862158)
-  //github.com/sunnydanu/godev.run into feat(new-tool)--spring-boot-properties-to-yaml-converter (7fad082)
-  //github.com/sunnydanu/godev.run into feat(new-tool)--spring-boot-properties-to-yaml-converter (2de23c6)
-  //github.com/sunnydanu/godev.run into feat(new-tool)--spring-boot-properties-to-yaml-converter (6741c61)
-  //github.com/sunnydanu/godev.run into new-tool--uuid-converter (bf494ea)
-  //github.com/sunnydanu/godev.run into feat(aes)--specify-the-initialization-vector-in-aes-encryption Merge branch 'developing/2.0.0' of https://github.com/sunnydanu/godev.run into feat(aes)--specify-the-initialization-vector-in-aes-encryption (5fe8d19)
-  //github.com/sunnydanu/godev.run into feat(new-tool)--ocr-image (474cfca)
-  //github.com/sunnydanu/godev.run into feat(new-tool)--gzip-string-converter (3f0d056)
-  //github.com/sunnydanu/godev.run into feat(new-tool)--gzip-string-converter (b8bfc8e)
-  //github.com/sunnydanu/godev.run into feat(new-tool)-multi-link-downloader (bbbf50d)
-  //github.com/sunnydanu/godev.run into feat(new-tool)-multi-link-downloader Merge branch 'developing/2.0.0' of https://github.com/sunnydanu/godev.run into feat(new-tool)-multi-link-downloader. (b3e4ddc)
-  //github.com/sunnydanu/godev.run into feat(new-tool)-multi-link-downloader (6e60535)
-  //github.com/sunnydanu/godev.run into feat(new-tool)-ai-prompt-splitter (e93f780)
-  //github.com/sunnydanu/godev.run into feat(new-tool)-ai-prompt-splitter (4a70122)
-  //github.com/sunnydanu/godev.run into developing/2.0.0 Merge branch 'developing/2.0.0' of https://github.com/sunnydanu/godev.run into developing/2.0.0 (9ce5d3a)
-  //github.com/sunnydanu/godev.run into feat(aes)--specify-the-initialization-vector-in-aes-encryption (df703d7)
-  //github.com/sunnydanu/godev.run into feat(new-tool)--argon2-password-hashing-and-verification Merge branch 'developing/2.0.0' of https://github.com/sunnydanu/godev.run into feat(new-tool)--argon2-password-hashing-and-verification (235c4d9)
-  //github.com/sunnydanu/godev.run into feat(new-tool)--argon2-password-hashing-and-verification (1493f9a)
-  //github.com/sunnydanu/godev.run into feat(new-tool)-image-resizer (3a67181)
-  //github.com/sunnydanu/godev.run into feat(new-tool)--dns-query-(over-https) (a6e9dbf)
-  //github.com/sunnydanu/godev.run into feat(new-tool)--json-editor (809f129)
-  //github.com/sunnydanu/godev.run into feat(new-tool)--dns-query-(over-https) (352e811)

### This pr incorporates contributions from upstream [pr-#373](https
-  //github.com/CorentinTh/it-tools/pull/373) of [CorentinTh/it-tools](https://github.com/CorentinTh/it-tools) . All original commits and authorship are retained. Some adjustments may have been made for compatibility or bug fixes. (2631bda)
-  //github.com/CorentinTh/it-tools/pull/373) of [CorentinTh/it-tools](https://github.com/CorentinTh/it-tools) . All original commits and authorship are retained. Some adjustments may have been made for compatibility or bug fixes. (4f3255d)

### Merge branch 'feat(new-tool)--dns-query-(over-https)' of https
-  //github.com/sunnydanu/godev.run into feat(new-tool)--dns-query-(over-https) Merge branch 'feat(new-tool)--dns-query-(over-https)' of https://github.com/sunnydanu/godev.run into feat(new-tool)--dns-query-(over-https) (2e86a8f)

### Doc
- **new file**: CODEOWNERS file created (0c14078)
- **readme**: Update README.md (fc733fa)
- **readme**: Update README.md (9ffcae0)
- **readme**: logo updated (87a4bc6)
- **readme**: readme updated (dfbba55)
- **readme**: readme updated (8c83f8e)

### Doc(gitignore) 
-  gitignore updated (1246627)

###  chore
-  (json editor): theme updated (defabf3)

### Ui
- **peer-share**: fixed css (2a7e008)

### Refector
- **peer-share**: url updated (e8f491d)
- **file-transfer**: icon updated (9609c41)

### Feat(peershare) 
-  Reformed PeerShare to provide more p2p features - New Live Clipboard added (9535021)

### Godev.run
-  v2 - minor fix (e24a958)
-  v2 - lang file updated (17313c2)
-  v2 - min-h-screen removed (d55476a)
-  v2 - conflicting css fixed, file-transfer receiver page layout fixed (9c0580a)
-  v2 - fix p2p index and broken link (f37dcdf)
-  v2 - minor fix (e850f56)
-  v2 - renamed file-transfer to peer-share (0b0f99c)
-  v2 - lint fix (ccddda5)
-  v2 - file-transfer - minor fix (8627d53)
-  v2 - New Tool added - File Transfer - A client-side secure P2P file sharing using WebRTC (20a995a)
-  v2 - title updated (ef0820e)
-  2.0 : initial commit (441c52a)

### New feature added
-  file share (834baaf)

### Godevrun 
-  new feature added : file share (414c723)

### Godevrun
-  initial Commit (8afdaa6)

### Merge branch 'corentinth
-  main' into feat/json-to-csv-add-example (9b9594d)

### Mic-tester
-  fix types (05c51e5)
-  use toasting service from naive-ui, and also lint it all up (17a885f)
-  pull the media api stuff into a service. (c7d8ea4)

### Mic-test
-  fix DE translation (db63103)

### Merge branch 'feat/json-editor' of https
-  //github.com/sharevb/it-tools into feat/json-editor (b620a8d)

### Merge branch 'feat/mac-address-converter' of https
-  //github.com/sharevb/it-tools into feat/mac-address-converter (df049e2)

### Style
- **eslint**: fixing eslint errors and warnings (e672cda)

### Merge branch 'feat/ocr-image' of https
-  //github.com/sharevb/it-tools into HEAD (7e68607)

## Version 2024.10.22-7ca5933

### Features
- **new tool**: Regex Tester (and Cheatsheet) (#1030) (f5c4ab1)
- **new tool**: Markdown to HTML (#916) (87984e2)
- **new-tool**: add email normalizer (#1243) (318fb6e)
- **new tools**: JSON to XML and XML to JSON (#1231) (f1a5489)
- **lorem-ipsum**: add button to refresh text lorem-ipsum (#1213) (e1b4f9a)
- **base64**: Base64 enhancements (#905) (30144aa)

### Bug fixes
- **favorites**: store favorites regardless of languages (#1202) (7ca5933)
- **emoji-picker**: debounced search input (#1181) (76a19d2)
- **format-transformer**: set overflow for output area width (#787) (b430bae)
- **jwt-parser**: prevent UI overflow on small screen (#1095) (dd4b7e6)

### Refactoring
- **regex-tester**: better description (7251700)

### Chores
- **sponsors**: fern sponsor banners (#1314) (f962c41)
- **readme**: updated logos (#1294) (6709498)

### Documentation
- **author**: updated author links (#1316) (1c35ac3)

## Version 2024.05.13-a0bc346

### Features
- **i18n**: added German translation (#1038) (2c2fb21)
- **new tool**: Outlook Safelink Decoder (#911) (d3b32cc)
- **new tool**: ascii art generator (#886) (fe349ad)
- **i18n**: get locales on build (#880) (dc04615)
- **i18n**: added vi tools translations (#876) (079aa21)
- **i18n**: added zh tools translations (#874) (9c6b122)
- **i18n**: added missing locale files in tools (#863) (7f5fa00)
- **i18n**: added vietnamese language (#859) (1334bff)
- **i18n**: added spanish language (#854) (85b50bb)
- **i18n**: added portuguese language (#813) (c65ffb6)
- **i18n**: added ukrainian language (#827) (693f362)
- **new-tool**: yaml formater (#779) (fc06f01)
- **new-tool**: added unicode conversion utilities (#858) (c46207f)

### Bug fixes
- **language**: English language cleanup (#1036) (221ddfa)
- **url-encoder, validation**: typo in validation of url-encoder.vue #1024 (cb5b462)
- **integer base converter**: support bigint (#872) (9eac9cb)
- **bcrypt tool**: allow salt rounds up to 100 (#987) (23f82d9)

### Refactoring
- **lint**: removed extra semi (33e5294)
- **auto-imports**: regen auto imports (1242842)
- **home**: lightened tool cards (#882) (a07806c)
- **home**: removed n-grid to prevent layout shift (#881) (10e56b3)
- **i18n**: added locales per tool (#861) (95698cb)

### Chores
- **issues**: prevent empty issues (#1078) (a0bc346)
- **issues**: removed old issue templates (#1077) (5a7b0f9)
- **node**: upgraded node version in CI workflows (b59942a)
- **version**: release 2024.05.10-33e5294 (38d5687)
- **issues**: improved issues template (2852c30)
- **issues**: improved bug issue template (#1046) (a799234)

### Documentation
- **changelog**: update changelog for 2024.05.10-33e5294 (9dfd347)

## Version 2023.12.21-5ed3693

### Features

- **i18n**: improve chinese i18n (#757) (2e56641)
- **i18n**: add tooltip and favoriteButton i18n (#756) (a1037cf)
- **i18n**: add Chinese translation base (#718) (8f99eb6)
- **new tool**: pdf signature checker (#745) (4781920)
- **new tool**: numeronym generator (#729) (e07e2ae)

### Bug fixes

- **jwt-parser**: jwt claim array support (#799) (5ed3693)
- **camera-recorder**: stop camera on navigation (#782) (80e46c9)
- **doc**: updated create new tool command in readme (#762) (7a70dbb)
- **base64-file-converter**: fix downloading of index.html content without data preambula (#750) (043e4f0)
- **docker**: rollback armv7 in docker releases (#741) (205e360)
- **eta**: corrected example (#737) (821cbea)

### Refactoring

- **about, i18n**: improved i18n dx with markdown (#753) (bd3edcb)
- **token, i18n**: complete fr translation (#752) (de1ee69)
- **uuid generator**: uuid version picker (#751) (38586ca)
- **case converter**: no split on lowercase, uppercase and mocking case (#748) (ca43a25)
- **ui**: replaced legacy n-upload with c-file-upload (#747) (7fe47b3)
- **token**: added password in token generator keywords (#746) (16ffe6b)
- **bcrypt**: fix input label align (#721) (093ff31)

### Chores

- **deps**: switched from oui to oui-data for mac address lookup (#693) (0fe9a20)
- **deps**: update unocss monorepo to ^0.57.0 (#638) (2e396d8)
- **docker**: added armv7 plateform for docker releases (#722) (fe1de8c)

## Version 2023.11.02-7d94e11

### Features

- **i18n**: language selector (#710) (e86fd96)

### Bug fixes

- **dockerfile**: revert replacement of nginx image with non-privileged one (#716) (7d94e11)
- **encryption**: alert on decryption error (#711) (02b0d0d)

### Refactoring

- **math-evaluator**: improved description (e87f4b1)
- **math-evaluator**: improved search and UX (#713) (58de897)

## Version 2023.11.01-e164afb

### Features

- **command-palette**: clear prompt on palette close (#708) (d013696)
- **command-palette**: added about page in command palette (99b1eb9)
- **new tool**: random MAC address generator (#657) (cc3425d)
- **case-converter**: added mocking case (#705) (681f7bf)
- **date-converter**: added excel date time format (#704) (f5eb7a8)
- **i18n**: token generator (#688) (02e68d3)
- **i18n**: home page (#687) (00562ed)
- **i18n**: support for i18n in .ts files (#683) (ebb4ec4)
- **i18n**: tool card (#682) (84a4a64)
- **i18n**: about page (#680) (a2b53c2)
- **i18n**: 404 page (#679) (35563b8)
- **new tool**: text to ascii converter (#669) (b2ad4f7)
- **new tool**: ULID generator (#623) (5c4d775)
- **new tool**: add wifi qr code generator (#599) (0eedce6)
- **new tool**: iban validation and parser (#591) (3a63837)
- **new tool**: text diff and comparator (#588) (81bfe57)

### Bug fixes

- **deps**: fix issue on slugify (#593) (#673) (720201a)
- **deps**: update dependency monaco-editor to ^0.43.0 (#620) (e371ef7)
- **deps**: update dependency sql-formatter to v13 (#606) (c7d4562)

### Refactoring

- **ui**: better ui demo preview menu (#664) (015c673)
- **color-converter**: improved color-converter UX (#701) (abb8335)
- **docker**: improved docker config (#700) (020e9cb)
- **c-table**: added description on c-table for accessibility (b408df8)
- **ci**: reduced timeout in e2e (#666) (88b8818)
- **ui**: new c-table ui component (#665) (ee4c853)
- **ui**: removed n-page-header component in user-agent parser (#663) (cbf58fd)
- **ui**: removed n-p components in about page (#662) (a757a51)
- **ui**: switched naive tooltip components to custom ones (#661) (025f556)
- **spelling**: minor corrections to phrasing/spelling (#596) (8a30b6b)
- **i18n**: merge tools scoped locales with global ones (#612) (233d556)
- **c-key-value-list**: got rid of table for layout (#611) (7ab9204)
- **CI**: run e2e against built app and no longer vercel (#610) (18dd140)
- **bcrypt**: fix typo (#604) (e18bae1)

### Chores

- **deps**: clean unused dependencies (#709) (e164afb)
- **deps**: update docker/setup-qemu-action action to v3 (#627) (4365226)
- **deps**: update docker/setup-buildx-action action to v3 (#626) (57ecda1)
- **deps**: update docker/login-action action to v3 (#625) (d8d7a3b)
- **deps**: update docker/build-push-action action to v5 (#624) (d36b18f)
- **deps**: update dependency node to v18.18.2 (#674) (eea9f91)
- **deps**: update dependency node to v18.18.0 (#636) (2d2dffb)
- **deps**: update actions/checkout action to v4 (#613) (4972159)
- **deps**: update dependency unplugin-icons to ^0.17.0 (#609) (f035f48)
- **deps**: update dependency @intlify/unplugin-vue-i18n to ^0.13.0 (#597) (d1dff42)
- **deps**: update dependency @antfu/eslint-config to ^0.41.0 (#585) (a9cd91c)
- **deps**: update dependency typescript to ~5.2.0 (#587) (f3e14fc)

### Doc

- **readme**: added contributors list (#622) (557b304)
- **hosting**: added cloudron in the other hosting solutions section (#589) (06c3547)

## Version 2023.08.21-6f93cba

### Features

- **copy**: support legacy copy to clipboard for older browser (#581) (6f93cba)
- **new tool**: string obfuscator (#575) (c58d6e3)

### Bug fixes

- **deps**: update dependency sql-formatter to v12 (#520) (2bcb77a)

### Chores

- **deps**: switched to fucking typescript v5 (#501) (76b2761)
- **deps**: update dependency @antfu/eslint-config to ^0.40.0 (#552) (6ff9a01)
- **deps**: update dependency prettier to v3 (#564) (a2b9b15)
- **deps**: removed @typescript-eslint/parser (#563) (144f86e)
- **deps**: removed ts-pattern (#565) (0f1f659)

## Version 2023.08.16-9bd4ad4

### Features

- **Case Converter**: Add lowercase and uppercase (#534) (7b6232a)
- **new tool**: emoji picker (#551) (93f7cf0)
- **ui**: added c-select in the ui lib (#550) (dfa1ba8)
- **new-tool**: password strength analyzer (#502) (a9c7b89)
- **new-tool**: yaml to toml (e29b258)
- **new-tool**: json to toml (ea50a3f)
- **new-tool**: toml to yaml (746e5bd)
- **new-tool**: toml to json (c7d4f11)
- **command-palette**: random tool action (ec4c533)
- **config**: allow app to run in a subfolder via BASE_URL (#461) (6304595)
- **new-tool**: percentage calculator (#456) (b9406a4)
- **new-tool**: json to csv converter (69f0bd0)
- **new tool**: xml formatter (#457) (a6bbeae)
- **chmod-calculator**: added symbolic representation (#455) (f771e7a)
- **enhancement**: use system dark mode (#458) (cf7b1f0)
- **phone-parser**: searchable country code select (d2956b6)
- **new tool**: camera screenshot and recorder (34d8e5c)
- **base64-string-converter**: switch to encode and decode url safe base64 strings (#392) (0b20f1c)

### Bug fixes

- **deps**: update dependency uuid to v9 (#566) (5e12991)
- **deps**: update dependency mathjs to v11 (#519) (7924456)
- **deps**: update dependency @vueuse/router to v10 (#516) (ea0f27c)
- **copy**: prevent shorthand copy if source is present in useCopy (#559) (86e964a)
- **c-lib**: hide component library shortcut link in non-dev (#557) (56d74d0)
- **emoji picker**: fix copy button (#556) (e5d0ba7)
- **deps**: update dependency @vueuse/head to v1 (#515) (d12dd40)
- **deps**: update dependency country-code-lookup to ^0.1.0 (#493) (8c72e69)
- **deps**: update dependency @vueuse/head to ^0.9.0 (#492) (cec9dea)
- **i18n**: fallback for demo i18n (12d9e5d)
- **typos**: fixed more typos & uppercase JSON (#475) (9526ed8)
- **about**: typos and wording (#474) (7068610)
- **mime-types**: typos (#470) (c4cec9e)
- **sonar**: took down minor sonar warning (4cbd7ac)
- **readme**: typo (105b21b)
- **ipv4-range-expander**: calculate correct for ip addresses where the first octet is lower than 128 (#405) (8c92d56)
- **ipv4-converter**: removed readonly on input (7aed9c5)

### Refactoring

- **navbar**: consistent spacing in navbar buttons (#507) (30f88fc)
- **ui**: remove n-text (#506) (72c98a3)
- **ui**: replaced some n-input to c-input (#505) (05ea545)
- **json-viewer**: input monospace font (#485) (9125dcf)
- **search**: command palette design (#463) (bcb98b3)
- **c-input-text**: force usage of props with default (1e2a35b)
- **naming**: prevent auto import conflicts for git memo (45c2474)
- **imports**: removed unnecessary imports to vue (fe61f0f)
- **ui**: removed all n-space (4d2b037)
- **ui**: replaced some n-input with c-input-text (f7fc779)

### Chores

- **deps**: update dependency vitest to ^0.34.0 (#562) (9bd4ad4)
- **deps**: update dependency node to v18.17.1 (#560) (65a9474)
- **deps**: update dependency unocss to ^0.55.0 (#561) (85cc7a8)
- **deps**: update dependency @unocss/eslint-config to ^0.55.0 (#553) (4268e25)
- **deps**: update dependency @intlify/unplugin-vue-i18n to ^0.12.0 (#526) (d1c8880)
- **deps**: update docker/login-action action to v2 (#512) (99bc84c)
- **deps**: update dependency jsdom to v22 (#499) (cd5a503)
- **deps**: update dependency @vitejs/plugin-vue-jsx to v3 (#497) (1a60236)
- **deps**: update dependency @vitejs/plugin-vue to v4 (#496) (a249421)
- **deps**: update dependency vite-plugin-pwa to ^0.16.0 (#488) (6498c9b)
- **deps**: update dependency vite to v4 (#503) (f40d7ec)
- **ci**: e2e against vercel deployement (#518) (2e28c50)
- **e2e**: execute e2e against built app (#511) (cf382b5)
- **deps**: update github/codeql-action action to v2 (#513) (0152583)
- **deps**: update node.js to v18 (#514) (38cb61d)
- **deps**: switched from vite-plugin-md to vite-plugin-vue-markdown (#510) (354aed6)
- **deps**: update dependency workbox-window to v7 (#509) (6b8682f)
- **deps**: update dependency vite-svg-loader to v4 (#508) (9e8349d)
- **deps**: update dependency typescript to ~4.9.0 (#481) (f440507)
- **deps**: update dependency vue-tsc to ^0.40.0 (#490) (b0d9a3e)
- **deps**: updated unplugin-auto-import (#504) (5c3bebf)
- **deps**: removed start-server-and-test dependency (8df7cd0)
- **deps**: update dependency c8 to v8 (#498) (6bda2ca)
- **deps**: update dependency @types/jsdom to v21 (#495) (994a1c3)
- **deps**: update node.js to v16.20.1 (#491) (05edaf4)
- **deps**: update dependency vitest to ^0.32.0 (#489) (49eacea)
- **deps**: update actions/checkout action to v3 (#494) (3f7d469)
- **deps**: update dependency unplugin-vue-components to ^0.25.0 (#484) (5f21908)
- **deps**: update dependency unplugin-auto-import to ^0.16.0 (#483) (6cb0845)
- **deps**: update dependency unocss to ^0.53.0 (#482) (38710dc)
- **deps**: update dependency @unocss/eslint-config to ^0.53.0 (#478) (282cfc4)
- **deps**: added renovate.json (#477) (363c2e4)
- **i18n**: tool scoped locales (#471) (1b038c7)
- **wysiwyg-editor**: update tiptap dependencies (732da08)
- **i18n**: setup i18n plugin config (ebfb872)
- **config**: netlify deployment support (#443) (93799af)
- **ci**: shard e2e tests (962a6d6)
- **lint**: switched to a better lint config (33c9b66)

### Refacor

- **transformers**: use monospace font for JSON and SQL text areas (#476) (ba4876d)

### Documentation

- **ide**: updated vscode extensions settings (#472) (847323c)

### Chors

- **deps**: updated vueuse dependency version (8515c24)

## Version 2023.05.14-77f2efc

### Features

- **list-converter**: a small converter who deals with column based data and do some stuff with it (#387) (83a7b3b)
- **new tool**: phone parser and normalizer (ce3150c)

### Bug fixes

- **phone-parser**: use default country code (a43c546)
- **home**: prevent weird blue border on card (3f6c8f0)

### Refactoring

- **ui**: replaced some n-input with c-input-text (77f2efc)

### Chores

- **issues**: updated new tool request issue template (edae4c6)

### Ui-lib

- **new-component**: added text input component in the c-lib (aad8d84)
- **button**: size variants (401f13f)

## Version 2023.04.23-92bd835

### Features

- **ui-lib**: demo pages for c-lib components (92bd835)
- **new-tool**: diff of two json objects (362f2fa)
- **ipv4-range-expander**: expands a given IPv4 start and end address to a valid IPv4 subnet (#366) (df989e2)
- **date converter**: auto focus main input (6d22025)

### Bug fixes

- **ts**: cleaned legacy typechecking warning (e88c1d5)
- **mac-address-lookup**: added copy handler on button click (c311e38)

### Refactoring

- **ui-lib**: prevent c-button to shrink (61ece23)
- **ui**: replaced naive ui cards with custom ones (f080933)
- **clean**: removed unused lodash import (bb32513)
- **clean**: removed useless br tags (74073f5)
- **ui**: getting ride of naive ui buttons (c45bce3)

## Version 2023.04.14-dbad773

### Features

- **new-tool**: http status codes (8355bd2)

### Refactoring

- **uuid-generator**: prevent NaN in quantity (6fb4994)

### Chores

- **release**: create a github release on new version (dbad773)
- **version**: reset CHANGELOG content to support new format (85cb0ff)

## Version 2023.04.14-f9b77b7

### Features

- **new-tool**: http status codes (8355bd2)

### Refactoring

- **uuid-generator**: prevent NaN in quantity (6fb4994)

### Chores

- **release**: create a github release on new version (f9b77b7)
- **version**: reset CHANGELOG content to support new format (85cb0ff)

## Version 2023.04.14-2f0d239

### Features

- **new-tool**: http status codes (8355bd2)

### Refactoring

- **uuid-generator**: prevent NaN in quantity (6fb4994)

### Chores

- **release**: create a github release on new version (2f0d239)
- **version**: reset CHANGELOG content to support new format (85cb0ff)

## Version 2023.04.14-474cae4

### Features

- **new-tool**: http status codes (8355bd2)

### Refactoring

- **uuid-generator**: prevent NaN in quantity (6fb4994)

### Chores

- **release**: create a github release on new version (474cae4)
- **version**: reset CHANGELOG content to support new format (85cb0ff)

## Version v2023.4.13-dce9ff9

_Diff not available_
