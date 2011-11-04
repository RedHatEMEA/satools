Ext.define("Search.view.Message", {
    alias: "widget.message",
    extend: "Ext.view.View",
    store: "Message",

    tpl: new Ext.XTemplate(
	"<tpl for=\".\">",
	"<pre>",
	"<div class=\"email-header\"><b>",
	"From: {from}\n",
	"To: {to}\n",
	"Subject: {subject}\n",
	"List: {list}\n",
	"Date: {[this.daterender(values.date)]}",
	"</b></div>\n",
	"{body}",
	"</pre>",
	"</tpl>",
	{
	    compiled: true,
	    daterender: function(value) {
		var pad2 = function(number) {
		    var s = "00" + number;
		    return s.substr(s.length - 2);
		}
		
		var d = new Date(value * 1000);
		return pad2(d.getDate()) + "/" + pad2(1 + d.getMonth()) + "/" +
		    (1900 + d.getYear()) + " " + pad2(d.getHours()) + ":" +
		    pad2(d.getMinutes()) + ":" + pad2(d.getSeconds());
	    }
	}
    ),

    itemSelector: "",
});
