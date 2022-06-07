import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contador: number = 1
  simbolos: string[] = ['+', '-'] // declarando propriedades

  incrementar(): void {
    this.contador++
  }

  decrementar(): void{
    this.contador--
  }

  adicionarValor(evento: Event): void{
  }

}
