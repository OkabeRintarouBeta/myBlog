(self.webpackChunkgatsby_blog_template=self.webpackChunkgatsby_blog_template||[]).push([[759],{8594:function(e,t,r){var n,a,i;i=function(){return function(){return function(e){var t=[];if(0===e.length)return"";if("string"!=typeof e[0])throw new TypeError("Url must be a string. Received "+e[0]);if(e[0].match(/^[^/:]+:\/*$/)&&e.length>1){var r=e.shift();e[0]=r+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^/:]+):\/*/,"$1://");for(var n=0;n<e.length;n++){var a=e[n];if("string"!=typeof a)throw new TypeError("Url must be a string. Received "+a);""!==a&&(n>0&&(a=a.replace(/^[\/]+/,"")),a=n<e.length-1?a.replace(/[\/]+$/,""):a.replace(/[\/]+$/,"/"),t.push(a))}var i=t.join("/"),o=(i=i.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return o.shift()+(o.length>0?"?":"")+o.join("&")}("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},e.exports?e.exports=i():void 0===(a="function"==typeof(n=i)?n.call(t,r,t,e):n)||(e.exports=a)},3317:function(e,t,r){"use strict";var n=r(7294);t.Z=function(e){var t=e.title;return n.createElement("header",{className:"border-bottom border-color-light-grey"},n.createElement("div",{className:"container"},n.createElement("h1",{className:"margin-none padding-top-2 padding-bottom-2"},t)))}},4428:function(e,t,r){"use strict";var n=r(4578),a=r(7294),i=r(6125),o=r(5414),l=r(8594),c=r.n(l),s=r(2797),m=r.n(s),p=r(8415),u=function(e){function t(){return e.apply(this,arguments)||this}return(0,n.Z)(t,e),t.prototype.render=function(){var e,t,r,n,l=this.props,s=l.postNode,u=l.postPath,g=l.postSEO,d="";if(g){var f=s.frontmatter;e=f.title,t=f.description?f.description:s.excerpt,r=f.keywords,f.cover&&(d=(0,i.e)(f.cover)),n=c()(m().siteUrl,m().pathPrefix,u)}else e=m().siteTitle,t=m().siteDescription,d=m().siteLogo;d=c()(m().siteUrl,m().pathPrefix,d);var h=c()(m().siteUrl,m().pathPrefix),E=[{"@context":"http://schema.org","@type":"WebSite",url:h,name:e,alternateName:m().siteTitleAlt?m().siteTitleAlt:""}];return g&&E.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":n,name:e,image:d}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:h,name:e,alternateName:m().siteTitleAlt?m().siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:d},description:t}),a.createElement(o.Z,null,a.createElement("meta",{name:"description",content:t}),a.createElement("meta",{name:"image",content:d}),r&&a.createElement("meta",{name:"keywords",content:r}),a.createElement("link",{rel:"canonical",href:(0,p.sw)(n||m().siteUrl)}),a.createElement("script",{type:"application/ld+json"},JSON.stringify(E)),a.createElement("meta",{property:"og:url",content:g?n:h}),g?a.createElement("meta",{property:"og:type",content:"article"}):null,a.createElement("meta",{property:"og:title",content:e}),a.createElement("meta",{property:"og:description",content:t}),a.createElement("meta",{property:"og:image",content:d}),a.createElement("meta",{property:"fb:app_id",content:m().siteFBAppID?m().siteFBAppID:""}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:creator",content:m().userTwitter?m().userTwitter:""}),a.createElement("meta",{name:"twitter:title",content:e}),a.createElement("meta",{name:"twitter:description",content:t}),a.createElement("meta",{name:"twitter:image",content:d}))},t}(a.Component);t.Z=u},8544:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var n=r(7294),a=r(5414),i=r(6283),o=r(3317),l=r(2089),c=r(1097),s=function(e){var t=e.postNode,r=e.slug,a=t.frontmatter;return a.id||(a.id=r),n.createElement("div",{className:"page-container"},n.createElement("div",{className:"padding-top padding-bottom",dangerouslySetInnerHTML:{__html:t.html}}))},m=r(4428),p=r(2797),u=r.n(p);(0,r(6480).q)();var g=function(e){var t=e.data,r=e.pageContext,p=r.slug,g=r.tagList,d=r.categoryList,f=r.latestPostEdges,h=t.markdownRemark,E=h.frontmatter.title,y=n.createElement(s,{postNode:h,slug:p}),v=n.createElement(c.Z,{tagList:g,categoryList:d,latestPostEdges:f,links:u().sidebarLinks});return n.createElement(i.Z,null,n.createElement(a.Z,null,n.createElement("title",null,E+" - "+u().siteTitle)),n.createElement(m.Z,{postPath:p,postNode:h,postSEO:!0}),n.createElement(o.Z,{title:E}),n.createElement(l.Z,{content:y,sidebar:v}))}}}]);
//# sourceMappingURL=component---src-templates-page-template-jsx-290c9eaa469db30a04b3.js.map