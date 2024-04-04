import React from "react";
import LoaderImg from "../pages/images/loader.svg"
import "./Loader.scss"
//shows a loading thing while it loads the books
const Loader = () => {
    return (
        <div className='loader flex flex-c'>
            <img src = {LoaderImg} alt = "loader" />
        </div>
    )
}

export default Loader