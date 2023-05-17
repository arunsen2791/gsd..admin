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
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import Select from "../../forms/form-elements/select/Select";
import swal from 'sweetalert';

export class AddDeposit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // firstname:"",
      walletId: "",//62790df9ff861d588269c999
      add_amount:"",   
      status: "success",
      // userData:{},
    };
  }
 
  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  changeHandlerNew = (e) => {
    let value= parseInt(e.target.value)
    this.setState({ add_amount:value });
  };
  submitHandler = (e) => {
    this.setState({ walletId: this.props.match.params.id });

    e.preventDefault();
 
       let payload = {
         walletId :this.props.match.params.id,
         add_amount : this.state.add_amount, //parseInt(this.state.number
         status : this.state.status //parseInt(this.state.number
       }
    axios.post("http://44.205.32.29:8000/admin/addAmount/",payload)
    .then((response) => {
    console.log(response);
    swal("Successful!", "Money Added Successfully", "success");
    this.props.history.push("/app/walletPage/adddepoAmount");
  })
    .catch((error) => {
      console.log(error);
      swal("Error!", " Invalid", "error");
    });
  };
 

  render() {
    // console.log('searchParams',this.props.match.params.id)
    return (
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Add  wallet 
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
          <Form className="m-1" onSubmit={this.submitHandler}>
              <Row className="mb-2">
                 {/* <Col lg="6" md="6">
                    <FormGroup>
                       <Label>User Id</Label>
                      <Input
                      name="walletId"
                        type="text"
                        placeholder="User Id"

                      value={this.state.walletId}
                      onChange={this.changeHandler}/>
                    </FormGroup>
                </Col>  */}
                {/* <Col lg="6" md="6">
                  <FormGroup>
                    <Label>User Name</Label>
                    <Input
                    name="firstname"
                      type="text"
                      placeholder="Enter Name" 
                    value={this.state.firstname}
                    onChange={this.changeHandler}/>
                  </FormGroup>
                </Col> */}
                
                {/* <Col lg="6" md="6">
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
                </Col> */}
                
                <Col lg="6" md="6" sm="6" className="mb-2">
                <FormGroup>
                <Label>Crypto Deposit Amount</Label>

                  <Input   
                    required 
                    type="text" 
                    name="add_amount"
                    placeholder="Enter Amount" 
                    value={this.state.add_amount}
                    onChange={this.changeHandlerNew}/>
                    </FormGroup>
                </Col>
                 
                
                {/* <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Payment Methode</Label>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>Choose Methode</option>
                        <option>USDT</option>
                        <option>TRX</option>
                   </Input>
                  </FormGroup>
                </Col> */}
              
                {/* <Col lg="6" md="6" sm="6" className="mb-2 mt-1">
                  <FormGroup>
                    <Label className="mb-1">Status</Label>
                    <div
                      className="form-label-group"
                      >
                      <input
                        style={{ marginRight: "3px" }}
                        type="radio"
                        name="status"
                        value="Success"
                      />
                      <span style={{ marginRight: "20px" }}>Success</span>
                      <input
                        style={{ marginRight: "3px" }}
                        type="radio"
                        name="status"
                        value="Pending"
                      />
                      <span style={{ marginRight: "3px" }}>Pending</span>
                    </div>
                  </FormGroup>
                </Col> */}
              </Row>
              <Row>
                <Button.Ripple
                  color="success"
                  type="submit"
                  className="mr-1 mb-1"
                >
                  Save 
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default AddDeposit;