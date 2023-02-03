import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import { UploadFileOutlined } from "@mui/icons-material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const FileUpload = (props) => {
  const inputRef = useRef();
  const [file, setFile] = useState(null);

  useEffect(() => {
    props.onFileChange && props.onFileChange(file);
  }, [file?.name + file?.size]);

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
        },
      });
    }
  }, [props.inputRef]);

  return (
    <Box as="label" sx={{ width: "100%", maxHeight: "235px" }}>
      <input
        type="file"
        ref={inputRef}
        hidden
        {...props.innerProps}
        onChange={(e) => {
          setFile(e.target.files[0]);
        }}
      />

      <Box sx={{ width: "100%", maxHeight: "235px" }}>
        <DropArea file={file} setFile={setFile} />
      </Box>
    </Box>
  );
};

export default FileUpload;

function DropArea({ file, setFile }) {
  const [dragCounter, setDragCounter] = useState(0);

  const isDraggingOver = dragCounter !== 0;

  const dropAreaRef = useRef();

  const [dropAreaHeight, setDropAreaHeight, ] = useState(0);

  useLayoutEffect(() => {
    setDropAreaHeight(dropAreaRef.current.offsetWidth);
  }, []);

  return (
    <Box
      sx={{
        width: 1,
        height: "235px",
        border: "1px dashed",
        borderRadius: "5px",
        backgroundColor: "#F8F8FF",
        borderColor: (theme) =>
          isDraggingOver || file ? theme.palette.primary.main : "#666",
        transition: "border-color 0.22s",
        mt: 1,
        display: "flex",
        cursor: "pointer",
      }}
      ref={dropAreaRef}
      onDrop={onDrop}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
    >
      <Box sx={{ m: "auto" }}>
        <section>
          <Box
            sx={{ textAlign: "center", color: "#808080", typography: "body2" }}
          >
            <CloudUploadIcon sx={{ fontSize: 50 }} color="primary" />
            <p>Drag and drop your file anywhere</p>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <TextField
              variant="outlined"
              size="small"
              sx={{mt:3, width: "80%", position: "center" }}
              placeholder="file.pdb"
              label="File"
              value={file?.name || ""}
              fullWidth
              inputProps={{ min: 0, style: { paddingLeft: "10%" } }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      as={Box}
                      sx={{
                        cursor: "pointer",
                      }}
                      color="primary"
                    >
                      <UploadFileOutlined />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </section>
      </Box>
    </Box>
  );

  function onDrop(e) {
    e.preventDefault();
    setFile(e.dataTransfer.files[0]);
    setDragCounter(0);
  }

  function onDragOver(e) {
    e.preventDefault();
  }

  function onDragEnter(e) {
    setDragCounter((c) => c + 1);
  }

  function onDragLeave(e) {
    setDragCounter((c) => c - 1);
  }
}
