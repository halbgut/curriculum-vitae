!function(e){function t(r){if(i[r])return i[r].exports;var n=i[r]={exports:{},id:r,loaded:!1};return e[r].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var i={};return t.m=e,t.c=i,t.p="",t(0)}([function(e,t,i){"use strict";i(6),i(3);var r=i(5);i(4)(r)},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var i=this[t];i[2]?e.push("@media "+i[2]+"{"+i[1]+"}"):e.push(i[1])}return e.join("")},e.i=function(t,i){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},n=0;n<this.length;n++){var a=this[n][0];"number"==typeof a&&(r[a]=!0)}for(n=0;n<t.length;n++){var o=t[n];"number"==typeof o[0]&&r[o[0]]||(i&&!o[2]?o[2]=i:i&&(o[2]="("+o[2]+") and ("+i+")"),e.push(o))}},e}},function(e,t,i){function r(e,t){for(var i=0;i<e.length;i++){var r=e[i],n=p[r.id];if(n){n.refs++;for(var a=0;a<n.parts.length;a++)n.parts[a](r.parts[a]);for(;a<r.parts.length;a++)n.parts.push(l(r.parts[a],t))}else{for(var o=[],a=0;a<r.parts.length;a++)o.push(l(r.parts[a],t));p[r.id]={id:r.id,refs:1,parts:o}}}}function n(e){for(var t=[],i={},r=0;r<e.length;r++){var n=e[r],a=n[0],o=n[1],s=n[2],h=n[3],l={css:o,media:s,sourceMap:h};i[a]?i[a].parts.push(l):t.push(i[a]={id:a,parts:[l]})}return t}function a(e,t){var i=g(),r=v[v.length-1];if("top"===e.insertAt)r?r.nextSibling?i.insertBefore(t,r.nextSibling):i.appendChild(t):i.insertBefore(t,i.firstChild),v.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");i.appendChild(t)}}function o(e){e.parentNode.removeChild(e);var t=v.indexOf(e);t>=0&&v.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",a(e,t),t}function h(e){var t=document.createElement("link");return t.rel="stylesheet",a(e,t),t}function l(e,t){var i,r,n;if(t.singleton){var a=w++;i=b||(b=s(t)),r=c.bind(null,i,a,!1),n=c.bind(null,i,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(i=h(t),r=d.bind(null,i),n=function(){o(i),i.href&&URL.revokeObjectURL(i.href)}):(i=s(t),r=u.bind(null,i),n=function(){o(i)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else n()}}function c(e,t,i,r){var n=i?"":r.css;if(e.styleSheet)e.styleSheet.cssText=k(t,n);else{var a=document.createTextNode(n),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(a,o[t]):e.appendChild(a)}}function u(e,t){var i=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}function d(e,t){var i=t.css,r=t.sourceMap;r&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var n=new Blob([i],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(n),a&&URL.revokeObjectURL(a)}var p={},m=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},f=m(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),g=m(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,w=0,v=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=f()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var i=n(e);return r(i,t),function(e){for(var a=[],o=0;o<i.length;o++){var s=i[o],h=p[s.id];h.refs--,a.push(h)}if(e){var l=n(e);r(l,t)}for(var o=0;o<a.length;o++){var h=a[o];if(0===h.refs){for(var c=0;c<h.parts.length;c++)h.parts[c]();delete p[h.id]}}}};var k=function(){var e=[];return function(t,i){return e[t]=i,e.filter(Boolean).join("\n")}}()},function(e,t,i){"use strict";i(12),i(11)},function(e,t){"use strict";e.exports=function(e){document.querySelector("main").innerHTML=e("lebenslauf")}},function(e,t,i){"use strict";var r=i(10),n={lebenslauf:r};e.exports=function(e){return n[e]}},function(e,t,i){"use strict";i(9)},function(e,t,i){t=e.exports=i(1)(),t.push([e.id,"footer{text-align:right;font-style:italic;padding-top:4rem}img{width:100%;max-width:25rem}nav li:after{content:'|';margin-left:.4rem}nav li:last-child:after{content:none}",""])},function(e,t,i){t=e.exports=i(1)(),t.push([e.id,"/*!\n * Writ v1.0.3\n *\n * Copyright © 2015, Curtis McEnroe <curtis@cmcenroe.me>\n *\n * https://cmcenroe.me/writ/LICENSE (ISC)\n */dd,hr,ol ol,ol ul,ul ol,ul ul{margin:0}pre,table{overflow-x:auto}a,ins{text-decoration:none}html{font-family:Palatino,Georgia,Lucida Bright,Book Antiqua,serif;font-size:16px;line-height:1.5rem}code,kbd,pre,samp{font-family:Consolas,Liberation Mono,Menlo,Courier,monospace;font-size:.833rem;color:#111}kbd{font-weight:700}h1,h2,h3,h4,h5,h6,th{font-weight:400}h1{font-size:2.488em}h2{font-size:2.074em}h3{font-size:1.728em}h4{font-size:1.44em}h5{font-size:1.2em}h6{font-size:1em}small{font-size:.833em}h1,h2,h3{line-height:3rem}blockquote,dl,h1,h2,h3,h4,h5,h6,ol,p,pre,table,ul{margin:1.5rem 0 0}pre,table{margin-bottom:-1px}hr{border:none;padding:1.5rem 0 0}table{line-height:calc(1.5rem - 1px);width:100%;border-collapse:collapse}pre{margin-top:calc(1.5rem - 1px)}body{color:#222;margin:1.5rem 1ch}a,header nav a:visited{color:#00e}a:visited{color:#60b}mark{color:inherit;background-color:#fe0}code,pre,samp,tfoot,thead{background-color:rgba(0,0,0,.05)}blockquote,ins,main aside{border:solid rgba(0,0,0,.05)}blockquote,main aside{border-width:0 0 0 .5ch}code,pre,samp{border:solid rgba(0,0,0,.1)}td,th{border:solid #dbdbdb}body>header{text-align:center}body>footer,main{display:block;max-width:78ch;margin:auto}main aside,main figure{float:right;margin:1.5rem 0 0 1ch}main aside{max-width:26ch;padding:0 0 0 .5ch}blockquote{margin-right:3ch;margin-left:1.5ch;padding:0 0 0 1ch}pre{border-width:1px;border-radius:2px;padding:0 .5ch}pre code{border:none;padding:0;background-color:transparent;white-space:inherit}code,ins,samp,td,th{border-width:1px}img{max-width:100%}dd,ol,ul{padding:0 0 0 3ch}ul>li{list-style-type:disc}li ul>li{list-style-type:circle}li li ul>li{list-style-type:square}ol>li{list-style-type:decimal}li ol>li{list-style-type:lower-roman}li li ol>li{list-style-type:lower-alpha}nav ul{padding:0;list-style-type:none}nav ul li{display:inline;padding-left:1ch;white-space:nowrap}nav ul li:first-child{padding-left:0}ins,mark{padding:1px}td,th{padding:0 .5ch}sub,sup{font-size:.75em;line-height:1em}code,samp{border-radius:2px;padding:.1em .2em;white-space:nowrap}",""])},function(e,t){},function(e,t){e.exports="<h1 id=lebenslauf>Lebenslauf</h1> <h2 id=personalien>Personalien</h2> <p>Luca Nils Schmid<br/> 15.12.1995</p> <p>Via Giuvs 17<br/> 7013 Domat/Ems<br/> Switzerland</p> <p><a href=mailto:me@lucaschmid.net>me@lucaschmid.net</a><br/> <a href=tel:+41792334141>+41 79 233 41 41</a><br/> <a href=https://lucaschmid.net>lucaschmid.net</a></p> <p><img src=https://lucaschmid.net/img/resume/small_bright.jpg alt=Bewerbungsfoto></p> <h2 id=bildung>Bildung</h2> <p>2012 - 2016 – Lehre als <a href=http://www.ict-berufsbildung.ch/ict-lehre/mediamatiker-in-efz/ausbildung/ >Mediamatiker EFZ</a> – <a href=http://www.somedia-production.ch/home/ >Somedia Production Web</a>, Chur 2010 - 2012 Sekundarschule - <a href=hif.ch>Hochalpines Institut Ftan</a> 2008 - 2010 Sekundarschule - Domat/Ems 2002 - 2008 Primarschule - Caguils, Domat/Ems</p> <h2 id=berufserfahrung>Berufserfahrung</h2> <p>Am Anfang meiner Lehre habe ich in verschiedenen Abteilungen der <a href=http://www.somedia.ch/home/ >Somedia</a> gearbeitet. Es wurde mir schnell klar, dass mein Interesse beim Programmieren liegt. Während dem grössten Teil meiner Lehre habe ich deshalb als Full-Stack-Web-Programmierer mit JavaScript, PHP und CSS gearbeitet.</p> <p>Das namhafteste Projekt, an dem ich in meiner Lehre gearbeitet habe, war meine Abschlussarbeit, grossrat.suedostschweiz.ch.</p> <h2 id=kompetenzen-f-higkeiten>Kompetenzen &amp; Fähigkeiten</h2> <h3 id=kompetenzen>Kompetenzen</h3> <ul> <li>Integriere mich schnell in neue Umgebungen</li> <li>Kontaktfreudig und weltoffen</li> <li>Teile mein Wissen gerne</li> <li>Bin sehr lernbegierig</li> <li>Gutes logisch-abstraktes Denkvermögen</li> </ul> <h3 id=f-higkeiten>Fähigkeiten</h3> <h4 id=sprachen>Sprachen</h4> <ul> <li>Englisch</li> <li>Deutsch</li> </ul> <h4 id=programmiersprachen>Programmiersprachen</h4> <ul> <li><a href=http://www.ecma-international.org/ecma-262/6.0/ >JavaScript</a> (ES5/ES6)</li> <li><a href=https://www.w3.org/Style/CSS/ >CSS</a> &amp; <a href=http://sass-lang.com/ >SASS</a>/<a href=http://lesscss.org/ >LESS</a></li> <li><a href=http://php.net/ >PHP</a></li> </ul> <h4 id=weitere-technologien>Weitere Technologien</h4> <ul> <li><a href=https://www.w3.org/DOM/ >DOM</a></li> <li><a href=https://facebook.github.io/react/ >React</a></li> <li><a href=https://angular.io/ >Angular</a></li> <li><a href=http://cycle.js.org/ >Cycle.js</a></li> <li><a href=http://riotjs.com>Riot.js</a></li> <li><a href=http://meteor.com>Meteor</a></li> <li>JavaScript Build Systems (e.g. <a href=https://webpack.github.io/ >Webpack</a>, <a href=http://gulpjs.com/ >Gulp</a>, <a href=http://browserify.org/ >Browserify</a>)</li> <li>JavaScript Libraries (e.g. <a href=http://jquery.com/ >jQuery</a>, <a href=https://lodash.com/ >lodash</a>)</li> <li><a href=https://bem.info/ >BEM</a></li> <li><a href=https://mochajs.org/ >Mocha</a></li> <li><a href=https://karma-runner.github.io>Karma</a></li> <li><a href=http://nodejs.org/ >Node.js</a></li> <li><a href=http://docker.com/ >Docker</a></li> <li><a href=http://wordpress.org/ >WordPress</a></li> <li><a href=http://drupal.org/ >Drupal 7, 8</a></li> <li><a href=http://www.vim.org/ >VIM</a></li> <li><a href=https://www.git-scm.com/ >Git</a> / Git Flow</li> <li><a href=https://www.mysql.com/ >MySQL</a></li> <li><a href=http://www.mongodb.org/ >MongoDB</a></li> <li>Mac OS</li> <li>Linux</li> <li>Windows</li> </ul> <h2 id=referenzen>Referenzen</h2> <h3 id=projekte>Projekte</h3> <h4 id=-github-https-github-com-kriegslustig-><a href=https://github.com/Kriegslustig>Github</a></h4> <p>In meiner Freizeit arbeite ich gerne an Open-Source Projekten. Die meisten dieser Projekte sind auf meiner <a href=https://github.com/Kriegslustig>Github-Profil</a>.</p> <h4 id=-grossrat-suedostschweiz-ch-http-www-suedostschweiz-ch-politik-2016-04-19-mehr-transparenz-starker-franken-und-wirte-ohne-pruefung-twitter-widget-2-somedia-production><a href=http://www.suedostschweiz.ch/politik/2016-04-19/mehr-transparenz-starker-franken-und-wirte-ohne-pruefung#twitter-widget-2>grossrat.suedostschweiz.ch</a> – Somedia Production</h4> <p>In meiner Lehrabschlussarbeit habe ich die Abstimmungsresultate des Grossen Rats in Chur (Graubünden, Schweiz) visualisiert. Dazu habe ich mit <a href=https://symfony.com/ >Symfony</a> ein Backend zur Erfassung der Daten erstellt. Dieses hat eine JSON-API aus der Daten strukturiert und effizient ausgelesen werden können. Der grösste Teil der Arbeit war es, die Visualisierung umzusetzen. Dabei habe ich mich für <a href=http://cycle.js.org/ >Cycle.js</a> (ein Reactive-UI Framework basierend auf <a href=https://github.com/Reactive-Extensions/RxJS>RxJS</a>) entschieden und die Daten dynamich zu rendern.</p> <h4 id=-suedostschweiz-ch-http-www-suedostschweiz-ch-somedia-production><a href=http://www.suedostschweiz.ch/ >suedostschweiz.ch</a> – Somedia Production</h4> <p>suedostschweiz.ch ist ein News-Portal an dem ich bei Somedia Production gearbeitet habe. Unter anderem war ich dort für das technische Konzept des Front-Ends verantwortlich.</p> <h4 id=-elm-make-https-github-com-kriegslustig-meteor-elm-make-foss-freizeit-projekt><a href=https://github.com/Kriegslustig/meteor-elm-make>elm:make</a> – FOSS/Freizeit-Projekt</h4> <p>elm:make ist ein Meteor Package, welches <a href=http://elm-lang.org/ >Elm</a>-Code in Meteor Projekten kompiliert.</p> <p>Zu einigen meiner Open-Source Projekte habe ich <a href=https://lucaschmid.net/projects>hier</a> etwas geschrieben.</p> <h3 id=personen>Personen</h3> <p><strong>Fabian Dennler</strong><br/> Informatik-Lehrer, <a href=http://gbchur.ch/ >Gewerbliche Berufsschule Chur</a> &amp; Consultant<br/> <a href=mailto:fabian.dennler@gbchur.ch>fabian.dennler@gbchur.ch</a><br/> <a href=mailto:me@lucaschmid.net>Telefonnummer auf Anfrage</a></p> <p><strong>Andreas Kemp</strong><br/> Leiter Web Agentur, Somedia Production Web<br/> <a href=mailto:andreas.kemp@somedia.ch>andreas.kemp@somedia.ch</a><br/> <a href=tel:+41812555582>+41 81 255 55 82</a></p> <h2 id=anhang>Anhang</h2> <ul> <li><a href=https://lucaschmid.net/curriculum-vitae/attachments/lehrzeugnis_small.pdf>Lehrzeugnis</a></li> </ul>"},function(e,t,i){var r=i(7);"string"==typeof r&&(r=[[e.id,r,""]]),i(2)(r,{}),r.locals&&(e.exports=r.locals)},function(e,t,i){var r=i(8);"string"==typeof r&&(r=[[e.id,r,""]]),i(2)(r,{}),r.locals&&(e.exports=r.locals)}]);