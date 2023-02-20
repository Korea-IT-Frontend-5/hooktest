import { useRef, useState } from "react";

function Q2() {
  /* 
  문제2
  
    2-1)
        useRef에 관련한 문제입니다.

        추가 버튼을 누르면 input에 있던 value는 배열 arr에 추가됩니다.
        그러나, 추가 버튼을 누를 때마다 강제 랜더링 상태가 무조건 적으로 업데이트 됩니다.

        이러한 상황에서 제출버튼을 누르면

        지금까지 추가하였던 목록 배열(arr)이 
        <ul>의 li의 항목으로 추가되어야합니다.

        만약 제출되었을 때 아무런 항목이 없다면
        <p>제출된 목록이 없습니다</p>이 노출되어야하며

        제출된 항목이 있다면
        <ul>만 노출되어야 합니다
        
        이를 useRef의 특성을 고려하여 풀이해보세요 :)

    2-2)
        문제 2-2는 변경 버튼을 클릭하면
        p태그의 색상이 다른 색상으로 변경됩니다.
        
        이는 state를 사용하는 것이 가장 올바른 방법이지만
        어를 사용할 수 없는 어쩔 수 없는 상황에 놓여있습니다.

        따라서 useRef는 사용하여 해당 문구의 색상을 변경해보세요 :)
  */

  // 1번 문제
  // 조건을 하나 추가하기로 함 input안에 value가 없을때는 추가되지 않도록 설정함
  const arr = useRef([]); // 빈 배열 생성
  const [forceRender, setForceRender] = useState(false); // 상태값

  // 추가버튼 클릭 시
  const onAddList = () => {
    // 만약 입력칸이 비어있다면 ➡️ 알림창 활성화
    const inText = document.getElementById("inText");
    if (inText.value === "") return alert("값이 비어있습니다!");

    // 입력칸에 값이 있다면 ➡️ 배열에 값 추가
    arr.current.push(inText.value);
    inText.value = "";
  };

  // 제출버튼 클릭 시
  const submitBtn = () => {
    console.log(arr.current.length);

    // 만약 배열이 비어있다면
    if (!arr.current.length) return setForceRender(true);

    // 배열에 값이 있다면
    setForceRender(false);
    const myList = document.getElementById("category");

    // 배열만큼 반복하여 li 생성
    arr.current.forEach((item) => {
      const newListItem = document.createElement("li");
      newListItem.textContent = item;
      myList.appendChild(newListItem);
    });
  };

  // 이 풀이에서 아쉬운게 있다면 ul태그가 필요없는데 배열의 값의 여부에 상관없이 랜더링된다는 것이다.

  // 2번 문제
  const Htmlref = useRef(null);             // ref를 이용하여 변경할 Html의 요소들을 모을 공간
  
  // 변경 버튼 클릭 시
  const onChangeColor = () => {
    Htmlref.current.style.color = "red";        // Htmlref의 color 요소값을 red로 선언
    Htmlref.current.style.background = "blue";  // Htmlref의 background 요소값을 blue로 선언
  };

  // 이 풀이는 강사님이 알려주신 코드를 같다붙이는것이기에 학습에 큰 영향이 없다고 판단 ➡️ 주석을 추가하여 하나하나 이해하고 설명할 수 있도록 풀이

  return (
    <>
      <h1>문제2</h1>
      <div>
        <h2>문제 2-1</h2>
        <p>
          <input id="inText" />
        </p>
        <p>
          <button onClick={onAddList}>추가</button>
        </p>
        <p>
          <button onClick={submitBtn}>제출</button>
        </p>

        {forceRender && <p>제출된 목록이 없습니다</p>}
        <ul id="category"></ul>
      </div>
      <div>
        <h2>문제 2-2</h2>
        {/* ⬇️ ref에 Htmlref의 값 추가 */}
        <p ref={Htmlref}> 이 문구는 아래 버튼을 누르면 색상이 바뀝니다</p>
        <button onClick={onChangeColor}>변경</button>
      </div>
    </>
  );
}
export default Q2;
