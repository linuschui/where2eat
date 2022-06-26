import React from 'react'

const RestaurantTable = ({data}) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>NAME</th>
          <th>LOCATION</th>
        </tr>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.Name}</td>
            <td>{item.Location}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default RestaurantTable;