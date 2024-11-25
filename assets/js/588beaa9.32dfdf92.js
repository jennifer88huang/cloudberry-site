"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[4525],{11422:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var r=o(85893),n=o(11151);const s={title:"CREATE OPERATOR"},a="CREATE OPERATOR",i={id:"sql-stmts/create-operator",title:"CREATE OPERATOR",description:"Defines a new operator.",source:"@site/docs/sql-stmts/create-operator.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/create-operator",permalink:"/docs/sql-stmts/create-operator",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/create-operator.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1732523543,formattedLastUpdatedAt:"Nov 25, 2024",frontMatter:{title:"CREATE OPERATOR"},sidebar:"docsbars",previous:{title:"CREATE OPERATOR FAMILY",permalink:"/docs/sql-stmts/create-operator-family"},next:{title:"CREATE POLICY",permalink:"/docs/sql-stmts/create-policy"}},c={},d=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function l(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"create-operator",children:"CREATE OPERATOR"}),"\n",(0,r.jsx)(t.p,{children:"Defines a new operator."}),"\n",(0,r.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"CREATE OPERATOR <name> ( \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0{ FUNCTION | PROCEDURE } = <function_name>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0[, LEFTARG = <left_type>] [, RIGHTARG = <right_type>]\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0[, COMMUTATOR = <com_op>] [, NEGATOR = <neg_op>]\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0[, RESTRICT = <res_proc>] [, JOIN = <join_proc>]\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0[, HASHES] [, MERGES] )\n"})}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"CREATE OPERATOR"})," defines a new operator. The user who defines an operator becomes its owner. If a schema name is given, then the operator is created in the specified schema. Otherwise, it is created in the current schema."]}),"\n",(0,r.jsxs)(t.p,{children:["The operator name is a sequence of up to ",(0,r.jsx)(t.code,{children:"NAMEDATALEN"}),"-1 (63 by default) characters from the following list: ",(0,r.jsx)("code",{children:"+ - * / < > = ~ ! @ # % ^ & | ` ?"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"There are a few restrictions on your choice of name:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"--"})," and ",(0,r.jsx)(t.code,{children:"/*"})," cannot appear anywhere in an operator name, since they will be taken as the start of a comment."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["A multicharacter operator name cannot end in ",(0,r.jsx)(t.code,{children:"+"})," or ",(0,r.jsx)(t.code,{children:"-"}),", unless the name also contains at least one of these characters: ",(0,r.jsx)("code",{children:"~ ! @ # % ^ & | ` ?"})]}),"\n",(0,r.jsxs)(t.p,{children:["For example, ",(0,r.jsx)(t.code,{children:"@-"})," is an allowed operator name, but ",(0,r.jsx)(t.code,{children:"*-"})," is not. This restriction allows Cloudberry Database to parse SQL-compliant commands without requiring spaces between tokens."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["The use of ",(0,r.jsx)(t.code,{children:"=>"})," as an operator name is deprecated. It may be disallowed altogether in a future release."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["The operator ",(0,r.jsx)(t.code,{children:"!="})," is mapped to ",(0,r.jsx)(t.code,{children:"<>"})," on input, so these two names are always equivalent."]}),"\n",(0,r.jsxs)(t.p,{children:["At least one of ",(0,r.jsx)(t.code,{children:"LEFTARG"})," and ",(0,r.jsx)(t.code,{children:"RIGHTARG"})," must be defined. For binary operators, both must be defined. For right unary operators, only ",(0,r.jsx)(t.code,{children:"LEFTARG"})," should be defined, while for left unary operators only ",(0,r.jsx)(t.code,{children:"RIGHTARG"})," should be defined."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"}),"  Right unary, also called postfix, operators are deprecated and may be removed in a future Cloudberry Database release."]}),"\n",(0,r.jsxs)(t.p,{children:["The function_name function must have been previously defined using ",(0,r.jsx)(t.code,{children:"CREATE FUNCTION"}),", must be ",(0,r.jsx)(t.code,{children:"IMMUTABLE"}),", and must be defined to accept the correct number of arguments (either one or two) of the indicated types."]}),"\n",(0,r.jsxs)(t.p,{children:["In the syntax of ",(0,r.jsx)(t.code,{children:"CREATE OPERATOR"}),", the keywords ",(0,r.jsx)(t.code,{children:"FUNCTION"})," and ",(0,r.jsx)(t.code,{children:"PROCEDURE"})," are equivalent, but the referenced function must in any case be a function, not a procedure. The use of the keyword ",(0,r.jsx)(t.code,{children:"PROCEDURE"})," here is historical and deprecated."]}),"\n",(0,r.jsxs)(t.p,{children:["The other clauses specify optional operator optimization clauses. Their meaning is detailed in the PostgreSQL ",(0,r.jsx)(t.a,{href:"https://www.postgresql.org/docs/12/xoper-optimization.html",children:"Operator Optimization Information"})," documentation."]}),"\n",(0,r.jsxs)(t.p,{children:["To be able to create an operator, you must have ",(0,r.jsx)(t.code,{children:"USAGE"})," privilege on the argument types and the return type, as well as ",(0,r.jsx)(t.code,{children:"EXECUTE"})," privilege on the underlying function. If a commutator or negator operator is specified, you must own these operators."]}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"name"})})}),"\n",(0,r.jsxs)(t.p,{children:["The (optionally schema-qualified) name of the operator to be defined. Refer to the ",(0,r.jsx)(t.em,{children:"Description"})," above for allowable characters. The name can be schema-qualified, for example ",(0,r.jsx)(t.code,{children:"CREATE OPERATOR myschema.+ (...)"}),". If not, then the operator is created in the current schema. Two operators in the same schema can have the same name if they operate on different data types. This is called ",(0,r.jsx)(t.em,{children:"overloading"}),"."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"function_name"})})}),"\n",(0,r.jsxs)(t.p,{children:["The function used to implement this operator (must be an ",(0,r.jsx)(t.code,{children:"IMMUTABLE"})," function)."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"left_type"})})}),"\n",(0,r.jsx)(t.p,{children:"The data type of the operator's left operand, if any. This option would be omitted for a left-unary operator."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"right_type"})})}),"\n",(0,r.jsx)(t.p,{children:"The data type of the operator's right operand, if any. This option would be omitted for a right-unary operator."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"com_op"})})}),"\n",(0,r.jsxs)(t.p,{children:["The commutator of this operator. The optional ",(0,r.jsx)(t.code,{children:"COMMUTATOR"})," clause names an operator that is the commutator of the operator being defined. We say that operator A is the commutator of operator B if (x A y) equals (y B x) for all possible input values x, y. Notice that B is also the commutator of A. For example, operators ",(0,r.jsx)(t.code,{children:"<"})," and ",(0,r.jsx)(t.code,{children:">"})," for a particular data type are usually each others commutators, and operator + is usually commutative with itself. But operator ",(0,r.jsx)(t.code,{children:"-"})," is usually not commutative with anything. The left operand type of a commutable operator is the same as the right operand type of its commutator, and vice versa. So the name of the commutator operator is all that needs to be provided in the ",(0,r.jsx)(t.code,{children:"COMMUTATOR"})," clause."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"neg_op"})})}),"\n",(0,r.jsxs)(t.p,{children:["The negator of this operator. The optional ",(0,r.jsx)(t.code,{children:"NEGATOR"})," clause names an operator that is the negator of the operator being defined. We say that operator A is the negator of operator B if both return Boolean results and (x A y) equals NOT (x B y) for all possible inputs x, y. Notice that B is also the negator of A. For example, ",(0,r.jsx)(t.code,{children:"<"})," and ",(0,r.jsx)(t.code,{children:">="})," are a negator pair for most data types. An operator's negator must have the same left and/or right operand types as the operator to be defined, so only the operator name need be given in the ",(0,r.jsx)(t.code,{children:"NEGATOR"})," clause."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"res_proc"})})}),"\n",(0,r.jsxs)(t.p,{children:["The restriction selectivity estimator function for this operator. The optional ",(0,r.jsx)(t.code,{children:"RESTRICT"})," names a restriction selectivity estimation function for the operator. (Note that this is a function name, not an operator name.) ",(0,r.jsx)(t.code,{children:"RESTRICT"})," clauses only make sense for binary operators that return ",(0,r.jsx)(t.code,{children:"boolean"}),"."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"join_proc"})})}),"\n",(0,r.jsxs)(t.p,{children:["The join selectivity estimator function for this operator. The optional ",(0,r.jsx)(t.code,{children:"JOIN"})," clause names a join selectivity estimation function for the operator. (Note that this is a function name, not an operator name.) ",(0,r.jsx)(t.code,{children:"JOIN"})," clauses only make sense for binary operators that return ",(0,r.jsx)(t.code,{children:"boolean"}),"."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"HASHES"})})}),"\n",(0,r.jsxs)(t.p,{children:["Indicates this operator can support a hash join. The optional ",(0,r.jsx)(t.code,{children:"HASHES"})," clause tells the system that it is permissible to use the hash join method for a join based on this operator. ",(0,r.jsx)(t.code,{children:"HASHES"})," only makes sense for a binary operator that returns ",(0,r.jsx)(t.code,{children:"boolean"}),". The hash join operator can only return true for pairs of left and right values that hash to the same hash code. If two values are put in different hash buckets, the join will never compare them, implicitly assuming that the result of the join operator must be false. Because of this, it never makes sense to specify ",(0,r.jsx)(t.code,{children:"HASHES"})," for operators that do not represent equality."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"MERGES"})})}),"\n",(0,r.jsxs)(t.p,{children:["Indicates this operator can support a merge join. The ",(0,r.jsx)(t.code,{children:"MERGES"})," clause, if present, tells the system that it is permissible to use the merge-join method for a join based on this operator. ",(0,r.jsx)(t.code,{children:"MERGES"})," only makes sense for a binary operator that returns ",(0,r.jsx)(t.code,{children:"boolean"}),", and in practice the operator must represent equality for some data type or pair of data types."]}),"\n",(0,r.jsxs)(t.p,{children:["To give a schema-qualified operator name in com_op or the other optional arguments, use the ",(0,r.jsx)(t.code,{children:"OPERATOR()"})," syntax, for example:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"COMMUTATOR = OPERATOR(myschema.===) ,\n"})}),"\n",(0,r.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsxs)(t.p,{children:["Refer to ",(0,r.jsx)(t.a,{href:"https://www.postgresql.org/docs/12/xoper.html",children:"User-defined Operators"})," in the PostgreSQL documentation for further information."]}),"\n",(0,r.jsxs)(t.p,{children:["Any functions used to implement the operator must be defined as ",(0,r.jsx)(t.code,{children:"IMMUTABLE"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["It is not possible to specify an operator's lexical precedence in ",(0,r.jsx)(t.code,{children:"CREATE OPERATOR"}),", because the parser's precedence behavior is hard-wired. See ",(0,r.jsx)(t.a,{href:"https://www.postgresql.org/docs/12/sql-syntax-lexical.html#SQL-PRECEDENCE",children:"Operator Precedence"})," in the PostgreSQL documentation for precedence details."]}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.a,{href:"/docs/sql-stmts/drop-operator",children:"DROP OPERATOR"})," to delete user-defined operators from a database. Use ",(0,r.jsx)(t.a,{href:"/docs/sql-stmts/alter-operator",children:"ALTER OPERATOR"})," to modify operators in a database."]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(t.p,{children:["The following command defines a new operator, area-equality, for the data type ",(0,r.jsx)(t.code,{children:"box"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"CREATE OPERATOR === (\n    LEFTARG = box,\n    RIGHTARG = box,\n    FUNCTION = area_equal_function,\n    COMMUTATOR = ===,\n    NEGATOR = !==,\n    RESTRICT = area_restriction_function,\n    JOIN = area_join_function,\n    HASHES, MERGES\n);\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The following example creates an operator for adding two complex numbers. The example assumes that we have already created the definition of type ",(0,r.jsx)(t.code,{children:"complex"}),". First define the function that does the work, then define the operator:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"CREATE FUNCTION complex_add(complex, complex)\n    RETURNS complex\n    AS 'filename', 'complex_add'\n    LANGUAGE C IMMUTABLE STRICT;\nCREATE OPERATOR + (\n    leftarg = complex,\n    rightarg = complex,\n    procedure = complex_add,\n    commutator = +\n);\n"})}),"\n",(0,r.jsx)(t.p,{children:"To use this operator in a query:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"SELECT (a + b) AS c FROM test_complex;\n"})}),"\n",(0,r.jsx)(t.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"CREATE OPERATOR"})," is a Cloudberry Database extension to the SQL standard. The SQL standard does not provide for user-defined operators."]}),"\n",(0,r.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/sql-stmts/create-function",children:"CREATE FUNCTION"}),", ",(0,r.jsx)(t.a,{href:"/docs/sql-stmts/create-type",children:"CREATE TYPE"}),", ",(0,r.jsx)(t.a,{href:"/docs/sql-stmts/alter-operator",children:"ALTER OPERATOR"}),", ",(0,r.jsx)(t.a,{href:"/docs/sql-stmts/create-operator-class",children:"CREATE OPERATOR CLASS"}),", ",(0,r.jsx)(t.a,{href:"/docs/sql-stmts/drop-operator",children:"DROP OPERATOR"})]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,t,o)=>{o.d(t,{Z:()=>i,a:()=>a});var r=o(67294);const n={},s=r.createContext(n);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);