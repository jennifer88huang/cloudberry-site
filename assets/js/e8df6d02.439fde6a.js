"use strict";(self.webpackChunkCloudberry_Database_website=self.webpackChunkCloudberry_Database_website||[]).push([[249],{2071:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>t,toc:()=>o});var i=s(85893),a=s(11151);const d={title:"vacuumdb"},c="vacuumdb",t={id:"sys-utilities/vacuumdb",title:"vacuumdb",description:"Garbage-collects and analyzes a database.",source:"@site/docs/sys-utilities/vacuumdb.md",sourceDirName:"sys-utilities",slug:"/sys-utilities/vacuumdb",permalink:"/docs/sys-utilities/vacuumdb",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sys-utilities/vacuumdb.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1731576389,formattedLastUpdatedAt:"Nov 14, 2024",frontMatter:{title:"vacuumdb"},sidebar:"docsbars",previous:{title:"reindexdb",permalink:"/docs/sys-utilities/reindexdb"},next:{title:"dropdb",permalink:"/docs/sys-utilities/dropdb"}},r={},o=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"Connection options",id:"connection-options",level:3},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"See also",id:"see-also",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"vacuumdb",children:"vacuumdb"}),"\n",(0,i.jsx)(n.p,{children:"Garbage-collects and analyzes a database."}),"\n",(0,i.jsx)(n.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"vacuumdb [<connection-option>...] [--full | -f] [--freeze | -F] [--verbose | -v]\n    [--analyze | -z] [--analyze-only | -Z] [--disable-page-skipping] [--skip-locked] [--table | -t <table> [( <column> [,...] )] ] [<dbname>]\n\nvacuumdb [<connection-option>...] [--all | -a] [--full | -f] [-F] \n    [--verbose | -v] [--analyze | -z]\n    [--analyze-only | -Z]\n    [--disable-page-skipping]\n    [--skip-locked]\n\nvacuumdb -? | --help\n\nvacuumdb -V | --version\n"})}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"vacuumdb"})," is a utility for cleaning a Cloudberry Database database. ",(0,i.jsx)(n.code,{children:"vacuumdb"})," will also generate internal statistics used by the Cloudberry Database query optimizer."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"vacuumdb"})," is a wrapper around the SQL command ",(0,i.jsx)(n.code,{children:"VACUUM"}),". There is no effective difference between vacuuming databases via this utility and via other methods for accessing the server."]}),"\n",(0,i.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"-a | --all"})})}),"\n",(0,i.jsx)(n.p,{children:"Vacuums all databases."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"[-d] dbname | [--dbname=]dbname"})})}),"\n",(0,i.jsxs)(n.p,{children:["The name of the database to vacuum. If this is not specified and ",(0,i.jsx)(n.code,{children:"-a"})," (or ",(0,i.jsx)(n.code,{children:"--all"}),") is not used, the database name is read from the environment variable ",(0,i.jsx)(n.code,{children:"PGDATABASE"}),". If that is not set, the user name specified for the connection is used."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"-e | --echo"})})}),"\n",(0,i.jsxs)(n.p,{children:["Echo the commands that ",(0,i.jsx)(n.code,{children:"reindexdb"})," generates and sends to the server."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"-f | --full"})})}),"\n",(0,i.jsx)(n.p,{children:"Selects a full vacuum, which may reclaim more space, but takes much longer and exclusively locks the table."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Caution"})," A ",(0,i.jsx)(n.code,{children:"VACUUM FULL"})," is not recommended in Cloudberry Database."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"-F | --freeze"})})}),"\n",(0,i.jsx)(n.p,{children:"Freeze row transaction information."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"-q | --quiet"})})}),"\n",(0,i.jsx)(n.p,{children:"Do not display a response."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"-t table [(column)] | --table= table [(column)]"})})}),"\n",(0,i.jsxs)(n.p,{children:["Clean or analyze this table only. Column names may be specified only in conjunction with the ",(0,i.jsx)(n.code,{children:"--analyze"})," or ",(0,i.jsx)(n.code,{children:"--analyze-all"})," options. Multiple tables can be vacuumed by writing multiple ",(0,i.jsx)(n.code,{children:"-t"})," switches. If you specify columns, you probably have to escape the parentheses from the shell."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"-v | --verbose"})})}),"\n",(0,i.jsx)(n.p,{children:"Print detailed information during processing."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"-z | --analyze"})})}),"\n",(0,i.jsx)(n.p,{children:"Collect statistics for use by the query planner."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"-Z | --analyze-only"})})}),"\n",(0,i.jsx)(n.p,{children:"Only calculate statistics for use by the query planner (no vacuum)."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"--disable-page-skipping"})})}),"\n",(0,i.jsx)(n.p,{children:"Disable all page-skipping behavior."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"--skip-locked"})})}),"\n",(0,i.jsx)(n.p,{children:"Skip relations that cannot be immediately locked."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"-V | --version"})})}),"\n",(0,i.jsxs)(n.p,{children:["Print the ",(0,i.jsx)(n.code,{children:"vacuumdb"})," version and exit."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"-? | --help"})})}),"\n",(0,i.jsxs)(n.p,{children:["Show help about ",(0,i.jsx)(n.code,{children:"vacuumdb"})," command line arguments, and exit."]}),"\n",(0,i.jsx)(n.h3,{id:"connection-options",children:"Connection options"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"-h host | --host=host"})})}),"\n",(0,i.jsxs)(n.p,{children:["Specifies the host name of the machine on which the Cloudberry coordinator database server is running. If not specified, reads from the environment variable ",(0,i.jsx)(n.code,{children:"PGHOST"})," or defaults to localhost."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"-p port | --port=port"})})}),"\n",(0,i.jsxs)(n.p,{children:["Specifies the TCP port on which the Cloudberry coordinator database server is listening for connections. If not specified, reads from the environment variable ",(0,i.jsx)(n.code,{children:"PGPORT"})," or defaults to 5432."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"-U username | --username=username"})})}),"\n",(0,i.jsxs)(n.p,{children:["The database role name to connect as. If not specified, reads from the environment variable ",(0,i.jsx)(n.code,{children:"PGUSER"})," or defaults to the current system user name."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"-w | --no-password"})})}),"\n",(0,i.jsxs)(n.p,{children:["Never issue a password prompt. If the server requires password authentication and a password is not available by other means such as a ",(0,i.jsx)(n.code,{children:".pgpass"})," file, the connection attempt will fail. This option can be useful in batch jobs and scripts where no user is present to enter a password."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"-W | --password"})})}),"\n",(0,i.jsx)(n.p,{children:"Force a password prompt."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"--maintenance-db=dbname"})})}),"\n",(0,i.jsxs)(n.p,{children:["Specifies the name of the database to connect to discover what other databases should be vacuumed. If not specified, the ",(0,i.jsx)(n.code,{children:"postgres"})," database will be used, and if that does not exist, ",(0,i.jsx)(n.code,{children:"template1"})," will be used."]}),"\n",(0,i.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"vacuumdb"})," might need to connect several times to the coordinator server, asking for a password each time. It is convenient to have a ",(0,i.jsx)(n.code,{children:"~/.pgpass"})," file in such cases."]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(n.p,{children:["To clean the database ",(0,i.jsx)(n.code,{children:"test"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"vacuumdb test\n"})}),"\n",(0,i.jsxs)(n.p,{children:["To clean and analyze a database named ",(0,i.jsx)(n.code,{children:"bigdb"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"vacuumdb --analyze bigdb\n"})}),"\n",(0,i.jsxs)(n.p,{children:["To clean a single table ",(0,i.jsx)(n.code,{children:"foo"})," in a database named ",(0,i.jsx)(n.code,{children:"mydb"}),", and analyze a single column ",(0,i.jsx)(n.code,{children:"bar"})," of the table. Note the quotes around the table and column names to escape the parentheses from the shell:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"vacuumdb --analyze --verbose --table 'foo(bar)' mydb\n"})}),"\n",(0,i.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/sql-stmts/vacuum",children:(0,i.jsx)(n.code,{children:"VACUUM"})}),", ",(0,i.jsx)(n.a,{href:"/docs/sql-stmts/analyze",children:(0,i.jsx)(n.code,{children:"ANALYZE"})})]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>t,a:()=>c});var i=s(67294);const a={},d=i.createContext(a);function c(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);