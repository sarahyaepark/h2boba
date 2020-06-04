import React from "react";
import { connect } from "react-redux";
import { fetchTea } from "../store/singleTea";
import { NavLink } from "react-router-dom";

export class SingleTea extends React.Component {
  componentDidMount() {
    let blendId = this.props.match.params.blendId;
    this.props.fetchTea(teaId);
  }
  render() {
    const { tea } = this.props;
    console.log(this.props);
    return (
      <div>
        {tea.length > 0 ? (
          <div className="singleBlend">
            <img className="singleBlendImg" src={tea[0].imgUrl} />
            <div>
            <h2>{tea[0].name}</h2>
            <p>{tea[0].description}</p>
            </div>
          </div>
        ) : (
          <p>loading</p>
        )}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    tea: state.tea,
  };
};
const mapDispatch = (dispatch) => ({
    fetchTea: (teaId) => dispatch(fetchTea(teaId)),
});

export default connect(mapState, mapDispatch)(SingleTea);
