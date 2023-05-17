import React from "react";
import {
  Card,
  CardBody,
  Input,
  Button,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
import { AgGridReact } from "ag-grid-react";
import { ContextLayout } from "../../../utility/context/Layout";
import { ChevronDown, Edit, Eye, Plus, PlusCircle, Trash2 } from "react-feather";
import { history } from "../../.././history";
import axios from "axios";
import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
import { Link } from "react-router-dom";

class Deposit extends React.Component {
  state = {
    rowData: [],
    paginationPageSize: 20,
    currenPageSize: "",
    getPageSize: "",
    defaultColDef: {
      sortable: true,
      editable: true,
      resizable: true,
      suppressMenu: true,
    },
    columnDefs: [
      {
        headerName: "UserName",
        field: "customer.firstname",
        width: 175,
        filter: true,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.customer?.firstname} {params.data.customer?.lastname} </span>
              
            </div>
          );
        },
      },
      {
        headerName: "UserId",
        field: "customer.customerId",
        filter: "true",
        width: 140,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.customer?.customerId}</span>
            </div>
          );
        },
      },

      // {
      //   headerName: "Date",
      //   field: "Date",
      //   filter: true,
      //   width: 250,
      // },
      {
        headerName: "Email",
        field: "customer.email",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.customer?.email}</span>
            </div>
          );
        },
      },
      {
        headerName: "Phone Number",
        field: "customer.mobile",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.customer?.mobile}</span>
            </div>
          );
        },
      },
      
      {
        headerName: "Amount",
        field: "amount",
        filter: true,
        width: 125,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.amount}</span>
            </div>
          );
        },
      },
     
      {
        headerName: "Request Crypto  Amount",
        field: "reqamount",
        filter: true,
        width: 125,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.reqamount}</span>
            </div>
          );
        },
      },
      // {
      //   headerName: "Add Amount",
      //   field: "add_amount",
      //   filter: true,
      //   width: 125,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div>
      //         <span>{params.data.add_amount}</span>
      //       </div>
      //     );
      //   },
      // },
      {
        headerName: "Payment Method",
        field: "pay_method",
        filter: "true",
        width: 140,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.pay_method}</span>
            </div>
          );
        },
      },
      
      {
          headerName: "Image",
          field: "depsite_file",
          filter: false,
          width: 200,
          setColumnVisible: false,
          cellRendererFramework: (params) => {
            return (
              <div className="d-flex align-items-center cursor-pointer">
                
                <img
                  className=" rounded-circle  mr-3"
                  src= {params.data.depsite_file}
                  alt="user avatar"
                  height="40"
                  width="40"
                /> 
              </div>
            );
          },
        },
        {
          headerName: "Status",
          field: "status",
          filter: true,
          width: 150,
          cellRendererFramework: (params) => {
            return params.value === "Success" ? (
              <div className="badge badge-pill badge-success">
                {params.data.status}
              </div>
            ) : params.value === "Pending" ? (
              <div className="badge badge-pill badge-warning">
                {params.data.status}
              </div>
            ) : null;
          },
        },
      {
        headerName: "Actions",
        field: "_id",
        width: 150,
        cellRendererFramework: params => {
          //alert('hello')
          return (
            <div className="actions cursor-pointer">
              {/* <Eye
                className="mr-50"
                size="25px"
                color="green"
                onClick={() => history.push("/apps/walletPage/depositForm")}
              /> */}
              <PlusCircle
                className="mr-50"
                size="25px"
                color="blue"
                onClick={() =>
                   history.push('/app/walletPage/adddeposit/'+params.data._id)}
                
              />
              {/* <Trash2
                size="25px"
                color="red"
                onClick={() => {
                  let selectedData = this.gridApi.getSelectedRows();
                  this.runthisfunction(params.data._id);
                  this.gridApi.updateRowData({ remove: selectedData });
                 }}
              /> */}
            </div>
          );
        },
      },
    ],
  };

  componentDidMount() {
    axios.get("http://44.205.32.29:8000/admin/getwallet").then((response) => {
      let rowData = response.data.data;
      // JSON.stringify(rowData);
      console.log(rowData);
      this.setState({ rowData });
    });
  }

  onGridReady = params => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.setState({
      currenPageSize: this.gridApi.paginationGetCurrentPage() + 1,
      getPageSize: this.gridApi.paginationGetPageSize(),
      totalPages: this.gridApi.paginationGetTotalPages(),
    });
  };

  updateSearchQuery = val => {
    this.gridApi.setQuickFilter(val);
  };

  filterSize = val => {
    if (this.gridApi) {
      this.gridApi.paginationSetPageSize(Number(val));
      this.setState({
        currenPageSize: val,
        getPageSize: val,
      });
    }
  };

  render() {
    const { rowData, columnDefs, defaultColDef } = this.state;
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Deposit List"
          //   breadCrumbParent="Forms & Tables"
          breadCrumbActive="Wallet "
        />
        <Card className="overflow-hidden agGrid-card">
                  {/* <div className="dpadd p-2">
                      <Link to="adddeposit">
                      <Button
                        className=" btn btn-success float-right"
                     
                      >
                        Add
                      </Button>
                      </Link>
                  </div> */}
          <CardBody className="py-0">
            {this.state.rowData === null ? null : (
              <div className="ag-theme-material w-100 my-2 ag-grid-table">
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                  <div className="mb-1">
                    <UncontrolledDropdown className="p-1 ag-dropdown">
                      <DropdownToggle tag="div">
                        {this.gridApi
                          ? this.state.currenPageSize
                          : "" * this.state.getPageSize -
                            (this.state.getPageSize - 1)}{" "}
                        -{" "}
                        {this.state.rowData.length -
                          this.state.currenPageSize * this.state.getPageSize >
                        0
                          ? this.state.currenPageSize * this.state.getPageSize
                          : this.state.rowData.length}{" "}
                        of {this.state.rowData.length}
                        <ChevronDown className="ml-50" size={15} />
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem
                          tag="div"
                          onClick={() => this.filterSize(20)}
                        >
                          20
                        </DropdownItem>
                        <DropdownItem
                          tag="div"
                          onClick={() => this.filterSize(50)}
                        >
                          50
                        </DropdownItem>
                        <DropdownItem
                          tag="div"
                          onClick={() => this.filterSize(100)}
                        >
                          100
                        </DropdownItem>
                        <DropdownItem
                          tag="div"
                          onClick={() => this.filterSize(134)}
                        >
                          134
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                  <div className="d-flex flex-wrap justify-content-between mb-1">
                    <div className="table-input mr-1">
                      <Input
                        placeholder="search..."
                        onChange={e => this.updateSearchQuery(e.target.value)}
                        value={this.state.value}
                      />
                    </div>
                     <div className="export-btn">
                      <Button.Ripple
                        color="primary"
                        onClick={() => this.gridApi.exportDataAsCsv()}
                      >
                        Export as CSV
                      </Button.Ripple>
                    </div>
                  </div>
                </div>
                <ContextLayout.Consumer>
                  {context => (
                    <AgGridReact
                      gridOptions={{}}
                      rowSelection="multiple"
                      defaultColDef={defaultColDef}
                      columnDefs={columnDefs}
                      rowData={rowData}
                      onGridReady={this.onGridReady}
                      colResizeDefault={"shift"}
                      animateRows={true}
                      floatingFilter={true}
                      pagination={true}
                      paginationPageSize={this.state.paginationPageSize}
                      pivotPanelShow="always"
                      enableRtl={context.state.direction === "rtl"}
                    />
                  )}
                </ContextLayout.Consumer>
              </div>
            )}
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}
export default Deposit;
