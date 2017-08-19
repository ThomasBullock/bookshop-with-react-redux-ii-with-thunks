import { all, call, takeLatest, put } from 'redux-saga/effects';
import * as api from '../api';

const apiUrl = 'http://5979ace680bdcc0011d737c9.mockapi.io/api/';

export function* fetchBooks() {

		yield call(api.GET, 'books');
    yield put(setRecords(responseBody.records));
    
  }



export function* refreshBooks() {
	yield takeLatest('FETCH_BOOKS_SUCCESS', fetchBooks)
  // return (dispatch) => {
  //   return Axios.get(`${apiUrl}/books`)
  //     .then(response => {
  //       dispatch(fetchBooksSuccess(response.data))
  //     })
  //     .catch(error => {
  //       throw(error);
  //     });
  // };
}

export default function* rootSaga() {
	yield all([
		refreshBooks()
	])
}

// export default function* onFetchRecords() {
//   yield takeLatest('RECORDS/FETCH', function* async fetchRecords() {

//     try {
//         const response = await fetch('https://api.service.com/endpoint');
//         const responseBody = response.json();
//     } catch (e) {
//         yield put(fetchFailed(e));
//         return;
//     }

//     yield put(setRecords(responseBody.records));
//   });
// }

