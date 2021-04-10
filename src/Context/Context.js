import { createContext, useEffect, useState } from "react";
import axios from "axios";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = createContext(null);

const AppProvider = (props) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm , setSearchTerm] = useState("");

    const FetchData = (term) => {
        setLoading(true);
        axios.get(`${URL}${term?term : ""}`).then((response) => {
            if (response.data.drinks){
                setData(response.data.drinks);
            }
            else if (response.data.drinks === null){
                setData([]);
            }
        }).catch((error) => {
            console.log('The the request error :: ', error);
        }).then(() => {
            setLoading(false);
        })
    }

    useEffect(() => {
        FetchData(searchTerm);
    }, [searchTerm])

    const handleChange = (e)=>{
        e.preventDefault();
        setSearchTerm(e.target.value);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        FetchData(searchTerm);
    }
    return (
        <AppContext.Provider value={{ data, loading , searchTerm , handleChange , handleSubmit}} {...props}>
            {props.children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider };