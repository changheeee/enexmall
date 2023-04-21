import React from "react";
import './css/sub.css';
import { useItemState } from '../context';
import Footer from '../footer';
import BestTab from '../bootstrap/besttab'

function BestBox({ item }) {
    if (item.id < 4) {
        return (
            <div className="best_num" style={{ backgroundColor: '#bf002c' }}>
                <p>BEST</p>
                <span>{item.id}</span>
            </div>
        )
    }
}

function BestBox2({ item }) {
    if (4 <= item.id && item.id <= 6) {
        return (
            <div className="best_num" >
                <p>BEST</p>
                <span>{item.id}</span>
            </div>
        )
    }
}
function BestBox3({ item }) {
    if (item.id >= 7) {
        return (
            <div className="best_num2" >
                <span>{item.id}</span>
            </div>
        )
    }
}




function Item({ item }) {
    if (item.id < 7) {
        return (
            <div className="product_list">

                <div className="list_in">
                    <BestBox item={item} key={item.id} />
                    <BestBox2 item={item} key={item.id} />
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

function Item2({ item }) {
    if (item.id >= 7) {
        return (
            <div className="new_list" style={{ marginTop: '40px' }}>

                <div className="list_in">
                    <BestBox3 item={item} key={item.id} />
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


function Best() {
    const items = useItemState();
    return (
        <>
            <div className="sub_top">
                <div className="sub_tit" style={{ borderBottom: '0' }}>
                    <div className="sub_cat" ><span>HOME > 베스트</span></div>
                    <h3>베스트</h3>
                </div>
                <div className="sub_in_content">
                    <div className="best_nav">
                        <BestTab />
                    </div>
                </div>
            </div>
            {/* <Wardrobe /> */}
            {/* <div className="sub_in_wrap">
                {items.map((item) => (
                    <Item item={item} key={item.id} />
                ))}
                {items.map((item) => (
                    <Item2 item={item} key={item.id} />
                ))}
            </div> */}
            <Footer />
        </>
    )
}

export default Best;