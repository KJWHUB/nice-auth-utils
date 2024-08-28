import { useNiceStore } from "./store";

const keys = {
  NICE_AUTH_RESULT: "NICE_AUTH_RESULT",
} as const;

const { setNiceAuthResult } = useNiceStore();

export const niceEventListeners = {
  abortController: new AbortController(),
  addNiceMessageEvent() {
    const eventListener = (event: MessageEvent) => {
      if (event.data.type === keys.NICE_AUTH_RESULT) {
        const authResult = event.data.data;
        console.log("부모 창에서 실행 되는 결과 값받기", authResult);
        setNiceAuthResult(authResult);
        this.abortController.abort();
      }
    };

    window.addEventListener("message", eventListener, {
      signal: this.abortController.signal,
    });
  },
  removeNiceMessageEvent() {
    this.abortController.abort();
  },
};
