"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[581],{315:function(e,t,n){n.d(t,{Y:function(){return c}});var a="bd1f74544935b756e43565ea50ae79a5",r=n(243).Z.create({baseURL:"https://api.themoviedb.org",headers:{"Content-Type":"application/json"},params:{api_key:a,language:"en-US"}}),c=function(e){try{return r.get("/".concat(e))}catch(t){console.log(t)}};t.Z=a},581:function(e,t,n){n.r(t);var a=n(433),r=n(439),c=n(689),o=n(87),i=n(791),s=n(315),u=n(184);t.default=function(){var e="3/trending/movie/day",t=(0,i.useState)([]),n=(0,r.Z)(t,2),l=n[0],h=n[1],d=(0,c.TH)();return(0,i.useEffect)((function(){(0,s.Y)(e).then((function(e){h((0,a.Z)(e.data.results))})).catch((function(e){console.log(e.message)}))}),[e]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h1",{children:"Trending today"}),(0,u.jsx)("ul",{children:l.map((function(e){var t=e.original_title,n=e.id;return(0,u.jsx)("li",{className:e,children:(0,u.jsx)(o.rU,{to:"movies/".concat(n),state:{from:d},children:t})},n)}))})]})}}}]);
//# sourceMappingURL=581.be6aa1ef.chunk.js.map