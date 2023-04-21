import React from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";



export function ReviewItem2({ item }) {

    return (
        <div div className="review2_wrap">
            <div className="review_in">
                <div className="review_top">
                    <img src={item.src} alt="" />
                    <div className="review_top_txt">
                        {/* 리부제목 */}
                        <h4>이사하고 드레스룸으로 쓸려고 맞췄는데 튼튼하고 좋아요 ...</h4>
                        {/* 리뷰내용 */}
                        <p>이사하고 드레스룸으로 쓸려고 맞췄는데 튼튼하고 좋아요 코너장 밑에 물건 넣기가 조금 힘들긴하지만 전체적으로 만족합니다</p>
                    </div>
                </div>
                <div className="review_bot">
                    <div className="review_bot_l">
                        <img src={item.src} alt="" />
                    </div>
                    <div className="review_bot_r">
                        <ul className="review_tit">
                            <li><h6>{item.title}</h6></li>
                            <li>
                                <span>{item.price}</span><b>{item.discount}</b>
                                <p>{item.dcprice}</p>
                            </li>
                        </ul>
                        <ul className="review_toggle">
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
                </div>
            </div>
        </div>

    )

}

class CarouselReview extends React.Component {



    componentDidMount() {


        const container = document.querySelector(".container");
        const cell = document.querySelector(".cell")
        const prevBtn = document.querySelector(".prev");
        const nextBtn = document.querySelector(".next");

        (function addEvent() {
            prevBtn.addEventListener('click', translateContainer.bind(this, 1));
            nextBtn.addEventListener('click', translateContainer.bind(this, -1));
        })();

        function translateContainer(direction) {
            const selectedBtn = (direction === 1) ? 'prev' : 'next';
            container.style.transitionDuration = '600ms';
            container.style.transform = `translateX(${direction * (100 / 2)}%)`;
            container.ontransitionend = () => reorganizeEl(selectedBtn);
        }

        function reorganizeEl(selectedBtn) {
            container.removeAttribute('style');
            (selectedBtn === 'prev') ? container.insertBefore(container.lastElementChild, container.firstElementChild) : container.appendChild(container.firstElementChild);
        }


    }




