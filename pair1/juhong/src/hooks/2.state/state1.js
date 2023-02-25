import { useRef } from "react";
import PlayListMock from "../../__mock__/playList.json";

function State1() {
  /* 
    문제 1.

    state를 다루기 위한 기초 문제입니다.
    음악 목록 10가지의 mock data가 있습니다.

    아래에 추가버튼을 눌러 목록에 리스트를 추가하고 
    삭제 버턴을 눌렀을 때 데이터가 삭제될 수 있도록 해주세요
  */

  console.log(PlayListMock.playlist);
  /* 데이터 콘솔에 찍어두었으니 확인해볼 것 */

  const arr = useRef(PlayListMock.playlist);
  const inputTitle = useRef('');
  const inputSinger = useRef('');

  const addBtn = () => {
    console.log(inputTitle.current.value);
    console.log(inputSinger.current.value);
    if (!inputTitle.current.value && !inputSinger.current.value) {
      arr.current.push(
        {
          title: inputTitle.current.value,
          singer: inputSinger.current.value
        }
      )
    }
  };

  return (
    <>
      <h1>문제1</h1>
      <ul>
        {arr.current.map((item) => {
          return (
            <li>
            <h3>{item.title}</h3>
            <p>{item.signer}</p>
          </li>
          )
        })}
      </ul>
      <div>
        <p>
          곡명 : <input useRef={inputTitle}/>
        </p>
        <p>
          가수/작곡 : <input useRef={inputSinger}/>
        </p>
        <p>
          <button onClick={addBtn}>추가</button>
        </p>
      </div>
    </>
  );
}
export default State1;
