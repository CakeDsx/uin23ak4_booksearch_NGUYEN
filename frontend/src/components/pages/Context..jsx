import React, {useState, useContext, useEffect} from "react";
import { useCallback } from "react";
const URL = "https://openlibrary.org/search.json?title="
const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [searchTerm, setSearchTerm] = useState("James Bond") //Makes it so that James Bond is what is being "searched" meaning that only james bond books are shown
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(true)
    const {resultTitle, setResultTitle} = useState("")


    //fetches the Word/name that is being searched
    const fetchBooks = useCallback(async() => {
        setLoading(true)
        try{
            const response = await fetch(`${URL}${searchTerm}`)
            const data = await response.json()
            const {docs} = data

            //makes it so there is max 100 books that are shown
            if(docs){
                const newBooks = docs.slice(0,100).map((bookSingle) => {
                    const {key, author_name, cover_i, ratings_average, first_publish_year, title} = bookSingle
                    //the order the details abt the books are shown below the covers
                    return {
                        id: key,
                        author: author_name,
                        cover_id: cover_i,
                        ratings_average: ratings_average,
                        first_publish_year: first_publish_year,
                        title: title
                    }
                })

                setBooks(newBooks)
                //if one or more books then show "your search results" but if less then one then show "no search result found"
                if(newBooks.length > 1){
                    setResultTitle("Your Search Result")
                } else {
                    setResultTitle("No Search Result Found!")
                }
            } else {
                setBooks([])
                setResultTitle("No Search Result Found!");
            }
            setLoading(false)
        } catch(error) {
            console.log(error)
            setLoading(false)
        }
    }, [searchTerm])

    useEffect(() => {
        fetchBooks()
    }, [searchTerm, fetchBooks])

    return (
        <AppContext.Provider value = {{
            loading, books, setSearchTerm, resultTitle, setResultTitle,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}