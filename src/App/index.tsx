import React, { useState } from "react";
import { Typography, Stack, Paper } from "@mui/material";
import { Container, ClickButton } from "./styles";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <Container>
      <Paper sx={{ padding: 4 }} elevation={5}>
        <Stack spacing={3} alignItems="center">
          <Typography variant="h5">{count}</Typography>
          <ClickButton variant="contained" onClick={handleClick}>
            Click Me
          </ClickButton>
        </Stack>
      </Paper>
    </Container>
  );
}

export default App;
