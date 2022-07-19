import { Table } from "./component/table/Table"
import './App.scss'
import { useEffect, useState } from "react";
import axios from 'axios'
import { TablePagination } from './component/table/tableControllers/TablePagination'
import { Select } from './component/table/tableControllers/Select'
import { FIlter } from "./component/table/tableControllers/FIlter";

function App() {
  const [data, setData] = useState()
  const [limit, setLimit] = useState(5)
  const [currentPage, setCurrentPage] = useState(1)
  const [sortedBy, setSortedBy] = useState("date")

  useEffect(() => {
    axios.get('http://localhost:8080/api/getTable', {
      headers: {
        'content-type': 'application/json',
      },
    }).then(result => {
      const data = result.data;
      setData(data)
      console.log(data)
    }).catch(e => { console.log(e) })
  }, [])


  function getNewPage(page, limit) {
    axios.get('http://localhost:8080/api/getTable', {
      params: {
        'limit': limit,
        'page': currentPage+page
      },
    }).then(result => {
      const data = result.data;
      setLimit(limit)
      setCurrentPage(currentPage+page)
      setData(data)
      console.log(data)
    }).catch(e => { console.log(e) })
  }

  function sortData (ordering) {
    axios.get('http://localhost:8080/api/getTable', {
      params: {
        'limit': limit,
        'page': currentPage,
        "ordering": ordering
      },
    }).then(result => {
      const data = result.data;
      setData(data)
      console.log(data)
    }).catch(e => { console.log(e) })
  }

  function filterData (filtredBy, comparison, value) {
    axios.get('http://localhost:8080/api/getTable', {
      params: {
        'limit': limit,
        'page': currentPage,
        'ordering': sortedBy,
        "filtredBy": filtredBy,
        "comparison": comparison,
        "value": value
      },
    }).then(result => {
      const data = result.data;
      setData(data)
      console.log(data)
    }).catch(e => { console.log(e) })
  }

  return (
    
    <div className="App">
      <Table setSortedBy={setSortedBy} sortedBy={sortedBy} sortData={sortData} data={data} />
      <div className='test'>
        {data &&
        <TablePagination data={data} limit = {limit} getNewPage={getNewPage} currentPage={currentPage} className='test'/>
        }
        <Select getNewPage={getNewPage} currentPage={currentPage} className='test'/>
        
      </div>
      <FIlter filterData={filterData}/>
    </div>
  );
}

export default App;
