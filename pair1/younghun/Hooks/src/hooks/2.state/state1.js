import { useState } from "react";
import PlayListMock from "../../__mock__/playList.json";

function State1() {
  /* 
    문제 1.

    state를 다루기 위한 기초 문제입니다.
    음악 목록 10가지의 mock data가 있습니다.

    아래에 추가버튼을 눌러 목록에 리스트를 추가하고 
    삭제 버턴을 눌렀을 때 데이터가 삭제될 수 있도록 해주세요
  */

  /* 데이터 콘솔에 찍어두었으니 확인해볼 것 */
  const [playlist, setPlaylist] = useState(PlayListMock.playlist);
  const [newPlayList, setNewPlayList] = useState({
    title: "",
    signer: "",
  });
  const [inputDateTitle, setInputDateTitle] = useState("");
  const [inputDateSigner, setInputDateSigner] = useState("");
  const handleNewPlayListBtn = () => {
    if (newPlayList.title !== "" && newPlayList.signer !== "") {
      setPlaylist((prev) => [...prev, newPlayList]);

      setInputDateSigner("");
      setInputDateTitle("");
      setNewPlayList({ title: "", signer: "" });
    } else {
      alert("값이 비어있어요");
    }
  };
  const handleNewPlayListChange = (e) => {
    const { name, value } = e.target;
    // if (name === "title") {
    //   setInputDateTitle(value);
    // }
    // if (name === "signer") {
    //   setInputDateSigner(value);
    // }
    name === "title" ? setInputDateTitle(value) : setInputDateSigner(value);
    setNewPlayList({ ...newPlayList, [name]: value });
  };
  const deletePlayListBtn = (title) => {
    setPlaylist((prev) => {
      return prev.filter((playlist) => {
        return playlist.title !== title;
      });
    });
  };
  return (
    <>
      <h1>문제1</h1>
      <ul>
        {/* list */}
        {/* 예시 데이터입니다 */}
        {playlist.map((list, index) => {
          return (
            <li key={index}>
              <h3>{list.title}</h3>
              <p>{list.signer}</p>
              <button onClick={() => deletePlayListBtn(list.title)}>
                삭제
              </button>
            </li>
          );
        })}
      </ul>
      <div>
        <p>
          곡명 :
          <input
            name="title"
            value={inputDateTitle}
            onChange={handleNewPlayListChange}
          />
        </p>
        <p>
          가수/작곡 :
          <input
            name="signer"
            value={inputDateSigner}
            onChange={handleNewPlayListChange}
          />
        </p>
        <p>
          <button onClick={handleNewPlayListBtn}>추가</button>
        </p>
      </div>
    </>
  );
}
export default State1;
