const cds = require('@sap/cds');

module.exports = cds.service.impl(function () {

    const { Visitas } = this.entities;

    this.before('CREATE', Visitas, (req) => {

        req.data.createdBy = req.user?.id || 'local-user';

    });

});