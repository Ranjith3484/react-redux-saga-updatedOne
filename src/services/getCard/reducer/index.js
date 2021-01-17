const { ACTION_TYPES } = require("../../../constants")

const initialState = {
    loading: false,
    success: false,
    data: [],
    message: '',
    status: null,
    error: false
}
const allDataCardReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.GET_DATA_CARD_STARTED:
            return {
                ...state,
                loading: true
            }
        case ACTION_TYPES.GET_DATA_CARD_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                data: action.payload,
                message: action.message,
                status: action.status_code,
            }
        case ACTION_TYPES.GET_DATA_CARD_RESET:
            return {
                ...state,
                success: false
            }
        case ACTION_TYPES.GET_DATA_CARD_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            }
        default: return state
    }
}
export default allDataCardReducer;
