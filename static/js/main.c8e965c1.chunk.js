(this.webpackJsonprobots=this.webpackJsonprobots||[]).push([[0],{14:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),r=n(4),o=n.n(r),a=(n(14),n(3)),i=n.n(a),p=n(5),l=n(6),u=n(7),h=n(9),d=n(8),b=n(0),j=function(e){var t=e.id,n=e.name,s=e.email,c=e.popup,r=e.b;return Object(b.jsx)("button",{onClick:c,style:{padding:0,border:0,background:"transparent",cursor:"pointer"},children:Object(b.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 shadow-2 grow",children:[Object(b.jsx)("img",{src:"https://robohash.org/".concat(t,"?200x200"),alt:"robotsImage",id:r}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:n}),Object(b.jsx)("p",{children:s})]})]})})},m=function(e){var t=e.robots,n=e.popup;return Object(b.jsx)("div",{children:t.map((function(e,t){return Object(b.jsx)(j,{id:e.id,name:e.name,email:e.email,popup:n,b:t},t)}))})},f=function(e){var t=e.searchChange;return Object(b.jsx)("input",{type:"search",placeholder:"Search robots",onChange:t,className:"pa3 ba b-green bg-light-blue"})},g=function(e){return Object(b.jsx)("div",{style:{overflowY:"scroll",border:"3px solid black",height:"500px"},children:e.children})},x=(n(17),n(18),n(19),function(e){var t=e.popup,n=e.imgsrc,s=e.details;return Object(b.jsx)("div",{className:"popup-back",children:Object(b.jsxs)("div",{className:"popup-container",children:[Object(b.jsx)("div",{className:"popup-close",onClick:t,children:"x"}),Object(b.jsxs)("div",{className:"popup-content",children:[Object(b.jsx)("img",{className:"image",src:n}),Object(b.jsxs)("div",{className:"details",children:[Object(b.jsxs)("p",{children:["Name: ",s.name]}),Object(b.jsxs)("p",{children:["Email: ",s.email]}),Object(b.jsxs)("p",{children:["Company: ",s.company.name]}),Object(b.jsxs)("p",{children:["User name: ",s.username]}),Object(b.jsxs)("p",{children:["Phone: ",s.phone]}),Object(b.jsxs)("p",{children:["Website: ",s.website]})]})]})]})})}),O=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({search_field:t.target.value})},e.popupFunction=function(t){e.state.popup?(console.log("close"),e.setState({popup:!1})):(e.popupData={imgsrc:t.target.src,details:e.filtered_robots[t.target.id]},console.log(e.popupData.details),e.setState({popup:!0}))},e.state={robots:[],search_field:"",popup:!1},e.popupImg="",e.filtered_robots=[],e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(p.a)(i.a.mark((function e(){var t=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){t.setState({robots:e})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.search_field,s=e.popup;return this.filtered_robots=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})),Object(b.jsxs)(c.a.Fragment,{children:[s?Object(b.jsx)(x,{popup:this.popupFunction,imgsrc:this.popupData.imgsrc,details:this.popupData.details}):"",Object(b.jsxs)("div",{className:"tc",children:[Object(b.jsx)("h1",{children:"Robofans"}),Object(b.jsx)(f,{searchChange:this.onSearchChange}),Object(b.jsx)(g,{children:this.filtered_robots.length?Object(b.jsx)(m,{robots:this.filtered_robots,popup:this.popupFunction}):Object(b.jsx)("h2",{children:"No profile match your search"})})]})]})}}]),n}(s.Component),v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),s(e),c(e),r(e),o(e)}))};o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root")),v()}},[[20,1,2]]]);
//# sourceMappingURL=main.c8e965c1.chunk.js.map