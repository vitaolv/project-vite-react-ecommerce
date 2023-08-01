import { Input, Grid, Form } from "antd";
import PropTypes from "prop-types";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";

export default function CardDataInputs({ formData, handleChange }) {
  const screens = useBreakpoint();

  return (
    <Form
      layout="vertical"
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        marginY: 1,
        ...(screens.md && { width: "100%" }),
      }}
    >
      <Grid container spacing={2} item xs={12}>
        <Grid item xs={12}>
          <Form.Item label="Nome completo" required>
            <Input
              name="nome"
              size="middle"
              style={{ width: "90%" }}
              value={formData.nome}
              onChange={handleChange}
            />
          </Form.Item>
        </Grid>
        <Grid item xs={12}>
          <Form.Item label="Data de Nascimento" required>
            <Input
              name="dataNascimento"
              size="middle"
              style={{ width: "90%" }}
              value={formData.dataNascimento}
              onChange={handleChange}
            />
          </Form.Item>
        </Grid>
        <Grid item xs={12}>
          <Form.Item label="CPF" required>
            <Input
              name="cpf"
              size="middle"
              style={{ width: "90%" }}
              value={formData.cpf}
              onChange={handleChange}
            />
          </Form.Item>
        </Grid>
        <Grid item xs={12}>
          <Form.Item label="E-mail" required>
            <Input
              name="email"
              size="middle"
              style={{ width: "90%" }}
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Item>
        </Grid>
        <Grid item xs={12}>
          <Form.Item label="Telefone" required>
            <Input
              name="telefone"
              size="middle"
              style={{ width: "90%" }}
              value={formData.telefone}
              onChange={handleChange}
            />
          </Form.Item>
        </Grid>
        <Grid item xs={12}>
          <Form.Item label="Celular (OPCIONAL)">
            <Input
              name="celular"
              size="middle"
              style={{ width: "90%" }}
              value={formData.celular}
              onChange={handleChange}
            />
          </Form.Item>
        </Grid>
      </Grid>
    </Form>
  );
}

CardDataInputs.propTypes = {
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};
