import React, { Component,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllData } from '../services/getCard/action';

const GettingData = () => {
    const dispatch = useDispatch();
    const dataGetted = useSelector(state => state.dataCard.data);
    const param = 'acesstoken';

    useEffect(() => {
        dispatch(getAllData(param));
    }, [dataGetted])

    console.log("dataGetted");
    console.log(dataGetted);
    return ( 
        <div>
            <p>his - {dataGetted && dataGetted.title ? dataGetted.title : null}</p>
        </div>
     );
}
 
export default GettingData;