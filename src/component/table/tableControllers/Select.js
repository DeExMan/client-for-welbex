import React from 'react'
import "./TablePagination.scss"
import { useState } from 'react';

export const Select = ({getNewPage}) => {
    return (
        <div className='test'>
            <select onChange={e=>getNewPage(0, e.target.value)}>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
            </select>
        </div>

    )
}
