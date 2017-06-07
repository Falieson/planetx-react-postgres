import { createHistoryEnhancer, queryMiddleware } from 'farce';
import createMatchEnhancer from 'found/lib/createMatchEnhancer';
import foundReducer from 'found/lib/foundReducer';
import Matcher from 'found/lib/Matcher';
import { combineReducers, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk'
import routeConfig from './routeConfig';
import { PX_COUNTERS_UI} from './components/Counter'

export default function genStore(historyProtocol, preloadedState) {
  return createStore(
    combineReducers({
      found: foundReducer,
      PX_COUNTERS: PX_COUNTERS_UI
    }),
    preloadedState,
    composeWithDevTools(
      compose(
        createHistoryEnhancer({
          protocol: historyProtocol,
          middlewares: [
            queryMiddleware,
            ReduxThunk
          ],
        }),
        createMatchEnhancer(
          new Matcher(routeConfig),
        ),
      ),
    )
  );
}
