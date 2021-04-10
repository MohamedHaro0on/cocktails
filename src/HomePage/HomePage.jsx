import { createRef, useContext , useEffect} from "react";
import { AppContext } from "../Context/Context";
import ClassNames from "./HomePage.module.css";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import Button from "../Button";



const HomePage = () => {
    const { data, loading, searchTerm, handleChange, handleSubmit } = useContext(AppContext);
    const InputRef = createRef(null);
    useEffect(()=>{
        InputRef.current.focus();
    })

    let ListDisplayed = null;

    // If the request is still runing;
    if (loading || !data) {
        ListDisplayed = (
            <Loader />
        )
    }
    // if the request returned no items ;
    else if (data.length === 0) {
        ListDisplayed = (
            <h2 className={ClassNames.NoCocktailsHeading}>No Cocktails Matched Your Search Criteria </h2>
        )
    }
    // if the request returns data ;
    else if (data.length > 0) {
        ListDisplayed = (
            <ul className={ClassNames.CocktailsList}>
                {data.map((element) => {
                    const { strDrinkThumb, strDrink, idDrink, strAlcoholic, strGlass } = element;
                    return (
                        <li key={idDrink}>
                            <figure>
                                <img src={strDrinkThumb} alt={strDrink} width="350" height="100%" />
                                <figcaption>
                                    <h2>{strDrink}</h2>
                                    <h3>{strGlass}</h3>
                                    <p>{strAlcoholic}</p>
                                    <Button aria-label={` full information about ${strDrink}`}>
                                        <Link to={{ pathname: `/cocktail/${idDrink}`, state: { element } }}>
                                            details
                                        </Link>
                                    </Button>
                                </figcaption>
                            </figure>
                        </li>
                    )
                })}
            </ul>
        )
    }
    return (
        <div className={ClassNames.HomePageContainer}>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label htmlFor="CocktailName">Search Your Favorite Cocktail</label>
                    <input 
                        value={searchTerm} 
                        onChange={e => handleChange(e)} 
                        id="CocktailName" 
                        name="CocktailName" 
                        type="text" 
                        ref = {InputRef}    
                    />
                </div>
            </form>
            {ListDisplayed}
        </div>
    )
}

export default HomePage