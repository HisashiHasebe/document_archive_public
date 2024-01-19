"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[17903],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>c});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),d=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=d(t.components);return n.createElement(s.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),m=d(a),k=r,c=m["".concat(s,".").concat(k)]||m[k]||u[k]||l;return a?n.createElement(c,i(i({ref:e},p),{},{components:a})):n.createElement(c,i({ref:e},p))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[m]="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},35464:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={title:"PHP Functions Available for Kuroco's Smarty",description:"This document summarizes the PHP functions that can be used as custom processing or batch processing with Smarty plugins, as modifiers for variables."},i=void 0,o={unversionedId:"reference/smarty-php-function",id:"reference/smarty-php-function",title:"PHP Functions Available for Kuroco's Smarty",description:"This document summarizes the PHP functions that can be used as custom processing or batch processing with Smarty plugins, as modifiers for variables.",source:"@site/docs/reference/smarty-php-function.md",sourceDirName:"reference",slug:"/reference/smarty-php-function",permalink:"/docs/reference/smarty-php-function",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/reference/smarty-php-function.md",tags:[],version:"current",frontMatter:{title:"PHP Functions Available for Kuroco's Smarty",description:"This document summarizes the PHP functions that can be used as custom processing or batch processing with Smarty plugins, as modifiers for variables."},sidebar:"documentationSidebar",previous:{title:"Common Object Type Definitions in Kuroco",permalink:"/docs/reference/general-object-type"},next:{title:"Dashboard",permalink:"/docs/management/dashboard"}},s={},d=[{value:"Available PHP Functions",id:"available-php-functions",level:2},{value:"if Statement",id:"if-statement",level:3},{value:"Modifiers",id:"modifiers",level:3}],p={toc:d},m="wrapper";function u(t){let{components:e,...a}=t;return(0,r.kt)(m,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can use Smarty plugins for custom functions or batch processes in Kuroco.",(0,r.kt)("br",{parentName:"p"}),"\n","This document provides the list of the PHP functions that can be used as modifiers for variables."),(0,r.kt)("h2",{id:"available-php-functions"},"Available PHP Functions"),(0,r.kt)("h3",{id:"if-statement"},"if Statement"),(0,r.kt)("p",null,"The following PHP functions can be used with the {if} statement in Kuroco's Smarty."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"PHP Function"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"is_null"),(0,r.kt)("td",{parentName:"tr",align:null},"Checks if a variable is null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"count"),(0,r.kt)("td",{parentName:"tr",align:null},"Counts all elements in an array or Countable object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"is_array"),(0,r.kt)("td",{parentName:"tr",align:null},"Checks if a variable is an array")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"in_array"),(0,r.kt)("td",{parentName:"tr",align:null},"Checks if a value exists in an array")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"isset"),(0,r.kt)("td",{parentName:"tr",align:null},"Checks if a variable is declared and is not null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"is_object"),(0,r.kt)("td",{parentName:"tr",align:null},"Checks if a variable is an object")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-smarty"},"{if is_null($hoge)}\n    $hoge is null.\n{/if}\n")),(0,r.kt)("h3",{id:"modifiers"},"Modifiers"),(0,r.kt)("p",null,"The following PHP functions can be used as modifiers for variables in Kuroco's Smarty."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"PHP Function Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"array_column"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the values from a single column of an input array")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"array_key_exists"),(0,r.kt)("td",{parentName:"tr",align:null},"Checks if a specified key or index exists in an array")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"array_keys"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns all the keys of an array, or a subset of the keys")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"array_merge"),(0,r.kt)("td",{parentName:"tr",align:null},"Merges one or more arrays")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"array_pop"),(0,r.kt)("td",{parentName:"tr",align:null},"Removes an element from the end of an array")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"array_push"),(0,r.kt)("td",{parentName:"tr",align:null},"Pushes one or more elements onto the end of an array")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"array_reverse"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns an array with elements in reverse order")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"array_shift"),(0,r.kt)("td",{parentName:"tr",align:null},"Removes the first element from an array and returns it")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"array_slice"),(0,r.kt)("td",{parentName:"tr",align:null},"Extracts a slice of an array")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"array_unique"),(0,r.kt)("td",{parentName:"tr",align:null},"Removes duplicate values from an array")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"array_values"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns all the values of an array")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"arsort"),(0,r.kt)("td",{parentName:"tr",align:null},"Sorts an array in reverse order, maintaining the key to element relationship")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"asort"),(0,r.kt)("td",{parentName:"tr",align:null},"Sorts an array in ascending order, maintaining the key to element relationship")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"base64_decode"),(0,r.kt)("td",{parentName:"tr",align:null},"Decodes data encoded with MIME base64")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"base64_encode"),(0,r.kt)("td",{parentName:"tr",align:null},"Encodes data with MIME base64")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"explode"),(0,r.kt)("td",{parentName:"tr",align:null},"Splits a string by a string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filter_var"),(0,r.kt)("td",{parentName:"tr",align:null},"Filters a variable with a specified filter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"floor"),(0,r.kt)("td",{parentName:"tr",align:null},"Rounds a number down to the nearest integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"html_entity_decode"),(0,r.kt)("td",{parentName:"tr",align:null},"Converts HTML entities to their corresponding characters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"htmlspecialchars_decode"),(0,r.kt)("td",{parentName:"tr",align:null},"Converts special HTML entities back to characters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http_build_query"),(0,r.kt)("td",{parentName:"tr",align:null},"Generates a URL-encoded query string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"implode"),(0,r.kt)("td",{parentName:"tr",align:null},"Joins array elements with a string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"intval"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the integer value of a variable")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"is_array"),(0,r.kt)("td",{parentName:"tr",align:null},"Checks if a variable is an array")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"is_numeric"),(0,r.kt)("td",{parentName:"tr",align:null},"Checks if a variable is a number or a numeric string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"json_decode"),(0,r.kt)("td",{parentName:"tr",align:null},"Decodes a JSON string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"json_encode"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns a JSON encoded string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key"),(0,r.kt)("td",{parentName:"tr",align:null},"Fetches a key from an array")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"krsort"),(0,r.kt)("td",{parentName:"tr",align:null},"Sorts an array by key in reverse order")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ksort"),(0,r.kt)("td",{parentName:"tr",align:null},"Sorts an array by key in ascending order")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the highest value in an array")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mb_convert_encoding"),(0,r.kt)("td",{parentName:"tr",align:null},"Converts a string from one character encoding to another")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mb_convert_kana"),(0,r.kt)("td",{parentName:"tr",align:null},"Converts Kana characters to a specific Kana type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mb_strimwidth"),(0,r.kt)("td",{parentName:"tr",align:null},"Truncates a string to a specified width")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mb_stripos"),(0,r.kt)("td",{parentName:"tr",align:null},"Finds the position of the first occurrence of a case-insensitive string within another string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mb_strlen"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the length of a string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mb_strpos"),(0,r.kt)("td",{parentName:"tr",align:null},"Finds the position of the first occurrence of a string inside another string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mb_strwidth"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the width of a string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mb_substr"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns part of a string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"md5"),(0,r.kt)("td",{parentName:"tr",align:null},"Calculates the MD5 hash of a string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"min"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the lowest value in an array")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mt_rand"),(0,r.kt)("td",{parentName:"tr",align:null},"Generates a random number using the Mersenne Twister random number generator")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nl2br"),(0,r.kt)("td",{parentName:"tr",align:null},"Inserts HTML line breaks before all newlines in a string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"number_format"),(0,r.kt)("td",{parentName:"tr",align:null},"Formats a number with grouped thousands")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"parse_url"),(0,r.kt)("td",{parentName:"tr",align:null},"Parses a URL and returns its components")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pathinfo"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns information about a file path")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"property_exists"),(0,r.kt)("td",{parentName:"tr",align:null},"Checks if an object or class has a property")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"range"),(0,r.kt)("td",{parentName:"tr",align:null},"Creates an array containing a range of elements")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rawurldecode"),(0,r.kt)("td",{parentName:"tr",align:null},"Decodes a URL-encoded string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"round"),(0,r.kt)("td",{parentName:"tr",align:null},"Rounds a float to the nearest integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rsort"),(0,r.kt)("td",{parentName:"tr",align:null},"Sorts an array in reverse order")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"shuffle"),(0,r.kt)("td",{parentName:"tr",align:null},"Shuffles an array")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sort"),(0,r.kt)("td",{parentName:"tr",align:null},"Sorts an array in ascending order")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"str_pad"),(0,r.kt)("td",{parentName:"tr",align:null},"Pads a string to a certain length with another string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"strip_tags"),(0,r.kt)("td",{parentName:"tr",align:null},"Strips HTML and PHP tags from a string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stripos"),(0,r.kt)("td",{parentName:"tr",align:null},"Finds the position of the first occurrence of a string inside another string, case-insensitive")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"strlen"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the length of a string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"strpos"),(0,r.kt)("td",{parentName:"tr",align:null},"Finds the position of the first occurrence of a string inside another string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"strstr"),(0,r.kt)("td",{parentName:"tr",align:null},"Finds the position of the first occurrence of a string inside another string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"strtolower"),(0,r.kt)("td",{parentName:"tr",align:null},"Converts a string to lowercase")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"strtotime"),(0,r.kt)("td",{parentName:"tr",align:null},"Converts an English textual datetime description to a Unix timestamp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"strtoupper"),(0,r.kt)("td",{parentName:"tr",align:null},"Converts a string to uppercase")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"strval"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the string value of a variable")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"substr"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns a part of a string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"trim"),(0,r.kt)("td",{parentName:"tr",align:null},"Removes whitespace from the beginning and end of a string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"unset"),(0,r.kt)("td",{parentName:"tr",align:null},"Unsets a specified variable")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"urlencode"),(0,r.kt)("td",{parentName:"tr",align:null},"URL-encodes a string")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Specify the variable as the first argument of the function and the function name as the modifier. For the second and subsequent arguments, write them after the modifier separated by a colon (",(0,r.kt)("inlineCode",{parentName:"li"},":"),")."),(0,r.kt)("li",{parentName:"ul"},"If the variable is an array, prefix the function name with an ",(0,r.kt)("inlineCode",{parentName:"li"},"@")," sign.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example (for array_column)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-smarty"},'{* Example of a record set returned from a database *}\n{assign_array var="records" values=""}\n\n{assign_array var="record" values=""}\n{append var="record" index="id" value=2135}\n{append var="record" index="first_name" value="John"}\n{append var="record" index="last_name" value="Doe"}\n{append var="records" value=$record}\n\n{assign_array var="record" values=""}\n{append var="record" index="id" value=3245}\n{append var="record" index="first_name" value="Sally"}\n{append var="record" index="last_name" value="Smith"}\n{append var="records" value=$record}\n\n{assign_array var="record" values=""}\n{append var="record" index="id" value=5342}\n{append var="record" index="first_name" value="Jane"}\n{append var="record" index="last_name" value="Jones"}\n{append var="records" value=$record}\n\n{assign_array var="record" values=""}\n{append var="record" index="id" value=5623}\n{append var="record" index="first_name" value="Peter"}\n{append var="record" index="last_name" value="Doe"}\n{append var="records" value=$record}\n\n{* Specify the variable as the first argument of the function and the function name as the modifier. For the second and subsequent arguments, write them after the modifier separated by a colon (`:`) *}\n{* If the variable is an array, prefix the function name with an at sign (`@`) *}\n{assign var="first_names" value=$records|@array_column:\'first_name\'}\n\n{$first_names|@debug_print_var}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Output"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Array (4)\n0 => "John"\n1 => "Sally"\n2 => "Jane"\n3 => "Peter"\n')))}u.isMDXComponent=!0}}]);