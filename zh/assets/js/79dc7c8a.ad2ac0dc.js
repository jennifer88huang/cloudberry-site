"use strict";(self.webpackChunkCloudberry_Database_website=self.webpackChunkCloudberry_Database_website||[]).push([[7252],{93917:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>t,default:()=>a,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var c=n(85893),i=n(11151);const r={title:"pg_checksums"},t="pg_checksums",o={id:"sys-utilities/pg-checksums",title:"pg_checksums",description:"Enables, disables, or checks data checksums in a Cloudberry Database cluster.",source:"@site/docs/sys-utilities/pg-checksums.md",sourceDirName:"sys-utilities",slug:"/sys-utilities/pg-checksums",permalink:"/zh/docs/sys-utilities/pg-checksums",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sys-utilities/pg-checksums.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1731576389,formattedLastUpdatedAt:"2024\u5e7411\u670814\u65e5",frontMatter:{title:"pg_checksums"},sidebar:"docsbars",previous:{title:"gpsync",permalink:"/zh/docs/sys-utilities/gpsync"},next:{title:"pg_config",permalink:"/zh/docs/sys-utilities/pg-config"}},d={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"Environment",id:"environment",level:2},{value:"Notes",id:"notes",level:2}];function h(e){const s={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.h1,{id:"pg_checksums",children:"pg_checksums"}),"\n",(0,c.jsx)(s.p,{children:"Enables, disables, or checks data checksums in a Cloudberry Database cluster."}),"\n",(0,c.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-shell",children:"pg_checksums [<option> ...] [-D <datadir> | --pgdata=<datadir>]\n\npg_checksums -? | --help\n\npg_checksums -V | --version\n"})}),"\n",(0,c.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"pg_checksums"})," is a standard PostgreSQL utility that you can use to check, enable, or disable data checksums in a Cloudberry Database cluster. The server must be shut down cleanly before running ",(0,c.jsx)(s.code,{children:"pg_checksums"}),". When verifying checksums, Cloudberry Database returns the exit status zero if there are no checksum errors, and returns nonzero if it detects at least one checksum failure. When enabling or disabling checksums, Cloudberry returns a nonzero exit status if the operation failed."]}),"\n",(0,c.jsxs)(s.p,{children:["When verifying checksums, Cloudberry Database scans every file in the cluster. When enabling checksums, every file in the cluster is rewritten in-place. Disabling checksums only updates the ",(0,c.jsx)(s.code,{children:"pg_control"})," file."]}),"\n",(0,c.jsx)(s.h2,{id:"options",children:"Options"}),"\n",(0,c.jsx)(s.p,{children:"The following command-line options are available:"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.strong,{children:(0,c.jsx)(s.code,{children:"-D datadir"})}),(0,c.jsx)("br",{}),"\n",(0,c.jsx)(s.strong,{children:(0,c.jsx)(s.code,{children:"--pgdata=datadir"})})]}),"\n",(0,c.jsx)(s.p,{children:"Specifies the directory where the database cluster is stored."}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.strong,{children:(0,c.jsx)(s.code,{children:"-c"})}),(0,c.jsx)("br",{}),"\n",(0,c.jsx)(s.strong,{children:(0,c.jsx)(s.code,{children:"--check"})})]}),"\n",(0,c.jsx)(s.p,{children:"Checks checksums. This is the default mode when no other options are specified."}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.strong,{children:(0,c.jsx)(s.code,{children:"-d"})}),(0,c.jsx)("br",{}),"\n",(0,c.jsx)(s.strong,{children:(0,c.jsx)(s.code,{children:"--disable"})})]}),"\n",(0,c.jsx)(s.p,{children:"Deactivates checksums."}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.strong,{children:(0,c.jsx)(s.code,{children:"-e"})}),(0,c.jsx)("br",{}),"\n",(0,c.jsx)(s.strong,{children:(0,c.jsx)(s.code,{children:"--enable"})})]}),"\n",(0,c.jsx)(s.p,{children:"Activates checksums."}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.strong,{children:(0,c.jsx)(s.code,{children:"-f fnode"})}),(0,c.jsx)("br",{}),"\n",(0,c.jsx)(s.strong,{children:(0,c.jsx)(s.code,{children:"--filenode=fnode"})})]}),"\n",(0,c.jsx)(s.p,{children:"Only validate checksums in the relation with filenode fnode."}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.strong,{children:(0,c.jsx)(s.code,{children:"-N"})}),(0,c.jsx)("br",{}),"\n",(0,c.jsx)(s.strong,{children:(0,c.jsx)(s.code,{children:"--no-sync"})})]}),"\n",(0,c.jsxs)(s.p,{children:["By default, ",(0,c.jsx)(s.code,{children:"pg_checksums"})," waits for all files to be written safely to disk. This option causes ",(0,c.jsx)(s.code,{children:"pg_checksums"})," to return without waiting, which is faster, but a subsequent operating system crash could leave the updated data directory corrupt. This option has no effect when specified with ",(0,c.jsx)(s.code,{children:"--check"}),"."]}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.strong,{children:"Note"}),"\nWhile useful for testing, do not use the ",(0,c.jsx)(s.code,{children:"-N/--nosync"})," option in a production installation."]}),"\n"]}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.strong,{children:(0,c.jsx)(s.code,{children:"-P"})}),(0,c.jsx)("br",{}),"\n",(0,c.jsx)(s.strong,{children:(0,c.jsx)(s.code,{children:"--progress"})})]}),"\n",(0,c.jsx)(s.p,{children:"Enables progress reporting. Turning this on will deliver a progress report while checking or enabling checksums."}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.strong,{children:(0,c.jsx)(s.code,{children:"-v"})}),(0,c.jsx)("br",{}),"\n",(0,c.jsx)(s.strong,{children:(0,c.jsx)(s.code,{children:"--verbose"})})]}),"\n",(0,c.jsx)(s.p,{children:"Specifies verbose mode, which lists all checked files."}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.strong,{children:(0,c.jsx)(s.code,{children:"-V"})}),(0,c.jsx)("br",{}),"\n",(0,c.jsx)(s.strong,{children:(0,c.jsx)(s.code,{children:"--version"})})]}),"\n",(0,c.jsxs)(s.p,{children:["Print the ",(0,c.jsx)(s.code,{children:"pg_checksums"})," version, and exit."]}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.strong,{children:(0,c.jsx)(s.code,{children:"-?"})}),(0,c.jsx)("br",{}),"\n",(0,c.jsx)(s.strong,{children:(0,c.jsx)(s.code,{children:"--help"})})]}),"\n",(0,c.jsxs)(s.p,{children:["Show help about ",(0,c.jsx)(s.code,{children:"pg_checksums"})," command line arguments, and exit."]}),"\n",(0,c.jsx)(s.h2,{id:"environment",children:"Environment"}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.strong,{children:(0,c.jsx)(s.code,{children:"PGDATA"})})}),"\n",(0,c.jsxs)(s.p,{children:["Specifies the directory where the database cluster is stored; you can specify the ",(0,c.jsx)(s.code,{children:"-D"})," option to the ",(0,c.jsx)(s.code,{children:"pg_checksums"})," command to override this setting."]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.strong,{children:(0,c.jsx)(s.code,{children:"PG_COLOR"})})}),"\n",(0,c.jsxs)(s.p,{children:["Specifies whether to use color in diagnostic messages. Possible values are ",(0,c.jsx)(s.code,{children:"always"}),", ",(0,c.jsx)(s.code,{children:"auto"}),", and ",(0,c.jsx)(s.code,{children:"never"}),"."]}),"\n",(0,c.jsx)(s.h2,{id:"notes",children:"Notes"}),"\n",(0,c.jsx)(s.p,{children:"Enabling checksums in a large cluster can potentially take a long time. To guard against data loss during this operation, you must not start the cluster, nor start other programs that write to the data directory."}),"\n",(0,c.jsxs)(s.p,{children:["If ",(0,c.jsx)(s.code,{children:"pg_checksums"})," is aborted or killed while enabling or disabling checksums, the cluster's data checksum configuration remains unchanged; you can re-run ",(0,c.jsx)(s.code,{children:"pg_checksums"})," to perform the same operation."]})]})}function a(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>o,a:()=>t});var c=n(67294);const i={},r=c.createContext(i);function t(e){const s=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),c.createElement(r.Provider,{value:s},e.children)}}}]);