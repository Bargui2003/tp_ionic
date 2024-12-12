import { Component } from '@angular/core';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.page.html',
  styleUrls: ['./etudiant.page.scss'],
})
export class EtudiantPage {
  etudiants = [
    {
      nom: 'Dhia',
      dateNaissance: '19/09/2003',
      telephone: '12345678',
    },
    {
      nom: 'Ahmed',
      dateNaissance: '20/06/1997',
      telephone: '98765431',
    },
    {
      nom: 'Mohamed',
      dateNaissance: '10/01/1996',
      telephone: '97678913',
    },
    {
      nom: 'Imed',
      dateNaissance: '05/11/1995',
      telephone: '54912345',
    },
    {
      nom: 'Rania',
      dateNaissance: '25/07/1999',
      telephone: '26165498',
    },
  ];

  constructor() {}
}

