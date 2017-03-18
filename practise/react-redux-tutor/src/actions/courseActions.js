import * as types from './actionTypes'
import CourseApi from '../api/mockCourseApi'

export function updateCourseSucess(course) {
	return {type: types.UPDATE_COURSE_SUCCESS, course}
}

export function createCourseSuccess(course) {
	return {type: types.CREATE_COURSE_SUCCESS, course}
}

export function removeCourseSuccess(courseId) {
	return {type: types.REMOVE_COURSE_SUCCESS, courseId}
}

export function saveCourse(course) {
  return function(dispatch){
    return CourseApi.saveCourse(course).then(savedCourse => {
      course.id ? dispatch(updateCourseSucess(savedCourse)) : dispatch(createCourseSuccess(savedCourse))
    }).catch(error => {
      throw(error)
    })
  }
}

export function removeCourse(course) {
  return function(dispatch){
    return CourseApi.deleteCourse(course.id).then(() => {
    	dispatch(removeCourseSuccess(course.id))
    }).catch(error => {
      throw(error)
    })
  }
}

export function loadCoursesSuccess(courses) {
  return {type: types.LOAD_COURSES_SUCCESS, courses}
}

export function loadCourses() {
	return function(dispatch){
		return CourseApi.getAllCourses().then(courses => {
			dispatch(loadCoursesSuccess(courses))
		}).catch(error => {
			throw(error)
		})
	}
}