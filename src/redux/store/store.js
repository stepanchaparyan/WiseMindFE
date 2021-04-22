import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { homeTextsReducer } from '../reducers/homeTextsReducer';
import { navbarReducer } from '../reducers/navbarReducer';
import { footerReducer } from '../reducers/footerReducer';
import { homeImagesReducer } from '../reducers/homeImagesReducer';

const middleware = [thunk];

const reducer = combineReducers({
  homeTexts: homeTextsReducer,
  navbar: navbarReducer,
  footer: footerReducer,
  homeImages: homeImagesReducer
});

const initialState = {};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
