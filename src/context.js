import React, { useState, useContext } from 'react';
import paginate from './paginate';
import useFetch from './useFetch';

// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=78d90c09`;
console.log(API_ENDPOINT)

const AppContext = React.createContext()

const AppProvider = ({ children }) => {


    const [query, setQuery] = useState('king');

    const [page, setPage] = useState(0);

    const { isLoading, error, data: movies } = useFetch(`&s=${query}`)

    return <AppContext.Provider value={{ isLoading, error, movies, query, setQuery }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider } 