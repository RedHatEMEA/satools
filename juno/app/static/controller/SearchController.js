Ext.define("Juno.controller.SearchController", {
    extend: "Ext.app.Controller",

    views: [
	"SearchView"
    ],

    refs: [{
	ref: "searchfield",
	selector: "#searchfield"
    }, {
	ref: "slidebrowser",
	selector: "slidebrowser"
    }],

    init: function() {
        this.control({
            "#searchbutton": {
		click: this.click
            },
	    "#searchfield": {
		render: this.render,
		specialkey: this.specialkey
	    }
        });
    },

    render: function(_this, options) {
	_this.focus();
    },

    specialkey: function(_this, e, options) {
	if(e.getKey() == e.ENTER)
            this.click(_this, e, options);
    },

    click: function() {
	var s = this.getSlidebrowser().getStore();
	s.setProxy({
	    type: "ajax",
	    url: "../s/" + this.getSearchfield().getSubmitValue(),
	    listeners: {
		exception: function(_this, response, operation, options) {
		    s.removeAll();
		    Ext.Msg.alert(_["title"], "Invalid search text");
		}
	    }
	});
	s.load({
	    scope: this,
 	    callback: function(records, operation, success) {
		if(success)
		    this.getSlidebrowser().el.scrollTo("top", 0);
	    }		    
	});
    }
});
