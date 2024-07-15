import userReducer from './reducers/Index';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore(
    {
        reducer :
        {
            users : userReducer
        }

    }
)