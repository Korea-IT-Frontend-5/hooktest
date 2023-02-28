import { useState } from "react";
import UseInputs from "../../components/inputs/useInputs";
import PlayListMock from "../../__mock__/playList.json";

function State1() {
  /* 
    문제 1.

    state를 다루기 위한 기초 문제입니다.
    음악 목록 10가지의 mock data가 있습니다.

    아래에 추가버튼을 눌러 목록에 리스트를 추가하고 
    삭제 버턴을 눌렀을 때 데이터가 삭제될 수 있도록 해주세요
  */

  // console.log(PlayListMock.playlist);
  /* 데이터 콘솔에 찍어두었으니 확인해볼 것 */
  const [newPlayList, setNewPlayList] = useState(PlayListMock.playlist);

  const [{ title, signer}, onchangForm, reset] = UseInputs({
    title: '',
    signer: '',
  })

  const onSummerAdd = (e) => {
    if (title !== "" && signer !== "") {
      setNewPlayList([...newPlayList, { title, signer }]);
      reset();
    } else {
      alert("값이 비어있어요");
    }
  }

  const onPlayListDel = ( title ) => {
    const delPlayList = newPlayList.filter((delList)=> delList.title !== title);
    setNewPlayList(delPlayList)
  }

  return (
    <>
      <h1>문제1</h1>
      <ul>
        {newPlayList.map((list, inx) => (
          <li key={inx}>
            <h3>{list.title}</h3>
            <p>{list.signer}</p>
            <button onClick={()=>onPlayListDel(list.title)}>삭제</button>
          </li>
        ))}
      </ul>
      <div>
        <p>
          곡명 : <input name="title" value={title} onChange={onchangForm} />
        </p>
        <p>
          가수/작곡 : <input name="signer" value={signer} onChange={onchangForm} />
        </p>
        <p>
          <button onClick={onSummerAdd}>추가</button>
        </p>
      </div>
    </>
  );
}
export default State1;
