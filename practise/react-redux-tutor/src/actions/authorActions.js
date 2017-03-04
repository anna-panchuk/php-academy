import * as types from './actionTypes'
import AuthorApi from '../api/mockAuthorApi'

export function updateAuthorSucess(author) {
	return {type: types.UPDATE_AUTHOR_SUCCESS, author}
}

export function createAuthorSuccess(author) {
	return {type: types.CREATE_AUTHOR_SUCCESS, author}
}

export function removeAuthorSuccess(authorId) {
	return {type: types.REMOVE_AUTHOR_SUCCESS, authorId}
}

export function saveAuthor(author) {
  return function(dispatch){
    return AuthorApi.saveAuthor(author).then(savedAuthor => {
      author.id ? dispatch(updateAuthorSucess(savedAuthor)) : dispatch(createAuthorSuccess(savedAuthor))
    }).catch(error => {
      throw(error)
    })
  }
}

export function removeAuthor(author) {
  return function(dispatch){
    return AuthorApi.deleteAuthor(author.id).then(() => {
    	dispatch(removeAuthorSuccess(author.id))
    }).catch(error => {
      throw(error)
    })
  }
}
export function loadAuthorsSuccess(authors) {
  return {type: types.LOAD_AUTHORS_SUCCESS, authors}
}

export function loadAuthors() {
  return function(dispatch){
    return AuthorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors))
    }).catch(error => {
      throw(error)
    })
  }
}