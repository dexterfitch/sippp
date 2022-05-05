import { useState, useEffect } from "react";
import Cocktail from "./Cocktail";
import Alert from "./Alert";


function Random({ errors, setErrors }) {
    const [cocktail, setCocktail] = useState("");
    const [showMessages, setShowMessages] = useState(false);

    useEffect(() => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                setErrors([...errors, "Error " + response.status + ": Cannot access this data."]);
                setShowMessages(true);
            }
        })
        .then(data => {
            if (data.drinks.length > 0) {
                setCocktail(data.drinks[0]);
            } else {
                setErrors([...errors, "No drinks available at this time. Bar's closed."]);
                setShowMessages(true);
            }
        })
        .catch(errors => {
            setErrors([...errors, "Something strange happened. Contact administrator."]);
            setShowMessages(true);
        }
        );
    }, []);

    return (
        <>
            <div className={showMessages ? "messages" : "messages hidden"}>
                <Alert messages={errors} setShowMessages={setShowMessages} /> 
            </div>
            <Cocktail drink={cocktail} />
        </>
    );
}

export default Random;