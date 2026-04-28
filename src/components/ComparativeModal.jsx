import ReactDOM from 'react-dom'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../context/GlobalContext'
import { useComparativeContext } from '../context/ComparativeContext'
import { useEffect, useState } from 'react'


export default function ComparativeModal({ onClose = () => { }, show }) {


    const { getIsolaById } = useGlobalContext()
    const { setIslandToCompare, islandToCompare } = useComparativeContext()
    const [comparedIsland, setComparedIsland] = useState([])

    function handleClose() {
        setIslandToCompare([])
        onClose()
    }

    useEffect(() => {
        async function fetchIsole() {
            if (show && islandToCompare.length === 2) {
                const [id1, id2] = islandToCompare.map(island => island.id)

                const results = await Promise.all([
                    getIsolaById(id1),
                    getIsolaById(id2)
                ])

                setComparedIsland(results)
                console.log(results);

            }
        }
        fetchIsole()
    }, [show, islandToCompare])



    return (
        show && ReactDOM.createPortal(
            <div className='modal-container'>
                <div className='custom-modal'>
                    <div className='container d-flex row'>
                        <div className='col-6'>

                            <div className="card h-100 w-100" >
                                <img className="card-img-top img-comparative-modal" src={comparedIsland[0]?.island?.image} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{comparedIsland[0]?.island.title}</h5>
                                    <p className="card-text"> <span className="fw-bold">Categoria: </span> {comparedIsland[0]?.island.category}</p>
                                    <p className="card-text"> <span className="fw-bold">Mare: </span> {comparedIsland[0]?.island.sea}</p>
                                    <p className="card-text"> <span className="fw-bold">Nazione: </span> {comparedIsland[0]?.island.country}</p>
                                    <p className="card-text"> <span className="fw-bold">Continente: </span> {comparedIsland[0]?.island.continent}</p>
                                    <p className="card-text"> <span className="fw-bold">Tipo di clima: </span> {comparedIsland[0]?.island.climate}</p>
                                    <p className="card-text"> <span className="fw-bold">Specie Endemiche: </span> {comparedIsland[0]?.island.endemicSpecies ? 'Si, ci sono' : 'No, non ci sono'}</p>
                                    <p className="card-text"> <span className="fw-bold">Caratteristiche: </span> {comparedIsland[0]?.island.characteristics}</p>

                                </div>

                            </div>

                        </div>
                        <div className='col-6'>
                            <div className="card h-100 w-100" >
                                <img className="card-img-top img-comparative-modal" src={comparedIsland[1]?.island?.image} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{comparedIsland[1]?.island.title}</h5>
                                    <p className="card-text"> <span className="fw-bold">Categoria: </span> {comparedIsland[1]?.island.category}</p>
                                    <p className="card-text"> <span className="fw-bold">Mare: </span> {comparedIsland[1]?.island.sea}</p>
                                    <p className="card-text"> <span className="fw-bold">Nazione: </span> {comparedIsland[1]?.island.country}</p>
                                    <p className="card-text"> <span className="fw-bold">Continente: </span> {comparedIsland[1]?.island.continent}</p>
                                    <p className="card-text"> <span className="fw-bold">Tipo di clima: </span> {comparedIsland[1]?.island.climate}</p>
                                    <p className="card-text"> <span className="fw-bold">Specie Endemiche </span> {comparedIsland[1]?.island.endemicSpecies ? 'Si, ci sono' : 'No, non ci sono'}</p>
                                    <p className="card-text"> <span className="fw-bold">Caratteristiche: </span> {comparedIsland[1]?.island.characteristics}</p>

                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center mt-3">
                        <button className='btn btn-danger' onClick={handleClose}>
                            Chiudi
                        </button>
                    </div>
                </div>


            </div>,
            document.body
        )
    )
}