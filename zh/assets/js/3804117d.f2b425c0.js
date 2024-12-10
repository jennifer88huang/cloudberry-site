"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[9560],{7487:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var t=r(85893),n=r(11151);const i={title:"gpaddmirrors"},o="gpaddmirrors",a={id:"sys-utilities/gpaddmirrors",title:"gpaddmirrors",description:"Adds mirror segments to a Cloudberry Database system that was initially configured without mirroring.",source:"@site/docs/sys-utilities/gpaddmirrors.md",sourceDirName:"sys-utilities",slug:"/sys-utilities/gpaddmirrors",permalink:"/zh/docs/sys-utilities/gpaddmirrors",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sys-utilities/gpaddmirrors.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1733824616,formattedLastUpdatedAt:"2024\u5e7412\u670810\u65e5",frontMatter:{title:"gpaddmirrors"},sidebar:"docsbars",previous:{title:"createdb",permalink:"/zh/docs/sys-utilities/createdb"},next:{title:"gpbackup",permalink:"/zh/docs/sys-utilities/gpbackup"}},d={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"Specify Hosts using Hostnames or IP Addresses",id:"specify-hosts-using-hostnames-or-ip-addresses",level:2},{value:"Use Host Systems with Multiple NICs",id:"use-host-systems-with-multiple-nics",level:2},{value:"Examples",id:"examples",level:2},{value:"See also",id:"see-also",level:2}];function c(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"gpaddmirrors",children:"gpaddmirrors"}),"\n",(0,t.jsx)(s.p,{children:"Adds mirror segments to a Cloudberry Database system that was initially configured without mirroring."}),"\n",(0,t.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"gpaddmirrors [-p <port_offset>] [-m <datadir_config_file> [-a]] [-s] \n   [-d <coordinator_data_directory>] [-b <segment_batch_size>] [-B <batch_size>] [-l <logfile_directory>]\n   [-v] [--hba-hostnames <boolean>] \n\ngpaddmirrors -i <mirror_config_file> [-a] [-d <coordinator_data_directory>]\n   [-b <segment_batch_size>] [-B <batch_size>] [-l <logfile_directory>] [-v]\n\ngpaddmirrors -o output_sample_mirror_config> [-s] [-m <datadir_config_file>]\n\ngpaddmirrors -? \n\ngpaddmirrors --version\n"})}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"gpaddmirrors"})," utility configures mirror segment instances for an existing Cloudberry Database system that was initially configured with primary segment instances only. The utility will create the mirror instances and begin the online replication process between the primary and mirror segment instances. Once all mirrors are synchronized with their primaries, your Cloudberry Database system is fully data redundant."]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Important"})," During the online replication process, Cloudberry Database should be in a quiescent state, workloads and other queries should not be running."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["By default, the utility will prompt you for the file system location(s) where it will create the mirror segment data directories. If you do not want to be prompted, you can pass in a file containing the file system locations using the ",(0,t.jsx)(s.code,{children:"-m"})," option."]}),"\n",(0,t.jsx)(s.p,{children:"The mirror locations and ports must be different than your primary segment data locations and ports."}),"\n",(0,t.jsx)(s.p,{children:"The utility creates a unique data directory for each mirror segment instance in the specified location using the predefined naming convention. There must be the same number of file system locations declared for mirror segment instances as for primary segment instances. It is OK to specify the same directory name multiple times if you want your mirror data directories created in the same location, or you can enter a different data location for each mirror. Enter the absolute path. For example:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"Enter mirror segment data directory location 1 of 2 > /gpdb/mirror\nEnter mirror segment data directory location 2 of 2 > /gpdb/mirror\n"})}),"\n",(0,t.jsx)(s.p,{children:"OR"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"Enter mirror segment data directory location 1 of 2 > /gpdb/m1\nEnter mirror segment data directory location 2 of 2 > /gpdb/m2\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Alternatively, you can run the ",(0,t.jsx)(s.code,{children:"gpaddmirrors"})," utility and supply a detailed configuration file using the ",(0,t.jsx)(s.code,{children:"-i"})," option. This is useful if you want your mirror segments on a completely different set of hosts than your primary segments. The format of the mirror configuration file is:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"<contentID>|<address>|<port>|<data_dir>\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Where ",(0,t.jsx)(s.code,{children:"<contentID>"})," is the segment instance content ID, ",(0,t.jsx)(s.code,{children:"<address>"})," is the host name or IP address of the segment host, ",(0,t.jsx)(s.code,{children:"<port>"})," is the communication port, and ",(0,t.jsx)(s.code,{children:"<data_dir>"})," is the segment instance data directory."]}),"\n",(0,t.jsx)(s.p,{children:"For example:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"0|sdw1-1|60000|/gpdata/m1/gp0\n1|sdw1-1|60001|/gpdata/m2/gp1\n"})}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"gp_segment_configuration"})," system catalog table can help you determine your current primary segment configuration so that you can plan your mirror segment configuration. For example, run the following query:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"=# SELECT dbid, content, address as host_address, port, datadir \n\xa0\xa0\xa0FROM gp_segment_configuration\n\xa0\xa0\xa0ORDER BY dbid;\n"})}),"\n",(0,t.jsx)(s.p,{children:"If you are creating mirrors on alternate mirror hosts, the new mirror segment hosts must be pre-installed with the Cloudberry Database software and configured exactly the same as the existing primary segment hosts."}),"\n",(0,t.jsxs)(s.p,{children:["You must make sure that the user who runs ",(0,t.jsx)(s.code,{children:"gpaddmirrors"})," (the ",(0,t.jsx)(s.code,{children:"gpadmin"})," user) has permissions to write to the data directory locations specified. You may want to create these directories on the segment hosts and ",(0,t.jsx)(s.code,{children:"chown"})," them to the appropriate user before running ",(0,t.jsx)(s.code,{children:"gpaddmirrors"}),"."]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note"})," This utility uses secure shell (SSH) connections between systems to perform its tasks. In large Cloudberry Database deployments, cloud deployments, or deployments with a large number of segments per host, this utility may exceed the host's maximum threshold for unauthenticated connections. Consider updating the SSH ",(0,t.jsx)(s.code,{children:"MaxStartups"})," configuration parameter to increase this threshold. For more information about SSH configuration options, refer to the SSH documentation for your Linux distribution."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"options",children:"Options"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-a (do not prompt)"})})}),"\n",(0,t.jsxs)(s.p,{children:["Run in quiet mode - do not prompt for information. Must supply a configuration file with either ",(0,t.jsx)(s.code,{children:"-m"})," or ",(0,t.jsx)(s.code,{children:"-i"})," if this option is used."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-b segment_batch_size"})})}),"\n",(0,t.jsxs)(s.p,{children:["The maximum number of segments per host to operate on in parallel. Valid values are ",(0,t.jsx)(s.code,{children:"1"})," to ",(0,t.jsx)(s.code,{children:"128"}),". If not specified, the utility will start recovering up to 64 segments in parallel on each host."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-B batch_size"})})}),"\n",(0,t.jsxs)(s.p,{children:["The number of hosts to work on in parallel. If not specified, the utility will start working on up to 16 hosts in parallel. Valid values are ",(0,t.jsx)(s.code,{children:"1"})," to ",(0,t.jsx)(s.code,{children:"64"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-d coordinator_data_directory"})})}),"\n",(0,t.jsxs)(s.p,{children:["The coordinator data directory. If not specified, the value set for ",(0,t.jsx)(s.code,{children:"$COORDINATOR_DATA_DIRECTORY"})," will be used."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"--hba-hostnames boolean"})})}),"\n",(0,t.jsxs)(s.p,{children:["Optional. Controls whether this utility uses IP addresses or host names in the ",(0,t.jsx)(s.code,{children:"pg_hba.conf"})," file when updating this file with addresses that can connect to Cloudberry Database. When set to 0 -- the default value -- this utility uses IP addresses when updating this file. When set to 1, this utility uses host names when updating this file. For consistency, use the same value that was specified for ",(0,t.jsx)(s.code,{children:"HBA_HOSTNAMES"})," when the Cloudberry Database system was initialized."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-i mirror_config_file"})})}),"\n",(0,t.jsxs)(s.p,{children:["A configuration file containing one line for each mirror segment you want to create. You must have one mirror segment instance listed for each primary segment in the system. The format of this file is as follows (as per attributes in the ",(0,t.jsx)(s.code,{children:"gp_segment_configuration"})," catalog table):"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"<contentID>|<address>|<port>|<data_dir>\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Where ",(0,t.jsx)(s.code,{children:"<contentID>"})," is the segment instance content ID, ",(0,t.jsx)(s.code,{children:"<address>"})," is the hostname or IP address of the segment host, ",(0,t.jsx)(s.code,{children:"<port>"})," is the communication port, and ",(0,t.jsx)(s.code,{children:"<data_dir>"})," is the segment instance data directory. For information about using a hostname or IP address, see ",(0,t.jsx)(s.a,{href:"#specifying-hosts-using-hostnames-or-ip-addresses",children:"Specifying Hosts using Hostnames or IP Addresses"}),". Also, see ",(0,t.jsx)(s.a,{href:"#using-host-systems-with-multiple-nics",children:"Using Host Systems with Multiple NICs"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-l logfile_directory"})})}),"\n",(0,t.jsxs)(s.p,{children:["The directory to write the log file. Defaults to ",(0,t.jsx)(s.code,{children:"~/gpAdminLogs"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-m datadir_config_file"})})}),"\n",(0,t.jsx)(s.p,{children:"A configuration file containing a list of file system locations where the mirror data directories will be created. If not supplied, the utility prompts you for locations. Each line in the file specifies a mirror data directory location. For example:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"/gpdata/m1\n/gpdata/m2\n/gpdata/m3\n/gpdata/m4\n"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-o output_sample_mirror_config"})})}),"\n",(0,t.jsxs)(s.p,{children:["If you are not sure how to lay out the mirror configuration file used by the ",(0,t.jsx)(s.code,{children:"-i"})," option, you can run ",(0,t.jsx)(s.code,{children:"gpaddmirrors"})," with this option to generate a sample mirror configuration file based on your primary segment configuration. The utility will prompt you for your mirror segment data directory locations (unless you provide these in a file using ",(0,t.jsx)(s.code,{children:"-m"}),"). You can then edit this file to change the host names to alternate mirror hosts if necessary."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-p port_offset"})})}),"\n",(0,t.jsx)(s.p,{children:"Optional. This number is used to calculate the database ports used for mirror segments. The default offset is 1000. Mirror port assignments are calculated as follows:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"primary_port + offset = mirror_database_port\n"})}),"\n",(0,t.jsx)(s.p,{children:"For example, if a primary segment has port 50001, then its mirror will use a database port of 51001, by default."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-s (spread mirrors)"})})}),"\n",(0,t.jsx)(s.p,{children:"Spreads the mirror segments across the available hosts. The default is to group a set of mirror segments together on an alternate host from their primary segment set. Mirror spreading will place each mirror on a different host within the Cloudberry Database array. Spreading is only allowed if there is a sufficient number of hosts in the array (number of hosts is greater than the number of segment instances per host)."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-v (verbose)"})})}),"\n",(0,t.jsx)(s.p,{children:"Sets logging output to verbose."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"--version (show utility version)"})})}),"\n",(0,t.jsx)(s.p,{children:"Displays the version of this utility."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-? (help)"})})}),"\n",(0,t.jsx)(s.p,{children:"Displays the online help."}),"\n",(0,t.jsx)(s.h2,{id:"specify-hosts-using-hostnames-or-ip-addresses",children:"Specify Hosts using Hostnames or IP Addresses"}),"\n",(0,t.jsxs)(s.p,{children:["When specifying a mirroring configuration using the ",(0,t.jsx)(s.code,{children:"gpaddmirrors"})," option ",(0,t.jsx)(s.code,{children:"-i"}),", you can specify either a hostname or an IP address for the ",(0,t.jsx)(s.code,{children:"<address>"})," value."]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["If you specify a hostname, the resolution of the hostname to an IP address should be done locally for security. For example, you should use entries in a local ",(0,t.jsx)(s.code,{children:"/etc/hosts"})," file to map the hostname to an IP address. The resolution of a hostname to an IP address should not be performed by an external service such as a public DNS server. You must stop the Cloudberry system before you change the mapping of a hostname to a different IP address."]}),"\n",(0,t.jsxs)(s.li,{children:["If you specify an IP address, the address should not be changed after the initial configuration. When segment mirroring is enabled, replication from the primary to the mirror segment will fail if the IP address changes from the configured value. For this reason, you should use a hostname when enabling mirroring using the ",(0,t.jsx)(s.code,{children:"-i"})," option unless you have a specific requirement to use IP addresses."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["When enabling a mirroring configuration that adds hosts to the Cloudberry system, ",(0,t.jsx)(s.code,{children:"gpaddmirrors"})," populates the ",(0,t.jsx)(s.code,{children:"gp_segment_configuration"})," catalog table with the mirror segment instance information. Cloudberry Database uses the address value of the ",(0,t.jsx)(s.code,{children:"gp_segment_configuration"})," catalog table when looking up host systems for Cloudberry interconnect (internal) communication between the coordinator and segment instances and between segment instances, and for other internal communication."]}),"\n",(0,t.jsx)(s.h2,{id:"use-host-systems-with-multiple-nics",children:"Use Host Systems with Multiple NICs"}),"\n",(0,t.jsx)(s.p,{children:"If hosts systems are configured with multiple NICs, you can initialize a Cloudberry Database system to use each NIC as a Cloudberry host system. You must ensure that the host systems are configured with sufficient resources to support all the segment instances being added to the host. Also, if you enable segment mirroring, you must ensure that the Cloudberry system configuration supports failover if a host system fails."}),"\n",(0,t.jsxs)(s.p,{children:["For example, this is a segment instance configuration for a simple Cloudberry system. The segment host ",(0,t.jsx)(s.code,{children:"gp7c"})," is configured with two NICs, ",(0,t.jsx)(s.code,{children:"gp7c-1"})," and ",(0,t.jsx)(s.code,{children:"gp7c-2"}),", where the Cloudberry Database system uses ",(0,t.jsx)(s.code,{children:"gp7c-1"})," for the coordinator segment and ",(0,t.jsx)(s.code,{children:"gp7c-2"})," for segment instances."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"select content, role, port, hostname, address from gp_segment_configuration ;\n\n content | role | port  | hostname | address\n---------+------+-------+----------+----------\n      -1 | p    |  5432 | gp7c     | gp7c-1\n       0 | p    | 40000 | gp7c     | gp7c-2\n       0 | m    | 50000 | gp7s     | gp7s\n       1 | p    | 40000 | gp7s     | gp7s\n       1 | m    | 50000 | gp7c     | gp7c-2\n(5 rows) \n"})}),"\n",(0,t.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(s.p,{children:"Add mirroring to an existing Cloudberry Database system using the same set of hosts as your primary data. Calculate the mirror database ports by adding 100 to the current primary segment port numbers:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"$ gpaddmirrors -p 100\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Generate a sample mirror configuration file with the ",(0,t.jsx)(s.code,{children:"-o"})," option to use with ",(0,t.jsx)(s.code,{children:"gpaddmirrors -i"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"$ gpaddmirrors -o /home/gpadmin/sample_mirror_config\n"})}),"\n",(0,t.jsx)(s.p,{children:"Add mirroring to an existing Cloudberry Database system using a different set of hosts from your primary data:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"$ gpaddmirrors -i mirror_config_file\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Where ",(0,t.jsx)(s.code,{children:"mirror_config_file"})," looks something like this:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"0|sdw1-1|52001|/gpdata/m1/gp0\n1|sdw1-2|52002|/gpdata/m2/gp1\n2|sdw2-1|52001|/gpdata/m1/gp2\n3|sdw2-2|52002|/gpdata/m2/gp3\n"})}),"\n",(0,t.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/zh/docs/sys-utilities/gpinitsystem",children:"gpinitsystem"}),", ",(0,t.jsx)(s.a,{href:"/zh/docs/sys-utilities/gpinitstandby",children:"gpinitstandby"}),", ",(0,t.jsx)(s.a,{href:"/zh/docs/sys-utilities/gpactivatestandby",children:"gpactivatestandby"})]})]})}function h(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11151:(e,s,r)=>{r.d(s,{Z:()=>a,a:()=>o});var t=r(67294);const n={},i=t.createContext(n);function o(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);