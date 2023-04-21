import React from "react";
import Footer from "../footer";

import { useItemState } from '../context';
// import MainCarousel from "../bootstrap/maincarousel";
import { AiOutlineSearch } from "react-icons/ai";
// import ReviewCarousel from "../bootstrap/reviewcarousel";
//import ReactElasticCarousel from "react-elastic-carousel";
import CarouselReview from "../bootstrap/carousel_review";


//item배열, 리뷰 값 전달 
export function ReviewItem({ item }) {
    if (item.id <= 20) {
        return (
            <div div className="review_wrap">
                <div className="review_in">
                    <div className="review_top">
                        <img src={item.src} alt="" />
                        <div className="review_top_txt">
                            {/* 리부제목 */}
                            <h4>이사하고 드레스룸으로 쓸려고 맞췄는데 튼튼하고 좋아요 ...</h4>
                            {/* 리뷰내용 */}
                            <p>이사하고 드레스룸으로 쓸려고 맞췄는데 튼튼하고 좋아요 코너장 밑에 물건 넣기가 조금 힘들긴하지만 전체적으로 만족합니다</p>
                        </div>
                    </div>
                    <div className="review_bot">
                        <div className="review_bot_l">
                            <img src={item.src} alt="" />
                        </div>
                        <div className="review_bot_r">
                            <ul className="review_tit">
                                <li><h6>{item.title}</h6></li>
                                <li>
                                    <span>{item.dcprice}</span><b>{item.discount}</b>
                                    <p>{item.price}</p>
                                </li>
                            </ul>
                            <ul className="review_toggle">
                                <li>{item.toggle1 && <img src='/images/toggle/toggle01.jpg' />}</li>
                                <li>{item.toggle2 && <img src='/images/toggle/toggle02.gif' />}</li>
                                <li>{item.toggle3 && <img src='/images/toggle/toggle03.png' />}</li>
                                <li>{item.toggle4 && <img src='/images/toggle/toggle04.gif' />}</li>
                                <li>{item.toggle5 && <img src='/images/toggle/toggle05.png' />}</li>
                                <li>{item.toggle6 && <img src='/images/toggle/toggle06.png' />}</li>
                                <li>{item.toggle7 && <img src='/images/toggle/toggle07.png' />}</li>
                                <li>{item.toggle8 && <img src='/images/toggle/toggle08.png' />}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}


function Review() {
    const items = useItemState();
    console.log({ items })
    return (
        <>
            <div className="sub_top">
                <div className="sub_tit" style={{ borderBottom: '0' }}>
                    <div className="sub_cat" ><span>HOME > 구매후기</span></div>
                    <h3>구매후기</h3>
                </div>

            </div>
            <div className="sub_in_wrap">
                <CarouselReview />
                <div className="sub_in_content">
                    {/* <ReviewCarousel /> */}
                    <form action="" className="review_input_base">
                        <input type="text" placeholder=" 상품명을 입력하세요" />
                        <button>검색 <AiOutlineSearch /></button>
                    </form>
                    <div className="brand_nav">
                        <ul>
                            <li><p>전체</p></li>
                            <li><p>리모델링/시공</p></li>
                            <li><p>주방/다이닝</p></li>
                            <li><p>옷장/드레스룸</p></li>
                            <li><p>침실</p></li>
                            <li><p>거실</p></li>
                            <li><p>서재/오피스</p></li>
                            <li><p>주방용품</p></li>
                            <li><p>생활/사무용품</p></li>
                            <li><p>펫가구/용품</p></li>
                            <li><p>홈데코</p></li>
                            <li><p>디지털/가전</p></li>
                            <li style={{ cursor: 'unset' }}><p></p></li>
                            <li style={{ cursor: 'unset' }}><p></p></li>
                        </ul>
                    </div>
                    {items.map((item) => (
                        <ReviewItem item={item} key={item.id} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Review;