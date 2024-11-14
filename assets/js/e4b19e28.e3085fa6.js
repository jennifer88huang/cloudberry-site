"use strict";(self.webpackChunkCloudberry_Database_website=self.webpackChunkCloudberry_Database_website||[]).push([[6339],{16208:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=r(85893),t=r(11151);const s={title:"ALTER FOREIGN DATA WRAPPER"},i="ALTER FOREIGN DATA WRAPPER",o={id:"sql-stmts/alter-foreign-data-wrapper",title:"ALTER FOREIGN DATA WRAPPER",description:"Changes the definition of a foreign-data wrapper.",source:"@site/docs/sql-stmts/alter-foreign-data-wrapper.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/alter-foreign-data-wrapper",permalink:"/docs/sql-stmts/alter-foreign-data-wrapper",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/alter-foreign-data-wrapper.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1731576389,formattedLastUpdatedAt:"Nov 14, 2024",frontMatter:{title:"ALTER FOREIGN DATA WRAPPER"},sidebar:"docsbars",previous:{title:"ALTER EXTERNAL TABLE",permalink:"/docs/sql-stmts/alter-external-table"},next:{title:"ALTER FOREIGN TABLE",permalink:"/docs/sql-stmts/alter-foreign-table"}},d={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"alter-foreign-data-wrapper",children:"ALTER FOREIGN DATA WRAPPER"}),"\n",(0,a.jsx)(n.p,{children:"Changes the definition of a foreign-data wrapper."}),"\n",(0,a.jsx)(n.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"ALTER FOREIGN DATA WRAPPER <name>\n    [ HANDLER <handler_function> | NO HANDLER ]\n    [ VALIDATOR <validator_function> | NO VALIDATOR ]\n    [ OPTIONS ( [ ADD | SET | DROP ] <option> ['<value>'] [, ... ] ) ]\n\nALTER FOREIGN DATA WRAPPER <name> OWNER TO { <new_owner> | CURRENT_USER | SESSION_USER }\nALTER FOREIGN DATA WRAPPER <name> RENAME TO <new_name>\n"})}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"ALTER FOREIGN DATA WRAPPER"})," changes the definition of a foreign-data wrapper. The first form of the command changes the support functions or generic options of the foreign-data wrapper. Cloudberry Database requires at least one clause. The second and third forms of the command change the owner or name of the foreign-data wrapper."]}),"\n",(0,a.jsx)(n.p,{children:"Only superusers can alter foreign-data wrappers. Additionally, only superusers can own foreign-data wrappers"}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"name"})})}),"\n",(0,a.jsx)(n.p,{children:"The name of an existing foreign-data wrapper."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"HANDLER handler_function"})})}),"\n",(0,a.jsx)(n.p,{children:"Specifies a new handler function for the foreign-data wrapper."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"NO HANDLER"})})}),"\n",(0,a.jsx)(n.p,{children:"Specifies that the foreign-data wrapper should no longer have a handler function."}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Note"})," You cannot access a foreign table that uses a foreign-data wrapper with no handler."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"VALIDATOR validator_function"})})}),"\n",(0,a.jsx)(n.p,{children:"Specifies a new validator function for the foreign-data wrapper."}),"\n",(0,a.jsxs)(n.p,{children:["Note that it is possible that pre-existing options of the foreign-data wrapper, or of dependent servers, user mappings, or foreign tables, may become invalid when you change the validator function. Cloudberry Database does not check for this. You must make sure that these options are correct before using the modified foreign-data wrapper. However, Cloudberry Database will check any options specified in this ",(0,a.jsx)(n.code,{children:"ALTER FOREIGN DATA WRAPPER"})," command using the new validator."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"NO VALIDATOR"})})}),"\n",(0,a.jsx)(n.p,{children:"Specifies that the foreign-data wrapper should no longer have a validator function."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"OPTIONS ( [ ADD | SET | DROP ] option ['value'] [, ... ] )"})})}),"\n",(0,a.jsxs)(n.p,{children:["Change the foreign-data wrapper's options. ",(0,a.jsx)(n.code,{children:"ADD"}),", ",(0,a.jsx)(n.code,{children:"SET"}),", and ",(0,a.jsx)(n.code,{children:"DROP"})," specify the action to perform. If no operation is explicitly specified, the default operation is ",(0,a.jsx)(n.code,{children:"ADD"}),". Option names must be unique. Cloudberry Database validates names and values using the foreign-data wrapper's validator function, if any."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"OWNER TO new_owner"})})}),"\n",(0,a.jsx)(n.p,{children:"Specifies the user name of the new owner of the foreign-data wrapper. Only superusers can own foreign-data wrappers."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"RENAME TO new_name"})})}),"\n",(0,a.jsx)(n.p,{children:"Specifies the new name of the foreign-data wrapper."}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(n.p,{children:["Change the definition of a foreign-data wrapper named ",(0,a.jsx)(n.code,{children:"dbi"})," by adding a new option named ",(0,a.jsx)(n.code,{children:"foo"}),", and removing the option named ",(0,a.jsx)(n.code,{children:"bar"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"ALTER FOREIGN DATA WRAPPER dbi OPTIONS (ADD foo '1', DROP 'bar');\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Change the validator function for a foreign-data wrapper named ",(0,a.jsx)(n.code,{children:"dbi"})," to ",(0,a.jsx)(n.code,{children:"bob.myvalidator"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"ALTER FOREIGN DATA WRAPPER dbi VALIDATOR bob.myvalidator;\n"})}),"\n",(0,a.jsx)(n.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"ALTER FOREIGN DATA WRAPPER"})," conforms to ISO/IEC 9075-9 (SQL/MED), with the exception that the ",(0,a.jsx)(n.code,{children:"HANDLER"}),", ",(0,a.jsx)(n.code,{children:"VALIDATOR"}),", ",(0,a.jsx)(n.code,{children:"OWNER TO"}),", and ",(0,a.jsx)(n.code,{children:"RENAME TO"})," clauses are Cloudberry Database extensions."]}),"\n",(0,a.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/sql-stmts/create-foreign-data-wrapper",children:"CREATE FOREIGN DATA WRAPPER"}),", ",(0,a.jsx)(n.a,{href:"/docs/sql-stmts/drop-foreign-data-wrapper",children:"DROP FOREIGN DATA WRAPPER"})]})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>i});var a=r(67294);const t={},s=a.createContext(t);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);