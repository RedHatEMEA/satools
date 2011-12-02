Ext.define("Juno.controller.SearchController", {
    extend: "Ext.app.Controller",

    views: [
	"SearchView"
    ],

    refs: [
	{
	    ref: "searchfield",
	    selector: "#searchfield"
	}, {
	    ref: "slidebrowser",
	    selector: "slidebrowser"
	}
    ],

    init: function() {
        this.control({
            "#searchbutton": {
		click: this.click
            }
        });
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