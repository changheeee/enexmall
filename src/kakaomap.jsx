import React, { useRef, useEffect } from "react";

function KakaoMap() {
    const { kakao } = window;
    const container = useRef(null);
    const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 5
    };

    useEffect(() => {
        new kakao.maps.Map(container.current, options);
        return () => { }
    }, []);

    return (
        <div>
            <div id="map" ref={container} style={{ width: '500px', height: '400px' }}></div>
        </div>
    )
}

export default KakaoMap;