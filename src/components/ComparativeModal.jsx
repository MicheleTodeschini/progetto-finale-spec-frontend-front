import ReactDOM from 'react-dom'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../context/GlobalContext'


export default function ComparativeModal({ onClose = () => { }, show }) {

    const { id } = useParams()
    const { getIsolaById } = useGlobalContext()

    return (
        show && ReactDOM.createPortal(
            <div className='modal-container'>
                <div className='custom-modal'>

                    <button className='btn' onClick={onClose}>Chiudi</button>
                </div>


            </div>,
            document.body
        )
    )
}