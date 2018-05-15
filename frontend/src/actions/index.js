import axios from 'axios';

export const FETCHING_NOTES = 'FETCHING_NOTES';
export const NOTES_FETCHED = 'NOTES_FETCHED';
export const CREATING_NOTE = 'CREATING_NOTE';
export const NOTE_CREATED = 'NOTE_CREATED';
export const ERROR = 'ERROR';

export const getNotes = () => {
  return dispatch => {
    dispatch({ type: FETCHING_NOTES });
    axios
      .get('gakko-djorg.herokuapp.com/api/notes')
      .then(({ data }) => {
        dispatch({ type: NOTES_FETCHED, payload: data })
      }).catch(err => {
        console.error(err);
        dispatch({ type: ERROR, payload: err });
      });
  };
};