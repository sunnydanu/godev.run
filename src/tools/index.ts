import { tool as base64FileConverter } from './base64-file-converter';
import { tool as base64StringConverter } from './base64-string-converter';
import { tool as basicAuthGenerator } from './basic-auth-generator';
import { tool as aiPromptSplitter } from './ai-prompt-splitter';
import { tool as argon2HashGenerator } from './argon2-hash-generator';
import { tool as imageResizer } from './image-resizer';
import { tool as dnsQueries } from './dns-queries';
import { tool as jsonEditor } from './json-editor';
import { tool as liveCode } from './live-code';
import { tool as multiLinkDownloader } from './multi-link-downloader';
import { tool as emailNormalizer } from './email-normalizer';
import { tool as energyComputer } from './energy-computer';
import { tool as peerShare } from './peer-share';
import { tool as macAddressConverter } from './mac-address-converter';
import { tool as jsUnobfuscator } from './js-unobfuscator';
import { tool as extractTextFromHtml } from './extract-text-from-html';
import { tool as colorWheel } from './color-wheel';
import { tool as codeHighlighter } from './code-highlighter';
import { tool as currencyConverter } from './currency-converter';
import { tool as imageConverter } from './image-converter';

import { tool as asciiTextDrawer } from './ascii-text-drawer';
import { tool as textToUnicode } from './text-to-unicode';
import { tool as gzipConverter } from './gzip-converter';
import { tool as ocrImage } from './ocr-image';
import { tool as ipGeoLocation } from './ip-geo-location';
import { tool as safelinkDecoder } from './safelink-decoder';
import { tool as removeExif } from './remove-exif';
import { tool as xmlToJson } from './xml-to-json';
import { tool as jsonToXml } from './json-to-xml';
import { tool as regexTester } from './regex-tester';
import { tool as regexMemo } from './regex-memo';
import { tool as markdownToHtml } from './markdown-to-html';
import { tool as propertiesToYaml } from './properties-to-yaml';
import { tool as apiTester } from './api-tester';
import { tool as jsonToSchema } from './json-to-schema';
import { tool as iso3166Searcher } from './iso-3166-searcher';
import { tool as pdfSignatureChecker } from './pdf-signature-checker';
import { tool as uuidConverter } from './uuid-converter';
import { tool as numeronymGenerator } from './numeronym-generator';
import { tool as macAddressGenerator } from './mac-address-generator';
import { tool as textToBinary } from './text-to-binary';
import { tool as ulidGenerator } from './ulid-generator';
import { tool as ibanValidatorAndParser } from './iban-validator-and-parser';
import { tool as stringObfuscator } from './string-obfuscator';
import { tool as textDiff } from './text-diff';
import { tool as emojiPicker } from './emoji-picker';
import { tool as passwordStrengthAnalyser } from './password-strength-analyser';
import { tool as yamlToToml } from './yaml-to-toml';
import { tool as jsonToToml } from './json-to-toml';
import { tool as tomlToYaml } from './toml-to-yaml';
import { tool as tomlToJson } from './toml-to-json';
import { tool as jsonToCsv } from './json-to-csv';
import { tool as cameraRecorder } from './camera-recorder';
import { tool as listConverter } from './list-converter';
import { tool as listComparer } from './list-comparer';
import { tool as phoneParserAndFormatter } from './phone-parser-and-formatter';
import { tool as jsonDiff } from './json-diff';
import { tool as ipv4RangeExpander } from './ipv4-range-expander';
import { tool as httpStatusCodes } from './http-status-codes';
import { tool as yamlToJson } from './yaml-to-json-converter';
import { tool as jsonToYaml } from './json-to-yaml-converter';
import { tool as ipv6UlaGenerator } from './ipv6-ula-generator';
import { tool as ipv4AddressConverter } from './ipv4-address-converter';
import { tool as benchmarkBuilder } from './benchmark-builder';
import { tool as userAgentParser } from './user-agent-parser';
import { tool as ipv4SubnetCalculator } from './ipv4-subnet-calculator';
import { tool as dockerRunToDockerComposeConverter } from './docker-run-to-docker-compose-converter';
import { tool as htmlWysiwygEditor } from './html-wysiwyg-editor';
import { tool as rsaKeyPairGenerator } from './rsa-key-pair-generator';
import { tool as textToNatoAlphabet } from './text-to-nato-alphabet';
import { tool as slugifyString } from './slugify-string';
import { tool as keycodeInfo } from './keycode-info';
import { tool as jsonMinify } from './json-minify';
import { tool as bcrypt } from './bcrypt';
import { tool as bip39 } from './bip39-generator';
import { tool as caseConverter } from './case-converter';
import { tool as chmodCalculator } from './chmod-calculator';
import { tool as chronometer } from './chronometer';
import { tool as colorConverter } from './color-converter';
import { tool as crontabGenerator } from './crontab-generator';
import { tool as dateTimeConverter } from './date-time-converter';
import { tool as deviceInformation } from './device-information';
import { tool as cypher } from './encryption';
import { tool as etaCalculator } from './eta-calculator';
import { tool as percentageCalculator } from './percentage-calculator';
import { tool as gitMemo } from './git-memo';
import { tool as hashText } from './hash-text';
import { tool as hmacGenerator } from './hmac-generator';
import { tool as htmlEntities } from './html-entities';
import { tool as baseConverter } from './integer-base-converter';
import { tool as jsonViewer } from './json-viewer';
import { tool as jwtParser } from './jwt-parser';
import { tool as loremIpsumGenerator } from './lorem-ipsum-generator';
import { tool as mathEvaluator } from './math-evaluator';
import { tool as metaTagGenerator } from './meta-tag-generator';
import { tool as mimeTypes } from './mime-types';
import { tool as otpCodeGeneratorAndValidator } from './otp-code-generator-and-validator';
import { tool as qrCodeGenerator } from './qr-code-generator';
import { tool as wifiQrCodeGenerator } from './wifi-qr-code-generator';
import { tool as randomPortGenerator } from './random-port-generator';
import { tool as romanNumeralConverter } from './roman-numeral-converter';
import { tool as sqlPrettify } from './sql-prettify';
import { tool as svgPlaceholderGenerator } from './svg-placeholder-generator';
import { tool as temperatureConverter } from './temperature-converter';
import { tool as textStatistics } from './text-statistics';
import { tool as tokenGenerator } from './token-generator';
import type { ToolCategory } from './tools.types';
import { tool as urlEncoder } from './url-encoder';
import { tool as urlParser } from './url-parser';
import { tool as uuidGenerator } from './uuid-generator';
import { tool as macAddressLookup } from './mac-address-lookup';
import { tool as xmlFormatter } from './xml-formatter';
import { tool as dockerComposeToDockerRunConverter } from './docker-compose-to-docker-run-converter';
import { tool as dockerComposeConverter } from './docker-compose-converter';
import { tool as imageExifReader } from './image-exif-reader';
import { tool as yamlViewer } from './yaml-viewer';
import { tool as ipRangeToCidr } from './ip-range-to-cidr';
import { tool as micTester } from './mic-tester';

