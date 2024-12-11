"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[1342],{59845:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>i,default:()=>E,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var t=n(85893),r=n(11151);const a={title:"ALTER DEFAULT PRIVILEGES"},i="ALTER DEFAULT PRIVILEGES",l={id:"sql-stmts/alter-default-privileges",title:"ALTER DEFAULT PRIVILEGES",description:"Changes default access privileges.",source:"@site/docs/sql-stmts/alter-default-privileges.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/alter-default-privileges",permalink:"/docs/sql-stmts/alter-default-privileges",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/alter-default-privileges.md",tags:[],version:"current",lastUpdatedBy:"vitalzf",lastUpdatedAt:1733904867,formattedLastUpdatedAt:"Dec 11, 2024",frontMatter:{title:"ALTER DEFAULT PRIVILEGES"},sidebar:"docsbars",previous:{title:"ALTER DATABASE",permalink:"/docs/sql-stmts/alter-database"},next:{title:"ALTER DOMAIN",permalink:"/docs/sql-stmts/alter-domain"}},o={},d=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function c(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"alter-default-privileges",children:"ALTER DEFAULT PRIVILEGES"}),"\n",(0,t.jsx)(s.p,{children:"Changes default access privileges."}),"\n",(0,t.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"\nALTER DEFAULT PRIVILEGES\n    [ FOR { ROLE | USER } <target_role> [, ...] ]\n    [ IN SCHEMA <schema_name> [, ...] ]\n    <abbreviated_grant_or_revoke>\n\n-- where <abbreviated_grant_or_revoke> is one of:\n\nGRANT { { SELECT | INSERT | UPDATE | DELETE | TRUNCATE | REFERENCES | TRIGGER }\n    [, ...] | ALL [ PRIVILEGES ] }\n    ON TABLES\n    TO { [ GROUP ] <role_name> | PUBLIC } [, ...] [ WITH GRANT OPTION ]\n\nGRANT { { USAGE | SELECT | UPDATE }\n    [, ...] | ALL [ PRIVILEGES ] }\n    ON SEQUENCES\n    TO { [ GROUP ] <role_name> | PUBLIC } [, ...] [ WITH GRANT OPTION ]\n\nGRANT { EXECUTE | ALL [ PRIVILEGES ] }\n    ON { FUNCTIONS | ROUTINES }\n    TO { [ GROUP ] <role_name> | PUBLIC } [, ...] [ WITH GRANT OPTION ]\n\nGRANT { USAGE | ALL [ PRIVILEGES ] }\n    ON TYPES\n    TO { [ GROUP ] <role_name> | PUBLIC } [, ...] [ WITH GRANT OPTION ]\n\nGRANT { USAGE | CREATE | ALL [ PRIVILEGES ] }\n    ON SCHEMAS\n    TO { [ GROUP ] <role_name> | PUBLIC } [, ...] [ WITH GRANT OPTION ]\n\nREVOKE [ GRANT OPTION FOR ]\n    { { SELECT | INSERT | UPDATE | DELETE | TRUNCATE | REFERENCES | TRIGGER }\n    [, ...] | ALL [ PRIVILEGES ] }\n    ON TABLES\n    FROM { [ GROUP ] <role_name> | PUBLIC } [, ...]\n    [ CASCADE | RESTRICT ]\n\nREVOKE [ GRANT OPTION FOR ]\n    { { USAGE | SELECT | UPDATE }\n    [, ...] | ALL [ PRIVILEGES ] }\n    ON SEQUENCES\n    FROM { [ GROUP ] <role_name> | PUBLIC } [, ...]\n    [ CASCADE | RESTRICT ]\n\nREVOKE [ GRANT OPTION FOR ]\n    { EXECUTE | ALL [ PRIVILEGES ] }\n    ON { FUNCTIONS | ROUTINES }\n    FROM { [ GROUP ] <role_name> | PUBLIC } [, ...]\n    [ CASCADE | RESTRICT ]\n\nREVOKE [ GRANT OPTION FOR ]\n    { USAGE | ALL [ PRIVILEGES ] }\n    ON TYPES\n    FROM { [ GROUP ] <role_name> | PUBLIC } [, ...]\n    [ CASCADE | RESTRICT ]\n\nREVOKE [ GRANT OPTION FOR ]\n    { USAGE | CREATE | ALL [ PRIVILEGES ] }\n    ON SCHEMAS\n    FROM { [ GROUP ] <role_name> | PUBLIC } [, ...]\n    [ CASCADE | RESTRICT ]\n"})}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"ALTER DEFAULT PRIVILEGES"})," allows you to set the privileges that will be applied to objects created in the future. (It does not affect privileges assigned to already-existing objects.) Currently, only the privileges for schemas, tables (including views and foreign tables), sequences, functions, and types (including domains) can be altered. For this command, functions include aggregates and procedures. The words ",(0,t.jsx)(s.code,{children:"FUNCTIONS"})," and ",(0,t.jsx)(s.code,{children:"ROUTINES"})," are equivalent in this command. (",(0,t.jsx)(s.code,{children:"ROUTINES"})," is preferred going forward as the standard term for functions and procedures taken together. In earlier Cloudberry Database releases, only the word ",(0,t.jsx)(s.code,{children:"FUNCTIONS"})," was allowed. It is not possible to set default privileges for functions and procedures separately.)"]}),"\n",(0,t.jsx)(s.p,{children:"You can change default privileges only for objects that will be created by yourself or by roles that you are a member of. The privileges can be set globally (i.e., for all objects created in the current database), or just for objects created in specified schemas."}),"\n",(0,t.jsxs)(s.p,{children:["As explained under ",(0,t.jsx)(s.a,{href:"/docs/sql-stmts/grant",children:"GRANT"}),", the default privileges for any object type normally grant all grantable permissions to the object owner, and may grant some privileges to ",(0,t.jsx)(s.code,{children:"PUBLIC"})," as well. However, this behavior can be changed by altering the global default privileges with ",(0,t.jsx)(s.code,{children:"ALTER DEFAULT PRIVILEGES"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Default privileges that are specified per-schema are added to whatever the global default privileges are for the particular object type. This means you cannot revoke privileges per-schema if they are granted globally (either by default, or according to a previous ",(0,t.jsx)(s.code,{children:"ALTER DEFAULT PRIVILEGES"})," command that did not specify a schema). Per-schema ",(0,t.jsx)(s.code,{children:"REVOKE"})," is only useful to reverse the effects of a previous per-schema ",(0,t.jsx)(s.code,{children:"GRANT"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"target_role"})})}),"\n",(0,t.jsxs)(s.p,{children:["The name of an existing role of which the current role is a member. If ",(0,t.jsx)(s.code,{children:"FOR ROLE"})," is omitted, the current role is assumed."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"schema_name"})})}),"\n",(0,t.jsxs)(s.p,{children:["The name of an existing schema. If specified, the default privileges are altered for objects later created in that schema. If ",(0,t.jsx)(s.code,{children:"IN SCHEMA"})," is omitted, the global default privileges are altered. ",(0,t.jsx)(s.code,{children:"IN SCHEMA"})," is not allowed when setting privileges for schemas, since schemas can't be nested."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"role_name"})})}),"\n",(0,t.jsxs)(s.p,{children:["The name of an existing role to grant or revoke privileges for. This parameter, and all the other parameters in abbreviated_grant_or_revoke, act as described under ",(0,t.jsx)(s.a,{href:"/docs/sql-stmts/grant",children:"GRANT"})," or ",(0,t.jsx)(s.a,{href:"/docs/sql-stmts/revoke",children:"REVOKE"}),", except that one is setting permissions for a whole class of objects rather than specific named objects."]}),"\n",(0,t.jsx)(s.h2,{id:"notes",children:"Notes"}),"\n",(0,t.jsxs)(s.p,{children:["Use psql's ",(0,t.jsx)(s.code,{children:"\\ddp"})," command to obtain information about existing assignments of default privileges. The meaning of the privilege values is the same as explained for ",(0,t.jsx)(s.code,{children:"\\dp"})," under ",(0,t.jsx)(s.a,{href:"/docs/sql-stmts/grant",children:"GRANT"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["If you wish to drop a role for which the default privileges have been altered, it is necessary to reverse the changes in its default privileges or use ",(0,t.jsx)(s.code,{children:"DROP OWNED BY"})," to get rid of the default privileges entry for the role."]}),"\n",(0,t.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(s.p,{children:["Grant SELECT privilege to everyone for all tables (and views) you subsequently create in schema ",(0,t.jsx)(s.code,{children:"myschema"}),", and allow role ",(0,t.jsx)(s.code,{children:"webuser"})," to INSERT into them too:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"ALTER DEFAULT PRIVILEGES IN SCHEMA myschema GRANT SELECT ON TABLES TO PUBLIC;\nALTER DEFAULT PRIVILEGES IN SCHEMA myschema GRANT INSERT ON TABLES TO webuser;\n"})}),"\n",(0,t.jsx)(s.p,{children:"Undo the above, so that subsequently-created tables won't have any more permissions than normal:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"ALTER DEFAULT PRIVILEGES IN SCHEMA myschema REVOKE SELECT ON TABLES FROM PUBLIC;\nALTER DEFAULT PRIVILEGES IN SCHEMA myschema REVOKE INSERT ON TABLES FROM webuser;\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Remove the public EXECUTE permission that is normally granted on functions, for all functions subsequently created by role ",(0,t.jsx)(s.code,{children:"admin"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"ALTER DEFAULT PRIVILEGES FOR ROLE admin REVOKE EXECUTE ON FUNCTIONS FROM PUBLIC;\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Note however that you ",(0,t.jsx)(s.em,{children:"cannot"})," accomplish that effect with a command limited to a single schema. The following command has no effect, unless it is undoing a matching ",(0,t.jsx)(s.code,{children:"GRANT"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"ALTER DEFAULT PRIVILEGES IN SCHEMA public REVOKE EXECUTE ON FUNCTIONS FROM PUBLIC;\n"})}),"\n",(0,t.jsx)(s.p,{children:"That's because per-schema default privileges can only add privileges to the global setting, not remove privileges granted by it."}),"\n",(0,t.jsx)(s.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,t.jsxs)(s.p,{children:["There is no ",(0,t.jsx)(s.code,{children:"ALTER DEFAULT PRIVILEGES"})," statement in the SQL standard."]}),"\n",(0,t.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/sql-stmts/grant",children:"GRANT"}),", ",(0,t.jsx)(s.a,{href:"/docs/sql-stmts/revoke",children:"REVOKE"})]})]})}function E(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>i});var t=n(67294);const r={},a=t.createContext(r);function i(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);