import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import LoginMember from '../components/login_member';


function LoginTab() {
    return (
        <div id='login_tab'>
            <Tabs
                defaultActiveKey="wardrobe"
                id="justify-tab-example"
                fill={true}
                className="mb-3"
            >
                <Tab eventKey="wardrobe" title="로그인">
                    <LoginMember />
                </Tab>

                <Tab eventKey="dressroom" title="비회원(주문/주문확인)">
                    <div className='login_in'>

                        <div className="login_in_top">
                            <h4>비회원 주문 조회하기</h4>
                            <input type="text" placeholder='주문자명' />
                            <input type="text" placeholder='주문번호' />
                            <div className='login_btn' style={{ marginBottom: '2px' }}>확인</div>
                        </div>
                        <div className='caution_msg'>
                            <img src='/images/icon_caution.png' alt="" /><p>주문번호와 비밀번호를 잊으신 경우, 고객센터로 문의하여 주시기 바랍니다.</p>
                        </div>
                    </div>

                </Tab>

            </Tabs>
        </div>
    );
}

export default LoginTab;