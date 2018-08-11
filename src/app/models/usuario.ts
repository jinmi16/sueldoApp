export class Usuario {
  constructor(
    public _id: string,
    public nikname: string,
    public password: string,
    public nombre: string,
    public apellido: string,
    public email: string,
    public telefono: string,
    public edad: string,
    public rol: string

  ) { }
}
