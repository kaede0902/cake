(this.webpackJsonp2ch=this.webpackJsonp2ch||[]).push([[0],{27:function(e,t,n){e.exports=n(41)},32:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(22),o=n.n(c),i=n(25),l=n(1),u=(n(32),n(9)),s=n(6),d=n.n(s),m=n(23),p=(n(33),d.a.initializeApp({apiKey:"AIzaSyDmalZJoWLjvCGpUAAGc1E384X0QTfdLJk",authDomain:"kaede-0902ch.firebaseapp.com",databaseURL:"https://kaede-0902ch.firebaseio.com",projectId:"kaede-0902ch",storageBucket:"kaede-0902ch.appspot.com",messagingSenderId:"351430009448",appId:"1:351430009448:web:202e09657e76268ef391dd",measurementId:"G-4Z0L2R5D96"}));console.log(p&&!1);var h=d.a.firestore().collection("writings"),f=function(){var e=Object(m.a)(h,{idField:"id"}),t=Object(u.a)(e,3),n=t[0],a=t[1],c=t[2];return a?r.a.createElement("div",null,"Loading..."):c?r.a.createElement("div",null,"Error: ".concat(c.message)):(console.log(n),r.a.createElement("ul",null,n.map((function(e){return r.a.createElement("li",{key:e.id},e.content)}))))},v=n(14),g=n.n(v),E=n(24);console.log(p&&!1);var b=d.a.firestore().collection("writings"),k=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(!1),i=Object(u.a)(o,2),l=i[0],s=i[1],m=function(){var e=Object(E.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(""),s(!0),e.prev=2,e.next=5,b.add({content:n,created_at:d.a.firestore.FieldValue.serverTimestamp()});case 5:return e.prev=5,s(!1),e.finish(5);case 8:case"end":return e.stop()}}),e,null,[[2,,5,8]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("input",{value:n,onChange:function(e){return c(e.target.value)}}),r.a.createElement("button",{onClick:m},"Add"),l&&"Pending...")};var w=function(){return r.a.createElement("div",null,r.a.createElement(f,null),r.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(l.a,{exact:!0,path:"/",component:w}),r.a.createElement(l.a,{path:"/app",component:w}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.12d87ca0.chunk.js.map