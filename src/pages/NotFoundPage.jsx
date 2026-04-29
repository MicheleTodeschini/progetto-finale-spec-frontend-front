import Header from "../components/Header"
import Footer from "../components/Footer"

export default function NotFoundPage() {


    return (
        <>
            <Header />
            <div className="container">

                <h1>Non abbiamo ancora scoperto quest'isola, ma ne abbiamo molte già scoperte!</h1>

                <button className="btn-not-found">Torna alla home!</button>

                <video width='300'>
                    <source src="https://www.youtube.com/watch?v=QRUy_Q3HJp8" />
                </video>
            </div>
            <Footer />
        </>
    )
}