import React, { PropTypes } from 'react'
import {Link} from 'react-router'

const CourseListRow = ({course}) => {
	return (
		<tr>
			<td><Link to={course.watchHref} target='_blank'>Watch</Link></td>
			<td><Link to={'/course/' + course.id}>{course.title}</Link></td>
			<td>{course.authorId}</td>
			<td>{course.category}</td>
			<td>{course.length}</td>
		</tr>
	)
}

CourseListRow.defaultProps = {
}

CourseListRow.propTypes = {
	course: PropTypes.object.isRequired
}

export default CourseListRow
