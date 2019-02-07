export class Resource {
  public id: number;
  public available: boolean;
  public location: string;

  public Resource(id: number, available: boolean, location: string) {
    this.id = id;
    this.available = available;
    this.location = location;
  }
}
