import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { browserHistory } from 'react-router'

import * as authorActions from '../../actions/authorActions'

class AuthorsListRow extends React.Component {
    constructor(props, context) {
        super(props, context)

        this.handleAuthorRemove = this.handleAuthorRemove.bind(this)
      }

      handleAuthorRemove(event) {
        event.preventDefault()
        let { author } = this.props
        this.props.actions.removeAuthor(author)
        browserHistory.push('/authors')
      }

    render() {
        const {author} = this.props

        return (
            <tr>
        <td>{author.id}</td>
        <td>{author.firstName}</td>
        <td>{author.lastName}</td>
        <td><button className="btn btn-danger" onClick={this.handleAuthorRemove}>Remove</button></td>
        </tr>
    );
    }
}

AuthorsListRow.defaultProps = {
}

AuthorsListRow.propTypes = {
    author: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps){
    return {
        author: ownProps.author
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(authorActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsListRow)