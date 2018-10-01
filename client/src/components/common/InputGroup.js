import React from 'react';
import classnames from 'classnames';
import Proptypes from 'prop-types';

const InputGroup = ({
  name,
  placeholder,
  value,
  error,
  icon,
  type,
  onChange
}) => {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">
          <i className={icon} />
        </span>
      </div>
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
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

InputGroup.propTypes = {
  name: Proptypes.string.isRequired,
  placeholder: Proptypes.string,
  value: Proptypes.string.isRequired,
  error: Proptypes.string,
  icon: Proptypes.string,
  type: Proptypes.string,
  onChange: Proptypes.func.isRequired,
  disabled: Proptypes.string
};

InputGroup.defaultPropTypes = {
  type: 'text'
};

export default InputGroup;
