import React from 'react'

export default function Table(props) {
    const tableData = props.tableData && props.tableData.map((data, index) => {
       
       return (
       <tr>
        <td>{data.name}</td>
        <td>{data.username}</td>
        <td>{data.category}</td>
        <td>{data.price}</td>
        <td>{data.score}</td>
        <td>{data.lastActiveAt}</td>
    </tr>
       )
    })
    return (
        <div>
            <label>
                Sort By:
                  <select>
                    <option value="price">Price</option>
                    <option value="score">Score</option>
                    <option value="lastActiveAt">Last Active At</option>
                  </select>
              </label>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Score</th>
                    <th>Last Active At</th>
                </tr>
                </thead>
                <tbody>
                {tableData}
                </tbody>
            </table>
        </div>
    );
  }