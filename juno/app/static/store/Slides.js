Ext.define("Juno.store.Slides", {
    extend: "Ext.data.Store",
    fields: [{ name: "src", type: "string"},
             { name: "png", type: "string"},
             { name: "preso", type: "string"},
             { name: "slide", type: "int"},
             { name: "height", type: "int"},
             { name: "width", type: "int"}
	    ],
    data: [],
    autoLoad: true
});
