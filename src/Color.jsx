import { useState } from 'react';

Color.propTypes = {

};

function Color(props) {
    const [color, setColor] = useState('White');
    return (
        <div>
            {color}
            <br />
            <button style={{ backgroundColor: color }}>
                {color}
            </button>

            <br />
            <div>
                <button onClick={() => setColor('yellow')}>
                    Đổi sang yellow
                </button>
                <button onClick={() => setColor('White')}>
                    Đổi sang White
                </button>
            </div>
        </div>
    );
}

export default Color;