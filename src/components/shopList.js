import { fi } from "date-fns/locale"
import { useSelector } from "react-redux"
import ShopCard from "./ShopCard"
import { useEffect, useState } from "react"

export default function ShopList(){
    const list=useSelector((state)=>state.formReducer.list)
    const types = useSelector((state) => state.formReducer.types)
    const [finalList,setFinalList]=useState([])
   useEffect(()=>{
       if(types.length===0){
        setFinalList(list)
       }
   
   },[list,types])
    useEffect(()=>{
        if(types.length!==0){
        const FinalList1=list.filter(value=>types.includes(value.area))
        const FinalList2=list.filter(value=>types.includes(value.category))
        // let newList=[]
        // types.map((each)=>{
        // newList.concat(list.filter((item)=>{
        //         return each===item.area||each===item.category
        //     }))
        // list.map((item)=>{
        //     if(each===item.area||each===item.category){
        //         newList.push(item)
        //     }
        // })
        // })
       const uniq = [...new Set(FinalList1.concat(FinalList2))];
        console.log(uniq)
        setFinalList(uniq)
        // for(let i=0;i<types.length;i++){
        //     for(let j=0;j<list.length;i++){
        //         if(types[i]===list[j].area||types[i]===list[j].category){
        //          newList.push(list[j])
        //         }
        //     }
        // }
        }
    },[types])
 
   
    return (
        <div 
        className={`grid ${list.length>2?"md:grid-cols-3":"md:grid-cols-2"} grid-cols-1`}
        // className={`grid ${list.length>2?"md:grid-cols-3":"md:grid-cols-2"} grid-cols-1`}
        >
    {
       finalList.map((item,index)=>{
          return <ShopCard key={index} item={item}/>
        })
    }
    </div>
    )
}