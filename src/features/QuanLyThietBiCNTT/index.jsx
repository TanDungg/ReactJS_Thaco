import React, { useState } from 'react';
import './styles.scss';

const DeviceManagement = () => {
    const [devices, setDevices] = useState([]);
    const [name, setName] = useState('');
    const [type, setType] = useState('');

    const handleAddDevice = () => {
        const newDevice = {
            id: devices.length + 1,
            name,
            type
        };

        setDevices([...devices, newDevice]);
        setName('');
        setType('');
    };

    const handleDeleteDevice = (id) => {
        const updatedDevices = devices.filter(device => device.id !== id);
        setDevices(updatedDevices);
    };

    return (
        <div className="device-management">
            <h2>Quản lý thiết bị CNTT</h2>

            <div className="device-form">
                <input
                    type="text"
                    placeholder="Tên thiết bị"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <input
                    type="text"
                    placeholder="Loại thiết bị"
                    value={type}
                    onChange={(event) => setType(event.target.value)}
                />
                <div className='button-tb'>
                    <button type="button" onClick={handleAddDevice} >
                        Thêm thiết bị
                    </button>
                </div>
            </div>

            <table className="device-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên thiết bị</th>
                        <th>Loại thiết bị</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {devices.map(device => (
                        <tr key={device.id}>
                            <td>{device.id}</td>
                            <td>{device.name}</td>
                            <td>{device.type}</td>
                            <td>
                                <button onClick={() => handleDeleteDevice(device.id)}>Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DeviceManagement;
