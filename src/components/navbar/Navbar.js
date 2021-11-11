import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    const { userData, userIsLoggedIn } = this.props;

    if (userIsLoggedIn) {
      return (
        <nav className="nav-style">
          <ul>
            {userIsLoggedIn && <li>Welcome, {userData.username} </li>}
            <li>
              <Link to="/projects" style={{ textDecoration: 'none' }}>
                Projects
              </Link>
            </li>
          </ul>
        </nav>
      );
    } else {
      return (
        <div>
          <nav className="nav-style">
            <ul>
              <li>
                <Link to="/signup" style={{ textDecoration: 'none' }}>
                  Signup
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      );
    }
  }
}

export default Navbar;
