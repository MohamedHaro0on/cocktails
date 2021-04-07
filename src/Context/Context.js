import { createContext, useEffect, useState } from "react";
import axios from "axios";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = createContext(null);

const AppProvider = (props) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);


    const FetchData = () => {
        console.log('this is the function ')
        setLoading(true);
        axios.get(URL).then((response) => {
            setData(response.data.drinks);
        }).catch((error) => {
            console.log('The the request error :: ', error);
        }).then(() => {
            setLoading(false);
        })
    }

    useEffect(() => {
        FetchData();
    }, [])

    return (
        <AppContext.Provider value={{ data, loading }} {...props}>
            {props.children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider };