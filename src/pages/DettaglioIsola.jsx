import { useParams, useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../context/GlobalContext'
import { useEffect, useState } from 'react'
import Header from '../components/Header'

export default function DettaglioIsola() {

    const { getIsolaById } = useGlobalContext()
    const { id } = useParams()
    const [isola, setIsola] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchIsola() {
            const data = await getIsolaById(id)
            setIsola(data.island)
        }
        fetchIsola()
    }, [id])

    const categoryToColor = {
        'Misteriosa': 'bg-warning ',
        'Pericolosa': 'bg-danger',
        'Remota': 'bg-success',
        'Paradisiaca': 'bg-info '
    }




    return (
        <>


            <Header />
            <button className="btn btn-outline-info mb-2" onClick={() => navigate(-1)}>

                <i className="bi bi-arrow-left back-arrow text-info"></i>Torna indietro
            </button>
            <div className='container'>


                <img className='img-dettaglio' src={isola.image} alt={isola.title} />
                <div className="card-body ">

                    <h1 className="card-title mb-3">{isola.title}</h1>

                    <span className={`badge ${categoryToColor[isola.category]} mb-3`}>
                        {isola.category}
                    </span>

                    <div className="row">

                        <div className="col-6">
                            <strong>Mare:</strong>
                            <p className="mb-1">{isola.sea}</p>
                        </div>

                        <div className="col-6">
                            <strong>Paese:</strong>
                            <p className="mb-1">{isola.country}</p>
                        </div>

                        <div className="col-6">
                            <strong>Continente:</strong>
                            <p className="mb-1">{isola.continent}</p>
                        </div>

                        <div className="col-6">
                            <strong>Clima:</strong>
                            <p className="mb-1">{isola.climate}</p>
                        </div>

                    </div>

                    <hr />

                    <div className="mt-3">
                        <strong>Caratteristiche:</strong>
                        <p>{isola.characteristics}</p>
                    </div>

                    <div>
                        <strong>Specie endemiche:</strong>
                        <p>{isola.endemicSpecies ? 'Si, ci sono' : 'No, non ci sono'}</p>
                    </div>

                </div>

            </div>


        </>
    )
}