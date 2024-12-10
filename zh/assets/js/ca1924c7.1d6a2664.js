"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[1182],{70847:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=s(85893),t=s(11151);const i={title:"gprecoverseg"},o="gprecoverseg",a={id:"sys-utilities/gprecoverseg",title:"gprecoverseg",description:"Recovers a primary or mirror segment instance that has been marked as down (if mirroring is enabled).",source:"@site/docs/sys-utilities/gprecoverseg.md",sourceDirName:"sys-utilities",slug:"/sys-utilities/gprecoverseg",permalink:"/zh/docs/sys-utilities/gprecoverseg",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sys-utilities/gprecoverseg.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1733824616,formattedLastUpdatedAt:"2024\u5e7412\u670810\u65e5",frontMatter:{title:"gprecoverseg"},sidebar:"docsbars",previous:{title:"gpreload",permalink:"/zh/docs/sys-utilities/gpreload"},next:{title:"gpshrink",permalink:"/zh/docs/sys-utilities/gpshrink"}},l={},c=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:3},{value:"Obtain a Sample File**",id:"obtain-a-sample-file",level:3},{value:"Examples",id:"examples-1",level:2},{value:"See also",id:"see-also",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"gprecoverseg",children:"gprecoverseg"}),"\n",(0,r.jsx)(n.p,{children:"Recovers a primary or mirror segment instance that has been marked as down (if mirroring is enabled)."}),"\n",(0,r.jsx)(n.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"gprecoverseg [[-p <new_recover_host>[,...]] | -i <recover_config_file>] [-d <coordinator_data_directory>] \n             [-b <segment_batch_size>] [-B <batch_size>] [-F [-s]] [-a] [-q] [--differential]\n\t           [--hba-hostnames <boolean>] \n             [--no-progress] [-l <logfile_directory>]\n\ngprecoverseg -r [--replay-lag <replay_lag>] [--disable-replay-lag]\n\ngprecoverseg -o <output_recover_config_file>\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0  [-p <new_recover_host>[,...]]\n\ngprecoverseg -? | -h | --help\n        \ngprecoverseg -v | --verbose\n\ngprecoverseg --version\n"})}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["In a system with mirrors enabled, the ",(0,r.jsx)(n.code,{children:"gprecoverseg"})," utility reactivates a failed segment instance and identifies the changed database files that require resynchronization. Once ",(0,r.jsx)(n.code,{children:"gprecoverseg"})," completes this process, the system goes into ",(0,r.jsx)(n.code,{children:"Not in Sync"})," mode until the recovered segment is brought up to date. The system is online and fully operational during resynchronization."]}),"\n",(0,r.jsxs)(n.p,{children:["During an incremental recovery (the ",(0,r.jsx)(n.code,{children:"-F"})," option is not specified), if ",(0,r.jsx)(n.code,{children:"gprecoverseg"})," detects a segment instance with mirroring deactivated in a system with mirrors activated, the utility reports that mirroring is deactivated for the segment, does not attempt to recover that segment instance, and continues the recovery process."]}),"\n",(0,r.jsxs)(n.p,{children:["A segment instance can fail for several reasons, such as a host failure, network failure, or disk failure. When a segment instance fails, its status is marked as ",(0,r.jsx)(n.code,{children:"d"})," (down) in the Cloudberry Database system catalog, and its mirror is activated in ",(0,r.jsx)(n.code,{children:"Not in Sync"})," mode. In order to bring the failed segment instance back into operation again, you must first correct the problem that made it fail in the first place, and then recover the segment instance in Cloudberry Database using ",(0,r.jsx)(n.code,{children:"gprecoverseg"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Segment recovery using ",(0,r.jsx)(n.code,{children:"gprecoverseg"})," requires that you have an active mirror to recover from. For systems that do not have mirroring enabled, or in the event of a double fault (a primary and mirror pair both down at the same time) \u2014 you must take manual steps to recover the failed segment instances and then perform a system restart to bring the segments back online. For example, this command restarts a system."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"gpstop -r\n"})}),"\n",(0,r.jsxs)(n.p,{children:["By default, a failed segment is recovered in place, meaning that the system brings the segment back online on the same host and data directory location on which it was originally configured. In this case, use the following format for the recovery configuration file (using ",(0,r.jsx)(n.code,{children:"-i"}),"). Note that ",(0,r.jsx)(n.code,{children:"failed_host_name"})," is an optional parameter."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"<failed_host_name>|<failed_host_address>|<port>|<data_directory> \n"})}),"\n",(0,r.jsxs)(n.p,{children:["In some cases, this may not be possible (for example, if a host was physically damaged and cannot be recovered). In this situation, ",(0,r.jsx)(n.code,{children:"gprecoverseg"})," allows you to recover failed segments to a completely new host (using ",(0,r.jsx)(n.code,{children:"-p"}),"), on an alternative data directory location on your remaining live segment hosts (using ",(0,r.jsx)(n.code,{children:"-s"}),"), or by supplying a recovery configuration file (using ",(0,r.jsx)(n.code,{children:"-i"}),") in the following format. The word ",(0,r.jsx)(n.code,{children:"<SPACE>"})," indicates the location of a required space. Do not add additional spaces. The parameter ",(0,r.jsx)(n.code,{children:"failed_host_name"})," is optional."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"<failed_host_name>|<failed_host_address>|<port>|<data_directory><SPACE><recovery_host_name>|<recovery_host_address>|<port>|<data_directory>\n"})}),"\n",(0,r.jsxs)(n.p,{children:["See the ",(0,r.jsx)(n.code,{children:"-i"})," option below for details and examples of a recovery configuration file."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"gp_segment_configuration"})," system catalog table can help you determine your current segment configuration so that you can plan your mirror recovery configuration. For example, run the following query:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"=# SELECT dbid, content, address, port, datadir \n\xa0\xa0\xa0FROM gp_segment_configuration\n\xa0\xa0\xa0ORDER BY dbid;\n"})}),"\n",(0,r.jsx)(n.p,{children:"The new recovery segment host must be pre-installed with the Cloudberry Database software and configured exactly the same as the existing segment hosts. A spare data directory location must exist on all currently configured segment hosts and have enough disk space to accommodate the failed segments."}),"\n",(0,r.jsxs)(n.p,{children:["The recovery process marks the segment as up again in the Cloudberry Database system catalog, and then initiates the resynchronization process to bring the transactional state of the segment up-to-date with the latest changes. The system is online and available during ",(0,r.jsx)(n.code,{children:"Not in Sync"})," mode."]}),"\n",(0,r.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"-a (do not prompt)"})})}),"\n",(0,r.jsx)(n.p,{children:"Do not prompt the user for confirmation."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"-b segment_batch_size"})})}),"\n",(0,r.jsxs)(n.p,{children:["The maximum number of segments per host to operate on in parallel. Valid values are ",(0,r.jsx)(n.code,{children:"1"})," to ",(0,r.jsx)(n.code,{children:"128"}),". If not specified, the utility will start recovering up to 64 segments in parallel on each host."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"-B batch_size"})})}),"\n",(0,r.jsxs)(n.p,{children:["The number of hosts to work on in parallel. If not specified, the utility will start working on up to 16 hosts in parallel. Valid values are ",(0,r.jsx)(n.code,{children:"1"})," to ",(0,r.jsx)(n.code,{children:"64"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"-d coordinator_data_directory"})})}),"\n",(0,r.jsxs)(n.p,{children:["Optional. The coordinator host data directory. If not specified, the value set for ",(0,r.jsx)(n.code,{children:"$COORDINATOR_DATA_DIRECTORY"})," will be used."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"-F (full recovery)"})})}),"\n",(0,r.jsx)(n.p,{children:"Optional. Perform a full copy of the active segment instance in order to recover the failed segment, rather than the default behavior of copying only the changes that occurred while the segment was down."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Caution"}),"\nA full recovery deletes the data directory of the down segment instance before copying the data from the active (current primary) segment instance. Before performing a full recovery, ensure that the segment failure did not cause data corruption and that any host segment disk issues have been fixed."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Also, for a full recovery, the utility does not restore custom files that are stored in the segment instance data directory even if the custom files are also in the active segment instance. You must restore the custom files manually. For example, when using the ",(0,r.jsx)(n.code,{children:"gpfdists"})," protocol (",(0,r.jsx)(n.code,{children:"gpfdist"})," with SSL encryption) to manage external data, client certificate files are required in the segment instance ",(0,r.jsx)(n.code,{children:"$PGDATA/gpfdists"})," directory. These files are not restored."]}),"\n",(0,r.jsxs)(n.p,{children:["Use the ",(0,r.jsx)(n.code,{children:"-s"})," option to output a new line once per second for each segment. Alternatively, use the ",(0,r.jsx)(n.code,{children:"--no-progress"})," option to completely deactivate progress reports. To avoid copying the entire contents of the data directory during a full recovery after a previous full recovery failed, use ",(0,r.jsx)(n.code,{children:"gprecoverseg"}),"s, speed up the amount of time full recovery takes, use the ",(0,r.jsx)(n.code,{children:"--differential"})," option to skip recovery of files and directories that have not changed since the last time ",(0,r.jsx)(n.code,{children:"gprecoverseg"})," ran."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"--differential (Differential recovery)"})})}),"\n",(0,r.jsx)(n.p,{children:"Optional. Perform a differential copy of the active segment instance in order to recover the failed segment. The default is to only copy over the incremental changes that occurred while the segment was down."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"--hba-hostnames boolean"})})}),"\n",(0,r.jsxs)(n.p,{children:["Optional. Controls whether this utility uses IP addresses or host names in the ",(0,r.jsx)(n.code,{children:"pg_hba.conf"})," file when updating this file with addresses that can connect to Cloudberry Database. When set to 0 -- the default value -- this utility uses IP addresses when updating this file. When set to 1, this utility uses host names when updating this file. For consistency, use the same value that was specified for ",(0,r.jsx)(n.code,{children:"HBA_HOSTNAMES"})," when the Cloudberry Database system was initialized."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"-i recover_config_file"})})}),"\n",(0,r.jsx)(n.p,{children:"Specifies the name of a file with the details about failed segments to recover."}),"\n",(0,r.jsx)(n.p,{children:"Each line in the config file specifies a segment to recover. This line can have one of two formats. In the event of in-place (incremental) recovery, enter one group of pipe-delimited fields in the line. For example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"failedAddress|failedPort|failedDataDirectory\n"})}),"\n",(0,r.jsx)(n.p,{children:"or"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"failedHostname|failedAddress|failedPort|failedDataDirectory\n"})}),"\n",(0,r.jsxs)(n.p,{children:["For recovery to a new location, enter two groups of fields separated by a space in the line. The required space is indicated by ",(0,r.jsx)(n.code,{children:"<SPACE>"}),". Do not add additional spaces."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"failedAddress|failedPort|failedDataDirectory<SPACE>newAddress|newPort|newDataDirectory\n"})}),"\n",(0,r.jsx)(n.p,{children:"or"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"failedHostname|failedAddress|failedPort|failedDataDirectory<SPACE>newHostname|newAddress|newPort|newDataDirectory\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note"})," Lines beginning with ",(0,r.jsx)(n.code,{children:"#"})," are treated as comments and ignored."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"In-place (incremental) recovery of a single mirror"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sdw1-1|50001|/data1/mirror/gpseg16\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Recovery of a single mirror to a new host"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sdw1-1|50001|/data1/mirror/gpseg16<SPACE>sdw4-1|50001|/data1/recover1/gpseg16\n"})}),"\n",(0,r.jsx)(n.h3,{id:"obtain-a-sample-file",children:"Obtain a Sample File**"}),"\n",(0,r.jsxs)(n.p,{children:["You can use the ",(0,r.jsx)(n.code,{children:"-o"})," option to output a sample recovery configuration file to use as a starting point. The output file lists the currently invalid segments and their default recovery location. This file format can be used with the ",(0,r.jsx)(n.code,{children:"-i"})," option for in-place (incremental) recovery."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"-l logfile_directory"})})}),"\n",(0,r.jsxs)(n.p,{children:["The directory to write the log file. Defaults to ",(0,r.jsx)(n.code,{children:"~/gpAdminLogs"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"-o output_recover_config_file"})})}),"\n",(0,r.jsx)(n.p,{children:"Specifies a file name and location to output a sample recovery configuration file. This file can be edited to supply alternate recovery locations if needed. The following example outputs the default recovery configuration file:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ gprecoverseg -o /home/gpadmin/recover_config_file\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"-p new_recover_host[,...]"})})}),"\n",(0,r.jsx)(n.p,{children:"Specifies a new host outside of the currently configured Cloudberry Database array on which to recover invalid segments."}),"\n",(0,r.jsxs)(n.p,{children:["The new host must have the Cloudberry Database software installed and configured, and have the same hardware and OS configuration as the current segment hosts (same OS version, locales, ",(0,r.jsx)(n.code,{children:"gpadmin"})," user account, data directory locations created, ssh keys exchanged, number of network interfaces, network interface naming convention, and so on). Specifically, the Cloudberry Database binaries must be installed, the new host must be able to connect password-less with all segments including the Cloudberry coordinator, and any other Cloudberry Database specific OS configuration parameters must be applied."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note"})," In the case of multiple failed segment hosts, you can specify the hosts to recover with a comma-separated list. However, it is strongly recommended to recover one host at a time. If you must recover more than one host at a time, then it is critical to ensure that a double fault scenario does not occur, in which both the segment primary and corresponding mirror are offline."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"-q (no screen output)"})})}),"\n",(0,r.jsx)(n.p,{children:"Run in quiet mode. Command output is not displayed on the screen, but is still written to the log file."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"-r (rebalance segments)"})})}),"\n",(0,r.jsxs)(n.p,{children:["After a segment recovery, segment instances may not be returned to the preferred role that they were given at system initialization time. This can leave the system in a potentially unbalanced state, as some segment hosts may have more active segments than is optimal for top system performance. This option rebalances primary and mirror segments by returning them to their preferred roles. All segments must be valid and resynchronized before running ",(0,r.jsx)(n.code,{children:"gprecoverseg -r"}),". If there are any in progress queries, they will be cancelled and rolled back."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"--replay-lag"})})}),"\n",(0,r.jsx)(n.p,{children:"Replay lag(in GBs) allowed on mirror when rebalancing the segments. Default is 10 GB. If the replay_lag (flush_lsn-replay_lsn) is more than the value provided with this option then rebalance will be aborted."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"--disable-replay-lag"})})}),"\n",(0,r.jsx)(n.p,{children:"Disable replay lag check when rebalancing segments"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"-s (sequential progress)"})})}),"\n",(0,r.jsxs)(n.p,{children:["Show ",(0,r.jsx)(n.code,{children:"pg_basebackup"})," or ",(0,r.jsx)(n.code,{children:"pg_rewind"})," progress sequentially instead of in-place. Useful when writing to a file, or if a tty does not support escape sequences. The default is to show progress in-place."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"--no-progress"})})}),"\n",(0,r.jsxs)(n.p,{children:["Suppresses progress reports from the ",(0,r.jsx)(n.code,{children:"pg_basebackup"}),", ",(0,r.jsx)(n.code,{children:"pg_rewind"}),", or ",(0,r.jsx)(n.code,{children:"rsync"})," utility. The default is to display progress."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"--differential"})})}),"\n",(0,r.jsxs)(n.p,{children:["Optional. During a full recovery, copy from the primary segment to the mirror segment only the files and directories that changed since the segment failed. You may use the ",(0,r.jsx)(n.code,{children:"--differential"})," option for in-place full recovery only."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note"}),"\nThe ",(0,r.jsx)(n.code,{children:"--differential"})," option cannot be combined with any of the following ",(0,r.jsx)(n.code,{children:"gprecoverseg"})," options: ",(0,r.jsx)(n.code,{children:"-i"}),", ",(0,r.jsx)(n.code,{children:"-o"}),", ",(0,r.jsx)(n.code,{children:"-F"}),", or ",(0,r.jsx)(n.code,{children:"-p"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"-v | --verbose"})})}),"\n",(0,r.jsx)(n.p,{children:"Sets logging output to verbose."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"--version"})})}),"\n",(0,r.jsx)(n.p,{children:"Displays the version of this utility."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"-? | -h | --help"})})}),"\n",(0,r.jsx)(n.p,{children:"Displays the online help."}),"\n",(0,r.jsx)(n.h2,{id:"examples-1",children:"Examples"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 1: Recover Failed Segments in Place"})}),"\n",(0,r.jsx)(n.p,{children:"Recover any failed segment instances in place:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ gprecoverseg\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 2: Rebalance Failed Segments If Not in Preferred Roles"})}),"\n",(0,r.jsxs)(n.p,{children:["First, verify that all segments are up and running, reysynchronization has completed, and there are segments ",(0,r.jsx)(n.strong,{children:"not"})," in preferred roles:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ gpstate -e\n"})}),"\n",(0,r.jsx)(n.p,{children:"Then, if necessary, rebalance the segments:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ gprecoverseg -r\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 3: Recover Failed Segments to a Separate Host"})}),"\n",(0,r.jsx)(n.p,{children:"Recover any failed segment instances to a newly configured new segment host:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ gprecoverseg -i <recover_config_file>\n"})}),"\n",(0,r.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/zh/docs/sys-utilities/gpstart",children:"gpstart"}),", ",(0,r.jsx)(n.a,{href:"/zh/docs/sys-utilities/gpstop",children:"gpstop"})]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>o});var r=s(67294);const t={},i=r.createContext(t);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);