export const toolsByCategory: ToolCategory[] = [
  {
    name: 'Crypto',
    components: [
      tokenGenerator,
      hashText,
      bcrypt,
      argon2HashGenerator,
      uuidGenerator,
      ulidGenerator,
      cypher,
      bip39,
      hmacGenerator,
      rsaKeyPairGenerator,
      passwordStrengthAnalyser,
      pdfSignatureChecker,
    ],
  },
  {
    name: 'Converter',
    components: [
      dateTimeConverter,
      baseConverter,
      romanNumeralConverter,
      base64StringConverter,
      base64FileConverter,
      colorConverter,
      caseConverter,
      textToNatoAlphabet,
      textToBinary,
      textToUnicode,
      yamlToJson,
      yamlToToml,
      jsonToYaml,
      jsonToToml,
      listConverter,
      listComparer,
      tomlToJson,
      tomlToYaml,
      xmlToJson,
      jsonToXml,
      currencyConverter,
      markdownToHtml,
      gzipConverter,
      uuidConverter,
      propertiesToYaml,
    ],
  },
  {
    name: 'Web',
    components: [
      liveCode,
      peerShare,
      urlEncoder,
      htmlEntities,
      urlParser,
      deviceInformation,
      basicAuthGenerator,
      metaTagGenerator,
      otpCodeGeneratorAndValidator,
      mimeTypes,
      jwtParser,
      keycodeInfo,
      slugifyString,
      htmlWysiwygEditor,
      userAgentParser,
      httpStatusCodes,
      jsonDiff,
      safelinkDecoder,
      apiTester,
      jsUnobfuscator,
      colorWheel,
      micTester,
    ],
  },
  {
    name: 'Images and videos',
    components: [

      qrCodeGenerator,

      wifiQrCodeGenerator,

      svgPlaceholderGenerator,

      cameraRecorder,
      imageResizer,
      ocrImage,
      imageExifReader,
      removeExif,
      imageConverter,
    ],
  },
  {
    name: 'Development',
    components: [
      jsonEditor,
      gitMemo,
      randomPortGenerator,
      crontabGenerator,
      jsonViewer,
      jsonMinify,
      jsonToCsv,
      sqlPrettify,
      chmodCalculator,
      dockerRunToDockerComposeConverter,
      dockerComposeToDockerRunConverter,
      dockerComposeConverter,
      xmlFormatter,
      yamlViewer,
      emailNormalizer,
      codeHighlighter,
      regexTester,
      regexMemo,
      extractTextFromHtml,
      jsonToSchema,
    ],
  },
  {
    name: 'Network',
    components: [

      ipv4SubnetCalculator,

      ipv4AddressConverter,

      ipv4RangeExpander,

      ipRangeToCidr,
      macAddressLookup,

      macAddressGenerator,
      macAddressConverter,

      ipv6UlaGenerator,
      dnsQueries,
      ipGeoLocation,

    ],
  },
  {
    name: 'Math',
    components: [mathEvaluator, etaCalculator, percentageCalculator],
  },
  {
    name: 'Measurement',
    components: [chronometer, temperatureConverter, benchmarkBuilder, energyComputer],
  },
  {
    name: 'Text',
    components: [
      loremIpsumGenerator,
      textStatistics,
      emojiPicker,
      stringObfuscator,
      textDiff,
      numeronymGenerator,
      asciiTextDrawer,
      aiPromptSplitter,
      iso3166Searcher,
    ],
  },
  {
    name: 'Data',
    components: [phoneParserAndFormatter, ibanValidatorAndParser, multiLinkDownloader],
  },
];

export const tools = toolsByCategory.flatMap(({ components }) => components);
export const toolsWithCategory = toolsByCategory.flatMap(({ components, name }) =>
  components.map(tool => ({ category: name, ...tool })),
);
