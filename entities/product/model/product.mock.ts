import type { Product } from "./product.type"

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Notebook Ultrabook Pro",
    description: "Notebook leve com processador Intel Core i7, 16GB RAM e SSD 512GB. Ideal para trabalho e criação de conteúdo.",
    price: 6499.99,
  },
  {
    id: 2,
    name: "Monitor 27\" 4K",
    description: "Monitor IPS 4K com taxa de atualização de 144Hz, cobertura de 99% do espaço de cor sRGB e suporte VESA.",
    price: 2899.0,
  },
  {
    id: 3,
    name: "Teclado Mecânico TKL",
    description: "Teclado mecânico compacto sem teclado numérico, switches Cherry MX Red, iluminação RGB por tecla.",
    price: 459.9,
  },
  {
    id: 4,
    name: "Mouse Gamer Ergonômico",
    description: "Mouse óptico com sensor de 25.000 DPI, 7 botões programáveis e design ergonômico para sessões longas.",
    price: 319.5,
  },
  {
    id: 5,
    name: "Headset Sem Fio Premium",
    description: "Fone de ouvido over-ear com cancelamento de ruído ativo, bateria de 30 horas e microfone destacável.",
    price: 799.0,
  },
  {
    id: 6,
    name: "Cadeira Gamer Ergonômica",
    description: "Cadeira com apoio lombar ajustável, braços 4D, altura regulável e tecido respirável. Suporta até 150kg.",
    price: 1899.0,
  },
]
