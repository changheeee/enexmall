import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { EventCurrent, EventEnd, EventResult } from '../components/event';




function EventTab() {
    return (
        <div id='event_tab'>
            <Tabs
                defaultActiveKey="current"
                id="justify-tab"
                className="event_tab_wrap"
                justify
            >
                <Tab eventKey="current" title="진행중인 이벤트" className="event_tab_btn">
                    <EventCurrent />
                </Tab>

                <Tab eventKey="end" title="지난 이벤트">
                    <EventEnd />
                </Tab>

                <Tab eventKey="result" title="당첨자 발표">
                    <EventResult />
                </Tab>


            </Tabs>
        </div>
    );
}

export default EventTab;