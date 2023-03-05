import React from 'react'
import { useState } from 'react'
import "./styles.css";
export default function Search() {

    const [ setQuery] = useState("");
  return (
    <div className="App">
      <label>Search</label>
      <input type="text" onChange={(e) => setQuery(e.target.value)} />
      
    </div>
  );

}
