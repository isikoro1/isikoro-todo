export class Task {
  id: number;
  title: string;
  isDone: boolean;

  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
    this.isDone = false;
  }

  toggleDone() {
    this.isDone = !this.isDone;
  }
}
