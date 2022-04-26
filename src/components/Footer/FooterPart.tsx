import { Col, Row } from "react-bootstrap";
import "../../components/Footer/Footer.css";

const FooterPart = () => {
  return (
    <Row id="footer__deco">
      <Col>
        <div className="text__align">
          ©
          <strong>
            Y-T Recipe Store <small> 2021-2022</small>
          </strong>
        </div>
      </Col>
      <Col>
        <div className="text__align">
          Indian Veg Recipes | All Rights Reserved
        </div>
      </Col>
      <Col>
        <div></div>
      </Col>
    </Row>
  );
};
export default FooterPart;
