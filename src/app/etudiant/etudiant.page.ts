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
      dateNaissance: '25/07/2000',
      telephone: '54855978',
    },
    {
      nom: 'Ahlem',
      dateNaissance: '16/07/1999',
      telephone: '98658745',
    }, {
      nom: 'Manar',
      dateNaissance: '01/17/1996',
      telephone: '26111268',
    }, {
      nom: 'Fawzi',
      dateNaissance: '13/06/1999',
      telephone: '25789864',
    }, {
      nom: 'Khaldoun',
      dateNaissance: '08/01/1998',
      telephone: '26165498',
    }, {
      nom: 'Oussama',
      dateNaissance: '25/07/1995',
      telephone: '92874511',
    }, {
      nom: 'Lamia',
      dateNaissance: '19/09/1997',
      telephone: '46258976',
    }, {
      nom: 'Hadil',
      dateNaissance: '17/09/1998',
      telephone: '50140880',
    }, {
      nom: 'Moufida',
      dateNaissance: '15/17/1999',
      telephone: '26165498',
    }, {
      nom: 'Bargui',
      dateNaissance: '11/07/2001',
      telephone: '90870100',
    }, {
      nom: 'Amor',
      dateNaissance: '15/12/1999',
      telephone: '98757682',
    }, {
      nom: 'Imen',
      dateNaissance: '01/07/1999',
      telephone: '26165498',
    }, {
      nom: 'Sirine',
      dateNaissance: '21/07/2003',
      telephone: '93685472',
    }, {
      nom: 'Rabab',
      dateNaissance: '05/09/1999',
      telephone: '21475498',
    }, {
      nom: 'Abdou',
      dateNaissance: '25/07/1999',
      telephone: '9875498',
    }, {
      nom: 'Firas',
      dateNaissance: '14/09/2003',
      telephone: '5247988',
    }, {
      nom: 'Houssem',
      dateNaissance: '25/07/1998',
      telephone: '56165798',
    }, {
      nom: 'Fadi',
      dateNaissance: '05/11/1999',
      telephone: '96754498',
    },
  ];

  constructor() {}
}

