(this.webpackJsonpclient_app=this.webpackJsonpclient_app||[]).push([[0],{15:function(e){e.exports=JSON.parse('{"root_url":"https://www.sigurnostnainternetu.com:8443"}')},35:function(e,t,n){},36:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(0),s=n.n(a),c=n(20),i=n.n(c),o=(n(35),n(6)),u=(n(36),n(13)),l=function(e){return Object(r.jsx)("div",{className:"links",children:Object(r.jsxs)("ul",{children:[Object(r.jsxs)("li",{children:[Object(r.jsx)("i",{className:"fas fa-home"})," ",Object(r.jsx)(u.b,{to:"/",children:"Home"})]}),e.currentUser&&e.currentUser.token?"":Object(r.jsxs)("li",{children:[Object(r.jsx)("i",{className:"fas fa-sign-in-alt"})," ",Object(r.jsx)(u.b,{to:"/login",children:"Login"})]}),e.currentUser&&e.currentUser.token?"":Object(r.jsxs)("li",{children:[Object(r.jsx)("i",{className:"fas fa-user"})," ",Object(r.jsx)(u.b,{to:"/register",children:"Registration"})]}),e.currentUser&&e.currentUser.token?Object(r.jsxs)("li",{children:[Object(r.jsx)("i",{className:"fas fa-comments"})," ",Object(r.jsx)(u.b,{to:"/chat",children:"Chat"})]}):"",e.currentUser&&e.currentUser.token?Object(r.jsxs)("li",{children:[Object(r.jsx)("i",{className:"fas fa-stamp"})," ",Object(r.jsx)(u.b,{to:"/certificate-store",children:"Certificate store"})]}):"",e.currentUser&&e.currentUser.token?Object(r.jsxs)("li",{children:[Object(r.jsx)("i",{className:"fas fa-sign-out-alt"})," ",Object(r.jsx)(u.b,{to:"/logout",children:"Logout"})]}):""]})})},j=n(4),d=n.n(j),b=n(10),h=n(51),O=n(52),f=n(53),x=n(54),m=n(55),p=n(56),g=n(15),v=(n(43),n(3)),w=function(e){var t=Object(a.useState)({}),n=Object(o.a)(t,2),s=n[0],c=n[1],i=Object(a.useState)(""),u=Object(o.a)(i,2),l=u[0],j=u[1],w=Object(v.g)(),k=function(){var t=Object(b.a)(d.a.mark((function t(n){var r,a,c,i,u,l,b,h,O,f,x,m,p,v;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(n.preventDefault(),r=new FormData,a=0,c=Object.entries(s);a<c.length;a++)i=Object(o.a)(c[a],2),u=i[0],l=i[1],r.append(u,l);return t.prev=3,t.next=6,fetch("".concat(g.root_url,"/user/login_part_one"),{mode:"cors",method:"POST",body:r});case 6:if(200!==(b=t.sent).status){t.next=38;break}return t.next=10,b.json();case 10:if(!(h=t.sent)||200!==h.status){t.next=35;break}O=!0;case 13:if(!O){t.next=33;break}if(null!=(f=prompt("Token is sent on your email.\nPlease enter.",""))){t.next=17;break}return t.abrupt("continue",13);case 17:return t.next=19,fetch("".concat(g.root_url,"/user/login_part_two"),{mode:"cors",method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({token:f})});case 19:if(200!==(x=t.sent).status){t.next=27;break}return t.next=23,x.json();case 23:(m=t.sent)&&200===m.status?(e.setCurrentUser({username:m.data.username,token:m.data.token}),O=!1,w.push("/chat")):window.alert(m.message),t.next=31;break;case 27:return t.next=29,x.json();case 29:p=t.sent,O=window.confirm(p.message+"\nDo you want to enter token again?");case 31:t.next=13;break;case 33:t.next=36;break;case 35:window.alert(h.message);case 36:t.next=42;break;case 38:return t.next=40,b.json();case 40:v=t.sent,j(v.message);case 42:t.next=47;break;case 44:t.prev=44,t.t0=t.catch(3),j(t.t0.message);case 47:case"end":return t.stop()}}),t,null,[[3,44]])})));return function(e){return t.apply(this,arguments)}}(),N=function(e){var t=s;"certificate"===e.target.id?t[e.target.name]=e.target.files[0]:t[e.target.name]=e.target.value,c(t)};return Object(r.jsxs)("div",{className:"login-main",children:[Object(r.jsx)("h1",{children:"Login"}),Object(r.jsx)("hr",{}),Object(r.jsx)("div",{className:"login-container",children:Object(r.jsxs)(h.a,{encType:"multipart/form-data",method:"POST",onSubmit:k,children:[Object(r.jsxs)(O.a,{children:[Object(r.jsx)(f.a,{for:"username",children:"Username: "}),Object(r.jsx)(x.a,{type:"username",onChange:N,name:"username",id:"username",placeholder:"Enter username",value:e.username})]}),Object(r.jsxs)(O.a,{children:[Object(r.jsx)(f.a,{for:"password",children:"Password: "}),Object(r.jsx)(x.a,{type:"password",onChange:N,name:"password",id:"password",placeholder:"Enter password"})]}),Object(r.jsxs)(O.a,{children:[Object(r.jsx)(f.a,{for:"certificate",children:"Client certificate: "}),Object(r.jsx)(x.a,{type:"file",onChange:N,name:"certificate",id:"certificate",placeholder:"Enter certificate"})]}),Object(r.jsx)(O.a,{children:Object(r.jsx)(m.a,{type:"submit",children:"login user"})}),e.username?Object(r.jsx)(O.a,{children:Object(r.jsx)(f.a,{className:"label",style:{color:"green"},children:e.username})}):Object(r.jsx)(O.a,{children:Object(r.jsx)(f.a,{className:"label",children:l})}),e.logout?Object(r.jsx)(O.a,{children:Object(r.jsx)(f.a,{className:"label",style:{color:"green"},children:"You successfully logged out"})}):"",Object(r.jsx)(O.a,{children:Object(r.jsx)(p.a,{className:"register-link",onClick:function(e){w.push("/register")},children:"Register"})})]})})]})},k=n(28),N=(n(44),function(e){var t=Object(k.a)(),n=t.register,c=t.handleSubmit,u=t.setValue,l=Object(a.useState)(""),j=Object(o.a)(l,2),N=j[0],y=j[1],U=Object(v.g)(),C=function(){var e=Object(b.a)(d.a.mark((function e(t){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(g.root_url,"/user/register"),{mode:"cors",method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)});case 3:if(200!==(n=e.sent).status){e.next=8;break}U.push("/login"),e.next=12;break;case 8:return e.next=10,n.json();case 10:r=e.sent,y(r.message);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),y(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}(),S=function(e,t){u(t,e.target.value)};Object(a.useEffect)((function(){n({name:"Username"}),n({name:"Password"}),n({name:"Email"})}),[n]);return Object(r.jsxs)("div",{className:"register-main",children:[Object(r.jsx)("h1",{children:"Registration"}),Object(r.jsx)("hr",{}),Object(r.jsx)("div",{className:"register-container",children:Object(r.jsxs)(h.a,{method:"POST",onSubmit:c(C),children:[Object(r.jsxs)(O.a,{children:[Object(r.jsx)(f.a,{for:"username",children:"Username: "}),Object(r.jsx)(x.a,{onChange:function(e){return S(e,"Username")},ref:n({required:!0}),type:"username",name:"username",id:"username",placeholder:"Enter username"})]}),Object(r.jsxs)(O.a,{children:[Object(r.jsx)(f.a,{for:"password",children:"Password: "}),Object(r.jsx)(x.a,{onChange:function(e){return S(e,"Password")},ref:n({required:!0}),type:"password",name:"password",id:"password",placeholder:"Enter password"})]}),Object(r.jsxs)(O.a,{children:[Object(r.jsx)(f.a,{for:"email",children:"Email: "}),Object(r.jsx)(x.a,{onChange:function(e){return S(e,"Email")},ref:n({required:!0}),type:"email",name:"email",id:"email",placeholder:"Enter email"})]}),Object(r.jsx)(O.a,{children:Object(r.jsx)(m.a,{type:"submit",children:"Register user"})}),Object(r.jsx)(O.a,{children:Object(r.jsx)(f.a,{className:"label",children:N})}),Object(r.jsx)(O.a,{children:Object(r.jsx)(p.a,{className:"register-link",onClick:function(e){i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(w,{})}),document.getElementById("root"))},children:"Login"})})]})})]})}),y=function(e){var t=Object(v.g)();return Object(a.useEffect)((function(){e.setCurrentUser("")}),[t,e]),Object(r.jsx)(v.a,{to:{pathname:"/login",state:{from:e.location}}})},U=n(8),C=(n(45),n(46),n(47),function(e){var t=Object(a.useState)([]),n=Object(o.a)(t,2),s=n[0],c=n[1],i=Object(a.useState)([]),u=Object(o.a)(i,2),l=u[0],j=u[1],h=Object(a.useState)(!1),O=Object(o.a)(h,2),f=O[0],x=O[1],m=Object(a.useState)(!0),p=Object(o.a)(m,2),g=p[0],w=p[1],k=Object(a.useState)(!1),N=Object(o.a)(k,2),y=N[0],U=N[1],C=Object(a.useState)(void 0),P=Object(o.a)(C,2),_=P[0],J=P[1],F=Object(a.useState)([]),L=Object(o.a)(F,2),A=L[0],B=L[1],I=Object(a.useState)([]),R=Object(o.a)(I,2),D=R[0],z=R[1],q=Object(a.useState)(""),H=Object(o.a)(q,2),G=H[0],K=H[1],M=Object(v.g)();setTimeout((function(){x(!f)}),5e3);if(Object(a.useEffect)((function(){T(M,c,"active",e.currentUser).then((function(){return T(M,j,"inactive",e.currentUser)})).then((function(){_&&!A.includes(_)&&E(z,A,B,e.currentUser,_)}))}),[f,_,e.currentUser,A,M]),!e.currentUser)return Object(r.jsx)(v.a,{to:{pathname:"/login",state:{from:e.location}}});var V=function(){var t=Object(b.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("Enter"!==n.key){t.next=4;break}return t.next=3,S(D,z,A,B,e.currentUser,_,G);case 3:K("");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),W=function(){var t=Object(b.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(D,z,A,B,e.currentUser,_,G);case 2:K("");case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"chat",children:[Object(r.jsxs)("div",{className:"users-list-by-activity",children:[Object(r.jsxs)("div",{onClick:function(){return w(!g)},className:"activeUserHeader",children:[s.length," Online people ",g?"(Opened)":"(Collapsed)"]}),Object(r.jsx)("div",{className:"collapse-".concat(g?"show":"hide"," active-users"),children:s.map((function(e,t){return Object(r.jsxs)("div",{onClick:function(){return t=e.username,void J(t);var t},className:"activeUserItem",children:[e.username,Object(r.jsx)("i",{className:"fas fa-circle ".concat(A.includes(e.username)?"blocked":"online")})]},t)}))}),Object(r.jsxs)("div",{onClick:function(){return U(!y)},className:"inactiveUserHeader",children:[l.length," Offline people ",y?"(Opened)":"(Collapsed)"]}),Object(r.jsx)("div",{className:"collapse-".concat(y?"show":"hide"," inactive-users"),children:l.map((function(e,t){return Object(r.jsxs)("div",{className:"inactiveUserItem",children:[e.username," ",Object(r.jsx)("i",{className:"fas fa-circle offline"})]},t)}))})]}),Object(r.jsxs)("div",{className:"messages-workspace",children:[Object(r.jsx)("div",{className:"contact",children:Object(r.jsx)("h2",{children:_})}),Object(r.jsx)("div",{className:"messages",children:Object(r.jsx)("ul",{children:D.map((function(t,n){return Object(r.jsx)("li",{className:t.sender===e.currentUser.username?"me":"him",children:t.content},n)}))})}),Object(r.jsx)("div",{className:"new-message",children:Object(r.jsxs)("div",{children:[Object(r.jsx)("input",{type:"text",value:G,onChange:function(e){return K(e.target.value)},onKeyPress:V}),Object(r.jsx)("i",{className:"icon fas fa-paper-plane",onClick:W})]})})]})]})}),S=function(){var e=Object(b.a)(d.a.mark((function e(t,n,r,a,s,c,i){var o,u,l,j;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=JSON.stringify({content:i,sender:s.username,receiver:c}),e.prev=1,u="Bearer "+s.token,e.next=5,fetch("".concat(g.root_url,"/chat/messages/send"),{method:"POST",mode:"cors",withCredentials:!0,credentials:"include",headers:{Authorization:u,"Content-Type":"application/json"},body:o});case 5:if(200!==(l=e.sent).status){e.next=19;break}return e.next=9,l.json();case 9:if(!(j=e.sent)||200!==j.status){e.next=16;break}return n((function(e){return[].concat(Object(U.a)(e),[j.data])})),e.next=14,E(n,r,a,s,c);case 14:e.next=17;break;case 16:j&&503===j.status?(window.alert("ALERT! Potential attack, please relog in again."),a([].concat(Object(U.a)(r),[c]))):j&&401===j.status?window.alert(j.message):window.alert("Error.");case 17:e.next=20;break;case 19:window.alert("Error.");case 20:e.next=25;break;case 22:e.prev=22,e.t0=e.catch(1),window.alert("Error");case 25:case"end":return e.stop()}}),e,null,[[1,22]])})));return function(t,n,r,a,s,c,i){return e.apply(this,arguments)}}(),E=function(){var e=Object(b.a)(d.a.mark((function e(t,n,r,a,s){var c,i,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c="Bearer "+a.token,e.next=4,fetch("".concat(g.root_url,"/chat/messages"),{method:"POST",mode:"cors",withCredentials:!0,credentials:"include",headers:{Authorization:c,"Content-Type":"application/json"},body:JSON.stringify(s)});case 4:if(200!==(i=e.sent).status){e.next=12;break}return e.next=8,i.json();case 8:(o=e.sent)&&200===o.status?t(o.data):o&&503===o.status?(t(o.data),n.includes(s)||r([].concat(Object(U.a)(n),[s])),window.alert("ALERT! Potential attack, please relog in again.")):o&&401===o.status?window.alert(o.message):window.alert("Error."),e.next=13;break;case 12:window.alert("Error.");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),window.alert("Error");case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t,n,r,a,s){return e.apply(this,arguments)}}(),T=function(){var e=Object(b.a)(d.a.mark((function e(t,n,r,a){var s,c,i,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s="Bearer "+a.token,e.next=4,fetch("".concat(g.root_url,"/chat/").concat(r),{mode:"cors",withCredentials:!0,credentials:"include",headers:{Authorization:s,"content-type":"application/json"}});case 4:if(200!==(c=e.sent).status){e.next=12;break}return e.next=8,c.json();case 8:(i=e.sent).status&&200===i.status?(o=i.data.filter((function(e){return e.username!==a.username})),n(o)):i.status&&401===i.status&&(window.alert(i.message),t.push("/logout")),e.next=13;break;case 12:window.alert("Error.");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),t.push("/logout");case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t,n,r,a){return e.apply(this,arguments)}}(),P=(n(48),function(e){return Object(r.jsxs)("div",{className:"certificate",children:[Object(r.jsx)("div",{className:"username",children:e.data.username}),Object(r.jsx)("div",{className:"validFrom",children:e.data.validFrom}),Object(r.jsx)("div",{className:"validTo",children:e.data.validTo}),e.data.download?Object(r.jsx)("div",{className:"download",children:Object(r.jsx)("a",{href:e.data.download,children:"Download"})}):""]})}),_=(n(49),function(e){var t=Object(a.useState)([]),n=Object(o.a)(t,2),s=n[0],c=n[1],i=Object(v.g)();return Object(a.useEffect)((function(){J(i,e.currentUser,c)}),[s,e.currentUser,i]),Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("h2",{children:"User certificates:"})}),Object(r.jsx)("div",{className:"certificates",children:s.map((function(e,t){return Object(r.jsx)(P,{data:e},t)}))})]})}),J=function(){var e=Object(b.a)(d.a.mark((function e(t,n,r){var a,s,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a="Bearer "+n.token,e.next=4,fetch("".concat(g.root_url,"/certificate"),{method:"GET",mode:"cors",withCredentials:!0,credentials:"include",headers:{Authorization:a,"Content-Type":"application/json"}});case 4:if(200!==(s=e.sent).status){e.next=12;break}return e.next=8,s.json();case 8:(c=e.sent)&&200===c.status?r(c.data):window.alert("Error."),e.next=13;break;case 12:window.alert("Error.");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),t.push("/logout");case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t,n,r){return e.apply(this,arguments)}}(),F=function(e){var t=e.currentUser;return Object(r.jsxs)(v.d,{children:[Object(r.jsx)(v.b,{path:"/certificate-store",render:function(){return t?Object(r.jsx)(_,{currentUser:e.currentUser}):Object(r.jsx)(v.a,{from:"/certificate-store",to:"/login"})}}),Object(r.jsx)(v.b,{path:"/chat",render:function(){return t?Object(r.jsx)(C,{currentUser:e.currentUser}):Object(r.jsx)(v.a,{from:"/chat",to:"/login"})}}),Object(r.jsx)(v.b,{path:"/login",render:function(){return t?Object(r.jsx)(v.a,{to:"/chat"}):Object(r.jsx)(w,{setCurrentUser:e.setCurrentUser})}}),Object(r.jsx)(v.b,{path:"/register",children:Object(r.jsx)(N,{})}),Object(r.jsx)(v.b,{path:"/logout",render:function(){return t?Object(r.jsx)(y,{token:e.token,setToken:e.setToken,setCurrentUser:e.setCurrentUser}):Object(r.jsx)(v.a,{to:"/login"})}}),Object(r.jsx)(v.b,{exact:!0,path:"/",render:function(){return t?Object(r.jsx)(v.a,{to:"/chat"}):Object(r.jsx)(v.a,{to:"/login"})}})]})},L=function(){var e=function(e,t){var n=s.a.useState((function(){try{var n=window.sessionStorage.getItem(e);return n?JSON.parse(n):t}catch(r){return t}})),r=Object(o.a)(n,2),a=r[0],c=r[1];return[a,function(t){try{var n=t instanceof Function?t(a):t;c(n),window.sessionStorage.setItem(e,JSON.stringify(n))}catch(r){window.alert("Error")}}]}("currentUser",void 0),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(u.a,{children:Object(r.jsxs)("div",{className:"sidebar",children:[Object(r.jsx)(l,{currentUser:n}),Object(r.jsxs)("div",{className:"content",children:[n&&n.username?Object(r.jsx)("h1",{style:{margin:"21.4px 0"},children:"Welcome, ".concat(n.username,".")}):"",Object(r.jsx)(F,{currentUser:n,setCurrentUser:a})]})]})})})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,57)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))};i.a.render(Object(r.jsx)(L,{}),document.getElementById("root")),A()}},[[50,1,2]]]);
//# sourceMappingURL=main.ac1da549.chunk.js.map