import React from 'react';
import { Link } from 'react-router-dom';
import './Temoignage.css';
function TemoignageItem(props) {
  return (
    <>
      <li className='cards__item2'>
        <Link className='cards__item__link2' to={props.path}>
          <div className='cards__item__pic-wrap2'>
            <img
              className='cards__item__img2'
              alt='Travel Image'
              src={props.src}
            />
          </div>
          <div className='cards__item__info2'>
          
            <p className="cards__item__text2">{props.text}</p>
            <p className='cards__item__title2'>{props.title}</p>
          </div>
        </Link>
      </li>
    </>
  );
}

export default TemoignageItem;
