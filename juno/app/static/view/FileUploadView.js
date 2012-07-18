Ext.define("Juno.view.FileUploadView", {
    alias: "widget.fileupload",
    extend: "Ext.window.Window",

    modal: true,
    layout: "fit",
    resizable: false,

    width: 400,
    height: 110,

    constructor: function() {
	this.callParent(arguments);
	this.populate();
	return this;
    },

    populate: function() {
	this.setTitle("Upload presentation to \"" + this.rec.data.text + "\"");
	this.add([{
	    xtype: "form",
	    layout: "absolute",
	    bodyPadding: 10,
	    border: 0,
	    itemId: "uploadform",
	    url: "upload",
	    timeout: 500,
	    items: [{
		xtype: "filefield",
		name: "myfile",
		fieldLabel: "Presentation",
		labelWidth: 80,
		allowBlank: false,
		anchor: "100%"
	    }, {
		xtype: "hidden",
		name: "path",
		value: this.rec.data.id
	    }, {
		xtype: "button",
		text: "Upload",
		anchor: "10",
		itemId: "uploadbutton",
		x: 300,
		y: 40
	    }]
	}]);
    }
});
