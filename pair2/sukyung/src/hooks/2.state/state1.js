import { useState } from "react";
import PlayListMock from "../../__mock__/playList.json";
import useInputs from "./useInputs";

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

  const [playList, setPlayList] = useState(PlayListMock.playlist);
  const[{title, signer}, setValues, onChangeForm] = useInputs({title: '', signer: ''});

  const onAddList = () => {
    setPlayList([...playList, {title, signer}]);
    setValues({title: '', signer: ''});
  }

  const onDeleteList = (tit) => {
    const newPlayList = playList.filter((item) => item.title !== tit);
    console.log(tit);
    setPlayList(newPlayList);
  }

  return (
    <>
      <h1>문제1</h1>
      <ul>
        {playList.map((item, idx) => (
          <li key={idx}>
            <h3>{item.title}</h3>
            <p>{item.signer}</p>
            <button onClick={() => onDeleteList(item.title)}>삭제</button>
        </li>
        ))}
      </ul>
      <div>
        <p>
          곡명 : <input name="title" onChange={onChangeForm} value={title}/>
        </p>
        <p>
          가수/작곡 : <input name="signer" onChange={onChangeForm} value={signer}/>
        </p>
        <p>
          <button onClick={onAddList} >추가</button>
        </p>
      </div>
    </>
  );
}
export default State1;
