import React from "react";
import LoaderImg from "../pages/images/loader.svg"
import "./Loader.scss"

const Loader = () => {
    return (
        <div className='loader flex flex-c'>
            <img src = {LoaderImg} alt = "loader" />
        </div>
    )
}

export default Loader