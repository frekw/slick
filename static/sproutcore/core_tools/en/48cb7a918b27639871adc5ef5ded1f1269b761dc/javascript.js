SC.stringsFor("English",{});CoreTools=SC.Object.create({NAMESPACE:"CoreTools",VERSION:"1.0.0"});
CoreTools.DataSource=SC.DataSource.extend({fetch:function(a,c){var b=NO;switch(c.get("recordType")){case CoreTools.Target:b=this.fetchTargets(a,c);
break;case CoreTools.Test:b=this.fetchTests(a,c);break}return b},fetchTargets:function(a,b){if(!b.get("isRemote")){return NO
}SC.Request.getUrl("/sc/targets.json").set("isJSON",YES).notify(this,"fetchTargetsDidComplete",{query:b,store:a}).send();
return YES},fetchTargetsDidComplete:function(e,d){var b=e.get("response"),f=d.query,a=d.store,c;
if(!SC.$ok(b)){console.error("TODO: Add handler when fetching targets fails")}else{c=a.loadRecords(CoreTools.Target,b);
a.loadQueryResults(f,c)}},fetchTests:function(a,c){var b=c.get("url");if(!c.get("isRemote")||!b){return NO
}SC.Request.getUrl(b).set("isJSON",YES).notify(this,"fetchTestsDidComplete",{query:c,store:a}).send();
return YES},fetchTestsDidComplete:function(e,d){var b=e.get("response"),a=d.store,f=d.query,c;
if(!SC.$ok(b)){console.error("TODO: Add handler when fetching tests fails")}else{c=a.loadRecords(CoreTools.Test,b);
a.loadQueryResults(f,c)}}});CoreTools.Target=SC.Record.extend({primaryKey:"name",name:SC.Record.attr(String),parent:SC.Record.toOne("CoreTools.Target"),testsUrl:SC.Record.attr(String,{key:"link_tests"}),appUrl:function(){return(this.get("kind")==="app")?this.get("name"):null
}.property("kind","name").cacheable(),isExpanded:SC.Record.attr(Boolean,{defaultValue:NO}),children:function(){var a=this.get("store"),c=CoreTools.TARGETS_QUERY,b=a.find(c).filterProperty("parent",this);
if(b){b=b.sortProperty("kind","displayName")}return(b&&b.get("length")>0)?b:null}.property().cacheable(),displayName:function(){var a=(this.get("name")||"(unknown)").split("/");
return a[a.length-1]}.property("name").cacheable(),targetIcon:function(){var a="sc-icon-document-16";
switch(this.get("kind")){case"framework":a="sc-icon-folder-16";break;case"app":a="sc-icon-options-16";
break}return a}.property("kind").cacheable(),sortKind:function(){if(this.get("name")==="/sproutcore"){return null
}var a=this.get("parent");if(a&&(a.get("name")==="/sproutcore")){return"sproutcore"
}else{return(this.get("kind")||"unknown").toLowerCase()}}.property("kind","parent").cacheable(),testsQuery:function(){return SC.Query.remote(CoreTools.Test,{url:this.get("testsUrl")})
}.property("testsUrl").cacheable(),tests:function(){return this.get("store").find(this.get("testsQuery"))
}.property("testsQuery").cacheable()});CoreTools.TARGETS_QUERY=SC.Query.remote(CoreTools.Target);
CoreTools.Test=SC.Record.extend({primaryKey:"url",filename:SC.Record.attr(String),url:SC.Record.attr(String),displayName:function(){return(this.get("filename")||"").replace(/^tests\//,"")
}.property("filename").cacheable(),icon:"sc-icon-document-16",isRunnable:YES});if((typeof SC!=="undefined")&&SC&&SC.bundleDidLoad){SC.bundleDidLoad("sproutcore/core_tools")
};