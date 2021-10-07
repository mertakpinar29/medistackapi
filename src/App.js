import React, { useState, useEffect } from 'react'
import './App.scss';
import Header from './components/Header'
import NewsTable from './components/NewsTable';
import Search from './components/Search';
import Pagination from './components/Pagination';

import fetchArticles from './functions/fetchArticles'

function App() {
  const [items, setItems] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [query, setQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(5)
  const [fetchTechnology, setFetchTechnology] = useState(true)

  useEffect(() => {
    fetchArticles(fetchTechnology, query, setItems, setLoading)
  }, [query, fetchTechnology])

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <div>
      <Header fetchTechnology={fetchTechnology} setFetchTechnology={setFetchTechnology} setLoading={setLoading}/>
      <Search search={(q) => setQuery(q)} />
      <NewsTable items={currentItems} isLoading={isLoading} />
      <Pagination 
        itemsPerPage={itemsPerPage}
        totalItems={items.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
