import React from "react";
import s from "./Counter.module.css";
import { Chart } from "react-google-charts";
import { Box, Button, Container, TextField } from "@mui/material";

const dataHeader = ["Amino acid", "Percent"];

const Counter = () => {
  const textAreaRef = React.createRef();
  const [pieChartData, setPieChartData] = React.useState();

  return (
    <Container sx={{ mt: 1, pb: 10 }}>
      <p>Enter the amino acid sequence:</p>
      <TextField
        name="text"
        multiline
        fullWidth
        rows="12"
        placeholder="Example: AMFCFQCQETAKNMFCFQCQETAKNTGCTVKGMCGKPEETANLQDLLIFVLRGIAI...."
        inputRef={textAreaRef}
      />

      <Box sx={{ my: 1 }}>
        <Button
          type="submit"
          variant="contained"
          onClick={handleGetResult}
          sx={{ mr: 1 }}
        >
          Get result
        </Button>
        <Button type="reset" onClick={clear}>
          Clean out
        </Button>
      </Box>

      {pieChartData !== undefined && (
        <div className={s.resultContainer}>
          <Chart
            chartType="Table"
            data={pieChartData}
            width="100%"
            legendToggle
          />
          <Chart
            chartType="PieChart"
            data={pieChartData}
            width="100%"
            legendToggle
            options={{ is3D: true }}
          />
        </div>
      )}
    </Container>
  );

  function handleGetResult() {
    console.log("textAreaRef", textAreaRef);
    const acidNames = {
      A: "Alanine",
      R: "Arginine",
      N: "Asparagine",
      D: "Aspartic Acid",
      C: "Cysteine",
      E: "Glutamic Acid",
      Q: "Glutamine",
      G: "Glycine",
      H: "Histidine",
      I: "Isoleucine",
      L: "Leucine",
      K: "Lysine",
      M: "Methionine",
      F: "Phenylalanine",
      P: "Proline",
      S: "Serine",
      T: "Threonine",
      W: "Tryptophan",
      Y: "Tyrosine",
      V: "Valine",
    };
    const acidChainString = textAreaRef.current.value;
    let acids = {};
    [...acidChainString]
      .filter((acid) => acidNames[acid])
      .forEach((acid) => (acids[acid] ? acids[acid]++ : (acids[acid] = 1)));
    acids = Object.entries(acids).map(([a, count]) => {
      return [acidNames[a], count];
    });
    const result = [dataHeader, ...acids];
    setPieChartData(result);
  }

  function clear() {
    textAreaRef.current.value = "";
    setPieChartData(undefined);
  }
};

export default Counter;
