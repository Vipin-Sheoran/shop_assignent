export const addFormData=(data)=>{
    return {
        type:"ADD_FORM_DATA",
        data
    }
}

export const removeFormData=(id)=>{
    return {
        type:"REMOVE_FORM_DATA",
        id
    }
}

export const addType=(data)=>{
    return {
        type:"ADD_TYPE",
        data
    }
}

export const removeType=(index)=>{
    return {
        type:'REMOVE_TYPE',
        index
    }
}