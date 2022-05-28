import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux'
import { removeFormData } from '../actions'
export default function ShopCard({ item }) {
    const dispatch = useDispatch()
    return (
        <div className="px-12 bg-slate-50 drop-shadow-xl w-full rounded-md mt-4 py-2">
            <div className="flex flex-col flex-1 space-y-4">
                <div className="font-bold text-lg text-[#414349]">Shop Name : {item.name}</div>
                <div className="text-[#6a6a6a] font-semibold">Area : {item.area}</div>
                <div className="text-[#6a6a6a] font-semibold">Category : {item.category}</div>
                <div className="text-[#6a6a6a] font-semibold">Opening Date : {item.openingDate}</div>
                <div className="text-[#6a6a6a] font-semibold">Closing Date : {item.closingDate}</div>
                <div className="cursor-pointer">
                    <DeleteIcon onClick={() => dispatch(removeFormData(item.id))} />
                </div>
            </div>
        </div>
    )
}