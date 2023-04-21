import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';


function CategoryDrop() {


    return (
        <Dropdown >
            <Dropdown.Toggle variant="" id="" style={{ fontSize: '18px' }}>
                카테고리
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">리모델링/시공</Dropdown.Item>
                <Dropdown.Item href="#/action-2">주방/다이닝</Dropdown.Item>
                <Dropdown.Item href="#/action-3">옷장/드레스룸</Dropdown.Item>
                <Dropdown.Item href="#/action-4">침실</Dropdown.Item>
                <Dropdown.Item href="#/action-5">거실</Dropdown.Item>
                <Dropdown.Item href="#/action-6">서재/오피스</Dropdown.Item>
                <Dropdown.Item href="#/action-7">주방용품</Dropdown.Item>
                <Dropdown.Item href="#/action-8">펫가구/용품</Dropdown.Item>
                <Dropdown.Item href="#/action-9">홈데코</Dropdown.Item>
                <Dropdown.Item href="#/action-10">디지털/가전</Dropdown.Item>
                <Dropdown.Item href="#/action-11">방송/라이브</Dropdown.Item>
                <Dropdown.Item href="#/action-12">카테고리</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}


export default CategoryDrop;




