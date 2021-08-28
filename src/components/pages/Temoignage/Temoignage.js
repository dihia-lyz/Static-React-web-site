import React from 'react';
import './Temoignage.css';
import TemoignageItem from './TemoignageItem';


function Temoignage () {
 
  return (
    <div className='cards2' id="temoignage">
      <h1>Temoignage</h1>
      <div className='cards__container2'>
        <div className='cards__wrapper2'>
          <ul className='cards__items2'>
          
           <TemoignageItem 
              src = {require('../../../images/parentf1.png').default}
              text= "Depuis deux ans mes bambins sont inscrits aux ADS, et ce qui nous a agréablement surpris c'est la recherche du bien-être sans cesse de chaque élève à travers son travail, mais aussi à travers ses relations avec ses camarades. Qui plus est, l'équipe pédagogique est sérieuse, ouverte, et très professionnelle, et la directrice donne tout ce quelle a pour ses élèves. Enfin, si l'école proposerait de poursuivre jusqu'aux études supérieures, sans aucune hésitation nous continuerons leur scolarité au sein des ADS."
              title='Maman de Isaac'
              path='/'
            />
            <TemoignageItem 
              src={require('../../../images/parenth.png').default}
              text="Donne envie aux enfants d'apprendre. L'équipe pédagogique allie bienveillance et rigueur et est à l'écoute des enfants. Offre un bel encadrement aux enfants avec un enseignement de qualité. Un accueil agréable et souriant."
              title='Maman et papa de Yasmine'
              path='/'
            />
            <TemoignageItem
              src={require('../../../images/parentf2.png').default}
              text="Je suis ravie que mon enfant ai la chance d’être scolarisé au sein des ADS, où la pédagogie appliquée respecte le rythme de l’enfant. Ainsi nous avons des enfants qui sont autonome qui aiment l’entraide et l’école Au sein des ADS il est autorisé aux enfants de rêver de prendre des initiatives, cela éveil leur curiosité... : « Ici, chaque enfant construit l’adulte qu’il sera demain » Merci à toute l’équipe !"
              title='Parent de Farah'
              path='/'
            />
            
           

          </ul>
        </div>
      </div>
      </div>
 
  );
}

export default Temoignage;