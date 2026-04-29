import { useMemo, useState, useCallback, useRef } from 'react'
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
    const [sortByAToZ, setSortByAToZ] = useState('crescente')

    const [show, setShow] = useState(false)

    const sortedIsland = useMemo(() => {
        let sorted = [...isole]

        if (searchQuery) {
            sorted = sorted.filter(isola => isola.title.toLowerCase().includes(searchQuery.toLowerCase()))
        }
        if (category) {
            sorted = sorted.filter(isola => isola.category.toLowerCase() === category.toLowerCase())
        }

        if (sortByAToZ === 'crescente') {
            sorted.sort((a, b) => a.title.localeCompare(b.title))
        } else {
            sorted.sort((a, b) => b.title.localeCompare(a.title))
        }

        return sorted
    }, [isole, searchQuery, category, sortByAToZ])

    const inputRef = useRef(null)
    function handleFocusOnClick() {
        inputRef.current.focus()
    }
    const categories = [
        'Paradisiaca',
        'Remota',
        'Misteriosa',
        'Pericolosa'
    ]


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
                        ref={inputRef}
                    />
                    <div className='pt-3 pb-3 pr-3 d-flex gap-4 justify-content-between'>
                        <div className='d-flex gap-2'>
                            <button className='btn btn-category' onClick={() => setCategory('')}>Tutte</button>
                            {
                                categories.map(categoria => (
                                    <button className='btn btn-category' onClick={() => setCategory(categoria)}>{categoria}</button>
                                ))
                            }


                        </div>
                        <div className='d-flex gap-2'>
                            <button className='btn btn-category' onClick={() => setSortByAToZ('crescente')} >A → Z</button>
                            <button className='btn btn-category' value='decrescente' onClick={() => setSortByAToZ('decrescente')}> Z → A</button>
                        </div>
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
                    <button className='into-focus-button' onClick={handleFocusOnClick}>
                        Non hai visto l'isola che cercavi? Prova a cercarla!
                    </button>
                </div>
            </div>

            <Footer />
        </>
    )
}