import axios from 'axios'

const fetchArticles = async (fetchTechnology, query, setItems, setLoading) => {
    if(query === '') {
        const result = fetchTechnology ? 
        await axios(`${process.env.REACT_APP_BASE_URL}news?access_key=${process.env.REACT_APP_API_KEY}&categories=technology&languages=en`)
        :
        await axios(`${process.env.REACT_APP_BASE_URL}news?access_key=${process.env.REACT_APP_API_KEY}&categories=sports&languages=en`)
        
        console.log(result.data.data)

        setItems(result.data.data)
        setLoading(false)
    }else {
        const result = fetchTechnology ? 
        await axios(`${process.env.REACT_APP_BASE_URL}news?access_key=${process.env.REACT_APP_API_KEY}&categories=technology&languages=en&keywords=${query}`)
        :
        await axios(`${process.env.REACT_APP_BASE_URL}news?access_key=${process.env.REACT_APP_API_KEY}&categories=sports&languages=en&keywords=${query}`)
        
        console.log(result.data.data)
        
        setItems(result.data.data)
        setLoading(false)
    }
}

export default fetchArticles