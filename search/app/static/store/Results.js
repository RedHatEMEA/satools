Ext.define("Search.store.Results", {
    extend: "Ext.data.Store",
    fields: ["subject", "from", "date", "path", "offset", "length"],
    pageSize: 50
});
