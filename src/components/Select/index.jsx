import { SelectWrapper } from "./styles";

export const Select = ({ label, id, children, ...rest }) => {
  return (
    <SelectWrapper>
      {label && <label htmlFor={id}>{label}</label>}
      
      <select id={id} {...rest}>
        {children}
      </select>
    </SelectWrapper>
  );
};