import { useSelector } from "react-redux"
import ShopCard from "./ShopListCard"
import { useEffect, useState } from "react"

export default function ShopList() {
    const list = useSelector((state) => state.formReducer.list)
    const types = useSelector((state) => state.formReducer.types)
    const [finalList, setFinalList] = useState([])
    useEffect(() => {
        if (types.length === 0) {
            setFinalList(list)
        }

    }, [list, types])
    useEffect(() => {
        if (types.length !== 0) {
            const FinalList1 = list.filter(value => types.includes(value.area))
            const FinalList2 = list.filter(value => types.includes(value.category))
            const uniq = [...new Set(FinalList1.concat(FinalList2))];
            console.log(uniq)
            setFinalList(uniq)
        }
    }, [types])


    return (
        <div className={`flex flex-col`}>
            {list.length === 0 ? <div>No Shops to Show please add one</div> : finalList.map((item, index) => {
                return <ShopCard key={index} item={item} />
            })}

        </div>
    )
}