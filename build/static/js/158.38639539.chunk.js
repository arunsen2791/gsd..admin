(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[158],{2092:function(e,a,t){"use strict";t.r(a);var r=t(78),n=t.n(r),i=t(132),l=t(9),c=t(10),s=t(12),d=t(11),o=t(0),u=t.n(o),m=t(807),f=t(808),g=t(809),p=t(812),h=t(805),v=t(583),E=t(579),w=t(145),N=t(819),S=t(189),b=t(816),z=t(102),P=t(821),k=t(273),x=(t(820),t(818),function(e){Object(s.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=a.call.apply(a,[this].concat(n))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:150,filter:!0},{headerName:"Specialoffer Title",field:"specialoffer_title",filter:!0,width:200,cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,e.data.specialoffer_title))}},{headerName:"Product Name",field:"product.product_name",filter:!0,width:250,cellRendererFramework:function(e){var a,t;return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,null===(a=e.data)||void 0===a||null===(t=a.user)||void 0===t?void 0:t.product_name))}},{headerName:"SKU No.",field:"product.sku_no",filter:!0,width:220,cellRendererFramework:function(e){var a,t;return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,null===(a=e.data)||void 0===a||null===(t=a.product)||void 0===t?void 0:t.sku_no))}},{headerName:"HSN SEC No.",field:"product.hsn_sac_no",filter:!0,width:220,cellRendererFramework:function(e){var a,t;return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,null===(a=e.data)||void 0===a||null===(t=a.product)||void 0===t?void 0:t.hsn_sac_no))}},{headerName:"Short Description",field:"product.short_desc",filter:!0,width:220,cellRendererFramework:function(e){var a,t;return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,null===(a=e.data)||void 0===a||null===(t=a.product)||void 0===t?void 0:t.short_desc))}},{headerName:"Long Description",field:"product.long_desc",filter:!0,width:220,cellRendererFramework:function(e){var a,t;return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,null===(a=e.data)||void 0===a||null===(t=a.product)||void 0===t?void 0:t.long_desc))}},{headerName:"Prduct Qty",field:"product_qty",filter:!0,width:200,cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,e.data.product_qty))}},{headerName:"Rate",field:"rate",filter:!0,width:200,cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,e.data.rate))}},{headerName:"Sort Order",field:"sortorder",filter:!0,width:200,cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,e.data.sortorder))}},{headerName:"Offer Image",field:"offer_img",filter:!1,width:200,setColumnVisible:!1,cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},e.data.offer_img.map((function(e){return u.a.createElement("img",{className:" rounded-circle  mr-3",src:e,alt:"user avatar",height:"40",width:"40"})})))}},{headerName:"Status",field:"status",filter:!0,width:150,cellRendererFramework:function(e){return"Deliver"===e.value?u.a.createElement("div",{className:"badge badge-pill badge-success"},e.data.status):"Pending"===e.value?u.a.createElement("div",{className:"badge badge-pill badge-primary"},e.data.status):"Cancel"===e.value?u.a.createElement("div",{className:"badge badge-pill badge-danger"},e.data.status):"Returned"===e.value?u.a.createElement("div",{className:"badge badge-pill badge-warning"},e.data.status):null}}]},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(n.a.mark((function e(){var a=this;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("/cancel_order").then((function(e){var t=e.data.data;a.setState({rowData:t})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,r=a.columnDefs,n=a.defaultColDef;return u.a.createElement(m.a,{className:"app-user-list"},u.a.createElement(f.a,{sm:"12"}),u.a.createElement(f.a,{sm:"12"},u.a.createElement(g.a,null,u.a.createElement(m.a,{className:"m-2"},u.a.createElement(f.a,null,u.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Offer By Brand List"))),u.a.createElement(p.a,null,null===this.state.rowData?null:u.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},u.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},u.a.createElement("div",{className:"mb-1"},u.a.createElement(h.a,{className:"p-1 ag-dropdown"},u.a.createElement(v.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,u.a.createElement(k.a,{className:"ml-50",size:15})),u.a.createElement(E.a,{right:!0},u.a.createElement(w.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),u.a.createElement(w.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),u.a.createElement(w.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),u.a.createElement(w.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),u.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},u.a.createElement("div",{className:"table-input mr-1"},u.a.createElement(N.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),u.a.createElement("div",{className:"export-btn"},u.a.createElement(S.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),u.a.createElement(z.a.Consumer,null,(function(a){return u.a.createElement(P.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:n,columnDefs:r,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})})))))))}}]),t}(u.a.Component));a.default=x},816:function(e,a,t){"use strict";var r=t(43),n=t.n(r).a.create({baseURL:"http://44.205.32.29:8000/admin"});a.a=n},818:function(e,a,t){}}]);
//# sourceMappingURL=158.38639539.chunk.js.map