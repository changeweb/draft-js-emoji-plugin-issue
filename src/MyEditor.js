import React, { Component } from 'react';
import Editor from 'draft-js-plugins-editor';
import createEmojiPlugin from 'draft-js-emoji-plugin';
import { EditorState } from 'draft-js';
import 'draft-js-emoji-plugin/lib/plugin.css';

const emojiPlugin = createEmojiPlugin();
const { EmojiSuggestions } = emojiPlugin;

const plugins = [
  emojiPlugin,
];

export default class MyEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };

    this.onChange = (editorState) => {
      this.setState({
        editorState
      });
    };
  }

  render() {
    return (
      <div>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          plugins={plugins}
          ref="editor"
        />
        <EmojiSuggestions />
      </div>
    );
  }
}
