Ext.define("Juno.store.Nodes", {
    extend: "Ext.data.TreeStore",
    proxy: {
	type: "ajax",
	url: "/nodes"
    },
    root: {
	text: "Filesystem",
	id: "/",
	expanded: true
    }
});
