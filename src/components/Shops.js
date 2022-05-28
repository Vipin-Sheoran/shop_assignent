import ShopList from './shopList'
import SearchBar from "./searchBar"
import Filter from "./filter"

export default function Careers(){

    // const clickHandler=(e)=>{
    //   e.preventDefault()
    //   router.reload()
    // }
    return(
        <div className="flex flex-col">
            {/* <SearchBar/> */}
            {/* <p className="text-xl text-center mb-4 mt-20">viewing 61 jobs related to</p> */}

            {/* <div className="m-auto space-x-48 flex flex-row">
            <p className=" text-[#797f8c] text-lg">filter</p>
            <p className="text-[#6610f2] cursor-pointer">reset all</p>
            </div> */}

            <div className="m-auto flex flex-col my-8">
                <div className="">
                    <Filter/>
                </div>
                <div className="">
                    <ShopList/>
                </div>
            </div>
        </div>
    )
}
