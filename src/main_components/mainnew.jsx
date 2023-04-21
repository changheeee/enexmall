import React from "react";
import { useItemState } from '../context';

function Item({ item }) {
    if ((item.toggle8 == true) && (40 < item.id && item.id < 57)) {
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
            <div className="sub_in_wrap" >
                <div className="sub_top">
                    <div className="main_sub_wrap"
                        style={{ height: '1100px' }}>
                        <div className='main_sub_tit'>
                            <h2>NEW ARRIVAL</h2>
                            <p>에넥스몰의 신상품을 만나보세요</p>
                        </div>
                        <div className="sub_in_content"
                            style={{ marginTop: '30px' }}>
                            {items.map((item) => ( //reverse().map() 배열 역순으로 정렬
                                <Item item={item} key={item.id} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default New;