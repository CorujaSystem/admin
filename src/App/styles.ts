import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Container = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100vw;
`;

export const ClickButton = styled(Button)`
  width: 300px;
`;
