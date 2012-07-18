Ext.define("Juno.store.NodesStore", {
    extend: "Ext.data.TreeStore",
    fields: [{ name: "text", type: "string" },
	     { name: "id", type: "string" },
	     { name: "can_write_parent", type: "boolean" },
	     { name: "can_write", type: "boolean" }
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
