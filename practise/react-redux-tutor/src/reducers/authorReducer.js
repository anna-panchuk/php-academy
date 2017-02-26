import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function(state = initialState.authors, action) {
  switch(action.type){
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors
    case types.UPDATE_AUTHOR_SUCCESS:
      debugger;
      return [
              ...state.filter(author => author.id !== action.author.id),
      Object.assign(action.author)
    ]
    default:
      return state;
  }
}