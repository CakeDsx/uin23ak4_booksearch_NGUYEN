import React from "react";
import { Link } from "react-router-dom";
import "./BookList.scss"

const Book = ({cover_img, title, author, ratings_average, first_publish_year, amazon_id}) => {
    const amazonUrl = `https://www.amazon.com/s?k=${title}`

    return (
        <div className='book-item flex flex-column flex-sb'>
            <div className='book-item-img'>
                <img src={cover_img} alt = "cover" />
            </div>
            <div className="'book-item-info text-center">
                <Link to={`/book/${title}`} className='book-link'>
                    <div className='book-item-info-item title fw-7 fs-18'>
                        <span>{title}</span>
                    </div>
                </Link>

                <div className='book-item-info-item author fs-15'>
                    <span className='text-capitalize fw-7'>Author</span>
                    <span>{Array-isArray(author) ? author.join(", ") : author} </span>
                </div>

                <div className='book-item-info-item ratings_average fs-15'>
                    <span className='text-capitalize fw-7'>Rating:</span>
                    <span>{ratings_average}</span>
                </div>

                <div className='book-item-info-item publish_year fs-15'>
                    <span className='text-capitalize fw-7'>First Publish Year: </span>
                    <span>{first_publish_year}</span>
                </div>
                <div>
                    <a href={amazonUrl} target="blank" rel="noopener noreferrer">
                        <button className='amazon-button'>Amazon</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Book