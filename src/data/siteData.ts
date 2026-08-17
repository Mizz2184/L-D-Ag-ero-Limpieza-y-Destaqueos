import { ServiceItem, BeforeAfterProject, Testimonial, BlogPost, FaqItem } from '../types';

export const COMPANY_INFO = {
  name: 'L&D Agüero',
  tagline: 'Limpieza de Tanques - Destaqueos',
  headline: '¿Tanque lleno o tubería tapada? Nosotros lo solucionamos rápido',
  subheadline: 'Servicio profesional, rápido y garantizado las 24 horas en San José y toda Costa Rica. Expertos en succión de tanques sépticos, destaqueos mecánicos y de alta presión, drenajes y fontanería integral.',
  phone: '+506 7096 2848',
  phoneDisplay: '+506 7096 2848',
  phoneRaw: '50670962848',
  email: 'jesusaguero920@gmail.com',
  location: 'Costa Rica',
  coverageAreas: 'San José (Hatillo, Cristo Rey, Barrio Corazón de Jesús, Santa Ana, Escazú), Heredia, Alajuela, Cartago y todo el GAM',
  centralOffice: 'Costa Rica (San José y Gran Área Metropolitana)',
  creator: 'Jesús Agüero',
  year: '2025',
  hours: {
    weekdays: 'Lun - Vie: 7:00 - 21:00',
    saturday: 'Sábado: 7:00 - 19:00',
    sunday: 'Domingo: 9:00 - 17:00',
    emergency: 'Atención de Emergencias 24/7'
  },
  about: 'L&D Agüero es una empresa costarricense especializada en limpieza de tanques sépticos y destaqueos, comprometida con un servicio rápido, profesional y garantizado las 24 horas. Con años de experiencia, herramientas modernas y personal altamente capacitado, estamos enfocados en la máxima satisfacción del cliente, la higiene y el cuidado del medio ambiente en Costa Rica.'
};

export const COVERAGE_ZONES = [
  { name: 'San José Centro', tag: 'Atención Inmediata' },
  { name: 'Hatillo & Cristo Rey', tag: 'Zona Directa' },
  { name: 'B° Corazón de Jesús', tag: 'Base Operativa' },
  { name: 'Santa Ana & Escazú', tag: 'Servicio 24/7' },
  { name: 'Heredia & Alajuela', tag: 'Ruta Diaria' },
  { name: 'Cartago & Curridabat', tag: 'Cobertura Total' },
  { name: 'Gran Área Metropolitana', tag: 'Todo Costa Rica' },
];

