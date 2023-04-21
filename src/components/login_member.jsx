import React from "react";

function LoginMember() {
    return (
        <>
            <div className='login_in'>
                <div className="login_in_top">
                    <input type="text" placeholder='아이디' />
                    <input type="password" placeholder='비밀번호' />
                    <form action="">
                        <div>
                            <input type="checkbox" name="" id="" />
                            <span>아이디 저장</span>
                        </div>
                        <ul>
                            <li><a href="#">아이디 찾기</a></li>
                            <li><a href="#">비밀번호 찾기</a></li>
                        </ul>
                    </form>
                    <div className='login_btn'>로그인</div>
                </div>
                <div className="login_in_mid">
                    <h4>SNS로 로그인</h4>
                    <a href="#"><img src="/images/pc_naver.png" alt="" /></a>
                    <a href="#"><img src="/images/pc_kakao.png" alt="" /></a>
                    <a href="#"><img src="/images/pc_facebook.png" alt="" /></a>

                </div>
                <div className="login_in_bot">
                    <div>
                        <b>아직 에넥스몰 회원이 아니신가요?</b>
                        <p>회원이 되시면 다양한 혜택을 누리실 수 있습니다.</p>
                    </div>
                    <a href="#">회원가입</a>
                </div>

            </div>
        </>
    )
}

export default LoginMember;