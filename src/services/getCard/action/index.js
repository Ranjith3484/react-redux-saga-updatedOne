import { SAGA_ACTIONS, ACTION_TYPES } from "../../../constants";

export const getAllData = (param) => ({ 
    type: SAGA_ACTIONS. GET_DATA_CARD,
    param 
});
export const resetAllData = () => ({ 
    type: ACTION_TYPES.GET_DATA_CARD_RESET
});