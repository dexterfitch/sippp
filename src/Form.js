import { useState } from "react";
import { useForm } from "react-hook-form";

function Form() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = cocktail => setCocktail(cocktail);
    const [cocktail, setCocktail] = useState({});

    // Watch keeps track of input AS it's being inputted
    // Example: 
    console.log(watch("glass"));

    return (
        <div className="row">
            <div className="col"></div>
            <div className="col-6">
                <div className="semi-opaque form-card">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="form-label" htmlFor="name">Cocktail Name:</label>
                        {errors.name && <span className="form-error form-text"><i>(This field is required)</i></span>}<br/>
                        <input className="form-control" id="name" {...register("name", {required: true})} /><br/><br/>

                        <label className="form-label" htmlFor="glass">Glass Type:</label><br/>
                        <input className="form-control" id="glass" {...register("glass")} /><br/><br/>
                        

                        <label className="form-check-label" htmlFor="alco">Alcoholic?</label><br/>
                        <input className="form-check-input"  id="alco" type="checkbox" {...register("alcoholic")} /><br/><br/>

                        <label className="form-label" htmlFor="base">Base</label><br/>
                        <select className="form-select" id="base" {...register("base")}>
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

                        <label className="form-label" htmlFor="recipe">Recipe &amp; Instructions</label><br/>
                        <textarea className="form-control" id="recipe" defaultValue="Add recipe, measurements, and instructions here." {...register("recipe")}></textarea><br/><br/>
                        
                        <input type="submit" />
                    </form>
                </div>
            </div>
            <div className="col"></div>
        </div>
    )
}

export default Form;