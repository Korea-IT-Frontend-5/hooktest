import { useEffect } from "react";

function Q3components({setCount}) {

  useEffect(()=> {
    const countJumpRope = setInterval(() => {
      setCount((prev) => prev += 1);
    }, 2000);
    return () => clearInterval(countJumpRope);
  },[]);

  return <div> πββοΈ μ€λκΈ° ... ing </div>;
}
export default Q3components;
