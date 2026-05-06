/*global QUnit*/

sap.ui.define([
	"com/visitas/visitasui/controller/Visitas.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Visitas Controller");

	QUnit.test("I should test the Visitas controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
