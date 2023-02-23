import { useState } from "react";
import styled from "styled-components";

function ProductCard({ onNavigate, proCard }) {

  const proPrice = proCard.productPrice;
  const newProPrice = proPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <S.Item onClick={()=>onNavigate(proCard.productNumber)}>
      <h4>{proCard.productName}</h4>
      <p>상품번호: {proCard.productNumber}</p>
      <p>가격: {newProPrice}</p>
      <p>사이즈: {proCard.productSize}</p>
      <p>평점: {proCard.productRating}</p>
      <p>리뷰: {proCard.productReview}</p>
    </S.Item>
  );
}
export default ProductCard;

const Item = styled.li`
  border: 1px solid #000;
  cursor: pointer;
  width: 300px;
  margin: 16px auto;
`;

const S = {
  Item,
};
