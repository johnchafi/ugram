import { DELETE_PICTURE, THROW_ERROR, UPDATE_PICTURE } from "../constants";

const initialState = {
    error: null,
};

export function picture_details(state = initialState, action): object {
    switch (action.type) {
        case UPDATE_PICTURE:
            return { ...state };
        case DELETE_PICTURE:
            window.location.reload();
            return { ...state };
        default:
            return state;
    }
}
