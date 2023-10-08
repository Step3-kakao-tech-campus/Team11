import styled from "styled-components";
import PropTypes from 'prop-types';

const Input = ({
  type,
  value,
  className,
  onChange,
  placeholder,
  id,
  valid,
}) => {
  return (
    <StyledInput
      id={id}
      className={className}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      valid={valid}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  valid: PropTypes.bool
}

export default Input;

const StyledInput = styled.input`
  width: 240px;
  padding: 15px;
  font-size: 13px;
  border: none;
  border-bottom: 2px solid #9eb0ea;
`;
