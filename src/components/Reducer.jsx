import React from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return{
                ...state,
                isLoading: true
            }

        case "GET_STORIES":
            return{
                ...state,
                isLoading: false,
                hits: action.payload.hits,
                nbPages: action.payload.nbPages
            }

        case "REMOVE_POST":
            return{
                ...state,
                hits: state.hits.filter((currElem)=>currElem.objectID !== action.payload)
            }
            
        case "SEARCH_POST":
            return{
                ...state,
                query: action.payload
            }

        case "PREV_PAGE":
            let pageNum = state.page - 1;

            if(pageNum<=0){
                pageNum=0
            }

            return{
                ...state,
                page: pageNum
            }

        case "NEXT_PAGE":
            let pageNum2 = state.page+1;

            if(pageNum2>=state.nbPages){
                pageNum2=0;
            }

            return{
                ...state,
                page: pageNum2
            }    
    }
    return state;
};

export default reducer;
