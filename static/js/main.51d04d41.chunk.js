(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(19)},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(7),c=n.n(r),i=n(2),o=n(4),u=n(3),s=n(1),m=n(5),d=n(9),h=n.n(d),f=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={data:[]},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this;fetch("https://api.apify.com/v1/rG44NsjnfukCkKecE/crawlers/Z79rSy82LB9BxDyaa/lastExec/results?token=u8HqK39BcB8PKAFsjMtb9Bnnh").then(function(e){return e.json()}).then(function(e){for(var t=[],n=0;n<e.length;n++)t=0===n?e[0].pageFunctionResult:t.concat(e[n].pageFunctionResult);return t}).then(function(e){return e.sort(function(e,t){return e.date<t.date?1:t.date<e.date?-1:0})}).then(function(e){for(var t=0;t<e.length;t++)e[t].date=new Date(1e3*e[t].date);return e}).then(function(t){e.setState({data:t}),console.log(t)})}},{key:"componentWillUnmount",value:function(){this.ref.off()}},{key:"_getRandomColor",value:function(){return"#"+("000000"+Math.floor(16777215*Math.random()).toString(16)).substr(-6)}},{key:"render",value:function(){return l.a.createElement("div",null,this.state.data.map(function(e){return l.a.createElement("div",{key:e.text,class:"newsItem"},l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("a",{onclick:"ga('send', 'event', 'NewsItem', 'clicked', 'textlinks');",target:"_blank",class:"item",href:e.link},l.a.createElement("img",{src:"/electron.png",alt:"",style:{maxHeight:15,opacity:".9"}})," ",e.text.substring(0,e.text.indexOf("http")),"\xa0",l.a.createElement("span",{class:"source"},l.a.createElement("i",null,e.source))))),l.a.createElement("div",{class:"newsItemRight"},l.a.createElement("p",{class:"time"},l.a.createElement(h.a,{date:e.date}))))}))}}]),t}(l.a.Component),p=(n(18),n(6)),k=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e)))._getRandomColor=n._getRandomColor.bind(Object(p.a)(Object(p.a)(n))),n.state={data:[]},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this;fetch("https://api.apify.com/v1/rG44NsjnfukCkKecE/crawlers/dqChEgEi92GTiNG9a/lastExec/results?token=p7r3cZrnv5BnGn9c4kC7PpcPT").then(function(e){return e.json()}).then(function(e){for(var t=[],n=0;n<e.length;n++)t=0===n?e[0].pageFunctionResult:t.concat(e[n].pageFunctionResult);return t}).then(function(e){for(var t=e,n=0;n<e.length;n++)t[n].price=parseInt(t[n].price.replace(",","").replace("$","")),t[n].link="https://www.edmunds.com"+t[n].link;return t}).then(function(e){return e.push({name:"NEW Tesla Model 3",price:"42900",image:"https://www.tesla.com/tesla_theme/assets/img/model3/hero-img--touch.jpg?20170801",link:"https://3.tesla.com/model3/design#battery"},{name:"NEW Tesla Model S",price:"85000",image:"https://i0.wp.com/eastwest.thegadgetman.org.uk/wp-content/uploads/2017/07/tesla256.png?fit=256%2C256&ssl=1",link:"https://www.tesla.com/modelx/design#battery"},{name:"NEW Tesla Model X",price:"88000",image:"https://pbs.twimg.com/profile_images/713511184910139392/_hAw3t46_400x400.jpg",link:"https://www.tesla.com/models/design#battery"}),e}).then(function(e){return e=e.filter(function(e,t,n){return t===n.findIndex(function(t){return t.name===e.name})})}).then(function(e){return e.sort(function(e,t){return e.price-t.price})}).then(function(t){e.setState({data:t})})}},{key:"componentWillUnmount",value:function(){}},{key:"_getRandomColor",value:function(){return"#"+("000000"+Math.floor(16777215*Math.random()).toString(16)).substr(-6)}},{key:"render",value:function(){return l.a.createElement("div",{style:{margin:5,height:"100%"}},this.state.data.map(function(e){return l.a.createElement("a",{href:e.link,target:"_blank"},l.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},l.a.createElement("div",null,l.a.createElement("span",{style:{color:"orange",opacity:.4}},"$",e.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))),l.a.createElement("div",{class:"carName",key:e.name},l.a.createElement("div",null,e.name.replace("NEW","")))))}))}}]),t}(l.a.Component),g=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e)))._getRandomColor=n._getRandomColor.bind(Object(p.a)(Object(p.a)(n))),n.state={data:[]},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this;fetch("https://api.apify.com/v1/rG44NsjnfukCkKecE/crawlers/ssxDRduoSE3XdkzLv/lastExec/results?token=vDBYC8EeGdBZpYPrrrXLEjmwF").then(function(e){return e.json()}).then(function(e){for(var t=[],n=0;n<e.length;n++)t=0===n?e[0].pageFunctionResult:t.concat(e[n].pageFunctionResult);return t}).then(function(e){return e=e.filter(function(e,t,n){return t===n.findIndex(function(t){return t.name===e.name})})}).then(function(e){for(var t=e,n=0;n<e.length;n++)t[n].price=parseInt(t[n].price.replace(",","").replace("$",""));return t.sort(function(e,t){return e.price-t.price})}).then(function(t){e.setState({data:t})})}},{key:"componentWillUnmount",value:function(){}},{key:"_getRandomColor",value:function(){return"#"+("000000"+Math.floor(16777215*Math.random()).toString(16)).substr(-6)}},{key:"render",value:function(){return l.a.createElement("div",{class:"box"},l.a.createElement("p",null,l.a.createElement("b",null,"Used EV Price Tracker (updated daily)")),this.state.data.map(function(e){return l.a.createElement("a",{href:"https://www.edmunds.com"+e.link,target:"_blank"},l.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},l.a.createElement("div",null,l.a.createElement("span",{style:{color:"dodgerblue",opacity:.4}},"$",e.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))),l.a.createElement("div",{class:"carName",key:e.name},l.a.createElement("div",null,e.name.replace("USED","")))))}))}}]),t}(l.a.Component),E=function(e){function t(e){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{class:"box"},l.a.createElement("p",null,l.a.createElement("b",null,"Guides")),l.a.createElement("ol",null,l.a.createElement("li",null,l.a.createElement("a",{onclick:"ga('send', 'event', 'Article', 'clicked', 'textlinks');",target:"_blank",href:"/2017/06/20/200-apartment-solar-system.html"},"Project: $200 Off-Grid Solar For Apartments"),"\xa0"),l.a.createElement("li",null,l.a.createElement("a",{onclick:"ga('send', 'event', 'Article', 'clicked', 'textlinks');",target:"_blank",href:"/2017/09/06/burning-man-update.html"},"Project: Burning Man System"),"\xa0"),l.a.createElement("li",null,l.a.createElement("a",{onclick:"ga('send', 'event', 'Article', 'clicked', 'textlinks');",target:"_blank",href:"/2017/09/17/what-will-it-run.html"},"Project: Low-energy devices for an off-grid home"),"\xa0"),l.a.createElement("li",null,l.a.createElement("a",{onclick:"ga('send', 'event', 'Article', 'clicked', 'textlinks');",target:"_blank",href:"/2017/09/30/box-update.html"},"Project: Box Update"),"\xa0"),l.a.createElement("li",null,l.a.createElement("a",{onclick:"ga('send', 'event', 'Article', 'clicked', 'textlinks');",target:"_blank",href:"/2017/10/01/burning-man-solar-2.html"},"Project: For Burning Man / Camping (Lithium battery)"),"\xa0"),l.a.createElement("li",null,l.a.createElement("a",{onclick:"ga('send', 'event', 'Article', 'clicked', 'textlinks');",target:"_blank",href:"/2017/10/07/solarpi.html"},"Project: SolarPi"),"\xa0"),l.a.createElement("li",null,l.a.createElement("a",{onclick:"ga('send', 'event', 'Article', 'clicked', 'textlinks');",target:"_blank",href:"/2017/10/07/stock-sunjack-in-window.html"},"Project: sunjack stock in window"),"\xa0"),l.a.createElement("li",null,l.a.createElement("a",{onclick:"ga('send', 'event', 'Article', 'clicked', 'textlinks');",target:"_blank",href:"/2017/10/09/hurricane.html"},"Project: Hurricane Solar Lighting"),"\xa0"),l.a.createElement("li",null,l.a.createElement("a",{onclick:"ga('send', 'event', 'Article', 'clicked', 'textlinks');",target:"_blank",href:"/2017/10/10/build-it.html"},"Link: More than 500 renewable energy and conservation projects you can build"),"\xa0"),l.a.createElement("li",null,l.a.createElement("a",{onclick:"ga('send', 'event', 'Article', 'clicked', 'textlinks');",target:"_blank",href:"/2017/10/10/check-reddit.html"},"Link: The Reddit DIY Community"),"\xa0"),l.a.createElement("li",null,l.a.createElement("a",{onclick:"ga('send', 'event', 'Article', 'clicked', 'textlinks');",target:"_blank",href:"/2017/10/10/desert-power.html"},"Link: Desert power (without lots of generators)"),"\xa0"),l.a.createElement("li",null,l.a.createElement("a",{onclick:"ga('send', 'event', 'Article', 'clicked', 'textlinks');",target:"_blank",href:"/2017/10/10/full-rv.html"},"Link: Full RV Solar & Inverter Install ~ From Start To Finish (Video)"),"\xa0"),l.a.createElement("li",null,l.a.createElement("a",{onclick:"ga('send', 'event', 'Article', 'clicked', 'textlinks');",target:"_blank",href:"/2017/10/10/hackaday-solar.html"},"Link: Hackaday Solar Projects"),"\xa0"),l.a.createElement("li",null,l.a.createElement("a",{onclick:"ga('send', 'event', 'Article', 'clicked', 'textlinks');",target:"_blank",href:"/2017/10/16/solar-smartwatch.html"},"Link: LunaR, the world\u2019s first solar powered smartwatch."),"\xa0")),l.a.createElement("p",null,"Submit new:"),l.a.createElement("br",null),l.a.createElement("form",{action:"https://formspree.io/n.dunkel@gmail.com",method:"POST",id:"formspree"},l.a.createElement("input",{type:"text",placeholder:"link or story",name:"name"}),"\xa0",l.a.createElement("input",{type:"email",placeholder:"your email",name:"_replyto"}),"\xa0",l.a.createElement("button",{type:"submit",value:"Submit"},"Submit")))}}]),t}(l.a.Component),v=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={},n.handleSubmit=n.handleSubmit.bind(Object(p.a)(Object(p.a)(n))),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){}},{key:"handleSubmit",value:function(e){e.preventDefault(),console.log("uas");var t=document.getElementById("myInput").value;console.log(t),this.ref.push({email:t}),document.getElementById("theForm").style.display="none"}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{class:"box",id:"theForm"},l.a.createElement("p",null,l.a.createElement("b",null,"Get Daily Price Updates!")),l.a.createElement("form",null,l.a.createElement("input",{id:"myInput",type:"text",name:"email",placeholder:"youremail@example.com"}),"\xa0",l.a.createElement("button",{onClick:this.handleSubmit},"submit"))),l.a.createElement("div",null,l.a.createElement(g,null)),l.a.createElement("div",null,l.a.createElement(E,null)))}}]),t}(l.a.Component),b=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"onError",value:function(e){console.log(e)}}]),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{class:"title"},l.a.createElement("img",{src:"/electron.png",alt:""})," ",l.a.createElement("b",null,"electrification")," | EV Price Tracker & News Aggregator"),l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"left"},l.a.createElement("b",null,"New EV Price Tracker (updated daily)"),l.a.createElement("div",{class:"hr"}),l.a.createElement(k,null)),l.a.createElement("div",{class:"news"},l.a.createElement("b",null,"Latest Electric Vehicle News"),l.a.createElement("div",{class:"hr"}),l.a.createElement(f,null)),l.a.createElement("div",{class:"right"},l.a.createElement(v,null))))}}]),t}(l.a.Component);c.a.render(l.a.createElement(b,null),document.getElementById("root"));var w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(l.a.createElement(b,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");w?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):y(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):y(e)})}}()}},[[10,1,2]]]);
//# sourceMappingURL=main.51d04d41.chunk.js.map