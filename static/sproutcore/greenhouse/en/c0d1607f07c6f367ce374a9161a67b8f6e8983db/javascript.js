(function(){var a="sproutcore/ace";if(!SC.BUNDLE_INFO){throw"SC.BUNDLE_INFO is not defined!"
}if(SC.BUNDLE_INFO[a]){return}SC.BUNDLE_INFO[a]={requires:["sproutcore/empty_theme"],styles:["/slick/static/sproutcore/ace/en/2cffa4a81d06ffa4cb7974cbe9ee08ccc84ab8a8/stylesheet-packed.css","/slick/static/sproutcore/ace/en/2cffa4a81d06ffa4cb7974cbe9ee08ccc84ab8a8/stylesheet.css"],scripts:["/slick/static/sproutcore/ace/en/2cffa4a81d06ffa4cb7974cbe9ee08ccc84ab8a8/javascript-packed.js","/slick/static/sproutcore/ace/en/2cffa4a81d06ffa4cb7974cbe9ee08ccc84ab8a8/javascript.js"]}
})();SC.stringsFor("English",{"_New File":"New File","_New Folder":"New Folder",_Delete:"Delete","_Top:":"Top:","_Left:":"Left:","_Bottom:":"Bottom:","_Right:":"Right:","_Width:":"Width:","_Height:":"Height:","_Class Names:":"Class Names:","_Background Color:":"Background Color:","_New Page File":"New Page File","_Anchor:":"Anchor:","_Dimensions:":"Dimensions:","_Left:":"Left:","_Width:":"Width:","_Right:":"Right:","_Center X:":"Center X:","_Center Y:":"Center Y:","_Top:":"Top:","_Bottom:":"Bottom:","_Height:":"Height:",_Cancel:"Cancel",_Create:"Create","_File Path:":"File Path:","_File Name:":"File Name:","_Page Name:":"Page Name:","_New Page File":"New Page File","_MyApp.mainPage":"MyApp.mainPage","_main_page.js":"main_page.js","_Edit Property:":"Edit Property:","_Key:":"Key:","_Value:":"Value:",_Update:"Update","_Type:":"Type:",_String:"String",_Array:"Array",_Boolean:"Boolean",_Number:"Number",_Function:"Function",_Hash:"Hash",_Object:"Object",_Class:"Class",_Undefined:"Undefined",_Null:"Null",_Class:"Class",_Save:"Save",_Run:"Run",_Library:"Library",_Add:"Add","_Add a Custom View to the Library":"Add a Custom View to the Library","_MyApp.AwesomeView":"MyApp.AwesomeView","_Class Name:":"Class Name:","_Default Properties:":"Default Properties:","_Item Name":"Item Name",_somethingCool:"somethingCool","_Add View":"Add View","_Specifiy Keys":"Specifiy Keys",_To:"To",_From:"From","_Add Page...":"Add Page...",_Project:"Project","_Dock Library":"Dock Library","_Dock Inspector":"Dock Inspector",_Actions:"Actions",_Inspector:"Inspector","_Reload App":"Reload App"});
SC.DEFAULT_TREE="main";Greenhouse=SC.Object.create(SC.Statechart,{NAMESPACE:"Greenhouse",VERSION:"0.1.0",FILE:"file",DIR:"dir",store:SC.Store.create().from("Greenhouse.DataSource"),log:YES,startOnInit:NO,startStates:{main:"loading",modals:"modalReady",projectPicker:"projectPickerClosed",library:"libraryClosed",inspector:"inspectorClosed"},loadIframeWithPage:function(firstTime){var c=Greenhouse.fileController.get("content"),iframe=Greenhouse.get("iframe"),namespace,page;
var r=c.get("pageRegex"),mainPane;namespace=r[1];page=r[2];if(namespace&&page&&iframe){if(iframe[namespace]&&!iframe[namespace][page]){iframe.eval(c.get("body"))
}namespace=iframe[namespace];if(firstTime){mainPane=iframe.SC.designPage.get("designMainPane");
mainPane.append()}namespace[page].set("needsDesigner",YES);this.pageController.set("content",namespace[page]);
iframe.SC.RunLoop.begin();if(!firstTime){iframe.SC.designController.set("content",null)
}iframe.SC.designsController.setDesigns(namespace[page],iframe);iframe.SC.designPage.designMainPane.viewList.contentView.set("content",Greenhouse.iframe.SC.designsController.get("content"));
iframe.SC.RunLoop.end()}}});function js_beautify(c,z){var b,C,p,P,k,w,A,r,d,aa;var G,V,f,n,u,Z;
var O,T,E;var Q,ab,h;z=z?z:{};var F=z.braces_on_own_line?z.braces_on_own_line:false;
var J=z.indent_size?z.indent_size:2;var g=z.indent_char?z.indent_char:" ";var S=typeof z.preserve_newlines==="undefined"?true:z.preserve_newlines;
var W=z.indent_level?z.indent_level:0;var s=z.space_after_anon_function==="undefined"?false:z.space_after_anon_function;
var j=typeof z.keep_array_indentation==="undefined"?true:z.keep_array_indentation;
ab=false;var v=c.length;function q(){while(C.length&&(C[C.length-1]===" "||C[C.length-1]===aa)){C.pop()
}}function B(t){r.eat_next_space=false;if(j&&M(r.mode)){return}t=typeof t==="undefined"?true:t;
r.if_line=false;q();if(!C.length){return}if(C[C.length-1]!=="\n"||!t){ab=true;C.push("\n")
}for(var l=0;l<r.indentation_level;l+=1){C.push(aa)}}function x(){if(r.eat_next_space){r.eat_next_space=false;
return}var i=" ";if(C.length){i=C[C.length-1]}if(i!==" "&&i!=="\n"&&i!==aa){C.push(" ")
}}function I(){ab=false;r.eat_next_space=false;C.push(p)}function o(){r.indentation_level+=1
}function N(){if(C.length&&C[C.length-1]===aa){C.pop()}}function m(i){if(r){d.push(r)
}r={mode:i,var_line:false,var_line_tainted:false,var_line_reindented:false,in_html_comment:false,if_line:false,in_case:false,eat_next_space:false,indentation_baseline:-1,indentation_level:(r?r.indentation_level+(r.var_line_reindented?1:0):W)}
}function D(i){return i==="[EXPRESSION]"||i==="[INDENTED-EXPRESSION]"||i==="(EXPRESSION)"
}function M(i){return i==="[EXPRESSION]"||i==="[INDENTED-EXPRESSION]"}function e(){E=r.mode==="DO_BLOCK";
if(d.length>0){r=d.pop()}}function K(ac,l){for(var t=0;t<l.length;t+=1){if(l[t]===ac){return true
}}return false}function y(){var ac=0,t=0;for(var l=C.length-1;l>=0;l--){switch(C[l]){case":":if(ac===0){t++
}break;case"?":if(ac===0){if(t===0){return true}else{t--}}break;case"{":if(ac===0){return false
}ac--;break;case"(":case"[":ac--;break;case")":case"]":case"}":ac++;break}}}function U(){h=0;
if(n>=v){return["","TK_EOF"]}Q=false;var aj=b.charAt(n);n+=1;var al=j&&M(r.mode);
if(al){var ad=0;while(K(aj,G)){if(aj==="\n"){q();C.push("\n");ab=true;ad=0}else{if(aj==="\t"){ad+=4
}else{ad+=1}}if(n>=v){return["","TK_EOF"]}aj=b.charAt(n);n+=1}if(r.indentation_baseline===-1){r.indentation_baseline=ad
}if(ab){for(var af=0;af<r.indentation_level+1;af+=1){C.push(aa)}if(r.indentation_baseline!==-1){for(var af=0;
af<ad-r.indentation_baseline;af++){C.push(" ")}}}}else{while(K(aj,G)){if(aj==="\n"){h+=1
}if(n>=v){return["","TK_EOF"]}aj=b.charAt(n);n+=1}if(S){if(h>1){for(var af=0;af<h;
af+=1){B(af===0);ab=true}}}Q=h>0}if(K(aj,V)){if(n<v){while(K(b.charAt(n),V)){aj+=b.charAt(n);
n+=1;if(n===v){break}}}if(n!==v&&aj.match(/^[0-9]+[Ee]$/)&&(b.charAt(n)==="-"||b.charAt(n)==="+")){var ac=b.charAt(n);
n+=1;var am=U(n);aj+=ac+am[0];return[aj,"TK_WORD"]}if(aj==="in"){return[aj,"TK_OPERATOR"]
}if(Q&&P!=="TK_OPERATOR"&&!r.if_line&&(S||k!=="var")){B()}return[aj,"TK_WORD"]}if(aj==="("||aj==="["){return[aj,"TK_START_EXPR"]
}if(aj===")"||aj==="]"){return[aj,"TK_END_EXPR"]}if(aj==="{"){return[aj,"TK_START_BLOCK"]
}if(aj==="}"){return[aj,"TK_END_BLOCK"]}if(aj===";"){return[aj,"TK_SEMICOLON"]}if(aj==="/"){var ag="";
var ak=true;if(b.charAt(n)==="*"){n+=1;if(n<v){while(!(b.charAt(n)==="*"&&b.charAt(n+1)&&b.charAt(n+1)==="/")&&n<v){aj=b.charAt(n);
ag+=aj;if(aj==="\x0d"||aj==="\x0a"){ak=false}n+=1;if(n>=v){break}}}n+=2;if(ak){return["/*"+ag+"*/","TK_INLINE_COMMENT"]
}else{return["/*"+ag+"*/","TK_BLOCK_COMMENT"]}}if(b.charAt(n)==="/"){ag=aj;while(b.charAt(n)!=="\x0d"&&b.charAt(n)!=="\x0a"){ag+=b.charAt(n);
n+=1;if(n>=v){break}}n+=1;if(Q){B()}return[ag,"TK_COMMENT"]}}if(aj==="'"||aj==='"'||(aj==="/"&&((P==="TK_WORD"&&K(k,["return","do"]))||(P==="TK_START_EXPR"||P==="TK_START_BLOCK"||P==="TK_END_BLOCK"||P==="TK_OPERATOR"||P==="TK_EQUALS"||P==="TK_EOF"||P==="TK_SEMICOLON")))){var an=aj;
var ai=false;var l=aj;if(n<v){if(an==="/"){var ah=false;while(ai||ah||b.charAt(n)!==an){l+=b.charAt(n);
if(!ai){ai=b.charAt(n)==="\\";if(b.charAt(n)==="["){ah=true}else{if(b.charAt(n)==="]"){ah=false
}}}else{ai=false}n+=1;if(n>=v){return[l,"TK_STRING"]}}}else{while(ai||b.charAt(n)!==an){l+=b.charAt(n);
if(!ai){ai=b.charAt(n)==="\\"}else{ai=false}n+=1;if(n>=v){return[l,"TK_STRING"]}}}}n+=1;
l+=an;if(an==="/"){while(n<v&&K(b.charAt(n),V)){l+=b.charAt(n);n+=1}}return[l,"TK_STRING"]
}if(aj==="#"){var ae="#";if(n<v&&K(b.charAt(n),Z)){do{aj=b.charAt(n);ae+=aj;n+=1}while(n<v&&aj!=="#"&&aj!=="=");
if(aj==="#"){}else{if(b.charAt(n)=="["&&b.charAt(n+1)==="]"){ae+="[]";n+=2}else{if(b.charAt(n)=="{"&&b.charAt(n+1)==="}"){ae+="{}";
n+=2}}}return[ae,"TK_WORD"]}}if(aj==="<"&&b.substring(n-1,n+3)==="<!--"){n+=3;r.in_html_comment=true;
return["<!--","TK_COMMENT"]}if(aj==="-"&&r.in_html_comment&&b.substring(n-1,n+2)==="-->"){r.in_html_comment=false;
n+=2;if(Q){B()}return["-->","TK_COMMENT"]}if(K(aj,f)){while(n<v&&K(aj+b.charAt(n),f)){aj+=b.charAt(n);
n+=1;if(n>=v){break}}if(aj==="="){return[aj,"TK_EQUALS"]}else{return[aj,"TK_OPERATOR"]
}}return[aj,"TK_UNKNOWN"]}aa="";while(J>0){aa+=g;J-=1}b=c;A="";P="TK_START_EXPR";
k="";w="";C=[];E=false;G="\n\r\t ".split("");V="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_$".split("");
Z="0123456789".split("");f="+ - * / % & ++ -- = += -= *= /= %= == === != !== > < >= <= >> << >>> >>>= >>= <<= && &= | || ! !! , : ? ^ ^= |= ::".split(" ");
u="continue,try,throw,return,var,if,switch,case,default,for,while,break,function".split(",");
d=[];m("BLOCK");n=0;while(true){var R=U(n);p=R[0];T=R[1];if(T==="TK_EOF"){break}switch(T){case"TK_START_EXPR":if(p==="["){if(P==="TK_WORD"||k===")"){if(K(k,u)){x()
}m("(EXPRESSION)");I();break}if(r.mode==="[EXPRESSION]"||r.mode==="[INDENTED-EXPRESSION]"){if(w==="]"&&k===","){if(r.mode==="[EXPRESSION]"){r.mode="[INDENTED-EXPRESSION]";
if(!j){o()}}m("[EXPRESSION]");if(!j){B()}}else{if(k==="["){if(r.mode==="[EXPRESSION]"){r.mode="[INDENTED-EXPRESSION]";
if(!j){o()}}m("[EXPRESSION]");if(!j){B()}}else{m("[EXPRESSION]")}}}else{m("[EXPRESSION]")
}}else{m("(EXPRESSION)")}if(k===";"||P==="TK_START_BLOCK"){B()}else{if(P==="TK_END_EXPR"||P==="TK_START_EXPR"||P==="TK_END_BLOCK"){}else{if(P!=="TK_WORD"&&P!=="TK_OPERATOR"){x()
}else{if(A==="function"){if(s){x()}}else{if(K(k,u)||k==="catch"){x()}}}}}I();break;
case"TK_END_EXPR":if(p==="]"){if(j){if(k==="}"){N();I();e();break}}else{if(r.mode==="[INDENTED-EXPRESSION]"){if(k==="]"){e();
B();I();break}}}}e();I();break;case"TK_START_BLOCK":if(A==="do"){m("DO_BLOCK")}else{m("BLOCK")
}if(F){if(P!=="TK_OPERATOR"){B(true)}I();o()}else{if(P!=="TK_OPERATOR"&&P!=="TK_START_EXPR"){if(P==="TK_START_BLOCK"){B()
}else{x()}}o();I()}break;case"TK_END_BLOCK":e();if(F){B();if(r.var_line_reindented){C.push(aa)
}I()}else{if(P==="TK_START_BLOCK"){if(ab){N()}else{q()}}else{B();if(r.var_line_reindented){C.push(aa)
}}I()}break;case"TK_WORD":if(E){x();I();x();E=false;break}if(p==="function"){if((ab||k==";")&&k!=="{"){h=ab?h:0;
for(var Y=0;Y<2-h;Y++){B(false)}}}if(p==="case"||p==="default"){if(k===":"){N()}else{r.indentation_level--;
B();r.indentation_level++}I();r.in_case=true;break}O="NONE";if(P==="TK_END_BLOCK"){if(!K(p.toLowerCase(),["else","catch","finally"])){O="NEWLINE"
}else{if(F){O="NEWLINE"}else{O="SPACE";x()}}}else{if(P==="TK_SEMICOLON"&&(r.mode==="BLOCK"||r.mode==="DO_BLOCK")){O="NEWLINE"
}else{if(P==="TK_SEMICOLON"&&D(r.mode)){O="SPACE"}else{if(P==="TK_STRING"){O="NEWLINE"
}else{if(P==="TK_WORD"){O="SPACE"}else{if(P==="TK_START_BLOCK"){O="NEWLINE"}else{if(P==="TK_END_EXPR"){x();
O="NEWLINE"}}}}}}}if(P!=="TK_END_BLOCK"&&K(p.toLowerCase(),["else","catch","finally"])){B()
}else{if(K(p,u)||O==="NEWLINE"){if(k==="else"){x()}else{if((P==="TK_START_EXPR"||k==="="||k===",")&&p==="function"){}else{if(k==="return"||k==="throw"){x()
}else{if(P!=="TK_END_EXPR"){if((P!=="TK_START_EXPR"||p!=="var")&&k!==":"){if(p==="if"&&A==="else"&&k!=="{"){x()
}else{B()}}}else{if(K(p,u)&&k!==")"){B()}}}}}}else{if(O==="SPACE"){x()}}}I();A=p;
if(p==="var"){r.var_line=true;r.var_line_tainted=false}if(p==="if"||p==="else"){r.if_line=true
}break;case"TK_SEMICOLON":I();r.var_line=false;break;case"TK_STRING":if(P==="TK_START_BLOCK"||P==="TK_END_BLOCK"||P==="TK_SEMICOLON"){B()
}else{if(P==="TK_WORD"){x()}}I();break;case"TK_EQUALS":if(r.var_line){r.var_line_tainted=true
}x();I();x();break;case"TK_OPERATOR":var a=true;var H=true;if(r.var_line&&p===","&&(D(r.mode))){r.var_line_tainted=false
}if(r.var_line){if(p===","){if(r.var_line_tainted){I();B();C.push(aa);r.var_line_reindented=true;
r.var_line_tainted=false;break}else{r.var_line_tainted=false}}}if(k==="return"||k==="throw"){x();
I();break}if(p===":"&&r.in_case){I();B();r.in_case=false;break}if(p==="::"){I();break
}if(p===","){if(r.var_line){if(r.var_line_tainted){I();B();r.var_line_tainted=false
}else{I();x()}}else{if(P==="TK_END_BLOCK"&&r.mode!=="(EXPRESSION)"){I();B()}else{if(r.mode==="BLOCK"){I();
B()}else{I();x()}}}break}else{if(K(p,["--","++","!"])||(K(p,["-","+"])&&(K(P,["TK_START_BLOCK","TK_START_EXPR","TK_EQUALS","TK_OPERATOR"])||K(k,u)))){a=false;
H=false;if(k===";"&&D(r.mode)){a=true}if(P==="TK_WORD"&&K(k,u)){a=true}if(r.mode==="BLOCK"&&(k==="{"||k===";")){B()
}}else{if(p==="."){a=false}else{if(p===":"){if(!y()){a=false}}}}}if(a){x()}I();if(H){x()
}if(p==="!"){}break;case"TK_BLOCK_COMMENT":var L=p.split(/\x0a|\x0d\x0a/);B();C.push(L[0]);
for(var Y=1,X=L.length;Y<X;Y++){B();C.push(" ");C.push(L[Y].replace(/^\s\s*|\s\s*$/,""))
}B();break;case"TK_INLINE_COMMENT":x();I();if(D(r.mode)){x()}else{B()}break;case"TK_COMMENT":if(Q){B()
}else{x()}I();B();break;case"TK_UNKNOWN":I();break}w=k;P=T;k=p}return C.join("").replace(/[\n ]+$/,"")
}Greenhouse.designController=SC.ObjectController.create({contentBinding:"Greenhouse.pageController*designController.selection",contentBindingDefault:SC.Binding.single().oneWay(),propertySelection:null});
Greenhouse.PAGE_DESIGNER="pageDesigner";Greenhouse.BESPIN="bespin";Greenhouse.fileController=SC.ObjectController.create({contentBinding:"Greenhouse.filesController.selection",contentBindingDefault:SC.Binding.single(),_content_statusDidChange:function(){var a=this.get("content");
if(a&&a.get("isPage")){Greenhouse.sendAction("fileSelectedIsAPage");Greenhouse.sendAction("cancel")
}else{if(a&&!a.get("isPage")){Greenhouse.sendAction("fileSelectedIsNotAPage")}}}.observes("*content.body"),state:null,editorMode:"",init:function(){arguments.callee.base.apply(this,arguments);
this.set("state",Greenhouse.PAGE_DESIGNER);this.set("editorMode","pageDesigner")},pageDesigner:function(){var a=this.get("state");
switch(a){case Greenhouse.BESPIN:this.set("state",Greenhouse.PAGE_DESIGNER);this.set("editorMode","pageDesigner");
break;default:console.log("RedBull.fileController#pageDesigner not handled in current state %@".fmt(a));
break}},bespinEditor:function(){var a=this.get("state");switch(a){case Greenhouse.PAGE_DESIGNER:this.set("state",Greenhouse.BESPIN);
this.set("editorMode","bespinEditor");break;default:console.log("RedBull.fileController#bespinEditor not handled in current state %@".fmt(a));
break}}});Greenhouse.filesController=SC.TreeController.create(SC.CollectionViewDelegate,{collectionViewValidateDragOperation:function(b,d,e,c,a){return SC.DRAG_ANY
},collectionViewPerformDragOperation:function(b,d,e,c,a){console.log("delegate works");
return SC.DRAG_NONE},treeItemChildrenKey:"contents",reload:function(){var a=Greenhouse.FILES_QUERY,d=Greenhouse.targetController.get("content");
a.set("urlPath",d.get("name"));var c=Greenhouse.store.find(a),b=SC.Object.create({treeItemIsExpanded:YES});
b.set("contents",c);this.set("content",b)}});Greenhouse.layoutController=SC.ObjectController.create({contentBinding:"Greenhouse.pageController.designController.selection",allowsMultipleContent:YES,hDimNowShowing:function(){var c=this.get("anchorLocation"),a=SC.ViewDesigner,b="leftDimensions";
if(c&a.ANCHOR_LEFT){b="leftDimensions"}else{if(c&a.ANCHOR_RIGHT){b="rightDimensions"
}else{if(c&a.ANCHOR_CENTERX){b="centerXDimensions"}else{if(c&a.ANCHOR_WIDTH){b="widthDimensions"
}}}}return b}.property("anchorLocation").cacheable(),vDimNowShowing:function(){var c=this.get("anchorLocation"),a=SC.ViewDesigner,b="topDimensions";
if(c&a.ANCHOR_TOP){b="topDimensions"}else{if(c&a.ANCHOR_BOTTOM){b="bottomDimensions"
}else{if(c&a.ANCHOR_CENTERY){b="centerYDimensions"}else{if(c&a.ANCHOR_HEIGHT){b="heightDimensions"
}}}}return b}.property("anchorLocation").cacheable()});Greenhouse.libraryController=SC.TreeController.create(SC.CollectionViewDelegate,{content:SC.Object.create({treeItemIsExpanded:YES,treeItemChildren:[SC.Object.create({name:"Views",treeItemIsExpanded:YES,treeItemChildren:[SC.Object.create({name:"Button",scClass:"SC.ButtonView",defaults:{layout:{width:100,height:24}}}),SC.Object.create({name:"List",scClass:"SC.ListView",defaults:{layout:{}}}),SC.Object.create({name:"Tab",scClass:"SC.TabView",defaults:{layout:{width:200,height:200}}}),SC.Object.create({name:"TextField",scClass:"SC.TextFieldView",defaults:{layout:{width:100,height:24}}}),SC.Object.create({name:"Segmented",scClass:"SC.SegmentedView",defaults:{layout:{width:200,height:24}}}),SC.Object.create({name:"Web",scClass:"SC.WebView",defaults:{layout:{width:200,height:200}}}),SC.Object.create({name:"Scroll",scClass:"SC.ScrollView",defaults:{layout:{width:200,height:200}}}),SC.Object.create({name:"Container",scClass:"SC.ContainerView",defaults:{layout:{width:200,height:200}}}),SC.Object.create({name:"View",scClass:"SC.View",defaults:{layout:{width:100,height:100}}}),SC.Object.create({name:"Label",scClass:"SC.LabelView",defaults:{layout:{width:100,height:24},value:"Label"}})]}),SC.Object.create({name:"Controllers",treeItemIsExpanded:YES,treeItemChildren:[SC.Object.create({name:"SC.Object",scClass:"SC.Object"}),SC.Object.create({name:"Object Controller",scClass:"SC.ObjectController"}),SC.Object.create({name:"Array Controller",scClass:"SC.ArrayController"}),SC.Object.create({name:"Tree Controller",scClass:"SC.TreeController"})]})]}),reload:function(){var d=Greenhouse.CONFIG_QUERY,c=Greenhouse.targetController.get("content");
d.set("app",c.get("name"));var b=Greenhouse.store.find(d),a=SC.Object.create({treeItemIsExpanded:YES});
a.set("contents",b);this.set("content",a)},views:SC.outlet("content.treeItemChildren.0.treeItemChildren"),collectionViewShouldBeginDrag:function(a){return YES
},collectionViewDragDataTypes:function(a){return["SC.Object"]},collectionViewDragDataForType:function(a,d,b){var e=Greenhouse.appPage.getPath("webView");
d.iframeFrame=e.get("parentView").convertFrameToView(e.get("frame"),null);var c=(b==="SC.Object")?this.get("selection").firstObject():null;
return c},ghostActsLikeCursor:YES,collectionViewDragViewFor:function(a,d){var b=a.itemViewForContentIndex(d.firstObject());
var c=a.get("layer").cloneNode(false);b.set("parentView",a);b.set("layer",c);b.adjust({height:a.get("rowHeight"),top:(d.firstObject()*a.get("rowHeight"))});
return b},ghostActsLikeCursor:YES,search:null,searchResults:[],searchKey:"name",iconKey:"icon",nameKey:"name",init:function(){arguments.callee.base.apply(this,arguments);
this.set("searchResults",[]);this._runSearch()},_searchDidChange:function(){this._runSearch()
}.observes("search","content"),_sanitizeSearchString:function(c){var a=["/",".","*","+","?","|","(",")","[","]","{","}","\\"];
var b=new RegExp("(\\"+a.join("|\\")+")","g");return c.replace(b,"\\$1")},_runSearch:function(){var d=[];
var b=this.get("search");var g=this.get("content");if(b===null||b===""||b===undefined){this.set("searchResults",g)
}else{b=this._sanitizeSearchString(b).toLowerCase();var e=new RegExp(b,"i");var f=this.get("searchKey");
this._iconKey=this.get("iconKey");this._nameKey=this.get("nameKey");d=this._runSearchOnItem(g,b,e,f);
var a=SC.Object.create({treeItemIsExpanded:YES,treeItemChildren:d});this.set("searchResults",a)
}},_runSearchOnItem:function(e,l,k,c){var a=[],h=this.get("iconKey"),f,i,j,b,d=this._nameKey,g;
if(SC.none(e)){return a}b=e.get("treeItemChildren");if(!b){b=e.get("children")}g=this;
b.forEach(function(o){if(o.treeItemChildren){var m=g._runSearchOnItem(o,l,k,c);m.forEach(function(p){a.push(p)
})}if(c&&o.get(c)){i=o.get(c).toLowerCase();if(i.match(k)){var n=SC.Object.create({});
n[c]=o.get(c);n[d]=o.get(d);n.treeItem=o;n.icon=o.get(this._iconKey);a.push(n)}}});
return a}});Greenhouse.pageController=SC.ObjectController.create({});Greenhouse.propertyController=SC.ObjectController.create({contentBinding:"Greenhouse.designController.propertySelection",contentBindingDefault:SC.Binding.single()});
Greenhouse.propertyEditorController=SC.ObjectController.create({});Greenhouse.targetController=SC.ObjectController.create({contentBinding:"Greenhouse.targetsController.selection",contentBindingDefault:SC.Binding.single()});
Greenhouse.targetsController=SC.ArrayController.create({reload:function(){var a=Greenhouse.store.find(Greenhouse.TARGETS_QUERY);
this.set("content",a)},applications:function(){var a=[];this.forEach(function(b){if(b.get("sortKind")==="app"){a.pushObject(b)
}},this);return a}.property("[]").cacheable()});require("core");Greenhouse.File=SC.ChildRecord.extend({type:"File",childRecordNamespace:Greenhouse,name:SC.Record.attr(String),dir:SC.Record.attr(String),body:SC.Record.attr(String),primaryKey:"id",isFile:YES,path:function(){return this.get("dir")+this.get("name")
}.property("name","dir").cacheable(),pageRegex:function(){var a=this.get("body"),c=/(\w+)\.(\w+)\s*=\s*SC\.Page\.(design|create)/;
return a?a.match(c):a}.property("body").cacheable(),isPage:function(){return this.get("pageRegex")!==null
}.property("pageRegex").cacheable(),pageName:function(){var a=this.get("pageRegex")||[];
return"%@.%@".fmt(a[1],a[2])}.property("pageRegex").cacheable()});Greenhouse.FILES_QUERY=SC.Query.remote(Greenhouse.File);
Greenhouse.File.mixin({});require("core");require("models/file");Greenhouse.mixin({rootFolder:null,loadFileList:function(){if(!this._listRequest){this._listRequest=SC.Request.create({type:"GET",isJSON:YES,address:"/sproutcore/fs?action=list"})
}this._listRequest.notify(this,this._listCompleted,{}).send()},_listCompleted:function(c,d){var a=Greenhouse.File.create({treeItemIsExpanded:YES});
var b=this._parse_response(c.response(),a);a.set("contents",b);this.set("rootFolder",a);
Greenhouse.filesController.set("content",a);Greenhouse.makeFirstResponder(Greenhouse.READY)
},_parse_response:function(c,b){for(var a=0;a<c.length;a+=1){c[a]=Greenhouse.File.create(c[a]);
if(c[a].contents){c[a].contents=this._parse_response(c[a].contents,c[a])}c[a].set("parent",b)
}return c},getFile:function(a){if(!this._getRequest){this._getRequest=SC.Request.create({type:"GET"})
}this._getRequest.set("address","/sproutcore/fs/%@".fmt(a.get("path")));this._getRequest.notify(this,this._getCompleted,{file:a}).send()
},_getCompleted:function(b,c){var a=c.file;a.requestComplete(b.response())},commitFile:function(a){if(!this._postRequest){this._postRequest=SC.Request.create({type:"POST"})
}this._postRequest.set("address","/sproutcore/fs/%@?action=overwrite".fmt(a.get("path")));
this._postRequest.notify(this,this._commitCompleted,{file:a}).send(a.get("body"))
},_commitCompleted:function(b,c){var a=c.file;a.requestComplete()},createFolder:function(a){if(!this._postRequest){this._postRequest=SC.Request.create({type:"POST"})
}this._postRequest.set("address","/sproutcore/fs/%@?action=mkdir".fmt(a.get("path")));
this._postRequest.notify(this,this._createFolderCompleted,{file:a}).send()},_createFolderCompleted:function(b,c){var a=c.file;
a.requestComplete()},createFile:function(a){if(!this._postRequest){this._postRequest=SC.Request.create({type:"POST"})
}this._postRequest.set("address","/sproutcore/fs/%@?action=touch".fmt(a.get("path")));
this._postRequest.notify(this,this._createFileCompleted,{file:a}).send()},_createFileCompleted:function(b,c){var a=c.file;
a.requestComplete()},destroyFile:function(a){if(!this._postRequest){this._postRequest=SC.Request.create({type:"POST"})
}this._postRequest.set("address","/sproutcore/fs/%@?action=remove".fmt(a.get("path")));
this._postRequest.notify(this,this._destroyFileCompleted,{file:a}).send()},_destroyFileCompleted:function(b,c){var a=c.file;
a.requestComplete();a.destroy()}});Greenhouse.DataSource=SC.DataSource.extend({fetch:function(b,d){var c=NO,a=d.get("recordType");
if(a===Greenhouse.File||a===Greenhouse.Dir){c=this.listFiles(b,d)}else{if(a===Greenhouse.Target){c=this.fetchTargets(b,d)
}else{if(a===Greenhouse.ViewConfig){c=this.fetchViewConfigs(b,d)}}}return c},listFiles:function(a,b){SC.Request.create({type:"GET",isJSON:YES,address:"/sproutcore/fs/apps%@/?action=list".fmt(b.get("urlPath"))}).notify(this,this.listFilesDidComplete,{query:b,store:a}).send()
},listFilesDidComplete:function(f,d){var b=f.get("response"),g=d.query,a=d.store,e,c;
if(!SC.$ok(b)){console.error("Couldn't request files")}else{c=b.map(function(h){return h.type==="File"?Greenhouse.File:Greenhouse.Dir
});e=a.loadRecords(c,b);a.loadQueryResults(g,e);Greenhouse.sendAction("fileListCallDidComplete")
}},fetchTargets:function(a,b){if(!b.get("isRemote")){return NO}SC.Request.getUrl("/sc/targets.json").set("isJSON",YES).notify(this,"fetchTargetsDidComplete",{query:b,store:a}).send();
return YES},fetchTargetsDidComplete:function(e,d){var b=e.get("response"),f=d.query,a=d.store,c;
if(!SC.$ok(b)){console.error("TODO: Add handler when fetching targets fails")}else{c=a.loadRecords(Greenhouse.Target,b);
a.loadQueryResults(f,c);Greenhouse.sendAction("fetchTargetsDidComplete")}},fetchViewConfigs:function(a,b){if(!b.get("isRemote")){return NO
}SC.Request.getUrl("/sc/greenhouse-config.json?app=%@".fmt(b.get("app"))).set("isJSON",YES).notify(this,"fetchViewConfigsDidComplete",{query:b,store:a}).send();
return YES},fetchViewConfigsDidComplete:function(e,d){var b=e.get("response"),f=d.query,a=d.store,c;
if(!SC.$ok(b)){console.error("TODO: Add handler when fetching view configs fails")
}else{c=a.loadRecords(Greenhouse.ViewConfig,b);a.loadQueryResults(f,c)}},updateRecord:function(a,d,e){var b=a.materializeRecord(d);
var c=SC.Request.create({type:"POST",address:"/sproutcore/fs/%@?action=overwrite".fmt(b.get("path")),body:b.get("body")}).notify(this,this.updateRecordDidComplete,{file:b,storeKey:d,store:a}).send();
return YES},updateRecordDidComplete:function(b,e){var d=e.file,c=b.get("body"),a=e.store;
if(SC.ok(b)){status=a.readStatus(e.storeKey);a.writeStatus(e.storeKey,SC.Record.BUSY_COMMITTING);
e.store.dataSourceDidComplete(e.storeKey)}else{console.error("Couldn't update file!")
}},retrieveRecord:function(a,d,e){var b=a.materializeRecord(d),c;if(b.kindOf(Greenhouse.File)){c=SC.Request.create({type:"GET",address:"/sproutcore/fs/%@".fmt(b.get("path"))}).notify(this,this.retrieveRecordDidComplete,{file:b,storeKey:d,store:a}).send();
return YES}return NO},retrieveRecordDidComplete:function(d,f){var e=f.file,c=f.store,b,a;
if(SC.ok(d)){b=e.get("attributes");b.body=d.get("body");a=c.readStatus(f.storeKey);
c.writeStatus(f.storeKey,SC.Record.BUSY_REFRESH|(a&3));c.dataSourceDidComplete(f.storeKey,b)
}else{console.error("Couldn't request file")}},createRecord:function(a,d,e){var b=a.materializeRecord(d);
var c=SC.Request.create({type:"POST",address:"/sproutcore/fs/%@?action=touch".fmt(b.get("path")),body:b.get("body")}).notify(this,this.createRecordDidComplete,{file:b,storeKey:d,store:a}).send();
return YES},createRecordDidComplete:function(b,e){var d=e.file,c=b.get("body"),a=e.store;
if(SC.ok(b)){status=a.readStatus(e.storeKey);a.writeStatus(e.storeKey,SC.Record.BUSY_COMMITTING);
e.store.dataSourceDidComplete(e.storeKey)}else{console.error("Couldn't create file!")
}},destroyRecord:function(a,d,e){var c=SC.Request.create({type:"POST"}),b=a.materializeRecord(d);
c.set("address","/sproutcore/fs/%@?action=remove".fmt(b.get("path")));c.notify(this,this.destroyRecordDidComplete,{file:b,storeKey:d,store:a}).send();
return YES},destroyRecordDidComplete:function(c,d){var a,b=d.store;a=b.readStatus(d.storeKey);
b.writeStatus(d.storeKey,SC.Record.BUSY_DESTROYING);d.store.dataSourceDidDestroy(d.storeKey)
}});Greenhouse.dialogPage=SC.Page.design({modal:SC.PanelPane.design({defaultResponder:"Greenhouse"}),pageFile:SC.View.design({layout:{centerX:0,centerY:0,width:350,height:300},childViews:"title cancel create fileNameLabel fileName filePathLabel filePath pageNameLabel pageName".w(),title:SC.LabelView.design({layout:{top:2,left:15,right:5,height:22},value:"_New Page File".loc(),fontWeight:SC.BOLD_WEIGHT}),fileNameLabel:SC.LabelView.design({layout:{top:25,left:15,right:5,height:22},value:"_File Name:".loc()}),fileName:SC.TextFieldView.design({layout:{top:50,left:15,right:15,height:22},hint:"_main_page.js".loc(),valueBinding:"Greenhouse.newFileName"}),filePathLabel:SC.LabelView.design({layout:{top:95,left:15,right:5,height:22},value:"_File Path:".loc()}),filePath:SC.TextFieldView.design({layout:{top:115,left:15,right:15,height:22},valueBinding:"Greenhouse.newFilePath"}),pageNameLabel:SC.LabelView.design({layout:{top:160,left:15,right:5,height:22},value:"_Page Name:".loc()}),pageName:SC.TextFieldView.design({layout:{top:180,left:15,right:15,height:22},valueBinding:"Greenhouse.newPageName",hint:"_MyApp.mainPage".loc()}),cancel:SC.ButtonView.design({layout:{bottom:12,right:103,width:84,height:24},isCancel:YES,action:"cancel",theme:"capsule",title:"_Cancel".loc()}),create:SC.ButtonView.design({layout:{bottom:12,right:12,width:84,height:24},isDefault:YES,action:"create",theme:"capsule",title:"_Create".loc()})}),propertyPicker:SC.PickerPane.design({layout:{width:240,height:290},defaultResponder:"Greenhouse",modalPaneDidClick:function(a){var b=this.get("frame");
if(!this.clickInside(b,a)){Greenhouse.sendAction("cancel")}return YES}}),propertyEditor:SC.View.design({childViews:"title keyLabel key valueLabel value update cancel".w(),title:SC.LabelView.design({layout:{top:2,left:15,right:5,height:22},value:"_Edit Property:".loc(),fontWeight:SC.BOLD_WEIGHT}),keyLabel:SC.LabelView.design({layout:{top:25,left:15,right:5,height:22},value:"_Key:".loc()}),key:SC.TextFieldView.design({layout:{top:50,left:15,right:15,height:22},valueBinding:"Greenhouse.propertyEditorController.key"}),valueLabel:SC.LabelView.design({layout:{top:80,left:15,right:5,height:22},value:"_Value:".loc()}),value:SC.TextFieldView.design({layout:{top:100,left:15,right:15,height:100},valueBinding:"Greenhouse.propertyEditorController.value",isTextArea:YES}),cancel:SC.ButtonView.design({layout:{bottom:5,right:105,width:84,height:24},isDefault:NO,action:"cancel",theme:"capsule",keyEquivalent:"escape",title:"_Cancel".loc()}),update:SC.ButtonView.design({layout:{bottom:5,right:15,width:84,height:24},isDefault:YES,action:"update",theme:"capsule",keyEquivalent:"return",title:"_Update".loc()})}),customViewModal:SC.View.design({layout:{centerX:0,centerY:0,width:350,height:300},childViews:"title cancel add classNameLabel className defaultPropertiesLabel defaultProperties".w(),title:SC.LabelView.design({layout:{top:2,left:15,right:5,height:22},value:"_Add a Custom View to the Library".loc(),fontWeight:SC.BOLD_WEIGHT}),classNameLabel:SC.LabelView.design({layout:{top:25,left:15,right:5,height:22},value:"_Class Name:".loc()}),className:SC.TextFieldView.design({layout:{top:50,left:15,right:15,height:22},hint:"_MyApp.AwesomeView".loc(),valueBinding:"Greenhouse.newViewClass"}),defaultPropertiesLabel:SC.LabelView.design({layout:{top:95,left:15,right:5,height:22},value:"_Default Properties:".loc()}),defaultProperties:SC.TextFieldView.design({layout:{top:115,left:15,right:15,height:135},isTextArea:YES,valueBinding:"Greenhouse.newViewDefaults"}),cancel:SC.ButtonView.design({layout:{bottom:12,right:103,width:84,height:24},isCancel:YES,action:"cancel",theme:"capsule",title:"_Cancel".loc()}),add:SC.ButtonView.design({layout:{bottom:12,right:12,width:84,height:24},isDefault:YES,action:"add",theme:"capsule",title:"_Add".loc()})}),newItemForPage:SC.View.design({layout:{centerX:0,centerY:0,width:200,height:120},childViews:"title name cancel add ".w(),title:SC.LabelView.design({layout:{top:2,left:15,right:5,height:22},value:"_Item Name".loc(),fontWeight:SC.BOLD_WEIGHT}),name:SC.TextFieldView.design({layout:{top:45,left:15,right:15,height:22},hint:"_somethingCool".loc(),valueBinding:"Greenhouse.newPageItemName"}),cancel:SC.ButtonView.design({layout:{bottom:12,right:103,width:84,height:24},isCancel:YES,action:"cancel",theme:"capsule",title:"_Cancel".loc()}),add:SC.ButtonView.design({layout:{bottom:12,right:12,width:84,height:24},isDefault:YES,action:"add",theme:"capsule",title:"_Add".loc()})}),createBindingView:SC.View.design({layout:{centerX:0,centerY:0,width:200,height:180},childViews:"title from fromText to toText cancel add ".w(),title:SC.LabelView.design({layout:{top:2,left:15,right:5,height:22},value:"_Specifiy Keys".loc(),fontWeight:SC.BOLD_WEIGHT}),fromText:SC.LabelView.design({layout:{left:15,top:30,right:5,height:22},value:"_From".loc()}),from:SC.TextFieldView.design({layout:{top:48,left:15,right:15,height:22},valueBinding:"Greenhouse.newBindingFromKey"}),toText:SC.LabelView.design({layout:{left:15,top:78,right:5,height:22},value:"_To".loc()}),to:SC.TextFieldView.design({layout:{top:96,left:15,right:15,height:22},valueBinding:"Greenhouse.newBindingToKey"}),cancel:SC.ButtonView.design({layout:{bottom:12,right:103,width:84,height:24},isCancel:YES,action:"cancel",theme:"capsule",title:"_Cancel".loc()}),add:SC.ButtonView.design({layout:{bottom:12,right:12,width:84,height:24},isDefault:YES,action:"create",theme:"capsule",title:"_Add".loc()})})});
Greenhouse.AnchorView=SC.View.extend({anchorLocation:null,isEnabled:YES,isActive:NO,proposedAnchorLocation:null,displayProperties:"anchorLocation isEnabled isActive proposedAnchorLocation".w(),render:function(a,c){if(c){var b=this.get("frame");
a.begin("canvas").attr("width",b.width).attr("height",b.height).end()}},didCreateLayer:function(){this.didUpdateLayer()
},didUpdateLayer:function(){var b=this.$("canvas"),j=b[0].getContext("2d"),a=this.$().width(),i=this.$().height(),f=this.get("anchorLocation"),c,d,h,g,e;
if(Number(b.attr("width"))!==a){b.attr("width",a)}if(Number(b.attr("height"))!==i){b.attr("height",i)
}a--;i--;if(!this.get("isEnabled")){f=null}d=f?"black":"rgb(128,128,128)";j.save();
j.lineWidth=1;j.fillStyle="rgb(255,255,255)";j.strokeStyle=d;j.fillRect(0.5,0.5,a,i);
j.strokeRect(0.5,0.5,a,i);j.strokeStyle=d;j.strokeRect(20.5,20.5,a-40,i-40);j.beginPath();
j.moveTo(Math.floor(a/2)+0.5,20.5);j.lineTo(Math.floor(a/2)+0.5,Math.floor(i-20)+0.5);
j.moveTo(20.5,Math.floor(i/2)+0.5);j.lineTo(Math.floor(a-20)+0.5,Math.floor(i/2)+0.5);
j.stroke();j.restore();f=this.get("anchorLocation");c=this.get("proposedAnchorLocation");
if(c&&c!==f){d=this.get("isActive")?"rgb(80,80,80)":"rgb(200,200,200)";this._drawAnchorAt(c,j,d,a,i)
}this._drawAnchorAt(f,j,"red",a,i)},mouseMoved:function(a){this._updateProposedAnchorLocation(a)
},mouseExited:function(a){this.setIfChanged("proposedAnchorLocation",null)},mouseDown:function(a){if(this.get("isEnabled")&&this.get("anchorLocation")){this.get("mouseDown");
this.set("isActive",YES);this._updateProposedAnchorLocation(a)}return YES},mouseDragged:function(a){if(this.get("isActive")){this._updateProposedAnchorLocation(a)
}return YES},mouseUp:function(a){var b;if(this.get("isActive")){this._updateProposedAnchorLocation(a);
b=this.get("proposedAnchorLocation");if(b){this.setIfChanged("anchorLocation",b)}this.set("isActive",NO)
}return YES},_updateProposedAnchorLocation:function(m){var d=this.get("anchorLocation"),a=this.convertFrameFromView({x:m.pageX,y:m.pageY},null),j=SC.ViewDesigner,i,e,l,b,g,k,c;
if(!this.get("isEnabled")||!d){g=null}else{i=10;e=SC.copy(this.get("frame"));e.x=e.y=20;
e.width-=40;e.height-=40;if(Math.abs(a.x-SC.minX(e))<=i){l=j.ANCHOR_LEFT}else{if(Math.abs(a.x-SC.midX(e))<=i){l=j.ANCHOR_CENTERX
}else{if(Math.abs(a.x-SC.maxX(e))<=i){l=j.ANCHOR_RIGHT}else{l=0}}}if(Math.abs(a.y-SC.minY(e))<=i){b=j.ANCHOR_TOP
}else{if(Math.abs(a.y-SC.midY(e))<=i){b=j.ANCHOR_CENTERY}else{if(Math.abs(a.y-SC.maxY(e))<=i){b=j.ANCHOR_BOTTOM
}else{b=0}}}if(l===0||b===0){i/=2;if(Math.abs(a.x-SC.minX(e))<=i){g=j.ANCHOR_LEFT|j.ANCHOR_HEIGHT
}else{if(Math.abs(a.x-SC.midX(e))<=i){g=j.ANCHOR_CENTERX|j.ANCHOR_HEIGHT}else{if(Math.abs(a.x-SC.maxX(e))<=i){g=j.ANCHOR_RIGHT|j.ANCHOR_HEIGHT
}else{if(Math.abs(a.y-SC.minY(e))<=i){g=j.ANCHOR_WIDTH|j.ANCHOR_TOP}else{if(Math.abs(a.y-SC.midY(e))<=i){g=j.ANCHOR_WIDTH|j.ANCHOR_CENTERY
}else{if(Math.abs(a.y-SC.maxY(e))<=i){g=j.ANCHOR_WIDTH|j.ANCHOR_BOTTOM}}}}}}}else{g=l|b
}if(g===0){g=null}}k=j.ANCHOR_CENTERX|j.ANCHOR_CENTERY;c=j.ANCHOR_WIDTH|j.ANCHOR_HEIGHT;
if(d===g){if(g===k){g=c}else{if(g===c){g=k}}}this.setIfChanged("proposedAnchorLocation",g)
},_drawAnchorAt:function(g,c,d,f,b){var a=this._xForAnchorLocation(g,20,f-40),h=this._yForAnchorLocation(g,20,b-40),e;
if(a&&h){c.save();c.strokeStyle=d;if(a<0){e=Math.floor(Math.abs(h));c.lineWidth=2;
c.beginPath();c.arc(20.5,e,3,0,Math.PI*2,true);c.lineTo(Math.floor(f-20)-3.5,e);c.arc(Math.floor(f-20),e,3,Math.PI,Math.PI*2,true);
c.arc(Math.floor(f-20),e,3,0,Math.PI,true);c.stroke()}if(h<0){e=Math.floor(Math.abs(a));
c.lineWidth=2;c.beginPath();c.arc(e,20.5,3,0,Math.PI*2,true);c.moveTo(e,23.5);c.lineTo(e,Math.floor(b-20)-3.5);
c.arc(e,Math.floor(b-20),3,Math.PI*1.5,Math.PI*2,true);c.arc(e,Math.floor(b-20),3,0,Math.PI*1.5,true);
c.stroke()}if(a>0&&h>0){c.beginPath();c.lineWidth=2;c.arc(a,h,10,0,Math.PI*2,true);
c.stroke()}c.restore()}},_xForAnchorLocation:function(e,d,b){var a=SC.ViewDesigner,c;
if(e&a.ANCHOR_LEFT){c=d}else{if(e&a.ANCHOR_RIGHT){c=d+b}else{if(e&a.ANCHOR_CENTERX){c=d+Math.floor(b/2)
}else{if(e&a.ANCHOR_WIDTH){c=0-(d+Math.floor(b/2))}else{c=0}}}}return c},_yForAnchorLocation:function(e,d,c){var a=SC.ViewDesigner,b;
if(e&a.ANCHOR_TOP){b=d}else{if(e&a.ANCHOR_BOTTOM){b=d+c}else{if(e&a.ANCHOR_CENTERY){b=d+Math.floor(c/2)
}else{if(e&a.ANCHOR_HEIGHT){b=0-(d+Math.floor(c/2))}else{b=0}}}}return b}});Greenhouse.PlistItemView=SC.ListItemView.extend({render:function(c,f){var d=this.get("content"),a=this.displayDelegate,b,e;
b=this.getDelegateProperty("contentValueKey",a);e=(b&&d)?(d.get?d.get(b):d[b]):d;
if(e&&SC.typeOf(e)!==SC.T_STRING){e=e.toString()}if(this.get("escapeHTML")){e=SC.RenderContext.escapeHTML(e)
}e=e+": "+d.get("value");this.renderLabel(c,e)},renderValue:function(a,b){a.begin("span").addStyle({left:"50%"}).push(b.get("value")).end()
}});require("views/anchor");require("views/plist_item");Greenhouse.inspectorsPage=SC.Page.design({propertiesInspector:SC.View.design({layout:{left:5,right:5,top:0,bottom:0},childViews:"viewClass list addProperty deleteProperty".w(),viewClass:SC.LabelView.design({classNames:["title"],layout:{top:5,left:5,right:5,height:22},textAlign:SC.ALIGN_CENTER,isEditable:YES,valueBinding:"Greenhouse.designController.viewClass"}),list:SC.ScrollView.design({layout:{top:34,left:0,right:0,bottom:30},hasHorizontalScroller:NO,contentView:SC.ListView.design({rowHeight:44,isEditable:NO,canEditContent:NO,exampleView:Greenhouse.PlistItemView,action:"editProperty",contentValueKey:"key",contentBinding:"Greenhouse.designController.editableProperties",selectionBinding:"Greenhouse.designController.propertySelection"})}),addProperty:SC.ButtonView.design({classNames:["prop-control","dark"],layout:{bottom:0,right:0,height:24,width:35},titleMinWidth:0,hasIcon:NO,title:"+",action:"addProperty",isEnabledBinding:"Greenhouse.designController.content"}),deleteProperty:SC.ButtonView.design({classNames:["prop-control","dark"],layout:{bottom:0,right:36,height:24,width:35},titleMinWidth:0,hasIcon:NO,title:"-",action:"deleteProperty",isEnabledBinding:"Greenhouse.propertyController.content"})}),layoutInspector:SC.View.design({layout:{top:18,left:10,bottom:10,right:10},childViews:"anchorLabel anchorView dimLabel hDimView vDimView".w(),anchorLabel:SC.LabelView.design({layout:{top:0,left:0,width:60,height:18},value:"_Anchor:".loc()}),anchorView:Greenhouse.AnchorView.design({layout:{top:0,left:60,right:10,height:120},anchorLocationBinding:"Greenhouse.layoutController.anchorLocation"}),dimLabel:SC.LabelView.design({layout:{top:134,left:0,width:80,height:18},value:"_Dimensions:".loc()}),hDimView:SC.ContainerView.design({layout:{top:130,left:82,right:10,height:60},nowShowingBinding:"Greenhouse.layoutController.hDimNowShowing"}),vDimView:SC.ContainerView.design({layout:{top:188,left:82,right:10,height:60},nowShowingBinding:"Greenhouse.layoutController.vDimNowShowing"})}),leftDimensions:SC.View.design({layout:{top:0,left:0,right:0,bottom:0},childViews:"leftLabel leftField widthLabel widthField".w(),leftLabel:SC.LabelView.design({layout:{top:6,left:0,width:60,height:18},value:"_Left:".loc()}),leftField:SC.TextFieldView.design({layout:{top:4,left:50,right:4,height:21},validator:SC.Validator.Number,valueBinding:"Greenhouse.layoutController.layoutLeft"}),widthLabel:SC.LabelView.design({layout:{top:32,left:0,width:60,height:18},value:"_Width:".loc()}),widthField:SC.TextFieldView.design({layout:{top:30,left:50,right:4,height:21},validator:SC.Validator.Number,valueBinding:"Greenhouse.layoutController.layoutWidth"})}),rightDimensions:SC.View.design({layout:{top:0,left:0,right:0,bottom:0},childViews:"rightLabel rightField widthLabel widthField".w(),rightLabel:SC.LabelView.design({layout:{top:6,left:0,width:60,height:18},value:"_Right:".loc()}),rightField:SC.TextFieldView.design({layout:{top:4,left:50,right:4,height:21},validator:SC.Validator.Number,valueBinding:"Greenhouse.layoutController.layoutRight"}),widthLabel:SC.LabelView.design({layout:{top:32,left:0,width:60,height:18},value:"_Width:".loc()}),widthField:SC.TextFieldView.design({layout:{top:30,left:50,right:4,height:21},validator:SC.Validator.Number,valueBinding:"Greenhouse.layoutController.layoutWidth"})}),centerXDimensions:SC.View.design({layout:{top:0,left:0,right:0,bottom:0},childViews:"centerLabel centerField widthLabel widthField".w(),centerLabel:SC.LabelView.design({layout:{top:6,left:0,width:60,height:18},value:"_Center X:".loc()}),centerField:SC.TextFieldView.design({layout:{top:4,left:50,right:4,height:21},validator:SC.Validator.Number,valueBinding:"Greenhouse.layoutController.layoutCenterX"}),widthLabel:SC.LabelView.design({layout:{top:32,left:0,width:60,height:18},value:"_Width:".loc()}),widthField:SC.TextFieldView.design({layout:{top:30,left:50,right:4,height:21},validator:SC.Validator.Number,valueBinding:"Greenhouse.layoutController.layoutWidth"})}),widthDimensions:SC.View.design({layout:{top:0,left:0,right:0,bottom:0},childViews:"leftLabel leftField rightLabel rightField".w(),leftLabel:SC.LabelView.design({layout:{top:6,left:0,width:60,height:18},value:"_Left:".loc()}),leftField:SC.TextFieldView.design({layout:{top:4,left:50,right:4,height:21},validator:SC.Validator.Number,valueBinding:"Greenhouse.layoutController.layoutLeft"}),rightLabel:SC.LabelView.design({layout:{top:32,left:0,width:60,height:18},value:"_Right:".loc()}),rightField:SC.TextFieldView.design({layout:{top:30,left:50,right:4,height:21},validator:SC.Validator.Number,valueBinding:"Greenhouse.layoutController.layoutRight"})}),topDimensions:SC.View.design({layout:{top:0,left:0,right:0,bottom:0},childViews:"topLabel topField heightLabel heightField".w(),topLabel:SC.LabelView.design({layout:{top:6,left:0,width:60,height:18},value:"_Top:".loc()}),topField:SC.TextFieldView.design({layout:{top:4,left:50,right:4,height:21},validator:SC.Validator.Number,valueBinding:"Greenhouse.layoutController.layoutTop"}),heightLabel:SC.LabelView.design({layout:{top:32,left:0,width:60,height:18},value:"_Height:".loc()}),heightField:SC.TextFieldView.design({layout:{top:30,left:50,right:4,height:21},validator:SC.Validator.Number,valueBinding:"Greenhouse.layoutController.layoutHeight"})}),bottomDimensions:SC.View.design({layout:{top:0,left:0,right:0,bottom:0},childViews:"bottomLabel bottomField heightLabel heightField".w(),bottomLabel:SC.LabelView.design({layout:{top:6,left:0,width:60,height:18},value:"_Bottom:".loc()}),bottomField:SC.TextFieldView.design({layout:{top:4,left:50,right:4,height:21},validator:SC.Validator.Number,valueBinding:"Greenhouse.layoutController.layoutBottom"}),heightLabel:SC.LabelView.design({layout:{top:32,left:0,width:60,height:18},value:"_Height:".loc()}),heightField:SC.TextFieldView.design({layout:{top:30,left:50,right:4,height:21},validator:SC.Validator.Number,valueBinding:"Greenhouse.layoutController.layoutHeight"})}),centerYDimensions:SC.View.design({layout:{top:0,left:0,right:0,bottom:0},childViews:"centerYLabel centerYField heightLabel heightField".w(),centerYLabel:SC.LabelView.design({layout:{top:6,left:0,width:60,height:18},value:"_Center Y:".loc()}),centerYField:SC.TextFieldView.design({layout:{top:4,left:50,right:4,height:21},validator:SC.Validator.Number,valueBinding:"Greenhouse.layoutController.layoutCenterY"}),heightLabel:SC.LabelView.design({layout:{top:32,left:0,width:60,height:18},value:"_Height:".loc()}),heightField:SC.TextFieldView.design({layout:{top:30,left:50,right:4,height:21},validator:SC.Validator.Number,valueBinding:"Greenhouse.layoutController.layoutHeight"})}),heightDimensions:SC.View.design({layout:{top:0,left:0,right:0,bottom:0},childViews:"topLabel topField bottomLabel bottomField".w(),topLabel:SC.LabelView.design({layout:{top:6,left:0,width:60,height:18},value:"_Top:".loc()}),topField:SC.TextFieldView.design({layout:{top:4,left:50,right:4,height:21},validator:SC.Validator.Number,valueBinding:"Greenhouse.layoutController.layoutTop"}),bottomLabel:SC.LabelView.design({layout:{top:32,left:0,width:60,height:18},value:"_Bottom:".loc()}),bottomField:SC.TextFieldView.design({layout:{top:30,left:50,right:4,height:21},validator:SC.Validator.Number,valueBinding:"Greenhouse.layoutController.layoutBottom"})}),noDimensions:SC.View.design({layout:{top:0,left:0,right:0,bottom:0},childViews:"labelView".w(),labelView:SC.LabelView.design({layout:{left:0,right:0,height:18,centerY:0},textAlign:SC.ALIGN_CENTER,value:"_No Dimensions".loc()})}),noDimensions2:SC.View.design({layout:{top:0,left:0,right:0,bottom:0},childViews:"labelView".w(),labelView:SC.LabelView.design({layout:{left:0,right:0,height:18,centerY:0},textAlign:SC.ALIGN_CENTER,value:"_No Dimensions".loc()})})});
sc_require("core");Greenhouse.DropDown={isShowingDropDown:NO,_dropDownPane:null,dropDown:SC.MenuPane.design({layout:{width:100,height:0},contentView:SC.View.design({}),items:["_item".loc("1"),"_item".loc("2")]}),dropDownType:SC.PICKER_MENU,initMixin:function(){var a=this.get("dropDown");
if(a&&SC.typeOf(a)===SC.T_CLASS){this._dropDownPane=a.create();if(this._dropDownPane){this.bind("isShowingDropDown","._dropDownPane.isPaneAttached")
}}if(this.target!==undefined&&this.action!==undefined){this.set("target",this);this.set("action","toggle")
}},hideDropDown:function(){if(this._dropDownPane&&SC.typeOf(this._dropDownPane.remove)===SC.T_FUNCTION){this._dropDownPane.remove();
this.set("isShowingDropDown",NO)}},showDropDown:function(){this.hideDropDown();if(this._dropDownPane&&SC.typeOf(this._dropDownPane.popup)===SC.T_FUNCTION){var a=this.get("dropDownType");
this._dropDownPane.popup(this,a);this.set("isShowingDropDown",YES)}},toggle:function(){if(this.get("isShowingDropDown")){this.hideDropDown()
}else{this.showDropDown()}}};Greenhouse.Design=SC.Record.extend({primaryKey:"name",name:SC.Record.attr(String),scClass:SC.Record.attr(String),defaults:SC.Record.attr(Object)});
require("core");Greenhouse.Dir=SC.ChildRecord.extend({type:"Dir",childRecordNamespace:Greenhouse,name:SC.Record.attr(String),dir:SC.Record.attr(String),contents:SC.Record.toMany("SC.Record",{nested:YES}),primaryKey:"id",isFile:NO,path:function(){return this.get("dir")+this.get("name")
}.property("name","dir").cacheable(),evalBody:function(){var bodyText=this.get("body"),body,designs=[];
try{body=eval(bodyText||"");body.set("needsDesigner",YES);body.set("isContainerView",YES);
this.set("currentDesign",body);for(var v in body){if(body.hasOwnProperty(v)){if(body[v]&&body[v].kindOf){if(body[v].kindOf(SC.View)){designs.push(SC.Object.create({type:"view",view:body.get(v),name:v}))
}else{if(body[v].kindOf(SC.Page)){designs.push(SC.Object.create({type:"page",view:body.get(v),name:v}))
}else{if(body[v].kindOf(SC.Pane)){designs.push(SC.Object.create({type:"pane",view:body.get(v),name:v}))
}}}}}}this.set("designs",designs)}catch(exception){console.log("Couldn't eval body...");
this.set("designs",null)}},includesFile:function(b){if(!this.get("isFile")){var c=this.get("contents"),a;
a=c.find(function(d){if(d.get("type")===b.get("type")&&d.get("name")===b.get("name")&&d!==b){return YES
}});return a?YES:NO}else{return NO}}});Greenhouse.Dir.mixin({});Greenhouse.Target=SC.Record.extend({primaryKey:"name",name:SC.Record.attr(String),parent:SC.Record.toOne("Greenhouse.Target"),testsUrl:SC.Record.attr(String,{key:"link_tests"}),appUrl:function(){return(this.get("kind")==="app")?this.get("name")+"?designMode=YES":null
}.property("kind","name").cacheable(),isExpanded:SC.Record.attr(Boolean,{defaultValue:NO}),displayName:function(){var a=(this.get("name")||"(unknown)").split("/");
return a[a.length-1]}.property("name").cacheable(),targetIcon:function(){var a="sc-icon-document-16";
switch(this.get("kind")){case"framework":a="sc-icon-folder-16";break;case"app":a="sc-icon-options-16";
break}return a}.property("kind").cacheable(),sortKind:function(){if(this.get("name")==="/sproutcore"){return null
}var a=this.get("parent");if(a&&(a.get("name")==="/sproutcore")){return"sproutcore"
}else{return(this.get("kind")||"unknown").toLowerCase()}}.property("kind","parent").cacheable()});
Greenhouse.TARGETS_QUERY=SC.Query.remote(Greenhouse.Target);Greenhouse.ViewConfig=SC.Record.extend({primaryKey:"path",views:SC.Record.toMany("Greenhouse.Design",{nested:YES}),panes:SC.Record.toMany("Greenhouse.Design",{nested:YES}),controllers:SC.Record.toMany("Greenhouse.Design",{nested:YES}),canEdit:SC.Record.attr(Boolean),name:SC.Record.attr(String),path:SC.Record.attr(String),body:function(){var b={name:this.get("name"),path:this.get("path"),views:[],controllers:[],panes:[]},a=this.get("views"),d=this.get("controllers"),c=this.get("panes");
a.forEach(function(e){b.views.push(e.get("attributes"))});d.forEach(function(e){b.controllers.push(e.get("attributes"))
});c.forEach(function(e){b.panes.push(e.get("attributes"))});return js_beautify(SC.json.encode(b))
}.property("views","panes","controllers")});Greenhouse.CONFIG_QUERY=SC.Query.remote(Greenhouse.ViewConfig);
Greenhouse.mixin({inspectorClosed:SC.State.create({parallelStatechart:"inspector",openInspector:function(a){if(a){Greenhouse.openInspectorPicker.set("anchor",a)
}this.goState("openInspectorPicker")},toggleDockedInspector:function(){this.goState("dockedInspector")
},floatInspector:function(){this.goState("inspectorPalette")}}),openInspectorPicker:SC.State.create({parallelStatechart:"inspector",enterState:function(){var c=Greenhouse.appPage;
var b=c.get("inspectorPicker"),d=c.get("inspectorPickerContentView");var a=this.get("anchor")||c.getPath("mainView.toolBar.inspector");
d.setIfChanged("nowShowing","Greenhouse.appPage.inspectorContentView");b.popup(a,SC.PICKER_POINTER);
b.becomeFirstResponder()},exitState:function(){var b=Greenhouse.appPage;var a=b.get("inspectorPicker"),c=b.get("inspectorPickerContentView");
c.setIfChanged("nowShowing",null);a.remove();this.set("anchor",null)},cancel:function(){this.goState("inspectorClosed")
},floatInspector:function(){this.goState("inspectorPalette")},toggleDockedInspector:function(){this.goState("dockedInspector")
}}),inspectorPalette:SC.State.create({parallelStatechart:"inspector",enterState:function(){var b=Greenhouse.appPage;
var a=b.get("inspectorPicker"),e=b.get("inspectorPickerContentView");e.setIfChanged("nowShowing","Greenhouse.appPage.inspectorContentView");
a.append();a.set("isModal",NO);a.set("isAnchored",NO);a.$().toggleClass("sc-picker",NO);
var d=b.getPath("inspectorContentView.content"),c=b.getPath("inspectorContentView.toolbar");
d.adjust("top",28);c.set("isVisible",YES)},exitState:function(){var b=Greenhouse.appPage;
var a=b.get("inspectorPicker"),e=b.get("inspectorPickerContentView");e.setIfChanged("nowShowing",null);
a.set("isModal",YES);a.set("isAnchored",YES);a.remove();var d=b.getPath("inspectorContentView.content"),c=b.getPath("inspectorContentView.toolbar");
d.adjust("top",0);c.set("isVisible",NO)},closeInspector:function(){this.goState("inspectorClosed")
},toggleDockedInspector:function(){this.goState("dockedInspector")}}),dockedInspector:SC.State.create({parallelStatechart:"inspector",enterState:function(){var a=Greenhouse.appPage.get("inspectorDockView");
a.setIfChanged("nowShowing","Greenhouse.appPage.inspectorContentView")},exitState:function(){var a=Greenhouse.appPage.get("inspectorDockView");
a.setIfChanged("nowShowing",null)},toggleDockedInspector:function(){var a=Greenhouse.get("libraryClosed").state();
if(a!==Greenhouse.get("dockedLibrary")){Greenhouse.sendEvent("undock")}this.goState("inspectorClosed")
}})});Greenhouse.mixin({libraryClosed:SC.State.create({parallelStatechart:"library",openLibrary:function(){this.goState("openLibraryPicker")
},toggleDockedLibrary:function(){this.goState("dockedLibrary")}}),openLibraryPicker:SC.State.create({parallelStatechart:"library",enterState:function(){var a=Greenhouse.appPage.get("libraryPicker"),b=Greenhouse.appPage.getPath("mainView.toolBar.library"),c=Greenhouse.appPage.get("libraryPickerContentView");
c.setIfChanged("nowShowing","Greenhouse.appPage.libraryContentView");a.popup(b,SC.PICKER_POINTER);
a.becomeFirstResponder()},exitState:function(){var a=Greenhouse.appPage.get("libraryPicker"),b=Greenhouse.appPage.get("libraryPickerContentView");
b.setIfChanged("nowShowing",null);a.remove()},cancel:function(){this.goState("libraryClosed")
},floatLibrary:function(){this.goState("libraryPalette")},toggleDockedLibrary:function(){this.goState("dockedLibrary")
}}),libraryPalette:SC.State.create({parallelStatechart:"library",enterState:function(){var b=Greenhouse.appPage;
var a=b.get("libraryPicker"),e=b.get("libraryPickerContentView");e.setIfChanged("nowShowing","Greenhouse.appPage.libraryContentView");
a.append();a.set("isModal",NO);a.set("isAnchored",NO);a.$().toggleClass("sc-picker",NO);
var d=b.getPath("libraryContentView.content"),c=b.getPath("libraryContentView.toolbar");
d.adjust("top",49);c.set("isVisible",YES)},exitState:function(){var b=Greenhouse.appPage;
var a=b.get("libraryPicker"),e=b.get("libraryPickerContentView");e.setIfChanged("nowShowing",null);
a.set("isModal",YES);a.set("isAnchored",YES);a.remove();var d=b.getPath("libraryContentView.content"),c=b.getPath("libraryContentView.toolbar");
d.adjust("top",49);c.set("isVisible",NO)},closeLibrary:function(){this.goState("libraryClosed")
},toggleDockedLibrary:function(){this.goState("dockedLibrary")}}),dockedLibrary:SC.State.create({parallelStatechart:"library",enterState:function(){var a=Greenhouse.appPage.get("libraryDockView");
a.setIfChanged("nowShowing","Greenhouse.appPage.libraryContentView")},exitState:function(){var a=Greenhouse.appPage.get("libraryDockView");
a.setIfChanged("nowShowing",null)},toggleDockedLibrary:function(){var a=Greenhouse.get("inspectorClosed").state();
if(a!==Greenhouse.get("dockedInspector")){Greenhouse.sendEvent("undock")}this.goState("libraryClosed")
}})});Greenhouse.mixin({modalReady:SC.State.create({parallelStatechart:"modals",newBindingPopup:function(a){Greenhouse.createBindingPopup.set("newItem",a);
this.goState("createBindingPopup")},newCustomView:function(){this.goState("addCustomView")
},editProperty:function(){this.goState("editProperties")},newPageElement:function(a){Greenhouse.set("newItem",a);
this.goState("addToPage")},openProjectPicker:function(){this.goState("projectPicker")
}}),projectPicker:SC.State.create({parallelStatechart:"modals",enterState:function(){var a=Greenhouse.appPage.get("projectPicker"),b=Greenhouse.appPage.getPath("mainView.toolBar.project");
a.popup(b,SC.PICKER_POINTER);a.becomeFirstResponder()},exitState:function(){var a=Greenhouse.appPage.get("projectPicker");
a.remove()},cancel:function(){this.goState("modalReady")},newPageFile:function(){this.goState("newPage")
}}),createBindingPopup:SC.State.create({parallelStatechart:"modals",enterState:function(){Greenhouse.set("newBindingFromKey",null);
Greenhouse.set("newBindingToKey",null);var a=Greenhouse.dialogPage.get("modal");a.set("contentView",Greenhouse.dialogPage.get("createBindingView"));
a.set("layout",{centerX:0,centerY:0,width:200,height:180});a.append()},exitState:function(){var a=Greenhouse.dialogPage.get("modal");
a.remove();Greenhouse.set("newBindingFromKey",null);Greenhouse.set("newBindingToKey",null);
this.set("newItem",null)},cancel:function(){this.goState("modalReady")},create:function(){var f=Greenhouse.get("newBindingFromKey"),a=Greenhouse.get("newBindingToKey"),d=this.get("newItem"),b=Greenhouse.designController.get("view"),g=Greenhouse.designController.get("content");
if(b&&g){Greenhouse.designController.propertyWillChange("content");var e=g.get("designAttrs");
if(e){e=e[0]}d.addItem(f,a,e);Greenhouse.designController.propertyDidChange("content")
}this.goState("modalReady")}}),addCustomView:SC.State.create({parallelStatechart:"modals",enterState:function(){var a=Greenhouse.dialogPage.get("modal");
a.set("contentView",Greenhouse.dialogPage.get("customViewModal"));a.set("layout",{centerX:0,centerY:0,width:350,height:300});
Greenhouse.set("newViewClass",null);Greenhouse.set("newViewDefaults",null);a.append()
},exitState:function(){var a=Greenhouse.dialogPage.get("modal");a.remove();Greenhouse.set("newViewClass",null);
Greenhouse.set("newViewDefaults",null)},cancel:function(){this.goState("modalReady")
},add:function(){var newView=SC.Object.create({name:Greenhouse.get("newViewClass"),scClass:Greenhouse.get("newViewClass"),defaults:eval("("+Greenhouse.get("newViewDefaults")+")")});
var lib=Greenhouse.libraryController.get("views");lib.pushObject(newView);this.goState("modalReady")
}}),newPage:SC.State.create({parentState:"projectPicker",parallelStatechart:"modals",enterState:function(){var a=Greenhouse.dialogPage.get("modal");
a.set("contentView",Greenhouse.dialogPage.get("pageFile"));a.set("layout",{centerX:0,centerY:0,width:350,height:300});
Greenhouse.set("newFileName",null);Greenhouse.set("newFilePath",Greenhouse.fileController.get("path"));
Greenhouse.set("newPageName",null);a.append()},exitState:function(){var a=Greenhouse.dialogPage.get("modal");
a.remove();Greenhouse.set("newFileName",null);Greenhouse.set("newFilePath",null);
Greenhouse.set("newPageName",null)},cancel:function(){this.goState("projectPicker")
},create:function(){var e=Greenhouse.fileController.get("content"),a,h,d=Greenhouse.get("newPageName"),g=Greenhouse.get("newFileName"),b=Greenhouse.get("newFilePath")+"/";
if(!g.match(/\.js/)){g=g+".js"}a=["// SproutCore ViewBuilder Design Format v1.0","// WARNING: This file is automatically generated.  DO NOT EDIT.  Changes you","// make to this file will be lost.","","%@ = SC.Page.design({});".fmt(d),""].join("\n");
var c=e.get("contents");c.pushObject({type:"File",dir:b,name:g,body:a});h=c.objectAt(c.get("length")-1);
h.commitRecord();this.goState("projectPicker")}}),editProperties:SC.State.create({parallelStatechart:"modals",enterState:function(){var a=Greenhouse.dialogPage.get("propertyPicker");
a.set("contentView",Greenhouse.dialogPage.get("propertyEditor"));var c=Greenhouse.inspectorsPage.getPath("propertiesInspector.list.contentView");
var b=Greenhouse.propertyController.get("content");a.popup(c.itemViewForContentObject(b));
a.becomeFirstResponder();Greenhouse.propertyEditorController.set("content",SC.copy(b))
},exitState:function(){var a=Greenhouse.dialogPage.get("propertyPicker");a.remove();
Greenhouse.propertyEditorController.set("content",null)},cancel:function(){this.goState("modalReady")
},update:function(){var val=Greenhouse.propertyEditorController.get("value"),view=Greenhouse.propertyEditorController.get("view"),key=Greenhouse.propertyEditorController.get("key"),origKey=Greenhouse.propertyController.get("key"),content=Greenhouse.designController.get("content"),designAttrs;
if(key!==origKey){view[origKey]=undefined;delete view[origKey];view.designer.designProperties.removeObject(origKey);
view.designer.designProperties.pushObject(key);view.designer.propertyDidChange("editableProperties")
}view[key]=eval(val);view.propertyDidChange(key);if(view.displayDidChange){view.displayDidChange()
}Greenhouse.propertyController.set("key",key);Greenhouse.propertyController.set("value",val);
this.goState("modalReady")}}),addToPage:SC.State.create({parallelStatechart:"modals",enterState:function(){Greenhouse.set("newPageItemName","");
var a=Greenhouse.dialogPage.get("modal");a.set("contentView",Greenhouse.dialogPage.get("newItemForPage"));
a.set("layout",{width:200,height:120,centerX:0,centerY:0});a.append()},exitState:function(){var a=Greenhouse.dialogPage.get("modal");
a.remove();Greenhouse.set("newItem",null);Greenhouse.set("newPageItemName","")},cancel:function(){this.goState("modalReady")
},add:function(){var b=Greenhouse.get("newItem"),a=Greenhouse.get("newPageItemName");
b.addItemToPage(a);this.goState("modalReady")}})});Greenhouse.mixin({ready:SC.State.create({enterState:function(){console.log("greenhouse has landed");
var a=Greenhouse.getPath("mainPage.mainPane.container");a.set("nowShowing",Greenhouse.getPath("appPage.mainView"))
},exitState:function(){},run:function(){var a=Greenhouse.targetController.get("name");
window.open(a,"","")},selectFile:function(){var a=Greenhouse.fileController.get("content");
if(a){a.refresh();this.goState("gettingFile")}},unselectFile:function(){this.goState("readyWaiting")
},reloadIframe:function(){Greenhouse.filesController.set("selection",null);Greenhouse.gettingFile._firstTime=YES;
Greenhouse.iframe.location.reload();this.goState("iframeLoading")}}),readyWaiting:SC.State.create({parentState:"ready",enterState:function(){},exitState:function(){}}),gettingFile:SC.State.create({parentState:"ready",initState:function(){this._firstTime=YES
},enterState:function(){},exitState:function(){},fileSelectedIsAPage:function(){Greenhouse.loadIframeWithPage(this._firstTime);
this._firstTime=NO;this.goHistoryState("pageSelected")},fileSelectedIsNotAPage:function(){this.goState("fileSelected")
}}),fileSelected:SC.State.create({parentState:"ready",enterState:function(){},exitState:function(){}}),pageSelected:SC.State.create({parentState:"ready",initialSubState:"noDock",enterState:function(){},exitState:function(){},save:function(){var a,b=Greenhouse.fileController.get("content");
a=Greenhouse.iframe.SC.designsController.get("page");a.setPath("designController.selection",null);
if(!a.get("pageName")){a.set("pageName",b.get("pageName"))}a=a.emitDesign();b.set("body",js_beautify(a));
b.commitRecord()},addProperty:function(){var a=Greenhouse.designController.get("content");
if(a){a.designProperties.pushObject("newProperty");a.propertyDidChange("editableProperties")
}},deleteProperty:function(){var c=Greenhouse.propertyController.get("content"),b=Greenhouse.designController.get("content"),a;
if(c&&b){a=c.view;a[c.view]=undefined;delete a[c.key];b.designProperties.removeObject(c.key);
a.propertyDidChange(c.key);if(a.displayDidChange){a.displayDidChange()}b.propertyDidChange("editableProperties")
}}}),noDock:SC.State.create({parentState:"pageSelected",enterState:function(){var b=Greenhouse.appPage.get("dockView");
b.set("layout",{top:0,bottom:0,right:0,width:0});var a=Greenhouse.appPage.get("designAreaView");
a.set("layout",{top:0,bottom:0,right:0,left:0})},exitState:function(){},toggleDockedLibrary:function(){this.goState("docked")
},toggleDockedInspector:function(){this.goState("docked")}}),docked:SC.State.create({parentState:"pageSelected",enterState:function(){var b=Greenhouse.appPage.get("dockView");
b.set("layout",{top:0,bottom:0,right:0,width:230});var a=Greenhouse.appPage.get("designAreaView");
a.set("layout",{top:0,left:0,right:230,bottom:0})},exitState:function(){},undock:function(){this.goState("noDock")
}})});Greenhouse.ApplicationListItem=SC.ListItemView.extend({render:function(a,b){if(this.get("contentIndex")===0){a.addClass("first")
}arguments.callee.base.apply(this,arguments)}});Greenhouse.EventBlocker=SC.View.extend({isVisible:NO,dragStarted:function(b,a){this.set("isVisible",YES)
},dragEnded:function(b,a){this.set("isVisible",NO)},isDropTarget:YES,mouseMoved:function(a){return this.get("isVisible")
},mouseDragged:function(a){return this.get("isVisible")}});SC.LabelView.Designer=SC.LabelView.Designer.extend({designProperties:"value escapeHTML classNames backgroundColor".w()});
Greenhouse.ListItem=SC.ListItemView.extend({});Greenhouse.SimpleButton={target:null,action:null,hasState:NO,hasHover:NO,inState:NO,_hover:NO,stateClass:"state",hoverClass:"hover",activeClass:"active",_isMouseDown:NO,displayProperties:["inState"],mouseDown:function(a){if(!this.get("isEnabledInPane")){return YES
}this._isMouseDown=YES;this.displayDidChange();return YES},mouseExited:function(a){if(this.get("hasHover")){this._hover=NO;
this.displayDidChange()}return YES},mouseEntered:function(a){if(this.get("hasHover")){this._hover=YES;
this.displayDidChange()}return YES},mouseUp:function(a){if(!this.get("isEnabledInPane")){return YES
}this._isMouseDown=false;var c=this.get("target")||null;var b=this.get("action");
if(this._hasLegacyActionHandler()){this._triggerLegacyActionHandler(a)}else{this.getPath("pane.rootResponder").sendAction(b,c,this,this.get("pane"))
}if(this.get("hasState")){this.set("inState",!this.get("inState"))}this.displayDidChange();
return YES},renderMixin:function(c,f){if(this.get("hasHover")){var d=this.get("hoverClass");
c.setClass(d,this._hover&&!this._isMouseDown)}if(this.get("hasState")){var e=this.get("stateClass");
c.setClass(e,this.inState)}var b=this.get("activeClass");c.setClass(b,this._isMouseDown);
var a=this.get("toolTip");if(SC.typeOf(a)===SC.T_STRING){if(this.get("localize")){a=a.loc()
}c.attr("title",a);c.attr("alt",a)}},_hasLegacyActionHandler:function(){var a=this.get("action");
if(a&&(SC.typeOf(a)===SC.T_FUNCTION)){return true}if(a&&(SC.typeOf(a)===SC.T_STRING)&&(a.indexOf(".")!==-1)){return true
}return false},_triggerLegacyActionHandler:function(evt){var target=this.get("target");
var action=this.get("action");if(target===undefined&&SC.typeOf(action)===SC.T_FUNCTION){this.action(evt)
}else{if(target!==undefined&&SC.typeOf(action)===SC.T_FUNCTION){action.apply(target,[evt])
}}if(SC.typeOf(action)===SC.T_STRING){eval("this.action = function(e) { return "+action+"(this, e); };");
this.action(evt)}}};Greenhouse.TearOffPicker=SC.PickerPane.extend({dragAction:"",mouseDragged:function(a){Greenhouse.sendAction(this.get("dragAction"));
this._blockedIframe=YES;Greenhouse.eventBlocker.set("isVisible",YES);return arguments.callee.base.apply(this,arguments)
},mouseUp:function(a){if(this._blockedIframe){Greenhouse.eventBlocker.set("isVisible",NO);
this._blockedIframe=NO}return arguments.callee.base.apply(this,arguments)},mouseDown:function(a){var b=this.get("frame");
this._mouseOffsetX=b?(b.x-a.pageX):0;this._mouseOffsetY=b?(b.y-a.pageY):0;return this.modalPaneDidClick(a)
},modalPaneDidClick:function(a){var b=this.get("frame");if(!this.clickInside(b,a)){Greenhouse.sendAction("cancel")
}return YES},computeAnchorRect:function(c){var b=SC.viewportOffset(c);var d=SC.$(c);
var a=SC.RootResponder.responder.computeWindowSize();b.width=d.outerWidth();b.height=(a.height-b.y)<d.outerHeight()?(a.height-b.y):d.outerHeight();
b.y=b.y-11;return b}});Greenhouse.WebView=SC.WebView.extend({iframeDidLoad:function(){if(this.get("shouldAutoResize")===YES){var a;
var c=this.$("iframe")[0];if(c&&c.contentWindow){a=c.contentWindow;this.contentWindow=a;
if(a&&a.document&&a.document.documentElement){var b=a.document.documentElement;if(!SC.browser.isIE){this.$().width(b.scrollWidth);
this.$().height(b.scrollHeight)}else{this.$().width(b.scrollWidth+12);this.$().height(b.scrollHeight+5)
}}}}else{var d=this.$("iframe")[0];if(d){this.contentWindow=d.contentWindow}}Greenhouse.set("iframe",this.contentWindow);
Greenhouse.sendAction("iframeLoaded")}});require("views/list_item");require("views/web");
require("views/tear_off_picker");require("mixins/drop_down");require("views/simple_button");
Greenhouse.appPage=SC.Page.design({mainView:SC.View.design({layout:{top:-1,bottom:0,left:0,right:0},childViews:"mainContainer toolBar".w(),defaultResponder:"Greenhouse",mainContainer:SC.ContainerView.design({layout:{left:0,top:46,right:0,bottom:0},nowShowingBinding:"Greenhouse.fileController.editorMode"}),toolBar:SC.ToolbarView.design({layout:{left:0,right:0,top:0,height:46},anchorLocation:SC.ANCHOR_TOP,classNames:["toolbar"],childViews:"logo project save run title library inspector action ".w(),logo:SC.View.design({layout:{left:20,width:131,height:32,centerY:-1},classNames:["greenhouse-logo-s"]}),project:SC.ButtonView.design({toolTip:"_Project".loc(),classNames:["dark"],layout:{left:171,width:47,height:24,centerY:-1},titleMinWidth:37,hasIcon:YES,icon:"projects",action:"openProjectPicker"}),save:SC.ButtonView.design({toolTip:"_Save".loc(),classNames:["dark"],layout:{left:251,centerY:-1,width:47,height:24},titleMinWidth:37,hasIcon:YES,icon:"save",action:"save"}),run:SC.ButtonView.design({toolTip:"_Run".loc(),classNames:["dark"],layout:{left:304,centerY:-1,width:47,height:24},titleMinWidth:37,hasIcon:YES,icon:"run",action:"run"}),title:SC.LabelView.design({layout:{centerX:75,centerY:-2,height:24,width:300},classNames:["title"],textAlign:SC.ALIGN_CENTER,valueBinding:SC.Binding.oneWay("Greenhouse.fileController.name")}),library:SC.ButtonView.design({toolTip:"_Library".loc(),classNames:["dark"],layout:{right:153,width:47,height:24,centerY:-1},titleMinWidth:37,hasIcon:YES,icon:"library",action:"openLibrary"}),inspector:SC.ButtonView.design({toolTip:"_Inspector".loc(),classNames:["dark"],layout:{right:100,width:47,height:24,centerY:-1},titleMinWidth:37,hasIcon:YES,icon:"inspector",action:"openInspector"}),action:SC.ButtonView.design(Greenhouse.DropDown,{classNames:["dark"],layout:{right:20,centerY:-1,width:47,height:24},titleMinWidth:37,hasIcon:YES,toolTip:"_Actions".loc(),icon:"actions",dropDown:SC.MenuPane.design({defaultResponder:"Orion",layout:{width:140,height:0},itemTitleKey:"title",itemTargetKey:"target",itemActionKey:"action",itemSeparatorKey:"isSeparator",itemIsEnabledKey:"isEnabled",items:[{title:"_Run".loc(),action:"run",isEnabled:YES},{title:"_Reload App".loc(),action:"reloadIframe",isEnabled:YES},{title:"_Dock Library".loc(),action:"toggleDockedLibrary",isEnabled:YES},{title:"_Dock Inspector".loc(),action:"toggleDockedInspector",isEnabled:YES},{title:"_Save".loc(),action:"save",isEnabled:YES}]})})})}),designAreaView:SC.outlet("pageDesigner.designArea"),webView:SC.outlet("pageDesigner.designArea.web"),eventBlocker:SC.outlet("pageDesigner.designArea.eventBlocker"),dockView:SC.outlet("pageDesigner.dock"),libraryDockView:SC.outlet("pageDesigner.dock.libraryArea"),inspectorDockView:SC.outlet("pageDesigner.dock.inspectorArea"),pageDesigner:SC.View.design({layout:{left:0,top:0,right:0,bottom:0},childViews:"designArea dock".w(),designArea:SC.View.design({layout:{top:0,left:0,right:0,bottom:0},classNames:["workspace"],childViews:"web eventBlocker".w(),web:Greenhouse.WebView.design({valueBinding:"Greenhouse.targetController.appUrl"}),eventBlocker:Greenhouse.EventBlocker.design({})}),dock:SC.View.design({layout:{top:0,bottom:0,right:0,width:0},childViews:"libraryArea inspectorArea".w(),classNames:["anchored"],libraryArea:SC.ContainerView.design({classNames:["library-docked"],layout:{left:0,top:0,right:0,bottom:386},nowShowing:null}),inspectorArea:SC.ContainerView.design({classNames:["inspector-docked"],layout:{right:0,bottom:0,left:0,height:385},nowShowing:null})})}),inspectorContentView:SC.View.design({childViews:"toolbar content".w(),toolbar:SC.View.design({layout:{top:0,left:0,right:0,height:28},isVisible:NO,childViews:"title remove".w(),title:SC.LabelView.design({layout:{centerX:0,top:2,height:24,width:50},title:"_Inspector".loc()}),remove:SC.View.design(Greenhouse.SimpleButton,{classNames:["close-button"],layout:{right:1,top:6,width:18,height:17},action:"closeInspector"})}),content:SC.TabView.design({layout:{left:6,right:6,bottom:6,height:368},itemTitleKey:"title",itemValueKey:"value",nowShowing:"Greenhouse.inspectorsPage.layoutInspector",items:[{title:"Layout",value:"Greenhouse.inspectorsPage.layoutInspector"},{title:"All Properties",value:"Greenhouse.inspectorsPage.propertiesInspector"}]})}),inspectorPickerContentView:SC.outlet("inspectorPicker.contentView"),inspectorPicker:Greenhouse.TearOffPicker.design({classNames:["gh-picker","inspector"],layout:{width:230,height:380},defaultResponder:"Greenhouse",dragAction:"floatInspector",contentView:SC.ContainerView.design({nowShowing:"Greenhouse.appPage.inspectorContentView"})}),libraryContentView:SC.View.design({childViews:"controlBar toolbar content".w(),controlBar:SC.View.design({classNames:["control-bar"],layout:{left:10,right:10,top:12,height:24},childViews:"search".w(),search:SC.TextFieldView.design({classNames:["search"],layout:{top:0,centerX:0,width:180,height:24},valueBinding:"Greenhouse.libraryController.search"})}),toolbar:SC.View.design({layout:{top:0,left:0,right:0,height:28},isVisible:NO,childViews:"remove".w(),remove:SC.View.design(Greenhouse.SimpleButton,{classNames:["close-button"],layout:{right:1,top:6,width:18,height:17},action:"closeLibrary"})}),content:SC.View.design({classNames:["content"],layout:{top:49,bottom:11,left:8,right:8},childViews:"library addCustomView".w(),library:SC.ScrollView.design({classNames:["library-list"],layout:{top:0,bottom:32,left:0,right:0},hasHorizontalScroller:NO,contentView:SC.ListView.design({rowHeight:36,isEditable:NO,contentValueKey:"name",contentBinding:"Greenhouse.libraryController.arrangedObjects",selectionBinding:"Greenhouse.libraryController.selection",delegate:Greenhouse.libraryController,canReorderContent:YES,dragDidBegin:function(a,b){Greenhouse.sendAction("cancel")
}})}),addCustomView:SC.ButtonView.design({classNames:["dark"],layout:{bottom:1,right:0,height:24,width:90},titleMinWidth:0,hasIcon:NO,title:"_Add View".loc(),action:"newCustomView"})})}),libraryPickerContentView:SC.outlet("libraryPicker.contentView"),libraryPicker:Greenhouse.TearOffPicker.design({classNames:["gh-picker"],layout:{width:230,height:400},dragAction:"floatLibrary",defaultResponder:"Greenhouse",contentView:SC.ContainerView.design({nowShowing:"Greenhouse.appPage.libraryContentView"})}),projectPicker:SC.PickerPane.design({classNames:["gh-picker"],layout:{width:200,height:500},defaultResponder:"Greenhouse",computeAnchorRect:function(c){var b=SC.viewportOffset(c);
var d=SC.$(c);var a=SC.RootResponder.responder.computeWindowSize();b.width=d.outerWidth();
b.height=(a.height-b.y)<d.outerHeight()?(a.height-b.y):d.outerHeight();b.y=b.y-11;
return b},modalPaneDidClick:function(a){var b=this.get("frame");if(!this.clickInside(b,a)){Greenhouse.sendAction("cancel")
}return YES},contentView:SC.View.design({childViews:"controlBar fileList".w(),controlBar:SC.View.design({classNames:["control-bar"],layout:{left:10,right:10,top:12,height:24},childViews:"addPage".w(),addPage:SC.ButtonView.design({classNames:["dark"],layout:{width:90,height:24,left:0},titleMinWidth:0,hasIcon:NO,title:"_Add Page...".loc(),action:"newPageFile"})}),fileList:SC.ScrollView.design({classNames:["content"],layout:{top:49,bottom:11,left:8,right:8},hasHorizontalScroller:NO,contentView:SC.ListView.design({exampleView:Greenhouse.ListItem,isEditable:NO,canEditContent:YES,actOnSelect:YES,deelegate:Greenhouse.filesController,contentValueKey:"name",contentBinding:"Greenhouse.filesController.arrangedObjects",selectionBinding:"Greenhouse.filesController.selection",action:"selectFile"})})})})});
sc_require("views/application_list_item");Greenhouse.mainPage=SC.Page.design({mainPane:SC.MainPane.design({defaultResponder:"Greenhouse",childViews:"container".w(),container:SC.ContainerView.design({nowShowing:""})}),loading:SC.LabelView.design({layout:{bottom:0,height:30,left:0,right:0},value:"Loading...",textAlign:SC.ALIGN_CENTER,classNames:["footer"]}),appPicker:SC.View.design({childViews:"scLogo picker footer warning".w(),classNames:["app-picker"],scLogo:SC.View.design({layout:{width:140,left:10,top:10,height:32},classNames:["sc-logo"]}),picker:SC.View.design({layout:{width:548,height:400,centerX:-102,centerY:-60},childViews:"ghLogo prompt scrollView button".w(),classNames:["app-picker"],ghLogo:SC.View.design({layout:{width:279,left:168,top:0,height:64},classNames:["greenhouse-logo-l"]}),prompt:SC.View.design({layout:{width:175,left:0,top:62,height:128},classNames:["helper"]}),button:SC.ButtonView.design({layout:{bottom:12,height:28,width:140,right:0},isEnabledBinding:"Greenhouse.targetController.content",title:"Load Application",theme:"capsule",isDefault:YES,action:"loadApplication"}),scrollView:SC.ScrollView.design({layout:{right:0,top:60,width:332,bottom:54},hasHorizontalScroller:NO,contentView:SC.ListView.design({rowHeight:41,exampleView:Greenhouse.ApplicationListItem,contentBinding:"Greenhouse.targetsController.applications",selectionBinding:"Greenhouse.targetsController.selection",contentValueKey:"displayName",contentIconKey:"targetIcon",hasContentIcon:YES,action:"loadApplication"})})}),warning:SC.LabelView.design({layout:{bottom:60,centerX:0,width:400,height:58},value:"NOTE: Greenhouse is under active development and not yet ready for general use.  At the moment, Greenhouse works best with Google Chrome."}),footer:SC.LabelView.design({layout:{bottom:0,height:30,left:0,right:0},value:"©2010 Sprout Systems Inc. & Contributors",textAlign:SC.ALIGN_CENTER,classNames:["footer"]})})});
Greenhouse.TestPage=SC.Page.design({mainView:SC.View.design({childViews:[SC.ButtonView.design({layout:{width:100,height:24,top:444,left:685},title:"dork",isDefault:YES})]}),myView:SC.View.design({childViews:[SC.ButtonView.design({layout:{width:100,height:24,top:208,left:49}}),SC.ButtonView.design({layout:{width:100,height:24,top:58,left:83}})]}),someView:SC.View.design({}),myC:SC.ObjectController.design({}),pageName:"Greenhouse.TestPage"});
Greenhouse.main=function main(){Greenhouse.getPath("mainPage.mainPane").append();
Greenhouse.targetsController.reload();Greenhouse.startupStatechart()};function main(){Greenhouse.main()
}Greenhouse.mixin({loading:SC.State.create({enterState:function(){console.log("greenhouse is loading");
var a=Greenhouse.getPath("mainPage.mainPane.container");a.set("nowShowing",Greenhouse.getPath("mainPage.loading"))
},exitState:function(){},fileListCallDidComplete:function(){this.goState("iframeLoading")
},fetchTargetsDidComplete:function(){this.goState("chooseApp")}}),chooseApp:SC.State.create({enterState:function(){var a=Greenhouse.getPath("mainPage.mainPane.container");
a.set("nowShowing",Greenhouse.getPath("mainPage.appPicker"))},exitState:function(){},loadApplication:function(){Greenhouse.filesController.reload();
this.goState("loading")}}),iframeLoading:SC.State.create({enterState:function(){var a=Greenhouse.getPath("mainPage.mainPane.container");
a.set("nowShowing",Greenhouse.getPath("appPage.mainView"))},exitState:function(){},iframeLoaded:function(){this.goState("syncRunLoops")
}}),syncRunLoops:SC.State.create({enterState:function(){this._setupRunLoops();this._grabDropTargets();
this._setupGreenhouse();this._setupEventBlocker();this.invokeLater(function(){this.goState("readyWaiting")
})},exitState:function(){},_setupRunLoops:function(){var c=Greenhouse.get("iframe"),a,f,d,e,b=SC;
f=b.RunLoop.begin=function(){var g=this.currentRunLoop;if(!g){g=this.currentRunLoop=b.RunLoop.runLoopClass.create()
}g.beginRunLoop();var h=c.SC.RunLoop.currentRunLoop;if(!h){h=c.SC.RunLoop.currentRunLoop=c.SC.RunLoop.runLoopClass.create()
}h.beginRunLoop();return this};a=c.SC.RunLoop.begin=function(){f();return this};e=b.RunLoop.end=function(){var h=c.SC.RunLoop.currentRunLoop;
if(h){h.endRunLoop()}var g=this.currentRunLoop;if(!g){throw"SC.RunLoop.end() called outside of a runloop!"
}g.endRunLoop();return this};d=c.SC.RunLoop.end=function(){var g=this.currentRunLoop;
if(!g){throw"SC.RunLoop.end() called outside of a runloop!"}g.endRunLoop();e();return this
}},_grabDropTargets:function(){var c=Greenhouse.get("iframe"),b,a,f=Greenhouse.appPage.get("webView");
var e=f.get("parentView");a=f.get("frame");a=e.convertFrameToView(a,null);b=c.SC.Drag._dropTargets;
for(var d in b){if(b.hasOwnProperty(d)){SC.Drag.addDropTarget(b[d])}}c.SC.Drag.addDropTarget=function(g){c.SC.Drag._dropTargets[c.SC.guidFor(g)]=g;
SC.Drag._dropTargets[c.SC.guidFor(g)]=g};c.SC.Drag.removeDropTarget=function(g){delete c.SC.Drag._dropTargets[c.SC.guidFor(g)];
delete SC.Drag._dropTargets[c.SC.guidFor(g)]};SC.Drag.prototype._findDropTarget=function(i){var m={x:i.pageX,y:i.pageY};
var k,l;var j=this._dropTargets();for(var h=0,g=j.length;h<g;h++){k=j[h];if(!k.get("isVisibleInWindow")){continue
}l=k.convertFrameToView(k.get("clippingFrame"),null);if(k.get("targetIsInIFrame")){l.x=l.x+a.x;
l.y=l.y+a.y}if(SC.pointInRect(m,l)){return k}}return null};c.SC.Drag.start=SC.Drag.start
},_setupGreenhouse:function(){var a=Greenhouse.get("iframe");a.SC._Greenhouse=Greenhouse
},_setupEventBlocker:function(){var a=Greenhouse.appPage.get("eventBlocker");Greenhouse.set("eventBlocker",a)
}})});