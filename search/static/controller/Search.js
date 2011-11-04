Ext.define("Search.controller.Search", {
    extend: "Ext.app.Controller",

    views: [
	"Search"
    ],

    refs: [
	{
	    ref: "searchfield",
	    selector: "#mytextfield"
	}, {
	    ref: "results",
	    selector: "#myresults"
	}
    ],

    init: function() {
        this.control({
            "#mybutton": {
		click: this.click
            },

	    "#mytextfield": {
		render: this.render,
		specialkey: this.specialkey
	    }
        });
    },

    render: function(_this, options) {
	_this.focus();
    },

    specialkey: function(_this, e, options) {
	if(e.getKey() == e.ENTER) {
            this.click(_this, e, options);
        }
    },

    click: function(_this, e, options) {
	var results = this.getResults();

	results.getStore().setProxy({
	    type: "ajax",
	    url: "/s",
	    extraParams: { "q": this.getSearchfield().getSubmitValue() },
	    reader: {
		type: "json",
		root: "rows",
		totalProperty: "total"
            }
	});
	results.getStore().load({
	    params: {
		start:0,    
		limit: 50
	    }, 

	    callback: function(records, operation, success) {
		results.getSelectionModel().select(0);
	    }
	});
    }
});
