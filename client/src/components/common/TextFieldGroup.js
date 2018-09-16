import React from 'react';
import classnames from 'classnames';
import Proptypes from 'prop-types';

const TextFieldGroup = ({
  name,
  placeholder,
  value,
  label,
  error,
  info,
  type,
  onChange,
  disabled
}) => {
  return (
    <div className="form-group">
      <input
        type={type}
        className={classnames('form-control form-control-lg', {
          'is-invalid': error
        })}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
      />
      {info && <small className="form-text form-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextFieldGroup.propTypes = {
  name: Proptypes.string.isRequired,
  placeholder: Proptypes.string,
  value: Proptypes.string.isRequired,
  label: Proptypes.string,
  error: Proptypes.string,
  info: Proptypes.string,
  type: Proptypes.string.isRequired,
  onChange: Proptypes.func.isRequired,
  disabled: Proptypes.string
};

TextFieldGroup.defaultPropTypes = {
  type: 'text'
};

export default TextFieldGroup;
