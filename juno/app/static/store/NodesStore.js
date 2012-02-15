Ext.define("Juno.store.NodesStore", {
    extend: "Ext.data.TreeStore",
    proxy: {
	type: "ajax",
	url: "/nodes"
    },
    root: {
	text: "root",
	id: "/",
	expanded: true
    }
});
