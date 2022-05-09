import Form from "./Form";
import Cocktails from "./Cocktails";

function Home({cocktails}) {

    return (
        <div className="home-page">
            <div className="container">
                <div id="cocktailCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src={process.env.PUBLIC_URL + "cocktail_01.jpg"} className="d-block w-100" alt="Two pink fizzy cocktails with fruit garnish." />
                        </div>
                        <div className="carousel-item">
                        <img src={process.env.PUBLIC_URL + "cocktail_02.jpg"} className="d-block w-100" alt="Five wine glasses filled with a rainbow of coloured cocktails, from left, red, blue, yellow, green, and pink." />
                        </div>
                        <div className="carousel-item">
                        <img src={process.env.PUBLIC_URL + "cocktail_03.jpg"} className="d-block w-100" alt="Two cocktails, lime mojito on left and strawberry margarita on right." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#cocktailCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#cocktailCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <Cocktails drinks={cocktails} />
                <Form />
            </div>
        </div>
    )
}

export default Home;