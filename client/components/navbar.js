import React from "react";
// import {connect} from 'react-redux'
import { Link } from "react-router-dom";
import logo from "../../public/images/h2boba_logo_final.png"
// import logo from "../../public/favicon.png"

export const Navbar = () => (
  <div>
  <div className="navBar">
    <Link to="/home">
    <img src={logo} alt="h2boba" width="250px" height="84px"/>
    </Link>
    <nav>
      <div>
        <Link to="/home">Home</Link>
        <Link to="/blends">Blendz</Link>
        <Link to="/teas">Teaz</Link>
      </div>
    </nav>
  </div>
  <hr />
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
