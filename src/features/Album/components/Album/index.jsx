import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

Album.propTypes = {
    album: PropTypes.object.isRequired,
};

function Album({ album }) {
    return (
        <div className='album'>
            <div className='album_url'>
                <img src={album.url} alt={album.name} />
            </div>
            <p className='album_name'>{album.title}</p>
        </div>
    );
}

export default Album;