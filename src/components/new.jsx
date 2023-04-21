import React from "react";
import Footer from "../footer";
import { useItemState } from '../context';

function Item({ item }) {
    if (item.id <= 90) {
        return (
            <div className="new_list">
                <div className="list_in">
                    <img src={item.src} alt='' />
                    <ul className="new_toggle">
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
                <ul className="new_tit">
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


function New() {
    const items = useItemState();
    console.log({ items })



    return (
        <>
            <div className="sub_top">
                <div className="sub_tit" style={{ borderBottom: '0' }}>
                    <div className="sub_cat" ><span>HOME > 신상품</span></div>
                    <h3>NEW 신상품</h3>
                </div>
                <div className="sub_total">상품<span>{items.length}</span>개</div>
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

export default New;