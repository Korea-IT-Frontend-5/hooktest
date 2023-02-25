import { useEffect, useState } from "react";
import Q3components from "../../components/1.basic/q3components";

function Q3() {
  /* 
    문제3
    useEffect useState에 관련한 문제입니다
    단체 줄넘기 대회에 출전하였습니다

    줄넘기 시작 버튼을 누르면 
    Q3components 컴포넌트가 보입니다.

    Q3components 내부에는

    해당 컴포넌트가 보이기 시작한 시점부터
    2초마다 줄넘기 횟수가 1회 씩 증가하는 비즈니스 로직이 존재합니다

    또한, 이러한 줄넘기 횟수 증가는 q3.js(index)에서도 확인할 수 있도록
    <p> 줄넘기 횟수 : 0 </p> 에 횟수로 표시됩니다

    줄넘기 중지 버튼을 누르면
    해당 컴포넌트는 보이지 않아야하며, 줄넘기 횟수도 더이상 증가해서는 안됩니다.
    또한, 줄넘기 횟수는 0으로 고정되어야합니다.
  */

  // 줄넘기 상태 관리 (true는 줄넘기 중, false는 줄넘기 정지)
  const [swingState, setSwingState] = useState(false);
  // 줄넘기 횟수 관리
  const [swingCount, setSwingCount] = useState(0);

  /*
  맨처음엔 버튼도 useEffect를 이용해서 풀어 보았으나 코드가 너무 이상했다.
  
  왜 굳이 여기서 이렇게까지 코드를 짜야하지 싶을 정도였다.
  
  그래서 useState만을 이용하여 줄넘기의 시작과 중지를 관리하고 
  Q3components에서 useEffect를 사용하였다. 
  
  useEffect의 특징은 컴포넌트의 마운트가 될 때와
  의존성 배열 내부의 요소가 바뀔 때 실행 된다는 것이다.
  
  이번 문제에서는 의존성 배열이 필요하지는 않아서 빈 배열을 받아오게 두었다.
  하지만 자문하여 
  만약 의존성 배열이 필요하면 어떻게 풀이해야하는가에 대한 답도 할 수 있어야했다.
  
  의존성 배열 사용시에 대한 나의 의견은 q3components에 작게 표시해두었다.
  */
  return (
    <>
      <h1>문제3</h1>
      <div>
        <p> 줄넘기 횟수 : {swingCount} </p>
        {swingState && (
          <Q3components count={swingCount} setCount={setSwingCount} />
        )}
        <p>
          <button onClick={()=>setSwingState(true)}>줄넘기 시작</button>
        </p>
        <p>
          <button onClick={()=>setSwingState(false)}>줄넘기 중지</button>
        </p>
      </div>
    </>
  );
}
export default Q3;
