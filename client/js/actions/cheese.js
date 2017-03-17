export const FETCH_CHEESES_SUCCEESS = 'FETCH_CHEESES_SUCCEESS';
export const fetchCheesesSucceess = (data) => ({
  type: FETCH_CHEESES_SUCCEESS,
  cheese: data
})

export const FETCH_CHEESES_ERROR = 'FETCH_CHEESES_ERROR';
export const fetchCheesesError = (data) => ({
  type: FETCH_CHEESES_ERROR,
  cheese: data
})


export const FETCH_CHEESES = 'FETCH_CHEESES';
export const fetchCheeses = () => dispatch => {
  return fetch('http://localhost:8080').then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
     }
     return response.json();
  }).then(data => {
    dispatch(fetchCheesesSucceess(data));
  }).catch(error => {
    dispatch(fetchCheesesError(error));
  });

}
