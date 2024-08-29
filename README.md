# Nice-Auth-Utils

<p align="center">
  <a href="https://www.npmjs.com/package/nice-auth-utils"><img src="https://img.shields.io/npm/v/nice-auth-utils.svg" alt="npm package"></a>
  <!-- <img src="https://img.shields.io/github/package-json/v/kjwhub/nice-auth-utils" alt="version"> -->
  <img src="https://img.shields.io/bundlephobia/min/nice-auth-utils" alt="size">
</p>

## Introduce

`nice-auth-utils`는 `나이스 본인인증 팝업` 을 간편하게 사용하기 위해서 작성 된 라이브러리 입니다.

본 라이브러리는 `Typescript` 를 사용하여 작성 되었습니다.

`nice-auth-utils`는 [나이스 아이디 (휴대폰 본인확인)](https://www.niceid.co.kr/prod_mobile.nc)를 기반으로 작성 되었습니다.

## Usage

### install

#### npm

```zsh
npm i nice-auth-utils
```

#### Pnpm

```zsh
pnpm i nice-auth-utils
```

### use

```html
<button id="auth-button">본인인증 확인</button>

<script type="module">
  import { useNiceAuth } from "nice-auth-utils";

  const { goNice } = useNiceAuth();

  const button = document.getElementById("auth-button");
  button.addEventListener("click", () => {
    const encodeData = `{encodeData you issued from niceid api}`;
    goNice({ encodeData: encodeData });
  });
</script>
```
