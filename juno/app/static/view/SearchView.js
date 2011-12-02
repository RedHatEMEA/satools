Ext.define("Juno.view.SearchView", {
    alias: "widget.search",
    extend: "Ext.form.Panel",
    title: "Search",
    //width: 300,
    bodyPadding: 10,
    items: [ { xtype: "textfield",
	       name: "search",
	       fieldLabel: "Search" },
	     { xtype: "button",
	       text: "Submit" }
	   ]
});
