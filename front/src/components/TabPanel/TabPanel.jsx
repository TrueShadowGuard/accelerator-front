import { Box } from "@mui/material";

export default function TabPanel(props) {
  const { children, selected, value, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={selected !== value}
      aria-labelledby={`simple-tab-${value}`}
      {...other}
    >
      {selected === value && <Box sx={{ p: 0 }}>{children}</Box>}
    </div>
  );
}
