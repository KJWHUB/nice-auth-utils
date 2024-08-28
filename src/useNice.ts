import { setupNiceWindow, createNiceForm } from "./utils";

import { niceEventListeners } from "./eventListener";

/**
 * Nice 본인인증
 */
export function useNiceIdentityVerification() {
  const proxy = new Proxy<{
    niceResult: string | null;
  }>(
    {
      niceResult: null,
    },
    {
      set(target, key, value) {
        if (key === "niceResult") {
          console.log("set niceResult", value);
        }
        return Reflect.set(target, key, value);
      },
      get(target, key) {
        return Reflect.get(target, key);
      },
    }
  );

  const goNice = ({
    encodeData,
    resultHandler = (authResult: string) => {
      proxy.niceResult = authResult;
    },
  }: {
    encodeData: string;
    resultHandler?: (authResult: string) => void;
  }) => {
    niceEventListeners.addNiceMessageEvent({ resultHandler });
    console.group("openNiceWindow");
    const newWindow = setupNiceWindow();
    const form = createNiceForm(newWindow, encodeData);
    form.submit();
    console.log("open success");
    console.groupEnd();
  };

  const getNiceResult = () => {
    return proxy.niceResult;
  };

  return { goNice, getNiceResult };
}
