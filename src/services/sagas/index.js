import {all} from 'redux-saga/effects';
import watchAllDataCard from '../getCard/saga';

export default function* rootSaga() {
    yield all([
        watchAllDataCard(),
        //like above as for all watches use like watchAllDatCardOne()
    ]); 
 }