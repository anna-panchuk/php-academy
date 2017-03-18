import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput'

const AuthorForm = ({author, onSave, onChange, loading, errors}) => {
    return (
        <form>
        <h1>Manage Author</h1>
    <TextInput
    name="id"
    label="ID"
    placeholder=""
    value={author.id}
    error={errors.id}
    onChange={onChange}
        />
        <TextInput
    name="firstName"
    label="First Name"
    placeholder=""
    value={author.firstName}
    error={errors.firstName}
    onChange={onChange}
        />
        <TextInput
    name="lastName"
    label="Last Name"
    placeholder=""
    value={author.lastName}
    error={errors.lastName}
    onChange={onChange}
        />
        <input
    className="btn btn-success"
    type="submit"
    disabled={loading}
    value={loading ? 'Saving...' : 'Save'}
    onClick={onSave}
        />
        </form>
)
}

AuthorForm.PropTypes = {
    author: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    errors: PropTypes.object
};

export default AuthorForm
