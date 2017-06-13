import { createHistoryEnhancer, queryMiddleware } from 'farce';
import createMatchEnhancer from 'found/lib/createMatchEnhancer';
import foundReducer from 'found/lib/foundReducer';
import Matcher from 'found/lib/Matcher';
import { combineReducers, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk'
import RouterConfig from '../universal/Router';
import { PX_COUNTERS_UI} from '../components/CounterRedux'

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
          new Matcher(RouterConfig),
        ),
      ),
    )
  );
}
