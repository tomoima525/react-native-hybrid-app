import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
//import { ajax } from 'rxjs/add/observable/dom/ajax';
import { ajax } from 'rxjs/observable/dom/ajax';
import { receivePosts } from '../actions';
import { REQUEST_POSTS } from '../actions';

export const getNorris = action$ => {
  console.log(REQUEST_POSTS);
  //return action$.mergeMap((action) => console.log(action));
  return action$.ofType(REQUEST_POSTS)
    .mergeMap(action => {
      ajax.getJSON("https://api.chucknorris.io/jokes/random") //Does not work
      .map(response => console.log(response));
      //ajax.getJSON(`https://api.chucknorris.io/jokes/search?query=${action.payload}`)

      //ajaxGetJSON("https://api.chucknorris.io/jokes/search?query=chuck", null)
        //.map(response => receivePosts(response));
      }
    );
};
