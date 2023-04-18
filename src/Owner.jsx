import React from 'react';
import Layout from './Layout';
import myPicture from './image/myPicture.jpg';

const Owner = () => {
    return (
        <Layout>
            <h1>Warut Niyomka</h1>
            <img src={myPicture} alt="myPicture" width="500px" />
            <h4>Short Biography:</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati eveniet dignissimos, nostrum repudiandae sint dolore eum eaque quia quam, inventore consectetur est tempora hic tenetur neque illo sapiente doloribus eligendi.</p>
        </Layout>
    );
};

export default Owner;
