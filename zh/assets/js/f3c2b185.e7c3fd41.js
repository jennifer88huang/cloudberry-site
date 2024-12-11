"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[4598],{53362:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>n,metadata:()=>d,toc:()=>o});var t=i(85893),r=i(11151);const n={title:"DROP MATERIALIZED VIEW"},a="DROP MATERIALIZED VIEW",d={id:"sql-stmts/drop-materialized-view",title:"DROP MATERIALIZED VIEW",description:"Removes a materialized view.",source:"@site/docs/sql-stmts/drop-materialized-view.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/drop-materialized-view",permalink:"/zh/docs/sql-stmts/drop-materialized-view",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/drop-materialized-view.md",tags:[],version:"current",lastUpdatedBy:"vitalzf",lastUpdatedAt:1733904867,formattedLastUpdatedAt:"2024\u5e7412\u670811\u65e5",frontMatter:{title:"DROP MATERIALIZED VIEW"},sidebar:"docsbars",previous:{title:"DROP LANGUAGE",permalink:"/zh/docs/sql-stmts/drop-language"},next:{title:"DROP OPERATOR CLASS",permalink:"/zh/docs/sql-stmts/drop-operator-class"}},l={},o=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function c(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"drop-materialized-view",children:"DROP MATERIALIZED VIEW"}),"\n",(0,t.jsx)(s.p,{children:"Removes a materialized view."}),"\n",(0,t.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"DROP MATERIALIZED VIEW [ IF EXISTS ] <name> [, ...] [ CASCADE | RESTRICT ]\n"})}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"DROP MATERIALIZED VIEW"})," drops an existing materialized view. To run this command, you must be the owner of the materialized view."]}),"\n",(0,t.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"IF EXISTS"})})}),"\n",(0,t.jsx)(s.p,{children:"Do not throw an error if the materialized view does not exist. A notice is issued in this case."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"name"})})}),"\n",(0,t.jsx)(s.p,{children:"The name (optionally schema-qualified) of a materialized view to be dropped."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"CASCADE"})})}),"\n",(0,t.jsx)(s.p,{children:"Automatically drop objects that depend on the materialized view (such as other materialized views, or regular views), and in turn all objects that depend on those objects."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"RESTRICT"})})}),"\n",(0,t.jsx)(s.p,{children:"Refuse to drop the materialized view if any objects depend on it. This is the default."}),"\n",(0,t.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(s.p,{children:["This command removes the materialized view called ",(0,t.jsx)(s.code,{children:"order_summary"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"DROP MATERIALIZED VIEW order_summary;\n"})}),"\n",(0,t.jsx)(s.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"DROP MATERIALIZED VIEW"})," is a Cloudberry Database extension of the SQL standard."]}),"\n",(0,t.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/zh/docs/sql-stmts/alter-materialized-view",children:(0,t.jsx)(s.code,{children:"ALTER MATERIALIZED VIEW"})}),", ",(0,t.jsx)(s.a,{href:"/zh/docs/sql-stmts/create-materialized-view",children:(0,t.jsx)(s.code,{children:"CREATE MATERIALIZED VIEW"})}),", ",(0,t.jsx)(s.a,{href:"/zh/docs/sql-stmts/refresh-materialized-view",children:(0,t.jsx)(s.code,{children:"REFRESH MATERIALIZED VIEW"})})]})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11151:(e,s,i)=>{i.d(s,{Z:()=>d,a:()=>a});var t=i(67294);const r={},n=t.createContext(r);function a(e){const s=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(n.Provider,{value:s},e.children)}}}]);