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
	this.search(this.getSearchfield().getSubmitValue());
    },

    clear: function() {
	var s = this.getSlidebrowser().getStore();
	s.removeAll();
    },

    search: function(s) {
        Ext.util.History.add(encodeURIComponent(s));
    },

    historysearch: function(s) {
	if(s)
	    s = decodeURIComponent(s);

	this.clear();
	this.getSearchfield().setValue(s);

	if(!s)
	    return;

	var store = this.getSlidebrowser().getStore();
	store.setProxy({
	    type: "ajax",
	    url: "s/" + s.replace(/#/g, "%23").replace(/\?/g, "%3F"),
	    listeners: {
		exception: function(_this, response, operation, options) {
		    Ext.Msg.alert(_["title"], "Invalid search text");
		}
	    }
	});
	store.load({
	    scope: this,
 	    callback: function(records, operation, success) {
		if(success)
		    this.getSlidebrowser().el.scrollTo("top", 0);
	    }		    
	});
    }
});
