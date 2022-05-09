function Cocktail({ drink }) {

    function parseIngredients() {
        let ingredients = [];

        for(let i = 1; i < 15; i++) {
            if (drink["strIngredient" + i] !== null && drink["strIngredient" + i] !== "") {
                ingredients.push(<li key={drink.idDrink}>{drink["strMeasure" + i] ? drink["strMeasure" + i] + ":" : null} {drink["strIngredient" + i]}</li>);
            }
        }

        return ingredients;
    }

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
                                {parseIngredients()}
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