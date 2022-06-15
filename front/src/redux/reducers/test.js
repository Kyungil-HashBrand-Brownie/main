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

export const REMOVE_BOOKMARK_TEST = "REMOVE_BOOKMARK_TEST"


export default function testReducer(state = initialState, action) {
    return produce(state, (draft) => {
        switch (action.type) {
            case REMOVE_BOOKMARK_TEST: {
                action.data.checkeds.forEach(function (v) {
                    const idx = draft.posts.findIndex(function (o) {
                        return o.id === v
                    })

                    draft.posts.splice(idx, 1)
                })

                break
            }
        }
    })
}

