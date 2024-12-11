"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[1429],{88363:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var s=r(85893),t=r(11151);const o={title:"ALTER PROCEDURE"},a="ALTER PROCEDURE",i={id:"sql-stmts/alter-procedure",title:"ALTER PROCEDURE",description:"Changes the definition of a procedure.",source:"@site/docs/sql-stmts/alter-procedure.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/alter-procedure",permalink:"/docs/sql-stmts/alter-procedure",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/alter-procedure.md",tags:[],version:"current",lastUpdatedBy:"vitalzf",lastUpdatedAt:1733904867,formattedLastUpdatedAt:"Dec 11, 2024",frontMatter:{title:"ALTER PROCEDURE"},sidebar:"docsbars",previous:{title:"ALTER POLICY",permalink:"/docs/sql-stmts/alter-policy"},next:{title:"ALTER PROTOCOL",permalink:"/docs/sql-stmts/alter-protocol"}},c={},d=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"alter-procedure",children:"ALTER PROCEDURE"}),"\n",(0,s.jsx)(n.p,{children:"Changes the definition of a procedure."}),"\n",(0,s.jsx)(n.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER PROCEDURE <name> [ ( [ [<argmode>] [<argname>] <argtype> [, ...] ] ) ] \n   <action> [, ... ] [RESTRICT]\n\nALTER PROCEDURE <name> [ ( [ [<argmode>] [<argname>] <argtype> [, ...] ] ) ]\n   RENAME TO <new_name>\n\nALTER PROCEDURE <name> [ ( [ [<argmode>] [<argname>] <argtype> [, ...] ] ) ]\n   OWNER TO { <new_owner> | CURRENT_USER | SESSION_USER }\n\nALTER PROCEDURE <name> [ ( [ [<argmode>] [<argname>] <argtype> [, ...] ] ) ]\n   SET SCHEMA <new_schema>\n\nALTER PROCEDURE <name> [ ( [ [<argmode>] [<argname>] <argtype> [, ...] ] ) ]\n   DEPENDS ON EXTENSION <extension_name>\n\n-- where <action> is one of:\n\n    { [EXTERNAL] SECURITY INVOKER | [EXTERNAL] SECURITY DEFINER }\n    SET <configuration_parameter> { TO | = } { <value> | DEFAULT }\n    SET <configuration_parameter> FROM CURRENT\n    RESET <configuration_parameter>\n    RESET ALL\n"})}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ALTER PROCEDURE"})," changes the definition of a procedure."]}),"\n",(0,s.jsxs)(n.p,{children:["You must own the procedure to use ",(0,s.jsx)(n.code,{children:"ALTER PROCEDURE"}),". To change a procedure's schema, you must also have ",(0,s.jsx)(n.code,{children:"CREATE"})," privilege on the new schema. To alter the owner, you must also be a direct or indirect member of the new owning role, and that role must have ",(0,s.jsx)(n.code,{children:"CREATE"})," privilege on the procedure's schema. (These restrictions enforce that altering the owner doesn't do anything you couldn't do by dropping and recreating the procedure. However, a superuser can alter ownership of any procedure anyway.)"]}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"name"})})}),"\n",(0,s.jsx)(n.p,{children:"The name (optionally schema-qualified) of an existing procedure. If no argument list is specified, the name must be unique in its schema."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"argmode"})})}),"\n",(0,s.jsxs)(n.p,{children:["The mode of an argument: ",(0,s.jsx)(n.code,{children:"IN"})," or ",(0,s.jsx)(n.code,{children:"VARIADIC"}),". If omitted, the default is ",(0,s.jsx)(n.code,{children:"IN"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"argname"})})}),"\n",(0,s.jsxs)(n.p,{children:["The name of an argument. Note that ",(0,s.jsx)(n.code,{children:"ALTER PROCEDURE"})," does not actually pay any attention to argument names, since only the argument data types are needed to determine the function's identity."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"argtype"})})}),"\n",(0,s.jsx)(n.p,{children:"The data type(s) of the procedure's arguments (optionally schema-qualified), if any."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"new_name"})})}),"\n",(0,s.jsx)(n.p,{children:"The new name of the procedure."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"new_owner"})})}),"\n",(0,s.jsxs)(n.p,{children:["The new owner of the procedure. Note that if the procedure is marked ",(0,s.jsx)(n.code,{children:"SECURITY DEFINER"}),", it will subsequently run as the new owner."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"new_schema"})})}),"\n",(0,s.jsx)(n.p,{children:"The new schema for the procedure."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"extension_name"})})}),"\n",(0,s.jsx)(n.p,{children:"The name of the extension that the procedure is to depend on."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"[ EXTERNAL ] SECURITY INVOKER"})}),(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"[ EXTERNAL ] SECURITY DEFINER"})})]}),"\n",(0,s.jsxs)(n.p,{children:["Change whether the procedure is a security definer or not. The key word ",(0,s.jsx)(n.code,{children:"EXTERNAL"})," is ignored for SQL conformance. See ",(0,s.jsx)(n.a,{href:"/docs/sql-stmts/create-procedure",children:"CREATE PROCEDURE"})," for more information about this capability."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"configuration_parameter"})}),(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"value"})})]}),"\n",(0,s.jsxs)(n.p,{children:["Set or change the value of a configuration parameter when the procedure is called. If value is ",(0,s.jsx)(n.code,{children:"DEFAULT"})," or, equivalently, ",(0,s.jsx)(n.code,{children:"RESET"})," is used, the procedure-local setting is removed, and the procedure runs with the value present in its environment. Use ",(0,s.jsx)(n.code,{children:"RESET ALL"})," to clear all procedure-local settings. ",(0,s.jsx)(n.code,{children:"SET FROM CURRENT"})," saves the value of the parameter that is current when ",(0,s.jsx)(n.code,{children:"ALTER PROCEDURE"})," is run as the value to be applied when the procedure is entered."]}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"/docs/sql-stmts/set",children:"SET"})," for more information about allowed parameter names and values."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"RESTRICT"})})}),"\n",(0,s.jsx)(n.p,{children:"Ignored for conformance with the SQL standard."}),"\n",(0,s.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsxs)(n.p,{children:["Cloudberry Database has limitations on the use of functions defined as ",(0,s.jsx)(n.code,{children:"STABLE"})," or ",(0,s.jsx)(n.code,{children:"VOLATILE"}),". See ",(0,s.jsx)(n.a,{href:"/docs/sql-stmts/create-function",children:"CREATE FUNCTION"})," for more information."]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.p,{children:["To rename the procedure ",(0,s.jsx)(n.code,{children:"insert_data"})," with two arguments of type ",(0,s.jsx)(n.code,{children:"integer"})," to ",(0,s.jsx)(n.code,{children:"insert_record"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER PROCEDURE insert_data(integer, integer) RENAME TO insert_record;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To change the owner of the procedure ",(0,s.jsx)(n.code,{children:"insert_data"})," with two arguments of type ",(0,s.jsx)(n.code,{children:"integer"})," to ",(0,s.jsx)(n.code,{children:"joe"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER PROCEDURE insert_data(integer, integer) OWNER TO joe;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To change the schema of the procedure ",(0,s.jsx)(n.code,{children:"insert_data"})," with two arguments of type ",(0,s.jsx)(n.code,{children:"integer"})," to ",(0,s.jsx)(n.code,{children:"accounting"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER PROCEDURE insert_data(integer, integer) SET SCHEMA accounting;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To mark the procedure ",(0,s.jsx)(n.code,{children:"insert_data(integer, integer)"})," as being dependent on the extension ",(0,s.jsx)(n.code,{children:"myext"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER PROCEDURE insert_data(integer, integer) DEPENDS ON EXTENSION myext;\n"})}),"\n",(0,s.jsx)(n.p,{children:"To adjust the search path that is automatically set for a procedure:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER PROCEDURE check_password(text) SET search_path = admin, pg_temp;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To disable automatic setting of ",(0,s.jsx)(n.code,{children:"search_path"})," for a procedure:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER PROCEDURE check_password(text) RESET search_path;\n"})}),"\n",(0,s.jsx)(n.p,{children:"The procedure will now execute with whatever search path is used by its caller."}),"\n",(0,s.jsx)(n.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,s.jsxs)(n.p,{children:["This statement is partially compatible with the ",(0,s.jsx)(n.code,{children:"ALTER PROCEDURE"})," statement in the SQL standard. The standard allows more properties of a procedure to be modified, but does not provide the ability to rename a procedure, make a procedure a security definer, attach configuration parameter values to a procedure, or change the owner, schema, or volatility of a procedure. The standard also requires the ",(0,s.jsx)(n.code,{children:"RESTRICT"})," key word, which is optional in Cloudberry Database."]}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/sql-stmts/create-procedure",children:"CREATE PROCEDURE"}),", ",(0,s.jsx)(n.a,{href:"/docs/sql-stmts/drop-procedure",children:"DROP PROCEDURE"})]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>a});var s=r(67294);const t={},o=s.createContext(t);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);