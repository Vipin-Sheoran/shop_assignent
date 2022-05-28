import ShopList from './shopList'
import Filter from "./filter"
import { useState } from 'react'
import ShopForm from './AddShop'

export default function Careers() {
    const [display, setdisplay] = useState(false)
    return (
        <div className="flex flex-col pb-96">
            <div className="m-auto flex flex-col my-8">
                <div className="">
                    <ShopForm />
                    <button onClick={() => setdisplay(!display)} className='text-center m-auto block md:hidden font-bold text-white p-2 bg-indigo-600 rounded-md'>Filters</button>
                    <Filter display={display} />
                </div>
                <div className="mt-4 flex flex-col space-y-4">
                    <div className='text-2xl font-bold text-white'>All Shops</div>
                    <ShopList />
                </div>
            </div>
        </div>
    )
}
