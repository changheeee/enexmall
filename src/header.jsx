import React from "react";
import { Link } from 'react-router-dom';

import CategoryDrop from './bootstrap/categorydrop';

import { FiUser, FiFileText, FiMenu, FiSearch } from "react-icons/fi";
import { GoSignIn, GoComment } from "react-icons/go";


function Header() {
    return (
        <div>
            <header className='header'>
                <div className='header_in'>
                    <div className='header_top'>
                        <Link to=''><img src='/images/header_logo.png' alt='헤더로고' /></Link>
                        <ul>
                            <li><Link to='/components/login'><FiUser style={{ color: '#666', width: 'auto', height: '26px', marginBottom: '5px' }} /><p>로그인</p></Link></li>
                            <li><Link to='/components/login'><GoSignIn style={{ color: '#666', width: 'auto', height: '26px', marginBottom: '5px' }} /><p>회원가입</p></Link></li>
                            <li><Link to='/components/customer'><GoComment style={{ color: '#666', width: 'auto', height: '26px', marginBottom: '5px' }} /><p>고객센터</p></Link></li>
                            <li><Link to='/components/login'><FiFileText style={{ color: '#666', width: 'auto', height: '26px', marginBottom: '5px' }} />  <p>주문조회</p></Link></li>
                        </ul>
                        <div className="header_menu_ico">
                            <FiSearch />
                            <FiMenu />
                        </div>

                    </div>
                    <div className='header_bottom'>
                        <div className="header_bottom_in">
                            <nav className='nav'>
                                <div className='navi'>
                                    <CategoryDrop />
                                    <ul >
                                        <li><Link to='/components/deal'><p>에넥스딜</p></Link></li>
                                        <li><Link to='/components/best'><p>베스트</p></Link></li>
                                        <li><Link to='/components/new'><p>신상품</p></Link></li>
                                        <li><Link to='/components/brand'><p>브랜드마켓</p></Link></li>
                                        <li><Link to='/components/tv'><p>에넥스TV</p></Link></li>
                                        <li><Link to='/components/coupon'><p>쿠폰존</p></Link></li>
                                        <li><Link to='/components/review'><p>고객후기</p></Link></li>
                                        <li><Link to='/components/event'><p>이벤트</p></Link></li>
                                    </ul>
                                </div>
                            </nav>
                            <div className="input_base">
                                <input type="text" placeholder='' />
                                <Link to="" >
                                    <img src="/images/btn_top_search2.png" alt="검색" style={{ marginTop: '2px', marginRight: '5px' }} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header >
        </div >
    )
}

export default Header;