import React from 'react';
import AlbumList from './components/AlbumList';

AlbumFeatures.propTypes = {};

function AlbumFeatures(props) {
    const albumList = [
        {
            id: 1,
            title: 'Vẻ đẹp làng quê',
            url: 'https://nhadepso.com/wp-content/uploads/2023/01/me-man-45-anh-lang-que-dep-binh-yen-nhat-cua-nguoi-dan-que_1.jpg'
        },
        {
            id: 2,
            title: 'Vẻ đẹp đồi núi',
            url: 'https://cdn3.dhht.vn/wp-content/uploads/2022/01/Thumbnail-20-canh-dep-tay-bac-hung-vi-nhat-dinh-phai-biet-den.jpg'
        },
        {
            id: 3,
            title: 'Vẻ đẹp biển đảo',
            url: 'https://ims.baoyenbai.com.vn/NewsImg/6_2022/246111_27-6-truyenthong.jpg'
        },
    ];
    return (
        <div>
            <h2>VẺ ĐẸP VIỆT NAM</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeatures;