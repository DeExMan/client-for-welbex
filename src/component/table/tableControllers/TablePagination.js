import React from 'react'
import "./TablePagination.scss"

export const TablePagination = ({ getNewPage, currentPage, limit, data }) => {
    return (
        <div className='test'>
            <div className="pagination:container" >
                <div onClick={currentPage != 1 ? () => getNewPage(-1, limit) : null} className={currentPage != 1 ? "pagination:arrow arrow" : "lastpage:number"}>
                    <svg width="18" height="18">
                        <use href="#left" />
                    </svg>
                    <span className="arrow:text"></span>
                </div>
                <div className="page:number">
                    {currentPage}
                </div>
                <div onClick={data.length == limit ? () => getNewPage(1, limit) : null} className={data.length == limit ? "pagination:arrow arrow" : "lastpage:number"}>
                    <svg width="18" height="18">
                        <use href="#right" />
                    </svg>
                </div>
            </div>

            <svg className="hide">
                <symbol id="left" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></symbol>
                <symbol id="right" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></symbol>
            </svg>
        </div>
    )
}
