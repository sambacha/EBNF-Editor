parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"lDbc":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.language=exports.conf=void 0;var E={comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["[","]"],["(",")"],["{","}"]],autoClosingPairs:[{open:'"',close:'"',notIn:["string","comment"]},{open:"'",close:"'",notIn:["string","comment"]},{open:"[",close:"]",notIn:["string","comment"]},{open:"(",close:")",notIn:["string","comment"]},{open:"{",close:"}",notIn:["string","comment"]}]};exports.conf=E;var T={defaultToken:"",tokenPostfix:".msdax",ignoreCase:!0,brackets:[{open:"[",close:"]",token:"delimiter.square"},{open:"{",close:"}",token:"delimiter.brackets"},{open:"(",close:")",token:"delimiter.parenthesis"}],keywords:["VAR","RETURN","NOT","EVALUATE","DATATABLE","ORDER","BY","START","AT","DEFINE","MEASURE","ASC","DESC","IN","BOOLEAN","DOUBLE","INTEGER","DATETIME","CURRENCY","STRING"],functions:["CLOSINGBALANCEMONTH","CLOSINGBALANCEQUARTER","CLOSINGBALANCEYEAR","DATEADD","DATESBETWEEN","DATESINPERIOD","DATESMTD","DATESQTD","DATESYTD","ENDOFMONTH","ENDOFQUARTER","ENDOFYEAR","FIRSTDATE","FIRSTNONBLANK","LASTDATE","LASTNONBLANK","NEXTDAY","NEXTMONTH","NEXTQUARTER","NEXTYEAR","OPENINGBALANCEMONTH","OPENINGBALANCEQUARTER","OPENINGBALANCEYEAR","PARALLELPERIOD","PREVIOUSDAY","PREVIOUSMONTH","PREVIOUSQUARTER","PREVIOUSYEAR","SAMEPERIODLASTYEAR","STARTOFMONTH","STARTOFQUARTER","STARTOFYEAR","TOTALMTD","TOTALQTD","TOTALYTD","ADDCOLUMNS","ADDMISSINGITEMS","ALL","ALLEXCEPT","ALLNOBLANKROW","ALLSELECTED","CALCULATE","CALCULATETABLE","CALENDAR","CALENDARAUTO","CROSSFILTER","CROSSJOIN","CURRENTGROUP","DATATABLE","DETAILROWS","DISTINCT","EARLIER","EARLIEST","EXCEPT","FILTER","FILTERS","GENERATE","GENERATEALL","GROUPBY","IGNORE","INTERSECT","ISONORAFTER","KEEPFILTERS","LOOKUPVALUE","NATURALINNERJOIN","NATURALLEFTOUTERJOIN","RELATED","RELATEDTABLE","ROLLUP","ROLLUPADDISSUBTOTAL","ROLLUPGROUP","ROLLUPISSUBTOTAL","ROW","SAMPLE","SELECTCOLUMNS","SUBSTITUTEWITHINDEX","SUMMARIZE","SUMMARIZECOLUMNS","TOPN","TREATAS","UNION","USERELATIONSHIP","VALUES","SUM","SUMX","PATH","PATHCONTAINS","PATHITEM","PATHITEMREVERSE","PATHLENGTH","AVERAGE","AVERAGEA","AVERAGEX","COUNT","COUNTA","COUNTAX","COUNTBLANK","COUNTROWS","COUNTX","DISTINCTCOUNT","DIVIDE","GEOMEAN","GEOMEANX","MAX","MAXA","MAXX","MEDIAN","MEDIANX","MIN","MINA","MINX","PERCENTILE.EXC","PERCENTILE.INC","PERCENTILEX.EXC","PERCENTILEX.INC","PRODUCT","PRODUCTX","RANK.EQ","RANKX","STDEV.P","STDEV.S","STDEVX.P","STDEVX.S","VAR.P","VAR.S","VARX.P","VARX.S","XIRR","XNPV","DATE","DATEDIFF","DATEVALUE","DAY","EDATE","EOMONTH","HOUR","MINUTE","MONTH","NOW","SECOND","TIME","TIMEVALUE","TODAY","WEEKDAY","WEEKNUM","YEAR","YEARFRAC","CONTAINS","CONTAINSROW","CUSTOMDATA","ERROR","HASONEFILTER","HASONEVALUE","ISBLANK","ISCROSSFILTERED","ISEMPTY","ISERROR","ISEVEN","ISFILTERED","ISLOGICAL","ISNONTEXT","ISNUMBER","ISODD","ISSUBTOTAL","ISTEXT","USERNAME","USERPRINCIPALNAME","AND","FALSE","IF","IFERROR","NOT","OR","SWITCH","TRUE","ABS","ACOS","ACOSH","ACOT","ACOTH","ASIN","ASINH","ATAN","ATANH","BETA.DIST","BETA.INV","CEILING","CHISQ.DIST","CHISQ.DIST.RT","CHISQ.INV","CHISQ.INV.RT","COMBIN","COMBINA","CONFIDENCE.NORM","CONFIDENCE.T","COS","COSH","COT","COTH","CURRENCY","DEGREES","EVEN","EXP","EXPON.DIST","FACT","FLOOR","GCD","INT","ISO.CEILING","LCM","LN","LOG","LOG10","MOD","MROUND","ODD","PERMUT","PI","POISSON.DIST","POWER","QUOTIENT","RADIANS","RAND","RANDBETWEEN","ROUND","ROUNDDOWN","ROUNDUP","SIGN","SIN","SINH","SQRT","SQRTPI","TAN","TANH","TRUNC","BLANK","CONCATENATE","CONCATENATEX","EXACT","FIND","FIXED","FORMAT","LEFT","LEN","LOWER","MID","REPLACE","REPT","RIGHT","SEARCH","SUBSTITUTE","TRIM","UNICHAR","UNICODE","UPPER","VALUE"],tokenizer:{root:[{include:"@comments"},{include:"@whitespace"},{include:"@numbers"},{include:"@strings"},{include:"@complexIdentifiers"},[/[;,.]/,"delimiter"],[/[({})]/,"@brackets"],[/[a-z_][a-zA-Z0-9_]*/,{cases:{"@keywords":"keyword","@functions":"keyword","@default":"identifier"}}],[/[<>=!%&+\-*\/|~^]/,"operator"]],whitespace:[[/\s+/,"white"]],comments:[[/\/\/+.*/,"comment"],[/\/\*/,{token:"comment.quote",next:"@comment"}]],comment:[[/[^*\/]+/,"comment"],[/\*\//,{token:"comment.quote",next:"@pop"}],[/./,"comment"]],numbers:[[/0[xX][0-9a-fA-F]*/,"number"],[/[$][+-]*\d*(\.\d*)?/,"number"],[/((\d+(\.\d*)?)|(\.\d+))([eE][\-+]?\d+)?/,"number"]],strings:[[/N"/,{token:"string",next:"@string"}],[/"/,{token:"string",next:"@string"}]],string:[[/[^"]+/,"string"],[/""/,"string"],[/"/,{token:"string",next:"@pop"}]],complexIdentifiers:[[/\[/,{token:"identifier.quote",next:"@bracketedIdentifier"}],[/'/,{token:"identifier.quote",next:"@quotedIdentifier"}]],bracketedIdentifier:[[/[^\]]+/,"identifier"],[/]]/,"identifier"],[/]/,{token:"identifier.quote",next:"@pop"}]],quotedIdentifier:[[/[^']+/,"identifier"],[/''/,"identifier"],[/'/,{token:"identifier.quote",next:"@pop"}]]}};exports.language=T;
},{}]},{},["lDbc"], null)
//# sourceMappingURL=msdax.40229e2a.js.map