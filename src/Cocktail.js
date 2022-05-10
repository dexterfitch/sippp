function Cocktail({ drink }) {

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-sm-6 col-md-4">
                    {drink.strDrinkThumb ? <img className="img-fluid cocktail-thumb" src={drink.strDrinkThumb} /> : null }
                </div>
                <div className="col">
                    <h3><b>Name:</b> {drink.strDrink} <span><i>{drink.strAlcoholic ? "-- " + drink.strAlcoholic : null}</i></span></h3>
                    <div className="row">
                        <div className="col-sm-6">
                             <h4>{drink.strCategory ? <b>Category:</b> : null } {drink.strCategory}</h4>
                        </div>
                        <div className="col">
                            <p>{drink.strGlass ? <b>Glass:</b> : null} {drink.strGlass}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row px-3 py-5">
                <div className="col-md-4">
                    <p>{drink.strIngredient1 ? <b>Ingredients:</b> : null}</p>
                    {
                        drink.strIngredient1 ? 
                            <ul>
                                {drink["strMeasure1"] != null && drink["strMeasure1"] != "" ? <li>{drink["strMeasure1"] + ": " + drink["strIngredient1"]}</li> : null }
                                {drink["strMeasure2"] != null && drink["strMeasure2"] != "" ? <li>{drink["strMeasure2"] + ": " + drink["strIngredient2"]}</li> : null }
                                {drink["strMeasure3"] != null && drink["strMeasure3"] != "" ? <li>{drink["strMeasure3"] + ": " + drink["strIngredient3"]}</li> : null }
                                {drink["strMeasure4"] != null && drink["strMeasure4"] != "" ? <li>{drink["strMeasure4"] + ": " + drink["strIngredient4"]}</li> : null }
                                {drink["strMeasure5"] != null && drink["strMeasure5"] != "" ? <li>{drink["strMeasure5"] + ": " + drink["strIngredient5"]}</li> : null }
                                {drink["strMeasure6"] != null && drink["strMeasure6"] != "" ? <li>{drink["strMeasure6"] + ": " + drink["strIngredient6"]}</li> : null }
                                {drink["strMeasure7"] != null && drink["strMeasure7"] != "" ? <li>{drink["strMeasure7"] + ": " + drink["strIngredient7"]}</li> : null }
                                {drink["strMeasure8"] != null && drink["strMeasure8"] != "" ? <li>{drink["strMeasure8"] + ": " + drink["strIngredient8"]}</li> : null }
                                {drink["strMeasure9"] != null && drink["strMeasure9"] != "" ? <li>{drink["strMeasure9"] + ": " + drink["strIngredient9"]}</li> : null }
                                {drink["strMeasure10"] != null && drink["strMeasure10"] != "" ? <li>{drink["strMeasure10"] + ": " + drink["strIngredient10"]}</li> : null }
                                {drink["strMeasure11"] != null && drink["strMeasure11"] != "" ? <li>{drink["strMeasure11"] + ": " + drink["strIngredient11"]}</li> : null }
                                {drink["strMeasure12"] != null && drink["strMeasure12"] != "" ? <li>{drink["strMeasure12"] + ": " + drink["strIngredient12"]}</li> : null }
                                {drink["strMeasure13"] != null && drink["strMeasure13"] != "" ? <li>{drink["strMeasure13"] + ": " + drink["strIngredient13"]}</li> : null }
                                {drink["strMeasure14"] != null && drink["strMeasure14"] != "" ? <li>{drink["strMeasure14"] + ": " + drink["strIngredient14"]}</li> : null }
                                {drink["strMeasure15"] != null && drink["strMeasure15"] != "" ? <li>{drink["strMeasure15"] + ": " + drink["strIngredient15"]}</li> : null }
                            </ul>
                        :
                        null
                    }
                </div>
                <div className="col">
                    <p>{drink.strInstructions ? <b>Instructions:</b> : null} {drink.strInstructions}</p>
                </div>
            </div>
        </div>
    );
}

export default Cocktail;