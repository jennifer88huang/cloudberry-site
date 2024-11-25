"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[8786],{86849:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=t(85893),o=t(11151);const i={title:"gpstop"},r="gpstop",a={id:"sys-utilities/gpstop",title:"gpstop",description:"Stops or restarts a Cloudberry Database system.",source:"@site/docs/sys-utilities/gpstop.md",sourceDirName:"sys-utilities",slug:"/sys-utilities/gpstop",permalink:"/docs/sys-utilities/gpstop",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sys-utilities/gpstop.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1732523543,formattedLastUpdatedAt:"Nov 25, 2024",frontMatter:{title:"gpstop"},sidebar:"docsbars",previous:{title:"gpstate",permalink:"/docs/sys-utilities/gpstate"},next:{title:"gpsync",permalink:"/docs/sys-utilities/gpsync"}},d={},c=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"See also",id:"see-also",level:2}];function l(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"gpstop",children:"gpstop"}),"\n",(0,n.jsx)(s.p,{children:"Stops or restarts a Cloudberry Database system."}),"\n",(0,n.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"gpstop [-d <coordinator_data_directory>] [-B parallel_processes>] \n       [-M smart | fast | immediate] [-t <timeout_seconds>] [-r] [-y] [-a] \n       [-l\xa0<logfile_directory>] [-v | -q]\n\ngpstop -m [-d <coordinator_data_directory>] [-y] [-l\xa0<logfile_directory>] [-v | -q]\n\ngpstop -u [-d <coordinator_data_directory>] [-l\xa0<logfile_directory>] [-v | -q]\n \ngpstop --host <host_namea> [-d <coordinator_data_directory>] [-l\xa0<logfile_directory>]\n       [-t <timeout_seconds>] [-a] [-v | -q]\n\ngpstop --version \n\ngpstop -? | -h | --help\n"})}),"\n",(0,n.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"gpstop"})," utility is used to stop the database servers that comprise a Cloudberry Database system. When you stop a Cloudberry Database system, you are actually stopping several ",(0,n.jsx)(s.code,{children:"postgres"})," database server processes at once (the coordinator and all of the segment instances). The ",(0,n.jsx)(s.code,{children:"gpstop"})," utility handles the shutdown of the individual instances. Each instance is shutdown in parallel."]}),"\n",(0,n.jsxs)(s.p,{children:["The default shutdown mode (",(0,n.jsx)(s.code,{children:"-M smart"}),") waits for current client connections to finish before completing the shutdown. If any connections remain open after the timeout period, or if you interrupt with CTRL-C, ",(0,n.jsx)(s.code,{children:"gpstop"})," lists the open connections and prompts whether to continue waiting for connections to finish, or to perform a fast or immediate shutdown. The default timeout period is 120 seconds and can be changed with the ",(0,n.jsx)(s.code,{children:"-t timeout_seconds"})," option."]}),"\n",(0,n.jsxs)(s.p,{children:["Specify the ",(0,n.jsx)(s.code,{children:"-M fast"})," shutdown mode to roll back all in-progress transactions and terminate any connections before shutting down."]}),"\n",(0,n.jsxs)(s.p,{children:["With the ",(0,n.jsx)(s.code,{children:"-u"})," option, the utility uploads changes made to the coordinator ",(0,n.jsx)(s.code,{children:"pg_hba.conf"})," file or to ",(0,n.jsx)(s.em,{children:"runtime"})," configuration parameters in the coordinator ",(0,n.jsx)(s.code,{children:"postgresql.conf"})," file without interruption of service. Note that any active sessions will not pick up the changes until they reconnect to the database."]}),"\n",(0,n.jsx)(s.h2,{id:"options",children:"Options"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-a"})})}),"\n",(0,n.jsx)(s.p,{children:"Do not prompt the user for confirmation."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-B parallel_processes"})})}),"\n",(0,n.jsxs)(s.p,{children:["The number of segments to stop in parallel. You are expected to specify a number following this option, for example, ",(0,n.jsx)(s.code,{children:"gpstop -B 3"}),"."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-d coordinator_data_directory"})})}),"\n",(0,n.jsxs)(s.p,{children:["Optional. The coordinator host data directory. You are expected to specify the data directory following this option, for example, ",(0,n.jsx)(s.code,{children:"gpstop -d /data/master/gpseg-1"}),"."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"--host host_name"})})}),"\n",(0,n.jsx)(s.p,{children:"The utility shuts down the Cloudberry Database segment instances on the specified host to allow maintenance on the host. Each primary segment instance on the host is shut down and the associated mirror segment instance is promoted to a primary segment if the mirror segment is on another host. Mirror segment instances on the host are shut down."}),"\n",(0,n.jsx)(s.p,{children:"The segment instances are not shut down and the utility returns an error in these cases:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Segment mirroring is not enabled for the system."}),"\n",(0,n.jsx)(s.li,{children:"The coordinator or standby coordinator is on the host."}),"\n",(0,n.jsx)(s.li,{children:"Both a primary segment instance and its mirror are on the host."}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["This option cannot be specified with the ",(0,n.jsx)(s.code,{children:"-m"}),", ",(0,n.jsx)(s.code,{children:"-r"}),", ",(0,n.jsx)(s.code,{children:"-u"}),", or ",(0,n.jsx)(s.code,{children:"-y"})," options."]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"gprecoverseg"})," utility restores segment instances. Run ",(0,n.jsx)(s.code,{children:"gprecoverseg"})," commands to start the segments as mirrors and then to return the segments to their preferred role (primary segments)."]})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-l logfile_directory"})})}),"\n",(0,n.jsxs)(s.p,{children:["The directory to write the log file. Defaults to ",(0,n.jsx)(s.code,{children:"~/gpAdminLogs"}),"."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-m"})})}),"\n",(0,n.jsx)(s.p,{children:"Optional. Shuts down a Cloudberry Database coordinator instance that was started in maintenance mode."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-M fast"})})}),"\n",(0,n.jsx)(s.p,{children:"Fast shut down. Any transactions in progress are interrupted and rolled back."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-M immediate"})})}),"\n",(0,n.jsx)(s.p,{children:"Immediate shut down. Any transactions in progress are cancelled."}),"\n",(0,n.jsxs)(s.p,{children:["This mode kills all ",(0,n.jsx)(s.code,{children:"postgres"})," processes without allowing the database server to complete transaction processing or clean up any temporary or in-process work files."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-M smart"})})}),"\n",(0,n.jsxs)(s.p,{children:["Smart shut down. This is the default shutdown mode. ",(0,n.jsx)(s.code,{children:"gpstop"})," waits for active user connections to disconnect and then proceeds with the shutdown. If any user connections remain open after the timeout period (or if you interrupt by pressing CTRL-C) ",(0,n.jsx)(s.code,{children:"gpstop"})," lists the open user connections and prompts whether to continue waiting for connections to finish, or to perform a fast or immediate shutdown."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-q"})})}),"\n",(0,n.jsx)(s.p,{children:"Run in quiet mode. Command output is not displayed on the screen, but is still written to the log file."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-r"})})}),"\n",(0,n.jsx)(s.p,{children:"Restart after shutdown is complete."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-t timeout_seconds"})})}),"\n",(0,n.jsxs)(s.p,{children:["Specifies a timeout threshold (in seconds) to wait for a segment instance to shutdown. If a segment instance does not shutdown in the specified number of seconds, ",(0,n.jsx)(s.code,{children:"gpstop"})," displays a message indicating that one or more segments are still in the process of shutting down and that you cannot restart Cloudberry Database until the segment instance(s) are stopped. This option is useful in situations where ",(0,n.jsx)(s.code,{children:"gpstop"})," is run and there are very large transactions that need to rollback. These large transactions can take over a minute to rollback and surpass the default timeout period of 120 seconds."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-u"})})}),"\n",(0,n.jsxs)(s.p,{children:["This option reloads the ",(0,n.jsx)(s.code,{children:"pg_hba.conf"})," files of the coordinator and segments and the runtime parameters of the ",(0,n.jsx)(s.code,{children:"postgresql.conf"})," files but does not shutdown the Cloudberry Database array. Use this option to make new configuration settings active after editing ",(0,n.jsx)(s.code,{children:"postgresql.conf"})," or ",(0,n.jsx)(s.code,{children:"pg_hba.conf"}),". Note that this only applies to configuration parameters that are designated as ",(0,n.jsx)(s.em,{children:"runtime"})," parameters."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-v"})})}),"\n",(0,n.jsx)(s.p,{children:"Displays detailed status, progress and error messages output by the utility."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-y"})})}),"\n",(0,n.jsx)(s.p,{children:"Do not stop the standby coordinator process. The default is to stop the standby coordinator."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-? | -h | --help"})})}),"\n",(0,n.jsx)(s.p,{children:"Displays the online help."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"--version"})})}),"\n",(0,n.jsx)(s.p,{children:"Displays the version of this utility."}),"\n",(0,n.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(s.p,{children:"Stop a Cloudberry Database system in smart mode:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"gpstop\n"})}),"\n",(0,n.jsx)(s.p,{children:"Stop a Cloudberry Database system in fast mode:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"gpstop -M fast\n"})}),"\n",(0,n.jsx)(s.p,{children:"Stop all segment instances and then restart the system:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"gpstop -r\n"})}),"\n",(0,n.jsx)(s.p,{children:"Stop a coordinator instance that was started in maintenance mode:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"gpstop -m\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Reload the ",(0,n.jsx)(s.code,{children:"postgresql.conf"})," and ",(0,n.jsx)(s.code,{children:"pg_hba.conf"})," files after making configuration changes but do not shutdown the Cloudberry Database array:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"gpstop -u\n"})}),"\n",(0,n.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/sys-utilities/gpstart",children:"gpstart"})})]})}function h(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>a,a:()=>r});var n=t(67294);const o={},i=n.createContext(o);function r(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);