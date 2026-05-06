sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("com.visitas.visitasui.controller.Visitas", {

        onInit: function () {},

        onGetLocation: function () {
            navigator.geolocation.getCurrentPosition((pos) => {
                this._lat = pos.coords.latitude;
                this._lon = pos.coords.longitude;

                this.byId("txtGPS").setText(
                    "📍 GPS: " + this._lat + ", " + this._lon
                );

                this.byId("txtGPS").addStyleClass("gpsOk");

                MessageToast.show("Ubicación registrada correctamente");
            });
        },

        onSetDateTime: function () {
            const now = new Date();

            this._fecha = now.toISOString().split("T")[0];
            this._hora = now.toTimeString().split(" ")[0];

            this.byId("txtFecha").setText("📅 Fecha: " + this._fecha);
            this.byId("txtHora").setText("⏰ Hora: " + this._hora);

            this.byId("txtFecha").addStyleClass("okText");
            this.byId("txtHora").addStyleClass("okText");

            MessageToast.show("Fecha y hora registradas correctamente");
        },

        onSave: function () {

            const oModel = this.getView().getModel();

            const data = {
                empresa: this.byId("empresa").getValue(),
                direccion: this.byId("direccion").getValue(),
                contacto: this.byId("contacto").getValue(),
                visitante: this.byId("visitante").getValue(),
                observaciones: this.byId("observaciones").getValue(),

                fecha: this._fecha,
                hora: this._hora,
                latitud: this._lat,
                longitud: this._lon
            };

            
            oModel.create("/Visitas", data, {
                success: () => {
                    MessageToast.show("Visita guardada ✔");
                },
                error: () => {
                    MessageToast.show("Error al guardar ❌");
                }
            });
            
        }
    });
});