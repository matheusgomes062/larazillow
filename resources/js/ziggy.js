const Ziggy = {'url':'http:\/\/localhost','port':null,'defaults':{},'routes':{'debugbar.openhandler':{'uri':'_debugbar\/open','methods':['GET','HEAD']},'debugbar.clockwork':{'uri':'_debugbar\/clockwork\/{id}','methods':['GET','HEAD']},'debugbar.assets.css':{'uri':'_debugbar\/assets\/stylesheets','methods':['GET','HEAD']},'debugbar.assets.js':{'uri':'_debugbar\/assets\/javascript','methods':['GET','HEAD']},'debugbar.cache.delete':{'uri':'_debugbar\/cache\/{key}\/{tags?}','methods':['DELETE']},'sanctum.csrf-cookie':{'uri':'sanctum\/csrf-cookie','methods':['GET','HEAD']},'ignition.healthCheck':{'uri':'_ignition\/health-check','methods':['GET','HEAD']},'ignition.executeSolution':{'uri':'_ignition\/execute-solution','methods':['POST']},'ignition.updateConfig':{'uri':'_ignition\/update-config','methods':['POST']},'listing.index':{'uri':'listing','methods':['GET','HEAD']},'listing.create':{'uri':'listing\/create','methods':['GET','HEAD']},'listing.store':{'uri':'listing','methods':['POST']},'listing.show':{'uri':'listing\/{listing}','methods':['GET','HEAD'],'bindings':{'listing':'id'}},'listing.edit':{'uri':'listing\/{listing}\/edit','methods':['GET','HEAD'],'bindings':{'listing':'id'}},'listing.update':{'uri':'listing\/{listing}','methods':['PUT','PATCH'],'bindings':{'listing':'id'}},'listing.destroy':{'uri':'listing\/{listing}','methods':['DELETE'],'bindings':{'listing':'id'}}}}

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
  Object.assign(Ziggy.routes, window.Ziggy.routes)
}

export { Ziggy }