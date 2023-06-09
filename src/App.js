import React, { useEffect } from "react";

// e6f7e927

const API_URL = 'http://www.omdbapi.com?apikey=e6f7e927';
const App = () => {
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)

        const data = await response.json()

        console.log(data);
    }

    useEffect(() => {
        searchMovies('Spiderman')
    }, [])

    return (
    <h1>App</h1>
    );
}

export default App;