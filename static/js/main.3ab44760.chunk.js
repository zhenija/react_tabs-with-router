(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var c=a(9),s=a.n(c),n=a(4),b=(a(14),a(15),a(16),a(2)),i=a(6),l=a.n(i),d=(a(0),a(1)),r=function(e){var t=e.tabId,a=e.selectedTabId,c=e.title;return Object(d.jsx)("li",{className:l()({"is-active":t===a}),children:Object(d.jsx)(n.b,{to:"/tabs/".concat(t),"data-cy":"Tab",children:c})},t)},j=function(e){var t=e.tabs,a=e.selectedTab;return Object(d.jsx)("div",{"data-cy":"TabsComponent",children:Object(d.jsx)("div",{className:"tabs is-boxed",children:Object(d.jsx)("ul",{children:t.map((function(e){return Object(d.jsx)(r,{tabId:e.id,selectedTabId:null===a||void 0===a?void 0:a.id,title:e.title})}))})})})},o=function(e){var t=e.tabs,a=e.selectedTab;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"title",children:"Tabs page"}),Object(d.jsx)(j,{tabs:t,selectedTab:a}),Object(d.jsx)("div",{className:"block","data-cy":"TabContent",children:a?a.content:"Please select a tab"})]})},h=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],x=function(){var e=Object(b.g)("/tabs/:tabId"),t=h.find((function(t){return t.id===(null===e||void 0===e?void 0:e.params.tabId)}));return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"navbar-brand",children:[Object(d.jsx)(n.c,{to:"/",className:function(e){var t=e.isActive;return l()("navbar-item",{"is-active":t})},children:"Home"}),Object(d.jsx)(n.c,{to:"/tabs",className:function(e){var t=e.isActive;return l()("navbar-item",{"has-background-grey-lighter":t})},children:"Tabs"})]})})}),Object(d.jsx)("div",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)(b.d,{children:[Object(d.jsx)(b.b,{path:"*",element:Object(d.jsx)("h1",{className:"title",children:"Page not found"})}),Object(d.jsx)(b.b,{path:"/",element:Object(d.jsx)("h1",{className:"title",children:"Home page"})}),Object(d.jsx)(b.b,{path:"home",element:Object(d.jsx)(b.a,{to:"/",replace:!0})}),Object(d.jsxs)(b.b,{path:"/tabs",children:[Object(d.jsx)(b.b,{index:!0,element:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"title",children:"Tabs page"}),Object(d.jsx)(j,{tabs:h,selectedTab:t}),Object(d.jsx)("div",{className:"block","data-cy":"TabContent",children:"Please select a tab"})]})}),Object(d.jsx)(b.b,{path:":tabId",element:Object(d.jsx)(o,{tabs:h,selectedTab:t})})]})]})})})]})};s.a.render(Object(d.jsx)(n.a,{children:Object(d.jsx)(x,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.3ab44760.chunk.js.map