import Reducers from '../src/Reducers';
import { createStore } from 'redux';

const store=createStore(Reducers);
export {store};