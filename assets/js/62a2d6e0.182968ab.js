"use strict";(self.webpackChunkCloudberry_Database_website=self.webpackChunkCloudberry_Database_website||[]).push([[816],{68259:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>n,metadata:()=>i,toc:()=>d});var s=t(85893),o=t(11151);const n={title:"Load Data Using the File Protocol"},l="Load Data into Cloudberry Database Using the file:// Protocol",i={id:"data-loading/load-data-using-file-protocol",title:"Load Data Using the File Protocol",description:"The file:// protocol is a Cloudberry Database-specific protocol that allows you to load data from a local segment host server file into Cloudberry Database.",source:"@site/docs/data-loading/load-data-using-file-protocol.md",sourceDirName:"data-loading",slug:"/data-loading/load-data-using-file-protocol",permalink:"/docs/data-loading/load-data-using-file-protocol",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/data-loading/load-data-using-file-protocol.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1731576389,formattedLastUpdatedAt:"Nov 14, 2024",frontMatter:{title:"Load Data Using the File Protocol"},sidebar:"docsbars",previous:{title:"Load Data Using gpfdist",permalink:"/docs/data-loading/load-data-using-gpfdist"},next:{title:"Load Data Using gpload",permalink:"/docs/data-loading/load-data-using-gpload"}},r={},d=[{value:"Usage examples",id:"usage-examples",level:2}];function c(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a.h1,{id:"load-data-into-cloudberry-database-using-the-file-protocol",children:["Load Data into Cloudberry Database Using the ",(0,s.jsx)(a.code,{children:"file://"})," Protocol"]}),"\n",(0,s.jsxs)(a.p,{children:["The ",(0,s.jsx)(a.code,{children:"file://"})," protocol is a Cloudberry Database-specific protocol that allows you to load data from a local segment host server file into Cloudberry Database."]}),"\n",(0,s.jsxs)(a.p,{children:["The ",(0,s.jsx)(a.code,{children:"file://"})," protocol is used in a URI that specifies the location of an operating system file. External tables that you create that specify the ",(0,s.jsx)(a.code,{children:"file://"})," protocol are read-only tables."]}),"\n",(0,s.jsxs)(a.p,{children:["The URI includes the host name, port, and path to the file. Each file must locate on a segment host in a location accessible by the Cloudberry Database superuser (",(0,s.jsx)(a.code,{children:"gpadmin"}),"). The host name used in the URI must match a segment host name registered in the ",(0,s.jsx)(a.code,{children:"gp_segment_configuration"})," system catalog table."]}),"\n",(0,s.jsxs)(a.p,{children:["The ",(0,s.jsx)(a.code,{children:"LOCATION"})," clause can have multiple URIs, as shown in ",(0,s.jsx)(a.a,{href:"#usage-example",children:"Usage examples"}),"."]}),"\n",(0,s.jsxs)(a.p,{children:["The number of URIs you specify in the ",(0,s.jsx)(a.code,{children:"LOCATION"})," clause is the number of segment instances that will work in parallel to access the external table. For each URI, Cloudberry Database assigns a primary segment on the specified host to the file. For maximum parallelism when loading data, divide the data into as many equally sized files as you have primary segments. This ensures that all segments participate in the load. The number of external files per segment host cannot exceed the number of primary segment instances on that host. For example, if your array has 4 primary segment instances per segment host, you can place 4 external files on each segment host. Tables based on the ",(0,s.jsx)(a.code,{children:"file://"})," protocol can only be readable tables."]}),"\n",(0,s.jsxs)(a.p,{children:["The system view ",(0,s.jsx)(a.code,{children:"pg_max_external_files"})," shows how many external table files are permitted per external table. This view lists the available file slots per segment host when using the ",(0,s.jsx)(a.code,{children:"file://"})," protocol. The view is only applicable for the ",(0,s.jsx)(a.code,{children:"file://"})," protocol. For example:"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"SELECT * FROM pg_max_external_files;\n"})}),"\n",(0,s.jsx)(a.h2,{id:"usage-examples",children:"Usage examples"}),"\n",(0,s.jsx)(a.p,{children:"Load multiple files in CSV format with header rows:"}),"\n",(0,s.jsxs)(a.p,{children:["Creates a readable external table, ",(0,s.jsx)(a.code,{children:"ext_expenses"}),", using the ",(0,s.jsx)(a.code,{children:"file"})," protocol. The files are CSV format and have a header row."]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"=# CREATE EXTERNAL TABLE ext_expenses ( name text, \n   date date,  amount float4, category text, desc1 text ) \n   LOCATION ('file://filehost/data/international/*', \n             'file://filehost/data/regional/*',\n             'file://filehost/data/supplement/*.csv')\n   FORMAT 'CSV' (HEADER);\n"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"CREATE EXTERNAL TABLE ext_expenses (\n   name text, date date, amount float4, category text, desc1 text ) \nLOCATION ('file://host1:5432/data/expense/*.csv', \n          'file://host2:5432/data/expense/*.csv', \n          'file://host3:5432/data/expense/*.csv') \nFORMAT 'CSV' (HEADER);\n"})})]})}function h(e={}){const{wrapper:a}={...(0,o.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,a,t)=>{t.d(a,{Z:()=>i,a:()=>l});var s=t(67294);const o={},n=s.createContext(o);function l(e){const a=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),s.createElement(n.Provider,{value:a},e.children)}}}]);