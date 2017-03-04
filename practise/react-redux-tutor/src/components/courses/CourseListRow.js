import React, { PropTypes } from 'react'
import {Link} from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { browserHistory } from 'react-router'

import * as courseActions from '../../actions/courseActions'


class CourseListRow extends React.Component {
    constructor(props, context) {
        super(props, context)

        this.handleCourseRemove = this.handleCourseRemove.bind(this)
    }

    handleCourseRemove(event) {
        event.preventDefault()
        let { course } = this.props
        this.props.actions.removeCourse(course)
        browserHistory.push('/courses')
    }

    render() {
        const { course } = this.props

		return (
			<tr>
				<td><Link to={course.watchHref} target='_blank'>Watch</Link></td>
				<td><Link to={'/course/' + course.id}>{course.title}</Link></td>
				<td>{course.authorId}</td>
				<td>{course.category}</td>
				<td>{course.length}</td>
				<td><button className="btn btn-danger" onClick={this.handleCourseRemove}>Remove</button></td>
			</tr>
		)
	}
}

CourseListRow.defaultProps = {
}

CourseListRow.propTypes = {
	course: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps){
    return {
        course: ownProps.course
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseListRow)