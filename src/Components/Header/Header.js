import React, { useContext } from 'react';
import {
    Link
} from "react-router-dom";
import { UserContext } from '../../App';


const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
       <div className="container bg-dc2 rounded">
       <Link className="navbar-brand" to="/">Metro<span className="text-primary">Trip</span></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/destination">Destination</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/profile">Profile</Link>
                        </li>

                        {loggedInUser.email &&
                        <li className="nav-item">
                         <Link className="nav-link" to="/">{loggedInUser.email}</Link>  
                        </li>}

                        <li className="nav-item">
                        {loggedInUser.email ?
                         <Link onClick={()=> setLoggedInUser({})} className="nav-link" to="/">Sign Out</Link>
                         :
                         <Link  className="nav-link" to="/signUp">Sign In</Link>
                        }
                        </li>
                    </ul>
        </div>
       </div>
      </nav>
    );
};

export default Header;