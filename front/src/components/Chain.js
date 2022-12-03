import React from 'react';
import classes from "./FileUpload.module.css";
import {MenuItem, Select} from "@mui/material";

const Chain = (props) => {
  return (
      <div style={{paddingLeft: 10, paddingRight: 10}}>
          <Select className={classes.chain}
              size="small"
              variant={"outlined"}
              label="Chain"
              value={props.selectedChain}
              onChange={(e) => props.onChainChange(e.target.value)}
              disabled={props.chains === null}
          >
            {props.chains &&
                Object.keys(props.chains).map((chainName) => (
                    <MenuItem value={chainName} key={chainName}>
                      {chainName}
                    </MenuItem>
                ))}
          </Select>
      </div>
  );
};

export default Chain;