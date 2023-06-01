import React, { useState } from 'react';
import './styles.scss'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Thực hiện xử lý đăng nhập ở đây
        console.log('Email:', email);
        console.log('Password:', password);
        // Gọi API hoặc thực hiện các công việc khác liên quan đến đăng nhập
    };

    return (
        <div className="login-container">
            <h2>THACO INDUSTRIES</h2>
            <form onSubmit={handleSubmit}>
                <div className='login-menu'>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className='login-menu'>
                    <label>Mật khẩu:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <div className='button-login'>
                    <button type="submit">Đăng nhập</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
