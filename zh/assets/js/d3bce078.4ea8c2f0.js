"use strict";(self.webpackChunkCloudberry_Database_website=self.webpackChunkCloudberry_Database_website||[]).push([[4669],{33519:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=i(85893),a=i(11151);const s={title:"Incremental Materialized View"},r="Incremental Materialized View in Cloudberry Database (New in v1.5.0)",l={id:"performance/use-incremental-materialized-view",title:"Incremental Materialized View",description:"This document introduces the usage scenarios of the incremental materialized view in Cloudberry Database, how to use it, the restrictions, and the things to note.",source:"@site/docs/performance/use-incremental-materialized-view.md",sourceDirName:"performance",slug:"/performance/use-incremental-materialized-view",permalink:"/zh/docs/performance/use-incremental-materialized-view",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/performance/use-incremental-materialized-view.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1731576389,formattedLastUpdatedAt:"2024\u5e7411\u670814\u65e5",frontMatter:{title:"Incremental Materialized View"},sidebar:"docsbars",previous:{title:"Use Auto Materialized Views for Query Optimization",permalink:"/zh/docs/performance/use-auto-materialized-view-to-answer-queries"},next:{title:"Create AO/AOCO Tables and Refresh Materialized Views in Parallel",permalink:"/zh/docs/performance/parallel-create-ao-refresh-mv"}},d={},c=[{value:"With regular view",id:"with-regular-view",level:2},{value:"With incremental materialized view",id:"with-incremental-materialized-view",level:2},{value:"TPC-H comparison",id:"tpc-h-comparison",level:2},{value:"See also",id:"see-also",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"incremental-materialized-view-in-cloudberry-database-new-in-v150",children:"Incremental Materialized View in Cloudberry Database (New in v1.5.0)"}),"\n",(0,t.jsx)(n.p,{children:"This document introduces the usage scenarios of the incremental materialized view in Cloudberry Database, how to use it, the restrictions, and the things to note."}),"\n",(0,t.jsx)(n.p,{children:"The incremental materialized view is a special form of materialized view. When data changes in a base table in Cloudberry Database (such as insertion, update, and deletion), the incremental materialized view does not need to recalculate all the data in the entire view. Instead, it only updates the parts that have changed since the last refresh. This can save a lot of computing resources and time, and significantly improve performance, especially when dealing with large datasets."}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsx)(n.p,{children:"Comparison between incremental materialized view and regular view:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Regular view: Regular views do not store data, but dynamically generate results based on the defined SQL statement each time a query is executed. This means that the data on the view needs to be recalculated each time a query is executed, which can be time-consuming when dealing with large amounts of data."}),"\n",(0,t.jsx)(n.li,{children:'Incremental materialized view: Incremental materialized views calculate and store the result set in advance, which reduces the computing workload when executing queries. In addition, because it is an "incremental" update, when the base data changes, it only needs to update the affected part instead of recalculating the entire dataset.'}),"\n"]})]}),"\n",(0,t.jsx)(n.h1,{id:"usage-scenarios",children:"Usage scenarios"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Where intermediate result sets need to be accelerated when executing queries."}),"\n",(0,t.jsx)(n.li,{children:"Where there are many read operations but few write operations."}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"usage-example",children:"Usage example"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Before using incremental materialized views, make sure that you are using Cloudberry Database v1.5.0 or a later version. Cloudberry Database v1.4.0 and earlier versions do not support incremental materialized views."})}),"\n",(0,t.jsxs)(n.p,{children:["To create an incremental materialized view, you can use the SQL command ",(0,t.jsx)(n.code,{children:"CREATE INCREMENTAL MATERIALIZED VIEW"}),". The complete syntax support is as follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE [INCREMENTAL] MATERIALIZED VIEW [ IF NOT EXISTS ] table_name\n    [ (column_name [, ...] ) ]\n    [ USING method ]\n    [ WITH ( storage_parameter [= value] [, ... ] ) ]\n    [ TABLESPACE tablespace_name ]\n    AS query\n    [ WITH [ NO ] DATA ]\n"})}),"\n",(0,t.jsx)(n.p,{children:"The following example shows how to create incremental materialized views for tables in Cloudberry Database."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create tables ",(0,t.jsx)(n.code,{children:"t0"})," and ",(0,t.jsx)(n.code,{children:"t1"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE t0 (a int) DISTRIBUTED BY (a);\nCREATE TABLE t1 (a int) DISTRIBUTED BY (a);\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create an incremental materialized view ",(0,t.jsx)(n.code,{children:"m"})," based on the two tables."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create a simple materialized view. The following statement creates an incremental materialized view ",(0,t.jsx)(n.code,{children:"m"}),". It selects all columns from table ",(0,t.jsx)(n.code,{children:"t0"})," and distributes the data based on the values of column ",(0,t.jsx)(n.code,{children:"a"}),". This means that view ",(0,t.jsx)(n.code,{children:"m"})," stores a snapshot of the data in table ",(0,t.jsx)(n.code,{children:"t0"})," and can be incrementally updated based on the data changes in ",(0,t.jsx)(n.code,{children:"t0"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE INCREMENTAL MATERIALIZED VIEW m AS SELECT * FROM t0 DISTRIBUTED BY (a);\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create a materialized view with join operations. The following statement also creates an incremental materialized view named ",(0,t.jsx)(n.code,{children:"m"}),", but this time by joining tables ",(0,t.jsx)(n.code,{children:"t0"})," and ",(0,t.jsx)(n.code,{children:"t1"}),". It selects all values of ",(0,t.jsx)(n.code,{children:"t0.a"}),", but only if the value of ",(0,t.jsx)(n.code,{children:"t0.a"})," is equal to the value of ",(0,t.jsx)(n.code,{children:"t1.a"}),". Similarly, the view distributes data based on the value of column ",(0,t.jsx)(n.code,{children:"a"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE INCREMENTAL MATERIALIZED VIEW m AS SELECT t0.a FROM t0, t1 WHERE t0.a = t1.a DISTRIBUTED BY (a);\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Insert data into the tables. The ",(0,t.jsx)(n.code,{children:"RETURNING *"})," clause returns the inserted row after the data is inserted."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"INSERT INTO t0 VALUES (5);\nINSERT INTO t1 VALUES (5);\nINSERT INTO t0 VALUES (8) RETURNING *;\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Check the structure and data of the materialized view ",(0,t.jsx)(n.code,{children:"m"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'postgres=# \\d+ m\n                                    MATERIALIZED VIEW "public.m"\nColumn |  Type   | Collation | Nullable | Default | Storage | Compression | Stats target | Description \n--------+---------+-----------+----------+---------+---------+-------------+--------------+-------------\na      | integer |           |          |         | plain   |             |              | \nVIEW definition:\nSELECT t0.a\nFROM t0;\nDISTRIBUTED BY: (a)\nAccess method: heap\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["View the data in the view ",(0,t.jsx)(n.code,{children:"m"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"postgres=# TABLE m;\na \n---\n5\n(1 row)\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["To debug the statement executions related to incremental materialized views, you can set the value of the system parameter ",(0,t.jsx)(n.code,{children:"debug_print_ivm "})," to ",(0,t.jsx)(n.code,{children:"ON"}),", that is, execute ",(0,t.jsx)(n.code,{children:"SET debug_print_ivm = ON;"}),". The details of this parameter are as follows:"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter name"}),(0,t.jsx)(n.th,{children:"Description description"}),(0,t.jsx)(n.th,{children:"Default value"}),(0,t.jsx)(n.th,{children:"Is it required?"}),(0,t.jsx)(n.th,{children:"Example"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"debug_print_ivm"}),(0,t.jsx)(n.td,{children:"Whether to enable IVM debugging"}),(0,t.jsx)(n.td,{children:"OFF"}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"SET debug_print_ivm = ON;"})]})})]}),"\n",(0,t.jsx)(n.h1,{id:"query-performance-comparison-with-regular-view",children:"Query performance comparison with regular view"}),"\n",(0,t.jsx)(n.p,{children:"The following example compares the query performance of a regular view and that of an incremental materialized view when processing large datasets in Cloudberry Database. The following example uses the Query 15 test dataset of TPC-H."}),"\n",(0,t.jsx)(n.h2,{id:"with-regular-view",children:"With regular view"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create a regular view ",(0,t.jsx)(n.code,{children:"revenue0"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE VIEW revenue0 (supplier_no, total_revenue) AS\n        SELECT\n                l_suppkey,\n                SUM(l_extendedprice * (1 - l_discount))\n        FROM\n                lineitem\n        WHERE\n                l_shipdate >= DATE '1996-01-01'\n                AND l_shipdate < DATE '1996-01-01' + INTERVAL '3' MONTH\n        GROUP BY\n                l_suppkey;\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Select the supplier's details and their maximum revenue from the ",(0,t.jsx)(n.code,{children:"supplier"})," table and the ",(0,t.jsx)(n.code,{children:"revenue0"})," view."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT\n        s_suppkey,\n        s_name,\n        s_address,\n        s_phone,\n        total_revenue\nFROM\n        supplier,\n        revenue0\nWHERE\n        s_suppkey = supplier_no\n        AND total_revenue = (\n                SELECT\n                        MAX(total_revenue)\n                FROM\n                        revenue0\n        )\nORDER BY s_suppkey;\n\ns_suppkey |          s_name           |     s_address     |     s_phone     | total_revenue \n-----------+---------------------------+-------------------+-----------------+---------------\n    8449 | Supplier#000008449        | Wp34zim9qYFbVctdW | 20-469-856-8873 |  1772627.2087\n(1 row)\n\nTime: 3040.23 ms\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In the above query, the result of the view ",(0,t.jsx)(n.code,{children:"revenue0"})," is calculated in real-time, and the query takes 3040.23 ms."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"with-incremental-materialized-view",children:"With incremental materialized view"}),"\n",(0,t.jsx)(n.p,{children:"You can also create an incremental materialized view in the DDL phase, which greatly reduces query time."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create an incremental materialized view ",(0,t.jsx)(n.code,{children:"revenue0"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE INCREMENTAL MATERIALIZED VIEW revenue0 (supplier_no, total_revenue) AS\n        SELECT\n                l_suppkey,\n                SUM(l_extendedprice * (1 - l_discount))\n        FROM\n                lineitem\n        WHERE\n                l_shipdate >= DATE '1996-01-01'\n                AND l_shipdate < DATE '1996-01-01' + INTERVAL '3' MONTH\n        GROUP BY\n                l_suppkey;\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Select the supplier details and their maximum revenue from the ",(0,t.jsx)(n.code,{children:"supplier"})," table and the ",(0,t.jsx)(n.code,{children:"revenue0"})," view. The query takes only 65 ms."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT                \n        s_suppkey,\n        s_name,\n        s_address,\n        s_phone,\n        total_revenue\nFROM\n        supplier,\n        revenue0\nWHERE\n        s_suppkey = supplier_no\n        AND total_revenue = (\n                SELECT\n                        MAX(total_revenue)\n                FROM\n                        revenue0\n        )\nORDER BY s_suppkey;\n\ns_suppkey |          s_name           |     s_address     |     s_phone     | total_revenue \n-----------+---------------------------+-------------------+-----------------+---------------\n    8449 | Supplier#000008449        | Wp34zim9qYFbVctdW | 20-469-856-8873 |  1772627.2087\n(1 row)\n\nTime: 65.731 ms\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"tpc-h-comparison",children:"TPC-H comparison"}),"\n",(0,t.jsx)(n.p,{children:"We have conducted a TPC-H test to compare the execution time of inserts and queries with regular view and incremental materialized view, respectively, with different data volumes. The result is as follows."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Data volume"}),(0,t.jsx)(n.th,{children:"Normal inserts"}),(0,t.jsx)(n.th,{children:"Inserts with incremental materialized view"}),(0,t.jsx)(n.th,{children:"Queries with regular view"}),(0,t.jsx)(n.th,{children:"Queries with incremental materialized view"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1 GB"}),(0,t.jsx)(n.td,{children:"2712 ms"}),(0,t.jsx)(n.td,{children:"3777 ms"}),(0,t.jsx)(n.td,{children:"813 ms"}),(0,t.jsx)(n.td,{children:"43 ms"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"5 GB"}),(0,t.jsx)(n.td,{children:"15681 ms"}),(0,t.jsx)(n.td,{children:"29363 ms"}),(0,t.jsx)(n.td,{children:"3040 ms"}),(0,t.jsx)(n.td,{children:"63 ms"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"10 GB"}),(0,t.jsx)(n.td,{children:"43011 ms"}),(0,t.jsx)(n.td,{children:"73188 ms"}),(0,t.jsx)(n.td,{children:"7057 ms"}),(0,t.jsx)(n.td,{children:"102 ms"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"From the above table, you can see:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"In different data volumes, queries with incremental materialized views are executed much more quickly than normal queries. The query performance is significantly improved with the incremental materialized view."}),"\n",(0,t.jsx)(n.li,{children:"In different data volumes, inserts with incremental materialized views are not as quick as the normal inserts. This is because after data is inserted into tables, the database needs to update the materialized view synchronously, so incremental materialized views are not suitable for scenarios with frequent writes."}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"restrictions-and-notes",children:"Restrictions and notes"}),"\n",(0,t.jsx)(n.p,{children:"Currently, the incremental materialized views on Cloudberry Database have the following usage restrictions:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Creating incremental materialized views for Append-Optimized (AO) tables is not supported."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Creating incremental materialized views for partitioned tables is not supported."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Creating incremental materialized views on PAX storage is not supported."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The following clauses or operations are not supported when defining incremental materialized views."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"min"})," and ",(0,t.jsx)(n.code,{children:"max"})," functions, custom aggregation functions"]}),"\n",(0,t.jsxs)(n.li,{children:["Left and right joins, namely ",(0,t.jsx)(n.code,{children:"LEFT JOIN"})," and ",(0,t.jsx)(n.code,{children:"OUTER JOIN"})]}),"\n",(0,t.jsxs)(n.li,{children:["Window functions, ",(0,t.jsx)(n.code,{children:"HAVING"})," clauses"]}),"\n",(0,t.jsx)(n.li,{children:"Subqueries, CTE queries"}),"\n",(0,t.jsxs)(n.li,{children:["Set operations (",(0,t.jsx)(n.code,{children:"UNION"}),", ",(0,t.jsx)(n.code,{children:"INTERSECT"}),", ",(0,t.jsx)(n.code,{children:"EXCEPT"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"DISTINCT ON"}),", ",(0,t.jsx)(n.code,{children:"ORDER BY"}),", ",(0,t.jsx)(n.code,{children:"LIMIT"}),", ",(0,t.jsx)(n.code,{children:"OFFSET"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Creating incremental materialized views on materialized views is not supported."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"In addition, when using incremental materialized views on Cloudberry Database, you need to pay attention to the following issues:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Using incremental materialized views will slow down data insertion, deletion, and updates. In addition, a base table might have multiple incremental materialized views, and the performance degradation is proportional to the number of incremental materialized views."}),"\n",(0,t.jsx)(n.li,{children:"Using incremental materialized views will generate temporary files to store calculation delta views, which might take up some storage space."}),"\n",(0,t.jsx)(n.li,{children:"Materialized views might increase storage costs depending on the definition of the view."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/zh/docs/performance/use-auto-materialized-view-to-answer-queries",children:"Use Automatic Materialized Views for Query Optimization"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/zh/docs/performance/parallel-create-ao-refresh-mv",children:"Create AO/AOCO Tables and Refresh Materialized Views in Parallel"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>r});var t=i(67294);const a={},s=t.createContext(a);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);