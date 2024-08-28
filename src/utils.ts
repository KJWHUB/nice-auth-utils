const keys = {
  NICE_AUTH_RESULT: "NICE_AUTH_RESULT",
} as const;

const option =
  "width=500, height=550, top=100, left=100, fullscreen=no, menubar=no, status=no, toolbar=no, titlebar=yes, location=no, scrollbar=no";

const defaultNiceWindowOptions = {
  openOptions: ["", "niceWindow", option],
  document: {
    write: "<html><head><title>CheckPlus</title></head><body></body></html>",
    close: true,
  },
} as const;

function getQueryParam(param: string) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

/**
 * Nice 본인인증 창을 오픈 합니다.
 */
export const setupNiceWindow = () => {
  const newWindow = window.open(...defaultNiceWindowOptions.openOptions);

  if (!newWindow) {
    alert("팝업 창이 차단되었습니다. 팝업 창을 허용해주세요.");
    throw new Error("팝업 창이 차단되었습니다. 팝업 창을 허용해주세요.");
  }

  newWindow.document.write(defaultNiceWindowOptions.document.write);
  newWindow.document.close();

  return newWindow;
};

/**
 * Nice 본인인증 Form 생성
 */
export const createNiceForm = (newWindow: Window, encodeData: string) => {
  const form = newWindow.document.createElement("form");
  form.setAttribute("id", "niceForm");
  form.setAttribute("method", "post");
  form.setAttribute(
    "action",
    "https://nice.checkplus.co.kr/CheckPlusSafeModel/checkplus.cb"
  );

  const inputM = newWindow.document.createElement("input");
  inputM.setAttribute("type", "hidden");
  inputM.setAttribute("name", "m");
  inputM.setAttribute("value", "checkplusService");

  const inputEncodeData = newWindow.document.createElement("input");
  inputEncodeData.setAttribute("type", "hidden");
  inputEncodeData.setAttribute("name", "EncodeData");
  inputEncodeData.setAttribute("value", encodeData);

  form.appendChild(inputM);
  form.appendChild(inputEncodeData);
  newWindow.document.body.appendChild(form);

  return form;
};

/**
 * 창 닫기
 */
export const closeWindow = () => {
  console.group("closeWindow");
  const w = window;
  const EncodeData = getQueryParam("encodeData");
  console.log(EncodeData);
  w.opener.postMessage(
    {
      type: keys.NICE_AUTH_RESULT,
      data: EncodeData,
    },
    "*"
  );

  w.close();
  console.groupEnd();
};
