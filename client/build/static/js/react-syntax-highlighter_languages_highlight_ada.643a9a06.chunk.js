(self.webpackChunkclient=self.webpackChunkclient||[]).push([[9051],{5825:e=>{e.exports=function(e){const n="\\d(_|\\d)*",s="[eE][-+]?"+n,a="\\b("+(n+"#\\w+(\\.\\w+)?#("+s+")?")+"|"+(n+"(\\."+n+")?("+s+")?")+")",i="[A-Za-z](_?[A-Za-z0-9.])*",r="[]\\{\\}%#'\"",t=e.COMMENT("--","$"),c={begin:"\\s+:\\s+",end:"\\s*(:=|;|\\)|=>|$)",illegal:r,contains:[{beginKeywords:"loop for declare others",endsParent:!0},{className:"keyword",beginKeywords:"not null constant access function procedure in out aliased exception"},{className:"type",begin:i,endsParent:!0,relevance:0}]};return{name:"Ada",case_insensitive:!0,keywords:{keyword:"abort else new return abs elsif not reverse abstract end accept entry select access exception of separate aliased exit or some all others subtype and for out synchronized array function overriding at tagged generic package task begin goto pragma terminate body private then if procedure type case in protected constant interface is raise use declare range delay limited record when delta loop rem while digits renames with do mod requeue xor",literal:"True False"},contains:[t,{className:"string",begin:/"/,end:/"/,contains:[{begin:/""/,relevance:0}]},{className:"string",begin:/'.'/},{className:"number",begin:a,relevance:0},{className:"symbol",begin:"'"+i},{className:"title",begin:"(\\bwith\\s+)?(\\bprivate\\s+)?\\bpackage\\s+(\\bbody\\s+)?",end:"(is|$)",keywords:"package body",excludeBegin:!0,excludeEnd:!0,illegal:r},{begin:"(\\b(with|overriding)\\s+)?\\b(function|procedure)\\s+",end:"(\\bis|\\bwith|\\brenames|\\)\\s*;)",keywords:"overriding function procedure with is renames return",returnBegin:!0,contains:[t,{className:"title",begin:"(\\bwith\\s+)?\\b(function|procedure)\\s+",end:"(\\(|\\s+|$)",excludeBegin:!0,excludeEnd:!0,illegal:r},c,{className:"type",begin:"\\breturn\\s+",end:"(\\s+|;|$)",keywords:"return",excludeBegin:!0,excludeEnd:!0,endsParent:!0,illegal:r}]},{className:"type",begin:"\\b(sub)?type\\s+",end:"\\s+",keywords:"type",excludeBegin:!0,illegal:r},c]}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_ada.643a9a06.chunk.js.map