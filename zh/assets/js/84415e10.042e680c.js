"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[1526],{46105:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=i(85893),t=i(11151);const a={title:"CREATE INDEX"},r="CREATE INDEX",o={id:"sql-stmts/create-index",title:"CREATE INDEX",description:"Defines a new index.",source:"@site/docs/sql-stmts/create-index.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/create-index",permalink:"/zh/docs/sql-stmts/create-index",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/create-index.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1732523543,formattedLastUpdatedAt:"2024\u5e7411\u670825\u65e5",frontMatter:{title:"CREATE INDEX"},sidebar:"docsbars",previous:{title:"CREATE GROUP",permalink:"/zh/docs/sql-stmts/create-group"},next:{title:"CREATE LANGUAGE",permalink:"/zh/docs/sql-stmts/create-language"}},d={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Index storage parameters",id:"index-storage-parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"create-index",children:"CREATE INDEX"}),"\n",(0,s.jsx)(n.p,{children:"Defines a new index."}),"\n",(0,s.jsx)(n.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE [UNIQUE] INDEX [[IF NOT EXISTS] <name>] ON [ONLY] <table_name> [USING <method>]\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0( {<column_name> | (<expression>)} [COLLATE <collation>] [<opclass>] [ ASC | DESC ] [ NULLS { FIRST | LAST } ] [, ...] )\n       [ INCLUDE ( column_name [, ...] ) ]\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0[ WITH ( <storage_parameter> [= <value>] [, ... ] ) ]\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0[ TABLESPACE <tablespace_name> ]\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0[ WHERE <predicate> ]\n"})}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"CREATE INDEX"})," constructs an index on the specified column(s) of the specified table or materialized view. Indexes are primarily used to enhance database performance (though inappropriate use can result in slower performance)."]}),"\n",(0,s.jsx)(n.p,{children:"The key field(s) for the index are specified as column names, or alternatively as expressions written in parentheses. Multiple fields can be specified if the index method supports multicolumn indexes."}),"\n",(0,s.jsxs)(n.p,{children:["An index field can be an expression computed from the values of one or more columns of the table row. This feature can be used to obtain fast access to data based on some transformation of the basic data. For example, an index computed on ",(0,s.jsx)(n.code,{children:"upper(col)"})," would allow the clause ",(0,s.jsx)(n.code,{children:"WHERE upper(col) = 'JIM'"})," to use an index."]}),"\n",(0,s.jsx)(n.p,{children:"Cloudberry Database provides the index methods B-tree, hash, bitmap, GiST, SP-GiST, GIN, and BRIN. Users can also define their own index methods, but that is fairly complicated."}),"\n",(0,s.jsxs)(n.p,{children:["When the ",(0,s.jsx)(n.code,{children:"WHERE"})," clause is present, a partial index is created. A partial index is an index that contains entries for only a portion of a table, usually a portion that is more useful for indexing than the rest of the table. For example, if you have a table that contains both billed and unbilled orders where the unbilled orders take up a small fraction of the total table and yet is most often selected, you can improve performance by creating an index on just that portion. Another possible application is to use ",(0,s.jsx)(n.code,{children:"WHERE"})," with ",(0,s.jsx)(n.code,{children:"UNIQUE"})," to enforce uniqueness over a subset of a table. See ",(0,s.jsx)(n.a,{href:"https://www.postgresql.org/docs/14/indexes-partial.html",children:"Partial Indexes"})," in the PostgreSQL documentation for more information."]}),"\n",(0,s.jsxs)(n.p,{children:["The expression used in the ",(0,s.jsx)(n.code,{children:"WHERE"})," clause may refer only to columns of the underlying table, but it can use all columns, not just the ones being indexed. Subqueries and aggregate expressions are also forbidden in ",(0,s.jsx)(n.code,{children:"WHERE"}),". The same restrictions apply to index fields that are expressions."]}),"\n",(0,s.jsxs)(n.p,{children:["All functions and operators used in an index definition must be immutable. Their results must depend only on their arguments and never on any outside influence (such as the contents of another table or the current time). This restriction ensures that the behavior of the index is well-defined. To use a user-defined function in an index expression or ",(0,s.jsx)(n.code,{children:"WHERE"})," clause, remember to mark the function ",(0,s.jsx)(n.code,{children:"IMMUTABLE"})," when you create it."]}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"UNIQUE"})})}),"\n",(0,s.jsx)(n.p,{children:"Checks for duplicate values in the table when the index is created (if data already exist) and each time data is added. Duplicate entries will generate an error. Unique indexes only apply to B-tree indexes."}),"\n",(0,s.jsxs)(n.p,{children:["Additional restrictions apply when unique indexes are applied to partitioned tables; see ",(0,s.jsx)(n.a,{href:"/zh/docs/sql-stmts/create-table",children:(0,s.jsx)(n.code,{children:"CREATE TABLE"})}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"IF NOT EXISTS"})})}),"\n",(0,s.jsxs)(n.p,{children:["Do not throw an error if a relation with the same name already exists. A notice is issued in this case. Note that there is no guarantee that the existing index is anything like the one that would have been created. Index name is required when ",(0,s.jsx)(n.code,{children:"IF NOT EXISTS"})," is specified."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"INCLUDE"})})}),"\n",(0,s.jsxs)(n.p,{children:["The optional ",(0,s.jsx)(n.code,{children:"INCLUDE"})," clause specifies a list of columns which will be included in the index as non-key columns. A non-key column cannot be used in an index scan search qualification, and it is disregarded for purposes of any uniqueness or exclusion constraint enforced by the index. However, an index-only scan can return the contents of non-key columns without having to visit the index's table, since they are available directly from the index entry. Thus, addition of non-key columns allows index-only scans to be used for queries that otherwise could not use them."]}),"\n",(0,s.jsx)(n.p,{children:"Be conservative about adding non-key columns to an index, especially wide columns. If an index tuple exceeds the maximum size allowed for the index type, data insertion fails. In any case, non-key columns duplicate data from the index's table and bloat the size of the index, thus potentially slowing searches."}),"\n",(0,s.jsxs)(n.p,{children:["Columns listed in the ",(0,s.jsx)(n.code,{children:"INCLUDE"})," clause don't need appropriate operator classes; the clause can include columns whose data types don't have operator classes defined for a given access method."]}),"\n",(0,s.jsx)(n.p,{children:"Expressions are not supported as included columns since they cannot be used in index-only scans."}),"\n",(0,s.jsxs)(n.p,{children:["Currently, the B-tree and the GiST index access methods support ",(0,s.jsx)(n.code,{children:"INCLUDE"}),". In B-tree and the GiST indexes, the values of columns listed in the ",(0,s.jsx)(n.code,{children:"INCLUDE"})," clause are included in leaf tuples which correspond to heap tuples, but are not included in upper-level index entries used for tree navigation."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"name"})})}),"\n",(0,s.jsx)(n.p,{children:"The name of the index to be created. The index is always created in the same schema as its parent table. If the name is omitted, Cloudberry Database chooses a suitable name based on the parent table's name and the indexed column name(s)."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"ONLY"})})}),"\n",(0,s.jsx)(n.p,{children:"Indicates not to recurse creating indexes on partitions, if the table is partitioned. The default is to recurse."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"table_name"})})}),"\n",(0,s.jsx)(n.p,{children:"The name (optionally schema-qualified) of the table to be indexed."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"method"})})}),"\n",(0,s.jsxs)(n.p,{children:["The name of the index method to be used. Choices are ",(0,s.jsx)(n.code,{children:"btree"}),", ",(0,s.jsx)(n.code,{children:"bitmap"}),", ",(0,s.jsx)(n.code,{children:"hash"}),", ",(0,s.jsx)(n.code,{children:"gist"}),", ",(0,s.jsx)(n.code,{children:"spgist"}),", ",(0,s.jsx)(n.code,{children:"gin"}),", and ",(0,s.jsx)(n.code,{children:"brin"}),". The default method is ",(0,s.jsx)(n.code,{children:"btree"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"GPORCA supports only B-tree, bitmap, GiST, GIN, and BRIN indexes. GPORCA ignores indexes created with unsupported indexing methods."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"column_name"})})}),"\n",(0,s.jsx)(n.p,{children:"The name of a column of the table on which to create the index."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"expression"})})}),"\n",(0,s.jsx)(n.p,{children:"An expression based on one or more columns of the table. The expression usually must be written with surrounding parentheses, as shown in the syntax. However, the parentheses may be omitted if the expression has the form of a function call."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"collation"})})}),"\n",(0,s.jsx)(n.p,{children:"The name of the collation to use for the index. By default, the index uses the collation declared for the column to be indexed or the result collation of the expression to be indexed. Indexes with non-default collations can be useful for queries that involve expressions using non-default collations."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"opclass"})})}),"\n",(0,s.jsx)(n.p,{children:"The name of an operator class."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"ASC"})})}),"\n",(0,s.jsx)(n.p,{children:"Specifies ascending sort order (which is the default)."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"DESC"})})}),"\n",(0,s.jsx)(n.p,{children:"Specifies descending sort order."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"NULLS FIRST"})})}),"\n",(0,s.jsxs)(n.p,{children:["Specifies that nulls sort before non-nulls. This is the default when ",(0,s.jsx)(n.code,{children:"DESC"})," is specified."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"NULLS LAST"})})}),"\n",(0,s.jsxs)(n.p,{children:["Specifies that nulls sort after non-nulls. This is the default when ",(0,s.jsx)(n.code,{children:"DESC"})," is not specified."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"storage_parameter"})})}),"\n",(0,s.jsxs)(n.p,{children:["The name of an index-method-specific storage parameter. Each index method has its own set of allowed storage parameters. See ",(0,s.jsx)(n.a,{href:"#index-storage-parameters",children:"Index Storage Parameters"})," for details."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"tablespace_name"})})}),"\n",(0,s.jsx)(n.p,{children:"The tablespace in which to create the index. If not specified, default_tablespace is consulted, or temp_tablespaces for indexes on temporary tables."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"predicate"})})}),"\n",(0,s.jsx)(n.p,{children:"The constraint expression for a partial index."}),"\n",(0,s.jsx)(n.h2,{id:"index-storage-parameters",children:"Index storage parameters"}),"\n",(0,s.jsxs)(n.p,{children:["The optional ",(0,s.jsx)(n.code,{children:"WITH"})," clause specifies ",(0,s.jsx)(n.em,{children:"storage parameters"})," for the index. Each index method has its own set of allowed storage parameters. The B-tree, bitmap, hash, GiST, and SP-GiST index methods all accept this parameter:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"fillfactor"})})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"fillfactor"})," for an index is a percentage that determines how full the index method will try to pack index pages. For B-trees, leaf pages are filled to this percentage during initial index build, and also when extending the index at the right (adding new largest key values). If pages subsequently become completely full, they will be split, leading to gradual degradation in the index's efficiency. B-trees use a default fillfactor of 90, but any integer value from 10 to 100 can be selected. If the table is static then fillfactor 100 is best to minimize the index's physical size, but for heavily updated tables a smaller fillfactor is better to minimize the need for page splits. The other index methods use fillfactor in different but roughly analogous ways; the default fillfactor varies between methods."]}),"\n",(0,s.jsx)(n.p,{children:"B-tree indexes additionally accept this parameter:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"vacuum_cleanup_index_scale_factor"})})}),"\n",(0,s.jsxs)(n.p,{children:["Per-index value for ",(0,s.jsx)(n.code,{children:"vacuum_cleanup_index_scale_factor"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"GiST indexes additionally accept this parameter:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"buffering"})})}),"\n",(0,s.jsxs)(n.p,{children:["Determines whether Cloudberry Database builds the index using the buffering build technique described in ",(0,s.jsx)(n.a,{href:"https://www.postgresql.org/docs/14/gist-implementation.html",children:"GiST buffering build"})," in the PostgreSQL documentation. With ",(0,s.jsx)(n.code,{children:"OFF"})," it is deactivated, with ",(0,s.jsx)(n.code,{children:"ON"})," it is activated, and with ",(0,s.jsx)(n.code,{children:"AUTO"})," it is initially deactivated, but turned on on-the-fly once the index size reaches effective_cache_size. The default is ",(0,s.jsx)(n.code,{children:"AUTO"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"GIN indexes accept different parameters:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"fastupdate"})})}),"\n",(0,s.jsxs)(n.p,{children:["This setting controls usage of the fast update technique described in ",(0,s.jsx)(n.a,{href:"https://www.postgresql.org/docs/14/gin-implementation.html#GIN-FAST-UPDATE",children:"GIN Fast Update Technique"})," in the PostgreSQL documentation. It is a Boolean parameter that deactivates or activates the GIN index fast update technique. A value of ",(0,s.jsx)(n.code,{children:"ON"})," activates fast update (the default), and ",(0,s.jsx)(n.code,{children:"OFF"})," deactivates it."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Turning ",(0,s.jsx)(n.code,{children:"fastupdate"})," off via ",(0,s.jsx)(n.code,{children:"ALTER INDEX"})," prevents future insertions from going into the list of pending index entries, but does not in itself flush previous entries. You might want to ",(0,s.jsx)(n.code,{children:"VACUUM"})," the table or call ",(0,s.jsx)(n.code,{children:"gin_clean_pending_list()"})," function afterward to ensure the pending list is emptied."]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"gin_pending_list_limit"})})}),"\n",(0,s.jsxs)(n.p,{children:["Custom ",(0,s.jsx)(n.code,{children:"gin_pending_list_limit"})," parameter. This value is specified in kilobytes."]}),"\n",(0,s.jsx)(n.p,{children:"BRIN indexes accept different parameters:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"pages_per_range"})})}),"\n",(0,s.jsxs)(n.p,{children:["Defines the number of table blocks that make up one block range for each entry of a BRIN index (see the ",(0,s.jsx)(n.a,{href:"https://www.postgresql.org/docs/14/brin-intro.html",children:"BRIN Index Introduction"})," in the PostgreSQL documentation for details). The default is 128."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"autosummarize"})})}),"\n",(0,s.jsxs)(n.p,{children:["Defines whether a summarization run is queued for the previous page range whenever an insertion is detected on the next one. See ",(0,s.jsx)(n.a,{href:"https://www.postgresql.org/docs/14/brin-intro.html#BRIN-OPERATION",children:"BRIN Index Maintenance"})," in the PostgreSQL documentation for more information. The default is ",(0,s.jsx)(n.code,{children:"off"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsxs)(n.p,{children:["Refer to the ",(0,s.jsx)(n.a,{href:"https://www.postgresql.org/docs/14/indexes.html",children:"Indexes"})," topics in the PostgreSQL documentation for information about when indexes can be used, when they are not used, and in which particular situations they can be useful."]}),"\n",(0,s.jsx)(n.p,{children:"Currently, only the B-tree, bitmap, GiST, GIN, and BRIN index methods support multicolumn indexes. You can specify up to 32 fields by default. Only B-tree currently supports unique indexes."}),"\n",(0,s.jsxs)(n.p,{children:["An operator class can be specified for each column of an index. The operator class identifies the operators to be used by the index for that column. For example, a B-tree index on four-byte integers would use the ",(0,s.jsx)(n.code,{children:"int4_ops"})," class; this operator class includes comparison functions for four-byte integers. In practice the default operator class for the column's data type is usually sufficient. The main point of having operator classes is that for some data types, there could be more than one meaningful ordering. For example, we might want to sort a complex-number data type either by absolute value or by real part. We could do this by defining two operator classes for the data type and then selecting the proper class when creating an index. Refer to ",(0,s.jsx)(n.a,{href:"https://www.postgresql.org/docs/14/indexes-opclass.html",children:"Operator Classes and Operator Families"})," and ",(0,s.jsx)(n.a,{href:"https://www.postgresql.org/docs/14/xindex.html",children:"Interfacing Extensions to Indexes\n"})," in the PostgreSQL documentation for more information about operator classes."]}),"\n",(0,s.jsxs)(n.p,{children:["When ",(0,s.jsx)(n.code,{children:"CREATE INDEX"})," is invoked on a partitioned table, the default behavior is to recurse to all partitions to ensure they all have matching indexes. Each partition is first checked to determine whether an equivalent index already exists, and if so, that index will become attached as a partition index to the index being created, which will become its parent index. If no matching index exists, a new index will be created and automatically attached; the name of the new index in each partition will be determined as if no index name had been specified in the command. If the ",(0,s.jsx)(n.code,{children:"ONLY"})," option is specified, no recursion is done, and the index is marked invalid. (",(0,s.jsx)(n.code,{children:"ALTER INDEX ... ATTACH PARTITION"})," marks the index valid, once all partitions acquire matching indexes.) Note, however, that any partition that is created in the future using ",(0,s.jsx)(n.code,{children:"CREATE TABLE ... PARTITION OF"})," or ",(0,s.jsx)(n.code,{children:"ALTER TABLE ... ADD PARTITION"}),"  will automatically have a matching index, regardless of whether ",(0,s.jsx)(n.code,{children:"ONLY"})," is specified"]}),"\n",(0,s.jsxs)(n.p,{children:["For index methods that support ordered scans (currently, only B-tree), you can specify the optional clauses ",(0,s.jsx)(n.code,{children:"ASC"}),", ",(0,s.jsx)(n.code,{children:"DESC"}),", ",(0,s.jsx)(n.code,{children:"NULLS FIRST"}),", and/or ",(0,s.jsx)(n.code,{children:"NULLS LAST"})," to modify the sort ordering of the index. Since an ordered index can be scanned either forward or backward, it is not normally useful to create a single-column ",(0,s.jsx)(n.code,{children:"DESC"})," index \u2014 that sort ordering is already available with a regular index. The value of these options is that multicolumn indexes can be created that match the sort ordering requested by a mixed-ordering query, such as ",(0,s.jsx)(n.code,{children:"SELECT ... ORDER BY x ASC, y DESC"}),". The ",(0,s.jsx)(n.code,{children:"NULLS"}),' options are useful if you need to support "nulls sort low" behavior, rather than the default "nulls sort high", in queries that depend on indexes to avoid sorting steps.']}),"\n",(0,s.jsxs)(n.p,{children:["The system regularly collects statistics on all of a table's columns. Newly-created non-expression indexes can immediately use these statistics to determine an index's usefulness. For new expression indexes, you must run ",(0,s.jsx)(n.a,{href:"/zh/docs/sql-stmts/analyze",children:"ANALYZE"})," to generate statistics for these indexes."]}),"\n",(0,s.jsxs)(n.p,{children:["For most index methods, the speed of creating an index is dependent on the setting of ",(0,s.jsx)(n.code,{children:"maintenance_work_mem"}),". Larger values will reduce the time needed for index creation, so long as you don't make it larger than the amount of memory really available, which would drive the machine into swapping."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"bitmap"})," indexes perform best for columns that have between 100 and 100,000 distinct values. For a column with more than 100,000 distinct values, the performance and space efficiency of a bitmap index decline. The size of a bitmap index is proportional to the number of rows in the table times the number of distinct values in the indexed column."]}),"\n",(0,s.jsxs)(n.p,{children:["Use ",(0,s.jsx)(n.a,{href:"/zh/docs/sql-stmts/drop-index",children:(0,s.jsx)(n.code,{children:"DROP INDEX"})})," to remove an index."]}),"\n",(0,s.jsxs)(n.p,{children:["Like any long-running transaction, ",(0,s.jsx)(n.code,{children:"CREATE INDEX"})," on a table can affect which tuples can be removed by concurrent ",(0,s.jsx)(n.code,{children:"VACUUM"})," on any other table."]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.p,{children:["To create a unique B-tree index on the column ",(0,s.jsx)(n.code,{children:"title"})," in the table ",(0,s.jsx)(n.code,{children:"films"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE UNIQUE INDEX title_idx ON films (title);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To create a B-tree index on the column ",(0,s.jsx)(n.code,{children:"title"})," with included columns ",(0,s.jsx)(n.code,{children:"director"})," and ",(0,s.jsx)(n.code,{children:"rating"})," in the table ",(0,s.jsx)(n.code,{children:"films"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE INDEX title_idx ON films (title) INCLUDE (director, rating);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To create an index on the expression ",(0,s.jsx)(n.code,{children:"lower(title)"}),", allowing efficient case-insensitive searches:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE INDEX ON films ((lower(title)));\n"})}),"\n",(0,s.jsxs)(n.p,{children:["(In this example we have chosen to omit the index name, so the system will choose a name, typically ",(0,s.jsx)(n.code,{children:"films_lower_idx"}),".)"]}),"\n",(0,s.jsx)(n.p,{children:"To create an index with non-default collation:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CREATE INDEX title_idx_german ON films (title COLLATE "de_DE");\n'})}),"\n",(0,s.jsx)(n.p,{children:"To create an index with non-default sort ordering of nulls:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE INDEX title_idx_nulls_low ON films (title NULLS FIRST);\n"})}),"\n",(0,s.jsx)(n.p,{children:"To create an index with non-default fill factor:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE UNIQUE INDEX title_idx ON films (title) WITH \n(fillfactor = 70);\n"})}),"\n",(0,s.jsx)(n.p,{children:"To create a GIN index with fast updates deactivated:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE INDEX gin_idx ON documents_table USING gin (locations) WITH (fastupdate = off);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To create an index on the column ",(0,s.jsx)(n.code,{children:"code"})," in the table ",(0,s.jsx)(n.code,{children:"films"})," and have the index reside in the tablespace ",(0,s.jsx)(n.code,{children:"indexspace"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE INDEX code_idx ON films (code) TABLESPACE indexspace;\n"})}),"\n",(0,s.jsx)(n.p,{children:"To create a GiST index on a point attribute so that we can efficiently use box operators on the result of the conversion function:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE INDEX pointloc ON points USING gist (box(location,location));\nSELECT * FROM points WHERE box(location,location) && '(0,0),(1,1)'::box;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"CREATE INDEX"})," is a Cloudberry Database extension to the SQL standard. There are no provisions for indexes in the SQL standard."]}),"\n",(0,s.jsxs)(n.p,{children:["Cloudberry Database does not support the concurrent creation of indexes (",(0,s.jsx)(n.code,{children:"CONCURRENTLY"})," keyword is not supported)."]}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/zh/docs/sql-stmts/alter-index",children:(0,s.jsx)(n.code,{children:"ALTER INDEX"})}),", ",(0,s.jsx)(n.a,{href:"/zh/docs/sql-stmts/drop-index",children:(0,s.jsx)(n.code,{children:"DROP INDEX"})})]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>r});var s=i(67294);const t={},a=s.createContext(t);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);