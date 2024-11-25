"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[6413],{31153:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=s(85893),r=s(11151);const i={title:"RESET"},a="RESET",o={id:"sql-stmts/reset",title:"RESET",description:"Restores the value of a run-time system configuration parameter to the default value.",source:"@site/docs/sql-stmts/reset.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/reset",permalink:"/docs/sql-stmts/reset",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/reset.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1732523543,formattedLastUpdatedAt:"Nov 25, 2024",frontMatter:{title:"RESET"},sidebar:"docsbars",previous:{title:"RELEASE SAVEPOINT",permalink:"/docs/sql-stmts/release-savepoint"},next:{title:"RETRIEVE",permalink:"/docs/sql-stmts/retrieve"}},l={},c=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"reset",children:"RESET"}),"\n",(0,n.jsx)(t.p,{children:"Restores the value of a run-time system configuration parameter to the default value."}),"\n",(0,n.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"RESET <configuration_parameter>\n\nRESET ALL\n"})}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"RESET"})," restores system configuration parameters to their default values. ",(0,n.jsx)(t.code,{children:"RESET"})," is an equivalent command for"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"SET <configuration_parameter> TO DEFAULT\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Refer to ",(0,n.jsx)(t.a,{href:"/docs/sql-stmts/set",children:"SET"})," for details."]}),"\n",(0,n.jsxs)(t.p,{children:["The default value is defined as the value that the parameter would have had, had no ",(0,n.jsx)(t.code,{children:"SET"})," ever been issued for it in the current session. The actual source of this value might be a compiled-in default, the coordinator ",(0,n.jsx)(t.code,{children:"postgresql.conf"}),' configuration file, command-line options, or per-database or per-user default settings. This is subtly different from defining it as "the value that the parameter had at session start", because if the value came from the configuration file, it will be reset to whatever is specified by the configuration file now. See Server Configuration Parameters for more information.']}),"\n",(0,n.jsxs)(t.p,{children:["The transactional behavior of ",(0,n.jsx)(t.code,{children:"RESET"})," is the same as ",(0,n.jsx)(t.code,{children:"SET"}),": its effects will be undone by transaction rollback."]}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"configuration_parameter"})})}),"\n",(0,n.jsx)(t.p,{children:"The name of a settable run-time system configuration parameter. See Server Configuration Parameters for details."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"ALL"})})}),"\n",(0,n.jsx)(t.p,{children:"Resets all settable run-time configuration parameters to their default values."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(t.p,{children:["Set the ",(0,n.jsx)(t.code,{children:"statement_mem"})," configuration parameter to its default value:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"RESET statement_mem; \n"})}),"\n",(0,n.jsx)(t.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"RESET"})," is a Cloudberry Database extension."]}),"\n",(0,n.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/sql-stmts/set",children:"SET"}),", ",(0,n.jsx)(t.a,{href:"/docs/sql-stmts/show",children:"SHOW"})]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>o,a:()=>a});var n=s(67294);const r={},i=n.createContext(r);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);