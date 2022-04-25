import { END_YEAR, FINAL_RESULT, START_YEAR } from "../constants/action-types";

const initiaState = {
    tasks: [
        {
            id: "2000",
            rate: "1.03",
            tunisia: "2.96%",
            usa: "3.38%",
        },
        {
            id: "2001",
            rate: "1.02",
            tunisia: "1.98%",
            usa: "2.83%",
        },
        {
            id: "2002",
            rate: "1.027",
            tunisia: "2.72%",
            usa: "1.59%",
        },
        {
            id: "2003",
            rate: "1.027",
            tunisia: "2.71%",
            usa: "2.27%",
        },
        {
            id: "2004",
            rate: "1.036",
            tunisia: "3.63%",
            usa: "2.68%",
        },
        {
            id: "2005",
            rate: "1.02",
            tunisia: "2.02%",
            usa: "3.39%",
        },
        {
            id: "2006",
            rate: "1.032",
            tunisia: "3.23%",
            usa: "3.23%",
        },
        {
            id: "2007",
            rate: "1.029",
            tunisia: "2.97%",
            usa: "2.85%",
        },
        {
            id: "2008",
            rate: "1.043",
            tunisia: "4.35%",
            usa: "3.84%",
        },
        {
            id: "2009",
            rate: "1.036",
            tunisia: "3.66%",
            usa: "-0.36%",
        },
        {
            id: "2010",
            rate: "1.033",
            tunisia: "3.34%",
            usa: "1.64%",
        },
        {
            id: "2011",
            rate: "1.032",
            tunisia: "3.24%",
            usa: "3.16%",
        },
        {
            id: "2012",
            rate: "1.046",
            tunisia: "4.61%",
            usa: "2.07%",
        },
        {
            id: "2013",
            rate: "1.053",
            tunisia: "5.32%",
            usa: "1.46%",
        },
        {
            id: "2014",
            rate: "1.046",
            tunisia: "4.63%",
            usa: "1.62%",
        },
        {
            id: "2015",
            rate: "1.044",
            tunisia: "4.44%",
            usa: "0.12%",
        },
        {
            id: "2016",
            rate: "1.036",
            tunisia: "3.63%",
            usa: "1.26%",
        },
        {
            id: "2017",
            rate: "1.053",
            tunisia: "5.31%",
            usa: "2.13%",
        },
        {
            id: "2018",
            rate: "1.073",
            tunisia: "7.31%",
            usa: "2.44%",
        },
        {
            id: "2019",
            rate: "1.067",
            tunisia: "6.72%",
            usa: "1.81%",
        },
        {
            id: "2020",
            rate: "1.056",
            tunisia: "5.63%",
            usa: "1.23%",
        },
    ],
    Result: "",
};

function taskReducer(state = initiaState, action) {
    const { type, payload } = action;
    switch (type) {
        case FINAL_RESULT:
            return {
                ...state,
                Result: payload,
            };
        default:
            return state;
    }
}

export default taskReducer;
