import React, { PropTypes } from 'react'
import AuthorsListRow from './AuthorsListRow'

const AuthorsList = ({authors}) => {
    return (
        <table className="table">
        <thead>
        <tr>
            <th>ID</th>
            <th>First name</th>
            <th>Last name</th>
        </tr>
    </thead>
    <tbody>
    {authors.map(author => {
        return <AuthorsListRow key={author.id} author={author}/>
})
}
</tbody>
    </table>
)
}

AuthorsList.defaultProps = {
    authors: []
}

AuthorsList.propTypes = {
    authors: PropTypes.array.isRequired
}

export default AuthorsList


