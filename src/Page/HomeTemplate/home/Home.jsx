import React from 'react';
import connectAPI from '../../../img/connectAPI.jpg'

function Home(props) {
    return (
        <div className="container mt-4">
            <h1>Trang chủ</h1>
            <img src={connectAPI} alt="" />
        </div>
    );
}

export default Home;