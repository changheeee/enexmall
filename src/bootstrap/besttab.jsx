import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import BedRoom from '../components/best_sub/bedroom';
import Digital from '../components/best_sub/digital';
import Door from '../components/best_sub/door';
import Dressroom from '../components/best_sub/dressroom';
import Goods from '../components/best_sub/goods';
import Kitchen from '../components/best_sub/kitchen';
import LivingRoom from '../components/best_sub/livingroom';
import StudyRoom from '../components/best_sub/studyroom';
import Wardrobe from '../components/best_sub/wardrobe';


function BestTab() {
    return (
        <div id='best_tab'>
            <Tabs
                defaultActiveKey="wardrobe"
                id="justify-tab-example"
                fill={true}
                className="mb-3"
            >
                <Tab eventKey="wardrobe" title="붙박이장/시공">
                    <Wardrobe />
                </Tab>

                <Tab eventKey="dressroom" title="옷장/드레스룸">
                    <Dressroom />
                </Tab>

                <Tab eventKey="bedroom" title="침실">
                    <BedRoom />
                </Tab>

                <Tab eventKey="kitchen" title="주방" >
                    <Kitchen />
                </Tab>

                <Tab eventKey="livingroom" title="거실/소파" >
                    <LivingRoom />
                </Tab>

                <Tab eventKey="door" title="중문" >
                    <Door />
                </Tab>

                <Tab eventKey="studyroom" title="서재/학생" >
                    <StudyRoom />
                </Tab>

                <Tab eventKey="digtal" title="가전" >
                    <Digital />
                </Tab>

                <Tab eventKey="goods" title="생활용품" >
                    <Goods />
                </Tab>

                <Tab eventKey="" title="" disabled>
                </Tab>
            </Tabs>
        </div>
    );
}

export default BestTab;