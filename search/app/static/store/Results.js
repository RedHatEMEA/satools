Ext.define("Search.store.Results", {
    extend: "Ext.data.Store",
    fields: ["subject", "from", "date", "path", "offset", "len"],
    pageSize: 50
});
