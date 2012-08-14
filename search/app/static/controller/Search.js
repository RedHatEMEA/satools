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
	}, {
	    ref: "pagingtoolbar",
	    selector: "#mypagingtoolbar"
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
	var pagingtoolbar = this.getPagingtoolbar();
	var store = results.getStore();

        var sv = this.getSearchfield().getSubmitValue();
        Ext.util.History.add(encodeURIComponent(sv));

	store.removeAll();
	if(!sv)
	    return;

	store.setProxy({
	    type: "ajax",
	    url: "s",
	    extraParams: { "q": sv },
	    reader: {
		type: "json",
		root: "rows",
		totalProperty: "total"
            }
	});

	store.currentPage = 1;

	store.load({
	    params: {
		start: 0,    
		limit: 50
	    }, 

	    callback: function(records, operation, success) {
		if(success) {
		    if(store.getTotalCount() !== 0)
			results.getSelectionModel().select(0);

		} else {
		    Ext.Msg.alert("An error occurred...",
				  store.getProxy().getReader().rawData.error);
		}
	    }
	});
    },

    historysearch: function(s) {
        if(s)
	    s = decodeURIComponent(s);
	this.getSearchfield().setValue(s);
        this.click();
    }
});
