
const initialState = {
    helloWorld:null
}
export const helloWorldReducer = function (state = initialState, action) {
    switch (action.type) {
        case "HELLO_WORLD":
            return {
                ...state,
                helloWorld: action.payload
            }
        default:
            return state;
    }
}