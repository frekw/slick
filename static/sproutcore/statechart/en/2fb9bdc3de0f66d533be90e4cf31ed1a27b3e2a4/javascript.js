SC.DEFAULT_TREE="default";SC.State=SC.Object.extend({initState:function(){},enterState:function(a){},exitState:function(a){},parallelStatechart:SC.DEFAULT_STATE,parentState:null,history:null,initialSubState:null,name:null,state:function(){var a=this.get("stateManager");
if(!a){throw"Cannot access the current state because state does not have a state manager"
}return a.currentState(this.get("parallelStatechart"))},goState:function(a){var b=this.get("stateManager");
if(b){b.goState(a,this.get("parallelStatechart"))}else{throw"Cannot goState cause state does not have a stateManager!"
}},goHistoryState:function(a,b){var c=this.get("stateManager");if(c){c.goHistoryState(a,this.get("parallelStatechart"),b)
}else{throw"Cannot goState cause state does not have a stateManager!"}},enterInitialSubState:function(a){var b=this.get("initialSubState");
if(b){if(!a[b]){throw"Cannot find initial sub state: %@ defined on state: %@".fmt(b,this.get("name"))
}this.set("history",b);var c=a[b];return this.goState(b,a)}return this},toString:function(){return this.get("name")
},parentStateObject:function(){var a=this.get("stateManager");if(a){return a.parentStateObject(this.get("parentState"),this.get("parallelStatechart"))
}else{throw"Cannot access parentState cause state does not have a stateManager!"}}.property("parentState").cacheable(),trace:function(){var a=this.get("stateManager");
if(a){return a._parentStates(this)}else{throw"Cannot trace cause state does not have a stateManager!"
}}});require("system/state");SC.Statechart={isStatechart:true,log:NO,initMixin:function(){this._all_states={};
this._all_states[SC.DEFAULT_TREE]={};this._current_state={};this._current_state[SC.DEFAULT_TREE]=null;
this._goStateLocked=NO;this._pendingStateTransitions=[];this.sendAction=this.sendEvent;
if(this.get("startOnInit")){this.startupStatechart()}},startOnInit:YES,startupStatechart:function(){if(!this._started){var e,a,g,c,d,b,f;
for(e in this){if(this.hasOwnProperty(e)&&SC.kindOf(this[e],SC.State)&&this[e].get&&!this[e].get("beenAddedToStatechart")){g=this[e];
this._addState(e,g)}}c=this._all_states;for(e in c){if(c.hasOwnProperty(e)){a=c[e];
for(g in a){if(a.hasOwnProperty(g)){a[g].initState()}}}}d=this.get("startStates");
if(!d){throw"Please add startStates to your statechart!"}for(e in c){if(c.hasOwnProperty(e)){b=d[e];
f=c[e];if(!b){console.error("The parallel statechart %@ must have a start state!".fmt(e))
}if(!f){throw"The parallel statechart %@ does not exist!".fmt(e)}if(!f[b]){throw"The parallel statechart %@ doesn't have a start state [%@]!".fmt(e,b)
}this.goState(b,e)}}}this._started=YES},registerState:function(e,d,c){var b,a;b=SC.State.create(e);
if(d&&c){if(d.isStatechart){d._addState(c,b);b.initState()}else{throw"Cannot add state: %@ because state manager does not mixin SC.Statechart".fmt(b.get("name"))
}}else{b.set("beenAddedToStatechart",NO)}return b},goHistoryState:function(c,a,f){var d=this._all_states[a],b,e;
if(!a||!d){throw"State requesting go history does not have a valid parallel tree"
}b=d[c];if(b){e=b.get("history")||b.get("initialSubState")}if(!e){if(!f){console.warn("Requesting History State for [%@] and it is not a parent state".fmt(c))
}e=c;this.goState(e,a)}else{if(f){this.goHistoryState(e,a,f)}else{this.goState(e,a)
}}},goState:function(a,o){var b=this._current_state[o],l=[],k=[],n,c,m,d,e,g,j=this.get("log"),f,h;
if(!o){throw"#goState: State requesting go does not have a valid parallel tree"}h=a;
a=this._all_states[o][a];if(!a){throw"#goState: Could not find the requested state! (%@ in %@)".fmt(h,o)
}if(this._goStateLocked){this._pendingStateTransitions.push({requestedState:a,tree:o});
return}this._goStateLocked=YES;l=this._parentStates_with_root(a);k=b?this._parentStates_with_root(b):[];
m=k.find(function(p,i){c=i;n=l.indexOf(p);if(n>=0){return YES}});if(!n){n=l.length-1
}f="";for(g=0;g<c;g+=1){if(j){f+="Exiting State: [%@] in [%@]\n".fmt(k[g],o)}k[g].exitState()
}if(j){console.info(f)}f="";for(g=n-1;g>=0;g-=1){e=l[g];if(j){f+="Entering State: [%@] in [%@]\n".fmt(e,o)
}d=l[g+1];if(d&&SC.typeOf(d)===SC.T_OBJECT){d.set("history",e.name)}e.enterState();
if(e===a){e.enterInitialSubState(this._all_states[o||SC.DEFAULT_TREE])}}if(j){console.info(f)
}this._current_state[o]=a;this._goStateLocked=NO;this._flushPendingStateTransition()
},_flushPendingStateTransition:function(){var a=this._pendingStateTransitions.shift();
if(!a){return}this.goState(a.requestedState,a.tree)},currentState:function(a){a=a||SC.DEFAULT_TREE;
return this._current_state[a]},isResponderContext:YES,sendEvent:function(g,e,d){var f=this.get("log"),h=NO,c=this._current_state,b;
this._locked=YES;if(f){console.log("%@: begin action '%@' (%@, %@)".fmt(this,g,e,d))
}for(var a in c){if(c.hasOwnProperty(a)){h=NO;b=c[a];while(!h&&b){if(b.tryToPerform){h=b.tryToPerform(g,e,d)
}if(!h){b=b.get("parentState")?this._all_states[a][b.get("parentState")]:null}}if(f){if(!h){console.log("%@:  action '%@' NOT HANDLED in tree %@".fmt(this,g,a))
}else{console.log("%@: action '%@' handled by %@ in tree %@".fmt(this,g,b.get("name"),a))
}}}}this._locked=NO;return b},_addState:function(b,c){c.set("stateManager",this);
c.set("name",b);var a=c.get("parallelStatechart")||SC.DEFAULT_TREE;c.setIfChanged("parallelStatechart",a);
if(!this._all_states[a]){this._all_states[a]={}}if(this._all_states[a][b]){throw"Trying to add state %@ to state tree %@ and it already exists".fmt(b,a)
}this._all_states[a][b]=c;c.set("beenAddedToStatechart",YES)},_parentStates:function(b){var a=[],c=b;
a.push(c);c=c.get("parentStateObject");while(c){a.push(c);c=c.get("parentStateObject")
}return a},_parentStates_with_root:function(b){var a=this._parentStates(b);a.push("root");
return a},parentStateObject:function(b,a){if(b&&a&&this._all_states[a]&&this._all_states[a][b]){return this._all_states[a][b]
}return null}};if((typeof SC!=="undefined")&&SC&&SC.bundleDidLoad){SC.bundleDidLoad("sproutcore/statechart")
};