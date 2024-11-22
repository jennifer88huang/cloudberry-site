"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[3157],{78919:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var o=s(85893),n=s(11151);const t={title:"ALTER RESOURCE GROUP"},i="ALTER RESOURCE GROUP",c={id:"sql-stmts/alter-resource-group",title:"ALTER RESOURCE GROUP",description:"Changes the limits of a resource group.",source:"@site/docs/sql-stmts/alter-resource-group.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/alter-resource-group",permalink:"/zh/docs/sql-stmts/alter-resource-group",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/alter-resource-group.md",tags:[],version:"current",lastUpdatedBy:"vitalzf",lastUpdatedAt:1732259e3,formattedLastUpdatedAt:"2024\u5e7411\u670822\u65e5",frontMatter:{title:"ALTER RESOURCE GROUP"},sidebar:"docsbars",previous:{title:"ALTER PROTOCOL",permalink:"/zh/docs/sql-stmts/alter-protocol"},next:{title:"ALTER RESOURCE QUEUE",permalink:"/zh/docs/sql-stmts/alter-resource-queue"}},a={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function h(e){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h1,{id:"alter-resource-group",children:"ALTER RESOURCE GROUP"}),"\n",(0,o.jsx)(r.p,{children:"Changes the limits of a resource group."}),"\n",(0,o.jsx)(r.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-sql",children:"ALTER RESOURCE GROUP <name> SET <group_attribute> <value>\n"})}),"\n",(0,o.jsx)(r.p,{children:"where group_attribute is one of:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-sql",children:"CPU_MAX_PERCENT=<integer> | CPUSET=<coordinator_cores>;<segment_cores>\n[ MEMORY_LIMIT=<integer> ]\n[ CPU_WEIGHT=<integer> ]\n[ CONCURRENCY=<integer> ]\n[ MIN_COST=<integer> ]\n"})}),"\n",(0,o.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"ALTER RESOURCE GROUP"})," changes the limits of a resource group. Only a superuser can alter a resource group."]}),"\n",(0,o.jsx)(r.p,{children:"You can set or reset the concurrency limit of a resource group that you create for roles to control the maximum number of active concurrent statements in that group. You can also reset the memory or CPU resources of a resource group to control the amount of memory or CPU resources that all queries submitted through the group can consume on each segment host."}),"\n",(0,o.jsx)(r.p,{children:"When you alter the CPU resource management mode or limit of a resource group, the new mode or limit is immediately applied."}),"\n",(0,o.jsx)(r.p,{children:"When you alter a memory limit of a resource group that you create for roles, the new resource limit is immediately applied if current resource usage is less than or equal to the new value and there are no running transactions in the resource group. If the current resource usage exceeds the new memory limit value, or if there are running transactions in other resource groups that hold some of the resource, then Cloudberry Database defers assigning the new limit until resource usage falls within the range of the new value."}),"\n",(0,o.jsx)(r.p,{children:"When you increase the memory limit of a resource group that you create for external components, the new resource limit is phased in as system memory resources become available. If you decrease the memory limit of a resource group that you create for external components, the behavior is component-specific. For example, if you decrease the memory limit of a resource group that you create for a PL/Container runtime, queries in a running container may fail with an out of memory error."}),"\n",(0,o.jsxs)(r.p,{children:["You can alter one limit type in a single ",(0,o.jsx)(r.code,{children:"ALTER RESOURCE GROUP"})," call."]}),"\n",(0,o.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.strong,{children:(0,o.jsx)(r.code,{children:"name"})})}),"\n",(0,o.jsx)(r.p,{children:"The name of the resource group to alter."}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.strong,{children:(0,o.jsx)(r.code,{children:"CONCURRENCY integer"})})}),"\n",(0,o.jsxs)(r.p,{children:["The maximum number of concurrent transactions, including active and idle transactions, that are permitted for this resource group. The ",(0,o.jsx)(r.code,{children:"CONCURRENCY"})," value must be an integer in the range [0 .. ",(0,o.jsx)(r.code,{children:"max_connections"}),"]. The default ",(0,o.jsx)(r.code,{children:"CONCURRENCY"})," value for resource groups defined for roles is 20."]}),"\n",(0,o.jsxs)(r.p,{children:["You must set ",(0,o.jsx)(r.code,{children:"CONCURRENCY"})," to ",(0,o.jsx)(r.code,{children:"0"})," for resource groups that you create for external components."]}),"\n",(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Note"})," You cannot set the ",(0,o.jsx)(r.code,{children:"CONCURRENCY"})," value for the ",(0,o.jsx)(r.code,{children:"admin_group"})," to ",(0,o.jsx)(r.code,{children:"0"}),"."]}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.strong,{children:(0,o.jsx)(r.code,{children:"CPU_MAX_PERCENT integer"})})}),"\n",(0,o.jsxs)(r.p,{children:["The percentage of the maximum available CPU resources that the resource group can use. The value range is ",(0,o.jsx)(r.code,{children:"1-100"}),"."]}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.strong,{children:(0,o.jsx)(r.code,{children:"CPU_WEIGHT integer"})})}),"\n",(0,o.jsxs)(r.p,{children:["The scheduling priority of the current group. The value range is ",(0,o.jsx)(r.code,{children:"1-500"}),", the default is `100."]}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.strong,{children:(0,o.jsx)(r.code,{children:"CPUSET <coordinator_cores>;<segment_cores>"})})}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"CPUSET"})," identifies the CPU cores to reserve for this resource group on the coordinator host and on segment hosts. The CPU cores that you specify must be available in the system and cannot overlap with any CPU cores that you specify for other resource groups."]}),"\n",(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Note"})," You must specify either ",(0,o.jsx)(r.code,{children:"CPU_MAX_PERCENT"})," or ",(0,o.jsx)(r.code,{children:"CPUSET"})," when you create a resource group, but not both."]}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:"Specify cores as a comma-separated list of single core numbers or core number intervals. Define the coordinator host cores first, followed by segment host cores, and separate the two with a semicolon. You must enclose the full core configuration in single quotes. For example, '1;1,3-4' configures core 1 for the coordinator host, and cores 1, 3, and 4 for the segment hosts."}),"\n",(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Note"})," You can configure ",(0,o.jsx)(r.code,{children:"CPUSET"})," for a resource group only after you have enabled resource group-based resource management for your Cloudberry Database cluster."]}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.strong,{children:(0,o.jsx)(r.code,{children:"MEMORY_LIMIT integer"})})}),"\n",(0,o.jsx)(r.p,{children:"The maximum available memory, in MB, to reserve for this resource group. This value determines the total amount of memory that all worker processes within a resource group can consume on a segment host during query execution."}),"\n",(0,o.jsxs)(r.p,{children:["The minimum memory quantity you can specify for a resource group is ",(0,o.jsx)(r.code,{children:"0"}),". The default value is ",(0,o.jsx)(r.code,{children:"-1"}),"."]}),"\n",(0,o.jsxs)(r.p,{children:["When you specify a ",(0,o.jsx)(r.code,{children:"MEMORY_LIMIT"})," of ",(0,o.jsx)(r.code,{children:"-1"}),", ",(0,o.jsx)(r.code,{children:"MEMORY LIMIT"})," takes the value of the ",(0,o.jsx)(r.code,{children:"statement_mem"})," server configuration parameter."]}),"\n",(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Note"})," If the server configuration parameter ",(0,o.jsx)(r.code,{children:"gp_resgroup_memory_query_fixed_mem"})," is set, its value overrides at the session level the value of ",(0,o.jsx)(r.code,{children:"MEMORY_LIMIT"}),"."]}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.strong,{children:(0,o.jsx)(r.code,{children:"MIN_COST integer"})})}),"\n",(0,o.jsx)(r.p,{children:"The limit on the cost of the query plan generated by a query in this resource group. When the query plan cost of the query is less than this value, the query will be unassigned from the resource group to which it belongs."}),"\n",(0,o.jsx)(r.p,{children:"This means that low-cost queries will execute more quickly, as they are not subject to resource constraints."}),"\n",(0,o.jsxs)(r.p,{children:["The value range is ",(0,o.jsx)(r.code,{children:"0-500"}),". The default value is ",(0,o.jsx)(r.code,{children:"0"}),", which means that the cost is not used to bypass the query."]}),"\n",(0,o.jsx)(r.h2,{id:"notes",children:"Notes"}),"\n",(0,o.jsxs)(r.p,{children:["Use ",(0,o.jsx)(r.a,{href:"/zh/docs/sql-stmts/create-role",children:"CREATE ROLE"})," or ",(0,o.jsx)(r.a,{href:"/zh/docs/sql-stmts/alter-role",children:"ALTER ROLE"})," to assign a specific resource group to a role (user)."]}),"\n",(0,o.jsxs)(r.p,{children:["You cannot submit an ",(0,o.jsx)(r.code,{children:"ALTER RESOURCE GROUP"})," command in an explicit transaction or sub-transaction."]}),"\n",(0,o.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(r.p,{children:"Change the active transaction limit for a resource group:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-sql",children:"ALTER RESOURCE GROUP rgroup1 SET CONCURRENCY 13;\n"})}),"\n",(0,o.jsx)(r.p,{children:"Update the CPU limit for a resource group:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-sql",children:"ALTER RESOURCE GROUP rgroup2 SET CPU_MAX_PERCENT 45;\n"})}),"\n",(0,o.jsx)(r.p,{children:"Update the memory limit for a resource group:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-sql",children:"ALTER RESOURCE GROUP rgroup3 SET MEMORY_LIMIT 30;\n"})}),"\n",(0,o.jsx)(r.p,{children:"Reserve CPU core 1 for a resource group on the coordinator host and all segment hosts:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-sql",children:"ALTER RESOURCE GROUP rgroup5 SET CPUSET '1;1';\n"})}),"\n",(0,o.jsx)(r.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,o.jsxs)(r.p,{children:["The ",(0,o.jsx)(r.code,{children:"ALTER RESOURCE GROUP"})," statement is a Cloudberry Database extension. This command does not exist in standard PostgreSQL."]}),"\n",(0,o.jsx)(r.h2,{id:"see-also",children:"See also"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/zh/docs/sql-stmts/create-resource-group",children:"CREATE RESOURCE GROUP"}),", ",(0,o.jsx)(r.a,{href:"/zh/docs/sql-stmts/drop-resource-group",children:"DROP RESOURCE GROUP"}),", ",(0,o.jsx)(r.a,{href:"/zh/docs/sql-stmts/create-role",children:"CREATE ROLE"}),", ",(0,o.jsx)(r.a,{href:"/zh/docs/sql-stmts/alter-role",children:"ALTER ROLE"})]})]})}function u(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},11151:(e,r,s)=>{s.d(r,{Z:()=>c,a:()=>i});var o=s(67294);const n={},t=o.createContext(n);function i(e){const r=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),o.createElement(t.Provider,{value:r},e.children)}}}]);