"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[341],{94465:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>a});var t=s(85893),i=s(11151);const d={title:"DROP INDEX"},o="DROP INDEX",r={id:"sql-stmts/drop-index",title:"DROP INDEX",description:"Removes an index.",source:"@site/docs/sql-stmts/drop-index.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/drop-index",permalink:"/zh/docs/sql-stmts/drop-index",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/drop-index.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1733824616,formattedLastUpdatedAt:"2024\u5e7412\u670810\u65e5",frontMatter:{title:"DROP INDEX"},sidebar:"docsbars",previous:{title:"DROP GROUP",permalink:"/zh/docs/sql-stmts/drop-group"},next:{title:"DROP LANGUAGE",permalink:"/zh/docs/sql-stmts/drop-language"}},c={},a=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"drop-index",children:"DROP INDEX"}),"\n",(0,t.jsx)(n.p,{children:"Removes an index."}),"\n",(0,t.jsx)(n.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"DROP INDEX [ CONCURRENTLY ] [ IF EXISTS ] <name> [, ...] [ CASCADE | RESTRICT ]\n"})}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"DROP INDEX"})," drops an existing index from the database system. To run this command you must be the owner of the index."]}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"CONCURRENTLY"})})}),"\n",(0,t.jsxs)(n.p,{children:["Drop the index without locking out concurrent selects, inserts, updates, and deletes on the index's table. A normal ",(0,t.jsx)(n.code,{children:"DROP INDEX"})," acquires an ",(0,t.jsx)(n.code,{children:"ACCESS EXCLUSIVE"})," lock on the table, blocking other accesses until the index drop can be completed. With this option, the command instead waits until conflicting transactions have completed."]}),"\n",(0,t.jsxs)(n.p,{children:["There are several caveats to be aware of when using this option. Only one index name can be specified, and the ",(0,t.jsx)(n.code,{children:"CASCADE"})," option is not supported. (Thus, an index that supports a ",(0,t.jsx)(n.code,{children:"UNIQUE"})," or ",(0,t.jsx)(n.code,{children:"PRIMARY KEY"})," constraint cannot be dropped this way.) Also, regular ",(0,t.jsx)(n.code,{children:"DROP INDEX"})," commands can be performed within a transaction block, but ",(0,t.jsx)(n.code,{children:"DROP INDEX CONCURRENTLY"})," cannot."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"IF EXISTS"})})}),"\n",(0,t.jsx)(n.p,{children:"Do not throw an error if the index does not exist. A notice is issued in this case."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"name"})})}),"\n",(0,t.jsx)(n.p,{children:"The name (optionally schema-qualified) of an index to remove."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"CASCADE"})})}),"\n",(0,t.jsx)(n.p,{children:"Automatically drop objects that depend on the index, and in turn all objects that depend on those objects."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"RESTRICT"})})}),"\n",(0,t.jsx)(n.p,{children:"Refuse to drop the index if any objects depend on it. This is the default."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(n.p,{children:["Remove the index ",(0,t.jsx)(n.code,{children:"title_idx"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"DROP INDEX title_idx;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"DROP INDEX"})," is a Cloudberry Database language extension. There are no provisions for indexes in the SQL standard."]}),"\n",(0,t.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/zh/docs/sql-stmts/alter-index",children:(0,t.jsx)(n.code,{children:"ALTER INDEX"})}),", ",(0,t.jsx)(n.a,{href:"/zh/docs/sql-stmts/create-index",children:(0,t.jsx)(n.code,{children:"CREATE INDEX"})})]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>o});var t=s(67294);const i={},d=t.createContext(i);function o(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);