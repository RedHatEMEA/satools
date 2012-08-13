Ext.define("Juno.store.NodesStore", {
    extend: "Ext.data.TreeStore",
    fields: [{ name: "text", type: "string" },
	     { name: "id", type: "string" }
	    ],
    proxy: {
	type: "ajax",
	url: "nodes"
    },
    root: {
	text: "root",
	id: "/",
	expanded: true
    }
});
