import React from "react";
import './css/sub.css';
import { useItemState } from '../../context';

function BestBox({ item }) {
    if (31 <= item.id && item.id <= 34) {
        return (
            <div className="best_num" style={{ backgroundColor: '#bf002c' }}>
                <p>BEST</p>
                <span>{item.count}</span>
            </div>
        )
    }
}

function BestBox2({ item }) {
    if (34 <= item.id && item.id <= 36) {
        return (
            <div className="best_num" >
                <p>BEST</p>
                <span>{item.count}</span>
            </div>
        )
    }
}
function BestBox3({ item }) {
    if (37 <= item.id && item.id <= 40) {
        return (
            <div className="best_num2" >
                <span>{item.count}</span>
            </div>
        )
    }
}




function Item({ item }) {
    if (31 <= item.id && item.id <= 36) {
        return (
            <div className="product_list">

                <div className="list_in">
                    <BestBox item={item} key={item.id} />
                    <BestBox2 item={item} key={item.id} />
                    <img src={item.src} alt='' />
                    <ul className="product_toggle">
                        <li>{item.toggle000 && <img src='/images/toggle/toggle000.png' />}</li>
                        <li>{item.toggle00 && <img src='/images/toggle/toggle00.gif' />}</li>
                        <li>{item.toggle0 && <img src='/images/toggle/toggle0.png' />}</li>
                        <li>{item.toggle1 && <img src='/images/toggle/toggle01.jpg' />}</li>
                        <li>{item.toggle2 && <img src='/images/toggle/toggle02.gif' />}</li>
                        <li>{item.toggle3 && <img src='/images/toggle/toggle03.png' />}</li>
                        <li>{item.toggle4 && <img src='/images/toggle/toggle04.gif' />}</li>
                        <li>{item.toggle5 && <img src='/images/toggle/toggle05.png' />}</li>
                        <li>{item.toggle6 && <img src='/images/toggle/toggle06.png' />}</li>
                        <li>{item.toggle7 && <img src='/images/toggle/toggle07.png' />}</li>
                        <li>{item.toggle8 && <img src='/images/toggle/toggle08.png' />}</li>
                        <li>{item.toggle9 && <img src='/images/toggle/toggle09.gif' />}</li>
                        <li>{item.toggle9 && <img src='/images/toggle/toggle10.gif' />}</li>
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
    if (37 <= item.id && item.id <= 40) {
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


function Kitchen() {
    const items = useItemState();
    return (
        <div className="sub_in_wrap">
            {items.map((item) => (
                <Item item={item} key={item.id} />
            ))}
            {items.map((item) => (
                <Item2 item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Kitchen;