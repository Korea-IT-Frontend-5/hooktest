import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import productList from "../__mock__/products.json";
function DetailPage() {
  const params = useParams();
  const navigate = useNavigate();
  const [productPrice, setProductPrice] = useState("");
  const [product, setProduct] = useState(
    productList.products.filter((product) => {
      return product.productNumber === params.productNumber;
    })[0]
  );

  console.log(product);
  const [reviews, setReviews] = useState(product.Review);
  const [inputs, setInputs] = useState({
    reviewer: "",
    review: "",
    rating: "",
  });
  const { reviewer, review, rating } = inputs;
  useEffect(() => {
    setProductPrice(
      product.productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    );
  });
  useEffect(() => {
    if (!product) return navigate(`/state`);
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const AddReviewBtn = () => {
    setReviews((prev) => [
      ...prev,
      {
        rating: rating,
        review: review,
        reviewer: reviewer,
      },
    ]);
  };
  if (product) {
    return (
      <div>
        {/* 
      상세 페이지는 자유롭게 꾸미시면 됩니다.
      아직 해당 부분의 진도가 나가지 않았기 때문에 주소의 파람을 가지고 올 수 있는 방법은
      미리 콘솔에 찍어두었습니다.
      
      단, 없는 번호 상품으로 접근 시 state페이지로 돌아가도록 구현해주세요
    */}
        <h2>상품명 : {product.productName}</h2>
        <p>상품번호 : {product.productNumber}</p>
        <p>상품상세 : {product.productDetail.productDetailInfo}</p>
        <p>상품가격 : {productPrice}원</p>
        <p>상품사이즈 : {product.productSize}</p>
        <p>상품평점 : {product.productRating}</p>
        <p>상품평 : {product.productReview}</p>
        <div>
          <h2>상품평</h2>
          {reviews.map((review, index) => {
            return (
              <div key={index}>
                <p>작성자 : {review.reviewer}</p>
                <p>내용 : {review.review}</p>
                <p>평점 : {review.rating}</p>
              </div>
            );
          })}
          <h2>상품평 추가하기</h2>
          <p>
            작성자 :
            <input name="reviewer" onChange={handleInputs} value={reviewer} />
          </p>
          <p>
            내용 :
            <input name="review" onChange={handleInputs} value={review} />
          </p>
          <p>
            평점 :
            <input
              type="range"
              name="rating"
              min="0"
              max="5"
              onChange={handleInputs}
            />
            {rating}
          </p>
          <p>
            <button onClick={AddReviewBtn}>입력</button>
          </p>
        </div>
      </div>
    );
  }
}
export default DetailPage;
