let n;const u="en",r=["en","pt-br"];let a=()=>u;const l=e=>{typeof e=="function"?a=t(e):a=t(()=>e),n!==void 0&&n(a())};function t(e){return()=>{const g=e();if(!o(g))throw new Error("languageTag() didn't return a valid language tag. Check your setLanguageTag call");return g}}const c=e=>{n=e};function o(e){return r.includes(e)}const i=Object.freeze(Object.defineProperty({__proto__:null,availableLanguageTags:r,isAvailableLanguageTag:o,get languageTag(){return a},onSetLanguageTag:c,setLanguageTag:l,sourceLanguageTag:u},Symbol.toStringTag,{value:"Module"}));export{r as a,a as l,i as r};
