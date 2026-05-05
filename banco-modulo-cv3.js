// ============================================================
//  BANCO DE PREGUNTAS — MÓDULO C (simulacro11 + V3) · SPEN INE
//  Versión: 2.0
//  Total: 100 preguntas · 13 subáreas · opción múltiple (3 opciones)
//
//  Fuentes:
//  · banco-simulacro11.js (40 preguntas originales)
//  · V3_Electoral.md (60 preguntas nuevas)
//
//  Distribución por subárea:
//  · 1.1 Modelo constitucional: 10
//  · 1.2 Poder Judicial: 11
//  · 1.3 Ciudadanía: 10
//  · 1.4 Sistema de partidos en México: 8
//  · 2.1 Principios del sistema electoral: 6
//  · 2.2 Tipos de sistemas electorales: 6
//  · 2.3 Autoridades electorales: 8
//  · 2.4 Delitos electorales: 6
//  · 2.5 Candidaturas independientes: 6
//  · 2.6 Proceso Electoral Federal: 11
//  · 3.1 Conocimientos fundamentales del INE: 6
//  · 3.2 Órganos del INE: 10
//  · 3.3 Servicio Profesional Electoral Nacional: 2
// ============================================================

const BANCO_MODULO_C = [

  /* ══════════════════════════════════════════════════
     1.1  MODELO CONSTITUCIONAL  (10 preguntas)
  ══════════════════════════════════════════════════ */
  {
    sa:"1.1", sal:"Modelo constitucional",
    ref:"CPEUM (2025), Arts. 40, 41 y 115",
    p:"El Art. 40 CPEUM define la forma de gobierno como República representativa, democrática, laica y federal. El Art. 115 establece que los municipios serán gobernados por ayuntamientos electos directamente, base de la organización político-administrativa del territorio.",
    pt:"Federalismo y municipio libre",
    q:"¿Cuál es la consecuencia jurídica más relevante de que el municipio sea la base de la organización territorial conforme al Art. 115 CPEUM en el contexto del sistema federal?",
    o:["Que el municipio libre constituye el primer nivel de gobierno donde se expresa directamente el principio federalista: tiene personalidad jurídica propia, puede recaudar impuestos, administrar su hacienda y prestar servicios públicos sin subordinación al gobierno estatal en su ámbito de competencia.",
       "Que los municipios pueden separarse del estado al que pertenecen mediante referéndum local sin necesidad de reforma constitucional.",
       "Que los ayuntamientos pueden modificar la Constitución estatal sin intervención del congreso local."],
    c:0,
    ex:"El Art. 115 CPEUM consagra el municipio libre como célula básica del federalismo: con personalidad jurídica, patrimonio y competencias propias (agua, alumbrado, seguridad pública). No es subordinado al estado en su esfera; esta autonomía es la expresión concreta del federalismo en el nivel más cercano al ciudadano."
  },
  {
    sa:"1.1", sal:"Modelo constitucional",
    ref:"CPEUM (2025), Arts. 71 y 72",
    p:"La iniciativa de ley y el proceso legislativo ordinario federal están regulados en los Arts. 71 y 72 CPEUM, que distinguen quiénes pueden presentar iniciativas y el procedimiento para aprobarlas.",
    pt:"Proceso legislativo federal",
    q:"¿Cuál es la diferencia entre el proceso legislativo ordinario del Art. 72 y el proceso de reforma constitucional del Art. 135 CPEUM en cuanto a las mayorías requeridas?",
    o:["El proceso ordinario del Art. 72 requiere aprobación por mayoría simple de ambas cámaras; el Art. 135 exige mayoría de dos terceras partes del Congreso de la Unión más aprobación de la mayoría de las legislaturas estatales, haciendo la reforma constitucional sustancialmente más difícil.",
       "Ambos requieren mayoría calificada de dos terceras partes; la diferencia es solo el quórum de asistencia.",
       "El Art. 72 requiere unanimidad de ambas cámaras; el Art. 135 solo requiere mayoría simple más promulgación del Ejecutivo."],
    c:0,
    ex:"La diferencia es cualitativa: el Art. 72 opera con mayoría simple (mitad más uno) en cada cámara. El Art. 135 eleva el umbral a dos terceras partes del Congreso más la aprobación de la mayoría de las 32 legislaturas estatales. Este doble candado protege la rigidez constitucional e impide reformas con apoyo solo parlamentario."
  },
  {
    sa:"1.1", sal:"Modelo constitucional",
    ref:"CPEUM (2025), Art. 89, fracc. I, II y XVIII",
    p:"El Art. 89 CPEUM enumera las facultades y obligaciones del Presidente de la República. Entre ellas destacan la facultad reglamentaria, el nombramiento de altos funcionarios y la dirección de la política exterior.",
    pt:"Facultades constitucionales del Ejecutivo",
    q:"¿En qué consiste la facultad reglamentaria del Ejecutivo Federal y cuál es su límite constitucional respecto al Poder Legislativo?",
    o:["La facultad reglamentaria permite al Ejecutivo expedir reglamentos con la misma jerarquía que las leyes del Congreso, pudiendo derogar o modificar estas cuando lo considere necesario.",
       "La facultad reglamentaria está suspendida durante los procesos electorales federales por disposicion expresa del INE.",
       "La facultad reglamentaria (Art. 89, fracc. I) permite al Ejecutivo expedir reglamentos que desarrollen y detallen la aplicación de las leyes aprobadas por el Congreso, pero no puede ir más allá ni contradecir lo que la ley establece; es una facultad derivada y subordinada a la ley."],
    c:2,
    ex:"La facultad reglamentaria es sub-legal: los reglamentos del Ejecutivo desarrollan la ley pero no pueden ampliar, restringir ni contradecir lo que el Congreso aprobó. Esta subordinación garantiza el principio de legalidad: el Ejecutivo ejecuta; el Legislativo legisla. Un reglamento que excede la ley es inconstitucional y susceptible de amparo."
  },
  {
    sa:"1.1", sal:"Modelo constitucional",
    ref:"CPEUM (2025), Arts. 102-A y 102-B",
    p:"El Art. 102-A CPEUM crea la Fiscalía General de la República como órgano autónomo. El Art. 102-B establece el sistema no jurisdiccional de protección de derechos humanos encabezado por la CNDH.",
    pt:"Organismos constitucionales autónomos",
    q:"¿Cuál es la diferencia entre la autonomía de la Fiscalía General de la República y la autonomía del INE como organismos constitucionales?",
    o:["La FGR es autónoma del Ejecutivo para garantizar que la persecución de delitos no sea controlada políticamente; el INE es autónomo tanto del Ejecutivo como del Legislativo para garantizar la imparcialidad electoral. Ambas autonomías son de base constitucional pero responden a distintos riesgos: la FGR, al uso político del poder penal; el INE, a la manipulación electoral por el gobierno en turno.",
       "Ambos tienen exactamente el mismo tipo y grado de autonomía; la diferencia es solo el ámbito material en que actúan.",
       "El INE tiene mayor rango constitucional que la FGR porque fue creado mediante reforma panhispánica en 2014, a diferencia de la FGR que es solo una ley orgánica."],
    c:0,
    ex:"Ambas son autonomías constitucionales pero con objetos distintos: la FGR se separa del Ejecutivo para evitar la persecución política selectiva. El INE se separa de todos los poderes para evitar que quien gobierna controle las elecciones. La autonomía del INE es más amplia porque excluye también la injerencia legislativa."
  },
  {
    sa:"1.1", sal:"Modelo constitucional",
    ref:"CPEUM (2025), Art. 29",
    p:"El Art. 29 CPEUM regula la suspensión de garantías (estado de excepción). Establece los supuestos, el procedimiento y los límites de esta medida extraordinaria.",
    pt:"Suspensión de garantías constitucionales",
    q:"¿Cuáles son los derechos que el Art. 29 CPEUM declara absolutamente inderogables incluso durante la suspensión de garantías?",
    o:["El derecho a la no discriminación, a la vida, a la integridad personal, a la protección de la familia, al nombre, a la nacionalidad, a los derechos de la niñez, a los derechos políticos, a las libertades de pensamiento, conciencia y religión, al principio de legalidad y retroactividad, y la prohibición de la pena de muerte.",
       "Todos los derechos patrimoniales y económicos de los ciudadanos, porque su suspensión causaría colapso económico.",
       "Solo el derecho al voto y el derecho a la educación, por ser los derechos fundamentales del Estado democrático."],
    c:0,
    ex:"El Art. 29 CPEUM establece un núcleo intangible de derechos que ni siquiera el estado de excepción puede suspender: vida, integridad, no discriminación, derechos de la niñez, derechos políticos, libertad de conciencia, principio de legalidad, prohibición de pena de muerte. Este núcleo refleja el estándar del derecho internacional humanitario."
  },
  {
    sa:"1.1", sal:"Modelo constitucional",
    ref:"CPEUM · Legislación electoral vigente",
    p:null, pt:null,
    q:"Respecto a la Base II, ¿cuál es la proporción establecida para la distribución del financiamiento público destinado al sostenimiento de las actividades ordinarias permanentes de los partidos políticos?",
    o:["50% de forma igualitaria y 50% según la votación obtenida en la elección de diputados inmediata anterior.",
       "100% de forma proporcional al número de afiliados registrados ante el INE.",
       "30% de forma igualitaria y el 70% restante según el porcentaje de votación que hubiesen obtenido en la elección de diputados inmediata anterior."],
    c:2,
    ex:"El modelo de financiamiento busca equilibrar la equidad con la representatividad. El 30% igualitario garantiza un piso mínimo de subsistencia para todos los partidos con registro, mientras que el 70% proporcional premia la fuerza electoral demostrada en la última elección de Diputados Federales."
  },
  {
    sa:"1.1", sal:"Modelo constitucional",
    ref:"CPEUM · Legislación electoral vigente",
    p:null, pt:null,
    q:"Según la Base III, Apartado A, ¿quién es la autoridad única para la administración del tiempo que corresponda al Estado en radio y televisión destinado a sus propios fines y al ejercicio del derecho de los partidos políticos?",
    o:["La Secretaría de Gobernación a través de la Dirección General de RTC.",
       "El Instituto Federal de Telecomunicaciones (IFT).",
       "El Instituto Nacional Electoral (INE)."],
    c:2,
    ex:"Técnica: A partir de la reforma de 2007, el INE se constituyó como la autoridad única en esta materia. Esto impide que los partidos o particulares contraten tiempo aire por cuenta propia, centralizando la distribución de spots a través de pautas técnicas que el Instituto ordena directamente a los concesionarios."
  },
  {
    sa:"1.1", sal:"Modelo constitucional",
    ref:"CPEUM · Legislación electoral vigente",
    p:null, pt:null,
    q:"De acuerdo con la Base IV, ¿cuál es el límite máximo de duración para las campañas electorales en el año que se elija Presidente de la República, senadores y diputados federales?",
    o:["No podrán exceder de sesenta días.",
       "Deberán durar exactamente ciento veinte días.",
       "No podrán exceder de noventa días."],
    c:2,
    ex:"La Constitución establece plazos diferenciados según el tipo de elección: cuando se renueva el Poder Ejecutivo (Presidenciales), la campaña dura hasta 90 días. En los años en que solo se renueva la Cámara de Diputados (elecciones intermedias), la duración máxima es de 60 días. Las precampañas no podrán exceder las dos terceras partes de las"
  },
  {
    sa:"1.1", sal:"Modelo constitucional",
    ref:"CPEUM · Legislación electoral vigente",
    p:null, pt:null,
    q:"En términos de la Base V, Apartado A, el INE es un organismo público autónomo. ¿Cuáles son los principios rectores que deben regir todas sus actividades y las de los organismos públicos locales?",
    o:["Legalidad, eficiencia, eficacia, economía, transparencia y honradez.",
       "Autonomía, jerarquía, especialidad, buena fe y equidad.",
       "Certeza, legalidad, independencia, imparcialidad, máxima publicidad y objetividad."],
    c:2,
    ex:"Estos seis principios son el eje del sistema electoral. La Máxima Publicidad fue la última en integrarse constitucionalmente (reforma 2014). Cualquier acto de la autoridad electoral que se aparte de estos principios es susceptible de ser impugnado ante el TEPJF."
  },
  {
    sa:"1.1", sal:"Modelo constitucional",
    ref:"CPEUM · Legislación electoral vigente",
    p:null, pt:null,
    q:"Bajo el sistema de nulidades previsto en la Base VI, ¿cuál de los siguientes supuestos constituye una causa de nulidad de las elecciones por violaciones graves, dolosas y determinantes?",
    o:["Cuando se exceda el gasto de campaña en un dos por ciento del monto total autorizado.",
       "Cuando se reciban aportaciones de simpatizantes que superen el diez por ciento del financiamiento público.",
       "Cuando se compre o adquiera cobertura informativa o tiempos en radio y televisión, fuera de los supuestos previstos en la ley."],
    c:2,
    ex:"El inciso b) de la Base VI prohíbe la compra o adquisición de cobertura informativa (\"comprar\" implica contrato, \"adquirir\" es una figura más amplia que incluye la cesión de tiempos). Para que proceda la nulidad, la conducta debe ser grave, dolosa y, en caso de márgenes"
  },

  /* ══════════════════════════════════════════════════
     1.2  PODER JUDICIAL  (11 preguntas)
  ══════════════════════════════════════════════════ */
  {
    sa:"1.2", sal:"Poder Judicial",
    ref:"CPEUM (2025), Art. 94 — Reforma Judicial DOF 15/09/2024",
    p:"La reforma judicial publicada el 15 de septiembre de 2024 transformó la integración de la SCJN, el método de designación de sus integrantes y el número de ministros.",
    pt:"Reforma Judicial 2024 — cambios estructurales",
    q:"Además de reducir la SCJN de 11 a 9 ministros y establecer su elección por voto popular, ¿qué otro cambio estructural introdujo la reforma de 2024 respecto al Consejo de la Judicatura Federal?",
    o:["Fusionó el CJF con la SCJN para crear un órgano único de gobierno y jurisdicción del Poder Judicial.",
       "Transfirió todas las funciones del CJF al Ministerio de Justicia Federal de nueva creación.",
       "Sustituyó al CJF por dos órganos especializados: el Tribunal de Disciplina Judicial (funciones disciplinarias y sancionadoras) y el Órgano de Administración Judicial (gestión presupuestal, administrativa y de carrera), separando así las funciones que antes concentraba el CJF."],
    c:2,
    ex:"La reforma de 2024 desintegró al CJF en dos órganos con funciones separadas: el Tribunal de Disciplina Judicial (sanciona a jueces y magistrados) y el Órgano de Administración Judicial (gestiona el presupuesto, la carrera judicial y los recursos del Poder Judicial). Esta separación evita que el mismo órgano sea juez y administrador de la carrera judicial."
  },
  {
    sa:"1.2", sal:"Poder Judicial",
    ref:"LGSMIME (2024), Arts. 86–93",
    p:"El Juicio de Revisión Constitucional Electoral (JRC) es un medio de impugnación previsto en la LGSMIME que permite controvertir actos o resoluciones definitivos de las autoridades electorales locales.",
    pt:"Juicio de Revisión Constitucional Electoral (JRC)",
    q:"¿Cuáles son los requisitos de procedencia del JRC que lo distinguen de otros medios de impugnación electoral?",
    o:["El JRC procede exclusivamente para impugnar actos o resoluciones definitivos de autoridades electorales locales; solo pueden promoverlo partidos políticos; la violación alegada debe ser a la CPEUM; y la violación debe ser determinante para el resultado de la elección local.",
       "El JRC procede contra cualquier acto del INE o de los OPLEs sin requisito de definitividad; basta que el promovente sea ciudadano.",
       "El JRC puede ser promovido por cualquier ciudadano para impugnar leyes electorales inconstitucionales directamente ante la SCJN."],
    c:0,
    ex:"El JRC tiene cuatro requisitos de procedencia acumulativos: (1) acto o resolución definitivo e inatacable en sede local; (2) promovido por partido político; (3) violación alegada a la CPEUM; (4) que la violación sea determinante para el resultado. La ausencia de cualquiera de ellos hace improcedente el medio."
  },
  {
    sa:"1.2", sal:"Poder Judicial",
    ref:"LGSMIME (2024), Arts. 61–78",
    p:"El Juicio de Inconformidad (JIN) y el Recurso de Reconsideración (REC) son dos medios de impugnación que actúan en secuencia dentro del proceso de validación de las elecciones federales.",
    pt:"JIN y Recurso de Reconsideración — secuencia impugnatoria",
    q:"¿Cuál es la relación procesal entre el JIN y el Recurso de Reconsideración en la cadena impugnatoria federal?",
    o:["El JIN es el medio para impugnar los cómputos distritales y las declaraciones de validez de las elecciones de diputados y senadores ante las Salas Regionales del TEPJF; el REC procede para impugnar ante la Sala Superior las resoluciones de las Salas Regionales que modifiquen el triunfo del candidato ganador o anulen una elección.",
       "El REC es un recurso previo al JIN: se interpone antes ante los Consejos Distritales y el JIN ante el TEPJF.",
       "El JIN y el REC son medios paralelos e independientes entre sí; el promovente puede usar cualquiera de los dos indistintamente."],
    c:0,
    ex:"La secuencia es: Cómputo Distrital → JIN ante Sala Regional → REC ante Sala Superior (solo si la Sala Regional modifica el triunfo o anula la elección). El REC es el último eslabón jurisdiccional electoral antes de que los resultados sean definitivos. No son paralelos sino consecutivos y condicionados."
  },
  {
    sa:"1.2", sal:"Poder Judicial",
    ref:"CPEUM (2025), Art. 105, fracc. II; LGSMIME (2024)",
    p:"Las acciones de inconstitucionalidad en materia electoral permiten impugnar normas generales electorales ante la SCJN. Su resolución puede tener efectos generales (erga omnes) si alcanza la mayoría requerida.",
    pt:"Efectos de las acciones de inconstitucionalidad electorales",
    q:"¿Qué mayoría necesita la SCJN para que una declaración de inconstitucionalidad tenga efectos generales en materia electoral y qué ocurre si no se alcanza esa mayoría?",
    o:["Se requiere unanimidad de los 9 ministros; si no se alcanza, la norma queda suspendida temporalmente.",
       "Basta con mayoría simple (5 de 9) para que la declaración tenga efectos generales; no existe umbral de mayoría calificada.",
       "Se requieren 8 de los 9 votos de los ministros para emitir una declaratoria con efectos generales que derogue la norma impugnada; si no se alcanza esa mayoría calificada, la acción se desecha y la norma sigue vigente aunque haya ministros que la consideren inconstitucional."],
    c:2,
    ex:"El Art. 105 CPEUM exige mayoría calificada (8 de 9 ministros tras la reforma de 2024, anteriormente 8 de 11) para declaraciones con efectos erga omnes. Si no se alcanza esa mayoría, la acción se desecha; la norma impugnada mantiene su vigencia aunque algunos ministros la consideren contraria a la Constitución. Esto genera paradojas: normas que viven pese a tener votos en contra."
  },
  {
    sa:"1.2", sal:"Poder Judicial",
    ref:"CPEUM (2025), Art. 99; LGSMIME (2024)",
    p:null, pt:null,
    q:"¿En qué supuestos específicos puede la Sala Superior del TEPJF declarar la nulidad de una elección de Presidente de la República, de senadores o de diputados federales?",
    o:["La nulidad de una elección federal procede cuando se acreditan causales específicas previstas en la LGIPE y la LGSMIME: compra y coacción del voto de manera generalizada y determinante, rebase del tope de gastos de campaña en más del 5%, uso ilegal de recursos públicos, o cuando alguna autoridad del Estado intervino decisivamente en la campaña.",
       "Puede anular cualquier elección cuando algún partido político lo solicite, sin necesidad de probar causales específicas.",
       "La Sala Superior puede anular una elección solo si el margen entre el primero y el segundo lugar es menor al 1% y un partido lo solicita."],
    c:0,
    ex:"La nulidad de elección no opera por discrecionalidad judicial sino por causales tasadas en ley: compra/coacción generalizada y determinante del voto; rebase de tope de gastos en más del 5%; uso ilegal de recursos del erario; o intervención de autoridad estatal determinante. Todas deben ser determinantes para el resultado. El principio es que la nulidad es la última ratio."
  },
  {
    sa:"1.2", sal:"Poder Judicial",
    ref:"CPEUM (2025), Art. 107; LGSMIME (2024), Arts. 79–85",
    p:"El JDC protege los derechos político-electorales del ciudadano. Su alcance ha sido ampliado por la jurisprudencia del TEPJF para cubrir situaciones no expresamente previstas en la ley.",
    pt:"Alcance jurisprudencial del JDC",
    q:"¿Cuál es el supuesto de procedencia del JDC que la jurisprudencia del TEPJF ha ampliado más allá del texto literal de la LGSMIME?",
    o:["La jurisprudencia del TEPJF ha ampliado el JDC para proteger los derechos de militantes frente a decisiones internas de los partidos que vulneren sus derechos político-electorales (expulsión arbitraria, negativa a postularlos, violaciones al estatuto), aun cuando la LGSMIME originalmente lo concibió solo para actos de autoridades electorales.",
       "El JDC solo puede promoverlo el INE en representación de los ciudadanos que no cuenten con representación legal.",
       "El JDC solo procede para impugnar resultados de elecciones presidenciales; para las demás elecciones existen medios específicos."],
    c:0,
    ex:"La jurisprudencia del TEPJF (especialmente la tesis de partido como autoridad en materia electoral intrapartidaria) ha extendido el JDC para proteger a militantes contra actos internos de los partidos que vulneren sus derechos: expulsión indebida, no postulación arbitraria, violación al estatuto. Esto transformó al JDC en el medio de amparo político-electoral por excelencia."
  },
  {
    sa:"1.2", sal:"Poder Judicial",
    ref:"CPEUM · Legislación electoral vigente",
    p:null, pt:null,
    q:"Conforme al régimen de restricciones en la propaganda electoral judicial, ¿cuál es la consecuencia jurídica para una persona candidata que realice actos de proselitismo, contrate espacios en medios de comunicación o realice actividades de campaña fuera de los tiempos y foros organizados por el INE?",
    o:["La imposición de una multa equivalente a 5,000 Unidades de Medida y Actualización (UMA).",
       "La reducción del 50% del tiempo de exposición que le corresponda en radio y televisión.",
       "La cancelación de su registro como persona candidata, quedando inhabilitada para el proceso electoral en curso."],
    c:2,
    ex:"El fundamento reside en el Artículo 96, fracción II, inciso f) de la Constitución Federal. Las personas candidatas solo pueden difundir sus perfiles a través de los tiempos del Estado en radio y televisión que el INE determine, y en los foros académicos o debates que el propio Instituto organice."
  },
  {
    sa:"1.2", sal:"Poder Judicial",
    ref:"CPEUM · Legislación electoral vigente",
    p:null, pt:null,
    q:"¿Cuál es el principio constitucional que rige la integración de las listas de candidaturas, la conformación de las boletas y la asignación de los cargos finales en la elección de personas juzgadoras del Poder Judicial de la Federación?",
    o:["Principio de representación proporcional de las minorías.",
       "Principio de antigüedad y carrera judicial prevaleciente.",
       "Principio de paridad de género, de forma alternativa y progresiva."],
    c:2,
    ex:"El fundamento se encuentra en los Artículos 94 y 96 de la Constitución Federal. Mandato de Paridad: La reforma establece que el Poder Judicial debe integrarse de manera paritaria. Esto significa que las listas de 10 candidatos que envíe cada Poder deben estar compuestas por 5 hombres y 5 mujeres."
  },
  {
    sa:"1.2", sal:"Poder Judicial",
    ref:"CPEUM · Legislación electoral vigente",
    p:null, pt:null,
    q:"¿Qué autoridad tiene la facultad exclusiva de aprobar el presupuesto anual del Poder Judicial de la Federación?",
    o:["El Senado de la República.",
       "El Órgano de Administración Judicial.",
       "La Cámara de Diputados."],
    c:2,
    ex:"Como parte de la facultad exclusiva de aprobar el Presupuesto de Egresos de la Federación (PEF), los Diputados son quienes deciden el techo financiero del PJF. Artículo 74, fracción IV de la Constitución Política de los Estados Unidos Mexicanos (CPEUM)."
  },
  {
    sa:"1.2", sal:"Poder Judicial",
    ref:"CPEUM · Legislación electoral vigente",
    p:null, pt:null,
    q:"¿Bajo qué supuesto principal puede el Tribunal de Disciplina Judicial remover de su cargo a una persona juzgadora?",
    o:["Por tener una tasa de sentencias revocadas mayor al 20%.",
       "Por actos u omisiones que vulneren la imparcialidad, independencia o ética judicial.",
       "Por no asistir a dos sesiones plenarias de forma consecutiva."],
    c:1,
    ex:"El foco del Tribunal de Disciplina es la ética y la conducta. Se sanciona la corrupción o la subordinación a intereses externos, no el criterio jurídico técnico (salvo que sea manifiestamente ilegal). Artículo 100, párrafo octavo de la CPEUM."
  },
  {
    sa:"1.2", sal:"Poder Judicial",
    ref:"CPEUM · Legislación electoral vigente",
    p:null, pt:null,
    q:"¿Cuál es la edad mínima requerida para ser candidato(a) a ministro(a) de la Suprema Corte tras la reforma?",
    o:["30 años cumplidos.",
       "35 años cumplidos.",
       "No se establece una edad mínima específica en la Constitución; se eliminó el requisito de edad."],
    c:2,
    ex:"Con la reforma publicada en el DOF el 15 de septiembre de 2024, el Artículo 95 fue derogado. En el nuevo diseño constitucional (articulado principalmente a través del Artículo 96 y sus procesos de evaluación), se eliminó el límite de edad mínima (que anteriormente era de 35 años). Ahora, los filtros se han desplazado a requisitos de capacidad técn"
  },

  /* ══════════════════════════════════════════════════
     1.3  CIUDADANÍA  (10 preguntas)
  ══════════════════════════════════════════════════ */
  {
    sa:"1.3", sal:"Ciudadanía",
    ref:"CPEUM (2025), Art. 35, fracc. IX; LFRM (2021)",
    p:"La Ley Federal de Revocación de Mandato (LFRM, 2021) reglamenta el Art. 35, fracc. IX CPEUM. Su primer ejercicio se realizó en abril de 2022.",
    pt:"Revocación de mandato — condiciones de vinculatoriedad",
    q:"¿Bajo qué condiciones el resultado de un proceso de revocación de mandato es vinculante para los poderes de la Unión conforme a la LFRM y la CPEUM?",
    o:["Siempre es vinculante sin importar la participación, siempre que la mayoría vote por revocar.",
       "El resultado es vinculante solo si más del 50% del padrón electoral participa y el 60% vota por revocar.",
       "El resultado es vinculante cuando la participación alcanza al menos el 40% de la lista nominal de electores y la mayoría vota a favor de la revocación, siendo esa mayoría superior a la que obtuvo el Presidente en la elección en que ganó el cargo."],
    c:2,
    ex:"La CPEUM y la LFRM establecen una doble condición: participación mínima del 40% de la lista nominal y mayoría por la revocación que supere la votación original del Presidente. Si no se alcanza el umbral de participación, el proceso no tiene efectos vinculantes aunque la mayoría vote por revocar."
  },
  {
    sa:"1.3", sal:"Ciudadanía",
    ref:"CPEUM (2025), Art. 35, fracc. VIII; LFCP (2021)",
    p:"La Ley Federal de Consulta Popular (LFCP, 2021) establece los procedimientos, umbrales y materias de la consulta popular prevista en el Art. 35, fracc. VIII CPEUM.",
    pt:"Consulta popular — materias excluidas",
    q:"¿Por qué la restricción de derechos humanos es una materia expresamente excluida de la consulta popular conforme al Art. 35, fracc. VIII CPEUM?",
    o:["Porque los derechos humanos son derechos de la persona frente al poder y frente a las mayorías; permitir que una mayoría los restrinja mediante consulta vulneraría su carácter universal e indisponible, contradiciendo el principio de que los derechos humanos no son negociables por decisión mayoritaria.",
       "Porque las consultas populares son herramientas costosas y deben reservarse solo para temas presupuestales.",
       "Porque el TEPJF tiene jurisdicción exclusiva sobre los derechos humanos y no puede compartirla con el electorado."],
    c:0,
    ex:"La exclusión de la restricción de derechos humanos de la consulta popular responde a una tensión fundamental de la democracia: las mayorías no pueden decidir suprimir derechos de las minorías. Si los derechos humanos fueran sometibles a votación, la democracia podría devenir en tiranía de la mayoría. La exclusión constitucional protege el núcleo indisponible de la dignidad humana."
  },
  {
    sa:"1.3", sal:"Ciudadanía",
    ref:"CPEUM (2025), Arts. 36 y 38",
    p:"El Art. 36 CPEUM establece las obligaciones ciudadanas. El Art. 38 regula la suspensión de derechos y obligaciones ciudadanas.",
    pt:"Obligaciones ciudadanas y suspensión de derechos",
    q:"¿Cuál es la diferencia jurídica entre la suspensión de derechos ciudadanos por proceso criminal (Art. 38, fracc. II) y la suspensión por sentencia ejecutoria que imponga inhabilitación (Art. 38, fracc. IV)?",
    o:["Son la misma causal con distinta redacción; ambas producen exactamente los mismos efectos y duración.",
       "La suspensión por proceso criminal es permanente; la por sentencia ejecutoria es solo temporal y puede ser perdonada por el Congreso.",
       "La suspensión por proceso criminal (fracc. II) es preventiva y opera desde el auto de formal prisión; cesa cuando la sentencia es absolutoria o se extingue la pena. La suspensión por inhabilitación en sentencia ejecutoria (fracc. IV) es punitiva, tiene duración específica fijada en la sentencia y no cesa por absolutoria sino al cumplir el plazo de inhabilitación."],
    c:2,
    ex:"La distinción es procesal y temporal: la fracc. II es medida cautelar (dura mientras dura el proceso y la pena); la fracc. IV es sanción (dura el tiempo de inhabilitación fijado en sentencia). La primera cesa con la absolución o extinción de la pena; la segunda tiene su propio plazo independiente de esos supuestos."
  },
  {
    sa:"1.3", sal:"Ciudadanía",
    ref:"CPEUM (2025), Art. 35, fracc. VII",
    p:"El Art. 35, fracc. VII CPEUM reconoce el derecho de iniciativa ciudadana. Para ejercerlo se requiere el respaldo del 0.13% de la lista nominal de electores.",
    pt:"Iniciativa ciudadana vs. iniciativa preferente",
    q:"¿En qué se distingue la iniciativa ciudadana del Art. 35, fracc. VII de la iniciativa preferente del Art. 71, párrafo tercero CPEUM?",
    o:["Son equivalentes; la diferencia es solo el origen (ciudadanos vs. Ejecutivo) pero producen los mismos efectos procesales.",
       "La iniciativa ciudadana tiene prioridad sobre cualquier otra y el Congreso está obligado a aprobarla sin modificaciones.",
       "La iniciativa ciudadana puede ser presentada directamente por ciudadanos con el 0.13% de firmas de la lista nominal y el Congreso la puede aprobar, modificar o rechazar sin plazo fijo. La iniciativa preferente es presentada por el Ejecutivo Federal y obliga al Congreso a dictaminar en el periodo ordinario de sesiones en que se presentó; si no se dictamina, se tiene por aprobada."],
    c:2,
    ex:"La distinción es sobre el sujeto y los efectos procesales: la ciudadana (Art. 35, fracc. VII) tiene tramite ordinario sin preferencia ni plazo forzado de dictaminación. La preferente (Art. 71 párr. 3) la envía el Ejecutivo y si el Congreso no dictamina en el periodo, se tiene por aprobada en sus términos. La preferente tiene mayor eficacia procesal que la ciudadana."
  },
  {
    sa:"1.3", sal:"Ciudadanía",
    ref:"CPEUM (2025), Art. 41, Base I; Prud'homme, Cuad. N°15, INE (2016)",
    p:"El Art. 41, Base I CPEUM establece que los partidos políticos tienen como fin promover la participación del pueblo en la vida democrática. Prud'homme (2016) analiza la democracia representativa y sus mecanismos de participación en México.",
    pt:"Partidos y participación ciudadana directa",
    q:"¿Cuál es la tensión que identifica Prud'homme entre la democracia representativa basada en partidos y los mecanismos de democracia directa incorporados en la CPEUM?",
    o:["La tensión radica en que los partidos son intermediarios entre ciudadanía y Estado, lo que puede generar distancia entre representantes y representados; los mecanismos de democracia directa (consulta popular, revocación, iniciativa ciudadana) buscan reducir esa distancia pero pueden generar conflicto con la lógica representativa si la decisión ciudadana directa contradice la decisión de los representantes electos.",
       "No existe tensión: partidos y democracia directa son mecanismos completamente compatibles sin ninguna contradicción.",
       "Prud'homme concluye que los mecanismos de democracia directa deben abolirse porque debilitan el sistema de partidos."],
    c:0,
    ex:"Prud'homme (2016) identifica la tensión clásica en las democracias contemporáneas: la representación otorga mandato pero puede generar brecha entre representante y ciudadano; la democracia directa acorta esa brecha pero puede deslegitimar las decisiones de los cuerpos representativos. La CPEUM busca equilibrar ambas lógicas sin subordinar una a la otra."
  },
  {
    sa:"1.3", sal:"Ciudadanía",
    ref:"Artículo 35, fracción IX, numeral 4",
    p:null, pt:null,
    q:"¿Qué requisito es necesario para que el resultado de un proceso de Revocación de Mandato sea válido y vinculatorio?",
    o:["Que participe al menos el 33% de la lista nominal y gane la mayoría simple.",
       "Que participe al menos el 40% de la lista nominal y exista mayoría absoluta de los votos depositados.",
       "Que participe el 50% de la lista nominal y el INE valide la jornada."],
    c:1,
    ex:"Artículo 35, fracción IX, numeral 4. Al igual que en la Consulta Popular, se requiere el 40% de participación de la lista nominal para que sea vinculante. Sin embargo, para que el mandato se revoque, se requiere específicamente la mayoría absoluta de los votos emitidos (50% + 1)."
  },
  {
    sa:"1.3", sal:"Ciudadanía",
    ref:"Artículo 116, fracción I, primer párrafo",
    p:null, pt:null,
    q:"¿Pueden los ciudadanos mexicanos solicitar la Revocación de Mandato de gobernadores o del Jefe de Gobierno de la CDMX?",
    o:["No, la Revocación de Mandato es exclusiva para el Presidente de la República.",
       "Sí, la Constitución Federal obliga a las entidades federativas a prever esta figura en sus constituciones locales.",
       "Solo si el Congreso de la Unión lo autoriza mediante decreto especial."],
    c:1,
    ex:"Artículo 116, fracción I, primer párrafo. La Constitución Federal establece que las constituciones de los Estados deberán garantizar el derecho a solicitar la revocación de mandato del titular del Ejecutivo local."
  },
  {
    sa:"1.3", sal:"Ciudadanía",
    ref:"Artículo 38, fracción V",
    p:null, pt:null,
    q:"¿Qué sucede con los derechos de ciudadanía de una persona que se encuentra prófuga de la justicia?",
    o:["Se mantienen vigentes hasta que exista una sentencia condenatoria.",
       "Se suspenden desde que se dicte la orden de aprehensión hasta que prescriba la acción penal o se dicte sentencia.",
       "Se suspenden de por vida, sin posibilidad de rehabilitación."],
    c:1,
    ex:"Artículo 38, fracción V. La condición de prófugo de la justicia, con orden de aprehensión dictada, es causal de suspensión de prerrogativas ciudadanas."
  },
  {
    sa:"1.3", sal:"Ciudadanía",
    ref:"Artículo 35, fracción IX, numeral 1 de la CPEUM",
    p:null, pt:null,
    q:"¿Cuál es el porcentaje mínimo de ciudadanos inscritos en la lista nominal de electores necesario para que proceda la solicitud de Revocación de Mandato del Presidente de la República?",
    o:["3%.",
       "10%.",
       "33%."],
    c:0,
    ex:"Artículo 35, fracción IX, numeral 1 de la CPEUM. La solicitud debe ser suscrita por un número de ciudadanos equivalente a, al menos, el tres por ciento de la lista nominal, distribuidos en al menos diecisiete entidades federativas."
  },
  {
    sa:"1.3", sal:"Ciudadanía",
    ref:"Artículo 37, Apartado C, fracción I de la CPEUM",
    p:null, pt:null,
    q:"¿En qué caso se puede perder la ciudadanía mexicana (no la nacionalidad)?",
    o:["Por adquirir una segunda nacionalidad.",
       "Por prestar voluntariamente servicios oficiales a un gobierno extranjero sin permiso del Ejecutivo Federal o del Congreso.",
       "Por residir más de 5 años en el extranjero."],
    c:1,
    ex:"Artículo 37, Apartado C, fracción I de la CPEUM. La ciudadanía (el ejercicio de derechos políticos) se puede perder por servir a gobiernos extranjeros sin la debida autorización, entre otras causas como aceptar títulos nobiliarios que impliquen sumisión a otro Estado."
  },

  /* ══════════════════════════════════════════════════
     1.4  SISTEMA DE PARTIDOS EN MÉXICO  (8 preguntas)
  ══════════════════════════════════════════════════ */
  {
    sa:"1.4", sal:"Sistema de partidos en México",
    ref:"LGPP (2023), Arts. 51–61",
    p:"La LGPP regula el financiamiento de los partidos políticos, distinguiendo el financiamiento público ordinario del de actividades específicas y del de campaña.",
    pt:"Tipos de financiamiento público de partidos",
    q:"¿Cuáles son los tres tipos de financiamiento público que la LGPP reconoce para los partidos políticos y en qué se diferencian?",
    o:["Solo existe un tipo de financiamiento público: el ordinario anual. Los demás son privados y autorregulados por cada partido.",
       "Los tres tipos son: financiamiento federal, financiamiento estatal y financiamiento municipal, según el nivel de gobierno.",
       "La LGPP distingue: financiamiento para actividades ordinarias permanentes (sostenimiento de la estructura y actividad política ordinaria); financiamiento para actividades específicas como educación, capacitación y liderazgo político; y financiamiento para gastos de campaña, que solo se activa durante los procesos electorales y tiene reglas y topes distintos."],
    c:2,
    ex:"La LGPP clasifica el financiamiento público en tres modalidades con objetos distintos: ordinario (funcionamiento permanente del partido), por actividades específicas (educación cívica, capacitación, investigación) y de campaña (gastos durante el proceso electoral). Cada uno tiene fórmulas de cálculo y reglas de uso distintas para garantizar transparencia y rendición de cuentas."
  },
  {
    sa:"1.4", sal:"Sistema de partidos en México",
    ref:"LGPP (2023), Arts. 85–98",
    p:"La LGPP regula las alianzas entre partidos. La coalición, el frente y la fusión son las tres figuras de alianza reconocidas, cada una con efectos jurídicos distintos sobre la identidad y el registro de los partidos.",
    pt:"Efectos jurídicos de la fusión de partidos",
    q:"¿Cuál es el efecto jurídico específico de la fusión sobre el registro de los partidos que se fusionan, a diferencia de la coalición?",
    o:["En la fusión cada partido conserva su registro individual pero comparten candidatos y financiamiento por el periodo electoral.",
       "La fusión es idéntica a la coalición pero con duración de dos procesos electorales consecutivos.",
       "La fusión implica la integración permanente de dos o más partidos en uno solo: los partidos fusionados pierden su registro individual y surge un nuevo partido (o uno absorbe al otro). La coalición, en cambio, es temporal para una elección y cada partido conserva su registro."],
    c:2,
    ex:"La distinción es definitoria: fusión = pérdida de registros individuales y surgimiento de un nuevo partido (o absorción), efecto permanente. Coalición = alianza temporal para una elección sin pérdida de registros. La fusión extingue la personalidad jurídica de los partidos fusionados; la coalición no."
  },
  {
    sa:"1.4", sal:"Sistema de partidos en México",
    ref:"LGPP (2023), Art. 94, fracc. I; LGIPE (2024)",
    p:"Conforme a la LGPP, un partido político nacional pierde su registro si no obtiene el porcentaje mínimo de votación en una elección federal ordinaria.",
    pt:"Umbral mínimo de votación y pérdida de registro",
    q:"¿Cuál es la consecuencia jurídica completa de que un partido no obtenga el 3% de la votación válida emitida, más allá de la pérdida del registro?",
    o:["La pérdida del registro implica también la extinción de sus obligaciones de entrega de informes de gastos, la devolución del financiamiento público no ejercido, la liquidación de su patrimonio, la extinción de sus órganos directivos y la imposibilidad de participar en elecciones hasta que se re-registre con un nuevo proceso de constitución.",
       "La única consecuencia es la pérdida del registro; el partido puede reconvertirse en agrupación política nacional automáticamente.",
       "El partido pierde el registro pero puede continuar participando en elecciones locales con el registro que le otorguen los OPLEs de cada estado."],
    c:0,
    ex:"La pérdida del registro tiene efectos en cascada: se extingue el partido como sujeto de derecho electoral, debe liquidar su patrimonio, devolver financiamiento no ejercido, cesar sus obligaciones de informes ante el INE y no puede participar en elecciones hasta constituirse nuevamente cumpliendo todos los requisitos. No hay continuidad automática a nivel local."
  },
  {
    sa:"1.4", sal:"Sistema de partidos en México",
    ref:"Artículo 41, base II, inciso a)",
    p:null, pt:null,
    q:"¿Cuál es la fórmula constitucional para calcular el monto total del financiamiento público para actividades ordinarias?",
    o:["Multiplicar el número total de ciudadanos inscritos en el padrón electoral por el 65% del valor diario de la UMA.",
       "Multiplicar la lista nominal por el 3% del salario mínimo vigente.",
       "Multiplicar los votos válidos emitidos por el valor de una UMA diaria."],
    c:0,
    ex:"Artículo 41, base II, inciso a). Es importante no confundir Padrón Electoral con Lista Nominal. La Constitución especifica \"Padrón Electoral\" para este cálculo, lo cual genera un monto ligeramente mayor."
  },
  {
    sa:"1.4", sal:"Sistema de partidos en México",
    ref:"Artículo 41, base II, inciso b)",
    p:null, pt:null,
    q:"¿A cuánto asciende el financiamiento para gastos de campaña en el año en que se elija al Presidente de la República, Senadores y Diputados?",
    o:["Al 30% del financiamiento ordinario de ese año.",
       "Al 50% del financiamiento ordinario que le corresponda a cada partido.",
       "Al 100% del financiamiento ordinario; es decir, reciben el doble de presupuesto."],
    c:1,
    ex:"Artículo 41, base II, inciso b). En elecciones presidenciales (año de renovación total), los partidos reciben un 50% adicional para campañas. En elecciones intermedias (solo Diputados), este monto es solo del 30%."
  },
  {
    sa:"1.4", sal:"Sistema de partidos en México",
    ref:"Artículo 41, base II, inciso c)",
    p:null, pt:null,
    q:"¿Qué porcentaje del financiamiento público deben destinar los partidos políticos anualmente para la capacitación, promoción y desarrollo del liderazgo político de las mujeres?",
    o:["El 2% del financiamiento ordinario.",
       "El 3% del financiamiento ordinario.",
       "El 5% del financiamiento ordinario."],
    c:1,
    ex:"Artículo 41, base II, inciso c). Este es un etiquetado de gasto obligatorio. Si un partido no acredita el gasto del 3% en este rubro, es sancionado por la Unidad de Fiscalización del INE."
  },
  {
    sa:"1.4", sal:"Sistema de partidos en México",
    ref:"Artículo 41, base V, apartado B",
    p:null, pt:null,
    q:"¿Qué sucede si un partido político nacional no presenta sus informes de gastos de precampaña en los términos de ley?",
    o:["Se le impone una multa del doble del monto no reportado.",
       "La sanción será la pérdida del derecho del precandidato infractor a ser registrado como candidato.",
       "Se le reduce el tiempo de radio y televisión por un periodo de 30 días."],
    c:1,
    ex:"Artículo 41, base V, apartado B. Esta es una de las sanciones más severas en materia de fiscalización (recordemos casos famosos en Guerrero y Michoacán). La omisión de informes de precampaña es fatal para la aspiración de la candidatura."
  },
  {
    sa:"1.4", sal:"Sistema de partidos en México",
    ref:"Ley General de Partidos Políticos (LGPP)",
    p:null, pt:null,
    q:"¿Cuál es el límite de financiamiento privado que puede recibir un partido político para sus actividades ordinarias?",
    o:["No tiene límite, siempre que sea de origen lícito.",
       "El tope es el equivalente al 2% del financiamiento público otorgado a la totalidad de los partidos.",
       "No puede exceder del 10% del financiamiento público que reciba ese partido específico."],
    c:1,
    ex:"Ley General de Partidos Políticos (LGPP). El límite de aportaciones privadas de militantes y simpatizantes está topado por la ley para asegurar que el financiamiento público siempre sea preponderante, evitando así la captura de partidos por intereses privados."
  },

  /* ══════════════════════════════════════════════════
     2.1  PRINCIPIOS DEL SISTEMA ELECTORAL  (6 preguntas)
  ══════════════════════════════════════════════════ */
  {
    sa:"2.1", sal:"Principios del sistema electoral",
    ref:"CPEUM (2025), Art. 41, Base V; Prud'homme, Cuad. N°15, INE (2016)",
    p:"El Art. 41 Base V CPEUM establece siete principios rectores de la función electoral del INE. Prud'homme (2016) analiza la dimensión democrática de la función electoral y la importancia de la autonomía institucional.",
    pt:"Principios electorales y autonomía institucional",
    q:"¿Cuál es la relación entre el principio de independencia del INE y el principio de imparcialidad, y por qué Prud'homme (2016) señala que la independencia es condición necesaria pero no suficiente para la imparcialidad?",
    o:["Son el mismo principio expresado de dos formas: si el INE es independiente, automáticamente es imparcial.",
       "La independencia es más importante que la imparcialidad; en caso de conflicto, el INE debe priorizar su independencia sobre su imparcialidad.",
       "La independencia garantiza que el INE no reciba instrucciones externas de los poderes públicos; la imparcialidad exige que internamente los consejeros actúen sin favoritismos hacia partidos o candidatos. Un INE puede ser formalmente independiente pero en la práctica parcial si sus consejeros tienen sesgos internos. Por eso la independencia es necesaria pero la imparcialidad requiere además mecanismos de control internos."],
    c:2,
    ex:"Prud'homme (2016) distingue la dimensión externa (independencia: sin presiones externas) de la dimensión interna (imparcialidad: sin favoritismos internos). Un organismo puede ser independiente del gobierno pero sus integrantes actuar parcialmente. La imparcialidad requiere, además de independencia, mecanismos de transparencia, accountability y rendición de cuentas interna."
  },
  {
    sa:"2.1", sal:"Principios del sistema electoral",
    ref:"Artículos 52 y 54",
    p:null, pt:null,
    q:"¿Cuál es el principio que permite a las minorías estar representadas en los órganos legislativos, evitando la hegemonía de un solo partido?",
    o:["Mayoría Relativa.",
       "Representación Proporcional.",
       "Voto Distrital."],
    c:1,
    ex:"Artículos 52 y 54. El sistema electoral mexicano es mixto. La Representación Proporcional (las plurinominales) es el mecanismo que garantiza el pluralismo político, permitiendo que los votos de quienes no ganaron en los distritos también cuenten para integrar el Congreso."
  },
  {
    sa:"2.1", sal:"Principios del sistema electoral",
    ref:"CPEUM · Legislación electoral vigente",
    p:null, pt:null,
    q:"La consiste en la colocación sucesiva de candidaturas de género distinto en las listas de representación proporcional, con el fin de asegurar una integración equilibrada en los órganos legislativos.",
    o:["paridad horizontal",
       "alternancia de género",
       "cuota preferente"],
    c:1,
    ex:"Según la normativa electoral, las listas deben integrarse por fórmulas de candidatos (propietario y suplente del mismo género) que se alternen consecutivamente (Hombre, Mujer, Hombre, Mujer, o viceversa) para evitar que un solo género ocupe los primeros lugares con mayor posibilidad de acceso."
  },
  {
    sa:"2.1", sal:"Principios del sistema electoral",
    ref:"Artículo 41",
    p:null, pt:null,
    q:"9.- ¿Cómo se aplica la alternancia de género en la conformación de las fórmulas de candidaturas (propietario y suplente)?",
    o:["Pueden ser de géneros distintos siempre.",
       "El propietario y el suplente deben ser del mismo género para garantizar que, en caso de ausencia, se mantenga la paridad del órgano.",
       "Solo si el propietario es hombre, el suplente puede ser mujer."],
    c:1,
    ex:"Artículo 41. La regla de \"fórmulas del mismo género\" impide que un partido postule a una mujer como propietaria (para cumplir la cuota) y a un hombre como suplente, obligando a la mujer a pedir licencia para que suba el hombre."
  },
  {
    sa:"2.1", sal:"Principios del sistema electoral",
    ref:"Sentencias del TEPJF sobre paridad sustantiva.",
    p:null, pt:null,
    q:"¿Qué principio se aplica cuando el INE ajusta las listas de RP para asegurar que el Congreso sea paritario?",
    o:["Principio de Compensación o Ajuste de Paridad.",
       "Principio de Mayoría.",
       "Principio de Jerarquía."],
    c:0,
    ex:"Sentencias del TEPJF sobre paridad sustantiva.. Si tras la elección el número de hombres excede al de mujeres, el INE tiene la facultad (y obligación) de realizar ajustes en las listas de RP para que la integración final sea 50/50, incluso si esto implica saltar el orden de prelación original."
  },
  {
    sa:"2.1", sal:"Principios del sistema electoral",
    ref:"Artículo 41 de la CPEUM y LGIPE",
    p:null, pt:null,
    q:"¿Cómo se aplica la alternancia de género en la conformación de las fórmulas de candidaturas (propietario y suplente)?",
    o:["Pueden ser de géneros distintos siempre.",
       "El propietario y el suplente deben ser del mismo género para garantizar que, en caso de ausencia, se mantenga la paridad del órgano.",
       "Solo si el propietario es hombre, el suplente puede ser mujer."],
    c:1,
    ex:"Artículo 41 de la CPEUM y LGIPE. La regla de \"fórmulas del mismo género\" impide que un partido postule a una mujer como propietaria (para cumplir la cuota) y a un hombre como suplente, obligando a la mujer a pedir licencia para que suba el hombre."
  },

  /* ══════════════════════════════════════════════════
     2.2  TIPOS DE SISTEMAS ELECTORALES  (6 preguntas)
  ══════════════════════════════════════════════════ */
  {
    sa:"2.2", sal:"Tipos de sistemas electorales",
    ref:"CPEUM (2025), Arts. 52–54; Prud'homme, Cuad. N°15, INE (2016)",
    p:"México usa un sistema mixto para la Cámara de Diputados: 300 por MR en distritos uninominales y 200 por RP en 5 circunscripciones. El techo del Art. 54 limita la sobrerrepresentación.",
    pt:"Sistema mixto y sus efectos sobre la representación",
    q:"¿Por qué el sistema mixto mexicano no garantiza proporcionalidad perfecta entre votos y escaños, a diferencia de los sistemas de RP pura?",
    o:["Porque el INE no tiene competencia para calcular la proporcionalidad exacta; eso corresponde al TEPJF.",
       "Porque la proporcionalidad perfecta está expresamente prohibida en la CPEUM para garantizar gobernabilidad.",
       "Porque la coexistencia de dos principios (MR y RP) genera inevitablemente sobrerrepresentación o subrepresentación: los partidos que ganan muchos distritos uninominales por MR pueden llegar al techo del 8% de la cláusula de sobrerrepresentación antes de recibir diputados de RP, reduciendo así la proporcionalidad del sistema. La RP solo compensa parcialmente los sesgos de la MR."],
    c:2,
    ex:"El sistema mixto mexicano usa la RP para compensar los sesgos mayoritarios de la MR, pero la compensación es incompleta por la cláusula de sobrerrepresentación del Art. 54. Un partido puede ganar muchos distritos y llegar al techo antes de recibir diputados de RP, resultando en sobrerrepresentación residual. La RP pura evitaría esto, pero el sistema mixto prioriza gobernabilidad sobre proporcionalidad perfecta."
  },
  {
    sa:"2.2", sal:"Tipos de sistemas electorales",
    ref:"Artículo 56",
    p:null, pt:null,
    q:"6.- ¿Qué es el sistema de PRIMERA MINORÍA en la elección del Senado en México?",
    o:["Es el escaño que se le otorga al partido que quedó en tercer lugar.",
       "Es el escaño que se le asigna al partido político que ocupó el segundo lugar en la votación de la entidad federativa.",
       "Es un escaño reservado para candidatos independientes."],
    c:1,
    ex:"Artículo 56. En cada estado se eligen 3 senadores: 2 para la fórmula que ganó (Mayoría Relativa) y 1 para el primer lugar de la fórmula del partido que quedó en segundo lugar (Primera Minoría)."
  },
  {
    sa:"2.2", sal:"Tipos de sistemas electorales",
    ref:"Artículo 54, fracción V",
    p:null, pt:null,
    q:"7.- ¿Cuál es el límite de SOBRE-REPRESENTACIÓN que puede tener un partido político en la Cámara de Diputados?",
    o:["No puede exceder en 8 puntos porcentuales su porcentaje de votación nacional emitida.",
       "No puede tener más de 250 diputados en total.",
       "No puede exceder el 50% de la Cámara."],
    c:0,
    ex:"Artículo 54, fracción V. Esta es una regla de equidad: ningún partido puede tener una representación en la Cámara que supere en 8 puntos su fuerza real en las urnas, para evitar que una mayoría relativa se convierta en una mayoría artificialmente aplastante."
  },
  {
    sa:"2.2", sal:"Tipos de sistemas electorales",
    ref:"Artículo 54, fracción II",
    p:null, pt:null,
    q:"8.- ¿Qué se entiende por \"Barrera Electoral\" o \"Umbral de Representatividad\"?",
    o:["El muro físico que rodea las casillas.",
       "El porcentaje mínimo de votos que un partido debe obtener para tener derecho a que se le asignen escaños de representación proporcional.",
       "El límite de edad para ser candidato."],
    c:1,
    ex:"Artículo 54, fracción II. En México, este umbral es del 3%. Si un partido obtiene el 2.9%, no tiene derecho a diputados plurinominales."
  },
  {
    sa:"2.2", sal:"Tipos de sistemas electorales",
    ref:"LGIPE.",
    p:null, pt:null,
    q:"9.- ¿Qué es el COCIENTE NATURAL en la fórmula de asignación de escaños de RP?",
    o:["El número de votos que cuesta cada escaño, obtenido al dividir la votación nacional emitida entre los 200 escaños por repartir.",
       "El número de afiliados que tiene un partido.",
       "La cantidad de votos nulos."],
    c:0,
    ex:"LGIPE.. Es la unidad de medida básica para el reparto. Si un partido tiene votos equivalentes a 5 \"cocientes naturales\", se le asignan 5 diputados de forma directa."
  },
  {
    sa:"2.2", sal:"Tipos de sistemas electorales",
    ref:"LGIPE.",
    p:null, pt:null,
    q:"10.- ¿Qué es el sistema de LISTA CERRADA Y BLOQUEADA que se usa en México para la RP?",
    o:["Una lista donde los ciudadanos pueden cambiar el orden de los candidatos.",
       "Una lista donde el orden de los candidatos es determinado por el partido y el elector vota por la lista completa, sin poder modificarla.",
       "Una lista que solo se abre el día de la elección."],
    c:1,
    ex:"LGIPE.. El ciudadano vota por el logotipo del partido, aceptando el orden de prelación que el partido registró ante el INE. No existe el \"voto preferencial\" por un candidato específico dentro de la lista."
  },

  /* ══════════════════════════════════════════════════
     2.3  AUTORIDADES ELECTORALES  (8 preguntas)
  ══════════════════════════════════════════════════ */
  {
    sa:"2.3", sal:"Autoridades electorales",
    ref:"LGIPE (2024), Arts. 120–124",
    p:"La LGIPE regula la relación entre el INE y los OPLEs mediante las figuras de atracción y asunción de funciones. Cada figura tiene presupuestos, efectos y alcances distintos.",
    pt:"Asunción de funciones del INE sobre OPLEs",
    q:"¿Cuáles son los presupuestos específicos que deben acreditarse para que el INE pueda asumir totalmente las funciones de un OPLE conforme a la LGIPE?",
    o:["La asunción procede cuando: (1) se acredita que los principios rectores electorales no están siendo garantizados por el OPLE; (2) existe situación de violencia que impide al OPLE funcionar; (3) el OPLE lo solicita por carecer de condiciones para organizar la elección; o (4) así lo determina el Consejo General por mayoría calificada ante situación excepcional. Ningún supuesto puede operar por mera conveniencia.",
       "Basta que el Consejo General del INE lo decida por mayoría simple cuando considere conveniente intervenir.",
       "La asunción procede automáticamente en cualquier elección local concurrente con una federal sin necesidad de acreditar ningún presupuesto."],
    c:0,
    ex:"La LGIPE establece causales taxativas para la asunción: no es discrecional del INE. Se requiere acreditar causas graves (violación a principios electorales, violencia, incapacidad operativa del OPLE) y la decisión requiere mayoría calificada del Consejo General. El principio es el respeto a la autonomía de los OPLEs; la asunción es la excepción."
  },
  {
    sa:"2.3", sal:"Autoridades electorales",
    ref:"LGIPE (2024), Arts. 29–34; CPEUM, Art. 41",
    p:"El INE es un organismo público autónomo con personalidad jurídica y patrimonio propios. Su autonomía se manifiesta en distintas dimensiones: presupuestal, orgánica, funcional y normativa.",
    pt:"Dimensiones de la autonomía del INE",
    q:"¿Cuál es la dimensión de autonomía del INE que garantiza que sus decisiones no puedan ser revertidas por ningún poder del Estado?",
    o:["La autonomía presupuestal: al tener presupuesto propio no depende del Ejecutivo y puede dictar lo que quiera.",
       "La autonomía normativa: el INE puede expedir leyes electorales sin pasar por el Congreso.",
       "La autonomía funcional: las resoluciones del Consejo General del INE en su ámbito de competencia son definitivas e inimpugnables por la vía administrativa ordinaria; solo pueden ser revisadas jurisdiccionalmente por el TEPJF o impugnadas ante la SCJN mediante acciones de inconstitucionalidad, no por órdenes del Ejecutivo o el Legislativo."],
    c:2,
    ex:"La autonomía funcional es la dimensión que protege las decisiones del INE de la interferencia política: ningún poder puede ordenarle que revoque o cambie una resolución. El único control es jurisdiccional (TEPJF en lo electoral, SCJN en lo constitucional). La autonomía presupuestal y orgánica son condiciones necesarias pero no suficientes para esto."
  },
  {
    sa:"2.3", sal:"Autoridades electorales",
    ref:"LGMDE (2021); LGIPE (2024); CPEUM, Art. 41",
    p:"Existen dos tipos de control sobre la conducta de los actores electorales: el control administrativo (infracciones) y el control penal (delitos electorales). Ambos pueden coexistir sobre la misma conducta.",
    pt:"Coexistencia del control administrativo y penal electoral",
    q:"¿Puede una misma conducta generar simultáneamente una infracción administrativa electoral sancionada por el INE y un delito electoral investigado por la FISEL? ¿Por qué?",
    o:["No, porque el principio ne bis in idem prohíbe que la misma conducta sea sancionada dos veces.",
       "Solo puede generar responsabilidad penal; la administrativa queda absorbida automáticamente por la penal.",
       "Sí, porque las infracciones administrativas y los delitos electorales son categorías jurídicas distintas con bienes jurídicos protegidos distintos, órganos competentes distintos y sanciones de naturaleza distinta (administrativa vs. penal). El ne bis in idem no impide la concurrencia porque no hay doble sanción de la misma naturaleza por la misma causa."],
    c:2,
    ex:"La concurrencia de responsabilidades es posible y frecuente: una misma conducta (ej. destruir boletas) puede ser infracción administrativa (sanciona el INE con multa o pérdida de registro) y delito electoral (investiga la FISEL con consecuencias penales). No viola el ne bis in idem porque las responsabilidades son de distinta naturaleza jurídica. Esta doble vía es un mecanismo de disuasión reforzado."
  },
  {
    sa:"2.3", sal:"Autoridades electorales",
    ref:"Artículo 41, Base V, Apartado C, inciso b)",
    p:null, pt:null,
    q:"6.- ¿En qué consiste la facultad de ATRACCIÓN del Instituto Nacional Electoral (INE)?",
    o:["En la capacidad de atraer hacia su competencia cualquier asunto de la organización de una elección local que, por su importancia o trascendencia, requiera la intervención del INE.",
       "En la facultad de absorber la totalidad de la organización de una elección local debido a condiciones de inseguridad.",
       "En el derecho de atraer a los mejores perfiles de los OPLES para integrarlos al Servicio Profesional Electoral Nacional."],
    c:0,
    ex:"Artículo 41, Base V, Apartado C, inciso b). La atracción se enfoca en temas específicos o criterios jurídicos que, por su relevancia, el INE decide resolver para sentar un precedente nacional en procesos locales."
  },
  {
    sa:"2.3", sal:"Autoridades electorales",
    ref:"Artículos 120-123 de la LEGIPE y Reglamento de Elecciones.",
    p:null, pt:null,
    q:"7.- ¿Cuál es la diferencia fundamental entre la ASUNCIÓN TOTAL y la ASUNCIÓN PARCIAL de una elección local?",
    o:["La total la aprueba el Congreso y la parcial el Consejo General del INE.",
       "La total implica que el INE organiza íntegramente la elección local; la parcial implica que el INE solo asume la implementación de algunas etapas o actividades específicas del proceso.",
       "No existe la asunción parcial, todas las asunciones deben ser sobre el proceso completo."],
    c:1,
    ex:"Artículos 120-123 de la LEGIPE y Reglamento de Elecciones.. La asunción total es una medida extrema donde el INE sustituye al OPLE. La parcial se utiliza cuando el OPLE tiene capacidad técnica general pero requiere que el INE opere un rubro específico (ej. el Programa de Resultados Electorales Preliminares)."
  },
  {
    sa:"2.3", sal:"Autoridades electorales",
    ref:"Artículo 41, Base V",
    p:null, pt:null,
    q:"8.- ¿Cuál es la naturaleza de los CONSEJOS LOCALES Y DISTRITALES dentro de la estructura del INE?",
    o:["Son órganos permanentes que funcionan durante todo el año en las 32 entidades y 300 distritos.",
       "Son órganos temporales que se integran y funcionan únicamente durante los procesos electorales federales.",
       "Son órganos de vigilancia integrados exclusivamente por representantes de los partidos políticos."],
    c:1,
    ex:"Artículo 41, Base V. A diferencia de las \"Juntas\" , los \"Consejos\" son órganos colegiados de dirección que se instalan solo para el proceso electoral, integrando a ciudadanos que actúan como consejeros electorales."
  },
  {
    sa:"2.3", sal:"Autoridades electorales",
    ref:"Artículo 76 de la LEGIPE.",
    p:null, pt:null,
    q:"9.- ¿Cómo se integran los Consejos Distritales del INE durante un proceso electoral?",
    o:["Por un Consejero Presidente, 6 Consejeros Electorales con voz y voto, representantes de partidos y de candidatos independientes, y un Secretario.",
       "Por el Vocal Ejecutivo Distrital y los Presidentes Municipales de la zona.",
       "Únicamente por ciudadanos insaculados al azar sin derecho a remuneración."],
    c:0,
    ex:"Artículo 76 de la LEGIPE.. Los 6 consejeros ciudadanos son la garantía de vigilancia civil sobre la operación técnica que realiza la Junta Distrital."
  },
  {
    sa:"2.3", sal:"Autoridades electorales",
    ref:"LGIPE.",
    p:null, pt:null,
    q:"10.- ¿Quién tiene la facultad de designar a los integrantes de los Consejos Locales del INE?",
    o:["El Presidente de la República.",
       "El Consejo General del INE.",
       "La Cámara de Diputados por mayoría calificada."],
    c:1,
    ex:"LGIPE.. Es el Consejo General quien, tras una convocatoria pública, designa a los ciudadanos que integrarán los 32 Consejos Locales (uno por cada entidad federativa) para vigilar el proceso."
  },

  /* ══════════════════════════════════════════════════
     2.4  DELITOS ELECTORALES  (6 preguntas)
  ══════════════════════════════════════════════════ */
  {
    sa:"2.4", sal:"Delitos electorales",
    ref:"LGMDE (2021), Arts. 11, 12 y 23",
    p:"La LGMDE tipifica distintas conductas como delitos electorales. El Art. 11 se refiere a conductas de funcionarios electorales; el Art. 12, a conductas de candidatos y servidores públicos; el Art. 23, a conductas de ministros de culto.",
    pt:"Tipificación de delitos electorales por sujeto activo",
    q:"¿Por qué la LGMDE establece tipos penales diferenciados según el sujeto activo del delito electoral?",
    o:["Porque el daño al bien jurídico protegido (la libertad y autenticidad del sufragio y el correcto desarrollo del proceso electoral) varía según la posición institucional del sujeto activo: un funcionario electoral que manipula actas causa un daño mayor y con distinta naturaleza que un ciudadano que coacciona votos; un servidor público que usa recursos públicos tiene acceso a medios que otros sujetos no tienen. La diferenciación permite una respuesta punitiva proporcional al daño institucional causado.",
       "Por razones procesales: los distintos tipos penales facilitan la investigación de la FISEL al indicar qué pruebas recopilar.",
       "Porque la LGMDE transpone literalmente los tipos penales del Código Penal Federal sin ninguna adaptación al ámbito electoral."],
    c:0,
    ex:"La tipificación diferenciada por sujeto activo responde al principio de proporcionalidad penal: quien tiene mayor responsabilidad institucional y mayores recursos para afectar el proceso electoral recibe una respuesta más severa. Un Presidente Municipal que usa recursos públicos para coacción electoral causa un daño distinto al de un ciudadano que vende su voto; el tipo penal diferenciado refleja esa asimetría de poder."
  },
  {
    sa:"2.4", sal:"Delitos electorales",
    ref:"Artículo 13 de la Ley General en Materia de Delitos Electorales.",
    p:null, pt:null,
    q:"6.- ¿En qué consiste el delito de \"Alteración del Registro Federal de Electores\"?",
    o:["En perder la credencial para votar por descuido.",
       "En participar en la expedición ilícita de credenciales para votar o proporcionar datos falsos para el padrón electoral.",
       "En corregir una falta de ortografía en el padrón electoral sin aviso previo."],
    c:1,
    ex:"Artículo 13 de la Ley General en Materia de Delitos Electorales.. El padrón electoral es un documento de seguridad nacional. Cualquier alteración dolosa (como el \"turismo electoral\", donde se mueven personas de un estado a otro con domicilios falsos) es un delito grave."
  },
  {
    sa:"2.4", sal:"Delitos electorales",
    ref:"Artículo 8, fracción V de la Ley General en Materia de Delitos Electorales.",
    p:null, pt:null,
    q:"7.- ¿Qué conducta se considera un delito electoral cometido por funcionarios de casilla el día de la jornada?",
    o:["Llegar tarde a la instalación de la casilla por causas de fuerza mayor.",
       "Permitir que una persona sufrague sin credencial para votar o sin aparecer en la lista nominal, a sabiendas de tal circunstancia.",
       "Equivocarse en la suma de los votos durante el escrutinio de forma accidental."],
    c:1,
    ex:"Artículo 8, fracción V de la Ley General en Materia de Delitos Electorales.. Se sanciona el dolo. Si el funcionario permite votar a alguien sabiendo que no tiene derecho, atenta directamente contra la certeza del proceso."
  },
  {
    sa:"2.4", sal:"Delitos electorales",
    ref:"Artículo 7, fracción IV de la Ley General en Materia de Delitos Electorales.",
    p:null, pt:null,
    q:"8.- ¿Es delito electoral recoger o retener, sin causa prevista por la ley, credenciales para votar de los ciudadanos?",
    o:["Sí, es un delito que busca evitar la manipulación del voto o la inhibición de la participación.",
       "No, siempre que se devuelvan al concluir la jornada electoral.",
       "Solo si se recogen más de 10 credenciales al mismo tiempo."],
    c:0,
    ex:"Artículo 7, fracción IV de la Ley General en Materia de Delitos Electorales.. Nadie, fuera de la autoridad electoral en casos específicos, puede retener tu credencial. Es una táctica común para impedir que simpatizantes de otros partidos acudan a las urnas."
  },
  {
    sa:"2.4", sal:"Delitos electorales",
    ref:"Artículo 20 Bis de la Ley General en Materia de Delitos Electorales.",
    p:null, pt:null,
    q:"9.- ¿Qué se entiende por Violencia Política contra las Mujeres en Razón de Género en el ámbito penal?",
    o:["Cualquier discusión acalorada entre un candidato y una candidata.",
       "Toda acción u omisión que se dirija a una mujer por ser mujer, con el objeto de menoscabar o anular sus derechos político-electorales.",
       "La falta de presupuesto para las campañas de las mujeres."],
    c:1,
    ex:"Artículo 20 Bis de la Ley General en Materia de Delitos Electorales.. Esta es una adición reciente y fundamental. Incluye amenazas, difamación por motivos de género, restricción de recursos o cualquier acto que impida el ejercicio del cargo por prejuicios de género."
  },
  {
    sa:"2.4", sal:"Delitos electorales",
    ref:"Artículo 7, fracción XV de la Ley General en Materia de Delitos Electorales.",
    p:null, pt:null,
    q:"10.- ¿Cuál es la sanción para quien publique o difunda encuestas o sondeos de opinión durante los tres días previos a la elección y hasta el cierre oficial de las casillas?",
    o:["Una multa administrativa impuesta por el INE.",
       "Multa y prisión, por violar el periodo de reflexión ciudadana (veda electoral).",
       "No hay sanción si se publica en redes sociales personales."],
    c:1,
    ex:"Artículo 7, fracción XV de la Ley General en Materia de Delitos Electorales.. La veda electoral busca que el ciudadano reflexione su voto sin influencias externas de último momento. Publicar encuestas en este periodo es una conducta sancionada penalmente."
  },

  /* ══════════════════════════════════════════════════
     2.5  CANDIDATURAS INDEPENDIENTES  (6 preguntas)
  ══════════════════════════════════════════════════ */
  {
    sa:"2.5", sal:"Candidaturas independientes",
    ref:"LGIPE (2024), Arts. 357–368",
    p:"Las candidaturas independientes para Presidente, Senador y Diputado federal tienen requisitos diferenciados en la LGIPE. El proceso de obtención del apoyo ciudadano es previo al registro y tiene plazos precisos.",
    pt:"Proceso de obtención de apoyo ciudadano para candidaturas independientes",
    q:"¿Cuál es la diferencia entre la etapa de obtención de apoyo ciudadano y la etapa de registro de la candidatura independiente en el proceso previsto en la LGIPE?",
    o:["Son la misma etapa; el apoyo ciudadano acumulado equivale automáticamente al registro de la candidatura.",
       "La obtención de apoyo ciudadano es posterior al registro; primero el INE registra al aspirante y luego verifica que cumpla con las firmas requeridas.",
       "La obtención de apoyo ciudadano es previa al registro: el aspirante debe reunir el porcentaje requerido de firmas dentro del plazo establecido, con la supervisión del INE. Solo después de acreditar el apoyo suficiente ante el INE, el aspirante puede solicitar formalmente el registro como candidato independiente; el registro es el acto jurídico que lo habilita para participar en la elección."],
    c:2,
    ex:"El proceso tiene dos etapas secuenciales e independientes: 1) Obtención de apoyo ciudadano (firmas verificadas por el INE dentro del plazo, antes de la apertura del periodo de registro). 2) Registro formal de la candidatura (acto jurídico habilitante, una vez acreditado el apoyo). Sin acreditar el apoyo no hay registro; el orden es irreversible."
  },
  {
    sa:"2.5", sal:"Candidaturas independientes",
    ref:"Artículo 399 de la LGIPE y acuerdos del Consejo General.",
    p:null, pt:null,
    q:"6.- ¿Cuál es el límite de financiamiento privado (aportaciones de simpatizantes) para un candidato independiente?",
    o:["No tienen límite, siempre que no exceda el tope de gastos de campaña.",
       "El 10% del tope de gastos de campaña.",
       "El equivalente al financiamiento público que reciban."],
    c:0,
    ex:"Artículo 399 de la LGIPE y acuerdos del Consejo General.. A diferencia de los partidos, donde el dinero público debe prevalecer, a los independientes se les permite que su financiamiento sea mayoritariamente privado para compensar el bajo presupuesto público que reciben, siempre respetando el tope de gastos de campaña."
  },
  {
    sa:"2.5", sal:"Candidaturas independientes",
    ref:"Artículo 412 de la LGIPE.",
    p:null, pt:null,
    q:"7.- ¿Tienen los candidatos independientes derecho a tiempos en radio y televisión?",
    o:["No, ese derecho es exclusivo de los partidos políticos.",
       "Sí, pero solo durante el periodo de campaña y se distribuyen como si fueran un partido de nuevo registro.",
       "Solo si pagan la tarifa comercial correspondiente."],
    c:1,
    ex:"Artículo 412 de la LGIPE.. Tienen acceso a los tiempos del Estado. Se les asigna el tiempo equivalente a un partido de nuevo registro, distribuido de forma igualitaria entre todos los independientes."
  },
  {
    sa:"2.5", sal:"Candidaturas independientes",
    ref:"Artículo 379 de la LGIPE.",
    p:null, pt:null,
    q:"8.- ¿Qué sucede si un candidato independiente no presenta su informe de ingresos y gastos de la etapa de apoyo ciudadano (pre-campaña)?",
    o:["Se le impone una multa y se le permite continuar.",
       "Se le niega el registro como candidato.",
       "Se le reduce el tiempo en radio y televisión."],
    c:1,
    ex:"Artículo 379 de la LGIPE.. La fiscalización es implacable. No presentar el informe de la etapa de recolección de firmas es una falta grave que impide la obtención del registro."
  },
  {
    sa:"2.5", sal:"Candidaturas independientes",
    ref:"Artículo 394 de la LGIPE.",
    p:null, pt:null,
    q:"9.- ¿Puede un candidato independiente ser sustituido por otro en caso de renuncia?",
    o:["Sí, la Asociación Civil puede nombrar a un sustituto.",
       "No, las candidaturas independientes son personales e intransferibles; el derecho al registro se gana de manera individual.",
       "Solo si la renuncia ocurre antes del inicio de las campañas."],
    c:1,
    ex:"Artículo 394 de la LGIPE.. A diferencia de los partidos, que son marcas colectivas, la candidatura independiente pertenece a la persona que acreditó el apoyo ciudadano. Si renuncia, la candidatura se cancela."
  },
  {
    sa:"2.5", sal:"Candidaturas independientes",
    ref:"Artículo 371 de la LGIPE.",
    p:null, pt:null,
    q:"10.- ¿Cuál es el plazo máximo para la recolección de apoyo ciudadano en la elección presidencial?",
    o:["60 días.",
       "90 días.",
       "120 días."],
    c:2,
    ex:"Artículo 371 de la LGIPE.. Debido a la magnitud del requisito (casi un millón de firmas en 2024/2026), la ley otorga 120 días para recabar el apoyo ciudadano para la Presidencia. Para Senadores son 90 días y para Diputados 60 días."
  },

  /* ══════════════════════════════════════════════════
     2.6  PROCESO ELECTORAL FEDERAL  (11 preguntas)
  ══════════════════════════════════════════════════ */
  {
    sa:"2.6", sal:"Proceso Electoral Federal",
    ref:"LGIPE (2024), Arts. 227–234; Reglamento de Elecciones INE (2025)",
    p:"El proceso electoral federal ordinario tiene cuatro etapas. El Reglamento de Elecciones del INE desarrolla los procedimientos específicos de cada etapa con plazos, formatos y protocolos.",
    pt:"Etapas y plazos del proceso electoral federal",
    q:"¿Por qué la etapa de preparación de la elección es la más extensa del proceso electoral federal y qué actividades críticas comprende?",
    o:["Es la más extensa porque incluye la jornada electoral, que por sí sola dura todo un día.",
       "Es la más extensa porque el INE necesita más tiempo para publicar las encuestas de salida.",
       "Es la más extensa porque concentra las actividades logísticas y organizativas de mayor complejidad: instalación de los Consejos Distritales, actualización del listado nominal, insaculación y capacitación de funcionarios de casilla, registro de candidatos, producción y distribución de documentación electoral y acreditación de observadores. Todas estas actividades determinan la calidad de la jornada y requieren meses de trabajo previo."],
    c:2,
    ex:"La preparación (que inicia en octubre del año previo) concentra las actividades que hacen posible la jornada: sin Consejos Distritales instalados, sin listado nominal actualizado, sin funcionarios de casilla capacitados y sin documentación producida, la elección no puede realizarse. Su extensión es proporcional a la complejidad logística que requiere organizar millones de votos en todo el país."
  },
  {
    sa:"2.6", sal:"Proceso Electoral Federal",
    ref:"LGIPE (2024), Arts. 311–328; Reglamento de Elecciones INE (2025)",
    p:"Durante los Cómputos Distritales, los Consejos Distritales suman los resultados casilla por casilla. En ciertos supuestos, deben abrir los paquetes electorales para realizar un recuento.",
    pt:"Recuento total vs. recuento parcial en Cómputos Distritales",
    q:"¿Qué distingue procesalmente el recuento total del parcial durante los Cómputos Distritales y bajo qué supuesto se activa cada uno?",
    o:["El recuento parcial se activa cuando en el acta de escrutinio y cómputo de una casilla específica hay inconsistencias entre los datos del acta y los de la copia; opera casilla por casilla. El recuento total se activa automáticamente cuando la diferencia entre el primero y el segundo lugar en el distrito es igual o menor al 1% de la votación distrital total, y se abren todos los paquetes del distrito.",
       "Ambos son lo mismo; la distinción es solo cuantitativa: parcial si se abren menos de 100 paquetes; total si se abren todos.",
       "El recuento total puede ser solicitado por cualquier partido sin necesidad de justificación; el parcial requiere orden judicial."],
    c:0,
    ex:"La distinción es procesal y por supuesto: parcial = inconsistencia en acta de casilla específica (cirugía focalizada). Total = margen electoral muy estrecho en el distrito (revisión sistémica). El recuento total es automático al acreditarse el umbral del 1%; el parcial requiere inconsistencia concreta. La distinción garantiza que las revisiones sean proporcionales y justificadas."
  },
  {
    sa:"2.6", sal:"Proceso Electoral Federal",
    ref:"LGIPE (2024), Arts. 389–401; Reglamento de Elecciones INE (2025)",
    p:"El PREP opera la noche de la jornada electoral y difunde resultados preliminares. Los cómputos distritales se realizan el miércoles siguiente a la jornada.",
    pt:"Naturaleza jurídica del PREP y su relación con los resultados oficiales",
    q:"¿Por qué el PREP no puede ser impugnado ante el TEPJF aunque sus datos difieran de los cómputos distritales?",
    o:["Porque el TEPJF no tiene jurisdicción sobre los actos del INE realizados durante la jornada electoral.",
       "Porque los datos del PREP son definitivos y no pueden ser cuestionados una vez publicados.",
       "Porque el PREP carece de naturaleza jurídica de acto de autoridad: es un sistema informático de difusión de datos preliminares sin efectos jurídicos, que no tiene valor legal ni reemplaza a los cómputos distritales. Al no ser un acto de autoridad que cree, modifique o extinga derechos u obligaciones, no es susceptible de impugnación jurisdiccional."],
    c:2,
    ex:"La clave es la naturaleza del PREP: es información, no decisión. No crea ni extingue derechos electorales; solo difunde datos preliminares para la ciudadanía. Los actos impugnables son los que producen efectos jurídicos (cómputos distritales, declaraciones de validez). El PREP puede tener errores sin consecuencias jurídicas precisamente porque no es un acto de autoridad."
  },
  {
    sa:"2.6", sal:"Proceso Electoral Federal",
    ref:"LGIPE (2024), Art. 251; Reglamento de Elecciones INE (2025)",
    p:"El Art. 251 LGIPE establece la veda de encuestas. El Reglamento de Elecciones desarrolla los alcances y las sanciones aplicables.",
    pt:"Veda de encuestas y fundamento constitucional",
    q:"¿Cuál es el fundamento constitucional que justifica la restricción temporal a la libertad de expresión que implica la veda de encuestas de los 3 días previos a la jornada?",
    o:["No tiene fundamento constitucional; es una restricción inconstitucional tolerada por el TEPJF.",
       "El fundamento es exclusivamente infra-constitucional: la LGIPE puede restringir cualquier derecho sin necesidad de justificación constitucional.",
       "El fundamento es la tensión entre dos derechos constitucionales: la libertad de expresión e información (Art. 6 y 7 CPEUM) y el derecho al sufragio libre y secreto (Art. 35, fracc. I). La veda prioriza temporalmente el sufragio libre porque la publicación de encuestas en los días previos puede generar efectos de arrastre o desmovilización que distorsionen la voluntad del elector en el acto mismo de votar."],
    c:2,
    ex:"La veda es una restricción constitucionalmente admisible porque es temporal (3 días), proporcionada al fin que busca (proteger el sufragio libre) y necesaria (los efectos de bandwagon y de desmovilización documentados en la literatura). El Art. 1 CPEUM permite restricciones a los derechos cuando son proporcionales, temporales y orientadas a proteger otros derechos fundamentales."
  },
  {
    sa:"2.6", sal:"Proceso Electoral Federal",
    ref:"CPEUM (2025), Art. 41, Base III-C; Reglamento de Elecciones INE (2025)",
    p:"El Art. 41, Base III, Apartado C CPEUM prohíbe la difusión de propaganda gubernamental que implique promoción personalizada de servidores públicos durante las campañas electorales.",
    pt:"Veda de propaganda gubernamental y acceso a medios",
    q:"¿Cuál es la diferencia entre la prohibición de propaganda gubernamental personalizada y el régimen de acceso de los partidos a radio y televisión durante las campañas?",
    o:["La prohibición de propaganda gubernamental personalizada restringe a los gobiernos (federal, estatal, municipal) para que no difundan propaganda que promueva la imagen de servidores públicos durante las campañas. El régimen de acceso a radio y TV regula cómo los partidos y candidatos pueden comunicar sus mensajes electorales: deben hacerlo a través de los tiempos del Estado administrados por el INE y tienen prohibido contratar directamente publicidad electoral en medios electrónicos.",
       "Son la misma restricción aplicada a distintos sujetos; no existe diferencia sustantiva entre ellas.",
       "La prohibición gubernamental aplica solo al Ejecutivo Federal; los partidos pueden contratar publicidad electoral libremente en todos los medios."],
    c:0,
    ex:"Son dos restricciones distintas con sujetos distintos: la primera limita al gobierno (para evitar ventaja electoral del partido en el poder); la segunda regula a los partidos (para garantizar equidad entre ellos y evitar que el dinero determine el acceso mediático). Ambas son componentes del modelo de comunicación política equitativo que el Art. 41 busca construir."
  },
  {
    sa:"2.6", sal:"Proceso Electoral Federal",
    ref:"LGIPE (2024), Arts. 302–310; Reglamento de Elecciones INE (2025)",
    p:"El escrutinio y cómputo en casilla es el procedimiento mediante el cual los funcionarios de la MDC cuentan los votos al cierre de la votación y levantan las actas correspondientes.",
    pt:"Procedimiento de escrutinio y cómputo en casilla",
    q:"¿Por qué el orden de las operaciones en el escrutinio y cómputo de casilla es legalmente relevante y qué consecuencias puede tener alterarlo?",
    o:["El orden no tiene relevancia jurídica; lo importante es que los totales cuadren al final.",
       "Alterar el orden es solo una infracción administrativa sin consecuencias sobre la validez de los votos contados.",
       "El orden del escrutinio y cómputo (inutilizar boletas sobrantes, contar boletas en urna, separar votos válidos de nulos, contar votos por candidato/partido, llenado del acta) está reglamentado porque cada paso produce un insumo para el siguiente. Alterarlo puede generar inconsistencias entre las cifras del acta y los votos físicos, lo que activa el procedimiento de recuento en el Cómputo Distrital e incluso puede ser causa de impugnación ante el TEPJF."],
    c:2,
    ex:"El Reglamento de Elecciones establece un orden preciso porque cada operación valida la anterior: si no se inutilizan las sobrantes antes de contar, los totales no cuadran; si no se separan nulos antes de contar por partido, los resultados son incorrectos. Las inconsistencias entre el acta y los votos físicos son indicadores de posibles irregularidades que activan el recuento y eventualmente la nulidad."
  },
  {
    sa:"2.6", sal:"Proceso Electoral Federal",
    ref:"Artículo 273, párrafo 1 de la LGIPE.",
    p:null, pt:null,
    q:"6.- ¿A qué hora debe iniciar legalmente la instalación de las casillas el día de la jornada electoral?",
    o:["A las 7:30 horas.",
       "A las 8:00 horas.",
       "A las 9:00 horas."],
    c:0,
    ex:"Artículo 273, párrafo 1 de la LGIPE.. La instalación inicia a las 7:30 a.m. para que los funcionarios preparen el material y armen las urnas. La votación inicia formalmente a las 8:00 a.m., siempre que la casilla esté debidamente integrada."
  },
  {
    sa:"2.6", sal:"Proceso Electoral Federal",
    ref:"Artículo 310 de la LGIPE.",
    p:null, pt:null,
    q:"7.- ¿Cuándo inician los Cómputos Distritales que determinan los resultados oficiales de la elección?",
    o:["La misma noche de la elección, al cierre de las casillas.",
       "El miércoles siguiente al día de la jornada electoral, a partir de las 8:00 horas.",
       "El lunes inmediato a la elección."],
    c:1,
    ex:"Artículo 310 de la LGIPE.. Los cómputos oficiales no son el PREP ni el Conteo Rápido. Inician el miércoles siguiente en los 300 Consejos Distritales y son sesiones ininterrumpidas hasta que se cuenta la última acta o se realiza el recuento voto por voto (\"recuento administrativo\")."
  },
  {
    sa:"2.6", sal:"Proceso Electoral Federal",
    ref:"Artículo 305 de la LGIPE.",
    p:null, pt:null,
    q:"8.- ¿Qué es el Programa de Resultados Electorales Preliminares (PREP)?",
    o:["El conteo oficial y definitivo de los votos.",
       "Un sistema de información que permite conocer, en tiempo real a través de Internet, los resultados preliminares de las elecciones la misma noche de la jornada electoral.",
       "Un sondeo de salida (exit poll) realizado por empresas privadas."],
    c:1,
    ex:"Artículo 305 de la LGIPE.. El PREP tiene carácter estrictamente informativo y no es vinculante. Su función es dar certeza y evitar vacíos de información la noche de la elección, pero no sustituye a los cómputos distritales."
  },
  {
    sa:"2.6", sal:"Proceso Electoral Federal",
    ref:"Artículo 251, párrafo 3 de la LGIPE.",
    p:null, pt:null,
    q:"9.- ¿Cuál es la duración máxima de las campañas electorales para la elección de Presidente de la República?",
    o:["60 días.",
       "90 días.",
       "120 días."],
    c:1,
    ex:"Artículo 251, párrafo 3 de la LGIPE.. En el año en que se renueva el Ejecutivo Federal, las campañas duran 90 días. En las elecciones donde solo se renueva la Cámara de Diputados, duran 60 días."
  },
  {
    sa:"2.6", sal:"Proceso Electoral Federal",
    ref:"Artículo 225, párrafo 5 de la LGIPE.",
    p:null, pt:null,
    q:"10.- ¿Cuándo concluye formalmente la etapa de Resultados y Declaraciones de Validez?",
    o:["Al terminar los cómputos en los 300 distritos.",
       "Cuando las resoluciones de los tribunales electorales queden firmes o cuando venza el plazo para impugnar sin que se presenten recursos.",
       "El día que el nuevo Presidente toma posesión."],
    c:1,
    ex:"Artículo 225, párrafo 5 de la LGIPE.. El proceso no termina con el voto, sino con la certeza jurídica. Esta etapa cierra una vez que se han resuelto todos los juicios de inconformidad y las sentencias son definitivas."
  },

  /* ══════════════════════════════════════════════════
     3.1  CONOCIMIENTOS FUNDAMENTALES DEL INE  (6 preguntas)
  ══════════════════════════════════════════════════ */
  {
    sa:"3.1", sal:"Conocimientos fundamentales del INE",
    ref:"CPEUM (2025), Art. 41; LGIPE (2024); DOF 10/02/2014",
    p:"La reforma constitucional de 2014 que creó el INE amplió sus atribuciones respecto al IFE, especialmente en materia de relación con los organismos electorales locales.",
    pt:"Atribuciones del INE sobre los OPLEs — designación de consejeros",
    q:"¿Cuál es el procedimiento para la designación de los consejeros presidentes de los OPLEs y qué papel juega el INE en ese proceso?",
    o:["Los gobernadores de cada estado designan directamente a los consejeros de los OPLEs sin participación del INE.",
       "Los congresos locales eligen a los consejeros de los OPLEs y el INE solo los ratifica formalmente.",
       "Los consejeros presidentes y los consejeros electorales de los OPLEs son designados por el Consejo General del INE mediante un proceso de convocatoria pública, evaluación de candidatos y selección por mayoría calificada, sin intervención del poder ejecutivo local. El INE también puede removerlos por causas graves. Esta atribución garantiza la independencia de los OPLEs respecto a los gobiernos estatales."],
    c:2,
    ex:"La reforma de 2014 nacionalizó la designación de consejeros locales: antes los eligen los congresos estatales (con intervención del gobierno local); ahora los designa el Consejo General del INE mediante proceso público. Esto elimina la captura local de los organismos electorales y garantiza que los OPLEs no sean instrumentos del gobierno estatal en turno."
  },
  {
    sa:"3.1", sal:"Conocimientos fundamentales del INE",
    ref:"Artículo 41, Base V, Apartado A, párrafo quinto",
    p:null, pt:null,
    q:"6.- ¿Cuál es la vigencia de los cargos de los Consejeros Electorales del Consejo General?",
    o:["6 años, con posibilidad de una reelección.",
       "9 años, sin posibilidad de reelección.",
       "Hasta que concluyan tres procesos electorales federales."],
    c:1,
    ex:"Artículo 41, Base V, Apartado A, párrafo quinto. El periodo de 9 años busca que los consejeros trasciendan a los gobiernos y legislaturas que los eligieron, garantizando estabilidad institucional."
  },
  {
    sa:"3.1", sal:"Conocimientos fundamentales del INE",
    ref:"Artículo 41, Base V, Apartado B, inciso a), numeral 1",
    p:null, pt:null,
    q:"7.- ¿Cuál de estas facultades es EXCLUSIVA del INE y no puede ser delegada a los OPLES?",
    o:["La ubicación de las casillas y la designación de funcionarios de mesa directiva.",
       "La capacitación electoral.",
       "El Padrón y la Lista Nominal de Electores."],
    c:2,
    ex:"Artículo 41, Base V, Apartado B, inciso a), numeral 1. El Registro Federal de Electores es la base de todo. Solo el INE puede administrar la base de datos de ciudadanos; los OPLES usan la lista que el INE les entrega."
  },
  {
    sa:"3.1", sal:"Conocimientos fundamentales del INE",
    ref:"Artículo 41, Base V, Apartado A",
    p:null, pt:null,
    q:"8.- ¿Quién nombra al Secretario Ejecutivo del Instituto Nacional Electoral?",
    o:["El Presidente de la República a propuesta del Senado.",
       "El Consejo General, por mayoría de 8 votos, a propuesta del Consejero Presidente.",
       "Los propios empleados del Instituto mediante votación interna."],
    c:1,
    ex:"Artículo 41, Base V, Apartado A. Al ser el cargo operativo más alto, requiere una mayoría calificada (8 de 11 votos) para asegurar que el perfil tenga el consenso de los consejeros."
  },
  {
    sa:"3.1", sal:"Conocimientos fundamentales del INE",
    ref:"Reglamento de Quejas y Denuncias del INE.",
    p:null, pt:null,
    q:"9.- ¿Qué autoridad es la encargada de resolver en primera instancia las quejas sobre propaganda política o actos anticipados de campaña?",
    o:["La Unidad Técnica de lo Contencioso Electoral (UTCE).",
       "El Tribunal de Disciplina Judicial.",
       "La Fiscalía Especializada en Delitos Electorales."],
    c:0,
    ex:"Reglamento de Quejas y Denuncias del INE.. La UTCE, bajo la Secretaría Ejecutiva, es el brazo investigador que recibe las quejas y propone medidas cautelares (como bajar spots de radio/TV) antes de que el Tribunal resuelva el fondo."
  },
  {
    sa:"3.1", sal:"Conocimientos fundamentales del INE",
    ref:"Artículo 96 constitucional y reformas secundarias.",
    p:null, pt:null,
    q:"10.- Bajo el nuevo orden de 2024-2026, ¿cuál es la nueva facultad del INE respecto al Poder Judicial?",
    o:["Nombrar a los jueces y magistrados de forma directa.",
       "Organizar el proceso electoral para la elección por voto popular de Ministros, Magistrados y Jueces.",
       "Auditar los gastos personales de los jueces."],
    c:1,
    ex:"Artículo 96 constitucional y reformas secundarias.. Como experto del INE, debes saber que ahora el Instituto aplica su capacidad logística para organizar elecciones de juzgadores, aplicando reglas similares a las de cargos legislativos pero con restricciones de proselitismo específicas."
  },

  /* ══════════════════════════════════════════════════
     3.2  ÓRGANOS DEL INE  (10 preguntas)
  ══════════════════════════════════════════════════ */
  {
    sa:"3.2", sal:"Órganos del INE",
    ref:"LGIPE (2024), Arts. 35–44",
    p:"El Consejo General del INE está integrado por 11 consejeros electorales: un Consejero Presidente y 10 Consejeros Electorales. Existen reglas específicas para el quórum, las mayorías y el voto de calidad.",
    pt:"Consejo General — quórum y voto de calidad",
    q:"¿En qué supuesto específico se aplica el voto de calidad del Consejero Presidente del INE y qué efecto tiene?",
    o:["El voto de calidad del Consejero Presidente se aplica exclusivamente cuando hay empate en la votación del Consejo General; en ese caso su voto define la resolución. Solo opera ante empate y no implica que el Consejero Presidente tenga mayor peso ordinario que los demás consejeros.",
       "El Consejero Presidente siempre tiene dos votos en todas las deliberaciones del Consejo General.",
       "El voto de calidad se aplica en todas las votaciones sobre procesos electorales para garantizar la agilidad de las decisiones."],
    c:0,
    ex:"El voto de calidad es un mecanismo de desempate, no de jerarquía ordinaria: en condiciones normales el Consejero Presidente tiene un voto como cualquier consejero. Solo cuando el resultado de la votación es empatado el Consejero Presidente tiene el voto dirimente. Esto garantiza que el Consejo siempre pueda resolver sin quedar paralizado."
  },
  {
    sa:"3.2", sal:"Órganos del INE",
    ref:"LGIPE (2024), Arts. 83–90",
    p:"La Contraloría General del INE es el órgano interno de control. Su titular es designado por la Cámara de Diputados y tiene autonomía técnica y de gestión respecto al Consejo General.",
    pt:"Contraloría General — independencia respecto al Consejo General",
    q:"¿Por qué es relevante que el titular de la Contraloría General del INE sea designado por la Cámara de Diputados y no por el propio Consejo General?",
    o:["Para que la Contraloría pueda intervenir en las decisiones del Consejo General cuando lo considere conveniente.",
       "Para que la Cámara de Diputados pueda instruir directamente a la Contraloría sobre qué auditar en el INE.",
       "Porque un órgano de control no puede ser designado por el órgano que controla sin generar un conflicto de intereses estructural. La designación por la Cámara de Diputados garantiza que el Contralor General tenga independencia real para auditar al Consejo General, a los consejeros y al personal del INE sin depender de quienes fiscaliza para su nombramiento y continuidad."],
    c:2,
    ex:"El diseño institucional sigue el principio: el controlador no puede ser elegido por el controlado. Si el Consejo General designara al Contralor, este no tendría incentivos para investigar a quienes deciden su continuidad. La designación externa por la Cámara rompe esa captura y genera un control genuinamente independiente, aunque sin subordinar al INE al Legislativo en su operación."
  },
  {
    sa:"3.2", sal:"Órganos del INE",
    ref:"LGIPE (2024), Arts. 125–165",
    p:"Los órganos del INE a nivel local (estatal) y distrital tienen estructura dual: un órgano permanente técnico-operativo y un órgano temporal colegiado decisorio que se activa durante el proceso electoral.",
    pt:"Estructura dual de los órganos desconcentrados del INE",
    q:"¿Cuál es la razón institucional de que los órganos desconcentrados del INE tengan una estructura dual (permanente + temporal) en lugar de operar con un solo órgano todo el año?",
    o:["Es una decisión puramente presupuestal: resulta más barato contratar consejeros solo durante los procesos electorales.",
       "La dualidad fue impuesta por el Congreso sin ninguna justificación funcional; es un vestigio histórico del IFE.",
       "La estructura dual responde a distintas necesidades funcionales: el órgano permanente (Junta Local/Distrital Ejecutiva) opera todo el año con funciones técnicas y operativas que requieren continuidad y especialización (educación cívica, mantenimiento del RFE, capacitación). El órgano temporal (Consejo Local/Distrital) opera durante el proceso electoral para tomar decisiones directivas con participación de consejeros ciudadanos que aportan legitimidad democrática al proceso."],
    c:2,
    ex:"La dualidad tiene lógica funcional: la permanencia garantiza expertise técnico y continuidad institucional; la temporalidad del órgano colegiado garantiza que las decisiones electorales cuenten con deliberación colegiada y participación ciudadana. Un solo órgano permanente concentraría demasiado poder en los vocales; un órgano solo temporal perdería la memoria institucional."
  },
  {
    sa:"3.2", sal:"Órganos del INE",
    ref:"LGIPE (2024), Arts. 163 y ss.; CPEUM, Art. 53",
    p:"Los 300 Consejos Distritales del INE se instalan durante el proceso electoral y realizan los Cómputos Distritales. Su composición incluye al Vocal Ejecutivo Distrital como presidente y a cuatro consejeros distritales.",
    pt:"Composición y funciones del Consejo Distrital",
    q:"¿Por qué el Vocal Ejecutivo Distrital —que es funcionario de carrera del SPEN— preside el Consejo Distrital en lugar de un consejero ciudadano electo para ese fin?",
    o:["Porque el Vocal Ejecutivo Distrital es quien tiene el conocimiento técnico operativo del distrito (padrón, casillas, personal capacitado) y la continuidad institucional necesaria para coordinar los cómputos; preside en su calidad de funcionario de carrera con conocimiento especializado, mientras los consejeros distritales aportan la representatividad ciudadana en la deliberación. La presidencia técnica garantiza que los cómputos se realicen correctamente.",
       "Porque el Vocal Ejecutivo tiene más antigüedad en el INE y eso le da derecho a presidir el órgano.",
       "Porque los consejeros distritales son designados por los partidos y no pueden presidir un órgano de arbitraje."],
    c:0,
    ex:"La presidencia del Vocal Ejecutivo combina responsabilidad técnica y accountability: es el funcionario del SPEN que conoce el distrito, su padrón, sus casillas y sus incidencias. Presidir el cómputo exige ese conocimiento especializado. Los consejeros distritales son ciudadanos sin vínculo de carrera con el INE; su rol es deliberativo y de control, no operativo."
  },
  {
    sa:"3.2", sal:"Órganos del INE",
    ref:"LGIPE (2024), Arts. 91–100",
    p:"La Secretaría Ejecutiva del INE es el cargo de máxima responsabilidad ejecutiva del instituto. Su titular preside la Junta General Ejecutiva y coordina a las Direcciones Ejecutivas.",
    pt:"Secretaría Ejecutiva y Junta General Ejecutiva",
    q:"¿Cuál es la diferencia entre las funciones del Secretario/a Ejecutivo/a del INE y las del Consejero Presidente en la estructura de gobierno del instituto?",
    o:["Son el mismo cargo; el Secretario Ejecutivo es el nombre alterno del Consejero Presidente.",
       "El Secretario Ejecutivo tiene mayor jerarquía que el Consejero Presidente porque es quien dirige la operación diaria del INE.",
       "El Consejero Presidente preside el Consejo General (órgano decisorio máximo de dirección), vota en sus resoluciones y representa públicamente al INE. El Secretario Ejecutivo dirige la operación técnica cotidiana del instituto: preside la Junta General Ejecutiva, coordina a los directores ejecutivos, da fe de los acuerdos del Consejo General y es el responsable ejecutivo de la implementación de las decisiones del Consejo."],
    c:2,
    ex:"La distinción es entre gobierno (Consejero Presidente + Consejo General: deciden) y ejecución (Secretario Ejecutivo + Junta General Ejecutiva: implementan). El Consejero Presidente es la máxima autoridad normativa y representativa; el Secretario Ejecutivo es la máxima autoridad operativa. Sin esta distinción, el Consejo General se perdería en la gestión cotidiana."
  },
  {
    sa:"3.2", sal:"Órganos del INE",
    ref:"CPEUM · Legislación electoral vigente",
    p:null, pt:null,
    q:"6. ¿Cuál es la función del Secretario Ejecutivo en relación con el Consejo General del INE?",
    o:["Actuar como secretario del Consejo General con voz pero sin voto",
       "Presidir las sesiones del Consejo General con voz y voto",
       "Sustituir al Presidente del Consejo General en sus ausencias temporales"],
    c:0,
    ex:"Ver fundamento jurídico en la CPEUM y legislación electoral vigente."
  },
  {
    sa:"3.2", sal:"Órganos del INE",
    ref:"Artículo 73 de la LEGIPE y Artículo 58 del Reglamento Interior del INE",
    p:null, pt:null,
    q:"¿Cuál es la secuencia correcta del proceso de supervisión y evaluación que realizan las Juntas Locales Ejecutivas según sus atribuciones?",
    o:["Adoptar lineamientos → supervisar programas de vocalías → supervisar programas del RFE → disponer acciones para informar → informar al Consejo Local → informar mensualmente al Secretario Ejecutivo.",
       "Supervisar programas de vocalías → adoptar lineamientos → supervisar programas del RFE → informar mensualmente → disponer acciones → informar al Consejo Local.",
       "Informar mensualmente → supervisar → adoptar lineamientos → disponer acciones → supervisar RFE → informar al Consejo Local."],
    c:0,
    ex:"Artículo 63 de la LEGIPE y artículo 55 del Reglamento Interior. La secuencia es: (1) adoptar lineamientos, (2) supervisar programas de vocalías y distritales, (3) supervisar programas del RFE, (4) disponer acciones para informar oportunamente, (5) informar al Consejo Local, (6) informe mensual al Secretario Ejecutivo."
  },
  {
    sa:"3.2", sal:"Órganos del INE",
    ref:"Artículo 490 de la LEGIPE",
    p:null, pt:null,
    q:"El Órgano Interno de Control tiene la facultad de _______ a terceros que hubieran contratado bienes o servicios con el Instituto la información relacionada con la documentación justificativa y comprobatoria respectiva.",
    o:["requerir",
       "solicitar",
       "ordenar"],
    c:0,
    ex:"Artículo 490 de la LEGIPE. El término exacto es 'requerir', que implica una obligación de respuesta para el tercero, a diferencia de 'solicitar' (que es potestativo) u 'ordenar' (que implica jerarquía)."
  },
  {
    sa:"3.2", sal:"Órganos del INE",
    ref:"Artículo 73 de la LEGIPE y Artículo 58 del Reglamento Interior del INE",
    p:null, pt:null,
    q:"Relacione las funciones con el ordenamiento jurídico correspondiente: (1) Evaluar el cumplimiento de programas del RFE, (2) Elaborar la relación de ciudadanos capacitados en la primera etapa, (3) Capacitar a ciudadanos para mesas directivas de casilla.",
    o:["1-ambos ordenamientos, 2-solo Reglamento Interior, 3-ambos ordenamientos.",
       "1-solo LEGIPE, 2-solo Reglamento Interior, 3-ambos ordenamientos.",
       "1-solo Reglamento Interior, 2-solo LEGIPE, 3-disposiciones secundarias."],
    c:0,
    ex:"Artículos 73 LEGIPE y 58 Reglamento Interior. Evaluar cumplimiento del RFE y capacitar para mesas directivas se establecen en ambos ordenamientos; elaborar la relación de ciudadanos capacitados solo aparece en el Reglamento Interior (Art. 58)."
  },
  {
    sa:"3.2", sal:"Órganos del INE",
    ref:"Artículo 73 de la LEGIPE y Artículo 58 del Reglamento Interior del INE",
    p:null, pt:null,
    q:"Una de las funciones de los órganos distritales es _______ a los ciudadanos que habrán de integrar las mesas directivas de casilla, en los términos establecidos en la legislación electoral.",
    o:["capacitar",
       "seleccionar",
       "designar"],
    c:0,
    ex:"Artículo 73 de la LEGIPE y artículo 58 del Reglamento Interior del INE establecen expresamente como función 'capacitar a los ciudadanos que habrán de integrar las mesas directivas de casilla'. No es 'seleccionar' ni 'designar' — esas son atribuciones distintas."
  },

  /* ══════════════════════════════════════════════════
     3.3  SERVICIO PROFESIONAL ELECTORAL NACIONAL  (2 preguntas)
  ══════════════════════════════════════════════════ */
  {
    sa:"3.3", sal:"Servicio Profesional Electoral Nacional",
    ref:"ESPEN (2024), Arts. 1–15; CPEUM, Art. 41, Base V-C",
    p:"El SPEN comprende al personal directivo, ejecutivo y técnico del INE y los OPLEs. El Estatuto establece las ramas del servicio, las categorías de puestos y los procesos de carrera.",
    pt:"Ramas del SPEN y sus diferencias",
    q:"¿Cuál es la diferencia entre la rama ejecutiva y la rama técnica del SPEN en términos de funciones y nivel jerárquico?",
    o:["No existe diferencia; ambas ramas tienen los mismos puestos y funciones; la distinción es solo nominal.",
       "La rama ejecutiva es para personal con doctorado; la técnica para personal con licenciatura, sin más distinción.",
       "La rama ejecutiva del SPEN comprende los puestos de conducción y coordinación institucional (Vocales, Directores Ejecutivos, Coordinadores) con responsabilidad sobre áreas completas y toma de decisiones de nivel gerencial. La rama técnica comprende los puestos de soporte especializado (analistas, técnicos, capacitadores) con funciones de implementación y operación. Ambas ramas tienen procesos de ingreso por concurso pero con perfiles y evaluaciones distintas."],
    c:2,
    ex:"La distinción entre ramas refleja el principio de carrera meritocrática especializada: los puestos directivos (rama ejecutiva) requieren competencias de gestión, liderazgo y decisión; los técnicos requieren competencias operativas especializadas. Tener ramas distintas permite diseñar concursos, evaluaciones y planes de desarrollo diferenciados para cada perfil, garantizando idoneidad en cada nivel."
  },
  {
    sa:"3.3", sal:"Servicio Profesional Electoral Nacional",
    ref:"ESPEN (2024), Arts. 60–75",
    p:"El Estatuto del SPEN regula el régimen disciplinario del personal. Las faltas se clasifican en leves, graves y muy graves, con sanciones gradualmente más severas.",
    pt:"Régimen disciplinario del SPEN — principio de proporcionalidad",
    q:"¿Cuál es el principio que justifica la gradación de sanciones en el régimen disciplinario del SPEN (desde amonestación hasta separación del servicio)?",
    o:["El principio de proporcionalidad: la sanción debe ser adecuada en intensidad al daño causado a la función electoral y a los principios del SPEN. Una falta administrativa menor (retraso en un informe) no puede recibir la misma sanción que una grave (parcialidad en el ejercicio de funciones electorales); la gradación garantiza que la respuesta disciplinaria sea justa y no excesiva respecto a la conducta.",
       "El principio de economía procesal: sanciones menores evitan procedimientos largos y costosos.",
       "El principio de discrecionalidad: el Comité del SPEN puede elegir libremente cualquier sanción sin restricciones para cualquier falta."],
    c:0,
    ex:"El principio de proporcionalidad en el derecho administrativo sancionador exige que la sanción sea proporcional a la gravedad de la infracción. El ESPEN lo aplica clasificando las faltas por gravedad y asignando rangos de sanción correspondientes: amonestación (leves), suspensión (graves), separación (muy graves). Sin esta gradación, el régimen disciplinario sería arbitrario e inconstitucional."
  }

]; // fin BANCO_MODULO_C
