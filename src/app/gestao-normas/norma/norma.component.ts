import { HttpClient } from '@angular/common/http';
import { Component, createPlatform, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, take } from 'rxjs/operators';
import { Norma } from 'src/app/gestao-normas/domain/norma.model';
import { NormaService } from 'src/app/gestao-normas/norma.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-norma',
  templateUrl: './norma.component.html',
  styleUrls: ['./norma.component.css']
})
export class NormaComponent implements OnInit {
  
  normaId: number;

  normaFormGroup: FormGroup;
  loading: boolean;
  
  // normaFormGroup = new FormGroup({
  //   id: new FormControl(''),
  //   codigo: new FormControl(''),
  //   nome: new FormControl(''),
  //   descricaoCompleta: new FormControl('')
  // });

  constructor(
    private normaService: NormaService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.normaId = this.route.snapshot.params['id'];

    this.createForm();

    if (this.normaId) {
      this.loadNorma(this.normaId);
    }
  }

  onSubmit() {
    const norma: Norma = this.normaFormGroup.value;
    if (norma.id) {
      this.update(norma);
      return;
    }
    this.create(norma);
  }
  
  update(norma: Norma) {
    this.loading = true;

    this.normaService.update(norma.id, norma)
      .subscribe(result => {
        this.normaFormGroup.markAsPristine();
        this.messageService.add({severity:'success', summary:'Sucesso', detail:'Norma alterada com sucesso'});
      },
      error => {
        this.messageService.add({severity:'error', summary: 'Erro', detail: 'Detalhes do erro: ' + JSON.stringify(error) });
      });
    //   .then(release => {
    //     this.release = release;

    //     this.messageService.add({severity: 'success', summary: 'Success', detail: 'Release edited successful!'});
    //     this.setTitleUpdate();
    //   })
    //   .catch(error => this.errorHandlerService.handle(error));
    this.loading = false;
  }

  create(norma: Norma) {

    this.normaService.save(norma)
      .pipe(take(1))
      .subscribe(norma => {
        console.log(norma);
        this.normaFormGroup.markAsPristine();
        this.messageService.add({severity:'success', summary:'Sucesso', detail:'Norma criada com sucesso'});
      },
      error => {
        this.messageService.add({severity:'error', summary: 'Erro', detail: 'Detalhes do erro: ' + JSON.stringify(error) });
      });
  }

  private loadNorma(normaId: number) {
    this.normaService.findById(normaId)
      .pipe(take(1))
      .subscribe(normaResponse => {
        this.normaFormGroup.patchValue({
          id: normaResponse.id,
          codigo: normaResponse.codigo,
          nome: normaResponse.nome,
          descricaoCompleta: normaResponse.descricaoCompleta,
        });
      });
  }
  
  private createForm() {
    this.normaFormGroup = this.fb.group({
      id: ['', Validators.required],
      codigo: ['', Validators.required],
      nome: ['', Validators.required],
      descricaoCompleta: ['', Validators.required]
    });
  }
}
