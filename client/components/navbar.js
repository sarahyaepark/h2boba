import React from "react";
import { Link } from "react-router-dom";
import logo from "../../public/images/h2boba_logo_final.png";

export const Navbar = () => (
  <div>
    <div className="navBar">
      <nav>
        <div>
          <Link to="/home">Home</Link>
          <Link to="/about">About Us</Link>
        </div>
      </nav>
      <Link to="/home">
        <img src={logo} alt="h2boba" width="250px" height="80px" />
      </Link>
      <nav>
        <div>
          <Link to="/blends">Blendz</Link>
          <Link to="/teas">Teaz</Link>
        </div>
      </nav>
    </div>
    {/* <hr /> */}
    <br />
  </div>
);

/**
 * CONTAINER
 */
// const mapState = state => {
//   return {
//     isLoggedIn: !!state.user.id
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     handleClick() {
//       dispatch(logout())
//     }
//   }
// }

// export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
// Navbar.propTypes = {
//   handleClick: PropTypes.func.isRequired,
//   isLoggedIn: PropTypes.bool.isRequired
// }
