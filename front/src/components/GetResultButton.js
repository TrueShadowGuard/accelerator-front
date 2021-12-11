import {Button} from "@mui/material";

export default function GetResultButton(props) {

  const sx = {padding: "5px 40px", ...props.sx};
  return (
    <Button type="submit"
            variant="contained"
            sx={sx}
            {...props}
    >Get result</Button>
  )
}
