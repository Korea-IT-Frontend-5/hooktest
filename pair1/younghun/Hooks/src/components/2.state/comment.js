import { useState } from "react";
import styled from "styled-components";

function Comment({ Comments, deleteComment, handleComment, modifyComment }) {
  const [handleState, setHandleState] = useState(false);
  const handleModifyComment = (id) => {
    modifyComment(id);
    setHandleState((prev) => !prev);
  };
  return (
    <S.CommentItem>
      <p>
        작성자:
        {handleState ? (
          <input name="commentsNickname" onChange={handleComment} />
        ) : (
          <span>{Comments.User.nickname}</span>
        )}
      </p>
      <p>
        댓글 내용:
        {handleState ? (
          <input name="commentsContent" onChange={handleComment} />
        ) : (
          <span>{Comments.content}</span>
        )}
      </p>
      {handleState ? (
        <>
          <button
            onClick={() => {
              handleModifyComment(Comments.id, Comments.myComment);
            }}
          >
            수정완료
          </button>
          <button onClick={() => setHandleState((prev) => !prev)}>취소</button>
        </>
      ) : (
        <button onClick={() => setHandleState((prev) => !prev)}>수정</button>
      )}
      {Comments.myComment && (
        <button onClick={() => deleteComment(Comments.id)}>삭제</button>
      )}
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