export const WHY_CHOOSE_US_ITEMS = [
  {
    title: 'Atención responsable',
    desc: 'Respuesta inmediata las 24 horas ante cualquier emergencia de fontanería, desborde o atasco con trato respetuoso y puntual.',
    iconKey: 'shield'
  },
  {
    title: 'Equipo profesional',
    desc: 'Camiones cisterna con bombas de vacío de alta potencia, sondas eléctricas K-60/K-1500 e hidrojet para no romper pisos ni paredes.',
    iconKey: 'tools'
  },
  {
    title: 'Experiencia comprobada',
    desc: 'Años de trayectoria solventando problemas complejos en casas, residencias, condominios, restaurantes e industrias en Costa Rica.',
    iconKey: 'star'
  },
  {
    title: 'Servicio garantizado',
    desc: 'Todos nuestros trabajos de limpieza, destaqueo, drenajes e instalación cuentan con garantía total por escrito y comprobante.',
    iconKey: 'check'
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'destaqueo-tuberias',
    title: 'Destaqueo de tuberías',
    shortTitle: 'Destaqueos',
    description: 'Desobstrucción rápida y efectiva de tuberías de aguas negras, pluviales, inodoros, fregaderos, lavamanos y cajas de registro mediante sondas eléctricas y agua a alta presión sin dañar la estructura.',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnd5v54YfUMksJKNlJWbE43cxGuK_DXnok5npXJGDWvshJeIETm7spv7f8CSbsAfnqMP2JojLBuLrxZAiYyJTa00Mk5QwZzdp3lHZwPXXCoE3FrUm96Pm7WKdtkg-2bBgcwXZgy=w1200-h1600-k-no',
    priceStart: 35000,
    currency: '₡',
    duration: '1 - 2 horas',
    features: [
      'Sondas eléctricas de largo alcance',
      'Desobstrucción sin romper pisos ni azulejos',
      'Limpieza profunda de grasa y sarro adherido',
      'Atención de urgencia disponible las 24 horas'
    ]
  },
  {
    id: 'limpieza-tanques-septicos',
    title: 'Limpieza de tanques sépticos',
    shortTitle: 'Tanques Sépticos',
    description: 'Vaciado, succión y lavado completo de tanques sépticos, pozos negros y trampas de grasa con camión cisterna equipado con bomba de vacío de alto rendimiento y disposición de residuos 100% ecológica.',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn0H_IWv0B0KwclbO1kFXcBN9CU7-7bApsM-G5LnfTaIXEHd7-d1RoDWMerpORDxZOkiuTiMH7wBuBFHj_SGm5u6VA4CdCms29Yz3Pqb4yZkjVMTB3x0oN0NCf9rE-sAvltYNE7qQ=w1600-h1200-k-no',
    priceStart: 75000,
    currency: '₡',
    duration: '2 - 4 horas',
    features: [
      'Camión cisterna con mangueras de alta succión',
      'Eliminación de lodos pesados y sedimentos',
      'Desinfección y control de malos olores',
      'Disposición final certificada y ambiental'
    ]
  },
  {
    id: 'construccion-drenajes',
    title: 'Construcción de drenajes',
    shortTitle: 'Drenajes',
    description: 'Diseño, excavación y construcción técnica de campos de absorción, zanjas de infiltración y pozos de absorción para evitar saturación de aguas residuales, filtraciones al suelo y rebalses.',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmdE4FvM5GlGGPxNrPCDJ1NJoZgap5XB0VVlb-0UakIZ2Jg4um0qX6_-M6xnP-fLFEmFbNa80UVkhtrA9s9k6ixo_CZChP5ZNG1z_Wl4lpIzp3_-8homX4x3IXoscOAj4BesHo4fogKTdM=w2159-h2160-k-no',
    priceStart: 120000,
    currency: '₡',
    duration: '1 - 3 días',
    features: [
      'Cálculo de permeabilidad del terreno',
      'Materiales de alta durabilidad (grava, geotextil, PVC ranurado)',
      'Solución definitiva a charcos y saturación',
      'Mantenimiento y rehabilitación de drenajes viejos'
    ]
  },
  {
    id: 'instalacion-tuberias',
    title: 'Instalación de tuberías',
    shortTitle: 'Instalaciones',
    description: 'Montaje profesional de redes de tuberías para agua potable, aguas servidas y sistemas pluviales en construcciones nuevas o remodelaciones, utilizando PVC de norma ASTM y pendientes exactas.',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkQTpvXsjAZvNBWzVMq97oLxK_nX1lRf095OQnvXdMK3pOdvm1j5quFw51jhc4VwWrann9OUcn6v7jz2FjRnqZqi7B70j7hTRR-nOpPy8H8TakvrwTlV1MHwiB9xfbT_NgJSPG0tsT0Ndk=w1200-h1600-k-no',
    priceStart: 45000,
    currency: '₡',
    duration: 'A convenir',
    features: [
      'Tuberías sanitarias y pluviales certificadas',
      'Nivelación y pendientes hidráulicas precisas',
      'Cajas de registro selladas e inspeccionables',
      'Conexión segura al alcantarillado o tanque'
    ]
  },
  {
    id: 'fontaneria-general',
    title: 'Fontanería',
    shortTitle: 'Fontanería',
    description: 'Servicio integral de fontanería residencial, comercial e industrial: detección y reparación de fugas de agua, cambio de grifería, instalación de inodoros, bombas de agua hidroneumáticas y calentadores.',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkn3Y7EsxVbYvN1n-5N2E398CU30MUKso-vSrBanScqORcuoMO1b8UQ3aOGmWdgI9xW7lTrz_kuLrIYCSf6TY3eoIdNn39EqTjiDcUnLM2nOM8cudThOzsxI4nTVfK6xTKi_e80=w1200-h1600-k-no',
    priceStart: 25000,
    currency: '₡',
    duration: '1 - 3 horas',
    features: [
      'Reparación de fugas visibles y empotradas',
      'Instalación de inodoros, lavatorios y fregaderos',
      'Mantenimiento de bombas de agua y tanques de reserva',
      'Diagnóstico hidráulico completo'
    ]
  }
];

