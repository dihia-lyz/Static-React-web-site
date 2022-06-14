import React from 'react'
import logo from '../assets/images/logo.jpg';  

function PageHeader() {

    const handleOnLogOut = (e) => {
        e.preventDefault();
        console.log('logged in with success!');
        //history.push("/ListZonesPage");
      };


  return (
    <div className='header'>
        <div className="header-container">
        <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="header-container">
        <button type="button" className=" logout-btn btn-secondary " onClick={handleOnLogOut}>Déconnexion</button>
        </div>
    </div>
  )
}

export default PageHeader