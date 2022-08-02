import React from 'react';
import { Button } from "@mui/material";

const PrimaryButton = (props) => {
  return (
      <div style={{paddingLeft: 10, paddingRight: 10}}>
        <Button variant="outlined" onClick={props.sendRequest}>{props.children}</Button>
      </div>
  );
};

export default PrimaryButton;