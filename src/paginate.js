const paginate = (movies) => {
    const itemsPerPage = 10;
    const pages = Math.ceil(movies.totalResults / itemsPerPage);

    console.log(pages, movies.totalResults)

    const newMovies = Array.from({ length: pages }, (_, index) => {
        const start = index * itemsPerPage
        return movies.Search.slice(start, start + itemsPerPage)
    })
    console.log(pages, movies.totalResults, newMovies)
    return newMovies;
}

export default paginate;