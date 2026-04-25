import { useMemo, useState, useCallback } from 'react'
import IslandCard from '../components/IslandCard'
import { useGlobalContext } from '../context/GlobalContext'
import Header from '../components/Header'

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
    const [category, setCategory] = useState('')
    const debounceSearch = useCallback(debounce(setSearchQuery, 500), [])

    const sortedIsland = useMemo(() => {
        let sorted = [...isole]

        if (searchQuery) {
            sorted = sorted.filter(isola => isola.title.toLowerCase().includes(searchQuery.toLowerCase()))
        }
        if (category) {
            sorted = sorted.filter(isola => isola.category.toLowerCase() === category.toLowerCase())
        }

        return sorted
    }, [isole, searchQuery, category])




    return (
        <>
            <Header />
            <p>qui vanno le isole</p>
            <div className='container'>
                <input
                    type='text'
                    placeholder='Digita qui'
                    onChange={e => debounceSearch(e.target.value)}
                />
                <div className='pt-3 pb-3 d-flex gap-2'>

                    <button className='btn' onClick={() => setCategory('')}>Tutte</button>
                    <button onClick={() => setCategory('Misteriosa')}>Misteriosa</button>
                    <button onClick={() => setCategory('Pericolosa')}>Pericolosa</button>
                    <button onClick={() => setCategory('Remota')}>Remota</button>
                    <button onClick={() => setCategory('Paradisiaca')}>Paradisiaca</button>
                </div>
                <div className='row'>


                    {
                        sortedIsland.map(isola => (
                            <IslandCard isola={isola} key={isola.id} />
                        ))
                    }
                </div>
            </div>

        </>
    )
}