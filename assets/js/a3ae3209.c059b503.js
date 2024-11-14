"use strict";(self.webpackChunkCloudberry_Database_website=self.webpackChunkCloudberry_Database_website||[]).push([[5726],{3982:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var t=s(85893),o=s(11151);const a={title:"UPDATE"},i="UPDATE",r={id:"sql-stmts/update",title:"UPDATE",description:"Updates rows of a table.",source:"@site/docs/sql-stmts/update.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/update",permalink:"/docs/sql-stmts/update",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/update.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1731576389,formattedLastUpdatedAt:"Nov 14, 2024",frontMatter:{title:"UPDATE"},sidebar:"docsbars",previous:{title:"UNLISTEN",permalink:"/docs/sql-stmts/unlisten"},next:{title:"VACUUM",permalink:"/docs/sql-stmts/vacuum"}},c={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Outputs",id:"outputs",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"update",children:"UPDATE"}),"\n",(0,t.jsx)(n.p,{children:"Updates rows of a table."}),"\n",(0,t.jsx)(n.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"[ WITH [ RECURSIVE ] <with_query> [, ...] ]\nUPDATE [ ONLY ] <table_name> [ [ AS ] <alias> ]\n\xa0\xa0\xa0SET { <column_name> = { <expression> | DEFAULT } |\n\xa0\xa0\xa0    ( <column_name> [, ...] ) = [ ROW ] ( { <expression> | DEFAULT } [, ...] ) |\n       ( <column_name> [, ...] ) = ( <sub-SELECT> )\n       } [, ...]\n\xa0\xa0\xa0[ FROM <from_item> [, ...] ]\n\xa0\xa0\xa0[ WHERE <condition> | WHERE CURRENT OF <cursor_name> ]\n   [ RETURNING * | <output_expression> [ [AS] <output_name> ] [, ...] ]\n"})}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"UPDATE"})," changes the values of the specified columns in all rows that satisfy the condition. Only the columns to be modified need be mentioned in the ",(0,t.jsx)(n.code,{children:"SET"})," clause; columns not explicitly modified retain their previous values."]}),"\n",(0,t.jsxs)(n.p,{children:["There are two ways to modify a table using information contained in other tables in the database: using sub-selects, or specifying additional tables in the ",(0,t.jsx)(n.code,{children:"FROM"})," clause. Which technique is more appropriate depends on the specific circumstances."]}),"\n",(0,t.jsxs)(n.p,{children:["The optional ",(0,t.jsx)(n.code,{children:"RETURNING"})," clause causes ",(0,t.jsx)(n.code,{children:"UPDATE"})," to compute and return value(s) based on each row actually updated. Cloudberry Database can compute any expression using the table's columns, and/or columns of other tables mentioned in ",(0,t.jsx)(n.code,{children:"FROM"}),". The new (post-update) values of the table's columns are used. The syntax of the ",(0,t.jsx)(n.code,{children:"RETURNING"})," list is identical to that of the output list of ",(0,t.jsx)(n.code,{children:"SELECT"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["You must have the ",(0,t.jsx)(n.code,{children:"UPDATE"})," privilege on the table, or at least on the column(s) that are listed to be updated. You must also have the ",(0,t.jsx)(n.code,{children:"SELECT"})," privilege on any column whose values are read in the expressions or condition."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note"})," As the default, Cloudberry Database acquires an ",(0,t.jsx)(n.code,{children:"EXCLUSIVE"})," lock on tables for ",(0,t.jsx)(n.code,{children:"UPDATE"})," operations on heap tables. When the Global Deadlock Detector is enabled, the lock mode for ",(0,t.jsx)(n.code,{children:"UPDATE"})," operations on heap tables is ",(0,t.jsx)(n.code,{children:"ROW EXCLUSIVE"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"with_query"})})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"WITH"})," clause allows you to specify one or more subqueries that can be referenced by name in the ",(0,t.jsx)(n.code,{children:"UPDATE"})," query. See ",(0,t.jsx)(n.a,{href:"/docs/sql-stmts/select",children:"SELECT"})," for details."]}),"\n",(0,t.jsxs)(n.p,{children:["For an ",(0,t.jsx)(n.code,{children:"UPDATE"})," command that includes a ",(0,t.jsx)(n.code,{children:"WITH"})," clause, the clause can only contain ",(0,t.jsx)(n.code,{children:"SELECT"})," commands, the ",(0,t.jsx)(n.code,{children:"WITH"})," clause cannot contain a data-modifying command (",(0,t.jsx)(n.code,{children:"INSERT"}),", ",(0,t.jsx)(n.code,{children:"UPDATE"}),", or ",(0,t.jsx)(n.code,{children:"DELETE"}),")."]}),"\n",(0,t.jsxs)(n.p,{children:["It is possible for the query (",(0,t.jsx)(n.code,{children:"SELECT"})," statement) to also contain a ",(0,t.jsx)(n.code,{children:"WITH"})," clause. In such a case both sets of with_query can be referenced within the ",(0,t.jsx)(n.code,{children:"UPDATE"})," query, but the second one takes precedence since it is more closely nested."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"table_name"})})}),"\n",(0,t.jsxs)(n.p,{children:["The name (optionally schema-qualified) of the table to update. If ",(0,t.jsx)(n.code,{children:"ONLY"})," is specified before the table name, matching rows are updated in the named table only. If ",(0,t.jsx)(n.code,{children:"ONLY"})," is not specified, matching rows are also updated in any tables inheriting from the named table. Optionally, you can specify ",(0,t.jsx)(n.code,{children:"*"})," after the table name to explicitly indicate that descendant tables are included."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"alias"})})}),"\n",(0,t.jsxs)(n.p,{children:["A substitute name for the target table. When an alias is provided, it completely hides the actual name of the table. For example, given ",(0,t.jsx)(n.code,{children:"UPDATE foo AS f"}),", the remainder of the ",(0,t.jsx)(n.code,{children:"UPDATE"})," statement must refer to this table as ",(0,t.jsx)(n.code,{children:"f"})," not ",(0,t.jsx)(n.code,{children:"foo"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"column_name"})})}),"\n",(0,t.jsxs)(n.p,{children:["The name of a column in the table named by table_name. The column name can be qualified with a subfield name or array subscript, if needed. Do not include the table's name in the specification of a target column; for example, ",(0,t.jsx)(n.code,{children:"UPDATE table_name SET table_name.col = 1"})," is invalid."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"expression"})})}),"\n",(0,t.jsx)(n.p,{children:"An expression to assign to the column. The expression may use the old values of this and other columns in the table."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"DEFAULT"})})}),"\n",(0,t.jsx)(n.p,{children:"Set the column to its default value (which will be NULL if no specific default expression has been assigned to it)."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"sub-SELECT"})})}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.code,{children:"SELECT"})," sub-query that produces as many output columns as are listed in the parenthesized column list preceding it. The sub-query must yield no more than one row when executed. If it yields one row, its column values are assigned to the target columns; if it yields no rows, NULL values are assigned to the target columns. The sub-query can refer to old values of the current row of the table being updated."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"from_item"})})}),"\n",(0,t.jsxs)(n.p,{children:["A table expression allowing columns from other tables to appear in the ",(0,t.jsx)(n.code,{children:"WHERE"})," condition and the update expressions. This uses the same syntax as the ",(0,t.jsx)(n.code,{children:"FROM"})," clause of a ",(0,t.jsx)(n.a,{href:"/docs/sql-stmts/select",children:"SELECT"})," statement; for example, you can specify an alias for the table name. Do not repeat the target table as a from_item unless you intend a self-join (in which case it must appear with an alias in the from_item)."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"condition"})})}),"\n",(0,t.jsxs)(n.p,{children:["An expression that returns a value of type ",(0,t.jsx)(n.code,{children:"boolean"}),". Only rows for which this expression returns ",(0,t.jsx)(n.code,{children:"true"})," will be updated."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"cursor_name"})})}),"\n",(0,t.jsxs)(n.p,{children:["The name of the cursor to use in a ",(0,t.jsx)(n.code,{children:"WHERE CURRENT OF"})," condition. The row to be updated is the one most recently fetched from the cursor. The cursor must be a non-grouping query on the ",(0,t.jsx)(n.code,{children:"UPDATE"}),"'s target table. Note that ",(0,t.jsx)(n.code,{children:"WHERE CURRENT OF"})," cannot be specified together with a Boolean condition. See ",(0,t.jsx)(n.a,{href:"/docs/sql-stmts/declare",children:"DECLARE"})," for more information about using cursors with ",(0,t.jsx)(n.code,{children:"WHERE CURRENT OF"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"UPDATE...WHERE CURRENT OF"})," statement can only be run on the server, for example in an interactive psql session or a script. Language extensions such as PL/pgSQL do not have support for updatable cursors."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"output_expression"})})}),"\n",(0,t.jsxs)(n.p,{children:["An expression to be computed and returned by the ",(0,t.jsx)(n.code,{children:"UPDATE"})," command after each row is updated. The expression may use any column names of the table named by table_name or table(s) listed in ",(0,t.jsx)(n.code,{children:"FROM"}),". Write ",(0,t.jsx)(n.code,{children:"*"})," to return all columns."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"output_name"})})}),"\n",(0,t.jsx)(n.p,{children:"A name to use for a returned column."}),"\n",(0,t.jsx)(n.h2,{id:"outputs",children:"Outputs"}),"\n",(0,t.jsxs)(n.p,{children:["On successful completion, an ",(0,t.jsx)(n.code,{children:"UPDATE"})," command returns a command tag of the form:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"UPDATE <count>\n"})}),"\n",(0,t.jsx)(n.p,{children:"The count is the number of rows updated, including matched rows whose values did not change. If count is 0, no rows were updated by the query (this is not considered an error)."}),"\n",(0,t.jsxs)(n.p,{children:["If the ",(0,t.jsx)(n.code,{children:"UPDATE"})," command contains a ",(0,t.jsx)(n.code,{children:"RETURNING"})," clause, the result will be similar to that of a ",(0,t.jsx)(n.code,{children:"SELECT"})," statement containing the columns and values defined in the ",(0,t.jsx)(n.code,{children:"RETURNING"})," list, computed over the row(s) updated by the command."]}),"\n",(0,t.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,t.jsxs)(n.p,{children:["When a ",(0,t.jsx)(n.code,{children:"FROM"})," clause is present, the target table is joined to the tables mentioned in the from_item list, and each output row of the join represents an update operation for the target table. When using ",(0,t.jsx)(n.code,{children:"FROM"}),", ensure that the join produces at most one output row for each row to be modified. In other words, a target row should not join to more than one row from the other table(s). If it does, then only one of the join rows will be used to update the target row, but which one will be used is not readily predictable."]}),"\n",(0,t.jsx)(n.p,{children:"Because of this indeterminacy, referencing other tables only within sub-selects is safer, though often harder to read and slower than using a join."}),"\n",(0,t.jsxs)(n.p,{children:["For a partitioned table, all of the child tables are locked during the ",(0,t.jsx)(n.code,{children:"UPDATE"})," operation when the Global Deadlock Detector is not enabled (the default). Only some of the leaf child tables are locked when the Global Deadlock Detector is enabled."]}),"\n",(0,t.jsxs)(n.p,{children:["In the case of a partitioned table, updating a row might cause it to no longer satisfy the partition constraint of the containing partition. In that case, if there is some other partition in the partition tree for which this row satisfies its partition constraint, then the row is moved to that partition. If there is no such partition, an error will occur. Behind the scenes, the row movement is actually a ",(0,t.jsx)(n.code,{children:"DELETE"})," and ",(0,t.jsx)(n.code,{children:"INSERT"})," operation."]}),"\n",(0,t.jsxs)(n.p,{children:["For a partitioned table, all the child tables are locked during the ",(0,t.jsx)(n.code,{children:"UPDATE"})," operation when the Global Deadlock Detector is not enabled (the default). Only some of the leaf partitions are locked when the Global Deadlock Detector is enabled."]}),"\n",(0,t.jsxs)(n.p,{children:["There is a possibility that a concurrent ",(0,t.jsx)(n.code,{children:"UPDATE"})," or ",(0,t.jsx)(n.code,{children:"DELETE"})," on the row being moved will generate a serialization failure error. Suppose session 1 is performing an ",(0,t.jsx)(n.code,{children:"UPDATE"})," on a partition key, and meanwhile a concurrent session 2 for which this row is visible performs an ",(0,t.jsx)(n.code,{children:"UPDATE"})," or ",(0,t.jsx)(n.code,{children:"DELETE"})," operation on this row. In such case, session 2's ",(0,t.jsx)(n.code,{children:"UPDATE"})," or ",(0,t.jsx)(n.code,{children:"DELETE"})," will detect the row movement and raise a serialization failure error (which always returns with an SQLSTATE code '40001'). Applications may wish to retry the transaction if this occurs. In the usual case where the table is not partitioned, or where there is no row movement, session 2 would have identified the newly updated row and carried out the ",(0,t.jsx)(n.code,{children:"UPDATE/DELETE"})," on this new row version."]}),"\n",(0,t.jsx)(n.p,{children:"Note that while rows can be moved from local partitions to a foreign-table partition (provided the foreign data wrapper supports tuple routing), they cannot be moved from a foreign-table partition to another partition."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(n.p,{children:["Change the word ",(0,t.jsx)(n.code,{children:"Drama"})," to ",(0,t.jsx)(n.code,{children:"Dramatic"})," in the column ",(0,t.jsx)(n.code,{children:"kind"})," of the table ",(0,t.jsx)(n.code,{children:"films"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"UPDATE films SET kind = 'Dramatic' WHERE kind = 'Drama';\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Adjust temperature entries and reset precipitation to its default value in one row of the table ",(0,t.jsx)(n.code,{children:"weather"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"UPDATE weather SET temp_lo = temp_lo+1, temp_hi = \ntemp_lo+15, prcp = DEFAULT\nWHERE city = 'San Francisco' AND date = '2016-07-03';\n"})}),"\n",(0,t.jsx)(n.p,{children:"Perform the same operation and return the updated entries:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"UPDATE weather SET temp_lo = temp_lo+1, temp_hi = temp_lo+15, prcp = DEFAULT\n  WHERE city = 'San Francisco' AND date = '2003-07-03'\n  RETURNING temp_lo, temp_hi, prcp;\n"})}),"\n",(0,t.jsx)(n.p,{children:"Use the alternative column-list syntax to do the same update:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"UPDATE weather SET (temp_lo, temp_hi, prcp) = (temp_lo+1, \ntemp_lo+15, DEFAULT)\nWHERE city = 'San Francisco' AND date = '2016-07-03';\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Increment the sales count of the salesperson who manages the account for Acme Corporation, using the ",(0,t.jsx)(n.code,{children:"FROM"})," clause syntax (assuming both tables being joined are distributed in Cloudberry Database on the ",(0,t.jsx)(n.code,{children:"id"})," column):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"UPDATE employees SET sales_count = sales_count + 1 FROM \naccounts\nWHERE accounts.name = 'Acme Corporation'\nAND employees.id = accounts.id;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Perform the same operation, using a sub-select in the ",(0,t.jsx)(n.code,{children:"WHERE"})," clause:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"UPDATE employees SET sales_count = sales_count + 1 WHERE id =\n  (SELECT id FROM accounts WHERE name = 'Acme Corporation');\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Update contact names in an ",(0,t.jsx)(n.code,{children:"accounts"})," table to match the currently assigned salesmen:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"UPDATE accounts SET (contact_first_name, contact_last_name) =\n    (SELECT first_name, last_name FROM salesmen\n     WHERE salesmen.id = accounts.sales_id);\n"})}),"\n",(0,t.jsx)(n.p,{children:"A similar result could be accomplished with a join:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"UPDATE accounts SET contact_first_name = first_name,\n                    contact_last_name = last_name\n  FROM salesmen WHERE salesmen.id = accounts.sales_id;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["However, the second query may give unexpected results if ",(0,t.jsx)(n.code,{children:"salesmen.id"})," is not a unique key, whereas the first query is guaranteed to raise an error if there are multiple ",(0,t.jsx)(n.code,{children:"id"})," matches. Also, if there is no match for a particular ",(0,t.jsx)(n.code,{children:"accounts.sales_id"})," entry, the first query will set the corresponding name fields to NULL, whereas the second query will not update that row at all."]}),"\n",(0,t.jsxs)(n.p,{children:["Update statistics in a ",(0,t.jsx)(n.code,{children:"summary"})," table to match the current data:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"UPDATE summary s SET (sum_x, sum_y, avg_x, avg_y) =\n    (SELECT sum(x), sum(y), avg(x), avg(y) FROM data d\n     WHERE d.group_id = s.group_id);\n"})}),"\n",(0,t.jsx)(n.p,{children:"Attempt to insert a new stock item along with the quantity of stock. If the item already exists, instead update the stock count of the existing item. To do this without failing the entire transaction, use savepoints."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"BEGIN;\n-- other operations\nSAVEPOINT sp1;\nINSERT INTO wines VALUES('Chateau Lafite 2003', '24');\n-- Assume the above fails because of a unique key violation,\n-- so now we issue these commands:\nROLLBACK TO sp1;\nUPDATE wines SET stock = stock + 24 WHERE winename = 'Chateau \nLafite 2003';\n-- continue with other operations, and eventually\nCOMMIT;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,t.jsxs)(n.p,{children:["This command conforms to the SQL standard, except that the ",(0,t.jsx)(n.code,{children:"FROM"})," and ",(0,t.jsx)(n.code,{children:"RETURNING"})," clauses are Cloudberry Database extensions, as is the ability to use ",(0,t.jsx)(n.code,{children:"WITH"})," with ",(0,t.jsx)(n.code,{children:"UPDATE"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Some other database systems offer a ",(0,t.jsx)(n.code,{children:"FROM"})," option in which the target table is supposed to be listed again within ",(0,t.jsx)(n.code,{children:"FROM"}),". That is not how Cloudberry Database interprets ",(0,t.jsx)(n.code,{children:"FROM"}),". Be careful when porting applications that use this extension."]}),"\n",(0,t.jsxs)(n.p,{children:["According to the standard, the source value for a parenthesized sub-list of target column names can be any row-valued expression yielding the correct number of columns. Cloudberry Database only allows the source value to be a ",(0,t.jsx)(n.a,{href:"https://www.postgresql.org/docs/12/sql-expressions.html#SQL-SYNTAX-ROW-CONSTRUCTORS",children:"row constructor"})," or a sub-",(0,t.jsx)(n.code,{children:"SELECT"}),". You can specify an individual column's updated value as ",(0,t.jsx)(n.code,{children:"DEFAULT"})," in the row-constructor case, but not inside a sub-",(0,t.jsx)(n.code,{children:"SELECT"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/sql-stmts/declare",children:"DECLARE"}),", ",(0,t.jsx)(n.a,{href:"/docs/sql-stmts/delete",children:"DELETE"}),", ",(0,t.jsx)(n.a,{href:"/docs/sql-stmts/select",children:"SELECT"}),", ",(0,t.jsx)(n.a,{href:"/docs/sql-stmts/insert",children:"INSERT"})]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>i});var t=s(67294);const o={},a=t.createContext(o);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);