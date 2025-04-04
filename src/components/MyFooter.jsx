import { Container, Row, Col, Button } from "react-bootstrap";

const MyFooter = () => {
  return (
    <footer className="d-flex align-items-center flex-column my-5 text-secondary mx-lg-5 px-lg-5 bg-dark">
      {/* Icone social */}
      <div className="mt-5 mb-3 align-self-lg-start">
        <i className="bi bi-facebook fs-4 px-2"></i>
        <i className="bi bi-instagram fs-4 px-2"></i>
        <i className="bi bi-twitter-x fs-4 px-2"></i>
        <i className="bi bi-youtube fs-4 px-2"></i>
      </div>

      {/* Link suddivisi in colonne */}
      <Container className="pb-3">
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4 text-center text-lg-start g-3">
          <Col>
            <p>Audio and Subtitles</p>
            <p>Media Center</p>
            <p>Privacy</p>
            <p>Contact Us</p>
          </Col>
          <Col>
            <p>Audio Description</p>
            <p>Investor Relations</p>
            <p>Legal Notices</p>
          </Col>
          <Col>
            <p>Help Center</p>
            <p>Jobs</p>
            <p>Cookie Preferences</p>
          </Col>
          <Col>
            <p>Gift Cards</p>
            <p>Terms of Use</p>
            <p>Corporate Information</p>
          </Col>
        </Row>
      </Container>

      {/* Service code + copyright */}
      <div className="text-center align-self-lg-start text-lg-start">
        <Button variant="outline-secondary" className="rounded-0">
          Service Code
        </Button>
        <p className="pt-3">
          &copy; 1997-2019 Netflix, Inc. {"{i-0ruey3geywdywdy}"}
        </p>
      </div>
    </footer>
  );
};

export default MyFooter;
