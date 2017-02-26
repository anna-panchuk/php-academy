import React, { PropTypes } from 'react'
import {Link} from 'react-router'

const AuthorsListRow = ({author}) => {
    return (
        <tr>
        <td>{author.id}</td>
        <td>{author.firstName}</td>
        <td>{author.lastName}</td>
        </tr>
)
}

AuthorsListRow.defaultProps = {
}

AuthorsListRow.propTypes = {
    author: PropTypes.object.isRequired
}

export default AuthorsListRow

