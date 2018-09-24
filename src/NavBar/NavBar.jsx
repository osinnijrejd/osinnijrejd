import React from 'react';
import { Link} from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <nav className="nav-bar">
          <div className="nav-bar-link-container">
            <Link to='/' className="nav-bar-link">Карта
              <i className="far fa-map"></i>
            </Link>
          </div>
          <div className="nav-bar-link-container">
            <Link to='/contacts' className="nav-bar-link">Контакти
              <i className="fas fa-phone"></i>
            </Link>
          </div>
          <div className="nav-bar-link-container">
            <Link to='/gallery' className="nav-bar-link">Точки
              <i className="fas fa-monument"></i>
            </Link>
          </div>
      </nav>
      </div>
    );
  }
}

export default NavBar;
