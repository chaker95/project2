import "./App.css";
import { Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { finalResult, startYear, endYear } from "./redux/actions/action";

function App() {
    const listT = useSelector((state) => state.taskReducer.tasks);
    const Resultat = useSelector((state) => state.taskReducer.Result);
    const [start, setStart] = useState("");
    const handleStart = (e) => {
        setStart(e.target.value);
        // dispatch(startYear(Number(start)))
    };
    const [end, setEnd] = useState("");
    const handleEnd = (e) => {
        setEnd(e.target.value);
        // dispatch(endYear({end}))
    };
    const [input, setInput] = useState("");
    const handleInput = (e) => {
        setInput(e.target.value);
    };
    const dispatch = useDispatch();
    const handleResult = () => {
        let result = +input;
        var filtred = listT
            .filter((year) => year.id >= start)
            .filter((endYear) => endYear.id <= end);
        for (let i = 0; i < filtred.length; i++) {
            result = result * filtred[i].rate;
        }
        dispatch(finalResult(result));
    };
    console.log(start);
    console.log(end);

    return (
        <>
            <h1 className="title">Development of inflation rates in Tunisia</h1>
            <div className="heads">
                <h3>year</h3>
                <h3>tunisia</h3>
                <h3>united states</h3>
            </div>
            <div>
                {listT.map((tasks, index) => {
                    return (
                        <div className="table">
                            <p tasks={tasks} index={index} key={index}>
                                {tasks.id}{" "}
                            </p>
                            <p>{tasks.tunisia}</p>
                            <p>{tasks.usa}</p>
                        </div>
                    );
                })}
            </div>
            <div className="App">
                <h1>Inflation calculator for Tunisia</h1>
                <div>
                    <h1>Original amount in Dinar:</h1>
                    <Form.Control
                        type="number"
                        value={input}
                        onChange={handleInput}
                    />

                    <h1>Start year(2000-2020):</h1>
                    <Form.Select value={start} onChange={handleStart}>
                        <option>--choose year--</option>
                        <option>2000</option>
                        <option>2001</option>
                        <option>2002</option>
                        <option>2003</option>
                        <option>2004</option>
                        <option>2005</option>
                        <option>2006</option>
                        <option>2007</option>
                        <option>2008</option>
                        <option>2009</option>
                        <option>2010</option>
                    </Form.Select>

                    <h1>End year(2001-2021):</h1>
                    <Form.Select value={end} onChange={handleEnd}>
                        <option>--choose year--</option>
                        <option>2001</option>
                        <option>2002</option>
                        <option>2003</option>
                        <option>2004</option>
                        <option>2005</option>
                        <option>2006</option>
                        <option>2007</option>
                        <option>2008</option>
                        <option>2009</option>
                        <option>2010</option>
                        <option>2011</option>
                    </Form.Select>
                </div>
                <Button
                    variant="secondary"
                    className="button"
                    onClick={handleResult}
                >
                    calculate
                </Button>
                <span className='result'>Resultat: {Resultat == "" ? null : Resultat}</span>
            </div>
        </>
    );
}

export default App;
