import { useEffect, useRef } from "react";

function Q3components({ swingCount, setCount }) {
  const SwingRef = useRef();

  useEffect(() => {
    SwingRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 2000);

    return () => {
      clearInterval(SwingRef.current);
      setCount(0);
    };
  }, []);
  
  // 의존성 배열 사용시
  // }, [swingCount]);

  return <div> 🏃‍♂️ 줄넘기 ... ing </div>;
}
export default Q3components;
