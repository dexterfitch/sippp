import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

function Search({cocktails, setCocktails}) {

    const [ searchTerm, setSearchTerm ] = useState({});
    
    
    const { register, handleSubmit } = useForm();
    const onSubmit = term =>  {
        setSearchTerm(term);
    }

    useEffect(() => {
        if (searchTerm.searchTerm) {
            getSearchResults();
        }
    }, [searchTerm])

    function getSearchResults() {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + searchTerm.searchTerm)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                console.log("error");
            }
        })
        .then(data => {
            if (data.drinks.length > 0) {
                setCocktails(data.drinks);
            } else {
                console.log("error");
            }
        })
        .catch(errors => {
            console.log("error: ", errors);
        });   
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" {...register("searchTerm")} />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </>
        
    )
}

export default Search;