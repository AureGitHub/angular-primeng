import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemHeroService implements InMemoryDbService {
  createDb() {

    const perfil  = [
      {id : 1, descripcion: 'admin'},
      {id : 2, descripcion: 'jugador'}
    ];
    const posicion  = [
      {id : 1, descripcion: 'Drive'},
      {id : 2, descripcion: 'Reves'}
    ];
    const users = [
      {'id' : 1 , "idperfil": 1 , "email" : "admin@a.es",  "password": "123456", "nombre" : "nombre1","idposicion" : 1,"token" : "no112144344545mbre1"},
      {"id" : 2 , "idperfil": 2 , "email" : "noadmin@a.es",  "password": "123456","nombre" : "nombre2","idposicion" : 2,"token" : "no112144344545mbre1"},
      {"id" : 3 , "idperfil": 2 , "email" : "a@a.es",  "password": "123456","nombre" : "jose aurelio de sande","idposicion" : 2,"token" : "no112144344545mbre1"}

    ];




    return {users, posicion,perfil};
  }
}
