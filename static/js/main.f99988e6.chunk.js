(this["webpackJsonpspotify-u"]=this["webpackJsonpspotify-u"]||[]).push([[0],{24:function(e,t,n){},29:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},57:function(e,t,n){e.exports=n(80)},62:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(15),i=n.n(o),c=(n(62),n(6)),l=n(51),s=n(26),u=n.n(s),m=n(50),d=n(12),f=Object(d.a)(),h=new m.a,g=function(){p()},p=function(){var e=h.get("access_token");if(void 0!==e)return Promise.resolve(e);var t,n=function(){var e=u.a.parse(window.location.search),t=e.access_token,n=e.refresh_token,a=e.expires_in,r=Object(l.a)(e,["access_token","refresh_token","expires_in"]);return function(e){window.history.replaceState(null,"",window.location.href.replace(window.location.search,(""!==e?"?":"")+e))}(u.a.stringify(r)),window.location.hash=window.location.hash.replace("_=_",""),{access_token:t,expires_in:a,refresh_token:n}}();return e=n.access_token,void 0!==(t=e)&&null!==t&&""!==t?(y(e,n.refresh_token),Promise.resolve(e)):(E(),null)},v=function(){if(void 0===h.get("recently_refreshed_access_token")){var e=h.get("refresh_token");void 0!==e&&(console.log("Refreshing access token..."),fetch("https://spotify-u-backend.herokuapp.com/refresh_token?refresh_token="+e).then((function(e){return e.json()})).then((function(t){console.log("Refreshed access token"),y(t.access_token,e)})))}};function E(){f.push("/loading"),window.location.replace("https://spotify-u-backend.herokuapp.com/login")}function y(e,t){h.set("access_token",e,{path:"/",maxAge:3600}),h.set("refresh_token",t,{path:"/",maxAge:3600}),h.set("recently_refreshed_access_token","",{path:"/",maxAge:900})}function k(e,t){var n=p();return null===n?Promise.resolve(null):n.then((function(n){return fetch("https://api.spotify.com/v1/"+e+(t?"?"+u.a.stringify(t):""),{headers:{Authorization:"Bearer "+n}})})).then(b)}function b(e){var t=e.status;if(204===t)return Promise.resolve(null);var n=e.json();return Promise.all([t,n]).then((function(e){var t=Object(c.a)(e,2),n=t[0],a=t[1];return 401===n?(h.remove("access_token"),E(),null):200===n?a:null}))}var w=n(29),j=n.n(w),x=(n(24),n(105)),I=n(102),O=n(104),_=n(112),S=n(113),N=n(49),C=n(110),P=function(e){var t=Object(a.useState)(!0),n=Object(c.a)(t,2),o=n[0],i=n[1];return Object(a.useEffect)((function(){var t=setTimeout((function(){i(!1)}),e.wait);return function(){clearTimeout(t)}}),[]),o?null:r.a.createElement(r.a.Fragment,null,e.children)},L=n(101);function T(){return r.a.createElement(P,{wait:500},r.a.createElement(L.a,null))}function A(e){var t,n=e.index,a=e.style,o=e.data.items[n],i=!e.data.isItemLoaded||e.data.isItemLoaded(n);return t=!!e.data.isLoading&&e.data.isLoading?r.a.createElement(_.a,{style:{height:56},key:n},r.a.createElement(C.a,{justifyContent:"center",width:"100%",display:"flex"},r.a.createElement(T,null))):i?r.a.createElement(_.a,{button:!0,key:n,selected:e.data.selectedIndex===n,onClick:function(){e.data.onItemClick&&o&&e.data.onItemClick(o,n)}},r.a.createElement(S.a,{primaryTypographyProps:{noWrap:!0},primary:e.data.getText(o)})):null,r.a.createElement("div",{style:a},t)}var z=function(e){var t=Object(a.useState)(null),n=Object(c.a)(t,2),o=n[0],i=n[1],l={selectedIndex:o,onItemClick:function(t,n){var a=n===o;i(n),e.onItemClick&&e.onItemClick(t,n),!a&&e.onItemSelected&&e.onItemSelected(t,n)},items:e.items,getText:e.getText,isLoading:e.isLoading,isItemLoaded:e.isItemLoaded};return r.a.createElement("div",null,r.a.createElement(N.a,{itemData:l,height:e.height,width:"100%",itemSize:e.itemSize,itemCount:e.itemCount?e.itemCount:l.items.length,onItemsRendered:e.onItemsRendered,ref:e.reff},A))},B=n(46);var R=function(e){var t=e.hasNextPage?e.items.length+1:e.items.length,n=e.isNextPageLoading?function(){return Promise.resolve()}:e.loadNextPage,a=function(t){return!e.hasNextPage||t<e.items.length};function o(t){return e.getText(t)}return r.a.createElement(B.a,{isItemLoaded:a,itemCount:t,loadMoreItems:n},(function(n){var i=n.onItemsRendered,c=n.ref;return r.a.createElement(z,{isLoading:e.isNextPageLoading,isItemLoaded:a,onItemsRendered:i,reff:c,height:e.height,itemSize:e.itemSize,items:e.items,itemCount:t,getText:o,onItemSelected:e.onItemSelected,onItemClick:e.onItemClick})}))},W=n(103),J=Object(I.a)((function(e){return{root:{minWidth:e.spacing(22),margin:e.spacing(3),backgroundColor:e.palette.grey[900]}}})),M=function(e){var t=J(),n=Object(a.useState)([]),o=Object(c.a)(n,2),i=o[0],l=o[1],s=Object(a.useState)(0),u=Object(c.a)(s,2),m=u[0],d=u[1],f=Object(a.useState)(null),h=Object(c.a)(f,2),g=h[0],p=h[1],v=Object(a.useState)(!1),E=Object(c.a)(v,2),y=E[0],b=E[1],w=Object(a.useState)(!0),j=Object(c.a)(w,2),x=j[0],I=j[1];Object(a.useEffect)((function(){k("me").then((function(e){return e?e.id:null})).then((function(e){O(e,0),p(e)}))}),[]);var O=function(e,t){if(!e)return Promise.resolve();b(!0);var n,a;return(n=40,a=t+m,k("me/playlists",{limit:n,offset:a}).then((function(e){return e||null}))).then((function(t){if(b(!1),t){t.items.length<40&&I(!1);var n=t.items.filter((function(t){return t.owner.id===e}));d(m+t.items.length-n.length),l((function(e){return e.concat(n)}))}else I(!1)}))};return r.a.createElement(W.a,{elevation:3,className:t.root},r.a.createElement(R,{hasNextPage:x,isNextPageLoading:y,height:784,itemSize:46,items:i,getText:function(e){return e.name},loadNextPage:function(e){return O(g,e)},onItemSelected:e.onPlaylistSelected}))},D=Object(I.a)((function(e){return{root:{display:"flex"},app:{width:"100%",justifyContent:"center"},header:{width:"100%",justifyContent:"center",paddingTop:e.spacing(3)},content:{paddingTop:e.spacing(3)},sideBar:{width:"100%",maxWidth:e.spacing(40)}}})),F=function(){var e=D(),t=Object(a.useState)(null),n=Object(c.a)(t,2),o=n[0],i=n[1],l=Object(a.useState)(null),s=Object(c.a)(l,2),u=s[0],m=s[1];Object(a.useEffect)((function(){d()}),[]);var d=function(){k("me/player/currently-playing").then((function(e){return e&&e.item?e.item.name:null})).then((function(e){i(e)}))};return r.a.createElement("div",{className:e.root},r.a.createElement("div",{className:e.sideBar},r.a.createElement(M,{onPlaylistSelected:function(e,t){m(e)}})),r.a.createElement("div",{className:e.app},u?r.a.createElement("div",null,r.a.createElement("div",{className:e.header},u?r.a.createElement("div",null,r.a.createElement("img",{height:300,src:u.images[0].url,alt:"Playlist Cover"}),r.a.createElement("h1",null,u.name)):r.a.createElement("img",{src:j.a,className:"App-logo",alt:"logo"}),r.a.createElement("p",null)),r.a.createElement(O.a,{variant:"middle"}),r.a.createElement("div",{className:e.content},r.a.createElement(x.a,{color:"primary",variant:"outlined",onClick:d},"Show Current Song"),r.a.createElement("h1",null,o||"-No song is currently playing-"))):r.a.createElement("div",{className:e.header},r.a.createElement("h1",null,"Select a playlist"))),r.a.createElement("div",{className:e.sideBar}))},$=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("img",{src:j.a,className:"App-logo",alt:"logo"}),r.a.createElement("h1",null,"Loading..."))},q=n(109),G=n(108),H=n(107),K=n(48),Q=n(47),U=n.n(Q),V=n(106),X=Object(K.a)({palette:{type:"dark",background:{default:"#181818"},primary:V.a,secondary:U.a,grey:{800:"#282828",900:"#121212"}}});var Y=function(){return g(),v(),window.setInterval((function(){v()}),6e4),r.a.createElement("div",{className:"outerWrap"},r.a.createElement(H.a,{theme:X},r.a.createElement(G.a,null),r.a.createElement(q.b,{history:f},r.a.createElement("div",{className:"App"},r.a.createElement(q.c,null,r.a.createElement(q.a,{path:"/",exact:!0,component:F}),r.a.createElement(q.a,{path:"/loading",exact:!0,component:$}),r.a.createElement(q.a,{path:"/auth",exact:!0,component:function(){return g(),null}}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[57,1,2]]]);
//# sourceMappingURL=main.f99988e6.chunk.js.map