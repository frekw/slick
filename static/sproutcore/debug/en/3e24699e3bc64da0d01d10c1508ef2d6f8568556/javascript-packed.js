var SC=SC||{};SC._mapDisplayNamesUseHashForSeenTypes=["object","number","boolean","array","string","function","class","undefined","error"];
SC.mapDisplayNames=function(j,a,n,g,r){if(!SC.browser.safari){return}if(!SC._mapDisplayNamesUseHashForSeenTypesHash){var h=SC._mapDisplayNamesUseHashForSeenTypes;
var m={};var q=h.length;for(var p=0;p<q;++p){var c=h[p];m[c]=true}SC._mapDisplayNamesUseHashForSeenTypesHash=m
}if(j===undefined){j=window}if(a===undefined){a=0}if(n===undefined){n=[]}if(g===undefined){g={}
}if(r===undefined){r=[]}if(a>5){return}var d=!!SC._mapDisplayNamesUseHashForSeenTypesHash[SC.typeOf(j)];
var b;var l;if(d){b=SC.hashFor(j);l=g[b]}else{l=r}if(l&&l.indexOf(j)!==-1){return
}if(l){l.push(j)}else{if(d){g[b]=[j]}}var f=n.length,o,v,k;n[f]="";for(var u in j){if(j.hasOwnProperty&&!j.hasOwnProperty(u)){continue
}if(!isNaN(Number(u))){continue}if(u==="constructor"){continue}if(u==="superclass"){continue
}if(u==="document"){continue}if(j.type&&j.type==="file"){if(u==="selectionStart"||u==="selectionEnd"){continue
}}try{v=j[u]}catch(s){continue}if(u==="SproutCore"){u="SC"}k=SC.typeOf(v);if(k===SC.T_FUNCTION){if(!v.displayName){n[f]=u;
o=n.join(".").replace(".prototype.","#");v.displayName=o}if(v.prototype){n.push("prototype");
SC.mapDisplayNames(v.prototype,a+1,n,g,r);n.pop()}}else{if(k===SC.T_CLASS){n[f]=u;
SC.mapDisplayNames(v,a+1,n,g,r)}else{if((u.indexOf("_")!==0)&&(k===SC.T_OBJECT||k===SC.T_HASH)){n[f]=u;
SC.mapDisplayNames(v,a+1,n,g,r)}}}}n.pop()};var SC=SC||{};if(!SC.LOG_RUNLOOP_INVOCATIONS){SC.LOG_RUNLOOP_INVOCATIONS=false
}SC.addInvokeOnceLastDebuggingInfo=function(){SC.ObserverSet.add=function(j,b,e,i,p,l){var c=(j)?SC.guidFor(j):"__this__";
var g=this[c];if(!g){g=this[c]=SC.CoreSet.create();g.target=j;g.isTargetSet=YES;this.targets++
}g.add(b);if(e!==undefined){var h=g.contexts;if(!h){h={}}h[SC.guidFor(b)]=e}if(p!==undefined){var f=g.originatingTargets;
var o=g.originatingMethods;var a=g.originatingStacks;if(!f){f=g.originatingTargets={}
}if(!o){o=g.originatingMethods={}}if(!a){a=g.originatingStacks={}}var n=SC.guidFor(b);
var d=o[n];if(d&&SC.typeOf(d)!==SC.T_ARRAY){var k=f[n];var m=a[n];f[n]=[k,i];o[n]=[d,p];
a[n]=[m,l]}else{f[n]=i;o[n]=p;a[n]=l}}this._membersCacheIsValid=NO};SC.ObserverSet.invokeMethods=function(){for(var p in this){if(!this.hasOwnProperty(p)){continue
}var n=this[p];if(n&&n.isTargetSet){var o=n.length;var j=n.target;var c,d=SC.LOG_RUNLOOP_INVOCATIONS;
while(--o>=0){c=n[o];if(d){var s=c.displayName||c;var g=SC.guidFor(c),b=n.originatingTargets;
if(!b){console.log("Invoking runloop-scheduled method %@ on %@, but we didn’t capture information about who scheduled it…".fmt(s,j))
}else{b=b[g];var r=n.originatingMethods[g];var a=n.originatingStacks[g];if(r&&SC.typeOf(r)===SC.T_ARRAY){console.log("Invoking runloop-scheduled method %@ on %@, which was scheduled by multiple target/method pairs:".fmt(s,j));
var e,h,f,q,k;for(e=0,h=r.length;e<h;++e){f=b[e];q=r[e];q=q.displayName||q;k=a[e];
console.log("[%@]  originated by target %@,  method %@,  stack:".fmt(e,f,q),k)}}else{var l=r.displayName||r;
console.log("Invoking runloop-scheduled method %@ on %@.  Originated by target %@,  method %@,  stack: ".fmt(s,j,b,l),a)
}}}c.call(j)}}}};SC.Object.prototype.invokeOnce=function(b){var a=this;if(SC.LOG_RUNLOOP_INVOCATIONS){originatingStack=SC.getRecentStack();
originatingMethod=originatingStack[0]}else{originatingStack=null;originatingMethod=arguments.callee.caller
}SC.RunLoop.currentRunLoop.invokeOnce(this,b,a,originatingMethod,originatingStack);
return this};SC.Object.prototype.invokeLast=function(d){var a=this;var c,b;if(SC.LOG_RUNLOOP_INVOCATIONS){c=SC.getRecentStack();
b=c[0]}else{c=null;b=arguments.callee.caller}SC.RunLoop.currentRunLoop.invokeLast(this,d,a,b,c);
return this};SC.RunLoop.prototype.invokeOnce=function(c,e,a,b,d){if(!a){a=null}if(!b){if(SC.LOG_RUNLOOP_INVOCATIONS){d=SC.getRecentStack();
b=d[0]}else{d=null;b=arguments.callee.caller}}if(e===undefined){e=c;c=this}if(SC.typeOf(e)===SC.T_STRING){e=c[e]
}if(!this._invokeQueue){this._invokeQueue=SC.ObserverSet.create()}this._invokeQueue.add(c,e,null,a,b,d);
return this};SC.RunLoop.prototype.invokeLast=function(c,e,a,b,d){if(!a){a=null}if(!b){if(SC.LOG_RUNLOOP_INVOCATIONS){d=SC.getRecentStack();
b=d[0]}else{d=null;b=arguments.callee.caller}}if(e===undefined){e=c;c=this}if(SC.typeOf(e)===SC.T_STRING){e=c[e]
}if(!this._invokeLastQueue){this._invokeLastQueue=SC.ObserverSet.create()}this._invokeLastQueue.add(c,e,null,a,b,d);
return this};SC.getRecentStack=function(){var d=arguments.callee.caller,b=0,a={},e=YES,c;
while(d&&b<6){if(e){e=NO}else{c=d.displayName||d.toString();a[b++]=c}d=d.caller}return a
}};if((typeof SC!=="undefined")&&SC&&SC.bundleDidLoad){SC.bundleDidLoad("sproutcore/debug")
};