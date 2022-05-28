import FilterCard from "./filterCard";

const areas=["Thane","Pune","Mumbai Suburban","Nashik","Nagpur","Ahmednagar","Solapur"]
    const categories=["Grocery", "Butcher","Baker","Chemist","Stationery shop"]

export default function Filter(){
    return(
        <div className="flex flex-col border-black space-y-2 pt-4 mx-2">
            <p className="text-[#414349] font-bold">Filter by Area</p>
            <div className="flex space-x-2 m-auto">
            {
               areas.map((area,index)=>{
                   return <FilterCard key={index} type={area}/>
               })
            }
            </div>

            <p className="text-[#414349] font-bold pt-8">Filter by Category</p>
            <div className="flex space-x-2 m-auto">
            {
               categories.map((category,index)=>{
                   return <FilterCard key={index} type={category}/>
               })
            }
            </div>
        </div>
       
    )
}
