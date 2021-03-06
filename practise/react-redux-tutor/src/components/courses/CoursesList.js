import React, { PropTypes } from 'react'
import CourseListRow from './CourseListRow'

const CoursesList = ({courses}) => {
	return (
		<table className="table">
			<thead>
				<tr>
					<th>&nbsp;</th>
					<th>Title</th>
					<th>Author</th>
					<th>Category</th>
					<th>Length</th>
					 <th></th>
				</tr>
			</thead>
			<tbody>
				{courses.map(course => {
					return <CourseListRow key={course.id} course={course}/>	
					})
				}
			</tbody>
		</table>
	)
}

CoursesList.defaultProps = {
	courses: []
}

CoursesList.propTypes = {
	courses: PropTypes.array.isRequired
}

export default CoursesList


