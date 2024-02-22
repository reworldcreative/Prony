"use strict";(self.webpackChunkwebpackreact=self.webpackChunkwebpackreact||[]).push([[503],{8076:function(e,t,a){var i=this&&this.__assign||function(){return i=Object.assign||function(e){for(var t,a=1,i=arguments.length;a<i;a++)for(var s in t=arguments[a])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},i.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var s=a(5893);t.default=function(e){var t=e.id,a=e.src,n=e.mediumSrc,r=void 0===n?"":n,o=e.smallSrc,l=void 0===o?"":o,u=e.alt,c=e.className,d=e.width,h=e.height,m=e.ariaHidden,f=e.loadingPriority,p=a.replace(/\.\w+$/,".webp"),v=r?r.replace(/\.\w+$/,".webp"):"",x=l?l.replace(/\.\w+$/,".webp"):"";return(0,s.jsxs)("picture",{children:[(0,s.jsx)("source",{type:"image/webp",srcSet:p,media:"(min-width: 1920px)"}),(0,s.jsx)("source",{type:"image/webp",srcSet:r?v:p,media:"(min-width: 500px) and (max-width: 1920px)"}),(0,s.jsx)("source",{type:"image/webp",srcSet:l?x:p,media:"(max-width: 500px)"}),(0,s.jsx)("img",i({id:t,src:a,alt:u,className:c,width:d,height:h,"aria-hidden":m},!!f&&{loading:"eager"===f?"eager":"lazy"}))]})}},277:function(e,t,a){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=a(5893),n=a(9655),r=i(a(9215)),o=a(5438);t.default=function(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(o.ThemeProvider,{children:(0,s.jsx)(n.Routes,{children:(0,s.jsx)(n.Route,{path:"/",element:(0,s.jsx)(r.default,{})})})})})}},1116:function(e,t,a){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=a(5893),n=a(7294);a(8435);var r=i(a(1849)),o=i(a(8598)),l=a(5438),u=a(9655);t.default=function(){var e=(0,n.useContext)(l.ThemeContext);return(0,s.jsx)(u.Link,{to:"/","aria-label":"Prony logo. Link to main page.",className:"logo-link",children:(0,s.jsxs)("div",{className:"logo","aria-hidden":"true",children:[(0,s.jsx)("img",{className:"logo-icon",src:r.default,alt:"logo icon",width:"25",height:"30"}),(0,s.jsx)("img",{className:"logo-text ".concat(e.theme),src:o.default,alt:"logo text",width:"102",height:"24"})]})})}},2063:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var i=a(5893);a(3699);t.default=function(e){var t=e.click,a=e.buttonRef,s=e.label;return(0,i.jsxs)("button",{className:"optionButton","aria-label":"click to ".concat(s," more option"),onClick:t,ref:a,children:[(0,i.jsx)("span",{className:"optionButton__dot"}),(0,i.jsx)("span",{className:"optionButton__dot"}),(0,i.jsx)("span",{className:"optionButton__dot"})]})}},7460:function(e,t,a){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=a(5893),n=a(7294);a(797);var r=i(a(5398)),o=a(5438);t.default=function(e){var t=e.options,a=e.current,i=e.onSelect,l=(0,n.useContext)(o.ThemeContext),u=(0,n.useRef)(null),c=(0,n.useRef)(null),d=(0,n.useState)(1),h=d[0],m=d[1],f=(0,n.useState)(!1),p=f[0],v=f[1],x=(0,n.useState)(a),_=x[0],g=x[1];return(0,s.jsxs)("div",{className:"dropdown ".concat(p?"open":""),children:[(0,s.jsxs)("button",{className:"dropdown__current",onClick:function(){v(!p)},"aria-live":"assertive",ref:c,children:[(0,s.jsx)("span",{className:"dropdown__currentItem subtitle","aria-label":"Dropdown selector is ".concat(p?"open":"close",". Current selected value is ").concat(_),children:_}),(0,s.jsx)("img",{src:r.default,alt:"dropdown arrow",width:12,height:7,"aria-hidden":"true",className:"dropdown__icon ".concat(l.theme)})]}),p&&(0,s.jsx)("ul",{className:"dropdown__options",ref:u,onKeyDown:function(e){var t;if("Tab"===e.key&&!e.shiftKey&&u.current){e.preventDefault();var a=u.current.children;a&&a.length>0&&(null===(t=a[h])||void 0===t||t.focus(),h===u.current.children.length?(c.current.focus(),m(1)):m(h+1))}},children:t.map((function(e,t){return(0,s.jsx)("li",{className:"dropdown__item subtitle",onClick:function(){return function(e){g(e),i(e),v(!1)}(e)},tabIndex:0,children:e},t)}))})]})}},1014:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var i=a(5893),s=a(7294);a(5051);t.default=function(e){var t=e.labelText,a=e.value,n=e.selectedValue,r=e.group,o=e.type,l=void 0===o?"default":o,u=e.size,c=void 0===u?"medium":u,d=e.getRadioValue,h=void 0===d?function(){}:d,m=(0,s.useRef)(null);return(0,i.jsxs)("div",{className:"radio__container ".concat(l," ").concat(c),children:[(0,i.jsx)("input",{type:"checkbox",id:a,name:r,value:a,checked:n===a,onChange:function(){h(m.current.value)},tabIndex:"disabled"===l?-1:0,ref:m}),(0,i.jsx)("label",{htmlFor:a,className:"radio-label text",children:t})]})}},5416:function(e,t,a){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=a(5893),n=a(9655);a(6819);var r=i(a(1028)),o=i(a(2822));t.default=function(){return(0,s.jsxs)("section",{className:"dashboard-Activities box-container",children:[(0,s.jsx)("h2",{className:"dashboard-Activities__title title-second",children:"Activities"}),(0,s.jsx)("ul",{className:"dashboard-Activities__list",children:o.default.slice(0,5).map((function(e,t){return(0,s.jsx)(r.default,{picture:e.picture,name:e.name,status:e.status,caption:e.caption,time:e.time,text:e.text?e.text:""},t)}))}),(0,s.jsxs)(n.Link,{to:"/",className:"dashboard-Activities__link subtitle-second",children:["View all ",(0,s.jsx)("span",{className:"visibility-hidden",children:"activities"})]})]})}},1028:function(e,t,a){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=a(5893);a(6819);var n=i(a(8076));t.default=function(e){var t=e.picture,a=e.name,i=e.status,r=e.caption,o=e.text,l=e.time;return(0,s.jsxs)("li",{className:"dashboard-Activities__item",children:[(0,s.jsx)(n.default,{src:t,width:"45",height:"45",alt:"avatar",className:"dashboard-Activities__avatar",ariaHidden:!0}),(0,s.jsxs)("div",{className:"dashboard-Activities__wrapper",children:[(0,s.jsxs)("div",{className:"dashboard-Activities__block",children:[(0,s.jsxs)("div",{className:"dashboard-Activities__container",children:[(0,s.jsx)("h3",{className:"dashboard-Activities__name heading-h6",children:a}),(0,s.jsx)("p",{className:"dashboard-Activities__status text",children:i}),(0,s.jsx)("h3",{className:"dashboard-Activities__subtitle subtitle-second",children:r})]}),(0,s.jsx)("div",{className:"dashboard-Activities__time text",children:l})]}),""!==o&&(0,s.jsx)("p",{className:"dashboard-Activities__text text-second",children:o})]})]})}},9215:function(e,t,a){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=a(5893);a(8643);var n=i(a(344)),r=i(a(3155)),o=i(a(4610)),l=i(a(3931)),u=i(a(2253)),c=a(2537),d=i(a(5416));t.default=function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.default,{}),(0,s.jsxs)("div",{className:"pageContainer",children:[(0,s.jsx)(r.default,{}),(0,s.jsxs)("main",{className:"pageContainer__main",children:[(0,s.jsxs)("section",{className:"dashboard-MainSection",children:[(0,s.jsx)(o.default,{}),(0,s.jsx)("h1",{className:"title dashboard-MainSection__title",children:"Dashboard"}),(0,s.jsx)(l.default,{}),(0,s.jsx)(c.StatisticProvider,{children:(0,s.jsx)(u.default,{})})]}),(0,s.jsx)(d.default,{})]})]})]})}},3931:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var i=a(5893);a(585);var s=[{text:"Boards",element:123},{text:"Users",element:1623},{text:"Posts",element:1623},{text:"Votes",element:1623}];t.default=function(){return(0,i.jsx)("ul",{className:"statisticList",children:s.map((function(e,t){return(0,i.jsxs)("li",{className:"statisticList__item box-container",children:[(0,i.jsx)("p",{className:"statisticList__caption subtitle",children:e.text}),(0,i.jsxs)("p",{className:"statisticList__element title",children:[(0,i.jsx)("span",{className:"visibility-hidden",children:e.element}),(0,i.jsx)("span",{"aria-hidden":"true",children:e.element.toLocaleString()})]})]},t)}))})}},3155:function(e,t,a){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=a(5893);a(3482);var n=i(a(4973)),r=i(a(6328)),o=i(a(2625)),l=i(a(7942)),u=i(a(5977)),c=i(a(5581)),d=i(a(2286)),h=i(a(278)),m=i(a(6250));t.default=function(){var e=[{text:"Dashboard",url:"/",icon:n.default},{text:"Boards",url:"/",icon:r.default},{text:"Posts",url:"/",icon:o.default},{text:"Statuses",url:"/",icon:l.default},{text:"Users",url:"/",icon:u.default},{text:"Changelog",url:"/",icon:c.default},{text:"Settings",url:"/",icon:d.default,submenu:[{text:"Settings 1",url:"/"},{text:"Settings 2",url:"/"}]},{text:"Integrations",url:"#",icon:h.default}];return(0,s.jsx)("aside",{className:"asideMenu",children:(0,s.jsx)("nav",{className:"asideMenu__navigation",children:e.map((function(e,t){return(0,s.jsx)(m.default,{item:e},t)}))})})}},6250:function(e,t,a){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=a(5893),n=a(7294),r=i(a(5398)),o=a(5438),l=a(9655);t.default=function(e){var t=e.item,a=(0,n.useState)(!1),i=a[0],u=a[1],c=(0,n.useContext)(o.ThemeContext);return(0,s.jsxs)("div",{className:"asideMenu__item ".concat(i?"open":""),children:[(0,s.jsxs)("div",{className:"asideMenu__link-container",children:[(0,s.jsxs)("div",{className:"asideMenu__link-wrapper",children:[(0,s.jsx)("img",{src:t.icon,alt:t.text,width:20,height:20,"aria-hidden":"true",className:"asideMenu__icon ".concat(c.theme)}),(0,s.jsx)(l.Link,{to:t.url,className:"asideMenu__link subtitle-second",children:t.text})]}),t.submenu&&(0,s.jsx)("button",{className:"asideMenu__sub-button","aria-label":"".concat(i?"close":"open"," ").concat(t.text," sub menu"),onClick:function(){u(!i)},children:(0,s.jsx)("img",{src:r.default,alt:"submenu",width:12,height:7,"aria-hidden":"true",className:"asideMenu__sub-icon ".concat(c.theme)})})]}),i&&(0,s.jsx)("div",{className:"asideMenu__submenu",children:t.submenu.map((function(e,t){return(0,s.jsx)(l.Link,{to:e.url,className:"asideMenu__submenu-link caption",children:e.text},t)}))})]})}},4610:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var i=a(5893);a(9693);t.default=function(){return(0,i.jsx)("div",{className:"breadcrumbs caption",children:"Dashboard"})}},2253:function(e,t,a){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=a(5893),n=a(7294);a(49);var r=a(2537),o=i(a(9920)),l=i(a(7460)),u=i(a(1182)),c=a(5668),d=a(4356);c.Chart.register(c.CategoryScale,c.LinearScale,c.PointElement,c.LineElement,c.Title,c.Tooltip,c.Filler,c.Legend);t.default=function(){var e=(0,n.useContext)(r.StatisticContext),t=e.statisticValue,a=(e.handleGetStatisticValue,(0,n.useState)("last 90 days")),i=a[0],c=a[1],h={Users:"#1565C0",Voters:"#43A047",Posts:"#FF9800"};function m(e,t){var a=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,t,a,i){return"#"+t+t+a+a+i+i})),i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);if(!i)throw new Error("Invalid color format");var s=i.map((function(e){return parseInt(e,16)})),n=s[1],r=s[2],o=s[3];return"rgba(".concat(n,", ").concat(r,", ").concat(o,", ").concat(t,")")}return(0,s.jsxs)("section",{className:"statisticChart box-container",children:[(0,s.jsxs)("div",{className:"statisticChart__header",children:[(0,s.jsxs)("div",{className:"statisticChart__header-container",children:[(0,s.jsx)("h2",{className:"statisticChart__title title-second",children:"Statistic"}),(0,s.jsx)(o.default,{})]}),(0,s.jsx)(l.default,{options:["last 90 days","last 30 days","last 7 days"],current:i,onSelect:c})]}),(0,s.jsx)(d.Line,{className:"statisticChart__chart",data:{labels:function(e){var t=e.split(" ")[1],a=parseInt(t);if(isNaN(a))return[];var i=new Date,s=[],n=["January","February","March","April","May","June","July","August","September","October","November","December"];if(7===a){for(var r=6;r>=0;r--){(u=new Date).setDate(i.getDate()-r),s.push(u.getDate().toString().padStart(2,"0"))}return s}if(30===a){for(r=29;r>=0;r--){(u=new Date).setDate(i.getDate()-r),s.push(u.getDate().toString().padStart(2,"0"))}return s}if(90===a){for(r=89;r>=0;r--){(u=new Date).setDate(i.getDate()-r);var o=n[u.getMonth()];s.includes(o)||s.push(o)}return s}var l=[];for(r=0;r<a;r++){var u;if((u=new Date).setDate(i.getDate()-r),r>=90)break;o=n[u.getMonth()];l.includes(o)||l.push(o)}l.forEach((function(e){s.push(e)}));var c=n[i.getMonth()];return s.includes(c)||s.push(c),s}(i).reverse(),datasets:[{label:t,data:function(e,t){var a=[],i=t.split(" ")[1],s=parseInt(i);if(isNaN(s))return[];for(var n=0;n<s;n++)n<e.length?a.push(e[n]):a.push(0);if(90===s){var r=new Date,o=new Date(r);o.setDate(r.getDate()-s);var l={};for(n=0;n<a.length;n++){var u=new Date(o);u.setDate(o.getDate()+n);var c=u.toLocaleString("default",{month:"long"});l[c]||(l[c]=[]),l[c].push(a[n])}var d=[];return Object.values(l).forEach((function(e){var t=e.reduce((function(e,t){return e+t}),0)/e.length;d.push(t)})),d}return a}(u.default[t],i),borderColor:h[t],backgroundColor:function(e){var a=[m(h[t],.46),m(h[t],.1)];if(e.chart.chartArea){var i=e.chart,s=i.ctx,n=(i.data,i.chartArea),r=n.top,o=n.bottom,l=s.createLinearGradient(0,r,0,o);return l.addColorStop(.9,a[0]),l.addColorStop(1,a[1]),l}},borderWidth:2,cubicInterpolationMode:"monotone",fill:!0,pointBackgroundColor:h[t]}]},options:{responsive:!0,scales:{x:{reverse:!0,ticks:{color:"#757575",font:{size:12,weight:"normal",family:"Nunito"}}},y:{ticks:{maxTicksLimit:4,stepSize:5e3,color:"#757575",font:{size:12,weight:"normal",family:"Nunito"}},suggestedMin:0,suggestedMax:15e3}},plugins:{legend:{position:"top",display:!1},title:{display:!1,text:"Statistic"}}}})]})}},9920:function(e,t,a){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=a(5893),n=i(a(1014)),r=a(7294),o=a(2537);t.default=function(){var e=(0,r.useContext)(o.StatisticContext),t=e.statisticValue,a=e.handleGetStatisticValue;return(0,s.jsxs)("div",{className:"statisticChart__radio-group",children:[(0,s.jsx)(n.default,{labelText:"Users",value:"Users",group:"statistics",getRadioValue:a,selectedValue:t}),(0,s.jsx)(n.default,{labelText:"Voters",value:"Voters",group:"statistics",getRadioValue:a,selectedValue:t}),(0,s.jsx)(n.default,{labelText:"Posts",value:"Posts",group:"statistics",getRadioValue:a,selectedValue:t})]})}},2537:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.StatisticContext=t.StatisticProvider=void 0;var i=a(5893),s=a(7294),n=(0,s.createContext)({statisticValue:"Users",handleGetStatisticValue:function(){}});t.StatisticContext=n;t.StatisticProvider=function(e){var t=e.children,a=(0,s.useState)("Users"),r=a[0],o=a[1];return(0,i.jsx)(n.Provider,{value:{statisticValue:r,handleGetStatisticValue:function(e){o(e)}},children:t})}},344:function(e,t,a){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=a(5893),n=a(7294);a(2709);var r=i(a(1116)),o=i(a(1014)),l=i(a(4096)),u=a(5438);t.default=function(){var e=(0,n.useContext)(u.ThemeContext),t=e.theme,a=e.setTheme,i=function(e){a(e)};return(0,s.jsxs)("header",{className:"header",children:[(0,s.jsx)(r.default,{}),(0,s.jsxs)("div",{className:"header__menu",children:[(0,s.jsxs)("div",{className:"radio-header__container",children:[(0,s.jsx)(o.default,{labelText:"Day theme",value:"light",group:"theme",getRadioValue:i,selectedValue:t}),(0,s.jsx)(o.default,{labelText:"Night theme",value:"dark",group:"theme",getRadioValue:i,selectedValue:t})]}),(0,s.jsx)(l.default,{useOption:!1})]})]})}},8437:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var i=a(5893),s=a(7294);a(4056);var n=a(9655);t.default=function(e){var t=e.openButton,a=(0,s.useRef)(null),r=(0,s.useState)(1),o=r[0],l=r[1];return(0,i.jsx)("nav",{className:"headerDropDownMenu",ref:a,onKeyDown:function(e){var i;if("Tab"===e.key&&!e.shiftKey&&a.current){e.preventDefault();var s=a.current.children;s&&s.length>0&&(null===(i=s[o])||void 0===i||i.focus(),o===a.current.children.length?(t.current.focus(),l(1)):l(o+1))}},children:[{text:"Workspaces",url:"/"},{text:"Profile",url:"/"},{text:"Logout",url:"/"}].map((function(e,t){return(0,i.jsx)(n.Link,{to:e.url,className:"heading-h6 headerDropDownMenu__link",children:e.text},t)}))})}},4096:function(e,t,a){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=a(5893),n=a(7294);a(5617);var r=i(a(8076)),o=i(a(3412)),l=i(a(2063)),u=i(a(8437));t.default=function(e){var t=e.useOption,a=void 0!==t&&t,i=(0,n.useState)(!1),c=i[0],d=i[1],h=(0,n.useRef)(null);return(0,s.jsxs)("div",{className:"headerUserMenu",children:[(0,s.jsx)(r.default,{src:o.default,height:"40",width:"40",className:"headerUserMenu__avatar",alt:"a guy with glasses"}),(0,s.jsxs)("div",{className:"headerUserMenu__info",children:[(0,s.jsx)("p",{className:"headerUserMenu__name subtitle-second",children:"Lucy Lavender"}),(0,s.jsxs)("div",{className:"headerUserMenu__status",children:[(0,s.jsx)("span",{className:"headerUserMenu__status_label online","aria-hidden":"true"}),(0,s.jsx)("p",{className:"headerUserMenu__status caption",children:"Online"})]})]}),!!a&&(0,s.jsx)(l.default,{click:function(){d(!c)},buttonRef:h,label:c?"close":"open"}),(0,s.jsx)("div",{"aria-live":"assertive",children:(0,s.jsx)("div",{"aria-label":"menu is ".concat(c?"open":"close"),children:!!c&&(0,s.jsx)(u.default,{openButton:h})})})]})}},5438:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.ThemeProvider=t.ThemeContext=void 0;var i=a(5893),s=a(7294),n=(0,s.createContext)(void 0);t.ThemeContext=n;t.ThemeProvider=function(e){var t=e.children,a=(0,s.useState)("light"),r=a[0],o=a[1];return(0,s.useEffect)((function(){document.documentElement.style.setProperty("--Primary",getComputedStyle(document.documentElement).getPropertyValue("--Primary-".concat("light"===r?"Light":"Dark"))),document.documentElement.style.setProperty("--TextPrimary",getComputedStyle(document.documentElement).getPropertyValue("--TextPrimary-".concat("light"===r?"Light":"Dark"))),document.documentElement.style.setProperty("--BG",getComputedStyle(document.documentElement).getPropertyValue("--BG-".concat("light"===r?"Light":"Dark"))),document.documentElement.style.setProperty("--BGSecond",getComputedStyle(document.documentElement).getPropertyValue("--BGSecond-".concat("light"===r?"Light":"Dark")))}),[r]),(0,i.jsx)(n.Provider,{value:{theme:r,setTheme:o},children:t})}},3935:function(e,t,a){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=a(5893);a(736);var n=a(745),r=a(9655),o=i(a(277)),l=document.getElementById("root");(0,n.createRoot)(l).render((0,s.jsx)(r.HashRouter,{children:(0,s.jsx)(o.default,{})}))},3412:function(e,t,a){e.exports=a.p+"img/avatars/avatar_1.png"},5398:function(e,t,a){e.exports=a.p+"img/icons/UpArrow.svg"},6328:function(e,t,a){e.exports=a.p+"img/icons/asideMenu/asideBoards.svg"},5581:function(e,t,a){e.exports=a.p+"img/icons/asideMenu/asideChangelog.svg"},4973:function(e,t,a){e.exports=a.p+"img/icons/asideMenu/asideDashboard.svg"},278:function(e,t,a){e.exports=a.p+"img/icons/asideMenu/asideIntegrations.svg"},2625:function(e,t,a){e.exports=a.p+"img/icons/asideMenu/asidePosts.svg"},2286:function(e,t,a){e.exports=a.p+"img/icons/asideMenu/asideSettings.svg"},7942:function(e,t,a){e.exports=a.p+"img/icons/asideMenu/asideStatuses.svg"},5977:function(e,t,a){e.exports=a.p+"img/icons/asideMenu/asideUsers.svg"},8598:function(e,t,a){e.exports=a.p+"img/icons/logo/logo-text.svg"},1849:function(e,t,a){e.exports=a.p+"img/icons/logo/logo.svg"},1182:function(e){e.exports=JSON.parse('{"Users":[3000,5000,3500,8000,10000],"Voters":[7000,4000,4000,7000,9000],"Posts":[1000,7000,6500,8500,10000]}')},2822:function(e){e.exports=JSON.parse('[{"id":1,"picture":"./img/avatars/avatar_2.png","name":"Sophia-Rose Nava","status":"upvoted","caption":"Welcome to Nolt #1","time":"6 min ago"},{"id":2,"picture":"./img/avatars/avatar_3.png","name":"Yuvaan Whittington","status":"commented","caption":"Tips and Tricks #2","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","time":"38 min ago"},{"id":3,"picture":"./img/avatars/avatar_2.png","name":"Sophia-Rose Nava","status":"upvoted","caption":"Welcome to Nolt #1","time":"6 min ago"},{"id":4,"picture":"./img/avatars/avatar_3.png","name":"Yuvaan Whittington","status":"commented","caption":"Tips and Tricks #2","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","time":"38 min ago"}]')}},function(e){e.O(0,[736,587,25,105,464,655,440,772,617,216,522,303],(function(){return t=3935,e(e.s=t);var t}));e.O()}]);