"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[2342],{80725:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>h,default:()=>a,frontMatter:()=>o,metadata:()=>c,toc:()=>r});var i=n(85893),t=n(11151);const o={title:"gpssh"},h="gpssh",c={id:"sys-utilities/gpssh",title:"gpssh",description:"Provides SSH access to multiple hosts at once.",source:"@site/docs/sys-utilities/gpssh.md",sourceDirName:"sys-utilities",slug:"/sys-utilities/gpssh",permalink:"/docs/sys-utilities/gpssh",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sys-utilities/gpssh.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1733824616,formattedLastUpdatedAt:"Dec 10, 2024",frontMatter:{title:"gpssh"},sidebar:"docsbars",previous:{title:"gpssh-exkeys",permalink:"/docs/sys-utilities/gpssh-exkeys"},next:{title:"gpstart",permalink:"/docs/sys-utilities/gpstart"}},l={},r=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"gpssh configuration file",id:"gpssh-configuration-file",level:2},{value:"Examples",id:"examples",level:2},{value:"See also",id:"see-also",level:2}];function d(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"gpssh",children:"gpssh"}),"\n",(0,i.jsx)(s.p,{children:"Provides SSH access to multiple hosts at once."}),"\n",(0,i.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"gpssh { -f <hostfile_gpssh> | - h <hostname> [-h <hostname> ...] } [-s] [-e]\n      [-d <seconds>] [-t <multiplier>] [-v]\n      [<bash_command>]\n\ngpssh -? \n\ngpssh --version\n"})}),"\n",(0,i.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"gpssh"})," utility allows you to run bash shell commands on multiple hosts at once using SSH (secure shell). You can run a single command by specifying it on the command-line, or omit the command to enter into an interactive command-line session."]}),"\n",(0,i.jsxs)(s.p,{children:["To specify the hosts involved in the SSH session, use the ",(0,i.jsx)(s.code,{children:"-f"})," option to specify a file containing a list of host names, or use the ",(0,i.jsx)(s.code,{children:"-h"})," option to name single host names on the command-line. At least one host name (",(0,i.jsx)(s.code,{children:"-h"}),") or a host file (",(0,i.jsx)(s.code,{children:"-f"}),") is required. Note that the current host is ",(0,i.jsx)(s.em,{children:(0,i.jsx)(s.strong,{children:"not"})})," included in the session by default \u2014 to include the local host, you must explicitly declare it in the list of hosts involved in the session."]}),"\n",(0,i.jsxs)(s.p,{children:["Before using ",(0,i.jsx)(s.code,{children:"gpssh"}),", you must have a trusted host setup between the hosts involved in the SSH session. You can use the utility ",(0,i.jsx)(s.code,{children:"gpssh-exkeys"})," to update the known host files and exchange public keys between hosts if you have not done so already."]}),"\n",(0,i.jsxs)(s.p,{children:["If you do not specify a command on the command-line, ",(0,i.jsx)(s.code,{children:"gpssh"})," will go into interactive mode. At the ",(0,i.jsx)(s.code,{children:"gpssh"})," command prompt (",(0,i.jsx)(s.code,{children:"=>"}),"), you can enter a command as you would in a regular bash terminal command-line, and the command will be run on all hosts involved in the session. To end an interactive session, press ",(0,i.jsx)(s.code,{children:"CTRL"}),"+",(0,i.jsx)(s.code,{children:"D"})," on the keyboard or type ",(0,i.jsx)(s.code,{children:"exit"})," or ",(0,i.jsx)(s.code,{children:"quit"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["If a user name is not specified in the host file, ",(0,i.jsx)(s.code,{children:"gpssh"})," will run commands as the currently logged in user. To determine the currently logged in user, do a ",(0,i.jsx)(s.code,{children:"whoami"})," command. By default, ",(0,i.jsx)(s.code,{children:"gpssh"})," goes to ",(0,i.jsx)(s.code,{children:"$HOME"})," of the session user on the remote hosts after login. To ensure commands are run correctly on all remote hosts, you should always enter absolute paths."]}),"\n",(0,i.jsxs)(s.p,{children:["If you encounter network timeout problems when using ",(0,i.jsx)(s.code,{children:"gpssh"}),", you can use ",(0,i.jsx)(s.code,{children:"-d"})," and ",(0,i.jsx)(s.code,{children:"-t"})," options or set parameters in the ",(0,i.jsx)(s.code,{children:"gpssh.conf"})," file to control the timing that ",(0,i.jsx)(s.code,{children:"gpssh"})," uses when validating the initial ",(0,i.jsx)(s.code,{children:"ssh"})," connection. For information about the configuration file, see ",(0,i.jsx)(s.a,{href:"#gpssh-configuration-file",children:"gpssh configuration file"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"options",children:"Options"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"bash_command"})})}),"\n",(0,i.jsxs)(s.p,{children:["A bash shell command to run on all hosts involved in this session (optionally enclosed in quotes). If not specified, ",(0,i.jsx)(s.code,{children:"gpssh"})," starts an interactive session."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"-d (delay) seconds"})})}),"\n",(0,i.jsxs)(s.p,{children:["Optional. Specifies the time, in seconds, to wait at the start of a ",(0,i.jsx)(s.code,{children:"gpssh"})," interaction with ",(0,i.jsx)(s.code,{children:"ssh"}),". Default is ",(0,i.jsx)(s.code,{children:"0.05"}),". This option overrides the ",(0,i.jsx)(s.code,{children:"delaybeforesend"})," value that is specified in the ",(0,i.jsx)(s.code,{children:"gpssh.conf"})," configuration file."]}),"\n",(0,i.jsxs)(s.p,{children:["Increasing this value can cause a long wait time during ",(0,i.jsx)(s.code,{children:"gpssh"})," startup."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"-e (echo)"})})}),"\n",(0,i.jsx)(s.p,{children:"Optional. Echoes the commands passed to each host and their resulting output while running in non-interactive mode."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"-f hostfile_gpssh"})})}),"\n",(0,i.jsx)(s.p,{children:"Specifies the name of a file that contains a list of hosts that will participate in this SSH session. The syntax of the host file is one host per line."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"-h hostname"})})}),"\n",(0,i.jsxs)(s.p,{children:["Specifies a single host name that will participate in this SSH session. You can use the ",(0,i.jsx)(s.code,{children:"-h"})," option multiple times to specify multiple host names."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"-s"})})}),"\n",(0,i.jsxs)(s.p,{children:["Optional. If specified, before running any commands on the target host, ",(0,i.jsx)(s.code,{children:"gpssh"})," sources the file ",(0,i.jsx)(s.code,{children:"greenplum_path.sh"})," in the directory specified by the ",(0,i.jsx)(s.code,{children:"$GPHOME"})," environment variable."]}),"\n",(0,i.jsx)(s.p,{children:"This option is valid for both interactive mode and single command mode."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"-t multiplier"})})}),"\n",(0,i.jsxs)(s.p,{children:["Optional. A decimal number greater than 0 (zero) that is the multiplier for the timeout that ",(0,i.jsx)(s.code,{children:"gpssh"})," uses when validating the ",(0,i.jsx)(s.code,{children:"ssh"})," prompt. Default is ",(0,i.jsx)(s.code,{children:"1"}),". This option overrides the ",(0,i.jsx)(s.code,{children:"prompt_validation_timeout"})," value that is specified in the ",(0,i.jsx)(s.code,{children:"gpssh.conf"})," configuration file."]}),"\n",(0,i.jsxs)(s.p,{children:["Increasing this value has a small impact during ",(0,i.jsx)(s.code,{children:"gpssh"})," startup."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"-v (verbose mode)"})})}),"\n",(0,i.jsx)(s.p,{children:"Optional. Reports additional messages in addition to the command output when running in non-interactive mode."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"--version"})})}),"\n",(0,i.jsx)(s.p,{children:"Displays the version of this utility."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"-? (help)"})})}),"\n",(0,i.jsx)(s.p,{children:"Displays the online help."}),"\n",(0,i.jsx)(s.h2,{id:"gpssh-configuration-file",children:"gpssh configuration file"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"gpssh.conf"})," file contains parameters that let you adjust the timing that ",(0,i.jsx)(s.code,{children:"gpssh"})," uses when validating the initial ",(0,i.jsx)(s.code,{children:"ssh"})," connection. These parameters affect the network connection before the ",(0,i.jsx)(s.code,{children:"gpssh"})," session runs commands with ",(0,i.jsx)(s.code,{children:"ssh"}),". The location of the file is specified by the environment variable ",(0,i.jsx)(s.code,{children:"COORDINATOR_DATA_DIRECTORY"}),". If the environment variable is not defined or the ",(0,i.jsx)(s.code,{children:"gpssh.conf"})," file does not exist, ",(0,i.jsx)(s.code,{children:"gpssh"})," uses the default values or the values set with the ",(0,i.jsx)(s.code,{children:"-d"})," and ",(0,i.jsx)(s.code,{children:"-t"})," options."]}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"gpssh.conf"})," file is a text file that consists of a ",(0,i.jsx)(s.code,{children:"[gpssh]"})," section and parameters. On a line, the ",(0,i.jsx)(s.code,{children:"#"})," (pound sign) indicates the start of a comment. This is an example ",(0,i.jsx)(s.code,{children:"gpssh.conf"})," file."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-conf",children:"[gpssh]\ndelaybeforesend = 0.05\nprompt_validation_timeout = 1.0\nsync_retries = 5\n"})}),"\n",(0,i.jsxs)(s.p,{children:["These are the ",(0,i.jsx)(s.code,{children:"gpssh.conf"})," parameters."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"delaybeforesend = seconds"})})}),"\n",(0,i.jsxs)(s.p,{children:["Specifies the time, in seconds, to wait at the start of a ",(0,i.jsx)(s.code,{children:"gpssh"})," interaction with ",(0,i.jsx)(s.code,{children:"ssh"}),". Default is 0.05. Increasing this value can cause a long wait time during ",(0,i.jsx)(s.code,{children:"gpssh"})," startup. The ",(0,i.jsx)(s.code,{children:"-d"})," option overrides this parameter."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"prompt_validation_timeout = multiplier"})})}),"\n",(0,i.jsxs)(s.p,{children:["A decimal number greater than 0 (zero) that is the multiplier for the timeout that ",(0,i.jsx)(s.code,{children:"gpssh"})," uses when validating the ",(0,i.jsx)(s.code,{children:"ssh"})," prompt. Increasing this value has a small impact during ",(0,i.jsx)(s.code,{children:"gpssh"})," startup. Default is ",(0,i.jsx)(s.code,{children:"1"}),". The ",(0,i.jsx)(s.code,{children:"-t"})," option overrides this parameter."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"sync_retries = attempts"})})}),"\n",(0,i.jsxs)(s.p,{children:["A non-negative integer that specifies the maximum number of times that ",(0,i.jsx)(s.code,{children:"gpssh"})," attempts to connect to a remote Cloudberry Database host. The default is 3. If the value is 0, ",(0,i.jsx)(s.code,{children:"gpssh"})," returns an error if the initial connection attempt fails. Increasing the number of attempts also increases the time between retry attempts. This parameter cannot be configured with a command-line option."]}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"-t"})," option also affects the time between retry attempts."]}),"\n",(0,i.jsx)(s.p,{children:"Increasing this value can compensate for slow network performance or segment host performance issues such as heavy CPU or I/O load. However, when a connection cannot be established, an increased value also increases the delay when an error is returned."}),"\n",(0,i.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(s.p,{children:["Start an interactive group SSH session with all hosts listed in the file ",(0,i.jsx)(s.code,{children:"hostfile_gpssh"}),":"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"$ gpssh -f hostfile_gpssh\n"})}),"\n",(0,i.jsxs)(s.p,{children:["At the ",(0,i.jsx)(s.code,{children:"gpssh"})," interactive command prompt, run a shell command on all the hosts involved in this session."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"=> ls -a /data/primary/*\n"})}),"\n",(0,i.jsx)(s.p,{children:"Exit an interactive session:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"=> exit\n=> quit\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Start a non-interactive group SSH session with the hosts named ",(0,i.jsx)(s.code,{children:"sdw1"})," and ",(0,i.jsx)(s.code,{children:"sdw2"})," and pass a file containing several commands named ",(0,i.jsx)(s.code,{children:"command_file"})," to ",(0,i.jsx)(s.code,{children:"gpssh"}),":"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"$ gpssh -h sdw1 -h sdw2 -v -e < command_file\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Run single commands in non-interactive mode on hosts ",(0,i.jsx)(s.code,{children:"sdw2"})," and ",(0,i.jsx)(s.code,{children:"localhost"}),":"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"$ gpssh -h sdw2 -h localhost -v -e 'ls -a /data/primary/*'\n$ gpssh -h sdw2 -h localhost -v -e 'echo $GPHOME'\n$ gpssh -h sdw2 -h localhost -v -e 'ls -1 | wc -l'\n"})}),"\n",(0,i.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/docs/sys-utilities/gpssh-exkeys",children:"gpssh-exkeys"}),", ",(0,i.jsx)(s.a,{href:"/docs/sys-utilities/gpsync",children:"gpsync"})]})]})}function a(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>c,a:()=>h});var i=n(67294);const t={},o=i.createContext(t);function h(e){const s=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:h(e.components),i.createElement(o.Provider,{value:s},e.children)}}}]);