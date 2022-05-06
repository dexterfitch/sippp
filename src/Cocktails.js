import Cocktail from "./Cocktail";

function Cocktails({ drinks }) {
    
    function cocktailFactory() {
        return drinks.map(drink => <Cocktail drink={drink} />)
    }
    
    return cocktailFactory();
}

export default Cocktails;