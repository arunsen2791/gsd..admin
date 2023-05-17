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
import { ChevronDown, Eye, Trash2 } from "react-feather";
import axios from "axios";
import moment from "moment";

import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";

import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";

class Electricity extends React.Component {
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
        headerName: "Transaction ID",
        field: "agent_id",
        width: 175,
        // filter: true,
        cellRendererFramework: (params) => {
          return (
            <div>
             <span>{params.data.agent_id}</span>
            </div>
          );
        },
      },
      {
        headerName: "UserName",
        field: "walletId.customer.firstname",
        width: 175,
        // filter: true,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.walletId?.customer?.firstname} {params.data.walletId?.customer?.lastname} </span>
              
            </div>
          );
        },
      },
      {
        headerName: "UserId",
        field: "walletId.customer.customerId",
        // filter: "true",
        width: 140,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.walletId?.customer?.customerId}</span>
            </div>
          );
        },
      },
      //   {
      //     headerName: "Email",
      //     field: "email",
      //     filter: true,
      //     width: 250,
      //     pinned: window.innerWidth > 992 ? "left" : false,
      //   },
      {
        headerName: "Bill No.",
        field: "account",
        // filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.account}</span>
            </div>
          );
        },
      },
      {
        headerName: "Service",
        field: "service",
        // filter: true,
        width: 125,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.electricity_code.service}</span>
            </div>
          );
        },
      },
      {
        headerName: "HashTag",
        field: "amount",
        // filter: true,
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
        headerName: "Date",
        field: "createdAt",
        // filter: true,
        width: 125,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{moment(params.data.createdAt).format("ll")}</span>
            </div>
          );
        },
      },
     
    
    ],
  };

  componentDidMount() {
    axios.get(`http://44.205.32.29:8000/admin/elec_bill_listadmin`).then((response) => {
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
          breadCrumbTitle="Electricity Recharge List"
          //   breadCrumbParent="Forms & Tables"
          breadCrumbActive="Electricity Recharge List"
        />
        <Card className="overflow-hidden agGrid-card">
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
export default Electricity;
