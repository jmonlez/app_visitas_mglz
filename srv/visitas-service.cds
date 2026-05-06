using { visitas as db } from '../db/schema';

// @requires: 'authenticated-user'
service VisitasService {
    entity Visitas as projection on db.Visitas;
}
