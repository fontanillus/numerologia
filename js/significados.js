const significadosNumeroAnios = {
        1: "Año de nuevos comienzos, iniciativa y liderazgo.",
        2: "Año de cooperación, relaciones y sensibilidad.",
        3: "Año de creatividad, expresión y comunicación.",
        4: "Año de trabajo duro, estructura y estabilidad.",
        5: "Año de cambios, libertad y aventura.",
        6: "Año de responsabilidad, familia y armonía.",
        7: "Año de introspección, estudio y espiritualidad.",
        8: "Año de poder, logros y abundancia.",
        9: "Año de cierre de ciclos, compasión y transformación.",
        11: "Número maestro: intuición, iluminación y visión.",
        22: "Número maestro: realización, construcción de sueños a gran escala."
};

const significadosNumeroPersonales = {
        1: "Líder, independiente, pionero.",
        2: "Cooperativo, diplomático, sensible.",
        3: "Creativo, expresivo, sociable.",
        4: "Organizado, trabajador, práctico.",
        5: "Aventurero, libre, adaptable.",
        6: "Responsable, protector, amoroso.",
        7: "Introspectivo, espiritual, analítico.",
        8: "Ambicioso, poderoso, materialista.",
        9: "Humanitario, compasivo, idealista.",
        11: "Número maestro: visionario, iluminado, inspirador.",
        22: "Número Maestro: constructor, maestro, realizador.",
        33: "Numero Maestro: sanador, amor incondicional y sacrificio por los demás."
};


const significadosNumeroDestino = {
        1: 'Liderazgo, independencia, iniciativa.',
        2: 'Diplomacia, cooperación, sensibilidad.',
        3: 'Creatividad, expresión, alegría.',
        4: 'Estabilidad, trabajo duro, organización.',
        5: 'Aventura, libertad, versatilidad.',
        6: 'Armonía, responsabilidad, servicio.',
        7: 'Intuición, análisis, espiritualidad.',
        8: 'Ambición, éxito material, poder.',
        9: 'Humanitarismo, compasión, sabiduría.',
        11: 'Número maestro: inspiración, idealismo, creatividad y expresión. Sanadores y motivadores.',
        22: 'Número maestro: visionario/a para transformar el mundo. Construcción, manifestación, pragmatismo.'
};

const significadosNumeroNombre = {
        1: 'Pionero e Innovador',
        2: 'Solidario y buen gestor',
        3: 'Consejero y motivador',
        4: 'Disciplinado y ejecutor',
        5: 'Espíritu libre',
        6: 'Protector y responsable',
        7: 'Especialista y perfeccionista',
        8: 'Gran estratega',
        9: 'Genio creativo e idealista',
        11: 'Numero maestro: maestro transformador',
        22: 'Número maestro: el poder puesto al servicio del espíritu'
};

const significadosNumeroAlma = {
        1: "Líder, independiente y decidido",
        2: "Cooperativo, sensible y diplomático",
        3: "Creativo, expresivo y sociable",
        4: "Organizado, responsable y práctico",
        5: "Aventurero, adaptable y curioso",
        6: "Compasivo, protector y equilibrado",
        7: "Intuitivo, analítico y reservado",
        8: "Ambicioso, autoritario y eficiente",
        9: "Humanitario, generoso y sensible",
        11: "Número maestro: visionario, espiritual y carismático",
        22: "Número maestro: constructivo, pragmático y poderoso",
        33: "Número maestro: sanador, amor incondicional y sacrificio por los demás"

};

const significadosNumeroExpresionAlma = {
        1: "Líder natural, independiente y con una gran fuerza de voluntad. Tiene iniciativa y confianza para iniciar proyectos y superar obstáculos.",
        2: "Diplomático, cooperativo y sensible. Busca la armonía en sus relaciones y es muy empático con los demás.",
        3: "Creativo, expresivo y alegre. Posee talento para la comunicación y se muestra optimista ante la vida.",
        4: "Organizado, trabajador y práctico. Valora la estabilidad y tiene una gran capacidad para la planificación y el detalle.",
        5: "Aventurero, curioso y versátil. Le gusta la libertad y los cambios, siempre en búsqueda de nuevas experiencias.",
        6: "Amoroso, responsable y protector. Busca el equilibrio y la armonía en su entorno, especialmente en la familia.",
        7: "Intelectual, introspectivo y espiritual. Le atrae el conocimiento profundo y la reflexión sobre la vida.",
        8: "Ambicioso, eficiente y con talento para los negocios. Se enfoca en el éxito material y la autoridad.",
        9: "Idealista, generoso y compasivo. Tiene un fuerte sentido humanitario y desea ayudar a los demás.",
        11: "Número maestro: visionario e intuitivo, con un fuerte poder inspirador. Busca la iluminación espiritual y el crecimiento personal.",
        22: "Número maesstro: constructor maestro, con gran capacidad para materializar sueños y proyectos a gran escala. Es práctico y poderoso."
};

