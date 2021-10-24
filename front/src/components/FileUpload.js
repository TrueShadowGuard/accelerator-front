import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {Box, IconButton, InputAdornment, TextField} from "@mui/material";
import {UploadFileOutlined} from "@mui/icons-material"

const FileUpload = (props) => {

  const inputRef = useRef();
  const [file, setFile] = useState(null);

  useEffect(() => {
    props.onFileChange && props.onFileChange(file);
  }, [file?.name + file?.size, props.onFileChange]);

  useEffect(() => {
    if (props.inputRef) {
      props.inputRef.current = new Proxy(inputRef.current, {
        set: (target, key, value) => {
          target[key] = value;
          setFile(inputRef.current.files[0]);
          return true;
        },
        get: (target, key) => {
          return target[key];
        }
      });
    }
  }, [props.inputRef])

  return (
    <Box as="label" sx={{width: "100%"}}>
      <input type="file"
             ref={inputRef}
             hidden
             {...props.innerProps}
             onChange={e => {
               setFile(e.target.files[0]);
               props.onChange && props.onChange(e);
             }}
      />

      <Box sx={{width: "100%"}}>
        <TextField
          variant="standard"
          placeholder="file.pdb"
          value={file?.name || ""}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="end">
                <IconButton as={Box}
                            sx={{
                              cursor: "pointer"
                            }}>
                  <UploadFileOutlined/>
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        <DropArea file={file} setFile={setFile}/>
      </Box>
    </Box>
  );
};

export default FileUpload;

function DropArea({file, setFile}) {

  const [dragCounter, setDragCounter] = useState(0);

  const isDraggingOver = dragCounter !== 0;

  const dropAreaRef = useRef();

  const [dropAreaHeight, setDropAreaHeight] = useState(0);

  useLayoutEffect(() => {
    setDropAreaHeight(dropAreaRef.current.offsetWidth);
  }, []);

  return (
    <Box
      sx={{
        width: 1,
        height: dropAreaHeight + 'px',
        border: "3px dashed",
        borderColor: theme => isDraggingOver || file ? theme.palette.primary.main : "#666",
        transition: "border-color 0.22s",
        mt: 1,
        display: "flex",
        cursor: "pointer"
      }}
      ref={dropAreaRef}
      onDrop={onDrop}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
    >
      <Box as="span" sx={{m: "auto"}}>Drop your file here</Box>
    </Box>
  )

  function onDrop(e) {
    e.preventDefault();
    setFile(e.dataTransfer.files[0]);
    setDragCounter(0);
  }

  function onDragOver(e) {
    e.preventDefault();
  }

  function onDragEnter(e) {
    setDragCounter(c => c + 1);
  }

  function onDragLeave(e) {
    setDragCounter(c => c - 1);
  }
}
