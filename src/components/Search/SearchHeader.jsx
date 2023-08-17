import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export function SearchHeader() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/resultado-da-busca/${searchTerm}`);
  };

  return (
    <>
      <Form className="d-flex" onSubmit={handleSearchSubmit}>
        <Form.Control
          type="search"
          placeholder="Encontre aqui..."
          className="me-2"
          aria-label="Buscar"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <Button
          variant="warning"
          className="custom-search-button"
          type="submit"
        >
          Buscar
        </Button>
      </Form>
    </>
  );
}
