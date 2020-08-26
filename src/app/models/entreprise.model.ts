export class Entreprise {
  public description;

  constructor(public nom: string,
              private mail: string,
              private siret: string,
              public dirigeant: string) {}

  getMail() {
    return this.mail;
  }

  getSiret() {
    return this.siret;
  }

  getDescription() {
    return this.description;
  }

  setDescription(description: string) {
    this.description = description;
  }

}
