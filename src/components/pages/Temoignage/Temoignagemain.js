import React, { useState } from 'react';
import Temoignage from './Temoignage';
import Carousel from 'react-elastic-carousel';



function Temoignagemain() {

    state = {
        items: [
          {id: document.getElementById('tem1')},
          {id:  document.getElementById('tem2')},
          {id: document.getElementById('tem3')},
          {id:  document.getElementById('tem4')},
          {id: document.getElementById('tem5')},
          {id:  document.getElementById('tem6')}
        ]
      }


        const { items } = this.state;
    return (
      <Carousel>
        {items.map(item => <div key={item.id}></div>)}
      </Carousel>
    )
  }
    
export default Temoignagemain

