import { FormStyle } from "./styles";
import { Input } from "../Input"
import { Select } from "../Select";
import { Button } from "../Button";
import { useState } from "react";

export const FinanceForm = ({ addTransaction }) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(""); 
  const [type, setType] = useState("Entrada");

  const submitHandler = (event) => {
    event.preventDefault(); 

    if (description !== "" && value !== "") {
      addTransaction({
        description,
        value: Number(value), 
        type, 
      });

      
      setDescription("");
      setValue("");
    }
  };

  return (
    <FormStyle onSubmit={submitHandler}> 
      <Input
        label="Descrição" 
        placeholder="Digite aqui sua descrição"
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
      />
      <Input
        type="number" 
        label="Valor" 
        placeholder="1"
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
      />
      <Select 
        label="Tipo de valor" 
        value={type} 
        onChange={(e) => setType(e.target.value)}
      >
        <option value="Entrada">Entrada</option>
        <option value="Despesa">Despesa</option>
      </Select>
      
      <Button type="submit">Inserir valor</Button>
    </FormStyle>
  );
};