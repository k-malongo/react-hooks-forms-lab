import {React, useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  // console.log(props)
  const [formData, setFormData] = useState('')
  const [selectValue, setselectValue] = useState('Produce')

  
    function handleChange(event){
      setFormData(event.target.value)
    }

    function handleSelectChange(event){
      setselectValue(event.target.value)
    }

    function handleSubmit(event){
      event.preventDefault();

      const newItem = {
        id: uuid(), // the `uuid` library can be used to generate a unique id
        name: formData,
        category: selectValue,
      };
      console.log(newItem)
      onItemFormSubmit(newItem)
    }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" 
                name="name" 
                onChange={handleChange}
                />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleSelectChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
} 

export default ItemForm;
