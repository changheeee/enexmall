import React from "react";
import { Link } from "react-router-dom";
import { EventResult } from "./components/event";

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footer_in">
                    <div className="footer_top">
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingRight: '40px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span>에넥스몰 고객센터</span>
                                <b>1833-5008</b>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span>시스템 주방 A/S</span>
                                <b>1588-9022</b>
                            </div>
                        </div>
                        <div className="footer_notice">
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <h4>공지사항</h4>
                                <Link to=''><p>더보기+</p></Link>
                            </div>
                            <div>
                                <ul className="notice_ul">
                                    <li><Link to='' className="notice_list"><span>2월 신용카드 무이자/부분무이자 안내</span><p>2023-02-02</p></Link></li>
                                    <li><Link to='' className="notice_list"><span>1월 신용카드 무이자/부분무이자 안내</span><p>2023-01-02</p></Link></li>
                                    <li><Link to='' className="notice_list"><span>12월 신용카드 무이자/부분무이자 안내</span><p>2022-12-01</p></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                            <Link to=''><img src='/images/search_store.jpg' alt='매장찾기' /></Link>
                        </div>
                    </div>
                </div>

                <div className="footer_mid">
                    <div className="footer_in">
                        <ul>
                            <li><Link><p>회사소개</p></Link></li>
                            <li><Link><p>에넥스키친</p></Link></li>
                            <li><Link><p>에넥스오피스</p></Link></li>
                            <li><Link><p>이용약관</p></Link></li>
                            <li><Link><p>이용안내</p></Link></li>
                            <li><Link><b>개인정보처리방침</b></Link></li>
                            <li><Link><p>고객센터</p></Link></li>
                            <li><Link><p>채용정보</p></Link></li>
                            <li><Link><p>제휴,입점문의</p></Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer_in">
                    <div className="footer_bot">
                        <div className="footer_bot_left">
                            <div className="footer_bot_logo"><Link to=''><img src='/images/footer_logo.png' alt='헤더로고' /></Link></div>
                            <div style={{ marginLeft: '40px' }}>
                                <ul className="footer_bot_txt" >
                                    <li><p>(주)에넥스 대표자: 박진규 | 서울특별시 서초구 서초대로73길 40 (강남오피스텔) | 통신판매업신고 :2006-09036</p></li>
                                    <li><p>대표번호: <b>02-2185-2000</b> | 이메일: enexmall @enex.co.kr | 사업자등록번호 :220-81-31765<Link> <img src='/images/btn_licensee_info.gif' alt='사업자정보확인' /></Link></p></li>
                                    <li><p>개인정보관리책임자 :남상민 | 온라인 쇼핑몰 고객센터 :02-2185-2000(ARS 2번) / 1833-5008</p></li>
                                    <li><p>copyright. . <b>enex.co.kr</b>. All rights reserved.</p></li>
                                </ul>
                                <div style={{ marginTop: '10px' }}>
                                    <img src='/images/footer_es01.gif' alt='footer1' />
                                    <img src='/images/footer_es02.gif' alt='footer2' />
                                    <img src='/images/footer_es03.gif' alt='footer3' />
                                    <img src='/images/footer_es04.gif' alt='footer4' />
                                </div>
                            </div>
                        </div>
                        <div className="footer_bot_right">
                            <img src='/images/footer_es0.gif' alt='KCP 구매안전' style={{ width: '282px', height: '82px' }} />
                            <img src='/images/logo_comodo.png' alt='COMODO' style={{ width: '52px', height: '63px', marginTop: '10px' }} />
                        </div>

                    </div>
                </div>
            </div>




            {/* ----------------------------------------------------------------- */}
            <div className="footer_min">
                <div className="footer_notice">
                    <div>
                        <h4>공지사항</h4>
                        <Link to=''><p>more ></p></Link>
                    </div>
                    <div>
                        <ul className="notice_ul">
                            <li><Link to='' className="notice_list"><span>2월 신용카드 무이자/부분무이자 안내</span><p>2023-02-02</p></Link></li>
                            <li><Link to='' className="notice_list"><span>1월 신용카드 무이자/부분무이자 안내</span><p>2023-01-02</p></Link></li>
                            <li><Link to='' className="notice_list"><span>12월 신용카드 무이자/부분무이자 안내</span><p>2022-12-01</p></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="footer_top">
                    <ul>
                        <li><Link><p>회사소개</p></Link></li>
                        <li><Link><p>에넥스키친</p></Link></li>
                        <li><Link><p>에넥스오피스</p></Link></li>
                    </ul>
                </div>
                <div className="footer_mid">
                    <div>
                        <div>
                            <span>에넥스몰 고객센터</span>
                            <b>1833-5008</b>
                        </div>
                        <div>
                            <span>시스템 주방 A/S</span>
                            <b>1588-9022</b>
                        </div>
                    </div>
                    <div>
                        <a href="#">매장찾기</a>
                        <a href="#">PC화면</a>
                    </div>
                </div>
                <div className="footer_bot">
                    <ul className="f_list">
                        <li><Link><p>이용약관</p></Link></li>
                        <li><Link><p>이용안내</p></Link></li>
                        <li><Link><p>개인정보처리방침</p></Link></li>
                    </ul>
                    <ul className="f_list">
                        <li><Link><p>고객센터</p></Link></li>
                        <li><Link><p>채용정보</p></Link></li>
                        <li><Link><p>제휴,입점문의</p></Link></li>
                    </ul>

                    <ul className="footer_bot_txt" >
                        <li><p>(주)에넥스 대표자: 박진규 | 서울특별시 서초구 서초대로73길 40 (강남오피스텔)</p></li>
                        <li><p>통신판매업신고 :2006-09036 | 대표번호: <b>02-2185-2000</b></p></li>
                        <li><p>이메일: enexmall @enex.co.kr | 사업자등록번호 :220-81-31765 <Link>[사업자정보확인]</Link></p></li>
                        <li><p>개인정보관리책임자 :남상민 | 온라인 쇼핑몰 고객센터 :02-2185-2000(ARS 2번) / 1833-5008</p></li>
                        <li><p>copyright. . <b>enex.co.kr</b>. All rights reserved.</p></li>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default Footer;