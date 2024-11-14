"use strict";(self.webpackChunkCloudberry_Database_website=self.webpackChunkCloudberry_Database_website||[]).push([[2431],{6208:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=t(85893),s=t(11151);const a={title:"Install Single-Node Cloudberry Database in a Docker Container (Sandbox)",description:"Learn how to quickly set up and connect to a single-node Cloudberry Database in a Docker environment."},r=void 0,i={type:"mdx",permalink:"/zh/bootcamp/cbdb-sandbox",source:"@site/i18n/zh/docusaurus-plugin-content-pages/bootcamp/cbdb-sandbox.md",title:"Install Single-Node Cloudberry Database in a Docker Container (Sandbox)",description:"Learn how to quickly set up and connect to a single-node Cloudberry Database in a Docker environment.",frontMatter:{title:"Install Single-Node Cloudberry Database in a Docker Container (Sandbox)",description:"Learn how to quickly set up and connect to a single-node Cloudberry Database in a Docker environment."},unlisted:!1},c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Build the Sandbox",id:"build-the-sandbox",level:2},{value:"Connect to the database",id:"connect-to-the-database",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"This document guides you on how to quickly set up and connect to a single-node Cloudberry Database in a Docker environment. You can try out Cloudberry Database by performing some basic operations and running SQL commands."}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsx)(n.p,{children:"This guide is intended for testing or development. DO NOT use it for production."})}),"\n",(0,o.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsx)(n.p,{children:"Make sure that your environment meets the following requirements:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Platform requirement: Any platform with Docker runtime. For details, refer to ",(0,o.jsx)(n.a,{href:"https://www.docker.com/get-started/",children:"Get Started with Docker"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"Other dependencies: Git, SSH, and internet connection"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"build-the-sandbox",children:"Build the Sandbox"}),"\n",(0,o.jsxs)(n.p,{children:["This section introduces how to set up the Docker container in which the source code of the latest Cloudberry Database (released in ",(0,o.jsx)(n.a,{href:"https://github.com/cloudberrydb/cloudberrydb/releases",children:"Cloudberry Database Release Page"}),") will be compiled. In this CentOS 7.9 Docker container, a single-node cluster will be initialized with one coordinator and two segments. Both x86 and ARM CPUs (including Apple chips) are supported."]}),"\n",(0,o.jsx)(n.p,{children:"Build steps:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Start Docker Desktop and make sure it is running properly on your host platform."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Download this repository (which is ",(0,o.jsx)(n.a,{href:"https://github.com/cloudberrydb/bootcamp",children:"cloudberrydb/bootcamp"}),") to the target machine."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"git clone https://github.com/cloudberrydb/bootcamp.git\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Enter the repository and run the ",(0,o.jsx)(n.code,{children:"run.sh"})," script to start the Docker container. This will start the automatic installation process."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"cd bootcamp/000-cbdb-sandbox\nchmod +x ./run.sh\nsudo ./run.sh\n"})}),"\n",(0,o.jsx)(n.p,{children:"Once the script finishes without error, the sandbox is built successfully."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"connect-to-the-database",children:"Connect to the database"}),"\n",(0,o.jsx)(n.p,{children:"You can now connect to the database and try some basic operations."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Connect to the Docker container from the host machine:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"docker exec -it $(docker ps -q) /bin/bash\n"})}),"\n",(0,o.jsx)(n.p,{children:"If it is successful, you will see the following prompt:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"[root@mdw /]$\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Log into Cloudberry Database in Docker. See the following commands and example outputs:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:'[root@mdw /] su - gpadmin  # Switches to the gpadmin user.\n\n# Last login: Tue Oct 24 10:26:14 CST 2023 on pts/1\n\n[gpadmin@mdw ~]$ psql  # Connects to the database with the default database name "gpadmin".\n\n# psql (14.4, server 14.4)\n# Type "help" for help.\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"gpadmin=# SELECT VERSION();  -- Checks the database version.\n                                                                                        version\n\n-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n-----\nPostgreSQL 14.4 (Cloudberry Database 1.0.0 build dev) on aarch64-unknown-linux-gnu, compiled by gcc (GCC) 10.2.1 20210130 (Red Hat 10.2.1-11), 64-bit compiled on Oct 24 2023 10:24:28\n(1 row)\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["In addition to using the ",(0,o.jsx)(n.code,{children:"docker exec"})," command, you can also use the ",(0,o.jsx)(n.code,{children:"ssh"})," command. This command will connect to the database with the default database name ",(0,o.jsx)(n.code,{children:"gpadmin"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"ssh gpadmin@localhost # Password: cbdb@123\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Now you have a Cloudberry Database and can continue with ",(0,o.jsx)(n.a,{href:"./#2-101-cloudberrydb-tourials",children:"101 Cloudberry Database Tutorials"}),"! Enjoy!"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>r});var o=t(67294);const s={},a=o.createContext(s);function r(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);