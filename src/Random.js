import { useState, useEffect } from "react";
import Cocktail from "./Cocktail";
import 'animate.css';

function Random({ setError, randomClicked }) {
    const [cocktail, setCocktail] = useState("");

    useEffect(() => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                setError("Error " + response.status + ": Cannot access this data.");
            }
        })
        .then(data => {
            if (data.drinks.length > 0) {
                setCocktail(data.drinks[0]);
            } else {
                setError("No drinks available at this time. Bar's closed.");
            }
        })
        .catch(errors => console.log(errors));
    }, [randomClicked]);

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
        console.log(event.target);
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
            <Cocktail drink={cocktail} />
            <img onClick={(event) => flipImg(event)} src={process.env.PUBLIC_URL + "cocktails_sign.png"} />
            <div onClick={(event) => flipCard(event)} className="card">
                    おはよう
            </div>
        </>
    );
}

export default Random;