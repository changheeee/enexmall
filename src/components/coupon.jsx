import React from "react";
import Footer from "../footer";




function Coupon() {
    return (
        <>
            <div className="sub_top">
                <div className="sub_tit" style={{ borderBottom: '0' }}>
                    <div className="sub_cat" ><span>HOME > 쿠폰존</span></div>
                    <h3>쿠폰존</h3>
                </div>

            </div>
            <div className="sub_in_wrap">
                <div className="sub_in_content">
                    <div className="coupon_top">
                        <h4>상품쿠폰</h4>
                        <p>⁕ 상품쿠폰은 상품 상세/장바구니/주문하기에서 적용 가능합니다.</p>
                        <b>쿠폰이 없습니다.</b>
                    </div>
                    <div className="coupon_bot">
                        <h4>주문쿠폰</h4>
                        <p>⁕ 주문쿠폰은 주문하기 페이지에서 적용 가능합니다.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Coupon;