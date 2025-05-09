import { Component, OnInit } from '@angular/core';
import { GeneroLiterario, Livro } from '../livro/livro';
import { livros } from '../../mock-livros';
import { GeneroLiterarioComponent } from '../genero-literario/genero-literario.component';


@Component({
  selector: 'app-lista-livros',
  imports: [GeneroLiterarioComponent],
  templateUrl: './lista-livros.component.html',
  styleUrl: './lista-livros.component.css'
})
export class ListaLivrosComponent implements OnInit{
  generos: GeneroLiterario[] = []
  livrosPorGenero: Map<string, Livro[]> = new Map()

  ngOnInit() {
    this.livrosPorGenero = new Map()

    livros.forEach((livro) => {
     const generoId = livro.genero.id
     if(!this.livrosPorGenero.has(generoId)) {
      this.livrosPorGenero.set(generoId, [])
     }
     this.livrosPorGenero.get(generoId)?.push(livro)
    });

    this.generos = [
      {
        id: 'fantasia',
        value: "Fantasia",
        livros: this.livrosPorGenero.get("fantasia") ?? []
      },
      {
        id: 'romance',
        value: "Romance",
        livros: this.livrosPorGenero.get("romance") ?? []
      },
      {
        id: 'mistério',
        value: "Mistério",
        livros: this.livrosPorGenero.get("misterio") ?? []
      },
      {
        id: 'classico',
        value: "Classico",
        livros: this.livrosPorGenero.get("classico") ?? []
      },
      {
        id: 'ficcao',
        value: "Ficção",
        livros: this.livrosPorGenero.get("ficcao") ?? []
      }
    ]

    console.log(this.livrosPorGenero)
  }
}
