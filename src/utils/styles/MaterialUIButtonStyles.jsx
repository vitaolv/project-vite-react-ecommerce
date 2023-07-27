import Button from "@mui/material/Button";
import { styled } from "@mui/material";

export const TertiaryButton = styled(Button)({
  color: "#fff",
  backgroundColor: "#252525",
  border: `1px solid #382a21`,
  borderRadius: 11,
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#382a21",
    color: "#e3d98d",
    border: `1px solid #382a21`,
  },
});

export const SecondaryButton = styled(Button)({
  color: "#252525",
  border: `1px solid #382a21`,
  borderRadius: 11,
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#382a21",
    color: "#e3d98d",
    border: `1px solid #382a21`,
  },
});

export const PrimaryButton = styled(Button)({
  color: "#382a21",
  backgroundColor: "#e3d98d",
  borderRadius: 11,
  fontWeight: "bold",
  border: `1px solid #e3d98d`,
  "&:hover": {
    backgroundColor: "#382a21",
    color: "#e3d98d",
    border: `1px solid #382a21`,
  },
});
