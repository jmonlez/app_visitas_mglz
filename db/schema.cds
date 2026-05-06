namespace visitas;

entity Visitas {
    key ID         : UUID;
    
    fecha          : Date;
    hora           : Time;

    latitud        : Decimal(9,6);
    longitud       : Decimal(9,6);

    empresa        : String(100);
    direccion      : String(200);
    contacto       : String(100);
    visitante      : String(100);
    observaciones  : String(500);

    // createdBy : String;
}