const significadosProyectoSentido = {
        1: "Liderazgo y originalidad. Un proyecto innovador, pionero, independiente. Ideal para emprendimientos personales, marcas únicas, nuevas ideas. Impulsa la ambición y el liderazgo.Ejemplos: startups, patentes, coaching, marcas personales.",
        2: "Cooperación y armonía. Proyecto basado en asociaciones, relaciones, diplomacia o ayuda mutua. Tiene un tono sensible, empático, ideal para conectar personas. Ejemplos: mediación, terapias, ONG, recursos humanos, diseño interior.",
        3: "Creatividad y comunicación.Proyecto artístico, comunicativo o social. Ideal para expresión creativa, arte, redes sociales, entretenimiento o educación creativa. Ejemplos: canales de YouTube, agencias de publicidad, música, escritura.",
        4: "Estructura y estabilidad. Proyecto sólido, con bases firmes. Ideal para negocios duraderos, construcción, contabilidad, planificación o productos físicos.Ejemplos: arquitectura, inmobiliarias, empresas de logística, fábricas.",
        5: "Cambio y aventura. Proyecto dinámico, adaptable, con innovación constante. Ideal para turismo, ventas, tecnología, libertad creativa, redes o vida nómada.Ejemplos: agencias de viajes, apps, e-commerce, coaching de vida libre.",
        6: "Servicio y responsabilidad. Proyecto centrado en ayudar, cuidar o mejorar vidas. Ideal para educación, salud, estética, familia, comunidad. Ejemplos: centros educativos, salones de belleza, servicios sociales.",
        7: "Sabiduría y espiritualidad. Proyecto introspectivo, con profundidad mental o espiritual. Ideal para investigación, filosofía, ciencia, desarrollo espiritual o nichos especializados. Ejemplos: librerías, centros holísticos, laboratorios, coaching espiritual.",
        8: "Éxito y poder material. Proyecto con enfoque en negocios, finanzas, expansión, éxito material. Ideal para grandes empresas, inversiones, liderazgo estratégico. Ejemplos: empresas financieras, bienes raíces, franquicias.",
        9: "Humanitarismo y cierre de ciclo. Proyecto altruista, global, artístico o de sanación. Tiene un enfoque en servir a otros, cerrar etapas o dejar un legado. Ejemplos: fundaciones, arte con propósito, ayuda humanitaria, ONGs.",
        11: "Número maestro: inspiración espiritual. Proyecto visionario, inspirador, con potencial de liderazgo espiritual o artístico. Alta vibración, debe tener un propósito elevado.Ejemplos: proyectos de conciencia, canalización, creatividad superior.",
        22: "Número maestro: constructor maestro. El arquitecto del mundo. Proyecto con ambición global y capacidad real de impacto. Une visión espiritual con resultados materiales.Ejemplos: ONGs internacionales, grandes movimientos sociales, corporaciones con propósito.",
        33: "Número maestro: maestro sanador. Proyecto de servicio incondicional, sanación, enseñanza y amor universal. Tiene un llamado profundo a transformar vidas y comunidades. Ejemplos: centros de sanación, educación holística, proyectos globales de bienestar."

};

const significadosAnioPersonal = {
        1: 'Comienzos, liderazgo y energía.',
        2: 'Cooperación, diplomacia y sensibilidad.',
        3: 'Creatividad, comunicación y optimismo.',
        4: 'Estabilidad, trabajo duro y disciplina.',
        5: 'Cambio, aventura y libertad.',
        6: 'Responsabilidad, amor y familia.',
        7: 'Introspección, espiritualidad y sabiduría.',
        8: 'Poder, éxito y abundancia.',
        9: 'Compasión, humanitarismo y finalizaciones.',
        11: 'Número maesro: inspiración, intuición y iluminación espiritual.',
        22: 'Número maestro: maestro constructor, visión y poder de manifestación.',
};

const significadosMesPersonal = {
        1: 'Mes de nuevo ciclo, energía de liderazgo y comienzos.',
        2: 'Mes de cooperación y sensibilidad.',
        3: 'Mes creativo y expresivo.',
        4: 'Mes de estabilidad y trabajo constante.',
        5: 'Mes de cambios y aventura.',
        6: 'Mes de responsabilidades y relaciones.',
        7: 'Mes introspectivo y espiritual.',
        8: 'Mes de Poder, éxito y abundancia.',
        9: 'Mes de cierre, compasión y transformación.',
        11: 'Número maestro: mes de la intuición elevada, inspiración espiritual, idealismo y conexión con planos superiores. Puede traer desafíos para manejar su intensidad..',
        22: 'Número maesgro: mes de la capacidad para materializar sueños, gran poder de manifestación, equilibrio entre lo espiritual y lo práctico. Gran potencial para construir proyectos duraderos..',
};

