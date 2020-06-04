import axios from 'axios'

const GOT_BLEND = 'GOT_BLEND'

const gotBlend = (id) => ({
  type: GOT_BLEND,
  id
})

export const fetchBlend = (id) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(`/api/products/blends/${id}`)
      dispatch(gotBlend(data))
    } catch (err) {
      console.log('ERROR fetching blend', err)
    }
  }
}

const initialState = []

const blendReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_BLEND:
      return action.id
    default:
      return state
  }
}

export default blendReducer
