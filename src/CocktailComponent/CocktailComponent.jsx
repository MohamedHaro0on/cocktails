import ClassNames from "./Cocktails.module.css";
import Button from "../Button";
import { Link } from "react-router-dom";

const Cocktail = (props) => {
    let { element } = props.location.state
    const {
        strDrink,
        strDrinkThumb,
        strCategory,
        strAlcoholic,
        strGlass,
        strInstructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
        strIngredient6,
        strIngredient7,
        strIngredient8 } = element;
    const Ingredients = [
        strIngredient1, strIngredient2, strIngredient3, strIngredient4,
        strIngredient5, strIngredient6, strIngredient7, strIngredient8
    ]
    return (
        <div className={ClassNames.Container}>
            <Button aria-label="Back to home page">
                <Link to="/">
                    Back to Home Page
                    </Link>
            </Button>
            <article className={ClassNames.CocktailComponent}>
                <div className={ClassNames.ImageContainer}>
                    <img src={strDrinkThumb} alt={strDrink} />
                </div>
                <div className={ClassNames.CocktailsInfo}>
                    <table>
                        <thead>
                            <tr>
                                <td> <span>Name :</span></td>
                                <td>{strDrink}</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span>Category:</span></td>
                                <td>{strCategory}</td>
                            </tr>
                            <tr>
                                <td><span>Info :</span></td>
                                <td>{strAlcoholic}</td>
                            </tr>
                            <tr>
                                <td><span>Glass :</span></td>
                                <td>{strGlass}</td>
                            </tr>
                            <tr>
                                <td><span>Instructons :</span></td>
                                <td>{strInstructions}</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td><span>Ingredients :</span></td>
                                <td>
                                    {Ingredients.map((element) => {
                                        return (
                                            element && <span>{`  ${element}  `}</span>
                                        )
                                    })}
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </article>
        </div>
    )
}

export default Cocktail