import { useGlobalContext } from '../context/GlobalContext'

export default function IsolePage() {

    const { isole } = useGlobalContext()

    return (
        <>
            <p>qui vanno le isole</p>

            {
                isole?.map(isola => (
                    <p>{isola.title}</p>
                ))
            }
        </>
    )
}