"use strict";(self.webpackChunkCloudberry_Database_website=self.webpackChunkCloudberry_Database_website||[]).push([[596],{40006:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var t=a(85893),s=a(11151);const i={title:"[101-3] Lesson 3: Create Tables",description:"Learn how to create tables in the Cloudberry Database."},r=void 0,l={type:"mdx",permalink:"/zh/bootcamp/101-3-create-tables",source:"@site/i18n/zh/docusaurus-plugin-content-pages/bootcamp/101-3-create-tables.md",title:"[101-3] Lesson 3: Create Tables",description:"Learn how to create tables in the Cloudberry Database.",frontMatter:{title:"[101-3] Lesson 3: Create Tables",description:"Learn how to create tables in the Cloudberry Database."},unlisted:!1},o={},d=[{value:"Create tables using a SQL file in psql",id:"create-tables-using-a-sql-file-in-psql",level:2},{value:"About the distribution policy",id:"about-the-distribution-policy",level:2},{value:"What&#39;s next",id:"whats-next",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["After creating and preparing a database in ",(0,t.jsx)(n.a,{href:"./101-2-create-and-prepare-database",children:"Lesson 2: Create and Prepare a Database"}),", you can start to create tables in the database."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["To introduce Cloudberry Database, we use a public data set, the Airline On-Time Statistics and Delay Causes data set, published by the United States Department of Transportation at ",(0,t.jsx)(n.a,{href:"http://www.transtats.bts.gov/",children:"http://www.transtats.bts.gov/"}),". The On-Time Performance dataset records flights by date, airline, originating airport, destination airport, and many other flight details. The data is available for flights since 1987. The exercises in this guide use data for about a million flights in 2009 and 2010. You are encouraged to review the SQL scripts in the GitHub ",(0,t.jsx)(n.code,{children:"000-cbdb-sandbox/configs/faa.tar.gz"})," directory as you work through this introduction. You can run most of the exercises by entering the commands yourself or by executing a script in the ",(0,t.jsx)(n.code,{children:"faa"})," directory."]})}),"\n",(0,t.jsx)(n.h2,{id:"create-tables-using-a-sql-file-in-psql",children:"Create tables using a SQL file in psql"}),"\n",(0,t.jsxs)(n.p,{children:["In Cloudberry Database, you can use the ",(0,t.jsx)(n.code,{children:"CREATE TABLE"})," SQL statement to create a table."]}),"\n",(0,t.jsxs)(n.p,{children:["In the following steps, you will be guided to run a SQL file ",(0,t.jsx)(n.code,{children:"create_dim_tables.sql"})," that contains the ",(0,t.jsx)(n.code,{children:"CREATE TABLE"})," statements needed to create ",(0,t.jsx)(n.code,{children:"faa"})," databases."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Log into Cloudberry Database in Docker as ",(0,t.jsx)(n.code,{children:"gpadmin"}),". Then enter the ",(0,t.jsx)(n.code,{children:"faa"})," directory, in which the SQL file ",(0,t.jsx)(n.code,{children:"create_dim_tables.sql"})," is located."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"[gpadmin@mdw tmp]$ cd /tmp\n[gpadmin@mdw tmp]$ tar xzf faa.tar.gz\n[gpadmin@mdw tmp]$ cd faa\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Take a look at the ",(0,t.jsx)(n.code,{children:"create_dim_tables.sql"})," file."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"[gpadmin@mdw faa]$ more create_dim_tables.sql\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"create_dim_tables.sql"})," file contains the following ",(0,t.jsx)(n.code,{children:"CREATE TABLE"})," statements:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"DROP TABLE IF EXISTS faa.d_airports;  -- Drops the table if it exists to avoid name conflict.\nCREATE TABLE faa.d_airports (  -- Creates the table.\n    AirportID      INTEGER,\n    Name           TEXT,\n    City           TEXT,\n    Country        TEXT,\n    airport_code   TEXT,\n    ICOA_code      TEXT,\n    Latitude       FLOAT8,\n    Longitude      FLOAT8,\n    Altitude       FLOAT8,\n    TimeZoneOffset FLOAT,\n    DST_Flag       TEXT,\n    TZ             TEXT\n)\nDISTRIBUTED BY (airport_code);  -- Specifies the distribution column airport_code.\n\nDROP TABLE IF EXISTS faa.d_wac;\nCREATE TABLE faa.d_wac (wac SMALLINT, area_desc TEXT)\nDISTRIBUTED BY (wac);\n\nDROP TABLE IF EXISTS faa.d_airlines;\nCREATE TABLE faa.d_airlines (airlineid INTEGER, airline_desc TEXT)\nDISTRIBUTED BY (airlineid);\n\nDROP TABLE IF EXISTS faa.d_cancellation_codes;\nCREATE TABLE faa.d_cancellation_codes (cancel_code TEXT, cancel_desc TEXT)\nDISTRIBUTED BY (cancel_code);\n\nDROP TABLE IF EXISTS faa.d_delay_groups;\nCREATE TABLE faa.d_delay_groups (delay_group_code TEXT, delay_group_desc TEXT)\nDISTRIBUTED BY (delay_group_code);\n\nDROP TABLE IF EXISTS faa.d_distance_groups;\nCREATE TABLE faa.d_distance_groups (distance_group_code TEXT, distance_group_desc TEXT)\nDISTRIBUTED BY (distance_group_code);\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Connect to the ",(0,t.jsx)(n.code,{children:"tutorial"})," database as ",(0,t.jsx)(n.code,{children:"lily"})," using the ",(0,t.jsx)(n.code,{children:"psql"}),". You will run the SQL file as ",(0,t.jsx)(n.code,{children:"lily"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"[gpadmin@mdw faa]$ psql -U lily tutorial\n\nPassword for user lily:  # changeme\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'psql (14.4, server 14.4)\nType "help" for help.\ntutorial=>\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Run the ",(0,t.jsx)(n.code,{children:"create_dim_tables.sql"})," file using the ",(0,t.jsx)(n.code,{children:"psql"})," command ",(0,t.jsx)(n.code,{children:"\\i"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"tutorial=> \\i create_dim_tables.sql\n"})}),"\n",(0,t.jsx)(n.p,{children:"The following messages are displayed:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'psql:create_dim_tables.sql:1: NOTICE:  table "d_airports" does not exist, skipping\nDROP TABLE\nCREATE TABLE\npsql:create_dim_tables.sql:18: NOTICE:  table "d_wac" does not exist, skipping\nDROP TABLE\nCREATE TABLE\npsql:create_dim_tables.sql:22: NOTICE:  table "d_airlines" does not exist, skipping\nDROP TABLE\nCREATE TABLE\npsql:create_dim_tables.sql:26: NOTICE:  table "d_cancellation_codes" does not exist, skipping\nDROP TABLE\nCREATE TABLE\npsql:create_dim_tables.sql:30: NOTICE:  table "d_delay_groups" does not exist, skipping\nDROP TABLE\nCREATE TABLE\npsql:create_dim_tables.sql:34: NOTICE:  table "d_distance_groups" does not exist, skipping\nDROP TABLE\nCREATE TABLE\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.code,{children:"\\dt"})," command to display all tables in the ",(0,t.jsx)(n.code,{children:"faa"})," schema. You can see that 6 tables have been created."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"tutorial=> \\dt\n                    List of relations\nSchema |         Name         | Type  | Owner | Storage\n--------+----------------------+-------+-------+---------\nfaa    | d_airlines           | table | lily  | heap\nfaa    | d_airports           | table | lily  | heap\nfaa    | d_cancellation_codes | table | lily  | heap\nfaa    | d_delay_groups       | table | lily  | heap\nfaa    | d_distance_groups    | table | lily  | heap\nfaa    | d_wac                | table | lily  | heap\n(6 rows)\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"about-the-distribution-policy",children:"About the distribution policy"}),"\n",(0,t.jsx)(n.p,{children:"The definition of a table includes the distribution policy for the data, which is critical for query performance. The goals for the distribution policy are to:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Distribute the volume of data and query execution work evenly among segments."}),"\n",(0,t.jsx)(n.li,{children:"Enable segments to accomplish complicated query processing steps locally."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The distribution policy determines how data is distributed among segments. To get an effective distribution policy requires understanding of the data's characteristics, what kind of queries that would be executed on the data and what distribution strategy will best utilize the parallel execution capacity among segments."}),"\n",(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.code,{children:"DISTRIBUTED"})," clause in ",(0,t.jsx)(n.code,{children:"CREATE TABLE"})," statement to define the distribution policy for a table. Ideally, each segment possesses an equal volume of data and performs equal share of work when queries run. There are 2 kinds of distribution policy syntax in Cloudberry Database:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"DISTRIBUTED BY (column, ...)"})," defines a distribution key from one or more columns. A hash function applied to the distribution key determines which segment stores the corresponding row. Rows that have same distribution key are stored on the same segment. If the distribution keys are unique, the hash function will ensure that data is distributed evenly. The default distribution policy is a hash on the primary key of the table or the first column of table if no primary key is specified."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"DISTRIBUTED RANDOMLY"})," distributes rows in round-robin fashion among segments."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"When different tables that have the same or similar columns as distribution key are about to be joined, join action might be accomplished on segments, which will be much faster than re-distributing rows across segments and then joining. The random distribution policy cannot make it happen, so it is definitely better to have a distribution key for a table."}),"\n",(0,t.jsx)(n.h2,{id:"whats-next",children:"What's next"}),"\n",(0,t.jsxs)(n.p,{children:["After creating some tables in the database, you can continue to load data into the tables. See ",(0,t.jsx)(n.a,{href:"./101-4-data-loading",children:"Lesson 4: Data Loading"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Other tutorials:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"./101-1-create-users-and-roles",children:"Lesson 1: Create Users and Roles"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"./101-2-create-and-prepare-database",children:"Lesson 2: Create and Prepare Database"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"./101-5-queries-and-performance-tuning",children:"Lesson 5: Queries and Performance Tuning"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"./101-6-backup-and-recovery-operations",children:"Lesson 6: Backup and Restore Operations"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>l,a:()=>r});var t=a(67294);const s={},i=t.createContext(s);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);