import axios from 'axios'

const GOT_BLENDS = 'GOT_BLENDS'

const gotBlends = (data) => ({
  type: GOT_BLENDS,
  data
})

export const fetchBlends = () => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get('/api/products/blends')
      dispatch(gotBlends(data))
    } catch (err) {
      console.log('ERROR fetching blends', err)
    }
  }
}

const initialState = []

const blendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_BLENDS:
      return action.data
    default:
      return state
  }
}

export default blendsReducer
