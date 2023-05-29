import {Link} from "react-router-dom";

function Header(){
    return <nav className="brown darken-2">
        <div className="container">
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo">The Big Recipe Book</Link>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        </ul>
                </div>
         </div>

  </nav>
}

export{Header};