import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matiere',
  templateUrl: './matiere.page.html',
  styleUrls: ['./matiere.page.scss'],
})

export class MatierePage {
  matieres = [
    {
      nom: 'virtualisation et cloud',
      module: 'base de données',
      coefficient: '1.5',
    },
    {
      nom: 'Anglais',
      module: 'option',
      coefficient: '1',
    },
    {
      nom: 'développement mobile',
      module: 'développement',
      coefficient: '1.5',
    },
    {
      nom: 'architechture SOA',
      module: 'service web',
      coefficient: '2',
    },
    {
      nom: 'technique de sécurité',
      module: 'sécurité',
      coefficient: '1.5',
    },
    {
      nom: 'Entrepreneuriat',
      module: 'option',
      coefficient: '1',
    },
    {
      nom: 'dév de systéme répatie',
      module: 'développement',
      coefficient: '1.5',
    },
    {
      nom: 'technique de compilation',
      module: 'compilation',
      coefficient: '1.5',
    },
  ];

  constructor() {}
}

