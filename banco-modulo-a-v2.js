// ═══════════════════════════════════════════════════════════
//  BANCO DE PREGUNTAS – Módulo A · v5 (Nivel Avanzado)
//  Archivo externo · 150 preguntas · 4 formatos
//  Para usar: sube a GitHub y apunta CONFIG.BANCO_URL a la URL raw
//  Nombre de la variable exportada: BANCO_MODULO_A
// ═══════════════════════════════════════════════════════════

const BANCO_MODULO_A = [
// ═══════════════════════════════════════════════════════
// 1.1 COMPRENSIÓN LECTORA – ÁMBITO DE ESTUDIO (12 Qs)
// ═══════════════════════════════════════════════════════
{
  id:1, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"A",
  pTitle:"La Inconmensurabilidad Paradigmática (Kuhn)",
  passage:"Thomas Kuhn argumentó que los paradigmas científicos no son simplemente teorías mejores o peores, sino marcos conceptuales inconmensurables: los científicos que operan bajo paradigmas distintos literalmente no comparten los mismos conceptos, aunque usen las mismas palabras. El electrón del físico clásico y el del físico cuántico no son el mismo objeto descrito de dos formas; son objetos distintos construidos por prácticas de laboratorio e instrumentos de medición diferentes. Esta tesis implica que la transición entre paradigmas no puede evaluarse con criterios de racionalidad estrictamente lógica, sino que involucra lo que Kuhn llamó 'persuasión', con todo su peso retórico y sociológico.",
  q:"¿Cuál sería la consecuencia más problemática de la tesis de la inconmensurabilidad para la filosofía de la ciencia tradicional?",
  opts:["Que los científicos no pueden cambiar de paradigma sin entrenamiento adicional.","Que el progreso científico no puede evaluarse mediante criterios de racionalidad estrictamente lógica, lo que cuestiona la idea de verdad acumulativa.","Que los experimentos de laboratorio son culturalmente relativos y, por tanto, inválidos."],
  correct:1, expl:"La tesis de Kuhn no niega que los experimentos sean válidos, pero sí pone en cuestión que el avance entre paradigmas sea puramente racional-lógico; el término 'persuasión' reintroduce la retórica y la sociología donde antes reinaba la lógica, amenazando la noción de verdad científica acumulativa."
},
{
  id:2, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"B",
  pTitle:"Validez Interna vs. Validez Externa en Investigación",
  passage:"Una investigación experimental con alto control de variables logra maximizar la validez interna: la confianza en que las diferencias observadas se deben a la variable manipulada y no a factores externos. Sin embargo, las mismas condiciones de control artificial que fortalecen la validez interna pueden debilitar la validez externa, es decir, la posibilidad de generalizar los hallazgos a contextos naturales menos controlados. Este dilema se denomina en metodología la 'tensión validez interna–validez externa' y no admite solución perfecta: cualquier diseño implica ceder en una dimensión para ganar en la otra.",
  q:"Según el texto, en un estudio de laboratorio altamente controlado, la validez ________ se fortalece, pero a costa de comprometer la validez ________, que permite aplicar los resultados a situaciones reales.",
  opts:["externa / interna","interna / externa","ecológica / estadística"],
  correct:1, expl:"El texto establece explícitamente la dirección del intercambio: el control aumenta la validez interna (certeza sobre la causa), pero reduce la validez externa (aplicabilidad a entornos naturales)."
},
{
  id:3, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"D",
  pTitle:"Diseños de Investigación y sus Características",
  passage:"Los diseños de investigación se seleccionan según el grado de control del investigador, la capacidad de inferencia causal y el contexto en que se produce el fenómeno. Cada diseño presenta ventajas y limitaciones metodológicas específicas que determinan el tipo de preguntas que puede responder.",
  q:"Relaciona cada diseño de investigación con su característica metodológica principal.",
  leftItems:["Experimento aleatorizado controlado","Estudio de caso único","Encuesta transversal"],
  rightItems:["Provee una descripción profunda de un fenómeno en un contexto específico, pero limita la generalización","Describe la distribución de variables en una población en un momento dado, sin establecer causalidad","Permite inferencia causal fuerte al controlar la asignación aleatoria de los participantes a condiciones"],
  correctPairs:[[0,2],[1,0],[2,1]],
  expl:"Experimento aleatorizado = causalidad fuerte por asignación aleatoria; Estudio de caso = profundidad contextual sin generalización; Encuesta transversal = descripción en un momento sin causalidad."
},
{
  id:4, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"C",
  pTitle:"Proceso de Refutación de una Hipótesis",
  passage:"El método hipotético-deductivo propuesto por Popper establece que una hipótesis científica debe ser falsable: debe formularse de manera que sea posible imaginar una observación que la refute. El proceso por el que una hipótesis se pone a prueba sigue una lógica precisa.",
  q:"Ordena las etapas del método hipotético-deductivo para refutar una hipótesis, de la primera a la última.",
  items:["Derivación de predicciones observables a partir de la hipótesis","Formulación de la hipótesis falsable","Revisión o rechazo de la hipótesis según el resultado","Contrastación empírica: diseño y ejecución del experimento o estudio"],
  correctOrder:[1,0,3,2],
  expl:"El orden es: Formulación de la hipótesis → Derivación de predicciones observables → Contrastación empírica → Revisión o rechazo según resultados."
},
{
  id:5, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"A",
  pTitle:"La Falacia Ecológica y la Falacia Atomista",
  passage:"La falacia ecológica ocurre cuando se atribuyen a los individuos las características estadísticas de los grupos a los que pertenecen. Por ejemplo: si los países con mayor PIB per cápita tienen menor mortalidad infantil, no se puede concluir que los individuos más ricos dentro de cada país tengan menor riesgo de mortalidad infantil. La falacia inversa, denominada atomista o individualista, consiste en inferir las propiedades de un grupo a partir de las de sus individuos, ignorando que los fenómenos colectivos tienen lógicas propias que no se reducen a la suma de sus partes.",
  q:"Un investigador observa que los municipios con mayor número de iglesias tienen también mayor tasa de homicidios, y concluye que la religiosidad individual aumenta la propensión a la violencia. ¿Qué falacia comete?",
  opts:["Falacia atomista, porque infiere propiedades individuales a partir de datos grupales.","Falacia ecológica, porque atribuye a los individuos una correlación que solo existe a nivel de unidades agregadas (municipios).","Falacia del hombre de paja, porque distorsiona el argumento contrario."],
  correct:1, expl:"Los datos son de municipios (unidades ecológicas), pero la conclusión se aplica a individuos; eso define la falacia ecológica. Es el error clásico de Robinson (1950) sobre alfabetismo e inmigración."
},
{
  id:6, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"B",
  pTitle:"El Efecto Hawthorne",
  passage:"El efecto Hawthorne designa la modificación del comportamiento de los sujetos estudiados como consecuencia de saber que están siendo observados, independientemente de las condiciones experimentales propiamente dichas. El nombre proviene de los estudios de productividad realizados en la planta Hawthorne de Western Electric entre 1924 y 1932, donde los trabajadores mejoraban su desempeño simplemente por el hecho de ser objeto de atención, no por los cambios en las condiciones de iluminación que los investigadores manipulaban. Este efecto constituye una amenaza a la validez interna de los estudios observacionales y cuasiexperimentales porque introduce una variable de confusión difícil de aislar.",
  q:"El efecto Hawthorne representa una amenaza a la validez interna porque introduce una variable ________ —la conciencia de ser observado— que puede explicar los cambios en el comportamiento sin que intervenga la variable manipulada por el investigador.",
  opts:["dependiente, que el investigador mide pero no controla","confusora o espuria, no contemplada en el diseño original","moderadora, que amplifica el efecto de la variable independiente"],
  correct:1, expl:"El efecto Hawthorne es, precisamente, una variable no planeada (confusora) que genera cambios atribuibles al acto de observar y no a la manipulación experimental; eso es exactamente lo que amenaza la validez interna."
},
{
  id:7, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"A",
  pTitle:"Niveles de Análisis en Ciencias Sociales",
  passage:"Las ciencias sociales operan simultáneamente en tres niveles de análisis: micro (el individuo y sus interacciones inmediatas), meso (las organizaciones, redes y comunidades) y macro (las estructuras sociales amplias como el Estado, la economía global o la cultura). Los problemas surgen cuando se intenta explicar fenómenos propios de un nivel usando exclusivamente conceptos y datos de otro. El reduccionismo metodológico consiste en explicar fenómenos macro a partir únicamente de la psicología o las elecciones individuales; el holismo extremo, en explicar la conducta individual como mero reflejo de la estructura. Ambos extremos empobrecen el análisis.",
  q:"¿Qué posición metodológica propone implícitamente el texto como más adecuada para las ciencias sociales?",
  opts:["El reduccionismo metodológico, porque los fenómenos macro son en última instancia suma de elecciones individuales.","Un análisis que articule los tres niveles y reconozca que cada uno tiene lógicas que no se reducen completamente a los otros.","El holismo extremo, porque las estructuras condicionan la conducta individual de forma determinante."],
  correct:1, expl:"El texto critica los dos extremos (reduccionismo y holismo) y señala que 'ambos empobrecen el análisis', lo que implica que la postura adecuada articula los niveles sin reducirlos entre sí."
},
{
  id:8, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"D",
  pTitle:"Tipos de Variables y su Función en el Diseño",
  passage:"En investigación experimental y cuasiexperimental, las variables se clasifican según su función en el diseño. Conocer esa función es indispensable para construir hipótesis precisas y elegir los análisis estadísticos adecuados.",
  q:"Relaciona cada tipo de variable con su función en el diseño de investigación.",
  leftItems:["Variable independiente","Variable dependiente","Variable mediadora"],
  rightItems:["Mecanismo o proceso a través del cual la variable independiente genera su efecto sobre el resultado","Resultado que se mide para detectar el efecto de la manipulación experimental","Condición que el investigador manipula o controla para observar su efecto"],
  correctPairs:[[0,2],[1,1],[2,0]],
  expl:"Independiente = lo que el investigador manipula; Dependiente = lo que se mide como resultado; Mediadora = el mecanismo explicativo entre causa y efecto."
},
{
  id:9, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"B",
  pTitle:"Triangulación Metodológica",
  passage:"La triangulación metodológica consiste en utilizar múltiples métodos, fuentes de datos, investigadores o marcos teóricos para estudiar un mismo fenómeno. Su propósito no es confirmar los resultados obtenidos por un solo método, sino detectar las limitaciones específicas de cada uno y alcanzar una comprensión más compleja del objeto de estudio. La convergencia de resultados entre métodos distintos aumenta la credibilidad de los hallazgos; la divergencia, en cambio, no indica error sino que revela dimensiones distintas del fenómeno que cada método captura de manera diferencial.",
  q:"Según el texto, cuando la triangulación produce resultados divergentes entre métodos, esto no indica un error de diseño sino que ________ del fenómeno estudiado que cada método capta de forma parcial.",
  opts:["confirma la irrelevancia de los métodos cualitativos","revela dimensiones distintas","muestra la necesidad de un único método de referencia"],
  correct:1, expl:"El texto es explícito: la divergencia 'no indica error sino que revela dimensiones distintas del fenómeno'; cada método tiene una perspectiva parcial y complementaria."
},
{
  id:10, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"A",
  pTitle:"Ética en Investigación con Seres Humanos",
  passage:"El principio de beneficencia en investigación no se limita a 'no hacer daño' (primum non nocere), sino que impone la obligación activa de maximizar los beneficios y minimizar los riesgos para los participantes. Sin embargo, en investigación con poblaciones vulnerables —menores, personas privadas de libertad, comunidades en situación de pobreza extrema— la relación entre beneficio individual y beneficio social se vuelve especialmente tensa: un estudio puede beneficiar a la sociedad en su conjunto al tiempo que expone a riesgos específicos a quienes menos pueden resistirlos. El Informe Belmont (1979) respondió a esta tensión añadiendo el principio de justicia: los beneficios y los riesgos de la investigación deben distribuirse equitativamente.",
  q:"¿Por qué el principio de justicia del Informe Belmont no es simplemente redundante con el principio de beneficencia?",
  opts:["Porque la justicia se refiere a la calidad técnica del diseño de investigación, mientras que la beneficencia se refiere al consentimiento.","Porque la beneficencia puede maximizar el beneficio agregado sin reparar en que los riesgos recaigan desproporcionadamente sobre los grupos más vulnerables, mientras la justicia exige distribución equitativa.","Porque el Informe Belmont aplica la justicia solo a estudios con financiamiento público, no privado."],
  correct:1, expl:"La distinción es conceptualmente precisa: la beneficencia puede satisfacerse con una lógica utilitaria que ignore la distribución de riesgos; la justicia agrega la dimensión distributiva, que impide que los vulnerables asuman cargas para beneficio de otros."
},
{
  id:11, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"C",
  pTitle:"Estructura de un Artículo Científico (formato IMRYD)",
  passage:"El formato IMRYD (Introducción, Métodos, Resultados y Discusión) es el estándar internacional para la comunicación de investigaciones empíricas. Cada sección cumple una función retórico-epistémica distinta en la construcción del argumento científico.",
  q:"Ordena las secciones del artículo científico formato IMRYD en su secuencia correcta.",
  items:["Discusión: interpretación, limitaciones y proyecciones","Métodos: descripción replicable del procedimiento","Introducción: contexto, problema y objetivos","Resultados: presentación de datos sin interpretación"],
  correctOrder:[2,1,3,0],
  expl:"Secuencia IMRYD: Introducción → Métodos → Resultados → Discusión. Cada sección tiene un propósito distinto y deben presentarse en este orden para que el argumento sea reproducible y evaluable."
},
{
  id:12, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"B",
  pTitle:"Saturación Teórica en Investigación Cualitativa",
  passage:"En investigación cualitativa, el criterio de saturación teórica reemplaza al criterio estadístico de tamaño muestral. Se alcanza la saturación cuando la incorporación de nuevos casos, entrevistas u observaciones ya no aporta categorías, propiedades o relaciones teóricas nuevas al análisis. En términos prácticos, la saturación es un criterio dinámico: el investigador debe continuar recolectando datos hasta que llegue al punto en que añadir más participantes no modifica su comprensión del fenómeno. Este criterio es metodológicamente exigente porque requiere que el investigador esté simultáneamente recolectando y analizando.",
  q:"La saturación teórica es un criterio que determina cuándo detener la recolección de datos al alcanzarse el punto en que nuevos casos ya no ________ al marco de categorías emergentes.",
  opts:["aplican los instrumentos cuantitativos diseñados","aportan información conceptual nueva","superan el umbral estadístico de representatividad"],
  correct:1, expl:"La saturación ocurre cuando nuevos casos no aportan categorías ni relaciones teóricas nuevas; es un criterio conceptual, no estadístico."
},

// ═══════════════════════════════════════════════════════
// 1.2 COMPRENSIÓN LECTORA – ÁMBITO LITERARIO (12 Qs)
// ═══════════════════════════════════════════════════════
{
  id:13, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"A",
  pTitle:"El Cronotopo de Bajtín",
  passage:"Mijail Bajtín introdujo el concepto de cronotopo para describir la interconexión esencial del tiempo y el espacio en la narrativa literaria. El cronotopo no es un mero 'escenario donde transcurre la acción', sino la forma en que las relaciones temporales y espaciales se configuran para producir sentido. En la novela de aventuras griega, el cronotopo es el del 'tiempo de aventura': el tiempo no transcurre ni deja huellas en los personajes; en la novela realista del siglo XIX, el cronotopo fusiona el tiempo histórico con el espacio social concreto, de modo que el personaje se convierte en producto y producto de su época. La elección de un cronotopo no es decorativa: determina qué tipos de personajes son posibles, qué conflictos pueden surgir y qué transformaciones son narrativamente coherentes.",
  q:"¿Qué afirmación sobre el concepto de cronotopo es incompatible con la descripción de Bajtín en el texto?",
  opts:["El cronotopo determina qué tipos de transformaciones son coherentes en una narrativa.","El cronotopo es fundamentalmente un recurso decorativo que el autor elige por preferencias estéticas.","El cronotopo de la novela griega de aventuras implica un tiempo que no modifica a los personajes."],
  correct:1, expl:"El texto afirma explícitamente que 'la elección de un cronotopo no es decorativa'; atribuirle carácter meramente decorativo contradice la definición de Bajtín, para quien el cronotopo tiene función productora de sentido."
},
{
  id:14, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"D",
  pTitle:"Modos de Focalización Narrativa (Genette)",
  passage:"Gérard Genette distinguió entre focalización cero (narrador omnisciente que sabe más que cualquier personaje), focalización interna (el relato se filtra exclusivamente a través de la conciencia de un personaje) y focalización externa (el narrador sabe menos que el personaje, describiendo solo lo observable desde fuera). Cada tipo produce efectos cognitivos y emocionales distintos en el lector.",
  q:"Relaciona cada tipo de focalización con el efecto narrativo que produce.",
  leftItems:["Focalización cero (omnisciente)","Focalización interna","Focalización externa"],
  rightItems:["Crea distancia e incertidumbre: el lector infiere la vida interior del personaje desde el comportamiento observable","Produce identificación e inmersión al limitar el conocimiento al de un personaje específico","Otorga al narrador el privilegio de acceder a pensamientos, motivaciones y pasados de todos los personajes"],
  correctPairs:[[0,2],[1,1],[2,0]],
  expl:"Omnisciente = acceso total a todas las mentes; Interna = inmersión en una conciencia específica; Externa = distancia behaviorista que genera incertidumbre sobre la vida interior."
},
{
  id:15, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"B",
  pTitle:"La Digresión en el Ensayo Literario",
  passage:"La digresión es, en el ensayo literario, un procedimiento compositivo deliberado: el autor abandona temporalmente el hilo argumentativo principal para explorar un tema lateral, un recuerdo personal o una asociación inesperada, con la confianza de que ese rodeo enriquecerá la tesis central al iluminarla desde un ángulo oblicuo. A diferencia de la digresión en los textos académicos, donde constituye un defecto que dispersa el argumento, en el ensayo literario la digresión es constitutiva del género: el pensamiento ensayístico es, por definición, exploratorio y no teleológico. Montaigne, padre del ensayo, hizo de la digresión una forma de honestidad intelectual: el pensamiento que no divaga nunca se aleja lo suficiente de sus premisas para cuestionarlas.",
  q:"Según el texto, la diferencia entre la digresión en un texto académico y en un ensayo literario radica en que en el ensayo la digresión no es un defecto sino un procedimiento ________ del género, constitutivo de su modo de pensar.",
  opts:["accesorio y prescindible","inherente y definitorio","formal y estandarizado"],
  correct:1, expl:"El texto dice que 'en el ensayo literario la digresión es constitutiva del género'; 'constitutiva' es sinónimo de 'inherente y definitoria', no de accesoria ni de estandarizada."
},
{
  id:16, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"A",
  pTitle:"El Realismo Mágico: Definición y Controversias",
  passage:"El realismo mágico ha sido definido de tantas maneras que la etiqueta corre el riesgo de vaciar su propio contenido. La definición más rigurosa —la de Ángel Rama y Antonio Cornejo Polar, entre otros— lo distingue de la literatura fantástica en un punto crucial: en el realismo mágico, lo sobrenatural no irrumpe desde fuera del mundo representado como elemento perturbador; está integrado en la cosmovisión de los personajes y de la comunidad narrada como una dimensión normal de lo real. En Cien años de soledad, la levitación del padre Nicanor o los espíritus que habitan Macondo no son percibidos como milagros por los habitantes; son hechos ordinarios dentro de una ontología que no separa lo visible de lo invisible. El efecto de extrañeza lo experimenta el lector, no los personajes.",
  q:"¿Cuál es el criterio que distingue al realismo mágico de la literatura fantástica según la definición citada en el texto?",
  opts:["En el realismo mágico los fenómenos sobrenaturales provienen de culturas indígenas o afrolatinas, mientras que en la fantasía son de origen europeo.","En el realismo mágico lo sobrenatural es vivido como normal por los personajes dentro de su cosmovisión, mientras que en la fantasía irrumpe como elemento perturbador desde fuera del mundo representado.","En el realismo mágico el narrador confirma la realidad de los hechos sobrenaturales; en la fantasía, los deja en ambigüedad."],
  correct:1, expl:"El texto establece explícitamente este criterio: en el realismo mágico lo sobrenatural está 'integrado en la cosmovisión' como dimensión normal; el extrañamiento lo siente el lector, no los personajes. La fantasía opera al revés: lo sobrenatural 'irrumpe desde fuera como elemento perturbador'."
},
{
  id:17, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"C",
  pTitle:"Estructura de la Tragedia Clásica (Aristóteles)",
  passage:"En la Poética, Aristóteles describe la estructura ideal de la tragedia como una cadena causal que va de la situación inicial de bienestar del héroe a su caída, producida por la hamartía (error o defecto trágico) y culminada en el reconocimiento (anagnórisis) y el cambio de fortuna (peripecia).",
  q:"Ordena los elementos de la estructura trágica aristotélica en su secuencia dramática correcta.",
  items:["Hamartía: error o defecto del héroe que desencadena la caída","Anagnórisis: el héroe reconoce su error o la verdad oculta","Situación inicial de bienestar y honor del héroe trágico","Peripecia: inversión radical de la fortuna del héroe"],
  correctOrder:[2,0,3,1],
  expl:"La secuencia aristotélica es: Situación de bienestar → Hamartía (error) → Peripecia (caída) → Anagnórisis (reconocimiento). El reconocimiento llega tarde, cuando el daño ya es irreversible."
},
{
  id:18, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"A",
  pTitle:"La Intertextualidad como Condición del Texto",
  passage:"Julia Kristeva, retomando y transformando las ideas de Bajtín sobre el dialogismo, formuló el concepto de intertextualidad: todo texto es una absorción y transformación de otros textos; no existe el texto virginal, aislado de la tradición. Esta no es una observación sobre las 'influencias' que un autor recibe —categoría que supone un sujeto creador originario— sino una tesis sobre la condición del lenguaje mismo: el texto es siempre un mosaico de citas, conscientes o no, porque el lenguaje es heredado, no inventado. La consecuencia teórica más radical es que el origen o la intención del autor no pueden fijar el sentido del texto, pues este se produce en la intersección de múltiples textualidades previas y posteriores.",
  q:"¿En qué sentido la intertextualidad de Kristeva es más radical que el concepto de 'influencia' literaria?",
  opts:["Porque la intertextualidad estudia solo las citas explícitas y las referencias conscientes, mientras que la influencia incluye las inconscientes.","Porque la intertextualidad no presupone un sujeto creador originario que 'recibe' influencias, sino que sostiene que el lenguaje mismo es siempre ya un tejido de textos anteriores.","Porque la intertextualidad limita el análisis al siglo XX, mientras que la influencia aplica a toda la historia literaria."],
  correct:1, expl:"El texto explica la distinción con precisión: la 'influencia' supone un autor-origen que recibe; la intertextualidad niega ese origen y afirma que el lenguaje es constitutivamente intertextual, independientemente de la voluntad del autor."
},
{
  id:19, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"B",
  pTitle:"La Lírica Moderna y la Ruptura con el Yo Romántico",
  passage:"El modernismo y las vanguardias del siglo XX pusieron en crisis el supuesto romántico de que el poema es expresión directa del yo del poeta. T.S. Eliot formuló la teoría de la 'impersonalidad poética': el poema no es un derrame emocional del yo, sino una 'huida de la personalidad'. La emoción que el poema transmite es una emoción construida por el texto, no trasvasada desde el interior del autor. Eliot propuso el 'correlato objetivo' como técnica para conseguirlo: en lugar de enunciar una emoción directamente, el poeta construye un objeto, una situación o una cadena de eventos que sea el equivalente objetivo de esa emoción en el lector, sin nombrarla.",
  q:"El correlato objetivo, según Eliot, es una técnica que sustituye la enunciación directa de la emoción por la construcción de un objeto o situación que actúa como su ________ en la experiencia del lector.",
  opts:["origen biográfico y equivalente autobiográfico","equivalente objetivo capaz de suscitarla sin nombrarla","símbolo universal de la tradición clásica"],
  correct:1, expl:"El texto define el correlato objetivo exactamente como la técnica que evita nombrar la emoción y la sustituye por un objeto o situación que la suscita en el lector; 'equivalente objetivo que la suscita sin nombrarla' es la paráfrasis más precisa."
},
{
  id:20, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"D",
  pTitle:"Géneros Discursivos del Ámbito Literario",
  passage:"La teoría literaria distingue entre el género como contrato de lectura, como forma composicional y como horizonte de expectativas. Conocer los rasgos formales y pragmáticos de cada género es imprescindible para analizar los efectos que produce su subversión.",
  q:"Relaciona cada subgénero con su rasgo formal más definitorio.",
  leftItems:["Cuento","Novela corta o nouvelle","Microrrelato"],
  rightItems:["Brevedad extrema que exige economía absoluta del lenguaje y un final de alta densidad semántica","Extensión media que permite desarrollar un conflicto central sin las subtramas ni la densidad psicológica de la novela","Unidad de efecto: todos sus elementos están orientados a producir una sola impresión dominante en el lector"],
  correctPairs:[[0,2],[1,1],[2,0]],
  expl:"Cuento = unidad de efecto (Poe); Nouvelle = extensión media y conflicto único sin subtramas; Microrrelato = brevedad extrema con alta densidad semántica."
},
{
  id:21, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"A",
  pTitle:"El Simbolismo y la Autonomía del Lenguaje Poético",
  passage:"Los poetas simbolistas franceses de la segunda mitad del siglo XIX —Baudelaire, Verlaine, Mallarmé— proclamaron que la poesía no debía nombrar las cosas, sino sugerirlas; no describir, sino evocar. La palabra poética, para Mallarmé, no designa objetos del mundo sino que crea un mundo propio a través de sus resonancias sonoras, sus connotaciones y sus relaciones con otras palabras en el poema. Esta autonomía del lenguaje poético supone un giro epistemológico: el poema no es un vehículo de significados previos al texto sino el lugar donde esos significados se generan. La consecuencia es que la oscuridad del poema simbolista no es un defecto ni un exceso retórico, sino una exigencia del ideal de suggestión: decir demasiado claro destruiría el trabajo de evocación.",
  q:"¿Por qué la oscuridad del poema simbolista es, según el texto, una exigencia y no un defecto?",
  opts:["Porque los simbolistas rechazaban al lector no iniciado en la tradición clásica.","Porque la claridad excesiva destruiría la sugerencia, que es el principio productivo del significado en el poema simbolista.","Porque Mallarmé creía que la poesía solo podía ser comprendida en su traducción al inglés."],
  correct:1, expl:"El argumento del texto es preciso: la oscuridad es funcional al ideal simbolista de 'sugerencia'; 'decir demasiado claro destruiría el trabajo de evocación', es decir, la oscuridad es condición de posibilidad de la experiencia poética simbolista."
},
{
  id:22, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"B",
  pTitle:"La Novela Policial y el Contrato Genérico",
  passage:"La novela policial clásica —cuyo modelo es el detective racional de Poe y Conan Doyle— establece con el lector un contrato implícito basado en la igualdad de información: el lector y el detective tienen acceso a las mismas pistas, y la resolución del misterio debe derivarse lógicamente de esas pistas, no de información withholded arbitrariamente. El lector juega contra el detective. La novela policial hardboiled o negra rompe este contrato: el detective no resuelve el crimen mediante la deducción lógica sino mediante la acción, la violencia y el azar; la sociedad que describe no es ordenable por la razón sino constitutivamente corrupta. El interés se desplaza del 'quién lo hizo' (whodunit) al 'cómo funciona el mundo que hace posible este crimen'.",
  q:"En la novela policial hardboiled, el desplazamiento del 'quién lo hizo' a 'cómo funciona el mundo' implica que el género abandona el contrato lógico-deductivo para adoptar una función ________ de la sociedad representada.",
  opts:["celebratoria y legitimadora","crítica y diagnóstica","evasiva y escapista"],
  correct:1, expl:"Al desplazar la pregunta del crimen individual a la estructura social que lo hace posible, el hardboiled no resuelve el problema (como el clásico) sino que lo diagnostica; eso es una función crítica, no celebratoria ni evasiva."
},
{
  id:23, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"C",
  pTitle:"Evolución del Teatro Latinoamericano del Siglo XX",
  passage:"El teatro latinoamericano del siglo XX atravesó transformaciones radicales en sus convenciones formales, sus vínculos con el Estado y su relación con el público, pasando del naturalismo heredado del XIX a formas de ruptura vanguardista y compromiso político.",
  q:"Ordena las corrientes del teatro latinoamericano del siglo XX de más antigua a más reciente.",
  items:["Teatro del Absurdo y experimentación formal (décadas de 1960–70)","Teatro político y de creación colectiva (décadas de 1970–80)","Naturalismo y drama burgués de influencia europea (primer tercio del siglo)","Posdrama y performance contemporánea (desde 1990)"],
  correctOrder:[2,0,1,3],
  expl:"El orden cronológico es: Naturalismo/drama burgués → Teatro del Absurdo/experimental → Teatro político/creación colectiva → Posdrama/performance."
},
{
  id:24, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"A",
  pTitle:"La Muerte del Autor (Barthes)",
  passage:"En su célebre ensayo de 1967, Roland Barthes proclamó la 'muerte del autor': el acto de escritura destruye toda voz original, pues en cuanto el autor escribe queda reemplazado por el lenguaje mismo, que habla sin persona. La figura del Autor-Dios —que fija el sentido definitivo de su obra— es un producto de la modernidad burguesa que la crítica debe desechar para dar vida a una instancia olvidada: el Lector. Para Barthes, el nacimiento del lector se paga con la muerte del autor. Esta no es una afirmación biográfica sino teórica: el autor como fuente de autoridad interpretativa pierde su prerrogativa en favor de un texto cuyo sentido se produce en el acto de lectura.",
  q:"¿En qué sentido afirma Barthes que el 'nacimiento del lector se paga con la muerte del autor'?",
  opts:["En el sentido de que los lectores contemporáneos ignoran la biografía de los autores clásicos.","En el sentido de que reconocer al lector como productor de sentido implica retirarle al autor la autoridad de fijar el significado definitivo de su texto.","En el sentido de que los autores deben publicar de forma anónima para que sus textos sean leídos sin prejuicios."],
  correct:1, expl:"Barthes no habla de ignorar la biografía ni del anonimato; su argumento es teórico: la autoridad interpretativa es finita, y concederla al lector (como productor de sentido) significa retirarla al autor (como fuente de significado estable)."
},

// ═══════════════════════════════════════════════════════
// 1.3 COMPRENSIÓN LECTORA – PARTICIPACIÓN SOCIAL (6 Qs)
// ═══════════════════════════════════════════════════════
{
  id:25, sub:"1.3", label:"Comprensión lectora – Ámbito de participación social", fmt:"A",
  pTitle:"La Democracia Deliberativa",
  passage:"La democracia deliberativa, propuesta por Habermas y desarrollada por Cohen y Rawls entre otros, sostiene que la legitimidad de las decisiones colectivas no deriva del mero agregado de preferencias individuales (como en el modelo liberal-agregativo), sino de la calidad del proceso deliberativo que las precede. Una decisión es legítima si resulta de un proceso de argumentación pública en el que todos los afectados han tenido oportunidad de participar en condiciones de igualdad y sin coerción. Este modelo enfrenta la crítica de que presupone condiciones ideales de comunicación que raramente se dan en sociedades desiguales: quienes tienen más recursos materiales, educativos y simbólicos están mejor equipados para participar en la deliberación pública, lo que puede reproducir la desigualdad bajo el velo de la racionalidad discursiva.",
  q:"¿Cuál es la crítica más estructural que enfrenta la democracia deliberativa según el texto?",
  opts:["Que produce decisiones demasiado lentas para crisis urgentes.","Que las condiciones de igualdad que presupone raramente existen, y los más favorecidos se benefician desproporcionadamente del proceso deliberativo.","Que Habermas no desarrolló mecanismos institucionales concretos para implementarla."],
  correct:1, expl:"La crítica citada en el texto es precisamente estructural: no es un problema de diseño sino de las condiciones materiales de la sociedad; la desigualdad se reproduce bajo el velo de la deliberación porque no todos deliberan en igualdad real de condiciones."
},
{
  id:26, sub:"1.3", label:"Comprensión lectora – Ámbito de participación social", fmt:"B",
  pTitle:"Acción Colectiva y el Dilema del Prisionero",
  passage:"Mancur Olson demostró que grupos de individuos racionales con intereses comunes no necesariamente actúan colectivamente para defenderlos. El problema del free rider (polizón o aprovechado) consiste en que los bienes colectivos son no excludibles: quienes no contribuyen al esfuerzo colectivo de todas formas se benefician del resultado. Si cada individuo raciona que puede obtener el beneficio sin pagar el costo, la acción colectiva no emerge espontáneamente. Olson identificó dos soluciones: los incentivos selectivos (beneficios disponibles solo para quienes participan) y la coerción (obligar a contribuir, como en los impuestos). En ausencia de ambos, los grupos grandes tenderán a la subprovisión del bien colectivo aunque todos sus miembros lo deseen.",
  q:"Según Olson, el problema del free rider existe porque los bienes colectivos son no excludibles: el individuo racional calcula que puede ________ sin contribuir al esfuerzo colectivo.",
  opts:["ser sancionado formalmente por las instituciones","obtener el beneficio igual que los que sí participaron","desarrollar mayor capacidad organizativa que el grupo"],
  correct:1, expl:"El free rider se beneficia del bien colectivo (no excludible) sin pagar el costo; esa es exactamente la lógica: puede 'obtener el beneficio igual que quienes sí participaron'."
},
{
  id:27, sub:"1.3", label:"Comprensión lectora – Ámbito de participación social", fmt:"D",
  pTitle:"Mecanismos de Democracia Directa en México",
  passage:"La reforma constitucional de 2019 en México amplió los instrumentos de democracia directa disponibles para la ciudadanía, cada uno con umbrales de activación, carácter vinculante o consultivo, y materias sobre las que puede ejercerse distintos.",
  q:"Relaciona cada mecanismo de democracia directa con su característica jurídica principal en el sistema mexicano.",
  leftItems:["Consulta popular","Revocación de mandato","Iniciativa ciudadana"],
  rightItems:["Permite a la ciudadanía presentar proyectos de ley ante el Congreso cumpliendo el porcentaje de firmas requerido","Mecanismo para que la ciudadanía se pronuncie sobre actos o decisiones del Ejecutivo Federal de trascendencia nacional","Proceso mediante el cual la ciudadanía puede remover al titular del Ejecutivo federal antes de que concluya su mandato"],
  correctPairs:[[0,1],[1,2],[2,0]],
  expl:"Consulta popular = pronunciamiento ciudadano sobre actos del Ejecutivo; Revocación = remoción anticipada del titular del Ejecutivo; Iniciativa ciudadana = presentación de proyectos de ley con porcentaje de firmas."
},
{
  id:28, sub:"1.3", label:"Comprensión lectora – Ámbito de participación social", fmt:"A",
  pTitle:"El Principio de Máxima Publicidad",
  passage:"El principio de máxima publicidad, consagrado en la Ley General de Transparencia de México, establece que toda información en posesión de los sujetos obligados es pública por defecto y que la reserva o confidencialidad son excepciones que deben justificarse. Esto invierte la lógica burocrática tradicional, donde el secreto era la norma y la divulgación la excepción. El principio impone al Estado la carga de la prueba: es la autoridad quien debe demostrar que determinada información merece resguardarse, no el ciudadano quien debe justificar por qué quiere acceder a ella. Este cambio de paradigma tiene consecuencias institucionales profundas: diseñar sistemas de archivos, entrenar servidores públicos y crear órganos garantes especializados.",
  q:"¿Cuál es el cambio de paradigma más profundo que introduce el principio de máxima publicidad según el texto?",
  opts:["Que todas las solicitudes de información deben responderse en menos de 20 días hábiles.","Que la carga de la prueba se invierte: es el Estado quien debe justificar la reserva, no el ciudadano quien debe justificar su solicitud.","Que los ciudadanos ahora pueden revisar todos los archivos físicos de las dependencias sin restricción."],
  correct:1, expl:"El texto describe exactamente este cambio: de 'el secreto como norma y la divulgación como excepción' a 'toda información es pública por defecto'; la consecuencia es que el Estado asume la carga de probar que algo debe reservarse."
},
{
  id:29, sub:"1.3", label:"Comprensión lectora – Ámbito de participación social", fmt:"C",
  pTitle:"Ciclo de las Políticas Públicas",
  passage:"El análisis de políticas públicas conceptualiza su desarrollo como un ciclo que va de la identificación del problema hasta la evaluación de resultados, con varias etapas intermedias que implican actores, recursos e instrumentos distintos.",
  q:"Ordena las etapas del ciclo de las políticas públicas en su secuencia correcta.",
  items:["Evaluación de resultados e impacto de la política","Diseño e implementación de la política","Inclusión del problema en la agenda pública","Identificación y definición del problema social"],
  correctOrder:[3,2,1,0],
  expl:"El ciclo es: Identificación del problema → Inclusión en la agenda pública → Diseño e implementación → Evaluación de resultados. La identificación precede a la agenda; la evaluación cierra el ciclo."
},
{
  id:30, sub:"1.3", label:"Comprensión lectora – Ámbito de participación social", fmt:"B",
  pTitle:"Capital Social y Democracia",
  passage:"Robert Putnam argumentó que la calidad de la democracia depende en parte del capital social: las redes de confianza, reciprocidad y normas de cooperación que emergen de la vida asociativa. Sociedades con alto capital social —donde los ciudadanos participan en asociaciones cívicas, practican la confianza interpersonal y resuelven problemas colectivamente— producen instituciones democráticas más eficaces y estables. Sin embargo, la relación causal es debatida: no está claro si el capital social produce buenas instituciones o si son las buenas instituciones las que generan capital social. El debate tiene implicaciones de política pública: si el capital social es la causa, habría que intervenir en la sociedad civil; si las instituciones son la causa, habría que reformar primero el Estado.",
  q:"Según el texto, la ambigüedad sobre la dirección de la causalidad entre capital social e instituciones democráticas tiene implicaciones de política pública porque determina si la intervención debe orientarse hacia ________ o hacia la reforma institucional del Estado.",
  opts:["la supresión de las organizaciones clientelares","el fortalecimiento de la sociedad civil y sus redes asociativas","la reducción del gasto público en programas sociales"],
  correct:1, expl:"El texto establece las dos opciones según la causalidad: si el capital social es la causa, se interviene en 'la sociedad civil'; si las instituciones son la causa, se reforma el Estado. La opción correcta parafrasea la primera rama."
},

// ═══════════════════════════════════════════════════════
// 2.1 REDACCIÓN INDIRECTA – ÁMBITO DE ESTUDIO (15 Qs)
// ═══════════════════════════════════════════════════════
{
  id:31, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"A",
  pTitle:"Conectores de Causalidad vs. Consecutivos",
  passage:"Los conectores causales introducen la causa de lo que se ha enunciado anteriormente ('porque', 'ya que', 'puesto que', 'dado que'), mientras que los conectores consecutivos introducen la consecuencia ('por lo tanto', 'en consecuencia', 'de ahí que', 'de modo que'). La confusión entre ambos genera errores de coherencia local que alteran la dirección argumentativa del texto: enunciar como causa lo que es consecuencia, o viceversa, produce razonamientos circulares o inválidos.",
  q:"En el enunciado 'Los datos son insuficientes, ________ no es posible establecer conclusiones generalizables', el espacio en blanco debe llenarse con un conector ________.",
  opts:["causal, porque introduce la razón de que los datos sean insuficientes","consecutivo, porque introduce la consecuencia que se deriva de la insuficiencia de datos","de reformulación, porque precisa el alcance de la afirmación anterior"],
  correct:1, expl:"La insuficiencia de datos es la causa; la imposibilidad de generalizar es la consecuencia. Un conector consecutivo ('por lo tanto', 'en consecuencia') enlaza correctamente la causa ya enunciada con la consecuencia que se introduce."
},
{
  id:32, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"B",
  pTitle:"La Coherencia Pragmática del Texto Académico",
  passage:"La coherencia de un texto académico no es solo semántica (que las ideas estén relacionadas entre sí) sino también pragmática: cada enunciado debe cumplir una función argumentativa reconocible (tesis, argumento, evidencia, objeción, refutación, conclusión). Un texto puede ser semánticamente coherente —sus ideas se relacionan temáticamente— pero pragmáticamente incoherente si, por ejemplo, una evidencia aparece antes de que se haya enunciado la tesis que pretende sostener, o si una conclusión no deriva de los argumentos presentados sino de una premisa implícita no explicitada.",
  q:"Un texto que presenta primero la evidencia y después la tesis que esa evidencia debería sostener puede ser semánticamente coherente pero ________ incoherente, porque las funciones argumentativas no aparecen en el orden que permite al lector seguir el razonamiento.",
  opts:["fonológica y ortográficamente","pragmáticamente","estilísticamente"],
  correct:1, expl:"El texto define precisamente la 'coherencia pragmática' como la correcta secuenciación de las funciones argumentativas; una tesis que aparece después de su evidencia es una falla de coherencia pragmática, no semántica ni estilística."
},
{
  id:33, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"D",
  pTitle:"Tipos de Citas en Textos Académicos",
  passage:"El manejo correcto de las fuentes exige distinguir entre modalidades de cita que difieren en su grado de fidelidad al texto original y en las convenciones tipográficas que las regulan. El error en la modalidad de cita puede constituir plagio, aunque sea involuntario.",
  q:"Relaciona cada modalidad de cita con su definición y uso correcto.",
  leftItems:["Cita textual directa","Paráfrasis","Cita de segunda mano"],
  rightItems:["Reproducción de las palabras de una fuente que el autor no ha consultado directamente, indicando la fuente original","Reproducción literal de las palabras de otro autor, entre comillas y con indicación de página","Reformulación del contenido de una fuente en las propias palabras del autor, sin comillas pero con referencia"],
  correctPairs:[[0,1],[1,2],[2,0]],
  expl:"Cita textual = reproducción literal entre comillas con página; Paráfrasis = reformulación sin comillas con referencia; Cita de segunda mano = fuente no consultada directamente."
},
{
  id:34, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"A",
  pTitle:"Uso del Gerundio: Restricciones Normativas",
  passage:"El gerundio admite varias funciones en español: como modificador adverbial de modo, tiempo o condición ('Caminando aprendo más'), como parte de perífrasis verbales ('Estoy revisando el informe') y como modificador de ciertas formas de 'llevar' o 'seguir'. Sin embargo, la norma proscribe el gerundio predicativo que modifica un sustantivo como si fuera adjetivo ('*Se publicó una ley regulando el sector'), excepto cuando expresa una acción simultánea o inmediatamente posterior al verbo principal. El gerundio de posteridad ('*Se firmó el acuerdo, estableciéndose nuevas condiciones') y el gerundio especificativo de sustantivo son los usos más frecuentemente censurados en el registro formal escrito.",
  q:"¿Cuál de los siguientes enunciados incurre en un uso censurable del gerundio en el registro formal escrito?",
  opts:["La directora llegó corriendo al auditorio antes de que comenzara la sesión.","Se emitió un decreto modificando los criterios de elegibilidad del programa.","El equipo continuó trabajando en el informe durante toda la tarde."],
  correct:1, expl:"'Modificando los criterios' es un gerundio especificativo de sustantivo ('decreto') usado como adjetivo relativo; la norma proscribe este uso y exige la oración de relativo: 'un decreto que modifica' o 'que modificó'. Las otras opciones usan gerundios de modo y de perífrasis verbal, que son correctos."
},
{
  id:35, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"C",
  pTitle:"Estructura Retórica del Párrafo de Argumentación Académica",
  passage:"El párrafo académico de argumentación no solo expone sino que convence. Su estructura retórica debe anticipar la objeción más fuerte contra la tesis y refutarla, lo que lo distingue del párrafo meramente expositivo.",
  q:"Ordena los componentes del párrafo argumentativo académico en su secuencia retórica más sólida.",
  items:["Enunciación y refutación de la objeción más relevante","Oración temática: afirmación de la tesis del párrafo","Evidencia empírica o cita que sustenta la tesis","Oración de cierre que proyecta hacia la siguiente idea"],
  correctOrder:[1,2,0,3],
  expl:"Secuencia retórica óptima: Oración temática (tesis del párrafo) → Evidencia que la sustenta → Enunciación y refutación de la objeción → Cierre que proyecta. Refutar la objeción antes del cierre fortalece la posición."
},
{
  id:36, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"B",
  pTitle:"Deixis y Cohesión Textual",
  passage:"La deixis es el mecanismo lingüístico que ancla los enunciados a sus condiciones de enunciación: quién habla (deixis personal: yo/tú), dónde (deixis espacial: aquí/allá) y cuándo (deixis temporal: ahora/entonces). En los textos escritos, especialmente los académicos, la deixis textual o anafórica es especialmente relevante: los pronombres, demostrativos y adverbios referenciales permiten retomar elementos ya mencionados ('este hallazgo', 'dicho principio', 'los autores antes citados') creando cadenas de cohesión que evitan la repetición y mantienen el hilo temático. El error más frecuente es la ambigüedad referencial: cuando el pronombre o demostrativo puede remitir a más de un antecedente.",
  q:"La ambigüedad referencial en un texto académico ocurre cuando un pronombre o demostrativo puede remitir a más de un antecedente, lo que interrumpe la ________ textual y obliga al lector a decodificar el texto en lugar de seguir el argumento.",
  opts:["extensión semántica","cohesión anafórica","progresión temática lineal"],
  correct:1, expl:"El texto describe la deixis textual y los pronombres como mecanismos de 'cohesión'; la ambigüedad referencial interrumpe precisamente la 'cohesión anafórica' (las cadenas de referencia que mantienen unido el texto)."
},
{
  id:37, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"A",
  pTitle:"El Subjuntivo en la Argumentación Académica",
  passage:"El modo subjuntivo en español no solo expresa duda o deseo; en el registro académico tiene funciones epistémicas precisas. En oraciones sustantivas dependientes de verbos de valoración ('es importante que', 'es necesario que') o de verbos de comunicación con matiz dubitativo ('no está claro que', 'es cuestionable que'), el subjuntivo señala que la proposición que introduce está bajo el alcance semántico de la valoración o la duda del enunciador. En cambio, con verbos de certeza ('es evidente que', 'se ha demostrado que') se usa el indicativo porque el enunciador presenta la proposición como un hecho establecido. El error de selección modal en textos académicos no es solo gramatical: altera el grado de compromiso epistémico del autor con lo que afirma.",
  q:"En el enunciado 'Es cuestionable que los datos obtenidos [ser / son / sean] representativos del universo estudiado', ¿qué forma verbal es la correcta y por qué?",
  opts:["'son', porque expresa una certeza sobre los datos que el investigador ha verificado.","'sean', porque el verbo 'es cuestionable' expresa valoración dubitativa y exige subjuntivo para indicar que la proposición está bajo el alcance de esa duda.","'ser', porque el infinitivo en subordinadas sustantivas siempre es válido en el registro formal."],
  correct:1, expl:"'Es cuestionable' es un verbo de valoración con matiz dubitativo; según el texto, estos verbos exigen subjuntivo porque señalan que la proposición está 'bajo el alcance semántico de la valoración o duda'. 'sean' es el subjuntivo presente correcto."
},
{
  id:38, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"B",
  pTitle:"La Tilde Diacrítica: Casos Complejos",
  passage:"La tilde diacrítica distingue pares de palabras gráficamente idénticas con distintas categorías gramaticales y funciones. La RAE eliminó en 2010 la tilde de 'solo' (adverbio vs. adjetivo) y de los demostrativos ('este', 'ese', 'aquel') cuando funcionan como pronombres, al considerar que el contexto basta para desambiguar. Sin embargo, mantuvo la tilde diacrítica en pares donde la ambigüedad semántica es real y no resoluble por contexto: 'sé' (saber/ser) vs. 'se' (pronombre); 'más' (adverbio de cantidad) vs. 'mas' (conjunción adversativa equivalente a 'pero'); 'aún' (todavía) vs. 'aun' (incluso); 'té' (bebida) vs. 'te' (pronombre). La tendencia normativa es a reducir las tildes diacríticas al mínimo indispensable.",
  q:"Según el texto, la RAE mantiene la tilde diacrítica en aquellos pares de palabras donde la ambigüedad semántica ________ por el contexto, pero la eliminó donde el contexto basta para distinguirlos.",
  opts:["siempre puede resolverse","no puede resolverse","se resuelve mejor con la puntuación"],
  correct:1, expl:"El texto es explícito: la tilde diacrítica se mantiene donde la ambigüedad 'no es resoluble por contexto'; se elimina donde el contexto basta. La opción correcta parafrasea esta condición."
},
{
  id:39, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"D",
  pTitle:"Funciones de las Notas al Pie en Texto Académico",
  passage:"Las notas al pie cumplen funciones diferenciadas en el texto académico que van más allá de la simple referencia bibliográfica. Usadas correctamente, amplían el argumento sin interrumpir el hilo principal; usadas incorrectamente, dispersan la atención y fragmentan el razonamiento.",
  q:"Relaciona cada tipo de nota al pie con su función en el texto académico.",
  leftItems:["Nota de referencia bibliográfica","Nota de contenido o aclaración","Nota de remisión interna"],
  rightItems:["Dirige al lector a otra sección del mismo texto o a una obra complementaria del mismo autor","Amplía, matiza o contextualiza una afirmación sin interrumpir el argumento principal","Indica la fuente exacta de una cita textual, paráfrasis o dato"],
  correctPairs:[[0,2],[1,1],[2,0]],
  expl:"Referencia bibliográfica = indica la fuente; Contenido/aclaración = amplía sin interrumpir; Remisión interna = dirige a otra parte del texto."
},
{
  id:40, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"A",
  pTitle:"Anfibología y Ambigüedad Sintáctica",
  passage:"La anfibología es la ambigüedad producida por una construcción sintáctica que admite más de una interpretación. A diferencia de la polisemia (ambigüedad léxica, donde una misma palabra tiene varios significados), la anfibología es de naturaleza estructural: el significado de cada palabra es claro, pero su combinación produce dos o más lecturas igualmente posibles. Por ejemplo: 'La psicóloga entrevistó a la directora con el expediente' puede significar que la psicóloga tenía el expediente durante la entrevista, o que la directora lo tenía. La anfibología se corrige reordenando los elementos o desambiguando mediante una oración de relativo.",
  q:"¿Cuál de los siguientes enunciados contiene una anfibología?",
  opts:["Se presentaron los informes de los tres evaluadores independientes.","El director felicitó a los pasantes del proyecto que habían concluido exitosamente.","La coordinadora revisó los documentos antes de la reunión plenaria."],
  correct:1, expl:"'que habían concluido exitosamente' puede referirse a 'los pasantes' o a 'el proyecto'; eso es una anfibología sintáctica. Las otras opciones no presentan ambigüedad estructural."
},
{
  id:41, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"C",
  pTitle:"Estructura del Marco Analítico en Textos Académicos",
  passage:"El marco analítico de un texto académico de investigación es la articulación entre el problema, los conceptos teóricos que lo iluminan y la estrategia metodológica que permite abordarlo empíricamente.",
  q:"Ordena los elementos del marco analítico en su secuencia lógica de construcción.",
  items:["Selección y justificación de los conceptos teóricos pertinentes","Planteamiento del problema o pregunta de investigación","Derivación de las hipótesis o proposiciones analíticas","Descripción de la estrategia metodológica para contrastar las proposiciones"],
  correctOrder:[1,0,2,3],
  expl:"Secuencia: Planteamiento del problema → Selección y justificación de conceptos teóricos → Derivación de hipótesis/proposiciones → Descripción de la estrategia metodológica."
},
{
  id:42, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"B",
  pTitle:"Léxico Especializado y Nominalización Compleja",
  passage:"El registro académico se caracteriza, entre otros rasgos, por el predominio del léxico especializado y por estructuras nominales complejas que condensan varios predicados en una sola construcción. La frase nominal 'la implementación gradual de mecanismos de supervisión interinstitucional' condensa tres predicados: 'se implementa', 'es gradual' y 'la supervisión es interinstitucional'. Esta condensación es funcionalmente eficiente en textos donde el espacio es limitado y el lector comparte el conocimiento previo; pero puede ser un obstáculo cuando el destinatario no está familiarizado con el campo. La escritura inclusiva y en lenguaje claro exige descomponer estas nominalizaciones en oraciones más simples sin sacrificar precisión.",
  q:"La descomposición de nominalizaciones complejas en oraciones más simples, como recomienda el lenguaje claro, busca hacer el texto más accesible sin ________ la precisión conceptual de la información.",
  opts:["ampliar ni extender","sacrificar ni comprometer","traducir ni adaptar"],
  correct:1, expl:"El texto dice que el lenguaje claro exige descomponer las nominalizaciones 'sin sacrificar precisión'; 'sacrificar ni comprometer la precisión' es la paráfrasis exacta de esa condición."
},
{
  id:43, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"A",
  pTitle:"Concordancia en Sujetos Complejos",
  passage:"Cuando el sujeto de una oración es una construcción nominal compleja, la concordancia verbal sigue la regla del núcleo del sintagma nominal, no del modificador más cercano al verbo. En 'La coordinación de los equipos de trabajo fue evaluada', el núcleo del sujeto es 'coordinación' (singular), no 'equipos' ni 'trabajo'; por eso el verbo va en singular. El error de 'concordancia por atracción' ocurre cuando el verbo concuerda con el sustantivo más próximo ('La coordinación de los equipos fueron evaluados') en lugar del núcleo real del sujeto.",
  q:"En la oración '________ de las principales propuestas del comité técnico ________ revisadas por la junta directiva', ¿qué formas son las correctas para mantener la concordancia normativa?",
  opts:["'Algunas / fueron', porque el núcleo del sujeto es 'algunas' (cuantificador plural) que concuerda con 'revisadas'.","'La totalidad / fue', porque el núcleo del sujeto es 'totalidad' (singular femenino) y el verbo debe ir en singular.","Ambas son correctas porque en español actual el hablante puede elegir según el énfasis semántico."],
  correct:1, expl:"Si el cuantificador es 'la totalidad' (núcleo singular), el verbo va en singular: 'La totalidad de las principales propuestas fue revisada'. La concordancia con 'algunas' (plural) también sería correcta en esa opción, pero la pregunta pide la opción que aplica la regla del núcleo singular."
},
{
  id:44, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"D",
  pTitle:"Niveles de Abstracción del Léxico Académico",
  passage:"El vocabulario de los textos académicos opera en distintos niveles de abstracción según la función que cumplen en el argumento. Conocer esos niveles es indispensable para seleccionar con precisión el término adecuado a cada función argumentativa.",
  q:"Relaciona cada nivel de abstracción léxica con su función en el texto académico.",
  leftItems:["Léxico de alta abstracción (metaconceptos)","Léxico de dominio específico (tecnicismos)","Léxico de evidencia (datos y ejemplos)"],
  rightItems:["Nombra hechos, casos o medidas concretas que ilustran o comprueban la afirmación teórica","Denomina con precisión los objetos, procesos y relaciones propios de un campo disciplinar","Organiza la lógica argumentativa del texto: 'hipótesis', 'evidencia', 'contradicción', 'implicación'"],
  correctPairs:[[0,2],[1,1],[2,0]],
  expl:"Metaconceptos = organizan la lógica argumentativa; Tecnicismos = denominan objetos del campo disciplinar; Léxico de evidencia = nombra datos y ejemplos concretos."
},
{
  id:45, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"B",
  pTitle:"La Reseña Crítica Académica",
  passage:"La reseña crítica difiere del resumen en que no solo describe sino que evalúa: identifica los aportes originales de la obra reseñada, señala sus limitaciones metodológicas o conceptuales, y la sitúa en el debate académico vigente. Una reseña que únicamente resume no cumple su función evaluativa y no constituye un aporte a la conversación académica. Sin embargo, una reseña que solo critica sin demostrar comprensión de la obra reseñada tampoco es aceptable: la evaluación debe surgir de una lectura cuidadosa que justifique cada juicio con evidencia textual.",
  q:"Según el texto, una reseña académica rigurosa debe equilibrar la descripción comprensiva de la obra con la ________ fundamentada en evidencia textual de sus aportes y limitaciones.",
  opts:["reproducción literal","evaluación crítica","paráfrasis extensa"],
  correct:1, expl:"El texto distingue el resumen (descripción) de la reseña (descripción + evaluación); y exige que la evaluación sea 'fundamentada con evidencia textual'. 'Evaluación crítica' parafrasea ambas exigencias."
},

// ═══════════════════════════════════════════════════════
// 2.2 REDACCIÓN INDIRECTA – PARTICIPACIÓN SOCIAL (15 Qs)
// ═══════════════════════════════════════════════════════
{
  id:46, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"A",
  pTitle:"El Oficio como Género Discursivo Institucional",
  passage:"El oficio es el documento oficial mediante el cual una institución pública se comunica con otra institución o con personas externas. A diferencia del memorándum (comunicación interna), el oficio rige relaciones interinstitucionales y requiere una estructura precisa: número de oficio y clasificación documental, destinatario con cargo y adscripción completos, cuerpo del mensaje con exposición y parte dispositiva, y firma con cargo del emisor. El lenguaje del oficio debe ser formal, impersonal y preciso; el uso de la primera persona del singular ('yo solicito') puede resultar inadecuado cuando la emisora es la institución como conjunto.",
  q:"¿Por qué el uso de la primera persona del singular puede ser inadecuado en un oficio institucional?",
  opts:["Porque la RAE prohíbe el uso de la primera persona en documentos formales.","Porque en el oficio el emisor es la institución como entidad colectiva, no una persona individual, y la primera persona del singular personaliza lo que debe ser impersonal.","Porque los lectores del oficio no pueden identificar al firmante cuando se usa la primera persona."],
  correct:1, expl:"El texto señala que el emisor del oficio es 'la institución como conjunto'; usar 'yo solicito' convierte esa voz institucional en individual, lo que contradice la impersonalidad requerida."
},
{
  id:47, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"C",
  pTitle:"Estructura del Dictamen Técnico",
  passage:"El dictamen técnico es el documento mediante el cual un órgano o experto emite una opinión fundamentada sobre un asunto que requiere conocimiento especializado. Su estructura refleja el proceso de razonamiento que lleva de la revisión de los antecedentes a la emisión de la opinión.",
  q:"Ordena las secciones del dictamen técnico en su secuencia estructural correcta.",
  items:["Considerandos: análisis técnico de los antecedentes y fundamentos","Puntos resolutivos o dictaminatorios: opinión o resolución final","Antecedentes: descripción del asunto sometido a dictamen","Fundamento normativo y técnico aplicable al caso"],
  correctOrder:[2,3,0,1],
  expl:"Secuencia del dictamen: Antecedentes (qué se somete) → Fundamento normativo/técnico → Considerandos (análisis) → Puntos resolutivos (opinión final)."
},
{
  id:48, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"B",
  pTitle:"Tecnicismos Jurídicos en Documentos Institucionales",
  passage:"Los documentos institucionales que tienen efectos jurídicos —convocatorias, reglamentos, acuerdos, resoluciones— utilizan fórmulas y tecnicismos del lenguaje jurídico que cumplen funciones precisas: las deónticas ('deberá', 'queda prohibido', 'se sancionará') expresan obligación, prohibición o consecuencia normativa; las potestativas ('podrá', 'tiene la facultad de') expresan habilitación sin obligatoriedad; y las declarativas ('se entiende por', 'para efectos del presente') definen el alcance de los términos dentro del documento. Confundir estas modalidades deónticas produce normas ambiguas: escribir 'podrá presentar' cuando la norma exige presentación obligatoria anula la exigencia.",
  q:"En una convocatoria, escribir 'Los participantes podrán entregar su documentación antes del 30 de junio' cuando se quiere establecer una fecha límite obligatoria es un error porque la forma 'podrá' expresa ________, no obligación.",
  opts:["certeza epistémica","habilitación potestativa","valor declarativo"],
  correct:1, expl:"El texto clasifica 'podrá' como fórmula potestativa que expresa 'habilitación sin obligatoriedad'; usarla cuando se quiere imponer una obligación crea ambigüedad normativa porque el destinatario puede interpretarlo como opcional."
},
{
  id:49, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"D",
  pTitle:"Tipos de Resoluciones Administrativas",
  passage:"En el derecho administrativo mexicano, las resoluciones son actos de autoridad que pueden tener distintos alcances y efectos jurídicos según su naturaleza y el procedimiento que las origina.",
  q:"Relaciona cada tipo de resolución administrativa con su característica jurídica principal.",
  leftItems:["Resolución definitiva","Resolución provisional o cautelar","Acuerdo de trámite"],
  rightItems:["Ordena medidas urgentes para preservar el estado de las cosas mientras se resuelve el fondo","Dirige el procedimiento administrativo sin pronunciarse sobre el fondo del asunto","Pone fin al procedimiento pronunciándose sobre el fondo del asunto planteado"],
  correctPairs:[[0,2],[1,0],[2,1]],
  expl:"Definitiva = resuelve el fondo y pone fin al procedimiento; Provisional/cautelar = medidas urgentes para preservar el estado de las cosas; Acuerdo de trámite = dirige el procedimiento sin pronunciarse sobre el fondo."
},
{
  id:50, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"A",
  pTitle:"La Comunicación de Crisis en Instituciones Públicas",
  passage:"Cuando una institución pública enfrenta una crisis de legitimidad —un escándalo de corrupción, un error grave de política o una tragedia en la que la institución tiene responsabilidad— la comunicación estratégica enfrenta una tensión fundamental: entre la transparencia (informar todo lo que se sabe, aunque sea perjudicial) y la gestión de daños (controlar la información para minimizar el daño institucional). Los manuales de comunicación de crisis recomiendan la transparencia proactiva como estrategia de largo plazo: las instituciones que reconocen rápidamente su responsabilidad y comunican las medidas correctivas recuperan la confianza más pronto que las que intentan minimizar, negar o postergar. El silencio institucional, en particular, es percibido como confirmación del problema.",
  q:"¿Por qué los manuales de comunicación de crisis recomiendan la transparencia proactiva sobre la gestión de daños, según el texto?",
  opts:["Porque la transparencia proactiva garantiza que la institución no sea sancionada legalmente.","Porque reconocer la responsabilidad y comunicar medidas correctivas permite recuperar la confianza más pronto que negar o postergar.","Porque la opinión pública siempre perdona los errores cuando se comunican en tiempo real."],
  correct:1, expl:"El texto es preciso: la recomendación de transparencia proactiva se justifica porque las instituciones que reconocen y comunican medidas 'recuperan la confianza más pronto'; no garantiza impunidad legal ni promete perdón universal."
},
{
  id:51, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"B",
  pTitle:"Redacción de Convocatorias con Lenguaje Inclusivo",
  passage:"Las convocatorias institucionales han incorporado paulatinamente los principios del lenguaje inclusivo para garantizar que los documentos públicos no excluyan simbólicamente a sectores de la población. Sin embargo, la incorporación del lenguaje inclusivo en documentos jurídicos enfrenta restricciones: los documentos normativos (reglamentos, convocatorias con efectos legales) deben ser precisos y no ambiguos; ciertas estrategias inclusivas como el uso de barras ('ciudadanos/as'), el símbolo @ o la 'e' genérica ('ciudadanes') no están reconocidas por la RAE y pueden generar conflictos de interpretación jurídica. La estrategia más recomendada en documentos con efectos legales es el uso de sustantivos colectivos y formas neutras: 'la ciudadanía', 'el personal docente', 'quienes participen'.",
  q:"En convocatorias con efectos jurídicos, la estrategia de lenguaje inclusivo más recomendada es el uso de sustantivos colectivos y formas neutras porque, a diferencia de las barras o la 'e' genérica, estas formas son ________ por la norma y no generan ambigüedad de interpretación.",
  opts:["cuestionadas y debatidas","reconocidas y aceptadas","informales y coloquiales"],
  correct:1, expl:"El texto señala que barras, @ y 'e' genérica 'no están reconocidas por la RAE' y pueden generar conflictos; los sustantivos colectivos son la alternativa 'más recomendada', es decir, son reconocidos y aceptados por la norma."
},
{
  id:52, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"C",
  pTitle:"Proceso de Elaboración de un Reglamento Interno",
  passage:"El reglamento interno de una institución es el instrumento normativo que regula las relaciones internas, los procedimientos y las conductas permitidas y prohibidas. Su elaboración sigue un proceso participativo y técnico que busca legitimidad y aplicabilidad.",
  q:"Ordena las etapas del proceso de elaboración de un reglamento interno en su secuencia correcta.",
  items:["Consulta y validación con los actores internos afectados","Diagnóstico de necesidades normativas y revisión del marco legal aplicable","Aprobación por el órgano colegiado competente y publicación","Redacción del proyecto de reglamento por el área jurídica o comisión designada"],
  correctOrder:[1,3,0,2],
  expl:"Secuencia: Diagnóstico de necesidades (qué se necesita regular) → Redacción del proyecto → Consulta y validación con actores → Aprobación y publicación."
},
{
  id:53, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"A",
  pTitle:"Precisión en la Redacción de Obligaciones Normativas",
  passage:"La redacción de obligaciones en documentos normativos (reglamentos, lineamientos, convocatorias) requiere precisar: quién tiene la obligación (sujeto obligado), qué debe hacer (conducta exigida), en qué plazo (temporalidad) y qué sucede si no lo hace (consecuencia). La omisión de cualquiera de estos elementos produce una norma incompleta que no puede aplicarse con certeza. El más frecuentemente omitido es la consecuencia: una norma que establece 'el servidor público deberá presentar su declaración patrimonial' sin señalar las consecuencias de no hacerlo carece del elemento sancionatorio que le da eficacia.",
  q:"¿Cuál de los siguientes es el enunciado normativo más completo según los criterios del texto?",
  opts:["El personal administrativo deberá usar uniforme institucional durante las jornadas laborales.","Los servidores públicos de mando deberán presentar su declaración patrimonial anual antes del 31 de marzo; el incumplimiento será motivo de responsabilidad administrativa.","Se deberá respetar en todo momento el reglamento interno de la institución."],
  correct:1, expl:"La opción B es la única que incluye los cuatro elementos: sujeto obligado ('servidores públicos de mando'), conducta ('presentar declaración'), plazo ('antes del 31 de marzo') y consecuencia ('responsabilidad administrativa'). A carece de consecuencia; C carece de sujeto preciso, conducta específica, plazo y consecuencia."
},
{
  id:54, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"B",
  pTitle:"El Informe de Evaluación de Programas",
  passage:"El informe de evaluación de un programa institucional debe responder tres preguntas fundamentales: si el programa se implementó como fue diseñado (evaluación de proceso), si produjo los cambios esperados en los beneficiarios (evaluación de impacto) y si los recursos invertidos justifican los resultados obtenidos (análisis costo-beneficio). La claridad en la distinción entre estas tres dimensiones evita que el informe mezcle hallazgos de naturaleza diferente y que las recomendaciones sean inoperables por inespecíficas. Una recomendación como 'mejorar el programa' es inutilizable; una como 'incrementar la frecuencia de las sesiones de capacitación de 4 a 8 por ciclo para aumentar la tasa de retención del 45% al 65%' es accionable.",
  q:"Según el texto, una recomendación de evaluación es útil y accionable cuando especifica ________, a diferencia de las recomendaciones genéricas que no pueden implementarse.",
  opts:["los antecedentes históricos del programa","la conducta a modificar, el cambio esperado y los indicadores cuantificables","el organigrama completo del área responsable"],
  correct:1, expl:"El texto contrasta 'mejorar el programa' (genérico e inoperante) con la recomendación que especifica qué hacer ('incrementar frecuencia'), cuánto cambiar (de 4 a 8 sesiones) y qué resultado esperar (de 45% a 65%); esos son precisamente 'conducta, cambio esperado e indicadores cuantificables'."
},
{
  id:55, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"D",
  pTitle:"Documentos de Rendición de Cuentas: Tipos y Funciones",
  passage:"La rendición de cuentas institucional se materializa en distintos tipos de documentos según el destinatario y el tipo de información que se comunica. Cada documento tiene una función específica en el ecosistema de transparencia.",
  q:"Relaciona cada documento de rendición de cuentas con su función y destinatario principal.",
  leftItems:["Cuenta pública","Informe de resultados de gestión","Declaración de intereses"],
  rightItems:["Permite identificar posibles conflictos entre los intereses personales del funcionario y sus responsabilidades institucionales","Integra el ejercicio del presupuesto y el estado financiero de la institución para revisión legislativa y ciudadana","Da cuenta a la ciudadanía y a los órganos de supervisión de los logros, metas y acciones realizadas en un período"],
  correctPairs:[[0,1],[1,2],[2,0]],
  expl:"Cuenta pública = ejercicio presupuestario para revisión legislativa; Informe de gestión = logros y metas para supervisión y ciudadanía; Declaración de intereses = identifica conflictos entre interés personal e institucional."
},
{
  id:56, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"A",
  pTitle:"Marcadores del Discurso en Comunicados Institucionales",
  passage:"Los marcadores del discurso organizan la información en el comunicado institucional y orientan al lector sobre la función de cada enunciado. Los ordenadores ('en primer lugar', 'en segundo lugar', 'por último') jerarquizan; los de consecuencia ('en consecuencia', 'por lo anterior') señalan la relación entre antecedentes y resoluciones; los de reformulación ('es decir', 'en otros términos') clarifican; y los de cierre ('en virtud de lo expuesto', 'por todo lo anterior') introducen la parte dispositiva o resolutiva. El uso incorrecto de los marcadores puede hacer que el lector confunda una justificación con una conclusión o que no identifique el momento en que el documento pasa de los antecedentes a la resolución.",
  q:"En un comunicado que pasa de los antecedentes a la resolución, ¿qué tipo de marcador del discurso debe usarse para señalar ese tránsito?",
  opts:["Un marcador ordenador como 'en primer lugar', porque enumera los elementos de la resolución.","Un marcador de cierre-consecuencia como 'en virtud de lo expuesto' o 'por lo anterior', porque señala que lo que sigue se deriva de los antecedentes presentados.","Un marcador de reformulación como 'es decir', porque aclara lo que ya se dijo en los antecedentes."],
  correct:1, expl:"El tránsito de antecedentes a resolución es una relación de consecuencia o derivación; los marcadores de cierre-consecuencia ('en virtud de lo expuesto', 'por lo anterior') señalan exactamente ese momento en que el documento pasa de fundamentar a resolver."
},
{
  id:57, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"C",
  pTitle:"Estructura del Acta de Sesión de Órgano Colegiado",
  passage:"El acta de sesión es el documento que da fe de lo ocurrido en una reunión de un órgano colegiado (junta directiva, consejo, comité) y tiene valor jurídico. Su estructura debe reflejar la secuencia temporal y deliberativa de la sesión.",
  q:"Ordena las secciones del acta de sesión en su secuencia estructural correcta.",
  items:["Acuerdos tomados con responsables y plazos","Desarrollo de cada punto del orden del día con síntesis de las intervenciones","Datos de apertura: lugar, fecha, hora, asistentes y quórum","Cierre: hora de conclusión y firmas de los asistentes"],
  correctOrder:[2,1,0,3],
  expl:"Secuencia del acta: Datos de apertura (quórum y asistentes) → Desarrollo de los puntos del orden del día → Acuerdos con responsables y plazos → Cierre con firmas."
},
{
  id:58, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"B",
  pTitle:"La Claridad en las Resoluciones Administrativas",
  passage:"Una resolución administrativa clara debe evitar tres vicios frecuentes en la redacción burocrática: el hipérbaton excesivo (alterar el orden natural sujeto-verbo-complemento hasta hacer incomprensible la oración), la recurrencia a fórmulas latinas sin traducción o explicación ('nulla poena sine lege', 'in dubio pro reo'), y el uso de arcaísmos léxicos como 'asimismo', 'habida cuenta de', 'en el contexto del' en sustitución de conectores más claros. Cada uno de estos vicios responde a una tradición de oscuridad deliberada: el lenguaje jurídico históricamente ha servido para excluir a quienes no tienen acceso al código especializado, lo que contradice el principio de igualdad ante la ley.",
  q:"Según el texto, la oscuridad del lenguaje jurídico tradicional no es solo un defecto técnico sino una práctica que ________ al excluir a quienes no manejan el código especializado.",
  opts:["mejora la precisión normativa","contradice el principio de igualdad ante la ley","facilita la interpretación por parte de los jueces"],
  correct:1, expl:"El texto dice explícitamente que el lenguaje jurídico oscuro 'ha servido para excluir a quienes no tienen acceso al código especializado, lo que contradice el principio de igualdad ante la ley'."
},
{
  id:59, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"D",
  pTitle:"Estrategias de Gestión de la Información en Crisis",
  passage:"Cuando una institución enfrenta una crisis de comunicación, las estrategias disponibles difieren en su relación con la transparencia y sus efectos sobre la confianza institucional a corto y largo plazo.",
  q:"Relaciona cada estrategia de comunicación de crisis con su efecto institucional predominante.",
  leftItems:["Negación y silencio institucional","Reconocimiento y medidas correctivas","Minimización del incidente"],
  rightItems:["Reduce el impacto inmediato pero no resuelve el problema de fondo y puede intensificar la crisis si emerge información adicional","Es percibido como confirmación del problema y produce pérdida acelerada de confianza","Permite la recuperación de confianza más pronto al demostrar responsabilidad y capacidad de respuesta"],
  correctPairs:[[0,1],[1,2],[2,0]],
  expl:"Negación/silencio = confirma el problema y acelera la pérdida de confianza; Reconocimiento + medidas = recuperación más pronta de confianza; Minimización = reduce impacto inmediato pero no resuelve el fondo."
},
{
  id:60, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"A",
  pTitle:"La Consulta Previa en Derechos Indígenas",
  passage:"El derecho a la consulta previa, libre e informada de los pueblos indígenas, reconocido en el Convenio 169 de la OIT y en la Declaración de la ONU sobre Derechos de los Pueblos Indígenas, establece que los Estados deben consultar a los pueblos afectados antes de tomar medidas que puedan afectar sus derechos, territorios o modos de vida. El proceso debe ser previo (antes de que la decisión esté tomada), libre (sin presiones ni incentivos indebidos) e informado (con información suficiente y comprensible). La consulta no equivale a un derecho de veto en todos los casos, pero en los que involucran medidas capaces de producir un impacto mayor, los estándares internacionales exigen el consentimiento, no solo la consulta.",
  q:"¿Cuál es la distinción más relevante que establece el texto entre 'consulta' y 'consentimiento' en el derecho de los pueblos indígenas?",
  opts:["La consulta aplica a decisiones locales y el consentimiento a decisiones nacionales.","El consentimiento se exige —más que la simple consulta— en los casos en que las medidas tienen un impacto mayor sobre los derechos y territorios indígenas.","La consulta es un derecho colectivo y el consentimiento es un derecho individual."],
  correct:1, expl:"El texto establece esta distinción con precisión: la consulta es el estándar general, pero el consentimiento —un umbral más alto— se exige cuando el impacto es mayor; no es una cuestión de escala territorial ni de titularidad individual vs. colectiva."
}
,

// ═══════════════════════════════════════════════════════
// PREGUNTAS ADICIONALES v5+ – ids 61 a 90 (30 nuevas Qs)
// ═══════════════════════════════════════════════════════
// ═══════════════════════════════════════════════════════
// PREGUNTAS ADICIONALES – 30 nuevas (ids 61–90)
// Distribución: 
//   1.1 (Comprensión · Estudio):      6 Qs  (ids 61–66)
//   1.2 (Comprensión · Literario):    6 Qs  (ids 67–72)
//   1.3 (Comprensión · Part. Social): 3 Qs  (ids 73–75)
//   2.1 (Redacción · Estudio):        8 Qs  (ids 76–83)
//   2.2 (Redacción · Part. Social):   7 Qs  (ids 84–90)
// ═══════════════════════════════════════════════════════

// ── 1.1 COMPRENSIÓN LECTORA – ÁMBITO DE ESTUDIO ──────

{
  id:61, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"A",
  pTitle:"El Problema de la Demarcación en Filosofía de la Ciencia",
  passage:"El problema de la demarcación —cómo distinguir la ciencia de la pseudociencia y de otros saberes— ha ocupado a filósofos desde el Círculo de Viena. El criterio verificacionista de los positivistas lógicos exigía que un enunciado fuera científico solo si podía verificarse empíricamente; su debilidad es que las leyes universales nunca se verifican definitivamente (no podemos revisar todos los cuervos para confirmar que todos son negros). Popper reemplazó la verificación por la falsación: un enunciado es científico si es refutable en principio. Lakatos refinó a Popper con la noción de 'programa de investigación científica': la ciencia avanza en núcleos teóricos protegidos por hipótesis auxiliares; lo que se abandona no es el núcleo sino el cinturón protector cuando las anomalías se acumulan irreparablemente.",
  q:"¿Cuál es la ventaja del criterio de falsación de Popper sobre el verificacionismo positivista, según se puede inferir del texto?",
  opts:["Que la falsación es más fácil de aplicar en laboratorio porque requiere menos observaciones que la verificación.","Que la falsación reconoce la asimetría lógica entre confirmar y refutar: un solo contraejemplo derrumba una ley universal, aunque infinitas confirmaciones no la prueben definitivamente.","Que la falsación elimina la necesidad de hipótesis auxiliares en el proceso científico."],
  correct:1, expl:"El texto señala la debilidad del verificacionismo: nunca podemos revisar todos los casos para confirmar una ley universal. Popper resuelve esto aprovechando la asimetría lógica: basta un caso contrario para refutar, aunque infinitos casos positivos no basten para verificar. Lakatos añade matices pero no invalida esa ventaja."
},
{
  id:62, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"B",
  pTitle:"Sesgos Cognitivos en la Toma de Decisiones",
  passage:"Daniel Kahneman distingue dos sistemas de pensamiento: el Sistema 1, rápido, automático e intuitivo, y el Sistema 2, lento, deliberativo y analítico. La mayor parte de las decisiones cotidianas las toma el Sistema 1, que opera mediante heurísticas: atajos mentales que son eficientes en condiciones normales pero producen sesgos sistemáticos en condiciones de incertidumbre o complejidad. El sesgo de disponibilidad lleva a sobreestimar la probabilidad de eventos que se recuerdan fácilmente (como accidentes de avión frente a accidentes de tránsito); el sesgo de anclaje hace que las estimaciones queden fijadas al primer número que se presenta, aunque sea arbitrario; el sesgo de confirmación lleva a buscar y recordar preferentemente la información que confirma las creencias previas.",
  q:"Según el texto, las heurísticas del Sistema 1 producen sesgos porque son atajos mentales que resultan ________ en condiciones cotidianas pero generan errores sistemáticos cuando la situación implica incertidumbre o complejidad.",
  opts:["ineficientes y costosos cognitivamente","eficientes y funcionales","conscientes y deliberativos"],
  correct:1, expl:"El texto es preciso: las heurísticas 'son eficientes en condiciones normales pero producen sesgos sistemáticos en condiciones de incertidumbre o complejidad'. La opción B parafrasea exactamente esa condición doble."
},
{
  id:63, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"D",
  pTitle:"Paradigmas Epistemológicos en Ciencias Sociales",
  passage:"Las ciencias sociales se han desarrollado bajo distintos paradigmas epistemológicos que difieren en sus supuestos sobre la naturaleza de la realidad social, el conocimiento posible y los métodos adecuados para producirlo.",
  q:"Relaciona cada paradigma epistemológico con su supuesto central.",
  leftItems:["Positivismo","Interpretativismo","Teoría Crítica"],
  rightItems:["El conocimiento social debe emancipar a los sujetos de las estructuras de dominación que naturalizan como inevitables","La realidad social es objetiva, medible y gobernada por leyes que la ciencia puede descubrir mediante métodos hipotético-deductivos","La realidad social es construida intersubjetivamente; comprenderla exige interpretar los significados que los actores le atribuyen"],
  correctPairs:[[0,1],[1,2],[2,0]],
  expl:"Positivismo = realidad objetiva medible con métodos hipotético-deductivos; Interpretativismo = construcción intersubjetiva de significados; Teoría Crítica = conocimiento orientado a la emancipación de estructuras de dominación."
},
{
  id:64, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"C",
  pTitle:"Fases del Análisis de Datos Cualitativos",
  passage:"El análisis de datos cualitativos no es un proceso lineal sino cíclico: la codificación, la categorización y la interpretación se retroalimentan mutuamente. Sin embargo, tiene una secuencia lógica que orienta al investigador desde los datos brutos hasta la teorización.",
  q:"Ordena las fases del análisis cualitativo en su secuencia metodológica correcta.",
  items:["Teorización: construcción de proposiciones que explican las relaciones entre categorías","Codificación abierta: identificación y etiquetado de fragmentos significativos en los datos brutos","Saturación y escritura analítica: cierre del proceso e integración en el informe","Categorización axial: agrupación de códigos en categorías y subcategorías conceptuales"],
  correctOrder:[1,3,0,2],
  expl:"La secuencia es: Codificación abierta (etiquetar fragmentos) → Categorización axial (agrupar códigos en categorías) → Teorización (proposiciones explicativas) → Saturación y escritura analítica (cierre e integración)."
},
{
  id:65, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"A",
  pTitle:"El Concepto de Reflexividad en Investigación Cualitativa",
  passage:"La reflexividad es la práctica mediante la cual el investigador cualitativo examina críticamente su propio posicionamiento —social, cultural, ideológico, emocional— y los efectos que ese posicionamiento tiene sobre la producción del conocimiento. A diferencia de la objetividad positivista, que intenta eliminar al sujeto del proceso de conocimiento, la reflexividad reconoce que la presencia del investigador afecta inevitablemente al campo y que ocultarla no elimina ese efecto sino que lo hace invisible. La reflexividad no es una confesión personal sino un procedimiento metodológico: documentar y analizar cómo el posicionamiento del investigador influyó en las preguntas formuladas, los datos privilegiados y las interpretaciones producidas.",
  q:"¿En qué sentido la reflexividad representa una alternativa epistemológica a la objetividad positivista, según el texto?",
  opts:["En que renuncia a cualquier pretensión de rigor y acepta la subjetividad como límite insuperable del conocimiento.","En que en lugar de eliminar al sujeto del conocimiento, documenta y analiza cómo su posicionamiento afecta el proceso, convirtiendo esa influencia en dato metodológico.","En que sustituye los métodos cuantitativos por los cualitativos como estándar de validez científica."],
  correct:1, expl:"El texto distingue la objetividad positivista (eliminar al sujeto) de la reflexividad (documentar y analizar su efecto). La reflexividad no renuncia al rigor; lo redefine: convierte lo que el positivismo oculta (la influencia del investigador) en un procedimiento metodológico explícito."
},
{
  id:66, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"B",
  pTitle:"Metaanálisis y Revisión Sistemática",
  passage:"El metaanálisis es una técnica estadística que combina los resultados de múltiples estudios independientes sobre una misma pregunta de investigación para obtener una estimación más precisa y robusta del tamaño del efecto. A diferencia de la revisión narrativa tradicional —donde el revisor selecciona discrecionalmente los estudios que comenta— el metaanálisis se integra en una revisión sistemática que define a priori los criterios de inclusión y exclusión de estudios, realiza una búsqueda exhaustiva en múltiples bases de datos, evalúa el riesgo de sesgo de cada estudio incluido y cuantifica la heterogeneidad de los resultados. La principal amenaza al metaanálisis es el sesgo de publicación: los estudios con resultados positivos se publican más frecuentemente que los nulos, lo que puede inflar artificialmente la estimación del efecto combinado.",
  q:"El sesgo de publicación representa una amenaza específica al metaanálisis porque, al incluir predominantemente estudios con resultados positivos, la estimación combinada del efecto puede quedar ________ respecto al efecto real.",
  opts:["subestimada, al excluir estudios con muestras grandes","sobreestimada, al inflar artificialmente el promedio con resultados sesgados hacia lo positivo","equilibrada, si la revisión sistemática aplica criterios de inclusión rigurosos"],
  correct:1, expl:"El texto lo señala explícitamente: si los estudios nulos no se publican, el metaanálisis solo combina los positivos, inflando artificialmente la estimación. 'Sobreestimada' es la consecuencia directa de ese sesgo."
},

// ── 1.2 COMPRENSIÓN LECTORA – ÁMBITO LITERARIO ───────

{
  id:67, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"A",
  pTitle:"La Ironía como Distancia Enunciativa",
  passage:"La ironía no es simplemente decir lo contrario de lo que se piensa: es una estructura enunciativa que presupone una audiencia capaz de reconocer la distancia entre el enunciado literal y el enunciado implicado. Wayne Booth distinguió entre ironía estable —donde el autor implícito comunica un sentido fijo que el lector competente puede reconstruir— e ironía inestable, donde la suspensión del juicio es el efecto buscado y ninguna lectura 'correcta' cancela las demás. La ironía socrática opera de manera peculiar: Sócrates finge ignorancia no para comunicar lo contrario de lo que sabe, sino para hacer que el interlocutor descubra la inconsistencia de sus propias creencias; el saber ironizado no es el de Sócrates sino el del otro.",
  q:"¿Por qué la ironía socrática no encaja perfectamente en la definición de ironía como 'decir lo contrario de lo que se piensa'?",
  opts:["Porque Sócrates realmente ignoraba las respuestas y su fingimiento era genuino, no retórico.","Porque el objeto de la ironía socrática no es comunicar el saber de Sócrates sino exponer la inconsistencia del saber del interlocutor; la ignorancia fingida es un dispositivo para hacer hablar al otro, no para contradecir lo que Sócrates cree.","Porque la ironía socrática es un tipo de ironía inestable que no admite ninguna lectura correcta."],
  correct:1, expl:"El texto precisa la diferencia: en la ironía convencional, quien habla dice lo contrario de lo que sabe. En la ironía socrática, Sócrates no ironiza sobre su propio saber sino que usa la ignorancia fingida para exponer la inconsistencia del interlocutor; el blanco no es la creencia de Sócrates sino la del otro."
},
{
  id:68, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"C",
  pTitle:"Estructura de la Novela Bildungsroman",
  passage:"El Bildungsroman o 'novela de formación' es el género narrativo que representa el proceso de maduración de un protagonista desde la adolescencia o juventud hasta la integración —exitosa o fallida— en la sociedad adulta. Su estructura interna sigue una lógica de pruebas y transformación.",
  q:"Ordena las etapas estructurales del Bildungsroman en su secuencia narrativa característica.",
  items:["Crisis o conflicto central que obliga al protagonista a cuestionar su visión del mundo","Partida del mundo familiar e ingreso en un entorno más amplio y desconocido","Integración o reconciliación: el protagonista adopta un lugar en la sociedad o asume las consecuencias del rechazo","Encuentros formativos: mentores, amores, fracasos que modifican gradualmente al protagonista"],
  correctOrder:[1,0,3,2],
  expl:"La secuencia del Bildungsroman es: Partida del mundo familiar → Crisis o conflicto que desestabiliza la visión del mundo → Encuentros formativos (mentores, amores, fracasos) → Integración o reconciliación con la sociedad adulta."
},
{
  id:69, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"B",
  pTitle:"El Monólogo Interior y la Corriente de Conciencia",
  passage:"El monólogo interior es la técnica narrativa que reproduce el flujo de pensamientos de un personaje sin mediación del narrador. En su forma extrema —la corriente de conciencia, asociada a Joyce, Woolf y Faulkner— abandona las convenciones sintácticas del discurso articulado para reproducir los saltos asociativos, las fragmentaciones temporales y los niveles simultáneos de conciencia. La diferencia entre el monólogo interior clásico (Dostoyevski, Tolstói) y la corriente de conciencia no es solo técnica sino epistemológica: el monólogo clásico supone un yo coherente y narrativizable; la corriente de conciencia implica que la subjetividad es discontinua, no articulable en discurso ordenado, y que el lenguaje mismo debe desarticularse para representarla.",
  q:"Según el texto, la diferencia entre el monólogo interior clásico y la corriente de conciencia es epistemológica porque implican concepciones distintas de la ________ del sujeto que cada técnica presupone.",
  opts:["extensión geográfica y la movilidad social","coherencia o discontinuidad de la subjetividad","clase social y el nivel educativo"],
  correct:1, expl:"El texto establece la distinción en esos términos: el monólogo clásico 'supone un yo coherente y narrativizable'; la corriente de conciencia implica que 'la subjetividad es discontinua'. La diferencia técnica refleja una diferencia en la concepción del sujeto."
},
{
  id:70, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"D",
  pTitle:"Corrientes Narrativas del Siglo XX",
  passage:"El siglo XX produjo una diversidad de corrientes narrativas que renovaron radicalmente las convenciones de la novela heredadas del realismo decimonónico, cada una con sus propuestas formales y sus implicaciones sobre la relación entre literatura y realidad.",
  q:"Relaciona cada corriente narrativa con su propuesta formal distintiva.",
  leftItems:["Nouveau roman francés","Realismo mágico latinoamericano","Metaficción posmoderna"],
  rightItems:["Texto que se interroga explícitamente sobre su propia condición de artificio, cuestionando la ilusión referencial de la narrativa","Eliminación del psicologismo: los personajes se describen desde fuera, sin acceso a su vida interior, con énfasis en objetos y superficies","Integración de lo sobrenatural en la cosmovisión ordinaria de la comunidad narrada, sin efecto de extrañamiento para los personajes"],
  correctPairs:[[0,1],[1,2],[2,0]],
  expl:"Nouveau roman = eliminación del psicologismo, énfasis en objetos y superficies; Realismo mágico = lo sobrenatural integrado sin extrañamiento; Metaficción posmoderna = autorreflexividad sobre el artificio narrativo."
},
{
  id:71, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"A",
  pTitle:"La Poesía Concreta y los Límites del Lenguaje",
  passage:"La poesía concreta, surgida en la década de 1950 con el grupo brasileño Noigandres (Haroldo de Campos, Augusto de Campos, Décio Pignatari), propuso que el poema no era una estructura de versos sino un objeto visual-sonoro-semántico donde la disposición gráfica de las palabras en la página era parte inseparable del significado. Influida por Mallarmé, la tipografía de vanguardia y la teoría de la información de Wiener y Shannon, la poesía concreta eliminó la sintaxis lineal y propuso que el poema debía ser percibido gestálticamente: como un campo de relaciones simultáneas entre formas, sonidos y sentidos. La consecuencia teórica más radical fue que el poema concreto ya no podía leerse sino también verse y oírse; ninguna traducción verbal podía reproducirlo sin destruirlo.",
  q:"¿Por qué la poesía concreta plantea un problema fundamental para la traducción, según el texto?",
  opts:["Porque las palabras del portugués brasileño tienen connotaciones culturales que no existen en otros idiomas.","Porque en el poema concreto la disposición gráfica es parte inseparable del significado, de modo que cualquier traducción verbal destruye el objeto visual-sonoro-semántico que constituye el poema.","Porque el Grupo Noigandres se opuso explícitamente a que sus poemas fueran traducidos a otras lenguas."],
  correct:1, expl:"El argumento del texto es preciso: si 'la disposición gráfica de las palabras en la página es parte inseparable del significado' y el poema debe ser percibido 'como un campo de relaciones simultáneas entre formas, sonidos y sentidos', entonces traducir el significado verbal sin reproducir el objeto visual-sonoro no es traducción sino destrucción."
},
{
  id:72, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"B",
  pTitle:"La Écfrasis: Descripción de Obras de Arte en Literatura",
  passage:"La écfrasis es la descripción verbal de una obra de arte visual en un texto literario. En su definición más amplia, abarca cualquier representación verbal de un objeto visual; en su definición estrecha, se limita a la descripción de obras de arte reales o imaginarias que compiten con su modelo en la producción de efectos estéticos. La écfrasis activa lo que W.J.T. Mitchell llamó la 'lucha de los medios': la tensión entre la imagen (espacial, simultánea, muda) y la palabra (temporal, sucesiva, sonora). El poema 'Oda a una urna griega' de Keats es el ejemplo canónico: la urna detiene el tiempo, mientras el poema avanza en el tiempo para representar esa detención. La paradoja de toda écfrasis es que el lenguaje, medio temporal, intenta capturar lo que la imagen suspende: el instante.",
  q:"La paradoja que Mitchell llama 'lucha de los medios' en la écfrasis consiste en que el lenguaje, que es un medio ________, intenta representar la imagen, que es un medio ________.",
  opts:["visual y simultáneo / temporal y sucesivo","temporal y sucesivo / espacial y simultáneo","abstracto y conceptual / concreto y material"],
  correct:1, expl:"El texto establece explícitamente esta oposición: la imagen es 'espacial, simultánea, muda' y la palabra es 'temporal, sucesiva, sonora'. La écfrasis es la tensión de usar el medio temporal-sucesivo (lenguaje) para capturar el medio espacial-simultáneo (imagen)."
},

// ── 1.3 COMPRENSIÓN LECTORA – PARTICIPACIÓN SOCIAL ───

{
  id:73, sub:"1.3", label:"Comprensión lectora – Ámbito de participación social", fmt:"A",
  pTitle:"El Derecho a la Información y sus Límites",
  passage:"El derecho de acceso a la información pública es un derecho humano reconocido en el artículo 6 de la Constitución mexicana y en instrumentos internacionales como el Pacto Internacional de Derechos Civiles y Políticos. Su contenido esencial es la posibilidad de todo ciudadano de solicitar y recibir información en poder del Estado sin necesidad de acreditar interés jurídico ni motivar la solicitud. Sin embargo, el derecho no es absoluto: admite restricciones proporcionales cuando la divulgación podría afectar la seguridad nacional, la vida privada de terceros, secretos comerciales o el orden público. La prueba de daño —exigida por los estándares internacionales— obliga a la autoridad a demostrar que la divulgación causaría un daño real y concreto, no meramente hipotético, al bien jurídico invocado.",
  q:"¿Qué función cumple la 'prueba de daño' en el régimen de acceso a la información, según el texto?",
  opts:["Permite al ciudadano demostrar que tiene un interés legítimo en la información solicitada.","Obliga a la autoridad a justificar que la reserva de información protege un daño real y concreto, no apenas hipotético, impidiendo reservas injustificadas.","Establece los plazos dentro de los cuales la autoridad debe responder a las solicitudes de información."],
  correct:1, expl:"El texto dice que la prueba de daño 'obliga a la autoridad a demostrar que la divulgación causaría un daño real y concreto, no meramente hipotético'. Su función es imponer una carga argumentativa a quien clasifica la información, no al ciudadano que la solicita."
},
{
  id:74, sub:"1.3", label:"Comprensión lectora – Ámbito de participación social", fmt:"D",
  pTitle:"Tipos de Legitimidad según Max Weber",
  passage:"Max Weber identificó tres tipos puros de dominación legítima que se corresponden con distintas fuentes de autoridad en las organizaciones sociales y políticas. Cada tipo genera formas institucionales y tipos de obediencia distintos.",
  q:"Relaciona cada tipo de dominación legítima weberiana con su fundamento de autoridad.",
  leftItems:["Dominación tradicional","Dominación carismática","Dominación legal-racional"],
  rightItems:["Obediencia a normas impersonales establecidas formalmente; la autoridad reside en el cargo, no en la persona","Creencia en la santidad de los ordenamientos y poderes señoriales existentes desde tiempo inmemorial","Devoción afectiva a una persona y a los dones extraordinarios (carisma) que se le atribuyen"],
  correctPairs:[[0,1],[1,2],[2,0]],
  expl:"Dominación tradicional = santidad de los ordenamientos inmemoriales; Carismática = devoción a los dones extraordinarios de una persona; Legal-racional = obediencia a normas impersonales donde la autoridad reside en el cargo."
},
{
  id:75, sub:"1.3", label:"Comprensión lectora – Ámbito de participación social", fmt:"C",
  pTitle:"Proceso de Reforma Constitucional en México",
  passage:"La Constitución Política de los Estados Unidos Mexicanos establece en su artículo 135 un procedimiento rígido para su reforma, que busca garantizar la estabilidad del texto fundamental y que los cambios cuenten con un respaldo político suficientemente amplio.",
  q:"Ordena las etapas del proceso de reforma constitucional en México conforme al artículo 135.",
  items:["Promulgación y publicación en el Diario Oficial de la Federación","Aprobación por el Congreso de la Unión con votación de dos tercios de los presentes","Cómputo y declaración de aprobación por el Congreso o la Comisión Permanente","Aprobación de la mayoría de las legislaturas de los estados"],
  correctOrder:[1,3,2,0],
  expl:"El proceso del artículo 135 es: Aprobación por el Congreso con mayoría de dos tercios → Ratificación por la mayoría de las legislaturas estatales → Cómputo y declaración de aprobación por el Congreso o la Comisión Permanente → Promulgación y publicación en el DOF."
},

// ── 2.1 REDACCIÓN INDIRECTA – ÁMBITO DE ESTUDIO ──────

{
  id:76, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"A",
  pTitle:"La Voz Pasiva y la Impersonalidad en el Discurso Académico",
  passage:"El registro académico hace un uso funcional de la voz pasiva y de las construcciones impersonales para desplazar el foco del agente a la acción o al resultado: 'Se analizaron 300 expedientes' o 'Los datos fueron procesados mediante regresión logística' ocultan deliberadamente al sujeto que realizó la acción, privilegiando la objetividad del procedimiento sobre la identidad del investigador. Esta estrategia no es solo estilística sino epistémica: construye un efecto de impersonalidad que simula que los resultados emergen del método, no del investigador. Sin embargo, el uso excesivo de la pasiva puede producir ambigüedad sobre los responsables de las afirmaciones y dificultades de lectura cuando se encadenan múltiples pasivas en un mismo párrafo.",
  q:"¿Por qué el texto califica el uso de la voz pasiva en el discurso académico como una estrategia 'epistémica' y no solo 'estilística'?",
  opts:["Porque la pasiva es una forma gramatical más compleja que la activa y su uso señala el dominio del investigador sobre la lengua académica.","Porque la pasiva construye un efecto de impersonalidad que simula que los resultados provienen del método y no del investigador, lo que afecta la naturaleza del conocimiento que se presenta.","Porque la pasiva es obligatoria en los artículos científicos según las normas APA e ISO."],
  correct:1, expl:"El texto distingue la dimensión estilística (cómo se escribe) de la epistémica (qué tipo de conocimiento se construye). La pasiva no solo cambia el estilo: construye una representación del conocimiento como objetivo e impersonal, lo que afecta cómo se entiende la naturaleza de los resultados."
},
{
  id:77, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"B",
  pTitle:"Tipos de Párrafo según su Función Argumentativa",
  passage:"En la prosa académica, los párrafos no son unidades arbitrarias de extensión sino unidades funcionales que cumplen roles argumentativos diferenciados. El párrafo de introducción delimita el tema y anticipa la estructura; el párrafo de desarrollo expone, argumenta y evidencia; el párrafo de transición conecta secciones y reorienta al lector; el párrafo de síntesis retoma los argumentos centrales sin repetirlos literalmente; y el párrafo de conclusión no añade información nueva sino que extrae las implicaciones de lo ya argumentado. Un error frecuente en la escritura académica es confundir el párrafo de síntesis con el de conclusión: el primero mira hacia atrás (resume), el segundo mira hacia adelante (implica, proyecta, abre).",
  q:"Según el texto, el párrafo de conclusión se distingue del de síntesis en que la conclusión no repite lo ya argumentado sino que extrae ________ de los argumentos presentados.",
  opts:["las citas bibliográficas más relevantes utilizadas","las implicaciones, proyecciones o aperturas que se derivan de lo argumentado","un nuevo ejemplo que ilustre la tesis central"],
  correct:1, expl:"El texto es explícito: el párrafo de conclusión 'no añade información nueva sino que extrae las implicaciones de lo ya argumentado' y 'mira hacia adelante (implica, proyecta, abre)'. La síntesis mira hacia atrás; la conclusión proyecta hacia afuera."
},
{
  id:78, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"D",
  pTitle:"Falacias Argumentativas Frecuentes en Textos Académicos",
  passage:"Las falacias son argumentos que parecen válidos pero cuya conclusión no se sigue lógicamente de las premisas o que apelan a recursos no pertinentes para la evaluación racional del argumento. Reconocerlas es indispensable tanto para la lectura crítica como para la escritura argumentativa rigurosa.",
  q:"Relaciona cada falacia con su mecanismo lógico.",
  leftItems:["Ad hominem","Post hoc ergo propter hoc","Hombre de paja"],
  rightItems:["Reformular el argumento del adversario en una versión más débil o distorsionada para refutarla más fácilmente","Atacar al emisor del argumento en lugar de refutar el argumento mismo","Inferir causalidad a partir de la mera secuencia temporal: 'A ocurrió antes que B, por tanto A causó B'"],
  correctPairs:[[0,1],[1,2],[2,0]],
  expl:"Ad hominem = ataca al emisor, no al argumento; Post hoc = infiere causa de secuencia temporal; Hombre de paja = distorsiona el argumento adversario para refutar una versión más débil."
},
{
  id:79, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"C",
  pTitle:"Estructura del Abstract en Artículos Científicos",
  passage:"El abstract o resumen estructurado de un artículo científico es una unidad textual autónoma que debe permitir al lector evaluar la relevancia del artículo sin necesidad de leer el texto completo. Las revistas de alto impacto exigen un abstract con secciones claramente diferenciadas.",
  q:"Ordena las secciones del abstract estructurado en su secuencia convencional.",
  items:["Resultados: hallazgos principales cuantificados o cualificados","Objetivo: propósito específico del estudio","Conclusiones: interpretación y relevancia de los resultados","Métodos: diseño, participantes, procedimientos e instrumentos"],
  correctOrder:[1,3,0,2],
  expl:"La secuencia convencional del abstract estructurado es: Objetivo (qué se investigó) → Métodos (cómo se hizo) → Resultados (qué se encontró) → Conclusiones (qué significa e implica). Refleja la lógica del artículo completo en miniatura."
},
{
  id:80, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"A",
  pTitle:"Uso Normativo de los Dos Puntos",
  passage:"Los dos puntos tienen en español un valor anunciativo: introducen lo que se prometió o anticipó en el enunciado anterior. Sus usos normativos incluyen: anunciar una enumeración ('Los documentos necesarios son: credencial, comprobante y formulario'), introducir una cita textual, preceder una explicación o consecuencia ('El diseño fue rechazado: los márgenes no cumplían con los requisitos'), y los usos epistolares y administrativos ('Estimada directora:'). Un error frecuente en la escritura formal es interponer los dos puntos entre el verbo y su complemento directo o entre la preposición y su término, construcciones en las que la gramática no los admite: '*Las causas son: la falta de presupuesto y el cambio de autoridades' es incorrecto porque el verbo copulativo y el atributo no se separan con dos puntos.",
  q:"¿Cuál de los siguientes enunciados usa los dos puntos de manera normativa?",
  opts:["El informe concluye que: los resultados no son generalizables a otras poblaciones.","La directora solicitó tres acciones: revisar el protocolo, actualizar el padrón y emitir el dictamen.","Los evaluadores son: la Dra. Reyes, el Mtro. Castro y la Lic. Fuentes."],
  correct:1, expl:"La opción B usa los dos puntos correctamente para anunciar una enumeración después de un elemento nominal que la anticipa ('tres acciones'). La opción A los intercala entre el verbo ('concluye') y su complemento, uso incorrecto. La opción C los intercala entre el verbo copulativo ('son') y el atributo, otro uso incorrecto según el texto."
},
{
  id:81, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"B",
  pTitle:"La Nominalización como Recurso de Densidad Informativa",
  passage:"La nominalización —transformar procesos verbales en sustantivos abstractos ('implementar' → 'la implementación'; 'analizar críticamente' → 'el análisis crítico')— es uno de los rasgos más característicos del registro académico. Permite empaquetar información densa en construcciones breves que pueden luego funcionar como sujetos o complementos de nuevas predicaciones. Sin embargo, el abuso de nominalizaciones vacías produce el llamado 'estilo burocrático': construcciones como 'se procedió a la realización de una verificación' en lugar de 'se verificó' añaden palabras sin añadir información. El criterio para evaluar si una nominalización está justificada es funcional: ¿hace el texto más preciso, o solo más largo?",
  q:"Según el texto, el criterio para determinar si una nominalización está justificada en el registro académico es si contribuye a la ________ del texto, no si lo hace más extenso.",
  opts:["elegancia retórica y la complejidad sintáctica","precisión informativa y la densidad conceptual","originalidad léxica y la variedad estilística"],
  correct:1, expl:"El texto pregunta: '¿hace el texto más preciso, o solo más largo?' El criterio funcional es la precisión informativa. 'Precisión informativa y densidad conceptual' parafrasea ese criterio; las otras opciones nombran valores que el texto no menciona."
},
{
  id:82, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"C",
  pTitle:"Proceso de Revisión y Corrección de un Texto Académico",
  passage:"La revisión de un texto académico es un proceso estratificado que no puede realizarse en una sola lectura. Cada nivel de revisión tiene un foco diferente y requiere distancia temporal respecto a la escritura.",
  q:"Ordena los niveles de revisión de un texto académico de mayor a menor escala.",
  items:["Corrección lingüística: ortografía, puntuación y normativa gramatical","Revisión global: coherencia de la tesis, estructura argumentativa y adecuación al propósito","Revisión de párrafos: cohesión interna, función argumentativa y transiciones entre párrafos","Revisión estilística: registro, precisión léxica y economía del lenguaje"],
  correctOrder:[1,2,3,0],
  expl:"La revisión va de la escala mayor a la menor: Revisión global (tesis y estructura) → Revisión de párrafos (cohesión y función) → Revisión estilística (registro y léxico) → Corrección lingüística (ortografía y puntuación). Invertir el orden lleva a corregir erratas en párrafos que luego se eliminarán."
},
{
  id:83, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"D",
  pTitle:"Conectores Lógicos y su Función en el Argumento",
  passage:"Los conectores lógicos no son intercambiables: cada uno señala una relación semántica específica entre los enunciados que conecta. Usarlos incorrectamente produce textos incoherentes aunque cada oración sea gramaticalmente correcta.",
  q:"Relaciona cada conector con la relación lógica que establece.",
  leftItems:["Sin embargo / No obstante","Por ende / En consecuencia","Aunque / Si bien"],
  rightItems:["Concesión: reconoce la validez parcial de un argumento contrario sin abandonar la posición propia","Oposición o contraargumentación: introduce una restricción o excepción que limita lo afirmado previamente","Consecuencia o conclusión: señala que lo que sigue se deriva lógicamente de lo anterior"],
  correctPairs:[[0,1],[1,2],[2,0]],
  expl:"Sin embargo/No obstante = oposición o contraargumentación; Por ende/En consecuencia = consecuencia lógica; Aunque/Si bien = concesión (reconoce el argumento contrario sin ceder la posición)."
},

// ── 2.2 REDACCIÓN INDIRECTA – PARTICIPACIÓN SOCIAL ───

{
  id:84, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"A",
  pTitle:"El Comunicado de Prensa Institucional",
  passage:"El comunicado de prensa es el documento mediante el cual una institución pública informa a los medios de comunicación sobre un hecho, decisión o evento de relevancia pública. Su estructura responde a la lógica de la pirámide invertida: la información más relevante se presenta primero (quién, qué, cuándo, dónde, por qué) y los detalles se añaden en orden decreciente de importancia, de modo que el editor pueda recortar el texto por el final sin perder la información esencial. El comunicado no es un artículo periodístico sino una fuente de información que el periodista procesará; por eso debe ser factual, verificable y evitar el lenguaje valorativo o publicitario que generaría desconfianza en los medios.",
  q:"¿Por qué el comunicado de prensa debe evitar el lenguaje valorativo o publicitario, según el texto?",
  opts:["Porque los medios de comunicación tienen prohibido publicar textos con adjetivos valorativos según el código de ética periodística.","Porque el comunicado es una fuente para el periodista, no un texto final; el lenguaje publicitario generaría desconfianza y reduciría las probabilidades de que el medio lo procese y difunda.","Porque la ley de transparencia exige que los comunicados institucionales usen exclusivamente lenguaje técnico-jurídico."],
  correct:1, expl:"El texto es preciso: el comunicado 'no es un artículo periodístico sino una fuente de información que el periodista procesará'; por eso el lenguaje publicitario 'generaría desconfianza en los medios'. La lógica es funcional: el comunicado debe ser procesable y creíble para quien lo recibirá."
},
{
  id:85, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"B",
  pTitle:"Redacción de Acuerdos en Órganos Colegiados",
  passage:"Los acuerdos adoptados en sesiones de órganos colegiados deben redactarse con precisión para que sean ejecutables: deben especificar la acción mandatada (verbo en modo imperativo o de obligación), el responsable de ejecutarla (quién), el plazo (cuándo) y, si aplica, los recursos autorizados (con qué). Una redacción como 'Se acuerda analizar la situación del área de capacitación' es inoperable porque no designa responsable ni plazo; una como 'Se instruye a la Dirección de Recursos Humanos presentar un diagnóstico de las necesidades de capacitación en la sesión ordinaria del mes siguiente' cumple todos los elementos. El acuerdo no es una declaración de intenciones: es un mandato que genera obligaciones exigibles.",
  q:"Según el texto, un acuerdo redactado como 'Se acuerda analizar la situación' es inoperable porque carece de los elementos que lo convierten en un mandato ________ con responsable y plazo claramente establecidos.",
  opts:["deliberativo y consultivo","exigible y ejecutable","presupuestal y normativo"],
  correct:1, expl:"El texto dice que el acuerdo 'genera obligaciones exigibles' y no es una 'declaración de intenciones'. La opción correcta parafrasea esa condición: exigible (genera obligación) y ejecutable (puede llevarse a cabo porque especifica quién y cuándo)."
},
{
  id:86, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"C",
  pTitle:"Estructura de un Informe de Auditoría Institucional",
  passage:"El informe de auditoría es el documento que presenta los resultados de la revisión del ejercicio de recursos públicos o del cumplimiento normativo de una institución. Su estructura debe permitir a los destinatarios (órgano de supervisión, autoridades, ciudadanía) identificar rápidamente los hallazgos críticos y las acciones correctivas requeridas.",
  q:"Ordena las secciones del informe de auditoría en su secuencia estructural correcta.",
  items:["Recomendaciones y acciones correctivas con plazos y responsables","Introducción: objetivo, alcance y metodología de la auditoría","Hallazgos: descripción de las observaciones con evidencia documental","Conclusión general sobre el estado del área o proceso auditado"],
  correctOrder:[1,2,3,0],
  expl:"La secuencia del informe de auditoría es: Introducción (objetivo, alcance y metodología) → Hallazgos con evidencia documental → Conclusión general → Recomendaciones con plazos y responsables. Las recomendaciones van al final porque se derivan de los hallazgos."
},
{
  id:87, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"D",
  pTitle:"Géneros del Discurso Oficial: Funciones y Destinatarios",
  passage:"El discurso oficial se materializa en géneros diferenciados según el acto jurídico que realizan, la relación institucional que regulan y el destinatario al que se dirigen. Dominar esas diferencias es indispensable para producir documentos adecuados a cada situación.",
  q:"Relaciona cada género del discurso oficial con su función y destinatario principal.",
  leftItems:["Circular","Bases de licitación","Decreto ejecutivo"],
  rightItems:["Instrucción general emitida por una autoridad a los servidores públicos bajo su mando para uniformar criterios o procedimientos internos","Acto normativo del titular del Ejecutivo con fuerza obligatoria general, que crea, modifica o extingue situaciones jurídicas","Documento que establece las condiciones técnicas, económicas y jurídicas bajo las que los proveedores pueden participar en una contratación pública"],
  correctPairs:[[0,0],[1,2],[2,1]],
  expl:"Circular = instrucción general a servidores públicos para uniformar procedimientos internos; Bases de licitación = condiciones para participar en contratación pública; Decreto ejecutivo = acto normativo del Ejecutivo con fuerza obligatoria general."
},
{
  id:88, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"A",
  pTitle:"La Carga de la Prueba en la Escritura Argumentativa Institucional",
  passage:"En los textos institucionales con efectos jurídicos —resoluciones, dictámenes, sanciones— quien afirma algo carga con la responsabilidad de probarlo. Este principio, conocido en derecho como onus probandi, tiene consecuencias directas sobre la estructura argumentativa de los documentos: las afirmaciones de hecho deben respaldarse con pruebas (documentos, testimonios, peritajes); las afirmaciones de derecho deben vincularse con el fundamento normativo aplicable; y las conclusiones deben derivarse explícitamente de las premisas. Un dictamen que afirma 'el servidor incurrió en falta grave' sin detallar los hechos probados, el tipo normativo aplicado y la subsunción del caso en ese tipo, es jurídicamente ineficaz aunque sea retóricamente convincente.",
  q:"¿Por qué un dictamen que afirma una falta grave 'retóricamente convincente' puede ser jurídicamente ineficaz, según el texto?",
  opts:["Porque en derecho la retórica no tiene ningún valor y solo los argumentos técnicos son admisibles.","Porque la eficacia jurídica exige que las afirmaciones de hecho estén respaldadas con pruebas, las de derecho con fundamento normativo y las conclusiones derivadas explícitamente de las premisas; la convicción retórica no reemplaza esa estructura.","Porque los dictámenes deben ser redactados exclusivamente por abogados titulados para tener validez."],
  correct:1, expl:"El argumento del texto es preciso: la eficacia jurídica no depende de la persuasión sino de la estructura probatoria: hechos probados + fundamento normativo + subsunción del caso. Un documento puede ser retóricamente convincente pero jurídicamente ineficaz si omite alguno de esos elementos."
},
{
  id:89, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"B",
  pTitle:"Lenguaje Ciudadano en Documentos de Gobierno",
  passage:"El movimiento internacional de lenguaje claro (plain language) en el sector público propone que los documentos del gobierno deben ser comprensibles para sus destinatarios ciudadanos en la primera lectura. Sus principios operativos incluyen: preferir palabras de uso común sobre tecnicismos cuando la precisión no se pierde ('usar' en lugar de 'hacer uso de'); construir oraciones activas y de extensión moderada (menos de 30 palabras en promedio); organizar la información en orden de importancia para el ciudadano (no para la institución); y usar listas y encabezados cuando ayuden a la navegación del texto. Sin embargo, el lenguaje claro no significa lenguaje simple: los documentos deben ser accesibles sin sacrificar la precisión jurídica o técnica cuando esta es indispensable.",
  q:"Según el texto, el lenguaje claro en documentos de gobierno no implica renunciar a la precisión técnica, sino garantizar que los documentos sean ________ para el ciudadano destinatario sin que esa accesibilidad sacrifique el rigor donde es indispensable.",
  opts:["más breves y visuales que los documentos académicos","comprensibles en la primera lectura","gratuitos y de acceso público"],
  correct:1, expl:"El texto define el objetivo del lenguaje claro: que los documentos 'sean comprensibles para sus destinatarios ciudadanos en la primera lectura'. La opción B parafrasea exactamente ese criterio operativo."
},
{
  id:90, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"D",
  pTitle:"Instrumentos de Planeación Institucional",
  passage:"La planeación institucional en el sector público se materializa en documentos que articulan distintos horizontes temporales y niveles de especificidad, desde la orientación estratégica de largo plazo hasta los compromisos operativos anuales.",
  q:"Relaciona cada instrumento de planeación con su función y horizonte temporal.",
  leftItems:["Plan Nacional de Desarrollo","Programa sectorial","Programa operativo anual (POA)"],
  rightItems:["Define los objetivos, metas y acciones específicas que una dependencia ejecutará en el ejercicio fiscal en curso","Establece los objetivos estratégicos y las políticas del gobierno federal para un período de seis años","Concreta los objetivos del PND en un sector específico, con metas, indicadores y estrategias de mediano plazo"],
  correctPairs:[[0,1],[1,2],[2,0]],
  expl:"Plan Nacional de Desarrollo = objetivos estratégicos del gobierno federal a seis años; Programa sectorial = concreción del PND en un sector específico con metas de mediano plazo; POA = compromisos operativos de una dependencia para el ejercicio fiscal en curso."
}

,

// ═══════════════════════════════════════════════════════
// BLOQUE 3 – ids 91–150 (60 nuevas preguntas)
// ═══════════════════════════════════════════════════════
// ═══════════════════════════════════════════════════════
// BLOQUE 3 – ids 91–150 (60 nuevas preguntas)
// Distribución:
//   1.1 (Comprensión · Estudio):      12 Qs  (91–102)
//   1.2 (Comprensión · Literario):    12 Qs  (103–114)
//   1.3 (Comprensión · Part. Social):  6 Qs  (115–120)
//   2.1 (Redacción · Estudio):        15 Qs  (121–135)
//   2.2 (Redacción · Part. Social):   15 Qs  (136–150)
// ═══════════════════════════════════════════════════════

// ── 1.1 COMPRENSIÓN LECTORA – ÁMBITO DE ESTUDIO (ids 91–102) ──

{
  id:91, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"A",
  pTitle:"El Concepto de Habitus en Bourdieu",
  passage:"Pierre Bourdieu introdujo el concepto de habitus para resolver la oposición entre estructura y agencia: el habitus es un sistema de disposiciones duraderas y transferibles —maneras de percibir, sentir, pensar y actuar— que los individuos incorporan a través de la experiencia social y que orientan sus prácticas sin determinarlas mecánicamente. A diferencia de las normas explícitas (reglas conscientes que se siguen deliberadamente), el habitus opera por debajo del nivel de la conciencia: el agente actúa como si siguiera una regla sin necesidad de conocerla ni enunciarla. El habitus es también generativo: no reproduce mecánicamente las situaciones pasadas sino que produce prácticas nuevas adaptadas a situaciones nuevas, siempre dentro de los límites de lo que el campo considera posible.",
  q:"¿En qué sentido el habitus de Bourdieu resuelve la tensión entre estructura y agencia que otras teorías sociales no logran superar?",
  opts:["Porque el habitus elimina la agencia individual al demostrar que toda acción está completamente determinada por la posición de clase del agente.","Porque el habitus es una estructura interiorizada que orienta las prácticas sin determinarlas mecánicamente: el agente actúa con libertad relativa dentro de los límites incorporados sin necesidad de consultarlos conscientemente.","Porque el habitus demuestra que la estructura social es una ilusión y que solo existen decisiones individuales libres."],
  correct:1, expl:"El texto define el habitus como disposiciones que 'orientan sin determinar mecánicamente' y que operan 'por debajo de la conciencia'. Eso resuelve la tensión: no es puro determinismo estructural (las prácticas no se reducen a posición de clase) ni pura agencia libre (las disposiciones tienen límites incorporados). La opción B captura ese punto intermedio."
},
{
  id:92, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"B",
  pTitle:"Epistemología Feminista y Conocimiento Situado",
  passage:"Donna Haraway propuso que todo conocimiento es situado: producido desde una perspectiva particular, en un cuerpo particular, en un tiempo y lugar concretos. La pretensión de objetividad 'desde ningún lugar' —el 'ojo de dios' que ve todo sin estar en ningún punto— es para Haraway una ficción que invisibiliza la perspectiva del que domina presentándola como universal. La objetividad feminista no niega la posibilidad de conocimiento verdadero; exige, al contrario, una mayor rigurosidad al hacer visible el punto de vista desde el que se conoce. El conocimiento parcial y situado es más honesto y, paradójicamente, más capaz de conexiones inesperadas que la falsa universalidad.",
  q:"Según Haraway, el conocimiento situado no es relativismo sino una forma de objetividad más rigurosa porque exige hacer ________ el punto de vista desde el que se produce el conocimiento, en lugar de ocultarlo bajo la pretensión de universalidad.",
  opts:["innecesario y obsoleto","visible y explícito","subjetivo e irrelevante"],
  correct:1, expl:"El texto distingue el conocimiento situado del relativismo: no niega la verdad sino que exige 'hacer visible el punto de vista'. 'Visible y explícito' parafrasea esa exigencia de transparencia metodológica. Ocultar la perspectiva no produce objetividad; visibilizarla sí."
},
{
  id:93, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"D",
  pTitle:"Corrientes Teóricas en Sociología Contemporánea",
  passage:"La sociología contemporánea se articula en torno a debates teóricos que intentan superar las dicotomías clásicas entre estructura y agencia, micro y macro, y objetivismo y subjetivismo. Cada corriente ofrece una síntesis distinta de estas tensiones.",
  q:"Relaciona cada corriente teórica con su propuesta central.",
  leftItems:["Estructuralismo-constructivismo (Bourdieu)","Teoría de sistemas (Luhmann)","Teoría de la estructuración (Giddens)"],
  rightItems:["La sociedad se compone de sistemas de comunicación autopoiéticos que se reproducen sin referencia a sujetos ni intenciones","Las estructuras sociales son simultáneamente el medio y el resultado de la acción: los agentes reproducen y transforman la estructura al usarla","Resolución de la dicotomía estructura/agencia mediante los conceptos de campo, capital y habitus como mediadores"],
  correctPairs:[[0,2],[1,0],[2,1]],
  expl:"Bourdieu = campo, capital y habitus como mediadores entre estructura y agencia; Luhmann = sistemas de comunicación autopoiéticos sin sujetos; Giddens = estructuración: estructuras como medio y resultado de la acción."
},
{
  id:94, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"C",
  pTitle:"Etapas del Diseño de un Instrumento de Medición",
  passage:"El diseño de un instrumento de medición (cuestionario, escala, guía de entrevista) no puede realizarse de forma intuitiva si se pretende que produzca datos válidos y confiables. Sigue un proceso técnico con etapas diferenciadas.",
  q:"Ordena las etapas del diseño de un instrumento de medición en su secuencia metodológica correcta.",
  items:["Pilotaje con una muestra pequeña y ajuste del instrumento según los resultados","Definición operacional de las variables o dimensiones que se medirán","Validación de contenido por juicio de expertos","Construcción de los reactivos o ítems a partir de las definiciones operacionales"],
  correctOrder:[1,3,2,0],
  expl:"La secuencia es: Definición operacional (qué se mide) → Construcción de ítems (cómo se mide) → Validación de contenido por expertos → Pilotaje y ajuste. La validación de expertos precede al pilotaje empírico."
},
{
  id:95, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"A",
  pTitle:"La Distinción Analítica / Sintética en Epistemología",
  passage:"Kant distinguió entre juicios analíticos —aquellos cuyo predicado ya está contenido en el concepto del sujeto ('todos los cuerpos son extensos')— y juicios sintéticos —aquellos que añaden información nueva no contenida en el sujeto ('todos los cuerpos tienen peso'). Los analíticos son necesariamente verdaderos pero no informativos; los sintéticos son informativos pero contingentes. Kant propuso la categoría intermedia de juicios sintéticos a priori: verdades necesarias que, sin embargo, amplían nuestro conocimiento (como las proposiciones matemáticas). Quine cuestionó radicalmente esta distinción en 'Dos dogmas del empirismo' (1951): si no existe una frontera nítida entre lo analítico y lo sintético, tampoco existe una distinción clara entre verdades de significado y verdades de hecho.",
  q:"¿Cuál es la implicación más radical de la crítica de Quine a la distinción analítica/sintética, según el texto?",
  opts:["Que las matemáticas no son un conocimiento válido porque no son verificables empíricamente.","Que no existe una frontera nítida entre lo que es verdadero por el significado de las palabras y lo que es verdadero por los hechos del mundo, disolviendo un pilar de la epistemología kantiana.","Que los juicios sintéticos a priori de Kant son en realidad analíticos mal formulados."],
  correct:1, expl:"El texto dice que si cae la distinción analítico/sintético, tampoco existe 'una distinción clara entre verdades de significado y verdades de hecho'. Esa es la implicación radical: disuelve la frontera entre lógica/matemática (verdades necesarias de significado) y ciencia empírica (verdades contingentes de hecho), uno de los pilares de la epistemología moderna."
},
{
  id:96, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"B",
  pTitle:"El Análisis Costo-Beneficio en Políticas Públicas",
  passage:"El análisis costo-beneficio (ACB) es la técnica que intenta cuantificar en términos monetarios todos los costos y beneficios sociales de una política o proyecto para determinar si produce un beneficio neto positivo. Sus supuestos incluyen: que los beneficios y costos pueden expresarse en una misma unidad (dinero), que los flujos futuros deben descontarse a valor presente, y que las preferencias individuales reveladas en el mercado son el criterio de valor. Sus limitaciones son igualmente sustanciales: muchos bienes socialmente relevantes (dignidad, equidad, biodiversidad) no tienen precio de mercado; la tasa de descuento elegida afecta dramáticamente el resultado —tasas altas deprecian el bienestar de las generaciones futuras—; y el ACB agrega preferencias sin considerar su distribución, de modo que puede recomendar políticas que maximizan el total pero perjudican a los más vulnerables.",
  q:"Según el texto, la elección de una tasa de descuento alta en el ACB es éticamente problemática porque ________ el peso relativo del bienestar de las generaciones futuras en la evaluación de la política.",
  opts:["amplifica y sobrepondera","deprecia y reduce artificialmente","neutraliza y equilibra"],
  correct:1, expl:"El texto afirma que 'tasas altas deprecian el bienestar de las generaciones futuras'. 'Deprecia y reduce artificialmente' parafrasea ese efecto: al descontar más fuertemente los flujos futuros, los daños o beneficios que sufrirán las generaciones venideras pesan menos en el cálculo presente."
},
{
  id:97, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"A",
  pTitle:"La Teoría del Apego y sus Implicaciones para el Desarrollo",
  passage:"John Bowlby propuso que los seres humanos tienen una disposición biológica a formar vínculos afectivos estrechos con cuidadores primarios (apego) y que la calidad de esos vínculos en la infancia temprana tiene efectos duraderos sobre el desarrollo emocional y cognitivo. Mary Ainsworth identificó empíricamente tres patrones de apego: seguro (el niño usa al cuidador como base segura para explorar), ansioso-ambivalente (el niño no puede separarse del cuidador sin angustia intensa) y evitativo (el niño suprime las señales de necesidad de proximidad). La teoría del apego tiene implicaciones normativas para el diseño de entornos infantiles: los niños con apego seguro muestran mayor capacidad de autorregulación, exploración independiente y establecimiento de relaciones posteriores.",
  q:"¿Por qué el apego seguro, que implica que el niño pueda separarse del cuidador, es paradójicamente el tipo de apego más favorable para el desarrollo, según el texto?",
  opts:["Porque los niños con apego seguro aprenden a no depender emocionalmente de ningún adulto, lo que los hace más autónomos.","Porque la seguridad del vínculo proporciona una base desde la que el niño puede explorar con confianza, lo que potencia la autorregulación y las relaciones posteriores, no la independencia emocional total.","Porque Ainsworth demostró que los niños con apego seguro tienen mayor coeficiente intelectual que los de apego ansioso."],
  correct:1, expl:"La paradoja se resuelve en el texto: el apego seguro no significa ausencia de dependencia sino 'base segura para explorar'. La seguridad del vínculo (no su ausencia) es la condición de posibilidad de la exploración autónoma. El niño puede alejarse porque confía en que el cuidador estará al volver."
},
{
  id:98, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"D",
  pTitle:"Enfoques en la Psicología del Aprendizaje",
  passage:"Los principales enfoques en psicología del aprendizaje difieren en sus supuestos sobre cómo se produce el conocimiento, qué papel juegan el sujeto y el entorno, y qué procesos internos o externos son relevantes para explicar el cambio en la conducta o en las representaciones mentales.",
  q:"Relaciona cada enfoque con su supuesto central sobre el aprendizaje.",
  leftItems:["Conductismo","Cognitivismo","Constructivismo"],
  rightItems:["El aprendizaje es construcción activa de significado: el sujeto integra la nueva información con sus esquemas previos transformando ambos","El aprendizaje es cambio en la conducta observable producido por la asociación entre estímulos y respuestas reforzadas o extinguidas","El aprendizaje implica procesamiento, almacenamiento y recuperación de información en estructuras mentales internas no observables"],
  correctPairs:[[0,1],[1,2],[2,0]],
  expl:"Conductismo = cambio conductual por asociación estímulo-respuesta y refuerzo; Cognitivismo = procesamiento de información en estructuras mentales internas; Constructivismo = construcción activa de significado integrando nueva información con esquemas previos."
},
{
  id:99, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"B",
  pTitle:"Indicadores de Calidad en Investigación Cualitativa",
  passage:"La investigación cualitativa no puede evaluarse con los criterios de validez y confiabilidad propios de la investigación cuantitativa —que presuponen medición y replicabilidad— pero no carece de criterios de rigor. Lincoln y Guba propusieron cuatro criterios paralelos: credibilidad (equivalente a validez interna: ¿los hallazgos representan fielmente las perspectivas de los participantes?), transferibilidad (equivalente a validez externa: ¿en qué condiciones los hallazgos podrían aplicarse a otros contextos?), dependabilidad (equivalente a confiabilidad: ¿el proceso podría seguirse y auditarse por otro investigador?) y confirmabilidad (equivalente a objetividad: ¿los hallazgos reflejan los datos y no las interpretaciones sesgadas del investigador?). La estrategia central para la credibilidad es la triangulación y la revisión de los participantes (member checking).",
  q:"El criterio de transferibilidad en investigación cualitativa no equivale a generalización estadística porque no afirma que los hallazgos apliquen universalmente, sino que describe ________ bajo las cuales podrían ser relevantes en otros contextos.",
  opts:["los procedimientos de muestreo probabilístico","las condiciones o características del contexto estudiado","los instrumentos estadísticos utilizados para el análisis"],
  correct:1, expl:"El texto define transferibilidad como equivalente a validez externa, pero con una diferencia clave respecto a la generalización cuantitativa: no afirma universalidad sino describe condiciones contextuales. El lector decide si su contexto es suficientemente similar. 'Las condiciones o características del contexto' es la paráfrasis correcta."
},
{
  id:100, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"A",
  pTitle:"La Paradoja de Condorcet y la Imposibilidad de Arrow",
  passage:"La paradoja de Condorcet (1785) muestra que las preferencias colectivas pueden ser intransitivas aunque cada preferencia individual sea transitiva: si el votante 1 prefiere A>B>C, el votante 2 prefiere B>C>A y el votante 3 prefiere C>A>B, la mayoría prefiere A sobre B, B sobre C, pero también C sobre A —un ciclo sin ganador estable. Kenneth Arrow formalizó esta intuición en su teorema de la imposibilidad (1951): no existe ningún procedimiento de agregación de preferencias individuales que satisfaga simultáneamente cuatro condiciones razonables (no dictadura, unanimidad, independencia de alternativas irrelevantes y dominio irrestricto). El resultado implica que cualquier sistema de votación viola al menos una de estas condiciones.",
  q:"¿Cuál es la implicación más perturbadora del teorema de la imposibilidad de Arrow para la teoría democrática?",
  opts:["Que los sistemas electorales proporcionales son superiores a los mayoritarios en todos los contextos.","Que no existe ningún procedimiento de votación que pueda agregar preferencias individuales de forma simultáneamente racional, unánime, no dictatorial e independiente de alternativas irrelevantes, cuestionando la idea de una 'voluntad general' coherente.","Que la democracia directa produce mejores resultados que la representativa porque elimina la mediación parlamentaria."],
  correct:1, expl:"El teorema de Arrow no cuestiona la democracia como sistema político, sino su supuesto teórico: que existe un procedimiento racional para agregar preferencias individuales en una 'voluntad colectiva' coherente. El resultado de Arrow muestra que ese procedimiento ideal no existe, lo que tiene consecuencias profundas para la legitimación racional de las decisiones colectivas."
},
{
  id:101, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"C",
  pTitle:"Proceso de Elaboración de un Marco Teórico",
  passage:"El marco teórico de una investigación no es una revisión enciclopédica de la literatura sino una selección argumentada de los conceptos, teorías y estudios previos que son relevantes para la pregunta de investigación específica. Su construcción sigue una lógica acumulativa que va de lo más general a lo más específico.",
  q:"Ordena las etapas de la construcción del marco teórico en su secuencia lógica.",
  items:["Identificación de las brechas o debates no resueltos que justifican la investigación propia","Revisión y selección de los conceptos clave y las teorías que mejor iluminan el fenómeno estudiado","Discusión crítica de los estudios empíricos previos más directamente relacionados con la pregunta","Síntesis articulada que muestra cómo los conceptos, teorías y estudios se relacionan entre sí y con la pregunta"],
  correctOrder:[1,2,0,3],
  expl:"La secuencia lógica es: Selección de conceptos y teorías relevantes → Discusión de estudios empíricos previos → Identificación de brechas que justifican la investigación → Síntesis articulada que conecta todo con la pregunta de investigación propia."
},
{
  id:102, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"D",
  pTitle:"Fuentes del Derecho en el Sistema Jurídico Mexicano",
  passage:"El derecho se produce a través de distintas fuentes formales que tienen jerarquía y funciones diferenciadas en el sistema jurídico. Conocer esa jerarquía es indispensable para interpretar correctamente las normas aplicables a un caso.",
  q:"Relaciona cada fuente del derecho con su característica en el sistema jurídico mexicano.",
  leftItems:["Constitución Política","Jurisprudencia obligatoria","Reglamento administrativo"],
  rightItems:["Norma emitida por el Ejecutivo para detallar la aplicación de una ley; no puede contrariar ni ampliar la ley que reglamenta","Interpretación reiterada y obligatoria de las normas por los tribunales del Poder Judicial; complementa pero no crea derecho nuevo","Norma suprema que establece los derechos fundamentales, la organización del Estado y los principios que rigen el ordenamiento jurídico"],
  correctPairs:[[0,2],[1,1],[2,0]],
  expl:"Constitución = norma suprema, derechos y organización del Estado; Jurisprudencia obligatoria = interpretación reiterada que complementa sin crear; Reglamento = norma ejecutiva que detalla la ley sin contrariarla."
},

// ── 1.2 COMPRENSIÓN LECTORA – ÁMBITO LITERARIO (ids 103–114) ──

{
  id:103, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"A",
  pTitle:"El Narrador No Confiable",
  passage:"El narrador no confiable (unreliable narrator) es aquel cuya versión de los hechos el lector tiene razones para cuestionar: ya sea por limitaciones cognitivas (como el narrador infantil que no comprende lo que narra), por interés propio (el narrador que encubre su responsabilidad), por inestabilidad mental (el narrador cuya percepción de la realidad está distorsionada) o por ingenuidad moral (el narrador que no reconoce la gravedad ética de sus actos). Wayne Booth, quien acuñó el concepto, lo definió en relación con las normas del autor implícito: el narrador no es confiable cuando sus juicios, valores o reportes de hechos divergen significativamente de los del autor implícito, que el lector competente puede reconstruir. La ironía narrativa más sofisticada emerge precisamente de esa distancia entre lo que el narrador dice que ocurre y lo que el lector infiere que realmente ocurre.",
  q:"¿Por qué el narrador no confiable produce ironía narrativa, según el texto?",
  opts:["Porque el narrador usa explícitamente el lenguaje figurado para distanciar su discurso del relato de los hechos.","Porque existe una distancia entre lo que el narrador dice (y cree) que ocurre y lo que el lector, reconstruyendo las normas del autor implícito, infiere que realmente ocurre.","Porque el narrador no confiable siempre miente deliberadamente al lector para crear suspenso."],
  correct:1, expl:"El texto establece que la ironía emerge 'de esa distancia entre lo que el narrador dice que ocurre y lo que el lector infiere que realmente ocurre'. No es necesario que el narrador mienta deliberadamente; puede engañarse a sí mismo. La ironía nace del doble plano: lo que el narrador presenta y lo que el lector reconstruye."
},
{
  id:104, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"B",
  pTitle:"El Género Epistolar y la Ilusión de Inmediatez",
  passage:"La novela epistolar —construida a partir de cartas entre personajes— produce una ilusión particular de inmediatez y autenticidad: el lector parece acceder directamente a los pensamientos y emociones de los personajes sin la mediación de un narrador exterior. Esta ilusión depende de una paradoja: las cartas que leemos son ficciones que simulan la espontaneidad del pensamiento privado mediante un trabajo retórico altamente elaborado. Richardson, con Pamela (1740) y Clarissa (1748), explotó magistralmente la ambigüedad moral que produce el acceso único a la perspectiva de un personaje: el lector no tiene más información que la que ese personaje elige comunicar, lo que convierte la interpretación en un acto activo de reconstrucción de lo no dicho.",
  q:"Según el texto, la ilusión de autenticidad de la novela epistolar descansa en una paradoja: las cartas parecen espontáneas pero son en realidad ________ que simulan la inmediatez del pensamiento privado.",
  opts:["documentos históricos verificables","construcciones retóricas altamente elaboradas","transcripciones literales de la voz del personaje"],
  correct:1, expl:"El texto lo dice explícitamente: la ilusión de espontaneidad depende de 'un trabajo retórico altamente elaborado'. Las cartas no son espontáneas ni documentos históricos; son ficciones construidas que imitan la espontaneidad. 'Construcciones retóricas altamente elaboradas' es la paráfrasis exacta."
},
{
  id:105, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"A",
  pTitle:"Poética del Espacio (Bachelard)",
  passage:"Gaston Bachelard propuso en La poética del espacio (1957) que ciertos espacios íntimos —la casa, el nido, el rincón, el cajón— no son simplemente escenarios de la experiencia humana sino topografías del ser interior. La casa, leída fenomenológicamente, no es un objeto geométrico sino el primer universo del yo: sus rincones son el espacio de la ensoñación, sus altillos son la zona de los recuerdos elevados, su sótano es la región de los miedos irracionales. Para Bachelard, la poesía que trabaja el espacio íntimo no describe casas sino que construye el yo que las habita: el espacio poetizado es siempre espacio habitado, y habitar es siempre un acto ontológico antes que físico.",
  q:"¿Qué afirmación sobre la poética del espacio de Bachelard es incompatible con el texto?",
  opts:["El sótano de la casa corresponde simbólicamente a la zona de los miedos irracionales en el mundo interior del sujeto.","La poesía que trabaja el espacio íntimo tiene como función principal la descripción precisa de las dimensiones arquitectónicas de los lugares representados.","Para Bachelard, habitar un espacio es un acto ontológico antes que físico."],
  correct:1, expl:"El texto afirma explícitamente que la poesía que trabaja el espacio íntimo 'no describe casas sino que construye el yo que las habita'. Atribuirle como función la 'descripción precisa de dimensiones arquitectónicas' contradice directamente esa formulación: Bachelard se opone a la lectura geométrica del espacio poético."
},
{
  id:106, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"C",
  pTitle:"Desarrollo Histórico de la Novela Latinoamericana",
  passage:"La novela latinoamericana del siglo XX atravesó transformaciones radicales que la llevaron de la dependencia de modelos europeos a la conquista de una voz propia reconocida mundialmente. Sus etapas reflejan cambios en la relación entre literatura, nación e identidad.",
  q:"Ordena las etapas del desarrollo de la novela latinoamericana en secuencia cronológica.",
  items:["Boom latinoamericano: experimentación formal y proyección internacional (décadas 1960–70)","Novela regionalista y de la tierra: representación del paisaje y el conflicto social rural (décadas 1920–40)","Novela de la dictadura y postboom: registro del trauma político y diversificación temática (décadas 1970–90)","Modernismo y novela de costumbres: influencia europea y construcción de tipos nacionales (finales siglo XIX–1920)"],
  correctOrder:[3,1,0,2],
  expl:"La secuencia cronológica es: Modernismo y costumbrismo (fines s. XIX–1920) → Novela regionalista y de la tierra (1920–40) → Boom y experimentación formal (1960–70) → Novela de la dictadura y postboom (1970–90)."
},
{
  id:107, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"D",
  pTitle:"Figuras Retóricas y su Función en el Texto Literario",
  passage:"Las figuras retóricas no son ornamentos superficiales del lenguaje literario sino dispositivos que producen efectos semánticos, emocionales y cognitivos que el lenguaje denotativo no puede lograr. Su identificación es el primer paso del análisis literario, pero su interpretación requiere vincularlas con el sentido global del texto.",
  q:"Relaciona cada figura retórica con su mecanismo de funcionamiento.",
  leftItems:["Oxímoron","Sinécdoque","Anáfora"],
  rightItems:["Repetición de una misma palabra o estructura al inicio de enunciados consecutivos, produciendo énfasis y ritmo","Denominación de un todo por una de sus partes (o viceversa), produciendo condensación de significado","Unión de dos términos semánticamente contradictorios en una sola expresión, produciendo tensión significativa"],
  correctPairs:[[0,2],[1,1],[2,0]],
  expl:"Oxímoron = unión de contradictorios ('luz oscura'); Sinécdoque = parte por todo o todo por parte ('cuántas velas en el mar' por 'cuántos barcos'); Anáfora = repetición al inicio de enunciados para énfasis y ritmo."
},
{
  id:108, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"B",
  pTitle:"La Función del Prólogo en la Literatura",
  passage:"El prólogo es un paratexto —en la terminología de Gérard Genette— que establece un contrato de lectura con el lector antes de que comience el texto principal. Los prólogos cumplen funciones diversas según quién los escribe y en qué momento: el prólogo autorial original puede revelar la intención del autor o crear una distancia irónica entre autor y narrador; el prólogo alógrafo (escrito por otro) propone una interpretación del texto y crea una autoridad lectorial; el prólogo tardío del autor relee su propia obra desde la distancia temporal. Borges elevó el prólogo a género literario autónomo: sus prólogos son ensayos que no sirven al texto sino que lo transforman al proponer lecturas inesperadas y oblicuas.",
  q:"Según el texto, la innovación de Borges respecto al prólogo convencional consiste en que sus prólogos no sirven al texto principal como paratexto subordinado sino que lo ________, convirtiéndolo en un género literario independiente.",
  opts:["resumen y simplifican para el lector no especializado","transforman al proponer lecturas inesperadas que lo reinterpretan","anulan al proponer que el texto no necesita ser leído"],
  correct:1, expl:"El texto dice que los prólogos de Borges 'no sirven al texto sino que lo transforman al proponer lecturas inesperadas y oblicuas'. La opción B parafrasea esa transformación: los prólogos borgianos reinterpretan el texto en lugar de presentarlo o subordinarse a él."
},
{
  id:109, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"A",
  pTitle:"El Concepto de Verosimilitud en la Narrativa",
  passage:"La verosimilitud no es la verdad de lo narrado sino su coherencia interna con las leyes del mundo ficcional que el texto establece. Un relato fantástico puede ser perfectamente verosímil si lo sobrenatural se comporta con coherencia dentro de su propio sistema; una novela realista puede ser inverosímil si los personajes actúan de manera inconsistente con la psicología que el texto les atribuye. Aristóteles ya señaló en la Poética que la ficción debe representar 'lo que podría ocurrir' (lo verosímil y lo necesario) y no simplemente 'lo que ocurrió' (lo real contingente): por eso la poesía es más filosófica que la historia. La verosimilitud es, en última instancia, un pacto tácito entre el texto y el lector sobre las reglas del mundo representado.",
  q:"¿Qué implicación tiene la afirmación de Aristóteles de que 'la poesía es más filosófica que la historia'?",
  opts:["Que los poetas tienen mayor formación intelectual que los historiadores en la antigüedad griega.","Que la ficción, al representar 'lo que podría ocurrir' según leyes de necesidad y verosimilitud, revela verdades generales sobre la condición humana, mientras la historia solo registra hechos contingentes particulares.","Que la historia es una forma de poesía y debe evaluarse con criterios estéticos, no de verdad factual."],
  correct:1, expl:"El contraste que traza el texto es entre 'lo que podría ocurrir' (lo verosímil y necesario, que revela lo general) y 'lo que ocurrió' (lo real contingente, que solo registra lo particular). La filosofía busca lo general y necesario; por eso la poesía —que opera con lo verosímil— es más filosófica que la historia —que registra lo contingente."
},
{
  id:110, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"D",
  pTitle:"Generaciones Poéticas del Siglo XX en México",
  passage:"La poesía mexicana del siglo XX se articuló en generaciones y grupos que mantuvieron diálogos y rupturas con la tradición anterior y con las vanguardias internacionales. Cada generación respondió a su contexto histórico y cultural de manera distinta.",
  q:"Relaciona cada grupo o generación con su propuesta poética característica.",
  leftItems:["Los Contemporáneos (1920–1930)","Poesía en Voz Alta (1956)","La generación del 50 (Rosario Castellanos, Jaime Sabines)"],
  rightItems:["Renovación de la poesía mexicana con influencia de las vanguardias europeas y apertura cosmopolita, frente al nacionalismo posrevolucionario","Vuelta a la subjetividad, lo cotidiano y el cuerpo; distancia respecto al hermetismo y el cosmopolitismo de la generación anterior","Experimento teatral y performativo que buscó vincular la palabra poética con la voz, el cuerpo y el espacio escénico"],
  correctPairs:[[0,0],[1,2],[2,1]],
  expl:"Contemporáneos = apertura cosmopolita y vanguardias europeas frente al nacionalismo; Poesía en Voz Alta = experimento performativo de voz, cuerpo y espacio; Generación del 50 = subjetividad, cotidiano y cuerpo frente al hermetismo cosmopolita."
},
{
  id:111, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"B",
  pTitle:"La Autobiografía y el Pacto Autobiográfico",
  passage:"Philippe Lejeune definió el pacto autobiográfico como el compromiso implícito o explícito del autor de que el nombre propio del autor, el del narrador y el del protagonista son la misma persona: autor = narrador = personaje. Este pacto distingue la autobiografía de la novela autobiográfica, donde el autor puede guardar silencio o negar la identidad. La autobiografía no garantiza la verdad: el autobiógrafo puede equivocarse, olvidar o deformar el pasado. Lo que el pacto garantiza es una intención de verdad: el autor se compromete a decir lo que cree verdadero de su vida, aunque lo que crea pueda estar distorsionado. Por eso Lejeune llama al pacto autobiográfico 'un contrato de sinceridad', no de exactitud.",
  q:"Según Lejeune, el pacto autobiográfico no garantiza la exactitud de los hechos narrados sino la ________ del narrador, que se compromete a decir lo que cree verdadero aunque su memoria pueda deformarlo.",
  opts:["imparcialidad y la objetividad historiográfica","sinceridad o intención de verdad","creatividad y la originalidad literaria"],
  correct:1, expl:"El texto cita a Lejeune: el pacto autobiográfico es 'un contrato de sinceridad, no de exactitud'. El compromiso es con la intención de verdad (decir lo que se cree verdadero), no con la verdad factual verificable. 'Sinceridad o intención de verdad' parafrasea exactamente esa distinción."
},
{
  id:112, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"A",
  pTitle:"El Ensayo como Género del Pensamiento",
  passage:"Montaigne, quien acuñó la palabra 'ensayo' (essai: intento, prueba), concibió el género como el espacio del pensamiento que se piensa a sí mismo en el acto de escribir: no la exposición de ideas ya formadas sino la formación de ideas en la escritura. Esta característica hace del ensayo un género epistemológicamente radical: la verdad no precede al texto sino que emerge de él, provisionalmente y sin garantías. A diferencia del tratado —que parte de principios establecidos y deduce consecuencias— el ensayo parte de una experiencia, una pregunta o una paradoja y avanza por asociación, digresión y contradicción. La contradicción, en el ensayo, no es un defecto lógico: es la señal de que el pensamiento se está tomando en serio.",
  q:"¿En qué sentido el ensayo es 'epistemológicamente radical', según el texto?",
  opts:["Porque el ensayista siempre defiende posiciones políticas extremas que cuestionan el orden establecido.","Porque la verdad no precede al texto sino que emerge del proceso de escritura mismo, de forma provisional y sin garantías previas.","Porque el ensayo rechaza toda cita de autoridad y produce conocimiento exclusivamente desde la experiencia personal del autor."],
  correct:1, expl:"El texto dice que en el ensayo 'la verdad no precede al texto sino que emerge de él, provisionalmente y sin garantías'. Eso es la radicalidad epistemológica: invierte el orden habitual del conocimiento (primero la verdad, luego su exposición) y convierte la escritura en un proceso de descubrimiento sin resultado asegurado."
},
{
  id:113, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"C",
  pTitle:"Elementos del Análisis Narratológico",
  passage:"La narratología, desde Genette, analiza el relato a partir de la distinción entre historia (los eventos en su orden lógico y cronológico), discurso (la manera en que esos eventos se presentan en el texto) y narración (el acto de narrar en sí). El análisis narratológico examina las relaciones entre estos tres niveles.",
  q:"Ordena los niveles de análisis narratológico de Genette de más abstracto (la materia prima) a más concreto (el acto de producción).",
  items:["Narración: el acto de contar, con sus condiciones de producción y recepción","Historia: los eventos, personajes y espacios en su orden lógico-cronológico","Discurso: la organización textual de la historia con sus manipulaciones de orden, duración y frecuencia","Relato: el texto narrativo tal como aparece materializado en la página"],
  correctOrder:[1,2,3,0],
  expl:"La jerarquía de Genette va de lo más abstracto a lo más concreto: Historia (materia prima: eventos en orden lógico) → Discurso (organización textual: manipulaciones de orden, duración, frecuencia) → Relato (texto materializado) → Narración (acto de producción con sus condiciones)."
},
{
  id:114, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"D",
  pTitle:"Subgéneros de la Narrativa Fantástica",
  passage:"La narrativa fantástica comprende un conjunto de subgéneros que comparten el alejamiento de la realidad empírica ordinaria pero que difieren en el tipo de relación que establecen con esa realidad y en los efectos que buscan producir en el lector.",
  q:"Relaciona cada subgénero narrativo con su característica definitoria.",
  leftItems:["Ciencia ficción","Terror gótico","Maravilloso puro"],
  rightItems:["Mundos donde las leyes de la naturaleza son distintas desde el principio y el lector acepta esas reglas sin extrañamiento ni explicación racional","Atmósfera de amenaza sobrenatural o psicológica asociada a espacios decadentes, pasados que no terminan de morir y transgresiones de límites prohibidos","Extrapolación de tendencias científicas o tecnológicas actuales para explorar sus consecuencias en futuros posibles o alternativos"],
  correctPairs:[[0,2],[1,1],[2,0]],
  expl:"Ciencia ficción = extrapolación científico-tecnológica de futuros posibles; Terror gótico = amenaza sobrenatural en espacios decadentes, pasados que persisten; Maravilloso puro = mundo con reglas distintas aceptadas sin extrañamiento."
},

// ── 1.3 COMPRENSIÓN LECTORA – PARTICIPACIÓN SOCIAL (ids 115–120) ──

{
  id:115, sub:"1.3", label:"Comprensión lectora – Ámbito de participación social", fmt:"A",
  pTitle:"El Sistema Nacional Anticorrupción",
  passage:"El Sistema Nacional Anticorrupción (SNA), creado en México en 2016, es una instancia de coordinación entre autoridades de los tres órdenes de gobierno (federal, estatal y municipal) cuyo objetivo es establecer, articular y evaluar las políticas en materia de prevención, detección y sanción de faltas administrativas y hechos de corrupción. A diferencia del modelo anterior —centrado en la autofiscalización de las propias dependencias— el SNA introduce controles externos mediante el Comité de Participación Ciudadana (CPC), integrado por cinco ciudadanos independientes elegidos por su trayectoria en transparencia y combate a la corrupción. El CPC no tiene facultades sancionadoras pero puede emitir recomendaciones, solicitar información y hacer públicas sus evaluaciones, lo que le confiere un poder de escrutinio y presión ciudadana significativo.",
  q:"¿Cuál es la innovación institucional más relevante que introduce el SNA respecto al modelo anterior de fiscalización, según el texto?",
  opts:["Que el SNA centraliza todas las funciones anticorrupción en una sola dependencia federal para mayor eficiencia.","Que el SNA incorpora controles externos a través del Comité de Participación Ciudadana, rompiendo con la autofiscalización de las propias dependencias.","Que el SNA otorga al Poder Judicial la facultad exclusiva de sancionar las faltas administrativas."],
  correct:1, expl:"El texto contrasta explícitamente el modelo anterior ('autofiscalización de las propias dependencias') con la innovación del SNA ('controles externos mediante el CPC'). La incorporación de ciudadanos independientes con poder de escrutinio es la ruptura institucional central, no la centralización ni la judicialización."
},
{
  id:116, sub:"1.3", label:"Comprensión lectora – Ámbito de participación social", fmt:"B",
  pTitle:"Derechos Económicos, Sociales y Culturales (DESC)",
  passage:"Los derechos económicos, sociales y culturales (DESC) —derecho al trabajo, a la salud, a la educación, a la vivienda, a la alimentación— se distinguen de los derechos civiles y políticos clásicos en que su realización exige prestaciones positivas del Estado, no solo abstenciones. El Comité de Derechos Económicos, Sociales y Culturales de la ONU ha desarrollado el concepto de 'realización progresiva': los Estados no están obligados a garantizar inmediatamente el pleno ejercicio de todos los DESC, pero sí a avanzar 'de manera progresiva y efectiva' hacia ese objetivo utilizando 'el máximo de los recursos disponibles'. La realización progresiva no autoriza la regresión: los Estados no pueden retroceder deliberadamente en el nivel de protección de los DESC alcanzado sin demostrar que lo hacen con base en un análisis riguroso de todas las alternativas disponibles.",
  q:"Según el texto, la 'realización progresiva' de los DESC no implica que los Estados puedan postponer indefinidamente su cumplimiento, porque les impone la obligación de avanzar ________ hacia el pleno ejercicio usando el máximo de recursos disponibles.",
  opts:["discrecionalmente y sin plazos definidos","de manera efectiva y sin retroceeder deliberadamente","exclusivamente mediante legislación y no mediante políticas públicas"],
  correct:1, expl:"El texto establece dos condiciones de la realización progresiva: avanzar 'de manera progresiva y efectiva' y no retroceder (prohibición de regresión). 'De manera efectiva y sin retroceder deliberadamente' parafrasea ambas condiciones. La discrecionalidad sin plazos contradiría la obligación de efectividad."
},
{
  id:117, sub:"1.3", label:"Comprensión lectora – Ámbito de participación social", fmt:"D",
  pTitle:"Órganos del Sistema Electoral Mexicano",
  passage:"El sistema electoral mexicano está integrado por órganos con funciones diferenciadas que garantizan la organización, vigilancia y resolución de conflictos en los procesos electorales.",
  q:"Relaciona cada órgano con su función principal en el sistema electoral mexicano.",
  leftItems:["Instituto Nacional Electoral (INE)","Tribunal Electoral del Poder Judicial de la Federación (TEPJF)","Fiscalía Especializada en Delitos Electorales (FEDE)"],
  rightItems:["Investigación y persecución penal de conductas que constituyen delitos electorales conforme al Código Penal Federal","Organización de las elecciones federales y locales; fiscalización de partidos y registro de candidatos","Resolución de impugnaciones en materia electoral y protección de los derechos político-electorales de los ciudadanos"],
  correctPairs:[[0,1],[1,2],[2,0]],
  expl:"INE = organización electoral y fiscalización de partidos; TEPJF = resolución de impugnaciones y protección de derechos político-electorales; FEDE = investigación y persecución de delitos electorales."
},
{
  id:118, sub:"1.3", label:"Comprensión lectora – Ámbito de participación social", fmt:"A",
  pTitle:"Perspectiva de Género en las Políticas Públicas",
  passage:"La transversalización de la perspectiva de género (gender mainstreaming) es la estrategia adoptada en la Plataforma de Acción de Beijing (1995) y asumida por el gobierno mexicano: implica integrar el análisis de las desigualdades entre mujeres y hombres en todas las políticas, programas y presupuestos públicos, no solo en los programas específicos dirigidos a mujeres. La perspectiva de género no es sinónimo de 'hablar de mujeres' ni de añadir indicadores desagregados por sexo: exige identificar cómo las estructuras de género —la distribución desigual de trabajo, poder, tiempo y recursos entre hombres y mujeres— condicionan los objetivos, los resultados y los impactos de toda política pública, incluidas aquellas aparentemente neutras como la política fiscal o la infraestructura.",
  q:"¿Por qué la transversalización de la perspectiva de género va más allá de 'añadir indicadores desagregados por sexo', según el texto?",
  opts:["Porque la desagregación por sexo es técnicamente imposible en políticas de infraestructura y fiscales.","Porque la perspectiva de género exige analizar cómo las estructuras de poder y distribución desiguales condicionan los objetivos e impactos de toda política, no solo registrar diferencias numéricas entre hombres y mujeres.","Porque la perspectiva de género solo es aplicable a los programas de salud reproductiva y educación."],
  correct:1, expl:"El texto distingue la desagregación estadística (registrar diferencias) del análisis estructural (identificar cómo las estructuras de género condicionan toda política). La transversalización exige lo segundo: cuestionar los supuestos de 'neutralidad' de políticas que en realidad producen impactos diferenciados según el género."
},
{
  id:119, sub:"1.3", label:"Comprensión lectora – Ámbito de participación social", fmt:"C",
  pTitle:"Proceso de Elaboración del Presupuesto de Egresos",
  passage:"El proceso presupuestario en México sigue un ciclo anual que involucra tanto al Ejecutivo como al Legislativo en etapas con funciones y plazos constitucionalmente establecidos.",
  q:"Ordena las etapas del proceso presupuestario en México en su secuencia constitucional correcta.",
  items:["Aprobación por la Cámara de Diputados del Decreto de Presupuesto de Egresos","Publicación en el Diario Oficial de la Federación y ejecución por las dependencias","Elaboración del proyecto de Presupuesto de Egresos por la SHCP con base en el Plan Nacional de Desarrollo","Presentación del proyecto por el Ejecutivo a la Cámara de Diputados a más tardar el 8 de septiembre"],
  correctOrder:[2,3,0,1],
  expl:"El ciclo presupuestario es: Elaboración del proyecto por la SHCP → Presentación a la Cámara de Diputados (máximo 8 de sept.) → Aprobación por la Cámara de Diputados → Publicación en el DOF y ejecución por las dependencias."
},
{
  id:120, sub:"1.3", label:"Comprensión lectora – Ámbito de participación social", fmt:"B",
  pTitle:"El Principio Pro Persona en el Derecho Mexicano",
  passage:"El artículo 1° de la Constitución mexicana, reformado en 2011, establece que las normas relativas a los derechos humanos se interpretarán de conformidad con la Constitución y con los tratados internacionales de la materia, 'favoreciendo en todo tiempo a las personas la protección más amplia'. Este principio, conocido como pro persona o pro homine, obliga a las autoridades a aplicar, de entre las normas que protejan un derecho, aquella que otorgue mayor protección a la persona; y a interpretar extensivamente las normas que amplían derechos, de manera restrictiva las que los limitan. La reforma de 2011 también incorporó el bloque de constitucionalidad: los tratados internacionales en materia de derechos humanos tienen rango constitucional, no meramente legal.",
  q:"Según el texto, el principio pro persona obliga a las autoridades a aplicar, cuando existen varias normas aplicables, aquella que ________, interpretando extensivamente las que amplían derechos y restrictivamente las que los limitan.",
  opts:["fue emitida más recientemente en el tiempo","otorgue la mayor protección a la persona","proviene del orden jurídico internacional sobre el nacional"],
  correct:1, expl:"El texto define el principio pro persona como la obligación de aplicar 'aquella que otorgue mayor protección a la persona', con independencia de si es más reciente o de qué orden jurídico proviene. El criterio es la amplitud de la protección, no la jerarquía formal ni la temporalidad."
},

// ── 2.1 REDACCIÓN INDIRECTA – ÁMBITO DE ESTUDIO (ids 121–135) ──

{
  id:121, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"A",
  pTitle:"El Uso del Punto y Coma",
  passage:"El punto y coma señala una pausa mayor que la coma pero menor que el punto. Sus usos principales son: separar elementos de una enumeración cuando estos ya contienen comas internas ('Los participantes provenían de Sonora, México; Jalisco, México; y Buenos Aires, Argentina'); articular oraciones yuxtapuestas con cierta autonomía sintáctica cuando se quiere marcar relación sin usar un conector explícito ('El presupuesto fue aprobado; la ejecución comenzará en enero'); y separar los grupos sintácticos de una enumeración larga y compleja. Un uso frecuentemente incorrecto es colocar punto y coma antes de conjunciones coordinantes como 'pero', 'sin embargo' o 'aunque' cuando lo que sigue es una oración con sujeto propio; en ese caso corresponde punto o coma, no punto y coma.",
  q:"¿En cuál de los siguientes casos está correctamente empleado el punto y coma?",
  opts:["La propuesta fue presentada a tiempo; pero el comité decidió posponer la votación.","Los evaluadores identificaron tres problemas: falta de coherencia interna, ausencia de evidencia empírica; y exceso de citas textuales sin análisis.","El diagnóstico fue contundente; las recomendaciones, en cambio, resultaron vagas e imprecisas."],
  correct:2, expl:"La opción C usa el punto y coma correctamente para articular dos oraciones con autonomía sintáctica cuya relación de contraste se marca sin conector explícito. La opción A coloca punto y coma antes de 'pero', que introduce oración con sujeto propio: corresponde coma. La opción B lo usa en una enumeración que no tiene comas internas que justifiquen la separación por punto y coma."
},
{
  id:122, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"B",
  pTitle:"La Inferencia Abductiva en el Texto Académico",
  passage:"La inferencia abductiva —propuesta por C.S. Peirce como el tercer tipo de razonamiento junto a la deducción y la inducción— consiste en postular la hipótesis explicativa más plausible para un conjunto de observaciones sorprendentes. Mientras la deducción parte de una regla y un caso para concluir un resultado, y la inducción parte de casos y resultados para inferir una regla, la abducción parte de un resultado sorprendente y una regla plausible para postular el caso que lo explicaría. En el texto académico, la abducción aparece en la sección de discusión cuando el investigador propone explicaciones para sus hallazgos: no demuestra que su explicación sea verdadera (eso requeriría más evidencia) sino que es la más económica y plausible disponible.",
  q:"Según el texto, lo que distingue la abducción de la deducción y la inducción es que la abducción parte de un resultado ________ para postular la hipótesis explicativa más plausible.",
  opts:["esperado y confirmado por la teoría dominante","sorprendente o inesperado que requiere explicación","estadísticamente representativo de la población"],
  correct:1, expl:"El texto define la abducción como el razonamiento que 'parte de un resultado sorprendente' para postular la hipótesis que lo explique. Lo que dispara la abducción es precisamente la anomalía, la observación inesperada que no encaja en lo previsto. Las otras opciones describen la deducción (resultado esperado) y la inducción (resultados estadísticos)."
},
{
  id:123, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"D",
  pTitle:"Sistemas de Citación en la Escritura Académica",
  passage:"Los sistemas de citación son convenciones que permiten identificar las fuentes utilizadas y dar crédito al trabajo de otros investigadores. Cada sistema tiene una lógica formal diferente que responde a las tradiciones disciplinares de los campos que los adoptaron.",
  q:"Relaciona cada sistema de citación con su campo disciplinar y su lógica formal.",
  leftItems:["APA (American Psychological Association)","MLA (Modern Language Association)","Chicago (notas al pie + bibliografía)"],
  rightItems:["Humanidades (literatura, historia cultural): cita en el texto con autor y página entre paréntesis; énfasis en el texto como objeto de estudio","Ciencias sociales, educación y psicología: cita en el texto con autor, año y página; énfasis en la fecha por la relevancia de la actualidad del dato","Historia, derecho, algunas humanidades: notas a pie de página o notas finales con referencias completas; permite comentario extendido en nota"],
  correctPairs:[[0,1],[1,0],[2,2]],
  expl:"APA = ciencias sociales y psicología, cita (autor, año) con énfasis en actualidad; MLA = humanidades, cita (autor, página) con énfasis en el texto; Chicago = historia y derecho, notas a pie con referencias completas y posibilidad de comentario."
},
{
  id:124, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"C",
  pTitle:"Etapas de la Escritura Académica como Proceso",
  passage:"La escritura académica no es un acto sino un proceso que atraviesa fases con lógicas distintas. Tratarlas como una sola actividad continua es una de las causas más frecuentes de bloqueo y baja calidad en los textos académicos.",
  q:"Ordena las etapas del proceso de escritura académica en su secuencia correcta.",
  items:["Revisión macro: coherencia global, estructura argumentativa y adecuación al propósito","Preescritura: delimitación del problema, revisión de literatura, construcción del argumento central","Edición final: corrección lingüística, formato y preparación para entrega","Escritura del borrador: desarrollo de las ideas en texto continuo sin autocensura"],
  correctOrder:[1,3,0,2],
  expl:"La secuencia del proceso de escritura es: Preescritura (delimitar, revisar literatura, construir argumento) → Borrador (escribir sin autocensura) → Revisión macro (coherencia y estructura) → Edición final (corrección lingüística y formato)."
},
{
  id:125, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"A",
  pTitle:"El Uso de 'Deber' vs. 'Deber de'",
  passage:"En español normativo, 'deber' seguido de infinitivo expresa obligación: 'Los participantes deben presentar su credencial'. 'Deber de' seguido de infinitivo expresa probabilidad o suposición: 'Deben de ser las tres de la tarde' (= probablemente son las tres). La confusión entre ambas construcciones es frecuente en el registro escrito formal: usar 'deber de' cuando se quiere expresar obligación produce ambigüedad o cambia el sentido de la norma. En documentos normativos, la distinción es especialmente relevante: 'Los servidores públicos deben presentar su declaración' establece una obligación; 'Los servidores públicos deben de presentar su declaración' implica solo que probablemente lo harán, no que están obligados.",
  q:"En un reglamento que pretende establecer una obligación, ¿cuál de los siguientes enunciados usa correctamente la distinción entre 'deber' y 'deber de'?",
  opts:["Los funcionarios deben de informar cualquier conflicto de interés a la Unidad de Ética dentro de las 48 horas siguientes a su conocimiento.","Los funcionarios deben informar cualquier conflicto de interés a la Unidad de Ética dentro de las 48 horas siguientes a su conocimiento.","Ambas formas son equivalentes en el registro formal escrito y pueden usarse indistintamente."],
  correct:1, expl:"La opción B usa 'deben' (sin 'de'), que según el texto expresa obligación: la forma correcta para un reglamento. La opción A usa 'deben de', que expresa probabilidad o suposición, no obligación, lo que anularía el carácter normativo del enunciado. La opción C es incorrecta porque el texto establece explícitamente que las dos construcciones no son equivalentes."
},
{
  id:126, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"B",
  pTitle:"La Argumentación por Analogía en Textos Académicos",
  passage:"La argumentación por analogía establece que, dado que dos casos son similares en características relevantes, lo que es verdadero de uno probablemente es verdadero del otro. La analogía es heurísticamente poderosa —permite transferir conocimiento de un dominio bien estudiado a uno menos conocido— pero lógicamente débil: su fuerza depende de la relevancia de las similitudes comparadas y de la ausencia de diferencias relevantes que invaliden la transferencia. Una analogía puede ser iluminadora sin ser conclusiva. En el texto académico, la analogía debe usarse como recurso explicativo o generador de hipótesis, no como evidencia definitiva; quien la usa debe reconocer sus límites y señalar en qué punto las diferencias entre los casos comparados pueden limitar la transferencia.",
  q:"Según el texto, la argumentación por analogía es heurísticamente valiosa pero lógicamente limitada porque su validez depende de que las similitudes entre los casos comparados sean ________ y que no existan diferencias relevantes que invaliden la transferencia.",
  opts:["numerosas y fácilmente verificables","pertinentes o relevantes al aspecto que se transfiere","reconocidas por la comunidad académica del campo"],
  correct:1, expl:"El texto señala que la fuerza de la analogía depende de 'la relevancia de las similitudes comparadas'. No es suficiente que haya muchas similitudes ni que sean conocidas: deben ser relevantes para el aspecto que se transfiere. 'Pertinentes o relevantes al aspecto que se transfiere' es la paráfrasis correcta."
},
{
  id:127, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"A",
  pTitle:"El Dequeísmo y el Queísmo",
  passage:"El dequeísmo es el uso incorrecto de la preposición 'de' ante la conjunción 'que' en contextos en que no es requerida por el verbo o la locución: '*Pienso de que es necesaria una revisión' (correcto: 'Pienso que'). El queísmo es el fenómeno inverso: omitir la preposición que el verbo o locución exige ante 'que': '*Estoy segura que vendrá' (correcto: 'Estoy segura de que vendrá'). La prueba para determinar cuál es la forma correcta consiste en sustituir la cláusula 'que + oración' por el pronombre demostrativo 'eso': si la construcción admite la preposición con 'eso' ('Estoy segura de eso'), también la requiere ante 'que'; si no la admite ('*Pienso de eso'), tampoco se usa ante 'que'.",
  q:"Aplicando la prueba descrita en el texto, ¿cuál de los siguientes enunciados es correcto?",
  opts:["La coordinadora insistió de que el plazo debía respetarse.","El dictamen da cuenta de que los procedimientos no fueron seguidos.","El comité acordó de que se revisaría el protocolo en la siguiente sesión."],
  correct:1, expl:"Para la opción B: 'el dictamen da cuenta de eso' es correcto (el verbo 'dar cuenta' rige 'de'), por lo que también requiere 'de que': correcto. Para A: '*insistir de eso' es incorrecto (se dice 'insistir en eso'), por lo que 'insistió de que' es dequeísmo. Para C: '*acordar de eso' es incorrecto (se dice 'acordar eso'), por lo que 'acordó de que' es dequeísmo."
},
{
  id:128, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"C",
  pTitle:"Estructura de la Sección de Discusión en un Artículo Científico",
  passage:"La sección de Discusión es la más exigente del artículo científico porque requiere que el investigador interprete sus resultados, los contraste con la literatura previa y extraiga implicaciones. Su estructura interna sigue una lógica argumentativa específica.",
  q:"Ordena los elementos de la sección de Discusión en su secuencia argumentativa correcta.",
  items:["Implicaciones teóricas o prácticas y líneas de investigación futura","Síntesis del hallazgo principal en relación con la pregunta de investigación","Contraste con estudios previos: convergencias, divergencias y explicaciones posibles","Limitaciones del estudio y precauciones para la interpretación"],
  correctOrder:[1,2,3,0],
  expl:"La secuencia de la Discusión es: Síntesis del hallazgo principal (respuesta a la pregunta) → Contraste con literatura previa (dónde coincide y dónde diverge) → Limitaciones y precauciones interpretativas → Implicaciones y líneas futuras. Las limitaciones van antes de las implicaciones para contextualizar su alcance."
},
{
  id:129, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"D",
  pTitle:"Modalidades de la Definición en el Texto Académico",
  passage:"El texto académico recurre a distintas modalidades de definición según el propósito comunicativo, la audiencia y el nivel de precisión requerido. Elegir la modalidad adecuada es parte de la competencia retórica del escritor académico.",
  q:"Relaciona cada modalidad de definición con su función y ejemplo característico.",
  leftItems:["Definición ostensiva","Definición operacional","Definición por género próximo y diferencia específica"],
  rightItems:["Define el término especificando el conjunto más amplio al que pertenece y la característica que lo distingue dentro de ese conjunto: 'La ironía es una figura retórica [género] que comunica lo contrario de lo que literalmente se dice [diferencia]'","Delimita el referente del concepto mediante ejemplos concretos o señalamiento directo, sin enunciar sus rasgos definitorios","Define el concepto especificando cómo se medirá o identificará empíricamente en la investigación: 'Por depresión se entenderá una puntuación ≥ 16 en el Inventario de Beck'"],
  correctPairs:[[0,1],[1,2],[2,0]],
  expl:"Ostensiva = por ejemplos o señalamiento directo; Operacional = cómo se medirá empíricamente (criterio de medición); Género próximo y diferencia específica = conjunto al que pertenece + lo que lo distingue dentro de ese conjunto."
},
{
  id:130, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"B",
  pTitle:"Uso Normativo del Gerundio Compuesto",
  passage:"El gerundio compuesto ('habiendo revisado', 'habiendo concluido') expresa una acción anterior y completada respecto al verbo principal de la oración: 'Habiendo revisado todos los expedientes, el comité emitió su resolución' (primero se revisaron los expedientes; luego se emitió la resolución). Su uso incorrecto más frecuente consiste en emplearlo para indicar una acción simultánea o posterior al verbo principal, funciones que corresponden al gerundio simple: '*Habiendo llegado al auditorio, el director saludó a los asistentes' debería ser 'Llegando al auditorio' si las acciones son simultáneas, o una oración coordinada si la llegada es la que desencadena el saludo.",
  q:"En la oración 'Habiendo recibido la notificación, la parte interesada tendrá 15 días para interponer recurso', el gerundio compuesto está bien empleado porque indica que recibir la notificación es una acción ________ al plazo para interponer el recurso.",
  opts:["simultánea y paralela","anterior y completada","posterior y condicionada"],
  correct:1, expl:"El texto define el gerundio compuesto como el que 'expresa una acción anterior y completada respecto al verbo principal'. En el enunciado, recibir la notificación es claramente anterior al cómputo del plazo de 15 días; eso justifica el gerundio compuesto."
},
{
  id:131, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"A",
  pTitle:"La Coherencia Global y la Progresión Temática",
  passage:"La progresión temática describe cómo avanza la información de una oración a la siguiente: cada oración tiene un tema (lo dado, lo conocido) y un rema (lo nuevo, lo que se predica del tema). Para que un texto sea coherente, los temas deben encadenarse de manera que cada oración tome como punto de partida información que la anterior introdujo. Los tres tipos principales de progresión son: lineal (el rema de la oración anterior se convierte en el tema de la siguiente), con tema constante (el mismo tema se mantiene a lo largo de varias oraciones con remas distintos) e hiperprogresión (cada oración desarrolla un tema distinto derivado de un hipertema general). La ausencia de progresión —repetir en el rema lo que ya se dijo en el tema— produce redundancia; el salto excesivo —introducir remas sin retomar como temas— produce incoherencia.",
  q:"¿Cuál de los siguientes fragmentos exhibe progresión temática lineal según la descripción del texto?",
  opts:["La reunión duró tres horas. La reunión abordó seis puntos del orden del día. La reunión concluyó con la aprobación de tres acuerdos.","El comité aprobó el presupuesto. El presupuesto será ejecutado por la Dirección de Finanzas. La Dirección de Finanzas informará trimestralmente de su avance.","La transparencia es un valor democrático. La democracia requiere también rendición de cuentas. La rendición de cuentas fortalece la confianza ciudadana."],
  correct:1, expl:"En la opción B: 'el presupuesto' (rema de la primera oración) se convierte en tema de la segunda; 'la Dirección de Finanzas' (rema de la segunda) se convierte en tema de la tercera. Es la definición exacta de progresión lineal. La opción A mantiene el mismo tema ('la reunión') en todas las oraciones: es progresión con tema constante. La opción C introduce hiperprogresión."
},
{
  id:132, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"D",
  pTitle:"Tipos de Conocimiento y su Expresión Lingüística",
  passage:"El registro académico diferencia con precisión el estatus epistémico de las afirmaciones: no todo lo que se dice en un texto tiene el mismo grado de certeza, y el uso correcto de los recursos de modalidad evidencial permite al lector calibrar con precisión el nivel de compromiso del autor con cada afirmación.",
  q:"Relaciona cada tipo de afirmación con el recurso lingüístico que le corresponde.",
  leftItems:["Certeza absoluta / hecho establecido","Probabilidad alta / hipótesis fuerte","Posibilidad o especulación / hipótesis débil"],
  rightItems:["Verbos de posibilidad o adverbios de baja certeza: 'podría', 'es posible que', 'cabe la posibilidad de'","Indicativo sin modalización: 'el fenómeno ocurre', 'los datos muestran', 'se ha demostrado que'","Verbos de alta probabilidad o adverbios modales: 'probablemente', 'es probable que', 'los datos sugieren que'"],
  correctPairs:[[0,1],[1,2],[2,0]],
  expl:"Certeza = indicativo sin modalización; Probabilidad alta = 'probablemente', 'es probable que', 'sugieren'; Posibilidad o especulación = 'podría', 'es posible que', 'cabe la posibilidad'."
},
{
  id:133, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"C",
  pTitle:"Proceso de Publicación de un Artículo Científico",
  passage:"La publicación de un artículo en una revista científica de arbitraje sigue un proceso riguroso que garantiza la calidad y la originalidad de los trabajos publicados.",
  q:"Ordena las etapas del proceso de publicación de un artículo en una revista arbitrada.",
  items:["Revisión y corrección por el autor según los comentarios del dictamen","Recepción del artículo por la revista y verificación de formato y anti-plagio","Publicación en la edición correspondiente (impresa o digital)","Envío del artículo a dos o más árbitros especialistas (peer review)"],
  correctOrder:[1,3,0,2],
  expl:"El proceso es: Recepción y verificación de formato/antiplagio → Envío a árbitros (peer review) → Revisión y corrección por el autor según dictamen → Publicación. Entre la revisión del autor y la publicación puede haber una segunda ronda de arbitraje, pero la secuencia mínima es la descrita."
},
{
  id:134, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"A",
  pTitle:"La Coma ante 'Que' Relativo",
  passage:"La presencia o ausencia de coma ante 'que' relativo cambia el tipo de oración subordinada y, con ello, el significado. Una oración de relativo especificativa (sin coma) restringe el referente del antecedente: 'Los estudiantes que aprobaron el examen recibirán su constancia' (solo los que aprobaron, no todos). Una oración de relativo explicativa (entre comas) agrega información no restrictiva sobre un referente ya identificado: 'Los estudiantes de posgrado, que ya aprobaron el examen, recibirán su constancia' (todos ellos, y se añade que ya aprobaron). El error más común es omitir las comas en una relativa explicativa, convirtiendo información no restrictiva en restricción, lo que altera el alcance de la afirmación.",
  q:"¿En cuál de los siguientes enunciados el uso o la ausencia de comas cambia el significado de manera que uno de ellos es incorrecto para la intención comunicativa descrita?",
  opts:["Si se quiere decir que todos los directivos, sin excepción, participaron en el taller, es incorrecto escribir: 'Los directivos que participaron en el taller firmaron el acta'.","Si se quiere restringir la firma a solo los directivos que asistieron al taller, es correcto escribir: 'Los directivos que participaron en el taller firmaron el acta'.","Si se quiere afirmar que el presupuesto fue aprobado por todos los miembros, es correcto escribir: 'Los miembros del consejo, que aprobaron el presupuesto, firmaron el convenio'."],
  correct:0, expl:"La opción A describe correctamente un error: si la intención es referirse a todos los directivos sin excepción, la oración de relativo debe ser explicativa (con comas): 'Los directivos, que participaron en el taller, firmaron el acta'. Sin comas, la oración es especificativa y restringe la firma solo a quienes participaron, lo que contradice la intención comunicativa descrita."
},
{
  id:135, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"B",
  pTitle:"El Párrafo de Introducción en un Ensayo Académico",
  passage:"El párrafo de introducción de un ensayo académico cumple tres funciones simultáneas que deben estar presentes aunque no necesariamente en ese orden: contextualización (situar el tema en su campo y en el debate académico pertinente), planteamiento del problema o pregunta que el ensayo abordará, y anticipación de la tesis o argumento central que se defenderá. La tesis debe ser una afirmación argumentable —no un hecho indiscutible ni una pregunta abierta— que pueda respaldarse con evidencia y que alguien razonablemente podría disputar. Una introducción que solo describe el tema sin plantear un problema ni anticipar una posición es en realidad un resumen, no una introducción argumentativa.",
  q:"Según el texto, la tesis en el párrafo de introducción académica debe ser una afirmación argumentable, lo que significa que debe ser susceptible de ________ y poder respaldarse con evidencia.",
  opts:["acuerdo universal por parte de la comunidad académica","disputa razonada por parte de quien lea el ensayo","verificación estadística mediante datos cuantitativos"],
  correct:1, expl:"El texto dice que la tesis es 'una afirmación argumentable... que alguien razonablemente podría disputar'. 'Disputa razonada por parte del lector' parafrasea ese criterio: si nadie pudiera discutirla, no es una tesis sino un hecho o una trivialidad. La argumentabilidad implica la posibilidad de desacuerdo razonado."
},

// ── 2.2 REDACCIÓN INDIRECTA – PARTICIPACIÓN SOCIAL (ids 136–150) ──

{
  id:136, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"A",
  pTitle:"Redacción de la Parte Considerativa en Resoluciones",
  passage:"La parte considerativa (o 'considerandos') de una resolución administrativa es el núcleo argumentativo del documento: es donde la autoridad expone los hechos probados, el fundamento normativo aplicable y el razonamiento que lleva de los hechos y el derecho a la resolución. Su estructura lógica sigue el esquema del silogismo jurídico: premisa mayor (la norma), premisa menor (los hechos probados que se subsumen en la norma) y conclusión (la consecuencia jurídica). Una parte considerativa correcta debe ser suficiente para que cualquier lector entienda por qué se resuelve lo que se resuelve, sin necesidad de conocer los antecedentes del caso. La motivación insuficiente —considerandos que no explican el razonamiento sino que simplemente enuncian el resultado— es una causa de nulidad en el derecho administrativo mexicano.",
  q:"¿Por qué la motivación insuficiente en los considerandos es una causa de nulidad en derecho administrativo, según la lógica del texto?",
  opts:["Porque los reglamentos administrativos exigen un número mínimo de páginas para la parte considerativa.","Porque sin una exposición suficiente del razonamiento que conecta hechos, norma y resolución, el afectado no puede conocer las razones de la decisión ni ejercer efectivamente su derecho a impugnarla.","Porque el silogismo jurídico exige que la premisa mayor sea siempre el artículo constitucional correspondiente."],
  correct:1, expl:"Aunque el texto no lo dice explícitamente, la lógica se infiere: si la parte considerativa debe permitir 'que cualquier lector entienda por qué se resuelve lo que se resuelve', su ausencia o insuficiencia impide al afectado conocer las razones de la decisión. Sin conocer las razones, no puede impugnarla eficazmente: eso vulnera su derecho a la defensa, lo que justifica la nulidad."
},
{
  id:137, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"B",
  pTitle:"El Lenguaje de los Derechos en Comunicación Gubernamental",
  passage:"La comunicación gubernamental sobre derechos ciudadanos debe equilibrar dos exigencias que a menudo están en tensión: la precisión jurídica (usar los términos técnicos correctos para describir los derechos y sus alcances) y la accesibilidad (que el ciudadano no especializado comprenda qué derechos tiene y cómo ejercerlos). Una comunicación que solo usa tecnicismos jurídicos puede ser precisísima pero resultar inaccesible para su destinatario; una que simplifica en exceso puede omitir requisitos o condiciones que cambian el alcance real del derecho. La solución técnica recomendada es la glosa explicativa: usar el término técnico correcto seguido de una explicación en lenguaje llano entre comas o entre paréntesis.",
  q:"La glosa explicativa, como técnica de comunicación de derechos, resuelve la tensión entre precisión y accesibilidad porque usa el término técnico correcto seguido de ________ entre paréntesis o comas.",
  opts:["la cita normativa completa del artículo correspondiente","una explicación en lenguaje llano comprensible para el ciudadano no especializado","la traducción al inglés del concepto jurídico"],
  correct:1, expl:"El texto define la glosa explicativa como: 'el término técnico correcto seguido de una explicación en lenguaje llano'. 'Explicación en lenguaje llano comprensible para el ciudadano no especializado' es la paráfrasis directa de esa definición."
},
{
  id:138, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"C",
  pTitle:"Estructura del Proyecto de Iniciativa Ciudadana",
  passage:"La iniciativa ciudadana es el mecanismo por el cual la ciudadanía puede presentar proyectos de ley ante el Congreso. El documento debe seguir una estructura que facilite su evaluación legislativa.",
  q:"Ordena las secciones de un proyecto de iniciativa ciudadana en su secuencia estructural correcta.",
  items:["Articulado: texto normativo propuesto con su estructura de artículos y transitorios","Exposición de motivos: justificación de la necesidad y oportunidad de la reforma propuesta","Firmas de los ciudadanos en el porcentaje constitucional requerido","Fundamento constitucional y legal que habilita la iniciativa"],
  correctOrder:[1,3,0,2],
  expl:"La secuencia de una iniciativa ciudadana es: Exposición de motivos (justificación de la propuesta) → Fundamento constitucional y legal → Articulado (texto normativo propuesto) → Firmas ciudadanas. Las firmas van al final como respaldo de la legitimidad ciudadana."
},
{
  id:139, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"D",
  pTitle:"Vicios del Lenguaje Burocrático",
  passage:"El lenguaje burocrático ha desarrollado una serie de vicios estilísticos que oscurecen el mensaje y dificultan la comprensión ciudadana. Identificarlos es el primer paso para corregirlos en la redacción de documentos de gobierno.",
  q:"Relaciona cada vicio del lenguaje burocrático con su descripción y ejemplo.",
  leftItems:["Pleonasmo","Perífrasis verbal innecesaria","Sustantivación excesiva"],
  rightItems:["Reemplazar un verbo simple por una construcción de verbo + sustantivo que expresa lo mismo: 'hacer uso de' en lugar de 'usar'","Acumulación de sustantivos abstractos que reemplaza predicaciones simples: 'la realización de la implementación del proceso de evaluación' en lugar de 'evaluar'","Combinación de dos palabras que dicen lo mismo, produciéndose una redundancia: 'período de tiempo', 'prever de antemano'"],
  correctPairs:[[0,2],[1,0],[2,1]],
  expl:"Pleonasmo = redundancia ('período de tiempo', 'prever de antemano'); Perífrasis verbal innecesaria = verbo + sustantivo redundante ('hacer uso de' = 'usar'); Sustantivación excesiva = cadena de sustantivos abstractos que oscurece predicaciones simples."
},
{
  id:140, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"A",
  pTitle:"La Estructura del Convenio de Colaboración Interinstitucional",
  passage:"El convenio de colaboración interinstitucional es el acto jurídico mediante el cual dos o más entidades públicas acuerdan coordinar acciones, compartir recursos o delegar funciones para el cumplimiento de un objetivo común. Su estructura mínima incluye: preámbulo con la identificación de las partes y sus representantes legales, declaraciones (la capacidad jurídica de cada parte y el fundamento normativo que habilita la colaboración), cláusulas del objeto (qué se acuerda), obligaciones de cada parte, vigencia y causas de terminación anticipada, y firmas. Las cláusulas deben redactarse en lenguaje deóntico preciso: usar 'se compromete a', 'deberá' o 'tendrá a su cargo' para obligaciones; 'podrá' para facultades; nunca usar 'intentará' o 'buscará' para obligaciones porque esas expresiones convierten la obligación en mera aspiración.",
  q:"¿Por qué usar 'intentará' o 'buscará' en las cláusulas de obligaciones de un convenio es un error jurídico, según el texto?",
  opts:["Porque esos verbos son coloquiales y están proscritos en el registro jurídico formal por la RAE.","Porque 'intentará' y 'buscará' expresan aspiración o esfuerzo sin comprometer un resultado, convirtiendo lo que debería ser una obligación exigible en una declaración de intenciones.","Porque el derecho administrativo mexicano prohíbe el uso del tiempo futuro en convenios interinstitucionales."],
  correct:1, expl:"El texto dice que 'intentará' o 'buscará' 'convierten la obligación en mera aspiración'. La razón es semántica y jurídica: esos verbos expresan esfuerzo sin comprometer resultado, de modo que la parte podría no cumplir alegando que 'intentó'. Una obligación jurídicamente exigible requiere un compromiso de resultado, no de intención."
},
{
  id:141, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"B",
  pTitle:"El Informe de Gobierno y su Función de Rendición de Cuentas",
  passage:"El informe de gobierno es el documento mediante el cual el titular del Ejecutivo —federal, estatal o municipal— rinde cuentas a la ciudadanía y al Legislativo sobre el cumplimiento del programa de trabajo del período. Su función constitucional va más allá de la comunicación política: es un instrumento de evaluación del desempeño gubernamental que debe permitir verificar el avance en los indicadores de los programas, el ejercicio del presupuesto y el cumplimiento de los compromisos asumidos. Un informe de gobierno que solo reporta actividades realizadas sin relacionarlas con las metas e indicadores previamente establecidos es informativo pero no evaluable; no permite determinar si el gobierno cumplió o no sus compromisos.",
  q:"Según el texto, un informe de gobierno que solo lista actividades realizadas sin vincularlas con las metas e indicadores previamente establecidos es deficiente porque no permite ________ del cumplimiento de los compromisos gubernamentales.",
  opts:["la difusión mediática y la comunicación política","la verificación y evaluación","la redacción de comunicados de prensa"],
  correct:1, expl:"El texto dice que el informe debe 'permitir verificar el avance en indicadores, el ejercicio del presupuesto y el cumplimiento de compromisos' y que sin esa vinculación 'no permite determinar si el gobierno cumplió'. La función que se pierde es la 'verificación y evaluación', que es la función constitucional del informe más allá de la comunicación política."
},
{
  id:142, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"D",
  pTitle:"Tipos de Normas en el Sistema Jurídico Mexicano",
  passage:"El sistema jurídico mexicano se estructura jerárquicamente. Las normas de distintos niveles tienen relaciones de subordinación y complementariedad que determinan cuál prevalece en caso de conflicto.",
  q:"Relaciona cada tipo de norma con su posición jerárquica y emisor.",
  leftItems:["Ley orgánica","Norma oficial mexicana (NOM)","Lineamiento administrativo"],
  rightItems:["Regla técnica obligatoria emitida por una dependencia con competencia en la materia, que especifica características, métodos o procedimientos para bienes, servicios o procesos","Instrucción interna de una dependencia que detalla cómo ejecutar una política o programa; tiene alcance limitado al interior de la institución","Ley que regula la organización, competencias y funcionamiento de una dependencia o entidad del Estado; requiere aprobación del Congreso"],
  correctPairs:[[0,2],[1,0],[2,1]],
  expl:"Ley orgánica = regula organización de una dependencia, emitida por el Congreso; NOM = regla técnica obligatoria emitida por dependencia competente; Lineamiento administrativo = instrucción interna de alcance institucional."
},
{
  id:143, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"A",
  pTitle:"La Transición entre Partes en un Documento Oficial",
  passage:"Los documentos oficiales extensos (resoluciones, dictámenes, informes de auditoría) se articulan en partes con funciones distintas: antecedentes, considerandos y puntos resolutivos. La transición entre partes requiere marcadores discursivos que señalen al lector que el tipo de contenido está cambiando: de la descripción de hechos (antecedentes) al análisis jurídico (considerandos), y del análisis jurídico a la decisión (resolutivos). El uso correcto de esos marcadores no es un requisito formal menor: ayuda al lector a entender la función argumentativa de cada sección y facilita la impugnación si el afectado considera que el razonamiento es incorrecto.",
  q:"¿Por qué el uso correcto de marcadores discursivos en la transición entre partes de un documento oficial tiene una dimensión jurídica, según el texto?",
  opts:["Porque los reglamentos de estilo de la Secretaría de la Función Pública exigen marcadores específicos en cada transición.","Porque facilita que el afectado identifique la función argumentativa de cada sección, lo que le permite ejercer su derecho a impugnar si considera que el razonamiento es incorrecto.","Porque sin marcadores discursivos el documento no puede ser firmado por el titular de la dependencia."],
  correct:1, expl:"El texto argumenta que los marcadores 'ayudan al lector a entender la función argumentativa de cada sección y facilitan la impugnación'. La dimensión jurídica es que sin esa claridad estructural, el afectado no puede identificar qué parte del razonamiento impugnar; los marcadores son condición de posibilidad del ejercicio del derecho a la defensa."
},
{
  id:144, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"C",
  pTitle:"Proceso de Atención de una Solicitud de Información Pública",
  passage:"El procedimiento para atender una solicitud de acceso a la información pública está regulado por la Ley General de Transparencia y Acceso a la Información Pública, que establece plazos y pasos específicos para garantizar el derecho del solicitante.",
  q:"Ordena las etapas del procedimiento de atención de una solicitud de información pública en su secuencia legal correcta.",
  items:["Clasificación de la información como pública, reservada o confidencial por el área responsable","Notificación de la respuesta al solicitante dentro del plazo legal","Recepción de la solicitud y asignación de folio por la Unidad de Transparencia","Búsqueda y localización de la información en las áreas responsables de la dependencia"],
  correctOrder:[2,3,0,1],
  expl:"La secuencia legal es: Recepción y asignación de folio por la Unidad de Transparencia → Búsqueda y localización en las áreas → Clasificación de la información (pública, reservada o confidencial) → Notificación de la respuesta al solicitante dentro del plazo."
},
{
  id:145, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"B",
  pTitle:"Redacción de Objetivos en Documentos de Planeación",
  passage:"Un objetivo bien redactado en un documento de planeación institucional debe cumplir los criterios SMART: Específico (describe claramente qué se quiere lograr), Medible (incluye indicadores que permiten verificar el cumplimiento), Alcanzable (es realizable con los recursos disponibles), Relevante (responde a una necesidad identificada) y Temporal (establece un plazo). Un objetivo como 'mejorar la atención ciudadana' no cumple ninguno de estos criterios: no especifica qué aspecto de la atención, no establece indicador de medición, no fija plazo ni nivel de logro esperado. Un objetivo como 'reducir el tiempo promedio de respuesta a solicitudes ciudadanas de 10 a 5 días hábiles durante el ejercicio 2025' cumple todos los criterios SMART.",
  q:"Según los criterios SMART del texto, ¿cuál de los siguientes objetivos está mejor redactado?",
  opts:["Fortalecer las capacidades institucionales del área de recursos humanos durante el próximo año.","Aumentar en un 20% el número de servidores públicos certificados en gobierno abierto mediante la impartición de 4 talleres virtuales antes del 31 de octubre de 2025.","Promover la cultura de la legalidad entre los servidores públicos de la dependencia."],
  correct:1, expl:"La opción B cumple todos los criterios SMART: específico (certificación en gobierno abierto), medible (20% más certificados), alcanzable (mediante 4 talleres virtuales, lo que lo hace concreto), relevante (responde a una necesidad de capacitación) y temporal (antes del 31 de octubre de 2025). Las opciones A y C carecen de indicadores, medidas concretas y plazos."
},
{
  id:146, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"A",
  pTitle:"El Acto Administrativo y sus Elementos de Validez",
  passage:"En el derecho administrativo mexicano, el acto administrativo es toda declaración unilateral de voluntad de la autoridad que produce efectos jurídicos individuales. Para ser válido, debe reunir ciertos elementos: competencia (la autoridad que lo emite debe tener atribuciones legales para hacerlo), objeto (la conducta, omisión o situación sobre la que recae debe ser física y jurídicamente posible), forma (debe constar por escrito con los requisitos legales), motivación (deben expresarse las razones de hecho que lo justifican) y fundamentación (deben citarse los preceptos legales aplicables). La ausencia de cualquiera de estos elementos produce la nulidad del acto; sin embargo, la nulidad por falta de fundamentación o motivación es la más frecuentemente declarada por los tribunales administrativos.",
  q:"¿Por qué la nulidad por falta de fundamentación o motivación es especialmente relevante, según se puede inferir del texto?",
  opts:["Porque la fundamentación y la motivación son los únicos elementos que el administrado puede verificar en el documento.","Porque sin ellas el administrado no puede conocer las razones jurídicas y de hecho de la decisión, lo que le impide ejercer eficazmente su derecho a impugnarla ante los tribunales.","Porque los tribunales administrativos son los únicos facultados para declararla y tienen mayor carga de trabajo que otros órganos."],
  correct:1, expl:"La inferencia lógica del texto es que la fundamentación (razones jurídicas) y la motivación (razones de hecho) son los elementos que permiten al afectado conocer las bases de la decisión. Sin conocerlas, no puede construir su impugnación. Por eso su ausencia es la nulidad más frecuente: afecta directamente el derecho de defensa, que es el más ejercido ante los tribunales."
},
{
  id:147, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"D",
  pTitle:"Instrumentos de Participación Ciudadana en la Gestión Pública",
  passage:"Además de los mecanismos de democracia directa (consulta, revocación, iniciativa), el gobierno mexicano cuenta con instrumentos de participación ciudadana en la gestión cotidiana que permiten a los ciudadanos incidir en el diseño, seguimiento y evaluación de políticas públicas.",
  q:"Relaciona cada instrumento de participación ciudadana con su función en la gestión pública.",
  leftItems:["Consejo consultivo ciudadano","Contraloría social","Presupuesto participativo"],
  rightItems:["Mecanismo por el cual la ciudadanía define directamente la asignación de una proporción del presupuesto público para proyectos de su comunidad","Órgano integrado por ciudadanos que asesora a la autoridad sobre políticas o programas pero cuyas recomendaciones no son vinculantes","Mecanismo de vigilancia social de programas públicos: ciudadanos organizados verifican que los recursos lleguen a los beneficiarios y que el programa opere conforme a sus reglas"],
  correctPairs:[[0,1],[1,2],[2,0]],
  expl:"Consejo consultivo = asesoría no vinculante de ciudadanos a la autoridad; Contraloría social = vigilancia ciudadana del ejercicio de programas; Presupuesto participativo = ciudadanos deciden directamente la asignación de recursos."
},
{
  id:148, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"B",
  pTitle:"El Uso de Tecnicismos en la Comunicación Institucional con la Ciudadanía",
  passage:"Los tecnicismos jurídicos y administrativos cumplen una función de precisión indispensable en los documentos internos de la administración pública; pero cuando los documentos van dirigidos a la ciudadanía en general, su uso sin explicación crea barreras de acceso que contradicen el principio constitucional de máxima publicidad y el derecho a la información. El criterio operativo es el del destinatario medio: ¿puede el ciudadano promedio, sin formación jurídica, entender el documento y actuar en consecuencia? Si la respuesta es negativa, el tecnicismo debe glosarse, parafrasearse o sustituirse por un equivalente en lenguaje llano, sin sacrificar la precisión donde es jurídicamente indispensable.",
  q:"Según el texto, el criterio que debe guiar la decisión de usar o no usar un tecnicismo en documentos dirigidos a la ciudadanía es ________, no la preferencia estilística del redactor.",
  opts:["la antigüedad del término en el ordenamiento jurídico","si el destinatario medio puede entender el documento y actuar en consecuencia","la aprobación del área jurídica de la dependencia"],
  correct:1, expl:"El texto formula explícitamente el criterio operativo: '¿puede el ciudadano promedio, sin formación jurídica, entender el documento y actuar en consecuencia?' Eso define el estándar: la comprensión y la posibilidad de actuar por parte del destinatario medio, no la corrección jurídica interna ni las preferencias del redactor."
},
{
  id:149, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"C",
  pTitle:"Estructura del Reglamento Interno de una Institución Pública",
  passage:"El reglamento interno es el instrumento normativo que organiza el funcionamiento cotidiano de una institución. Su estructura debe permitir localizarlo y aplicarlo fácilmente.",
  q:"Ordena las partes de un reglamento interno en su secuencia estructural correcta.",
  items:["Disposiciones transitorias: vigencia, derogaciones y situaciones en transición","Capítulos sustantivos: derechos, obligaciones, prohibiciones y procedimientos","Capítulo de disposiciones generales: objeto, ámbito de aplicación y definiciones","Capítulo de sanciones y responsabilidades"],
  correctOrder:[2,1,3,0],
  expl:"La estructura del reglamento interno es: Disposiciones generales (objeto, ámbito, definiciones) → Capítulos sustantivos (derechos, obligaciones, prohibiciones, procedimientos) → Sanciones y responsabilidades → Disposiciones transitorias. Las transitorias van siempre al final porque regulan la entrada en vigor y la derogación de normas anteriores."
},
{
  id:150, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"A",
  pTitle:"La Redacción de Recomendaciones en Informes de Organismos de Derechos Humanos",
  passage:"Las recomendaciones emitidas por organismos públicos de derechos humanos (como la CNDH o las comisiones estatales) no son vinculantes jurídicamente en el sistema mexicano: las autoridades pueden aceptarlas o rechazarlas, pero su rechazo es públicamente visible. La fuerza de las recomendaciones no es coercitiva sino persuasiva y de escrutinio público. Para cumplir su función, una recomendación debe: describir con precisión la violación de derechos acreditada, identificar la autoridad responsable, establecer las medidas concretas de reparación que debe adoptar (restitución, compensación, satisfacción, garantías de no repetición), y fijar un plazo para su cumplimiento. Una recomendación vaga ('tomar las medidas pertinentes') es imposible de evaluar su cumplimiento y, por tanto, invalida el escrutinio público que le da su única fuerza.",
  q:"¿Por qué una recomendación vaga invalida el mecanismo de escrutinio público que es la única fuente de fuerza de los organismos de derechos humanos, según el texto?",
  opts:["Porque los medios de comunicación no pueden publicar recomendaciones que no especifiquen montos de compensación.","Porque sin medidas concretas y plazos verificables, no es posible determinar si la autoridad cumplió o no, lo que neutraliza la presión del escrutinio público sobre la autoridad.","Porque la ley exige que todas las recomendaciones sean aceptadas por la autoridad dentro de los 30 días siguientes a su emisión."],
  correct:1, expl:"La lógica del texto es que la fuerza de las recomendaciones es el 'escrutinio público': la autoridad que no cumple queda expuesta. Pero si la recomendación es vaga, no hay parámetro para verificar el cumplimiento, y el escrutinio público pierde su objeto: nadie puede decir si se cumplió o no. La vaguedad neutraliza el único mecanismo de presión disponible."
}

];
