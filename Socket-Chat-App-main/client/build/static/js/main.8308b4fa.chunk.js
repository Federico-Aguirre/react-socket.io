(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{34:function(e,t,a){e.exports=a(70)},66:function(e,t){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n,c=a(0),r=a.n(c),s=a(31),o=a.n(s),u=a(16),i=a.n(u),l=a(32),m=a(17),p=a(3),f=a(33),v=a.n(f);a(69);var b=function(){var e=Object(c.useState)(!1),t=Object(p.a)(e,2),a=t[0],s=t[1],o=Object(c.useState)(""),u=Object(p.a)(o,2),f=u[0],b=u[1],d=Object(c.useState)(""),h=Object(p.a)(d,2),E=h[0],j=h[1],g=Object(c.useState)(""),O=Object(p.a)(g,2),N=O[0],C=O[1],x=Object(c.useState)([]),S=Object(p.a)(x,2),k=S[0],y=S[1];Object(c.useEffect)((function(){n=v()("localhost:3002/")}),["localhost:3002/"]),Object(c.useEffect)((function(){n.on("receive_message",(function(e){y([].concat(Object(m.a)(k),[e]))}))}));var w=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={room:f,content:{author:E,message:N}},e.next=3,n.emit("send_message",t);case 3:y([].concat(Object(m.a)(k),[t.content])),C("");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},a?r.a.createElement("div",{className:"chatContainer"},r.a.createElement("div",{className:"messages"},k.map((function(e,t){return r.a.createElement("div",{className:"messageContainer",id:e.author==E?"You":"Other"},r.a.createElement("div",{className:"messageIndividual"},e.author,": ",e.message))}))),r.a.createElement("div",{className:"messageInputs"},r.a.createElement("input",{type:"text",placeholder:"Mensaje",onChange:function(e){C(e.target.value)}}),r.a.createElement("button",{onClick:w},"Enviar"))):r.a.createElement("div",{className:"logIn"},r.a.createElement("div",{className:"inputs"},r.a.createElement("input",{type:"text",placeholder:"Nombre",onChange:function(e){j(e.target.value)}}),r.a.createElement("input",{type:"text",placeholder:"Sala",onChange:function(e){b(e.target.value)}})),r.a.createElement("button",{onClick:function(){s(!0),n.emit("join_room",f)}},"Conectar")))};o.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.8308b4fa.chunk.js.map