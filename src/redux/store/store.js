import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { homeTextsReducer } from '../reducers/homeTextsReducer';
import { careerTextsReducer } from '../reducers/careerTextsReducer';
import { aboutTextsReducer } from '../reducers/aboutTextsReducer';
import { navbarReducer } from '../reducers/navbarReducer';
import { footerReducer } from '../reducers/footerReducer';
import { homeImagesReducer } from '../reducers/homeImagesReducer';
import { languagesListReducer } from '../reducers/languagesListReducer';

const middleware = [thunk];

const reducer = combineReducers({
  homeTexts: homeTextsReducer,
  careerTexts: careerTextsReducer,
  aboutTexts: aboutTextsReducer,
  navbar: navbarReducer,
  footer: footerReducer,
  homeImages: homeImagesReducer,
  languagesList: languagesListReducer
});

const initialState = {};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
