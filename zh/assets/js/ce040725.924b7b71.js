"use strict";(self.webpackChunkCloudberry_Database_website=self.webpackChunkCloudberry_Database_website||[]).push([[3490],{89241:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var n=t(85893),i=t(11151);const r={title:"COMMIT"},a="COMMIT",c={id:"sql-stmts/commit",title:"COMMIT",description:"Commits the current transaction.",source:"@site/docs/sql-stmts/commit.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/commit",permalink:"/zh/docs/sql-stmts/commit",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/commit.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1731576389,formattedLastUpdatedAt:"2024\u5e7411\u670814\u65e5",frontMatter:{title:"COMMIT"},sidebar:"docsbars",previous:{title:"COMMENT",permalink:"/zh/docs/sql-stmts/comment"},next:{title:"COPY",permalink:"/zh/docs/sql-stmts/copy"}},o={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"commit",children:"COMMIT"}),"\n",(0,n.jsx)(s.p,{children:"Commits the current transaction."}),"\n",(0,n.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"COMMIT [WORK | TRANSACTION] [AND [NO] CHAIN]\n"})}),"\n",(0,n.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"COMMIT"})," commits the current transaction. All changes made by the transaction become visible to others and are guaranteed to be durable if a crash occurs."]}),"\n",(0,n.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"WORK"})}),(0,n.jsx)("br",{}),"\n",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"TRANSACTION"})})]}),"\n",(0,n.jsx)(s.p,{children:"Optional key words. They have no effect."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"AND CHAIN"})})}),"\n",(0,n.jsxs)(s.p,{children:["If ",(0,n.jsx)(s.code,{children:"AND CHAIN"})," is specified, a new transaction is immediately started with the same transaction characteristics (see ",(0,n.jsx)(s.a,{href:"/zh/docs/sql-stmts/set-transaction",children:"SET TRANSACTION"}),") as the just finished one. Otherwise, no new transaction is started."]}),"\n",(0,n.jsx)(s.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsxs)(s.p,{children:["Use ",(0,n.jsx)(s.a,{href:"/zh/docs/sql-stmts/rollback",children:"ROLLBACK"})," to prematurely end a transaction."]}),"\n",(0,n.jsxs)(s.p,{children:["Issuing ",(0,n.jsx)(s.code,{children:"COMMIT"})," when not inside a transaction does no harm, but it will provoke a warning message. ",(0,n.jsx)(s.code,{children:"COMMIT AND CHAIN"})," when not inside a transaction is an error."]}),"\n",(0,n.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(s.p,{children:"To commit the current transaction and make all changes permanent:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"COMMIT;\n"})}),"\n",(0,n.jsx)(s.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,n.jsxs)(s.p,{children:["The command ",(0,n.jsx)(s.code,{children:"COMMIT"})," conforms to the SQL standard. The form ",(0,n.jsx)(s.code,{children:"COMMIT TRANSACTION"})," is a Cloudberry Database extension."]}),"\n",(0,n.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/zh/docs/sql-stmts/begin",children:"BEGIN"}),", ",(0,n.jsx)(s.a,{href:"/zh/docs/sql-stmts/end",children:"END"}),", ",(0,n.jsx)(s.a,{href:"/zh/docs/sql-stmts/rollback",children:"ROLLBACK"}),", ",(0,n.jsx)(s.a,{href:"/zh/docs/sql-stmts/start-transaction",children:"START TRANSACTION"})]})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>c,a:()=>a});var n=t(67294);const i={},r=n.createContext(i);function a(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);