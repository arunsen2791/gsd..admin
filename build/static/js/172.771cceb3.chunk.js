(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[172],{2073:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return j}));var n=t(44),s=t(9),r=t(10),l=t(12),o=t(11),i=t(0),c=t.n(i),m=t(809),d=t(810),u=t(811),p=t(812),h=t(826),f=t(807),g=t(808),b=t(822),v=t(819),E=t(189),y=t(816),O=t(942),w=t.n(O),j=function(e){Object(l.a)(t,e);var a=Object(o.a)(t);function t(e){var r;return Object(s.a)(this,t),(r=a.call(this,e)).onChangeHandler=function(e){r.setState({selectedFile:e.target.files[0]}),r.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},r.changeHandler1=function(e){r.setState({status:e.target.value})},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault(),y.a.post("/seller_signup",r.state).then((function(e){console.log(e),w()("Successful!","You clicked the button!","success"),r.props.history.push("/app/seller/sellerList")})).catch((function(e){console.log(e)}))},r.state={seller_name:"",email:"",password:"",confirm_password:"",sortorder:"",selectedFile:null,status:""},r}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(m.a,null,c.a.createElement(d.a,null,c.a.createElement(u.a,null,"Create A Seller")),c.a.createElement(p.a,null,c.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},c.a.createElement(f.a,null,c.a.createElement(g.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(b.a,null,"Seller Name"),c.a.createElement(v.a,{required:!0,type:"text",name:"seller_name",placeholder:"Enter Seller Name",value:this.state.seller_name,onChange:this.changeHandler})),c.a.createElement(g.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(b.a,null,"Seller Email"),c.a.createElement(v.a,{required:!0,type:"email",name:"email",placeholder:"Email",value:this.state.email,onChange:this.changeHandler})),c.a.createElement(g.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(b.a,null,"Password:"),c.a.createElement(v.a,{required:!0,type:"password",name:"password",id:"show_hide_password",value:this.state.password,onChange:this.changeHandler,placeholder:"Set Password For User"})),c.a.createElement(g.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(b.a,null,"Confirm Password:"),c.a.createElement(v.a,{required:!0,type:"password",name:"confirm_password",id:"show_hide_password",value:this.state.confirm_password,onChange:this.changeHandler,placeholder:"Set Confirm Password For User"})),c.a.createElement(g.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(b.a,null,"Short Order"),c.a.createElement(v.a,{required:!0,type:"text",name:"sortorder",placeholder:"Enter Sort Order",value:this.state.sortorder,onChange:this.changeHandler})),c.a.createElement(g.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(b.a,{className:"mb-1"},"Status"),c.a.createElement("div",{className:"form-label-group",onChange:function(a){return e.changeHandler1(a)}},c.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),c.a.createElement("span",{style:{marginRight:"20px"}},"Active"),c.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),c.a.createElement("span",{style:{marginRight:"3px"}},"Inactive")))),c.a.createElement(f.a,null,c.a.createElement(g.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(E.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add Seller")))))))}}]),t}(i.Component)},816:function(e,a,t){"use strict";var n=t(43),s=t.n(n).a.create({baseURL:"http://44.205.32.29:8000/admin"});a.a=s},819:function(e,a,t){"use strict";var n=t(5),s=t(6),r=t(15),l=t(17),o=t(0),i=t.n(o),c=t(1),m=t.n(c),d=t(4),u=t.n(d),p=t(3),h={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,l=e.bsSize,o=e.valid,c=e.invalid,m=e.tag,d=e.addon,h=e.plaintext,f=e.innerRef,g=Object(s.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),b=["radio","checkbox"].indexOf(r)>-1,v=new RegExp("\\D","g"),E=m||("select"===r||"textarea"===r?r:"input"),y="form-control";h?(y+="-plaintext",E=m||"input"):"file"===r?y+="-file":"range"===r?y+="-range":b&&(y=d?null:"form-check-input"),g.size&&v.test(g.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=g.size,delete g.size);var O=Object(p.mapToCssModules)(u()(a,c&&"is-invalid",o&&"is-valid",!!l&&"form-control-"+l,y),t);return("input"===E||m&&"function"===typeof m)&&(g.type=r),g.children&&!h&&"select"!==r&&"string"===typeof E&&"select"!==E&&(Object(p.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),i.a.createElement(E,Object(n.a)({},g,{ref:f,className:O,"aria-invalid":c}))},a}(i.a.Component);f.propTypes=h,f.defaultProps={type:"text"},a.a=f},822:function(e,a,t){"use strict";var n=t(5),s=t(6),r=t(0),l=t.n(r),o=t(1),i=t.n(o),c=t(4),m=t.n(c),d=t(3),u=i.a.oneOfType([i.a.number,i.a.string]),p=i.a.oneOfType([i.a.bool,i.a.string,i.a.number,i.a.shape({size:u,order:u,offset:u})]),h={children:i.a.node,hidden:i.a.bool,check:i.a.bool,size:i.a.string,for:i.a.string,tag:d.tagPropType,className:i.a.string,cssModule:i.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:i.a.array},f={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},b=function(e){var a=e.className,t=e.cssModule,r=e.hidden,o=e.widths,i=e.tag,c=e.check,u=e.size,p=e.for,h=Object(s.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),f=[];o.forEach((function(a,n){var s=e[a];if(delete h[a],s||""===s){var r,l=!n;if(Object(d.isObject)(s)){var o,i=l?"-":"-"+a+"-";r=g(l,a,s.size),f.push(Object(d.mapToCssModules)(m()(((o={})[r]=s.size||""===s.size,o["order"+i+s.order]=s.order||0===s.order,o["offset"+i+s.offset]=s.offset||0===s.offset,o))),t)}else r=g(l,a,s),f.push(r)}}));var b=Object(d.mapToCssModules)(m()(a,!!r&&"sr-only",!!c&&"form-check-label",!!u&&"col-form-label-"+u,f,!!f.length&&"col-form-label"),t);return l.a.createElement(i,Object(n.a)({htmlFor:p},h,{className:b}))};b.propTypes=h,b.defaultProps=f,a.a=b}}]);
//# sourceMappingURL=172.771cceb3.chunk.js.map