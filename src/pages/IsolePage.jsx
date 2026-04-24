import { useMemo, useState, useCallback } from 'react'
import IslandCard from '../components/IslandCard'
import { useGlobalContext } from '../context/GlobalContext'

function debounce(callback, delay) {
    let timer
    return (value) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            callback(value)
        }, delay)
    }
}

export default function IsolePage() {

    const { isole } = useGlobalContext()
    const [searchQuery, setSearchQuery] = useState('')
    const debounceSearch = useCallback(debounce(setSearchQuery, 500), [])

    const sortedIsland = useMemo(() => {
        let sorted = [...isole]

        if (searchQuery) {
            sorted = sorted.filter(isola => isola.title.toLowerCase().includes(searchQuery.toLowerCase()))
        }

        return sorted
    }, [isole, searchQuery])


    return (
        <>
            <p>qui vanno le isole</p>
            <div className='container'>
                <input
                    type='text'
                    placeholder='Digita qui'
                    onChange={e => debounceSearch(e.target.value)}
                />
                <div className='row'>


                    {
                        sortedIsland.map(isola => (
                            <IslandCard {...isola} key={isola.id} />
                        ))
                    }
                </div>
            </div>

        </>
    )
}