"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[1205],{72713:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var t=n(85893),i=n(11151);const r={title:"REINDEX"},a="REINDEX",d={id:"sql-stmts/reindex",title:"REINDEX",description:"Rebuilds indexes.",source:"@site/docs/sql-stmts/reindex.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/reindex",permalink:"/zh/docs/sql-stmts/reindex",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/reindex.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1732523543,formattedLastUpdatedAt:"2024\u5e7411\u670825\u65e5",frontMatter:{title:"REINDEX"},sidebar:"docsbars",previous:{title:"REFRESH MATERIALIZED VIEW",permalink:"/zh/docs/sql-stmts/refresh-materialized-view"},next:{title:"RELEASE SAVEPOINT",permalink:"/zh/docs/sql-stmts/release-savepoint"}},o={},c=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function l(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"reindex",children:"REINDEX"}),"\n",(0,t.jsx)(s.p,{children:"Rebuilds indexes."}),"\n",(0,t.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"REINDEX [ (VERBOSE) ] { INDEX | TABLE | SCHEMA | DATABASE | SYSTEM } <name>\n"})}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"REINDEX"})," rebuilds an index using the data stored in the index's table, replacing the old copy of the index. There are several scenarios in which to use ",(0,t.jsx)(s.code,{children:"REINDEX"}),":"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["An index has become corrupted, and no longer contains valid data. Although in theory this should never happen, in practice indexes can become corrupted due to software bugs or hardware failures. ",(0,t.jsx)(s.code,{children:"REINDEX"})," provides a recovery method."]}),"\n",(0,t.jsxs)(s.li,{children:["An index has become bloated, that is, it contains many empty or nearly-empty pages. This can occur with B-tree indexes in Cloudberry Database under certain uncommon access patterns. ",(0,t.jsx)(s.code,{children:"REINDEX"})," provides a way to reduce the space consumption of the index by writing a new version of the index without the dead pages."]}),"\n",(0,t.jsxs)(s.li,{children:["You have altered a storage parameter (such as ",(0,t.jsx)(s.code,{children:"fillfactor"}),") for an index, and wish to ensure that the change has taken full effect."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"INDEX"})})}),"\n",(0,t.jsx)(s.p,{children:"Recreate the specified index."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"TABLE"})})}),"\n",(0,t.jsx)(s.p,{children:'Recreate all indexes of the specified table. If the table has a secondary "TOAST" table, that is reindexed as well.'}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"SCHEMA"})})}),"\n",(0,t.jsxs)(s.p,{children:['Recreate all indexes of the specified schema. If a table of this schema has a secondary "TOAST" table, that is reindexed as well. Indexes on shared system catalogs are also processed. You cannot run this form of ',(0,t.jsx)(s.code,{children:"REINDEX"})," inside a transaction block."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"DATABASE"})})}),"\n",(0,t.jsxs)(s.p,{children:["Recreate all indexes within the current database. Indexes on shared system catalogs are also processed. This form of ",(0,t.jsx)(s.code,{children:"REINDEX"})," cannot be run inside a transaction block."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"SYSTEM"})})}),"\n",(0,t.jsxs)(s.p,{children:["Recreate all indexes on system catalogs within the current database. Indexes on shared system catalogs are included. Indexes on user tables are not processed. This form of ",(0,t.jsx)(s.code,{children:"REINDEX"})," cannot be run inside a transaction block."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"name"})})}),"\n",(0,t.jsxs)(s.p,{children:["The name of the specific index, table, or database to be reindexed. Index and table names may be schema-qualified. Presently, ",(0,t.jsx)(s.code,{children:"REINDEX DATABASE"})," and ",(0,t.jsx)(s.code,{children:"REINDEX SYSTEM"})," can only reindex the current database, so their parameter must match the current database's name."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"VERBOSE"})})}),"\n",(0,t.jsx)(s.p,{children:"Prints a progress report as each index is reindexed."}),"\n",(0,t.jsx)(s.h2,{id:"notes",children:"Notes"}),"\n",(0,t.jsxs)(s.p,{children:["Cloudberry Database does not support concurrently recreating indexes (",(0,t.jsx)(s.code,{children:"CONCURRENTLY"})," keyword is not supported)."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"REINDEX"})," causes locking of system catalog tables, which could affect currently running queries. To avoid disrupting ongoing business operations, schedule the ",(0,t.jsx)(s.code,{children:"REINDEX"})," operation during a period of low activity."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"REINDEX"})," is similar to a drop and recreate of the index in that the index contents are rebuilt from scratch. However, the locking considerations are rather different. ",(0,t.jsx)(s.code,{children:"REINDEX"})," locks out writes but not reads of the index's parent table. It also takes an ",(0,t.jsx)(s.code,{children:"ACCESS EXCLUSIVE"})," lock on the specific index being processed, which will block reads that attempt to use that index. In contrast, ",(0,t.jsx)(s.code,{children:"DROP INDEX"})," momentarily takes an ",(0,t.jsx)(s.code,{children:"ACCESS EXCLUSIVE"})," lock on the parent table, blocking both writes and reads. The subsequent ",(0,t.jsx)(s.code,{children:"CREATE INDEX"})," locks out writes but not reads; since the index is not there, no read will attempt to use it, meaning that there will be no blocking but reads may be forced into expensive sequential scans."]}),"\n",(0,t.jsxs)(s.p,{children:["Reindexing a single index or table requires being the owner of that index or table. Reindexing a schema or database requires being the owner of the schema or database. Note that it is therefore sometimes possible for non-superusers to rebuild indexes of tables owned by other users. However, as a special exception, when a non-superuser issues ",(0,t.jsx)(s.code,{children:"REINDEX DATABASE"}),", ",(0,t.jsx)(s.code,{children:"REINDEX SCHEMA"})," or ",(0,t.jsx)(s.code,{children:"REINDEX SYSTEM"}),", Cloudberry Database skips indexes on shared catalogs unless the user owns the catalog (which typically won't be the case). Of course, superusers can always reindex anything."]}),"\n",(0,t.jsxs)(s.p,{children:["REINDEX",(0,t.jsx)(s.code,{children:"does not update the"}),"reltuples",(0,t.jsx)(s.code,{children:"and"}),"relpages",(0,t.jsx)(s.code,{children:"statistics for the index. To update those statistics, run"}),"ANALYZE` on the table after reindexing."]}),"\n",(0,t.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(s.p,{children:"Rebuild a single index:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"REINDEX INDEX my_index;\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Rebuild all the indexes on the table ",(0,t.jsx)(s.code,{children:"my_table"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"REINDEX TABLE my_table;\n"})}),"\n",(0,t.jsx)(s.p,{children:"Rebuild all indexes in a particular database, without trusting the system indexes to be valid already:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:'$ export PGOPTIONS="-P"\n$ psql broken_db\n...\nbroken_db=> REINDEX DATABASE broken_db;\nbroken_db=> \\q\n'})}),"\n",(0,t.jsx)(s.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,t.jsxs)(s.p,{children:["There is no ",(0,t.jsx)(s.code,{children:"REINDEX"})," command in the SQL standard."]}),"\n",(0,t.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/zh/docs/sql-stmts/create-index",children:"CREATE INDEX"}),", ",(0,t.jsx)(s.a,{href:"/zh/docs/sql-stmts/drop-index",children:"DROP INDEX"}),", ",(0,t.jsx)(s.a,{href:"/zh/docs/sql-stmts/vacuum",children:"VACUUM"}),", reindexdb"]})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>d,a:()=>a});var t=n(67294);const i={},r=t.createContext(i);function a(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);