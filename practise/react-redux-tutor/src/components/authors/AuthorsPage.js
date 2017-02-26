import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { browserHistory } from 'react-router'
import AuthorsList from './AuthorsList'
import * as authorActions from '../../actions/authorActions'


class AuthorsPage extends React.Component {

    render() {
        const {authors} = this.props
        return (
            <div className="AuthorsList">
            <h2>Authors</h2>

    <AuthorsList authors={authors}/>
            </div>
    );
    }
}

AuthorsPage.defaultProps = {
    authors: []
}

AuthorsPage.propTypes = {
    authors: PropTypes.array.isRequired
}


function mapStateToProps(state, ownProps){
    return {
        authors: state.authors
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(authorActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsPage)

