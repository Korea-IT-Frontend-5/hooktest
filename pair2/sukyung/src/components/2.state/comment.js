import { useState } from "react";
import styled from "styled-components";
import useInputs from "../../hooks/2.state/useInputs";

function Comment({comment, onClickDeleteBtn}) {
  let {User, content, myComment} = comment;
  let onChangeForm;

  const [isReadOnly, setIsReadOnly] = useState(true);

  [content, onChangeForm] = useInputs(content);

  const onClickModifyBtn = (myComment) => {
    if (myComment) {
      isReadOnly ? setIsReadOnly(false): setIsReadOnly(true);
    } else return;
  }

  return (
    <S.CommentItem>
      <p>
        작성자: <input type="text" value={User.nickname} readOnly={isReadOnly} onChange={onChangeForm} />
      </p>
      <p>
        댓글 내용: <input type="text" name="content" value={content} readOnly={isReadOnly} onChange={onChangeForm} />
      </p>
      <button onClick={() => onClickModifyBtn(myComment)}>{isReadOnly? '수정' : '수정완료'}</button>
      <button onClick={() => onClickDeleteBtn(comment)}>삭제</button>
    </S.CommentItem>
  );
}
export default Comment;

const CommentItem = styled.li`
  border: 1px solid #000;
  margin: 10px;
  input{
    border: none;
    :active{
      border: 1px solid #000;
    }
  }
`;

const S = {
  CommentItem,
};
