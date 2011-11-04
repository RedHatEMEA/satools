Ext.define("Search.view.Results", {
    alias: "widget.results",
    extend: "Ext.grid.Panel",
    store: "Results",

    dockedItems: [{
        xtype: "pagingtoolbar",
        store: "Results",
        dock: "bottom",
        displayInfo: true
    }],

    columns: [{
	header: "Message",
	xtype: "templatecolumn",
	tpl: "<b>{subject}</b><br/>{from}",
	flex: 1,
	sortable: false
    }, {
        header: "Date",
	dataIndex: "date",
	width: 150,
	sortable: false,
	renderer: function(value) {
	    var pad2 = function(number) {
		var s = "00" + number;
		return s.substr(s.length - 2);
	    }

	    var d = new Date(value * 1000);
	    return pad2(d.getDate()) + "/" + pad2(1 + d.getMonth()) + "/" +
		(1900 + d.getYear()) + " " + pad2(d.getHours()) + ":" +
		pad2(d.getMinutes()) + ":" + pad2(d.getSeconds());
	}
    }]
});
