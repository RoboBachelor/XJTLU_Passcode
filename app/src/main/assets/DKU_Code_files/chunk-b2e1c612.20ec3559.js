(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b2e1c612"],{"32fa":function(t,e,a){t.exports=a.p+"static/img/passcodecheck.91ed9cc8.gif"},"44e7":function(t,e,a){var r=a("861d"),i=a("c6b6"),n=a("b622"),o=n("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==i(t))}},"4d63":function(t,e,a){var r=a("83ab"),i=a("da84"),n=a("94ca"),o=a("7156"),s=a("9bf2").f,l=a("241c").f,h=a("44e7"),u=a("ad6d"),c=a("9f7f"),d=a("6eeb"),f=a("d039"),g=a("69f3").set,m=a("2626"),p=a("b622"),v=p("match"),_=i.RegExp,C=_.prototype,w=/a/g,b=/a/g,E=new _(w)!==w,D=c.UNSUPPORTED_Y,T=r&&n("RegExp",!E||D||f((function(){return b[v]=!1,_(w)!=w||_(b)==b||"/a/i"!=_(w,"i")})));if(T){var A=function(t,e){var a,r=this instanceof A,i=h(t),n=void 0===e;if(!r&&i&&t.constructor===A&&n)return t;E?i&&!n&&(t=t.source):t instanceof A&&(n&&(e=u.call(t)),t=t.source),D&&(a=!!e&&e.indexOf("y")>-1,a&&(e=e.replace(/y/g,"")));var s=o(E?new _(t,e):_(t,e),r?this:C,A);return D&&a&&g(s,{sticky:a}),s},y=function(t){t in A||s(A,t,{configurable:!0,get:function(){return _[t]},set:function(e){_[t]=e}})},L=l(_),P=0;while(L.length>P)y(L[P++]);C.constructor=A,A.prototype=C,d(i,"RegExp",A)}m("RegExp")},"5f7e":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.pageLoading?a("div",{staticClass:"passcode-box"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isTransverse,expression:"!isTransverse"}],staticClass:"info-box"},[a("div",{staticClass:"info-text"},[a("table",[t._m(0),2==t.userType?[a("tr",[a("td",{staticClass:"label-name"},[t._v("Full Name")]),a("td",{staticClass:"label-value"},[t._v(t._s(t.userinfo.StuName))])]),a("tr",[a("td",{staticClass:"label-name"},[t._v("Department")]),a("td",{staticClass:"label-value"},[t._v(t._s(t.userinfo.RouNameEN))])]),a("tr",[a("td",{staticClass:"label-name"},[t._v("Email")]),a("td",{staticClass:"label-value"},[t._v(t._s(t.userinfo.Email))])])]:t._e(),4==t.userType?[a("tr",[a("td",{staticClass:"label-name"},[t._v("Full Name")]),a("td",{staticClass:"label-value"},[t._v(t._s(t.userinfo.StaffName))])]),a("tr",[a("td",{staticClass:"label-name"},[t._v("Department")]),a("td",{staticClass:"label-value"},[t._v(t._s(t.userinfo.Dept))])]),a("tr",[a("td",{staticClass:"label-name"},[t._v("Email")]),a("td",{staticClass:"label-value"},[t._v(t._s(t.userinfo.Email))])])]:t._e(),8==t.userType?[a("tr",[a("td",{staticClass:"label-name"},[t._v("Full Name")]),a("td",{staticClass:"label-value"},[t._v(t._s(t.userinfo.Name))])]),a("tr",[a("td",{staticClass:"label-name"},[t._v("Company")]),a("td",{staticClass:"label-value"},[t._v(t._s(t.userinfo.CNDep))])]),a("tr",[a("td",{staticClass:"label-name"},[t._v("Email")]),a("td",{staticClass:"label-value"},[t._v(t._s(t.userinfo.Email))])])]:t._e(),16==t.userType?[a("tr",[a("td",{staticClass:"label-name"},[t._v("Full Name")]),a("td",{staticClass:"label-value"},[t._v(t._s(t.userinfo.CNName))])]),a("tr",[a("td",{staticClass:"label-name"},[t._v("Company")]),a("td",{staticClass:"label-value"},[t._v(t._s(t.userinfo.Dep))])]),a("tr",[a("td",{staticClass:"label-name"},[t._v("Email")]),a("td",{staticClass:"label-value"},[t._v(t._s(t.userinfo.Email))])])]:t._e()],2)])]),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isTransverse,expression:"!isTransverse"}],staticClass:"qrcode-box"},[0==t.healthStatus?a("div",{staticClass:"toplabel-red"},[t._v(" 红码：禁止通行 "),a("br"),t._v("Red Code: Access Denied ")]):t._e(),1==t.healthStatus?a("div",{staticClass:"toplabel-green"},[t._v(" 绿码：正常通行 "),a("br"),t._v("Green Code: Access Permitted ")]):t._e(),2==t.healthStatus?a("div",{staticClass:"toplabel-yellow",domProps:{innerHTML:t._s(t.toplabelYellow)}}):t._e(),a("div",{staticClass:"qrcode-content"},[a("div",{staticClass:"qrcode-img",attrs:{id:"qrcode-img"}}),a("div",{staticClass:"time"},[t._v(t._s(t.time))]),t._m(1)])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isTransverse,expression:"isTransverse"}],staticClass:"modal"},[a("div",{staticClass:"qrcode-img-v",attrs:{id:"qrcode-img-v"}}),t._m(2)])]):t._e()},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:"title",attrs:{colspan:"2"}},[t._v("User Info")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"gif"},[r("img",{attrs:{src:a("32fa")}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"gif"},[r("img",{attrs:{src:a("e2df")}})])}],n=(a("c975"),a("4d63"),a("ac1f"),a("25f0"),a("5319"),a("d044")),o=a.n(n),s=a("a417"),l=a("d399"),h={components:{},props:{data:{type:Object,default:function(){return{}}}},data:function(){return{pageLoading:!1,time:"",healthStatus:1,userType:0,userinfo:{},isTransverse:!1,qr1:null,qr2:null}},watch:{},computed:{qrcodeColor:function(){return 0==this.healthStatus?"#E61F20":1==this.healthStatus?"#01A754":"#FCBB3B"},getLongWidth:function(){return window.screen.height<window.screen.width?window.screen.height:window.screen.width},toplabelYellow:function(){var t="黄码：";return this.userinfo.CanApply?t+="访问失效时间 "+this.getWhitelistEndTime+"<br/> Yellow Code：Access Expired on <br/> "+this.getWhitelistEndTime:t+="不在拜访时间内<br/>Yellow Code：Not During Access Time",t},getWhitelistEndTime:function(){var t="";if(this.userinfo.WhitelistEndTime&&-1!=this.userinfo.WhitelistEndTime.indexOf("/")){var e=new RegExp("/","g");t=this.userinfo.WhitelistEndTime.replace(e,"-")}return t}},methods:{createQRCode:function(){var t=this;Object(s["h"])(sessionStorage.getItem("xjadcode")).then((function(e){t.healthStatus=e.data.Data.IsPass,t.time=e.data.Data.CodeCreateTimeFormat,t.userType=e.data.Data.Role,t.userinfo=e.data.Data,t.pageLoading=!0,t.$nextTick((function(){t.qr1=new o.a("qrcode-img",{width:150,height:150,text:e.data.Data.PassCode,colorDark:t.qrcodeColor,colorLight:"#ffffff"}),t.qr2=new o.a("qrcode-img-v",{width:.8*t.getLongWidth,height:.8*t.getLongWidth,text:e.data.Data.PassCode,colorDark:t.qrcodeColor,colorLight:"#ffffff"}),setTimeout((function(){t.reFreshQrCode.call(t)}),6e4)}))}))},reFreshQrCode:function(){var t=this;Object(s["h"])(sessionStorage.getItem("xjadcode")).then((function(e){t.qr1.clear(),t.qr1.makeCode(e.data.Data.PassCode),t.qr2.clear(),t.qr2.makeCode(e.data.Data.PassCode),t.time=e.data.Data.CodeCreateTimeFormat,setTimeout((function(){t.reFreshQrCode.call(t)}),6e4)}))},IsNeedFillPromise:function(t){var e=this,a=sessionStorage.getItem("xjadcode"),r=sessionStorage.getItem("MobileUserRole");2==r&&Object(s["k"])(a).then((function(a){a.data.Data?e.$router.push({name:"ConfirmPromise"}):null!=t&&t()})),4==r&&Object(s["j"])(a).then((function(a){a.data.Data?e.$router.push({name:"ConfirmPromise"}):null!=t&&t()})),8==r&&Object(s["l"])(a).then((function(a){a.data.Data?e.$router.push({name:"ConfirmPromise"}):null!=t&&t()})),16==r&&Object(s["m"])(a).then((function(a){a.data.Data?e.$router.push({name:"ConfirmPromise"}):null!=t&&t()}))},goback:function(){this.$router.go(-1)}},created:function(){var t=this;180!==window.orientation&&0!==window.orientation||(this.isTransverse=!1),90!==window.orientation&&-90!==window.orientation||(this.isTransverse=!0),window.onorientationchange=function(){180!==window.orientation&&0!==window.orientation||(t.isTransverse=!1),90!==window.orientation&&-90!==window.orientation||(t.isTransverse=!0)}},mounted:function(){var t=this;Object(s["g"])(sessionStorage.getItem("xjadcode")).then((function(e){0==e.data.Code?e.data.Data.IsInNameList&&2==e.data.Data.NameListType?t.IsNeedFillPromise.call(t,(function(){Object(s["i"])().then((function(e){if(0==e.data.Code){if(null!=e.data.Data&&!e.data.Data.IsSubmitted)return Object(l["a"])("请先填写健康日报\nPlease fill in the health daily first"),void t.$router.replace({name:"questionnaire"});t.createQRCode.call(t)}else Object(l["a"])("您未在返校名单中\nYou are not in the official return list"),t.goback()}))})):(Object(l["a"])("您未在返校名单中\nYou are not in the official return list"+(e.data.Data.BackRemark?"\r\n原因:".concat(e.data.Data.BackRemark):"")),t.goback()):(Object(l["a"])("您未在返校名单中\nYou are not in the official return list"),t.goback())}))},destroyed:function(){window.onorientationchange=null}},u=h,c=(a("c4ad"),a("2877")),d=Object(c["a"])(u,r,i,!1,null,"00e71ae7",null);e["default"]=d.exports},a640:function(t,e,a){"use strict";var r=a("d039");t.exports=function(t,e){var a=[][t];return!!a&&r((function(){a.call(null,e||function(){throw 1},1)}))}},c4ad:function(t,e,a){"use strict";var r=a("faf6"),i=a.n(r);i.a},c975:function(t,e,a){"use strict";var r=a("23e7"),i=a("4d64").indexOf,n=a("a640"),o=a("ae40"),s=[].indexOf,l=!!s&&1/[1].indexOf(1,-0)<0,h=n("indexOf"),u=o("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:l||!h||!u},{indexOf:function(t){return l?s.apply(this,arguments)||0:i(this,t,arguments.length>1?arguments[1]:void 0)}})},d044:function(t,e,a){var r;(function(e,a){t.exports=a()})(0,(function(){function t(t){this.mode=a.MODE_8BIT_BYTE,this.data=t,this.parsedData=[];for(var e=0,r=this.data.length;e<r;e++){var i=[],n=this.data.charCodeAt(e);n>65536?(i[0]=240|(1835008&n)>>>18,i[1]=128|(258048&n)>>>12,i[2]=128|(4032&n)>>>6,i[3]=128|63&n):n>2048?(i[0]=224|(61440&n)>>>12,i[1]=128|(4032&n)>>>6,i[2]=128|63&n):n>128?(i[0]=192|(1984&n)>>>6,i[1]=128|63&n):i[0]=n,this.parsedData.push(i)}this.parsedData=Array.prototype.concat.apply([],this.parsedData),this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function e(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}t.prototype={getLength:function(t){return this.parsedData.length},write:function(t){for(var e=0,a=this.parsedData.length;e<a;e++)t.put(this.parsedData[e],8)}},e.prototype={addData:function(e){var a=new t(e);this.dataList.push(a),this.dataCache=null},isDark:function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,a){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++){this.modules[r]=new Array(this.moduleCount);for(var i=0;i<this.moduleCount;i++)this.modules[r][i]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,a),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=e.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,a)},setupPositionProbePattern:function(t,e){for(var a=-1;a<=7;a++)if(!(t+a<=-1||this.moduleCount<=t+a))for(var r=-1;r<=7;r++)e+r<=-1||this.moduleCount<=e+r||(this.modules[t+a][e+r]=0<=a&&a<=6&&(0==r||6==r)||0<=r&&r<=6&&(0==a||6==a)||2<=a&&a<=4&&2<=r&&r<=4)},getBestMaskPattern:function(){for(var t=0,e=0,a=0;a<8;a++){this.makeImpl(!0,a);var r=o.getLostPoint(this);(0==a||t>r)&&(t=r,e=a)}return e},createMovieClip:function(t,e,a){var r=t.createEmptyMovieClip(e,a),i=1;this.make();for(var n=0;n<this.modules.length;n++)for(var o=n*i,s=0;s<this.modules[n].length;s++){var l=s*i,h=this.modules[n][s];h&&(r.beginFill(0,100),r.moveTo(l,o),r.lineTo(l+i,o),r.lineTo(l+i,o+i),r.lineTo(l,o+i),r.endFill())}return r},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},setupPositionAdjustPattern:function(){for(var t=o.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var a=0;a<t.length;a++){var r=t[e],i=t[a];if(null==this.modules[r][i])for(var n=-2;n<=2;n++)for(var s=-2;s<=2;s++)this.modules[r+n][i+s]=-2==n||2==n||-2==s||2==s||0==n&&0==s}},setupTypeNumber:function(t){for(var e=o.getBCHTypeNumber(this.typeNumber),a=0;a<18;a++){var r=!t&&1==(e>>a&1);this.modules[Math.floor(a/3)][a%3+this.moduleCount-8-3]=r}for(a=0;a<18;a++){r=!t&&1==(e>>a&1);this.modules[a%3+this.moduleCount-8-3][Math.floor(a/3)]=r}},setupTypeInfo:function(t,e){for(var a=this.errorCorrectLevel<<3|e,r=o.getBCHTypeInfo(a),i=0;i<15;i++){var n=!t&&1==(r>>i&1);i<6?this.modules[i][8]=n:i<8?this.modules[i+1][8]=n:this.modules[this.moduleCount-15+i][8]=n}for(i=0;i<15;i++){n=!t&&1==(r>>i&1);i<8?this.modules[8][this.moduleCount-i-1]=n:i<9?this.modules[8][15-i-1+1]=n:this.modules[8][15-i-1]=n}this.modules[this.moduleCount-8][8]=!t},mapData:function(t,e){for(var a=-1,r=this.moduleCount-1,i=7,n=0,s=this.moduleCount-1;s>0;s-=2){6==s&&s--;while(1){for(var l=0;l<2;l++)if(null==this.modules[r][s-l]){var h=!1;n<t.length&&(h=1==(t[n]>>>i&1));var u=o.getMask(e,r,s-l);u&&(h=!h),this.modules[r][s-l]=h,i--,-1==i&&(n++,i=7)}if(r+=a,r<0||this.moduleCount<=r){r-=a,a=-a;break}}}}},e.PAD0=236,e.PAD1=17,e.createData=function(t,a,r){for(var i=u.getRSBlocks(t,a),n=new c,s=0;s<r.length;s++){var l=r[s];n.put(l.mode,4),n.put(l.getLength(),o.getLengthInBits(l.mode,t)),l.write(n)}var h=0;for(s=0;s<i.length;s++)h+=i[s].dataCount;if(n.getLengthInBits()>8*h)throw new Error("code length overflow. ("+n.getLengthInBits()+">"+8*h+")");n.getLengthInBits()+4<=8*h&&n.put(0,4);while(n.getLengthInBits()%8!=0)n.putBit(!1);while(1){if(n.getLengthInBits()>=8*h)break;if(n.put(e.PAD0,8),n.getLengthInBits()>=8*h)break;n.put(e.PAD1,8)}return e.createBytes(n,i)},e.createBytes=function(t,e){for(var a=0,r=0,i=0,n=new Array(e.length),s=new Array(e.length),l=0;l<e.length;l++){var u=e[l].dataCount,c=e[l].totalCount-u;r=Math.max(r,u),i=Math.max(i,c),n[l]=new Array(u);for(var d=0;d<n[l].length;d++)n[l][d]=255&t.buffer[d+a];a+=u;var f=o.getErrorCorrectPolynomial(c),g=new h(n[l],f.getLength()-1),m=g.mod(f);s[l]=new Array(f.getLength()-1);for(d=0;d<s[l].length;d++){var p=d+m.getLength()-s[l].length;s[l][d]=p>=0?m.get(p):0}}var v=0;for(d=0;d<e.length;d++)v+=e[d].totalCount;var _=new Array(v),C=0;for(d=0;d<r;d++)for(l=0;l<e.length;l++)d<n[l].length&&(_[C++]=n[l][d]);for(d=0;d<i;d++)for(l=0;l<e.length;l++)d<s[l].length&&(_[C++]=s[l][d]);return _};for(var a={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},i={L:1,M:0,Q:3,H:2},n={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},o={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){var e=t<<10;while(o.getBCHDigit(e)-o.getBCHDigit(o.G15)>=0)e^=o.G15<<o.getBCHDigit(e)-o.getBCHDigit(o.G15);return(t<<10|e)^o.G15_MASK},getBCHTypeNumber:function(t){var e=t<<12;while(o.getBCHDigit(e)-o.getBCHDigit(o.G18)>=0)e^=o.G18<<o.getBCHDigit(e)-o.getBCHDigit(o.G18);return t<<12|e},getBCHDigit:function(t){var e=0;while(0!=t)e++,t>>>=1;return e},getPatternPosition:function(t){return o.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,a){switch(t){case n.PATTERN000:return(e+a)%2==0;case n.PATTERN001:return e%2==0;case n.PATTERN010:return a%3==0;case n.PATTERN011:return(e+a)%3==0;case n.PATTERN100:return(Math.floor(e/2)+Math.floor(a/3))%2==0;case n.PATTERN101:return e*a%2+e*a%3==0;case n.PATTERN110:return(e*a%2+e*a%3)%2==0;case n.PATTERN111:return(e*a%3+(e+a)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new h([1],0),a=0;a<t;a++)e=e.multiply(new h([1,s.gexp(a)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case a.MODE_NUMBER:return 10;case a.MODE_ALPHA_NUM:return 9;case a.MODE_8BIT_BYTE:return 8;case a.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case a.MODE_NUMBER:return 12;case a.MODE_ALPHA_NUM:return 11;case a.MODE_8BIT_BYTE:return 16;case a.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case a.MODE_NUMBER:return 14;case a.MODE_ALPHA_NUM:return 13;case a.MODE_8BIT_BYTE:return 16;case a.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),a=0,r=0;r<e;r++)for(var i=0;i<e;i++){for(var n=0,o=t.isDark(r,i),s=-1;s<=1;s++)if(!(r+s<0||e<=r+s))for(var l=-1;l<=1;l++)i+l<0||e<=i+l||0==s&&0==l||o==t.isDark(r+s,i+l)&&n++;n>5&&(a+=3+n-5)}for(r=0;r<e-1;r++)for(i=0;i<e-1;i++){var h=0;t.isDark(r,i)&&h++,t.isDark(r+1,i)&&h++,t.isDark(r,i+1)&&h++,t.isDark(r+1,i+1)&&h++,0!=h&&4!=h||(a+=3)}for(r=0;r<e;r++)for(i=0;i<e-6;i++)t.isDark(r,i)&&!t.isDark(r,i+1)&&t.isDark(r,i+2)&&t.isDark(r,i+3)&&t.isDark(r,i+4)&&!t.isDark(r,i+5)&&t.isDark(r,i+6)&&(a+=40);for(i=0;i<e;i++)for(r=0;r<e-6;r++)t.isDark(r,i)&&!t.isDark(r+1,i)&&t.isDark(r+2,i)&&t.isDark(r+3,i)&&t.isDark(r+4,i)&&!t.isDark(r+5,i)&&t.isDark(r+6,i)&&(a+=40);var u=0;for(i=0;i<e;i++)for(r=0;r<e;r++)t.isDark(r,i)&&u++;var c=Math.abs(100*u/e/e-50)/5;return a+=10*c,a}},s={glog:function(t){if(t<1)throw new Error("glog("+t+")");return s.LOG_TABLE[t]},gexp:function(t){while(t<0)t+=255;while(t>=256)t-=255;return s.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},l=0;l<8;l++)s.EXP_TABLE[l]=1<<l;for(l=8;l<256;l++)s.EXP_TABLE[l]=s.EXP_TABLE[l-4]^s.EXP_TABLE[l-5]^s.EXP_TABLE[l-6]^s.EXP_TABLE[l-8];for(l=0;l<255;l++)s.LOG_TABLE[s.EXP_TABLE[l]]=l;function h(t,e){if(void 0==t.length)throw new Error(t.length+"/"+e);var a=0;while(a<t.length&&0==t[a])a++;this.num=new Array(t.length-a+e);for(var r=0;r<t.length-a;r++)this.num[r]=t[r+a]}function u(t,e){this.totalCount=t,this.dataCount=e}function c(){this.buffer=[],this.length=0}h.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),a=0;a<this.getLength();a++)for(var r=0;r<t.getLength();r++)e[a+r]^=s.gexp(s.glog(this.get(a))+s.glog(t.get(r)));return new h(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=s.glog(this.get(0))-s.glog(t.get(0)),a=new Array(this.getLength()),r=0;r<this.getLength();r++)a[r]=this.get(r);for(r=0;r<t.getLength();r++)a[r]^=s.gexp(s.glog(t.get(r))+e);return new h(a,0).mod(t)}},u.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],u.getRSBlocks=function(t,e){var a=u.getRsBlockTable(t,e);if(void 0==a)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var r=a.length/3,i=[],n=0;n<r;n++)for(var o=a[3*n+0],s=a[3*n+1],l=a[3*n+2],h=0;h<o;h++)i.push(new u(s,l));return i},u.getRsBlockTable=function(t,e){switch(e){case i.L:return u.RS_BLOCK_TABLE[4*(t-1)+0];case i.M:return u.RS_BLOCK_TABLE[4*(t-1)+1];case i.Q:return u.RS_BLOCK_TABLE[4*(t-1)+2];case i.H:return u.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},c.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var a=0;a<e;a++)this.putBit(1==(t>>>e-a-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var d=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]];function f(){return"undefined"!=typeof CanvasRenderingContext2D}function g(){var t=!1,e=navigator.userAgent;if(/android/i.test(e)){t=!0;var a=e.toString().match(/android ([0-9]\.[0-9])/i);a&&a[1]&&(t=parseFloat(a[1]))}return t}var m=function(){var t=function(t,e){this._el=t,this._htOption=e};return t.prototype.draw=function(t){var e=this._htOption,a=this._el,r=t.getModuleCount();Math.floor(e.width/r),Math.floor(e.height/r);function i(t,e){var a=document.createElementNS("http://www.w3.org/2000/svg",t);for(var r in e)e.hasOwnProperty(r)&&a.setAttribute(r,e[r]);return a}this.clear();var n=i("svg",{viewBox:"0 0 "+String(r)+" "+String(r),width:"100%",height:"100%",fill:e.colorLight});n.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),a.appendChild(n),n.appendChild(i("rect",{fill:e.colorLight,width:"100%",height:"100%"})),n.appendChild(i("rect",{fill:e.colorDark,width:"1",height:"1",id:"template"}));for(var o=0;o<r;o++)for(var s=0;s<r;s++)if(t.isDark(o,s)){var l=i("use",{x:String(s),y:String(o)});l.setAttributeNS("http://www.w3.org/1999/xlink","href","#template"),n.appendChild(l)}},t.prototype.clear=function(){while(this._el.hasChildNodes())this._el.removeChild(this._el.lastChild)},t}(),p="svg"===document.documentElement.tagName.toLowerCase(),v=p?m:f()?function(){function t(){this._elImage.src=this._elCanvas.toDataURL("image/png"),this._elImage.style.display="block",this._elCanvas.style.display="none"}if(this._android&&this._android<=2.1){var e=1/window.devicePixelRatio,a=CanvasRenderingContext2D.prototype.drawImage;CanvasRenderingContext2D.prototype.drawImage=function(t,r,i,n,o,s,l,h,u){if("nodeName"in t&&/img/i.test(t.nodeName))for(var c=arguments.length-1;c>=1;c--)arguments[c]=arguments[c]*e;else"undefined"==typeof h&&(arguments[1]*=e,arguments[2]*=e,arguments[3]*=e,arguments[4]*=e);a.apply(this,arguments)}}function r(t,e){var a=this;if(a._fFail=e,a._fSuccess=t,null===a._bSupportDataURI){var r=document.createElement("img"),i=function(){a._bSupportDataURI=!1,a._fFail&&a._fFail.call(a)},n=function(){a._bSupportDataURI=!0,a._fSuccess&&a._fSuccess.call(a)};return r.onabort=i,r.onerror=i,r.onload=n,void(r.src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==")}!0===a._bSupportDataURI&&a._fSuccess?a._fSuccess.call(a):!1===a._bSupportDataURI&&a._fFail&&a._fFail.call(a)}var i=function(t,e){this._bIsPainted=!1,this._android=g(),this._htOption=e,this._elCanvas=document.createElement("canvas"),this._elCanvas.width=e.width,this._elCanvas.height=e.height,t.appendChild(this._elCanvas),this._el=t,this._oContext=this._elCanvas.getContext("2d"),this._bIsPainted=!1,this._elImage=document.createElement("img"),this._elImage.alt="Scan me!",this._elImage.style.display="none",this._el.appendChild(this._elImage),this._bSupportDataURI=null};return i.prototype.draw=function(t){var e=this._elImage,a=this._oContext,r=this._htOption,i=t.getModuleCount(),n=r.width/i,o=r.height/i,s=Math.round(n),l=Math.round(o);e.style.display="none",this.clear();for(var h=0;h<i;h++)for(var u=0;u<i;u++){var c=t.isDark(h,u),d=u*n,f=h*o;a.strokeStyle=c?r.colorDark:r.colorLight,a.lineWidth=1,a.fillStyle=c?r.colorDark:r.colorLight,a.fillRect(d,f,n,o),a.strokeRect(Math.floor(d)+.5,Math.floor(f)+.5,s,l),a.strokeRect(Math.ceil(d)-.5,Math.ceil(f)-.5,s,l)}this._bIsPainted=!0},i.prototype.makeImage=function(){this._bIsPainted&&r.call(this,t)},i.prototype.isPainted=function(){return this._bIsPainted},i.prototype.clear=function(){this._oContext.clearRect(0,0,this._elCanvas.width,this._elCanvas.height),this._bIsPainted=!1},i.prototype.round=function(t){return t?Math.floor(1e3*t)/1e3:t},i}():function(){var t=function(t,e){this._el=t,this._htOption=e};return t.prototype.draw=function(t){for(var e=this._htOption,a=this._el,r=t.getModuleCount(),i=Math.floor(e.width/r),n=Math.floor(e.height/r),o=['<table style="border:0;border-collapse:collapse;">'],s=0;s<r;s++){o.push("<tr>");for(var l=0;l<r;l++)o.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:'+i+"px;height:"+n+"px;background-color:"+(t.isDark(s,l)?e.colorDark:e.colorLight)+';"></td>');o.push("</tr>")}o.push("</table>"),a.innerHTML=o.join("");var h=a.childNodes[0],u=(e.width-h.offsetWidth)/2,c=(e.height-h.offsetHeight)/2;u>0&&c>0&&(h.style.margin=c+"px "+u+"px")},t.prototype.clear=function(){this._el.innerHTML=""},t}();function _(t,e){for(var a=1,r=C(t),n=0,o=d.length;n<=o;n++){var s=0;switch(e){case i.L:s=d[n][0];break;case i.M:s=d[n][1];break;case i.Q:s=d[n][2];break;case i.H:s=d[n][3];break}if(r<=s)break;a++}if(a>d.length)throw new Error("Too long data");return a}function C(t){var e=encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");return e.length+(e.length!=t?3:0)}return r=function(t,e){if(this._htOption={width:256,height:256,typeNumber:4,colorDark:"#000000",colorLight:"#ffffff",correctLevel:i.H},"string"===typeof e&&(e={text:e}),e)for(var a in e)this._htOption[a]=e[a];"string"==typeof t&&(t=document.getElementById(t)),this._htOption.useSVG&&(v=m),this._android=g(),this._el=t,this._oQRCode=null,this._oDrawing=new v(this._el,this._htOption),this._htOption.text&&this.makeCode(this._htOption.text)},r.prototype.makeCode=function(t){this._oQRCode=new e(_(t,this._htOption.correctLevel),this._htOption.correctLevel),this._oQRCode.addData(t),this._oQRCode.make(),this._el.title=t,this._oDrawing.draw(this._oQRCode),this.makeImage()},r.prototype.makeImage=function(){"function"==typeof this._oDrawing.makeImage&&(!this._android||this._android>=3)&&this._oDrawing.makeImage()},r.prototype.clear=function(){this._oDrawing.clear()},r.CorrectLevel=i,r}))},e2df:function(t,e,a){t.exports=a.p+"static/img/passcodecheck_v.68f47164.gif"},faf6:function(t,e,a){}}]);