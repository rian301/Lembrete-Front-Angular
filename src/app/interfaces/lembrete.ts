type prioridade = 'BAIXA' | 'MEDIA' | 'ALTA';
type fezOs = 'SIM' | 'NAO';
export interface Lembrete {
 id: number;
 texto: string;
 arquivado: boolean;
 prioridade: prioridade;
 modificado: number;
 fezOs: fezOs;
}
