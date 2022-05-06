function Cocktail({ drink }) {

    function parseIngredients() {
        let ingredients = [];

        for(let i = 1; i < 15; i++) {
            if (drink["strIngredient" + i] !== null) {
                ingredients.push(<li key={drink.idDrink}>{drink["strMeasure" + i] ? drink["strMeasure" + i] + ":" : null} {drink["strIngredient" + i]}</li>);
            }
        }

        return ingredients;
    }

    return (
        <div>
            {drink.strDrinkThumb ? <img className="cocktail-thumb" src={drink.strDrinkThumb} /> : null }
            <h3><b>Name:</b> {drink.strDrink} <span><i>{drink.strAlcoholic ? "-- " + drink.strAlcoholic : null}</i></span></h3>
            <h4>{drink.strCategory ? <b>Category:</b> : null } {drink.strCategory}</h4>
            <p>{drink.strGlass ? <b>Glass:</b> : null} {drink.strGlass}</p>
            <p>{drink.strInstructions ? <b>Instructions:</b> : null} {drink.strInstructions}</p>
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
    );
}

export default Cocktail;