import { END_YEAR, FINAL_RESULT, START_YEAR } from "../constants/action-types";

export const finalResult = (payload) => {
    return {
        type: FINAL_RESULT,
        payload,
    };
};
