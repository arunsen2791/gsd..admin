import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Label,
  Input,
  FormText,
  Row,
  Col,
} from "reactstrap";

class DEpositForm extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Basic Inputs</CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Col lg="4" md="6" sm="12">
              <FormGroup>
                <Label for="basicInput">Basic Input</Label>
                <Input type="email" id="basicInput" placeholder="Enter Email" />
              </FormGroup>
            </Col>
            <Col lg="4" md="6" sm="12">
              <FormGroup>
                <Label for="basicInput">Basic Input</Label>
                <Input type="email" id="basicInput" placeholder="Enter Email" />
              </FormGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  }
}
export default DEpositForm;
