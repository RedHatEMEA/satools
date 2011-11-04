Ext.define("Search.store.Message", {
    extend: "Ext.data.Store",
    fields: ["subject", "from", "date", "to", "body", "list"],
});
