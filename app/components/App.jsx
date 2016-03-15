import React from 'react';

import Lanes from './Lanes.jsx';
import LaneActions from '../actions/LaneActions';
import LaneStore from '../stores/LaneStore';
import AltContainer from 'alt-container';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

@DragDropContext(HTML5Backend)
export default class App extends React.Component {
    render() {
        return (
            <div>
                <button className="add-lane" onClick={this.addLane}>+</button>
                <AltContainer
                    stores={[LaneStore]}
                    inject={{ lanes: () => LaneStore.getState().lanes || [] }}>
                    <Lanes />
                </AltContainer>
            </div>
        );
    }
/*
    deleteNote(id, e) {
        e.stopPropagation();

        NoteActions.delete(id);
    }


    editNote(id, task) {
        // Don't modify if trying set an empty value
        if(!task.trim()) {
            return;
        }

        NoteActions.update({id, task});
    }

    // We are using an experimental feature known as property
    // initializer here. It allows us to bind the method `this`
    // to point at our *App* instance.
    //
    // Alternatively we could `bind` at `constructor` using
    // a line, such as this.addNote = this.addNote.bind(this);
    addNote() {
        NoteActions.create({task: 'New task'});
    }*/

    addLane() {
        LaneActions.create({name: 'New lane'});
    }
}