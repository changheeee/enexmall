import React, { createContext, useContext, useReducer, useState } from "react"
//useReducer : 컴포넌트에 상태값을 분리하는 함수
//          => 생성 및 수정,삭제 등 상태값을 관리하기 우해서 Reducer사용
//ContextAPI : 배열 및 자료를 전역으로 사용하게 해주는 함수
//createContext() : 자료를 사용하는 범위 설정함수
//useContext() : 자료를 직접 사용하게(연결)해주는 함수

//1.무료철거 2.EO 3.기획 4.최다판매 5.추천 6.인기 7.베스트 
const eventlists = [
    {
        id: 1,
        src: '/images/event/event_01.jpg',
        title: '[2월] 신학기 의자 스페셜',
        date: '2023.02.20 ~ 2023.03.15',
        done: true
    },
    {
        id: 2,
        src: '/images/event/event_02.jpg',
        title: '[3월] 회원가입/포토리뷰 이벤트',
        date: '2023.03.01 ~ 2023.03.31',
        done: true
    },
    {
        id: 3,
        src: '/images/event/event_03.jpg',
        title: 'THE ENEX 강남 오픈 - 대리점 이벤트',
        date: '2023.01.09 ~ 2023.03.31',
        done: true
    },
    {
        id: 4,
        src: '/images/event/event_04.jpg',
        title: 'THE ENEX 강남 오픈 - 온라인몰 이벤트',
        date: '2023.01.10 ~ 2023.04.30',
        done: true
    },
    {
        id: 5,
        src: '/images/event/event_05.jpg',
        title: '[특집] 7일간 우주특가',
        date: '2023.02.23 ~ 2023.03.02',
        done: false
    },
    {
        id: 6,
        src: '/images/event/event_06.jpg',
        title: '[2월] 온 따뜻한 우리집 - 중문',
        date: '2023.02.06 ~ 2023.03.01',
        done: false
    },
    {
        id: 7,
        src: '/images/event/event_07.jpg',
        title: '[2월] 소문난 아이템 특집',
        date: '2023.01.26 ~ 2023.03.01',
        done: false
    },
    {
        id: 8,
        src: '/images/event/event_08.jpg',
        title: '[1월] 설연휴 특별혜택',
        date: '2023.01.19 ~ 2023.01.25',
        done: false
    },
    {
        id: 9,
        src: '/images/event/event_09.jpg',
        title: '[1월] 포토리뷰 1만원',
        date: '2022.12.29 ~ 2023.01.31',
        done: false
    },
    {
        id: 10,
        src: '/images/event/event_10.jpg',
        title: '[1월] 회원전용 시즌 쿠폰팩',
        date: '2022.12.29 ~ 2023.01.31',
        done: false
    },
    {
        id: 11,
        src: '/images/event/event_11.jpg',
        title: '[1월] 회원가입 이벤트',
        date: '2022.12.29 ~ 2023.01.31',
        done: false
    },
    {
        id: 12,
        src: '/images/event/event_12.jpg',
        title: '2023 에넥스로 초대합니다',
        date: '2022.12.29 ~ 2023.01.31',
        done: false
    },
    {
        id: 13,
        src: '/images/event/event_13.jpg',
        title: '[12월] 포토후기 이벤트',
        date: '2022.12.01 ~ 2023.01.01',
        done: false
    },
    {
        id: 14,
        src: '/images/event/event_14.jpg',
        title: '[12월] 회원 웰컴 기프트',
        date: '2022.12.01 ~ 2023.01.01',
        done: false
    },
    {
        id: 15,
        src: '/images/event/event_15.jpg',
        title: '[12월] 선물하기 좋은 날',
        date: '2022.12.01 ~ 2023.01.01',
        done: false
    },
    {
        id: 16,
        src: '/images/event/event_16.jpg',
        title: '[12월] 주문 금액대별 쿠폰',
        date: '2022.12.01 ~ 2023.01.01',
        done: false
    },
    {
        id: 17,
        src: '/images/event/event_17.jpg',
        title: '[12월] GIFT HOLIDAY',
        date: '2022.11.29 ~ 2023.01.01',
        done: false
    },
    {
        id: 18,
        src: '/images/event/event_18.jpg',
        title: '[11월] 나를 찾오리!',
        date: '2022.11.09 ~ 2022.11.30',
        done: false
    },
    {
        id: 19,
        src: '/images/event/event_19.jpg',
        title: '[11월] 첫구매 990원',
        date: '2022.11.14 ~ 2022.11.30',
        done: false
    },
    {
        id: 20,
        src: '/images/event/event_20.jpg',
        title: 'WITH ENEX',
        date: '2022.11.07 ~ 2023.01.25',
        done: false
    },
    {
        id: 21,
        src: '/images/event/event_21.jpg',
        title: '[11월] 출석체크',
        date: '2022.11.01 ~ 2022.11.30',
        done: false
    },
    {
        id: 22,
        src: '/images/event/event_22.jpg',
        title: '[11월] 화목한 타임딜',
        date: '2022.11.01 ~ 2022.11.30',
        done: false
    },
    {
        id: 23,
        src: '/images/event/event_23.jpg',
        title: '[11월] 회원 BIG5 혜택',
        date: '2022.11.01 ~ 2022.11.30',
        done: false
    },
    {
        id: 24,
        src: '/images/event/event_24.jpg',
        title: '[11월] ENEX FLEX FESTA',
        date: '2022.11.01 ~ 2022.11.30',
        done: false
    },
    {
        id: 25,
        src: '/images/event/event_25.jpg',
        title: '[10월] 키친플러스+',
        date: '2022.10.01 ~ 2022.10.31',
        done: false
    },
    {
        id: 26,
        src: '/images/event/event_26.jpg',
        title: '포토리뷰 이벤트',
        date: '2022.10.01 ~ 2022.11.30',
        done: false
    },
    {
        id: 27,
        src: '/images/event/event_27.jpg',
        title: '[10월] 소파의 계절',
        date: '2022.10.01 ~ 2022.10.31',
        done: false
    },
    {
        id: 28,
        src: '/images/event/event_28.jpg',
        title: '[10월] 회원가입',
        date: '2022.10.01 ~ 2022.10.31',
        done: false
    }
]

//액션을 관리하는 함수
function eventlistReducer(state, action) {

}

//범위를 설정하는 함수선언
const EventlistStateContext = createContext();

export function EventlistProvider({ children }) {
    //const [state, setState] = useState('초기값');

    const [state, dispatch] = useReducer(eventlistReducer, eventlists);
    //       [배열,액션]    = useReducer(액션을관리하는함수, 배열을 갖고 있는 함수);

    return (
        <div>
            <EventlistStateContext.Provider value={state}>
                {children}
            </EventlistStateContext.Provider>
        </div>
    )

}

//전역데이터를 사용하도록 연결하는 함수
export function useEventlistState() {
    const context = useContext(EventlistStateContext);
    if (!context) {
        throw new Error('EventlistProvider를 찾을 수 없음');
    }
    return context;
}