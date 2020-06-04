import React from "react";
import { connect } from "react-redux";
import { fetchBlends } from "../store/blends";
import { NavLink } from "react-router-dom";

export class Blends extends React.Component {
  componentDidMount() {
    this.props.fetchBlends();
  }
  render() {
    const { blends } = this.props;
    return (
      <div className="blends">
        {blends.map((blend) => {
          return (
            <div className="blendContainer" key={blend.id}>
              <NavLink to={`/blends/${blend.id}`}>
                <img className="blendImg" src={blend.imgUrl} />
                <h2>{blend.name}</h2>
              </NavLink>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    blends: state.blends,
  };
};

const mapDispatch = (dispatch) => ({
  fetchBlends: () => dispatch(fetchBlends()),
});

export default connect(mapState, mapDispatch)(Blends);
