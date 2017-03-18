import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput'
import SelectInput from '../common/SelectInput'

const CourseForm = ({course, allAuthors, onSave, onChange, loading, errors}) => {
  return (
    <form>
      <h1>Manage course</h1>
      <TextInput
        name="title"
        label="Title"
        placeholder=""
        value={course.title}
        error={errors.title}
        onChange={onChange}
      />
      <SelectInput
        name="authorId"
        label="Author"
        defaultOption="Select Author"
        options={allAuthors}
        value={course.authorId}
        error={errors.authorId}
        onChange={onChange}
      />
      <TextInput
        name="category"
        label="Category"
        placeholder=""
        value={course.category}
        error={errors.category}
        onChange={onChange}
      />
      <TextInput
        name="length"
        label="Length"
        placeholder=""
        value={course.length}
        error={errors.length}
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

CourseForm.PropTypes = {
  course: PropTypes.object.isRequired,
  allAuthors: PropTypes.array.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  errors: PropTypes.object
};

export default CourseForm