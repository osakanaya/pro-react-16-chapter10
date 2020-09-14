import React from "react";
import { Summary } from "./Summary";

export default function App() { 
  return (
    <div>
      <h1 className="bg-primary text-white text-center p-2">
        Hello Adam
      </h1>
      <Summary names={ ["Bob", "Alice", "Dora"] }/>
    </div>
  )
}

