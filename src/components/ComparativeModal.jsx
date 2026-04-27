import ReactDOM from 'react-dom'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../context/GlobalContext'
import { useComparativeContext } from '../context/ComparativeContext'


export default function ComparativeModal({ onClose = () => { }, show }) {

    const { id } = useParams()
    const { getIsolaById } = useGlobalContext()
    const { setIslandToCompare } = useComparativeContext()

    function handleClose() {
        setIslandToCompare([])
        onClose()
    }

    return (
        show && ReactDOM.createPortal(
            <div className='modal-container'>
                <div className='custom-modal'>

                    <button className='btn' onClick={handleClose} >Chiudi</button>
                </div>


            </div>,
            document.body
        )
    )
}