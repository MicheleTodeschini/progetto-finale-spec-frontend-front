import { useMemo, useState, useCallback } from 'react'
import IslandCard from '../components/IslandCard'
import { useGlobalContext } from '../context/GlobalContext'
import Header from '../components/Header'
import ComparativeModal from '../components/ComparativeModal'
import Footer from '../components/Footer'

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

    const [show, setShow] = useState(false)

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
            <div className='main'>

                <div className='container '>
                    <input
                        type='text'
                        placeholder="Cerca un'isola"
                        onChange={e => debounceSearch(e.target.value)}
                        className='mt-3 input-search'
                    />
                    <div className='pt-3 pb-3 d-flex gap-2'>

                        <button className='btn btn-category' onClick={() => setCategory('')}>Tutte</button>
                        <button className='btn btn-category' onClick={() => setCategory('Misteriosa')}>Misteriosa</button>
                        <button className='btn btn-category' onClick={() => setCategory('Pericolosa')}>Pericolosa</button>
                        <button className='btn btn-category' onClick={() => setCategory('Remota')}>Remota</button>
                        <button className='btn btn-category' onClick={() => setCategory('Paradisiaca')}>Paradisiaca</button>
                    </div>
                    <div className='row'>


                        {
                            sortedIsland.map(isola => (
                                <IslandCard setShow={setShow} isola={isola} key={isola.id} />
                            ))
                        }
                    </div>
                    <ComparativeModal
                        isola={isole}
                        show={show}
                        onClose={() => setShow(false)}
                    />
                </div>
            </div>

            <Footer />
        </>
    )
}