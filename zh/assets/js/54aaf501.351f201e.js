"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[4191],{13105:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=s(85893),r=s(11151);const i={title:"DROP TYPE"},o="DROP TYPE",a={id:"sql-stmts/drop-type",title:"DROP TYPE",description:"Removes a data type.",source:"@site/docs/sql-stmts/drop-type.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/drop-type",permalink:"/zh/docs/sql-stmts/drop-type",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/drop-type.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1733824616,formattedLastUpdatedAt:"2024\u5e7412\u670810\u65e5",frontMatter:{title:"DROP TYPE"},sidebar:"docsbars",previous:{title:"DROP TRIGGER",permalink:"/zh/docs/sql-stmts/drop-trigger"},next:{title:"DROP USER MAPPING",permalink:"/zh/docs/sql-stmts/drop-user-mapping"}},d={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"drop-type",children:"DROP TYPE"}),"\n",(0,n.jsx)(t.p,{children:"Removes a data type."}),"\n",(0,n.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"DROP TYPE [IF EXISTS] <name> [, ...] [CASCADE | RESTRICT]\n"})}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"DROP TYPE"})," will remove a user-defined data type. Only the owner of a type can remove it."]}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"IF EXISTS"})})}),"\n",(0,n.jsx)(t.p,{children:"Do not throw an error if the type does not exist. Cloudberry Database issues a notice in this case."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"name"})})}),"\n",(0,n.jsx)(t.p,{children:"The name (optionally schema-qualified) of the data type to remove."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"CASCADE"})})}),"\n",(0,n.jsx)(t.p,{children:"Automatically drop objects that depend on the type (such as table columns, functions, operators), and in turn all objects that depend on those objects."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"RESTRICT"})})}),"\n",(0,n.jsx)(t.p,{children:"Refuse to drop the type if any objects depend on it. This is the default."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(t.p,{children:["Remove the data type ",(0,n.jsx)(t.code,{children:"box"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"DROP TYPE box;\n"})}),"\n",(0,n.jsx)(t.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,n.jsxs)(t.p,{children:["This command is similar to the corresponding command in the SQL standard, apart from the ",(0,n.jsx)(t.code,{children:"IF EXISTS"})," option, which is a Cloudberry Database extension. But note that much of the ",(0,n.jsx)(t.code,{children:"CREATE TYPE"})," command and the data type extension mechanisms in Cloudberry Database differ from the SQL standard."]}),"\n",(0,n.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/zh/docs/sql-stmts/alter-type",children:(0,n.jsx)(t.code,{children:"ALTER TYPE"})}),", ",(0,n.jsx)(t.a,{href:"/zh/docs/sql-stmts/create-type",children:(0,n.jsx)(t.code,{children:"CREATE TYPE"})})]})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>a,a:()=>o});var n=s(67294);const r={},i=n.createContext(r);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);