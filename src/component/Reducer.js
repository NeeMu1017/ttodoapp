export const initilstate ={
    todos: []
}

export const reducer =(state,action)=>{
    switch(action.type){
        case "ADD_REMINDER":
            return {
                ...state,
                todos:[...state.todos, action.payload]
            };
        case "Delete_TAST":
            return{
                ...state,
                todos:[...state.todos.filter(item => item.id !== action.payload)]
            };
         default:
           return state;
    };
}