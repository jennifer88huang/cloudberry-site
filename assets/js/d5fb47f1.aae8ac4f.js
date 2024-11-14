"use strict";(self.webpackChunkCloudberry_Database_website=self.webpackChunkCloudberry_Database_website||[]).push([[5849],{26942:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>d,default:()=>c,frontMatter:()=>o,metadata:()=>h,toc:()=>a});var i=n(85893),t=n(11151);const o={title:"gpssh-exkeys"},d="gpssh-exkeys",h={id:"sys-utilities/gpssh-exkeys",title:"gpssh-exkeys",description:"Exchanges SSH public keys between hosts.",source:"@site/docs/sys-utilities/gpssh-exkeys.md",sourceDirName:"sys-utilities",slug:"/sys-utilities/gpssh-exkeys",permalink:"/docs/sys-utilities/gpssh-exkeys",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sys-utilities/gpssh-exkeys.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1731576389,formattedLastUpdatedAt:"Nov 14, 2024",frontMatter:{title:"gpssh-exkeys"},sidebar:"docsbars",previous:{title:"gpshrink",permalink:"/docs/sys-utilities/gpshrink"},next:{title:"gpssh",permalink:"/docs/sys-utilities/gpssh"}},r={},a=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"See also",id:"see-also",level:2}];function l(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"gpssh-exkeys",children:"gpssh-exkeys"}),"\n",(0,i.jsx)(s.p,{children:"Exchanges SSH public keys between hosts."}),"\n",(0,i.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"gpssh-exkeys -f <hostfile_exkeys> | -h <hostname> [-h <hostname> ...]\n\ngpssh-exkeys -e <hostfile_exkeys> -x <hostfile_gpexpand>\n\ngpssh-exkeys -? \n\ngpssh-exkeys --version\n"})}),"\n",(0,i.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"gpssh-exkeys"})," utility exchanges SSH keys between the specified host names (or host addresses). This allows SSH connections between Cloudberry hosts and network interfaces without a password prompt. The utility is used to initially prepare a Cloudberry Database system for passwordless SSH access, and also to prepare additional hosts for passwordless SSH access when expanding a Cloudberry Database system."]}),"\n",(0,i.jsxs)(s.p,{children:["Keys are exchanged as the currently logged in user. You run the utility on the coordinator host as the ",(0,i.jsx)(s.code,{children:"gpadmin"})," user (the user designated to own your Cloudberry Database installation). Cloudberry Database management utilities require that the ",(0,i.jsx)(s.code,{children:"gpadmin"})," user be created on all hosts in the Cloudberry Database system, and the utilities must be able to connect as that user to all hosts without a password prompt."]}),"\n",(0,i.jsxs)(s.p,{children:["You can also use ",(0,i.jsx)(s.code,{children:"gpssh-exkeys"})," to enable passwordless SSH for additional users, ",(0,i.jsx)(s.code,{children:"root"}),", for example."]}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"gpssh-exkeys"})," utility has the following prerequisites:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"The user must have an account on the coordinator, standby, and every segment host in the Cloudberry Database cluster."}),"\n",(0,i.jsxs)(s.li,{children:["The user must have an ",(0,i.jsx)(s.code,{children:"id_rsa"})," SSH key pair installed on the coordinator host."]}),"\n",(0,i.jsxs)(s.li,{children:['The user must be able to connect with SSH from the coordinator host to every other host machine without entering a password. (This is called "1-',(0,i.jsx)(s.em,{children:"n"}),' passwordless SSH.")']}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["You can enable 1-",(0,i.jsx)(s.em,{children:"n"})," passwordless SSH using the ",(0,i.jsx)(s.code,{children:"ssh-copy-id"})," command to add the user's public key to each host's ",(0,i.jsx)(s.code,{children:"authorized_keys"})," file. The ",(0,i.jsx)(s.code,{children:"gpssh-exkeys"}),' utility enables "',(0,i.jsx)(s.em,{children:"n"}),"-",(0,i.jsx)(s.em,{children:"n"}),' passwordless SSH," which allows the user to connect with SSH from any host to any other host in the cluster without a password.']}),"\n",(0,i.jsxs)(s.p,{children:["To specify the hosts involved in an SSH key exchange, use the ",(0,i.jsx)(s.code,{children:"-f"})," option to specify a file containing a list of host names (recommended), or use the ",(0,i.jsx)(s.code,{children:"-h"})," option to name single host names on the command-line. At least one host name (",(0,i.jsx)(s.code,{children:"-h"}),") or a host file (",(0,i.jsx)(s.code,{children:"-f"}),") is required. Note that the local host is included in the key exchange by default."]}),"\n",(0,i.jsxs)(s.p,{children:["To specify new expansion hosts to be added to an existing Cloudberry Database system, use the ",(0,i.jsx)(s.code,{children:"-e"})," and ",(0,i.jsx)(s.code,{children:"-x"})," options. The ",(0,i.jsx)(s.code,{children:"-e"})," option specifies a file containing a list of existing hosts in the system that have already exchanged SSH keys. The ",(0,i.jsx)(s.code,{children:"-x"})," option specifies a file containing a list of new hosts that need to participate in the SSH key exchange."]}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"gpssh-exkeys"})," utility performs key exchange using the following steps:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Adds the user's public key to the user's own ",(0,i.jsx)(s.code,{children:"authorized_keys"})," file on the current host."]}),"\n",(0,i.jsxs)(s.li,{children:["Updates the ",(0,i.jsx)(s.code,{children:"known_hosts"})," file of the current user with the host key of each host specified using the ",(0,i.jsx)(s.code,{children:"-h"}),", ",(0,i.jsx)(s.code,{children:"-f"}),", ",(0,i.jsx)(s.code,{children:"-e"}),", and ",(0,i.jsx)(s.code,{children:"-x"})," options."]}),"\n",(0,i.jsxs)(s.li,{children:["Connects to each host using ",(0,i.jsx)(s.code,{children:"ssh"})," and obtains the user's ",(0,i.jsx)(s.code,{children:"authorized_keys"}),", ",(0,i.jsx)(s.code,{children:"known_hosts"}),", and ",(0,i.jsx)(s.code,{children:"id_rsa.pub"})," files."]}),"\n",(0,i.jsxs)(s.li,{children:["Adds keys from the ",(0,i.jsx)(s.code,{children:"id_rsa.pub"})," files obtained from each host to the ",(0,i.jsx)(s.code,{children:"authorized_keys"})," file of the current user."]}),"\n",(0,i.jsxs)(s.li,{children:["Updates the ",(0,i.jsx)(s.code,{children:"authorized_keys"}),", ",(0,i.jsx)(s.code,{children:"known_hosts"}),", and ",(0,i.jsx)(s.code,{children:"id_rsa.pub"})," files on all hosts with new host information (if any)."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"options",children:"Options"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"-e hostfile_exkeys"})})}),"\n",(0,i.jsxs)(s.p,{children:["When doing a system expansion, this is the name and location of a file containing all configured host names and host addresses (interface names) for each host in your current Cloudberry system (coordinator, standby coordinator, and segments), one name per line without blank lines or extra spaces. Hosts specified in this file cannot be specified in the host file used with ",(0,i.jsx)(s.code,{children:"-x"}),"."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"-f hostfile_exkeys"})})}),"\n",(0,i.jsx)(s.p,{children:"Specifies the name and location of a file containing all configured host names and host addresses (interface names) for each host in your Cloudberry system (coordinator, standby coordinator and segments), one name per line without blank lines or extra spaces."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"-h hostname"})})}),"\n",(0,i.jsxs)(s.p,{children:["Specifies a single host name (or host address) that will participate in the SSH key exchange. You can use the ",(0,i.jsx)(s.code,{children:"-h"})," option multiple times to specify multiple host names and host addresses."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"--version"})})}),"\n",(0,i.jsx)(s.p,{children:"Displays the version of this utility."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"-x hostfile_gpexpand"})})}),"\n",(0,i.jsxs)(s.p,{children:["When doing a system expansion, this is the name and location of a file containing all configured host names and host addresses (interface names) for each new segment host you are adding to your Cloudberry system, one name per line without blank lines or extra spaces. Hosts specified in this file cannot be specified in the host file used with ",(0,i.jsx)(s.code,{children:"-e"}),"."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"-? (help)"})})}),"\n",(0,i.jsx)(s.p,{children:"Displays the online help."}),"\n",(0,i.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(s.p,{children:["Exchange SSH keys between all host names and addresses listed in the file ",(0,i.jsx)(s.code,{children:"hostfile_exkeys"}),":"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"$ gpssh-exkeys -f hostfile_exkeys\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Exchange SSH keys between the hosts ",(0,i.jsx)(s.code,{children:"sdw1"}),", ",(0,i.jsx)(s.code,{children:"sdw2"}),", and ",(0,i.jsx)(s.code,{children:"sdw3"}),":"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"$ gpssh-exkeys -h sdw1 -h sdw2 -h sdw3\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Exchange SSH keys between existing hosts ",(0,i.jsx)(s.code,{children:"sdw1"}),", ",(0,i.jsx)(s.code,{children:"sdw2"}),", and ",(0,i.jsx)(s.code,{children:"sdw3"}),", and new hosts ",(0,i.jsx)(s.code,{children:"sdw4"})," and ",(0,i.jsx)(s.code,{children:"sdw5"})," as part of a system expansion operation:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"$ cat hostfile_exkeys\n\ncdw\ncdw-1\ncdw-2\nscdw\nscdw-1\nscdw-2\nsdw1\nsdw1-1\nsdw1-2\nsdw2\nsdw2-1\nsdw2-2\nsdw3\nsdw3-1\nsdw3-2\n$ cat hostfile_gpexpand\nsdw4\nsdw4-1\nsdw4-2\nsdw5\nsdw5-1\nsdw5-2\n\n$ gpssh-exkeys -e hostfile_exkeys -x hostfile_gpexpand\n"})}),"\n",(0,i.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/docs/sys-utilities/gpssh",children:"gpssh"}),", ",(0,i.jsx)(s.a,{href:"/docs/sys-utilities/gpsync",children:"gpsync"})]})]})}function c(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>h,a:()=>d});var i=n(67294);const t={},o=i.createContext(t);function d(e){const s=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function h(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),i.createElement(o.Provider,{value:s},e.children)}}}]);