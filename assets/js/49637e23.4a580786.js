"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[6703],{64424:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>E,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var s=i(85893),t=i(11151);const a={title:"ALTER MATERIALIZED VIEW"},r="ALTER MATERIALIZED VIEW",l={id:"sql-stmts/alter-materialized-view",title:"ALTER MATERIALIZED VIEW",description:"Changes the definition of a materialized view.",source:"@site/docs/sql-stmts/alter-materialized-view.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/alter-materialized-view",permalink:"/docs/sql-stmts/alter-materialized-view",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/alter-materialized-view.md",tags:[],version:"current",lastUpdatedBy:"vitalzf",lastUpdatedAt:1733904867,formattedLastUpdatedAt:"Dec 11, 2024",frontMatter:{title:"ALTER MATERIALIZED VIEW"},sidebar:"docsbars",previous:{title:"ALTER LANGUAGE",permalink:"/docs/sql-stmts/alter-language"},next:{title:"ALTER OPERATOR CLASS",permalink:"/docs/sql-stmts/alter-operator-class"}},o={},d=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"alter-materialized-view",children:"ALTER MATERIALIZED VIEW"}),"\n",(0,s.jsx)(n.p,{children:"Changes the definition of a materialized view."}),"\n",(0,s.jsx)(n.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER MATERIALIZED VIEW [ IF EXISTS ] <name> <action> [, ... ]\nALTER MATERIALIZED VIEW <name>\n    DEPENDS ON EXTENSION <extension_name>\nALTER MATERIALIZED VIEW [ IF EXISTS ] <name>\n    RENAME [ COLUMN ] <column_name> TO <new_column_name>\nALTER MATERIALIZED VIEW [ IF EXISTS ] <name>\n    RENAME TO <new_name>\nALTER MATERIALIZED VIEW [ IF EXISTS ] <name>\n    SET SCHEMA <new_schema>\nALTER MATERIALIZED VIEW ALL IN TABLESPACE <name> [ OWNED BY <role_name> [, ... ] ]\n    SET TABLESPACE <new_tablespace> [ NOWAIT ]\n\n-- where <action> is one of:\n\n    ALTER [ COLUMN ] <column_name> SET STATISTICS <integer>\n    ALTER [ COLUMN ] <column_name> SET ( <attribute_option> = <value> [, ... ] )\n    ALTER [ COLUMN ] <column_name> RESET ( <attribute_option> [, ... ] )\n    ALTER [ COLUMN ] <column_name> SET STORAGE { PLAIN | EXTERNAL | EXTENDED | MAIN }\n    CLUSTER ON <index_name>\n    SET WITHOUT CLUSTER\n    SET TABLESPACE <new_tablespace>\n    SET ( <storage_paramete>r = <value> [, ... ] )\n    RESET ( <storage_parameter> [, ... ] )\n    OWNER TO { <new_owner> | CURRENT_USER | SESSION_USER }\n"})}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ALTER MATERIALIZED VIEW"})," changes various auxiliary properties of an existing materialized view."]}),"\n",(0,s.jsxs)(n.p,{children:["You must own the materialized view to use ",(0,s.jsx)(n.code,{children:"ALTER MATERIALIZED VIEW"}),". To change a materialized view's schema, you must also have ",(0,s.jsx)(n.code,{children:"CREATE"})," privilege on the new schema. To alter the owner, you must also be a direct or indirect member of the new owning role, and that role must have ",(0,s.jsx)(n.code,{children:"CREATE"})," privilege on the materialized view's schema. (These restrictions enforce that altering the owner doesn't do anything you couldn't do by dropping and recreating the materialized view. However, a superuser can alter ownership of any view anyway.)"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"DEPENDS ON EXTENSION"})," form marks the materialized view as dependent on an extension, such that the materialized view will automatically be dropped if the extension is dropped."]}),"\n",(0,s.jsxs)(n.p,{children:["The statement subforms and actions available for ",(0,s.jsx)(n.code,{children:"ALTER MATERIALIZED VIEW"})," are a subset of those available for ",(0,s.jsx)(n.code,{children:"ALTER TABLE"}),", and have the same meaning when used for materialized views. See the descriptions for ",(0,s.jsx)(n.a,{href:"/docs/sql-stmts/alter-table",children:"ALTER TABLE"})," for details."]}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"name"})})}),"\n",(0,s.jsx)(n.p,{children:"The name (optionally schema-qualified) of an existing materialized view."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"column_name"})})}),"\n",(0,s.jsx)(n.p,{children:"Name of a new or existing column."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"extension_name"})})}),"\n",(0,s.jsx)(n.p,{children:"The name of the extension that the materialized view is to depend on."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"new_column_name"})})}),"\n",(0,s.jsx)(n.p,{children:"New name for an existing column."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"new_owner"})})}),"\n",(0,s.jsx)(n.p,{children:"The user name of the new owner of the materialized view."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"new_name"})})}),"\n",(0,s.jsx)(n.p,{children:"The new name for the materialized view."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"new_schema"})})}),"\n",(0,s.jsx)(n.p,{children:"The new schema for the materialized view."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.p,{children:["To rename the materialized view ",(0,s.jsx)(n.code,{children:"foo"})," to ",(0,s.jsx)(n.code,{children:"bar"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER MATERIALIZED VIEW foo RENAME TO bar;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ALTER MATERIALIZED VIEW"})," is a Cloudberry Database extension of the SQL standard."]}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/sql-stmts/create-materialized-view",children:"CREATE MATERIALIZED VIEW"}),", ",(0,s.jsx)(n.a,{href:"/docs/sql-stmts/drop-materialized-view",children:"DROP MATERIALIZED VIEW"}),", ",(0,s.jsx)(n.a,{href:"/docs/sql-stmts/refresh-materialized-view",children:"REFRESH MATERIALIZED VIEW"})]})]})}function E(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>r});var s=i(67294);const t={},a=s.createContext(t);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);