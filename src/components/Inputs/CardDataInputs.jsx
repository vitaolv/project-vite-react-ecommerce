import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import useMediaQuery from "@mui/material/useMediaQuery";

import { Grid } from "@mui/material";

import PropTypes from "prop-types";

export default function CardDataInputs({ formData, handleChange }) {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        "& .MuiTextField-root": { m: 1 },
        "& .medium-input": { width: "90%" },
        ...(isSmallScreen && {
          "& .medium-input, & .large-input": { width: "100%" },
        }),
      }}
      noValidate
      autoComplete="off"
    >
      <Grid container spacing={2} item xs={12}>
        <Grid item xs={12}>
          <TextField
            required
            name="nome"
            label="Nome completo"
            variant="outlined"
            fullWidth
            className="medium-input"
            value={formData.nome}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            name="dataNascimento"
            label="Data de Nascimento"
            variant="outlined"
            fullWidth
            className="medium-input"
            value={formData.dataNascimento}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            name="cpf"
            label="CPF"
            variant="outlined"
            fullWidth
            className="medium-input"
            value={formData.cpf}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            name="email"
            label="E-mail"
            variant="outlined"
            fullWidth
            className="medium-input"
            value={formData.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            name="telefone"
            label="Telefone"
            variant="outlined"
            fullWidth
            className="medium-input"
            value={formData.telefone}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="celular"
            label="Celular (OPCIONAL)"
            variant="outlined"
            fullWidth
            className="medium-input"
            value={formData.celular}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

CardDataInputs.propTypes = {
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};
