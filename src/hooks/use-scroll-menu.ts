import { useEffect, RefObject } from "react";

export const useScrollMenu = (
  sectionRef: RefObject<HTMLDivElement>,
  callback: () => void
) => {
  useEffect(() => {
    sectionRef.current && callback();
    //eslint-disable-next-line
  }, [sectionRef]);
};
