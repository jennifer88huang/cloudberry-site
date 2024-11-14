"use strict";(self.webpackChunkCloudberry_Database_website=self.webpackChunkCloudberry_Database_website||[]).push([[3662],{66343:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var n=t(85893),i=t(11151);const r={title:"SET SESSION AUTHORIZATION"},o="SET SESSION AUTHORIZATION",a={id:"sql-stmts/set-session-authorization",title:"SET SESSION AUTHORIZATION",description:"Sets the session role identifier and the current role identifier of the current session.",source:"@site/docs/sql-stmts/set-session-authorization.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/set-session-authorization",permalink:"/docs/sql-stmts/set-session-authorization",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/set-session-authorization.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1731576389,formattedLastUpdatedAt:"Nov 14, 2024",frontMatter:{title:"SET SESSION AUTHORIZATION"},sidebar:"docsbars",previous:{title:"SET ROLE",permalink:"/docs/sql-stmts/set-role"},next:{title:"SET TRANSACTION",permalink:"/docs/sql-stmts/set-transaction"}},l={},c=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"set-session-authorization",children:"SET SESSION AUTHORIZATION"}),"\n",(0,n.jsx)(s.p,{children:"Sets the session role identifier and the current role identifier of the current session."}),"\n",(0,n.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"SET [SESSION | LOCAL] SESSION AUTHORIZATION <rolename>\n\nSET [SESSION | LOCAL] SESSION AUTHORIZATION DEFAULT\n\nRESET SESSION AUTHORIZATION\n"})}),"\n",(0,n.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(s.p,{children:"This command sets the session role identifier and the current role identifier of the current SQL-session context to be rolename. The role name may be written as either an identifier or a string literal. Using this command, it is possible, for example, to temporarily become an unprivileged user and later switch back to being a superuser."}),"\n",(0,n.jsxs)(s.p,{children:["The session role identifier is initially set to be the (possibly authenticated) role name provided by the client. The current role identifier is normally equal to the session user identifier, but may change temporarily in the context of ",(0,n.jsx)(s.code,{children:"setuid"})," functions and similar mechanisms; it can also be changed by ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/set-role",children:"SET ROLE"}),". The current user identifier is relevant for permission checking."]}),"\n",(0,n.jsx)(s.p,{children:"The session user identifier may be changed only if the initial session user (the authenticated user) had the superuser privilege. Otherwise, the command is accepted only if it specifies the authenticated user name."}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"DEFAULT"})," and ",(0,n.jsx)(s.code,{children:"RESET"})," forms reset the session and current user identifiers to be the originally authenticated user name. These forms may be run by any user."]}),"\n",(0,n.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"SESSION"})})}),"\n",(0,n.jsx)(s.p,{children:"Specifies that the command takes effect for the current session. This is the default."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"LOCAL"})})}),"\n",(0,n.jsxs)(s.p,{children:["Specifies that the command takes effect for only the current transaction. After ",(0,n.jsx)(s.code,{children:"COMMIT"})," or ",(0,n.jsx)(s.code,{children:"ROLLBACK"}),", the session-level setting takes effect again. Note that ",(0,n.jsx)(s.code,{children:"SET LOCAL"})," will appear to have no effect if it is run outside of a transaction."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"rolename"})})}),"\n",(0,n.jsx)(s.p,{children:"The name of the role to assume."}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"NONE"})}),(0,n.jsx)("br",{}),"\n",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"RESET"})})]}),"\n",(0,n.jsx)(s.p,{children:"Reset the session and current role identifiers to be that of the role used to log in."}),"\n",(0,n.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"SELECT SESSION_USER, CURRENT_USER;\n session_user | current_user \n--------------+--------------\n peter        | peter\n\nSET SESSION AUTHORIZATION 'paul';\n\nSELECT SESSION_USER, CURRENT_USER;\n session_user | current_user \n--------------+--------------\n paul         | paul\n"})}),"\n",(0,n.jsx)(s.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,n.jsxs)(s.p,{children:["The SQL standard allows some other expressions to appear in place of the literal rolename, but these options are not important in practice. Cloudberry Database allows identifier syntax (rolename), which SQL does not. SQL does not allow this command during a transaction; Cloudberry Database does not make this restriction. The ",(0,n.jsx)(s.code,{children:"SESSION"})," and ",(0,n.jsx)(s.code,{children:"LOCAL"})," modifiers are a Cloudberry Database extension, as is the ",(0,n.jsx)(s.code,{children:"RESET"})," syntax."]}),"\n",(0,n.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/sql-stmts/set-role",children:"SET ROLE"})})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>a,a:()=>o});var n=t(67294);const i={},r=n.createContext(i);function o(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);