import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  items: MenuItem[];

    ngOnInit() {
      this.items = [
          {
              label:'Gestao normas',
              icon:'pi pi-book',
              items:[
                  {
                      label:'Cadastrar/Alterar norma',
                      icon:'pi pi-fw pi-bookmark',
                  },
                  {
                    separator:true
                  },
                  {
                      label:'Listar normas',
                      icon:'pi pi-bars',
                      routerLink: ['/lista-normas']
                  },
                  {
                      separator:true
                  },
                  {
                    label:'Histórico de mudanças',
                    icon:'pi pi-table'
                },
              ]
          },
          {
            label:'Consultorias e Assessorias',
            icon:'pi pi-bookmark',
            disabled: true
          },
          {
            label:'Gestão do Processo Industrial',
            icon:'pi pi-chart-bar',
            disabled: true
          },
          {
              label:'Integracoes',
              icon:'pi pi-fw pi-wifi',
              items:[
                {
                  label:'Legados',
                  icon:'pi pi-fw pi-tablet',
                  disabled: true
                },
                  {
                      label:'Webhook`s',
                      icon:'pi pi-fw pi-wifi',
                      disabled: true
                  },
             ]
          },
          {
              label:'Desconectar',
              icon:'pi pi-fw pi-power-off'
          }
      ];
    }
}
