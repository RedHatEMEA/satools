Ext.require("Ext.container.Viewport");
Ext.require("Ext.data.TreeStore");
Ext.require("Ext.form.Label");
Ext.require("Ext.form.Panel");
Ext.require("Ext.layout.container.Absolute");
Ext.require("Ext.layout.container.Accordion");
Ext.require("Ext.layout.container.Border");
Ext.require("Ext.tree.Panel");
Ext.require("Ext.util.History");
Ext.require("Ext.Img");

var _ = { title: "SA tools presentation search" };

Ext.application({
    name: "Juno",
    appFolder: "static",

    controllers: [
	"SearchController",
	"SlidesController",
	"FilesystemController"
    ],

    launch: function() {
        Ext.create("Ext.container.Viewport", {
	    items: [{
		xtype: "filesystem",
		region: "west",
		title: "Filesystem",
		collapsible: true,
		split: true,
		width: "21%"
	    }, {
		items: [{
		    xtype: "search",
		    region: "center"
		}, {
		    items: [{
			xtype: "presobrowser"
		    }],
		    region: "south",
		    title: "Presentation",
		    autoScroll: true,
		    collapsible: true,
		    height: 252,
		    split: true
		}],
		layout: "border",
		region: "center",
		border: false
	    }],
	    layout: {
		padding: 5,
		type: "border"
	    },
	    id: "myviewport"
        });

	Ext.util.History.init();
	var sc = this.getController("SearchController");
	Ext.util.History.on('change', sc.historysearch, sc);
	sc.historysearch(Ext.util.History.getToken());

	_Juno = this;
    }
});

// http://stackoverflow.com/questions/118693/how-do-you-dynamically-create-a-radio-button-in-javascript-that-works-in-all-brow#120372

var createElement = (function() {
    if(/*@cc_on @*//*@if (@_win32)!/*@end @*/false) {
	// IE

        // Translations for attribute names which IE would otherwise choke on
        var attrTranslations = { "class": "className",
				 "for": "htmlFor" };

        var setAttribute = function(element, attr, value) {
            if(attrTranslations.hasOwnProperty(attr)) {
                element[attrTranslations[attr]] = value;
            } else if(attr == "style") {
                element.style.cssText = value;
            } else {
                element.setAttribute(attr, value);
            }
        };

        return function(tagName, attributes) {
            attributes = attributes || {};

            // See http://channel9.msdn.com/Wiki/InternetExplorerProgrammingBugs
	    var element;
            if(attributes.hasOwnProperty("name") ||
               attributes.hasOwnProperty("checked") ||
               attributes.hasOwnProperty("multiple")) {
                var tagParts = ["<" + tagName];
                if(attributes.hasOwnProperty("name")) {
                    tagParts[tagParts.length] =
                        ' name="' + attributes.name + '"';
                    delete attributes.name;
                }
                if(attributes.hasOwnProperty("checked") &&
                   "" + attributes.checked == "true") {
                    tagParts[tagParts.length] = " checked";
                    delete attributes.checked;
                }
                if(attributes.hasOwnProperty("multiple") &&
                   "" + attributes.multiple == "true") {
                    tagParts[tagParts.length] = " multiple";
                    delete attributes.multiple;
                }
                tagParts[tagParts.length] = ">";

                element = document.createElement(tagParts.join(""));

            } else {
                element = document.createElement(tagName);
            }

            for(var attr in attributes) {
                if(attributes.hasOwnProperty(attr)) {
                    setAttribute(element, attr, attributes[attr]);
                }
            }

            return element;
        };

    } else {
	// All other browsers

        return function(tagName, attributes) {
            attributes = attributes || {};
            var element = document.createElement(tagName);
            for(var attr in attributes) {
                if(attributes.hasOwnProperty(attr)) {
                    element.setAttribute(attr, attributes[attr]);
                }
            }

            return element;
        };
    }
})();

// http://stackoverflow.com/questions/133925/javascript-post-request-like-a-form-submit

var postToURL = function(url, values) {
    values = values || {};

    var form = createElement("form", { action: url,
				       method: "POST",
				       style: "display: none" });
    for(var property in values) {
	var value = values[property];
	if(value instanceof Array) {
            for(var i = 0, l = value.length; i < l; i++) {
		form.appendChild(createElement("input", { type: "hidden",
							  name: property,
							  value: value[i] }));
            }
	} else {
            form.appendChild(createElement("input", { type: "hidden",
                                                     name: property,
                                                     value: value }));
	}
    }

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
};
