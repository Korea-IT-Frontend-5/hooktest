import { useState } from "react";
import styled from "styled-components";
import Comment from "../../components/2.state/comment";
import UseInputs from "../../components/inputs/useInputs";

function State2() {
  /*  
    문제 2.

    Q1. 아래 작성된 state의 mock data를 활용하여
        댓글 목록을 화면에 랜더링 해보세요 :)
        Components는 src/components/state/comment.js를 활용하세요
        
    Q2. 댓글 작성 수정 삭제 기능을 구현해보세요 :)
            1. 댓글 작성 기능
            2. 댓글 수정 기능
            3. 댓글 삭제 기능 ( 본인이 작성한 댓글만 삭제할 수 있습니다, myComment 활용 )
    */

  const [post, setPost] = useState({
    title: "안녕하세요 여러분 김성용 강사입니다 :)",
    content: "오늘도 모두 화이팅입니다!",
    User: {
      nickname: "김성용",
      age: 20,
      height: 190,
    },
    Comments: [
      {
        User: {
          nickname: "김사과",
        },
        content: "오늘도 화이팅입니다!",
        myComment: false,
      },
      {
        User: {
          nickname: "반하나",
        },
        content: "오늘도 화이팅입니다!",
        myComment: false,
      },
      {
        User: {
          nickname: "오렌지",
        },
        content: "오늘도 화이팅입니다!",
        myComment: false,
      },
      {
        User: {
          nickname: "이멜론",
        },
        content: "오늘도 화이팅입니다!",
        myComment: false,
      },
      {
        User: {
          nickname: "박수박",
        },
        content: "오늘도 화이팅입니다!",
        myComment: false,
      },
    ],
  });

  const [{ nickname, content }, onchangForm, reset] = UseInputs({
    nickname: "",
    content: "",
  });

  // 댓글 작성
  const onCommJoin = (e) => {
    const newPostComm = [
      { User: { nickname }, content, myComment: true },
      ...post.Comments,
    ];
    post.Comments = newPostComm;
    setPost(post);
    reset();
  };

  // 댓글 삭제
  const onCommDel = (list) => {
    console.log("@@");
    console.log(list);
    console.log("@@");
    if (!list.myComment) {
      alert("본인 작성 댓글이 아닙니다.");
      return; // early return 적용!
    }

    // 댓글이 삭제된 배열 생성
    const newPost = { ...post }; // 여기가 불변성을 지키기위해 만듬
    // const delIndex = newPost.Comments.map((item) => item === list);

    const delIndex = newPost.Comments.map((item) => 
      {return (item !== list && item)});
    newPost.Comments.splice(delIndex, 1);
    setPost(newPost);
  };

  // 댓글 수정
  const onCommEdit = (list, content, setIsEdit) => {
    // 내가 작성한 댓글이라면
    if (list.myComment) {
      const editedComment = { ...list, content }; // 기존 객체를 복사하고 content 속성만 업데이트한 새로운 객체 생성  : 불변성 지키기 위함
      setIsEdit((prev) => !prev); // 수정 모드 (시작/종료)
      setPost((prevPost) => ({
        // 기존 상태(prevPost)를 업데이트한 새로운 상태 객체를 생성하여 setPost로 전달
        ...prevPost,
        Comments: prevPost.Comments.map((comment) => {
          if (comment === list) {
            return editedComment; // 수정된 댓글 객체를 반환
          }
          return comment; // 수정하지 않은 다른 댓글 객체는 그대로 반환
        }),
      }));
    } else {
      alert("본인 작성 댓글이 아닙니다.");
    }
  };

  return (
    <S.Wrapper>
      <h1>문제2</h1>
      <S.PostBox>
        <S.PostTitle>제목: {post.title}</S.PostTitle>
        <S.PostContent>내용: {post.content}</S.PostContent>
      </S.PostBox>
      <S.PostInfo>
        <p>
          작성자: <span>{post.User.nickname}</span>
        </p>
        <p>
          작성자 나이: <span>{post.User.age}</span>
        </p>
        <p>
          작성자 키: <span>{post.User.height}</span>
        </p>
      </S.PostInfo>
      <div>
        <p>
          댓글 수: <span>{post.Comments.length}</span>
        </p>
        <input
          name="nickname"
          value={nickname}
          onChange={onchangForm}
          placeholder="작성자"
        />
        <input
          name="content"
          value={content}
          onChange={onchangForm}
          placeholder="댓글 내용"
        />
        <button onClick={onCommJoin}>댓글 작성</button>
      </div>
      <S.CommentList>
        {/* list */}
        {post.Comments.map((list, inx) => {
          return (
            <Comment
              key={inx}
              list={list}
              onCommDel={onCommDel}
              onCommEdit={onCommEdit}
            />
          );
        })}
      </S.CommentList>
    </S.Wrapper>
  );
}
export default State2;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PostBox = styled.div`
  background-color: #999;
  width: 360px;
  padding: 10px;
`;

const PostTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const PostContent = styled.p`
  color: #fff;
`;

const PostInfo = styled.div`
  width: 360px;
  border: 3px solid #f00;
  padding: 10px;
  margin: 10px;

  p {
    display: flex;
    justify-content: space-around;
  }

  span {
    font-weight: bold;
  }
`;

const CommentList = styled.ul`
  width: 960px;
`;

const S = {
  Wrapper,
  PostBox,
  PostTitle,
  PostContent,
  PostInfo,
  CommentList,
};
