import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import { getBrazilianStates } from "../../utils/estadosBrasileiros/states";
import PropTypes from "prop-types";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function LocalDataInputs({ formData, handleChange }) {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        "& .MuiTextField-root": { m: 1 },
        "& .small-input": { width: "90%" },
        "& .medium-input": { width: "90%" },
        "& .large-input": { width: "90%" },
        ...(isSmallScreen && {
          "& .medium-input, & .large-input": { width: "100%" },
        }),
      }}
      noValidate
      autoComplete="off"
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            required
            name="cep"
            label="CEP"
            variant="outlined"
            fullWidth
            className="medium-input"
            value={formData.cep}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            name="endereco"
            label="Endereço"
            variant="outlined"
            fullWidth
            className="large-input"
            value={formData.endereco}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            name="numero"
            label="Número"
            variant="outlined"
            fullWidth
            className="medium-input"
            value={formData.numero}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="complemento"
            label="Complemento"
            variant="outlined"
            fullWidth
            className="medium-input"
            value={formData.complemento}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            name="cidade"
            label="Cidade"
            variant="outlined"
            fullWidth
            className="medium-input"
            value={formData.cidade}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            select
            name="estado"
            label="Estado"
            variant="outlined"
            fullWidth
            className="medium-input"
            value={formData.estado}
            onChange={handleChange}
          >
            {getBrazilianStates.map((state) => (
              <MenuItem key={state} value={state}>
                {state}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
    </Box>
  );
}

LocalDataInputs.propTypes = {
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};
