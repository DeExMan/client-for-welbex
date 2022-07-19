import React, { useState } from 'react'
import "./TablePagination.scss"

export const FIlter = ({ filterData }) => {
    const [filtredBy, setFiltredBy] = useState('date')
    const [comparison, setComparison] = useState('=')
    const [value, setValue] = useState('')


    return (
        <div>
            <div className='test'>
                <select onChange={e => setFiltredBy(e.target.value)}>
                    <option value={"date"}>Дата</option>
                    <option value={"name"}>Название</option>
                    <option value={"quantity"}>Количество</option>
                    <option value={"distance"}>Дистанция</option>
                </select>
            </div>
            <div className='test'>
                <select onChange={e => setComparison(e.target.value)}>
                    <option value={"="}>ровно</option>
                    <option value={"LIKE"}>содержить</option>
                    <option value={">"}>больше</option>
                    <option value={"<"}>меньше</option>
                </select>
            </div>
            <div className='test'>
                <label>
                    Значение:
                    <input
                        name="value"
                        onChange={e => setValue(e.target.value)} />
                </label>
            </div>
            <div className='test'>
                <button onClick={() => filterData(filtredBy, comparison, value)}>
                    Фильтровать
                </button>
                <button>
                    Сбросить
                </button>
            </div>

        </div>

    )
}
