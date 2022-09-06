import { useEffect, useRef } from "react";

export default function useEventListener<
  T1 extends string,
  T2 extends (event: T3 & Event) => void,
  T3
>(eventType: T1, callback: T2, element?: T3) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const domElement = (element || window) as unknown as HTMLElement;
    if (!domElement) return;
    const handler = callbackRef.current || (() => null);
    domElement.addEventListener(
      eventType,
      handler as unknown as EventListenerOrEventListenerObject
    );

    return () =>
      domElement.removeEventListener(
        eventType,
        handler as unknown as EventListenerOrEventListenerObject
      );
  }, [eventType, element]);
}
