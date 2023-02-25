import { useParams } from "react-router-dom";

import productList from "../__mock__/products.json";

function DetailPage() {
  const params = useParams();
  console.log(params.productNumber);
 
  const [detailProduct] = productList.products.filter((product) => product.productNumber === params.productNumber);
  console.log(detailProduct);

  return (
    <div>
      {/* 
      상세 페이지는 자유롭게 꾸미시면 됩니다.
      아직 해당 부분의 진도가 나가지 않았기 때문에 주소의 파람을 가지고 올 수 있는 방법은
      미리 콘솔에 찍어두었습니다.

      단, 없는 번호 상품으로 접근 시 state페이지로 돌아가도록 구현해주세요
    */}
      <h4>상품 상세</h4>
      <h4>{detailProduct.productName}</h4>
      <p>상품번호: {detailProduct.productNumber}</p>
      <p>가격: {detailProduct.productPrice}원</p>
      <p>사이즈: {detailProduct.productSize}</p>
      <p>평점: {detailProduct.productRating}</p>
      <p>리뷰: {detailProduct.productReview}</p>
      <ul>
        {detailProduct.Review.map((review) => (
          <li>
            <span>작성자: {review.reviewer}</span>
            <span>선호도: {review.review}</span>
            <span>별점: {review.rating}</span>
            <div>
              <button>수정</button>
              <button>삭제</button>
            </div>
          </li>
        ))}
      </ul>
      <div>
        <label htmlFor="">작성자 : </label>
        <input type="text" placeholder="작성자 이름" />
      </div>
      <div>
        <label htmlFor="">선호도 : </label>
        <input type="text" placeholder="선호도" />
      </div>
      <div>
        <label htmlFor="">별점 : </label>
        <input type="text" placeholder="별점" />
      </div>
      <button>구매평 추가</button>

    </div>
  );
}
export default DetailPage;
