(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[138],{1028:function(e,a,t){},1280:function(e,a,t){"use strict";t.r(a);var l=t(9),n=t(10),c=t(12),r=t(11),m=t(0),o=t.n(m),s=t(807),u=t(808),i=t(101),d=t(809),E=t(810),b=t(811),p=t(812),h=t(831),f=t(819),v=t(799),g=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,null,o.a.createElement(E.a,null,o.a.createElement(b.a,null,"Reactstrap Select")),o.a.createElement(p.a,null,o.a.createElement(s.a,null,o.a.createElement(u.a,{md:"6",sm:"12",className:"my-1"},o.a.createElement(h.a,null,o.a.createElement("h5",{className:"text-bold-600"},"Basic Select"),o.a.createElement(f.a,{type:"select",name:"select",id:"exampleSelect"},o.a.createElement("option",null,"Pulp Fiction"),o.a.createElement("option",null,"Nightcrawler"),o.a.createElement("option",null,"Donnie Darko")))),o.a.createElement(u.a,{md:"6",sm:"12",className:"my-1"},o.a.createElement(h.a,null,o.a.createElement("h5",{className:"text-bold-600"},"Custom Select"),o.a.createElement(v.a,{type:"select",name:"select",id:"exampleSelectCustom"},o.a.createElement("option",null,"Pulp Fiction"),o.a.createElement("option",null,"Nightcrawler"),o.a.createElement("option",null,"Donnie Darko")))),o.a.createElement(u.a,{md:"6",sm:"12",className:"my-1"},o.a.createElement(h.a,null,o.a.createElement("h5",{className:"text-bold-600"},"Multi Select"),o.a.createElement(f.a,{type:"select",name:"select",id:"exampleSelectMulti",multiple:!0},o.a.createElement("option",null,"Square"),o.a.createElement("option",null,"Rectangle"),o.a.createElement("option",null,"Circle"),o.a.createElement("option",null,"Triangle"),o.a.createElement("option",null,"Pentagon")))),o.a.createElement(u.a,{md:"6",sm:"12",className:"my-1"},o.a.createElement(h.a,null,o.a.createElement("h5",{className:"text-bold-600"},"Disabled Select"),o.a.createElement(f.a,{type:"select",name:"select",id:"exampleSelectDisabled",disabled:!0},o.a.createElement("option",null,"Pulp Fiction"),o.a.createElement("option",null,"Nightcrawler"),o.a.createElement("option",null,"Donnie Darko")))))))}}]),t}(o.a.Component),N=t(948),x=[{value:"ocean",label:"Ocean"},{value:"blue",label:"Blue"},{value:"purple",label:"Purple"},{value:"red",label:"Red"},{value:"orange",label:"Orange"}],y=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,null,o.a.createElement(E.a,null,o.a.createElement(b.a,null,"React Select")),o.a.createElement(p.a,null,o.a.createElement("p",null,"React Select is a flexible and beautiful Select Input control for ReactJS with multiselect, autocomplete, async and creatable support. You can read it's documentation from "," ",o.a.createElement("a",{className:"my-50",target:"_blank",href:"https://react-select.com/home",rel:"noopener noreferrer"},"here"),"."),o.a.createElement(s.a,null,o.a.createElement(u.a,{md:"6",sm:"12"},o.a.createElement("h5",{className:"my-1 text-bold-600"},"Basic"),o.a.createElement(N.a,{className:"React",classNamePrefix:"select",defaultValue:x[0],name:"color",options:x})),o.a.createElement(u.a,{md:"6",sm:"12"},o.a.createElement("h5",{className:"my-1 text-bold-600"},"Clearable"),o.a.createElement(N.a,{className:"React",classNamePrefix:"select",defaultValue:x[1],name:"clear",options:x,isClearable:!0})),o.a.createElement(u.a,{md:"6",sm:"12"},o.a.createElement("h5",{className:"my-1 text-bold-600"},"Loading"),o.a.createElement(N.a,{className:"React",classNamePrefix:"select",defaultValue:x[2],name:"loading",options:x,isLoading:!0})),o.a.createElement(u.a,{md:"6",sm:"12"},o.a.createElement("h5",{className:"my-1 text-bold-600"},"Disabled"),o.a.createElement(N.a,{className:"React",classNamePrefix:"select",defaultValue:x[3],name:"disabled",options:x,isDisabled:!0})))))}}]),t}(o.a.Component),O=t(2),j=t(1170),C=t(1171),S=t(1172),F=t.n(S),P=[{value:"ocean",label:"Ocean",color:"#00B8D9",isFixed:!0},{value:"blue",label:"Blue",color:"#0052CC",isFixed:!0},{value:"purple",label:"Purple",color:"#5243AA",isFixed:!0},{value:"red",label:"Red",color:"#FF5630",isFixed:!1},{value:"orange",label:"Orange",color:"#FF8B00",isFixed:!1},{value:"yellow",label:"Yellow",color:"#FFC400",isFixed:!1}],R=[{label:"Ice Creams",options:[{value:"vanilla",label:"Vanilla"},{value:"Dark Chocolate",label:"Dark Chocolate"},{value:"chocolate",label:"Chocolate"},{value:"strawberry",label:"Strawberry"},{value:"salted-caramel",label:"Salted Caramel"}]},{label:"Snacks",options:[{value:"Pizza",label:"Pizza"},{value:"Burger",label:"Burger"},{value:"Pasta",label:"Pasta"},{value:"Pretzel",label:"Pretzel"},{value:"Popcorn",label:"Popcorn"}]}],k=Object(j.a)(),w={control:function(e){return Object(O.a)(Object(O.a)({},e),{},{backgroundColor:"white"})},option:function(e,a){var t=a.data,l=a.isDisabled,n=a.isFocused,c=a.isSelected,r=F()(t.color);return Object(O.a)(Object(O.a)({},e),{},{backgroundColor:l?null:c?t.color:n?r.alpha(.1).css():null,color:l?"#ccc":c?F.a.contrast(r,"white")>2?"white":"black":t.color,cursor:l?"not-allowed":"default",":active":Object(O.a)(Object(O.a)({},e[":active"]),{},{backgroundColor:!l&&(c?t.color:r.alpha(.3).css())})})},multiValue:function(e,a){var t=a.data,l=F()(t.color);return Object(O.a)(Object(O.a)({},e),{},{backgroundColor:l.alpha(.1).css()})},multiValueLabel:function(e,a){var t=a.data;return Object(O.a)(Object(O.a)({},e),{},{color:t.color})},multiValueRemove:function(e,a){var t=a.data;return Object(O.a)(Object(O.a)({},e),{},{color:t.color,":hover":{backgroundColor:t.color,color:"white"}})}},D={multiValue:function(e,a){return a.data.isFixed?Object(O.a)(Object(O.a)({},e),{},{opacity:"0.5"}):e},multiValueLabel:function(e,a){return a.data.isFixed?Object(O.a)(Object(O.a)({},e),{},{color:"#626262",paddingRight:6}):e},multiValueRemove:function(e,a){return a.data.isFixed?Object(O.a)(Object(O.a)({},e),{},{display:"none"}):e}},V=function(e){if(e.length>0)return e.filter((function(e){return e.isFixed})).concat(e.filter((function(e){return!e.isFixed})))},M=function(e){return o.a.createElement("div",{className:"d-flex justify-content-between align-center"},o.a.createElement("strong",null," ",o.a.createElement("span",null,e.label)),o.a.createElement("span",null,e.options.length))},B=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={value:V([P[0],P[1],P[3]])},e.handleChange=function(e){P.concat(e)},e.handleInputChange=function(){console.group("Input Changed"),console.groupEnd()},e.fixedOnChange=function(a,t){var l=t.action,n=t.removedValue;switch(l){case"remove-value":case"pop-value":if(n.isFixed)return;break;case"clear":a=P.filter((function(e){return e.isFixed}));break;default:return}a=V(a),e.setState({value:a})},e}return Object(n.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,null,o.a.createElement(E.a,null,o.a.createElement(b.a,null,"Options")),o.a.createElement(p.a,null,o.a.createElement(s.a,null,o.a.createElement(u.a,{md:"6",sm:"12"},o.a.createElement("h5",{className:"text-bold-600 my-1"},"Multi Select"),o.a.createElement(N.a,{defaultValue:[P[2],P[3]],isMulti:!0,name:"colors",options:P,className:"React",classNamePrefix:"select"})),o.a.createElement(u.a,{md:"6",sm:"12"},o.a.createElement("h5",{className:"text-bold-600 my-1"},"Grouped Select"),o.a.createElement(N.a,{defaultValue:P[1],options:R,formatGroupLabel:M,className:"React",classNamePrefix:"select"})),o.a.createElement(u.a,{md:"6",sm:"12"},o.a.createElement("h5",{className:"text-bold-600 my-1"},"Animated Select"),o.a.createElement(N.a,{closeMenuOnSelect:!1,components:k,defaultValue:[P[4],P[5]],isMulti:!0,options:P,className:"React",classNamePrefix:"select"})),o.a.createElement(u.a,{md:"6",sm:"12"},o.a.createElement("h5",{className:"text-bold-600 my-1"},"Colored Select"),o.a.createElement(N.a,{closeMenuOnSelect:!1,defaultValue:[P[0],P[1]],isMulti:!0,options:P,styles:w,className:"React",classNamePrefix:"select"})),o.a.createElement(u.a,{md:"6",sm:"12"},o.a.createElement("h5",{className:"text-bold-600 my-1"},"Creatable Select"),o.a.createElement(C.a,{isClearable:!0,options:P,className:"React",classNamePrefix:"select"})),o.a.createElement(u.a,{md:"6",sm:"12"},o.a.createElement("h5",{className:"text-bold-600 my-1"},"Fixed Options Select"),o.a.createElement(N.a,{value:this.state.value,isMulti:!0,styles:D,isClearable:this.state.value.some((function(e){return!e.isFixed})),name:"colors",className:"React",classNamePrefix:"select",onChange:this.fixedOnChange,options:P})))))}}]),t}(o.a.Component),U=(t(1028),function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{breadCrumbTitle:"Select",breadCrumbParent:"Form Elements",breadCrumbActive:"Select"}),o.a.createElement(s.a,null,o.a.createElement(u.a,{sm:"12"},o.a.createElement(y,null)),o.a.createElement(u.a,{sm:"12"},o.a.createElement(B,null)),o.a.createElement(u.a,{sm:"12"},o.a.createElement(g,null))))}}]),t}(o.a.Component));a.default=U},2150:function(e,a,t){"use strict";t.r(a),t.d(a,"DepositEdForm",(function(){return v}));var l=t(9),n=t(10),c=t(12),r=t(11),m=t(0),o=t.n(m),s=t(809),u=t(807),i=t(808),d=t(189),E=t(812),b=t(826),p=t(831),h=t(822),f=t(819),v=(t(18),t(816),t(876),t(1280),function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(s.a,null,o.a.createElement(u.a,{className:"m-2"},o.a.createElement(i.a,null,o.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Deposit")),o.a.createElement(i.a,null,o.a.createElement(d.a,{className:" btn btn-danger float-right"},"Back"))),o.a.createElement(E.a,null,o.a.createElement(b.a,{className:"m-1"},o.a.createElement(u.a,{className:"mb-2"},o.a.createElement(i.a,{lg:"6",md:"6"},o.a.createElement(p.a,null,o.a.createElement(h.a,null,"User Id"),o.a.createElement(f.a,{type:"number",placeholder:"User Id"}))),o.a.createElement(i.a,{lg:"6",md:"6"},o.a.createElement(p.a,null,o.a.createElement(h.a,null,"User Name"),o.a.createElement(f.a,{type:"text",placeholder:"User Name"}))),o.a.createElement(i.a,{lg:"6",md:"6"},o.a.createElement(p.a,null,o.a.createElement(h.a,null,"User Email"),o.a.createElement(f.a,{type:"email",placeholder:"User Email"}))),o.a.createElement(i.a,{lg:"6",md:"6"},o.a.createElement(p.a,null,o.a.createElement(h.a,null,"Phone Number"),o.a.createElement(f.a,{type:"number",placeholder:"Phone Number"}))),o.a.createElement(i.a,{lg:"6",md:"6"},o.a.createElement(p.a,null,o.a.createElement(h.a,null,"HashTag (Amount)"),o.a.createElement(f.a,{type:"number",placeholder:"HashTag"}))),o.a.createElement(i.a,{lg:"6",md:"6"},o.a.createElement(p.a,null,o.a.createElement(h.a,null,"Payment Methode"),o.a.createElement(f.a,{type:"select",name:"select",id:"exampleSelect"},o.a.createElement("option",null,"Choose Methode"),o.a.createElement("option",null,"USDT"),o.a.createElement("option",null,"TRX")))),o.a.createElement(i.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},o.a.createElement(p.a,null,o.a.createElement(h.a,{className:"mb-1"},"Status"),o.a.createElement("div",{className:"form-label-group"},o.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),o.a.createElement("span",{style:{marginRight:"20px"}},"Active"),o.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),o.a.createElement("span",{style:{marginRight:"3px"}},"Inactive"))))),o.a.createElement(u.a,null,o.a.createElement(d.a.Ripple,{color:"success",type:"submit",className:"mr-1 mb-1"},"Update"))))))}}]),t}(m.Component));a.default=v},816:function(e,a,t){"use strict";var l=t(43),n=t.n(l).a.create({baseURL:"http://44.205.32.29:8000/admin"});a.a=n}}]);
//# sourceMappingURL=138.ff8184b0.chunk.js.map