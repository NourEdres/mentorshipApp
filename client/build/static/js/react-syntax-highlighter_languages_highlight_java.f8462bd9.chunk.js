(self.webpackChunkclient=self.webpackChunkclient||[]).push([[3975],{891:e=>{var n="[0-9](_*[0-9])*",a="\\.(".concat(n,")"),c="[0-9a-fA-F](_*[0-9a-fA-F])*",s={className:"number",variants:[{begin:"(\\b(".concat(n,")((").concat(a,")|\\.)?|(").concat(a,"))")+"[eE][+-]?(".concat(n,")[fFdD]?\\b")},{begin:"\\b(".concat(n,")((").concat(a,")[fFdD]?\\b|\\.([fFdD]\\b)?)")},{begin:"(".concat(a,")[fFdD]?\\b")},{begin:"\\b(".concat(n,")[fFdD]\\b")},{begin:"\\b0[xX]((".concat(c,")\\.?|(").concat(c,")?\\.(").concat(c,"))")+"[pP][+-]?(".concat(n,")[fFdD]?\\b")},{begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:"\\b0[xX](".concat(c,")[lL]?\\b")},{begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],relevance:0};e.exports=function(e){var n="[\xc0-\u02b8a-zA-Z_$][\xc0-\u02b8a-zA-Z_$0-9]*",a=n+"(<"+n+"(\\s*,\\s*"+n+")*>)?",c="false synchronized int abstract float private char boolean var static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private module requires exports do",t={className:"meta",begin:"@"+n,contains:[{begin:/\(/,end:/\)/,contains:["self"]}]};const i=s;return{name:"Java",aliases:["jsp"],keywords:c,illegal:/<\/|#/,contains:[e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{begin:/\w+@/,relevance:0},{className:"doctag",begin:"@[A-Za-z]+"}]}),{begin:/import java\.[a-z]+\./,keywords:"import",relevance:2},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{className:"class",beginKeywords:"class interface enum",end:/[{;=]/,excludeEnd:!0,relevance:1,keywords:"class interface enum",illegal:/[:"\[\]]/,contains:[{beginKeywords:"extends implements"},e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"new throw return else",relevance:0},{className:"class",begin:"record\\s+"+e.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:!0,excludeEnd:!0,end:/[{;=]/,keywords:c,contains:[{beginKeywords:"record"},{begin:e.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:!0,relevance:0,contains:[e.UNDERSCORE_TITLE_MODE]},{className:"params",begin:/\(/,end:/\)/,keywords:c,relevance:0,contains:[e.C_BLOCK_COMMENT_MODE]},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{className:"function",begin:"("+a+"\\s+)+"+e.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:c,contains:[{begin:e.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:!0,relevance:0,contains:[e.UNDERSCORE_TITLE_MODE]},{className:"params",begin:/\(/,end:/\)/,keywords:c,relevance:0,contains:[t,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,i,e.C_BLOCK_COMMENT_MODE]},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},i,t]}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_java.f8462bd9.chunk.js.map