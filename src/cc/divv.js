import React from 'react';
import './style.css';
import img1 from './1.jpg';
const divv = () => {
    return (
        <div style={{border:'solid 1px black',maxWidth:'100vw'}}>
           <h1 class="title red">Your name here</h1>


           <br />
            <img src={img1}alt='immg' />
            <br/>


            <img src={'./2.jpg'} alt='immg1'/ >
        
        </div>
      );
    };

    export default divv;
