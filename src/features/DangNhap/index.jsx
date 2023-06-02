import React, { useState } from 'react';
import './LoginStyles.scss'

const LgoinTHACO = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Thực hiện xử lý đăng nhập ở đây
        console.log('User:', user);
        console.log('Password:', password);
        // Gọi API hoặc thực hiện các công việc khác liên quan đến đăng nhập
    };
    return (
        <div className='div-login'>
            <div className='lable-login'>
                <label>ĐĂNG NHẬP</label>
                <br />
                <label>THACO INDUSTRIES</label>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='form-login'>
                    <label>Tên đăng nhập:</label>
                    <input
                        type='Tên đăng nhập'
                        value={user}
                        onChange={(event) => setUser(event.target.value)}
                    />
                </div>
                <div className='form-login'>
                    <label>Mật khẩu:</label>
                    <input
                        type='password'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <div>
                    <button className='button-login'>
                        Đăng nhập
                    </button>
                </div>
            </form>
        </div>
    );
}

export default LgoinTHACO;