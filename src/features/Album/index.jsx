import React from 'react';
import PropTypes from 'prop-types';

AlbumFeatures.propTypes = {

};

function AlbumFeatures(props) {
    const albumList = [
        {
            id: 1,
            title: 'Ảnh đẹp làng quê',
            thumbnaiUrl: 'https://nhadepso.com/wp-content/uploads/2023/01/me-man-45-anh-lang-que-dep-binh-yen-nhat-cua-nguoi-dan-que_1.jpg'
        },
        {
            id: 2,
            title: 'Ảnh đẹp đồi núi',
            thumbnaiUrl: 'https://cdn.tgdd.vn/Files/2021/11/06/1396193/10-dinh-nui-cao-nhat-viet-nam-danh-cho-ai-thich-kham-pha-nhung-dia-hinh-hiem-tro-202111061657314221.jpg'
        },
        {
            id: 3,
            title: 'Code',
            thumbnaiUrl: 'https://kyluc.vn/Userfiles/Upload/images/Download/2020/9/3/3989e95ce3ae4701bf9fc88140d3bc03.jpg'
        }
    ];
    return (
        <div>
            <h2>Vẻ đẹp của Việt Nam</h2>
            <AlbumFeatures albumList={albumList} />
        </div>
    );
}

export default AlbumFeatures;