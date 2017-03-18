import React, {PropTypes} from 'react'

const TextInput = ({name, label, placeholder, value, error, onChange}) => {
  let wrapperClass = 'form-group'
  if (error && error.length > 0) {
    wrapperClass += ' has-error'
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type="text"
          className="form-control"
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  )
}

TextInput.PropTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

export default TextInput