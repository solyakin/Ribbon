import { createStore } from 'redux';
import renderReducer from './render/renderReducer';

const store = createStore(renderReducer);

export default store;