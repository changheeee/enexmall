import React from "react"
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import { IoPlaySharp, IoPlayOutline } from "react-icons/io5";


function MainEventBox({ eventlist }) {
    if (eventlist.id <= 7) {
        return (

            <li class="eventslide_cell">
                <div><img src={eventlist.src} /> </div>
                <div>
                    <h4>{eventlist.title}</h4>
                    <p>{eventlist.date}</p>
                </div>
            </li>


        )
    }
}





class CarouselMainEvent extends React.Component {


    componentDidMount() {


        const container = document.querySelector(".eventslide_container");
        const cell = document.querySelector(".eventslide_cell")
        const prevBtn = document.querySelector(".prev");
        const nextBtn = document.querySelector(".next");

        (function addEvent() {
            prevBtn.addEventListener('click', translateContainer.bind(this, 1));
            nextBtn.addEventListener('click', translateContainer.bind(this, -1));
        })();

        function translateContainer(direction) {
            const selectedBtn = (direction === 1) ? 'prev' : 'next';
            container.style.transitionDuration = '600ms';
            container.style.transform = `translateX(${direction * (100 / 7)}%)`;
            container.ontransitionend = () => reorganizeEl(selectedBtn);
        }

        function reorganizeEl(selectedBtn) {
            container.removeAttribute('style');
            (selectedBtn === 'prev') ? container.insertBefore(container.lastElementChild, container.firstElementChild) : container.appendChild(container.firstElementChild);
        }

    }

    render() {
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

        return (
            <div>
                <div class="eventslide_wrap">
                    <div className='event_main_tit'>
                        <span>ENEX</span> <strong>EVENT</strong>
                    </div>
                    <ul class="eventslide_container">
                        {eventlists.map((eventlist) => (
                            <MainEventBox eventlist={eventlist} key={eventlist.id} />
                        ))}
                    </ul>
                    <div class="eventslide_btn_container">
                        <button class="prev"><TfiAngleLeft style={{ color: '#bbb', width: '70%', height: '70%' }} /></button>
                        <button><IoPlaySharp style={{ color: '#bbb', width: '70%', height: '70%' }} /></button>
                        <button style={{ display: 'none' }}><IoPlayOutline style={{ color: 'red', width: '70%', height: '70%' }} /></button>
                        <button class="next"><TfiAngleRight style={{ color: '#bbb', width: '70%', height: '70%' }} /></button>
                    </div>
                </div>
            </div>

        )
    }
}

export default CarouselMainEvent;