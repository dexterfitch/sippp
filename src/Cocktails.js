import Cocktail from "./Cocktail";

function Cocktails({ drinks }) {
    
    function cocktailFactory() {
        return drinks.map(drink => <div className="col-4"><Cocktail drink={drink} /></div>)
    }
    
    return (
        <div className="container">
            <div className="row">
                {cocktailFactory()}
            </div>
        </div>
    );
}

export default Cocktails;