import React from "react";
import { Link } from "react-router-dom";
import EventTab from "../bootstrap/eventtab";
import { useEventlistState } from "../event_context";
import Footer from "../footer";

const resultLists = [
    {
        id: 1,
        notice: true,
        title: '9/9 네이버 쇼핑라이브 기프티콘 당첨자 발표',
        date: '2021.09.09',
        seen: '76',
        hot: true
    },
    {
        id: 2,
        notice: false,
        title: '[12월 메인이벤트] 100원 래플 당첨자',
        date: '2021.12.29',
        seen: '282',
        hot: false
    },
    {
        id: 3,
        notice: true,
        title: '[추석맞이 이벤트] 매일이 혜택 - 20일 만기 당첨자',
        date: '2022.09.15',
        seen: '12',
        hot: true
    },
    {
        id: 4,
        notice: false,
        title: '[노출] 설맞이 회원가입 주유비 이벤트 발표',
        date: '2023.01.30',
        seen: '2',
        hot: false
    }
    ,
    {
        id: 5,
        notice: true,
        title: '[12월 메인이벤트] 100원 래플 당첨자',
        date: '2021.12.29',
        seen: '282',
        hot: true
    }
    ,
    {
        id: 6,
        notice: false,
        title: '[추석맞이 이벤트] 매일이 혜택 - 20일 만기 당첨자',
        date: '2022.09.15',
        seen: '12',
        hot: false
    }
    ,
    {
        id: 7,
        notice: false,
        title: '[노출] 설맞이 회원가입 주유비 이벤트 발표',
        date: '2023.01.30',
        seen: '2',
        hot: false
    }
]

//진핸중인 이벤트리스트
function EventList({ eventlist }) {
    if (eventlist.done == true) {
        return (
            <div className="event_list_txt">
                <img src={eventlist.src} alt="" />
                <h5>{eventlist.title}</h5>
                <p>{eventlist.date}</p>
            </div>
        )
    }
}

//종료된 이벤트리스트
function EndEvent({ eventlist }) {
    if (eventlist.done == false) {
        return (
            <div style={{ position: 'relative' }} className="event_list_txt">
                <span className="end_toggle">종료</span>
                <img src={eventlist.src} alt="" style={{ filter: 'grayscale(100%)', border: '1px solid hsla(0, 0%, 28%, 0.136)' }} />
                <h5>{eventlist.title}</h5>
                <p>{eventlist.date}</p>
            </div>
        )

    }
}

//진행중인 이벤트
export function EventCurrent() {
    const eventlists = useEventlistState();
    return (
        <div className="sub_in_wrap" style={{ marginTop: '50px' }}>
            {eventlists.map((eventlist) => (
                <EventList eventlist={eventlist} key={eventlist.id} />
            ))}
        </div>
    )
};

//종료된 이벤트
export function EventEnd() {
    const eventlists = useEventlistState();
    return (
        <div className="sub_in_wrap" style={{ marginTop: '50px' }}>
            {eventlists.map((eventlist) => (
                <EndEvent eventlist={eventlist} key={eventlist.id} />
            ))}
        </div>
    )
}


function ResultListTop({ resultList }) {
    return (
        <div className="result_list">
            <div style={{ width: '8%' }}>{resultList.id}</div>
            <div style={{ width: '72%' }}>{resultList.title} {resultList.hot && <img src="/images/result/icon_board_hot.png" alt="" />}</div>
            <div style={{ width: '15%' }}>{resultList.date}</div>
            <div style={{ width: '5%' }}>{resultList.seen}</div>
        </div>
    )
}

function ResultListBot({ resultList }) {
    if (resultList.notice == true) {
        return (
            <div className="result_list">
                <div style={{ width: '8%' }}><img src="/images/result/icon_board_notice.png" /></div>
                <div style={{ width: '72%' }}>{resultList.title}</div>
                <div style={{ width: '15%' }}>{resultList.date}</div>
                <div style={{ width: '5%' }}>{resultList.seen}</div>
            </div>
        )
    }
}

//당첨자 발표
export function EventResult() {
    return (
        <div className="sub_in_wrap" style={{ marginTop: '50px' }}>
            <div className="result_wrap">
                <ul className="result_header">
                    <li style={{ width: '8%' }}>번호</li>
                    <li style={{ width: '72%' }}>제목</li>
                    <li style={{ width: '15%' }}>날짜</li>
                    <li style={{ width: '5%' }}>조회</li>
                </ul>
                <div className="result_body">
                    <div className="result_top">
                        {resultLists.map((resultList) => (
                            <ResultListBot resultList={resultList} key={resultList.id} />
                        ))}
                    </div>

                    <div className="result_bot">
                        {resultLists.map((resultList) => (
                            <ResultListTop resultList={resultList} key={resultList.id} />
                        ))}
                    </div>


                </div>
            </div>
        </div>
    )
}


function Event() {
    const eventlists = useEventlistState();

    return (
        <div>
            <div className="sub_top">
                <div className="sub_tit" style={{ borderBottom: '0' }}>
                    <div className="sub_cat" ><span>HOME > 이벤트</span></div>
                    <h3>이벤트</h3>
                </div>
                <div className="sub_in_content">
                    <div className="event_nav">
                        <EventTab />
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default Event;