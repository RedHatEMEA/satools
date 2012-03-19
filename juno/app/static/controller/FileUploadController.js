Ext.define("Juno.controller.FileUploadController", {
    extend: "Ext.app.Controller",

    views: [
	"FileUploadView"
    ],

    refs: [{
	ref: "uploadform",
	selector: "#uploadform"
    }, {
	ref: "fileupload",
	selector: "fileupload"
    }, {
	ref: "treepanel",
	selector: "treepanel"
    }],

    init: function() {
        this.control({
            "#uploadbutton": {
		click: this.click
	    }
	});
    },

    click: function() {
	var form = this.getUploadform().getForm();
	var store = this.getTreepanel().getStore();
	var win = this.getFileupload();

	if(form.isValid()) {
	    form.submit({
		waitTitle: _["title"],
		waitMsg: "Uploading and importing presentation...",
		success: function(form, action) {
		    store.load({
			node: win.rec
		    });
		    win.close();
		},
		failure: function(form, action) {
		    Ext.Msg.alert(_["title"], "Upload failed");
		    win.close();
		}
	    });
	}
    }
});