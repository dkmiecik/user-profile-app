(this["webpackJsonpuser-profile-app"]=this["webpackJsonpuser-profile-app"]||[]).push([[0],{39:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var a,i=t(0),r=t.n(i),o=t(22),l=t.n(o),c=t(14),d=t(4),m=t(2),s=t(3),u=t(9),b=t(1),p=localStorage.getItem("profile")?JSON.parse(null!==(a=localStorage.getItem("profile"))&&void 0!==a?a:""):{},f=r.a.createContext({state:p,dispatch:function(){return null}});function A(){var e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"setProfile":return localStorage.setItem("profile",JSON.stringify(e.state)),e.state;default:throw new Error("Unhandled action type: ".concat(e.type))}}function j(e){var n=e.children,t=r.a.useReducer(A,p),a=Object(u.a)(t,2),i={state:a[0],dispatch:a[1]};return Object(b.jsx)(f.Provider,{value:i,children:n})}function h(){var e=r.a.useContext(f);if(void 0===e)throw new Error("useProfile must be used within a ProfileProvider");return e}var x,g,O,v,B,w,Q,F,y,U,E,C,k,R,S,K,V,N,P,L,T,q,D,J,I,W,Z,G,X,H=function(e){var n=e.replace(/([A-Z])/g," $1");return n.charAt(0).toUpperCase()+n.slice(1)},z=function(e){var n={};return e.forEach((function(e,t){return n[t]=e})),n},Y="data:image/png;base64,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",M=s.a.img(x||(x=Object(m.a)(["\n  width: 130px;\n  height: 130px;\n  cursor: pointer;\n  object-fit: fill;\n  margin-right: 20px;\n  margin-bottom: 20px;\n"]))),$=s.a.section(g||(g=Object(m.a)(["\n  width: 100%;\n  max-width: 700px;\n  margin: 20px auto 50px;\n  display: flex;\n  flex-direction: column;\n"]))),_="768px",ee="#ea650d",ne="#e64415",te="#ffffff",ae="#bdbdbd",ie="#f2f2f2",re="#767676",oe="#414141",le=function(){var e=h().state;return Object(b.jsxs)($,{children:[Object(b.jsx)("h2",{children:"Profile"}),Object(b.jsxs)(ce,{children:[Object(b.jsx)(M,{src:e.avatar&&e.avatar.length?e.avatar:Y,alt:"Avatar"}),Object(b.jsx)(de,{children:Object.keys(e).filter((function(e){return"avatar"!==e})).map((function(n){return Object(b.jsxs)(me,{children:[Object(b.jsx)(se,{children:H(n)}),Object(b.jsx)(ue,{children:e[n]})]},n)}))})]})]})},ce=s.a.div(O||(O=Object(m.a)(["\n  width: 100%;\n  display: flex;\n  margin-top: 20px;\n  flex-direction: column;\n  margin-top: 20px;\n  @media only screen and (min-width: ",") {\n    flex-direction: row;\n  }\n"])),_),de=s.a.div(v||(v=Object(m.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"]))),me=s.a.div(B||(B=Object(m.a)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  margin-bottom: 5px;\n"]))),se=s.a.label(w||(w=Object(m.a)(["\n  margin-right: 10px;\n  width: 100px;\n  font-weight: 600;\n  line-height: 22px;\n"]))),ue=s.a.p(Q||(Q=Object(m.a)(["\n  margin: 0;\n  line-height: 22px;\n"]))),be=t(18),pe=t.n(be),fe=t(26),Ae=function(e){return new Promise((function(n,t){e||t(new Error("Provided data was incorrect!")),setTimeout((function(){n(e)}),2e3)}))},je=t(11),he=s.a.div(F||(F=Object(m.a)(["\n  width: 100%;\n  position: relative;\n  margin-bottom: 20px;\n  display: flex;\n  border: 1px solid ",";\n  border-radius: 3px;\n  background-color: ",";\n\n  ","\n"])),ae,te,(function(e){return e.isValid&&"\n    border-color: red;\n  "})),xe=s.a.input(y||(y=Object(m.a)(["\n  border: 0;\n  color: ",";\n  background-color: transparent;\n  outline: 0;\n  width: 100%;\n  line-height: 1.25;\n  padding: 30px 16px 10px 16px;\n\n  &::-webkit-input-placeholder {\n    opacity: 0;\n    transition: inherit;\n  }\n"])),oe),ge=s.a.span(U||(U=Object(m.a)(["\n  color: ",";\n  margin-left: 2px;\n"])),ee),Oe=s.a.p(E||(E=Object(m.a)(["\n  position: absolute;\n  bottom: -15px;\n  width: 100%;\n  font-size: 0.6rem;\n  color: red;\n"]))),ve=s.a.div(C||(C=Object(m.a)(["\n  position: relative;\n  margin-right: 20px;\n"]))),Be=s.a.input(k||(k=Object(m.a)(["\n  display: none;\n"]))),we=s.a.label(R||(R=Object(m.a)(["\n  position: absolute;\n  font-size: 1rem;\n  padding: 20px 16px;\n  margin-bottom: 0;\n  color: ",";\n  transition: all 0.1s ease-in-out;\n  display: inline-block;\n\n  ",":focus ~ & {\n    padding-top: 10px;\n    padding-bottom: 0;\n    font-size: 75%;\n    line-height: 16px;\n    color: ",";\n  }\n  ",":not(:placeholder-shown) ~ & {\n    padding-top: 10px;\n    padding-bottom: 0;\n    font-size: 75%;\n    line-height: 16px;\n    color: ",";\n  }\n"])),re,xe,re,xe,re),Qe=function(e){var n=r.a.useRef(null),t=r.a.useRef(null),a=r.a.useState(!1),i=Object(u.a)(a,2),o=i[0],l=i[1],c=r.a.useState(void 0),d=Object(u.a)(c,2),m=d[0],s=d[1],p=r.a.useCallback((function(e){var a=e.currentTarget;a.files&&(a.files[0].size<2097152?(l(!1),function(e,n){if(e){var t=new FileReader;t.readAsDataURL(e),t.onload=function(){n(t.result)},t.onerror=function(e){console.log("Error: ",e)}}}(a.files[0],(function(e){n&&n.current&&e&&(n.current.value=e,s(e))}))):(l(!0),t.current.value="",n.current.value=""))}),[]),f=r.a.useCallback((function(){t.current.click()}),[]);return Object(b.jsxs)(ve,{children:[Object(b.jsx)(M,{src:null!==m&&void 0!==m?m:Y,alt:"User empty avatar",onClick:f}),Object(b.jsx)(Be,{type:"file",accept:"image/*",autoComplete:"none",onChange:p,ref:t}),Object(b.jsx)("input",{id:e.id,name:e.name,defaultValue:e.defaultValue,type:"hidden",ref:n}),o&&Object(b.jsx)("p",{children:"File size is limited to 2MB"})]})},Fe=function(e){return Object(b.jsxs)(he,{isValid:e.isValid,children:[Object(b.jsx)(xe,Object(je.a)(Object(je.a)({},e),{},{defaultValue:e.defaultValue,placeholder:e.label,autoComplete:"none",className:e.isValid?"invalid":""})),Object(b.jsxs)(we,{htmlFor:e.id,children:[e.label,e.required&&Object(b.jsx)(ge,{children:"*"})]}),e.isValid&&Object(b.jsx)(Oe,{children:"Invalid value!"})]})},ye=function(e){return Object(b.jsx)(b.Fragment,{children:"file"===e.type?Object(b.jsx)(Qe,Object(je.a)({},e)):Object(b.jsx)(Fe,Object(je.a)({},e))})},Ue=s.a.form(S||(S=Object(m.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"]))),Ee=s.a.div(K||(K=Object(m.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-top: 20px;\n  @media only screen and (min-width: ",") {\n    flex-direction: row;\n  }\n"])),_),Ce=s.a.div(V||(V=Object(m.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"]))),ke=s.a.button(N||(N=Object(m.a)(["\n  width: 100%;\n  max-width: 204px;\n  cursor: pointer;\n  background: ",";\n  border-color: ",";\n  padding: 0.667em 1.5rem;\n  display: inline-block;\n  text-align: center;\n  vertical-align: middle;\n  font-size: 18px;\n  line-height: 22px;\n  font-weight: 700;\n  color: ",";\n  border-radius: 3px;\n  text-decoration: none;\n  border: 1px solid transparent;\n  margin-left: 10px;\n  &:hover {\n    background: ",";\n    border-color: ",";\n    box-shadow: 0 5px 20px rgba(240, 128, 0, 0.15);\n  }\n  &:disabled {\n    box-shadow: none;\n    background-color: ",";\n    color: ",";\n    border-color: ",";\n  }\n"])),ee,ee,te,ne,ne,ie,ae,ae),Re=s.a.button(P||(P=Object(m.a)(["\n  width: 100%;\n  max-width: 204px;\n  cursor: pointer;\n  background: ",";\n  padding: 0.667em 1.5rem;\n  display: inline-block;\n  text-align: center;\n  vertical-align: middle;\n  font-size: 18px;\n  line-height: 22px;\n  font-weight: 700;\n  color: ",";\n  border-radius: 3px;\n  text-decoration: none;\n  border: 1px solid ",";\n  margin-left: 10px;\n  &:hover {\n    color: ",";\n    background: ",";\n    border-color: ",";\n    box-shadow: 0 5px 20px rgba(240, 128, 0, 0.15);\n  }\n  &:disabled {\n    box-shadow: none;\n    background-color: ",";\n    color: ",";\n    border-color: ",";\n  }\n"])),te,ee,ee,te,ne,ne,ie,ae,ae),Se=s.a.div(L||(L=Object(m.a)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  margin-top: 20px;\n"]))),Ke=Object(s.b)(T||(T=Object(m.a)(["\n0%,\n  100% {\n    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;\n  }\n  12.5% {\n    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n  }\n  25% {\n    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n  }\n  37.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;\n  }\n  50% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;\n  }\n  62.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;\n  }\n  75% {\n    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;\n  }\n  87.5% {\n    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;\n  }\n"]))),Ve=s.a.div(q||(q=Object(m.a)(["\n  color: #317dfc;\n  font-size: 20px;\n  margin: 200px auto;\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  position: relative;\n  text-indent: -9999em;\n  animation: "," 1.3s infinite linear;\n  transform: translateZ(0);\n"])),Ke),Ne=s.a.div(D||(D=Object(m.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 999;\n  background: rgba(0, 0, 0, 0.5);\n"]))),Pe=function(e){var n=e.loading,t=e.definition,a=e.avatar,i=e.handleSubmit,r=e.handleCancel,o=e.initialState,l=e.invalidValues;return Object(b.jsxs)("div",{children:[n&&Object(b.jsx)(Ne,{children:Object(b.jsx)(Ve,{})}),Object(b.jsxs)(Ue,{onSubmit:i,noValidate:!0,children:[Object(b.jsxs)(Ee,{children:[Object(b.jsx)(Qe,{id:a.id,name:a.name,label:a.label,required:a.required}),Object(b.jsx)(Ce,{children:t.map((function(e){return Object(b.jsx)(ye,{id:e.id,name:e.name,label:e.label,type:e.type,required:e.required,defaultValue:o[e.id],isValid:l.includes(e.id)},e.id)}))})]}),Object(b.jsxs)(Se,{children:[Object(b.jsx)(Re,{type:"button",onClick:r,disabled:n,children:"Cancel"}),Object(b.jsx)(ke,{type:"submit",disabled:n,children:"Submit"})]})]})]})},Le=/^([+]\d{1,3}[ ])?\d{2,3}[- ]?\d{3}[- ]?(\d{2}[- ]\d{2}|\d{3})$/g,Te=function(e,n,t){return!!n.test(e)&&(!t.test(e.charAt(0))&&!t.test(e.charAt(e.length-1))&&!/[.]{2}/.test(e))},qe=[{id:"firstName",name:"firstName",label:"First Name",required:!0,type:"text"},{id:"lastName",name:"lastName",label:"Last Name",required:!0,type:"text"},{id:"email",name:"email",label:"Email address",required:!0,type:"email",validator:function(e){return!(!e||e.length<6||e.length>80)&&function(e){if(!e)return!1;var n=e.split("@"),t=Object(u.a)(n,3),a=t[0],i=t[1],r=t[2];if(!i||!a||r)return!1;if(!Te(a,/^[A-Za-z0-9+_.-]+$/,/[+_.-]/))return!1;if(!Te(i,/^[A-Za-z0-9.-]+$/,/[.-]/))return!1;if(!/[.]/.test(i))return!1;var o=i.substr(i.lastIndexOf(".")+1);return!!/^[A-Za-z]{2,}$/.test(o)}(e)}},{id:"phone",name:"phone",label:"Phone number",required:!0,type:"tel",validator:function(e){return!!e&&new RegExp(Le).test(e)}},{id:"birthday",name:"birthday",label:"Birthday date",required:!0,type:"date"},{id:"about",name:"about",label:"About",required:!1,type:"text"}],De={id:"avatar",name:"avatar",label:"Avatar",required:!0,type:"file"},Je=function(){var e=Object(d.f)(),n=r.a.useState(!1),t=Object(u.a)(n,2),a=t[0],i=t[1],o=r.a.useState([]),l=Object(u.a)(o,2),c=l[0],m=l[1],s=h(),p=s.state,f=s.dispatch,A=function(e){return Object.keys(e).filter((function(n){var t=qe.find((function(e){return e.name===n}));if(t){if(!e[n]||!e[n].length)return t.required;if(t.validator)return!t.validator(e[n])}return!1}))},j=r.a.useCallback(function(){var n=Object(fe.a)(pe.a.mark((function n(t){var a,r,o,l;return pe.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),i(!0),a=new FormData(t.currentTarget),r=z(a),(o=A(r)).length){n.next=14;break}return n.next=8,Ae(r);case 8:l=n.sent,f({type:"setProfile",state:l}),i(!1),e.push("/profile"),n.next=16;break;case 14:m(o),i(!1);case 16:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),[e,f]),x=r.a.useCallback((function(){e.push("/profile")}),[e]);return Object(b.jsxs)($,{children:[Object(b.jsx)("h2",{children:"Profile edition"}),Object(b.jsx)(Pe,{definition:qe,avatar:De,handleSubmit:j,handleCancel:x,loading:a,initialState:p,invalidValues:c})]})},Ie=s.a.header(J||(J=Object(m.a)(["\n  background-color: ",";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  padding: 5px 0;\n  border-bottom: 1px solid ",";\n"])),ie,ee),We=function(){return Object(b.jsxs)(Ze,{children:[Object(b.jsx)(Ge,{to:"/profile",activeStyle:{fontWeight:"bold",color:ne},children:"Profile"}),Object(b.jsx)(Ge,{to:"/form",activeStyle:{fontWeight:"bold",color:ne},children:"Form"})]})},Ze=s.a.nav(I||(I=Object(m.a)(["\n  margin-top: 10px;\n"]))),Ge=Object(s.a)(c.b)(W||(W=Object(m.a)(["\n  color: ",";\n  margin-left: 10px;\n  outline: none;\n  &:focus {\n    outline: none;\n  }\n  &:hover {\n    color: ",";\n  }\n"])),re,ee),Xe=s.a.main(Z||(Z=Object(m.a)(["\n  width: 100%;\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 20px;\n"]))),He=function(){return Object(b.jsx)(ze,{children:Object(b.jsxs)(Ye,{href:"https://gorzko.dev",target:"_blank",rel:"noopener noreferrer",children:["Powered by"," Damian Kmiecik "]})})},ze=s.a.footer(G||(G=Object(m.a)(["\n  width: 100%;\n  height: 100px;\n  border-top: 1px solid ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])),ee),Ye=s.a.a(X||(X=Object(m.a)(["\n  color: ",";\n  &:hover {\n    color: ",";\n  }\n"])),ee,ne),Me=function(){return Object(b.jsx)(c.a,{children:Object(b.jsxs)("div",{children:[Object(b.jsxs)(Ie,{children:[Object(b.jsx)("h1",{children:"User Profile App"}),Object(b.jsx)(We,{})]}),Object(b.jsx)(Xe,{children:Object(b.jsxs)(j,{children:[Object(b.jsx)(d.b,{exact:!0,path:"/",render:function(){return Object(b.jsx)(d.a,{to:"/profile"})}}),Object(b.jsx)(d.b,{path:"/profile",component:le}),Object(b.jsx)(d.b,{path:"/form",component:Je})]})}),Object(b.jsx)(He,{})]})})},$e=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,41)).then((function(n){var t=n.getCLS,a=n.getFID,i=n.getFCP,r=n.getLCP,o=n.getTTFB;t(e),a(e),i(e),r(e),o(e)}))};t(39);l.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(Me,{})}),document.getElementById("root")),$e()}},[[40,1,2]]]);
//# sourceMappingURL=main.a0b17a03.chunk.js.map