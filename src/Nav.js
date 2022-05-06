import { NavLink } from "react-router-dom";
import Search from "./Search";

function Nav({ cocktails, setCocktails }) {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">sippp</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to="random">Random</NavLink>
                    </li>
                </ul>
                <Search cocktails={cocktails} setCocktails={setCocktails} />
                </div>
            </div>
        </nav>
    )

}

export default Nav;