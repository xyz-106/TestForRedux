import React, { Component } from 'react';
import { Provider,connect } from 'react-redux';
import {store} from './src/store';

import Add from './Add';

const App=()=>{
    return(
        <Provider store={store}>
            <Add/>
        </Provider>
    )
}
export default App;