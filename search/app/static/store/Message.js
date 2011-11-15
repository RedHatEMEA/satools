Ext.define("Search.model.Attachment", {
    extend: "Ext.data.Model",
    fields: [
	"content-type",
	"filename",
	"index"
    ]
});

Ext.define("Search.model.Message", {
    extend: "Ext.data.Model",
    fields: [
	"body",
	"date",
	"from",
	"len",
	"list",
	"offset",
	"path",
	"subject",
	"to"
    ],
    hasMany: {
	model: "Search.model.Attachment",
	name: "attachments"
    }
});


Ext.define("Search.store.Message", {
    extend: "Ext.data.Store",
    model: "Search.model.Message"
});
