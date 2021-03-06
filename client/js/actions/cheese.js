export const FETCH_CHEESES_SUCCESS = 'FETCH_CHEESES_SUCCESS';
export const fetchCheesesSuccess = (data) => ({
  type: FETCH_CHEESES_SUCCESS,
  data
})

export const FETCH_CHEESES_ERROR = 'FETCH_CHEESES_ERROR';
export const fetchCheesesError = (error) => ({
  type: FETCH_CHEESES_ERROR,
  error
})

export const FETCH_CHEESES_REQUEST = 'FETCH_CHEESES_REQUEST';
export const fetchCheeseRequest = ()=>({
  type: FETCH_CHEESES_REQUEST
})

export const fetchCheeses = () => {
  return (dispatch) => {
    dispatch(fetchCheeseRequest());

    return fetch('http://localhost:8080/cheeses')
    .then(response => {
      console.log(response);
    	return response.json();
    })
    .then(json => {
    	dispatch(fetchCheesesSuccess(json));
    })
    .catch(error => {
    	dispatch(fetchCheesesError(error));
    })
  }
}
