import React, { Component } from "react";
import {
  Card,
  CardBody,
  Col,
  Form,
  Row,
  Input,
  Label,
  Button,
  FormGroup,
} from "reactstrap";
import { history } from "../../../history";
import axiosConfig from "../../../axiosConfig";
import "react-toastify/dist/ReactToastify.css";
import Select from "../../forms/form-elements/select/Select";

export class DepositEdForm extends Component {
 
 
    
  render() {
    return (
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Edit Deposit 
              </h1>
            </Col>
            <Col>
              <Button
                className=" btn btn-danger float-right"
               
              >
                Back
              </Button>
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1">
              <Row className="mb-2">
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>User Id</Label>
                    <Input
                      type="number"
                      placeholder="User Id"
                     
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>User Name</Label>
                    <Input
                      type="text"
                      placeholder="User Name"
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>User Email</Label>
                    <Input
                      type="email"
                      placeholder="User Email"
                     
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Phone Number</Label>
                    <Input
                      type="number"
                      placeholder="Phone Number"
                     
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>HashTag (Amount)</Label>
                    <Input
                      type="number"
                      placeholder="HashTag"
                     
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Payment Methode</Label>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>Choose Methode</option>
                        <option>USDT</option>
                        <option>TRX</option>
                   </Input>
                  </FormGroup>
                </Col>
              
                <Col lg="6" md="6" sm="6" className="mb-2 mt-1">
                  <FormGroup>
                    <Label className="mb-1">Status</Label>
                    <div
                      className="form-label-group"
                      >
                      <input
                        style={{ marginRight: "3px" }}
                        type="radio"
                        name="status"
                        value="Active"
                      />
                      <span style={{ marginRight: "20px" }}>Active</span>
                      <input
                        style={{ marginRight: "3px" }}
                        type="radio"
                        name="status"
                        value="Inactive"
                      />
                      <span style={{ marginRight: "3px" }}>Inactive</span>
                    </div>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Button.Ripple
                  color="success"
                  type="submit"
                  className="mr-1 mb-1"
                >
                  Update 
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default DepositEdForm;