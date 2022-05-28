import DeleteIcon from '@mui/icons-material/Delete';
import {removeFormData} from '../actions/index'
import { useDispatch } from "react-redux"

export default function ShopCard({item}){
    const dispatch=useDispatch()
    return(
        <div className="mx-20 flex flex-row px-12 bg-slate-50 drop-shadow-xl w-132 rounded-md cursor-pointer py-4">
        <div className="flex flex-col flex-1 space-y-4">
            <div className="font-bold text-lg text-[#414349]">{item.name}</div>
            <div className="text-[#6a6a6a]">{item.area}</div>
            <div className="text-[#6a6a6a]">{item.category}</div>
            <div className="text-[#6a6a6a]">{item.openingDate}</div>
            <div className="text-[#6a6a6a]">{item.closingDate}</div>
        </div>
        {/* <div onClick={()=>dispatch(removeFormData(item.id))} className="my-auto cursor-pointer">
          <DeleteIcon/>
        </div> */}
        </div>
    )
}