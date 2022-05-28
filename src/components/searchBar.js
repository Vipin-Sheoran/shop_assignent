export default function SearchBar(){
    return (
        <div className="flex flex-row m-auto py-8 space-x-4">
            <input className="md:w-96 rounded-lg pl-4 bg-[#f8f8f8] placeholder:text-xl 
            placeholder:font-semibold text-xl font-semibold border-white focus:ring-pink-300 focus:ring-4 focus:border-amber-400" placeholder="search for jobs"
            />
            <button className="bg-[#007bff] p-2 font-bold text-xl text-white rounded-lg">Search</button>
        </div>
    )
}
