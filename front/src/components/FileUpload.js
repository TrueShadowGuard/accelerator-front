import React, {useEffect, useRef, useState} from 'react';
import {Box, IconButton, InputAdornment, TextField} from "@mui/material";
import {UploadFileOutlined} from "@mui/icons-material"

const FileUpload = (props) => {

  const inputRef = useRef();
  const [file, setFile] = useState(null);

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
    <label>
      <input type="file"
             ref={inputRef}
             hidden
             onChange={e => {
               setFile(e.target.files[0]);
             }}
      />

      <TextField
        variant="standard"
        placeholder="file.pdb"
        value={file?.name || ""}
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
    </label>
  );
};

export default FileUpload;
