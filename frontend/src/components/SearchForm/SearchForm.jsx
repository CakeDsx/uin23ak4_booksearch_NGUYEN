import React, {useRef} from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {useGlobalContext} from "../pages/Context."
import './SearchForm.scss'

const SearchForm = () => {
    const { setSearchTerm, setResultTitle} = useGlobalContext()
    const searchText = useRef('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const tempSearchTerm = searchText.current.value.trim()
        if(tempSearchTerm.length < 3) {
            setResultTitle('Please Enter Atleast 4 Charaters')
        } else {
            setSearchTerm(tempSearchTerm)
            navigate('/book')
        }
    }

    return (
        <div className='search-form'>
            <div className='container'>
                <div className='search-form-content'>
                    <form className='search-form' onSubmit={handleSubmit}>
                        <div className='search-form-elem flex-sb bg-white'>
                            <input
                            type='text'
                            className='form-control'
                            placeholder='Enter Book Title...'
                            ref={searchText}
                            />
                            <button type='submit' className='flex' onClick={handleSubmit}>
                                <FaSearch className='text-purple' size={32} />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SearchForm