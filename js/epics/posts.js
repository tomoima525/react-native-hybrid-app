import { ajax } from 'rxjs/observable/dom/ajax';
import { receivePosts } from '../actions';

export const getNorris = action$ =>
  action$.ofType(REQUEST_POSTS)
    .mergeMap(action =>
      ajax.getJSON(`https://api.chucknorris.io/jokes/search?query=${action.payload}`)
        .map(response => receivePosts(response))
    );
