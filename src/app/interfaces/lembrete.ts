type prioridadeLembrete = 'BAIXA' | 'MEDIA' | 'ALTA';
export interface Lembrete {
 id: number;
 texto: string;
 prioridade: prioridadeLembrete;
}
