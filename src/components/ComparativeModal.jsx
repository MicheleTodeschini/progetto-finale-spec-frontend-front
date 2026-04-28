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
                    <div className='container d-flex'>
                        <div className='left'>

                            <div class="card" >
                                <img class="card-img-top" src={comparedIsland[0]?.island?.image} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">{comparedIsland[0]?.island.title}</h5>
                                    <p class="card-text">{comparedIsland[0]?.island.continent}</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>

                            </div>

                        </div>
                        <div className='right'>
                            <div class="card" >
                                <img class="card-img-top" src={comparedIsland[1]?.island?.image} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">{comparedIsland[1]?.island.title}</h5>
                                    <p class="card-text">{comparedIsland[1]?.island.continent}</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>

                            </div>
                        </div>
                    </div>

                    <button className='btn' onClick={handleClose} >Chiudi</button>
                </div>


            </div>,
            document.body
        )
    )
}