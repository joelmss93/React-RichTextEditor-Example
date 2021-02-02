import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import { convertToHTML } from 'draft-convert';
import DOMPurify from 'dompurify';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

import { Container } from './styles';

const TextEdition = () => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const  [convertedContent, setConvertedContent] = useState(null);

  const handleEditorChange = (state) => {
    setEditorState(state);
    convertContentToHTML();
  }

  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  }

  const createMarkup = (html) => {
    return  {
      __html: DOMPurify.sanitize(html)
    }
  }

  return (
    <Container>
      <div>
        <Editor
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
          editorState={editorState}
          onEditorStateChange={handleEditorChange}
        />
      </div>

      <div dangerouslySetInnerHTML={createMarkup(convertedContent)}>
      </div>
    </Container>
  );
}

export default TextEdition;
