import React, {useState} from 'react';
import classes from './MakeComment.module.css'
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import {Button} from "@mui/material";
import {countries} from "./countries";


const MakeComment = (props) => {

  const [fullName, setFullName] = useState("");
  const [country, setCountry] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = React.useState(0);

  return (
      <div className={classes.asideNav}>
        <Box
            component="form"
            sx={{ maxWidth:"450px",
              '& .MuiTextField-root': { marginLeft: 2.5, marginRight: 2.5, width:"85%" },
            }}
            noValidate
            autoComplete="off"
        >
          <TextField
              id="name"
              label="Full Name"
              variant="standard"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
          />

          <Autocomplete
              id="country"
              options={countries}
              autoHighlight
              onSelect={(e) => setCountry(e.target.value)}
              getOptionLabel={(option) => option.label}
              renderOption={(props, option) => (
                  <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                    <img
                        loading="lazy"
                        width="20"
                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                        srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                        alt=""
                    />
                    {option.label} ({option.code})
                  </Box>
              )}
              renderInput={(params) => (
                  <TextField
                      {...params}
                      label="Country"
                      variant="standard"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                      }}
                  />
              )}
          />
          <TextField
              id="comment"
              label="Comment"
              multiline
              rows={2}
              variant="standard"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              helperText={"max " + (100 - content?.length) + " more characters"}
              inputProps={{maxLength: 100}}
          />

          <Box sx={{pb:2, pt:1, color:"gray"}}>
            <Typography component="legend" sx={{textAlign: "center"}}>How do you like our server</Typography>
            <Rating sx={{marginLeft: 10.5, marginRight: 10.5}}
                name="simple-controlled"
                value={rating}
                onChange={(event, newValue) => {
                  setRating(newValue);
                }}
            />
          </Box>
          <Button
              type="submit"
                  variant="contained"
                  onClick={handleCommentPost}
                  sx={{marginLeft: 8, marginRight: 8 }}>
            Submit Comment
          </Button>
        </Box>
      </div>
  );

    function handleCommentPost(event) {
        event.preventDefault();
        setFullName("");
        setCountry("");
        setContent("");
        setRating(0);
        props.onPostComment(fullName, country, content, rating);
    }
};

export default MakeComment;

// не нашел postComment
// MakeComment.propTypes = {
//   postComment: PropTypes.func
// };
