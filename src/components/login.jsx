import React from "react";
import Footer from "../footer";
import { TfiAngleRight, TfiAngleDown } from "react-icons/tfi";
import { AiOutlineSearch } from "react-icons/ai";
import LoginTab from "../bootstrap/logintab";



function Login() {
    return (
        <>
            <div className="sub_top">
                <div className="sub_tit" style={{ borderBottom: '0' }}>
                    <div className="sub_cat" ><span>HOME > 로그인</span></div>
                    <h3>로그인</h3>
                </div>
                <div className="login_wrap">
                    <div className="left">
                        <LoginTab />
                    </div>
                    <div>
                        <img src="/images/login_banner.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="sub_in_wrap">
                <div className="sub_in_content">

                </div>
            </div>
            <Footer />
        </>
    )
}

export default Login;