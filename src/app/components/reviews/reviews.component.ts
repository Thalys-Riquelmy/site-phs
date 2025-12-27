import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

interface Review {
  name: string;
  comment: string;
  rating: number;
  date: string;
}

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent {
  reviews: Review[] = [
    { 
      name: 'João Silva', 
      comment: 'Excelente qualidade nas impressões 3D! O produto final superou minhas expectativas. Profissionalismo e atenção aos detalhes em cada etapa do processo.', 
      rating: 5,
      date: '15 de Janeiro, 2025'
    },
    { 
      name: 'Maria Santos', 
      comment: 'Contratei o serviço de gravação com drone para um evento e ficou incrível! Imagens de alta qualidade e entrega super rápida. Recomendo muito!', 
      rating: 5,
      date: '10 de Janeiro, 2025'
    },
    { 
      name: 'Pedro Oliveira', 
      comment: 'Serviço de mapeamento aéreo muito profissional. Os relatórios foram detalhados e me ajudaram muito no planejamento da minha propriedade rural.', 
      rating: 5,
      date: '5 de Janeiro, 2025'
    },
    { 
      name: 'Ana Costa', 
      comment: 'Atendimento excepcional e produtos de alta qualidade. A equipe é muito prestativa e sempre disponível para esclarecer dúvidas.', 
      rating: 5,
      date: '28 de Dezembro, 2024'
    },
    { 
      name: 'Carlos Mendes', 
      comment: 'Fiquei muito satisfeito com a impressão 3D do meu protótipo. O acabamento ficou perfeito e o prazo foi cumprido. Vou contratar novamente!', 
      rating: 5,
      date: '20 de Dezembro, 2024'
    },
    { 
      name: 'Juliana Ferreira', 
      comment: 'Gravação aérea de excelente qualidade para nosso projeto arquitetônico. As imagens ficaram espetaculares e ajudaram muito na apresentação.', 
      rating: 4,
      date: '15 de Dezembro, 2024'
    },
    { 
      name: 'Roberto Alves', 
      comment: 'Serviço de mapeamento aéreo superou todas as expectativas! Os dados georreferenciados foram fundamentais para o planejamento do meu projeto agrícola. Equipe muito competente!', 
      rating: 5,
      date: '12 de Dezembro, 2024'
    },
    { 
      name: 'Fernanda Lima', 
      comment: 'Impressão 3D de peças personalizadas para minha empresa. Qualidade impecável, acabamento perfeito e entrega dentro do prazo. Já encomendei mais peças!', 
      rating: 5,
      date: '8 de Dezembro, 2024'
    },
    { 
      name: 'Marcos Rodrigues', 
      comment: 'Gravação com drone do meu casamento foi um presente incrível! As imagens aéreas ficaram lindas e capturaram momentos únicos. Recomendo de olhos fechados!', 
      rating: 5,
      date: '3 de Dezembro, 2024'
    },
    { 
      name: 'Patrícia Souza', 
      comment: 'Contratei o mapeamento aéreo para análise de solo e fiquei impressionada com a precisão dos dados. Relatório completo e detalhado. Profissionais excelentes!', 
      rating: 5,
      date: '28 de Novembro, 2024'
    },
    { 
      name: 'Ricardo Barbosa', 
      comment: 'Impressão 3D de protótipos para desenvolvimento de produto. A qualidade e precisão das peças foram essenciais para validar nosso design. Serviço de primeira!', 
      rating: 5,
      date: '22 de Novembro, 2024'
    },
    { 
      name: 'Luciana Martins', 
      comment: 'Gravação aérea para documentário sobre nossa cidade. O trabalho foi excepcional, com ângulos únicos e imagens de alta definição. Equipe criativa e profissional!', 
      rating: 5,
      date: '18 de Novembro, 2024'
    },
    { 
      name: 'Felipe Castro', 
      comment: 'Mapeamento aéreo da minha propriedade rural ajudou muito no planejamento de plantio. Dados precisos e relatório bem elaborado. Ótimo custo-benefício!', 
      rating: 4,
      date: '14 de Novembro, 2024'
    },
    { 
      name: 'Camila Rocha', 
      comment: 'Impressão 3D de peças decorativas personalizadas. Ficaram exatamente como eu imaginei! Acabamento perfeito e atenção aos detalhes. Adorei o resultado final!', 
      rating: 5,
      date: '10 de Novembro, 2024'
    },
    { 
      name: 'Gustavo Nunes', 
      comment: 'Gravação com drone para campanha publicitária da minha empresa. As imagens aéreas deram um toque profissional incrível ao vídeo. Superou expectativas!', 
      rating: 5,
      date: '5 de Novembro, 2024'
    },
    { 
      name: 'Isabela Cardoso', 
      comment: 'Serviço completo de impressão 3D e gravação aérea para meu projeto. A equipe foi muito atenciosa desde o primeiro contato até a entrega final. Recomendo!', 
      rating: 5,
      date: '1 de Novembro, 2024'
    },
    { 
      name: 'Thiago Pereira', 
      comment: 'Mapeamento aéreo para análise de infraestrutura. Os dados coletados foram fundamentais para o relatório técnico. Profissionalismo e pontualidade em todos os aspectos.', 
      rating: 5,
      date: '28 de Outubro, 2024'
    },
    { 
      name: 'Renata Dias', 
      comment: 'Impressão 3D de modelos arquitetônicos ficou perfeita! Detalhes nítidos e precisão impressionante. O cliente ficou encantado com o resultado. Parabéns pelo trabalho!', 
      rating: 5,
      date: '24 de Outubro, 2024'
    },
    { 
      name: 'Bruno Ferreira', 
      comment: 'Gravação aérea de evento corporativo foi um sucesso! As imagens ficaram profissionais e modernas. Equipe ágil e com ótima comunicação durante todo o processo.', 
      rating: 4,
      date: '20 de Outubro, 2024'
    },
    { 
      name: 'Amanda Costa', 
      comment: 'Contratei impressão 3D e mapeamento aéreo para meu projeto. Ambos os serviços foram executados com excelência. A PHS é referência em tecnologia e qualidade!', 
      rating: 5,
      date: '16 de Outubro, 2024'
    }
  ];
}
