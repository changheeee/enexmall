import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import MainBest from "../main_components/mainbest";
import Menu from "../main_components/menu";
import Live from "../main_components/live";
import TimeDeal from "../main_components/timedeal";
import EnexEvent from "../main_components/enexevent";
import NewArrival from "../main_components/newarrival";
import Review from "../main_components/review";
import BrandMarket from "../main_components/brandmarket";
import MdPick from "../main_components/mdpick";
import Sns from "../main_components/sns";


function MainTab() {
    return (
        <Tabs
            defaultActiveKey="best"
            id="justify-tab-example"
            className="mb-3"
            justify
        >
            <Tab eventKey="best" title="Best아이템">
                <MainBest />
            </Tab>

            <Tab eventKey="menu" title="Menu">
                <Menu />
            </Tab>

            <Tab eventKey="live" title="Live">
                <Live />
            </Tab>

            <Tab eventKey="timedeal" title="TIME특가" >
                <TimeDeal />
            </Tab>

            <Tab eventKey="enexevent" title="에넥스이벤트" >
                <EnexEvent />
            </Tab>

            <Tab eventKey="newarrival" title="신제품" >
                <NewArrival />
            </Tab>

            <Tab eventKey="review" title="리뷰" >
                <Review />
            </Tab>

            <Tab eventKey="BrandMarket" title="브랜드마켓" >
                <BrandMarket />
            </Tab>

            <Tab eventKey="MdPick" title="MD'S PICK" >
                <MdPick />
            </Tab>

            <Tab eventKey="SNS" title="SNS" >
                <Sns />
            </Tab>
        </Tabs>
    );
}

export default MainTab;