(this["webpackJsonpbeyond-capital-react"]=this["webpackJsonpbeyond-capital-react"]||[]).push([[0],{15:function(e,t,i){},30:function(e,t,i){},31:function(e,t,i){},38:function(e,t,i){},47:function(e,t,i){},48:function(e,t,i){"use strict";i.r(t);var c=i(1),s=i.n(c),n=i(23),a=i.n(n),l=i(12),d=(i(30),i(2)),r=i(4),j=i(5),h=i(7),o=i(6),b=i(25),m=i(19),O=i.n(m),u=(i(31),i(0)),x=function(e){Object(h.a)(i,e);var t=Object(o.a)(i);function i(e){var c;return Object(r.a)(this,i),(c=t.call(this,e)).IMAGE_PARTS=4,c.changeTO=null,c.AUTOCHANGE_TIME=4e3,c.state={activeSlide:-1,prevSlide:-1,sliderReady:!1},c}return Object(j.a)(i,[{key:"componentWillUnmount",value:function(){window.clearTimeout(this.changeTO)}},{key:"componentDidMount",value:function(){var e=this;this.runAutochangeTO(),setTimeout((function(){e.setState({activeSlide:0,sliderReady:!0})}),0)}},{key:"runAutochangeTO",value:function(){var e=this;this.changeTO=setTimeout((function(){e.changeSlides(1),e.runAutochangeTO()}),this.AUTOCHANGE_TIME)}},{key:"changeSlides",value:function(e){window.clearTimeout(this.changeTO);var t=this.props.slides.length,i=this.state.activeSlide,c=i+e;c<0&&(c=t-1),c>=t&&(c=0),this.setState({activeSlide:c,prevSlide:i})}},{key:"render",value:function(){var e=this,t=this.state,i=t.activeSlide,c=t.prevSlide,s=t.sliderReady;return Object(u.jsxs)("div",{className:O()("slider",{"s--ready":s}),children:[Object(u.jsx)("p",{className:"slider__top-heading",children:"The Vitoria"}),Object(u.jsx)("div",{className:"slider__slides",children:this.props.slides.map((function(t,s){return Object(u.jsxs)("div",{className:O()("slider__slide",{"s--active":i===s,"s--prev":c===s}),children:[Object(u.jsxs)("div",{className:"slider__slide-content",children:[Object(u.jsx)("h3",{className:"slider__slide-subheading",children:t.content||t.title}),Object(u.jsx)("h2",{className:"slider__slide-heading",children:t.title.split("").map((function(e,t){return Object(u.jsx)("span",{children:e},t)}))}),Object(u.jsx)("div",{children:1===t.key?Object(u.jsx)(l.b,{to:"/ALineBLine",className:"slider__slide-readmore",children:"read more"}):3===t.key?Object(u.jsx)(l.b,{to:"/PentHouse",className:"slider__slide-readmore",children:"read more"}):2===t.key?Object(u.jsx)(l.b,{to:"/Garden",className:"slider__slide-readmore",children:"read more"}):void 0})]}),Object(u.jsx)("div",{className:"slider__slide-parts",children:Object(b.a)(Array(e.IMAGE_PARTS).fill()).map((function(e,i){return Object(u.jsx)("div",{className:"slider__slide-part",children:Object(u.jsx)("div",{className:"slider__slide-part-inner",style:{backgroundImage:"url(".concat(t.img,")")}})},i)}))})]},t.title)}))}),Object(u.jsx)("div",{className:"slider__control",onClick:function(){return e.changeSlides(-1)}}),Object(u.jsx)("div",{className:"slider__control slider__control--right",onClick:function(){return e.changeSlides(1)}})]})}}]),i}(s.a.Component);i(38);var g=function(){return Object(u.jsx)("nav",{children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"/",className:"logo",children:"The Vitoria"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"/Astoria",children:"The Neighborhood"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"/Availability",children:"Availability"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"/ContactUs",children:"Contact Us"})})]})})},v=i.p+"static/media/BeyondCapitalV2.81da0235.gif",p=i.p+"static/media/BLineUnit.7f85584b.jpg",N=i.p+"static/media/GardenUnit.51279a12.jpg",f=i.p+"static/media/PentHouse.7b9a69c3.jpg",w=function(e){Object(h.a)(i,e);var t=Object(o.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(j.a)(i,[{key:"componentDidMount",value:function(){var e=document.getElementsByClassName("bg"),t=document.getElementsByClassName("hidden-slideshow");window.addEventListener("load",(function(i){setTimeout((function(){e[0].style.display="none",t[0].style.display="block",document.getElementsByTagName("BODY")[0].style.background="white"}),4e3)}))}},{key:"render",value:function(){var e=[{key:1,title:"A-line/B-Line",content:"add some other content",img:p},{key:2,title:"Garden Apartment",img:N},{key:3,title:"Penthouse",content:"some other content",img:f}];return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"bg",children:Object(u.jsx)("img",{src:v,width:"100%",height:"100%",alt:"logo pic"})}),Object(u.jsxs)("div",{className:"hidden-slideshow",children:[Object(u.jsx)(g,{}),Object(u.jsx)(x,{slides:e})]})]})}}]),i}(s.a.Component),y=Object(d.f)(w),k=i(8),_=(i(15),function(e){Object(h.a)(i,e);var t=Object(o.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(j.a)(i,[{key:"componentDidMount",value:function(){window.addEventListener("load",(function(e){document.getElementsByTagName("BODY")[0].style.background="white"}))}},{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:Object(u.jsx)(g,{})}),Object(u.jsx)("div",{className:"header-image",children:Object(u.jsx)("img",{src:p,alt:"bline img",height:"90%",width:"100%"})}),Object(u.jsxs)("div",{className:"page-content",children:[Object(u.jsxs)("div",{className:"title-text",children:[Object(u.jsx)("div",{className:"title-wrapper",children:Object(u.jsx)("p",{children:"This will be some title"})}),Object(u.jsx)("div",{className:"text-wrapper",children:Object(u.jsx)(k.LoremIpsum,{p:1})})]}),Object(u.jsx)("div",{className:"single-image",children:Object(u.jsx)("img",{src:p,alt:"bline",width:"100%",height:"100%"})}),Object(u.jsxs)("div",{className:"images-descriptions",children:[Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{className:"left",children:Object(u.jsx)(k.LoremIpsum,{p:1})}),Object(u.jsx)("div",{className:"right",children:Object(u.jsx)("img",{src:p,alt:"bline",width:"100%",height:"100%"})})]}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{className:"left",children:Object(u.jsx)("img",{src:p,alt:"bline",width:"100%",height:"100%"})}),Object(u.jsx)("div",{className:"right",children:Object(u.jsx)(k.LoremIpsum,{p:1})})]}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{className:"left",children:Object(u.jsx)(k.LoremIpsum,{p:1})}),Object(u.jsx)("div",{className:"right",children:Object(u.jsx)("img",{src:p,alt:"bline",width:"100%",height:"100%"})})]})]}),Object(u.jsx)("div",{className:"single-image",children:Object(u.jsx)("img",{src:p,alt:"bline",width:"100%",height:"100%"})}),Object(u.jsx)("div",{className:"single-image",children:Object(u.jsx)("img",{src:p,alt:"bline",width:"100%",height:"100%"})}),Object(u.jsx)("div",{className:"single-image",children:Object(u.jsx)("img",{src:p,alt:"bline",width:"100%",height:"100%"})})]})]})}}]),i}(s.a.Component)),T=Object(d.f)(_),L=function(e){Object(h.a)(i,e);var t=Object(o.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(j.a)(i,[{key:"componentDidMount",value:function(){window.addEventListener("load",(function(e){document.getElementsByTagName("BODY")[0].style.background="white"}))}},{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:Object(u.jsx)(g,{})}),Object(u.jsx)("div",{className:"header-image",children:Object(u.jsx)("img",{src:N,alt:"bline img",height:"90%",width:"100%"})}),Object(u.jsxs)("div",{className:"page-content",children:[Object(u.jsxs)("div",{className:"title-text",children:[Object(u.jsx)("div",{className:"title-wrapper",children:Object(u.jsx)("p",{children:"This will be some title"})}),Object(u.jsx)("div",{className:"text-wrapper",children:Object(u.jsx)(k.LoremIpsum,{p:1})})]}),Object(u.jsx)("div",{className:"single-image",children:Object(u.jsx)("img",{src:N,alt:"bline",width:"100%",height:"100%"})}),Object(u.jsxs)("div",{className:"images-descriptions",children:[Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{className:"left",children:Object(u.jsx)(k.LoremIpsum,{p:1})}),Object(u.jsx)("div",{className:"right",children:Object(u.jsx)("img",{src:N,alt:"bline",width:"100%",height:"100%"})})]}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{className:"left",children:Object(u.jsx)("img",{src:N,alt:"bline",width:"100%",height:"100%"})}),Object(u.jsx)("div",{className:"right",children:Object(u.jsx)(k.LoremIpsum,{p:1})})]}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{className:"left",children:Object(u.jsx)(k.LoremIpsum,{p:1})}),Object(u.jsx)("div",{className:"right",children:Object(u.jsx)("img",{src:N,alt:"bline",width:"100%",height:"100%"})})]})]}),Object(u.jsx)("div",{className:"single-image",children:Object(u.jsx)("img",{src:N,alt:"bline",width:"100%",height:"100%"})}),Object(u.jsx)("div",{className:"single-image",children:Object(u.jsx)("img",{src:N,alt:"bline",width:"100%",height:"100%"})}),Object(u.jsx)("div",{className:"single-image",children:Object(u.jsx)("img",{src:N,alt:"bline",width:"100%",height:"100%"})})]})]})}}]),i}(s.a.Component),B=Object(d.f)(L),E=function(e){Object(h.a)(i,e);var t=Object(o.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(j.a)(i,[{key:"componentDidMount",value:function(){window.addEventListener("load",(function(e){document.getElementsByTagName("BODY")[0].style.background="white"}))}},{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:Object(u.jsx)(g,{})}),Object(u.jsx)("div",{className:"header-image",children:Object(u.jsx)("img",{src:f,alt:"bline img",height:"90%",width:"100%"})}),Object(u.jsxs)("div",{className:"page-content",children:[Object(u.jsxs)("div",{className:"title-text",children:[Object(u.jsx)("div",{className:"title-wrapper",children:Object(u.jsx)("p",{children:"This will be some title"})}),Object(u.jsx)("div",{className:"text-wrapper",children:Object(u.jsx)(k.LoremIpsum,{p:1})})]}),Object(u.jsx)("div",{className:"single-image",children:Object(u.jsx)("img",{src:f,alt:"bline",width:"100%",height:"100%"})}),Object(u.jsxs)("div",{className:"images-descriptions",children:[Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{className:"left",children:Object(u.jsx)(k.LoremIpsum,{p:1})}),Object(u.jsx)("div",{className:"right",children:Object(u.jsx)("img",{src:f,alt:"bline",width:"100%",height:"100%"})})]}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{className:"left",children:Object(u.jsx)("img",{src:f,alt:"bline",width:"100%",height:"100%"})}),Object(u.jsx)("div",{className:"right",children:Object(u.jsx)(k.LoremIpsum,{p:1})})]}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{className:"left",children:Object(u.jsx)(k.LoremIpsum,{p:1})}),Object(u.jsx)("div",{className:"right",children:Object(u.jsx)("img",{src:f,alt:"bline",width:"100%",height:"100%"})})]})]}),Object(u.jsx)("div",{className:"single-image",children:Object(u.jsx)("img",{src:f,alt:"bline",width:"100%",height:"100%"})}),Object(u.jsx)("div",{className:"single-image",children:Object(u.jsx)("img",{src:f,alt:"bline",width:"100%",height:"100%"})}),Object(u.jsx)("div",{className:"single-image",children:Object(u.jsx)("img",{src:f,alt:"bline",width:"100%",height:"100%"})})]})]})}}]),i}(s.a.Component),A=Object(d.f)(E),C=function(e){Object(h.a)(i,e);var t=Object(o.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(j.a)(i,[{key:"componentDidMount",value:function(){window.addEventListener("load",(function(e){document.getElementsByTagName("BODY")[0].style.background="white"}))}},{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:Object(u.jsx)(g,{})}),Object(u.jsx)("div",{className:"header-image",children:Object(u.jsx)("img",{src:"https://www.cityguideny.com/columnpic/astoria.jpg",alt:"bline img",height:"90%",width:"100%"})})]})}}]),i}(s.a.Component),I=function(e){Object(h.a)(i,e);var t=Object(o.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(j.a)(i,[{key:"componentDidMount",value:function(){window.addEventListener("load",(function(e){document.getElementsByTagName("BODY")[0].style.background="white"}))}},{key:"render",value:function(){return Object(u.jsx)("div",{children:Object(u.jsx)("div",{children:Object(u.jsx)(g,{})})})}}]),i}(s.a.Component),S=function(e){Object(h.a)(i,e);var t=Object(o.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(j.a)(i,[{key:"componentDidMount",value:function(){window.addEventListener("load",(function(e){document.getElementsByTagName("BODY")[0].style.background="white"}))}},{key:"render",value:function(){return Object(u.jsx)("div",{children:Object(u.jsx)("div",{children:Object(u.jsx)(g,{})})})}}]),i}(s.a.Component);i(47);var D=function(){return Object(u.jsx)("div",{className:"app",children:Object(u.jsxs)(d.c,{children:[Object(u.jsx)(d.a,{exact:!0,path:"/",component:y}),Object(u.jsx)(d.a,{exact:!0,path:"/ALineBLine",component:T}),Object(u.jsx)(d.a,{exact:!0,path:"/Garden",component:B}),Object(u.jsx)(d.a,{exact:!0,path:"/PentHouse",component:A}),Object(u.jsx)(d.a,{exact:!0,path:"/Astoria",component:C}),Object(u.jsx)(d.a,{exact:!0,path:"/Availability",component:I}),Object(u.jsx)(d.a,{exact:!0,path:"/ContactUs",component:S})]})})},M=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,49)).then((function(t){var i=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,a=t.getTTFB;i(e),c(e),s(e),n(e),a(e)}))};a.a.render(Object(u.jsx)(l.a,{children:Object(u.jsx)(D,{})}),document.getElementById("root")),M()}},[[48,1,2]]]);
//# sourceMappingURL=main.adb7d611.chunk.js.map