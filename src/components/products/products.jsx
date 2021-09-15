import './products.css'

const Products = () => {
    return (
        <div className="Products">
            <div className="긴줄">
                베스트 상품 한개나 고양이 사진쓰고 좋은거 맥이라고 쓰면 될듯
            </div>
            <div className="products_list_wrap">
            <div className="card_wrap">
                    <div className="card_title">로얄캐닌 키튼</div>
                    <div className="card_img"><img src="https://cdn.royalcanin-weshare-online.io/XWkva2QBG95Xk-RBE9Mw/v248/16-kitten-ns-b1?w=420&fm=jpg"></img></div>
                    <div className="card_price">1,200,000원</div>
                </div>
                <div className="card_wrap">
                    <div className="card_title">제품명</div>
                    <div className="card_img">사진이미지</div>
                    <div className="card_price">가격</div>
                </div>
                <div className="card_wrap">
                    <div className="card_title">제품명</div>
                    <div className="card_img">사진이미지</div>
                    <div className="card_price">가격</div>
                </div>
                <div className="card_wrap">
                    <div className="card_title">제품명</div>
                    <div className="card_img">사진이미지</div>
                    <div className="card_price">가격</div>
                </div>




            </div>
            
            카드형식<br />
                제품이미지<br />
                제품명<br />
                대충설명<br />
                가격<br />
                장바구니버튼 바로구매버튼<br />
                최대 4 최소 2 반응형으로<br />

        </div>
    )
}

export default Products