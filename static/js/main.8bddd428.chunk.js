(this.webpackJsonpinit=this.webpackJsonpinit||[]).push([[0],{26:function(e,t,a){e.exports=a.p+"static/media/cnode.2380f055.svg"},28:function(e,t,a){e.exports=a(46)},33:function(e,t,a){},34:function(e,t,a){},39:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),s=a.n(c),o=(a(33),a(4)),l=a(5),i=a(7),u=a(6),p=a(2),m=a(3),h=a(26),d=a.n(h),f=(a(34),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleAbout=function(e){e.preventDefault()},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"logo"},r.a.createElement(p.b,{to:"/"},r.a.createElement("img",{src:d.a,alt:"logo"}))),r.a.createElement("div",{className:"navbar"},r.a.createElement(p.b,{to:"/"},"\u9996\u9875"),r.a.createElement("a",{href:"https://cnodejs.org/getstart",target:"_blank",rel:"noopener noreferrer"},"\u65b0\u624b\u5165\u95e8"),r.a.createElement("a",{href:"https://cnodejs.org/api",target:"_black",rel:"noopener noreferrer"},"API"),r.a.createElement("a",{href:"/",onClick:this.handleAbout},"\u5173\u4e8e")))}}]),a}(r.a.Component)),E=(a(39),a(12)),g=a(13),b=a.n(g),v=a(19),N=function(e){return function(){var t=Object(v.a)(b.a.mark((function t(a){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://cnodejs.org/api/v1/user/"+e,t.abrupt("return",fetch(n).then((function(e){return e.json()})).then((function(e){return a({type:"GET_USER",data:e.data})})).catch((function(){return alert("\u6570\u636e\u52a0\u8f7d\u5931\u8d25")})));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},j=(a(42),a(43),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"loading"})}}]),a}(r.a.Component)),D=function(e){var t=Date.now()-new Date(e),a=new Date(t);return t<=6e4?"\u521a\u521a":t<=36e5?"".concat(parseInt(t/6e4),"\u5206\u949f\u524d"):t<=864e5?"".concat(parseInt(t/36e5),"\u5c0f\u65f6\u524d"):a.getFullYear()>1970?"".concat(a.getFullYear()-1970,"\u5e74\u524d"):a.getMonth()?"".concat(a.getMonth(),"\u4e2a\u6708\u524d"):"".concat(a.getDate()-1,"\u5929\u524d")},O=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).getText=function(e){if(e.top)return"\u7f6e\u9876";if(e.good)return"\u7cbe\u534e";switch(e.tab){case"ask":return"\u95ee\u7b54";case"share":return"\u5206\u4eab";case"job":return"\u62db\u8058";default:return""}},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return console.log(this.props),0===this.props.data.length?r.a.createElement(j,null):r.a.createElement("div",{className:"list-item"},r.a.createElement("div",{className:"list"},this.props.data.map((function(t){return r.a.createElement("div",{className:"cell",key:t.id},r.a.createElement(p.b,{to:"/user/".concat(t.author.loginname)},r.a.createElement("img",{className:"user-avatar",src:t.author.avatar_url,title:t.author.loginname,alt:""})),r.a.createElement("div",{className:"cell-left"},r.a.createElement("span",{className:"reply-count"},t.reply_count),r.a.createElement("span",null,"/"),r.a.createElement("span",{className:"visit-count"},t.visit_count)),r.a.createElement("span",{className:t.top||t.good?"put-top":"list-tab"},e.getText(t)),r.a.createElement("span",{className:"title"},r.a.createElement(p.b,{to:"/post/".concat(t.id)},t.title)),r.a.createElement("span",{className:"time"},D(t.last_reply_at)))}))))}}]),a}(r.a.Component),y=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).componentDidMount=function(){e.props.refreshData(),e.props.getPost()},e.handleChangeTab=function(t){e.props.tab!==t&&(e.props.changeTab(t),e.props.refreshData(),e.props.getPost(t,e.props.page))},e.handleNextPage=function(){setTimeout((function(){e.props.getNextPage(),e.props.refreshData(),e.props.getPost(e.props.tab,e.props.page)}),0)},e.handlePrevPage=function(){1!==e.props.page&&setTimeout((function(){e.props.getPrevPage(),e.props.refreshData(),e.props.getPost(e.props.tab,e.props.page)}),0)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"tab"},r.a.createElement(p.b,{className:"item".concat("all"===this.props.tab?" high-light":""),onClick:function(){return e.handleChangeTab("all")}},"\u5168\u90e8"),r.a.createElement(p.b,{className:"item".concat("good"===this.props.tab?" high-light":""),onClick:function(){return e.handleChangeTab("good")}},"\u7cbe\u534e"),r.a.createElement(p.b,{className:"item".concat("share"===this.props.tab?" high-light":""),onClick:function(){return e.handleChangeTab("share")}},"\u5206\u4eab"),r.a.createElement(p.b,{className:"item".concat("ask"===this.props.tab?" high-light":""),onClick:function(){return e.handleChangeTab("ask")}},"\u95ee\u7b54"),r.a.createElement(p.b,{className:"item".concat("job"===this.props.tab?" high-light":""),onClick:function(){return e.handleChangeTab("job")}},"\u62db\u8058")),Array.isArray(this.props.data)?r.a.createElement(O,{data:this.props.data}):null,0!==this.props.data.length?r.a.createElement("div",{className:"page"},r.a.createElement("button",{onClick:function(){return e.handlePrevPage()}},"<<Prev"),r.a.createElement("button",{onClick:function(){return e.handleNextPage()}},"Next>>")):null)}}]),a}(r.a.Component),_=Object(E.b)((function(e,t){return{tab:e.tab,page:e.page,data:e.data}}),(function(e){return{changeTab:function(t){e(function(e){return{type:"CHANGE_TAB",tab:e}}(t))},getPost:function(t,a){e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return function(){var a=Object(v.a)(b.a.mark((function a(n){var r;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r="https://cnodejs.org/api/v1/topics?limit=20",1!==t&&(r+="&page=".concat(t)),"all"!==e&&(r+="&tab=".concat(e)),a.abrupt("return",fetch(r).then((function(e){return e.json()})).then((function(e){return n({type:"GET_POST",data:e.data})})).catch((function(){return alert("\u6570\u636e\u52a0\u8f7d\u5931\u8d25")})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(t,a))},refreshData:function(){e({type:"REFRESH_DATA"})},getNextPage:function(){e({type:"GET_NEXT_PAGE"})},getPrevPage:function(){e({type:"GET_PREV_PAGE"})}}}))(y),T=(a(44),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).componentDidMount=function(){e.props.refreshData(),e.props.getPostDetail(e.props.match.params.id)},e.handleClick=function(t){e.props.refreshData(),e.props.getPostDetail(t)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return 0===this.props.data.length||0===this.props.userData.length?r.a.createElement(j,null):(console.log(this.props),r.a.createElement("div",{className:"post"},r.a.createElement("div",{className:"panel"},r.a.createElement("div",{className:"panel-top"},r.a.createElement("div",{className:"title"},this.props.data.title),r.a.createElement("div",{className:"changes"},r.a.createElement("span",null,"\u53d1\u5e03\u4e8e","".concat(D(this.props.data.create_at))),r.a.createElement("span",null,r.a.createElement(p.b,{to:"/user/".concat(this.props.data.author.loginname)},"\u4f5c\u8005","".concat(this.props.data.author.loginname))),r.a.createElement("span",null,"".concat(this.props.data.visit_count),"\u6b21\u6d4f\u89c8")),r.a.createElement("div",{className:"content",dangerouslySetInnerHTML:{__html:this.props.data.content}})),r.a.createElement("div",{className:"panel-bottom"},r.a.createElement("header",{className:"reply-header"},"".concat(this.props.data.replies.length),"\u56de\u590d"),this.props.data.replies.map((function(e){return r.a.createElement("div",{className:"reply"},r.a.createElement("div",{className:"reply-author"},r.a.createElement(p.b,{to:"/user/".concat(e.author.loginname)},r.a.createElement("img",{src:e.author.avatar_url,alt:"".concat(e.author.loginname)})),r.a.createElement(p.b,{to:"/user/".concat(e.author.loginname)},"".concat(e.author.loginname)),r.a.createElement("span",null," \u56de\u590d\u4e8e".concat(D(e.create_at)))),r.a.createElement("div",{className:"reply-content",dangerouslySetInnerHTML:{__html:e.content}}))})))),r.a.createElement("div",{className:"sidebar"},r.a.createElement("div",{className:"panel"},r.a.createElement("div",{className:"panel-top"},r.a.createElement("header",null,"\u4f5c\u8005"),r.a.createElement("div",{className:"info"},r.a.createElement(p.b,{to:"/user/".concat(this.props.userData.loginname)},r.a.createElement("img",{src:"".concat(this.props.userData.avatar_url),alt:"".concat(this.props.userData.loginname)}),r.a.createElement("span",null,"".concat(this.props.userData.loginname)))),r.a.createElement("div",{className:"score"},"\u79ef\u5206\uff1a".concat(this.props.userData.score)),r.a.createElement("div",{className:"register-time"},"\u6ce8\u518c\u65f6\u95f4\uff1a".concat(D(this.props.userData.create_at)))),r.a.createElement("div",{className:"panel-bottom"},r.a.createElement("header",null,"\u4f5c\u8005\u7684\u5176\u4ed6\u8bdd\u9898"),r.a.createElement("div",{className:"list"},this.props.userData.recent_topics.map((function(t){return r.a.createElement("div",{className:"item"},r.a.createElement(p.b,{to:"/post/".concat(t.id),onClick:function(){return e.handleClick(t.id)}},"".concat(t.title)))}))))))))}}]),a}(r.a.Component)),P=Object(E.b)((function(e,t){return{data:e.data,userData:e.userData}}),(function(e){return{getPostDetail:function(t){e(function(e){return function(){var t=Object(v.a)(b.a.mark((function t(a){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://cnodejs.org/api/v1/topic/"+e,t.abrupt("return",fetch(n).then((function(e){return e.json()})).then((function(e){fetch("https://cnodejs.org/api/v1/user/"+e.data.author.loginname).then((function(e){return e.json()})).then((function(t){return a({type:"GET_POST_DETAIL",data:e.data,userData:t.data})}))})).catch((function(){return alert("\u6570\u636e\u52a0\u8f7d\u5931\u8d25")})));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))},refreshData:function(){e({type:"REFRESH_DATA"})},getUser:function(t){e(N(t))}}}))(T),k=(a(45),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.refreshData(),this.props.getUser(this.props.match.params.name)}},{key:"render",value:function(){return 0===this.props.userData.length?r.a.createElement(j,null):(console.log(this.props.userData),r.a.createElement("div",{className:"user"},r.a.createElement("div",{className:"panel"},r.a.createElement("div",{className:"panel-top"},r.a.createElement("header",null,"\u4e2a\u4eba\u4fe1\u606f"),r.a.createElement("div",{className:"info"},r.a.createElement("img",{src:"".concat(this.props.userData.avatar_url),title:"".concat(this.props.userData.loginname)}),r.a.createElement("span",null,"".concat(this.props.userData.loginname))),r.a.createElement("div",{className:"score"},"\u79ef\u5206\uff1a".concat(this.props.userData.score)),r.a.createElement("div",{className:"github"},"GitHub:",r.a.createElement("a",{href:"https://github.com/".concat(this.props.userData.githubUsername)},this.props.userData.githubUsername)),r.a.createElement("div",{className:"register-time"},"\u6ce8\u518c\u65f6\u95f4\uff1a",D(this.props.userData.create_at))),r.a.createElement("div",{className:"panel-middle"},r.a.createElement("header",null,"\u6700\u8fd1\u521b\u5efa\u7684\u8bdd\u9898"),r.a.createElement("div",{className:"list"},this.props.userData.recent_replies.map((function(e){return r.a.createElement("div",{className:"item"},r.a.createElement(p.b,{to:"/post/".concat(e.id)},e.title))})))),r.a.createElement("div",{className:"panel-bottom"},r.a.createElement("header",null,"\u6700\u8fd1\u53c2\u4e0e\u7684\u8bdd\u9898"),r.a.createElement("div",{className:"list"},this.props.userData.recent_topics.map((function(e){return r.a.createElement("div",{className:"item"},r.a.createElement(p.b,{to:"/post/".concat(e.id)},e.title))})))))))}}]),a}(r.a.Component)),A=Object(E.b)((function(e,t){return{userData:e.userData}}),(function(e){return{refreshData:function(){e({type:"REFRESH_DATA"})},getUser:function(t){e(N(t))}}}))(k),C=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(f,null),r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/",component:_}),r.a.createElement(m.b,{exact:!0,path:"/post",component:function(){return r.a.createElement(m.a,{to:"/"})}}),r.a.createElement(m.b,{exact:!0,path:"/user",component:function(){return r.a.createElement(m.a,{to:"/"})}}),r.a.createElement(m.b,{path:"/post/:id",component:P}),r.a.createElement(m.b,{path:"/user/:name",component:A})))}}]),a}(r.a.Component),w=a(16),G={tab:"all",page:1,data:[],userData:[]},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_TAB":return Object.assign({},e,{tab:t.tab});case"GET_POST":return Object.assign({},e,{data:t.data});case"GET_USER":return Object.assign({},e,{userData:t.data});case"REFRESH_DATA":return Object.assign({},e,{data:[],userData:[]});case"GET_NEXT_PAGE":return Object.assign({},e,{page:e.page+1});case"GET_PREV_PAGE":return Object.assign({},e,{page:e.page-1});case"GET_POST_DETAIL":return Object.assign({},e,{data:t.data,userData:t.userData});default:return e}};function S(e){return function(t){var a=t.dispatch,n=t.getState;return function(t){return function(r){return"function"===typeof r?r(a,n,e):t(r)}}}}var R=S();R.withExtraArgument=S;var H=R,I=Object(w.c)(x,Object(w.a)(H));s.a.render(r.a.createElement(E.a,{store:I},r.a.createElement(C,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.8bddd428.chunk.js.map