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
            <h3><b>Name:</b> {drink.strDrink} <i>({drink.strAlcoholic})</i></h3>
            <h4><b>Category:</b> {drink.strCategory}</h4>
            <p><b>Glass:</b> {drink.strGlass}</p>
            <p><b>Instructions:</b> {drink.strInstructions}</p>
            <p><b>Ingredients:</b></p>
            <ul>
                {parseIngredients()}
            </ul>

        </div>
    );
}

export default Cocktail;