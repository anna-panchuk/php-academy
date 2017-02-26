import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as authorActions from '../../actions/authorActions'
import AuthorForm from './AuthorForm'

class ManageAuthorsPage extends React.Component {
    constructor(props, context) {
        super(props, context)

        this.state = {
            errors: {},
            author: Object.assign({}, this.props.author)
        }

        this.handleAuthorChange = this.handleAuthorChange.bind(this)
        this.handleAuthorSave = this.handleAuthorSave.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.author.id !== this.props.author.id) {
            this.setState({author: Object.assign({}, nextProps.author)})
        }
    }

    handleAuthorSave(event) {
        event.preventDefault()
        this.props.actions.saveAuthor(this.state.author)
        this.context.router.push('/authors')
    }

    handleAuthorChange(event) {
        const name = event.target.name
        let author = this.state.author
        author[name] = event.target.value
        this.setState({author})
    }

    render() {
        return (
            <AuthorForm
            
        author={this.state.author}
        onSave={this.handleAuthorSave}
        onChange={this.handleAuthorChange}
        loading={false}
        errors={this.state.errors}
    />
    )
    }
}

ManageAuthorsPage.PropTypes = {
    author: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
}

ManageAuthorsPage.contextTypes = {
    router: PropTypes.object
}

const getAuthorById = (authors, authorId) => {
    return authors.find((author) => { return author.id === authorId })
}

function mapStateToProps(state, ownProps) {

    let emptyAuthor = {id: "", lastName: "", firstName: ""}

    const authorId = ownProps.params.id

    if (authorId) {
        author = getAuthorById(state.authors, authorId)
        author = author ? author : emptyAuthor
    }


    return {
        author: author
    }
}


function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(authorActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageAuthorsPage)
