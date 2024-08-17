import React from "react";
import './App.css';

function Table() {
  return (
      <header className="App-header">
    
  <div>
    <table>
      <tr>
      <th colSpan={3}>Menu Card</th></tr>
      <tr>
        <th>S.No</th>
        <th>FOOD Items</th>
        <th>Price</th>
      </tr>
      <tr>
        <td>01</td>
        <td>Briyani</td>
        <td>Rs.100</td>
      </tr>
      <tr>
        <td>02</td>
        <td>Fried Rice</td>
        <td>Rs.150</td>
      </tr>
      <tr>
        <td>03</td>
        <td>Naan</td>
        <td>Rs.30</td>
      </tr>
    </table>
  </div>
</header>);
}
export default Table;