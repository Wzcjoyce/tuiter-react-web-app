import React, {useEffect} from "react";
import "./index.css";
import WhatsHappening from "./whats-happening";
import TuitItems from "../post-list/TuitItem";
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk} from "../../services/tuits-thunks";
import HomeTuits from "./HomeTuits-Reducer";


const HomeComponent = () => {
    const {tuits, loading} = useSelector(
        (state) => state.HomeTuits);
    console.log(tuits);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])
    return(
        <>
            <WhatsHappening/>
            <ul>
                {
                    loading &&
                    <li className="list-group-item">
                        Loading...
                    </li>
                }

                {
                    tuits.map(tuit  =>
                        <TuitItems
                            key={tuit._id} post ={tuit }/> )
                }
            </ul>
        </>
    );
};
export default HomeComponent;