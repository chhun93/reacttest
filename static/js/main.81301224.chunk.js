(this.webpackJsonptestblog=this.webpackJsonptestblog||[]).push([[0],{63:function(t,e,a){t.exports=a(98)},68:function(t,e,a){},93:function(t,e,a){},94:function(t,e,a){},95:function(t,e,a){},98:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),c=a(18),o=a.n(c),r=a(12),l=a(15),i=a(13),m=a(16),u=a(28),d=a(24),h=a(21),p=a(105),g=a(104),E=(a(68),function(t){function e(){return Object(r.a)(this,e),Object(l.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(h.a)(e,[{key:"render",value:function(){return s.a.createElement("div",{className:"LgHeaderBar"},s.a.createElement(p.a,{bg:"white",className:"justify-content-center"},s.a.createElement(p.a.Brand,{className:"mr-0",href:"/"},"TestHome")),s.a.createElement(g.a,{className:"justify-content-center"},s.a.createElement(u.b,{className:"nav-link",to:"/writePost"},"WriteTest"),s.a.createElement(u.b,{className:"nav-link",to:"/"},"TEST2"),s.a.createElement(u.b,{className:"nav-link",to:"/"},"TEST3")))}}]),e}(n.Component)),v=a(40),f=a.n(v),b=a(59),y=a(100),j=a(101),C=a(102),O=a(60),w=a.n(O),k=a(103),x=(a(93),function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(l.a)(this,Object(i.a)(e).call(this,t))).toggleModalFlag=function(){a.setState({modalFlag:!a.state.modalFlag})},a.whythismake=function(){},a.state={modalFlag:!1,key:t.id,title:t.title,body:t.body},a}return Object(m.a)(e,t),Object(h.a)(e,[{key:"render",value:function(){var t=this.state,e=t.title,a=t.body;return s.a.createElement("div",{className:"postBox"},s.a.createElement("div",{onClick:this.toggleModalFlag},s.a.createElement("div",{className:"postTitle"},e),s.a.createElement("div",{className:"postBody"},a)),s.a.createElement(k.a,{show:this.state.modalFlag,onHide:this.whythismake},s.a.createElement(k.a.Header,null,s.a.createElement(k.a.Title,null,e)),s.a.createElement(k.a.Body,null,a),s.a.createElement(k.a.Footer,null,s.a.createElement(y.a,{size:"sm",variant:"secondary",onClick:this.toggleModalFlag},"Close"),s.a.createElement(y.a,{size:"sm",variant:"success",onClick:this.toggleModalFlag},"Save Changes"))))}}]),e}(n.Component)),N=(a(94),function(t){function e(){var t,a;Object(r.a)(this,e);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(l.a)(this,(t=Object(i.a)(e)).call.apply(t,[this].concat(c)))).state={postList:[],isLoading:!0,contentIdx:1,postCnt:8,postStart:0,postEnd:0},a.getPosts=Object(b.a)(f.a.mark((function t(){var e,n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.a.get("http://localhost:3001/api");case 2:e=t.sent,n=e.data,a.setState({postList:n,isLoading:!1}),console.log("Readed : "+a.state.postList.length+"\uac1c");case 6:case"end":return t.stop()}}),t)}))),a.changeIdxUp=function(){var t=a.state,e=t.postList,n=t.contentIdx,s=t.postCnt,c=t.postStart,o=t.postEnd;o>=e.length||a.setState({contentIdx:n+1,postStart:c+s,postEnd:o+s})},a.changeIdxDown=function(){var t=a.state,e=t.contentIdx,n=t.postCnt,s=t.postStart,c=t.postEnd;0!==s&&a.setState({contentIdx:e-1,postStart:s-n,postEnd:c-n})},a.createPgIdx=function(){for(var t=[],e=a.state.postStart;e<a.state.postStart+a.state.postCnt&&e<a.state.postList.length;e++)t.push(s.a.createElement(y.a,{key:e,variant:"success"}," ",e+1," "));return t},a}return Object(m.a)(e,t),Object(h.a)(e,[{key:"componentDidMount",value:function(){this.getPosts(),this.setState({postEnd:this.state.postEnd+this.state.postCnt})}},{key:"render",value:function(){var t=this.state.postList.map((function(t){return s.a.createElement(x,{key:t.id,title:t.title,body:t.body})})),e=this.state,a=e.isLoading,n=e.postStart,c=e.postEnd;return s.a.createElement("div",{className:"contentContainer"},s.a.createElement("div",{className:"contentBody"},a?s.a.createElement("div",{className:"loadingImg"},s.a.createElement(j.a,{variant:"success",animation:"border",role:"status"})):s.a.createElement("div",{className:"contentPostBox"},t.slice(n,c))),s.a.createElement(C.a,{className:"indexBtn",size:"sm"},s.a.createElement(y.a,{variant:"success",onClick:this.changeIdxDown},"<"),this.createPgIdx(),s.a.createElement(y.a,{variant:"success",onClick:this.changeIdxUp},">")))}}]),e}(n.Component)),S=a(62),I=a(106),F=(a(95),function(t){function e(){var t,a;Object(r.a)(this,e);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(l.a)(this,(t=Object(i.a)(e)).call.apply(t,[this].concat(s)))).state={wtitle:"",wcontent:""},a.writeChange=function(t){a.setState(Object(S.a)({},t.target.name,t.target.value))},a}return Object(m.a)(e,t),Object(h.a)(e,[{key:"render",value:function(){return s.a.createElement("div",{className:"wContainer"},s.a.createElement(I.a,{className:"wTitle",placeholder:"\uc81c\ubaa9 35\uae00\uc790",maxLength:"35",name:"wtitle",onChange:this.writeChange}),s.a.createElement(I.a,{className:"wContent",as:"textarea",placeholder:"\ubcf8\ubb38",name:"wcontent",onChange:this.writeChange}),s.a.createElement(C.a,{className:"d-flex justify-content-end"},s.a.createElement(y.a,{className:"mr-5 ml-5",size:"sm",variant:"secondary",onClick:this.toggleModalFlag},"Cancel"),s.a.createElement(y.a,{className:"mr-5 ml-5",size:"sm",variant:"success",onClick:this.toggleModalFlag},"Save")))}}]),e}(n.Component)),L=function(t){function e(){var t,a;Object(r.a)(this,e);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(l.a)(this,(t=Object(i.a)(e)).call.apply(t,[this].concat(c)))).render=function(){return s.a.createElement(u.a,null,s.a.createElement(E,null),s.a.createElement(d.a,{path:"/",exact:!0,component:N}),s.a.createElement(d.a,{path:"/writepost",component:F}))},a}return Object(m.a)(e,t),e}(n.Component);a(97);o.a.render(s.a.createElement(L,null),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.81301224.chunk.js.map