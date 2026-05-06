/* module.exports = (srv) => {

    srv.before('CREATE', 'Visitas', (req) => {

        // usuario logado
        const user = req.user.id;

        // lo añadimos automáticamente
        req.data.createdBy = user;
    });

}; */