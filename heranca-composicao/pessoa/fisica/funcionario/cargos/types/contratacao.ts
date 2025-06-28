import { Funcionario } from "../..";

export interface IContratacao {
    admitir(funcionario: Funcionario): void;
    demitir(funcionario: Funcionario): void;
}