    render() {
        const items = [
            {
                id: 1,
                category: 'wardrobe',
                src: '/images/product/wardrobe_01.jpg',
                subtitle: '',
                title: '[매장전용] EK5 뉴비엔 시스템 주방가구',
                price: '',
                discount: '',
                dcprice: '3,400,000원',
                toggle1: true,
                toggle2: false,
                toggle3: false,
                toggle4: true,
                toggle5: false,
                toggle6: true,
                toggle7: false,
                toggle8: false,
                count: '1',
                soldout: false

            },
            {
                id: 2,
                category: 'wardrobe',
                src: '/images/product/wardrobe_02.jpg',
                subtitle: '',
                title: '[매장전용] EK7 뉴모닝 시스템 주방가구',
                price: '',
                discount: '',
                dcprice: '4,250,000원',
                toggle1: true,
                toggle2: false,
                toggle3: false,
                toggle4: false,
                toggle5: true,
                toggle6: true,
                toggle7: true,
                toggle8: false,
                count: '2',
                soldout: false
            },
            {
                id: 3,
                category: 'wardrobe',
                src: '/images/product/wardrobe_03.jpg',
                subtitle: '[에넥스EW]',
                title: '[EW] 모아 붙박이장(실속형)-15cm',
                price: '81,000원',
                discount: '36%',
                dcprice: '51,700원',
                toggle1: false,
                toggle2: false,
                toggle3: false,
                toggle4: false,
                toggle5: false,
                toggle6: false,
                toggle7: false,
                toggle8: false,
                count: '3',
                soldout: false
            },
            {
                id: 4,
                category: 'wardrobe',
                src: '/images/product/wardrobe_04.jpg',
                subtitle: '',
                title: '[매장전용] EK7 프렌치 시스템 주방가구',
                price: '',
                discount: '',
                dcprice: '5,450,000원',
                toggle1: true,
                toggle2: false,
                toggle3: true,
                toggle4: false,
                toggle5: false,
                toggle6: true,
                toggle7: false,
                toggle8: false,
                count: '4',
                soldout: false
            },
            {
                id: 5,
                category: 'wardrobe',
                src: '/images/product/wardrobe_05.jpg',
                subtitle: '[에넥스EW]',
                title: '[EW] 버클리 작은방 붙박이장 일반형(거울포함)-1350~1500mm',
                price: '1,059,000원',
                discount: '27%',
                dcprice: '770,200원',
                toggle1: false,
                toggle2: false,
                toggle3: false,
                toggle4: false,
                toggle5: false,
                toggle6: false,
                toggle7: false,
                toggle8: false,
                count: '5',
                soldout: false
            },
            {
                id: 6,
                category: 'wardrobe',
                src: '/images/product/wardrobe_06.jpg',
                subtitle: '[에넥스EW]',
                title: '[EW] 시그니처 슬라이딩 붙박이장(고급형)- 15cm',
                price: '95,000원',
                discount: '32%',
                dcprice: '64,500원',
                toggle1: false,
                toggle2: true,
                toggle3: false,
                toggle4: false,
                toggle5: false,
                toggle6: false,
                toggle7: false,
                toggle8: true,
                count: '6',
                soldout: false
            },
            {
                id: 7,
                category: 'wardrobe',
                src: '/images/product/wardrobe_07.jpg',
                subtitle: '[에넥스EW]',
                title: '[EW] 시그니처 슬라이딩 붙박이장(실속형)-15cm',
                price: '91,000원',
                discount: '32%',
                dcprice: '61,500원',
                toggle1: false,
                toggle2: true,
                toggle3: false,
                toggle4: false,
                toggle5: false,
                toggle6: false,
                toggle7: false,
                toggle8: true,
                count: '7',
                soldout: false
            },
            {
                id: 8,
                category: 'wardrobe',
                src: '/images/product/wardrobe_08.jpg',
                subtitle: '',
                title: '[매장전용] EK7 쇼콜라 시스템 주방가구',
                price: '',
                discount: '',
                dcprice: '5,210,000원',
                toggle1: true,
                toggle2: false,
                toggle3: false,
                toggle4: false,
                toggle5: false,
                toggle6: false,
                toggle7: false,
                toggle8: false,
                count: '8',
                soldout: false
            },
            {
                id: 9,
                category: 'wardrobe',
                src: '/images/product/wardrobe_09.jpg',
                subtitle: '',
                title: '[매장전용] EK5 케렌시아 시스템 주방가구',
                price: '',
                discount: '',
                dcprice: '3,830,000원',
                toggle1: true,
                toggle2: false,
                toggle3: false,
                toggle4: false,
                toggle5: false,
                toggle6: false,
                toggle7: false,
                toggle8: false,
                count: '9',
                soldout: false
            },
            {
                id: 10,
                category: 'wardrobe',
                src: '/images/product/wardrobe_10.jpg',
                subtitle: '[에넥스EW]',
                title: 'EWI 제이 붙박이장 (나노포일 몸체) (15cm)',
                price: '',
                discount: '',
                dcprice: '62,000원',
                toggle1: false,
                toggle2: false,
                toggle3: true,
                toggle4: false,
                toggle5: false,
                toggle6: true,
                toggle7: false,
                toggle8: true,
                count: '10',
                soldout: false
            },
            {
                id: 11,
                category: 'dressroom',
                src: '/images/product/dressroom_01.jpg',
                subtitle: '[에넥스EB]',
                title: 'ALL NEW 리얼스틸 행거장/드레스룸',
                price: '129,000원',
                discount: '36%',
                dcprice: '82,000원',
                toggle1: false,
                toggle2: false,
                toggle3: false,
                toggle4: true,
                toggle5: false,
                toggle6: true,
                toggle7: false,
                toggle8: false,
                toggle9: false,
                count: '1',
                soldout: false
            },
            {
                id: 12,
                category: 'dressroom',
                src: '/images/product/dressroom_02.jpg',
                subtitle: '[에넥스EB]',
                title: '[EB] 피오나 슬라이딩 장롱-303cm',
                price: '1,090,000원',
                discount: '19%',
                dcprice: '1,350,000원',
                toggle1: false,
                toggle2: false,
                toggle3: false,
                toggle4: false,
                toggle5: false,
                toggle6: false,
                toggle7: false,
                toggle8: false,
                count: '2',
                soldout: false
            },
            {
                id: 13,
                category: 'dressroom',
                src: '/images/product/dressroom_03.jpg',
                subtitle: '[에넥스EB]',
                title: 'ALL NEW 리얼스틸 행거장/드레스룸 풀세트 [3%추가할인]',
                price: '974,000원',
                discount: '31%',
                dcprice: '670,000원',
                toggle1: false,
                toggle2: false,
                toggle3: false,
                toggle4: true,
                toggle5: false,
                toggle6: true,
                toggle7: false,
                toggle8: false,
                toggle9: false,
                count: '3',
                soldout: false
            },
            {
                id: 14,
                category: 'dressroom',
                src: '/images/product/dressroom_04.jpg',
                subtitle: '[에넥스EB]',
                title: 'ALL NEW 리얼스틸 2단 행거 선반장',
                price: '139,000원',
                discount: '39%',
                dcprice: '84,000원',
                toggle1: false,
                toggle2: false,
                toggle3: false,
                toggle4: false,
                toggle5: false,
                toggle6: false,
                toggle7: false,
                toggle8: false,
                count: '4',
                soldout: false
            },
            {
                id: 15,
                category: 'dressroom',
                src: '/images/product/dressroom_05.jpg',
                subtitle: '[에넥스EB]',
                title: '뷰티 갤러리 슬라이딩 싱글장(1200)',
                price: '659,000원',
                discount: '24%',
                dcprice: '500,000원',
                toggle1: false,
                toggle2: false,
                toggle3: false,
                toggle4: false,
                toggle5: false,
                toggle6: true,
                toggle7: false,
                toggle8: false,
                count: '5',
                soldout: false
            },
            {
                id: 16,
                category: 'dressroom',
                src: '/images/product/dressroom_06.jpg',
                subtitle: '[에넥스EB]',
                title: '[EB] 까사 장롱-305cm(3통)',
                price: '1,499,000원',
                discount: '24%',
                dcprice: '1,136,000원',
                toggle1: false,
                toggle2: false,
                toggle3: false,
                toggle4: false,
                toggle5: false,
                toggle6: false,
                toggle7: false,
                toggle8: false,
                count: '6',
                soldout: false
            },
            {
                id: 17,
                category: 'dressroom',
                src: '/images/product/dressroom_07.jpg',
                subtitle: '[에넥스EB]',
                title: '컬러핏 싱글장-3단 서랍형 옷장',
                price: '259,000원',
                discount: '23%',
                dcprice: '199,000원',
                toggle1: false,
                toggle2: false,
                toggle3: false,
                toggle4: false,
                toggle5: false,
                toggle6: false,
                toggle7: true,
                toggle8: false,
                count: '7',
                soldout: false
            },
            {
                id: 18,
                category: 'dressroom',
                src: '/images/product/dressroom_08.jpg',
                subtitle: '[에넥스EB]',
                title: '뷰티 갤러리 슬라이딩 싱글장(1500)',
                price: '759,000원',
                discount: '19%',
                dcprice: '610,000원',
                toggle1: false,
                toggle2: false,
                toggle3: false,
                toggle4: false,
                toggle5: false,
                toggle6: false,
                toggle7: true,
                toggle8: false,
                count: '8',
                soldout: false
            },
            {
                id: 19,
                category: 'dressroom',
                src: '/images/product/dressroom_09.jpg',
                subtitle: '[에넥스EB]',
                title: '[EB] 샤르망 슬라이딩 싱글장(1200)',
                price: '719,000원',
                discount: '26%',
                dcprice: '526,000원',
                toggle1: false,
                toggle2: false,
                toggle3: false,
                toggle4: false,
                toggle5: false,
                toggle6: false,
                toggle7: false,
                toggle8: false,
                count: '9',
                soldout: false
            },
            {
                id: 20,
                category: 'dressroom',
                src: '/images/product/dressroom_10.jpg',
                subtitle: '[에넥스EB]',
                title: 'ALL NEW 리얼스틸 3단 서랍형',
                price: '199,000원',
                discount: '23%',
                dcprice: '153,000원',
                toggle1: false,
                toggle2: false,
                toggle3: false,
                toggle4: false,
                toggle5: false,
                toggle6: false,
                toggle7: false,
                toggle8: false,
                count: '10',
                soldout: false
            },
            {
                id: 21,
                category: 'bedroom',
                src: '/images/product/bedroom_01.jpg',
                subtitle: '[에넥스EB]',
                title: '베이직 앳홈 5단 서랍장',
                price: '220,000원',
                discount: '18%',
                dcprice: '179,000원',
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: true, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: true, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                count: '1',
                soldout: false
            },
            {
                id: 22,
                category: 'bedroom',
                src: '/images/product/bedroom_02.jpg',
                subtitle: '[에넥스EB]',
                title: '[EB] 피오나 골드 슬라이딩 장롱-303cm',
                price: '1,049,000원',
                discount: '',
                dcprice: '1,049,000원',
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: false, //신상품
                toggle9: false, //주문폭주
                toggle10: false,
                count: '2',
                soldout: false
            },
            {
                id: 23,
                category: 'bedroom',
                src: '/images/product/bedroom_03.jpg',
                subtitle: '[에넥스EB]',
                title: '[EB] 모모 USB 멀티 수납 화장대 + 스툴 포함',
                price: '599,000원',
                discount: '13%',
                dcprice: '520,000원',
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: false, //신상품
                toggle9: false, //주문폭주
                toggle10: false,
                count: '3',
                soldout: false
            },
            {
                id: 24,
                category: 'bedroom',
                src: '/images/product/bedroom_04.jpg',
                subtitle: '[에넥스EB]',
                title: '키코 가죽 원목 화장대의자',
                price: '105,000원',
                discount: '49%',
                dcprice: '53,000원',
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: false, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                count: '4',
                soldout: false
            },
            {
                id: 25,
                category: 'bedroom',
                src: '/images/product/bedroom_05.jpg',
                subtitle: '[에넥스EB]',
                title: '온다 와이드 3단 서랍장',
                price: '339,000원',
                discount: '26%',
                dcprice: '249,000원',
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: true, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                count: '5',
                soldout: false
            },
            {
                id: 26,
                category: 'bedroom',
                src: '/images/product/bedroom_06.jpg',
                subtitle: '[에넥스EB]',
                title: '딥슬립 LED 조명 서랍형 수납침대(SS)-매트리스 별도',
                price: '459,000원',
                discount: '31%',
                dcprice: '316,000원',
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: true, // 인기
                toggle7: false, //베스트
                toggle8: false, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                count: '6',
                soldout: false
            },
            {
                id: 27,
                category: 'bedroom',
                src: '/images/product/bedroom_07.jpg',
                subtitle: '[에넥스EB]',
                title: '[EB] 모모 USB 멀티 수납 화장대',
                price: '519,000원',
                discount: '28%',
                dcprice: '369,000원',
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: true, // 인기
                toggle7: false, //베스트
                toggle8: false, //신상품
                toggle9: true, //주문폭주
                toggle10: false, //품절
                count: '7',
                soldout: false
            },
            {
                id: 28,
                category: 'bedroom',
                src: '/images/product/bedroom_08.jpg',
                subtitle: '[에넥스EB]',
                title: '슬립온 LED 조명 서랍형 수납침대(SS)-매트리스미포함',
                price: '459,000원',
                discount: '31%',
                dcprice: '316,000원',
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: false, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                count: '8',
                soldout: false
            },
            {
                id: 29,
                category: 'bedroom',
                src: '/images/product/bedroom_09.jpg',
                subtitle: '[에넥스EB]',
                title: '[EB] 데일리 원목 좌식 화장대 (슬라이딩 거울 포함)',
                price: '259,000원',
                discount: '19%',
                dcprice: '209,000원',
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: false, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                count: '9',
                soldout: false
            },
            {
                id: 30,
                category: 'bedroom',
                src: '/images/product/bedroom_10.jpg',
                subtitle: '[에넥스EB]',
                title: '[EB] 베일리 800 3단 서랍장',
                price: '179,000원',
                discount: '29%',
                dcprice: '126,000원',
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: false, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                count: '10',
                soldout: false
            },
            {
                id: 31,
                category: 'kitchen',
                src: '/images/product/kitchen_01.jpg',
                subtitle: '[에넥스EK]',
                title: '[EK] 페블스톤 대리석 홈바 아일랜드식탁 1200(오픈형)',
                price: '467,000원',
                discount: '26%',
                dcprice: '344,000원',
                toggle0: true, //빠른배송
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: false, //신상품
                toggle9: true, //주문폭주
                toggle10: false, //품절
                count: '1',
                soldout: false
            },
            {
                id: 32,
                category: 'kitchen',
                src: '/images/product/kitchen_02.jpg',
                subtitle: '[에넥스EK]',
                title: '[EKD] 르메종 통세라믹 6인용 식탁(샴페인골드/의자제외)',
                price: '380,000원',
                discount: '28%',
                dcprice: '528,000원',
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: false, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                toggle11: true, //이벤트
                count: '2',
                soldout: false
            },
            {
                id: 33,
                category: 'kitchen',
                src: '/images/product/kitchen_03.jpg',
                subtitle: '[에넥스EK]',
                title: '[EK] 슈페너 주방 수납장 시리즈 (800/1200)',
                price: '150,000원',
                discount: '14%',
                dcprice: '128,000원',
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: true, //추천
                toggle6: true, // 인기
                toggle7: false, //베스트
                toggle8: true, //신상품
                toggle9: false, //주문폭주
                toggle10: true, //품절
                count: '3',
                soldout: true
            },
            {
                id: 34,
                category: 'kitchen',
                src: '/images/product/kitchen_04.jpg',
                subtitle: '[에넥스EK]',
                title: '[EK] 페블스톤 대리석 홈바 아일랜드식탁 1200(수납형)',
                price: '473,000원',
                discount: '24%',
                dcprice: '355,000원',
                toggle0: true, //빠른배송
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: false, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                count: '4',
                soldout: false
            },
            {
                id: 35,
                category: 'kitchen',
                src: '/images/product/kitchen_05.jpg',
                subtitle: '[에넥스EK]',
                title: '[EK] 페블스톤 대리석 홈바 아일랜드식탁 1200(수납형/무선충전멀티콘센트)',
                price: '591,000원',
                discount: '25%',
                dcprice: '441,000원',
                toggle0: true, //빠른배송
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: false, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                count: '5',
                soldout: false
            },
            {
                id: 36,
                category: 'kitchen',
                src: '/images/product/kitchen_06.jpg',
                subtitle: '[에넥스EK]',
                title: '[EK] 페블스톤 대리석 홈바 아일랜드식탁 1200(오픈형/무선충전멀티콘센트)',
                price: '591,000원',
                discount: '25%',
                dcprice: '441,000원',
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: false, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                count: '6',
                soldout: false
            },
            {
                id: 37,
                category: 'kitchen',
                src: '/images/product/kitchen_07.jpg',
                subtitle: '[에넥스EK]',
                title: '[EK] 릴리아 테이블형 아일랜드 식탁(오픈형)',
                price: '391,000원',
                discount: '41%',
                dcprice: '229,000원',
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: true, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                count: '7',
                soldout: false
            },
            {
                id: 38,
                category: 'kitchen',
                src: '/images/product/kitchen_08.jpg',
                subtitle: '[에넥스EK]',
                title: '[EKD] 알베스 통세라믹 원목 4인 벤치 식탁세트',
                price: '560,000원',
                discount: '16%',
                dcprice: '467,000원',
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: true, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                count: '8',
                soldout: false
            },
            {
                id: 39,
                category: 'kitchen',
                src: '/images/product/kitchen_09.jpg',
                subtitle: '[에넥스EK]',
                title: '[EKD] (1+1) 미카 PU 식탁의자',
                price: '169,000원',
                discount: '43%',
                dcprice: '95,000원',
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: false, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                count: '9',
                soldout: false
            },
            {
                id: 40,
                category: 'kitchen',
                src: '/images/product/kitchen_10.jpg',
                subtitle: '[에넥스EK]',
                title: '비엣 원목 라탄 800 낮은 수납장',
                price: '528,000원',
                discount: '47%',
                dcprice: '279,000원',
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: false, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                count: '10',
                soldout: false
            },
            {
                id: 41,
                category: 'livingroom',
                src: '/images/product/livingroom_01.jpg',
                subtitle: '[에넥스EL]',
                title: '[ES] 블랑 커버링 4인용 패브릭소파+오토만[착불]',
                price: '1,749,000원',
                discount: '42%',
                dcprice: '999,000원',
                toggle0: false, //빠른배송
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: true, //신상품
                toggle9: true, //주문폭주
                toggle10: false, //품절
                count: '1',
                soldout: false
            },
            {
                id: 42,
                category: 'livingroom',
                src: '/images/product/livingroom_02.jpg',
                subtitle: '[에넥스EL]',
                title: '[ES] 블랑 커버링 4인용 패브릭소파[착불]',
                price: '1,639,000원',
                discount: '48%',
                dcprice: '850,000원',
                toggle0: false, //빠른배송
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: true, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: true, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                count: '2',
                soldout: false
            },
            {
                id: 43,
                category: 'livingroom',
                src: '/images/product/livingroom_03.jpg',
                subtitle: '[에넥스EL]',
                title: '메리 아쿠아텍스 4인소파 (팔걸이타입 선택)',
                price: '990,000원',
                discount: '57%',
                dcprice: '419,000원',
                toggle0: false, //빠른배송
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: false, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                count: '3',
                soldout: false
            },
            {
                id: 44,
                category: 'livingroom',
                src: '/images/product/livingroom_04.jpg',
                subtitle: '[에넥스EL]',
                title: '[ES] 블랑 블루 커버링 4인용 패브릭소파+오토만',
                price: '1,749,000원',
                discount: '45%',
                dcprice: '950,000원',
                toggle0: false, //빠른배송
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: false, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                count: '4',
                soldout: false
            },
            {
                id: 45,
                category: 'livingroom',
                src: '/images/product/livingroom_05.jpg',
                subtitle: '[에넥스EL]',
                title: '[ES] 릴렉스 기절소파 2인 + 스툴',
                price: '647,000원',
                discount: '23%',
                dcprice: '493,000원',
                toggle0: false, //빠른배송
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: false, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                count: '5',
                soldout: false
            },
            {
                id: 46,
                category: 'livingroom',
                src: '/images/product/livingroom_06.jpg',
                subtitle: '[에넥스EL]',
                title: '릴렉스 기절소파 1인용 + 스툴 (2컬러)',
                price: '591,000원',
                discount: '39%',
                dcprice: '359,000원',
                toggle0: false, //빠른배송
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: false, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                count: '6',
                soldout: false
            },
            {
                id: 47,
                category: 'livingroom',
                src: '/images/product/livingroom_07.jpg',
                subtitle: '[에넥스EL]',
                title: '[ES] 꼼마 모듈 패브릭 소파 3인용(1인+2인)',
                price: '',
                discount: '',
                dcprice: '713,000원',
                toggle0: false, //빠른배송
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: true, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: true, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                count: '7',
                soldout: false
            },
            {
                id: 48,
                category: 'livingroom',
                src: '/images/product/livingroom_08.jpg',
                subtitle: '[에넥스EL]',
                title: '[ES] 블랑 블루 커버링 4인용 패브릭소파',
                price: '1,639,000원',
                discount: '51%',
                dcprice: '790,000원',
                toggle0: false, //빠른배송
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: false, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                count: '8',
                soldout: false
            },
            {
                id: 49,
                category: 'livingroom',
                src: '/images/product/livingroom_09.jpg',
                subtitle: '[에넥스EL]',
                title: '[EL] 오브제 LED 벽난로 콘솔 장식장(아치형)',
                price: '239,000원',
                discount: '20%',
                dcprice: '189,000원',
                toggle0: false, //빠른배송
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: true, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: true, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                count: '9',
                soldout: false
            },
            {
                id: 50,
                category: 'livingroom',
                src: '/images/product/livingroom_10.jpg',
                subtitle: '[에넥스EL]',
                title: '플렉스 LED 확장형 거실장',
                price: '399,000원',
                discount: '31%',
                dcprice: '274,000원',
                toggle0: false, //빠른배송
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: false, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                count: '10',
                soldout: false
            },
            {
                id: 51,
                category: 'door',
                src: '/images/product/door_01.jpg',
                subtitle: '[에넥스EHI]',
                title: '[EHI] 초슬림 3연동 자동 중문 (1100~1300)',
                price: '2,866,000원',
                discount: '19%',
                dcprice: '2,293,000원',
                toggle0: false, //빠른배송
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: true, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                count: '1',
                soldout: false
            },
            {
                id: 52,
                category: 'door',
                src: '/images/product/door_02.jpg',
                subtitle: '[에넥스EHI]',
                title: '[EHI] 샤인 브론즈 슬림도어 3연동 아파트 현관중문 (1,100~1,400)',
                price: '1,598,000원',
                discount: '37%',
                dcprice: '995,000원',
                toggle0: false, //빠른배송
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: false, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                count: '2',
                soldout: false
            },
            {
                id: 53,
                category: 'door',
                src: '/images/product/door_03.jpg',
                subtitle: '[에넥스EHI]',
                title: '[EHI] 하이 모던 아치형 반자동 중문',
                price: '2,376,000원',
                discount: '27%',
                dcprice: '1,733,000원',
                toggle0: false, //빠른배송
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: true, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                count: '3',
                soldout: false
            },
            {
                id: 54,
                category: 'door',
                src: '/images/product/door_04.jpg',
                subtitle: '[에넥스EHI]',
                title: '[EHI] 브론즈 인쇄망입 오픈형 슬림도어 3연동 아파트 현관중문 (1,100~1,500)',
                price: '1,209,000원',
                discount: '21%',
                dcprice: '955,000원',
                toggle0: false, //빠른배송
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: false, // 인기
                toggle7: true, //베스트
                toggle8: false, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                count: '4',
                soldout: false
            },
            {
                id: 55,
                category: 'door',
                src: '/images/product/door_05.jpg',
                subtitle: '[에넥스EHI]',
                title: '[EHI] 아모르 아치 원슬라이딩 자동 중문 (800~1300)',
                price: '3,117,000원',
                discount: '20%',
                dcprice: '2,493,000원',
                toggle0: false, //빠른배송
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: true, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                count: '5',
                soldout: false
            },
            {
                id: 56,
                category: 'door',
                src: '/images/product/door_06.jpg',
                subtitle: '[에넥스EHI]',
                title: '[EHI] 아크네 아치형 반자동 중문 (W1200)',
                price: '2,430,000원',
                discount: '16%',
                dcprice: '2,019,000원',
                toggle000: true, //국내제작
                toggle0: false, //빠른배송
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: true, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: true, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                count: '6',
                soldout: false
            },
            {
                id: 57,
                category: 'door',
                src: '/images/product/door_07.jpg',
                subtitle: '[에넥스EHI]',
                title: '[EHI] 끌레르 원슬라이딩 자동 중문 (800~1300)',
                price: '2,670,000원',
                discount: '20%',
                dcprice: '2,136,000원',
                toggle0: false, //빠른배송
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: true, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                count: '7',
                soldout: false
            },
            {
                id: 58,
                category: 'door',
                src: '/images/product/door_08.jpg',
                subtitle: '[에넥스EHI]',
                title: '[EHI] 베이스 우드랩핑 3연동 중문 (W1000~1300)',
                price: '1,406,000원',
                discount: '25%',
                dcprice: '1,045,000원',
                toggle0: false, //빠른배송
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: true, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                count: '8',
                soldout: false
            },
            {
                id: 59,
                category: 'door',
                src: '/images/product/door_09.jpg',
                subtitle: '[에넥스EHI]',
                title: '[EHI] 브론즈 인쇄망입유리 고시형 슬림도어 3연동 아파트 현관중문 (1,100~1,500)',
                price: '1,209,000원',
                discount: '21%',
                dcprice: '945,000원',
                toggle0: false, //빠른배송
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: false, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                count: '9',
                soldout: false
            },
            {
                id: 60,
                category: 'door',
                src: '/images/product/door_10.jpg',
                subtitle: '[에넥스EHI]',
                title: '[EHI] 샤인 클리어 디바이드 슬림도어 중문(1,100~1,400)',
                price: '1,598,000원',
                discount: '40%',
                dcprice: '955,000원',
                toggle0: false, //빠른배송
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: false, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                toggle11: true, //이벤트
                count: '10',
                soldout: false
            },
            {
                id: 61,
                category: 'studyroom',
                src: '/images/product/studyroom_01.jpg',
                subtitle: '[에넥스ECD]',
                title: '[ECD] 아델 책상 시리즈_풀세트',
                price: '847,000',
                discount: '30%',
                dcprice: '585,000원',
                toggle00: false, //신상입고
                toggle0: false, //빠른배송
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: true, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: false, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                toggle11: false, //이벤트
                count: '1',
                soldout: false
            },
            {
                id: 62,
                category: 'studyroom',
                src: '/images/product/studyroom_02.jpg',
                subtitle: '[에넥스EC]',
                title: '[EC] 마이티 회전형 책상의자(화이트바디)',
                price: '168,000원',
                discount: '41%',
                dcprice: '99,000원',
                toggle000: true, //국내제작
                toggle00: false, //신상입고
                toggle0: false, //빠른배송
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: true, // 인기
                toggle7: false, //베스트
                toggle8: false, //신상품
                toggle9: true, //주문폭주
                toggle10: false, //품절
                toggle11: false, //이벤트
                count: '2',
                soldout: false
            },
            {
                id: 63,
                category: 'studyroom',
                src: '/images/product/studyroom_03.jpg',
                subtitle: '[에넥스EC]',
                title: '[EC] 에어 멀티 패브릭 메쉬의자(화이트바디)',
                price: '215,000원',
                discount: '28%',
                dcprice: '154,000원',
                toggle000: true, //국내제작
                toggle00: false, //신상입고
                toggle0: false, //빠른배송
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: true, // 인기
                toggle7: false, //베스트
                toggle8: false, //신상품
                toggle9: true, //주문폭주
                toggle10: false, //품절
                toggle11: false, //이벤트
                count: '3',
                soldout: false
            },
            {
                id: 64,
                category: 'studyroom',
                src: '/images/product/studyroom_04.jpg',
                subtitle: '[에넥스EC]',
                title: '[EC] 심플라인 메쉬 의자(화이트바디)',
                price: '129,000원',
                discount: '40%',
                dcprice: '77,000원',
                toggle00: false, //신상입고
                toggle0: false, //빠른배송
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: true, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                toggle11: false, //이벤트
                count: '4',
                soldout: false
            },
            {
                id: 65,
                category: 'studyroom',
                src: '/images/product/studyroom_05.jpg',
                subtitle: '[에넥스ECD]',
                title: '더퍼스트 큐브 홈스쿨링 집중력 독서실 책상(기본형)',
                price: '599,000원',
                discount: '30%',
                dcprice: '419,000원',
                toggle00: false, //신상입고
                toggle0: false, //빠른배송
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: false, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                toggle11: false, //이벤트
                count: '5',
                soldout: false
            },
            {
                id: 66,
                category: 'studyroom',
                src: '/images/product/studyroom_06.jpg',
                subtitle: '[에넥스EC]',
                title: '[EC] 피노 멀티체어 사무용 의자(그레이바디)',
                price: '185,000원',
                discount: '46%',
                dcprice: '99,000원',
                toggle00: true, //신상입고
                toggle0: false, //빠른배송
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: true, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: false, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                toggle11: false, //이벤트
                count: '6',
                soldout: false
            },
            {
                id: 67,
                category: 'studyroom',
                src: '/images/product/studyroom_07.jpg',
                subtitle: '[에넥스ECD]',
                title: '[ECD] 리니어 철제 타공 파티션',
                price: '139,000원',
                discount: '28%',
                dcprice: '99,000원',
                toggle00: true, //신상입고
                toggle0: false, //빠른배송
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: false, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                toggle11: false, //이벤트
                count: '7',
                soldout: false
            },
            {
                id: 68,
                category: 'studyroom',
                src: '/images/product/studyroom_08.jpg',
                subtitle: '[에넥스EC]',
                title: '[EC] 피노 멀티체어 사무용 의자(블랙바디)',
                price: '156,000원',
                discount: '39%',
                dcprice: '95,000원',
                toggle00: true, //신상입고
                toggle0: false, //빠른배송
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: true, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: false, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                toggle11: false, //이벤트
                count: '8',
                soldout: false
            },
            {
                id: 69,
                category: 'studyroom',
                src: '/images/product/studyroom_09.jpg',
                subtitle: '[에넥스EC]',
                title: '[EC] 보우 메쉬 시스템의자 (블랙바디)',
                price: '182,000원',
                discount: '28%',
                dcprice: '131,000원',
                toggle00: false, //신상입고
                toggle0: false, //빠른배송
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: true, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                toggle11: false, //이벤트
                count: '9',
                soldout: false
            },
            {
                id: 70,
                category: 'studyroom',
                src: '/images/product/studyroom_10.jpg',
                subtitle: '[에넥스ECD]',
                title: '[ECD] 아델 책상 시리즈_책상+3단서랍+상부장+책장',
                price: '584,000원',
                discount: '23%',
                dcprice: '445,000원',
                toggle00: false, //신상입고
                toggle0: false, //빠른배송
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: false, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                toggle11: false, //이벤트
                count: '10',
                soldout: false
            },
            {
                id: 71,
                category: 'digital',
                src: '/images/product/digital_01.jpg',
                subtitle: '[쿠첸]',
                title: '[쿠첸]6인용 일반 압력밥솥 (CJE-CD0610)',
                price: '',
                discount: '',
                dcprice: '96,000원',
                model: 'CJE-CD0610',
                code: '13623',
                toggle000: false, //국내제작
                toggle00: false, //신상입고
                toggle0: false, //빠른배송
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: false, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                toggle11: false, //이벤트
                count: '1',
                soldout: false
            },
            {
                id: 72,
                category: 'digital',
                src: '/images/product/digital_02.jpg',
                subtitle: '[쿠첸]',
                title: '[쿠첸]에어프라이어 미니오븐 (COV-N120WC)',
                price: '',
                discount: '',
                dcprice: '159,000원',
                model: 'COV-N120WC',
                code: '13615',
                toggle000: false, //국내제작
                toggle00: false, //신상입고
                toggle0: false, //빠른배송
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: false, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                toggle11: false, //이벤트
                count: '2',
                soldout: false
            },
            {
                id: 73,
                category: 'digital',
                src: '/images/product/digital_03.jpg',
                subtitle: '[휴렉]',
                title: '휴렉 음식물 처리기 히어로 HD9000-SD (건조형)',
                price: '990,000원',
                discount: '24%',
                dcprice: '750,000원',
                model: 'HD9000-SD',
                code: '1000001436',
                toggle000: false, //국내제작
                toggle00: false, //신상입고
                toggle0: false, //빠른배송
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: false, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                toggle11: false, //이벤트
                count: '3',
                soldout: false
            },
            {
                id: 74,
                category: 'digital',
                src: '/images/product/digital_04.jpg',
                subtitle: '[LG전자]',
                title: 'LG 스타일러 오브제컬렉션 미스트베이지 S5BOC',
                price: '',
                discount: '',
                dcprice: '2,000,000원',
                model: '',
                code: '1000002007',
                toggle000: false, //국내제작
                toggle00: false, //신상입고
                toggle0: false, //빠른배송
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: false, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                toggle11: false, //이벤트
                count: '4',
                soldout: false
            },
            {
                id: 75,
                category: 'digital',
                src: '/images/product/digital_05.jpg',
                subtitle: '[LG전자]',
                title: 'LG 트롬 워시타워 원바디세탁기(건조기+세탁기 일체형) 스페이스블랙 색상 W17KT',
                price: '',
                discount: '',
                dcprice: '3,590,000원',
                model: 'W17KT',
                code: '1000001962',
                toggle000: false, //국내제작
                toggle00: false, //신상입고
                toggle0: false, //빠른배송
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: false, //신상품
                toggle9: false, //주문폭주
                toggle10: true, //품절
                toggle11: false, //이벤트
                count: '5',
                soldout: true
            },
            {
                id: 76,
                category: 'digital',
                src: '/images/product/digital_06.jpg',
                subtitle: '[유진로봇]',
                title: '유진로봇 아이클레보 지니 G7플러스 메탈릭실버',
                price: '499,000원',
                discount: '20%',
                dcprice: '399,000원',
                model: 'CJE-CD0610',
                code: '13623',
                toggle000: false, //국내제작
                toggle00: false, //신상입고
                toggle0: false, //빠른배송
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: false, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                toggle11: false, //이벤트
                count: '6',
                soldout: false
            },
            {
                id: 77,
                category: 'digital',
                src: '/images/product/digital_07.jpg',
                subtitle: '[LG전자]',
                title: 'LG DIOS 식기세척기 스팀 DUB22MA 빌트인 전용 모델 (영업일 기준 10일 이내 배송/설치)',
                price: '',
                discount: '',
                dcprice: '1,590,000원',
                model: 'DUB22MA',
                code: '1000000456',
                toggle000: false, //국내제작
                toggle00: false, //신상입고
                toggle0: false, //빠른배송
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: true, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                toggle11: false, //이벤트
                count: '7',
                soldout: false
            },
            {
                id: 78,
                category: 'digital',
                src: '/images/product/digital_08.jpg',
                subtitle: '[LG전자]',
                title: 'LG 퓨리케어 360˚ 공기청정기 플러스 크리미 스노우 색상 2단 AS301DWFA',
                price: '',
                discount: '',
                dcprice: '1,319,000원',
                model: 'AS301DWFA',
                code: '1000000594',
                toggle000: false, //국내제작
                toggle00: false, //신상입고
                toggle0: false, //빠른배송
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: false, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                toggle11: false, //이벤트
                count: '8',
                soldout: false
            },
            {
                id: 79,
                category: 'digital',
                src: '/images/product/digital_09.jpg',
                subtitle: '[LG전자]',
                title: 'LG DIOS 오브제컬렉션 김치톡톡 스탠드 김치냉장고 오브제 베이지 베이지 Z331GBB151',
                price: '',
                discount: '',
                dcprice: '2,100,000원',
                model: 'Z331GBB151',
                code: '1000001998',
                toggle000: false, //국내제작
                toggle00: false, //신상입고
                toggle0: false, //빠른배송
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: false, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                toggle11: false, //이벤트
                count: '9',
                soldout: false
            },
            {
                id: 80,
                category: 'digital',
                src: '/images/product/digital_10.jpg',
                subtitle: '[LG전자]',
                title: 'LG DIOS 오브제컬렉션 김치톡톡 스탠드 김치냉장고 오브제 베이지 베이지 Z491GBB151',
                price: '',
                discount: '',
                dcprice: '3,000,000원',
                model: 'Z491GBB151',
                code: '1000001996',
                toggle000: false, //국내제작
                toggle00: false, //신상입고
                toggle0: false, //빠른배송
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: false, //신상품
                toggle9: false, //주문폭주
                toggle10: true, //품절
                toggle11: false, //이벤트
                count: '10',
                soldout: true
            },
            {
                id: 81,
                category: 'goods',
                src: '/images/product/goods_01.jpg',
                subtitle: '[에넥스]',
                title: '유닉 부착식 싱크선반 600',
                price: '81,000원',
                discount: '40%',
                dcprice: '48,600원',
                model: '',
                code: '',
                timesale: true, //타임특가
                toggle000: false, //국내제작
                toggle00: false, //신상입고
                toggle0: false, //빠른배송
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: true, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                toggle11: false, //이벤트
                count: '1',
                soldout: false
            },
            {
                id: 82,
                category: 'goods',
                src: '/images/product/goods_02.jpg',
                subtitle: '[에넥스OEM]',
                title: '[에넥스]올스텐 식기건조대-2단',
                price: '',
                discount: '',
                dcprice: '59,000원',
                model: '',
                code: '',
                timesale: false, //타임특가
                toggle000: false, //국내제작
                toggle00: false, //신상입고
                toggle0: false, //빠른배송
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: false, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                toggle11: false, //이벤트
                count: '2',
                soldout: false
            },
            {
                id: 83,
                category: 'goods',
                src: '/images/product/goods_03.jpg',
                subtitle: '[에넥스]',
                title: '유닉 기둥식 싱크선반 800',
                price: '146,000원',
                discount: '40%',
                dcprice: '87,600원',
                model: '',
                code: '',
                timesale: false, //타임특가
                toggle000: false, //국내제작
                toggle00: false, //신상입고
                toggle0: false, //빠른배송
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: false, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                toggle11: false, //이벤트
                count: '3',
                soldout: false
            },
            {
                id: 84,
                category: 'goods',
                src: '/images/product/goods_04.jpg',
                subtitle: '[에넥스]',
                title: '유닉 3WAY 식기건조대',
                price: '214,000원',
                discount: '40%',
                dcprice: '128,400원',
                model: '',
                code: '',
                timesale: true, //타임특가
                toggle000: false, //국내제작
                toggle00: false, //신상입고
                toggle0: false, //빠른배송
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: true, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                toggle11: false, //이벤트
                count: '4',
                soldout: false
            },
            {
                id: 85,
                category: 'goods',
                src: '/images/product/goods_05.jpg',
                subtitle: '[에넥스]',
                title: '유닉 2단 식기건조대',
                price: '125,000원',
                discount: '40%',
                dcprice: '75,000원',
                model: '',
                code: '',
                timesale: true, //타임특가
                toggle000: false, //국내제작
                toggle00: false, //신상입고
                toggle0: false, //빠른배송
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: true, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                toggle11: false, //이벤트
                count: '5',
                soldout: false
            },
            {
                id: 86,
                category: 'goods',
                src: '/images/product/goods_06.jpg',
                subtitle: '[브랜드마켓]',
                title: '[홈스토리] 나혼자산다 접이식 쇼핑카트,남궁민카트,핸드카트,장바구니 대형/뚜껑 옵션선택',
                price: '19,900원',
                discount: '10%',
                dcprice: '17,900원',
                model: '',
                code: '',
                timesale: false, //타임특가
                toggle000: false, //국내제작
                toggle00: false, //신상입고
                toggle0: false, //빠른배송
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: false, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                toggle11: false, //이벤트
                count: '6',
                soldout: false
            },
            {
                id: 87,
                category: 'goods',
                src: '/images/product/goods_07.jpg',
                subtitle: '[에넥스]',
                title: '유닉 부착식 싱크선반 800',
                price: '93,000원',
                discount: '40%',
                dcprice: '55,800원',
                model: '',
                code: '',
                timesale: true, //타임특가
                toggle000: false, //국내제작
                toggle00: false, //신상입고
                toggle0: false, //빠른배송
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: true, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                toggle11: false, //이벤트
                count: '7',
                soldout: false
            },
            {
                id: 88,
                category: 'goods',
                src: '/images/product/goods_08.jpg',
                subtitle: '[에넥스]',
                title: '[에넥스] 에넥스 벽부착식 식기건조대 싱크대선반 600',
                price: '65,000원',
                discount: '29%',
                dcprice: '46,000원',
                model: '',
                code: '',
                timesale: false, //타임특가
                toggle000: false, //국내제작
                toggle00: false, //신상입고
                toggle0: false, //빠른배송
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: true, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                toggle11: false, //이벤트
                count: '8',
                soldout: false
            },
            {
                id: 89,
                category: 'goods',
                src: '/images/product/goods_09.jpg',
                subtitle: '[에넥스]',
                title: '유닉 1단 식기건조대',
                price: '61,000원',
                discount: '40%',
                dcprice: '36,600원',
                model: '',
                code: '',
                timesale: true, //타임특가
                toggle000: false, //국내제작
                toggle00: false, //신상입고
                toggle0: false, //빠른배송
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: true, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                toggle11: false, //이벤트
                count: '9',
                soldout: false
            },
            {
                id: 90,
                category: 'goods',
                src: '/images/product/goods_10.jpg',
                subtitle: '[에넥스]',
                title: '[에넥스] 에넥스 벽부착식 식기건조대 싱크대선반 800',
                price: '72,000원',
                discount: '31%',
                dcprice: '49,500원',
                model: '',
                code: '',
                timesale: false, //타임특가
                toggle000: false, //국내제작
                toggle00: false, //신상입고
                toggle0: false, //빠른배송
                toggle1: false, //무료철거
                toggle2: false, //EO
                toggle3: false, //기획
                toggle4: false, //최대판매
                toggle5: false, //추천
                toggle6: false, // 인기
                toggle7: false, //베스트
                toggle8: false, //신상품
                toggle9: false, //주문폭주
                toggle10: false, //품절
                toggle11: false, //이벤트
                count: '10',
                soldout: false
            }
        ]

        return (
            <>
                <div className="review_carousel">
                    <div className="sub_bestreview">
                        <div>
                            <strong>BEST</strong> <span>REVIEW</span>
                        </div>
                    </div>
                    <div class="window">
                        <button class="prev">
                            <HiChevronLeft
                                style={{ width: '50px', height: '50px', color: '#ccc' }} />
                        </button>
                        <button class="next">
                            <HiChevronRight
                                style={{ width: '50px', height: '50px', color: '#ccc' }} />
                        </button>
                        <div className="container_in">
                            <ul class="container">
                                <li class="cell">
                                    {items.map((item) => (item.id == 1 && <ReviewItem2 item={item} key={item.id} />))}
                                </li>
                                <li class="cell">
                                    {items.map((item) => (item.id == 11 && <ReviewItem2 item={item} key={item.id} />))}
                                </li>
                                <li class="cell">
                                    {items.map((item) => (item.id == 21 && <ReviewItem2 item={item} key={item.id} />))}
                                </li>
                                <li class="cell">
                                    {items.map((item) => (item.id == 31 && <ReviewItem2 item={item} key={item.id} />))}
                                </li>
                                <li class="cell">
                                    {items.map((item) => (item.id == 41 && <ReviewItem2 item={item} key={item.id} />))}
                                </li>
                                <li class="cell">
                                    {items.map((item) => (item.id == 51 && <ReviewItem2 item={item} key={item.id} />))}
                                </li>
                                <li class="cell">
                                    {items.map((item) => (item.id == 61 && <ReviewItem2 item={item} key={item.id} />))}
                                </li>
                                <li class="cell">
                                    {items.map((item) => (item.id == 71 && <ReviewItem2 item={item} key={item.id} />))}
                                </li>
                                <li class="cell">
                                    {items.map((item) => (item.id == 81 && <ReviewItem2 item={item} key={item.id} />))}
                                </li>
                                <li class="cell">
                                    {items.map((item) => (item.id == 90 && <ReviewItem2 item={item} key={item.id} />))}
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </>
        )
    }
}

export default CarouselReview;