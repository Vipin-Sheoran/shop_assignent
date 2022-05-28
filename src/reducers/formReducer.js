const initialData={
    list:[],
    types:[]
}


const formReducer=(state=initialData,action)=>{
    switch(action.type){
        case "ADD_FORM_DATA":
            return{
                ...state,
                list:[...state.list,action.data]
            }
            case "REMOVE_FORM_DATA":
                const newList=state.list.filter((each)=>{
                    return each.id!==action.id
                })
            return{
                ...state,
                list:newList
            }
            case "ADD_TYPE":
                return{
                    ...state,
                    types:[...state.types,action.data]
                }
                case "REMOVE_TYPE":
                    const newTypes=[...state.types]
                    newTypes.splice(action.index,1)
                    return{
                     ...state,
                    types:newTypes
                    }
            default:return state;
    }
}

export default formReducer;