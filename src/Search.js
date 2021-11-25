import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <form className="search-form" id="search-form" autoComplete="off">
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
