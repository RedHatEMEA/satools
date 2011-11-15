Ext.define("Search.view.Results", {
    alias: "widget.results",
    extend: "Ext.grid.Panel",
    store: "Results",

    dockedItems: [{
        xtype: "pagingtoolbar",
        store: "Results",
        dock: "bottom",
	itemId: "mypagingtoolbar",
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
	width: 120,
	sortable: false,
	renderer: function(value) {
	    var pad2 = function(number) {
		var s = "00" + number;
		return s.substr(s.length - 2);
	    };

	    var d = new Date(value * 1000);
	    return pad2(d.getDate()) + "/" + pad2(1 + d.getMonth()) + "/" +
		(1900 + d.getYear()) + " " + pad2(d.getHours()) + ":" +
		pad2(d.getMinutes()) + ":" + pad2(d.getSeconds());
	}
    }, {
	header: "Size",
	dataIndex: "len",
	width: 50,
	sortable: false,
	renderer: function(value) {
	    var fmt = function(number) {
		if(number < 10) {
		    number = Math.floor(number * 10) / 10;
		    if(Math.floor(number) == number) {
			return number + ".0";
		    } else {
			return number;
		    }
		} else {
		    return Math.floor(number);
		}
	    };

	    if(value < 1000) {
		return value + "B";
	    } else if(value < 1000000) {
		return fmt(value / 1000) + "KB";
	    } else if(value < 1000000000) {
		return fmt(value / 1000000) + "MB";
	    }
	    return value;
	}
    }]
});
