// ============================================================
//  BANCO DE PREGUNTAS — MÓDULO A · SPEN INE
//  Versión: 1.0
//  Total: 85 preguntas · 5 subáreas · 4 formatos
//
//  ¿Cómo editar una pregunta?
//    1. Busca el id de la pregunta (id:1, id:2, etc.)
//    2. Modifica el texto que necesites
//    3. Guarda el archivo — todos los simulacros que usen
//       este banco se actualizan automáticamente.
//
//  Formatos:
//    A = Cuestionamiento directo   (opts, correct)
//    B = Completamiento            (opts, correct)
//    C = Ordenamiento              (items, correctOrder)
//    D = Relación de elementos     (leftItems, rightItems, correctPairs)
// ============================================================

const BANCO_MODULO_A = [

// ═══════════════════════════════════════════════════════════
//  1.1  Comprensión lectora – Ámbito de estudio  (12 Qs)
// ═══════════════════════════════════════════════════════════
{
  id:1, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"A",
  pTitle:"La Objetividad en la Ciencia",
  passage:"La objetividad científica no implica que el investigador carezca de valores o perspectivas previas, sino que tiene la obligación de transparentar sus supuestos y someter sus conclusiones al escrutinio de la comunidad. La revisión por pares es, en ese sentido, el mecanismo institucional que compensa la subjetividad inevitable de cualquier investigador individual.",
  q:"Según el fragmento, ¿cuál es la función de la revisión por pares en la ciencia?",
  opts:["Eliminar completamente los valores personales del investigador.","Compensar la subjetividad individual mediante el escrutinio colectivo.","Garantizar que todas las conclusiones publicadas sean verdaderas."],
  correct:1, expl:"El texto no afirma que la objetividad elimine la subjetividad, sino que la revisión por pares la 'compensa' institucionalmente."
},
{
  id:2, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"B",
  pTitle:"Validez y Confiabilidad",
  passage:"En investigación empírica, un instrumento es confiable si produce resultados consistentes al repetirse bajo las mismas condiciones. Sin embargo, la confiabilidad no garantiza la validez: un termómetro descalibrado mide con consistencia, pero no mide correctamente la temperatura.",
  q:"Según el texto, la confiabilidad sin validez implica que un instrumento mide de forma ________ pero no mide el constructo correcto.",
  opts:["aleatoria e impredecible","consistente y reproducible","precisa y válida"],
  correct:1, expl:"La confiabilidad se refiere a la consistencia; el ejemplo del termómetro descalibrado ilustra que puede ser consistente pero equivocado."
},
{
  id:3, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"D",
  pTitle:"Niveles de Evidencia Científica",
  passage:"La medicina basada en evidencia jerarquiza las fuentes según su solidez metodológica. Los metaanálisis y revisiones sistemáticas ocupan el nivel más alto; los estudios de caso y la opinión de expertos, el más bajo.",
  q:"Relaciona cada tipo de estudio con su nivel de evidencia.",
  leftItems:["Metaanálisis de ensayos clínicos","Estudio observacional","Opinión de experto"],
  rightItems:["Nivel bajo: basado en experiencia sin diseño controlado","Nivel medio: describe sin manipular variables","Nivel alto: síntesis cuantitativa de múltiples estudios"],
  correctPairs:[[0,2],[1,1],[2,0]],
  expl:"Metaanálisis = mayor solidez (nivel alto); observacional = nivel medio; opinión = nivel bajo."
},
{
  id:4, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"C",
  pTitle:"Proceso de Publicación Académica",
  passage:"El ciclo de producción del conocimiento científico culmina en la publicación, que a su vez retroalimenta nuevas investigaciones. Sin embargo, entre la producción y la difusión existen varios filtros de calidad.",
  q:"Ordena las etapas del proceso de publicación académica de la primera a la última.",
  items:["Revisión por pares (evaluación ciega)","Envío del manuscrito a una revista","Publicación y difusión del artículo","Revisión y corrección de pruebas por el autor"],
  correctOrder:[1,0,3,2],
  expl:"El orden es: Envío del manuscrito → Revisión por pares → Corrección de pruebas → Publicación."
},
{
  id:5, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"A",
  pTitle:"Sesgo de Confirmación",
  passage:"El sesgo de confirmación lleva a los investigadores a buscar, interpretar y recordar información que confirme sus creencias previas, ignorando evidencia contraria. Este sesgo es especialmente peligroso porque puede operar de forma inconsciente incluso en investigadores rigurosos.",
  q:"¿Por qué el sesgo de confirmación es considerado especialmente peligroso en investigación?",
  opts:["Porque es fácil de detectar y difícil de corregir una vez identificado.","Porque puede actuar de manera inconsciente aun en investigadores rigurosos.","Porque solo afecta a investigadores sin formación metodológica sólida."],
  correct:1, expl:"El texto señala que opera 'incluso en investigadores rigurosos' y 'de forma inconsciente', lo que lo hace difícil de neutralizar."
},
{
  id:6, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"B",
  pTitle:"Correlación y Causalidad",
  passage:"Una correlación estadística fuerte entre dos variables no establece por sí misma una relación causal. La confusión entre ambas es uno de los errores más frecuentes en la divulgación científica, pues es posible que una tercera variable explique la asociación observada.",
  q:"Según el fragmento, la presencia de una tercera variable que explica la correlación entre otras dos se denomina, en metodología, variable ________.",
  opts:["independiente o experimental","confusora o de control","dependiente o de resultado"],
  correct:1, expl:"Una variable confusora (o de control) es la que, al no ser considerada, genera una correlación espuria entre las otras dos variables."
},
{
  id:7, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"A",
  pTitle:"El Marco Teórico",
  passage:"El marco teórico no es una simple recopilación de citas, sino una construcción argumentativa que justifica las decisiones metodológicas del investigador, sitúa el problema en el debate académico vigente y delimita el alcance del estudio.",
  q:"¿Cuál de las siguientes afirmaciones es incompatible con la función del marco teórico descrita en el fragmento?",
  opts:["Delimita el alcance y los límites conceptuales del estudio.","Justifica las decisiones metodológicas adoptadas por el investigador.","Consiste únicamente en resumir los trabajos previos sobre el tema."],
  correct:2, expl:"El texto distingue explícitamente el marco teórico de una 'simple recopilación de citas'; es una 'construcción argumentativa'."
},
{
  id:8, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"D",
  pTitle:"Paradigmas de Investigación",
  passage:"Los paradigmas de investigación determinan las preguntas que se consideran legítimas y los métodos aceptados para responderlas. El paradigma positivista privilegia la cuantificación; el interpretativo, la comprensión de significados; el crítico, la transformación social.",
  q:"Relaciona cada paradigma con su objetivo central.",
  leftItems:["Positivista","Interpretativo","Crítico"],
  rightItems:["Transformar estructuras sociales inequitativas","Medir y predecir fenómenos de forma objetiva","Comprender el significado que los actores dan a su realidad"],
  correctPairs:[[0,1],[1,2],[2,0]],
  expl:"Positivista = medir/predecir; Interpretativo = comprender significados; Crítico = transformación social."
},
{
  id:9, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"B",
  pTitle:"Generalización en Investigación Cualitativa",
  passage:"La investigación cualitativa no pretende la generalización estadística de sus hallazgos hacia una población amplia. En cambio, busca la transferibilidad: que los resultados puedan ser relevantes para otros contextos similares cuando el lector juzgue que las condiciones son comparables.",
  q:"En investigación cualitativa, la transferibilidad depende de que el ________ evalúe si las condiciones del estudio son comparables con las de su propio contexto.",
  opts:["investigador principal del estudio original","lector o usuario de los resultados","comité de ética institucional"],
  correct:1, expl:"El texto atribuye al 'lector' la responsabilidad de juzgar si los contextos son comparables, no al investigador original."
},
{
  id:10, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"A",
  pTitle:"El Problema de la Replicabilidad",
  passage:"La crisis de replicabilidad en ciencias sociales y psicología reveló que muchos estudios publicados no podían reproducirse cuando investigadores independientes repetían los experimentos con exactitud. Esta crisis cuestionó no solo resultados individuales sino la solidez del proceso de publicación académica en su conjunto.",
  q:"¿Cuál es la implicación más profunda de la crisis de replicabilidad según el texto?",
  opts:["Que los investigadores individuales cometen fraude deliberado.","Que el proceso mismo de publicación académica presenta deficiencias estructurales.","Que solo los estudios replicados deben considerarse conocimiento científico."],
  correct:1, expl:"El texto va más allá de culpar investigadores: señala que la crisis cuestiona 'el proceso de publicación académica en su conjunto'."
},
{
  id:11, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"C",
  pTitle:"Diseño de un Protocolo de Investigación",
  passage:"El protocolo de investigación es el documento que guía todo el proceso antes de recolectar datos. Su orden interno refleja la lógica del método científico.",
  q:"Ordena los componentes del protocolo de investigación en su secuencia lógica.",
  items:["Cronograma y presupuesto","Planteamiento del problema y objetivos","Diseño metodológico y técnicas de recolección","Marco teórico y revisión de literatura"],
  correctOrder:[1,3,2,0],
  expl:"El orden es: Planteamiento → Marco teórico → Diseño metodológico → Cronograma/presupuesto."
},
{
  id:12, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"B",
  pTitle:"El Argumento ad Hominem",
  passage:"La falacia ad hominem consiste en atacar a la persona que sostiene un argumento en lugar de refutar las premisas o la lógica del argumento mismo. Aunque puede resultar persuasiva emocionalmente, es lógicamente irrelevante porque el origen de un argumento no determina su validez.",
  q:"Según el fragmento, una falacia ad hominem puede ser persuasiva a pesar de ser irrelevante porque apela a las ________ del receptor.",
  opts:["premisas lógicas del argumento","emociones y prejuicios personales","fuentes bibliográficas citadas"],
  correct:1, expl:"El texto dice que 'puede resultar persuasiva emocionalmente', señalando que opera sobre reacciones afectivas, no lógicas."
},

// ═══════════════════════════════════════════════════════════
//  1.2  Comprensión lectora – Ámbito literario  (12 Qs)
// ═══════════════════════════════════════════════════════════
{
  id:13, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"A",
  pTitle:"El Narrador No Confiable",
  passage:"El narrador no confiable es aquel cuya versión de los hechos el lector no puede aceptar sin reservas, ya sea por limitaciones cognitivas, intereses personales o evidente parcialidad. Su uso obliga al lector a construir activamente la 'verdad' de los hechos a partir de contradicciones y silencios en el relato.",
  q:"¿Qué demanda al lector la presencia de un narrador no confiable?",
  opts:["Aceptar la versión del narrador como la única verdad posible en la ficción.","Participar activamente en la reconstrucción de los hechos a partir de las fisuras del relato.","Identificar al autor real detrás de la voz narrativa para conocer la verdad."],
  correct:1, expl:"El texto dice que el narrador no confiable 'obliga al lector a construir activamente la verdad a partir de contradicciones y silencios'."
},
{
  id:14, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"D",
  pTitle:"Figuras Retóricas de Pensamiento",
  passage:"Las figuras retóricas de pensamiento operan sobre el contenido semántico del texto, no sobre su forma sonora o gramatical. Cada una produce un efecto cognitivo distinto en el lector.",
  q:"Relaciona cada figura con su mecanismo de significación.",
  leftItems:["Antítesis","Paradoja","Eufemismo"],
  rightItems:["Sustitución de una expresión dura por otra más suave","Contraposición de dos ideas o términos opuestos en paralelo","Afirmación aparentemente contradictoria que revela una verdad profunda"],
  correctPairs:[[0,1],[1,2],[2,0]],
  expl:"Antítesis = opuestos en paralelo; Paradoja = contradicción aparente con verdad oculta; Eufemismo = suavizar lo duro."
},
{
  id:15, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"B",
  pTitle:"El Perspectivismo Narrativo",
  passage:"El perspectivismo en la narrativa contemporánea consiste en presentar un mismo hecho desde los puntos de vista de distintos personajes, con frecuencia contradictorios entre sí. Esta técnica relativiza la 'versión oficial' de los hechos y subraya que la realidad es siempre una construcción parcial.",
  q:"El perspectivismo narrativo subraya que la realidad representada es una construcción ________ , al mostrar versiones contradictorias de un mismo hecho.",
  opts:["objetiva y verificable","parcial y condicionada por el punto de vista","universal y compartida por todos los personajes"],
  correct:1, expl:"El texto afirma que el perspectivismo 'relativiza la versión oficial y subraya que la realidad es siempre una construcción parcial'."
},
{
  id:16, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"A",
  pTitle:"La Ironía Dramática",
  passage:"La ironía dramática ocurre cuando el espectador o lector sabe algo que el personaje ignora. Esta asimetría de información produce tensión, anticipación o incluso humor, y convierte al lector en cómplice del autor, quien maneja los niveles de conocimiento de forma deliberada.",
  q:"¿En qué se distingue la ironía dramática de la ironía verbal?",
  opts:["La ironía dramática depende de que el personaje mienta conscientemente.","La ironía dramática se basa en la asimetría de información entre el lector y el personaje.","La ironía dramática requiere el uso de un lenguaje figurado explícito."],
  correct:1, expl:"La ironía dramática no requiere que nadie mienta; se produce por el desequilibrio de información entre lector y personaje."
},
{
  id:17, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"C",
  pTitle:"Estructura del Texto Argumentativo Literario",
  passage:"El ensayo literario construye su argumento mediante una estructura que va de la tesis central a su desarrollo y cierre, similar al académico pero con mayor libertad estilística.",
  q:"Ordena las partes de un ensayo literario argumentativo de la primera a la última.",
  items:["Refutación de las objeciones más relevantes","Exposición de la tesis o postura central","Cierre que sintetiza y proyecta la reflexión","Desarrollo con argumentos y ejemplos literarios"],
  correctOrder:[1,3,0,2],
  expl:"El orden es: Tesis → Desarrollo/argumentos → Refutación de objeciones → Cierre reflexivo."
},
{
  id:18, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"A",
  pTitle:"El Naturalismo Literario",
  passage:"El naturalismo, heredero del realismo, incorporó las ideas deterministas del darwinismo y el positivismo: el comportamiento humano es producto del entorno social, la herencia genética y las condiciones materiales. Sus personajes suelen estar atrapados en fuerzas que no pueden controlar, lo que distingue al naturalismo del realismo más optimista.",
  q:"¿Qué elemento diferencia al naturalismo del realismo según el fragmento?",
  opts:["El naturalismo elimina la descripción del entorno social de sus obras.","El naturalismo introduce el determinismo biológico y social como condicionante del personaje.","El naturalismo prefiere personajes heroicos que superan sus condiciones."],
  correct:1, expl:"El texto señala que el naturalismo agrega el determinismo (herencia, entorno) al realismo, mostrando personajes 'atrapados en fuerzas que no pueden controlar'."
},
{
  id:19, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"B",
  pTitle:"El Tiempo en la Narrativa",
  passage:"El tiempo narrativo se puede manipular mediante anacronías: la analepsis o flashback retrocede al pasado; la prolepsis o flashforward anticipa eventos futuros. Ambas técnicas permiten al autor controlar qué sabe el lector y cuándo lo sabe, generando suspenso o resignificando hechos anteriores.",
  q:"Una analepsis que revela la causa de un conflicto que ya se presentó en el presente narrativo sirve para ________ hechos que el lector conocía pero no comprendía plenamente.",
  opts:["anticipar y adelantar","resignificar y reinterpretar","eliminar y suprimir"],
  correct:1, expl:"Al revelar causas de hechos previos, la analepsis resignifica lo que el lector ya había leído, dotándolo de nuevo sentido."
},
{
  id:20, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"D",
  pTitle:"Tipos de Textos Líricos",
  passage:"La poesía lírica comprende subgéneros con características formales y temáticas distintas que responden a tradiciones históricas específicas.",
  q:"Relaciona cada subgénero lírico con su característica distintiva.",
  leftItems:["Oda","Elegía","Soneto"],
  rightItems:["Composición de 14 versos en dos cuartetos y dos tercetos","Canto de exaltación o celebración de personas, ideas o cosas","Expresión del dolor por una pérdida o lamento fúnebre"],
  correctPairs:[[0,1],[1,2],[2,0]],
  expl:"Oda = exaltación/celebración; Elegía = lamento por pérdida; Soneto = forma fija de 14 versos."
},
{
  id:21, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"A",
  pTitle:"La Función Poética del Lenguaje",
  passage:"Jakobson identificó la función poética como aquella que centra la atención en el mensaje mismo: en su forma, su musicalidad, sus ambigüedades internas. A diferencia de la función referencial, que apunta hacia el mundo, la función poética reflexiona sobre el propio lenguaje. Por eso en un poema no solo importa qué se dice, sino cómo se dice.",
  q:"Según Jakobson, ¿qué distingue a la función poética de la función referencial del lenguaje?",
  opts:["La función poética describe hechos del mundo exterior con precisión.","La función poética se centra en la forma y el mensaje mismo, no en el mundo que describe.","La función poética es propia de la lengua oral, no de la escrita."],
  correct:1, expl:"El texto contrasta ambas funciones: referencial apunta al mundo; poética reflexiona sobre el lenguaje y la forma del mensaje."
},
{
  id:22, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"B",
  pTitle:"El Bildungsroman",
  passage:"El Bildungsroman o novela de formación narra el proceso de maduración psicológica y moral de su protagonista desde la juventud hasta la adultez. La transformación interior del personaje es el eje de la trama, más que los eventos externos en sí mismos.",
  q:"En el Bildungsroman, los eventos externos de la trama son principalmente el medio para mostrar la ________ interior del protagonista.",
  opts:["estancamiento y regresión","maduración y transformación","descripción y caracterización superficial"],
  correct:1, expl:"El texto afirma que 'la transformación interior del personaje es el eje de la trama'; los eventos son el vehículo, no el fin."
},
{
  id:23, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"C",
  pTitle:"Evolución del Cuento Hispanoamericano",
  passage:"El cuento hispanoamericano del siglo XX atravesó transformaciones formales y temáticas radicales que lo llevaron del costumbrismo al realismo mágico y a la narrativa experimental.",
  q:"Ordena las corrientes del cuento hispanoamericano del siglo XX de más antigua a más reciente.",
  items:["Cuento de la Onda y experimentación posmoderna (1960–70)","Realismo mágico y boom latinoamericano (1950–60)","Cuento fantástico y neopolicial (1980–2000)","Costumbrismo y criollismo del primer tercio del siglo"],
  correctOrder:[3,1,0,2],
  expl:"El orden cronológico es: Costumbrismo → Realismo mágico/Boom → La Onda/experimental → Fantástico/neopolicial."
},
{
  id:24, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"A",
  pTitle:"El Espacio Como Personaje",
  passage:"En algunas novelas, el espacio deja de ser mero escenario para convertirse en una entidad activa que determina el destino de los personajes. La casa encantada de la novela gótica, la ciudad laberíntica del noir urbano o la naturaleza hostil de la novela regionalista no son fondos neutrales: proyectan conflictos, producen atmósferas y condicionan decisiones.",
  q:"¿Qué implica que el espacio sea 'activo' en una novela, según el fragmento?",
  opts:["Que la descripción del espacio ocupa más páginas que el desarrollo de personajes.","Que el espacio condiciona el destino de los personajes y produce atmósferas que afectan la trama.","Que el narrador usa la primera persona para describir el espacio desde su experiencia directa."],
  correct:1, expl:"El texto describe el espacio activo como aquel que 'determina destinos, proyecta conflictos y condiciona decisiones', no como simple fondo."
},

// ═══════════════════════════════════════════════════════════
//  1.3  Comprensión lectora – Ámbito de participación social  (6 Qs)
// ═══════════════════════════════════════════════════════════
{
  id:25, sub:"1.3", label:"Comprensión lectora – Ámbito de participación social", fmt:"A",
  pTitle:"Agenda Setting y Opinión Pública",
  passage:"La teoría del establecimiento de agenda (agenda setting) plantea que los medios de comunicación no determinan qué piensa la gente, pero sí sobre qué piensa: los temas que reciben mayor cobertura son los que el público percibe como más importantes. Este poder de selección temática convierte a los medios en actores políticos aunque actúen como meros informadores.",
  q:"¿Cuál es la distinción central que establece la teoría del agenda setting?",
  opts:["Los medios determinan directamente las opiniones políticas de los ciudadanos.","Los medios no dictan las opiniones, pero sí definen qué temas se consideran relevantes.","Los medios son políticamente neutrales cuando se limitan a informar hechos."],
  correct:1, expl:"El texto distingue 'qué piensa la gente' (opiniones) de 'sobre qué piensa' (temas); el poder mediático actúa en este segundo nivel."
},
{
  id:26, sub:"1.3", label:"Comprensión lectora – Ámbito de participación social", fmt:"B",
  pTitle:"Desinformación y Posverdad",
  passage:"El término 'posverdad' describe un entorno en el que los hechos objetivos tienen menos influencia en la formación de la opinión pública que las apelaciones a emociones y creencias personales. No se trata de que la verdad haya desaparecido, sino de que ha perdido su capacidad de persuasión frente al impacto emocional de los mensajes.",
  q:"Según el texto, en un entorno de posverdad los hechos no desaparecen, pero pierden su capacidad de ________ frente al impacto emocional.",
  opts:["verificación y contraste","persuasión e influencia","publicación y difusión"],
  correct:1, expl:"El texto señala que la verdad 'ha perdido su capacidad de persuasión'; los hechos siguen existiendo pero ya no convencen tanto como las emociones."
},
{
  id:27, sub:"1.3", label:"Comprensión lectora – Ámbito de participación social", fmt:"D",
  pTitle:"Mecanismos de Participación Ciudadana",
  passage:"Los sistemas democráticos contemplan distintos instrumentos para que los ciudadanos incidan directamente en las decisiones públicas, más allá del voto periódico.",
  q:"Relaciona cada mecanismo con su descripción correcta.",
  leftItems:["Referéndum","Consulta popular","Iniciativa ciudadana"],
  rightItems:["Propuesta legislativa presentada directamente por la ciudadanía","Votación en la que la ciudadanía decide sobre un asunto de interés nacional","Proceso no vinculante en el que se recaba la opinión de la población"],
  correctPairs:[[0,1],[1,2],[2,0]],
  expl:"Referéndum = decisión vinculante ciudadana; Consulta = no necesariamente vinculante; Iniciativa = propuesta legislativa ciudadana."
},
{
  id:28, sub:"1.3", label:"Comprensión lectora – Ámbito de participación social", fmt:"A",
  pTitle:"El Discurso de Odio",
  passage:"El discurso de odio es aquel que estigmatiza o incita a la discriminación contra grupos por razones de raza, género, religión u orientación sexual. Su regulación jurídica enfrenta una tensión fundamental con la libertad de expresión: los límites son necesarios para proteger a grupos vulnerables, pero su definición imprecisa puede usarse para silenciar la disidencia política legítima.",
  q:"¿Cuál es la tensión central que plantea la regulación del discurso de odio según el fragmento?",
  opts:["La necesidad de proteger grupos vulnerables frente al riesgo de censurar expresión política legítima.","La imposibilidad técnica de identificar el discurso de odio en plataformas digitales.","La preferencia de los gobiernos por regular el discurso en lugar de proteger la libertad."],
  correct:0, expl:"El texto plantea exactamente esta tensión: proteger a vulnerables vs. el riesgo de que una definición imprecisa censure disidencia legítima."
},
{
  id:29, sub:"1.3", label:"Comprensión lectora – Ámbito de participación social", fmt:"C",
  pTitle:"Proceso de Elaboración de una Ley",
  passage:"En el sistema legislativo mexicano, la formación de una ley implica varias etapas desde su presentación hasta su entrada en vigor.",
  q:"Ordena las etapas del proceso legislativo mexicano en su secuencia correcta.",
  items:["Promulgación y publicación en el Diario Oficial","Debate y votación en ambas cámaras","Iniciativa presentada ante el Congreso","Envío al Ejecutivo para su sanción o veto"],
  correctOrder:[2,1,3,0],
  expl:"El orden es: Iniciativa → Debate y votación → Envío al Ejecutivo (sanción o veto) → Promulgación/publicación."
},
{
  id:30, sub:"1.3", label:"Comprensión lectora – Ámbito de participación social", fmt:"B",
  pTitle:"La Sociedad Civil Organizada",
  passage:"Las organizaciones de la sociedad civil (OSC) actúan como intermediarias entre los ciudadanos y el Estado: canalizan demandas, fiscalizan políticas públicas y producen información alternativa a la oficial. Su autonomía respecto al Estado y a los partidos políticos es condición necesaria para su función de contrapeso democrático.",
  q:"Según el texto, la autonomía de las OSC respecto al Estado es condición necesaria para que funcionen como ________ democrático.",
  opts:["instrumento de legitimación gubernamental","contrapeso y fiscalizador","financiador de campañas políticas"],
  correct:1, expl:"El texto señala explícitamente que la autonomía es condición necesaria para la 'función de contrapeso democrático' de las OSC."
},

// ═══════════════════════════════════════════════════════════
//  2.1  Redacción indirecta – Ámbito de estudio  (15 Qs)
// ═══════════════════════════════════════════════════════════
{
  id:31, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"A",
  pTitle:"Conectores de Reformulación",
  passage:"Los conectores de reformulación permiten al autor reexpresar, aclarar o precisar una idea ya enunciada. Se dividen en explicativos ('es decir', 'o sea'), rectificativos ('mejor dicho', 'en realidad') y de distanciamiento ('en todo caso', 'de todos modos').",
  q:"En el enunciado 'El proyecto fue costoso; en realidad, resultó inviable financieramente', el conector 'en realidad' cumple una función ________.",
  opts:["consecutiva, al indicar consecuencia de lo anterior","rectificativa, al corregir o precisar la valoración previa","explicativa, al sintetizar lo dicho antes"],
  correct:1, expl:"'En realidad' es un conector rectificativo: no explica lo anterior, sino que lo corrige o reorienta hacia una valoración más precisa."
},
{
  id:32, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"B",
  pTitle:"Progresión Temática",
  passage:"Un texto bien construido mantiene una progresión temática coherente: la información conocida o tema se presenta antes que la información nueva o rema. En la progresión lineal, el rema de una oración se convierte en el tema de la siguiente, creando una cadena informativa continua.",
  q:"En una progresión temática lineal, la información nueva de una oración se convierte en el ________ de la oración siguiente.",
  opts:["rema o comentario también de la siguiente","tema o punto de partida de la siguiente","conector o enlace entre ambas"],
  correct:1, expl:"En la progresión lineal, el rema (información nueva) de una oración pasa a ser el tema (punto de partida) de la siguiente."
},
{
  id:33, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"D",
  pTitle:"Tipos de Discurso Referido",
  passage:"Cuando un texto reproduce las palabras de otro hablante, puede hacerlo de distintas formas que implican diferentes grados de fidelidad y responsabilidad del autor.",
  q:"Relaciona cada tipo de discurso referido con su característica.",
  leftItems:["Discurso directo","Discurso indirecto","Discurso indirecto libre"],
  rightItems:["Se funde con la voz del narrador sin marcas claras de separación","Reproduce literalmente las palabras entre comillas o guión","Parafrasea las palabras adaptando pronombres y tiempos verbales"],
  correctPairs:[[0,1],[1,2],[2,0]],
  expl:"Directo = cita literal con marcas gráficas; Indirecto = paráfrasis con cambio de persona/tiempo; Indirecto libre = fusión sin marca."
},
{
  id:34, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"A",
  pTitle:"Acentuación de Interrogativos y Relativos",
  passage:"Los pronombres y adverbios interrogativos y exclamativos llevan tilde diacrítica ('qué', 'cuál', 'cómo', 'dónde', 'cuándo') para distinguirlos de sus homófonos relativos o conjunciones ('que', 'cual', 'como', 'donde', 'cuando').",
  q:"En la oración 'No sé cómo llegó tan tarde', la tilde en 'cómo' indica que funciona como ________.",
  opts:["conjunción comparativa equivalente a 'igual que'","adverbio relativo que introduce una oración de relativo","interrogativo indirecto dentro de la oración subordinada"],
  correct:2, expl:"'No sé cómo llegó' contiene una interrogativa indirecta; 'cómo' con tilde es el interrogativo indirecto que introduce esa subordinada."
},
{
  id:35, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"C",
  pTitle:"Estructura del Texto Expositivo-Argumentativo",
  passage:"Un texto expositivo-argumentativo académico integra la presentación de información y la defensa de una postura mediante una estructura jerárquica de ideas.",
  q:"Ordena los componentes de un texto expositivo-argumentativo del primero al último.",
  items:["Conclusión que sintetiza y reafirma la tesis","Tesis y delimitación del tema","Refutación de la postura contraria","Argumentos con evidencias que sustentan la tesis"],
  correctOrder:[1,3,2,0],
  expl:"El orden es: Tesis/delimitación → Argumentos/evidencias → Refutación → Conclusión."
},
{
  id:36, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"B",
  pTitle:"La Nominalización en Textos Académicos",
  passage:"La nominalización consiste en transformar verbos o adjetivos en sustantivos ('analizar' → 'el análisis'; 'importante' → 'la importancia'). Es un rasgo dominante en el registro académico porque condensa información y crea distancia objetiva, aunque puede hacer el texto más denso y difícil de leer.",
  q:"La nominalización contribuye al registro académico porque ________ información y crea una distancia objetiva entre el autor y el contenido.",
  opts:["amplía y repite","condensa y formaliza","elimina y simplifica"],
  correct:1, expl:"El texto describe dos funciones de la nominalización: 'condensar información' y 'crear distancia objetiva', rasgos propios del discurso académico."
},
{
  id:37, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"A",
  pTitle:"Conectores Contraargumentativos",
  passage:"Los conectores contraargumentativos no solo oponen ideas; modulan el peso relativo de las dos proposiciones que relacionan. 'Aunque' y 'a pesar de que' conceden validez a un argumento pero lo subordinan al argumento principal. 'Sin embargo' y 'no obstante' contradicen de manera más radical la premisa anterior.",
  q:"En el enunciado 'Aunque la propuesta es innovadora, presenta riesgos legales insuperables', el conector 'aunque' ________.",
  opts:["concede validez a la innovación pero la subordina al peso del argumento sobre los riesgos.","niega completamente que la propuesta sea innovadora.","establece una consecuencia lógica de la innovación."],
  correct:0, expl:"'Aunque' es un conector concesivo: acepta la validez del primer argumento (innovación) pero lo subordina al segundo (riesgos legales)."
},
{
  id:38, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"B",
  pTitle:"El Punto y Coma",
  passage:"El punto y coma separa partes de una enumeración cuyos elementos ya contienen comas internas; también puede separar oraciones yuxtapuestas de cierta extensión cuando la relación entre ellas es más estrecha que la que justificaría un punto. Su uso incorrecto como sustituto del punto o la coma genera ambigüedad.",
  q:"En la enumeración 'Se contrató a tres ingenieros civiles, uno de Lima; dos arquitectos, ambos con experiencia en hospitales; y un especialista ambiental', el punto y coma se usa para ________ los elementos cuyas descripciones incluyen comas internas.",
  opts:["unir y fusionar","separar y delimitar con claridad","suprimir y eliminar"],
  correct:1, expl:"El punto y coma en enumeraciones complejas evita la ambigüedad que generaría usar solo comas cuando cada elemento ya contiene comas internas."
},
{
  id:39, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"D",
  pTitle:"Modos y Tiempos Verbales en Texto Académico",
  passage:"La selección del modo y tiempo verbal afecta el sentido y el registro de un texto académico. Cada combinación modo-tiempo expresa una relación epistémica distinta con los hechos referidos.",
  q:"Relaciona cada forma verbal con la función epistémica que cumple en textos académicos.",
  leftItems:["Presente de indicativo","Condicional simple","Subjuntivo presente"],
  rightItems:["Expresa hipótesis, posibilidad o recomendación con incertidumbre","Enuncia como cierto o habitual lo referido en el texto","Formula una afirmación hipotética o con distancia epistémica"],
  correctPairs:[[0,1],[1,2],[2,0]],
  expl:"Presente indicativo = enuncia como cierto; Condicional = hipótesis o distancia epistémica; Subjuntivo = posibilidad, duda o recomendación."
},
{
  id:40, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"A",
  pTitle:"Queísmo y Dequeísmo",
  passage:"El queísmo consiste en omitir indebidamente la preposición 'de' ante 'que' cuando la norma la exige ('Me alegro que vengas' por 'Me alegro de que vengas'). El dequeísmo es el error inverso: añadir 'de' donde no corresponde ('Dijo de que vendría' por 'Dijo que vendría'). Ambos fenómenos alteran la corrección normativa del español.",
  q:"¿Cuál de los siguientes enunciados incurre en queísmo?",
  opts:["Informó de que el informe estaba listo.","Se enteró de que habían modificado el reglamento.","Estoy segura que el proyecto será aprobado."],
  correct:2, expl:"'Estar seguro/a' exige 'de que' ('Estoy segura de que'); omitir 'de' es queísmo. Las otras opciones usan correctamente 'de que'."
},
{
  id:41, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"C",
  pTitle:"Jerarquía de Ideas en el Párrafo de Desarrollo",
  passage:"En un párrafo académico de desarrollo, las ideas no tienen el mismo peso: la idea principal sostiene el párrafo; las ideas secundarias la amplían; los ejemplos o datos la ilustran; el cierre la recapitula.",
  q:"Ordena los elementos del párrafo de desarrollo de mayor a menor jerarquía conceptual.",
  items:["Oración de cierre o recapitulación","Idea principal del párrafo","Ejemplo o dato ilustrativo","Idea secundaria de apoyo o ampliación"],
  correctOrder:[1,3,2,0],
  expl:"Jerarquía: Idea principal → Idea secundaria → Ejemplo/dato → Cierre/recapitulación."
},
{
  id:42, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"B",
  pTitle:"Concordancia en Construcciones con 'Se'",
  passage:"En las oraciones con 'se' impersonal, el verbo siempre va en tercera persona del singular sin importar el sustantivo que le siga. En cambio, en las oraciones con 'se' pasivo reflejo, el verbo concuerda en número con el sustantivo que hace de sujeto paciente.",
  q:"En 'Se venden departamentos', la forma 'venden' concuerda con 'departamentos' porque la construcción es un ________, no una oración impersonal.",
  opts:["infinitivo nominal con función adjetiva","pasivo reflejo donde 'departamentos' es sujeto paciente","gerundio de acción continua sin sujeto"],
  correct:1, expl:"'Se venden departamentos' es pasivo reflejo; 'departamentos' es el sujeto paciente y por eso el verbo concuerda en plural con él."
},
{
  id:43, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"A",
  pTitle:"Uso de 'Deber' vs. 'Deber de'",
  passage:"'Deber' seguido de infinitivo expresa obligación ('Debe entregar el informe'). 'Deber de' seguido de infinitivo expresa probabilidad o suposición ('Debe de estar cansado'). Esta distinción, aunque vacilante en el uso coloquial, es relevante en el registro formal escrito.",
  q:"En un documento institucional que establece normas, ¿cuál es la forma correcta para expresar una obligación?",
  opts:["'El personal debe de presentar su credencial al ingresar.'","'El personal debe presentar su credencial al ingresar.'","Ambas formas son equivalentes en el registro formal."],
  correct:1, expl:"'Deber + infinitivo' = obligación normativa. 'Deber de + infinitivo' = suposición. En un reglamento, la obligación requiere 'deber' sin 'de'."
},
{
  id:44, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"D",
  pTitle:"Funciones de los Signos de Puntuación en Textos Complejos",
  passage:"En textos académicos extensos, los signos de puntuación cumplen funciones jerárquicas distintas que van más allá de la simple pausa.",
  q:"Relaciona cada signo con la función que cumple en textos formales.",
  leftItems:["Paréntesis","Raya o guión largo","Corchetes"],
  rightItems:["Intercala aclaraciones del editor o información omitida en citas","Introduce incisos o aclaraciones con mayor énfasis que la coma","Encierra información accesoria que no altera el sentido principal"],
  correctPairs:[[0,2],[1,1],[2,0]],
  expl:"Paréntesis = información accesoria; Raya = inciso enfático; Corchetes = intervención editorial o interpolación en citas."
},
{
  id:45, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"B",
  pTitle:"El Resumen Académico",
  passage:"Un resumen académico eficaz no es una selección de frases del texto original sino una reescritura que captura la macroestructura del texto: la tesis, los argumentos principales y las conclusiones. Incluir detalles ilustrativos, ejemplos o datos secundarios representa un error de selección que resta eficiencia al resumen.",
  q:"Según el fragmento, incluir ejemplos o datos secundarios en un resumen es un error porque afecta su ________ al no capturar la macroestructura.",
  opts:["extensión y formato","eficiencia y precisión","ortografía y estilo"],
  correct:1, expl:"El texto dice que incluir detalles secundarios 'resta eficiencia al resumen'; el criterio central es capturar la macroestructura, no los detalles."
},

// ═══════════════════════════════════════════════════════════
//  2.2  Redacción indirecta – Ámbito de participación social  (15 Qs)
// ═══════════════════════════════════════════════════════════
{
  id:46, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"A",
  pTitle:"El Registro en Documentos Institucionales",
  passage:"El registro de un documento institucional debe calibrarse en función de dos variables: el destinatario y el propósito comunicativo. Un documento dirigido a la ciudadanía en general requiere un registro formal pero accesible; uno dirigido a autoridades de igual o mayor jerarquía puede ser más técnico. El error más frecuente es usar un registro inadecuado para el destinatario.",
  q:"¿Qué determina principalmente la selección del registro en un documento institucional según el texto?",
  opts:["La longitud del documento y el número de páginas.","El destinatario y el propósito comunicativo del documento.","La fecha de elaboración y el cargo del redactor."],
  correct:1, expl:"El texto identifica dos variables determinantes: 'el destinatario y el propósito comunicativo'; no menciona extensión ni cargo del redactor."
},
{
  id:47, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"C",
  pTitle:"Estructura del Informe de Actividades",
  passage:"El informe de actividades es el documento mediante el cual una institución o servidor público da cuenta de las acciones realizadas en un período determinado.",
  q:"Ordena los apartados del informe de actividades institucional en su secuencia correcta.",
  items:["Conclusiones y áreas de mejora identificadas","Presentación: período, institución y propósito del informe","Resultados y metas alcanzadas","Descripción de actividades realizadas por área o programa"],
  correctOrder:[1,3,2,0],
  expl:"El orden es: Presentación/contexto → Actividades por área → Resultados/metas → Conclusiones/áreas de mejora."
},
{
  id:48, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"B",
  pTitle:"Impersonalidad en la Redacción Institucional",
  passage:"La impersonalidad es un rasgo definitorio de la redacción institucional: evita atribuir acciones a personas concretas y privilegia construcciones pasivas o reflexivas ('se acordó', 'se determinó') o el uso de la institución como sujeto ('El Instituto resolvió'). Esta estrategia refuerza la imagen de la institución como entidad colectiva y objetiva.",
  q:"El uso de 'se acordó' en lugar de 'el director acordó' en un documento institucional refuerza la imagen de la institución como entidad ________ y objetiva.",
  opts:["individual y personalizada","colectiva y despersonalizada","informal y accesible"],
  correct:1, expl:"El texto señala que la impersonalidad 'refuerza la imagen de la institución como entidad colectiva y objetiva', no como decisión individual."
},
{
  id:49, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"D",
  pTitle:"Propósito de los Documentos de Difusión Ciudadana",
  passage:"Las instituciones producen distintos documentos para comunicarse con la ciudadanía según el tipo de acción que buscan promover o informar.",
  q:"Relaciona cada documento con su propósito comunicativo principal.",
  leftItems:["Convocatoria","Boletín informativo","Reglamento interno publicado"],
  rightItems:["Establecer normas obligatorias para la conducta en un ámbito específico","Convocar a la ciudadanía a participar en un proceso con requisitos y fechas","Difundir noticias, logros o actividades de la institución"],
  correctPairs:[[0,1],[1,2],[2,0]],
  expl:"Convocatoria = invita a participar con condiciones; Boletín = difunde noticias institucionales; Reglamento = establece normas obligatorias."
},
{
  id:50, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"A",
  pTitle:"La Transparencia Proactiva",
  passage:"La transparencia gubernamental puede ser reactiva —responder a solicitudes de acceso a la información— o proactiva —publicar información de oficio sin que nadie la solicite—. La transparencia proactiva es más eficaz para la rendición de cuentas porque no depende de que el ciudadano conozca qué preguntar ni cómo hacerlo.",
  q:"¿Por qué el texto considera más eficaz la transparencia proactiva que la reactiva?",
  opts:["Porque genera más solicitudes de información por parte de los ciudadanos.","Porque no depende del conocimiento previo del ciudadano para acceder a la información.","Porque reduce la carga de trabajo de las áreas de transparencia institucional."],
  correct:1, expl:"El texto señala que la proactiva es más eficaz porque 'no depende de que el ciudadano conozca qué preguntar ni cómo hacerlo', eliminando esa barrera."
},
{
  id:51, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"B",
  pTitle:"Lenguaje Ciudadano en Documentos Públicos",
  passage:"El lenguaje ciudadano o lenguaje claro es una corriente de modernización de los documentos públicos que exige sustituir el lenguaje burocrático y técnico por expresiones comprensibles para el ciudadano promedio. No implica banalizar el contenido, sino hacer accesible la información sin sacrificar precisión.",
  q:"El lenguaje ciudadano en documentos públicos busca hacer la información accesible sin ________ el contenido que comunica.",
  opts:["ampliar ni desarrollar","sacrificar la precisión ni banalizar","traducir ni simplificar"],
  correct:1, expl:"El texto precisa que el lenguaje claro 'no implica banalizar el contenido' ni perder precisión; el objetivo es la accesibilidad sin esos costos."
},
{
  id:52, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"C",
  pTitle:"Ciclo de la Rendición de Cuentas",
  passage:"La rendición de cuentas es un proceso cíclico que vincula la planeación institucional con la evaluación y el aprendizaje organizacional.",
  q:"Ordena las etapas del ciclo de rendición de cuentas institucional de la primera a la última.",
  items:["Evaluación de resultados y lecciones aprendidas","Definición de objetivos y metas institucionales","Presentación pública del informe de rendición de cuentas","Ejecución de acciones y registro de evidencias"],
  correctOrder:[1,3,2,0],
  expl:"El orden del ciclo es: Definición de objetivos → Ejecución/registro → Presentación del informe → Evaluación/lecciones aprendidas."
},
{
  id:53, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"A",
  pTitle:"El Acuerdo Institucional y su Seguimiento",
  passage:"Los acuerdos institucionales requieren tres elementos para garantizar su cumplimiento: acción específica redactada en infinitivo, responsable nominado con nombre o cargo, y fecha límite precisa. La ausencia de cualquiera de estos elementos convierte al acuerdo en una declaración de intención sin mecanismo de seguimiento posible.",
  q:"¿Cuál de los siguientes es un acuerdo institucional correctamente redactado?",
  opts:["Mejorar la comunicación con las áreas operativas durante el próximo trimestre.","Elaborar el diagnóstico de necesidades de capacitación: responsable Coordinación de RRHH, fecha límite: 30 de junio.","Se acordó que el equipo hará lo necesario para atender el problema señalado."],
  correct:1, expl:"Solo la opción B cumple los tres requisitos: acción en infinitivo ('elaborar'), responsable nominado ('Coordinación de RRHH') y fecha precisa ('30 de junio')."
},
{
  id:54, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"B",
  pTitle:"Género y Lenguaje Institucional",
  passage:"Las guías de lenguaje inclusivo para documentos institucionales proponen tres estrategias principales: el desdoblamiento ('los ciudadanos y las ciudadanas'), los sustantivos genéricos ('la ciudadanía', 'el personal'), y la reformulación de la oración para evitar el uso de un género específico. Ninguna estrategia es universalmente aplicable; la selección depende del contexto y la fluidez del texto.",
  q:"Según el texto, la elección de una estrategia de lenguaje inclusivo en documentos institucionales debe depender del ________ y la fluidez del texto resultante.",
  opts:["cargo jerárquico del redactor","contexto comunicativo y destinatario","número de páginas del documento"],
  correct:1, expl:"El texto señala que 'ninguna estrategia es universalmente aplicable' y que la selección depende del 'contexto y la fluidez del texto'."
},
{
  id:55, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"D",
  pTitle:"Tipos de Comunicación Institucional Externa",
  passage:"Las instituciones públicas utilizan distintos canales y formatos para comunicarse con sus diferentes audiencias externas según el propósito y la urgencia del mensaje.",
  q:"Relaciona cada formato con la audiencia y propósito para el que resulta más adecuado.",
  leftItems:["Comunicado de prensa","Informe anual de actividades","Oficio de respuesta a solicitud ciudadana"],
  rightItems:["Ciudadano que presentó una petición formal y espera respuesta oficial","Medios de comunicación para difundir un evento de interés público","Sociedad en general para dar cuenta de la gestión del año"],
  correctPairs:[[0,1],[1,2],[2,0]],
  expl:"Comunicado = difusión a medios; Informe anual = rendición de cuentas a la sociedad; Oficio de respuesta = ciudadano que solicitó formalmente."
},
{
  id:56, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"A",
  pTitle:"La Voz Pasiva en Reglamentos",
  passage:"Los reglamentos institucionales recurren frecuentemente a la voz pasiva ('será sancionado', 'quedan prohibidas') porque permite omitir el sujeto agente (quién sanciona) y concentrar la atención en la acción regulada y sus consecuencias. Esta impersonalidad es funcionalmente adecuada cuando el agente es la institución en su conjunto.",
  q:"¿Cuál es la ventaja funcional de usar voz pasiva en reglamentos según el fragmento?",
  opts:["Permite incluir más información en menos palabras.","Permite omitir el agente y centrar la norma en la acción y sus consecuencias.","Hace el texto más accesible para la ciudadanía en general."],
  correct:1, expl:"El texto explica que la pasiva 'permite omitir el sujeto agente y concentrar la atención en la acción regulada'; no menciona brevedad ni accesibilidad."
},
{
  id:57, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"C",
  pTitle:"Estructura de un Comunicado de Crisis Institucional",
  passage:"Cuando una institución enfrenta una crisis de imagen o un incidente grave, el comunicado de crisis debe seguir una estructura que priorice la transparencia y el control de daños.",
  q:"Ordena los elementos del comunicado de crisis institucional en su secuencia estratégica correcta.",
  items:["Acciones correctivas tomadas o en proceso","Reconocimiento del hecho o incidente ocurrido","Datos de contacto para seguimiento informativo","Expresión de compromiso institucional y cierre"],
  correctOrder:[1,0,3,2],
  expl:"Orden estratégico: Reconocimiento del hecho → Acciones correctivas → Compromiso/cierre → Datos de contacto para seguimiento."
},
{
  id:58, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"B",
  pTitle:"El Texto Argumentativo en el Ámbito Público",
  passage:"Un texto argumentativo dirigido al ámbito público debe equilibrar tres dimensiones retóricas: el logos (la argumentación racional sustentada en evidencias), el ethos (la credibilidad y autoridad del enunciador) y el pathos (la conexión emocional con la audiencia). El predominio excesivo de cualquiera de las tres en detrimento de las otras debilita la eficacia persuasiva del texto.",
  q:"Según el texto, usar solo argumentos emocionales sin evidencias debilita la eficacia persuasiva porque descuida la dimensión del ________.",
  opts:["pathos o conexión emocional con la audiencia","logos o argumentación racional sustentada en evidencias","ethos o credibilidad del enunciador"],
  correct:1, expl:"El texto dice que el 'predominio excesivo' de una dimensión 'en detrimento de las otras' debilita el texto; el exceso de pathos descuida el logos (argumentación racional)."
},
{
  id:59, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"D",
  pTitle:"Modelos de Pirámide Informativa",
  passage:"El periodismo y la comunicación institucional han desarrollado distintos modelos de organización de la información para atender necesidades diferentes.",
  q:"Relaciona cada modelo con su lógica de organización.",
  leftItems:["Pirámide invertida","Pirámide normal o clásica","Estructura en diamante"],
  rightItems:["Comienza con el contexto, desarrolla el conflicto central y termina con resolución","Inicia con lo más importante y añade detalles de menor relevancia","Comienza con un gancho, desarrolla el argumento y cierra con la tesis"],
  correctPairs:[[0,1],[1,0],[2,2]],
  expl:"Pirámide invertida = más importante primero; Pirámide normal = contexto → conflicto → resolución; Diamante = gancho → desarrollo → tesis."
},
{
  id:60, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"A",
  pTitle:"Presupuestos Participativos",
  passage:"Los presupuestos participativos son mecanismos en los que la ciudadanía decide directamente cómo asignar una parte del presupuesto público. Su implementación requiere documentos claros que expliquen las reglas del proceso, los montos disponibles y los criterios de elegibilidad de los proyectos. La calidad de estos documentos determina en gran medida la equidad de la participación.",
  q:"¿Por qué la calidad de los documentos de un presupuesto participativo afecta la equidad del proceso?",
  opts:["Porque documentos más extensos generan mayor participación ciudadana.","Porque documentos claros permiten que todos los ciudadanos comprendan las reglas y participen en condiciones iguales.","Porque el lenguaje técnico eleva la credibilidad institucional del proceso."],
  correct:1, expl:"El texto vincula directamente la calidad documental con la equidad: si los documentos son claros, todos pueden participar; si no, solo quienes entienden el lenguaje técnico."
},
{
  id:61, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"A",
  pTitle:"La Hipótesis de Investigación",
  passage:"Una hipótesis de investigación no es una afirmación definitiva sino una proposición provisional que el investigador somete a prueba. Para ser científicamente válida debe cumplir tres condiciones: ser falsable (posible de refutar con evidencia empírica), ser específica (delimitar con claridad las variables y la relación esperada) y ser contrastable (disponer de indicadores medibles o registrables).",
  q:"¿Cuál de las siguientes formulaciones NO cumple los requisitos de una hipótesis científica válida según el fragmento?",
  opts:["El incremento del tiempo de capacitación semanal se asociará con una reducción de errores en el registro de datos.","Las personas con más experiencia son, en general, mejores en su trabajo.","A mayor número de revisores en el proceso editorial, menor será la tasa de errores publicados."],
  correct:1, expl:"La opción B es vaga: no especifica variables medibles ni la relación esperada con precisión; no es falsable ni contrastable tal como está formulada."
},
{
  id:62, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"B",
  pTitle:"Muestreo en Investigación Cuantitativa",
  passage:"El muestreo probabilístico garantiza que cada elemento de la población tenga una probabilidad conocida y distinta de cero de ser seleccionado. Esto permite extrapolar los resultados al conjunto poblacional con un nivel de confianza calculable. En contraste, el muestreo no probabilístico ofrece mayor flexibilidad pero limita la generalización estadística.",
  q:"Según el texto, la ventaja distintiva del muestreo probabilístico sobre el no probabilístico es que permite ________ los resultados a la población con un nivel de confianza calculable.",
  opts:["simplificar y acelerar","generalizar o extrapolar","fragmentar y segmentar"],
  correct:1, expl:"El texto señala que el muestreo probabilístico 'permite extrapolar los resultados al conjunto poblacional', lo que equivale a generalizar con base estadística."
},
{
  id:63, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"C",
  pTitle:"Fases del Análisis de Datos Cualitativos",
  passage:"El análisis de datos cualitativos no sigue una secuencia rígida, pero en la práctica reconoce etapas que van de la inmersión en los datos brutos hasta la elaboración de conclusiones interpretativas.",
  q:"Ordena las fases del análisis cualitativo de datos en su secuencia metodológica habitual.",
  items:["Identificación de categorías y códigos emergentes","Redacción de hallazgos e interpretaciones finales","Transcripción y lectura repetida del material empírico","Saturación teórica y cierre del proceso de codificación"],
  correctOrder:[2,0,3,1],
  expl:"La secuencia es: Transcripción/lectura → Identificación de códigos → Saturación teórica → Redacción de hallazgos."
},
{
  id:64, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"D",
  pTitle:"Escalas de Medición en Ciencias Sociales",
  passage:"Las escalas de medición determinan qué operaciones matemáticas son legítimas sobre los datos recogidos. Confundir el nivel de medición de una variable conduce a análisis estadísticos inapropiados y conclusiones inválidas.",
  q:"Relaciona cada escala con la propiedad que la distingue de las inferiores.",
  leftItems:["Nominal","Ordinal","De razón"],
  rightItems:["Cuenta con un cero absoluto que indica ausencia total del atributo","Solo clasifica en categorías sin establecer orden entre ellas","Establece orden pero los intervalos entre valores no son iguales"],
  correctPairs:[[0,1],[1,2],[2,0]],
  expl:"Nominal = solo clasifica; Ordinal = añade orden sin intervalos iguales; Razón = añade cero absoluto real."
},
{
  id:65, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"A",
  pTitle:"Ética en la Investigación con Personas",
  passage:"Los principios de la ética en investigación con seres humanos derivan en gran parte del Informe Belmont (1979): respeto a las personas (autonomía e información para el consentimiento informado), beneficencia (maximizar beneficios y minimizar riesgos) y justicia (distribución equitativa de cargas y beneficios entre los participantes). Ningún principio tiene precedencia absoluta; deben ponderarse en cada caso.",
  q:"¿Qué implica el principio de justicia en investigación según el Informe Belmont descrito en el texto?",
  opts:["Que los investigadores siempre deben obtener el consentimiento escrito de los participantes.","Que las cargas y los beneficios de la investigación se distribuyan equitativamente entre los participantes.","Que los beneficios del estudio deben superar siempre sus riesgos potenciales."],
  correct:1, expl:"El texto define justicia como 'distribución equitativa de cargas y beneficios'; el consentimiento corresponde al principio de autonomía y la minimización de riesgos al de beneficencia."
},

// ═══════════════════════════════════════════════════════════
//  1.2  Comprensión lectora – Ámbito literario  (+5 Qs)
// ═══════════════════════════════════════════════════════════
{
  id:66, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"B",
  pTitle:"El Monólogo Interior",
  passage:"El monólogo interior es una técnica narrativa que reproduce el flujo del pensamiento de un personaje sin la mediación del narrador omnisciente. En su forma más radical —el stream of consciousness— la sintaxis se fragmenta para imitar la discontinuidad y simultaneidad de la mente humana. James Joyce y Virginia Woolf son sus exponentes canónicos.",
  q:"Según el texto, la característica que distingue al stream of consciousness del monólogo interior convencional es la ________ de la sintaxis para imitar la discontinuidad mental.",
  opts:["regularidad y fluidez","fragmentación deliberada","claridad expositiva"],
  correct:1, expl:"El texto menciona que en el stream of consciousness 'la sintaxis se fragmenta para imitar la discontinuidad y simultaneidad de la mente'; eso lo distingue de un monólogo interior más ordenado."
},
{
  id:67, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"A",
  pTitle:"El Bildungsroman",
  passage:"El Bildungsroman o novela de formación narra el proceso de desarrollo psicológico y moral de un protagonista desde la adolescencia hasta la madurez. El conflicto central suele ser la tensión entre las aspiraciones individuales del personaje y las restricciones del orden social. La resolución no siempre implica aceptación sino, a veces, la constatación del fracaso del ideal.",
  q:"¿Cuál es el conflicto que estructura narrativamente al Bildungsroman según el fragmento?",
  opts:["La lucha del protagonista contra un antagonista externo claramente definido.","La tensión entre las aspiraciones personales del protagonista y las restricciones sociales.","El dilema moral entre el bien y el mal en contextos históricos específicos."],
  correct:1, expl:"El texto define el conflicto central como 'la tensión entre las aspiraciones individuales y las restricciones del orden social', no un antagonista ni un dilema bien/mal."
},
{
  id:68, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"D",
  pTitle:"Recursos del Lenguaje Poético",
  passage:"El lenguaje poético recurre a mecanismos fónicos y semánticos que intensifican la experiencia estética del lector y distinguen al texto literario del discurso cotidiano.",
  q:"Relaciona cada recurso con su definición precisa.",
  leftItems:["Aliteración","Sinestesia","Hipérbaton"],
  rightItems:["Alteración del orden sintáctico habitual de la oración","Repetición de sonidos consonánticos en posiciones próximas","Transferencia de una sensación de un sentido a otro campo sensorial"],
  correctPairs:[[0,1],[1,2],[2,0]],
  expl:"Aliteración = repetición de sonidos; Sinestesia = mezcla de sentidos; Hipérbaton = orden sintáctico alterado."
},
{
  id:69, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"C",
  pTitle:"Estructura de la Tragedia Clásica",
  passage:"La tragedia griega clásica sigue una estructura formal que Aristóteles describió en la Poética y que ha influido en el teatro occidental hasta la actualidad.",
  q:"Ordena las partes de la tragedia griega clásica en su secuencia dramática.",
  items:["Éxodo o desenlace y salida del coro","Párodos o canto de entrada del coro","Episodios o actos con intervención de actores","Prólogo o presentación del conflicto"],
  correctOrder:[3,1,2,0],
  expl:"La secuencia es: Prólogo → Párodos (entrada del coro) → Episodios (actos) → Éxodo (salida/desenlace)."
},
{
  id:70, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"A",
  pTitle:"La Metaficción",
  passage:"La metaficción es una estrategia narrativa en la que el texto llama la atención sobre su propia condición de artificio literario. Puede manifestarse cuando personajes leen o escriben la novela en que aparecen, cuando el narrador interrumpe la historia para dirigirse al lector, o cuando la trama reflexiona sobre las convenciones del género en que se inscribe. Su efecto es desestabilizar la ilusión de realismo.",
  q:"¿Cuál es el propósito central de la metaficción según el fragmento?",
  opts:["Fortalecer la ilusión de que los hechos narrados son reales.","Desestabilizar la ilusión realista haciendo visible el carácter construido del texto.","Introducir personajes históricos dentro de tramas de ficción."],
  correct:1, expl:"El texto afirma que el efecto de la metaficción es 'desestabilizar la ilusión de realismo', es decir, romper el pacto de credibilidad del relato realista."
},

// ═══════════════════════════════════════════════════════════
//  1.3  Comprensión lectora – Ámbito de participación social  (+5 Qs)
// ═══════════════════════════════════════════════════════════
{
  id:71, sub:"1.3", label:"Comprensión lectora – Ámbito de participación social", fmt:"A",
  pTitle:"Mecanismos de Democracia Directa",
  passage:"Los mecanismos de democracia directa —referéndum, plebiscito, iniciativa popular e iniciativa de revocación de mandato— amplían la participación ciudadana más allá del voto periódico. Sin embargo, su eficacia depende de que los ciudadanos cuenten con información veraz, suficiente y comprensible para tomar decisiones informadas. La desinformación masiva puede convertir un mecanismo democrático en instrumento de manipulación.",
  q:"¿Cuál es la condición indispensable para que los mecanismos de democracia directa funcionen como instrumentos democráticos según el fragmento?",
  opts:["Que el número de votantes sea superior al cincuenta por ciento del padrón.","Que la ciudadanía tenga acceso a información veraz, suficiente y comprensible.","Que los medios de comunicación públicos transmitan los debates en horario estelar."],
  correct:1, expl:"El texto condiciona la eficacia de estos mecanismos a que 'los ciudadanos cuenten con información veraz, suficiente y comprensible', no a umbrales de participación ni a la cobertura mediática."
},
{
  id:72, sub:"1.3", label:"Comprensión lectora – Ámbito de participación social", fmt:"B",
  pTitle:"Capital Social y Cohesión Comunitaria",
  passage:"El capital social —concepto desarrollado por Robert Putnam— se refiere a las redes de confianza, normas de reciprocidad y vínculos asociativos que facilitan la acción colectiva. Las comunidades con alto capital social tienden a resolver problemas locales con mayor eficiencia porque los costos de coordinación son más bajos. Su erosión, en cambio, dificulta la cooperación incluso cuando todos los involucrados se beneficiarían de ella.",
  q:"Según el texto, las comunidades con alto capital social resuelven problemas colectivos más eficientemente porque sus ________ de coordinación son menores.",
  opts:["tiempos y calendarios","costos o fricciones","recursos económicos"],
  correct:1, expl:"El texto explica que el capital social facilita la acción colectiva porque 'los costos de coordinación son más bajos', no porque haya más recursos ni mejores calendarios."
},
{
  id:73, sub:"1.3", label:"Comprensión lectora – Ámbito de participación social", fmt:"D",
  pTitle:"Instrumentos de Política Pública",
  passage:"Los gobiernos cuentan con distintos tipos de instrumentos para incidir en el comportamiento de individuos y organizaciones en la búsqueda del bien público.",
  q:"Relaciona cada instrumento con su mecanismo de acción.",
  leftItems:["Instrumento regulatorio","Instrumento económico","Instrumento informativo"],
  rightItems:["Modifica incentivos financieros (subsidios, impuestos) para orientar conductas","Establece obligaciones o prohibiciones de cumplimiento coercitivo","Busca cambiar conductas proporcionando datos, advertencias o campañas de concientización"],
  correctPairs:[[0,1],[1,0],[2,2]],
  expl:"Regulatorio = norma obligatoria; Económico = incentivos financieros; Informativo = datos y campañas."
},
{
  id:74, sub:"1.3", label:"Comprensión lectora – Ámbito de participación social", fmt:"C",
  pTitle:"Ciclo de las Políticas Públicas",
  passage:"El análisis de políticas públicas descompone la intervención gubernamental en fases que se retroalimentan de manera continua, conformando lo que se conoce como el ciclo de las políticas.",
  q:"Ordena las fases del ciclo de políticas públicas en su secuencia lógica.",
  items:["Evaluación de resultados e impactos","Identificación y definición del problema público","Implementación de la política seleccionada","Diseño y selección de alternativas de solución"],
  correctOrder:[1,3,2,0],
  expl:"El ciclo es: Definición del problema → Diseño/selección de alternativas → Implementación → Evaluación."
},
{
  id:75, sub:"1.3", label:"Comprensión lectora – Ámbito de participación social", fmt:"A",
  pTitle:"El Derecho de Acceso a la Información",
  passage:"El derecho de acceso a la información pública constituye un derecho fundamental que habilita a cualquier persona para solicitar, recibir y difundir información en poder del Estado. Su ejercicio no requiere acreditar interés jurídico ni motivar la solicitud. Las restricciones solo son legítimas cuando la información pueda comprometer la seguridad nacional, la privacidad de terceros o el proceso de deliberación interna de la autoridad.",
  q:"¿Cuál de los siguientes principios del derecho de acceso a la información se desprende directamente del fragmento?",
  opts:["El solicitante debe demostrar que la información le afecta personalmente para poder pedirla.","Cualquier persona puede solicitar información pública sin necesidad de justificar su petición.","Las instituciones pueden negar información siempre que no estén obligadas a publicarla proactivamente."],
  correct:1, expl:"El texto dice explícitamente que el ejercicio de este derecho 'no requiere acreditar interés jurídico ni motivar la solicitud', lo que equivale a que no hay que justificar la petición."
},

// ═══════════════════════════════════════════════════════════
//  2.1  Redacción indirecta – Ámbito de estudio  (+5 Qs)
// ═══════════════════════════════════════════════════════════
{
  id:76, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"B",
  pTitle:"La Nota al Pie y la Cita Bibliográfica",
  passage:"En los textos académicos la nota al pie cumple dos funciones distintas: la nota de referencia remite al lector a la fuente de una afirmación específica, mientras que la nota de contenido desarrolla una idea secundaria que enriquecería el argumento pero interrumpiría el flujo del texto principal. Confundirlas produce documentos con notas excesivamente largas o referencias enterradas en el cuerpo principal.",
  q:"Según el texto, una nota que desarrolla información complementaria pero que interrumpiría el argumento central del párrafo es una nota de ________, no de referencia.",
  opts:["pie de página obligatoria","contenido o discursiva","bibliografía final"],
  correct:1, expl:"El texto distingue la nota de referencia (remite a fuente) de la nota de contenido (desarrolla idea secundaria sin romper el hilo); la que 'enriquecería el argumento pero interrumpiría el flujo' es la de contenido."
},
{
  id:77, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"A",
  pTitle:"La Coherencia Textual",
  passage:"La coherencia es la propiedad semántica del texto que garantiza su unidad de sentido: todos los enunciados deben contribuir al desarrollo del tema central y ninguno debe contradecir la información establecida previamente. Se distingue de la cohesión, que opera a nivel superficial mediante marcadores y conectores, mientras que la coherencia opera en el nivel profundo del significado global.",
  q:"¿En qué difiere la coherencia de la cohesión según el fragmento?",
  opts:["La coherencia usa conectores gramaticales; la cohesión opera en el nivel semántico profundo.","La coherencia opera en el nivel profundo del significado global; la cohesión usa mecanismos superficiales de enlace.","Coherencia y cohesión son sinónimos que designan la misma propiedad textual."],
  correct:1, expl:"El texto invierte el orden común de confusión: coherencia = nivel semántico profundo; cohesión = mecanismos superficiales (conectores). La opción A los invierte incorrectamente."
},
{
  id:78, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"C",
  pTitle:"Estructura del Artículo de Divulgación Científica",
  passage:"El artículo de divulgación traduce el conocimiento especializado para un público no experto, pero debe mantener la precisión factual y la honestidad sobre el estado del conocimiento.",
  q:"Ordena los elementos de un artículo de divulgación científica en su secuencia de redacción habitual.",
  items:["Conclusiones y proyecciones para el lector no especializado","Título llamativo y lead de enganche","Contexto y antecedentes del tema","Explicación del hallazgo o avance principal"],
  correctOrder:[1,2,3,0],
  expl:"La secuencia es: Título/lead → Contexto/antecedentes → Explicación del hallazgo → Conclusiones/proyecciones."
},
{
  id:79, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"D",
  pTitle:"Tipos de Párrafo según su Función",
  passage:"La eficacia de un texto académico depende en gran medida de reconocer la función de cada párrafo y construirlo de acuerdo con esa función.",
  q:"Relaciona cada tipo de párrafo con su función dentro del texto.",
  leftItems:["Párrafo de introducción","Párrafo de transición","Párrafo de conclusión"],
  rightItems:["Sintetiza los puntos clave y proyecta el significado de lo expuesto","Enuncia el tema, establece el contexto y anticipa la tesis","Conecta dos secciones del texto señalando el puente temático entre ellas"],
  correctPairs:[[0,1],[1,2],[2,0]],
  expl:"Introducción = enuncia tema y tesis; Transición = conecta secciones; Conclusión = sintetiza y proyecta."
},
{
  id:80, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"A",
  pTitle:"El Resumen Ejecutivo",
  passage:"El resumen ejecutivo es un documento autónomo que concentra los elementos esenciales de un informe extenso: problema o propósito, metodología aplicada, hallazgos principales y recomendaciones concretas. A diferencia del resumen o abstract académico, está orientado a tomadores de decisiones que pueden no leer el informe completo, por lo que el énfasis debe estar en las implicaciones prácticas y las acciones recomendadas.",
  q:"¿En qué se diferencia el resumen ejecutivo del abstract académico según el texto?",
  opts:["El resumen ejecutivo es más largo y detallado que el abstract.","El resumen ejecutivo enfatiza implicaciones prácticas para tomadores de decisiones; el abstract sintetiza el contenido para lectores académicos.","El resumen ejecutivo no incluye metodología, a diferencia del abstract."],
  correct:1, expl:"El texto distingue al resumen ejecutivo por su orientación a 'tomadores de decisiones' y énfasis en 'implicaciones prácticas y acciones'; no dice que sea más largo ni que excluya la metodología."
},

// ═══════════════════════════════════════════════════════════
//  2.2  Redacción indirecta – Ámbito de participación social  (+5 Qs)
// ═══════════════════════════════════════════════════════════
{
  id:81, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"C",
  pTitle:"Fases de la Consulta Pública",
  passage:"La consulta pública es un mecanismo institucional para incorporar la perspectiva ciudadana en la elaboración de normas o políticas antes de su adopción definitiva.",
  q:"Ordena las etapas de una consulta pública institucional en su secuencia correcta.",
  items:["Sistematización y análisis de las aportaciones recibidas","Convocatoria y difusión entre los grupos interesados","Publicación del informe de resultados y decisiones adoptadas","Periodo abierto para la recepción de comentarios y propuestas"],
  correctOrder:[1,3,0,2],
  expl:"La secuencia es: Convocatoria y difusión → Recepción de comentarios → Sistematización/análisis → Publicación del informe de resultados."
},
{
  id:82, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"A",
  pTitle:"La Transparencia Proactiva",
  passage:"La transparencia proactiva obliga a las instituciones a publicar información de interés público sin necesidad de que un ciudadano la solicite previamente. Su fundamento es que la información generada con recursos públicos pertenece a la sociedad y su divulgación no debería depender de la iniciativa individual. Este enfoque contrasta con el modelo reactivo, en el que la institución solo revela información cuando se lo exigen.",
  q:"¿Cuál es el argumento central que justifica la transparencia proactiva según el texto?",
  opts:["Que publicar información reduce la carga administrativa de atender solicitudes individuales.","Que la información generada con recursos públicos pertenece a la sociedad y su acceso no debe depender de que alguien la pida.","Que los ciudadanos tienen mayor interés en la información cuando ellos mismos la solicitan."],
  correct:1, expl:"El texto fundamenta la transparencia proactiva en que 'la información generada con recursos públicos pertenece a la sociedad'; la reducción de carga y el interés ciudadano no aparecen como argumentos."
},
{
  id:83, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"B",
  pTitle:"Redacción de Convocatorias Institucionales",
  passage:"Una convocatoria institucional eficaz debe responder con precisión a las preguntas: ¿quién puede participar? (requisitos de elegibilidad), ¿para qué? (objeto y objetivos), ¿cómo? (proceso y documentación), ¿cuándo? (fechas y plazos) y ¿dónde? (lugar o plataforma de registro). La omisión de cualquiera de estos elementos genera incertidumbre y reduce la participación o eleva las consultas al área organizadora.",
  q:"Según el texto, omitir los requisitos de elegibilidad en una convocatoria genera ________ entre los potenciales participantes respecto a si pueden o no inscribirse.",
  opts:["certeza y confianza","incertidumbre y dudas","interés y motivación"],
  correct:1, expl:"El texto señala que 'la omisión de cualquiera de estos elementos genera incertidumbre'; al faltar la elegibilidad, los interesados no saben si califican, lo que produce duda e incertidumbre."
},
{
  id:84, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"D",
  pTitle:"Documentos del Proceso Electoral",
  passage:"Los procesos electorales generan una amplia variedad de documentos institucionales, cada uno con funciones específicas dentro del ciclo democrático.",
  q:"Relaciona cada documento electoral con su función dentro del proceso.",
  leftItems:["Lista nominal de electores","Acta de escrutinio y cómputo","Convocatoria a elecciones"],
  rightItems:["Registra los resultados de la votación en cada casilla al cierre del proceso","Informa a la ciudadanía la fecha, tipo de elección y procedimiento para votar","Contiene el padrón de ciudadanos con credencial vigente habilitados para votar"],
  correctPairs:[[0,2],[1,0],[2,1]],
  expl:"Lista nominal = ciudadanos habilitados para votar; Acta de escrutinio = resultados de casilla; Convocatoria = informa fecha y procedimiento."
},
{
  id:85, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"A",
  pTitle:"El Informe de Gestión",
  passage:"El informe de gestión es el documento mediante el cual un servidor público o una institución dan cuenta de las acciones realizadas durante un período determinado en relación con los objetivos previamente establecidos. Para ser útil como herramienta de evaluación, debe articular claramente: los objetivos programados, las actividades ejecutadas, los indicadores de resultados alcanzados y las desviaciones respecto a la meta, acompañadas de su justificación.",
  q:"¿Cuál de los siguientes elementos mencionados en el texto diferencia a un informe de gestión de una simple lista de actividades realizadas?",
  opts:["La presentación cronológica de todas las acciones ejecutadas durante el período.","La articulación entre objetivos programados, resultados alcanzados y justificación de las desviaciones.","El uso de gráficas y tablas para visualizar los datos de manera atractiva."],
  correct:1, expl:"El texto especifica que para ser útil como herramienta de evaluación el informe debe articular objetivos, actividades, indicadores y desviaciones con su justificación; eso lo distingue de una mera lista de actividades."
}

]; // fin BANCO_MODULO_A
