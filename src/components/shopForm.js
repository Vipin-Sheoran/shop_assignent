import { useDispatch,useSelector } from "react-redux"
import {addFormData} from '../actions/index'
import React,{useState} from "react"
import {DateRangePicker} from 'rsuite'
import 'rsuite/styles/index.less';
import "rsuite/dist/rsuite.min.css"

export default function ShopForm(){
    const dispatch=useDispatch()
    const types=useSelector((state)=>state.formReducer.types)
    const areas=["Thane","Pune","Mumbai Suburban","Nashik","Nagpur","Ahmednagar","Solapur"]
    const categories=["Grocery", "Butcher","Baker","Chemist","Stationery shop"]
    const [name,setName]=useState('')
    const [area,setArea]=useState(areas[0])
    const [category,setCategory]=useState(categories[0])
    const [openingDate,setOpeningdate]=useState(new Date())
    const [closingDate,setClosingDate]=useState(new Date())

    const dateChangeHandler=(value)=>{
        setOpeningdate(value[0])
        setClosingDate(value[1])
    }

    const SubmitHandler=(e)=>{
     e.preventDefault()
     const id=`${new Date().getTime()}`
     const data={
           name,
           area,
           category,
           openingDate:openingDate.toISOString().slice(0,10),
           closingDate:closingDate.toISOString().slice(0,10),
           id
     }
     dispatch(addFormData(data))
    setName('')
    setArea(areas[0])
    setCategory(categories[0])
    setOpeningdate(new Date())
    setClosingDate(new Date())
    }
 
    return(
        <div className="flex py-10">
            <form onSubmit={SubmitHandler} className="flex flex-col m-auto p-8 bg-white rounded-md space-y-4 drop-shadow-2xl">
                <input placeholder="Shop Name" 
                className="rounded-md border-2 border-[#f1eff5] p-2 placeholder:font-semibold font-semibold placeholder:text-indigo-600 text-indigo-600"
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
                required/>
                <select required
                value={area}
                className='p-2 border-2 border-[#f1eff5] rounded-md font-semibold text-indigo-600'
                onChange={(e)=>{setArea(e.target.value)}}
                >
                    {
                        areas.map((each,index)=>{
                            return <option 
                            className='p-2 font-semibold text-indigo-600'
                            key={index}>{each}</option>
                        })
                    }
                </select>
                <select required
                value={category}
                className='p-2 border-2 border-[#f1eff5] rounded-md font-semibold text-indigo-600'
                onChange={(e)=>{setCategory(e.target.value)}}>
                    {
                        categories.map((each,index)=>{
                            return <option 
                            className="p-2 font-semibold text-indigo-600"
                            key={index}>{each}</option>
                        })
                    }
                </select>
                <DateRangePicker showOneCalendar onChange={(value)=>dateChangeHandler(value)} placeholder="select opening and closing date"/>
                <button className='rounded-md bg-indigo-600 p-2 text-white font-semibold hover:bg-indigo-400'>Add Shop</button>
            </form>
        </div>
    )
}