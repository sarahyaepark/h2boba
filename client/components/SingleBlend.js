import React from "react";
import { connect } from "react-redux";
import { fetchBlend } from "../store/singleBlend";
import { NavLink } from "react-router-dom";

export class SingleBlend extends React.Component {
  componentDidMount() {
    let blendId = this.props.match.params.blendId;
    this.props.fetchBlend(blendId);
    // console.log('>>>>>>>>>>>>>>>', this.props)
  }
  render() {
    const { blend } = this.props;
    console.log(this.props);
    return (
      <div>
        {blend.length > 0 ? (
          <div className="singleBlend">
            <img className="singleBlendImg" src={blend[0].imgUrl} />
            <div>
            <h2>{blend[0].name}</h2>
            <p>{blend[0].description}</p>
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
    blend: state.blend,
  };
};
const mapDispatch = (dispatch) => ({
  fetchBlend: (blendId) => dispatch(fetchBlend(blendId)),
});

export default connect(mapState, mapDispatch)(SingleBlend);
