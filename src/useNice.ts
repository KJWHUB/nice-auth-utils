import { useNiceStore } from "./store";
import { setupNiceWindow, createNiceForm, closeWindow } from "./utils";

import { niceEventListeners } from "./eventListener";

const store = useNiceStore();

/**
 * Nice 본인인증
 */
export function useNiceIdentityVerification() {
  const { niceAuthResult } = store;

  const goNice = ({ encodeData }: { encodeData: string }) => {
    niceEventListeners.addNiceMessageEvent();
    console.group("openNiceWindow");
    const newWindow = setupNiceWindow();
    const form = createNiceForm(newWindow, encodeData);
    form.submit();
    console.log("open success");
    console.groupEnd();
  };

  const closeWindowHandler = () => {
    closeWindow();
  };

  return { goNice, closeWindow: closeWindowHandler, niceAuthResult };
}
