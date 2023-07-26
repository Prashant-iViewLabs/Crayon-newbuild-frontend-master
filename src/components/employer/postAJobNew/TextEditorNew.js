import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import locale from "../../../i18n/locale";
import Paper from "@mui/material/Paper";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, ContentState, convertFromHTML } from "draft-js";
import { convertToHTML } from 'draft-convert';
import DOMPurify from 'dompurify';

const StyledPaper = styled(Paper)(({ theme }) => ({
  borderRadius: "25px",
  boxShadow:
    "0px 1px 4px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.02), 0px 1px 12px rgba(0, 0, 0, 0.12)",
  minHeight: "133px",
  padding: "16px",
  ".toolbar-class": {
    border: 0,
    marginLeft: "-10px",
    ".rdw-option-wrapper": {
      border: 0,
    },
    ".rdw-dropdown-wrapper": {
      border: 0,
    },
  },
}));
const toolBarOptions = {
  options: [
    "inline",
    "list",
    "textAlign",
    "colorPicker",
    "link",
    "remove",
    "history",
  ],
  inline: {
    options: ["italic", "bold", "underline", "strikethrough"],
  },
  list: {
    options: ["unordered", "ordered"],
  },
  textAlign: {
    options: ["left", "center", "right", "justify"],
  },
};

const getRGBValues = (text) => {
  const rgbValues = text.match(/\((.*?)\)/)[1].split(',');
  const color = `rgb(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]})`;
  return color
}
const styleToHTML = (style) => {
  if (style === 'BOLD') {
    return <strong />;
  }
  if (style === 'ITALIC') {
    return <em />;
  }
  if (style === 'UNDERLINE') {
    return <u />;
  }
  if (style === 'STRIKETHROUGH') {
    return <del />
  }
  if (style.includes('bgcolor-rgb')) {
    let bgcolor = getRGBValues(style)
    return <span style={{ background: bgcolor }} />;
  }
  if (style.includes('color-rgb')) {
    let color = getRGBValues(style)
    return <span style={{ color }} />;
  }
  return undefined;
};

const blockToHTML = (block) => {
  const textAlign = block.data && block.data['text-align'];

  const TagName = block.type === 'unordered-list-item'
    ? 'ul'
    : block.type === 'ordered-list-item'
      ? 'ol'
      : 'p';
  if (textAlign) {
    if (block.type === 'unstyled') {
      return <p style={{ textAlign }} />;
    }
    return (
      <TagName>
        <li style={{ textAlign }}>{block.text}</li>
      </TagName>)
  }
};

const entityToHTML = (entity, originalText) => {
  if (entity.type === "LINK") {
    return (
      <a
        href={entity.data["url"]}
        target={entity.data["targetOption"]}
        rel="noopener noreferrer"
      >
        {originalText}
      </a>
    );
  }

  return originalText;
};
const options = {
  blockToHTML,
  styleToHTML,
  entityToHTML,
};

export default function TextEditor({ value, type, title, onInputCHange }) {

  const [editorState, setEditorState] = useState(() => {
    if (value) {
      const sampleMarkup = value;
      const blocksFromHTML = convertFromHTML(sampleMarkup);
      console.log(blocksFromHTML);
      const content = ContentState.createFromBlockArray(
        blocksFromHTML?.contentBlocks,
        blocksFromHTML?.entityMap
      );
      return EditorState.createWithContent(content)
    }
    return EditorState.createEmpty()

  })

  const [convertedContent, setConvertedContent] = useState(null);
  console.log(value);
  const onEditorStateChange = (text) => {
    setEditorState(text);
  };
  useEffect(() => {
    let html = convertToHTML(options)(editorState.getCurrentContent());
    onInputCHange(html, type)
    setConvertedContent(html);

  }, [editorState]);

  // useEffect(() => {
  //   setEditorState(EditorState.createWithContent(content))
  // }, [])

  return (
    <StyledPaper>
      <Typography
        sx={{
          fontSize: "12px",
          fontWeight: 400,
        }}
      >
        {title}
      </Typography>
      {console.log(editorState)}
      <Editor
        // editorState={editorState}
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        placeholder="Write here..."
        toolbar={toolBarOptions}
      />

      <div>
        {convertedContent}
      </div>
    </StyledPaper>
  );
}
