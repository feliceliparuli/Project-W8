import { Container, Row, Col, Dropdown, ButtonGroup } from "react-bootstrap";

const TvShows = () => {
  return (
    <Container className="my-0 px-0 ">
      <Row className="d-xl-flex align-items-xl-center justify-content-between">
        <Col xl="auto" className="d-xl-flex align-items-xl-center my-3">
          <h1 className="text-light pb-sm-3 pb-xl-0 pe-xl-3">TV Shows</h1>
          <Dropdown>
            <Dropdown.Toggle variant="outline-light" className="rounded-0">
              Genres
            </Dropdown.Toggle>
            <Dropdown.Menu className="rounded-0">
              <Dropdown.Item href="#">Action</Dropdown.Item>
              <Dropdown.Item href="#">Horror</Dropdown.Item>
              <Dropdown.Item href="#">Romantic</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>

        <Col xl="auto">
          <ButtonGroup role="group" aria-label="View mode toggle">
            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio1"
              autoComplete="off"
              defaultChecked
            />
            <label
              className="btn btn-outline-secondary rounded-0"
              htmlFor="btnradio1"
            >
              <i className="bi bi-list"></i>
            </label>

            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio2"
              autoComplete="off"
            />
            <label
              className="btn btn-outline-secondary rounded-0"
              htmlFor="btnradio2"
            >
              <i className="bi bi-grid-fill"></i>
            </label>
          </ButtonGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default TvShows;
