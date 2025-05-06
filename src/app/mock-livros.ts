import { Livro } from "./componentes/livro/livro"

export const livros: Livro[] = [
    {
        titulo: "The Witcher",
    autoria: "Andrzej Sapkowski",
    favorito: false,
    genero: {
        id: 'fantasia',
        value:'Fantasia',
        livros: []    
    },
    imagem:  "https://www.bing.com/th?id=OPHS.2RTj7g8CvsmP8A474C474&o=5&pid=21.1&w=160&h=240&qlt=100&dpr=1&c=8&pcl=f5f5f5"
    },
    {
      titulo: "Senhor dos Anéis",
      autoria: "J. R. R. Tolkien",
      favorito: false,
      genero: {
          id: 'fantasia',
          value:'Fantasia',
          livros: []    
      },
      imagem:  "https://www.bing.com/th?id=OPHS.OJT9YUeAOHB9tA474C474&o=5&pid=21.1&w=160&h=239&qlt=100&dpr=1&c=8&pcl=f5f5f5"
  },
    {
        titulo: 'As Ondas',
        autoria: 'Virginia Woolf',
        imagem: 'https://books.google.com.br/books/publisher/content?id=K88vEAAAQBAJ&hl=pt-BR&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U17ilHei2sAJISd9dgpqzbnbgyUBw&w=1280',
        genero: { id: 'ficcao', value: 'Ficção', livros: []     },
        favorito: false,    
      },
      {
        titulo: 'Dom Casmurro',
        autoria: 'Machado de Assis',
        imagem: 'https://www.bing.com/th/id/OSK.05437dbb06b444f7711a10fe8f52f197?w=102&h=102&c=7&o=6&pid=SANGAM',
        genero: { id: 'classico', value: 'Clássico', livros: []     },
        favorito: false
      }
]