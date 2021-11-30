import React from "react";
import "./Search.css";

export default function Search(props) {
  function handleSubmit(event) {
    const cityName = event.target[1].value;
    event.preventDefault();
    props.onSearch(cityName);
    console.log("City from Search component:", cityName);
  }

  return (
    <form
      className="search-form"
      id="search-form"
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div className="search-wrapper">
        <button type="submit" id="search-btn">
          <i className="fas fa-search"></i>
        </button>
        <input
          type="text"
          placeholder="enter city..."
          className="search-field"
          id="search-query"
        />
      </div>
    </form>
  );
}
