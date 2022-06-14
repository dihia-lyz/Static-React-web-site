import React from 'react'
import { useHistory } from "react-router-dom";
import { withRouter } from "react-router-dom";
import logo from '../assets/images/logo.jpg';  


function Login() {

    const history = useHistory()

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log('logged in with success!');
        history.push("/ListZonesPage");
      };

  return (
    <>
    <div className="form-container">
        <div className="form-box">
            <div className="header-form">
                {/* <h4 className="text-secondary text-center"><i className="fa fa-user-circle" style={{fontSize:"110px"}}></i></h4> */}
                <div className="circle" >
                    <img src={logo} alt="logo" className='' />
                </div>
            </div>
            <div className="body-form">
                <form >
                    <div className="input-group mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fa fa-user"></i></span>
                        </div>
                        <input type="text" className="form-control" placeholder="Nom d'utilisateur" />
                    </div>
                    <div className="input-group mb-4">
                    <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fa fa-lock"></i></span>
                    </div>
                    <input type="password" className="form-control" placeholder="Mot de passe" />
                    </div>
                    <button type="button" className="login-btn" onClick={handleOnSubmit}>Connexion</button>
                </form>
            </div>
        </div>
   </div>  


</>
  )
}

export default withRouter(Login )