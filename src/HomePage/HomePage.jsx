import { useContext } from "react";
import { AppContext } from "../Context/Context";
import ClassNames from "./HomePage.module.css";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";

const HomePage = () => {
    const { data, loading } = useContext(AppContext);
    console.log("this is the data", data);
    if (loading || data.length === 0) {
        return (
            <Loader />
        )
    }
    else {
        return (
            <ul className={ClassNames.CocktailsList}>
                {data.map(({ strDrinkThumb, strDrink, idDrink, strAlcoholic, strGlass }) => {
                    return (
                        <li key={idDrink}>
                            <figure>
                                <img src={strDrinkThumb} alt={strDrink} />
                                <figcaption>
                                    <h3>{strDrink}</h3>
                                    <h4>{strGlass}</h4>
                                    <p>{strAlcoholic}</p>
                                    <Link to={`/cocktail/${idDrink}`} aria-label={` full information about ${strDrink}`}>
                                        details
                                    </Link>
                                </figcaption>
                            </figure>
                        </li>
                    )
                })}
            </ul>
        )
    }

}

export default HomePage