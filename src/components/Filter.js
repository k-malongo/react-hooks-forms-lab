import React from "react";

function Filter({ onCategoryChange, search,onSearchChange }) {
  function onSearchChang(event){
    onSearchChange(event.target.value)
    console.log(search)
  }
  return (
    <div className="Filter">
      <input onChange={onSearchChang} type="text" name="search" placeholder="Search..." value={search}/>
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter; 
