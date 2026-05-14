namespace visitas;

entity Visitas {

    key ID         : UUID;

    fecha          : Date;

    horaInicio     : Time;
    horaFin        : Time;

    latitud        : Decimal(9,6);
    longitud       : Decimal(9,6);

    empresa        : String(100);
    direccion      : String(200);

    contacto       : String(100);
    email          : String(150);

    responsable    : String(100);
    empleado       : String(100);

    observaciones  : String(500);

    createdBy      : String(255);

}