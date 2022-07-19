import React, { useEffect, useState } from 'react'

import "./Table.scss"



export const Table = ({sortData, data, setSortedBy, sortedBy }) => {

    function changeSort(value) {
        setSortedBy(value)
        sortData(value)
    }

    return (
        <div className='Table'>
            <table>
                <thead>
                    <tr>
                        <th onClick={sortedBy!="date" ? ()=>changeSort("date"):null}>{sortedBy == "date" ? "Дата ▼" : "Дата"}</th>
                        <th onClick={sortedBy!="name" ? ()=>changeSort("name"):null}>{sortedBy == "name" ? "Название ▼" : "Название"}</th>
                        <th onClick={sortedBy!="quantity" ? ()=>changeSort("quantity"):null}>{sortedBy == "quantity" ? "Количество ▼" : "Количество"}</th>
                        <th onClick={sortedBy!="distance" ? ()=>changeSort("distance"):null}>{sortedBy == "distance" ? "Дистанция ▼" : "Дистанция"}</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map(wood => 
                        <tr key={wood.id}>
                            <td>{wood.date}</td>
                            <td>{wood.name}</td>
                            <td>{wood.quantity}</td>
                            <td>{wood.distance}</td>
                        </tr>

                    )}
                </tbody>

            </table>
        </div>
    )
}
