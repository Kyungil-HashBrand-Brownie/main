import produce from "immer";

const initialState = {
    posts: [{
        id: 1
        , title: "test1"
    }, {
        id: 2
        , title: "test2"
    }, {
        id: 3
        , title: "test3"
    }]
}


function checkReducer (state = initialState, action) {
    let {type, data} = action
        switch (type) {
            case "REMOVE_BOOKMARK_TEST": 
                let copy = [...state.posts]
                data.checkItems.forEach((item) => {
                    let deleteIndex = copy.findIndex((value) => value.id == item)
                    copy.splice(deleteIndex, 1)
                });
                return {
                    ...state, posts: copy
                }

            default:
                return{ ...state}
        }
}

export default checkReducer;


