import { useCallback, useEffect, useState } from "react";

export interface WindowSizes {
  width:number;
  height:number;
}

export const useWindowResize = () => {
  const [sizes,setSizes] = useState<WindowSizes>({height:window.innerHeight,width:window.innerWidth})

  const updateSizes = useCallback(() => {
    setSizes({width:window.innerWidth,height:window.innerHeight})
  },[])

  useEffect(() => {
    window.addEventListener("resize",updateSizes)

    return () => window.removeEventListener("resize",updateSizes)
  },[updateSizes])

  return sizes

}