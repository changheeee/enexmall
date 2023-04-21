import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import MainBedRoom from '../components/best_sub/main_bedroom';
import MainDigital from '../components/best_sub/main_digital';
import MainDoor from '../components/best_sub/main_door';
import MainDressroom from '../components/best_sub/main_dressroom';
import MainGoods from '../components/best_sub/main_goods';
import MainKitchen from '../components/best_sub/main_kitchen';
import MainLivingRoom from '../components/best_sub/main_livingroom';
import MainStudyRoom from '../components/best_sub/main_studyroom';
import MainWardrobe from '../components/best_sub/main_wardrobe';


function MainBestTab() {
    return (
        <div id='best_tab' >
            <Tabs
                defaultActiveKey="wardrobe"
                id="fill-tab-example"
                className="mb-3"
            >
                <Tab eventKey="wardrobe" title="붙박이장/시공" >
                    <MainWardrobe />
                </Tab>

                <Tab eventKey="dressroom" title="옷장/드레스룸">
                    <MainDressroom />
                </Tab>

                <Tab eventKey="bedroom" title="침실">
                    <MainBedRoom />
                </Tab>

                <Tab eventKey="kitchen" title="주방" >
                    <MainKitchen />
                </Tab>

                <Tab eventKey="livingroom" title="거실/소파" >
                    <MainLivingRoom />
                </Tab>

                <Tab eventKey="door" title="중문" >
                    <MainDoor />
                </Tab>

                <Tab eventKey="studyroom" title="서재/학생" >
                    <MainStudyRoom />
                </Tab>

                <Tab eventKey="digtal" title="가전" >
                    <MainDigital />
                </Tab>

                <Tab eventKey="goods" title="생활용품" >
                    <MainGoods />
                </Tab>

                <Tab eventKey="" title="" disabled>
                </Tab>
            </Tabs>
        </div>
    );
}

export default MainBestTab;