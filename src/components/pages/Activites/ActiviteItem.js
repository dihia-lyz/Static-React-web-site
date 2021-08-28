import React from 'react';
import { Link } from 'react-router-dom';
import './Activite.css';
function ActiviteItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <div className='cards__item__pic-wrap'>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </div>
          <div className='cards__item__info'>
            <p className='cards__item__title'>{props.title}</p>
            <p className="cards__item__text">{props.text}</p>
          </div>
        </Link>
      </li>
    </>
  );
}

export default ActiviteItem;
