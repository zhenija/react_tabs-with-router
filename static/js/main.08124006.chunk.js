(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var c=a(9),s=a.n(c),n=a(4),i=(a(14),a(15),a(16),a(2)),b=a(6),l=a.n(b),d=(a(0),a(1)),j=function(e){var t=e.tabs,a=e.selectedTab;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{"data-cy":"TabsComponent",children:Object(d.jsx)("div",{className:"tabs is-boxed",children:Object(d.jsx)("ul",{children:t.map((function(e){return Object(d.jsx)("li",{className:l()({"is-active":e.id===(null===a||void 0===a?void 0:a.id)}),children:Object(d.jsx)(n.b,{to:"/tabs/".concat(e.id),"data-cy":"Tab",children:e.title})},e.id)}))})})})})},r=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],o=function(){var e=Object(i.g)("/tabs/:tabId"),t=r.find((function(t){return t.id===(null===e||void 0===e?void 0:e.params.tabId)}));return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"navbar-brand",children:[Object(d.jsx)(n.c,{to:"/",className:function(e){var t=e.isActive;return l()("navbar-item",{"is-active":t})},children:"Home"}),Object(d.jsx)(n.c,{to:"/tabs",className:function(e){var t=e.isActive;return l()("navbar-item",{"has-background-grey-lighter":t})},children:"Tabs"})]})})}),Object(d.jsx)("div",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)(i.d,{children:[Object(d.jsx)(i.b,{path:"*",element:Object(d.jsx)("h1",{className:"title",children:"Page not found"})}),Object(d.jsx)(i.b,{path:"/",element:Object(d.jsx)("h1",{className:"title",children:"Home Page"})}),Object(d.jsx)(i.b,{path:"home",element:Object(d.jsx)(i.a,{to:"/",replace:!0})}),Object(d.jsxs)(i.b,{path:"/tabs",children:[Object(d.jsx)(i.b,{index:!0,element:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"title",children:"Tabs page"}),Object(d.jsx)(j,{tabs:r,selectedTab:t}),Object(d.jsx)("div",{className:"block","data-cy":"TabContent",children:"Please select a tab"})]})}),Object(d.jsx)(i.b,{path:":tabId",element:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"title",children:"Tabs page"}),Object(d.jsx)(j,{tabs:r,selectedTab:t}),Object(d.jsx)("div",{className:"block","data-cy":"TabContent",children:null===t||void 0===t?void 0:t.content})]})})]})]})})})]})};s.a.render(Object(d.jsx)(n.a,{children:Object(d.jsx)(o,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.08124006.chunk.js.map