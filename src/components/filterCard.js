import { Checkbox } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addType, removeType } from '../actions/index'

export default function FilterCard({ type }) {
    const types = useSelector((state) => state.formReducer.types)
    const dispatch = useDispatch()
    const [checked, setChecked] = useState([])
    const handleChange = (type) => {
        const currentIndex = types.indexOf(type)
        if (currentIndex === -1) {

            dispatch(addType(type))
        } else {
            dispatch(removeType(currentIndex))
        }
    }
    return (
        <div className="flex flex-row">

            <span>
                <input type='checkbox' onChange={() => { handleChange(type) }} />
            </span>
            <span className="text-[#6a6a6a] font-semibold">{type}</span>
        </div>
    )
}
