import React from 'react';
import './Activite.css';
import ActiviteItem from './ActiviteItem';


function Activitees() {
  return (
    <div className='cards' id="activites">
      <h1>ACTIVITES</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          
          <ul className='cards__items'>
            <ActiviteItem
              src = {require('../../../images/pizza2.jpg').default}
              text='Soirée enfants, organisées par nos animateurs, sont momentanément interrompues dues …'
              title='Soirée Pizza/Jeux'
              path='/services'
            />
            <ActiviteItem
              src={require('../../../images/gourmand.jpeg').default}
              text='Nos vendredis Gourmands repren-dront bientôt ! Vente de douceurs sucrées le vendredi devant …'
              title='Vendredis Gourmands'
              path='/products'
            />
            <ActiviteItem
              src={require('../../../images/atelier.jpeg').default}
              text='Nos ateliers scientifiques pour les enfants de 5 à 12 ans pendant les vacances de …'
              title='Ateliers scientifiques'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Activitees;
