import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { AppProvider } from './components/pages/Context.'
import './index.scss'
import Home from './components/pages/Home/Home'
import BookList from './components/BookList/BookList'
import BookDetails from './components/BookDetails/BookDetails'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  //routing to the different files so that the information from the pages are show on the website
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />}>
          <Route path = "book" element = {<BookList />} />
          <Route path = "book/:id" element = {<BookDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>
)
