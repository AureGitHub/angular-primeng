import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemHeroService implements InMemoryDbService {
  createDb() {
    const users = [
      {'id' : 1 , "idperfil": 1 , "email" : "admin@a.es",  "password": "123456", "nombre" : "nombre1","idposicion" : 1,"token" : "no112144344545mbre1"},
      {"id" : 2 , "idperfil": 2 , "email" : "noadmin@a.es",  "password": "123456","nombre" : "nombre2","idposicion" : 2,"token" : "no112144344545mbre1"},
      {"id" : 3 , "idperfil": 2 , "email" : "a@a.es",  "password": "123456","nombre" : "jose aurelio de sande","idposicion" : 2,"token" : "no112144344545mbre1"}

    ];

    const cars = [
      {"brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff"},
      {"brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345"},
      {"brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr"},
      {"brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh"},
      {"brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34"},
      {"brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj"},
      {"brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr"},
      {"brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34"},
      {"brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5"},
      {"brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s"}
  ]

    
    return {users, cars};
  }
}
