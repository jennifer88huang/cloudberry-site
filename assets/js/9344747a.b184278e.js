"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[6387],{70675:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var s=n(85893),i=n(11151);const a={title:"analyzedb"},l="analyzedb",o={id:"sys-utilities/analyzedb",title:"analyzedb",description:"A utility that performs ANALYZE operations on tables incrementally and concurrently. For append optimized tables, analyzedb updates statistics only if the statistics are not current.",source:"@site/docs/sys-utilities/analyzedb.md",sourceDirName:"sys-utilities",slug:"/sys-utilities/analyzedb",permalink:"/docs/sys-utilities/analyzedb",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sys-utilities/analyzedb.md",tags:[],version:"current",lastUpdatedBy:"vitalzf",lastUpdatedAt:1733904867,formattedLastUpdatedAt:"Dec 11, 2024",frontMatter:{title:"analyzedb"},sidebar:"docsbars",previous:{title:"Utility Overview",permalink:"/docs/sys-utilities/"},next:{title:"clusterdb",permalink:"/docs/sys-utilities/clusterdb"}},d={},c=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Notes",id:"notes",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"See also",id:"see-also",level:2}];function r(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"analyzedb",children:"analyzedb"}),"\n",(0,s.jsxs)(t.p,{children:["A utility that performs ",(0,s.jsx)(t.code,{children:"ANALYZE"})," operations on tables incrementally and concurrently. For append optimized tables, analyzedb updates statistics only if the statistics are not current."]}),"\n",(0,s.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"analyzedb -d <dbname>\n   { -s <schema>  | \n   { -t <schema>.<table> \n     [ -i <col1>[,<col2>, ...] | \n       -x <col1>[,<col2>, ...] ] } |\n     { -f | --file} <config-file> }\n   [ -l | --list ]\n   [ --gen_profile_only ]   \n   [ -p <parallel-level> ]\n   [ --full ]\n   [ --skip_root_stats ]\n   [ --skip_orca_root_stats ]\n   [ -v | --verbose ]\n   [ -a ]\n   [ --skip-locked ]\n\nanalyzedb { --clean_last | --clean_all }\nanalyzedb --version\nanalyzedb { -? | -h | --help }\n"})}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"The analyzedb utility updates statistics on table data for the specified tables in a Cloudberry Database incrementally and concurrently."}),"\n",(0,s.jsxs)(t.p,{children:["While performing ",(0,s.jsx)(t.a,{href:"/docs/sql-stmts/analyze",children:(0,s.jsx)(t.code,{children:"ANALYZE"})})," operations, analyzedb creates a snapshot of the table metadata and stores it on disk on the coordinator host. An ",(0,s.jsx)(t.code,{children:"ANALYZE"})," operation is performed only if the table has been modified. If a table or partition has not been modified since the last time it was analyzed, analyzedb automatically skips the table or partition because it already contains up-to-date statistics."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"For append optimized tables, analyzedb updates statistics incrementally, if the statistics are not current. For example, if table data is changed after statistics were collected for the table. If there are no statistics for the table, statistics are collected."}),"\n",(0,s.jsx)(t.li,{children:"For heap tables, statistics are always updated."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Specify the ",(0,s.jsx)(t.code,{children:"--full"})," option to update append-optimized table statistics even if the table statistics are current."]}),"\n",(0,s.jsxs)(t.p,{children:["By default, analyzedb creates a maximum of 5 concurrent sessions to analyze tables in parallel. For each session, analyzedb issues an ANALYZE command to the database and specifies different table names. The ",(0,s.jsx)(t.code,{children:"-p"})," option controls the maximum number of concurrent sessions."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Partitioned Append-Optimized Tables"})}),"\n",(0,s.jsxs)(t.p,{children:["For a partitioned, append-optimized table, analyzedb checks the root partitioned table and the leaf partitions. If needed, the utility updates statistics for non-current partitions and the root partition. For information about how statistics are collected for partitioned tables, see ",(0,s.jsx)(t.a,{href:"/docs/sql-stmts/analyze",children:(0,s.jsx)(t.code,{children:"ANALYZE"})}),"."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"analyzedb"})," must sample additional partitions within a partitioned table when it encounters a stale partition, even when statistics are already collected. We recommend that you run ",(0,s.jsx)(t.code,{children:"analyzedb"})," on the root partition any time that you add a new partition(s) to a partitioned table. This operation both analyzes the leaf partitions in parallel and merges any updated statistics into the root partition."]}),"\n",(0,s.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsxs)(t.p,{children:["The analyzedb utility updates append optimized table statistics if the table has been modified by DML or DDL commands, including INSERT, DELETE, UPDATE, CREATE TABLE, ALTER TABLE and TRUNCATE. The utility determines if a table has been modified by comparing catalog metadata of tables with the previous snapshot of metadata taken during a previous analyzedb operation. The snapshots of table metadata are stored as state files in the directory ",(0,s.jsx)(t.code,{children:"db_analyze/<db_name>/<timestamp>"})," in the Cloudberry Database coordinator data directory."]}),"\n",(0,s.jsxs)(t.p,{children:["The utility preserves old snapshot information from the past 8 days, and the 3 most recent state directories regardless of age, while all other directories are automatically removed. You can also specify the ",(0,s.jsx)(t.code,{children:"--clean_last"})," or ",(0,s.jsx)(t.code,{children:"--clean_all"})," option to remove state files generated by analyzedb."]}),"\n",(0,s.jsx)(t.p,{children:"If you do not specify a table, set of tables, or schema, the analyzedb utility collects the statistics as needed on all system catalog tables and user-defined tables in the database."}),"\n",(0,s.jsx)(t.p,{children:"External tables are not affected by analyzedb."}),"\n",(0,s.jsx)(t.p,{children:"Table names that contain spaces are not supported."}),"\n",(0,s.jsxs)(t.p,{children:["Running the ",(0,s.jsx)(t.code,{children:"ANALYZE"})," command on a table, not using the ",(0,s.jsx)(t.code,{children:"analyzedb"})," utility, does not update the table metadata that the ",(0,s.jsx)(t.code,{children:"analyzedb"})," utility uses to determine whether table statistics are up to date."]}),"\n",(0,s.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"--clean_last"})})}),"\n",(0,s.jsx)(t.p,{children:"Remove the state files generated by last analyzedb operation. All other options except -d are ignored."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"--clean_all"})})}),"\n",(0,s.jsx)(t.p,{children:"Remove all the state files generated by analyzedb. All other options except -d are ignored."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"-d dbname"})})}),"\n",(0,s.jsxs)(t.p,{children:["Specifies the name of the database that contains the tables to be analyzed. If this option is not specified, the database name is read from the environment variable ",(0,s.jsx)(t.code,{children:"PGDATABASE"}),". If ",(0,s.jsx)(t.code,{children:"PGDATABASE"})," is not set, the user name specified for the connection is used."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"-f config-file | --file config-file"})})}),"\n",(0,s.jsx)(t.p,{children:"Text file that contains a list of tables to be analyzed. A relative file path from current directory can be specified."}),"\n",(0,s.jsxs)(t.p,{children:["The file lists one table per line. Table names must be qualified with a schema name. Optionally, a list of columns can be specified using the -i or -x. No other options are allowed in the file. Other options such as ",(0,s.jsx)(t.code,{children:"--full"})," must be specified on the command line."]}),"\n",(0,s.jsxs)(t.p,{children:["Only one of the options can be used to specify the files to be analyzed: ",(0,s.jsx)(t.code,{children:"-f"})," or ",(0,s.jsx)(t.code,{children:"--file"}),", ",(0,s.jsx)(t.code,{children:"-t"})," , or ",(0,s.jsx)(t.code,{children:"-s"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["When performing ANALYZE operations on multiple tables, analyzedb creates concurrent sessions to analyze tables in parallel. The ",(0,s.jsx)(t.code,{children:"-p"})," option controls the maximum number of concurrent sessions."]}),"\n",(0,s.jsxs)(t.p,{children:["In the following example, the first line performs an ANALYZE operation on the table ",(0,s.jsx)(t.code,{children:"public.nation"}),", the second line performs an ANALYZE operation only on the columns ",(0,s.jsx)(t.code,{children:"l_shipdate"})," and ",(0,s.jsx)(t.code,{children:"l_receiptdate"})," in the table ",(0,s.jsx)(t.code,{children:"public.lineitem"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"public.nation\npublic.lineitem -i l_shipdate,l_receiptdate \n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"--full"})})}),"\n",(0,s.jsx)(t.p,{children:"Perform an ANALYZE operation on all the specified tables. The operation is performed even if the statistics are up to date."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"--gen_profile_only"})})}),"\n",(0,s.jsxs)(t.p,{children:["Update the ",(0,s.jsx)(t.code,{children:"analyzedb"})," snapshot of table statistics information without performing any ",(0,s.jsx)(t.code,{children:"ANALYZE"})," operations. If other options specify tables or a schema, the utility updates the snapshot information only for the specified tables."]}),"\n",(0,s.jsxs)(t.p,{children:["Specify this option if the ",(0,s.jsx)(t.code,{children:"ANALYZE"})," command was run on database tables and you want to update the ",(0,s.jsx)(t.code,{children:"analyzedb"})," snapshot for the tables."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"-i col1,col2, ..."})})}),"\n",(0,s.jsx)(t.p,{children:"Optional. Must be specified with the -t option. For the table specified with the -t option, collect statistics only for the specified columns."}),"\n",(0,s.jsx)(t.p,{children:"Only -i, or -x can be specified. Both options cannot be specified."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"-l | --list"})})}),"\n",(0,s.jsx)(t.p,{children:"Lists the tables that would have been analyzed with the specified options. The ANALYZE operations are not performed."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"-p parallel-level"})})}),"\n",(0,s.jsx)(t.p,{children:"The number of tables that are analyzed in parallel. parallel level can be an integer between 1 and 10, inclusive. Default value is 5."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"--skip_root_stats"})})}),"\n",(0,s.jsx)(t.p,{children:"This option is no longer used, you may remove it from your scripts."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"--skip_orca_root_stats"})})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note"})," Do not use this option if GPORCA is enabled."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Use this option if you find that ",(0,s.jsx)(t.code,{children:"ANALYZE ROOTPARTITION"})," commands take a very long time to complete."]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Caution"})," After you run ",(0,s.jsx)(t.code,{children:"analyzedb"})," with this option, subsequent ",(0,s.jsx)(t.code,{children:"analyzedb"})," executions will not update root partition statistics except when changes have been made to the table."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"-s schema"})})}),"\n",(0,s.jsx)(t.p,{children:"Specify a schema to analyze. All tables in the schema will be analyzed. Only a single schema name can be specified on the command line."}),"\n",(0,s.jsxs)(t.p,{children:["Only one of the options can be used to specify the files to be analyzed: ",(0,s.jsx)(t.code,{children:"-f"})," or ",(0,s.jsx)(t.code,{children:"--file"}),", ",(0,s.jsx)(t.code,{children:"-t"})," , or ",(0,s.jsx)(t.code,{children:"-s"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"-t schema.table"})})}),"\n",(0,s.jsxs)(t.p,{children:["Collect statistics only on schema.table. The table name must be qualified with a schema name. Only a single table name can be specified on the command line. You can specify the ",(0,s.jsx)(t.code,{children:"-f"})," option to specify multiple tables in a file or the ",(0,s.jsx)(t.code,{children:"-s"})," option to specify all the tables in a schema."]}),"\n",(0,s.jsxs)(t.p,{children:["Only one of these options can be used to specify the files to be analyzed: ",(0,s.jsx)(t.code,{children:"-f"})," or ",(0,s.jsx)(t.code,{children:"--file"}),", ",(0,s.jsx)(t.code,{children:"-t"})," , or ",(0,s.jsx)(t.code,{children:"-s"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"-x col1,col2, ..."})})}),"\n",(0,s.jsx)(t.p,{children:"Optional. Must be specified with the -t option. For the table specified with the -t option, exclude statistics collection for the specified columns. Statistics are collected only on the columns that are not listed."}),"\n",(0,s.jsx)(t.p,{children:"Only -i, or -x can be specified. Both options cannot be specified."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"-a"})})}),"\n",(0,s.jsx)(t.p,{children:"Quiet mode. Do not prompt for user confirmation."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"--skip-locked"})})}),"\n",(0,s.jsx)(t.p,{children:"Skip relations that cannot be immediately locked."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"-h | -? | --help"})})}),"\n",(0,s.jsx)(t.p,{children:"Displays the online help."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"-v | --verbose"})})}),"\n",(0,s.jsxs)(t.p,{children:["If specified, sets the logging level to verbose to write additional information the log file and to the command line during command execution. The information includes a list of all the tables to be analyzed (including leaf partitions of partitioned tables). Output also includes the duration of each ",(0,s.jsx)(t.code,{children:"ANALYZE"})," operation."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"--version"})})}),"\n",(0,s.jsx)(t.p,{children:"Displays the version of this utility."}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(t.p,{children:["An example that collects statistics only on a set of table columns. In the database ",(0,s.jsx)(t.code,{children:"mytest"}),", collect statistics on the columns ",(0,s.jsx)(t.code,{children:"shipdate"})," and ",(0,s.jsx)(t.code,{children:"receiptdate"})," in the table ",(0,s.jsx)(t.code,{children:"public.orders"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"analyzedb -d mytest -t public.orders -i shipdate,receiptdate\n"})}),"\n",(0,s.jsxs)(t.p,{children:["An example that collects statistics on a table and exclude a set of columns. In the database ",(0,s.jsx)(t.code,{children:"mytest"}),", collect statistics on the table ",(0,s.jsx)(t.code,{children:"public.foo"}),", and do not collect statistics on the columns ",(0,s.jsx)(t.code,{children:"bar"})," and ",(0,s.jsx)(t.code,{children:"test2"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"analyzedb -d mytest -t public.foo -x bar,test2\n"})}),"\n",(0,s.jsxs)(t.p,{children:["An example that specifies a file that contains a list of tables. This command collect statistics on the tables listed in the file ",(0,s.jsx)(t.code,{children:"analyze-tables"})," in the database named ",(0,s.jsx)(t.code,{children:"mytest"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"analyzedb -d mytest -f analyze-tables\n"})}),"\n",(0,s.jsxs)(t.p,{children:["If you do not specify a table, set of tables, or schema, the analyzedb utility collects the statistics as needed on all catalog tables and user-defined tables in the specified database. This command refreshes table statistics on the system catalog tables and user-defined tables in the database ",(0,s.jsx)(t.code,{children:"mytest"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"analyzedb -d mytest\n"})}),"\n",(0,s.jsxs)(t.p,{children:["You can create a PL/Python function to run the ",(0,s.jsx)(t.code,{children:"analyzedb"})," utility as a Cloudberry Database function. This example ",(0,s.jsx)(t.code,{children:"CREATE FUNCTION"})," command creates a user defined PL/Python function that runs the ",(0,s.jsx)(t.code,{children:"analyzedb"})," utility and displays output on the command line. Specify ",(0,s.jsx)(t.code,{children:"analyzedb"})," options as the function parameter."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"CREATE OR REPLACE FUNCTION analyzedb(params TEXT)\n  RETURNS VOID AS\n$BODY$\n    import subprocess\n    cmd = ['analyzedb', '-a' ] + params.split()\n    with subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.STDOUT) as proc:\n        # verbose output of process\n        for line in proc.stdout:\n            plpy.info(line.decode(errors='replace'))\n$BODY$\nLANGUAGE plpython3u VOLATILE;\n"})}),"\n",(0,s.jsxs)(t.p,{children:["When this ",(0,s.jsx)(t.code,{children:"SELECT"})," command is run by the gpadmin user, the ",(0,s.jsx)(t.code,{children:"analyzedb"})," utility performs an analyze operation on the table ",(0,s.jsx)(t.code,{children:"public.mytable"})," that is in the database ",(0,s.jsx)(t.code,{children:"mytest"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"SELECT analyzedb('-d mytest -t public.mytable');\n"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note"})," To create a PL/Python function, the PL/Python procedural language must be registered as a language in the database. For example, this ",(0,s.jsx)(t.code,{children:"CREATE LANGUAGE"})," command run as gpadmin registers PL/Python as an untrusted language:"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"CREATE LANGUAGE plpython3u;\n"})}),"\n",(0,s.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/docs/sql-stmts/analyze",children:(0,s.jsx)(t.code,{children:"ANALYZE"})})})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>l});var s=n(67294);const i={},a=s.createContext(i);function l(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);