export const BEFORE_AFTER_PROJECTS: BeforeAfterProject[] = [
  {
    id: 'destaqueo-caja-registro',
    title: 'Destaqueo de caja de registro y tubería principal',
    location: 'Hatillo, San José',
    category: 'Destaqueo',
    description: 'Desobstrucción total de acumulación de grasa y raíces con sonda eléctrica de alta torsión, restableciendo el flujo al 100%.',
    beforeImage: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkwKIUItHTx15BW7-DU0GMMCt9Gx2yAkLGlBLDmsuEKfG_CpQm-YZeu8P549k5gMPvahSISBZPkRhDYIeC4nhiNIJQP2DdfwXGwkgEnpl9-ycl0HJ16k330HX1BfatKbfmROSqR=w1200-h1600-k-no',
    afterImage: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlbm5s-45fxFbUbhSzqUeiirfZZBBjADJSbDVTLs7y3Scx0VfDWvr9PtUgi_yD7G8kJWuN88MJfJDT6QZ3pGzIMwk6_WB7t92w-BVuhs2P43atbx9kPicQyKQAlCR74hlgjcu8=w1200-h1600-k-no',
    defaultSliderPosition: 50,
  },
  {
    id: 'limpieza-tanque-residencial',
    title: 'Vaciado y desinfección de tanque séptico saturado',
    location: 'Santa Ana, San José',
    category: 'Tanques Sépticos',
    description: 'Succión profunda de lodos pesados con camión cisterna al vacío y aplicación de biodigestores para control de olores.',
    beforeImage: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmO9PT8oDd4VoRCfoohBxFGJ9e1vZtdiuQ-qawBxZTcFOnfI69UeIOVMGoNUkGH_v-SJqUAwA_5Zw5oFsQkdv3SXcjmm7MuohnCLWP5AI-BxvPJJvuMZq9F4uy-U0P8gp5omK3P=w1200-h1600-k-no',
    afterImage: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl6My0M1Q4xax7dFKPtLMGbjYMUYZgbfIbjyWu78DAZuEgAgIZ5v3GW4TkLlHvwDOKL2798_7OCRHhQmxUvVKLzTzEjnEiNQcEeSEZIIxf7hxbzCb4-sKxgJuBUC_29LYGZeuqP1A=w1200-h1600-k-no',
    defaultSliderPosition: 50,
  },
  {
    id: 'construccion-campo-absorcion',
    title: 'Rehabilitación y construcción de zanjas de drenaje',
    location: 'Escazú, San José',
    category: 'Drenajes',
    description: 'Excavación técnica e instalación de piedra cuarta con geotextil y tubería ranurada para drenar terreno anegado.',
    beforeImage: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkp-OnN1Xre0KTKFPeWD0m9_gFF16nAZyRlci2Dwm2DCbaPJTjdCKzXpEhUG_KmXNtPs8HoPvvzyaFNpbzpndoeSR3vcldqJFHsezmiuPI_V-8bD-jX9UWH5pOnuAkdyghEM1KTCg=w1200-h1600-k-no',
    afterImage: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmdE4FvM5GlGGPxNrPCDJ1NJoZgap5XB0VVlb-0UakIZ2Jg4um0qX6_-M6xnP-fLFEmFbNa80UVkhtrA9s9k6ixo_CZChP5ZNG1z_Wl4lpIzp3_-8homX4x3IXoscOAj4BesHo4fogKTdM=w1200-h1200-k-no',
    defaultSliderPosition: 50,
  },
  {
    id: 'destaqueo-fregadero-comercial',
    title: 'Destaqueo y desengrase de fregadero comercial',
    location: 'San José Centro',
    category: 'Destaqueo',
    description: 'Limpieza con sonda K-60 y agua a alta presión en tuberías de cocina grasienta sin interrumpir la operación del restaurante.',
    beforeImage: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmkOxVe78uyXkkzr5HMqeQa5n5WTDSA4p__TPVjiKY2_RErpQOprnsk1ytbj1MqgkcukRl6TFWf2e8K8ZBuf1aoBLSF35BYo3pjGiXW9jLI48NiQvfvbLzrTZvp0cPlhgPBz0_E_Q=w1200-h1600-k-no',
    afterImage: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnd5v54YfUMksJKNlJWbE43cxGuK_DXnok5npXJGDWvshJeIETm7spv7f8CSbsAfnqMP2JojLBuLrxZAiYyJTa00Mk5QwZzdp3lHZwPXXCoE3FrUm96Pm7WKdtkg-2bBgcwXZgy=w1200-h1600-k-no',
    defaultSliderPosition: 50,
  },
  {
    id: 'instalacion-red-sanitaria',
    title: 'Instalación de tuberías sanitarias y cajas de registro',
    location: 'Heredia',
    category: 'Instalación',
    description: 'Tendido de tuberías de desagüe en PVC SDR-35 con pendientes calibradas y cajas de registro herméticas anti-olores.',
    beforeImage: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnEITTrCAGxt-npQnUpfYNclXu1QQmbscJHq-NJyhqmr7ma7m6dHbtcEGg1sUKsNMewiaReVWsyd4h-C_xhPRm2r6uDrQKIC1DzkTtHLehUXACN_ZsKL27ig3_M1jRM32eWFpoy=w1200-h1600-k-no',
    afterImage: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlpUrSXdpAHoUoFOBpieXcpf8BENNU4hOXTT7-dj5vxByu6fHmQs-8IDEv2bn3LSniU0zVGTKTHqUTPxW9rCOOExc4vo0zcdrFsatv7gTs-50RcMYu-7uI-8rSuIuf-VaRdR87whw=w1200-h1600-k-no',
    defaultSliderPosition: 50,
  },
  {
    id: 'succion-trampa-grasa',
    title: 'Mantenimiento y succión de trampa de grasa',
    location: 'Alajuela',
    category: 'Tanques Sépticos',
    description: 'Extracción completa de grasas solidificadas, desincrustación con hidrolavadora y desodorización química ecológica.',
    beforeImage: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm0qfcgJa4InOx82WaP0AYKwoZrHmk3XXvjfH9LuZ8hylWfHK-5E6Lp5tY-e7e1X7Sj2ZLsmM3wJsfEeentuTlZnmmoqzNtgazucb9MjYJR6Y1R1pJd0os4uaugSvIYVCRDX20Z=w1200-h1600-k-no',
    afterImage: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnVRvgaqa5F8QwseNAiweH2o8OrE7X3kMHdbkK8hCQCaTaIszyg8ycCCb3-3VlHCrJGX2cQNa_kAbFXpt5pkIklMM_oBIUhUnE3N9FjCUnFvo67KQWBWVHEpcBnME0BxYX2NHqZ=w958-h681-k-no',
    defaultSliderPosition: 50,
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'María Vargas',
    role: 'Cliente Residencial – Limpieza de Tanque',
    rating: 5.0,
    quote: 'Excelente servicio. Llegaron rápido, resolvieron el problema en minutos y dejaron todo limpio. 100% recomendados para cualquier emergencia de tanques sépticos.',
    location: 'Santa Ana, San José',
    date: '2025',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'test-2',
    name: 'Carlos Mora',
    role: 'Administrador de Restaurante – Destaqueo Urgente',
    rating: 5.0,
    quote: 'Teníamos una emergencia de aguas negras en la cocina un viernes en la noche. L&D Agüero llegó en 25 minutos con su equipo profesional y solucionaron todo con sonda sin que los clientes lo notaran.',
    location: 'Escazú, San José',
    date: '2025',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'test-3',
    name: 'Roberto Montero',
    role: 'Propietario – Mantenimiento Preventivo',
    rating: 5.0,
    quote: 'Atención responsable y honesta desde el primer contacto. El camión de succión vino puntual a Hatillo, vaciaron el tanque y revisaron las cajas de registro a un precio sumamente accesible.',
    location: 'Hatillo, San José',
    date: '2025',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'test-4',
    name: 'Sofía Jiménez',
    role: 'Propietaria – Construcción de Drenaje',
    rating: 5.0,
    quote: 'Teníamos problemas de saturación de aguas en el patio. Diseñaron y construyeron un nuevo campo de absorción con tubería adecuada. Trabajo 100% garantizado y cero malos olores.',
    location: 'Heredia',
    date: '2025',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'test-5',
    name: 'Esteban Ramírez',
    role: 'Condominio – Fontanería & Tuberías',
    rating: 5.0,
    quote: 'Excelente equipo de trabajo. Instalaron la nueva red de tuberías de desagüe para 8 filiales. Cumplieron los tiempos a cabalidad y con la mejor disposición.',
    location: 'Alajuela',
    date: '2025',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'test-6',
    name: 'Patricia Castro',
    role: 'Comercio – Destaqueo y Trampa de Grasa',
    rating: 5.0,
    quote: 'Nos brindan mantenimiento periódico en las trampas de grasa y tuberías. Siempre atentos, educados y con maquinaria moderna. Muy recomendados.',
    location: 'San José Centro',
    date: '2025',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Señales de que tu tanque séptico necesita limpieza urgente en Costa Rica',
    date: '15 Feb 2025',
    readTime: '4 min de lectura',
    category: 'Tanques Sépticos',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm0wMUtJTPezeAUeBlXpPGJI_C-h0kYugCJz8jkvy3c_BWgmU_CI246TcIn1fYBn15gUvg87x1jF8LAgBHsh-EtQPIoNWKp7qrMH1I8L5UDY0FpK1AJjPtKhkqnXZfYwexZH_c=w1600-h1200-k-no',
    slug: 'senales-tanque-septico-necesita-limpieza-urgente',
    excerpt: 'Aprenda a identificar drenajes lentos, malos olores y gorgoteos antes de que ocurra un desborde de aguas negras en su vivienda.',
    content: `En Costa Rica, las altas temporadas de lluvia aumentan la humedad del suelo, lo que exige que los tanques sépticos y drenajes funcionen con máxima eficiencia.

### 1. Desagües lentos y gorgoteo en inodoros
Si al descargar el inodoro o vaciar el fregadero escucha sonidos de burbujeo o el agua tarda más de lo normal en irse, es indicio claro de que el nivel de lodos en el tanque ha alcanzado la tubería de entrada.

### 2. Malos olores cerca del jardín o registros
Un tanque séptico en buen estado es hermético. Si percibe olores a gas metano o aguas negras en el patio o baños, la cámara de sedimentación requiere succión profesional inmediata.

### 3. Zonas húmedas o césped anormalmente verde sobre el drenaje
Cuando el campo de absorción o el pozo de drenaje se satura por exceso de grasa y lodo, las aguas residuales afloran a la superficie del suelo creando charcos contaminantes.

### 4. Frecuencia recomendada de mantenimiento
Para un hogar promedio de 3 a 5 personas en Costa Rica, se recomienda vaciar y desinfectar el tanque séptico al menos una vez cada 1 a 2 años con camión cisterna certificado.`
  },
  {
    id: 'blog-2',
    title: '¿Por qué no debes usar químicos corrosivos para destaquear tuberías?',
    date: '28 Ene 2025',
    readTime: '3 min de lectura',
    category: 'Destaqueos',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlbm5s-45fxFbUbhSzqUeiirfZZBBjADJSbDVTLs7y3Scx0VfDWvr9PtUgi_yD7G8kJWuN88MJfJDT6QZ3pGzIMwk6_WB7t92w-BVuhs2P43atbx9kPicQyKQAlCR74hlgjcu8=w1200-h1600-k-no',
    slug: 'por-que-no-usar-quimicos-corrosivos-destaqueos',
    excerpt: 'El ácido muriático y la soda cáustica debilitan el PVC y destruyen las bacterias benéficas del tanque séptico. Conozca las soluciones seguras.',
    content: `Muchos propietarios recurren a químicos fuertes ante una tubería tapada, desconociendo los graves daños que pueden provocar a la infraestructura y la salud.

### 1. Deformación y rotura de tuberías de PVC
Los ácidos generan altas temperaturas por reacción exotérmica que ablandan el PVC y derriten las uniones de pegamento, causando fugas ocultas bajo los pisos de la casa.

### 2. Muerte bacteriana en el tanque séptico
El tanque séptico depende de bacterias anaeróbicas para descomponer la materia orgánica. Los limpiadores químicos eliminan esta flora bacteriana, provocando que el tanque se llene en pocas semanas.

### 3. La solución profesional con sonda eléctrica
Las sondas rotativas mecánicas (K-60 / K-1500) atraviesan y desintegran tapones de raíces, toallitas húmedas, grasa compactada y sarro sin utilizar una sola gota de químico tóxico.`
  },
  {
    id: 'blog-3',
    title: 'Cómo construir y mantener un campo de drenaje eficiente en Costa Rica',
    date: '10 Ene 2025',
    readTime: '5 min de lectura',
    category: 'Drenajes & Fontanería',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmdE4FvM5GlGGPxNrPCDJ1NJoZgap5XB0VVlb-0UakIZ2Jg4um0qX6_-M6xnP-fLFEmFbNa80UVkhtrA9s9k6ixo_CZChP5ZNG1z_Wl4lpIzp3_-8homX4x3IXoscOAj4BesHo4fogKTdM=w2159-h2160-k-no',
    slug: 'como-construir-mantener-campo-drenaje-costa-rica',
    excerpt: 'Claves técnicas sobre profundidad de zanjas, tipo de piedra, geotextil y pendientes para evitar la saturación de suelos arcillosos.',
    content: `El sistema de drenaje es el componente que permite al agua clarificada del tanque séptico infiltrarse de forma segura y limpia en el subsuelo.

### 1. Prueba de infiltración y tipo de suelo
En muchas zonas del GAM (como Alajuela, Cartago o Santa Ana), los suelos poseen capas arcillosas de baja permeabilidad. Se requiere calcular el área de absorción adecuada para evitar colapsos.

### 2. Uso correcto de piedra cuarta y manta geotextil
La tubería perforada debe descansar sobre una cama de piedra lavada de tamaño uniforme, recubierta por geotextil no tejido para impedir que la tierra vegetal tape los poros de la piedra con el paso de los años.

### 3. Precauciones sobre la zona de drenaje
Nunca construya aceras, no estacione vehículos pesados ni siembre árboles con raíces invasivas (como higuerones o laureles) sobre las zanjas de infiltración.`
  },
  {
    id: 'blog-4',
    title: 'Mantenimiento preventivo de trampas de grasa en restaurantes y sodas',
    date: '02 Ene 2025',
    readTime: '4 min de lectura',
    category: 'Comercial & Restaurantes',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm0qfcgJa4InOx82WaP0AYKwoZrHmk3XXvjfH9LuZ8hylWfHK-5E6Lp5tY-e7e1X7Sj2ZLsmM3wJsfEeentuTlZnmmoqzNtgazucb9MjYJR6Y1R1pJd0os4uaugSvIYVCRDX20Z=w1200-h1600-k-no',
    slug: 'mantenimiento-preventivo-trampas-grasa-restaurantes',
    excerpt: 'Evite sanciones del Ministerio de Salud y colapsos de cañerías con una rutina estricta de desengrase y succión periódica.',
    content: `Las trampas de grasa son obligatorias en comercios gastronómicos para retener aceites antes de que alcancen el alcantarillado público.

### 1. Frecuencia de limpieza según volumen de comensales
Para sodas y restaurantes de alto tráfico, la succión debe programarse mensualmente para evitar que la grasa solidificada viaje a las tuberías principales.

### 2. Eliminación de malos olores y plagas
La descomposición anaerobia de grasas genera ácido sulfhídrico y atrae insectos. El lavado a presión con desinfectantes enzimáticos neutraliza olores de raíz.

### 3. Certificados de disposición autorizada
L&D Agüero emite constancias de succión y transporte a plantas de compostaje y tratamiento para cumplimiento de normativas sanitarias en Costa Rica.`
  }
];

