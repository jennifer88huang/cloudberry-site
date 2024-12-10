"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[7024],{35190:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var l=n(85893),r=n(11151);const s={title:"Create AO/AOCO Tables and Refresh Materialized Views in Parallel"},t="Create AO/AOCO Tables and Refresh Materialized Views in Parallel (New in v1.5.0)",i={id:"performance/parallel-create-ao-refresh-mv",title:"Create AO/AOCO Tables and Refresh Materialized Views in Parallel",description:"Since v1.5.0, Cloudberry Database supports creating append-optimized (AO) tables and append-optimized column-oriented (AOCO) tables in parallel by using the CREATE TABLE AS statement, and supports refreshing materialized views in parallel based on the AO or AOCO tables. Parallel processing accelerates table creation and materialized view refresh.",source:"@site/docs/performance/parallel-create-ao-refresh-mv.md",sourceDirName:"performance",slug:"/performance/parallel-create-ao-refresh-mv",permalink:"/zh/docs/performance/parallel-create-ao-refresh-mv",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/performance/parallel-create-ao-refresh-mv.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1733824616,formattedLastUpdatedAt:"2024\u5e7412\u670810\u65e5",frontMatter:{title:"Create AO/AOCO Tables and Refresh Materialized Views in Parallel"},sidebar:"docsbars",previous:{title:"Incremental Materialized View",permalink:"/zh/docs/performance/use-incremental-materialized-view"},next:{title:"Parallel Queries Execution",permalink:"/zh/docs/performance/parallel-query-execution"}},c={},d=[{value:"Usage example",id:"usage-example",level:2},{value:"Create AO/AOCO tables in parallel",id:"create-aoaoco-tables-in-parallel",level:3},{value:"Refresh materialized views in parallel",id:"refresh-materialized-views-in-parallel",level:3},{value:"Acceleration effect",id:"acceleration-effect",level:2},{value:"See also",id:"see-also",level:2}];function o(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.h1,{id:"create-aoaoco-tables-and-refresh-materialized-views-in-parallel-new-in-v150",children:"Create AO/AOCO Tables and Refresh Materialized Views in Parallel (New in v1.5.0)"}),"\n",(0,l.jsxs)(a.p,{children:["Since v1.5.0, Cloudberry Database supports creating append-optimized (AO) tables and append-optimized column-oriented (AOCO) tables in parallel by using the ",(0,l.jsx)(a.code,{children:"CREATE TABLE AS"})," statement, and supports refreshing materialized views in parallel based on the AO or AOCO tables. Parallel processing accelerates table creation and materialized view refresh."]}),"\n",(0,l.jsxs)(a.p,{children:["To use the parallel feature, you need to first set the value of the system parameter ",(0,l.jsx)(a.code,{children:"enable_parallel"})," to ",(0,l.jsx)(a.code,{children:"ON"}),"."]}),"\n",(0,l.jsx)(a.h2,{id:"usage-example",children:"Usage example"}),"\n",(0,l.jsx)(a.h3,{id:"create-aoaoco-tables-in-parallel",children:"Create AO/AOCO tables in parallel"}),"\n",(0,l.jsxs)(a.ol,{children:["\n",(0,l.jsxs)(a.li,{children:["\n",(0,l.jsxs)(a.p,{children:["Create a base table ",(0,l.jsx)(a.code,{children:"t_p2"})," and use ",(0,l.jsx)(a.code,{children:"WITH"})," to specify the number of parallel workers in the table creation statement."]}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-sql",children:"CREATE TABLE t_p2(c1 INT, c2 INT) WITH (parallel_workers=2) DISTRIBUTED BY (c1);\n"})}),"\n"]}),"\n",(0,l.jsxs)(a.li,{children:["\n",(0,l.jsxs)(a.p,{children:["Insert data into ",(0,l.jsx)(a.code,{children:"t_p2"})," and collect statistics on this table."]}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-sql",children:"INSERT INTO t_p2 SELECT i, i+1 FROM generate_series(1, 10000000) i;\nANALYZE t_p2;\n"})}),"\n"]}),"\n",(0,l.jsxs)(a.li,{children:["\n",(0,l.jsx)(a.p,{children:"Enable parallel processing and turn off the GPORCA optimizer."}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-sql",children:"SET enable_parallel = ON;\nSET optimizer = OFF;\n"})}),"\n"]}),"\n",(0,l.jsxs)(a.li,{children:["\n",(0,l.jsxs)(a.p,{children:["Use ",(0,l.jsx)(a.code,{children:"CREATE TABLE AS"})," to create a table based on ",(0,l.jsx)(a.code,{children:"t_p2"}),". The parallel operator appears in the execution plan, indicating that tables have been created in parallel."]}),"\n",(0,l.jsxs)(a.ul,{children:["\n",(0,l.jsxs)(a.li,{children:["\n",(0,l.jsx)(a.p,{children:"Create an AO table:"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-sql",children:"EXPLAIN(COSTS OFF) CREATE TABLE ctas_ao USING ao_row AS SELECT SUM(a.c2) AS c2, AVG(b.c1) AS c1 FROM t_p2 a JOIN t_p2 b ON a.c1 = b.c1 DISTRIBUTED BY (c2);\n\n                        QUERY PLAN                            \n-----------------------------------------------------------------\nRedistribute Motion 1:3  (slice1; segments: 1)\nHash Key: (sum(a.c2))\n->  Finalize Aggregate\n        ->  Gather Motion 6:1  (slice2; segments: 6)\n            ->  Partial Aggregate\n                    ->  Parallel Hash Join\n                        Hash Cond: (a.c1 = b.c1)\n                        ->  Parallel Seq Scan on t_p2 a\n                        ->  Parallel Hash\n                                ->  Parallel Seq Scan on t_p2 b\nOptimizer: Postgres query optimizer\n(11 rows)\n"})}),"\n"]}),"\n",(0,l.jsxs)(a.li,{children:["\n",(0,l.jsx)(a.p,{children:"Create an AOCO table:"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-sql",children:"EXPLAIN(COSTS OFF) CREATE TABLE ctas_aoco USING ao_column AS SELECT SUM(a.c2) AS c2, AVG(b.c1) AS c1 FROM t_p2 a JOIN t_p2 b ON a.c1 = b.c1 DISTRIBUTED BY (c2);\n\n                        QUERY PLAN                            \n-----------------------------------------------------------------\nRedistribute Motion 1:3  (slice1; segments: 1)\nHash Key: (sum(a.c2))\n->  Finalize Aggregate\n        ->  Gather Motion 6:1  (slice2; segments: 6)\n            ->  Partial Aggregate\n                    ->  Parallel Hash Join\n                        Hash Cond: (a.c1 = b.c1)\n                        ->  Parallel Seq Scan on t_p2 a\n                        ->  Parallel Hash\n                                ->  Parallel Seq Scan on t_p2 b\nOptimizer: Postgres query optimizer\n(11 rows)\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(a.h3,{id:"refresh-materialized-views-in-parallel",children:"Refresh materialized views in parallel"}),"\n",(0,l.jsxs)(a.ol,{children:["\n",(0,l.jsxs)(a.li,{children:["\n",(0,l.jsxs)(a.p,{children:["Create a base table ",(0,l.jsx)(a.code,{children:"t_p"})," and use ",(0,l.jsx)(a.code,{children:"WITH"})," to specify the number of parallel workers in the table creation statement."]}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-sql",children:"CREATE TABLE t_p(c1 INT, c2 INT) WITH (parallel_workers=8) DISTRIBUTED BY (c1);\n"})}),"\n"]}),"\n",(0,l.jsxs)(a.li,{children:["\n",(0,l.jsxs)(a.p,{children:["Insert data into ",(0,l.jsx)(a.code,{children:"t_p"})," and collect statistics on this table."]}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-sql",children:"INSERT INTO t_p SELECT i, i+1 FROM generate_series(1, 10000000) i;\nANALYZE t_p;\n"})}),"\n"]}),"\n",(0,l.jsxs)(a.li,{children:["\n",(0,l.jsxs)(a.p,{children:["Create a materialized view ",(0,l.jsx)(a.code,{children:"matv"})," that uses row storage (AO row) or column storage (AO column), depending on the parameter ",(0,l.jsx)(a.code,{children:"ao_row"}),". The content of the materialized view is aggregated query results derived from table ",(0,l.jsx)(a.code,{children:"t_p"}),"."]}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-sql",children:"CREATE MATERIALIZED VIEW matv USING ao_row AS SELECT SUM(a.c2) AS c2, AVG(b.c1) AS c1 FROM t_p a JOIN t_p b ON a.c1 = b.c1 WITH NO DATA DISTRIBUTED BY (c2);\n"})}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-sql",children:"CREATE MATERIALIZED VIEW matv USING ao_column AS SELECT SUM(a.c2) AS c2, AVG(b.c1) AS c1 FROM t_p a JOIN t_p b ON a.c1 = b.c1 WITH NO DATA DISTRIBUTED BY (c2);\n"})}),"\n"]}),"\n",(0,l.jsxs)(a.li,{children:["\n",(0,l.jsx)(a.p,{children:"Enable parallel processing and turn off the GPORCA optimizer."}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-sql",children:"SET enable_parallel = ON;\nSET optimizer = OFF;\n"})}),"\n"]}),"\n",(0,l.jsxs)(a.li,{children:["\n",(0,l.jsx)(a.p,{children:"Refresh the materialized view."}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-sql",children:"REFRESH MATERIALIZED VIEW matv;\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(a.p,{children:"You can use tools to record the refresh durations, and compare the difference in the durations when turning on and off the parallel processing. You can see the acceleration from parallel processing."}),"\n",(0,l.jsx)(a.h2,{id:"acceleration-effect",children:"Acceleration effect"}),"\n",(0,l.jsxs)(a.table,{children:[(0,l.jsx)(a.thead,{children:(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.th,{children:"Whether to enable parallel processing"}),(0,l.jsx)(a.th,{children:"Time spent on refreshing materialized view based on AO table"}),(0,l.jsx)(a.th,{children:"Time spent on refreshing materialized view based on AOCO table"}),(0,l.jsxs)(a.th,{children:["Time spent on creating AO table using ",(0,l.jsx)(a.code,{children:"CREATE TABLE AS"})]}),(0,l.jsxs)(a.th,{children:["Time spent on creating AOCO table using ",(0,l.jsx)(a.code,{children:"CREATE TABLE AS"})]})]})}),(0,l.jsxs)(a.tbody,{children:[(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.td,{children:"Non-parallel"}),(0,l.jsx)(a.td,{children:"6.18 ms"}),(0,l.jsx)(a.td,{children:"5.91 ms"}),(0,l.jsx)(a.td,{children:"6.56 ms"}),(0,l.jsx)(a.td,{children:"6.06 ms"})]}),(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.td,{children:"Parallel, with 4 workers"}),(0,l.jsx)(a.td,{children:"2.83 ms"}),(0,l.jsx)(a.td,{children:"2.81 ms"}),(0,l.jsx)(a.td,{children:"2.37 ms"}),(0,l.jsx)(a.td,{children:"2.48 ms"})]})]})]}),"\n",(0,l.jsx)(a.h2,{id:"see-also",children:"See also"}),"\n",(0,l.jsxs)(a.ul,{children:["\n",(0,l.jsx)(a.li,{children:(0,l.jsx)(a.a,{href:"/zh/docs/performance/use-auto-materialized-view-to-answer-queries",children:"Use Automatic Materialized Views for Query Optimization"})}),"\n",(0,l.jsx)(a.li,{children:(0,l.jsx)(a.a,{href:"/zh/docs/performance/use-incremental-materialized-view",children:"Incremental Materialized View in Cloudberry Database"})}),"\n"]})]})}function h(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,l.jsx)(a,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},11151:(e,a,n)=>{n.d(a,{Z:()=>i,a:()=>t});var l=n(67294);const r={},s=l.createContext(r);function t(e){const a=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),l.createElement(s.Provider,{value:a},e.children)}}}]);