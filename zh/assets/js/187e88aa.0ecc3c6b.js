"use strict";(self.webpackChunkCloudberry_Database_website=self.webpackChunkCloudberry_Database_website||[]).push([[6676],{59215:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var i=n(85893),s=n(11151);const a={title:"NOTIFY"},o="NOTIFY",r={id:"sql-stmts/notify",title:"NOTIFY",description:"Generates a notification.",source:"@site/docs/sql-stmts/notify.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/notify",permalink:"/zh/docs/sql-stmts/notify",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/notify.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1731576389,formattedLastUpdatedAt:"2024\u5e7411\u670814\u65e5",frontMatter:{title:"NOTIFY"},sidebar:"docsbars",previous:{title:"MOVE",permalink:"/zh/docs/sql-stmts/move"},next:{title:"PREPARE",permalink:"/zh/docs/sql-stmts/prepare"}},c={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Pg_notify",id:"pg_notify",level:3},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"notify",children:"NOTIFY"}),"\n",(0,i.jsx)(t.p,{children:"Generates a notification."}),"\n",(0,i.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"NOTIFY <channel> [ , <payload> ]\n"})}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"NOTIFY"}),' command sends a notification event together with an optional "payload" string to each client application that has previously executed ',(0,i.jsx)(t.code,{children:"LISTEN <channel>"})," for the specified channel name in the current database. Notifications are visible to all users."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"NOTIFY"})," provides a simple interprocess communication mechanism for a collection of processes accessing the same Cloudberry Database. A payload string can be sent along with the notification, and higher-level mechanisms for passing structured data can be built by using tables in the database to pass additional data from notifier to listener(s)."]}),"\n",(0,i.jsx)(t.p,{children:"The information passed to the client for a notification event includes the notification channel name, the notifying session's server process PID, and the payload string, which is an empty string if it has not been specified."}),"\n",(0,i.jsxs)(t.p,{children:['It is up to the database designer to define the channel names that will be used in a given database and what each one means. Commonly, the channel name is the same as the name of some table in the database, and the notify event essentially means, "I changed this table, take a look at it to see what\'s new". But no such association is enforced by the ',(0,i.jsx)(t.code,{children:"NOTIFY"})," and ",(0,i.jsx)(t.code,{children:"LISTEN"})," commands. For example, a database designer could use several different channel names to signal different sorts of changes to a single table. Alternatively, the payload string could be used to differentiate various cases."]}),"\n",(0,i.jsxs)(t.p,{children:["When ",(0,i.jsx)(t.code,{children:"NOTIFY"})," is used to signal the occurrence of changes to a particular table, a useful programming technique is to put the ",(0,i.jsx)(t.code,{children:"NOTIFY"})," in a statement trigger that is triggered by table updates. In this way, notification happens automatically when the table is changed, and the application programmer cannot accidentally forget to do it."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"NOTIFY"})," interacts with SQL transactions in some important ways. Firstly, if a ",(0,i.jsx)(t.code,{children:"NOTIFY"})," is executed inside a transaction, the notify events are not delivered until and unless the transaction is committed. This is appropriate, since if the transaction is aborted, all the commands within it have had no effect, including ",(0,i.jsx)(t.code,{children:"NOTIFY"}),'. But it can be disconcerting if one is expecting the notification events to be delivered immediately. Secondly, if a listening session receives a notification signal while it is within a transaction, the notification event will not be delivered to its connected client until just after the transaction is completed (either committed or aborted). Again, the reasoning is that if a notification were delivered within a transaction that was later aborted, one would want the notification to be undone somehow \u2014 but the server cannot "take back" a notification once it has sent it to the client. So notification events are only delivered between transactions. The upshot of this is that applications using ',(0,i.jsx)(t.code,{children:"NOTIFY"})," for real-time signaling should try to keep their transactions short."]}),"\n",(0,i.jsxs)(t.p,{children:["If the same channel name is signaled multiple times from the same transaction with identical payload strings, the database server can decide to deliver a single notification only. On the other hand, Cloudberry Database will always deliver notifications with distinct payload strings as distinct notifications. Similarly, notifications from different transactions will never get folded into one notification. Except for dropping later instances of duplicate notifications, ",(0,i.jsx)(t.code,{children:"NOTIFY"})," guarantees that notifications from the same transaction get delivered in the order they were sent. It is also guaranteed that messages from different transactions are delivered in the order in which the transactions committed."]}),"\n",(0,i.jsxs)(t.p,{children:["It is common for a client that executes ",(0,i.jsx)(t.code,{children:"NOTIFY"})," to be listening on the same notification channel itself. In that case it will get back a notification event, just like all the other listening sessions. Depending on the application logic, this could result in useless work, for example, reading a database table to find the same updates that that session just wrote out. It is possible to avoid such extra work by noticing whether the notifying session's server process PID (supplied in the notification event message) is the same as one's own session's PID (available from ",(0,i.jsx)(t.code,{children:"libpq"}),"). When they are the same, the notification event is one's own work bouncing back, and can be ignored."]}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"channel"})})}),"\n",(0,i.jsx)(t.p,{children:"The name of a notification channel (any identifier)."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"payload"})})}),"\n",(0,i.jsx)(t.p,{children:'The "payload" string to be communicated along with the notification. This must be specified as a simple string literal. In the default configuration it must be shorter than 8000 bytes. (If binary data or large amounts of information need to be communicated, it\'s best to put it in a database table and send the key of the record.)'}),"\n",(0,i.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsxs)(t.p,{children:["There is a queue that holds notifications that have been sent but not yet processed by all listening sessions. If this queue becomes full, transactions calling ",(0,i.jsx)(t.code,{children:"NOTIFY"})," will fail at commit. The queue is quite large (8GB in a standard installation) and should be sufficiently sized for almost every use case. However, no cleanup can take place if a session executes ",(0,i.jsx)(t.code,{children:"LISTEN"})," and then enters a transaction for a very long time. Once the queue is half full you will see warnings in the log file pointing you to the session that is preventing cleanup. In this case you should make sure that this session ends its current transaction so that cleanup can proceed."]}),"\n",(0,i.jsxs)(t.p,{children:["The function ",(0,i.jsx)(t.code,{children:"pg_notification_queue_usage()"})," returns the fraction of the queue that is currently occupied by pending notifications."]}),"\n",(0,i.jsxs)(t.p,{children:["A transaction that has executed ",(0,i.jsx)(t.code,{children:"NOTIFY"})," cannot be prepared for two-phase commit."]}),"\n",(0,i.jsx)(t.h3,{id:"pg_notify",children:"Pg_notify"}),"\n",(0,i.jsxs)(t.p,{children:["To send a notification you can also use the function ",(0,i.jsx)(t.code,{children:"pg_notify(text, text)"}),". The function takes the channel name as the first argument and the payload as the second. The function is much easier to use than the ",(0,i.jsx)(t.code,{children:"NOTIFY"})," command if you need to work with non-constant channel names and payloads."]}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(t.p,{children:["Configure and execute a listen/notify sequence from ",(0,i.jsx)(t.code,{children:"psql"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"LISTEN virtual;\nNOTIFY virtual;\nAsynchronous notification \"virtual\" received from server process with PID 8448.\nNOTIFY virtual, 'This is the payload';\nAsynchronous notification \"virtual\" with payload \"This is the payload\" received from server process with PID 8448.\n\nLISTEN foo;\nSELECT pg_notify('fo' || 'o', 'pay' || 'load');\nAsynchronous notification \"foo\" with payload \"payload\" received from server process with PID 14728.\n"})}),"\n",(0,i.jsx)(t.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,i.jsxs)(t.p,{children:["There is no ",(0,i.jsx)(t.code,{children:"NOTIFY"})," statement in the SQL standard."]}),"\n",(0,i.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/zh/docs/sql-stmts/listen",children:"LISTEN"}),", ",(0,i.jsx)(t.a,{href:"/zh/docs/sql-stmts/unlisten",children:"UNLISTEN"})]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var i=n(67294);const s={},a=i.createContext(s);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);