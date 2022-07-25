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
            <td>
              <a href={item.Website}>
                {item.Name}
              </a>
            </td>
            <td>
              <a href={item.Website}>
                {item.Faculty}
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default RestaurantTable;