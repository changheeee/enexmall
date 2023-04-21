import React from "react";
import { useItemState } from '../context';
import MainBestTab from "../bootstrap/main_besttab";


function MainBest() {
    const items = useItemState();
    return (
        <>
            <div className="sub_in_wrap" >
                <div className="sub_top">
                    <div className="main_sub_wrap">
                        <div className="sub_in_content">
                            <div className='main_sub_tit'>
                                <h2>BEST 인기상품</h2>
                                <p>에넥스몰의 인기상품을 만나보세요</p>
                            </div>
                            <MainBestTab />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainBest;