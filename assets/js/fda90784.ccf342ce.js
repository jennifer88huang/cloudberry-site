"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[5960],{29007:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=t(85893),r=t(11151);const o={title:"ALTER EXTENSION"},i="ALTER EXTENSION",a={id:"sql-stmts/alter-extension",title:"ALTER EXTENSION",description:"Change the definition of an extension.",source:"@site/docs/sql-stmts/alter-extension.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/alter-extension",permalink:"/docs/sql-stmts/alter-extension",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/alter-extension.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1732523543,formattedLastUpdatedAt:"Nov 25, 2024",frontMatter:{title:"ALTER EXTENSION"},sidebar:"docsbars",previous:{title:"ALTER DOMAIN",permalink:"/docs/sql-stmts/alter-domain"},next:{title:"ALTER EXTERNAL TABLE",permalink:"/docs/sql-stmts/alter-external-table"}},c={},d=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"alter-extension",children:"ALTER EXTENSION"}),"\n",(0,s.jsx)(n.p,{children:"Change the definition of an extension."}),"\n",(0,s.jsx)(n.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER EXTENSION <name> UPDATE [ TO <new_version> ]\nALTER EXTENSION <name> SET SCHEMA <new_schema>\nALTER EXTENSION <name> ADD <member_object>\nALTER EXTENSION <name> DROP <member_object>\n\n-- where <member_object> is:\n\n  ACCESS METHOD <object_name> |\n  AGGREGATE <aggregate_name> ( <aggregate_signature> ) |\n  CAST (<source_type> AS <target_type>) |\n  COLLATION <object_name> |\n  CONVERSION <object_name> |\n  DOMAIN <object_name> |\n  EVENT TRIGGER <object_name> |\n  FOREIGN DATA WRAPPER <object_name> |\n  FOREIGN TABLE <object_name> |\n  FUNCTION <function_name> ( [ [ <argmode> ] [ <argname> ] <argtype> [, ...] ] ) |\n  MATERIALIZED VIEW <object_name> |\n  OPERATOR <operator_name> (<left_type>, <right_type>) |\n  OPERATOR CLASS <object_name> USING <index_method> |\n  OPERATOR FAMILY <object_name> USING <index_method> |\n  [ PROCEDURAL ] LANGUAGE <object_name> |\n  PROCEDURE <procedure_name> [ ( [ [ <argmode> ] [ <argname> ] <argtype> [, ...] ] ) ] |\n  ROUTINE <routine_name> [ ( [ [ <argmode> ] [ <argname> ] <argtype> [, ...] ] ) ] |\n  SCHEMA <object_name> |\n  SEQUENCE <object_name> |\n  SERVER <object_name> |\n  TABLE <object_name> |\n  TEXT SEARCH CONFIGURATION <object_name> |\n  TEXT SEARCH DICTIONARY <object_name> |\n  TEXT SEARCH PARSER <object_name> |\n  TEXT SEARCH TEMPLATE <object_name> |\n  TRANSFORM FOR <type_name> LANGUAGE <lang_name> |\n  TYPE <object_name> |\n  VIEW <object_name>\n\nand <aggregate_signature> is:\n\n* |\n[ <argmode> ] [ <argname> ] <argtype> [ , ... ] |\n[ [ <argmode> ] [ <argname> ] <argtype> [ , ... ] ] ORDER BY [ <argmode> ] [ <argname> ] <argtype> [ , ... ]\n"})}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ALTER EXTENSION"})," changes the definition of an installed extension. There are several subforms:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"UPDATE"})})}),"\n",(0,s.jsx)(n.p,{children:"This form updates the extension to a newer version. The extension must supply a suitable update script (or series of scripts) that can modify the currently-installed version into the requested version."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"SET SCHEMA"})})}),"\n",(0,s.jsxs)(n.p,{children:["This form moves the extension member objects into another schema. The extension must be ",(0,s.jsx)(n.em,{children:"relocatable"})," for this command to succeed."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"ADD member_object"})})}),"\n",(0,s.jsx)(n.p,{children:"This form adds an existing object to the extension. This is mainly useful in extension update scripts. The object will subsequently be treated as a member of the extension; notably, it can only be dropped by dropping the extension."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"DROP member_object"})})}),"\n",(0,s.jsx)(n.p,{children:"This form removes a member object from the extension. This is mainly useful in extension update scripts. The object is not dropped, only disassociated from the extension."}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"https://www.postgresql.org/docs/12/extend-extensions.html",children:"Packaging Related Objects into an Extension"})," for more information about these operations."]}),"\n",(0,s.jsxs)(n.p,{children:["You must own the extension to use ",(0,s.jsx)(n.code,{children:"ALTER EXTENSION"}),". The ",(0,s.jsx)(n.code,{children:"ADD"})," and ",(0,s.jsx)(n.code,{children:"DROP"})," forms also require ownership of the object that is being added or dropped."]}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"name"})})}),"\n",(0,s.jsx)(n.p,{children:"The name of an installed extension."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"new_version"})})}),"\n",(0,s.jsxs)(n.p,{children:["The new version of the extension. The new_version can be either an identifier or a string literal. If not specified, ",(0,s.jsx)(n.code,{children:"ALTER EXTENSION UPDATE"})," attempts to update to whatever is shown as the default version in the extension's control file."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"new_schema"})})}),"\n",(0,s.jsx)(n.p,{children:"The new schema for the extension."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"object_name"})}),(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"aggregate_name"})}),(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"function_name"})}),(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"operator_name"})}),(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"procedure_name"})}),(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"routine_name"})})]}),"\n",(0,s.jsx)(n.p,{children:"The name of an object to be added to or removed from the extension. Names of tables, aggregates, domains, foreign tables, functions, operators, operator classes, operator families, procedures, routines, sequences, text search objects, types, and views can be schema-qualified."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"source_type"})})}),"\n",(0,s.jsx)(n.p,{children:"The name of the source data type of the cast."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"target_type"})})}),"\n",(0,s.jsx)(n.p,{children:"The name of the target data type of the cast."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"argmode"})})}),"\n",(0,s.jsxs)(n.p,{children:["The mode of a function or aggregate argument: ",(0,s.jsx)(n.code,{children:"IN"}),", ",(0,s.jsx)(n.code,{children:"OUT"}),", ",(0,s.jsx)(n.code,{children:"INOUT"}),", or ",(0,s.jsx)(n.code,{children:"VARIADIC"}),". If omitted, the default is ",(0,s.jsx)(n.code,{children:"IN"}),". Note that ",(0,s.jsx)(n.code,{children:"ALTER EXTENSION"})," does not actually pay any attention to ",(0,s.jsx)(n.code,{children:"OUT"})," arguments, since only the input arguments are needed to determine the function's identity. So it is sufficient to list the ",(0,s.jsx)(n.code,{children:"IN"}),", ",(0,s.jsx)(n.code,{children:"INOUT"}),", and ",(0,s.jsx)(n.code,{children:"VARIADIC"})," arguments."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"argname"})})}),"\n",(0,s.jsxs)(n.p,{children:["The name of a function or aggregate argument. Note that ",(0,s.jsx)(n.code,{children:"ALTER EXTENSION"})," does not actually pay any attention to argument names, since only the argument data types are needed to determine the function's identity."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"argtype"})})}),"\n",(0,s.jsx)(n.p,{children:"The data type of a function, procedure, or aggregate argument."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"left_type"})}),(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"right_type"})})]}),"\n",(0,s.jsxs)(n.p,{children:["The data types of the operator's arguments (optionally schema-qualified) . Specify ",(0,s.jsx)(n.code,{children:"NONE"})," for the missing argument of a prefix or postfix operator."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"PROCEDURAL"})})}),"\n",(0,s.jsx)(n.p,{children:"This is a noise word."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"type_name"})})}),"\n",(0,s.jsx)(n.p,{children:"The name of the data type of the transform."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"lang_name"})})}),"\n",(0,s.jsx)(n.p,{children:"The name of the language of the transform."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.p,{children:"To update the hstore extension to version 2.0:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER EXTENSION hstore UPDATE TO '2.0';\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To change the schema of the ",(0,s.jsx)(n.code,{children:"hstore"})," extension to ",(0,s.jsx)(n.code,{children:"utils"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER EXTENSION hstore SET SCHEMA utils;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To add an existing function to the ",(0,s.jsx)(n.code,{children:"hstore"})," extension:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER EXTENSION hstore ADD FUNCTION populate_record(anyelement, hstore);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ALTER EXTENSION"})," is a Cloudberry Database extension."]}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/sql-stmts/create-extension",children:"CREATE EXTENSION"}),", ",(0,s.jsx)(n.a,{href:"/docs/sql-stmts/drop-extension",children:"DROP EXTENSION"})]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var s=t(67294);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);