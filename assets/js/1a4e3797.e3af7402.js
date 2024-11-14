"use strict";(self.webpackChunkCloudberry_Database_website=self.webpackChunkCloudberry_Database_website||[]).push([[7920],{88824:(e,t,r)=>{r.d(t,{c:()=>u});var s=r(67294),a=r(52263);const n=["zero","one","two","few","many","other"];function c(e){return n.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,a.Z)();return(0,s.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:c(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function u(){const e=o();return{selectMessage:(t,r)=>function(e,t,r){const s=e.split("|");if(1===s.length)return s[0];s.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const a=r.select(t),n=r.pluralForms.indexOf(a);return s[Math.min(n,s.length-1)]}(r,t,e)}}},51473:(e,t,r)=>{r.r(t),r.d(t,{default:()=>_});var s=r(67294),a=r(52263),n=r(8591),c=r(35742),l=r(33692),o=r(95999),u=r(88824),h=r(1728),i=r(16550),m=r(72389),d=r(61029);const p=function(){const e=(0,m.Z)(),t=(0,i.k6)(),r=(0,i.TH)(),{siteConfig:{baseUrl:s}}=(0,a.Z)(),n=e?new URLSearchParams(r.search):null,c=n?.get("q")||"",l=n?.get("ctx")||"",o=n?.get("version")||"",u=e=>{const t=new URLSearchParams(r.search);return e?t.set("q",e):t.delete("q"),t};return{searchValue:c,searchContext:l&&Array.isArray(d.Kc)&&d.Kc.some((e=>"string"==typeof e?e===l:e.path===l))?l:"",searchVersion:o,updateSearchPath:e=>{const r=u(e);t.replace({search:r.toString()})},updateSearchContext:e=>{const s=new URLSearchParams(r.search);s.set("ctx",e),t.replace({search:s.toString()})},generateSearchPageLink:e=>{const t=u(e);return`${s}search?${t.toString()}`}}};var g=r(90022),x=r(98202),f=r(82539),y=r(10726),C=r(91073),S=r(80311),j=r(73926);const I={searchContextInput:"searchContextInput_mXoe",searchQueryInput:"searchQueryInput_CFBF",searchResultItem:"searchResultItem_U687",searchResultItemPath:"searchResultItemPath_uIbk",searchResultItemSummary:"searchResultItemSummary_oZHr",searchQueryColumn:"searchQueryColumn_q7nx",searchContextColumn:"searchContextColumn_oWAF"};var w=r(50051),v=r(85893);function b(){const{siteConfig:{baseUrl:e},i18n:{currentLocale:t}}=(0,a.Z)(),{selectMessage:r}=(0,u.c)(),{searchValue:n,searchContext:l,searchVersion:i,updateSearchPath:m,updateSearchContext:f}=p(),[y,C]=(0,s.useState)(n),[j,b]=(0,s.useState)(),[_,P]=(0,s.useState)(),F=`${e}${i}`,A=(0,s.useMemo)((()=>y?(0,o.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:y}):(0,o.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[y]);(0,s.useEffect)((()=>{m(y),j&&(y?j(y,(e=>{P(e)})):P(void 0))}),[y,j]);const $=(0,s.useCallback)((e=>{C(e.target.value)}),[]);return(0,s.useEffect)((()=>{n&&n!==y&&C(n)}),[n]),(0,s.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=!Array.isArray(d.Kc)||l||d.pQ?await(0,g.w)(F,l):{wrappedIndexes:[],zhDictionary:[]};b((()=>(0,x.v)(e,t,100)))}()}),[l,F]),(0,v.jsxs)(s.Fragment,{children:[(0,v.jsxs)(c.Z,{children:[(0,v.jsx)("meta",{property:"robots",content:"noindex, follow"}),(0,v.jsx)("title",{children:A})]}),(0,v.jsxs)("div",{className:"container margin-vert--lg",children:[(0,v.jsx)("h1",{children:A}),(0,v.jsxs)("div",{className:"row",children:[(0,v.jsx)("div",{className:(0,h.Z)("col",{[I.searchQueryColumn]:Array.isArray(d.Kc),"col--9":Array.isArray(d.Kc),"col--12":!Array.isArray(d.Kc)}),children:(0,v.jsx)("input",{type:"search",name:"q",className:I.searchQueryInput,"aria-label":"Search",onChange:$,value:y,autoComplete:"off",autoFocus:!0})}),Array.isArray(d.Kc)?(0,v.jsx)("div",{className:(0,h.Z)("col","col--3","padding-left--none",I.searchContextColumn),children:(0,v.jsxs)("select",{name:"search-context",className:I.searchContextInput,id:"context-selector",value:l,onChange:e=>f(e.target.value),children:[d.pQ&&(0,v.jsx)("option",{value:"",children:(0,o.I)({id:"theme.SearchPage.searchContext.everywhere",message:"everywhere"})}),d.Kc.map((e=>{const{label:r,path:s}=(0,w._)(e,t);return(0,v.jsx)("option",{value:s,children:r},s)}))]})}):null]}),!j&&y&&(0,v.jsx)("div",{children:(0,v.jsx)(S.Z,{})}),_&&(_.length>0?(0,v.jsx)("p",{children:r(_.length,(0,o.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:_.length}))}):(0,v.jsx)("p",{children:(0,o.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"})})),(0,v.jsx)("section",{children:_&&_.map((e=>(0,v.jsx)(R,{searchResult:e},e.document.i)))})]})]})}function R(e){let{searchResult:{document:t,type:r,page:s,tokens:a,metadata:n}}=e;const c=0===r,o=2===r,u=(c?t.b:s.b).slice(),h=o?t.s:t.t;c||u.push(s.t);let i="";if(d.vc&&a.length>0){const e=new URLSearchParams;for(const t of a)e.append("_highlight",t);i=`?${e.toString()}`}return(0,v.jsxs)("article",{className:I.searchResultItem,children:[(0,v.jsx)("h2",{children:(0,v.jsx)(l.Z,{to:t.u+i+(t.h||""),dangerouslySetInnerHTML:{__html:o?(0,f.C)(h,a):(0,y.o)(h,(0,C.m)(n,"t"),a,100)}})}),u.length>0&&(0,v.jsx)("p",{className:I.searchResultItemPath,children:(0,j.e)(u)}),o&&(0,v.jsx)("p",{className:I.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,y.o)(t.t,(0,C.m)(n,"t"),a,100)}})]})}const _=function(){return(0,v.jsx)(n.Z,{children:(0,v.jsx)(b,{})})}}}]);