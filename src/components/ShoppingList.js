import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchItem, setSearchedItem] = useState("")

  // console.log(onItemFormSubmit)

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items
  .filter(
    (item) => 
    selectedCategory === "All" || item.category === selectedCategory)    
  .filter((item) => item.name.toLowerCase().includes(searchItem.toLowerCase()));

  // function searchFilter(event){
  //   setSearchedItem( event.target.value)
  //   console.log(searchItem)
  // }
  

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter search={searchItem} onCategoryChange={handleCategoryChange} onSearchChange={setSearchedItem}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div> 
  );
}

export default ShoppingList;
