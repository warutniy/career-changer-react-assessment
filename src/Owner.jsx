import React from 'react';
import Layout from './Layout';
import myPicture from './image/myPicture.jpg';
import './style.css';

const Owner = () => {
    return (
        <Layout>
            <div className='container_owner'>
                <h1>Warut Niyomka</h1>
                <img src={myPicture} alt="myPicture" width="240px" height="250px" />
                <h4>Short Biography:</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati eveniet dignissimos, nostrum repudiandae sint dolore eum eaque quia quam, inventore consectetur est tempora hic tenetur neque illo sapiente doloribus eligendi.</p>
            </div>
        </Layout>
    );
};

export default Owner;
