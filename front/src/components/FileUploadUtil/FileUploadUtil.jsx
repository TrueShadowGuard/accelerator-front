import React from 'react';
import classes from "./FileUploadUtil.module.css"
import {UploadFileOutlined} from "@mui/icons-material";

const FileUploadUtil = (props) => {
  return (
      <div style={classes} className={classes.fileUploader}>
        <label className={classes.fileUpload}>
          <input type="file" accept={'.pdb'} onChange={props.onFileChange} />
          <UploadFileOutlined className={classes.buttonUpload}/>
        </label>
        <span className={classes.fileName} >{props.state.file?.name || 'Select file'}</span>
      </div>
  );
};

export default FileUploadUtil;