sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("smartform.controller.View1", {
			onInit: function () {

			},
			onclick:function(){
				sap.m.MessageToast.show("welcome")
			}
		});
	});
