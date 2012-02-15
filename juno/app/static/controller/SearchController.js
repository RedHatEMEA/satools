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
	    url: "../search/" + this.getSearchfield().getSubmitValue()
	});
	s.load();
    }
});