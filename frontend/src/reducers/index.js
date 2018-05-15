import {FETCHING_NOTES, NOTES_FETCHED, CREATING_NOTE, NOTE_CREATED, ERROR} from '../actions';

const initialState = {
  notes: [],
  fetchingNotes: false,
  creatingNotes: false,
  deletingNotes: false,
  editingNote: false,
  error: null,
}

const noteReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING_NOTES:
      return {...state, fetchingNotes: true}
      break;
    case NOTES_FETCHED:
      return {...state, notes: action.payload,fetchingNotes: false}
      break;
    case CREATING_NOTE:
      break;
    case NOTE_CREATED:
      break;
    case ERROR:
      return {...state, fetchingNotes: false, creatingNote: false, deletingNote: false, editingNote: false, error: action.payload};
    default:
      return state;
  }
}

export default noteReducer;