export const GALLERY_REAL_PHOTOS = [
  {
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm01wh_ILJ-B5_ozq8JzAG3pY-ecE0rWmHQyVRMh_qWuoUiQ8faCqc0j8G38pL5ghKO3cDyjiC7O6ilr3Ka0wDzgjwitI5WTpldFaEQcCXWPJgLG0v6O4aiiqW9Q0Jz5krW66yhBw=w2174-h1440-k-no',
    caption: 'Unidad cisterna con bomba de succión al vacío L&D Agüero en servicio'
  },
  {
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn0H_IWv0B0KwclbO1kFXcBN9CU7-7bApsM-G5LnfTaIXEHd7-d1RoDWMerpORDxZOkiuTiMH7wBuBFHj_SGm5u6VA4CdCms29Yz3Pqb4yZkjVMTB3x0oN0NCf9rE-sAvltYNE7qQ=w1600-h1200-k-no',
    caption: 'Vaciado de tanque séptico residencial en el GAM'
  },
  {
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlbm5s-45fxFbUbhSzqUeiirfZZBBjADJSbDVTLs7y3Scx0VfDWvr9PtUgi_yD7G8kJWuN88MJfJDT6QZ3pGzIMwk6_WB7t92w-BVuhs2P43atbx9kPicQyKQAlCR74hlgjcu8=w1200-h1600-k-no',
    caption: 'Destaqueo profesional con sonda eléctrica sin romper pisos'
  },
  {
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnd5v54YfUMksJKNlJWbE43cxGuK_DXnok5npXJGDWvshJeIETm7spv7f8CSbsAfnqMP2JojLBuLrxZAiYyJTa00Mk5QwZzdp3lHZwPXXCoE3FrUm96Pm7WKdtkg-2bBgcwXZgy=w3024-h4032-k-no',
    caption: 'Limpieza profunda de tuberías y cajas de registro'
  },
  {
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmO9PT8oDd4VoRCfoohBxFGJ9e1vZtdiuQ-qawBxZTcFOnfI69UeIOVMGoNUkGH_v-SJqUAwA_5Zw5oFsQkdv3SXcjmm7MuohnCLWP5AI-BxvPJJvuMZq9F4uy-U0P8gp5omK3P=w3024-h4032-k-no',
    caption: 'Extracción de lodos pesados con manguera de alta presión'
  },
  {
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkn3Y7EsxVbYvN1n-5N2E398CU30MUKso-vSrBanScqORcuoMO1b8UQ3aOGmWdgI9xW7lTrz_kuLrIYCSf6TY3eoIdNn39EqTjiDcUnLM2nOM8cudThOzsxI4nTVfK6xTKi_e80=w1200-h1600-k-no',
    caption: 'Inspección y destape de red de desagüe'
  },
  {
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmdE4FvM5GlGGPxNrPCDJ1NJoZgap5XB0VVlb-0UakIZ2Jg4um0qX6_-M6xnP-fLFEmFbNa80UVkhtrA9s9k6ixo_CZChP5ZNG1z_Wl4lpIzp3_-8homX4x3IXoscOAj4BesHo4fogKTdM=w2159-h2160-k-no',
    caption: 'Instalación de tuberías y construcción de campos de drenaje'
  },
  {
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlCarbA9rZIY9HP9hf5-UQ7HH5wgBMUn-mZ8OLkgbPYWJUcvrNcfRxHMpJ9JlVa_hScRzUxfOI2pnH0i43rYxF1fTPEg4keCj-1TztGPtLNogkdCEFHUqmgXB4DWG3Xhh1YrJ_Uog7AAeUS=w1171-h659-k-no',
    caption: 'Equipo técnico y camión cisterna L&D Agüero'
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: '¿Atienden emergencias de tanques llenos y tuberías tapadas las 24 horas?',
    answer: 'Sí. En L&D Agüero contamos con servicio de guardia 24/7 para emergencias de aguas negras, rebalses de inodoros o cajas de registro colapsadas en San José y todo el Gran Área Metropolitana.'
  },
  {
    id: 'faq-2',
    question: '¿Cómo realizan el destaqueo de tuberías sin romper pisos?',
    answer: 'Utilizamos equipo electromecánico especializado (sondas eléctricas de alta velocidad con resortes de acero templado y cabezales cortadores) que ingresan por registros, sifones o inodoros, destapando raíces, grasa y sólidos sin picar ni dañar paredes o pisos.'
  },
  {
    id: 'faq-3',
    question: '¿Qué incluye el servicio de limpieza de tanque séptico?',
    answer: 'Incluye la apertura segura de la losa o tapadera del tanque, succión total de líquidos y lodos densos con bomba de vacío de camión cisterna, lavado de paredes y fondo con agua a presión, verificación de nivel de entrada/salida y transporte hacia plantas de tratamiento autorizadas.'
  },
  {
    id: 'faq-4',
    question: '¿Qué zonas de Costa Rica cubren?',
    answer: 'Cubrimos todo San José (Hatillo, Cristo Rey, Barrio Corazón de Jesús, Santa Ana, Escazú, Desamparados, Curridabat, Goicoechea, Moravia, etc.), así como Heredia, Alajuela, Cartago y zonas aledañas del GAM.'
  },
  {
    id: 'faq-5',
    question: '¿Ofrecen garantía por los trabajos de fontanería y drenajes?',
    answer: 'Totalmente. Todos nuestros servicios de destaqueo, vaciado de tanques, construcción de drenajes e instalación de tuberías cuentan con respaldo y garantía de satisfacción por escrito.'
  }
];
