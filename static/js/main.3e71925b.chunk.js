(this["webpackJsonpmedia-brouser"]=this["webpackJsonpmedia-brouser"]||[]).push([[0],{229:function(e,t,n){},230:function(e,t,n){},231:function(e,t,n){},235:function(e,t,n){},259:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(44),c=n.n(i),o=(n(229),n(230),n(14)),s=n(21),l=n(273),d=(n(231),n(1)),u=function(e){var t=e.children,n=e.headerName,a=e.isEmpty?"layout-gallery-img__outside layout-gallery-img__outside--empty":"layout-gallery-img__outside";return Object(d.jsx)(s.Card,{padding:4,className:a,children:Object(d.jsxs)(l.a,{className:"layout-gallery-img__inside",padding:[3,3,4,5],style:{width:"100%",margin:"0 auto"},children:[n&&Object(d.jsx)("h4",{children:n}),t]})})},j=n(275),m=n(24),g=n(50),b=0,h=function e(t,n,a,r,i,c,o,s){Object(g.a)(this,e),this.id=void 0,this.name=void 0,this.src=void 0,this.description=void 0,this.checkbox=void 0,this.type=void 0,this.dimension=void 0,this.size=void 0,this.id=t,this.name=n,this.src=a,this.description=r,this.checkbox=i,this.type=c,this.dimension=o,this.size=s},p=function(e){return e.map((function(e){return new h(b++,"some name",e,"some description",!1,"image/png","1280 * 720 px","128 kb")}))},O=p,x=function(e,t){return t.findIndex((function(t){return t.id===e}))},y=function(e){return e.map((function(e){return URL.createObjectURL(e)}))},C=function(e){return e.current.click()},f=function(e,t,n,a,r){return n(t.map((function(t){return a?Object(m.a)(Object(m.a)({},t),{},{checkbox:!r}):t.id===e?Object(m.a)(Object(m.a)({},t),{},{checkbox:!t.checkbox}):t})))},v=function(e,t,n){return t(e.filter((function(e){return"checkBox"===n?!e.checkbox:e.id!==n})))},A=function(){return Object(d.jsxs)("svg",{width:"48",height:"48",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M32.5228 21.5403V20.4727H30.3878V21.5403V29.013L24.4247 29.013L25.805 27.6328L26.5598 26.8779L25.0501 25.3682L24.2952 26.1231L21.0926 29.3257L20.3378 30.0805L21.0926 30.8354L24.2952 34.038L25.0501 34.7928L26.5598 33.2831L25.805 32.5283L24.4247 31.1481H31.4553H32.5228V30.0805V21.5403Z",fill:"#37383D"}),Object(d.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15 26.2526L15 27.3201L17.1351 27.3201L17.1351 26.2526L17.1351 18.7799L23.0981 18.7799L21.7179 20.1601L20.963 20.9149L22.4727 22.4246L23.2276 21.6698L26.4302 18.4672L27.1851 17.7123L26.4302 16.9575L23.2276 13.7549L22.4727 13L20.963 14.5097L21.7179 15.2646L23.0981 16.6448L16.0675 16.6448L15 16.6448L15 17.7123L15 26.2526Z",fill:"#37383D"})]})},k=function(){return Object(d.jsx)("svg",{width:"48",height:"48",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsx)("path",{d:"M18 18L24 24M24 24L30 30M24 24L30 18M24 24L18 30",stroke:"#37383D",strokeWidth:"2",strokeLinecap:"round"})})},w=function(e){var t=e.contentCard,n=e.setArrayContentCard,r=e.arrayContentCard,i=e.type,c=e.onReplaceClick,s=Object(a.useState)(!1),u=Object(o.a)(s,2),j=u[0],m=u[1];return Object(d.jsxs)(l.a,{className:"single-img ".concat(i),style:{height:"100%",position:"relative",margin:"auto"},onMouseEnter:function(){return m(!0)},onMouseLeave:function(){return m(!1)},children:[Object(d.jsx)("img",{className:"single-img__img",src:null===t||void 0===t?void 0:t.src,alt:null===t||void 0===t?void 0:t.description,style:{width:"50%"}}),j&&Object(d.jsxs)("div",{className:"single-img__buttons",children:[Object(d.jsx)("button",{onClick:c,children:Object(d.jsx)(A,{})}),Object(d.jsx)("button",{onClick:function(){return v(r,n,(null===t||void 0===t?void 0:t.id)||null)},children:Object(d.jsx)(k,{})})]}),Object(d.jsx)("h3",{className:"single-img__header",children:(null===t||void 0===t?void 0:t.description)||""})]})},S=n(272),N=n(268),D=n(54),E=function(e){var t=e.children,n=e.onDrop,a=e.setArrayContentCard,r=e.typeArrayContentCard,i=Object(N.a)((function(){return{accept:[D.b.FILE],drop:function(e){if(n){var t="single"===r?[e.files[0]]:e.files;n(t,a)}},collect:function(e){return{isOver:e.isOver(),canDrop:e.canDrop()}}}})),c=Object(o.a)(i,2),s=c[0],u=s.canDrop,j=s.isOver,m=c[1],g=u&&j;return Object(d.jsx)(l.a,{className:"layout-upload-box__container",style:{border:"1px ".concat(g?"green":"white"," dotted")},ref:m,children:t})},L=(n(235),function(){return Object(d.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("path",{d:"M12 5V19",stroke:"#37383D",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"}),Object(d.jsx)("path",{d:"M5 12H19",stroke:"#37383D",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"})]})}),P=function(){return Object(d.jsx)("svg",{width:"20",height:"17",viewBox:"0 0 20 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsx)("path",{d:"M10.6 3.19999L8.19999 0.799988H0.399993L1.23999 12.2L3.03999 3.19999H10.6ZM3.99999 4.39999L1.59999 16.4H17.2L19.6 4.39999H3.99999Z",fill:"#37383D"})})},U=function(e){var t=e.onUploadClick,n=e.onSelectClick,r=e.setArrayContentCard,i=e.onDrop,c=e.typeArrayContentCard,o=Object(a.useRef)(null);return Object(d.jsxs)(l.a,{className:"empty-container-img",children:[Object(d.jsx)(l.a,{className:"empty-container-img__header-container",children:Object(d.jsxs)(E,{setArrayContentCard:r,onDrop:i,typeArrayContentCard:c,children:[Object(d.jsx)("h4",{className:"empty-container-img__header-text above",children:"Drag a file here"}),Object(d.jsx)("p",{className:"empty-container-img__header-text below",children:"Max size 50mb"})]})}),Object(d.jsxs)(l.a,{className:"empty-container-img__buttons-container",children:[Object(d.jsxs)(S.a,{className:"empty-container-img__button left",onClick:function(){return t(o)},children:[Object(d.jsx)("input",{ref:o,type:"file",className:"empty-container-img__input-file",onChange:function(e){return function(e,t,n){var a,r,i=(null===e||void 0===e||null===(a=e.target)||void 0===a||null===(r=a.files)||void 0===r?void 0:r[0])?"single"===n?[e.target.files[0]]:Array.from(e.target.files):[],c=y(i);t(p(c))}(e,r,c)},style:{height:"0",width:"0"},multiple:!("single"===c)}),Object(d.jsx)(L,{}),"Upload new"]}),Object(d.jsxs)(S.a,{className:"empty-container-img__button right",onClick:n,children:[Object(d.jsx)(P,{}),"From Media Library"]})]})]})},_=n(269),R="card",Q=function(e){var t=e.children,n=e.contentCard,r=e.setArrayContentCard,i=e.arrayContentCard,c=e.moveCard,s=e.statusDragAndDrop,u=Object(a.useRef)(null),j=Object(N.a)({accept:R,collect:function(e){return{handlerId:e.getHandlerId()}},hover:function(e,t){var a;if(u.current&&s){var o=x(e.id,i),l=x(n.id,i);if(o!==l){var d=null===(a=u.current)||void 0===a?void 0:a.getBoundingClientRect(),j=(d.bottom-d.top)/2,m=t.getClientOffset().y-d.top;o<l&&m<j||o>l&&m>j||c&&c(o,l,i,r)}}}}),m=Object(o.a)(j,2),g=m[0].handlerId,b=m[1],h=Object(_.a)({type:R,item:function(){return{id:n.id,index:x(n.id,i)}},collect:function(e){return{isDragging:e.isDragging()}}}),p=Object(o.a)(h,2),O=p[0].isDragging?.5:1;return(0,p[1])(b(u)),Object(d.jsx)(l.a,{className:"layout-drag-and-drop__container",style:{opacity:O},ref:u,"data-handler-id":g,children:t})},B=n(270),G=n(274),W=n.p+"static/media/dragIcon.0528b043.svg",I=function(e){var t=e.contentCard,n=e.setArrayContentCard,a=e.arrayContentCard,r=e.setStatusCommonCheckBox,i=e.statusCommonCheckBox,c=e.setStatusDragAndDrop,o=e.namePage,s="header for list files"===t.id,u=function(e,t){e.stopPropagation(),c&&c(t)};return Object(d.jsxs)(d.Fragment,{children:["img-gallery"===o&&Object(d.jsxs)(j.a,{className:"single-file-data__container",columns:[8],onMouseDown:function(e){return c&&u(e,!1)},children:[Object(d.jsx)(l.a,{className:"single-file-data__drag-container",children:Object(d.jsx)("img",{className:"single-file-data__drag-icon",src:W,alt:"drag icon",onMouseDown:function(e){return c&&u(e,!0)}})}),Object(d.jsx)(l.a,{className:"single-file-data__check-box-container",children:Object(d.jsx)(B.a,{className:"single-file-data__check-box-item",checked:t.checkbox,onChange:function(){return function(e,n,a,r,i,c){e&&n(!a),f(t.id,i,c,e,a)}(s,r,i,t.id,a,n)}})}),Object(d.jsx)(l.a,{className:"single-file-data__img-container",children:s?Object(d.jsx)(G.a,{className:"single-file-data__img-header-text",children:t.src}):Object(d.jsx)("img",{className:"single-file-data__img-item",src:t.src,alt:t.name})}),Object(d.jsx)(l.a,{className:"single-file-data__name-container",children:Object(d.jsx)(G.a,{className:"single-file-data__name-text",children:t.name})}),Object(d.jsx)(l.a,{className:"single-file-data__size-container",children:Object(d.jsx)(G.a,{className:"single-file-data__size-text",children:t.size})}),Object(d.jsx)(l.a,{className:"single-file-data__type-container",children:Object(d.jsx)(G.a,{className:"single-file-data__type-text",children:t.type})}),Object(d.jsx)(l.a,{className:"single-file-data__dimension-container",children:Object(d.jsx)(G.a,{className:"single-file-data__dimension-text",children:t.dimension})}),Object(d.jsx)(l.a,{className:"single-file-data__description-container",children:Object(d.jsx)(G.a,{className:"single-file-data__description-text",children:t.description})})]}),"img-gallery"===o&&Object(d.jsx)("video",{width:"320",height:"240",controls:!0,children:Object(d.jsx)("source",{src:"",type:""})})]})},J=n.p+"static/media/bigViewImg.429b6cb3.svg",z=n.p+"static/media/listViewImg.72eac792.svg",K=function(e){var t=e.galleryArrayContentCard,n=e.setGalleryArrayContentCard,a=e.statusViewGallery,r=e.setStatusViewGallery,i=e.setStatusDragAndDrop,c="1px solid #1870F5",o=function(e){return e.find((function(e){return e.checkbox}))},s=function(e,t,n,a){n(e),a(t)};return Object(d.jsxs)(l.a,{className:"container-gallery-tools",children:[Object(d.jsxs)(j.a,{className:"gallery-tools__view-tools-container",columns:[2],gap:2,style:{width:"10%"},children:[Object(d.jsx)(l.a,{className:"view-tools-container__item-container left",onClick:function(){return s("bigImg",!0,r,i)},style:{border:"bigImg"===a?c:""},children:Object(d.jsx)("img",{className:"view-tools__icon",src:J,alt:"big img icon"})}),Object(d.jsx)(l.a,{className:"view-tools-container__item-container right",onClick:function(){return s("listImg",!1,r,i)},style:{border:"listImg"===a?c:""},children:Object(d.jsx)("img",{className:"view-tools-container__icon",src:z,alt:"list img icon"})})]}),o(t)&&Object(d.jsx)(l.a,{className:"gallery-tools__container-clear-checkBox",children:Object(d.jsx)(G.a,{className:"gallery-tools__text-clear-checkBox",onClick:function(){return f("deselect all checkbox",t,n,!0,!0)},children:"Deselect all"})}),Object(d.jsxs)(j.a,{className:"gallery-tools__buttons-container",columns:[2],gap:2,style:{width:"50%"},children:[Object(d.jsx)(S.a,{className:"gallery-tools__button left",children:"Upload new file"}),Object(d.jsx)(S.a,{className:"gallery-tools__button right",children:"From Media Area"})]}),o(t)&&Object(d.jsxs)(l.a,{className:"gallery-tools__container-remove-files",onClick:function(){return v(t,n,"checkBox")},children:[Object(d.jsx)("img",{className:"gallery-tools__remove-files-icon",src:z,alt:"list img icon"}),Object(d.jsx)(G.a,{className:"gallery-tools__remove-files-text",children:"Delete Selection"})]})]})},V=function(e){var t,n=e.galleryArrayContentCard,i=e.setGalleryArrayContentCard,c=e.moveCard,s=e.onDrop,l=e.onUploadClick,m=e.onSelectClick,g=e.statusViewGalleryProp,b=e.namePage,p=null!==(t=n&&!n.length)&&void 0!==t&&t,O=Object(a.useState)(g),x=Object(o.a)(O,2),y=x[0],C=x[1],f=Object(a.useState)(!1),v=Object(o.a)(f,2),A=v[0],k=v[1],S=new h("header for list files","File Name","Preview","Description",A,"Type","Dimension","File size"),N=Object(a.useState)(!0),D=Object(o.a)(N,2),E=D[0],L=D[1],P="bigImg"===y?[3]:[1];return Object(d.jsxs)(u,{headerName:"gallery img",isEmpty:p,children:[!p&&Object(d.jsxs)(d.Fragment,{children:["listImg"===y&&Object(d.jsx)(I,{contentCard:S,setArrayContentCard:i,arrayContentCard:n,setStatusCommonCheckBox:k,statusCommonCheckBox:A,namePage:b}),Object(d.jsx)(j.a,{className:"container-gallery-img",columns:P,gap:2,children:null===n||void 0===n?void 0:n.map((function(e,t){return Object(d.jsxs)(r.a.Fragment,{children:["img-gallery"===b&&Object(d.jsxs)(Q,{contentCard:e,setArrayContentCard:i,arrayContentCard:n,moveCard:c,statusDragAndDrop:E,children:["bigImg"===y&&Object(d.jsx)(w,{contentCard:e,setArrayContentCard:i,arrayContentCard:n,type:"gallery",onReplaceClick:m}),"listImg"===y&&Object(d.jsx)(I,{contentCard:e,setArrayContentCard:i,arrayContentCard:n,setStatusCommonCheckBox:k,statusCommonCheckBox:A,setStatusDragAndDrop:L,namePage:b})]}),"video-list"===y&&Object(d.jsx)(I,{contentCard:e,setArrayContentCard:i,arrayContentCard:n,setStatusCommonCheckBox:k,statusCommonCheckBox:A,setStatusDragAndDrop:L,namePage:b})]},t)}))}),Object(d.jsx)(K,{galleryArrayContentCard:n,setGalleryArrayContentCard:i,statusViewGallery:y,setStatusViewGallery:C,setStatusDragAndDrop:L})]}),p&&Object(d.jsx)(U,{onUploadClick:l,onSelectClick:m,setArrayContentCard:i,onDrop:s,typeArrayContentCard:"multiple"})]})},H=function(e){var t,n=e.singleArrayContentCard,a=e.setSingleArrayContentCard,r=e.onDrop,i=e.onUploadClick,c=e.onSelectClick,o=(null===n||void 0===n?void 0:n.length)&&n[0],s=null!==(t=n&&!n.length)&&void 0!==t&&t;return Object(d.jsxs)(u,{headerName:"",isEmpty:s,children:[!s&&Object(d.jsx)(w,{contentCard:o||null,setArrayContentCard:a,arrayContentCard:n,type:"container",onReplaceClick:c}),s&&Object(d.jsx)(U,{onUploadClick:i,onSelectClick:c,setArrayContentCard:a,onDrop:r,typeArrayContentCard:"single"})]})},F=n(48),q=n(271),M=n.p+"static/media/examplePic.0cada2aa.png",T=n.p+"static/media/pict2.adfed45c.png",X=n.p+"static/media/pict4.ff57b032.png",Z=n(159),Y=n.n(Z),$=n(267),ee=n(53),te="[FORM] Set form",ne="[PHOTO] Set form",ae="[getFailureAction] get failure action",re=[M],ie=[M,T,"data:image/png;base64,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",X,M,M,M,M,M],ce=function(e){var t=e.namePage,n=Object(a.useState)(O(re)),r=Object(o.a)(n,2),i=r[0],c=r[1],s=Object(a.useState)(O(ie)),l=Object(o.a)(s,2),u=l[0],m=l[1],g=Object(ee.b)();Object(a.useEffect)((function(){"video-list"===t&&g({type:te})}),[]);var b=Object(a.useCallback)((function(e,t,n,a){var r=n[e];a(Y()(n,{$splice:[[e,1],[t,0,r]]}))}),[i,u]),h=Object(a.useCallback)((function(e,t){if(null===e||void 0===e?void 0:e.length){var n=y(e);t(O(n))}}),[i,u]);return Object(d.jsxs)(F.a,{theme:q.a,children:[("img-single"===t||"img-gallery"===t)&&Object(d.jsx)($.a,{backend:D.a,children:Object(d.jsxs)(j.a,{className:"container-img",children:["img-single"===t&&Object(d.jsx)(H,{singleArrayContentCard:i,setSingleArrayContentCard:c,onDrop:h,onUploadClick:C,onSelectClick:function(){}}),"img-gallery"===t&&Object(d.jsx)(V,{galleryArrayContentCard:u,setGalleryArrayContentCard:m,moveCard:b,onDrop:h,onUploadClick:C,onSelectClick:function(){},statusViewGalleryProp:"bigImg",namePage:t})]})}),"video-list"===t&&Object(d.jsx)(V,{galleryArrayContentCard:u,setGalleryArrayContentCard:m,moveCard:b,onDrop:h,onUploadClick:C,onSelectClick:function(){},statusViewGalleryProp:"listImg",namePage:t})]})},oe=function(){return Object(d.jsx)(ce,{namePage:"video-list"})},se=n(22),le=n(160),de={arrayVideo:null},ue=Object(se.combineReducers)({video:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;return t.type===ne?Object(m.a)(Object(m.a)({},e),{},{arrayVideo:t.payload}):e}}),je=n(164),me=n(162),ge=n(11),be=function(){return Object(d.jsx)(ce,{namePage:"img-gallery"})},he=function(){return Object(d.jsx)(ce,{namePage:"img-single"})},pe=n(25),Oe=n.n(pe),xe=n(57),ye=n(161),Ce=n(239),fe=Object({NODE_ENV:"production",PUBLIC_URL:"/media_brouser_local_public",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_HOST||"https://api.sproutvideo.com/v1/videos",ve=function e(){Object(g.a)(this,e)};ve.getArrayVideoService=Object(ye.a)(Oe.a.mark((function e(){var t;return Oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ce.get("".concat(fe),{headers:{"Content-Type":"application/json","SproutVideo-Api-Key":"dac3333cba924e94f891304e38f40536"}});case 2:return t=e.sent,console.log(t),e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));var Ae=Oe.a.mark(we),ke=Oe.a.mark(Se);function we(){var e;return Oe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ve.getArrayVideoService();case 3:return e=t.sent,t.next=6,Object(xe.a)({type:ne,payload:e});case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(xe.a)((n=t.t0,{type:ae,payload:n}));case 12:case"end":return t.stop()}var n}),Ae,null,[[0,8]])}function Se(){return Oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(xe.b)(te,we);case 2:case"end":return e.stop()}}),ke)}var Ne=Object(je.a)(),De=Object(se.createStore)(ue,Object(le.composeWithDevTools)({trace:!0,traceLimit:25})(Object(se.applyMiddleware)(Ne)));Ne.run(Se);var Ee=function(){return Object(d.jsx)(ee.a,{store:De,children:Object(d.jsx)(me.a,{children:Object(d.jsx)("div",{className:"wrapper",children:Object(d.jsx)(ge.c,{children:Object(d.jsxs)("main",{className:"main",children:[Object(d.jsx)(oe,{}),Object(d.jsx)(ge.a,{component:oe,path:"media_brouser_local_public/video/list/",exact:!0}),Object(d.jsx)(ge.a,{component:he,path:"/img/single/",exact:!0}),Object(d.jsx)(ge.a,{component:be,path:"/img/gallery/",exact:!0})]})})})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(d.jsxs)(r.a.StrictMode,{children:["123456",Object(d.jsx)(Ee,{})]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[259,1,2]]]);
//# sourceMappingURL=main.3e71925b.chunk.js.map