import React from 'react';

import './App.css';
import MyModal from "./components/MyModal"

import Table from "./components/Table"
function App() {
  return (
    <div className="App">
      <h1> Instructor List </h1>
      <h5> instructor Management /tunis</h5>
      <MyModal />
     <Table />
    </div>
  );
}

export default App;
