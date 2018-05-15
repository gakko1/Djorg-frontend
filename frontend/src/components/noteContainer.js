import React from 'react';
import { connect } from 'react-redux';
import { getNotes } from '../actions';
import './noteContainer.css';

class NoteContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          {Array.from(this.props.notes).map(item => {
            return(
              <li 
                key={item.id}
                className="notes">
                <h2>{item.name}</h2>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

const MapStateToProps = state => {
  return {
    error: state.noteReducer.error
  }
}

export default connect(MapStateToProps, getNotes)(NoteContainer);