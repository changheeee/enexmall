import React from "react";
import Footer from "../footer";
import { TfiAngleRight, TfiAngleDown } from "react-icons/tfi";
import { AiOutlineSearch } from "react-icons/ai";



function Customer() {
    return (
        <>
            <div className="sub_top">
                <div className="sub_tit" style={{ borderBottom: '0' }}>
                    <div className="sub_cat" ><span>HOME > 에넥스 고객센터</span></div>
                    <h3>에넥스 고객센터</h3>
                </div>

            </div>
            <div className="sub_in_wrap">
                <div className="sub_in_content">
                    <div className="cs_top">
                        <ul className="cs_top_call">
                            <li>
                                <p>에넥스몰 고객상담 센터</p>
                                <h3>1833-5008</h3>
                            </li>
                            <li>
                                <p>시스템 주방 A/S</p>
                                <h3>1588-9022</h3>
                            </li>
                            <li>
                                <p>매장전용 상품 상담문의</p>
                                <h3>02-2185-2030</h3>
                            </li>
                        </ul>
                        <div className="cs_top_time">
                            <p>고객센터 운영시간</p>
                            <span>평일 오전 09:00~오후 05:00 (토,일,공휴일 휴무)/ 점심시간 : 12:30~13:30</span>
                        </div>
                        <ul className="cs_top_link">
                            <li>
                                <img src="/images/service_icon01.png" alt="" />
                                <strong>채팅 상담하기<TfiAngleRight /></strong>
                                <p>
                                    이용 중 궁금한 사항이나<br />
                                    문의사항을 메신저 채팅을 통해<br />
                                    상담 안내 도와 드립니다.
                                </p>
                            </li>
                            <li>
                                <img src="/images/service_icon02.png" alt="" />
                                <strong>1:1문의하기<TfiAngleRight /></strong>
                                <p>
                                    업무 시간 이외, 상담 연결이 어려울<br />
                                    경우 궁금한 사항이나 문의를 남겨주시면<br />
                                    확인 후 빠른 답변 처리해드립니다.
                                </p>
                            </li>
                            <li>
                                <img src="/images/service_icon03.png" alt="" />
                                <strong>A/S 게시판<span>오프라인구매제품 전용</span><TfiAngleRight /></strong>
                                <p>
                                    에넥스 대리점이나 매장 등을 통해<br />
                                    구매하신 제품에 대한 A/S가<br />
                                    필요한 경우 신청해주세요.
                                </p>
                            </li>

                        </ul>
                    </div>
                    <div className="cs_mid">
                        <div>
                            <form action="" className="cs_input_base">
                                <h2>FAQ</h2>
                                <input type="text" placeholder=" 검색어를 입력하세요" />
                                <button><AiOutlineSearch style={{ width: '60%', height: 'auto' }} /></button>
                            </form>
                            <ul className="find_service">
                                <li><strong>빠른 질문 찾기</strong></li>
                                <li><span>회원가입/정보</span></li>
                                <li><span>주문/결제</span></li>
                                <li><span>배송/설치/AS</span></li>
                                <li><span>취소/환불/교환/반품</span></li>
                                <li><span>쿠폰/적립금</span></li>
                                <li><span>기타</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="cs_bot">
                        <div>
                            <div className="tit">
                                <h3>자주 묻는 질문 BEST</h3>
                                <p>more<TfiAngleRight style={{ width: 'auto', height: '14px' }} /></p>
                            </div>
                            <ul>
                                <li>
                                    <p>1</p>
                                    <a href="#">[배송/설치/AS] 이사 시 붙박이장 이전설치는 어떻게 되나요?
                                    </a>
                                    <span>
                                        <button><TfiAngleDown /></button>
                                    </span></li>
                            </ul>

                        </div>
                        <div>
                            <div className="tit">
                                <h3>자주 묻는 질문 BEST</h3>
                                <p>more<TfiAngleRight style={{ width: 'auto', height: '14px' }} /></p>
                            </div>
                            <ul>
                                <li>
                                    <p>1</p>
                                    <a href="#">3월 신용카드 무이자/부분무이자 안내</a>
                                    <span>2023.03.02</span>
                                </li>
                                <li>
                                    <p>2</p>
                                    <a href="#">2월 신용카드 무이자/부분무이자 안내</a>
                                    <span>2023.02.02</span>
                                </li>
                                <li>
                                    <p>3</p>
                                    <a href="#">1월 신용카드 무이자/부분무이자 안내</a>
                                    <span>2023.01.02</span>
                                </li>
                                <li>
                                    <p>4</p>
                                    <a href="#">12월 신용카드 무이자/부분무이자 안내</a>
                                    <span>2022.12.01</span>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Customer;