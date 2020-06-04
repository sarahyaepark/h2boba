import React from "react";
import { connect } from "react-redux";
import { fetchTeas } from "../store/teas";
import { NavLink } from "react-router-dom";

export class Teas extends React.Component {
  componentDidMount() {
    this.props.fetchTeas();
  }
  render() {
    const { teas } = this.props;
    return (
      <div className="blends">
        {teas.map((tea) => {
          return (
            <div className="blendContainer" key={tea.id}>
              <NavLink to={`/teas/${tea.id}`}>
                <img className="blendImg" src={tea.imgUrl} />
                <h2>{tea.name}</h2>
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
    teas: state.teas,
  };
};

const mapDispatch = (dispatch) => ({
  fetchTeas: () => dispatch(fetchTeas()),
});

export default connect(mapState, mapDispatch)(Teas);
