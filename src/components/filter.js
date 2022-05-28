import FilterCard from "./filterCard";

const areas=["Thane","Pune","Mumbai Suburban","Nashik","Nagpur","Ahmednagar","Solapur"]
    const categories=["Grocery", "Butcher","Baker","Chemist","Stationery shop"]

export default function Filter({display}){
    return(
        <div className={`${display?"block":"hidden"} md:block flex flex-row md:flex-col border-black pt-4 md:space-y-4 md:space-x-0 space-x-4 bg-white p-4 mt-2`}>
            
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
            <p className="text-[#414349] font-bold">Filter based on Area:</p>
            {
               areas.map((area,index)=>{
                   return <FilterCard key={index} type={area}/>
               })
            }
            </div>

            
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
            <p className="text-[#414349] font-bold">Filter by Category:</p>
            {
               categories.map((category,index)=>{
                   return <FilterCard key={index} type={category}/>
               })
            }
            </div>
            
        </div>
       
    )
}
