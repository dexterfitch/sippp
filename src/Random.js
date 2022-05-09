import { useState, useEffect } from "react";
import Cocktail from "./Cocktail";
import Alert from "./Alert";
import 'animate.css';


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

    function flipImg(event) {
        event.target.className = "animate__animated animate__flipInY";
        if (event.target.src.includes("reverse")) {
            event.target.src = process.env.PUBLIC_URL + "cocktails_sign.png";
            setTimeout(() => {event.target.className = ""}, 1000);
        } else {
            event.target.src = process.env.PUBLIC_URL + "cocktails_sign_reverse.png";
            setTimeout(() => {event.target.className = ""}, 1000);
        }
    }

    function flipCard(event) {
        if (event.target.className.includes("front")) {
            event.target.className = "card back animate__animated animate__flipInY";
            event.target.innerHTML = "おはよう";
            setTimeout(() => {event.target.className = "card back"}, 1000);
        } else {
            event.target.className = "card front animate__animated animate__flipInY";
            event.target.innerHTML = "Good Morning";
            setTimeout(() => {event.target.className = "card front"}, 1000);
        }
    }

    return (
        <>
            <div className={showMessages ? "messages" : "messages hidden"}>
                <Alert messages={errors} setShowMessages={setShowMessages} /> 
            </div>
            <img onClick={(event) => flipImg(event)} src={process.env.PUBLIC_URL + "cocktails_sign.png"} />
            <div onClick={(event) => flipCard(event)} className="card front">
                <div className="card-body">
                    おはよう
                </div>
            </div>
            <Cocktail drink={cocktail} />
        </>
    );
}

export default Random;