import React from 'react';
import classnames from 'classnames';
import Proptypes from 'prop-types';

const TextAreaFieldGroup = ({
  name,
  placeholder,
  value,
  error,
  info,
  onChange
}) => {
  return (
    <div className="form-group">
      <textarea
        className={classnames('form-control form-control-lg', {
          'is-invalid': error
        })}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextAreaFieldGroup.propTypes = {
  name: Proptypes.string.isRequired,
  placeholder: Proptypes.string,
  value: Proptypes.string.isRequired,
  error: Proptypes.string,
  info: Proptypes.string,
  onChange: Proptypes.func.isRequired
};

export default TextAreaFieldGroup;