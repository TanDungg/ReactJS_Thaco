import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'

Album.propTypes = {
    album: PropTypes.object.isRequired,
};

function Album({ album }) {
    return (
        <div className='album'>
            <p>{album.title}</p>
        </div>
    );
}

export default Album;