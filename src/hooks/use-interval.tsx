import { useEffect, useRef, MutableRefObject } from "react";

export const useInterval = (
  callback: () => void,
  delay: number,
  useCallback?: boolean
) => {
  const savedCallback: MutableRefObject<Function | undefined> = useRef();
  //Optional: conditionally pause interval
  const _useCallback = useCallback !== undefined ? useCallback : true;

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = _useCallback ? callback : () => {};
  }, [callback, _useCallback]);

  // Set up the interval.
  useEffect(() => {
    const tick = () => {
      savedCallback.current && savedCallback.current();
    };

    let id = setInterval(tick, delay);
    return () => {
      clearInterval(id);
    };

    //eslint-disable-next-line
  }, []);
};
