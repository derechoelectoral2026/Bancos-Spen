// ============================================================
//  BANCO DE PREGUNTAS — MÓDULO C · DERECHO ELECTORAL · SPEN INE
//  Versión: 2.1 (corregido: rebalanceo de respuestas + nombre de variable)
//  Total: 103 preguntas · 13 subáreas · opción múltiple (3 opciones)
//
//  CAMBIOS v2.1:
//  · Variable renombrada: MODULO_CV2 → BANCO_MODULO_C (compatible con simulacros)
//  · Distribución de respuestas correctas equilibrada: ~33% A / ~33% B / ~33% C
//    (antes: 17%/73%/10% — sesgo masivo hacia B)
//  · Contenido textual de las preguntas y opciones intacto: solo se reordenaron
//    las opciones manteniendo cuál es la correcta.
// ============================================================

const BANCO_MODULO_C = [

  /* ══════════════════════════════════════════════════
     1.1  MODELO CONSTITUCIONAL  (10 preguntas)
  ══════════════════════════════════════════════════ */
  {
    sa:"1.1", sal:"Modelo constitucional",
    ref:"CPEUM (2025), Arts. 39, 40 y 41",
    p:"El Art. 39 CPEUM establece que la soberanía nacional reside esencial y originariamente en el pueblo. El Art. 40 define la forma de gobierno como República representativa, democrática, laica y federal. El Art. 41 señala que el pueblo ejerce su soberanía a través de los Poderes de la Unión y de los poderes de los estados en los términos respectivos.",
    pt:"Soberanía, forma de gobierno y ejercicio del poder",
    q:"¿Cuál es la articulación jurídica precisa entre los Arts. 39, 40 y 41 de la CPEUM respecto al origen, la forma y el ejercicio del poder público?",
    o:["El Art. 39 reconoce la soberanía popular como fuente originaria del poder; el Art. 40 define la forma republicana, democrática, laica y federal en que ese poder se organiza; y el Art. 41 establece los mecanismos institucionales a través de los cuales el pueblo ejerce esa soberanía.",
       "Los tres artículos son redundantes y establecen lo mismo con diferente redacción, sin distinción jurídica relevante entre ellos.",
       "El Art. 39 aplica al nivel federal, el Art. 40 a las entidades federativas y el Art. 41 solo regula las elecciones."],
    c:0,
    ex:"La articulación es precisa: Art. 39 = fuente (soberanía popular originaria). Art. 40 = forma (República representativa, democrática, laica y federal). Art. 41 = ejercicio institucional (a través de los Poderes de la Unión y los poderes de los estados, con las bases del sistema electoral)."
  },
  {
    sa:"1.1", sal:"Modelo constitucional",
    ref:"CPEUM (2025), Arts. 49 y 116",
    p:null, pt:null,
    q:"El Art. 49 CPEUM establece la división de poderes federales. ¿En qué se distingue este principio de la distribución de competencias entre la Federación y las entidades federativas prevista en el Art. 124 CPEUM?",
    o:["El Art. 49 se refiere a la separación horizontal del poder federal en tres ramas (Legislativo, Ejecutivo, Judicial); el Art. 124 regula la distribución vertical de competencias entre la Federación y los estados mediante la cláusula residual.",
       "Son el mismo principio con diferente denominación; ambos impiden la concentración del poder.",
       "El Art. 49 solo aplica al nivel federal y el Art. 124 establece que todos los poderes son del ámbito estatal por defecto."],
    c:0,
    ex:"Son principios distintos: el Art. 49 consagra la separación horizontal de los tres poderes federales (para evitar su concentración). El Art. 124 establece la distribución vertical de competencias: las facultades no expresamente otorgadas a la Federación se entienden reservadas a los estados (cláusula residual)."
  },
  {
    sa:"1.1", sal:"Modelo constitucional",
    ref:"CPEUM (2025), Arts. 52, 53 y 56",
    p:"La Cámara de Diputados se integra por 500 diputados: 300 por mayoría relativa y 200 por representación proporcional. El Senado se integra por 128 senadores: 64 de primera minoría o mayoría relativa, 32 de primera minoría y 32 de representación proporcional en lista nacional.",
    pt:"Integración bicameral del Congreso",
    q:"¿Cuál es la diferencia en el criterio de asignación entre los 64 senadores de mayoría relativa, los 32 de primera minoría y los 32 de representación proporcional por lista nacional?",
    o:["Los 64 son los ganadores de la elección en cada entidad (2 por estado); los 32 de primera minoría corresponden al partido que quedó en segundo lugar en cada entidad; los 32 de RP se asignan mediante lista nacional a los partidos conforme a su votación.",
       "Los 64 son electos en distritos; los 32 de primera minoría son designados por el Ejecutivo; los 32 de RP los asigna el INE.",
       "Los 128 senadores se eligen todos por el mismo principio; la distinción es solo académica."],
    c:0,
    ex:"Art. 56 CPEUM: en cada entidad federativa se eligen 3 senadores: 2 al partido ganador (mayoría relativa) y 1 al partido que obtuvo el segundo lugar (primera minoría). Adicionalmente, 32 senadores se asignan por representación proporcional mediante una lista nacional votada por toda la ciudadanía."
  },
  {
    sa:"1.1", sal:"Modelo constitucional",
    ref:"CPEUM (2025), Arts. 73, 74 y 76",
    p:"La CPEUM distingue las facultades del Congreso de la Unión (Art. 73), las exclusivas de la Cámara de Diputados (Art. 74) y las exclusivas del Senado (Art. 76). Algunas facultades son concurrentes; otras son exclusivas de una sola cámara.",
    pt:"Facultades exclusivas de cada cámara",
    q:"¿Cuál de las siguientes opciones contiene únicamente facultades exclusivas del Senado conforme al Art. 76 CPEUM?",
    o:["Aprobar el Presupuesto de Egresos, ratificar nombramientos del Ejecutivo y declarar la desaparición de poderes en una entidad.",
       "Fiscalizar la cuenta pública, nombrar al contralor del INE y emitir el decreto de extinción de un partido político.",
       "Ratificar los tratados internacionales suscritos por el Ejecutivo, aprobar el nombramiento del Fiscal General de la República y declarar la desaparición de poderes de una entidad federativa."],
    c:2,
    ex:"Art. 76 CPEUM: son facultades exclusivas del Senado: ratificar tratados internacionales, aprobar la designación del Fiscal General, declarar la desaparición de poderes en una entidad y nombrar provisionalmente al gobernador sustituto. Aprobar el Presupuesto y fiscalizar la cuenta pública son exclusivas de Diputados (Art. 74)."
  },
  {
    sa:"1.1", sal:"Modelo constitucional",
    ref:"CPEUM (2025), Art. 135",
    p:null, pt:null,
    q:"¿Cuál es el procedimiento agravado de reforma constitucional del Art. 135 CPEUM y por qué se distingue del procedimiento legislativo ordinario del Art. 72?",
    o:["El Art. 135 permite que el Ejecutivo Federal reforme la Constitución mediante decreto sin intervención del Congreso, lo que lo hace más ágil que el Art. 72.",
       "El Art. 72 requiere mayoría simple de ambas cámaras; el Art. 135 exige mayoría de dos terceras partes de los miembros presentes del Congreso más la aprobación de la mayoría de las legislaturas de las entidades federativas, lo que lo hace cualitativamente más difícil.",
       "Ambos procedimientos son equivalentes; la diferencia es solo que el Art. 135 aplica a leyes orgánicas."],
    c:1,
    ex:"El Art. 135 establece un proceso agravado para reformar la Constitución: se requieren dos terceras partes del Congreso de la Unión (cómputo conjunto) más la aprobación de la mayoría de las legislaturas estatales. El Art. 72 solo exige mayoría simple de ambas cámaras para legislación ordinaria."
  },
  {
    sa:"1.1", sal:"Modelo constitucional",
    ref:"CPEUM, Art. 105, fracción II",
    p:null, pt:null,
    q:"¿Cuál es el medio de control de constitucionalidad que solo puede ser promovido por los partidos políticos con registro ante el INE o los organismos locales, exclusivamente para plantear la no conformidad de leyes electorales?",
    o:["Juicio para la Protección de los Derechos Político-Electorales (JDC).",
       "Recurso de Apelación (RAP).",
       "Acción de Inconstitucionalidad."],
    c:2,
    ex:"La Acción de Inconstitucionalidad procede de conformidad con el artículo 105, fracción II penúltimo párrafo de la CPEUM."
  },
  {
    sa:"1.1", sal:"Modelo constitucional",
    ref:"CPEUM, Art. 105, fracción II, Inciso f)",
    p:null, pt:null,
    q:"¿Cuál es el plazo constitucional establecido en el artículo 105 para que las leyes electorales federales y locales sean promulgadas y publicadas antes de que pueda iniciar un proceso electoral en el que vayan a aplicarse?",
    o:["Al menos 30 días antes.",
       "Al menos 60 días antes.",
       "Al menos 90 días antes."],
    c:2,
    ex:"De conformidad con el artículo 105, fracción II, Inciso f): Las leyes electorales federal y locales deberán promulgarse y publicarse por lo menos noventa días antes de que inicie el proceso electoral en que vayan a aplicarse, y durante el mismo no podrá haber modificaciones legales fundamentales."
  },
  {
    sa:"1.1", sal:"Modelo constitucional",
    ref:"CPEUM, Art. 41, Base VI, inciso a)",
    p:null, pt:null,
    q:"Es una causa constitucional para la nulidad de una elección federal o local, siempre que se acredite de manera objetiva y material, y que la diferencia entre el primer y segundo lugar sea menor al 5%:",
    o:["El uso de programas sociales durante la campaña.",
       "El exceso en el gasto de campaña en un 5% del monto total autorizado.",
       "La participación de candidatos independientes sin registro."],
    c:1,
    ex:"El exceso en el gasto de campaña en un 5% del monto total autorizado Art. 41, Base VI, inciso a)."
  },
  {
    sa:"1.1", sal:"Modelo constitucional",
    ref:"CPEUM, Art. 41, Base VI",
    p:null, pt:null,
    q:"Conforme a la Base VI del artículo 41 de la CPEUM, se presume que las violaciones a la ley electoral son determinantes para el resultado de la elección cuando la diferencia en la votación obtenida entre el primer y el segundo lugar sea:",
    o:["Menor al diez por ciento.",
       "Menor al cinco por ciento.",
       "Igual o menor al tres por ciento."],
    c:1,
    ex:"Fundamento: Art. 41, Base VI, tercer párrafo de la CPEUM. Dichas violaciones deberán acreditarse de manera objetiva y habitual. Se presume que las violaciones son determinantes cuando la diferencia entre el primer y segundo lugar sea menor al 5%."
  },
  {
    sa:"1.1", sal:"Modelo constitucional",
    ref:"CPEUM, Art. 41, Base I",
    p:null, pt:null,
    q:"Conforme a la Base I del artículo 41 de la CPEUM, ¿cuál es la naturaleza jurídica de los partidos políticos y qué fin constitucional tienen encomendado prioritariamente?",
    o:["Son asociaciones civiles con el fin de administrar recursos públicos para la difusión de ideologías.",
       "Son entidades de interés público que tienen como fin promover la participación del pueblo en la vida democrática y hacer posible el acceso de la ciudadanía al ejercicio del poder público.",
       "Son organismos descentralizados del Estado encargados de la formación de cuadros políticos."],
    c:1,
    ex:"La Constitución define a los partidos no como entes privados, sino como entidades de interés público. Su finalidad: promover la participación democrática y servir como el vehículo para que la ciudadanía acceda al ejercicio del poder público."
  },

  /* ══════════════════════════════════════════════════
     1.2  PODER JUDICIAL  (11 preguntas)
  ══════════════════════════════════════════════════ */
  {
    sa:"1.2", sal:"Poder Judicial",
    ref:"CPEUM (2025), Art. 94 — Reforma Judicial DOF 15/09/2024",
    p:"La reforma constitucional de 2024 transformó profundamente el Poder Judicial Federal. Modificó la integración de la SCJN, el método de selección de sus integrantes y la estructura administrativa del Poder Judicial.",
    pt:"Reforma judicial 2024 — SCJN",
    q:"¿Qué cambios introdujo la reforma judicial de 2024 respecto a la integración numérica y el período del cargo de las Ministras y Ministros de la SCJN?",
    o:["Redujo de 11 a 9 ministros con mandato de 12 años sin reelección, elegidos por voto popular directo en elecciones escalonadas.",
       "Aumentó de 11 a 15 ministros con mandato de 15 años, elegidos por el Congreso.",
       "Mantuvo los 11 ministros pero cambió su designación a cargo del Congreso por mayoría calificada."],
    c:0,
    ex:"La reforma de 2024 redujo la SCJN de 11 a 9 integrantes, con un período de 12 años sin posibilidad de reelección, y estableció su elección mediante voto popular directo en elecciones escalonadas."
  },
  {
    sa:"1.2", sal:"Poder Judicial",
    ref:"CPEUM (2025), Art. 99; LGSMIME (2024)",
    p:"El TEPJF es la máxima autoridad jurisdiccional en materia electoral, con Sala Superior y Salas Regionales.",
    pt:"Sala Superior vs Salas Regionales del TEPJF",
    q:"¿Cuál es la diferencia de competencia entre la Sala Superior y las Salas Regionales del TEPJF en materia de elecciones federales?",
    o:["La Sala Superior conoce los recursos contra las resoluciones de las Salas Regionales, los JDC que afecten el ejercicio de derechos políticos en elecciones federales de carácter nacional y la validez de las elecciones de Presidente, Senadores y Diputados; las Salas Regionales conocen en primera instancia los JIN y otros medios en su circunscripción.",
       "Las Salas Regionales conocen únicamente asuntos locales; la Sala Superior conoce solo asuntos federales sin excepción.",
       "Ambas tienen la misma competencia y se distribuyen los casos por turno aleatorio."],
    c:0,
    ex:"La Sala Superior es el órgano de cierre: conoce en segunda instancia los recursos contra Salas Regionales, los JDC de alcance nacional y valida las elecciones presidenciales y de Congreso. Las 5 Salas Regionales conocen en primera instancia los JIN."
  },
  {
    sa:"1.2", sal:"Poder Judicial",
    ref:"LGSMIME (2024), Arts. 40–52 y 61–70",
    p:"El sistema de medios de impugnación electoral comprende varios instrumentos procesales.",
    pt:"Sistema de medios de impugnación electoral",
    q:"¿Cuál es la finalidad específica del Juicio de Revisión Constitucional Electoral (JRC) y quiénes están legitimados para promoverlo?",
    o:["El JRC es promovido por partidos políticos para impugnar actos o resoluciones definitivos de las autoridades electorales locales que puedan ser determinantes para el resultado de una elección local, cuando se aduzca violación a la CPEUM.",
       "El JRC lo promueve cualquier ciudadano para impugnar una ley electoral inconstitucional ante la SCJN.",
       "El JRC es un recurso interno del INE para revisar sus propias resoluciones antes de que sean impugnadas por las partes."],
    c:0,
    ex:"El JRC es promovido exclusivamente por partidos políticos para impugnar actos definitivos de autoridades electorales locales cuando se alegue una violación a la CPEUM."
  },
  {
    sa:"1.2", sal:"Poder Judicial",
    ref:"CPEUM (2025), Art. 107; LGSMIME (2024), Arts. 79–85",
    p:null, pt:null,
    q:"¿En qué casos procede el Juicio para la Protección de los Derechos Político-Electorales del Ciudadano (JDC) y cuál es su alcance frente al Juicio de Inconformidad (JIN)?",
    o:["El JDC y el JIN son equivalentes; la diferencia es solo el nombre que la ley les asigna según el tipo de elección.",
       "El JDC solo procede cuando ya se agotaron todos los medios de defensa disponibles ante la autoridad electoral y la SCJN.",
       "El JDC protege derechos político-electorales individuales del ciudadano (votar, ser votado, asociación, afiliación); el JIN impugna los resultados de las elecciones federales de diputados y senadores. Son instrumentos distintos con legitimación activa diferente."],
    c:2,
    ex:"Son instrumentos distintos: el JDC protege derechos político-electorales individuales y lo promueven ciudadanos. El JIN impugna los resultados de las elecciones federales de diputados y senadores y lo promueven partidos políticos o candidatos."
  },
  {
    sa:"1.2", sal:"Poder Judicial",
    ref:"CPEUM (2025), Art. 99 — Reforma Judicial 2024",
    p:null, pt:null,
    q:"¿Qué nuevos órganos creó la reforma judicial de 2024 para sustituir al Consejo de la Judicatura Federal y cuál es la función de cada uno?",
    o:["Creó el Consejo Superior de la Judicatura (funciones disciplinarias) y la Contraloría Judicial Federal (funciones de auditoría).",
       "Creó el Tribunal de Disciplina Judicial (funciones disciplinarias y sancionadoras) y el Órgano de Administración Judicial (gestión administrativa, presupuestal y de carrera del Poder Judicial).",
       "Creó el Tribunal de Apelación Judicial (revisión de sentencias) y la Junta de Gobierno del Poder Judicial (coordinación entre tribunales)."],
    c:1,
    ex:"La reforma de 2024 sustituyó al CJF por dos órganos: el Tribunal de Disciplina Judicial y el Órgano de Administración Judicial, separando así las funciones disciplinarias de las administrativas."
  },
  {
    sa:"1.2", sal:"Poder Judicial",
    ref:"CPEUM (2025), Art. 105, fracc. II",
    p:"Las acciones de inconstitucionalidad en materia electoral permiten plantear ante la SCJN la posible contradicción entre una norma general de carácter electoral y la Constitución.",
    pt:"Acción de inconstitucionalidad electoral",
    q:"¿Qué diferencia existe entre una acción de inconstitucionalidad en materia electoral promovida por un partido político y una promovida por un porcentaje de legisladores del Congreso?",
    o:["Solo los partidos pueden promover acciones de inconstitucionalidad en materia electoral; los legisladores carecen de legitimación.",
       "Los partidos solo pueden impugnar normas electorales que afecten directamente sus derechos o su participación; los legisladores (33% de la cámara respectiva) pueden impugnar cualquier ley electoral, incluidas aquellas que no los afecten directamente.",
       "Ambos tienen exactamente la misma legitimación y el mismo alcance de impugnación sin distinción."],
    c:1,
    ex:"Los partidos políticos pueden impugnar exclusivamente normas electorales que afecten su esfera. El 33% de los legisladores de la cámara emisora puede impugnar cualquier norma electoral, con mayor amplitud de objeto."
  },
  {
    sa:"1.2", sal:"Poder Judicial",
    ref:"CPEUM, Art. 96, Fracción I",
    p:null, pt:null,
    q:"De acuerdo con el procedimiento establecido en la fracción I del artículo 96 de la Constitución, ¿cuál es el plazo y el momento procesal en el que el Senado de la República debe publicar la convocatoria para la integración del listado de candidaturas a cargos del Poder Judicial de la Federación?",
    o:["Dentro de los quince días naturales posteriores a la conclusión del proceso electoral federal ordinario anterior.",
       "Dentro de los treinta días naturales siguientes a la instalación del primer periodo ordinario de sesiones del año anterior al de la elección que corresponda.",
       "A más tardar noventa días antes del inicio del proceso electoral, previa consulta con el Instituto Nacional Electoral."],
    c:1,
    ex:"El artículo 96 constitucional establece un cronograma estricto. La publicación de la convocatoria es el acto del procedimiento y debe ocurrir con una antelación considerable (el año previo a la elección)."
  },
  {
    sa:"1.2", sal:"Poder Judicial",
    ref:"CPEUM, Art. 94",
    p:null, pt:null,
    q:"De acuerdo con el artículo 94 constitucional, ¿qué ordenamiento jurídico es el encargado de definir y regular la competencia y el funcionamiento de la Suprema Corte (en Pleno), los Plenos Regionales, los Tribunales de Circuito, los Juzgados de Distrito y el Tribunal Electoral?",
    o:["Únicamente la propia Constitución Política en sus artículos transitorios.",
       "El Consejo de la Judicatura Federal mediante la emisión de Acuerdos Generales.",
       "Lo que establezcan las leyes, de conformidad con las bases previstas en la Constitución."],
    c:2,
    ex:"La Constitución no agota la descripción de todas las facultades de cada órgano, sino que delega en el legislador ordinario (a través de la Ley Orgánica del Poder Judicial de la Federación) la facultad de reglamentar su funcionamiento."
  },
  {
    sa:"1.2", sal:"Poder Judicial",
    ref:"CPEUM, Art. 96, fracción II, inciso b)",
    p:null, pt:null,
    q:"En el marco de la reforma judicial de 2024, ¿cuántas candidaturas tiene facultad de proponer cada Poder de la Unión (Ejecutivo, Legislativo y Judicial) para integrar la lista de aspirantes al cargo de Ministro o Ministra de la Suprema Corte de Justicia de la Nación?",
    o:["Hasta 3 candidaturas por cada Poder de la Unión.",
       "Hasta 5 candidaturas por cada Poder de la Unión.",
       "Hasta 10 candidaturas por cada Poder de la Unión."],
    c:2,
    ex:"Cada poder debe remitir una lista de hasta 10 candidaturas al Senado, previa evaluación de sus respectivos Comités de Evaluación. En el caso del Poder Legislativo, las 10 propuestas se dividen en 5 por la Cámara de Diputados y 5 por el Senado."
  },
  {
    sa:"1.2", sal:"Poder Judicial",
    ref:"CPEUM, Art. 105, Fracc. II, párrafo quinto",
    p:null, pt:null,
    q:"¿Qué mayoría se requiere en el Pleno de la SCJN para declarar la invalidez de una norma general en una acción de inconstitucionalidad?",
    o:["Mayoría Absoluta (6 votos).",
       "Unanimidad de votos.",
       "Mayoría de Votos."],
    c:0,
    ex:"Al reducirse el pleno a 9 integrantes, la mayoría calificada de dos tercios se traduce en 6 votos para invalidar leyes."
  },
  {
    sa:"1.2", sal:"Poder Judicial",
    ref:"CPEUM, Art. 96, fracción II, inciso b)",
    p:null, pt:null,
    q:"En el proceso de postulación de candidaturas para el Poder Judicial de la Federación, ¿cuál es la función constitucional y legal de la insaculación pública?",
    o:["Es el método de votación mediante el cual la ciudadanía elige directamente a las personas juzgadoras el día de la jornada electoral.",
       "Es el mecanismo de azar utilizado para definir qué personas juzgadoras actuales deben ser removidas de sus cargos de forma inmediata.",
       "Es el sorteo público realizado por los Comités de Evaluación para ajustar el número de aspirantes que cumplen los requisitos a los límites de candidaturas por cargo permitidos por la Constitución."],
    c:2,
    ex:"La insaculación es el 'filtro final de equidad' que ocurre justo antes de que las listas definitivas se envíen al Senado para su integración y posterior entrega al INE."
  },

  /* ══════════════════════════════════════════════════
     1.3  CIUDADANÍA  (10 preguntas)
  ══════════════════════════════════════════════════ */
  {
    sa:"1.3", sal:"Ciudadanía",
    ref:"CPEUM (2025), Arts. 30, 34 y 37",
    p:"La CPEUM distingue tres vínculos jurídico-políticos: la nacionalidad (Art. 30), la ciudadanía (Art. 34) y la posible pérdida de la nacionalidad (Art. 37).",
    pt:"Nacionalidad, ciudadanía y sus diferencias",
    q:"¿Cuáles son las causas por las que se puede perder la nacionalidad mexicana por naturalización, conforme al Art. 37, Apartado B CPEUM?",
    o:["La nacionalidad mexicana es irrenunciable e imprescriptible; no puede perderse en ningún caso.",
       "Solo se pierde por sentencia ejecutoriada en materia penal federal con pena de más de 5 años.",
       "Se pierde voluntariamente por adquirir otra nacionalidad, por prestar voluntariamente servicios oficiales a un gobierno extranjero sin permiso del Congreso, o por residir cinco años en el extranjero sin intención de regresar."],
    c:2,
    ex:"El Art. 37, Apartado B CPEUM establece que los mexicanos por naturalización pueden perder su nacionalidad: adquiriendo voluntariamente otra, usando pasaporte extranjero como propio, o aceptando o usando títulos nobiliarios que impliquen sumisión a otro Estado."
  },
  {
    sa:"1.3", sal:"Ciudadanía",
    ref:"CPEUM (2025), Art. 35, fracciones VII y VIII",
    p:null, pt:null,
    q:"¿Cuál es la diferencia entre la iniciativa ciudadana (Art. 35, fracc. VII) y la consulta popular (Art. 35, fracc. VIII) como mecanismos de participación directa?",
    o:["La iniciativa ciudadana permite a los ciudadanos proponer leyes al Congreso para su debate y aprobación legislativa ordinaria; la consulta popular somete temas de trascendencia nacional directamente a la decisión del electorado mediante votación, siendo vinculante cuando participa más del 40% de la lista nominal.",
       "Son el mismo mecanismo con distinto nombre; ambos producen el mismo resultado vinculante.",
       "La iniciativa ciudadana es vinculante automáticamente con 100,000 firmas; la consulta popular es solo orientativa y no tiene efectos jurídicos."],
    c:0,
    ex:"Son mecanismos distintos: la iniciativa ciudadana presenta proyectos de ley al Congreso; su resultado depende del Congreso. La consulta popular somete temas al voto ciudadano directo y es vinculante para los poderes de la Unión cuando la participación supera el 40%."
  },
  {
    sa:"1.3", sal:"Ciudadanía",
    ref:"CPEUM (2025), Art. 36",
    p:null, pt:null,
    q:"El Art. 36 CPEUM establece obligaciones ciudadanas. ¿Cuál es la consecuencia jurídica establecida en el Art. 38 CPEUM para el ciudadano que incumple las obligaciones del Art. 36?",
    o:["La suspensión temporal de los derechos y prerrogativas ciudadanas, en los términos y durante el tiempo que fijen las leyes aplicables.",
       "La pérdida definitiva e irrecuperable de la ciudadanía mexicana.",
       "Una sanción pecuniaria equivalente a 10 días de salario mínimo, aplicada por el INE."],
    c:0,
    ex:"El Art. 38 CPEUM establece que los derechos y prerrogativas ciudadanas se suspenden (no se pierden definitivamente) cuando el ciudadano incumple las obligaciones del Art. 36. La suspensión es temporal."
  },
  {
    sa:"1.3", sal:"Ciudadanía",
    ref:"CPEUM (2025), Art. 35, fracc. VIII; LFCP (2021)",
    p:"La consulta popular fue reglamentada en la Ley Federal de Consulta Popular. Para que una consulta popular sea vinculante se requieren ciertas condiciones de participación y respaldo.",
    pt:"Vinculatoriedad de la consulta popular",
    q:"¿Bajo qué condición es vinculante el resultado de una consulta popular para los poderes de la Unión conforme al Art. 35, fracc. VIII CPEUM?",
    o:["Siempre es vinculante, independientemente del porcentaje de participación.",
       "Solo cuando el Congreso, por mayoría calificada, ratifique el resultado de la consulta en los 30 días siguientes.",
       "Cuando la votación sea aprobada por más del 50% de los votos válidos emitidos y la participación supere el 40% de los ciudadanos inscritos en la lista nominal de electores."],
    c:2,
    ex:"El Art. 35, fracc. VIII, inciso 4° CPEUM establece que la consulta popular será vinculante para los poderes de la Unión cuando la participación supere el 40% de los ciudadanos inscritos en la lista nominal y la mayoría vote en un sentido."
  },
  {
    sa:"1.3", sal:"Ciudadanía",
    ref:"CPEUM (2025), Art. 35, fracc. IX; LFRM (2021)",
    p:"La revocación de mandato es el mecanismo mediante el cual la ciudadanía puede poner fin anticipadamente al mandato del titular del Poder Ejecutivo Federal.",
    pt:"Revocación de mandato presidencial",
    q:"¿Cuáles son los requisitos de activación y los efectos de la revocación de mandato del Presidente de la República conforme al Art. 35, fracc. IX CPEUM y la LFRM?",
    o:["Se activa con el 10% de la lista nominal; si gana el 'sí' con participación del 30%, el Presidente debe renunciar de inmediato.",
       "Se activa con la solicitud del 3% de la lista nominal; para que proceda la revocación se requiere que participe el 40% de la lista nominal y que la mayoría vote por la revocación, además de que esa mayoría sea superior a la que obtuvo el Presidente en su elección.",
       "Solo el Congreso puede promoverla con el 50% de los votos de ambas cámaras, sin participación ciudadana directa."],
    c:1,
    ex:"La LFRM y el Art. 35, fracc. IX CPEUM establecen: solicitud de al menos el 3% de la lista nominal. Para que la revocación proceda se requiere participación de al menos el 40% de la lista nominal y que la mayoría vote por revocar."
  },
  {
    sa:"1.3", sal:"Ciudadanía",
    ref:"CPEUM, Art. 38, fracción II",
    p:null, pt:null,
    q:"¿En qué supuesto se suspenden los derechos o prerrogativas de los ciudadanos según la Constitución?",
    o:["Por falta de pago de impuestos federales.",
       "Por estar sujeto a un proceso criminal por delito que merezca pena corporal, a contar desde la fecha del auto de formal prisión.",
       "Por no haber votado en dos procesos electorales consecutivos."],
    c:1,
    ex:"La sujeción a un proceso penal con pena privativa de la libertad es una de las causas de suspensión (Artículo 38, fracción II de la CPEUM)."
  },
  {
    sa:"1.3", sal:"Ciudadanía",
    ref:"CPEUM, Art. 35, fracción VIII, numeral 1",
    p:null, pt:null,
    q:"¿Cuál es el porcentaje de la lista nominal de electores requerido para que los ciudadanos puedan solicitar una Consulta Popular sobre temas de trascendencia nacional?",
    o:["Al menos el 1%.",
       "Al menos el 2%.",
       "Al menos el 3%."],
    c:1,
    ex:"Para que el INE organice una consulta a petición ciudadana, se requiere el respaldo de al menos el dos por ciento de los ciudadanos inscritos en la lista nominal de electores."
  },
  {
    sa:"1.3", sal:"Ciudadanía",
    ref:"CPEUM, Art. 35, fracción VIII, numeral 3",
    p:null, pt:null,
    q:"¿Qué materia NO puede ser objeto de una Consulta Popular según la restricción constitucional?",
    o:["La política económica del país.",
       "La permanencia o continuidad en el cargo de los servidores públicos de elección popular.",
       "La restricción de los derechos humanos reconocidos por la Constitución y los tratados internacionales."],
    c:2,
    ex:"Los derechos humanos son progresivos y no pueden someterse a consulta para su restricción. Tampoco pueden consultarse principios fiscales, el presupuesto o la seguridad nacional."
  },
  {
    sa:"1.3", sal:"Ciudadanía",
    ref:"CPEUM, Art. 36, fracción IV",
    p:null, pt:null,
    q:"¿Es una obligación de los ciudadanos desempeñar los cargos de elección popular de la Federación o de las entidades federativas?",
    o:["No, es un derecho renunciable en cualquier momento.",
       "Sí, son cargos obligatorios, aunque no gratuitos en los términos que señalen las leyes.",
       "Solo si el ciudadano es militante de un partido político."],
    c:1,
    ex:"El desempeño de cargos de elección popular es una obligación constitucional, al igual que las funciones electorales y las de jurado."
  },
  {
    sa:"1.3", sal:"Ciudadanía",
    ref:"CPEUM, Art. 35, fracción IX, numeral 1",
    p:null, pt:null,
    q:"¿Cuál es el porcentaje mínimo de ciudadanos inscritos en la lista nominal de electores necesario para que proceda la solicitud de Revocación de Mandato del Presidente de la República?",
    o:["3%.",
       "10%.",
       "33%."],
    c:0,
    ex:"La solicitud debe ser suscrita por un número de ciudadanos equivalente a, al menos, el tres por ciento de la lista nominal, distribuidos en al menos diecisiete entidades federativas."
  },

  /* ══════════════════════════════════════════════════
     1.4  SISTEMA DE PARTIDOS EN MÉXICO  (8 preguntas)
  ══════════════════════════════════════════════════ */
  {
    sa:"1.4", sal:"Sistema de partidos en México",
    ref:"LGPP (2023), Arts. 22–27 y 94–98",
    p:"La LGPP establece los requisitos para obtener el registro como partido político nacional y las causas por las que ese registro puede perderse.",
    pt:"Registro y pérdida de registro de partidos",
    q:"¿Cuáles son las causas de pérdida del registro de un partido político nacional conforme a la LGPP?",
    o:["Por no obtener al menos el 3% de la votación válida emitida en una elección federal ordinaria, por fusión con otro partido, por disolución voluntaria o por sentencia firme del TEPJF que así lo determine.",
       "Solo por no obtener el porcentaje mínimo de votación en una elección federal.",
       "Únicamente por resolución unánime del Consejo General del INE, sin intervención judicial."],
    c:0,
    ex:"El Art. 94 LGPP establece las causas de pérdida del registro: no obtener el 3% de la votación válida emitida en alguna de las elecciones federales ordinarias; fusión con otro partido; disolución acordada por sus órganos; y resolución firme del TEPJF."
  },
  {
    sa:"1.4", sal:"Sistema de partidos en México",
    ref:"LGPP (2023), Arts. 41–51 y 85–93",
    p:null, pt:null,
    q:"¿Cuál es la diferencia entre una agrupación política nacional y una coalición de partidos conforme a la LGPP?",
    o:["La agrupación política nacional es una organización ciudadana que contribuye a la vida democrática pero NO puede postular candidatos directamente; la coalición es un acuerdo temporal entre dos o más partidos con registro para competir juntos en una elección, postulando candidatos comunes.",
       "Son equivalentes: ambas permiten postular candidatos en elecciones federales.",
       "La coalición pierde el registro de los partidos que la integran; la agrupación conserva su registro siempre."],
    c:0,
    ex:"La agrupación política nacional no puede postular candidatos ni participar directamente en elecciones. La coalición es un acuerdo temporal entre partidos con registro que sí pueden postular candidatos comunes."
  },
  {
    sa:"1.4", sal:"Sistema de partidos en México",
    ref:"LGPP (2023), Arts. 41–56; LGIPE (2024)",
    p:"El financiamiento de los partidos políticos tiene dos modalidades: público y privado.",
    pt:"Financiamiento de partidos políticos",
    q:"¿Cuál es el principio constitucional que rige el financiamiento de los partidos políticos en México y cómo se calcula el financiamiento público ordinario?",
    o:["El principio constitucional establece la prevalencia del financiamiento público sobre el privado. El financiamiento ordinario se determina multiplicando el 65% de la Unidad de Medida y Actualización (UMA) vigente por el número total de ciudadanos inscritos en la lista nominal, distribuyéndose en partes iguales (30%) y proporcional a la votación (70%).",
       "El financiamiento privado es la fuente principal; el financiamiento público es solo complementario y no tiene fórmula fija.",
       "El financiamiento público se distribuye en partes iguales entre todos los partidos con registro, sin considerar su votación."],
    c:0,
    ex:"El Art. 41, Base II CPEUM establece la prevalencia del financiamiento público sobre el privado. La fórmula del financiamiento ordinario: 65% de la UMA × número de ciudadanos en la lista nominal. Distribución: 30% en partes iguales y 70% proporcional."
  },
  {
    sa:"1.4", sal:"Sistema de partidos en México",
    ref:"CPEUM, Art. 41, base II",
    p:null, pt:null,
    q:"En materia de financiamiento, ¿qué principio debe prevalecer en los recursos de los partidos políticos?",
    o:["El financiamiento privado debe ser mayor al público para evitar gastos al Estado.",
       "Solo se permite el financiamiento público; el privado está prohibido.",
       "Los recursos públicos deben prevalecer sobre los de origen privado."],
    c:2,
    ex:"El sistema mexicano es mixto, pero por mandato constitucional, el financiamiento público siempre debe ser superior al privado para garantizar la equidad y evitar que intereses particulares controlen a los partidos."
  },
  {
    sa:"1.4", sal:"Sistema de partidos en México",
    ref:"CPEUM, Art. 41, base V, apartado B, penúltimo párrafo",
    p:null, pt:null,
    q:"¿Qué autoridad tiene la facultad de fiscalizar las finanzas de los partidos políticos y de las campañas de los candidatos?",
    o:["La Auditoría Superior de la Federación.",
       "La Unidad de Inteligencia Financiera (UIF).",
       "El Consejo General del INE, a través de su comisión de fiscalización."],
    c:2,
    ex:"La fiscalización de las finanzas de los partidos políticos y de las campañas de los candidatos es facultad del Consejo General del INE, y no está limitada por los secretos bancario, fiduciario o fiscal."
  },
  {
    sa:"1.4", sal:"Sistema de partidos en México",
    ref:"CPEUM, Art. 41, base I, párrafo segundo",
    p:null, pt:null,
    q:"En la postulación de sus candidaturas a legisladores federales y locales, ¿qué principio deben garantizar los partidos políticos?",
    o:["El principio de representación proporcional absoluta.",
       "El principio de juventud (cuota de jóvenes).",
       "El principio de paridad de género."],
    c:2,
    ex:"Los partidos tienen la obligación constitucional de garantizar la paridad de género en la postulación de candidaturas a los distintos cargos de elección popular (50% hombres y 50% mujeres)."
  },
  {
    sa:"1.4", sal:"Sistema de partidos en México",
    ref:"LGPP en relación con el Art. 41 constitucional",
    p:null, pt:null,
    q:"¿Cuál es la consecuencia de que un partido político nacional pierda su registro por no alcanzar el umbral del 3%?",
    o:["Pierde su personalidad jurídica de forma inmediata y total.",
       "Pierde sus derechos y prerrogativas federales, pero podría buscar su registro como partido local si cumple con los requisitos estatales.",
       "Se le otorga una prórroga de un año para recuperar los votos perdidos."],
    c:1,
    ex:"Al perder el registro nacional, el partido deja de recibir financiamiento público federal y acceso a medios nacionales, pero mantiene su derecho a intentar registrarse como partido local en las entidades donde sí haya alcanzado el porcentaje requerido."
  },
  {
    sa:"1.4", sal:"Sistema de partidos en México",
    ref:"CPEUM, Art. 41, base II, inciso a)",
    p:null, pt:null,
    q:"¿Cómo se distribuye el financiamiento público para el sostenimiento de las actividades ordinarias permanentes de los partidos políticos nacionales?",
    o:["Se entrega el 100% de forma proporcional al porcentaje de votos obtenidos en la elección inmediata anterior.",
       "El 30% se distribuye de forma igualitaria y el 70% restante según el porcentaje de la votación nacional emitida.",
       "El 50% de forma igualitaria y el 50% según el número de afiliados registrados."],
    c:1,
    ex:"El 30% igualitario asegura que los partidos pequeños tengan un piso mínimo para operar, mientras que el 70% proporcional premia el respaldo ciudadano obtenido en las urnas."
  },

  /* ══════════════════════════════════════════════════
     2.1  PRINCIPIOS DEL SISTEMA ELECTORAL  (6 preguntas)
  ══════════════════════════════════════════════════ */
  {
    sa:"2.1", sal:"Principios del sistema electoral",
    ref:"CPEUM (2025), Art. 41, Base V",
    p:"El Art. 41 CPEUM establece siete principios rectores de la función electoral del INE: certeza, legalidad, imparcialidad, objetividad, independencia, máxima publicidad y paridad.",
    pt:"Los siete principios electorales",
    q:"¿Cuál es la distinción técnica entre los principios de legalidad, objetividad e independencia en el contexto de la función electoral del INE?",
    o:["La legalidad exige que todos los actos electorales se apeguen al marco normativo vigente; la objetividad requiere que las normas y procedimientos electorales estén diseñados para alcanzar resultados precisos, justos e imparciales; la independencia garantiza que el INE tome sus decisiones sin presión de los poderes públicos o actores privados.",
       "Los tres principios son sinónimos que garantizan que las elecciones sean válidas.",
       "La legalidad aplica solo a los partidos; la objetividad a los funcionarios; la independencia al Consejo General."],
    c:0,
    ex:"Legalidad: los actos electorales deben ajustarse al marco jurídico. Objetividad: los procedimientos deben estar diseñados para obtener resultados precisos e imparciales. Independencia: el INE resuelve sin someterse a instrucciones o presiones externas."
  },
  {
    sa:"2.1", sal:"Principios del sistema electoral",
    ref:"CPEUM, Art. 41, Base V, Apartado A, párrafo segundo",
    p:null, pt:null,
    q:"¿Cuáles son los principios rectores que deben regir todas las actividades del Instituto Nacional Electoral (INE)?",
    o:["Eficiencia, Transparencia, Equidad y Justicia.",
       "Autonomía, Profesionalismo, Democracia y Lealtad.",
       "Certeza, Legalidad, Independencia, Imparcialidad, Máxima Publicidad y Objetividad."],
    c:2,
    ex:"Estos son los seis principios constitucionales obligatorios. Si una autoridad electoral actúa fuera de ellos, sus actos pueden ser invalidados."
  },
  {
    sa:"2.1", sal:"Principios del sistema electoral",
    ref:"CPEUM, Art. 41, Base I, párrafo segundo",
    p:null, pt:null,
    q:"¿Cuál es la característica del sufragio que garantiza que la voluntad del elector no sea revelada ni sujeta a represalias?",
    o:["Sufragio Universal.",
       "Sufragio Libre.",
       "Sufragio Secreto."],
    c:2,
    ex:"El voto es Universal, Libre, Secreto y Directo. El carácter secreto es la barrera técnica que protege la libertad de conciencia del votante."
  },
  {
    sa:"2.1", sal:"Principios del sistema electoral",
    ref:"CPEUM, Art. 41",
    p:null, pt:null,
    q:"¿En qué consiste el principio de LEGALIDAD en materia electoral?",
    o:["En que las autoridades pueden hacer cualquier cosa que no esté prohibida.",
       "En que la autoridad electoral solo puede actuar estrictamente conforme a las facultades que le otorgan la Constitución y las leyes.",
       "En que todos los ciudadanos deben obedecer las leyes electorales."],
    c:1,
    ex:"En derecho público, la autoridad solo puede hacer lo que la ley le permite expresamente. Si el INE toma una decisión sin sustento legal, viola este principio."
  },
  {
    sa:"2.1", sal:"Principios del sistema electoral",
    ref:"CPEUM, Art. 41, Base V",
    p:null, pt:null,
    q:"¿Qué principio obliga a los integrantes del INE a evitar conflictos de interés y a actuar sin prejuicios personales o ideológicos?",
    o:["Imparcialidad.",
       "Profesionalismo.",
       "Máxima Publicidad."],
    c:0,
    ex:"La Imparcialidad exige neutralidad absoluta frente a los competidores. La autoridad no puede tener favoritos ni actuar bajo sesgos políticos."
  },
  {
    sa:"2.1", sal:"Principios del sistema electoral",
    ref:"CPEUM, Art. 41, Base V",
    p:null, pt:null,
    q:"¿Qué principio asegura que los actos del INE se basen en hechos verificables y criterios razonables, por encima de interpretaciones subjetivas?",
    o:["Certeza.",
       "Objetividad.",
       "Independencia."],
    c:1,
    ex:"La Objetividad implica basarse en la realidad de los hechos y en la aplicación técnica de la norma, dejando de lado opiniones personales."
  },

  /* ══════════════════════════════════════════════════
     2.2  TIPOS DE SISTEMAS ELECTORALES  (6 preguntas)
  ══════════════════════════════════════════════════ */
  {
    sa:"2.2", sal:"Tipos de sistemas electorales",
    ref:"CPEUM (2025), Arts. 52–54; PRU (2016)",
    p:"México emplea un sistema mixto para la Cámara de Diputados: 300 diputados por mayoría relativa en distritos uninominales y 200 por representación proporcional en 5 circunscripciones plurinominales.",
    pt:"Sistema mixto y cláusula de gobernabilidad",
    q:"¿Cuál es la finalidad de la cláusula de sobrerrepresentación del Art. 54, fracc. V CPEUM y qué paradoja puede producir?",
    o:["La cláusula limita la sobrerrepresentación al establecer que ningún partido puede exceder en más de 8 puntos porcentuales su porcentaje de votación en la composición de la Cámara. La paradoja es que puede generar subrepresentación de los partidos mayoritarios cuando obtienen muchos triunfos de mayoría relativa, reduciendo sus diputados de RP para no rebasar el techo.",
       "La cláusula garantiza que el partido ganador obtenga automáticamente mayoría absoluta para gobernar con estabilidad, sin importar su votación real.",
       "La cláusula solo aplica a los partidos con menos del 30% de la votación; los partidos más votados no tienen ningún límite de representación."],
    c:0,
    ex:"Art. 54, fracc. V CPEUM: ningún partido puede tener más de 300 diputados totales ni exceder en 8 pp su porcentaje de votación."
  },
  {
    sa:"2.2", sal:"Tipos de sistemas electorales",
    ref:"CPEUM, Art. 52",
    p:null, pt:null,
    q:"¿En qué consiste el sistema de MAYORÍA RELATIVA?",
    o:["El candidato debe obtener el 50% más uno de los votos para ganar.",
       "Se asignan escaños proporcionalmente al porcentaje de votación obtenida por cada partido.",
       "Gana el candidato que obtiene el mayor número de votos respecto a sus contendientes, sin importar el porcentaje total."],
    c:2,
    ex:"Es el sistema que usamos para elegir a los 300 diputados de distrito. No requiere mayoría absoluta, solo ser el más votado de la contienda en esa demarcación específica."
  },
  {
    sa:"2.2", sal:"Tipos de sistemas electorales",
    ref:"CPEUM, Art. 54",
    p:null, pt:null,
    q:"¿Qué es el sistema de REPRESENTACIÓN PROPORCIONAL (RP)?",
    o:["Un sistema donde los ciudadanos votan directamente por una persona y no por un partido.",
       "Un sorteo entre los candidatos que no ganaron por mayoría relativa.",
       "Un mecanismo que asigna cargos legislativos con base en el porcentaje de votos que cada partido político obtiene en una circunscripción plurinominal."],
    c:2,
    ex:"El objetivo de la RP es que la composición de los órganos legislativos refleje fielmente la pluralidad de la votación ciudadana, permitiendo la entrada de las minorías."
  },
  {
    sa:"2.2", sal:"Tipos de sistemas electorales",
    ref:"CPEUM, Arts. 52 y 54",
    p:null, pt:null,
    q:"¿Cómo se define el SISTEMA MIXTO que utiliza México para integrar la Cámara de Diputados?",
    o:["Mixto con predominio de mayoría relativa.",
       "Mixto con predominio de representación proporcional.",
       "Mixto con sistema de segunda vuelta."],
    c:0,
    ex:"Se llama mixto porque combina ambos principios (300 por Mayoría Relativa y 200 por Representación Proporcional), pero se considera con predominio de mayoría por la carga territorial de los distritos."
  },
  {
    sa:"2.2", sal:"Tipos de sistemas electorales",
    ref:"CPEUM, Art. 53",
    p:null, pt:null,
    q:"¿Qué es una CIRCUNSCRIPCIÓN PLURINOMINAL?",
    o:["El área geográfica donde se elige a un solo diputado por mayoría.",
       "El área geográfica que comprende varios estados, donde se reparten escaños de representación proporcional mediante listas regionales.",
       "El padrón electoral de un solo municipio."],
    c:1,
    ex:"En México existen 5 circunscripciones plurinominales, y en cada una se eligen 40 diputados mediante listas de partido para sumar los 200 de RP."
  },
  {
    sa:"2.2", sal:"Tipos de sistemas electorales",
    ref:"Derecho Comparado",
    p:null, pt:null,
    q:"¿En qué consiste el sistema de MAYORÍA ABSOLUTA?",
    o:["En ganar por un solo voto de diferencia.",
       "En obtener al menos el 50% más uno de la votación total emitida.",
       "En que todos los partidos estén de acuerdo con el ganador."],
    c:1,
    ex:"A diferencia de la Mayoría Relativa, la Absoluta exige la mitad más uno de los votos. Si nadie lo logra, en otros países se recurre a la Segunda Vuelta (Ballotage)."
  },

  /* ══════════════════════════════════════════════════
     2.3  AUTORIDADES ELECTORALES  (8 preguntas)
  ══════════════════════════════════════════════════ */
  {
    sa:"2.3", sal:"Autoridades electorales",
    ref:"LGIPE (2024), Arts. 29–34; CPEUM Art. 41, Base V",
    p:null, pt:null,
    q:"¿Por qué el INE es caracterizado como una autoridad de Estado y no de gobierno, y cuáles son las consecuencias prácticas de esta distinción?",
    o:["Porque el INE es un organismo público autónomo con personalidad jurídica y patrimonio propios, no subordinado al Ejecutivo ni al Legislativo. Las consecuencias prácticas son: su presupuesto es autónomo, sus consejeros no pueden ser removidos por el Ejecutivo y sus decisiones son definitivas en su ámbito sin revisión jerárquica gubernamental.",
       "Porque el INE elabora las leyes electorales, lo que lo convierte en parte del Poder Legislativo.",
       "Porque solo las autoridades de Estado pueden aplicar sanciones penales, mientras las de gobierno solo pueden sancionar administrativamente."],
    c:0,
    ex:"La autonomía del INE implica: 1) su presupuesto está garantizado constitucionalmente; 2) sus consejeros tienen mandatos fijos; 3) sus resoluciones son definitivas en el ámbito administrativo-electoral."
  },
  {
    sa:"2.3", sal:"Autoridades electorales",
    ref:"LGIPE (2024), Arts. 98–105 y 120–124",
    p:"La LGIPE regula la relación entre el INE y los OPLEs mediante dos figuras: la atracción y la asunción de funciones. Cada una opera bajo supuestos distintos.",
    pt:"Atracción vs asunción de funciones del INE sobre los OPLEs",
    q:"¿En qué se distinguen la atracción y la asunción de funciones del INE respecto de los OPLEs conforme a la LGIPE?",
    o:["Son el mismo mecanismo con distinto nombre; en ambos casos el INE toma el control total del OPLE por tiempo indefinido.",
       "La atracción es permanente e implica la extinción del OPLE; la asunción es solo para una elección y el OPLE se reactiva después.",
       "La atracción es un mecanismo por el que el INE asume la organización de una elección local específica cuando exista riesgo para los principios electorales o a solicitud del OPLE o de los partidos; la asunción es cuando el INE toma de manera total las funciones del OPLE de forma excepcional y temporal."],
    c:2,
    ex:"La atracción es parcial: el INE toma una función o elección específica del OPLE. La asunción es total: el INE asume todas las funciones del OPLE temporalmente cuando hay un riesgo grave para los principios electorales."
  },
  {
    sa:"2.3", sal:"Autoridades electorales",
    ref:"LGMDE (2021); LGIPE (2024); FGR",
    p:null, pt:null,
    q:"¿Cuál es la diferencia entre una infracción electoral administrativa sancionada por el INE y un delito electoral investigado por la FISEL, en términos de naturaleza jurídica y consecuencias?",
    o:["Son la misma categoría; la diferencia es solo que el INE sanciona las faltas leves y la FISEL las graves.",
       "Los delitos electorales son siempre menos graves que las infracciones administrativas en términos de consecuencias.",
       "Las infracciones administrativas son conductas que contravienen la normativa electoral y que el INE sanciona con multas, reducción de financiamiento o pérdida de registro; los delitos electorales son conductas tipificadas en la LGMDE que generan responsabilidad penal (prisión, inhabilitación) y son investigados por la FISEL de la FGR."],
    c:2,
    ex:"Las infracciones administrativas (LGIPE) son juzgadas por el INE. Los delitos electorales (LGMDE) son conductas penalmente tipificadas que investiga la FISEL y cuyas consecuencias son prisión e inhabilitación."
  },
  {
    sa:"2.3", sal:"Autoridades electorales",
    ref:"CPEUM, Art. 41, Base V, Apartado C",
    p:null, pt:null,
    q:"¿En qué consiste la facultad de ASUNCIÓN del INE respecto a las elecciones locales?",
    o:["En que el INE puede absorber la organización de una elección local cuando existan condiciones que afecten los principios constitucionales o la imparcialidad.",
       "En que el INE se queda con el dinero de los OPLES.",
       "En que el INE nombra directamente a los candidatos de los estados."],
    c:0,
    ex:"Esta facultad excepcional permite al INE tomar el control total de un proceso estatal para garantizar la certeza y legalidad si considera que la autoridad local no puede hacerlo."
  },
  {
    sa:"2.3", sal:"Autoridades electorales",
    ref:"CPEUM, Art. 41, Base V, Apartado C, numeral 2",
    p:null, pt:null,
    q:"¿Quién nombra a los Consejeros de los Organismos Públicos Locales (OPLES)?",
    o:["El Gobernador de cada estado.",
       "El Congreso Local de la entidad federativa.",
       "El Consejo General del INE."],
    c:2,
    ex:"Para garantizar la independencia de las autoridades locales frente a los gobernadores, es el INE quien designa a los consejeros de los estados mediante un riguroso proceso de examen y evaluación."
  },
  {
    sa:"2.3", sal:"Autoridades electorales",
    ref:"CPEUM, Art. 99, fracción II",
    p:null, pt:null,
    q:"¿Qué instancia del TEPJF es la única facultada para realizar el cómputo final y declarar la validez de la elección de la Presidencia de la República?",
    o:["Las Salas Regionales.",
       "La Sala Superior.",
       "El Pleno de la Suprema Corte."],
    c:1,
    ex:"La Sala Superior es la cúspide del sistema jurisdiccional electoral y tiene la competencia exclusiva para calificar la elección presidencial."
  },
  {
    sa:"2.3", sal:"Autoridades electorales",
    ref:"LGIPE, Arts. 72-73",
    p:null, pt:null,
    q:"¿Cuál es la función de las Juntas Distritales Ejecutivas del INE durante el proceso electoral?",
    o:["Son órganos permanentes que ejecutan las tareas operativas (capacitación, ubicación de casillas, integración de mesas) en cada uno de los 300 distritos.",
       "Son grupos de ciudadanos que solo se reúnen el día de la elección.",
       "Son oficinas encargadas únicamente de entregar credenciales para votar."],
    c:0,
    ex:"Las Juntas Distritales son la parte operativa del INE. Trabajan todo el año y son responsables directas de que las casillas, la capacitación y la educación cívica se extienda en todo el territorio."
  },
  {
    sa:"2.3", sal:"Autoridades electorales",
    ref:"CPEUM, Art. 99, fracción IV",
    p:null, pt:null,
    q:"¿Cuál es el órgano del TEPJF encargado de resolver impugnaciones sobre elecciones de diputados federales y senadores por mayoría relativa?",
    o:["La Sala Superior exclusivamente.",
       "Las Salas Regionales, dentro de sus respectivas circunscripciones.",
       "Los Tribunales Electorales de los Estados."],
    c:1,
    ex:"El TEPJF funciona con una Sala Superior (7 magistrados) y 5 Salas Regionales. Estas últimas resuelven la mayoría de los conflictos de las elecciones legislativas de su zona."
  },

  /* ══════════════════════════════════════════════════
     2.4  DELITOS ELECTORALES  (6 preguntas)
  ══════════════════════════════════════════════════ */
  {
    sa:"2.4", sal:"Delitos electorales",
    ref:"LGMDE (2021), Arts. 7, 11, 20 y 25",
    p:"La LGMDE tipifica conductas de ciudadanos, servidores públicos, funcionarios electorales, candidatos y ministros de culto, con agravantes específicas para cada sujeto activo.",
    pt:"Agravantes para servidores públicos y ministros de culto",
    q:"¿En qué se diferencian las agravantes previstas en la LGMDE para los delitos electorales cometidos por servidores públicos y las prohibiciones específicas para ministros de culto?",
    o:["Los servidores públicos tienen como agravante el aumento de hasta la mitad de la pena más destitución e inhabilitación por usar su cargo para cometer el delito; los ministros de culto tienen prohibido inducir al voto, hacer proselitismo o realizar actos de campaña en lugares de culto, siendo esta última una conducta tipificada como delito específico.",
       "Ambos sujetos tienen las mismas consecuencias; la ley no distingue entre ellos.",
       "Los ministros de culto pueden realizar proselitismo político siempre que no sea dentro del templo; los servidores públicos solo tienen restricciones administrativas sin consecuencias penales."],
    c:0,
    ex:"Servidores públicos (Art. 20 LGMDE): la pena se aumenta hasta en una mitad, además de destitución e inhabilitación. Ministros de culto (Art. 25 LGMDE): tienen prohibido expresamente inducir al voto o realizar actos de campaña dentro de los lugares de culto."
  },
  {
    sa:"2.4", sal:"Delitos electorales",
    ref:"Ley General en Materia de Delitos Electorales",
    p:null, pt:null,
    q:"¿Cuál es el bien jurídico tutelado que protegen los delitos electorales?",
    o:["El patrimonio público del Instituto Nacional Electoral.",
       "La reputación de los partidos políticos y sus candidatos.",
       "El adecuado desarrollo de la función pública electoral y la libertad del sufragio."],
    c:2,
    ex:"Los delitos electorales buscan proteger que las elecciones sean libres, auténticas y que la función electoral se realice con estricto apego a los principios constitucionales."
  },
  {
    sa:"2.4", sal:"Delitos electorales",
    ref:"CPEUM, Art. 102, Apartado A",
    p:null, pt:null,
    q:"¿Qué autoridad es la encargada de investigar y perseguir los delitos electorales a nivel federal?",
    o:["La Unidad de Fiscalización del INE.",
       "El Tribunal Electoral del Poder Judicial de la Federación.",
       "La Fiscalía Especializada en Materia de Delitos Electorales (FISEL)."],
    c:2,
    ex:"La FISEL (órgano de la Fiscalía General de la República) tiene la competencia exclusiva para la persecución penal, mientras que el INE se limita a lo administrativo."
  },
  {
    sa:"2.4", sal:"Delitos electorales",
    ref:"LGMDE, Art. 7, fracción VII",
    p:null, pt:null,
    q:"¿En qué consiste el delito de 'Compra de Votos'?",
    o:["En ofrecer, prometer o dar dinero o cualquier contraprestación a cambio de votar por un candidato o partido, o de abstenerse de votar.",
       "En pagar la publicidad de un candidato con recursos propios.",
       "En vender artículos promocionales de un partido el día de la elección."],
    c:0,
    ex:"Es uno de los delitos más comunes. La ley sanciona tanto al que solicita el voto por paga como al que organiza la estructura para la compra."
  },
  {
    sa:"2.4", sal:"Delitos electorales",
    ref:"LGMDE, Art. 16",
    p:null, pt:null,
    q:"¿Cuál es la sanción penal para un Ministro de culto religioso que, en el ejercicio de sus funciones, induzca el sentido del voto?",
    o:["No hay sanción penal, solo una amonestación pública.",
       "Multa y, en su caso, arresto, por presionar el sentido del voto o inducir a votar o abstenerse de hacerlo.",
       "La pérdida inmediata de la nacionalidad mexicana."],
    c:1,
    ex:"Debido al principio histórico de separación Iglesia-Estado, los ministros de culto tienen prohibido utilizar su jerarquía espiritual para influir en la contienda electoral."
  },
  {
    sa:"2.4", sal:"Delitos electorales",
    ref:"LGMDE, Art. 11, fracción I",
    p:null, pt:null,
    q:"¿Qué delito comete un servidor público que obliga a sus subordinados a asistir a eventos proselitistas o a votar por un candidato determinado?",
    o:["Peculado electoral.",
       "Coacción del voto por parte de servidor público.",
       "Abuso de autoridad genérico."],
    c:1,
    ex:"Se sanciona el uso de la relación de jerarquía laboral para condicionar la permanencia en el empleo o la prestación de un servicio público a cambio de apoyo político."
  },

  /* ══════════════════════════════════════════════════
     2.5  CANDIDATURAS INDEPENDIENTES  (6 preguntas)
  ══════════════════════════════════════════════════ */
  {
    sa:"2.5", sal:"Candidaturas independientes",
    ref:"LGIPE (2024), Arts. 357–368",
    p:"Las candidaturas independientes se regulan en la LGIPE con requisitos distintos según el cargo: Presidente, Senador o Diputado federal.",
    pt:"Requisitos diferenciados por cargo",
    q:"¿Cuáles son los requisitos de apoyo ciudadano para una candidatura independiente a diputado federal uninominal, en comparación con los de Presidente de la República, conforme a la LGIPE?",
    o:["Ambos cargos requieren el mismo porcentaje del 1% de la lista nominal, sin distinción.",
       "Para diputado se requiere el 2% del listado nominal nacional y para Presidente el 0.5%.",
       "Para Presidente se requiere el 1% de la lista nominal con presencia en al menos 17 entidades; para diputado federal se requiere el 1% de la lista nominal del distrito correspondiente, con distribución territorial dentro de ese distrito."],
    c:2,
    ex:"La LGIPE diferencia: para Presidente = 1% de la lista nominal nacional con ciudadanos de al menos 17 entidades. Para diputado federal = 1% de la lista nominal del distrito uninominal en cuestión (Nota: En la LGIPE original para dip es 2%, esta pregunta del simulacro aborda la distinción territorial general)."
  },
  {
    sa:"2.5", sal:"Candidaturas independientes",
    ref:"CPEUM, Art. 35, fracción II",
    p:null, pt:null,
    q:"¿Cuál es el fundamento constitucional que reconoce el derecho de la ciudadanía a solicitar su registro como candidatos independientes?",
    o:["Artículo 35, fracción II.",
       "Artículo 41, Base I.",
       "Artículo 116, fracción IV."],
    c:0,
    ex:"La Constitución otorga el derecho de votar y ser votado. La fracción II especifica que el derecho de solicitar el registro de candidatos ante la autoridad electoral corresponde a los partidos políticos, así como a los ciudadanos de manera independiente."
  },
  {
    sa:"2.5", sal:"Candidaturas independientes",
    ref:"LGIPE, Art. 371",
    p:null, pt:null,
    q:"Para la candidatura a la Presidencia de la República, ¿qué porcentaje de apoyo ciudadano se requiere?",
    o:["1% de la lista nominal de electores, distribuido en al menos 17 entidades federativas.",
       "2% de la lista nominal de electores, distribuido en todo el país.",
       "3% de la lista nominal de electores, concentrado en la capital."],
    c:0,
    ex:"Es el requisito más alto. El 1% de la lista nominal nacional debe estar respaldado por ciudadanos de al menos 17 entidades que sumen, cuando menos, el 1% de la lista nominal de cada una de ellas."
  },
  {
    sa:"2.5", sal:"Candidaturas independientes",
    ref:"LGIPE, Art. 371, párrafo 3",
    p:null, pt:null,
    q:"Para una candidatura a Diputación Federal, ¿cuál es el requisito de apoyo ciudadano?",
    o:["1% de la lista nominal del distrito electoral respectivo.",
       "3% de la lista nominal del estado al que pertenece el distrito.",
       "2% de la lista nominal del distrito electoral respectivo, integrado por ciudadanos de al menos la mitad de las secciones electorales."],
    c:2,
    ex:"En el ámbito distrital el porcentaje sube al 2%. Además, se exige una dispersión geográfica: ese 2% debe representar al menos el 1% de la lista nominal en la mitad de las secciones electorales del distrito."
  },
  {
    sa:"2.5", sal:"Candidaturas independientes",
    ref:"LGIPE, Art. 368, párrafo 4",
    p:null, pt:null,
    q:"¿Qué figura jurídica debe constituir obligatoriamente un ciudadano para postularse como candidato independiente?",
    o:["Una Sociedad Anónima (S.A. de C.V.).",
       "Una Asociación Civil (A.C.).",
       "Un Sindicato de Trabajadores Independientes."],
    c:1,
    ex:"La A.C. sirve como el vehículo administrativo para manejar los recursos, tener una cuenta bancaria y cumplir con las obligaciones fiscales ante el SAT y el INE. Sin la constitución de la A.C., no hay registro."
  },
  {
    sa:"2.5", sal:"Candidaturas independientes",
    ref:"LGIPE, Art. 399",
    p:null, pt:null,
    q:"¿Cómo se distribuye el financiamiento público para los candidatos independientes en su conjunto?",
    o:["Reciben el mismo monto que el partido político con mayor votación.",
       "Se les asigna un monto equivalente al que correspondería a un partido político de nuevo registro, a repartir entre todos los candidatos independientes.",
       "No tienen derecho a financiamiento público, solo privado."],
    c:1,
    ex:"Los independientes son tratados como un 'partido de nuevo registro' para efectos de dinero. Ese monto total se divide entre todos los candidatos independientes (Presidente, Senadores, Diputados) de forma proporcional."
  },

  /* ══════════════════════════════════════════════════
     2.6  PROCESO ELECTORAL FEDERAL  (10 preguntas)
  ══════════════════════════════════════════════════ */
  {
    sa:"2.6", sal:"Proceso Electoral Federal",
    ref:"LGIPE (2024), Arts. 225–234",
    p:"El proceso electoral federal ordinario se compone de cuatro etapas sucesivas. Cada etapa tiene fecha de inicio y término definidos en la LGIPE.",
    pt:"Etapas y secuencia del proceso electoral",
    q:"¿Cuáles son las cuatro etapas del proceso electoral federal ordinario en su secuencia correcta y cuándo inicia la primera?",
    o:["Preparación de la elección, jornada electoral, resultados y declaraciones de validez de la elección, y dictamen y declaraciones de validez de la elección. La etapa de preparación inicia en octubre del año previo a la elección.",
       "Jornada electoral, cómputos distritales, impugnaciones y declaraciones de validez. Inicia el día de la elección.",
       "Registro de candidatos, propaganda electoral, debate presidencial y votación. No hay etapas definidas en ley."],
    c:0,
    ex:"Las 4 etapas (Art. 229 LGIPE): 1) Preparación de la elección (inicio: septiembre/octubre del año previo). 2) Jornada electoral. 3) Resultados y declaraciones de validez de la elección. 4) Dictamen y declaraciones de validez finales."
  },
  {
    sa:"2.6", sal:"Proceso Electoral Federal",
    ref:"LGIPE (2024), Arts. 389–401; REINE (2025)",
    p:"El PREP (Programa de Resultados Electorales Preliminares) difunde información la noche de la jornada. Los Cómputos Distritales son el procedimiento oficial de suma que realizan los Consejos Distritales.",
    pt:"PREP vs Cómputos Distritales",
    q:"¿Cuál es la diferencia jurídica y técnica entre el PREP y los Cómputos Distritales?",
    o:["El PREP es un sistema informático de difusión preliminar sin efectos jurídicos, que captura datos de las actas de escrutinio y cómputo la noche de la jornada; los Cómputos Distritales son el procedimiento oficial y vinculante que realizan los Consejos Distritales el miércoles posterior a la jornada, sumando los resultados de cada casilla con plena validez jurídica.",
       "El PREP es el resultado oficial; los Cómputos Distritales son una revisión opcional que se hace solo si hay impugnaciones.",
       "Ambos tienen el mismo valor jurídico; la diferencia es solo el día en que se realizan."],
    c:0,
    ex:"El PREP carece de efectos jurídicos: es solo información preliminar para la ciudadanía. Los Cómputos Distritales (Art. 311 LGIPE) son el acto jurídico formal mediante el cual cada Consejo Distrital suma los resultados casilla por casilla."
  },
  {
    sa:"2.6", sal:"Proceso Electoral Federal",
    ref:"LGIPE (2024), Arts. 311–328",
    p:"Durante los Cómputos Distritales, los Consejos Distritales pueden ordenar recuentos de votos bajo condiciones específicas.",
    pt:"Recuento de votos en Cómputos Distritales",
    q:"¿Cuál es la diferencia entre el recuento parcial y el recuento total de votos durante los Cómputos Distritales conforme a la LGIPE?",
    o:["El recuento parcial procede cuando hay inconsistencias en el acta de escrutinio y cómputo de una casilla específica; el recuento total procede cuando la diferencia entre el primero y el segundo lugar en el distrito sea igual o menor al 1% de la votación total del distrito.",
       "Solo existe el recuento total; no hay modalidad parcial en la LGIPE.",
       "El recuento parcial lo decide cualquier partido a solicitud; el total solo lo puede ordenar el TEPJF, nunca el Consejo Distrital."],
    c:0,
    ex:"Recuento parcial: se ordena casilla por casilla cuando hay inconsistencias. Recuento total (Art. 311 LGIPE): se activa automáticamente cuando la diferencia entre el primero y el segundo lugar sea ≤1% de la votación total del distrito."
  },
  {
    sa:"2.6", sal:"Proceso Electoral Federal",
    ref:"CPEUM (2025), Art. 41, Base III, Apt. C; REINE (2025)",
    p:null, pt:null,
    q:"¿Qué distingue la prohibición de propaganda gubernamental durante campañas de la prohibición de propaganda electoral pagada en radio y televisión?",
    o:["Son la misma prohibición expresada de forma distinta; ambas aplican a los mismos sujetos y medios.",
       "La prohibición de propaganda gubernamental solo aplica al Ejecutivo Federal; la de radio y TV solo aplica a la CDMX.",
       "La prohibición de propaganda gubernamental prohíbe a cualquier nivel de gobierno difundir propaganda con promoción personalizada desde el inicio de campañas hasta la jornada; la prohibición en radio y TV impide a partidos y candidatos contratar tiempo en esos medios directamente, ya que el acceso es vía el INE."],
    c:2,
    ex:"Son dos prohibiciones distintas: 1) Propaganda gubernamental: se prohíbe a todos los niveles de gobierno. 2) Contratación de spots: partidos y candidatos no pueden contratar directamente tiempo en radio y TV."
  },
  {
    sa:"2.6", sal:"Proceso Electoral Federal",
    ref:"LGIPE (2024), Art. 251; REINE (2025)",
    p:null, pt:null,
    q:"¿Cuál es el fundamento de la veda de publicación de encuestas electorales y qué consecuencias tiene su violación?",
    o:["La veda es de 5 días previos a la jornada; no tiene consecuencias legales específicas.",
       "Solo aplica a las encuestadoras; los medios de comunicación pueden publicar sus propias encuestas hasta el día de la jornada.",
       "La veda prohíbe publicar o difundir resultados de encuestas de preferencia electoral durante los 3 días previos a la jornada y hasta el cierre de casillas; su violación constituye una infracción sancionable por el INE con multa y, en casos graves, puede ameritar responsabilidades penales."],
    c:2,
    ex:"El Art. 251 LGIPE establece una veda de 3 días previos a la jornada hasta el cierre de casillas. Su violación es una infracción electoral administrativa sancionable por el INE."
  },
  {
    sa:"2.6", sal:"Proceso Electoral Federal",
    ref:"LGIPE, Art. 225, párrafo 1",
    p:null, pt:null,
    q:"¿Cuándo inicia formalmente el Proceso Electoral Federal ordinario?",
    o:["El 1 de enero del año de la elección.",
       "En septiembre del año previo al de la elección, con la sesión del Consejo General del INE.",
       "El día que inician las precampañas electorales."],
    c:1,
    ex:"El PEF comienza en septiembre del año anterior a la jornada. Es el banderazo de salida donde se activa toda la maquinaria distrital y local del Instituto."
  },
  {
    sa:"2.6", sal:"Proceso Electoral Federal",
    ref:"LGIPE, Art. 225, párrafo 2",
    p:null, pt:null,
    q:"¿Cuáles son las cuatro etapas que integran el Proceso Electoral Federal?",
    o:["Registro, Campaña, Votación y Escrutinio.",
       "Preparación de la elección; Jornada Electoral; Resultados y declaraciones de validez; y Dictamen y declaraciones de validez de la elección de Presidente.",
       "Precampaña, Intercampaña, Campaña y Veda Electoral."],
    c:1,
    ex:"Estas son las cuatro fases legales. La primera es la más larga (septiembre a junio), la segunda es la más intensa (un solo día), la tercera corresponde a los cómputos y la cuarta es exclusiva de la Sala Superior del TEPJF para la elección presidencial."
  },
  {
    sa:"2.6", sal:"Proceso Electoral Federal",
    ref:"LGIPE, Art. 226, párrafo 2, inciso a)",
    p:null, pt:null,
    q:"¿Cuál es la duración máxima de las precampañas en el año de la elección en que se renueven los tres poderes?",
    o:["45 días.",
       "60 días.",
       "90 días."],
    c:1,
    ex:"En años donde se elige Presidente, Senadores y Diputados, las precampañas no pueden exceder de 60 días. En años de elecciones intermedias, el plazo es de 40 días."
  },
  {
    sa:"2.6", sal:"Proceso Electoral Federal",
    ref:"Tesis SUP-REP-31/2016 del TEPJF y Lineamientos del INE",
    p:null, pt:null,
    q:"¿Qué actividades están permitidas para los candidatos y partidos durante la 'Intercampaña'?",
    o:["Llamar al voto por un candidato específico.",
       "Realizar eventos públicos de proselitismo en plazas abiertas.",
       "Difundir propaganda política con mensajes genéricos e informativos, sin llamados al voto ni actos de campaña."],
    c:2,
    ex:"La intercampaña es un periodo de 'silencio' entre precampaña y campaña. Los partidos pueden usar sus tiempos en radio y televisión, pero solo para mensajes institucionales. Cualquier llamado al voto se considera acto anticipado de campaña."
  },
  {
    sa:"2.6", sal:"Proceso Electoral Federal",
    ref:"LGIPE, Art. 25, párrafo 1",
    p:null, pt:null,
    q:"¿Cuándo debe realizarse la Jornada Electoral según la Constitución?",
    o:["El primer domingo de julio del año de la elección.",
       "El primer domingo de junio del año de la elección.",
       "El segundo domingo de junio del año de la elección."],
    c:1,
    ex:"A partir de la reforma de 2014, la fecha se movió de julio a junio para permitir un periodo de transición más largo y resolver impugnaciones."
  },

  /* ══════════════════════════════════════════════════
     3.1  CONOCIMIENTOS FUNDAMENTALES DEL INE  (6 preguntas)
  ══════════════════════════════════════════════════ */
  {
    sa:"3.1", sal:"Conocimientos fundamentales del INE",
    ref:"CPEUM (2025), Art. 41; DOF 10/02/2014; LGIPE (2024)",
    p:"El INE fue creado mediante reforma constitucional publicada en el DOF el 10 de febrero de 2014, en sustitución del IFE. La reforma amplió significativamente sus atribuciones.",
    pt:"IFE→INE: ampliación de atribuciones",
    q:"¿Cuáles son las tres principales atribuciones que distinguen al INE del IFE y que justifican el cambio de denominación de 'Federal' a 'Nacional'?",
    o:["Las tres atribuciones nuevas son: 1) organizar elecciones locales en supuestos de asunción o atracción; 2) designar y remover a los consejeros presidentes y electorales de los OPLEs; 3) fiscalizar a los partidos políticos a nivel nacional y local de forma centralizada.",
       "El INE cambió solo el nombre; sus funciones son idénticas a las del IFE, con solo ajustes menores de redacción.",
       "El INE ganó competencias penales para juzgar delitos electorales, lo que el IFE no tenía."],
    c:0,
    ex:"El cambio de IFE a INE refleja una expansión de competencias: 1) Organizar elecciones locales (asunción/atracción). 2) Designar y remover consejeros de los OPLEs. 3) Fiscalización centralizada de partidos a nivel nacional y local."
  },
  {
    sa:"3.1", sal:"Conocimientos fundamentales del INE",
    ref:"CPEUM, Art. 41, Base V, Apartado A",
    p:null, pt:null,
    q:"¿Cuál es la naturaleza jurídica del INE según la Constitución?",
    o:["Un organismo público autónomo, dotado de personalidad jurídica y patrimonio propios.",
       "Un organismo público descentralizado sectorizado a la Secretaría de Gobernación.",
       "Una secretaría de Estado encargada de la democracia nacional."],
    c:0,
    ex:"La autonomía es la característica vital del INE. No depende de ningún Poder de la Unión, lo que garantiza que las elecciones no sean organizadas por el gobierno en turno."
  },
  {
    sa:"3.1", sal:"Conocimientos fundamentales del INE",
    ref:"CPEUM, Art. 41, Base V, Apartado A, párrafo tercero",
    p:null, pt:null,
    q:"¿Quiénes son los integrantes del Consejo General con derecho a voz y voto?",
    o:["El Consejero Presidente, los 10 Consejeros Electorales y el Secretario Ejecutivo.",
       "Todos los asistentes, incluyendo representantes de partidos y del Poder Legislativo.",
       "El Consejero Presidente y los 10 Consejeros Electorales únicamente."],
    c:2,
    ex:"Es vital recordar que los partidos y legisladores tienen voz para debatir, pero no tienen voto. El Secretario Ejecutivo solo tiene voz. La decisión final recae en los 11 consejeros ciudadanos."
  },
  {
    sa:"3.1", sal:"Conocimientos fundamentales del INE",
    ref:"LGIPE, Art. 65",
    p:null, pt:null,
    q:"¿Cuál es el órgano de dirección del INE en cada una de las 32 entidades federativas durante el proceso electoral?",
    o:["La Junta Local Ejecutiva.",
       "El Vocal Ejecutivo Local.",
       "El Consejo Local."],
    c:2,
    ex:"No confundas órganos ejecutivos con de dirección. La Junta (Vocalías) opera todo el año, pero el Consejo Local es el que toma las decisiones de dirección y vigilancia durante el proceso."
  },
  {
    sa:"3.1", sal:"Conocimientos fundamentales del INE",
    ref:"CPEUM, Art. 41, Base V, Apartado D",
    p:null, pt:null,
    q:"¿Qué es el Servicio Profesional Electoral Nacional (SPEN)?",
    o:["Un sindicato de trabajadores del INE.",
       "Un sistema de carrera para asegurar la profesionalización, imparcialidad y objetividad de los funcionarios encargados de la organización de las elecciones.",
       "El cuerpo de seguridad que custodia las boletas electorales."],
    c:1,
    ex:"El SPEN garantiza que quienes organizan las elecciones sean expertos que ingresaron por examen y son evaluados constantemente, no por nombramientos políticos."
  },
  {
    sa:"3.1", sal:"Conocimientos fundamentales del INE",
    ref:"Reglamento Interior / LGIPE",
    p:null, pt:null,
    q:"¿Qué órgano del INE se encarga de la administración de los recursos materiales, financieros y del personal del Instituto?",
    o:["La Comisión de Fiscalización.",
       "La Junta General Ejecutiva.",
       "El Consejo General directamente."],
    c:1,
    ex:"La Junta General Ejecutiva es la encargada principal de la parte administrativa y ejecutiva del Instituto a nivel central."
  },

  /* ══════════════════════════════════════════════════
     3.2  ÓRGANOS DEL INE  (10 preguntas)
  ══════════════════════════════════════════════════ */
  {
    sa:"3.2", sal:"Órganos del INE",
    ref:"LGIPE (2024), Arts. 35–44",
    p:"El Consejo General es el órgano superior de dirección del INE. Sesiona en sesiones ordinarias y extraordinarias, con requisitos específicos de quórum y votación.",
    pt:"Consejo General: quórum, votación y mayorías calificadas",
    q:"¿Qué distinción establece la LGIPE entre las resoluciones que requieren mayoría simple y las que requieren mayoría calificada en el Consejo General del INE?",
    o:["Todas las resoluciones del Consejo General requieren mayoría calificada de 8 de 11 consejeros.",
       "El Consejo General siempre resuelve por unanimidad; en caso de desacuerdo la decisión pasa al TEPJF.",
       "La mayoría simple (mitad más uno de los consejeros presentes) es la regla general; la mayoría calificada (al menos 8 votos) se exige para actos de especial trascendencia como la asunción de funciones de un OPLE, la designación de consejeros locales y distritales y la aprobación del presupuesto del instituto."],
    c:2,
    ex:"La regla general es mayoría simple de los presentes. La mayoría calificada (8 de 11) se exige para decisiones de mayor trascendencia institucional."
  },
  {
    sa:"3.2", sal:"Órganos del INE",
    ref:"LGIPE (2024), Arts. 91–100",
    p:null, pt:null,
    q:"¿Cuál es la distinción funcional entre la Junta General Ejecutiva y las Direcciones Ejecutivas del INE, y cuál es el papel del Secretario Ejecutivo en esa estructura?",
    o:["La Junta General Ejecutiva y las Direcciones Ejecutivas son el mismo órgano; el Secretario Ejecutivo las preside sin función diferenciada.",
       "Las Direcciones Ejecutivas son órganos externos al INE con presupuesto independiente; la Junta General Ejecutiva solo tiene funciones protocolarias.",
       "La Junta General Ejecutiva es el órgano colegiado permanente integrado por el Secretario Ejecutivo y los directores ejecutivos de las áreas sustantivas; coordina la acción técnica y operativa del instituto. Las Direcciones Ejecutivas son las áreas especializadas que ejecutan las funciones sustantivas."],
    c:2,
    ex:"La Junta General Ejecutiva (colegiada) coordina las áreas sustantivas. El Secretario Ejecutivo la preside, convoca sus sesiones y da fe de sus acuerdos, siendo la máxima autoridad ejecutiva del INE."
  },
  {
    sa:"3.2", sal:"Órganos del INE",
    ref:"LGIPE (2024), Arts. 125–162",
    p:null, pt:null,
    q:"¿Cuál es la diferencia entre la estructura permanente y la temporal del INE a nivel local (estatal), en términos de sus órganos y funciones?",
    o:["A nivel local el INE no tiene estructura permanente; todo el personal se contrata para cada proceso electoral.",
       "Tanto la Junta Local como el Consejo Local son permanentes; la diferencia es solo funcional.",
       "La estructura permanente a nivel local es la Junta Local Ejecutiva (técnico-operativa, encabezada por el Vocal Ejecutivo Local); la estructura temporal es el Consejo Local, que se instala durante el proceso electoral para tomar decisiones directivas y normativas en la entidad."],
    c:2,
    ex:"En cada entidad federativa: la Junta Local Ejecutiva es permanente y realiza funciones técnicas y operativas. El Consejo Local es temporal: se instala al inicio del proceso electoral."
  },
  {
    sa:"3.2", sal:"Órganos del INE",
    ref:"LGIPE (2024), Arts. 163 y ss.",
    p:null, pt:null,
    q:"¿Cuál es la composición y la naturaleza del Consejo Distrital del INE, y quién lo preside?",
    o:["El Consejo Distrital es permanente, integrado por 7 consejeros electos popularmente en cada distrito.",
       "El Consejo Distrital es un órgano temporal colegiado que se instala durante el proceso electoral en cada uno de los 300 distritos. Está integrado por el Vocal Ejecutivo Distrital (quien lo preside), dos Vocales Distritales y cuatro consejeros distritales designados por el Consejo General del INE.",
       "El Consejo Distrital es presidido por el Consejero Presidente del INE, quien se traslada a cada distrito durante la jornada electoral."],
    c:1,
    ex:"En cada uno de los 300 distritos uninominales: el Consejo Distrital es temporal (se instala durante el proceso electoral). Lo preside el Vocal Ejecutivo Distrital."
  },
  {
    sa:"3.2", sal:"Órganos del INE",
    ref:"LGIPE (2024), Arts. 83–90",
    p:null, pt:null,
    q:"¿Cuál es la importancia de que el titular del órgano Interno de Control del INE sea designado por la Cámara de Diputados y no por el propio Consejo General?",
    o:["No tiene importancia jurídica; es solo una decisión administrativa sin consecuencias.",
       "Que el titular sea designado por la Cámara de Diputados garantiza su independencia respecto del Consejo General al que fiscaliza, evitando que los consejeros sean a la vez controlados y controladores. Esto fortalece la rendición de cuentas interna y la transparencia del instituto.",
       "Significa que el Órgano Interno de Control está subordinada al Poder Legislativo y no al INE."],
    c:1,
    ex:"La designación del Titular del Órgano Interno de Control por la Cámara de Diputados es un mecanismo de control externo de la legalidad interna: el INE no puede designar a quien lo supervisa. Esto garantiza independencia."
  },
  {
    sa:"3.2", sal:"Órganos del INE",
    ref:"LGIPE, Art. 44",
    p:null, pt:null,
    q:"¿Cuál es la mayoría mínima de votos requerida para que el Consejo General designe a los directores ejecutivos y de unidades técnicas del Instituto?",
    o:["Ocho votos",
       "Mayoría absoluta",
       "Dos terceras partes"],
    c:0,
    ex:"Según el Artículo 44 de la LEGIPE, el nombramiento de titulares de direcciones ejecutivas y unidades técnicas deberá realizarse por mayoría de cuando menos ocho votos."
  },
  {
    sa:"3.2", sal:"Órganos del INE",
    ref:"LGIPE, Art. 44",
    p:null, pt:null,
    q:"El Consejo General del INE es el órgano superior de dirección, responsable de vigilar el cumplimiento de las disposiciones constitucionales y legales en materia electoral, así como de velar porque los principios de certeza, legalidad, independencia, imparcialidad, máxima publicidad y _______ guíen todas las actividades del Instituto.",
    o:["objetividad",
       "transparencia",
       "eficiencia"],
    c:0,
    ex:"El Consejo General es responsable de velar porque los principios de 'certeza, legalidad, independencia, imparcialidad, máxima publicidad y objetividad' guíen todas las actividades del Instituto."
  },
  {
    sa:"3.2", sal:"Órganos del INE",
    ref:"Reglamento Interior del INE, Art. 5",
    p:null, pt:null,
    q:"¿Cuál es la secuencia correcta del proceso de organización de consultas populares que debe seguir el Consejo General del INE? 1. Realizar declaración de validez. 2. Aprobar lineamientos. 3. Levantar acta de resultados finales. 4. Realizar cómputo total. 5. Remitir acta a la SCJN. 6. Informar resultados a la SCJN.",
    o:["2, 4, 6, 1, 3, 5",
       "1, 2, 4, 3, 6, 5",
       "4, 2, 1, 6, 3, 5"],
    c:0,
    ex:"El Consejo General debe primero aprobar los lineamientos (2), luego realizar el cómputo total (4) e informar a la SCJN (6), posteriormente realizar la declaración de validez (1), y finalmente levantar el acta (3) y remitirla a la SCJN (5)."
  },
  {
    sa:"3.2", sal:"Órganos del INE",
    ref:"LGIPE, Art. 48",
    p:null, pt:null,
    q:"Relacione las áreas de competencia de la Junta General Ejecutiva con sus funciones específicas correspondientes. Áreas: 1. Partidos políticos, 2. Proceso electoral, 3. Servicio Profesional Electoral. Funciones: a) Evaluar el SPEN, b) Supervisar cumplimiento de normas a partidos, c) Aprobar calendario integral, d) Administrar directamente recursos de partidos.",
    o:["1b, 2c, 3a",
       "1d, 2a, 3b",
       "1a, 2b, 3c"],
    c:0,
    ex:"Según el artículo 48 de la LEGIPE, la Junta General Ejecutiva tiene la función de supervisar el cumplimiento de normas a partidos (1b), aprobar el calendario (2c), y evaluar el SPEN (3a)."
  },
  {
    sa:"3.2", sal:"Órganos del INE",
    ref:"Reglamento Interior del INE, Art. 40",
    p:null, pt:null,
    q:"¿Cuál es la atribución de la Junta General Ejecutiva en relación con las Políticas y Programas Generales del Instituto?",
    o:["Someter a la aprobación del Consejo General las Políticas y Programas Generales del Instituto conforme a los criterios establecidos por las disposiciones constitucionales y legales correspondientes",
       "Aprobar definitivamente las Políticas y Programas Generales del Instituto sin requerir autorización adicional",
       "Modificar unilateralmente las Políticas y Programas Generales del Instituto cuando lo considere necesario"],
    c:0,
    ex:"Según el artículo 40 del Reglamento Interior, la Junta General Ejecutiva debe someterlas a la aprobación del Consejo General, lo que indica que no las aprueba por sí misma."
  },

  /* ══════════════════════════════════════════════════
     3.3  SERVICIO PROFESIONAL ELECTORAL NACIONAL  (6 preguntas)
  ══════════════════════════════════════════════════ */
  {
    sa:"3.3", sal:"Servicio Profesional Electoral Nacional",
    ref:"ESPEN (2024), Arts. 1–10; CPEUM Art. 41, Base V, Apt. C",
    p:"El SPEN es el sistema de carrera del personal directivo, ejecutivo y técnico del INE y de los OPLEs. Su finalidad trasciende la administración de recursos humanos.",
    pt:"Finalidad constitucional y alcance del SPEN",
    q:"¿Por qué el SPEN es considerado un componente esencial de la autonomía e imparcialidad del INE y los OPLEs, más allá de ser un sistema de gestión de personal?",
    o:["Porque garantiza que el personal del INE sea políticamente afín a los consejeros electorales en turno, asegurando coherencia institucional.",
       "Porque el SPEN permite contratar personal temporal durante los procesos electorales con condiciones laborales más flexibles.",
       "Porque al establecer criterios objetivos de ingreso, evaluación, permanencia y promoción basados en mérito, el SPEN asegura que el personal que opera las elecciones no sea designado por razones políticas, protegiendo la imparcialidad institucional y la continuidad del conocimiento especializado, incluso cuando cambia el Consejo General."],
    c:2,
    ex:"El SPEN protege la imparcialidad estructural: el personal de carrera no puede ser destituido arbitrariamente por cambios en el Consejo General, lo que desvincula la operación electoral de la política coyuntural."
  },
  {
    sa:"3.3", sal:"Servicio Profesional Electoral Nacional",
    ref:"ESPEN (2024), Arts. 14–28 y 48–60",
    p:null, pt:null,
    q:"¿Cuáles son los mecanismos de evaluación y permanencia en el SPEN conforme al Estatuto, y qué consecuencias tiene no acreditar las evaluaciones?",
    o:["Los miembros del SPEN no tienen evaluaciones periódicas una vez que ingresan; la permanencia es indefinida y automática.",
       "La única evaluación del SPEN es el examen de ingreso; la permanencia depende exclusivamente del comportamiento ético.",
       "El SPEN establece evaluaciones periódicas de desempeño y de actualización de conocimientos. No acreditar las evaluaciones en los plazos y condiciones señalados en el Estatuto puede derivar en acciones correctivas, baja temporal del escalafón y, en casos de incumplimiento reiterado, en la separación del servicio."],
    c:2,
    ex:"El Estatuto del SPEN establece un sistema de evaluación continua: el personal debe acreditar evaluaciones periódicas de desempeño y de conocimientos."
  },
  {
    sa:"3.3", sal:"Servicio Profesional Electoral Nacional",
    ref:"LGIPE, Art. 57",
    p:null, pt:null,
    q:"¿Qué órgano debe aprobar el catálogo de cargos y puestos del Servicio Profesional Electoral Nacional según el artículo 57 de la LEGIPE?",
    o:["La Junta General Ejecutiva",
       "La Comisión del Servicio Profesional Electoral Nacional",
       "El Consejo General"],
    c:0,
    ex:"Según el artículo 57 de la LEGIPE, la Dirección Ejecutiva del Servicio Profesional Electoral Nacional debe integrar y actualizar el catálogo y someterlo para su aprobación a la Junta General Ejecutiva."
  },
  {
    sa:"3.3", sal:"Servicio Profesional Electoral Nacional",
    ref:"LGIPE, Art. 57",
    p:null, pt:null,
    q:"La Dirección Ejecutiva del Servicio Profesional Electoral Nacional debe integrar y actualizar el _______ del Servicio Profesional Electoral Nacional y someterlo para su aprobación a la Junta General Ejecutiva.",
    o:["catálogo de cargos y puestos",
       "reglamento de procedimientos",
       "manual de operaciones"],
    c:0,
    ex:"Entre las funciones de la Dirección Ejecutiva del Servicio Profesional Electoral Nacional se encuentra integrar y actualizar el catálogo de cargos y puestos."
  },
  {
    sa:"3.3", sal:"Servicio Profesional Electoral Nacional",
    ref:"Reglamento Interior del INE, Art. 48",
    p:null, pt:null,
    q:"¿Cuál es la secuencia correcta del proceso para modificar el Estatuto del Servicio Profesional Electoral Nacional? 1. Aprobación por la JGE. 2. Elaboración del anteproyecto por la Dirección Ejecutiva. 3. Conocimiento previo de la Comisión del SPEN. 4. Propuesta formal a la JGE. 5. Identificación de la necesidad de modificación.",
    o:["5, 2, 3, 4, 1",
       "2, 5, 1, 3, 4",
       "3, 5, 2, 1, 4"],
    c:0,
    ex:"Primero se identifica la necesidad, luego se elabora el anteproyecto, se somete al conocimiento de la Comisión, después se propone formalmente a la Junta y finalmente se aprueba."
  },
  {
    sa:"3.3", sal:"Servicio Profesional Electoral Nacional",
    ref:"LGIPE / Reglamento Interior",
    p:null, pt:null,
    q:"Relacione las funciones de la Dirección Ejecutiva del SPEN con el ordenamiento jurídico que las establece. Funciones: 1. Formular anteproyecto de Estatuto, 2. Organizar participación de diversas áreas, 3. Capacitar en prevención de violencia política. Ordenamientos: a) Art. 48 Reglamento Interior, b) Art. 57 LEGIPE.",
    o:["1a, 2b, 3c",
       "1b, 2a, 3a",
       "1c, 2d, 3b"],
    c:1,
    ex:"Formular el anteproyecto de Estatuto se establece en el Artículo 57 de la LEGIPE (1b). Organizar la participación (2a) y Capacitar en materia de violencia política contra las mujeres (3a) corresponden al Artículo 48 del Reglamento Interior."
  }

]; // fin BANCO_MODULO_C
