(self.webpackChunkgatsby_blog_template=self.webpackChunkgatsby_blog_template||[]).push([[230],{8594:function(e,t,a){var r,n,l;l=function(){return function(){return function(e){var t=[];if(0===e.length)return"";if("string"!=typeof e[0])throw new TypeError("Url must be a string. Received "+e[0]);if(e[0].match(/^[^/:]+:\/*$/)&&e.length>1){var a=e.shift();e[0]=a+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^/:]+):\/*/,"$1://");for(var r=0;r<e.length;r++){var n=e[r];if("string"!=typeof n)throw new TypeError("Url must be a string. Received "+n);""!==n&&(r>0&&(n=n.replace(/^[\/]+/,"")),n=r<e.length-1?n.replace(/[\/]+$/,""):n.replace(/[\/]+$/,"/"),t.push(n))}var l=t.join("/"),o=(l=l.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return o.shift()+(o.length>0?"?":"")+o.join("&")}("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},e.exports?e.exports=l():void 0===(n="function"==typeof(r=l)?r.call(t,a,t,e):r)||(e.exports=n)},3317:function(e,t,a){"use strict";var r=a(7294);t.Z=function(e){var t=e.title;return r.createElement("header",{className:"border-bottom border-color-light-grey"},r.createElement("div",{className:"container"},r.createElement("h1",{className:"margin-none padding-top-2 padding-bottom-2"},t)))}},2089:function(e,t,a){"use strict";var r=a(7294);t.Z=function(e){var t=e.content,a=e.sidebar;return r.createElement("section",{className:"main-container container"},r.createElement("div",{className:"content-wrapper padding-top-half padding-bottom-2"},t),r.createElement("div",{className:"sidebar-wrapper padding-top-half padding-bottom-2"},a))}},9354:function(e,t,a){"use strict";var r=a(7294),n=a(8415),l=a(2797),o=a.n(l);t.Z=function(e){var t=e.date,a=e.extraClass,l=void 0===a?"":a;return r.createElement("div",{className:"text-description "+l},o().postOnDate," ",(0,n.p6)(t))}},149:function(e,t,a){"use strict";a.d(t,{Z:function(){return d}});var r=a(4578),n=a(7294),l=a(6125),o=a(9778),i=function(e){var t=e.post,a=e.extraClass,r=void 0===a?"":a;return t.cover?n.createElement(o.Z,{to:t.slug,key:t.title,className:"thumbnail-wrapper line-height-reset "+r},n.createElement(l.G,{image:(0,l.d)(t.cover),className:"thumbnail-img",alt:""})):null},s=a(9354),c=function(e){var t=e.post,a=e.extraClass,r=void 0===a?"":a;return n.createElement("div",{className:"post-info-wrapper "+r},n.createElement(o.Z,{to:t.slug,key:t.title},n.createElement("h2",null,n.createElement("small",null,t.title))),n.createElement("div",{className:"margin-bottom-half"},t.excerpt),n.createElement("small",null,n.createElement(s.Z,{date:t.date})))},m=function(e){var t=e.post,a=e.hasThumbnail;return n.createElement("article",{key:t.title,className:"article-container padding-bottom-2 padding-top-2 border-bottom border-color-light-grey"},a&&n.createElement(i,{post:t}),n.createElement(c,{post:t}))},p=function(e){function t(){for(var t,a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(t=e.call.apply(e,[this].concat(r))||this).state={maxPosts:(t.props.hasLoadmore||t.props.forcePostsPerPage)&&t.props.postsPerPage?t.props.postsPerPage:t.props.postList.length},t.handleLoadmore=function(){var e=t.props,a=e.hasLoadmore,r=void 0!==a&&a,n=e.numberLoadmore;r&&t.setState((function(e){return{maxPosts:e.maxPosts+n}}))},t}return(0,r.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.postList,a=e.hasThumbnail,r=void 0===a||a,l=e.hasLoadmore,o=void 0!==l&&l,i=this.state.maxPosts;return n.createElement(n.Fragment,null,n.createElement("div",{className:"post-listing-container"},t.map((function(e,t){return t<i?n.createElement(m,{key:e.title,post:e,hasThumbnail:r}):null}))),o&&i<t.length&&n.createElement("div",{className:"loadmore-wrapper margin-top padding-top-half text-center"},n.createElement("button",{className:"btn-primary",onClick:this.handleLoadmore},this.props.btnLoadmore)))},t}(n.Component),d=p},4428:function(e,t,a){"use strict";var r=a(4578),n=a(7294),l=a(6125),o=a(5414),i=a(8594),s=a.n(i),c=a(2797),m=a.n(c),p=a(8415),d=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e,t,a,r,i=this.props,c=i.postNode,d=i.postPath,u=i.postSEO,g="";if(u){var h=c.frontmatter;e=h.title,t=h.description?h.description:c.excerpt,a=h.keywords,h.cover&&(g=(0,l.e)(h.cover)),r=s()(m().siteUrl,m().pathPrefix,d)}else e=m().siteTitle,t=m().siteDescription,g=m().siteLogo;g=s()(m().siteUrl,m().pathPrefix,g);var f=s()(m().siteUrl,m().pathPrefix),E=[{"@context":"http://schema.org","@type":"WebSite",url:f,name:e,alternateName:m().siteTitleAlt?m().siteTitleAlt:""}];return u&&E.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":r,name:e,image:g}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:f,name:e,alternateName:m().siteTitleAlt?m().siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:g},description:t}),n.createElement(o.Z,null,n.createElement("meta",{name:"description",content:t}),n.createElement("meta",{name:"image",content:g}),a&&n.createElement("meta",{name:"keywords",content:a}),n.createElement("link",{rel:"canonical",href:(0,p.sw)(r||m().siteUrl)}),n.createElement("script",{type:"application/ld+json"},JSON.stringify(E)),n.createElement("meta",{property:"og:url",content:u?r:f}),u?n.createElement("meta",{property:"og:type",content:"article"}):null,n.createElement("meta",{property:"og:title",content:e}),n.createElement("meta",{property:"og:description",content:t}),n.createElement("meta",{property:"og:image",content:g}),n.createElement("meta",{property:"fb:app_id",content:m().siteFBAppID?m().siteFBAppID:""}),n.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),n.createElement("meta",{name:"twitter:creator",content:m().userTwitter?m().userTwitter:""}),n.createElement("meta",{name:"twitter:title",content:e}),n.createElement("meta",{name:"twitter:description",content:t}),n.createElement("meta",{name:"twitter:image",content:g}))},t}(n.Component);t.Z=d},1097:function(e,t,a){"use strict";a.d(t,{Z:function(){return v}});var r=a(7294),n=a(9778),l=function(e){var t=e.extraClass,a=void 0===t?"":t,n=e.children;return r.createElement("aside",{className:a+" padding-top padding-bottom"},n)},o=function(e){var t=e.title;return r.createElement("h3",{className:"text-uppercase"},r.createElement("small",null,t))},i=a(8415),s=a(2797),c=a.n(s),m=function(e){var t=e.categoryList;return r.createElement(l,{extraClass:"categories-container"},r.createElement(o,{title:c().categoryWidgetTitle}),r.createElement("div",null,t.map((function(e){return r.createElement(n.Z,{key:e,to:(0,i.IX)(e),className:"block border-bottom border-color-light-grey padding-top-half padding-bottom-half"},r.createElement("span",null,e))}))))},p=function(e){var t=e.content;return r.createElement(n.Z,{key:t,to:(0,i.bT)(t),className:"inline-block margin-right-half margin-bottom-half  border border-color-light-grey padding-left-half padding-right-half"},r.createElement("span",null,t))},d=function(e){var t=e.tagList;return r.createElement(l,{extraClass:"categories-container"},r.createElement(o,{title:c().tagWidgetTitle}),r.createElement("div",null,t.map((function(e){return r.createElement(p,{key:e,content:e})}))))},u=function(e){var t=e.latestPostEdges,a=(0,i.UI)(t);return r.createElement(l,{extraClass:"latest-posts-container"},r.createElement(o,{title:c().latestPostsWidgetTitle}),r.createElement("div",null,a.map((function(e){return r.createElement(n.Z,{key:e.title,to:e.slug,className:"block border-bottom border-color-light-grey padding-top-half padding-bottom-half"},r.createElement("span",null,e.title))}))))},g=function(e){var t=e.links;return r.createElement(r.Fragment,null,t&&t.length>0&&r.createElement(l,{extraClass:"categories-container"},r.createElement(o,{title:c().linksWidgetTitle}),r.createElement("div",null,t.map((function(e){return r.createElement(n.Z,{key:e.label,to:e.url,className:"block border-bottom border-color-light-grey padding-top-half padding-bottom-half"},r.createElement("span",null,e.label))})))))},h=a(4578),f=a(7606),E=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){return r.createElement(r.Fragment,null,c().hasSearch&&r.createElement(l,{extraClass:"search-container"},r.createElement(o,{title:c().searchWidgetTitle}),r.createElement("form",{className:"margin-bottom-none",action:"/search/",method:"get"},r.createElement("div",{className:"container-full row padding-none margin-bottom-none"},r.createElement("div",{className:"padding-none padding-right-half col-xs-10"},r.createElement("input",{className:"margin-bottom-none",type:"text",name:"q",placeholder:c().searchWidgetPlaceHolder,required:!0,spellCheck:"false"})),r.createElement("div",{className:"padding-none padding-left-half col-xs-2"},r.createElement("button",{type:"submit",className:"btn btn-primary"},r.createElement(f.G,{icon:["fas","search"],style:{color:"#FFFFFF"}})))))))},t}(r.Component),b=E,v=function(e){var t=e.tagList,a=e.categoryList,n=e.latestPostEdges,l=e.links;return r.createElement("aside",{className:"sidebar-container width-full "+(c().sidebarSticky?"height-full":"")},r.createElement(b,null),n&&r.createElement(u,{latestPostEdges:n}),a&&r.createElement(m,{categoryList:a}),t&&r.createElement(d,{tagList:t}),l&&r.createElement("div",{className:"position-sticky top-zero"},r.createElement(g,{links:l})))}},4199:function(e,t,a){"use strict";a.r(t);var r=a(4578),n=a(7294),l=a(5414),o=a(6283),i=a(3317),s=a(2089),c=a(1097),m=a(149),p=a(9778),d=a(4428),u=a(8415),g=a(2797),h=a.n(g),f=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges,t=(0,u.UI)(e),a=(0,u.yl)(t),r=a.tagList,g=a.categoryList,f=n.createElement(n.Fragment,null,n.createElement(m.Z,{postList:t,hasThumbnail:h().homeHasThumbnail,hasLoadmore:h().homeHasLoadmore,postsPerPage:h().postsPerPage,numberLoadmore:h().numberLoadmore,btnLoadmore:h().btnLoadmore,forcePostsPerPage:0==h().homeHasLoadmore}),!h().homeHasLoadmore&&t.length>h().postsPerPage&&n.createElement("div",{className:"more-articles-wrapper margin-top padding-top-half text-center"},n.createElement(p.Z,{className:"btn btn-primary",to:""+h().pathPrefixBlog+h().pathPrefixPagination+"/2"},h().homeMoreArticles))),E=n.createElement(c.Z,{tagList:r,categoryList:g,links:h().sidebarLinks}),b=h().homeHeader?h().siteTitle+" - "+h().homeHeader:""+h().siteTitle;return n.createElement(o.Z,null,n.createElement("div",{className:"index-container"},n.createElement(l.Z,{title:h().siteTitle}),n.createElement(d.Z,null),n.createElement(i.Z,{title:b}),n.createElement(s.Z,{content:f,sidebar:E})))},t}(n.Component);t.default=f}}]);
//# sourceMappingURL=component---src-pages-index-jsx-e2cc0039f4aad7c28c81.js.map