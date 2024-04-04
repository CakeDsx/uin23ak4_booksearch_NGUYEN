import React from "react";
import Navabar from "../Navbar/Navbar"
import SearchForm from "../SearchForm/SearchForm"
import "./Header.scss"

const Header = () => {
    return (
        <div className='holder'>
            <header className='header'>
                <Navabar />
                <div className='header-content flex flex-c text-center text-white'>
                    <h2 className='header-title text-capitalize'>Find Your Book Of Choice</h2><br />
                    <p className='header-text fs-18 fw-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores magni minima libero asperiores fugit, repudiandae, nulla cupiditate expedita quam ea, iusto neque molestiae veritatis! Esse?</p>
                    <SearchForm />
                </div>
            </header>
        </div>
    )
}

export default Header