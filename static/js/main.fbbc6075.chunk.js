(window.webpackJsonpundefined=window.webpackJsonpundefined||[]).push([[0],{30:function(e,a,t){e.exports=t.p+"static/media/Profile_Pic.f3388a31.png"},35:function(e,a,t){e.exports=t(69)},40:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(19),r=t.n(c),i=(t(40),t(3)),s=t(12),o=t(13),m=t(15),u=t(14),d=t(16),E=t(8),p=t.n(E),h=[{url:"about",text:"About"},{url:"resume",text:"Resume"}],b=t(34),f=t(26),v=t.n(f),g=function(){var e=Object(l.useState)(!1),a=Object(b.a)(e,2),t=a[0],c=a[1];return n.a.createElement("div",{className:"hamburger-container"},n.a.createElement("nav",{className:"main",id:"hambuger-nav"},n.a.createElement("ul",null,t?n.a.createElement("li",{className:"menu close-menu"},n.a.createElement("div",{onClick:function(){return c(!t)},className:"menu-hover"},"\u2715")):n.a.createElement("li",{className:"menu open-menu"},n.a.createElement("div",{onClick:function(){return c(!t)},className:"menu-hover"},"\u2630")))),n.a.createElement(v.a.slide,{right:!0,isOpen:t},n.a.createElement("ul",{className:"hamburger-ul"},h.map(function(e){return n.a.createElement("li",{key:e.text},n.a.createElement(i.b,{to:e.url,onClick:function(){return c(!t)}},n.a.createElement("h3",{className:"index-li"},e.text)))}))))},N=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("header",{id:"header"},n.a.createElement("h1",{className:"index-link"},n.a.createElement(i.b,{to:""},"Michael Ross")),n.a.createElement("nav",{className:"links"},n.a.createElement("ul",null,h.map(function(e){return n.a.createElement("li",{key:e.text},n.a.createElement(i.b,{to:e.url},e.text))}))),n.a.createElement(g,null))}}]),a}(n.a.Component),k=t(29),w=t(30),y=t.n(w),S=t(31),C=t.n(S),x=t(32),M=t.n(x),O=t(33),j=t.n(O),A=[{link:"https://github.com/MikeDRoss",label:"Github",icon:C.a},{link:"https://www.linkedin.com/in/michael-ross-0067a0b5",label:"LinkedIn",icon:M.a},{link:"mailto:michael4725@gmail.com",label:"Email",icon:j.a}],R=function(){return n.a.createElement("section",{id:"sidebar"},n.a.createElement("section",{id:"intro"},n.a.createElement(i.b,{to:"/",className:"logo"},n.a.createElement("img",{src:y.a,alt:""})),n.a.createElement("header",null,n.a.createElement("h2",null,"Michael Ross"),n.a.createElement("p",null,n.a.createElement("a",{href:"mailto:michael4725@gmail.com"},"michael4725@gmail.com")))),n.a.createElement("section",{className:"blurb"},n.a.createElement("h2",null,"About"),n.a.createElement("p",null,"Hi, I'm Michael. I'm a Senior Software Engineer at Capital One with extensive experience building scalable backend systems on the public cloud, provisioning the infrastructure these systems run on, and everything in between."),n.a.createElement("ul",{className:"actions"},n.a.createElement("li",null,n.a.createElement(i.b,{to:"/resume",className:"button"},"Learn More")," : ",n.a.createElement(i.b,{to:"/about",className:"button"},"About Me")))),n.a.createElement("section",{id:"footer"},n.a.createElement("ul",{className:"icons"},A.map(function(e){return n.a.createElement("li",{key:e.label},n.a.createElement("a",{href:e.link},n.a.createElement(k.a,{icon:e.icon})))})),n.a.createElement("p",{className:"copyright"},"\xa9 Michael Ross ",n.a.createElement(i.b,{to:"/"},"mikedross.github.io"))))},D=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"componentWillMount",value:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}},{key:"render",value:function(){return n.a.createElement("div",{id:"wrapper"},n.a.createElement(p.a,{titleTemplate:"%s | Michael Ross",defaultTitle:"Michael Ross"}),n.a.createElement(N,null),n.a.createElement("div",{id:"main"},this.props.children),n.a.createElement(R,null))}}]),a}(l.Component),P=function(){return n.a.createElement(D,null,n.a.createElement("article",{className:"post",id:"index"},n.a.createElement("header",null,n.a.createElement("div",{className:"title"},n.a.createElement("h2",null,n.a.createElement(i.b,{to:"/"},"Welcome")),n.a.createElement("p",null,"I used this website as an opportunity to teach myself modern web development. Feel free to look around!"),n.a.createElement("p",null,n.a.createElement("a",{href:"https://github.com/MikeDRoss/personal-website"},"source code"))))))},T=function(){return n.a.createElement(D,null,n.a.createElement(p.a,{title:"About"}),n.a.createElement("article",{className:"post",id:"about"},n.a.createElement("header",null,n.a.createElement("div",{className:"title"},n.a.createElement("h2",null,"About Me"),n.a.createElement("p",null,"For information on my professional background, check out my ",n.a.createElement("a",{href:"https://www.linkedin.com/in/michael-ross-0067a0b5"},"LinkedIn"),"."),n.a.createElement("p",null,"Hobbies coming soon...")))))},B=(t(68),function(){return n.a.createElement(D,null,n.a.createElement(p.a,{title:"Resume"}),n.a.createElement("article",{className:"post",id:"resume"},n.a.createElement("section",{className:"top"},n.a.createElement("div",{className:"uppercase name"},"Michael Ross"),n.a.createElement("div",{className:"uppercase role"},"Full Stack Software Engineer"),n.a.createElement("div",null,n.a.createElement("ul",{className:"contact"},n.a.createElement("li",null,n.a.createElement("a",{href:"mailto:michael4725@gmail.com"},"michael4725@gmail.com")),n.a.createElement("li",null,n.a.createElement("a",{href:"tel:2023520365"},"(202) 352-0365"))))),n.a.createElement("section",{className:"middle"},n.a.createElement("div",{id:"work"},n.a.createElement("div",{className:"header"},"Professional Experience"),n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"job"},"Capital One, Senior Software Engineer",n.a.createElement("span",{className:"year"},"[01-2018] - Present")),n.a.createElement("ul",{className:"custom-bullet"},n.a.createElement("li",null,"Designed and delivered the Retail Bank's Address Book. This system listens and stores account information for the contacts that customers pay in order to build out a custom contact list for customers across all payment rails i.e. Zhelle, Wire Transfers, Billpay, etc.."),n.a.createElement("li",null,"Pioneered use of choreographer design pattern to decouple rails by designing an event driven architecture"),n.a.createElement("li",null,"Led discussions as a devops SME to consolidate deployments of dockerized applications to a shared ECS cluster across 14 agile teams"),n.a.createElement("li",null,"Led effort to publish fraudulent external account linking attempts to a kafka cluster for both fraud/operations analysis and real time fraud decisioning for customers attempting ACH transfers. This has led to saving 800k/year in fraud losses"),n.a.createElement("li",null,"Designed and developed a stateless ecosystem of microservices that enabled Capital One Retail locations to print debit cards at the time of account opening"),n.a.createElement("li",null,"Conduct interviews for potential candidates at the Senior/Principle Software Developer level.")),n.a.createElement("div",{className:"job"},"Capital One, Associate Software Developer",n.a.createElement("span",{className:"year"},"[07-2016] - [01-2018]")),n.a.createElement("ul",{className:"custom-bullet"},n.a.createElement("li",null,"Singlehandedly designed and developed a CICD pipeline for Retail Bank's Digital Debit Card offering. This pipeline included push button deployments of an ECS cluster, dockerized applications with blue/green 0 downtime deployments, new relic apm monitoring, and filebeat log forwarding to a centrailzed ELK stack."),n.a.createElement("li",null,"Led comprehensive effort to update Capital One's ATM system of record from an excel spreadsheet to a RESTful ecosystem of serverless AWS Lambda Functions backed by a Postgresql DB.")),n.a.createElement("div",{className:"job"},"IBM, Mobile Development Intern",n.a.createElement("span",{className:"year"},"[05-2015] - [08-2015]")),n.a.createElement("ul",{className:"custom-bullet"}),n.a.createElement("div",{className:"job"},"Energage, Web Development Intern",n.a.createElement("span",{className:"year"},"[05-2014] - [08-2014]")),n.a.createElement("ul",{className:"custom-bullet"}))),n.a.createElement("div",{id:"work"},n.a.createElement("div",{className:"header"},"Volunteering Experience"),n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"job"},"Capital One CODERS",n.a.createElement("span",{className:"year"},"[03-2017] - Present")),n.a.createElement("ul",{className:"custom-bullet"},n.a.createElement("li",null,"Capital One sponsored program to introduce middle school students to technology and foster a focus in software engineering.")))),n.a.createElement("div",{id:"skills"},n.a.createElement("div",{className:"header"},"Skills"),n.a.createElement("div",{className:"content"},n.a.createElement("ul",{className:"skills-list"},n.a.createElement("li",null,"AWS"),n.a.createElement("li",null,"Java"),n.a.createElement("li",null,"Spring Boot"),n.a.createElement("li",null,"Devops"),n.a.createElement("li",null,"ECS"),n.a.createElement("li",null,"Kafka"),n.a.createElement("li",null,"Jenkins"),n.a.createElement("li",null,"REST"),n.a.createElement("li",null,"Aurora RDS"),n.a.createElement("li",null,"Cucumber Testing"),n.a.createElement("li",null,"Docker"),n.a.createElement("li",null,"GCP"),n.a.createElement("li",null,"CQRS"),n.a.createElement("li",null,"Microservices"),n.a.createElement("li",null,"Bash Scripting"),n.a.createElement("li",null,"Git")))),n.a.createElement("div",{className:"split-pane"},n.a.createElement("div",{id:"education"},n.a.createElement("div",{className:"header"},"Education"),n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"img-with-text"},n.a.createElement("div",{id:"psu",className:"img-round border"}),n.a.createElement("ul",null,n.a.createElement("span",{className:"job"},"The Pennsylvania State University"),n.a.createElement("li",null,"[08-2012] - [05-2016]"),n.a.createElement("li",null,"B.S. Computer Science"),n.a.createElement("li",null,"Minor: Mathematics"),n.a.createElement("li",null,"Major GPA: 3.77/4.0"),n.a.createElement("li",null,"Cum GPA: 3.57/4.0"))))),n.a.createElement("div",{id:"education"},n.a.createElement("div",{className:"header"},"Certifications"),n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"img-with-text"},n.a.createElement("div",{id:"aws",className:"img-square border"}),n.a.createElement("ul",{className:"padding-top: 10px;"},n.a.createElement("li",null,"AWS Certified Solutions Architect - Associate"),n.a.createElement("li",null,"AWS Certified Developer - Associate")))))),n.a.createElement("footer",null))))}),I=function(){return n.a.createElement("div",{className:"not-found"},n.a.createElement(p.a,{title:"404"}),n.a.createElement("h1",null,"Page Not Found."),n.a.createElement("p",null,"Return to ",n.a.createElement(i.b,{to:"/"},"index"),"."))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=t(9);r.a.render(n.a.createElement(i.a,null,n.a.createElement(W.c,null,n.a.createElement(W.a,{exact:!0,path:"/",component:P}),n.a.createElement(W.a,{path:"/about",component:T}),n.a.createElement(W.a,{path:"/resume",component:B}),n.a.createElement(W.a,{component:I,status:404}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,1,2]]]);
//# sourceMappingURL=main.fbbc6075.chunk.js.map