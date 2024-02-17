"use strict";(self.webpackChunkwebpackreact=self.webpackChunkwebpackreact||[]).push([[503],{8076:function(e,t,a){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var s in t=arguments[a])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},n.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var s=a(5893);t.default=function(e){var t=e.id,a=e.src,i=e.mediumSrc,r=void 0===i?"":i,o=e.smallSrc,l=void 0===o?"":o,u=e.alt,c=e.className,d=e.width,h=e.height,m=e.ariaHidden,f=e.loadingPriority,p=a.replace(/\.\w+$/,".webp"),x=r?r.replace(/\.\w+$/,".webp"):"",_=l?l.replace(/\.\w+$/,".webp"):"";return(0,s.jsxs)("picture",{children:[(0,s.jsx)("source",{type:"image/webp",srcSet:p,media:"(min-width: 1920px)"}),(0,s.jsx)("source",{type:"image/webp",srcSet:r?x:p,media:"(min-width: 500px) and (max-width: 1920px)"}),(0,s.jsx)("source",{type:"image/webp",srcSet:l?_:p,media:"(max-width: 500px)"}),(0,s.jsx)("img",n({id:t,src:a,alt:u,className:c,width:d,height:h,"aria-hidden":m},!!f&&{loading:"eager"===f?"eager":"lazy"}))]})}},277:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=a(5893),i=a(9655),r=n(a(9215)),o=a(3169);t.default=function(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(o.ThemeProvider,{children:(0,s.jsx)(i.Routes,{children:(0,s.jsx)(i.Route,{path:"/",element:(0,s.jsx)(r.default,{})})})})})}},6493:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=a(5893);a(3445);var i=n(a(4973)),r=n(a(6328)),o=n(a(2625)),l=n(a(7942)),u=n(a(5977)),c=n(a(5581)),d=n(a(2286)),h=n(a(278)),m=n(a(1180));t.default=function(){var e=[{text:"Dashboard",url:"#",icon:i.default},{text:"Boards",url:"#",icon:r.default},{text:"Posts",url:"#",icon:o.default},{text:"Statuses",url:"#",icon:l.default},{text:"Users",url:"#",icon:u.default},{text:"Changelog",url:"#",icon:c.default},{text:"Settings",url:"#",icon:d.default,submenu:[{text:"Settings 1",url:"#"},{text:"Settings 2",url:"#"}]},{text:"Integrations",url:"#",icon:h.default}];return(0,s.jsx)("aside",{className:"asideMenu",children:(0,s.jsx)("nav",{className:"asideMenu__navigation",children:e.map((function(e,t){return(0,s.jsx)(m.default,{item:e},t)}))})})}},1180:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=a(5893),i=a(7294),r=n(a(5398)),o=a(3169);t.default=function(e){var t=e.item,a=(0,i.useState)(!1),n=a[0],l=a[1],u=(0,i.useContext)(o.ThemeContext);return(0,s.jsxs)("div",{className:"asideMenu__item ".concat(n?"open":""),children:[(0,s.jsxs)("div",{className:"asideMenu__link-container",children:[(0,s.jsxs)("div",{className:"asideMenu__link-wrapper",children:[(0,s.jsx)("img",{src:t.icon,alt:t.text,width:20,height:20,"aria-hidden":"true",className:"asideMenu__icon ".concat(u.theme)}),(0,s.jsx)("a",{href:t.url,className:"asideMenu__link subtitle-second",children:t.text})]}),t.submenu&&(0,s.jsx)("button",{className:"asideMenu__sub-button","aria-label":"".concat(n?"close":"open"," ").concat(t.text," sub menu"),onClick:function(){l(!n)},children:(0,s.jsx)("img",{src:r.default,alt:"submenu",width:12,height:7,"aria-hidden":"true",className:"asideMenu__sub-icon"})})]}),n&&(0,s.jsx)("div",{className:"asideMenu__submenu",children:t.submenu.map((function(e,t){return(0,s.jsx)("a",{href:e.url,className:"asideMenu__submenu-link caption",children:e.text},t)}))})]})}},4773:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var n=a(5893);a(39);t.default=function(){return(0,n.jsx)("div",{className:"breadcrumbs caption",children:"Dashboard"})}},5137:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=a(5893),i=a(7294);a(7465);var r=n(a(1116)),o=n(a(4917)),l=n(a(8869)),u=a(3169);t.default=function(){var e=(0,i.useContext)(u.ThemeContext),t=e.theme,a=e.setTheme,n=function(e){a(e)};return(0,s.jsxs)("header",{className:"header",children:[(0,s.jsx)(r.default,{}),(0,s.jsxs)("div",{className:"header__menu",children:[(0,s.jsxs)("div",{className:"radio-header__container",children:[(0,s.jsx)(o.default,{labelText:"Day theme",value:"light",group:"theme",getRadioValue:n,selectedValue:t}),(0,s.jsx)(o.default,{labelText:"Night theme",value:"dark",group:"theme",getRadioValue:n,selectedValue:t})]}),(0,s.jsx)(l.default,{useOption:!0})]})]})}},795:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var n=a(5893),s=a(7294);a(1220);t.default=function(e){var t=e.openButton,a=(0,s.useRef)(null),i=(0,s.useState)(1),r=i[0],o=i[1];return(0,n.jsx)("nav",{className:"headerDropDownMenu",ref:a,onKeyDown:function(e){var n;if("Tab"===e.key&&!e.shiftKey&&a.current){e.preventDefault();var s=a.current.children;s&&s.length>0&&(null===(n=s[r])||void 0===n||n.focus(),r===a.current.children.length?(t.current.focus(),o(1)):o(r+1))}},children:[{text:"Workspaces",url:"/"},{text:"Profile",url:"/"},{text:"Logout",url:"/"}].map((function(e,t){return(0,n.jsx)("a",{href:e.url,className:"heading-h6 headerDropDownMenu__link",children:e.text},t)}))})}},8869:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=a(5893),i=a(7294);a(3942);var r=n(a(8076)),o=n(a(3412)),l=n(a(4634)),u=n(a(795));t.default=function(e){var t=e.useOption,a=void 0!==t&&t,n=(0,i.useState)(!1),c=n[0],d=n[1],h=(0,i.useRef)(null);return(0,s.jsxs)("div",{className:"headerUserMenu",children:[(0,s.jsx)(r.default,{src:o.default,height:"40",width:"40",className:"headerUserMenu__avatar",alt:"a guy with glasses"}),(0,s.jsxs)("div",{className:"headerUserMenu__info",children:[(0,s.jsx)("p",{className:"headerUserMenu__name subtitle-second",children:"Lucy Lavender"}),(0,s.jsxs)("div",{className:"headerUserMenu__status",children:[(0,s.jsx)("span",{className:"headerUserMenu__status_label online","aria-hidden":"true"}),(0,s.jsx)("p",{className:"headerUserMenu__status caption",children:"Online"})]})]}),!!a&&(0,s.jsx)(l.default,{click:function(){d(!c)},buttonRef:h,label:c?"close":"open"}),(0,s.jsx)("div",{"aria-live":"assertive",children:(0,s.jsx)("div",{"aria-label":"menu is ".concat(c?"open":"close"),children:!!c&&(0,s.jsx)(u.default,{openButton:h})})})]})}},1116:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=a(5893),i=a(7294);a(8435);var r=n(a(1849)),o=n(a(8598)),l=a(3169);t.default=function(){var e=(0,i.useContext)(l.ThemeContext);return(0,s.jsx)("a",{href:"/","aria-label":"Prony logo. Link to main page.",className:"logo-link",children:(0,s.jsxs)("div",{className:"logo","aria-hidden":"true",children:[(0,s.jsx)("img",{className:"logo-icon",src:r.default,alt:"logo icon",width:"25",height:"30"}),(0,s.jsx)("img",{className:"logo-text ".concat(e.theme),src:o.default,alt:"logo text",width:"102",height:"24"})]})})}},4634:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var n=a(5893);a(3389);t.default=function(e){var t=e.click,a=e.buttonRef,s=e.label;return(0,n.jsxs)("button",{className:"optionButton","aria-label":"click to ".concat(s," more option"),onClick:t,ref:a,children:[(0,n.jsx)("span",{className:"optionButton__dot"}),(0,n.jsx)("span",{className:"optionButton__dot"}),(0,n.jsx)("span",{className:"optionButton__dot"})]})}},4917:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var n=a(5893),s=a(7294);a(923);t.default=function(e){var t=e.labelText,a=e.value,i=e.selectedValue,r=e.group,o=e.type,l=void 0===o?"default":o,u=e.size,c=void 0===u?"medium":u,d=e.getRadioValue,h=void 0===d?function(){}:d,m=(0,s.useRef)(null);return(0,n.jsxs)("div",{className:"radio__container ".concat(l," ").concat(c),children:[(0,n.jsx)("input",{type:"checkbox",id:a,name:r,value:a,checked:i===a,onChange:function(){h(m.current.value)},tabIndex:"disabled"===l?-1:0,ref:m}),(0,n.jsx)("label",{htmlFor:a,className:"radio-label text",children:t})]})}},3169:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.ThemeProvider=t.ThemeContext=void 0;var n=a(5893),s=a(7294),i=(0,s.createContext)(void 0);t.ThemeContext=i;t.ThemeProvider=function(e){var t=e.children,a=(0,s.useState)("light"),r=a[0],o=a[1];return(0,s.useEffect)((function(){document.documentElement.style.setProperty("--Primary",getComputedStyle(document.documentElement).getPropertyValue("--Primary-".concat("light"===r?"Light":"Dark"))),document.documentElement.style.setProperty("--TextPrimary",getComputedStyle(document.documentElement).getPropertyValue("--TextPrimary-".concat("light"===r?"Light":"Dark"))),document.documentElement.style.setProperty("--BG",getComputedStyle(document.documentElement).getPropertyValue("--BG-".concat("light"===r?"Light":"Dark"))),document.documentElement.style.setProperty("--BGSecond",getComputedStyle(document.documentElement).getPropertyValue("--BGSecond-".concat("light"===r?"Light":"Dark")))}),[r]),(0,n.jsx)(i.Provider,{value:{theme:r,setTheme:o},children:t})}},9215:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=a(5893);a(8643);var i=n(a(5137)),r=n(a(6493)),o=n(a(4773)),l=n(a(3931)),u=a(5668),c=a(4356);u.Chart.register(u.CategoryScale,u.LinearScale,u.PointElement,u.LineElement,u.Title,u.Tooltip,u.Filler,u.Legend);t.default=function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.default,{}),(0,s.jsxs)("div",{className:"pageContainer",children:[(0,s.jsx)(r.default,{}),(0,s.jsxs)("main",{className:"pageContainer__main",children:[(0,s.jsx)(o.default,{}),(0,s.jsxs)("section",{className:"dashboard-MainSection",children:[(0,s.jsx)("h1",{className:"title dashboard-MainSection__title",children:"Dashboard"}),(0,s.jsx)(l.default,{}),(0,s.jsx)("div",{children:(0,s.jsx)(c.Line,{data:{labels:["January","February","March","April"],datasets:[{label:"Users",data:[3e3,5e3,3500,8e3,1e4],borderColor:"#1565c0",backgroundColor:function(e){var t=["rgba(3, 184, 253, 0.46)","rgba(255, 225, 225, 0.2)"];if(e.chart.chartArea){var a=e.chart,n=a.ctx,s=(a.data,a.chartArea),i=s.top,r=s.bottom,o=n.createLinearGradient(0,i,0,r);return o.addColorStop(.8,t[0]),o.addColorStop(1,t[1]),o}},borderWidth:2,cubicInterpolationMode:"monotone",fill:!0,pointBackgroundColor:"#1565c0"}]},options:{responsive:!0,scales:{y:{ticks:{maxTicksLimit:4,stepSize:5e3},suggestedMin:0,suggestedMax:15e3}},plugins:{legend:{position:"top"},title:{display:!0,text:"Statistic"}}}})})]})]})]})]})}},3931:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var n=a(5893);a(585);var s=[{text:"Boards",element:123},{text:"Users",element:1623},{text:"Posts",element:1623},{text:"Votes",element:1623}];t.default=function(){return(0,n.jsx)("ul",{className:"statisticList",children:s.map((function(e,t){return(0,n.jsxs)("li",{className:"statisticList__item",children:[(0,n.jsx)("p",{className:"statisticList__caption subtitle",children:e.text}),(0,n.jsxs)("p",{className:"statisticList__element title",children:[(0,n.jsx)("span",{className:"visibility-hidden",children:e.element}),(0,n.jsx)("span",{"aria-hidden":"true",children:e.element.toLocaleString()})]})]},t)}))})}},3935:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=a(5893);a(736);var i=a(745),r=a(9655),o=n(a(277)),l=document.getElementById("root");(0,i.createRoot)(l).render((0,s.jsx)(r.HashRouter,{children:(0,s.jsx)(o.default,{})}))},3412:function(e,t,a){e.exports=a.p+"img/avatars/avatar_1.png"},5398:function(e,t,a){e.exports=a.p+"img/icons/UpArrow.svg"},6328:function(e,t,a){e.exports=a.p+"img/icons/asideMenu/asideBoards.svg"},5581:function(e,t,a){e.exports=a.p+"img/icons/asideMenu/asideChangelog.svg"},4973:function(e,t,a){e.exports=a.p+"img/icons/asideMenu/asideDashboard.svg"},278:function(e,t,a){e.exports=a.p+"img/icons/asideMenu/asideIntegrations.svg"},2625:function(e,t,a){e.exports=a.p+"img/icons/asideMenu/asidePosts.svg"},2286:function(e,t,a){e.exports=a.p+"img/icons/asideMenu/asideSettings.svg"},7942:function(e,t,a){e.exports=a.p+"img/icons/asideMenu/asideStatuses.svg"},5977:function(e,t,a){e.exports=a.p+"img/icons/asideMenu/asideUsers.svg"},8598:function(e,t,a){e.exports=a.p+"img/icons/logo/logo-text.svg"},1849:function(e,t,a){e.exports=a.p+"img/icons/logo/logo.svg"}},function(e){e.O(0,[736,313,25,105,464,655,440,772,617,216,522,303],(function(){return t=3935,e(e.s=t);var t}));e.O()}]);