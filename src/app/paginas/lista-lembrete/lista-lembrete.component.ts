import { Component, OnInit, ViewChild } from '@angular/core';
import { ErrorMsgComponent } from '../../compartilhado/error-msg/error-msg.component';
import { LembreteService } from 'src/app/services/lembrete.service';
import { Lembrete } from 'src/app/interfaces/lembrete';

@Component({
  selector: 'app-lista-lembrete',
  templateUrl: './lista-lembrete.component.html',
  styleUrls: ['./lista-lembrete.component.css']
})
export class ListaLembreteComponent implements OnInit {
  public lembretes: Lembrete[];
  
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  constructor(private lembreteService: LembreteService) { }

  ngOnInit() {
    this.getListaLembretes();
  }

  getListaLembretes() {
    this.lembreteService.getListaLembretes()
      .subscribe((lembretes: Lembrete[]) => {
        this.lembretes = lembretes;
      }, () => { this.errorMsgComponent.setError('Falha ao buscar lembretes.'); });
  }

  deletaLembrete(id: number) {
    this.lembreteService.deletaLembrete(id)
      .subscribe(() => {
        this.getListaLembretes();
      }, () => { this.errorMsgComponent.setError('Falha ao deletar lembrete.'); });
  }

  existemLembretes(): boolean {
    return this.lembretes && this.lembretes.length > 0;
  }

}
