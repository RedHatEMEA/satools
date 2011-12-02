Ext.define("Juno.store.SlidesStore", {
    extend: "Ext.data.Store",
    fields: [{ name: "src", type: "string"},
             { name: "png", type: "string"},
             { name: "preso", type: "string"},
             { name: "slide", type: "int"}
	    ],
    data: [],
    autoLoad: true
});
