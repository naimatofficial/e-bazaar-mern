import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import { HiSearch } from 'react-icons/hi'
import { useGetAllProductsQuery } from '../../redux/slices/productsApiSlice'

const SearchBar = () => {
    const [query, setQuery] = useState('')
    const [showSuggestions, setShowSuggestions] = useState(false)
    const navigate = useNavigate()

    const { data: suggestions, isFetching } = useGetAllProductsQuery()
    const handleInputChange = (e) => {
        const inputValue = e.target.value
        setQuery(inputValue)

        // Show suggestions only when query is not empty
        setShowSuggestions(inputValue.trim().length > 0)
    }

    const handleClearInput = () => {
        setQuery('')
        setShowSuggestions(false)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        if (query) {
            navigate(`/search?query=${query}`)
            setShowSuggestions(false)
        }
        setQuery('')
    }

    const handleSuggestionClick = (suggestion) => {
        setQuery(suggestion.name)
        setShowSuggestions(false)
        navigate(`/products/${suggestion.slug}`)
    }

    // Filter the products based on the query
    const filteredSuggestions = query
        ? suggestions?.doc.filter((product) =>
              product.name.toLowerCase().startsWith(query.toLowerCase())
          )
        : []

    return (
        <div className="relative mx-1">
            <form onSubmit={handleSearch} className="flex items-center">
                <input
                    className="w-full py-2 px-4 rounded-r-none rounded border outline-none focus:border-primary-400 text-gray-900 transition-all ease-in"
                    type="search"
                    autoComplete="off"
                    placeholder="Search for items..."
                    value={query}
                    onChange={handleInputChange}
                />
                <button
                    type="submit"
                    className="bg-primary-500 text-white py-[11px] px-4 outline-none rounded rounded-l-none hidden md:block"
                >
                    <HiSearch size={20} />
                </button>
                {query && (
                    <button
                        type="button"
                        onClick={handleClearInput}
                        className="absolute right-2 top-2 md:hidden"
                    >
                        <FaTimes />
                    </button>
                )}
            </form>

            {showSuggestions && query && (
                <div className="absolute top-full mt-1 w-full bg-white border rounded shadow-lg z-10">
                    {isFetching && <p className="p-2">Loading...</p>}
                    {filteredSuggestions &&
                        filteredSuggestions.length === 0 && (
                            <p className="p-5">{''}</p>
                        )}
                    <ul className="list-none p-0 m-0">
                        {filteredSuggestions.map((product) => (
                            <li
                                key={product._id}
                                className="p-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => handleSuggestionClick(product)}
                            >
                                <div className="flex items-center justify-between text-gray-800">
                                    <span>{product.name}</span>
                                    <HiSearch className="text-inherit" />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default SearchBar
