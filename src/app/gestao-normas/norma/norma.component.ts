import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Norma } from 'src/app/gestao-normas/domain/norma.model';
import { NormaService } from 'src/app/gestao-normas/norma.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-norma',
  templateUrl: './norma.component.html',
  styleUrls: ['./norma.component.css']
})
export class NormaComponent implements OnInit {
  

  norma: Norma;

  constructor(private normaService: NormaService) {
  }

  ngOnInit(): void {
    const norma: Norma = {
      id: null,
      codigo: '1',
      nome: 'test nome' + Math.floor((Math.random() * 10) + 1),
      descricaoCompleta: 'test2' + Math.floor((Math.random() * 100) + 1)
    };
    this.normaService.save(norma).subscribe(normaSalva => console.log);
  }

}
