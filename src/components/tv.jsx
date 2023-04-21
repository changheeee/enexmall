import React, { useState } from "react";
import YouTube from "react-youtube";
import Footer from "../footer";





function TvIn({ tvlist }) {
    // const [visiable, setVisable] = useState(false);
    // onClick = {() => {setVisable(!visiable);}}

    if (tvlist.id < 10) {
        return (
            <div className="tv_list">
                {/* <img src={tvlist.src} alt='' /> */}
                <div className="tv_youtube">
                    <YouTube
                        videoId={tvlist.vid}
                        opts={{
                            width: "100%",
                            height: '213.69px',
                            playerVars: {
                                autoplay: 0, //자동재생 O
                                rel: 0, //관련 동영상 표시하지 않음
                                modestbranding: 1 // 컨트롤 바에 youtube 로고를 표시하지 않음
                            }
                        }}
                    />
                </div>
                <ul className="tv_tit">
                    <li><h3>{tvlist.title}</h3></li>
                    <li><p>{tvlist.date}</p></li>

                </ul>
            </div>
        )
    }
}


function Tv() {
    const tvlists = [
        {
            id: 1,
            vid: 'Bl3FjTfbZjc',
            title: '르메종 통세라믹 식탁',
            date: '2022.04.19 ~ 2022.09.30',
            src: '/images/tv/tv_01.jpg',
            link: ''
        },
        {
            id: 2,
            vid: 'rC2WDNUrYs0',
            title: 'EKI 퍼스트 주방가구 내부',
            date: '2022.04.19 ~ 2022.09.30',
            src: '/images/tv/tv_02.jpg',
            link: ''
        },
        {
            id: 3,
            vid: 'ZLC2N_Ga5a0',
            title: '50주년 이벤트 2',
            date: '2022.01.01 ~ 2022.06.30',
            src: '/images/tv/tv_03.jpg',
            link: ''
        },
        {
            id: 4,
            vid: 'lO31dNPVHSU',
            title: '50주년 이벤트 1',
            date: '2022.01.01 ~ 2022.06.30',
            src: '/images/tv/tv_04.jpg',
            link: ''
        },
        {
            id: 5,
            vid: '2yJaj0NR-V8',
            title: '팽현숙의 미니멀 주방',
            date: '2022.02.20 ~ 2022.06.30',
            src: '/images/tv/tv_05.jpg',
            link: ''
        },
        {
            id: 6,
            vid: 'ANrpabBjDP8',
            title: '네이버라이브 메이킹',
            date: '2022.01.01 ~ 2022.06.30',
            src: '/images/tv/tv_06.jpg',
            link: ''
        },
        {
            id: 7,
            vid: 'Bp65bz57Q2w',
            title: '팽락부부 청평주방',
            date: '2022.01.01 ~ 2022.06.30',
            src: '/images/tv/tv_07.jpg',
            link: ''
        },
        {
            id: 8,
            vid: 'F8rWfroFAJ0',
            title: '아이든 매트리스',
            date: '2022.01.01 ~ 2022.06.30',
            src: '/images/tv/tv_08.jpg',
            link: ''
        },
        {
            id: 9,
            vid: 'F8rWfroFAJ0',
            title: '에넥스몰 CM',
            date: '2022.01.01 ~ 2022.06.30',
            src: '/images/tv/tv_09.jpg',
            link: ''
        }
    ]

    return (
        <>
            <div className="sub_top">
                <div className="sub_tit" style={{ borderBottom: '0' }}>
                    <div className="sub_cat" ><span>HOME > 에넥스 TV</span></div>
                    <h3>에넥스 TV</h3>
                </div>

            </div>
            <div className="sub_in_wrap">
                <div className="sub_in_content">
                    {tvlists.map((tvlist) => (
                        <TvIn tvlist={tvlist} key={tvlist.id} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Tv;