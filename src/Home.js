import Form from "./Form";
import Cocktails from "./Cocktails";

function Home({cocktails}) {

    return (
        <div className="home-page">
            <Cocktails drinks={cocktails} />
            <Form />
        </div>
    )
}

export default Home;