import { StyledButton } from "./styles";

export const Button = ({ children, buttonStyle = "primary", buttonSize, type = "button", ...rest }) => {
  return (
    <StyledButton 
      type={type} 
      $buttonStyle={buttonStyle} 
      $buttonSize={buttonSize}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};