import React from 'react';
import ControlPanel from 'Containers/control-panel';
import TextEditor from 'Containers/text-editor';

import css from './styles.css';


export default class Editor extends React.Component {
    render () {
        return (
            <div className={css.editorWrapper}>
                <ControlPanel />
                <TextEditor />
            </div>
        )
    }
}
