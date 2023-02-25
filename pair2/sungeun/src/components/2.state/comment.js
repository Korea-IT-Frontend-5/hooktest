import { useState } from "react";
import styled from "styled-components";
import UseInputs from "../inputs/useInputs";

function Comment({list, onCommDel, onCommEdit}) {
  const [isEdit, setIsEdit] = useState(false);
  const [{contentEit}, onchangForm] = UseInputs({
    contentEit: '',
  })
  return (
    <S.CommentItem>
      <p>
        작성자: <span>{list.User.nickname}</span>
      </p>
      <p>
        댓글 내용: <span>{isEdit ? <textarea name="contentEit" value={contentEit} onChange={onchangForm}>{list.content}</textarea> : list.content}</span>
      </p>
      <button onClick={()=>onCommDel(list)}>삭제</button>
      <button onClick={()=>onCommEdit(list, contentEit, setIsEdit)}>수정</button>
    </S.CommentItem>
  );
}
export default Comment;

const CommentItem = styled.li`
  border: 1px solid #000;
  margin: 10px;
`;

const S = {
  CommentItem,
};
