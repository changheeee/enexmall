import React, { useEffect } from "react";
import MainCarousel from "./bootstrap/maincarousel";
import Footer from "./footer";
// import KakaoMap from "./kakaomap";
import MainBest from "./main_components/mainbest";
import MainEvent from "./main_components/mainevent";
import MainNew from "./main_components/mainnew";
import MainSns from "./main_components/mainsns";


function Main() {

    return (
        <div id="main_wrap">
            <MainCarousel />
            <MainBest />
            <MainEvent />
            <MainNew />
            <MainSns />

            <Footer />
            {/* <div style={{
                margin: '0 auto',
                marginTop: '40px',
                width: '1120px',
                height: '400px',
                backgroundColor: '#cccccc'
            }}>
                <h3>카카오 지도넣기</h3>
                <KakaoMap />
            </div> */}

        </div>
    )
}

export default Main;