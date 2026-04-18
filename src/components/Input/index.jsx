import { InputWrapper } from "./styles";

export const Input = ({ label, placeholder, helperText="", id, type = "text", ...rest }) => {
  return (
    <InputWrapper>
      {label && <label htmlFor={id}>{label}</label>}
      
      <input 
        id={id} 
        type={type} 
        placeholder={placeholder} 
        {...rest} 
      />
      
      {helperText && <p>{helperText}</p>}
    </InputWrapper>
  );
};