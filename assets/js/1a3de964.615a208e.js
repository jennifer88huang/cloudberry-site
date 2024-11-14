"use strict";(self.webpackChunkCloudberry_Database_website=self.webpackChunkCloudberry_Database_website||[]).push([[8129],{95731:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=t(85893),s=t(11151);const o={title:"[103-1] TPC-H: Decision Support Benchmark for Cloudberry Database",description:"Run the TPC-H benchmark automatically on an existing Cloudberry Database cluster."},i=void 0,a={type:"mdx",permalink:"/bootcamp/103-cbdb-performance-benchmark-tpch",source:"@site/src/pages/bootcamp/103-cbdb-performance-benchmark-tpch.md",title:"[103-1] TPC-H: Decision Support Benchmark for Cloudberry Database",description:"Run the TPC-H benchmark automatically on an existing Cloudberry Database cluster.",frontMatter:{title:"[103-1] TPC-H: Decision Support Benchmark for Cloudberry Database",description:"Run the TPC-H benchmark automatically on an existing Cloudberry Database cluster."},unlisted:!1},c={},d=[{value:"Context",id:"context",level:2},{value:"Supported TPC-H Versions",id:"supported-tpc-h-versions",level:3},{value:"Setup",id:"setup",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"TPC-H Tools Dependencies",id:"tpc-h-tools-dependencies",level:3},{value:"Packages",id:"packages",level:3},{value:"Execution",id:"execution",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["This tool is based on the benchmark tool ",(0,r.jsx)(n.a,{href:"https://www.tpc.org/tpch/default5.asp",children:"TPC-H"}),".\nThis repo will guide you on how to run the TPC-H benchmark automatically on an existing CloudberryDB cluster in the CloudberryDB Sandbox."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["The TPC-H is a decision support benchmark. It consists of a suite of business oriented ad-hoc queries and concurrent data modifications. The queries and the data populating the database have been chosen to have broad industry-wide relevance. This benchmark illustrates decision support systems that examine large volumes of data, execute queries with a high degree of complexity, and give answers to critical business questions. You can learn more from the ",(0,r.jsx)(n.a,{href:"https://www.tpc.org/tpch/",children:"TPC-H official website"}),"."]})}),"\n",(0,r.jsx)(n.h2,{id:"context",children:"Context"}),"\n",(0,r.jsx)(n.h3,{id:"supported-tpc-h-versions",children:"Supported TPC-H Versions"}),"\n",(0,r.jsx)(n.p,{children:"TPC has published the following TPC-H standards over time:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"TPC-H Benchmark Version"}),(0,r.jsx)(n.th,{children:"Published Date"}),(0,r.jsx)(n.th,{children:"Standard Specification"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"3.0.1"}),(0,r.jsx)(n.td,{children:"04/28, 2022"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://www.tpc.org/TPC_Documents_Current_Versions/pdf/TPC-H_v3.0.1.pdf",children:"https://www.tpc.org/TPC_Documents_Current_Versions/pdf/TPC-H_v3.0.1.pdf"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"3.0.0"}),(0,r.jsx)(n.td,{children:"02/18, 2021"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://tpc.org/TPC_Documents_Current_Versions/pdf/tpc-h_v3.0.0.pdf",children:"https://tpc.org/TPC_Documents_Current_Versions/pdf/tpc-h_v3.0.0.pdf"})})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,r.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(n.p,{children:"This is a follow-up tutorial for previous bootcamp steps. Please make sure to have the environment ready for Cloudberry Database Sandbox up and running."}),"\n",(0,r.jsx)(n.h3,{id:"tpc-h-tools-dependencies",children:"TPC-H Tools Dependencies"}),"\n",(0,r.jsxs)(n.p,{children:["Make sure that ",(0,r.jsx)(n.code,{children:"gcc"})," and ",(0,r.jsx)(n.code,{children:"make"})," are installed on ",(0,r.jsx)(n.code,{children:"mdw"})," for compiling the ",(0,r.jsx)(n.code,{children:"dbgen"})," (data generation) and ",(0,r.jsx)(n.code,{children:"qgen"})," (query generation)."]}),"\n",(0,r.jsxs)(n.p,{children:["You can install the dependencies on ",(0,r.jsx)(n.code,{children:"mdw"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker exec -it $(docker ps -q) /bin/bash\nyum -y install gcc make\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The source code is from ",(0,r.jsx)(n.a,{href:"http://tpc.org/tpc_documents_current_versions/current_specifications5.asp",children:"http://tpc.org/tpc_documents_current_versions/current_specifications5.asp"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"packages",children:"Packages"}),"\n",(0,r.jsx)(n.p,{children:'TPC-H and TPC-DS packages are already placed under "mdw:/tmp/" folder.'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"[gpadmin@mdw tmp]$ ls -rlt\n-rw-rw-r--  1 root    root    24520013 Jul 27 14:18 TPC-H-CBDB.tar.gz\n-rw-rw-r--  1 root    root     7096941 Jul 27 14:18 TPC-DS-CBDB.tar.gz\n"})}),"\n",(0,r.jsx)(n.h3,{id:"execution",children:"Execution"}),"\n",(0,r.jsxs)(n.p,{children:["To run the benchmark, login as ",(0,r.jsx)(n.code,{children:"gpadmin"})," on ",(0,r.jsx)(n.code,{children:"mdw"})," in the CloudberryDB Sandbox, and execute the following command:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"su - gpadmin\ntar xzf TPC-H-CBDB.tar.gz\ncd ~/TPC-H-CBDB\n./run.sh\n"})}),"\n",(0,r.jsx)(n.p,{children:"The TPC-H benchmark needs a few minutes to run before you get the final report, which depends on your machine's hardware. You may check the TPC-H execution log information file under the same directory with a similar name as below."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"tpch_20230727_145051.log\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var r=t(67294);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);