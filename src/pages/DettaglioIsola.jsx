import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../context/GlobalContext'
import { useEffect, useState } from 'react'

export default function DettaglioIsola() {

    const { getIsolaById } = useGlobalContext()
    const { id } = useParams()
    const [isola, setIsola] = useState([])

    useEffect(() => {
        async function fetchIsola() {
            const data = await getIsolaById(id)
            setIsola(data.island)
        }
        fetchIsola()
    }, [id])
    console.log(isola);






    return (
        <>

            <p>qui la singola isola</p>
            <h1>{isola.title}</h1>
        </>
    )
}