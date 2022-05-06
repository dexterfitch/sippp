import { useState } from "react";
import { useForm } from "react-hook-form";

function Form() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = cocktail => setCocktail(cocktail);
    const [cocktail, setCocktail] = useState({});

    // Watch keeps track of input AS it's being inputted
    // Example: console.log("watch: ", watch("glass"));

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Cocktail Name:</label>
            {errors.name && <span className="form-error"><i>(This field is required)</i></span>}<br/>
            <input id="name" {...register("name", {required: true})} /><br/><br/>

            <label htmlFor="glass">Glass Type:</label><br/>
            <input id="glass" {...register("glass")} /><br/><br/>
            

            <label htmlFor="alco">Alcoholic?</label><br/>
            <input  id="alco" type="checkbox" {...register("alcoholic")} /><br/><br/>

            <label htmlFor="base">Base</label><br/>
            <select id="base" {...register("base")}>
                <option value="ClubSoda">Club Soda</option>
                <option value="Soda">Soda</option>
                <option value="Whiskey">Whiskey</option>
                <option value="Vodka">Vodka</option>
                <option value="Tequila">Tequila</option>
                <option value="Bourbon">Bourbon</option>
                <option value="Gin">Gin</option>
                <option value="Wine">Wine</option>
                <option value="Rum">Rum</option>
            </select><br/><br/>

            <label htmlFor="recipe">Recipe &amp; Instructions</label><br/>
            <textarea id="recipe" defaultValue="Add recipe, measurements, and instructions here." {...register("recipe")}></textarea><br/><br/>
            
            <input type="submit" />
        </form>
    )
}

export default Form;