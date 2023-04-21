import React from "react";
import Footer from "../footer";
import { useItemState } from '../context';

// 브랜드 배열 추가



function Item({ item }) {
    //브랜드 배열에서 제조사 카테고리별 배열 추출
    if (item.id) {
        return (
            <div className="product_list">
                <div className="list_in">
                    <img src={item.src} alt='' />
                    <ul className="product_toggle">
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
                <ul className="product_tit">
                    <li><p>{item.subtitle}</p></li>
                    <li><h6>{item.title}</h6></li>
                    <li style={{ display: 'flex' }}>
                        <h4>{item.discount}</h4>
                        <h5>{item.dcprice}</h5>
                        <b>{item.price}</b>
                    </li>
                </ul>
            </div>
        )
    }
}



function Brand({ item }) {
    const items = useItemState();
    console.log({ items })
    return (
        <>
            <div className="sub_top">
                <div className="sub_tit" style={{ borderBottom: '0' }}>
                    <div className="sub_cat" ><span>HOME > 브랜드마켓</span></div>
                    <h3>브랜드마켓</h3>
                </div>
                <div className="brand_nav">
                    <ul>
                        <li><p>LG전자</p></li>
                        <li><p>쿠첸</p></li>
                        <li><p>밸런스온</p></li>
                        <li><p>힘펠</p></li>
                        <li><p>위니아</p></li>
                        <li><p>아이닉</p></li>
                        <li><p>휴렉</p></li>
                        <li><p>유진로봇</p></li>
                        <li><p>까또페로</p></li>
                        <li><p>테팔</p></li>
                        <li><p>애니온넷</p></li>
                        <li><p>에어로코리아</p></li>
                        <li><p>트리빌리지</p></li>
                        <li><p>아이에스티글로벌</p></li>
                    </ul>
                </div>
            </div>

            <div className="sub_in_length">
                <span>총 <b>{items.length}</b> 건</span>
            </div>

            <div className="sub_in_wrap">
                <div className="sub_in_content">
                    {items.map((item) => (
                        <Item item={item} key={item.id} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Brand;