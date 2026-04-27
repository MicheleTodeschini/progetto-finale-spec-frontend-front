import ReactDOM from 'react-dom'


export default function ComparativeModal({ isola, onClose = () => { }, show }) {


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