import { useEffect, useState } from "react";

export default function useWindowSize() {
  const [size, setSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  useEffect(() => {
    const handler = (e) => {
      setSize({ height: window.innerHeight, width: window.innerWidth });
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("change", handler);
  }, []);
  return size;
}
