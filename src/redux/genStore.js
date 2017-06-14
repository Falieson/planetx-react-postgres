import { createHistoryEnhancer, queryMiddleware } from 'farce';
import createMatchEnhancer from 'found/lib/createMatchEnhancer';
import foundReducer from 'found/lib/foundReducer';
import Matcher from 'found/lib/Matcher';
import { combineReducers, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk'
import RouterConfig from '../universal/Router';
import { PX_COUNTERS_REDUCER as PX_COUNTERS_THUNK } from '../components/CounterRedux'
// import { PX_COUNTERS_REDUCER as PX_COUNTERS_POSTGRES } from '../components/CounterPostgres'

export default function genStore(historyProtocol, preloadedState) {
  return createStore(
    combineReducers({
      found: foundReducer,
      PX_COUNTERS_THUNK: PX_COUNTERS_THUNK
      // PX_COUNTERS_POSTGRES: PX_COUNTERS_POSTGRES
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
