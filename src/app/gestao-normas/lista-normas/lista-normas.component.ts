import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { take } from 'rxjs/operators';
import { Norma } from '../domain/norma.model';
import { NormaService } from '../norma.service';

@Component({
  selector: 'app-lista-normas',
  templateUrl: './lista-normas.component.html',
  styleUrls: ['./lista-normas.component.css']
})
export class ListaNormasComponent implements OnInit {

  normas: Array<Norma> = [];
  normasVisiveis: Array<Norma> = [];

  totalRecords: number;

  cols: any[];

  loading: boolean;
  
  constructor(private normaService: NormaService) { }

  ngOnInit(): void {
    this.loadNormas();
  }

  loadNormas() {
    this.loading = true;

    this.normaService.findAll()
      .pipe(take(1))
      .subscribe(normas => {
        this.normas = normas;
        this.normasVisiveis = normas.slice(0, 5);
        this.totalRecords = normas.length;
        this.loading = false;
      });
  }

  onTableEvent(event: LazyLoadEvent) {
    this.loading = true;

    const registroInicial = event.first;
    this.normasVisiveis = this.normas.slice(registroInicial, registroInicial + 5);

    this.loading = false;
  }
}
