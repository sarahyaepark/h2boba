import axios from 'axios'

const GOT_TEAS = 'GOT_TEAS'

const gotTeas = (data) => ({
  type: GOT_TEAS,
  data
})

export const fetchTeas = () => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get('/api/products/teas')
      dispatch(gotTeas(data))
    } catch (err) {
      console.log('ERROR fetching teas', err)
    }
  }
}

const initialState = []

const teasReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_TEAS:
      return action.data
    default:
      return state
  }
}

export default teasReducer
