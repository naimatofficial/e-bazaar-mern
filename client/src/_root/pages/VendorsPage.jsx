import { useEffect, useState } from 'react'
import Loader from '../../components/Loader'
import { useGetVendorsQuery } from '../../redux/slices/vendorsApiSlice'
import StoreList from '../../components/Seller/StoreList'

const VendorsPage = () => {
    const { data: vendors, isLoading } = useGetVendorsQuery({})

    const [filteredVendors, setFilteredVendors] = useState([])
    const [keywords, setKeywords] = useState('')

    useEffect(() => {
        if (vendors && vendors?.doc) {
            setFilteredVendors(vendors.doc)
        }
    }, [vendors])

    const handleInputChange = (e) => {
        const keywords = e.target.value
        setKeywords(keywords)

        const filteredItems = vendors.filter((seller) =>
            seller.shopName.toLowerCase().includes(keywords.toLowerCase())
        )

        setFilteredVendors(filteredItems)
    }

    return (
        <div>
            <div className="bg-primary-100 p-4 lg:p-8 rounded-lg flex lg:flex-row flex-col gap-2 justify-between items-center mb-4">
                <div>
                    <h2 className="text-2xl uppercase font-bold text-primary-400">
                        ALL STORES
                    </h2>
                    <p className="text-base text-primary-400">
                        Find your desired stores and shop your favourite
                        products
                    </p>
                </div>
                <div className="flex items-center">
                    <input
                        type="text"
                        className="flex-grow p-2 border outline-none focus:border-primary-100 rounded rounded-r-none"
                        placeholder="Search Store"
                        value={keywords}
                        onChange={handleInputChange}
                    />
                    {/* <button className="p-2 bg-primary-400 text-white rounded rounded-l-none outline-none border-none">
						Serach
					</button> */}
                </div>
            </div>
            {isLoading ? (
                <Loader />
            ) : vendors && filteredVendors ? (
                <div className="">
                    {filteredVendors?.length ? (
                        <StoreList sellers={filteredVendors} />
                    ) : (
                        keywords && (
                            <p className="w-full bg-blue-50 text-lg p-8">{`This Store "${keywords}" not found!.. Please try another keywords`}</p>
                        )
                    )}
                </div>
            ) : (
                <p>Stores not found!</p>
            )}
        </div>
    )
}

export default VendorsPage
