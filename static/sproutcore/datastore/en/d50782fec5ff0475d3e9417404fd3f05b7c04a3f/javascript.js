SC.DataSource=SC.Object.extend({fetch:function(a,b){return NO},retrieveRecords:function(a,c,b){return this._handleEach(a,c,this.retrieveRecord,b)
},commitRecords:function(c,b,g,f,h){var d,e,a;if(b.length>0){d=this.createRecords.call(this,c,b,h)
}if(g.length>0){e=this.updateRecords.call(this,c,g,h)}if(f.length>0){a=this.destroyRecords.call(this,c,f,h)
}return((d===e)&&(d===a))?d:SC.MIXED_STATE},cancel:function(a,b){return NO},updateRecords:function(a,b,c){return this._handleEach(a,b,this.updateRecord,null,c)
},createRecords:function(a,b,c){return this._handleEach(a,b,this.createRecord,null,c)
},destroyRecords:function(a,b,c){return this._handleEach(a,b,this.destroyRecord,null,c)
},_handleEach:function(g,d,c,a,b){var e=d.length,h,f,i,j;if(!a){a=[]}for(h=0;h<e;
h++){j=a[h]?a[h]:b;i=c.call(this,g,d[h],j,b);if(f===undefined){f=i}else{if(f===YES){f=(i===YES)?YES:SC.MIXED_STATE
}else{if(f===NO){f=(i===NO)?NO:SC.MIXED_STATE}}}}return f?f:null},updateRecord:function(a,b,c){return NO
},retrieveRecord:function(a,b,c){return NO},createRecord:function(a,b,c){return NO
},destroyRecord:function(a,b,c){return NO}});sc_require("data_sources/data_source");
SC.CascadeDataSource=SC.DataSource.extend({dataSources:null,from:function(a){var b=this.get("dataSources");
if(!b){this.set("dataSources",b=[])}b.push(a);return this},fetch:function(c,g){var e=this.get("dataSources"),b=e?e.length:0,d=NO,h,f,a;
for(a=0;(d!==YES)&&a<b;a++){f=e.objectAt(a);h=f.fetch?f.fetch.call(f,c,g):NO;d=this._handleResponse(d,h)
}return d},retrieveRecords:function(c,f){var e=this.get("dataSources"),b=e?e.length:0,d=NO,h,g,a;
for(a=0;(d!==YES)&&a<b;a++){g=e.objectAt(a);h=g.retrieveRecords.call(g,c,f);d=this._handleResponse(d,h)
}return d},commitRecords:function(i,c,g,d){var b=this.get("dataSources"),e=b?b.length:0,f=NO,j,a,h;
for(h=0;(f!==YES)&&h<e;h++){a=b.objectAt(h);j=a.commitRecords.call(a,i,c,g,d);f=this._handleResponse(f,j)
}return f},cancel:function(c,f){var e=this.get("dataSources"),b=e?e.length:0,d=NO,h,g,a;
for(a=0;(d!==YES)&&a<b;a++){g=e.objectAt(a);h=g.cancel.call(g,c,f);d=this._handleResponse(d,h)
}return d},init:function(){arguments.callee.base.apply(this,arguments);var b=this.get("dataSources"),a=b?b.get("length"):0,c;
while(--a>=0){c=b[a];if(SC.typeOf(c)===SC.T_STRING){b[a]=this.get(c)}}},_handleResponse:function(b,a){if(a===YES){return YES
}else{if(b===NO){return(a===NO)?NO:SC.MIXED_STATE}else{return SC.MIXED_STATE}}}});
SC.Record=SC.Object.extend({isRecord:YES,primaryKey:"guid",id:function(a,b){if(b!==undefined){this.writeAttribute(this.get("primaryKey"),b);
return b}else{return SC.Store.idFor(this.storeKey)}}.property("storeKey").cacheable(),status:function(){return this.store.readStatus(this.storeKey)
}.property("storeKey").cacheable(),store:null,storeKey:null,isDestroyed:function(){return !!(this.get("status")&SC.Record.DESTROYED)
}.property("status").cacheable(),isEditable:function(a,b){if(b!==undefined){this._screc_isEditable=b
}if(this.get("status")&SC.Record.READY){return this._screc_isEditable}else{return NO
}}.property("status").cacheable(),_screc_isEditable:YES,isLoaded:function(){var b=SC.Record,a=this.get("status");
return !((a===b.EMPTY)||(a===b.BUSY_LOADING)||(a===b.ERROR))}.property("status").cacheable(),relationships:null,attributes:function(){var a=this.get("store"),b=this.storeKey;
return a.readEditableDataHash(b)}.property(),readOnlyAttributes:function(){var a=this.get("store"),c=this.storeKey,b=a.readDataHash(c);
if(b){b=SC.clone(b)}return b}.property(),childRecords:null,childRecordNamespace:null,refresh:function(){this.get("store").refreshRecord(null,null,this.get("storeKey"));
return this},destroy:function(){this.get("store").destroyRecord(null,null,this.get("storeKey"));
this.notifyPropertyChange("status");this.propagateToAggregates();return this},recordDidChange:function(a){this.get("store").recordDidChange(null,null,this.get("storeKey"),a);
this.notifyPropertyChange("status");this.propagateToAggregates();return this},_editLevel:0,beginEditing:function(){this._editLevel++;
return this},endEditing:function(a){if(--this._editLevel<=0){this._editLevel=0;this.recordDidChange(a)
}return this},readAttribute:function(c){var a=this.get("store"),d=this.storeKey;var b=a.readDataHash(d);
return b?b[c]:undefined},writeAttribute:function(d,g,f){var b=this.get("store"),e=this.storeKey,a=b.peekStatus(e),c;
c=b.readEditableDataHash(e);if(!c){throw SC.Record.BAD_STATE_ERROR}if(g!==c[d]){if(!f){this.beginEditing()
}c[d]=g;if(d===this.get("primaryKey")){SC.Store.replaceIdFor(e,g);this.propertyDidChange("id")
}if(!f){this.endEditing(d)}}return this},propagateToAggregates:function(){var o=this.get("storeKey"),d=SC.Store.recordTypeFor(o),m,h,n,b,l;
var g=d.aggregates;if(!g){var f=this.get("store").readDataHash(o);g=[];for(var c in f){if(this[c]&&this[c].get&&this[c].get("aggregate")===YES){g.push(c)
}}d.aggregates=g}var j=SC.Record,a=j.DIRTY,e=j.READY_NEW,p=j.DESTROYED,q=j.READY_CLEAN,i;
i=function(s){var k,r;if(s){k=this.get("status");if((k&a)||(k&e)||(k&p)){r=s.get("status");
if(r===q){s.get("store").recordDidChange(s.constructor,null,s.get("storeKey"),null,YES)
}}}};for(m=0,h=g.length;m<h;++m){n=g[m];b=this.get(n);l=SC.kindOf(b,SC.ManyArray)?b:[b];
l.forEach(i,this)}},storeDidChangeProperties:function(a,b){if(a){this.notifyPropertyChange("status")
}else{if(b){this.beginPropertyChanges();b.forEach(function(e){this.notifyPropertyChange(e)
},this);this.notifyPropertyChange("status");this.endPropertyChanges()}else{this.allPropertiesDidChange()
}var d=this.relationships,c=d?d.length:0;while(--c>=0){d[c].recordPropertyDidChange(b)
}}},normalize:function(e){var j=this.primaryKey,c=this.get("id"),k=this.get("store"),m=this.get("storeKey"),l,h,d,p,g,o,b,a,i,n;
var f=k.readEditableDataHash(m)||{};f[j]=c;p=k.readDataHash(m);for(l in this){h=this[l];
if(h){d=h.typeClass;if(d){n=h.get("key")||l;b=SC.typeOf(d.call(h))===SC.T_CLASS;a=h.isChildRecordTransform;
if(!b&&!a){g=this.get(l);if(g!==undefined||(g===null&&e)){f[n]=g}}else{if(a){g=this.get(l);
if(g&&g.normalize){g.normalize()}}else{if(b){g=p[l];if(g!==undefined){f[n]=g}else{i=h.get("defaultValue");
if(SC.typeOf(i)===SC.T_FUNCTION){f[n]=i(this,l,i)}else{f[n]=i}}}}}}}}return this},unknownProperty:function(b,d){if(d!==undefined){var c=this.get("storeKey"),e=SC.Store.recordTypeFor(c);
if(e.ignoreUnknownProperties===YES){this[b]=d;return d}var a=this.get("primaryKey");
this.writeAttribute(b,d);if(b===a){SC.Store.replaceIdFor(c,d)}}return this.readAttribute(b)
},commitRecord:function(b){var a=this.get("store");a.commitRecord(undefined,undefined,this.get("storeKey"),b);
return this},isError:function(){return this.get("status")&SC.Record.ERROR}.property("status").cacheable(),errorValue:function(){return this.get("isError")?SC.val(this.get("errorObject")):null
}.property("isError").cacheable(),errorObject:function(){if(this.get("isError")){var a=this.get("store");
return a.readError(this.get("storeKey"))||SC.Record.GENERIC_ERROR}else{return null
}}.property("isError").cacheable(),toString:function(){var a=this.get("store").readDataHash(this.get("storeKey"));
return"%@(%@) %@".fmt(this.constructor.toString(),SC.inspect(a),this.statusString())
},statusString:function(){var b=[],a=this.get("status");for(var c in SC.Record){if(c.match(/[A-Z_]$/)&&SC.Record[c]===a){b.push(c)
}}return b.join(" ")},registerChildRecord:function(f,e){var c=f.primaryKey||"childRecordKey";
var d=e[c];var b=null;var a=this.get("childRecords");if(d&&a){b=a[d]}if(SC.none(b)){b=this.createChildRecord(f,e)
}return b},createChildRecord:function(g,h){SC.RunLoop.begin();var d=SC.Record._generateChildKey();
h=h||{};var c=g.primaryKey||"childRecordKey";var f=h[c];h[c]=d;var b=this.get("store");
if(SC.none(b)){throw"Error: during the creation of a child record: NO STORE ON PARENT!"
}var e=b.createRecord(g,h);e._parentRecord=this;if(this.generateIdForChild){this.generateIdForChild(e)
}var a=this.get("childRecords");if(SC.none(a)){a=SC.Object.create();this.set("childRecords",a)
}a[d]=e;SC.RunLoop.end();return e},generateIdForChild:function(a){}});SC.Record.mixin({ignoreUnknownProperties:NO,CLEAN:1,DIRTY:2,EMPTY:256,ERROR:4096,READY:512,READY_CLEAN:513,READY_DIRTY:514,READY_NEW:515,DESTROYED:1024,DESTROYED_CLEAN:1025,DESTROYED_DIRTY:1026,BUSY:2048,BUSY_LOADING:2052,BUSY_CREATING:2056,BUSY_COMMITTING:2064,BUSY_REFRESH:2080,BUSY_REFRESH_CLEAN:2081,BUSY_REFRESH_DIRTY:2082,BUSY_DESTROYING:2112,BAD_STATE_ERROR:SC.$error("Internal Inconsistency"),RECORD_EXISTS_ERROR:SC.$error("Record Exists"),NOT_FOUND_ERROR:SC.$error("Not found "),BUSY_ERROR:SC.$error("Busy"),GENERIC_ERROR:SC.$error("Generic Error"),_nextChildKey:0,attr:function(a,b){return SC.RecordAttribute.attr(a,b)
},fetch:function(b,a){return SC.FetchedAttribute.attr(b,a)},toMany:function(d,b){b=b||{};
var c=b.nested;var a;if(c){a=SC.ChildrenAttribute.attr(d,b)}else{a=SC.ManyAttribute.attr(d,b)
}return a},toOne:function(d,b){b=b||{};var c=b.nested;var a;if(c){a=SC.ChildAttribute.attr(d,b)
}else{a=SC.SingleAttribute.attr(d,b)}return a},storeKeysById:function(){var b=SC.keyFor("storeKey",SC.guidFor(this)),a=this[b];
if(!a){a=this[b]={}}return a},storeKeyFor:function(c){var b=this.storeKeysById(),a=b[c];
if(!a){a=SC.Store.generateStoreKey();SC.Store.idsByStoreKey[a]=c;SC.Store.recordTypesByStoreKey[a]=this;
b[c]=a}return a},storeKeyExists:function(c){var b=this.storeKeysById(),a=b[c];return a
},find:function(a,b){return a.find(this,b)},extend:function(){var a=SC.Object.extend.apply(this,arguments);
SC.Query._scq_didDefineRecordType(a);return a},_generateChildKey:function(){var a=SC.Record._nextChildKey+1;
SC.Record._nextChildKey=a;return a}});sc_require("data_sources/data_source");sc_require("models/record");
SC.FixturesDataSource=SC.DataSource.extend({simulateRemoteResponse:NO,latency:50,cancel:function(a,b){return NO
},fetch:function(a,b){if(b.get("location")!==SC.Query.LOCAL){throw SC.$error("SC.Fixture data source can only fetch local queries")
}if(!b.get("recordType")&&!b.get("recordTypes")){throw SC.$error("SC.Fixture data source can only fetch queries with one or more record types")
}if(this.get("simulateRemoteResponse")){this.invokeLater(this._fetch,this.get("latency"),a,b)
}else{this._fetch(a,b)}},_fetch:function(a,c){var d=c.get("recordType"),b=c.get("recordTypes")||[d];
b.forEach(function(e){if(SC.typeOf(e)===SC.T_STRING){e=SC.objectForPropertyPath(e)
}if(e){this.loadFixturesFor(a,e)}},this);a.dataSourceDidFetchQuery(c)},retrieveRecords:function(a,c){var d=this.get("latency"),b=this.hasFixturesFor(c);
if(!b){return b}if(this.get("simulateRemoteResponse")){this.invokeLater(this._retrieveRecords,d,a,c)
}else{this._retrieveRecords(a,c)}return b},_retrieveRecords:function(a,b){b.forEach(function(d){var c=[],g=SC.Store.recordTypeFor(d),f=a.idFor(d),e=this.fixtureForStoreKey(a,d);
c.push(d);a.dataSourceDidComplete(d,e,f)},this)},updateRecords:function(a,c,e){var d=this.get("latency"),b=this.hasFixturesFor(c);
if(!b){return b}if(this.get("simulateRemoteResponse")){this.invokeLater(this._updateRecords,d,a,c)
}else{this._updateRecords(a,c)}return b},_updateRecords:function(a,b){b.forEach(function(c){var d=a.readDataHash(c);
this.setFixtureForStoreKey(a,c,d);a.dataSourceDidComplete(c)},this)},createRecords:function(a,b,d){var c=this.get("latency");
if(this.get("simulateRemoteResponse")){this.invokeLater(this._createRecords,c,a,b)
}else{this._createRecords(a,b)}return YES},_createRecords:function(a,b){b.forEach(function(e){var g=a.idFor(e),f=a.recordTypeFor(e),d=a.readDataHash(e),c=this.fixturesFor(f);
if(!g){g=this.generateIdFor(f,d,a,e)}this._invalidateCachesFor(f,e,g);c[g]=d;a.dataSourceDidComplete(e,null,g)
},this)},destroyRecords:function(a,c,e){var d=this.get("latency"),b=this.hasFixturesFor(c);
if(!b){return b}if(this.get("simulateRemoteResponse")){this.invokeLater(this._destroyRecords,d,a,c)
}else{this._destroyRecords(a,c)}return b},_destroyRecords:function(a,b){b.forEach(function(d){var f=a.idFor(d),e=a.recordTypeFor(d),c=this.fixturesFor(e);
this._invalidateCachesFor(e,d,f);if(f){delete c[f]}a.dataSourceDidDestroy(d)},this)
},loadFixturesFor:function(a,g,c){var b=[],e,d,f;e=this.fixturesFor(g);for(d in e){f=g.storeKeyFor(d);
if(a.peekStatus(f)===SC.Record.EMPTY){b.push(e[d])}if(c){c.push(f)}}if(b&&b.length>0){a.loadRecords(g,b)
}return this},generateIdFor:function(d,b,a,c){return"@id%@".fmt(SC.Store.generateStoreKey())
},fixtureForStoreKey:function(a,c){var e=a.idFor(c),d=a.recordTypeFor(c),b=this.fixturesFor(d);
return b?b[e]:null},setFixtureForStoreKey:function(a,d,c){var f=a.idFor(d),e=a.recordTypeFor(d),b=this.fixturesFor(e);
this._invalidateCachesFor(e,d,f);b[f]=c;return this},fixturesFor:function(h){if(!this._fixtures){this._fixtures={}
}var f=this._fixtures[SC.guidFor(h)];if(f){return f}var e=h?h.FIXTURES:null,b=e?e.length:0,c=h?h.prototype.primaryKey:"guid",a,d,g;
this._fixtures[SC.guidFor(h)]=f={};for(a=0;a<b;a++){d=e[a];g=d[c];if(!g){g=this.generateIdFor(h,d)
}f[g]=d}return f},fixturesLoadedFor:function(c){if(!this._fixtures){return NO}var a=[],b=this._fixtures[SC.guidFor(c)];
return b?YES:NO},hasFixturesFor:function(b){var a=NO;b.forEach(function(d){if(a!==SC.MIXED_STATE){var e=SC.Store.recordTypeFor(d),c=e?e.FIXTURES:null;
if(c&&c.length&&c.length>0){if(a===NO){a=YES}}else{if(a===YES){a=SC.MIXED_STATE}}}},this);
return a},_invalidateCachesFor:function(d,b,c){var a=this._storeKeyCache;if(a){delete a[SC.guidFor(d)]
}return this}});SC.Record.fixtures=SC.FixturesDataSource.create();sc_require("core");
sc_require("models/record");SC.Query=SC.Object.extend(SC.Copyable,SC.Freezable,{isQuery:YES,conditions:null,orderBy:null,recordType:null,recordTypes:null,expandedRecordTypes:function(){var b=SC.CoreSet.create(),a,c;
if(a=this.get("recordType")){this._scq_expandRecordType(a,b)}else{if(a=this.get("recordTypes")){a.forEach(function(d){this._scq_expandRecordType(d,b)
},this)}else{this._scq_expandRecordType(SC.Record,b)}}c=SC.Query._scq_queriesWithExpandedRecordTypes;
if(!c){c=SC.Query._scq_queriesWithExpandedRecordTypes=SC.CoreSet.create()}c.add(this);
return b.freeze()}.property("recordType","recordTypes").cacheable(),_scq_expandRecordType:function(b,a){if(a.contains(b)){return
}a.add(b);if(SC.typeOf(b)===SC.T_STRING){b=SC.objectForPropertyPath(b)}b.subclasses.forEach(function(c){this._scq_expandRecordType(c,a)
},this)},parameters:null,location:"local",scope:null,isRemote:function(){return this.get("location")===SC.Query.REMOTE
}.property("location").cacheable(),isLocal:function(){return this.get("location")===SC.Query.LOCAL
}.property("location").cacheable(),isEditable:NO,contains:function(a,d){var e,b=YES;
if(e=this.get("recordTypes")){b=e.find(function(f){return SC.kindOf(a,f)})}else{if(e=this.get("recordType")){b=SC.kindOf(a,e)
}}if(!b){return NO}var c=this.get("scope");if(c&&!c.contains(a)){return NO}if(!this._isReady){this.parse()
}if(!this._isReady){return NO}if(d===undefined){d=this.parameters||this}return this._tokenTree.evaluate(a,d)
},containsRecordTypes:function(a){var b=this.get("recordType");if(b){return !!a.find(function(c){return SC.kindOf(c,b)
})}else{if(b=this.get("recordTypes")){return !!b.find(function(c){return !!a.find(function(d){return SC.kindOf(d,c)
})})}else{return YES}}},compare:function(f,d){var c=0,e,b,a,g;if(f===d){return 0}if(!this._isReady){this.parse()
}if(!this._isReady){return SC.compare(f.get("id"),d.get("id"))}b=this._order;if(SC.typeOf(b)===SC.T_FUNCTION){c=b.call(null,f,d)
}else{a=b?b.length:0;for(g=0;c===0&&(g<a);g++){e=b[g].propertyName;if(SC.Query.comparisons[e]){c=SC.Query.comparisons[e](f.get(e),d.get(e))
}else{c=SC.compare(f.get(e),d.get(e))}if((c!==0)&&b[g].descending){c=(-1)*c}}}if(c!==0){return c
}else{return SC.compare(f.get("id"),d.get("id"))}},_isReady:NO,parse:function(){var c=this.get("conditions"),d=this.get("queryLanguage"),b,a;
b=this._tokenList=this.tokenizeString(c,d);a=this._tokenTree=this.buildTokenTree(b,d);
this._order=this.buildOrder(this.get("orderBy"));this._isReady=!!a&&!a.error;if(a&&a.error){throw a.error
}return this._isReady},queryWithScope:function(c){var b=SC.keyFor("__query__",SC.guidFor(this)),a=c[b];
if(!a){c[b]=a=this.copy();a.set("scope",c);a.freeze()}return a},copyKeys:"conditions orderBy recordType recordTypes parameters location scope".w(),concatenatedProperties:"copyKeys".w(),copy:function(){var d={},c=this.get("copyKeys"),f=c?c.length:0,b,e,a;
while(--f>=0){b=c[f];e=this.get(b);if(e!==undefined){d[b]=e}}a=this.constructor.create(d);
d=null;return a},queryLanguage:{UNKNOWN:{firstCharacter:/[^\s'"\w\d\(\)\{\}]/,notAllowed:/[\s'"\w\d\(\)\{\}]/},PROPERTY:{firstCharacter:/[a-zA-Z_]/,notAllowed:/[^a-zA-Z_0-9]/,evalType:"PRIMITIVE",evaluate:function(b,a){return b.get(this.tokenValue)
}},NUMBER:{firstCharacter:/[\d\-]/,notAllowed:/[^\d\-\.]/,format:/^-?\d+$|^-?\d+\.\d+$/,evalType:"PRIMITIVE",evaluate:function(b,a){return parseFloat(this.tokenValue)
}},STRING:{firstCharacter:/['"]/,delimeted:true,evalType:"PRIMITIVE",evaluate:function(b,a){return this.tokenValue
}},PARAMETER:{firstCharacter:/\{/,lastCharacter:"}",delimeted:true,evalType:"PRIMITIVE",evaluate:function(b,a){return a[this.tokenValue]
}},"%@":{rememberCount:true,reservedWord:true,evalType:"PRIMITIVE",evaluate:function(b,a){return a[this.tokenValue]
}},OPEN_PAREN:{firstCharacter:/\(/,singleCharacter:true},CLOSE_PAREN:{firstCharacter:/\)/,singleCharacter:true},AND:{reservedWord:true,leftType:"BOOLEAN",rightType:"BOOLEAN",evalType:"BOOLEAN",evaluate:function(c,a){var d=this.leftSide.evaluate(c,a);
var b=this.rightSide.evaluate(c,a);return d&&b}},OR:{reservedWord:true,leftType:"BOOLEAN",rightType:"BOOLEAN",evalType:"BOOLEAN",evaluate:function(c,a){var d=this.leftSide.evaluate(c,a);
var b=this.rightSide.evaluate(c,a);return d||b}},NOT:{reservedWord:true,rightType:"BOOLEAN",evalType:"BOOLEAN",evaluate:function(c,a){var b=this.rightSide.evaluate(c,a);
return !b}},"=":{reservedWord:true,leftType:"PRIMITIVE",rightType:"PRIMITIVE",evalType:"BOOLEAN",evaluate:function(c,a){var d=this.leftSide.evaluate(c,a);
var b=this.rightSide.evaluate(c,a);return SC.isEqual(d,b)}},"!=":{reservedWord:true,leftType:"PRIMITIVE",rightType:"PRIMITIVE",evalType:"BOOLEAN",evaluate:function(c,a){var d=this.leftSide.evaluate(c,a);
var b=this.rightSide.evaluate(c,a);return !SC.isEqual(d,b)}},"<":{reservedWord:true,leftType:"PRIMITIVE",rightType:"PRIMITIVE",evalType:"BOOLEAN",evaluate:function(c,a){var d=this.leftSide.evaluate(c,a);
var b=this.rightSide.evaluate(c,a);return SC.compare(d,b)==-1}},"<=":{reservedWord:true,leftType:"PRIMITIVE",rightType:"PRIMITIVE",evalType:"BOOLEAN",evaluate:function(c,a){var d=this.leftSide.evaluate(c,a);
var b=this.rightSide.evaluate(c,a);return SC.compare(d,b)!=1}},">":{reservedWord:true,leftType:"PRIMITIVE",rightType:"PRIMITIVE",evalType:"BOOLEAN",evaluate:function(c,a){var d=this.leftSide.evaluate(c,a);
var b=this.rightSide.evaluate(c,a);return SC.compare(d,b)==1}},">=":{reservedWord:true,leftType:"PRIMITIVE",rightType:"PRIMITIVE",evalType:"BOOLEAN",evaluate:function(c,a){var d=this.leftSide.evaluate(c,a);
var b=this.rightSide.evaluate(c,a);return SC.compare(d,b)!=-1}},BEGINS_WITH:{reservedWord:true,leftType:"PRIMITIVE",rightType:"PRIMITIVE",evalType:"BOOLEAN",evaluate:function(c,a){var b=this.leftSide.evaluate(c,a);
var d=this.rightSide.evaluate(c,a);return(b&&b.indexOf(d)===0)}},ENDS_WITH:{reservedWord:true,leftType:"PRIMITIVE",rightType:"PRIMITIVE",evalType:"BOOLEAN",evaluate:function(d,b){var c=this.leftSide.evaluate(d,b);
var a=this.rightSide.evaluate(d,b);return(c&&c.indexOf(a)===(c.length-a.length))}},CONTAINS:{reservedWord:true,leftType:"PRIMITIVE",rightType:"PRIMITIVE",evalType:"BOOLEAN",evaluate:function(d,a){var c=this.leftSide.evaluate(d,a)||[];
var f=this.rightSide.evaluate(d,a);switch(SC.typeOf(c)){case SC.T_STRING:return(c.indexOf(f)!==-1);
case SC.T_ARRAY:var e=false;var b=0;while(e===false&&b<c.length){if(f==c[b]){e=true
}b++}return e;default:break}}},ANY:{reservedWord:true,leftType:"PRIMITIVE",rightType:"PRIMITIVE",evalType:"BOOLEAN",evaluate:function(d,a){var f=this.leftSide.evaluate(d,a);
var b=this.rightSide.evaluate(d,a);var e=false;var c=0;while(e===false&&c<b.length){if(f==b[c]){e=true
}c++}return e}},MATCHES:{reservedWord:true,leftType:"PRIMITIVE",rightType:"PRIMITIVE",evalType:"BOOLEAN",evaluate:function(c,a){var d=this.leftSide.evaluate(c,a);
var b=this.rightSide.evaluate(c,a);return b.test(d)}},TYPE_IS:{reservedWord:true,rightType:"PRIMITIVE",evalType:"BOOLEAN",evaluate:function(d,a){var c=SC.Store.recordTypeFor(d.storeKey);
var b=this.rightSide.evaluate(d,a);var e=SC.objectForPropertyPath(b);return c==e}},"null":{reservedWord:true,evalType:"PRIMITIVE",evaluate:function(b,a){return null
}},"undefined":{reservedWord:true,evalType:"PRIMITIVE",evaluate:function(b,a){return undefined
}},"false":{reservedWord:true,evalType:"PRIMITIVE",evaluate:function(b,a){return false
}},"true":{reservedWord:true,evalType:"PRIMITIVE",evaluate:function(b,a){return true
}},YES:{reservedWord:true,evalType:"PRIMITIVE",evaluate:function(b,a){return true
}},NO:{reservedWord:true,evalType:"PRIMITIVE",evaluate:function(b,a){return false
}}},tokenizeString:function(v,q){var k=[],s=null,h=null,f=null,u=null,a=null,j=null,d=null,g=null,r=false,b=false,m=false,n=false,o={};
function e(t,c){h=q[t];if(h.format&&!h.format.test(c)){t="UNKNOWN"}if(h.delimeted){n=true
}if(!h.delimeted){for(var i in q){if(q[i].reservedWord&&i==c){t=i}}}h=q[t];if(h&&h.rememberCount){if(!o[t]){o[t]=0
}c=o[t];o[t]+=1}k.push({tokenType:t,tokenValue:c});a=null;j=null;d=null}if(!v){return[]
}var l=v.length;for(var p=0;p<l;p++){r=(p===l-1);s=v.charAt(p);n=false;if(a){h=q[a];
b=h.delimeted?s===g:h.notAllowed.test(s);if(!b){d+=s}if(b||r){e(a,d)}if(r&&!b){n=true
}}if(!a&&!n){for(f in q){h=q[f];if(h.firstCharacter&&h.firstCharacter.test(s)){a=f
}}if(a){h=q[a];d=s;if(h.delimeted){d="";if(h.lastCharacter){g=h.lastCharacter}else{g=s
}}if(h.singleCharacter||r){e(a,d)}}}}return k},buildTokenTree:function(k,a){var o=k.slice();
var q=0;var s=[];var c=false;var p=[];if(!k||k.length===0){return{evaluate:function(){return true
}}}function r(i){var v=i;if(v<0){return false}var l=a[o[v].tokenType];if(!l){p.push("logic for token '"+o[v].tokenType+"' is not defined");
return false}o[v].evaluate=l.evaluate;return l}function b(v,i){var w=i;var l=r(w);
if(!l){return false}if(v=="left"){return l.leftType}if(v=="right"){return l.rightType
}}function n(i){var v=i;var l=r(v);if(!l){return false}else{return l.evalType}}function f(i){o.splice(i,1);
if(i<=q){q--}}function t(i){var l=i||q;if(l>0){return true}else{return false}}function j(i){var l=i;
if(l<0){return true}return(b("left",l)&&!o[l].leftSide)||(b("right",l)&&!o[l].rightSide)
}function h(l,v){var i=(v<l)?"left":"right";if(l<0||v<0){return false}if(!b(i,l)){return false
}if(!n(v)){return false}if(b(i,l)==n(v)){return true}else{return false}}function m(i){var l=i;
if(!j(l)){return false}if(!t(l)){return false}if(h(l,l-1)){return true}else{return false
}}function d(i){var l=i;if(j(l)){return false}if(!t(l)){return false}if(!j(l-1)){return false
}if(h(l-1,l)){return true}else{return false}}function g(i){var l=i;if(l<1){return false
}o[l].leftSide=o[l-1];f(l-1)}function u(i){var l=i;if(l<1){return false}o[l-1].rightSide=o[l];
f(l)}function e(i){f(i);f(s.pop())}for(q=0;q<o.length;q++){c=false;if(o[q].tokenType=="UNKNOWN"){p.push("found unknown token: "+o[q].tokenValue)
}if(o[q].tokenType=="OPEN_PAREN"){s.push(q)}if(o[q].tokenType=="CLOSE_PAREN"){e(q)
}if(m(q)){g(q)}if(d(q)){u(q);c=true}if(c){q--}}if(o.length==1){o=o[0]}else{p.push("string did not resolve to a single tree")
}if(p.length>0){return{error:p.join(",\n"),tree:o}}else{return o}},buildOrder:function(a){if(!a){return[]
}else{if(SC.typeOf(a)===SC.T_FUNCTION){return a}else{var d=a.split(",");for(var b=0;
b<d.length;b++){var c=d[b];c=c.replace(/^\s+|\s+$/,"");c=c.replace(/\s+/,",");c=c.split(",");
d[b]={propertyName:c[0]};if(c[1]&&c[1]=="DESC"){d[b].descending=true}}return d}}}});
SC.Query.mixin({LOCAL:"local",REMOTE:"remote",storeKeyFor:function(a){return a?a.get("storeKey"):null
},containsRecords:function(g,e,d){var f=[];for(var b=0,a=e.get("length");b<a;b++){var c=e.objectAt(b);
if(c&&g.contains(c)){f.push(c.get("storeKey"))}}f=SC.Query.orderStoreKeys(f,g,d);
return f},orderStoreKeys:function(e,f,b){if(e){var a=SC.Query,d=a._TMP_STORES,g=a._TMP_QUERIES;
if(!d){d=a._TMP_STORES=[]}if(!g){g=a._TMP_QUERIES=[]}d.push(b);g.push(f);var c=e.sort(SC.Query.compareStoreKeys);
a._TMP_STORES.pop();a._TMP_QUERIES.pop()}return e},compareStoreKeys:function(h,f){var n=SC.Query,l=n._TMP_STORES,b=n._TMP_QUERIES,o=l[l.length-1],m=b[b.length-1],c=m.compare,d=o.materializeRecord(h),a=o.materializeRecord(f);
if(c!==n.prototype.compare){return c.call(m,d,a)}else{var p=0,k,e,j,g;if(d===a){return 0
}if(!m._isReady){m.parse()}if(!m._isReady){return SC.compare(d.get("id"),a.get("id"))
}e=m._order;if(SC.typeOf(e)===SC.T_FUNCTION){p=e.call(null,d,a)}else{j=e?e.length:0;
for(g=0;p===0&&(g<j);g++){k=e[g].propertyName;if(SC.Query.comparisons[k]){p=SC.Query.comparisons[k](d.get(k),a.get(k))
}else{p=SC.compare(d.get(k),a.get(k))}if((p!==0)&&e[g].descending){p=(-1)*p}}}if(p!==0){return p
}else{return SC.compare(d.get("id"),a.get("id"))}}},build:function(h,c,g,d){var a=null,f,b,i,e;
if(c&&c.isQuery){if(c.get("location")===h){return c}else{return c.copy().set("location",h).freeze()
}}if(typeof c===SC.T_STRING){f=SC.objectForPropertyPath(c);if(!f){throw"%@ did not resolve to a class".fmt(c)
}c=f}else{if(c&&c.isEnumerable){f=[];c.forEach(function(j){if(typeof j===SC.T_STRING){j=SC.objectForPropertyPath(j)
}if(!j){throw"cannot resolve record types: %@".fmt(c)}f.push(j)},this);c=f}else{if(!c){c=SC.Record
}}}if(d===undefined){d=null}if(g===undefined){g=null}if(!d&&(typeof g!==SC.T_STRING)){a=g;
g=null}if(!d&&!a){e=SC.Query._scq_recordTypeCache;if(!e){e=SC.Query._scq_recordTypeCache={}
}b=e[h];if(!b){b=e[h]={}}if(c.isEnumerable){i=c.map(function(j){return SC.guidFor(j)
});i=i.sort().join(":")}else{i=SC.guidFor(c)}if(g){i=[i,g].join("::")}f=b[i];if(!f){if(c.isEnumerable){a={recordTypes:c.copy()}
}else{a={recordType:c}}a.location=h;a.conditions=g;f=b[i]=SC.Query.create(a).freeze()
}}else{if(!a){a={}}if(!a.location){a.location=h}if(c&&c.isEnumerable){a.recordsTypes=c
}else{a.recordType=c}if(g){a.conditions=g}if(d){a.parameters=d}f=SC.Query.create(a).freeze()
}return f},local:function(c,a,b){return this.build(SC.Query.LOCAL,c,a,b)},remote:function(c,a,b){return this.build(SC.Query.REMOTE,c,a,b)
},_scq_didDefineRecordType:function(){var a=SC.Query._scq_queriesWithExpandedRecordTypes;
if(a){a.forEach(function(b){b.notifyPropertyChange("expandedRecordTypes")},this);
a.clear()}}});SC.Query.comparisons={};SC.Query.registerComparison=function(a,b){SC.Query.comparisons[a]=b
};SC.Query.registerQueryExtension=function(b,a){SC.Query.prototype.queryLanguage[b]=a
};SC.Q=SC.Query.from;sc_require("core");sc_require("models/record");sc_require("system/query");
SC.ChildRecord=SC.Record.extend({isChildRecord:YES,type:null,primaryKey:"childRecordKey",_parentRecord:null,status:function(){var a=SC.Record.EMPTY;
if(this._parentRecord){a=this._parentRecord.get("status");this.store.writeStatus(this.storeKey,a);
this.store.dataHashDidChange(this.storeKey)}else{a=this.store.readStatus(this.storeKey)
}return a}.property("storeKey").cacheable(),recordDidChange:function(){if(this._parentRecord&&this._parentRecord.recordDidChange){this._parentRecord.recordDidChange()
}else{arguments.callee.base.apply(this,arguments)}},createChildRecord:function(d,c){var a,b=this._parentRecord;
if(b){a=b.createChildRecord(d,c)}else{a=arguments.callee.base.apply(this,arguments)
}return a}});sc_require("models/record");sc_require("models/child_record");SC.RecordAttribute=SC.Object.extend({defaultValue:null,type:String,key:null,isRequired:NO,isEditable:YES,useIsoDate:YES,aggregate:NO,typeClass:function(){var a=this.get("type");
if(SC.typeOf(a)===SC.T_STRING){a=SC.objectForPropertyPath(a)}return a}.property("type").cacheable(),transform:function(){var a=this.get("typeClass")||String,c=SC.RecordAttribute.transforms,b;
while(a&&!(b=c[SC.guidFor(a)])){if(a.superclass.hasOwnProperty("create")){a=a.superclass
}else{a=SC.T_FUNCTION}}return b}.property("typeClass").cacheable(),toType:function(a,c,e){var b=this.get("transform"),d=this.get("typeClass");
if(b&&b.to){e=b.to(e,this,d,a,c)}return e},fromType:function(a,c,e){var b=this.get("transform"),d=this.get("typeClass");
if(b&&b.from){e=b.from(e,this,d,a,c)}return e},call:function(a,b,c){var d=this.get("key")||b,e;
if((c!==undefined)&&this.get("isEditable")){e=this.fromType(a,b,c);a.writeAttribute(d,e)
}e=c=a.readAttribute(d);if(SC.none(c)&&(c=this.get("defaultValue"))&&a.get("status")&SC.Record.READY_NEW){if(typeof c===SC.T_FUNCTION){e=this.defaultValue(a,b,this);
if((e!==c)&&a.get("store").readDataHash(a.get("storeKey"))){c=e;a.writeAttribute(d,c,true)
}}else{if(SC.kindOf(c,SC.DateTime)){a.writeAttribute(d,c.toISO8601(),true)}else{a.writeAttribute(d,c,true)
}}}else{c=this.toType(a,b,c)}return c},isProperty:YES,isCacheable:YES,dependentKeys:[],init:function(){arguments.callee.base.apply(this,arguments);
this.cacheKey="__cache__"+SC.guidFor(this);this.lastSetValueKey="__lastValue__"+SC.guidFor(this)
}});SC.RecordAttribute.attr=function(a,b){if(!b){b={}}if(!b.type){b.type=a||String
}return this.create(b)};SC.RecordAttribute.transforms={};SC.RecordAttribute.registerTransform=function(a,b){SC.RecordAttribute.transforms[SC.guidFor(a)]=b
};SC.RecordAttribute.registerTransform(Boolean,{to:function(a){return SC.none(a)?null:!!a
}});SC.RecordAttribute.registerTransform(Number,{to:function(a){return SC.none(a)?null:Number(a)
}});SC.RecordAttribute.registerTransform(String,{to:function(a){if(!(typeof a===SC.T_STRING)&&!SC.none(a)&&a.toString){a=a.toString()
}return a}});SC.RecordAttribute.registerTransform(Array,{to:function(a){if(!SC.isArray(a)&&!SC.none(a)){a=[]
}return a}});SC.RecordAttribute.registerTransform(Object,{to:function(a){if(!(typeof a==="object")&&!SC.none(a)){a={}
}return a}});SC.RecordAttribute.registerTransform(SC.Record,{to:function(e,a,d,c){var b=c.get("store");
if(SC.none(e)||(e==="")){return null}else{return b.find(d,e)}},from:function(a){return a?a.get("id"):null
}});SC.RecordAttribute.registerTransform(SC.T_FUNCTION,{to:function(e,a,d,c){d=d.apply(c);
var b=c.get("store");return b.find(d,e)},from:function(a){return a.get("id")}});SC.RecordAttribute.registerTransform(Date,{to:function(i,a){if(i===null){return null
}var c;i=i.toString()||"";if(a.get("useIsoDate")){var e="([0-9]{4})(-([0-9]{2})(-([0-9]{2})(T([0-9]{2}):([0-9]{2})(:([0-9]{2})(\\.([0-9]+))?)?(Z|(([-+])([0-9]{2}):([0-9]{2})))?)?)?)?",h=i.match(new RegExp(e)),g=0,b=new Date(h[1],0,1),f;
if(h[3]){b.setMonth(h[3]-1)}if(h[5]){b.setDate(h[5])}if(h[7]){b.setHours(h[7])}if(h[8]){b.setMinutes(h[8])
}if(h[10]){b.setSeconds(h[10])}if(h[12]){b.setMilliseconds(Number("0."+h[12])*1000)
}if(h[14]){g=(Number(h[16])*60)+Number(h[17]);g*=((h[15]=="-")?1:-1)}g-=b.getTimezoneOffset();
f=(Number(b)+(g*60*1000));c=new Date();c.setTime(Number(f))}else{c=new Date(Date.parse(i))
}return c},_dates:{},_zeropad:function(a){return((a<0)?"-":"")+((a<10)?"0":"")+Math.abs(a)
},from:function(b){var a=this._dates[b.getTime()];if(a){return a}var d=this._zeropad,c=0-b.getTimezoneOffset()/60;
c=(c===0)?"Z":"%@:00".fmt(d(c));this._dates[b.getTime()]=a="%@-%@-%@T%@:%@:%@%@".fmt(d(b.getFullYear()),d(b.getMonth()+1),d(b.getDate()),d(b.getHours()),d(b.getMinutes()),d(b.getSeconds()),c);
return a}});if(SC.DateTime&&!SC.RecordAttribute.transforms[SC.guidFor(SC.DateTime)]){SC.RecordAttribute.registerTransform(SC.DateTime,{to:function(c,a){if(SC.none(c)||SC.instanceOf(c,SC.DateTime)){return c
}var b=a.get("format");return SC.DateTime.parse(c,b?b:SC.DateTime.recordFormat)},from:function(b,a){if(SC.none(b)){return b
}var c=a.get("format");return b.toFormattedString(c?c:SC.DateTime.recordFormat)}})
}sc_require("models/record");sc_require("models/record_attribute");SC.ChildAttribute=SC.RecordAttribute.extend({isChildRecordTransform:YES,toType:function(d,c,e){var b=null,f=SC.keyFor("__kid__",SC.guidFor(this)),g=this.get("typeClass");
if(d[f]){return d[f]}if(!d){throw"SC.Child: Error during transform: Unable to retrieve parent record."
}if(e){var a=d.get("childRecordNamespace");if(e.type&&!SC.none(a)){g=a[e.type]}if(!g||SC.typeOf(g)!==SC.T_CLASS){throw"SC.Child: Error during transform: Invalid record type."
}b=d[f]=d.registerChildRecord(g,e)}return b},fromType:function(a,b,c){return c},call:function(a,b,c){var d=this.get("key")||b,f=SC.keyFor("__kid__",SC.guidFor(this)),e;
if(c!==undefined){this.orphan(a);e=this.fromType(a,b,c);a[f]=null;a.writeAttribute(d,e);
c=this.toType(a,b,c)}else{c=a.readAttribute(d);if(SC.none(c)&&(c=this.get("defaultValue"))){if(typeof c===SC.T_FUNCTION){c=this.defaultValue(a,b,this);
if(a.attributes()){a.writeAttribute(d,c,true)}}}else{c=this.toType(a,b,c)}}return c
},orphan:function(e){var h=SC.keyFor("__kid__",SC.guidFor(this)),b,f,c,d,g,a;a=e?e[h]:null;
if(a){c=a.get("readOnlyAttributes");for(d in c){g=a[d];if(g&&g.isChildRecordTransform){g.orphan(e)
}}b=a.get("store");if(b){f=a.storeKey}if(f){b.unloadRecord(undefined,undefined,f)
}}}});sc_require("models/record");sc_require("models/record_attribute");sc_require("models/child_attribute");
SC.ChildrenAttribute=SC.ChildAttribute.extend({toType:function(b,d,e){var g=this.get("key")||d,f=SC.keyFor("__kidsArray__",SC.guidFor(this)),c=b[f],h=this.get("typeClass"),a;
if(!c){c=SC.ChildArray.create({record:b,propertyName:g,defaultRecordType:h});b[f]=this._cachedRef=c;
a=b.get("relationships");if(!a){b.set("relationships",a=[])}a.push(c)}return c},orphan:function(a){var e=this._cachedRef,f,i,h,g,c,b,d;
if(e){e.forEach(function(j){h=j.get("readOnlyAttributes");for(g in h){b=j[g];if(b&&b.isChildRecordTransform){b.orphan(a)
}}f=j.get("store");if(f){i=j.storeKey}if(i){f.unloadRecord(undefined,undefined,i)
}},this)}}});sc_require("models/record");sc_require("models/record_attribute");SC.FetchedAttribute=SC.RecordAttribute.extend({paramValueKey:"link",paramOwnerKey:"owner",paramRelKey:"rel",queryKey:null,isEditable:NO,toType:function(d,i,g){var h=d.get("store");
if(!h){return null}var b=this.get("paramValueKey"),a=this.get("paramOwnerKey"),f=this.get("paramRelKey"),e=this.get("queryKey")||this.get("typeClass"),c={};
if(b){c[b]=g}if(a){c[a]=d}if(f){c[f]=this.get("key")||i}return h.findAll(e,c)},fromType:function(a,b,c){return c
}});sc_require("models/record");sc_require("models/record_attribute");SC.ManyAttribute=SC.RecordAttribute.extend({inverse:null,isMaster:YES,orderBy:null,toType:function(b,d,f){var e=this.get("typeClass"),h=this.get("key")||d,g=SC.keyFor("__manyArray__",SC.guidFor(this)),c=b[g],a;
if(!c){c=SC.ManyArray.create({recordType:e,record:b,propertyName:h,manyAttribute:this});
b[g]=c;a=b.get("relationships");if(!a){b.set("relationships",a=[])}a.push(c)}return c
},fromType:function(b,e,f){var c=[];if(!SC.isArray(f)){throw"Expects toMany attribute to be an array"
}var a=f.get("length");for(var d=0;d<a;d++){c[d]=f.objectAt(d).get("id")}return c
},inverseDidRemoveRecord:function(a,b,c,d){var e=a.get(b);if(e){e.removeInverseRecord(c)
}},inverseDidAddRecord:function(a,b,c,d){var e=a.get(b);if(e){e.addInverseRecord(c)
}}});sc_require("models/record");sc_require("models/record_attribute");SC.SingleAttribute=SC.RecordAttribute.extend({inverse:null,isMaster:YES,call:function(c,i,b){var a=this.get("key")||i,h,g,j,f,e,d;
if(b!==undefined){if(b&&!SC.kindOf(b,SC.Record)){throw"%@ is not an instance of SC.Record".fmt(b)
}h=this.get("inverse");if(h){j=this._scsa_call(c,i)}d=this.fromType(c,i,b);c.writeAttribute(a,d,!this.get("isMaster"));
e=b;if(h&&(j!==b)){if(j&&(f=j[h])){f.inverseDidRemoveRecord(j,h,c,i)}if(b&&(f=b[h])){f.inverseDidAddRecord(b,h,c,i)
}}}else{e=this._scsa_call(c,i,b)}return e},_scsa_call:SC.RecordAttribute.prototype.call,inverseDidRemoveRecord:function(c,f,g,h){var b=this.get("inverse"),e=this._scsa_call(c,f),d=this.get("isMaster"),a;
c.writeAttribute(f,null,!d);c.notifyPropertyChange(f);if((e!==g)||(h!==b)){if(e&&(a=e[b])){a.inverseDidRemoveRecord(e,b,c,f)
}}},inverseDidAddRecord:function(a,h,c,g){var e=this.get("inverse"),i=this._scsa_call(a,h),f=this.get("isMaster"),d,b;
b=this.fromType(a,h,c);a.writeAttribute(h,b,!f);a.notifyPropertyChange(h);if((i!==c)||(g!==e)){if(i&&(d=i[e])){d.inverseDidRemoveRecord(i,e,a,h)
}}}});SC.ChildArray=SC.Object.extend(SC.Enumerable,SC.Array,{defaultRecordType:null,record:null,propertyName:null,children:null,store:function(){return this.get("record").get("store")
}.property("record").cacheable(),storeKey:function(){return this.get("record").get("storeKey")
}.property("record").cacheable(),readOnlyChildren:function(){return this.get("record").readAttribute(this.get("propertyName"))
}.property(),editableChildren:function(){var a=this.get("store"),d=this.get("storeKey"),c=this.get("propertyName"),b,e;
b=a.readEditableProperty(d,c);if(!b){e=a.readEditableDataHash(d);b=e[c]=[]}if(b!==this._prevChildren){this.recordPropertyDidChange()
}return b}.property(),length:function(){var a=this.get("readOnlyChildren");return a?a.length:0
}.property("readOnlyChildren"),objectAt:function(b){var e=this._records,d=this.get("readOnlyChildren"),f,c;
var a=d?d.length:0;if(!d){return undefined}if(e&&(c=e[b])){return c}if(!e){this._records=e=[]
}if(b>=a){return undefined}f=d.objectAt(b);if(!f){return undefined}e[b]=c=this._materializeChild(f);
return c},replace:function(k,a,j){var b=this.get("editableChildren"),g=j?(j.get?j.get("length"):j.length):0,f=this.get("record"),d=this.get("propertyName"),h,c;
b.replace(k,a,j);for(var e=k;e<=k+a;e+=1){this.objectAt(e)}f.recordDidChange(d);return this
},normalize:function(){this.forEach(function(b,a){if(b.normalize){b.normalize()}})
},_materializeChild:function(e){var h=this.get("store"),b=this.get("record"),d=this.get("defaultRecordType"),a,f,i,c;
if(!b){return undefined}var g=b.get("childRecordNamespace");if(e.type&&!SC.none(g)){d=g[e.type]
}if(!d||SC.typeOf(d)!==SC.T_CLASS){throw"ChildrenArray: Error during transform: Invalid record type."
}c=d.prototype.primaryKey||"childRecordKey";a=e[c];i=h.storeKeyExists(d,a);if(i){f=h.materializeRecord(i)
}else{f=b.registerChildRecord(d,e)}return f},recordPropertyDidChange:function(d){if(d&&!d.contains(this.get("propertyName"))){return this
}var b=this.get("readOnlyChildren");var c=this._prevChildren,e=this._childrenContentDidChange;
if(b===c){return this}if(c){c.removeObserver("[]",this,e)}this._prevChildren=b;if(b){b.addObserver("[]",this,e)
}var a=(b)?b.propertyRevision:-1;this._childrenContentDidChange(b,"[]",b,a)},_childrenContentDidChange:function(d,b,c,a){this._records=null;
this.enumerableContentDidChange()},init:function(){arguments.callee.base.apply(this,arguments);
this.recordPropertyDidChange()}});SC.ManyArray=SC.Object.extend(SC.Enumerable,SC.Array,{recordType:null,record:null,propertyName:null,manyAttribute:null,store:function(){return this.get("record").get("store")
}.property("record").cacheable(),storeKey:function(){return this.get("record").get("storeKey")
}.property("record").cacheable(),readOnlyStoreIds:function(){return this.get("record").readAttribute(this.get("propertyName"))
}.property(),editableStoreIds:function(){var a=this.get("store"),d=this.get("storeKey"),c=this.get("propertyName"),b,e;
b=a.readEditableProperty(d,c);if(!b){e=a.readEditableDataHash(d);b=e[c]=[]}if(b!==this._prevStoreIds){this.recordPropertyDidChange()
}return b}.property(),isEditable:function(){var a=this.manyAttribute;return a?a.get("isEditable"):NO
}.property("manyAttribute").cacheable(),inverse:function(){var a=this.manyAttribute;
return a?a.get("inverse"):null}.property("manyAttribute").cacheable(),isMaster:function(){var a=this.manyAttribute;
return a?a.get("isMaster"):null}.property("manyAttribute").cacheable(),orderBy:function(){var a=this.manyAttribute;
return a?a.get("orderBy"):null}.property("manyAttribute").cacheable(),length:function(){var a=this.get("readOnlyStoreIds");
return a?a.get("length"):0}.property("readOnlyStoreIds"),objectAt:function(a){var g=this._records,f=this.get("readOnlyStoreIds"),c=this.get("store"),h=this.get("recordType"),e,d,b;
if(!f||!c){return undefined}if(g&&(d=g[a])){return d}if(!g){this._records=g=[]}b=f.objectAt(a);
if(b){e=c.storeKeyFor(h,b);if(c.readStatus(e)===SC.Record.EMPTY){c.retrieveRecord(h,null,e)
}g[a]=d=c.materializeRecord(e)}return d},replace:function(n,d,m){if(!this.get("isEditable")){throw"%@.%@[] is not editable".fmt(this.get("record"),this.get("propertyName"))
}var c=this.get("editableStoreIds"),k=m?(m.get?m.get("length"):m.length):0,h=this.get("record"),e=this.get("propertyName"),g,o,a,b,f,l,j;
a=[];for(g=0;g<k;g++){a[g]=m.objectAt(g).get("id")}f=this.get("inverse");if(f&&d>0){b=SC.ManyArray._toRemove;
if(b){SC.ManyArray._toRemove=null}else{b=[]}for(g=0;g<d;g++){b[g]=this.objectAt(n+g)
}}c.replace(n,d,a);if(f){for(g=0;g<d;g++){j=b[g];l=j?j[f]:null;if(l&&l.inverseDidRemoveRecord){l.inverseDidRemoveRecord(j,f,h,e)
}}if(b){b.length=0;if(!SC.ManyArray._toRemove){SC.ManyArray._toRemove=b}}for(g=0;
g<k;g++){j=m.objectAt(g);l=j?j[f]:null;if(l&&l.inverseDidAddRecord){l.inverseDidAddRecord(j,f,h,e)
}}}if(h&&(!f||this.get("isMaster"))){h.recordDidChange(e)}return this},removeInverseRecord:function(c){if(!c){return this
}var e=c.get("id"),d=this.get("editableStoreIds"),a=(d&&e)?d.indexOf(e):-1,b;if(a>=0){d.removeAt(a);
if(this.get("isMaster")&&(b=this.get("record"))){b.recordDidChange(this.get("propertyName"))
}}return this},addInverseRecord:function(d){if(!d){return this}var g=d.get("id"),e=this.get("editableStoreIds"),f=this.get("orderBy"),b=e.get("length"),a,c;
if(f){a=this._findInsertionLocation(d,0,b,f)}else{a=b}e.insertAt(a,d.get("id"));if(this.get("isMaster")&&(c=this.get("record"))){c.recordDidChange(this.get("propertyName"))
}return this},_findInsertionLocation:function(g,d,c,f){var b=d+Math.floor((c-d)/2),e=this.objectAt(b),a=this._compare(g,e,f);
if(a<0){if(b===0){return b}else{return this._findInsertionLocation(g,0,b,f)}}else{if(a>0){if(b>=c){return b
}else{return this._findInsertionLocation(g,b,c,f)}}else{return b}}},_compare:function(f,e,i){var h=SC.typeOf(i),g,d,c;
if(h===SC.T_FUNCTION){g=i(f,e)}else{if(h===SC.T_STRING){g=SC.compare(f,e)}else{c=i.get("length");
g=0;for(d=0;(g===0)&&(d<c);d++){g=SC.compare(f,e)}}}return g},recordPropertyDidChange:function(c){if(c&&!c.contains(this.get("propertyName"))){return this
}var e=this.get("readOnlyStoreIds");var b=this._prevStoreIds,d=this._storeIdsContentDidChange;
if(e===b){return this}if(b){b.removeObserver("[]",this,d)}this._prevStoreIds=e;if(e){e.addObserver("[]",this,d)
}var a=(e)?e.propertyRevision:-1;this._storeIdsContentDidChange(e,"[]",e,a)},_storeIdsContentDidChange:function(d,b,c,a){this._records=null;
this.enumerableContentDidChange()},unknownProperty:function(b,c){var a=this.reducedProperty(b,c);
return a===undefined?arguments.callee.base.apply(this,arguments):a},init:function(){arguments.callee.base.apply(this,arguments);
this.recordPropertyDidChange()}});sc_require("models/record");SC.Store=SC.Object.extend({name:null,nestedStores:null,dataSource:null,isNested:NO,commitRecordsAutomatically:NO,from:function(a){this.set("dataSource",a);
return this},_getDataSource:function(){var a=this.get("dataSource");if(typeof a===SC.T_STRING){a=SC.objectForPropertyPath(a);
if(a){a=a.create()}if(a){this.set("dataSource",a)}}return a},cascade:function(a){var b=SC.A(arguments);
a=SC.CascadeDataSource.create({dataSources:b});return this.from(a)},chain:function(b,c){if(!b){b={}
}b.parentStore=this;if(c){if(SC.typeOf(c)!=="class"){throw new Error("%@ is not a valid class".fmt(c))
}if(!SC.kindOf(c,SC.NestedStore)){throw new Error("%@ is not a type of SC.NestedStore".fmt(c))
}}else{c=SC.NestedStore}var a=c.create(b),d=this.nestedStores;if(!d){d=this.nestedStores=[]
}d.push(a);return a},willDestroyNestedStore:function(a){if(this.nestedStores){this.nestedStores.removeObject(a)
}return this},hasNestedStore:function(a){while(a&&(a!==this)){a=a.get("parentStore")
}return a===this},dataHashes:null,statuses:null,revisions:null,editables:null,changelog:null,recordArraysWithQuery:null,recordErrors:null,queryErrors:null,storeKeyEditState:function(b){var c=this.editables,a=this.locks;
return(c&&c[b])?SC.Store.EDITABLE:SC.Store.LOCKED},readDataHash:function(a){return this.dataHashes[a]
},readEditableDataHash:function(b){var a=this.dataHashes[b];if(!a){return a}var c=this.editables;
if(!c){c=this.editables=[]}if(!c[b]){c[b]=1;a=this.dataHashes[b]=SC.clone(a)}return a
},readEditableProperty:function(c,a){var e=this.readEditableDataHash(c),d=this.editables[c],b=e[a];
if(d===1){d=this.editables[c]={}}if(!d[a]){b=e[a];if(b&&b.isCopyable){b=e[a]=b.copy()
}d[a]=YES}return b},writeDataHash:function(b,d,a){if(d){this.dataHashes[b]=d}if(a){this.statuses[b]=a
}var c=this.editables;if(!c){c=this.editables=[]}c[b]=1;return this},removeDataHash:function(c,b){var a;
this.dataHashes[c]=null;this.statuses[c]=b||SC.Record.EMPTY;a=this.revisions[c]=this.revisions[c];
var d=this.editables;if(d){d[c]=0}return this},readStatus:function(a){this.readDataHash(a);
return this.statuses[a]||SC.Record.EMPTY},peekStatus:function(a){return this.statuses[a]||SC.Record.EMPTY
},writeStatus:function(b,a){return this.writeDataHash(b,null,a)},dataHashDidChange:function(h,d,e,f){if(!d){d=SC.Store.generateStoreKey()
}var c,b,a,g;c=SC.typeOf(h)===SC.T_ARRAY;if(c){b=h.length}else{b=1;g=h}for(a=0;a<b;
a++){if(c){g=h[a]}this.revisions[g]=d;this._notifyRecordPropertyChange(g,e,f)}return this
},_notifyRecordPropertyChange:function(m,e,l){var a=this.records,g=this.get("nestedStores"),h=SC.Store,c,b,f,k,j,d,n;
f=g?g.length:0;for(k=0;k<f;k++){j=g[k];d=j.peekStatus(m);b=j.storeKeyEditState(m);
if(b===h.INHERITED){j._notifyRecordPropertyChange(m,e,l)}else{if(d&SC.Record.BUSY){if(j.get("hasChanges")){throw h.CHAIN_CONFLICT_ERROR
}j.reset()}}}var i=this.recordPropertyChanges;if(!i){i=this.recordPropertyChanges={storeKeys:SC.CoreSet.create(),records:SC.CoreSet.create(),hasDataChanges:SC.CoreSet.create(),propertyForStoreKeys:{}}
}i.storeKeys.add(m);if(a&&(c=a[m])){i.records.push(m);if(!e){i.hasDataChanges.push(m)
}if(l){if(!(n=i.propertyForStoreKeys[m])){n=i.propertyForStoreKeys[m]=SC.CoreSet.create()
}if(n!=="*"){n.add(l)}}else{i.propertyForStoreKeys[m]="*"}}this.invokeOnce(this.flush);
return this},flush:function(){if(!this.recordPropertyChanges){return this}var i=this.recordPropertyChanges,h=i.storeKeys,l=i.hasDataChanges,a=i.records,f=i.propertyForStoreKeys,d=SC.CoreSet.create(),c,b,e,j,g,k,m;
h.forEach(function(n){if(a.contains(n)){e=l.contains(n)?NO:YES;c=this.records[n];
m=f?f[n]:null;if(m==="*"){m=null}a.remove(n);if(c){c.storeDidChangeProperties(e,m)
}}b=SC.Store.recordTypeFor(n);d.add(b)},this);if(h.get("length")>0){this._notifyRecordArrays(h,d)
}h.clear();l.clear();a.clear();this.recordPropertyChanges.propertyForStoreKeys={};
return this},reset:function(){this.dataHashes={};this.revisions={};this.statuses={};
this.chainedChanges=this.locks=this.editables=null;this.changelog=null;this.recordErrors=null;
this.queryErrors=null;var a=this.records,b;if(a){for(b in a){if(!a.hasOwnProperty(b)){continue
}this._notifyRecordPropertyChange(parseInt(b,10),NO)}}this.set("hasChanges",NO)},commitChangesFromNestedStore:function(k,l,c){if(!c){this._verifyLockRevisions(l,k.locks)
}var g=l.length,e,o,f,a,n,b,d,m,j;b=this.revisions;f=this.dataHashes;a=this.statuses;
n=this.editables;if(!n){n=this.editables=[]}d=k.dataHashes;j=k.revisions;m=k.statuses;
for(e=0;e<g;e++){o=l[e];f[o]=d[o];a[o]=m[o];b[o]=j[o];n[o]=0;this._notifyRecordPropertyChange(o,NO)
}var p=this.changelog,h=k.changelog;if(h){if(!p){p=this.changelog=SC.CoreSet.create()
}p.addEach(h)}this.changelog=p;if(!this.get("parentStore")){this.flush()}return this
},_verifyLockRevisions:function(f,h){var a=f.length,c=this.revisions,e,g,d,b;if(h&&c){for(e=0;
e<a;e++){g=f[e];d=h[g]||1;b=c[g]||1;if(d<b){throw SC.Store.CHAIN_CONFLICT_ERROR}}}return this
},find:function(b,a){if(SC.typeOf(b)===SC.T_STRING){b=SC.objectForPropertyPath(b)
}if((arguments.length===1)&&!(b&&b.get&&b.get("isRecord"))){if(!b){throw new Error("SC.Store#find() must pass recordType or query")
}if(!b.isQuery){b=SC.Query.local(b)}return this._findQuery(b,YES,YES)}else{return this._findRecord(b,a)
}},findAll:function(c,a,b){console.warn("SC.Store#findAll() will be removed in a future version of SproutCore.  Use SC.Store#find() instead");
if(!c||!c.isQuery){c=SC.Query.local(c,a,b)}return this._findQuery(c,YES,YES)},_findQuery:function(f,a,e){var b=this._scst_recordArraysByQuery,d=SC.guidFor(f),c,g;
if(!b){b=this._scst_recordArraysByQuery={}}c=b[d];if(!c&&a){b[d]=c=SC.RecordArray.create({store:this,query:f});
g=this.get("recordArrays");if(!g){this.set("recordArrays",g=SC.Set.create())}g.add(c);
if(e){this.refreshQuery(f)}}this.flush();return c},_findRecord:function(c,b){var a;
if(c&&c.get&&c.get("isRecord")){a=c.get("storeKey")}else{a=b?c.storeKeyFor(b):null
}if(a&&(this.readStatus(a)===SC.Record.EMPTY)){a=this.retrieveRecord(c,b)}return a?this.materializeRecord(a):null
},recordArrayWillDestroy:function(b){var a=this._scst_recordArraysByQuery,c=this.get("recordArrays");
if(a){delete a[SC.guidFor(b.get("query"))]}if(c){c.remove(b)}return this},refreshQuery:function(d){if(!d){throw new Error("refreshQuery() requires a query")
}var a=this._scst_recordArraysByQuery,c=a?a[SC.guidFor(d)]:null,b=this._getDataSource();
if(b&&b.fetch){if(c){c.storeWillFetchQuery(d)}b.fetch.call(b,this,d)}return this},_notifyRecordArrays:function(b,a){var c=this.get("recordArrays");
if(!c){return this}c.forEach(function(d){if(d){d.storeDidChangeStoreKeys(b,a)}},this);
return this},recordsFor:function(f){var d=[],a=f.storeKeysById(),e,c,b;for(e in a){c=a[e];
if(this.readStatus(c)!==SC.RECORD_EMPTY){d.push(c)}}if(d.length>0){b=SC.RecordArray.create({store:this,storeKeys:d})
}else{b=d}return b},_TMP_REC_ATTRS:{},materializeRecord:function(d){var a=this.records,c,e,b;
if(!a){a=this.records={}}c=a[d];if(c){return c}e=SC.Store.recordTypeFor(d);if(!e){return null
}b=this._TMP_REC_ATTRS;b.storeKey=d;b.store=this;c=a[d]=e.create(b);return c},createRecord:function(b,d,a){var i,j,c,h=SC.Record,e,g,f;
if(!a&&(i=b.prototype.primaryKey)){a=d[i];g=b.prototype[i]?b.prototype[i].defaultValue:null;
if(!a&&SC.typeOf(g)===SC.T_FUNCTION){a=d[i]=g()}}j=a?b.storeKeyFor(a):SC.Store.generateStoreKey();
c=this.readStatus(j);if((c&h.BUSY)||(c&h.READY)||(c==h.DESTROYED_DIRTY)){throw a?h.RECORD_EXISTS_ERROR:h.BAD_STATE_ERROR
}else{if(!a&&(c==SC.DESTROYED_CLEAN||c==SC.ERROR)){throw h.BAD_STATE_ERROR}}this.writeDataHash(j,(d?d:{}),h.READY_NEW);
SC.Store.replaceRecordTypeFor(j,b);this.dataHashDidChange(j);e=this.changelog;if(!e){e=SC.Set.create()
}e.add(j);this.changelog=e;if(this.get("commitRecordsAutomatically")){this.invokeLast(this.commitRecords)
}f=this.materializeRecord(j);if(f){f.propagateToAggregates()}return f},createRecords:function(d,i,a){var g=[],c,b,e,f=i.length,h;
e=SC.typeOf(d)===SC.T_ARRAY;if(!e){c=d}for(h=0;h<f;h++){if(e){c=d[h]||SC.Record}b=a?a[h]:undefined;
g.push(this.createRecord(c,i[h],b))}return g},unloadRecord:function(f,e,d,c){if(d===undefined){d=f.storeKeyFor(e)
}var b=this.readStatus(d),a=SC.Record;c=c||a.EMPTY;if((b===a.BUSY_DESTROYING)||(b&a.DESTROYED)){return this
}else{if(b&a.BUSY){throw a.BUSY_ERROR}else{b=c}}this.removeDataHash(d,b);this.dataHashDidChange(d);
return this},unloadRecords:function(d,a,g,e){var h,f,i,b,c,j;if(g===undefined){h=a.length;
f=SC.typeOf(d)===SC.T_ARRAY;if(!f){c=d}for(i=0;i<h;i++){if(f){c=d[i]||SC.Record}b=a?a[i]:undefined;
this.unloadRecord(c,b,undefined,e)}}else{h=g.length;for(i=0;i<h;i++){j=g?g[i]:undefined;
this.unloadRecord(undefined,undefined,j,e)}}return this},destroyRecord:function(f,e,d){if(d===undefined){d=f.storeKeyFor(e)
}var b=this.readStatus(d),c,a=SC.Record;if((b===a.BUSY_DESTROYING)||(b&a.DESTROYED)){return this
}else{if(b==a.EMPTY){throw a.NOT_FOUND_ERROR}else{if(b&a.BUSY){throw a.BUSY_ERROR
}else{if(b==a.READY_NEW){b=a.DESTROYED_CLEAN}else{b=a.DESTROYED_DIRTY}}}}this.writeStatus(d,b);
this.dataHashDidChange(d);c=this.changelog;if(!c){c=this.changelog=SC.Set.create()
}((b&a.DIRTY)?c.add(d):c.remove(d));this.changelog=c;if(this.get("commitRecordsAutomatically")){this.invokeLast(this.commitRecords)
}return this},destroyRecords:function(d,a,f){var g,e,h,b,c,i;if(f===undefined){g=a.length;
e=SC.typeOf(d)===SC.T_ARRAY;if(!e){c=d}for(h=0;h<g;h++){if(e){c=d[h]||SC.Record}b=a?a[h]:undefined;
this.destroyRecord(c,b,undefined)}}else{g=f.length;for(h=0;h<g;h++){i=f?f[h]:undefined;
this.destroyRecord(undefined,undefined,i)}}return this},recordDidChange:function(h,g,f,d,c){if(f===undefined){f=h.storeKeyFor(g)
}var b=this.readStatus(f),e,a=SC.Record;if(b&a.BUSY){throw a.BUSY_ERROR}else{if(!(b&a.READY)){throw a.NOT_FOUND_ERROR
}else{if(b!=a.READY_NEW){this.writeStatus(f,a.READY_DIRTY)}}}this.dataHashDidChange(f,null,c,d);
e=this.changelog;if(!e){e=this.changelog=SC.Set.create()}e.add(f);this.changelog=e;
if(this.get("commitRecordsAutomatically")){this.invokeLast(this.commitRecords)}return this
},recordsDidChange:function(d,a,f){var g,e,h,b,c,i;if(f===undefined){g=a.length;e=SC.typeOf(d)===SC.T_ARRAY;
if(!e){c=d}for(h=0;h<g;h++){if(e){c=d[h]||SC.Record}b=a?a[h]:undefined;i=f?f[h]:undefined;
this.recordDidChange(c,b,i)}}else{g=f.length;for(h=0;h<g;h++){i=f?f[h]:undefined;
this.recordDidChange(undefined,undefined,i)}}return this},retrieveRecords:function(f,b,i,c){var a=this._getDataSource(),h=SC.typeOf(f)===SC.T_ARRAY,j=(!i)?b.length:i.length,k=[],g=SC.Store.generateStoreKey(),m=SC.Record,d,n,o,e,l;
if(!h){d=f}for(n=0;n<j;n++){if(i){o=i[n]}else{if(h){d=f[n]}o=d.storeKeyFor(b[n])}e=this.readStatus(o);
if((e==m.EMPTY)||(e==m.ERROR)||(e==m.DESTROYED_CLEAN)){this.writeStatus(o,m.BUSY_LOADING);
this.dataHashDidChange(o,g,YES);k.push(o)}else{if(c){if(e&m.READY){this.writeStatus(o,m.BUSY_REFRESH|(e&3));
this.dataHashDidChange(o,g,YES);k.push(o)}else{if((e==m.BUSY_DESTROYING)||(e==m.BUSY_CREATING)||(e==m.BUSY_COMMITTING)){throw m.BUSY_ERROR
}else{if(e==m.DESTROYED_DIRTY){throw m.BAD_STATE_ERROR}}}}}}l=NO;if(a){l=a.retrieveRecords.call(a,this,k,b)
}if(!l){j=k.length;g=SC.Store.generateStoreKey();for(n=0;n<j;n++){o=k[n];e=this.readStatus(o);
if(e===m.BUSY_LOADING){this.writeStatus(o,m.ERROR);this.dataHashDidChange(o,g,YES)
}else{if(e&m.BUSY_REFRESH){this.writeStatus(o,m.READY|(e&3));this.dataHashDidChange(o,g,YES)
}}}k.length=0}return k},_TMP_RETRIEVE_ARRAY:[],retrieveRecord:function(f,e,b,c){var d=this._TMP_RETRIEVE_ARRAY,a;
if(b){d[0]=b;b=d;e=null}else{d[0]=e;e=d}a=this.retrieveRecords(f,e,b,c);d.length=0;
return a[0]},refreshRecord:function(c,b,a){return !!this.retrieveRecord(c,b,a,YES)
},refreshRecords:function(b,c,d){var a=this.retrieveRecords(b,c,d,YES);return a&&a.length>0
},commitRecords:function(e,l,b,o){var k=this._getDataSource(),g=SC.typeOf(e)===SC.T_ARRAY,c=[],i=[],j=[],p=SC.Store.generateStoreKey(),f=SC.Record,a,h,d,m,r,q,n;
if(!e&&!l&&!b){b=this.changelog}n=b?b.get("length"):(l?l.get("length"):0);for(h=0;
h<n;h++){if(b){d=b[h]}else{if(g){a=e[h]||SC.Record}else{a=e}d=a.storeKeyFor(l[h])
}m=this.readStatus(d);if((m==f.EMPTY)||(m==f.ERROR)){throw f.NOT_FOUND_ERROR}else{if(m==f.READY_NEW){this.writeStatus(d,f.BUSY_CREATING);
this.dataHashDidChange(d,p,YES);c.push(d)}else{if(m==f.READY_DIRTY){this.writeStatus(d,f.BUSY_COMMITTING);
this.dataHashDidChange(d,p,YES);i.push(d)}else{if(m==f.DESTROYED_DIRTY){this.writeStatus(d,f.BUSY_DESTROYING);
this.dataHashDidChange(d,p,YES);j.push(d)}else{if(m==f.DESTROYED_CLEAN){this.dataHashDidChange(d,p,YES)
}}}}}}if(k&&(n>0||o)){q=k.commitRecords.call(k,this,c,i,j,o)}if(q&&!e&&!l){if(b===this.changelog){this.changelog=null
}else{this.changelog.removeEach(b)}}return q},commitRecord:function(f,e,b,c){var d=this._TMP_RETRIEVE_ARRAY,a;
if(e===undefined&&b===undefined){return NO}if(b!==undefined){d[0]=b;b=d;e=null}else{d[0]=e;
e=d}a=this.commitRecords(f,e,b,c);d.length=0;return a},cancelRecords:function(e,b,i){var a=this._getDataSource(),g=SC.typeOf(e)===SC.T_ARRAY,k=SC.Record,j=[],f,h,l,c,d,m;
h=(i===undefined)?b.length:i.length;for(l=0;l<h;l++){if(g){d=e[l]||SC.Record}else{d=e||SC.Record
}c=b?b[l]:undefined;if(i===undefined){m=d.storeKeyFor(c)}else{m=i?i[l]:undefined}if(m){f=this.readStatus(m);
if((f==k.EMPTY)||(f==k.ERROR)){throw k.NOT_FOUND_ERROR}j.push(m)}}if(a){a.cancel.call(a,this,j)
}return this},cancelRecord:function(e,d,b){var c=this._TMP_RETRIEVE_ARRAY,a;if(b!==undefined){c[0]=b;
b=c;d=null}else{c[0]=d;d=c}a=this.cancelRecords(e,d,b);c.length=0;return this},loadRecord:function(g,d,f){var a=SC.Record,c,b,e;
g=g||SC.Record;b=g.prototype.primaryKey;f=f||d[b];c=e=g.storeKeyFor(f);if(this.readStatus(e)&a.BUSY){this.dataSourceDidComplete(e,d,f)
}else{this.pushRetrieve(g,f,d,e)}return c},loadRecords:function(d,m,a){var f=SC.typeOf(d)===SC.T_ARRAY,g=m.get("length"),h=[],i=SC.Record,c,b,k,j,e,l;
if(!f){c=d||SC.Record;k=c.prototype.primaryKey}for(j=0;j<g;j++){e=m.objectAt(j);if(f){c=d.objectAt(j)||SC.Record;
k=c.prototype.primaryKey}b=(a)?a.objectAt(j):e[k];h[j]=this.loadRecord(c,e,b)}return h
},readError:function(a){var b=this.recordErrors;return b?b[a]:undefined},readQueryError:function(a){var b=this.queryErrors;
return b?b[SC.guidFor(a)]:undefined},dataSourceDidCancel:function(c){var b=this.readStatus(c),a=SC.Record;
if(!(b&a.BUSY)){throw a.BAD_STATE_ERROR}switch(b){case a.BUSY_LOADING:b=a.EMPTY;break;
case a.BUSY_CREATING:b=a.READY_NEW;break;case a.BUSY_COMMITTING:b=a.READY_DIRTY;break;
case a.BUSY_REFRESH_CLEAN:b=a.READY_CLEAN;break;case a.BUSY_REFRESH_DIRTY:b=a.READY_DIRTY;
break;case a.BUSY_DESTROYING:b=a.DESTROYED_DIRTY;break;default:throw a.BAD_STATE_ERROR
}this.writeStatus(c,b);this.dataHashDidChange(c,null,YES);return this},dataSourceDidComplete:function(f,e,d){var b=this.readStatus(f),a=SC.Record,c;
if(!(b&a.BUSY)){throw a.BAD_STATE_ERROR}if(b===a.BUSY_DESTROYING){throw a.BAD_STATE_ERROR
}else{b=a.READY_CLEAN}this.writeStatus(f,b);if(e){this.writeDataHash(f,e,b)}if(d){SC.Store.replaceIdFor(f,d)
}c=e||d?NO:YES;this.dataHashDidChange(f,null,c);return this},dataSourceDidDestroy:function(c){var b=this.readStatus(c),a=SC.Record;
if(!(b&a.BUSY)){throw a.BAD_STATE_ERROR}else{b=a.DESTROYED_CLEAN}this.removeDataHash(c,b);
this.dataHashDidChange(c);return this},dataSourceDidError:function(d,c){var b=this.readStatus(d),e=this.recordErrors,a=SC.Record;
if(!(b&a.BUSY)){throw a.BAD_STATE_ERROR}else{b=a.ERROR}if(c&&c.isError){if(!e){e=this.recordErrors=[]
}e[d]=c}this.writeStatus(d,b);this.dataHashDidChange(d,null,YES);return this},pushRetrieve:function(f,e,c,d){var b=SC.Record,a;
if(d===undefined){d=f.storeKeyFor(e)}a=this.readStatus(d);if(a==b.EMPTY||a==b.ERROR||a==b.READY_CLEAN||a==b.DESTROYED_CLEAN){a=b.READY_CLEAN;
if(c===undefined){this.writeStatus(d,a)}else{this.writeDataHash(d,c,a)}this.dataHashDidChange(d);
return d}return NO},pushDestroy:function(e,d,c){var b=SC.Record,a;if(c===undefined){c=e.storeKeyFor(d)
}a=this.readStatus(c);if(a==b.EMPTY||a==b.ERROR||a==b.READY_CLEAN||a==b.DESTROYED_CLEAN){a=b.DESTROYED_CLEAN;
this.removeDataHash(c,a);this.dataHashDidChange(c);return c}return NO},pushError:function(g,f,c,d){var b=SC.Record,a,e=this.recordErrors;
if(d===undefined){d=g.storeKeyFor(f)}a=this.readStatus(d);if(a==b.EMPTY||a==b.ERROR||a==b.READY_CLEAN||a==b.DESTROYED_CLEAN){a=b.ERROR;
if(c&&c.isError){if(!e){e=this.recordErrors=[]}e[d]=c}this.writeStatus(d,a);this.dataHashDidChange(d,null,YES);
return d}return NO},loadQueryResults:function(c,a){if(c.get("location")===SC.Query.LOCAL){throw new Error("Cannot load query results for a local query")
}var b=this._findQuery(c,YES,NO);if(b){b.set("storeKeys",a)}this.dataSourceDidFetchQuery(c);
return this},dataSourceDidFetchQuery:function(a){return this._scstore_dataSourceDidFetchQuery(a,YES)
},_scstore_dataSourceDidFetchQuery:function(d,a){var c=this._findQuery(d,a,NO),b=this.get("nestedStores"),e=b?b.get("length"):0;
if(c){c.storeDidFetchQuery(d)}while(--e>=0){b[e]._scstore_dataSourceDidFetchQuery(d,NO)
}return this},dataSourceDidCancelQuery:function(a){return this._scstore_dataSourceDidCancelQuery(a,YES)
},_scstore_dataSourceDidCancelQuery:function(d,a){var c=this._findQuery(d,a,NO),b=this.get("nestedStores"),e=b?b.get("length"):0;
if(c){c.storeDidCancelQuery(d)}while(--e>=0){b[e]._scstore_dataSourceDidCancelQuery(d,NO)
}return this},dataSourceDidErrorQuery:function(b,a){var c=this.queryErrors;if(a&&a.isError){if(!c){c=this.queryErrors={}
}c[SC.guidFor(b)]=a}return this._scstore_dataSourceDidErrorQuery(b,YES)},_scstore_dataSourceDidErrorQuery:function(d,a){var c=this._findQuery(d,a,NO),b=this.get("nestedStores"),e=b?b.get("length"):0;
if(c){c.storeDidErrorQuery(d)}while(--e>=0){b[e]._scstore_dataSourceDidErrorQuery(d,NO)
}return this},init:function(){arguments.callee.base.apply(this,arguments);this.reset()
},toString:function(){var b=this.get("name");if(!b){return arguments.callee.base.apply(this,arguments)
}else{var a=arguments.callee.base.apply(this,arguments);return"%@ (%@)".fmt(b,a)}},idFor:function(a){return SC.Store.idFor(a)
},recordTypeFor:function(a){return SC.Store.recordTypeFor(a)},storeKeyFor:function(b,a){return b.storeKeyFor(a)
},storeKeyExists:function(b,a){return b.storeKeyExists(a)},storeKeysFor:function(f){var a=[],e=f&&f.isEnumerable,c,d,b;
if(!this.statuses){return a}for(d in SC.Store.recordTypesByStoreKey){c=SC.Store.recordTypesByStoreKey[d];
if(e){b=f.contains(c)}else{b=c===f}if(b&&this.statuses[d]){a.push(parseInt(d,10))
}}return a},storeKeys:function(){var a=[],b;if(!this.statuses){return a}for(b in this.statuses){if(this.statuses[b]!=SC.Record.EMPTY){a.push(parseInt(b,10))
}}return a},statusString:function(a){var b=this.materializeRecord(a);return b.statusString()
}});SC.Store.mixin({CHAIN_CONFLICT_ERROR:new Error("Nested Store Conflict"),NO_PARENT_STORE_ERROR:new Error("Parent Store Required"),NESTED_STORE_UNSUPPORTED_ERROR:new Error("Unsupported In Nested Store"),NESTED_STORE_RETRIEVE_DIRTY_ERROR:new Error("Cannot Retrieve Dirty Record in Nested Store"),EDITABLE:"editable",LOCKED:"locked",INHERITED:"inherited",idsByStoreKey:[],recordTypesByStoreKey:{},queriesByStoreKey:[],nextStoreKey:1,generateStoreKey:function(){return this.nextStoreKey++
},idFor:function(a){return this.idsByStoreKey[a]},queryFor:function(a){return this.queriesByStoreKey[a]
},recordTypeFor:function(a){return this.recordTypesByStoreKey[a]},replaceIdFor:function(c,a){var d=this.idsByStoreKey[c],e,b;
if(d!==a){e=this.recordTypeFor(c);if(!e){throw new Error("replaceIdFor: storeKey %@ does not exist".fmt(c))
}this.idsByStoreKey[c]=a;b=e.storeKeysById();delete b[d];b[a]=c}return this},replaceRecordTypeFor:function(a,b){this.recordTypesByStoreKey[a]=b;
return this}});SC.Store.prototype.nextStoreIndex=1;SC.Store._getDefaultStore=function(){var a=this._store;
if(!a){this._store=a=SC.Store.create()}return a};SC.Store.updateRecords=function(f,g,h,c){console.warn("SC.Store.updateRecords() is deprecated.  Use loadRecords() instead");
var d=this._getDefaultStore(),b=f.length,a,e;if(!h){h=[];for(a=0;a<b;a++){h[a]=f[a].recordType
}}e=d.loadRecords(h,f);b=e.length;for(a=0;a<b;a++){e[a]=d.materializeRecord(e[a])
}return e};SC.Store.find=function(a,b){return this._getDefaultStore().find(b,a)};
SC.Store.findAll=function(a,b){return this._getDefaultStore().findAll(a,b)};sc_require("system/store");
SC.NestedStore=SC.Store.extend({hasChanges:NO,parentStore:null,isNested:YES,lockOnRead:YES,locks:null,chainedChanges:null,find:function(a){if(a&&a.isQuery&&a.get("location")!==SC.Query.LOCAL){throw"SC.Store#find() can only accept LOCAL queries in nested stores"
}return arguments.callee.base.apply(this,arguments)},commitChanges:function(b){if(this.get("hasChanges")){var a=this.get("parentStore");
a.commitChangesFromNestedStore(this,this.chainedChanges,b)}this.reset();return this
},discardChanges:function(){var c,f;if((c=this.records)&&(f=this.locks)){var b=this.get("parentStore"),h=b.revisions;
var g=this.revisions,e,d,a;for(e in c){if(!c.hasOwnProperty(e)){continue}if(!(d=f[e])){continue
}a=h[e];if((a!==d)||(g[e]>a)){this._notifyRecordPropertyChange(parseInt(e,10))}}}this.reset();
this.flush();return this},destroy:function(){this.discardChanges();var a=this.get("parentStore");
if(a){a.willDestroyNestedStore(this)}arguments.callee.base.apply(this,arguments);
return this},reset:function(){var a=this.get("parentStore");if(!a){throw SC.Store.NO_PARENT_STORE_ERROR
}this.dataHashes=SC.beget(a.dataHashes);this.revisions=SC.beget(a.revisions);this.statuses=SC.beget(a.statuses);
this.chainedChanges=this.locks=this.editables=null;this.changelog=null;this.set("hasChanges",NO)
},refreshQuery:function(b){var a=this.get("parentStore");if(a){a.refreshQuery(b)}return this
},readError:function(b){var a=this.get("parentStore");return a?a.readError(b):null
},readQueryError:function(b){var a=this.get("parentStore");return a?a.readQueryError(b):null
},storeKeyEditState:function(b){var c=this.editables,a=this.locks;return(c&&c[b])?SC.Store.EDITABLE:(a&&a[b])?SC.Store.LOCKED:SC.Store.INHERITED
},_lock:function(e){var d=this.locks,a,f;if(d&&d[e]){return this}if(!d){d=this.locks=[]
}f=this.editables;if(f){f[e]=0}var c=this.get("parentStore"),b;while(c&&(b=c.storeKeyEditState(e))===SC.Store.INHERITED){c=c.get("parentStore")
}if(c&&b===SC.Store.EDITABLE){this.dataHashes[e]=SC.clone(c.dataHashes[e]);if(!f){f=this.editables=[]
}f[e]=1}else{this.dataHashes[e]=this.dataHashes[e]}this.statuses[e]=this.statuses[e];
a=this.revisions[e]=this.revisions[e];d[e]=a||1;return this},readDataHash:function(a){if(this.get("lockOnRead")){this._lock(a)
}return this.dataHashes[a]},readEditableDataHash:function(a){this._lock(a);return arguments.callee.base.apply(this,arguments)
},writeDataHash:function(d,f,b){var c=this.locks,g=NO,a;if(f){this.dataHashes[d]=f
}else{this._lock(d);g=YES}if(b){this.statuses[d]=b}else{if(!g){this.statuses[d]=(this.statuses[d]||SC.Record.READY_NEW)
}}if(!g){a=this.revisions[d]=this.revisions[d];if(!c){c=this.locks=[]}if(!c[d]){c[d]=a||1
}}var e=this.editables;if(!e){e=this.editables=[]}e[d]=1;return this},removeDataHash:function(c,a){var b=this.locks;
if(!b){b=this.locks=[]}if(!b[c]){b[c]=this.revisions[c]||1}return arguments.callee.base.apply(this,arguments)
},dataHashDidChange:function(d,b,a,h){if(!b){b=SC.Store.generateStoreKey()}var c,e,g,i;
c=SC.typeOf(d)===SC.T_ARRAY;if(c){e=d.length}else{e=1;i=d}var f=this.chainedChanges;
if(!f){f=this.chainedChanges=SC.Set.create()}for(g=0;g<e;g++){if(c){i=d[g]}this._lock(i);
this.revisions[i]=b;f.add(i);this._notifyRecordPropertyChange(i,a,h)}this.setIfChanged("hasChanges",YES);
return this},commitChangesFromNestedStore:function(e,f,a){arguments.callee.base.apply(this,arguments);
var b=this.get("parentStore"),h=b.revisions,c;var k=this.locks,g=this.chainedChanges,d,j;
if(!k){k=this.locks=[]}if(!g){g=this.chainedChanges=SC.Set.create()}d=f.length;for(c=0;
c<d;c++){j=f[c];if(!k[j]){k[j]=h[j]||1}g.add(j)}this.setIfChanged("hasChanges",g.get("length")>0);
this.flush();return this},queryFor:function(c,a,b){return this.get("parentStore").queryFor(c,a,b)
},findAll:function(e,b,d,c,a){if(!a){a=this}return this.get("parentStore").findAll(e,b,d,c,a)
},retrieveRecords:function(f,m,b,c){var a=this.get("parentStore"),k,d,p,o=(!b)?m.length:b.length,i=SC.Record,n;
if(c){for(k=0;k<o;k++){d=!b?a.storeKeyFor(f,m[k]):b[k];n=this.peekStatus(d);if(n&i.DIRTY){throw SC.Store.NESTED_STORE_RETRIEVE_DIRTY_ERROR
}else{var g=this.dataHashes,j=this.revisions,h=this.statuses,l=this.editables,r=this.locks;
var e=NO;var q=NO;if(g&&g.hasOwnProperty(d)){delete g[d];e=YES}if(j&&j.hasOwnProperty(d)){delete j[d];
e=YES}if(l){delete l[d]}if(r){delete r[d]}if(h&&h.hasOwnProperty(d)){delete h[d];
if(!e){q=YES}e=YES}if(e){this._notifyRecordPropertyChange(d,q)}}}}return a.retrieveRecords(f,m,b,c)
},commitRecords:function(a,b,c){throw SC.Store.NESTED_STORE_UNSUPPORTED_ERROR},commitRecord:function(c,b,a){throw SC.Store.NESTED_STORE_UNSUPPORTED_ERROR
},cancelRecords:function(a,b,c){throw SC.Store.NESTED_STORE_UNSUPPORTED_ERROR},cancelRecord:function(c,b,a){throw SC.Store.NESTED_STORE_UNSUPPORTED_ERROR
},dataSourceDidCancel:function(a){throw SC.Store.NESTED_STORE_UNSUPPORTED_ERROR},dataSourceDidComplete:function(c,b,a){throw SC.Store.NESTED_STORE_UNSUPPORTED_ERROR
},dataSourceDidDestroy:function(a){throw SC.Store.NESTED_STORE_UNSUPPORTED_ERROR},dataSourceDidError:function(b,a){throw SC.Store.NESTED_STORE_UNSUPPORTED_ERROR
},pushRetrieve:function(d,c,a,b){throw SC.Store.NESTED_STORE_UNSUPPORTED_ERROR},pushDestroy:function(c,b,a){throw SC.Store.NESTED_STORE_UNSUPPORTED_ERROR
},pushError:function(d,c,a,b){throw SC.Store.NESTED_STORE_UNSUPPORTED_ERROR}});sc_require("models/record");
SC.RecordArray=SC.Object.extend(SC.Enumerable,SC.Array,{store:null,query:null,storeKeys:null,status:SC.Record.EMPTY,isEditable:function(){var a=this.get("query");
return a?a.get("isEditable"):NO}.property("query").cacheable(),length:function(){this.flush();
var a=this.get("storeKeys");return a?a.get("length"):0}.property("storeKeys").cacheable(),_scra_records:null,objectAt:function(a){this.flush();
var f=this._scra_records,e=this.get("storeKeys"),b=this.get("store"),d,c;if(!e||!b){return undefined
}if(f&&(c=f[a])){return c}if(!f){this._scra_records=f=[]}d=e.objectAt(a);if(d){if(b.peekStatus(d)===SC.Record.EMPTY){b.retrieveRecord(null,null,d)
}f[a]=c=b.materializeRecord(d)}return c},forEach:function(h,d){this.flush();var e=this._scra_records,b=this.get("storeKeys"),f=this.get("store"),c=b?b.get("length"):0,g,i,a;
if(!b||!f){return this}if(!e){e=this._scra_records=[]}if(!d){d=this}for(g=0;g<c;g++){a=e[g];
if(!a){a=e[g]=f.materializeRecord(b.objectAt(g))}h.call(d,a,g,this)}return this},replace:function(b,h,g){this.flush();
var e=this.get("storeKeys"),a=g?(g.get?g.get("length"):g.length):0,c,d;if(!e){throw"storeKeys required"
}var f=this.get("query");if(f&&!f.get("isEditable")){throw SC.RecordArray.NOT_EDITABLE
}d=[];for(c=0;c<a;c++){d[c]=g.objectAt(c).get("storeKey")}e.replace(b,h,d);return this
},contains:function(a){return this.indexOf(a)>=0},indexOf:function(b,a){if(!SC.kindOf(b,SC.Record)){return NO
}this.flush();var d=b.get("storeKey"),c=this.get("storeKeys");return c?c.indexOf(d,a):-1
},lastIndexOf:function(b,a){if(!SC.kindOf(b,SC.Record)){return NO}this.flush();var d=b.get("storeKey"),c=this.get("storeKeys");
return c?c.lastIndexOf(d,a):-1},add:function(a){if(!SC.kindOf(a,SC.Record)){return this
}if(this.indexOf(a)<0){this.pushObject(a)}return this},remove:function(a){if(!SC.kindOf(a,SC.Record)){return this
}this.removeObject(a);return this},find:function(a,b){if(a&&a.isQuery){return this.get("store").find(a.queryWithScope(this))
}else{return arguments.callee.base.apply(this,arguments)}},refresh:function(){this.get("store").refreshQuery(this.get("query"));
return this},reload:function(){this.flush(YES);return this},destroy:function(){if(!this.get("isDestroyed")){this.get("store").recordArrayWillDestroy(this)
}arguments.callee.base.apply(this,arguments)},storeWillFetchQuery:function(c){var b=this.get("status"),a=SC.Record;
if((b===a.EMPTY)||(b===a.ERROR)){b=a.BUSY_LOADING}if(b&a.READY){b=a.BUSY_REFRESH}this.setIfChanged("status",b);
return this},storeDidFetchQuery:function(a){this.setIfChanged("status",SC.Record.READY_CLEAN);
return this},storeDidCancelQuery:function(c){var b=this.get("status"),a=SC.Record;
if(b===a.BUSY_LOADING){b=a.EMPTY}else{if(b===a.BUSY_REFRESH){b=a.READY_CLEAN}}this.setIfChanged("status",b);
return this},storeDidErrorQuery:function(a){this.setIfChanged("status",SC.Record.ERROR);
return this},storeDidChangeStoreKeys:function(b,a){var c=this.get("query");if(c.get("location")!==SC.Query.LOCAL){return this
}if(!c.containsRecordTypes(a)){return this}var d=this._scq_changedStoreKeys;if(!d){d=this._scq_changedStoreKeys=SC.IndexSet.create()
}d.addEach(b);this.set("needsFlush",YES);this.enumerableContentDidChange();return this
},flush:function(a){if(this._insideFlush){this.set("needsFlush",YES);return this}if(!this.get("needsFlush")&&!a){return this
}this.set("needsFlush",NO);var i=this.get("query"),l=this.get("store");if(!l||!i||i.get("location")!==SC.Query.LOCAL){return this
}this._insideFlush=YES;var g=this.get("storeKeys"),e=this._scq_changedStoreKeys,f=NO,j=SC.Record,c,d,b,n,m,h;
var k=g;if(g&&!a){if(e){e.forEach(function(o){d=l.peekStatus(o);if(!(d&j.EMPTY)&&!((d&j.DESTROYED)||(d===j.BUSY_DESTROYING))){c=l.materializeRecord(o);
h=!!(c&&i.contains(c))}else{h=NO}if(h){if(g.indexOf(o)<0){if(!f){g=g.copy()}g.pushObject(o)
}}else{if(g.indexOf(o)>=0){if(!f){g=g.copy()}g.removeObject(o)}}},this);f=YES}}else{if(m=i.get("scope")){n=m.flush().get("storeKeys")
}else{if(b=i.get("expandedRecordTypes")){n=SC.IndexSet.create();b.forEach(function(o){n.addEach(l.storeKeysFor(b))
})}}g=[];n.forEach(function(o){d=l.peekStatus(o);if(!(d&j.EMPTY)&&!((d&j.DESTROYED)||(d===j.BUSY_DESTROYING))){c=l.materializeRecord(o);
if(c&&i.contains(c)){g.push(o)}}});f=YES}if(e){e.clear()}if(f){if(g&&(g===k)){g=g.copy()
}g=SC.Query.orderStoreKeys(g,i,l);if(SC.compare(k,g)!==0){this.set("storeKeys",SC.clone(g))
}}this._insideFlush=NO;return this},needsFlush:YES,isError:function(){return this.get("status")&SC.Record.ERROR
}.property("status").cacheable(),errorValue:function(){return this.get("isError")?SC.val(this.get("errorObject")):null
}.property("isError").cacheable(),errorObject:function(){if(this.get("isError")){var a=this.get("store");
return a.readQueryError(this.get("query"))||SC.Record.GENERIC_ERROR}else{return null
}}.property("isError").cacheable(),_storeKeysDidChange:function(){var d=this.get("storeKeys");
var c=this._prevStoreKeys,e=this._storeKeysContentDidChange,a=this._storeKeysStateDidChange;
if(d===c){return}if(c){c.removeObserver("[]",this,e)}this._prevStoreKeys=d;if(d){d.addObserver("[]",this,e)
}var b=(d)?d.propertyRevision:-1;this._storeKeysContentDidChange(d,"[]",d,b)}.observes("storeKeys"),_storeKeysContentDidChange:function(d,b,c,a){if(this._scra_records){this._scra_records.length=0
}this.beginPropertyChanges().notifyPropertyChange("length").enumerableContentDidChange().endPropertyChanges()
},init:function(){arguments.callee.base.apply(this,arguments);this._storeKeysDidChange()
}});SC.RecordArray.mixin({NOT_EDITABLE:SC.Error.desc("SC.RecordArray is not editable")});
if((typeof SC!=="undefined")&&SC&&SC.bundleDidLoad){SC.bundleDidLoad("sproutcore/datastore")
};