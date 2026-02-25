// src/Components/Portifolio/Tattoos.ts

// Suas importações que você já fez:
import anjoImg from '../../assets/anjo.jpg';
import aguiaImg from '../../assets/aguia.jpg';
import leaoImg from '../../assets/leao.jpg';
import zeusImg from '../../assets/zeus.jpg';
import tigreImg from '../../assets/tigre.jpg';
import rapperImg from '../../assets/rapper.jpg';
import indioImg from '../../assets/indio.jpg';
import santaImg from '../../assets/santa.jpg';

export interface Tattoo {
  id: number;
  image: string;
  category: string;
  title: string;
}

export const tattoos: Tattoo[] = [
  { 
    id: 1, 
    image: anjoImg, 
    category: 'Realismo Sombrio', 
    title: 'Anjo Decaído' 
  },
  { 
    id: 2, 
    image: aguiaImg, 
    category: 'Black & Grey', 
    title: 'Soberania' 
  },
  { 
    id: 3, 
    image: leaoImg, 
    category: 'Realismo', 
    title: 'Leão de Judá' 
  },
  { 
    id: 4, 
    image: zeusImg, 
    category: 'Mitologia', 
    title: 'Poder de Zeus' 
  },
  { 
    id: 5, 
    image: tigreImg, 
    category: 'Realismo Estético', 
    title: 'Olhar Predador' 
  },
  { 
    id: 6, 
    image: rapperImg, 
    category: 'Portrait', 
    title: 'Cultura Hip Hop' 
  },
  { 
    id: 7, 
    image: indioImg, 
    category: 'Cultura & Arte', 
    title: 'Guerreiro Nativo' 
  },
  { 
    id: 8, 
    image: santaImg, 
    category: 'Religioso', 
    title: 'Devoção e Fé' 
  }
];