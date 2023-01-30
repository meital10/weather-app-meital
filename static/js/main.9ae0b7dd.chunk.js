(this["webpackJsonpweather-app-meital"]=this["webpackJsonpweather-app-meital"]||[]).push([[0],{177:function(e,t,n){},208:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(22),r=n.n(i),o=(n(177),n(10)),s=n(111),l=n(19),d=n(153),u=n(285),j=n(300),b=n(299),x=n(301),p=n(302),h=n(295),m=n(14),O=n(27),f=n(66),g=n(46),v=Object(f.b)({name:"dailyForecasts",initialState:{data:[],defaultTempUnit:"C"},reducers:{setForcast:function(e,t){e.data=t.payload},setTempUnit:function(e,t){e.defaultTempUnit=t.payload}}}),y=Object(f.b)({name:"currentCity",initialState:{data:{Key:"215854",Name:"Tel Aviv"}},reducers:{setCity:function(e,t){e.data=Object(O.a)(Object(O.a)({},e.data),t.payload)}}}),C=JSON.parse(localStorage.getItem("favorites")),F=Object(f.b)({name:"favorites",initialState:{data:C||[]},reducers:{add:function(e,t){return{data:[].concat(Object(m.a)(e.data),[t.payload])}},remove:function(e,t){return{data:e.data.filter((function(e){return e.Key!==t.payload.Key}))}}}}),N=Object(f.b)({name:"currentLocation",initialState:{data:null,hasNavigationError:!1},reducers:{setLocation:function(e,t){e.data=t.payload},setNavigationError:function(e,t){e.hasNavigationError=t.payload}}}),T=Object(g.b)({dailyForecasts:v.reducer,currentCity:y.reducer,favorites:F.reducer,location:N.reducer}),S={DailyForecasts:v.actions,CurrentCity:y.actions,FavoriteCities:F.actions,CurrentLocation:N.actions},w=Object(f.a)({reducer:T}),I=n(18),k=n(293),K=n(142),L=n.n(K),E=n(143),D=n.n(E),A=n(271),U=n(2),R=Object(A.a)({gridCointainer:{alignItems:"center",justify:"space-between"},links:{marginRight:"15px",marginLeft:"15px",justifyContent:"space-between"}}),P=function(e){var t=e.check,n=e.change,c=Object(a.useState)(!1),i=Object(o.a)(c,2),r=i[0],s=i[1],l=Object(I.b)(),d=R();return Object(U.jsx)(a.Fragment,{children:Object(U.jsx)(b.a,{sx:{flexGrow:1},container:!0,xs:12,className:d.gridCointainer,children:Object(U.jsx)(j.a,{position:"fixed",children:Object(U.jsxs)(x.a,{children:[Object(U.jsx)(p.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Weather App"}),Object(U.jsx)(h.a,{variant:"contained",href:"/home",children:"Home"}),Object(U.jsx)(h.a,{variant:"contained",href:"/favorites",children:"Favorites"}),Object(U.jsx)(L.a,{}),Object(U.jsx)(k.a,{color:"default",name:"switchDarkMode",inputProps:{"aria-label":"dark mode"},onChange:n,checked:t}),Object(U.jsx)(D.a,{}),"C\xb0",Object(U.jsx)(k.a,{color:"default",name:"switchUnitTemp",inputProps:{"aria-label":"temp unit"},checked:r,onChange:function(e){s(e.target.checked),l(S.DailyForecasts.setTempUnit(r?"C":"F"))}}),"F\xb0"]})})})})},W=n(286),_=n(303),z=n(304),B=n(144),M=n.n(B),V=Object(A.a)({root:{margin:"30px",maxWidth:200,height:"12rem",width:"9rem",alignItems:"center",justifyContent:"center",display:"flex",background:"linear-gradient(rgba(0, 185, 195, 0.5), rgba(16, 76, 120, 0.1))",borderRadius:"0.5rem",padding:"10px",border:"3px solid rgba(32, 45, 44, 0.7)"}}),H=function(e){var t=e.weatherIcon,n=e.date,c=e.weatherDescription,i=e.celsius,r=e.fahrenheit,o=e.selectedUnit,s=V();return Object(U.jsx)(a.Fragment,{children:Object(U.jsx)(_.a,{className:s.root,children:Object(U.jsxs)(z.a,{style:{textAlign:"center"},children:[Object(U.jsx)(p.a,{component:"h6",variant:"h6",children:M()(n).format("ddd")}),Object(U.jsx)("img",{alt:c,src:"https://developer.accuweather.com/sites/default/files/".concat(t,"-s.png")}),Object(U.jsx)(p.a,{children:"C"===o?"".concat(null===i||void 0===i?void 0:i.toFixed(1),"\xb0 C"):"".concat(null===r||void 0===r?void 0:r.toFixed(1),"\xb0 F")}),Object(U.jsx)(p.a,{children:c})]})})})},G=n(115),J=n(145),q=n(287),Y=n(288),Q=n(146),X=n(50),Z=n.n(X),$=Object({NODE_ENV:"production",PUBLIC_URL:"/weather-app-meital",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_KEY||"sKy9BIjAvMMsu1URNtqHRKLxKxb8F2RL",ee="https://dataservice.accuweather.com",te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Tel Aviv";return"".concat(ee,"/locations/v1/cities/autocomplete?apikey=").concat($,"&q=").concat(e)},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"215854";return"".concat(ee,"/currentconditions/v1/").concat(e,"?apikey=").concat($)},ae=Object(A.a)({option:{fontSize:15,"& > span":{marginRight:10,fontSize:18}},container:{display:"flex",justifyContent:"center",marginTop:"15px"}}),ce=function(){var e=ae(),t=Object(I.b)(),n=Object(a.useState)([]),c=Object(o.a)(n,2),i=c[0],r=c[1],s=function(){var e=Object(J.a)(Object(G.a)().mark((function e(t){var n,a;return Object(G.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.target.value){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,Z.a.get(te(n));case 5:a=e.sent,r((function(){return a.data}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=Object(Q.debounce)(s,1e3);return Object(U.jsx)("div",{className:e.container,children:Object(U.jsx)(a.Fragment,{children:Object(U.jsx)(q.a,{filterOptions:function(e){return e},onChange:function(e,n){n&&n.Key&&t(S.CurrentCity.setCity({Key:n.Key,Name:n.LocalizedName}))},onInputChange:l,id:"combo-box-demo",options:i,sx:{width:350},renderInput:function(e){return Object(U.jsx)(Y.a,Object(O.a)(Object(O.a)({},e),{},{variant:"outlined",label:"Search Location"}))},getOptionLabel:function(e){return"".concat(e.Country.LocalizedName,", ").concat(e.Country.ID)},renderOption:function(e,t){return Object(a.createElement)("h4",Object(O.a)(Object(O.a)({},e),{},{key:t.Key}),"".concat(t.LocalizedName,", ").concat(t.Country.LocalizedName))}})})})},ie=n(281),re=n(282),oe=n(283),se=n(284),le=n(296),de={container:{width:"100px",display:"flex",justifyContent:"center",alignItems:"center",justifySelf:"center"},iconImg:{paddingTop:"5px",width:"100 %"}},ue=function(e){var t=e+"";return 1===t.length?"0"+t:t},je=function(e){var t=e.icon,n=e.description;return Object(U.jsx)(le.a,{children:Object(U.jsx)("div",{className:de.container,children:Object(U.jsx)("img",{className:de.iconImg,src:"https://developer.accuweather.com/sites/default/files/".concat(ue(t),"-s.png"),alt:n})})})},be=n(290),xe=n(151),pe=n.n(xe),he=n(150),me=n.n(he),Oe=Object(A.a)({action:{fontSize:"2.6rem",padding:"0.5rem",display:"flex"},root:{margin:"10px",marginTop:"30px",marginLeft:"50px",marginBottom:"50px",maxWidth:200,height:"12rem",width:"9rem",alignItems:"center",justifyContent:"center",display:"flex",background:"linear-gradient(rgba(0, 185, 195, 0.5), rgba(16, 76, 120, 0.1))",borderRadius:"0.5rem",padding:"10px",border:"3px solid rgba(32, 45, 44, 0.7)",boxShadow:"2px 2px 2px rgba(29, 40, 44, 0.5)"}}),fe=function(e){var t=e.onClick,n=e.title,a=void 0===n?"Add to favorites":n;return Object(U.jsx)(be.a,{title:a,children:Object(U.jsx)(me.a,{cursor:"pointer","aria-label":a,color:"error",onClick:t})})},ge=function(e){var t=e.onClick,n=e.title,a=void 0===n?"Remove from favorites":n;return Object(U.jsx)(be.a,{title:a,children:Object(U.jsx)(pe.a,{cursor:"pointer","aria-label":a,color:"secondary",onClick:t})})},ve=function(e){var t=e.onClick,n=e.name,c=e.weatherText,i=e.weatherIcon,r=e.celsius,o=e.fahrenheit,s=e.selectedUnit,l=Oe();return Object(U.jsx)(a.Fragment,{children:Object(U.jsx)(_.a,{className:l.root,onClick:t,children:Object(U.jsxs)(z.a,{style:{textAlign:"center"},children:[Object(U.jsx)(p.a,{component:"h3",variant:"h6",children:n}),Object(U.jsx)(p.a,{children:"C"===s?"".concat(null===r||void 0===r?void 0:r.toFixed(1),"\xb0 C"):"".concat(null===o||void 0===o?void 0:o.toFixed(1),"\xb0 F")}),Object(U.jsx)("img",{alt:c,src:"https://developer.accuweather.com/sites/default/files/".concat(i,"-s.png")}),Object(U.jsx)(p.a,{children:c})]})})})},ye=function(){var e=Object(I.c)((function(e){return e.currentCity.data})),t=Object(I.b)();return function(e,t){return-1!==e.findIndex((function(e){return e.Key===(null===t||void 0===t?void 0:t.Key)}))}(Object(I.c)((function(e){return e.favorites.data})),e)?Object(U.jsx)(ge,{onClick:function(){return t(S.FavoriteCities.remove({Key:e.Key}))}}):Object(U.jsx)(fe,{onClick:function(){return t(S.FavoriteCities.add({Key:e.Key,Name:e.Name}))}})},Ce=n(297),Fe=n(305),Ne=n(152),Te=n.n(Ne),Se=function(){var e="Search by your location",t=Object(I.c)((function(e){return e.location.data})),n=Object(I.c)((function(e){return e.location.hasNavigationError})),a=Object(I.b)();return Object(U.jsx)("div",{children:Object(U.jsx)(be.a,{title:e,children:Object(U.jsx)(Fe.a,{onClick:function(){n?alert("You need to approve your location in the browser"):Z.a.get(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"32.045",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"34.77";return"".concat(ee,"/locations/v1/cities/geoposition/search?apikey=").concat($,"&q=").concat(e,", ").concat(t)}(t.latitude,t.longitude)).then((function(e){a(S.CurrentCity.setCity({Name:e.data.LocalizedName,Key:e.data.Key}))}))},children:Object(U.jsx)(Te.a,{cursor:"pointer","aria-label":e,color:"primary"})})})})},we=Object(A.a)({container:{marginTop:"20px",display:"flex",alignItems:"center",border:"2px solid #eee",borderRadius:"0.5rem",padding:"1rem",marginBottom:"15px"},actions:{marginLeft:"auto"},information:{display:"flex",alignItems:"center"},location:{textAlign:"start",margin:0},description:{textAlign:"center",fontSize:"50px",alignItems:"center",justify:"center"}}),Ie=function(e){var t,n,a,c,i=e.selectedUnit,r=we(),o=Object(I.c)((function(e){return e.currentCity.data}));return o?o&&Object(U.jsx)(U.Fragment,{children:Object(U.jsxs)(le.a,{children:[Object(U.jsxs)(Ce.a,{container:!0,className:r.container,children:[Object(U.jsx)(Ce.a,{item:!0,className:r.information,children:Object(U.jsx)(je,{icon:null===o||void 0===o?void 0:o.WeatherIcon})}),Object(U.jsxs)(Ce.a,{item:!0,className:r.location,children:[Object(U.jsx)(p.a,{component:"h3",variant:"h6",children:o.Name}),Object(U.jsx)(p.a,{children:"C"===i?"".concat(null===o||void 0===o||null===(t=o.Temperature)||void 0===t||null===(n=t.Metric)||void 0===n?void 0:n.Value,"\xb0 C"):"".concat(null===o||void 0===o||null===(a=o.Temperature)||void 0===a||null===(c=a.Imperial)||void 0===c?void 0:c.Value,"\xb0 F")})]}),Object(U.jsx)(Ce.a,{className:r.actions,children:Object(U.jsxs)(Fe.a,{children:[Object(U.jsx)(Se,{}),Object(U.jsx)(ye,{})]})})]}),Object(U.jsx)(Ce.a,{item:!0,xs:12,children:Object(U.jsx)(p.a,{component:"h5",variant:"h5",align:"center",children:o.WeatherText})})]})}):"no city"},ke=n(291),Ke=Object(A.a)({gridCointainer:{padding:"80px 50px 50px 100px",boxSizing:"border-box",display:"flex",flexDirection:"column",alignItems:"center",align:"center",justifyContent:"center",margin:"0"},weatherGrid:{alignItems:"center",border:"1px solid rgba(173, 173, 235)",boxShadow:"2px 2px 2px rgba(27, 38, 44, 0.5)",marginRight:"20px",marginLeft:"20px",marginTop:"20px",marginBottom:"20px"},title:{textAlign:"center",color:"rgb(0,76,153)",paddingTop:"15px",marginButtom:"15px"}}),Le=function(){var e=Ke(),t=Object(a.useState)(!0),n=Object(o.a)(t,2),c=n[0],i=n[1],r=Object(a.useState)(null),s=Object(o.a)(r,2),l=s[0],d=s[1],u=Object(I.c)((function(e){return e.dailyForecasts.data})),j=Object(I.c)((function(e){return e.dailyForecasts.defaultTempUnit})),b=Object(I.c)((function(e){return e.currentCity.data})),x=Object(I.b)();return Object(a.useEffect)((function(){Z.a.get(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"215854";return"".concat(ee,"/forecasts/v1/daily/5day/").concat(e,"?apikey=").concat($,"&metric=true")}(b.Key)).then((function(e){i(!1),d(null),x(S.DailyForecasts.setForcast(e.data.DailyForecasts.map((function(e){return{date:e.Date,weatherIcon:ue(e.Day.Icon),weatherDescription:e.Day.IconPhrase,celsius:e.Temperature.Maximum.Value,fahrenheit:(t=e.Temperature.Maximum.Value,1.8*t+32)};var t}))))})).catch((function(e){i(!1),d(e.message)})),Z.a.get(ne(b.Key)).then((function(e){e.data[0].WeatherText,ue(e.data[0].WeatherIcon),e.data[0].Temperature.Metric.Value,e.data[0].Temperature.Imperial.Value;x(S.CurrentCity.setCity(e.data[0]))})).catch((function(e){i(!1),d(e.message)}))}),[b.Key]),Object(U.jsxs)(a.Fragment,{children:[Object(U.jsx)(ie.a,{}),Object(U.jsx)("div",{children:l&&Object(U.jsx)(ke.a,{variant:"filled",severity:"error",children:l})}),Object(U.jsx)(re.a,{fixed:!0,children:Object(U.jsxs)(oe.a,{container:!0,spacing:2,className:e.gridCointainer,children:[c&&Object(U.jsx)("div",{children:"Loading..."}),Object(U.jsx)(oe.a,{item:!0,xs:12,children:Object(U.jsx)(ce,{})}),Object(U.jsxs)(oe.a,{item:!0,xs:12,className:e.weatherGrid,children:[Object(U.jsx)(oe.a,{item:!0,children:Object(U.jsx)(Ie,{selectedUnit:j})}),Object(U.jsx)(oe.a,{className:e.title,children:Object(U.jsx)(se.a,{component:"h5",variant:"h4",color:"primary",children:"Five Days Forcast"})}),Object(U.jsx)(oe.a,{container:!0,spacing:2,children:u.map((function(e,t){return Object(U.jsx)(H,Object(O.a)(Object(O.a)({},e),{},{selectedUnit:j}),t)}))})]})]})})]})},Ee=Object(A.a)({gridCointainer:{padding:"80px 50px 50px 100px",boxSizing:"border-box",display:"flex",flexDirection:"column",alignItems:"center",align:"center",justifyContent:"center"},title:{align:"center",paddingTop:"70px",paddingBottom:"50px"},subtitle:{paddingTop:"80px"}}),De=function(){var e=Ee(),t=Object(l.f)(),n=Object(I.b)(),c=Object(I.c)((function(e){return e.dailyForecasts.defaultTempUnit})),i=Object(a.useState)([]),r=Object(o.a)(i,2),s=r[0],d=r[1],u=Object(I.c)((function(e){return e.favorites.data}));return Object(a.useEffect)((function(){var e=u.map((function(e){return Z.a.get(ne(e.Key))}));Promise.all(e).then((function(e){var t=e.map((function(e,t){return{weatherText:e.data[0].WeatherText,weatherIcon:ue(e.data[0].WeatherIcon),celsius:e.data[0].Temperature.Metric.Value,fahrenheit:e.data[0].Temperature.Imperial.Value,name:u[t].Name,key:u[t].Key}}));d(t)}))}),[u]),Object(U.jsx)(le.a,{fixed:!0,children:Object(U.jsxs)(Ce.a,{container:!0,spacing:3,className:e.gridCointainer,children:[Object(U.jsx)(Ce.a,{item:!0,xs:12,className:e.title,children:Object(U.jsx)(p.a,{component:"h4",variant:"h4",color:"blue",align:"center",children:"Your Favorite Cities"})}),u?Object(U.jsx)(Ce.a,{container:!0,spacing:2,children:s.map((function(e,a){return Object(U.jsx)(ve,Object(O.a)(Object(O.a)({onClick:function(){return a={Key:e.key,Name:e.name},n(S.CurrentCity.setCity(a)),void t.push("/");var a}},e),{},{selectedUnit:c}),a)}))}):Object(U.jsx)(Ce.a,{className:e.subtitle,children:Object(U.jsx)(Ae,{})})]})})},Ae=function(){return Object(U.jsx)("div",{children:Object(U.jsx)(p.a,{component:"h6",variant:"h6",children:"There are no favorite cities. Please Choose"})})};var Ue=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(I.c)((function(e){return e.favorites.data})),r=Object(I.b)(),j=function(e){r(S.CurrentLocation.setLocation({latitude:e.coords.latitude,longitude:e.coords.longitude}))},b=function(e){r(S.CurrentLocation.setNavigationError(!0))};Object(a.useEffect)((function(){navigator.geolocation.getCurrentPosition(j,b)}),[]),Object(a.useEffect)((function(){localStorage.setItem("favorites",JSON.stringify(i))}),[i]);var x=Object(d.a)({palette:{type:n?"dark":"light"}});return Object(U.jsx)(u.a,{theme:x,children:Object(U.jsx)(a.Fragment,{children:Object(U.jsx)(W.a,{className:"paper",children:Object(U.jsxs)("div",{className:"App",children:[Object(U.jsx)(P,{check:n,change:function(){return c(!n)}}),Object(U.jsx)(s.a,{children:Object(U.jsxs)(l.c,{children:[Object(U.jsx)(l.a,{path:"/favorites",component:De}),Object(U.jsx)(l.a,{path:"/",component:Le})]})})]})})})})},Re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,306)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};r.a.render(Object(U.jsx)(c.a.StrictMode,{children:Object(U.jsx)(I.a,{store:w,children:Object(U.jsx)(Ue,{})})}),document.getElementById("root")),Re()}},[[208,1,2]]]);
//# sourceMappingURL=main.9ae0b7dd.chunk.js.map