Ext.define("Juno.controller.Search", {
    extend: "Ext.app.Controller",

    views: [
	"Search"
    ],

    refs: [
	{
	    ref: "searchfield",
	    selector: 'textfield[name="search"]'
	}, {
	    ref: "slidebrowser",
	    selector: "slidebrowser"
	}
    ],

    init: function() {
        this.control({
            "button": {
		click: this.click
            }
        });
    },

    click: function() {
	newstore = Ext.create("Ext.data.Store", {
	    model: "Image",
	    proxy: {
		type: "ajax",
		url: "/search/" + this.getSearchfield().getSubmitValue()
	    },
	    autoLoad: true
	});
	this.getSlidebrowser().bindStore(newstore);
    }
});