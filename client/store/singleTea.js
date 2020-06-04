import axios from 'axios'

const GOT_TEA = 'GOT_TEA'

const gotTea = (id) => ({
  type: GOT_TEA,
  id
})

export const fetchTea = (id) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(`/api/products/teas/${id}`)
      dispatch(gotTea(data))
    } catch (err) {
      console.log('ERROR fetching tea', err)
    }
  }
}

const initialState = []

const teaReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_TEA:
      return action.id
    default:
      return state
  }
}

export default teaReducer
