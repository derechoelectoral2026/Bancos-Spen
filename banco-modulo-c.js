// ============================================================
//  BANCO DE PREGUNTAS — MÓDULO C · DERECHO ELECTORAL · SPEN INE
//  Versión: 1.0
//  Total: 40 preguntas · 13 subáreas · opción múltiple (3 opciones)
//
//  Bibliografía oficial:
//  CPEUM (2025) · LGIPE (2024) · LGPP (2023) · LGSMIME (2024)
//  LGMDE (2021) · Estatuto SPEN (2024) · REINE (2025)
//  LFCP (2021) · LFRM (2021) · Prud'homme, Cuad. N°15 (2016)
//
//  ¿Cómo editar una pregunta?
//    1. Busca el texto o la subárea (sa)
//    2. Modifica lo que necesites
//    3. Guarda — todos los simulacros que usen este banco
//       se actualizan automáticamente.
//
//  Estructura de cada pregunta:
//    sa    = clave de subárea ("1.1", "2.3", etc.)
//    sal   = nombre largo de la subárea
//    ref   = referencia bibliográfica
//    p     = pasaje/contexto (null si no hay)
//    pt    = título del pasaje (null si no hay)
//    q     = texto de la pregunta
//    o     = array de 3 opciones
//    c     = índice de la opción correcta (0, 1 o 2)
//    ex    = explicación de la respuesta correcta
// ============================================================

const BANCO_MODULO_C = [

  // ═══════════════════════════════════════════════════════════
  //  BLOQUE 1 · SISTEMA POLÍTICO MEXICANO
  // ═══════════════════════════════════════════════════════════

  // ── 1.1  Modelo constitucional  (5) ──
  { sa:"1.1", sal:"Modelo constitucional",
    ref:"CPEUM (2025), Arts. 39, 40 y 41",
    p:"El Art. 39 CPEUM establece que la soberanía nacional reside esencial y originariamente en el pueblo. El Art. 40 define la forma de gobierno. El Art. 41 fija las bases de la organización política.", pt:"Soberanía y forma de gobierno",
    q:"¿Cuál es la distinción jurídica entre los Arts. 39 y 40 de la CPEUM en relación con la soberanía y la forma de gobierno?",
    o:["El Art. 39 reconoce la soberanía popular como fuente del poder público, mientras el Art. 40 establece la forma republicana, democrática, laica y federal en que ese poder se organiza.",
       "Ambos artículos establecen lo mismo: que el pueblo ejerce su soberanía directamente sin intermediarios.",
       "El Art. 39 aplica solo a las entidades federativas y el Art. 40 al gobierno federal."],
    c:0,
    ex:"El Art. 39 CPEUM consagra la soberanía originaria del pueblo (fuente del poder); el Art. 40 define la forma institucional en que ese poder se ejerce: República representativa, democrática, laica y federal." },

  { sa:"1.1", sal:"Modelo constitucional",
    ref:"CPEUM (2025), Art. 49",
    p:null, pt:null,
    q:"El Art. 49 CPEUM prohíbe que dos o más poderes se reúnan en una sola persona o corporación. ¿Qué principio constitucional fundamental establece esta disposición?",
    o:["El principio de supremacía constitucional sobre el derecho internacional.",
       "El principio de división de poderes, que impide la concentración del poder en un solo ente.",
       "El principio de representación proporcional en la integración de los poderes."],
    c:1,
    ex:"El Art. 49 consagra la división del Supremo Poder de la Federación en Legislativo, Ejecutivo y Judicial, estableciendo el principio de separación de poderes como garantía contra la concentración del poder." },

  { sa:"1.1", sal:"Modelo constitucional",
    ref:"CPEUM (2025), Arts. 52 y 56",
    p:"La Cámara de Diputados se integra por 500 diputados: 300 electos en distritos uninominales por mayoría relativa y 200 por representación proporcional. El Senado se integra por 128 senadores.", pt:"Integración del Congreso de la Unión",
    q:"Si el Congreso de la Unión se reúne en sesión conjunta (Congreso General), ¿cuántos legisladores lo integran en total?",
    o:["500 legisladores","628 legisladores","432 legisladores"],
    c:1,
    ex:"Congreso General = Cámara de Diputados (500) + Senado (128) = <strong>628 legisladores</strong>. La CPEUM distingue entre sesiones de cada cámara y sesiones conjuntas del Congreso General." },

  { sa:"1.1", sal:"Modelo constitucional",
    ref:"CPEUM (2025), Arts. 73, 74 y 76",
    p:"La Constitución distingue las facultades del Congreso en general (Art. 73), las exclusivas de Diputados (Art. 74) y las exclusivas del Senado (Art. 76).", pt:"Facultades exclusivas del Congreso",
    q:"¿Cuál de las siguientes corresponde a una facultad exclusiva del Senado de la República conforme al Art. 76 CPEUM?",
    o:["Aprobar el Presupuesto de Egresos de la Federación.",
       "Nombrar al titular de la Fiscalía General de la República y ratificar los tratados internacionales.",
       "Fiscalizar la cuenta pública mediante la Auditoría Superior de la Federación."],
    c:1,
    ex:"El Art. 76 CPEUM otorga al Senado facultades exclusivas como ratificar tratados y nombrar al Fiscal General. Aprobar el Presupuesto y fiscalizar la cuenta pública son facultades exclusivas de la Cámara de Diputados (Art. 74)." },

  { sa:"1.1", sal:"Modelo constitucional",
    ref:"CPEUM (2025), Art. 135",
    p:null, pt:null,
    q:"¿Cuál es el procedimiento establecido en el Art. 135 CPEUM para reformar la Constitución Política de los Estados Unidos Mexicanos?",
    o:["Decreto del Ejecutivo Federal ratificado por la Suprema Corte de Justicia.",
       "Aprobación por mayoría simple de ambas cámaras del Congreso.",
       "Aprobación por mayoría de dos tercios del Congreso de la Unión más ratificación de la mayoría de las legislaturas de las entidades federativas."],
    c:2,
    ex:"El Art. 135 CPEUM establece que las reformas constitucionales requieren la aprobación de las dos terceras partes de los individuos presentes en el Congreso de la Unión y que sean aprobadas por la mayoría de las legislaturas de las entidades federativas." },

  // ── 1.2  Poder Judicial  (6) ──
  { sa:"1.2", sal:"Poder Judicial",
    ref:"CPEUM (2025), Art. 94 — reforma judicial 2024",
    p:"La reforma constitucional de 2024 modificó sustancialmente la integración y el método de designación de los miembros del Poder Judicial Federal, incluyendo a la SCJN.", pt:"Reforma judicial 2024",
    q:"¿Cuál es la diferencia central en el método de integración de la SCJN antes y después de la reforma judicial de 2024?",
    o:["Antes eran designados por el Ejecutivo con ratificación del Senado; tras la reforma son elegidos por voto ciudadano directo.",
       "Antes eran electos popularmente; tras la reforma son designados por el Consejo de la Judicatura.",
       "La reforma solo cambió el número de ministros, no el método de designación."],
    c:0,
    ex:"La reforma de 2024 sustituyó el sistema de designación presidencial con ratificación senatorial por la elección directa de Ministras y Ministros por voto ciudadano, como mecanismo de democratización del Poder Judicial." },

  { sa:"1.2", sal:"Poder Judicial",
    ref:"CPEUM (2025), Art. 99",
    p:null, pt:null,
    q:"El TEPJF tiene competencia para resolver, con carácter definitivo e inatacable, las impugnaciones sobre elecciones federales. ¿Cuál es la excepción a esta regla contemplada en el Art. 99 CPEUM?",
    o:["Las controversias de carácter laboral de los servidores del propio TEPJF.",
       "Las acciones de inconstitucionalidad que planteen los partidos políticos ante la SCJN respecto de normas electorales (Art. 105, fracc. II).",
       "Los conflictos entre partidos políticos sobre financiamiento."],
    c:1,
    ex:"El Art. 99 CPEUM establece que el TEPJF es la máxima autoridad jurisdiccional electoral, <em>con excepción de lo dispuesto en el Art. 105, fracc. II</em>, que reserva a la SCJN las acciones de inconstitucionalidad en materia electoral." },

  { sa:"1.2", sal:"Poder Judicial",
    ref:"LGSMIME (2024), Arts. 40–52 y 61–70",
    p:"El sistema de medios de impugnación en materia electoral se compone de varios instrumentos procesales, cada uno con presupuestos y competencias distintas.", pt:"Medios de impugnación electoral",
    q:"¿Cuál es la diferencia entre el Recurso de Apelación (RAP) y el Juicio de Inconformidad (JIN) en la LGSMIME?",
    o:["El RAP combate actos y resoluciones del INE ante el TEPJF; el JIN impugna los resultados de las elecciones de diputados y senadores ante los Consejos Distritales.",
       "El RAP combate actos del INE ante el TEPJF; el JIN impugna los resultados y la validez de las elecciones de diputados federales y senadores ante las salas del TEPJF.",
       "Ambos instrumentos son sinónimos y se usan indistintamente ante el TEPJF."],
    c:1,
    ex:"El RAP (Arts. 40–52 LGSMIME) es el medio para combatir actos y resoluciones del INE durante el proceso electoral. El JIN (Arts. 61–70) es el medio específico para impugnar los resultados de las elecciones federales de diputados y senadores ante las salas del TEPJF." },

  { sa:"1.2", sal:"Poder Judicial",
    ref:"CPEUM (2025), Art. 107; LGSMIME (2024)",
    p:null, pt:null,
    q:"¿En qué casos procede el Juicio para la Protección de los Derechos Político-Electorales del Ciudadano (JDC)?",
    o:["Cuando un ciudadano considera que se violan sus derechos de votar, ser votado, asociarse políticamente o afiliarse a un partido.",
       "Cuando un partido político impugna los resultados de una elección federal.",
       "Cuando el INE impugna resoluciones del TEPJF."],
    c:0,
    ex:"El JDC es el medio de impugnación que protege los derechos político-electorales individuales del ciudadano: votar, ser votado, asociación y afiliación política. A diferencia del JIN, el JDC es promovido por ciudadanos, no por partidos." },

  { sa:"1.2", sal:"Poder Judicial",
    ref:"CPEUM (2025), Art. 99 — reforma judicial 2024",
    p:null, pt:null,
    q:"¿Qué nuevo órgano se creó dentro del Poder Judicial Federal con la reforma constitucional de 2024 para sustituir al Consejo de la Judicatura Federal?",
    o:["Tribunal de Disciplina Judicial y Órgano de Administración Judicial.",
       "Consejo Superior de la Judicatura y Tribunal de Cuentas Judiciales.",
       "Fiscalía Judicial Federal y Contraloría del Poder Judicial."],
    c:0,
    ex:"La reforma judicial de 2024 sustituyó al Consejo de la Judicatura Federal por dos órganos: el <strong>Tribunal de Disciplina Judicial</strong> (funciones sancionadoras) y el <strong>Órgano de Administración Judicial</strong> (funciones administrativas y de carrera judicial)." },

  { sa:"1.2", sal:"Poder Judicial",
    ref:"CPEUM (2025), Art. 105, fracc. II",
    p:null, pt:null,
    q:"¿Quiénes están legitimados para interponer acciones de inconstitucionalidad en materia electoral ante la SCJN, conforme al Art. 105, fracc. II CPEUM?",
    o:["Cualquier ciudadano que considere inconstitucional una norma electoral.",
       "Solo el Presidente de la República y el Consejo General del INE.",
       "Los partidos políticos con registro nacional respecto de leyes electorales, y los equivalentes locales para las leyes de sus entidades."],
    c:2,
    ex:"El Art. 105, fracc. II CPEUM reconoce legitimación para promover acciones de inconstitucionalidad en materia electoral a los partidos políticos con registro nacional (normas federales) y locales (normas locales), entre otros sujetos como el 33% de los legisladores." },

  // ── 1.3  Ciudadanía  (5) ──
  { sa:"1.3", sal:"Ciudadanía",
    ref:"CPEUM (2025), Arts. 34 y 37",
    p:"La Constitución distingue entre la nacionalidad mexicana y la ciudadanía. La nacionalidad es el vínculo jurídico-político con el Estado; la ciudadanía otorga derechos políticos adicionales.", pt:"Nacionalidad y ciudadanía",
    q:"¿Cuál es la diferencia jurídica entre la nacionalidad mexicana y la ciudadanía conforme a la CPEUM?",
    o:["Son términos equivalentes: todo nacional es automáticamente ciudadano con plenos derechos políticos.",
       "La nacionalidad es el vínculo de pertenencia al Estado mexicano; la ciudadanía es una calidad adicional que se adquiere a los 18 años y otorga derechos y obligaciones políticas.",
       "La ciudadanía es un concepto más amplio que incluye a los residentes extranjeros con más de 5 años de residencia."],
    c:1,
    ex:"La CPEUM distingue: el Art. 30 define la nacionalidad (vínculo de pertenencia) y el Art. 34 define la ciudadanía (calidad que se adquiere a los 18 años con modo honesto de vivir), que otorga derechos políticos adicionales como votar y ser votado." },

  { sa:"1.3", sal:"Ciudadanía",
    ref:"CPEUM (2025), Art. 35",
    p:null, pt:null,
    q:"El Art. 35 CPEUM reconoce como prerrogativa ciudadana el derecho a iniciar leyes. ¿Qué requisito establece la Constitución para que los ciudadanos puedan ejercer la iniciativa ciudadana?",
    o:["Contar con el respaldo del 0.13% de la lista nominal de electores.",
       "Presentar la iniciativa a través de un partido político registrado.",
       "Reunir el 2% de la lista nominal y que la iniciativa sea respaldada por el Congreso."],
    c:0,
    ex:"El Art. 35, fracc. VII CPEUM establece que los ciudadanos podrán ejercer la iniciativa ciudadana con el respaldo de al menos el 0.13% de la lista nominal de electores, sin necesidad de intermediación partidista." },

  { sa:"1.3", sal:"Ciudadanía",
    ref:"CPEUM (2025), Art. 36",
    p:null, pt:null,
    q:"El Art. 36 CPEUM establece la obligación de votar en las elecciones populares. ¿Cuál es la consecuencia jurídica del incumplimiento de las obligaciones ciudadanas del Art. 36?",
    o:["La pérdida definitiva de la ciudadanía mexicana.",
       "La suspensión de derechos ciudadanos en los términos que señale la ley.",
       "Una multa económica fijada anualmente por el INE."],
    c:1,
    ex:"Conforme al Art. 38 CPEUM, el incumplimiento de las obligaciones ciudadanas establecidas en el Art. 36 puede derivar en la suspensión de los derechos y prerrogativas ciudadanas, en los términos y por el tiempo que fijen las leyes." },

  { sa:"1.3", sal:"Ciudadanía",
    ref:"CPEUM (2025), Art. 35, fracc. VIII",
    p:"La consulta popular es un mecanismo de democracia directa reconocido constitucionalmente.", pt:"Consulta popular",
    q:"¿Cuáles son los temas expresamente excluidos de la consulta popular conforme al Art. 35, fracc. VIII CPEUM?",
    o:["Los tratados internacionales en materia de comercio y finanzas públicas.",
       "Los derechos humanos, los ingresos y gastos del Estado, la seguridad nacional y la organización, funcionamiento y disciplina de las Fuerzas Armadas.",
       "Las reformas constitucionales y los nombramientos de funcionarios del Poder Judicial."],
    c:1,
    ex:"El Art. 35, fracc. VIII, inciso 3° CPEUM excluye expresamente de la consulta popular: la restricción de derechos humanos, ingresos y gastos del Estado, seguridad nacional, y organización, funcionamiento y disciplina de las Fuerzas Armadas." },

  { sa:"1.3", sal:"Ciudadanía",
    ref:"CPEUM (2025), Art. 38",
    p:null, pt:null,
    q:"¿Cuándo se restablecen los derechos ciudadanos que fueron suspendidos por estar sujeto a proceso criminal, conforme al Art. 38 CPEUM?",
    o:["Al cumplir la condena impuesta por sentencia definitiva.",
       "Al emitir el juez el auto de formal prisión.",
       "Cuando la sentencia definitiva sea absolutoria o se extinga la pena impuesta."],
    c:2,
    ex:"El Art. 38 CPEUM establece que los derechos suspendidos por proceso criminal se restablecen cuando la sentencia definitiva sea absolutoria o cuando se extinga la pena privativa de libertad. Durante el proceso, la suspensión es preventiva." },

  // ── 1.4  Sistema de partidos en México  (3) ──
  { sa:"1.4", sal:"Sistema de partidos en México",
    ref:"LGPP (2023), Arts. 22–27 y 94",
    p:"La LGPP establece los requisitos para constituir un partido político nacional, incluyendo umbrales de afiliación y presencia territorial, así como las causas de pérdida del registro.", pt:"Registro de partidos políticos",
    q:"¿Qué umbral de afiliación territorial exige la LGPP para que una agrupación pueda obtener su registro como partido político nacional?",
    o:["Afiliar al menos 3,000 ciudadanos en cada una de las 32 entidades federativas, o al menos 300 en cada uno de los 300 distritos electorales uninominales.",
       "Afiliar al menos 5,000 ciudadanos en la Ciudad de México como sede del partido.",
       "Contar con el aval de 5 partidos políticos ya registrados."],
    c:0,
    ex:"El Art. 22 LGPP establece que para obtener el registro se deben acreditar al menos 3,000 afiliados en cada una de las 32 entidades, o al menos 300 en cada uno de los 300 distritos, y en ningún caso el número total de afiliados puede ser menor al 0.26% del padrón electoral federal." },

  { sa:"1.4", sal:"Sistema de partidos en México",
    ref:"LGPP (2023), Arts. 41–51",
    p:null, pt:null,
    q:"¿Cuál es la diferencia entre un partido político nacional y una agrupación política nacional conforme a la LGPP?",
    o:["Son figuras equivalentes; solo difieren en el nombre que la ley les asigna.",
       "Los partidos políticos participan en elecciones y postulan candidatos; las agrupaciones políticas nacionales no pueden postular candidatos y cumplen funciones de educación cívica y formación política.",
       "Las agrupaciones políticas nacionales pueden postular candidatos pero sin acceso a financiamiento público."],
    c:1,
    ex:"Conforme a los Arts. 41–51 LGPP, las agrupaciones políticas nacionales son formas de organización ciudadana que contribuyen a la vida democrática, pero NO pueden participar en elecciones ni postular candidatos directamente, a diferencia de los partidos políticos." },

  { sa:"1.4", sal:"Sistema de partidos en México",
    ref:"LGPP (2023), Arts. 85–93",
    p:"La LGPP regula tres tipos de alianzas entre partidos: la coalición, el frente y la fusión.", pt:"Alianzas entre partidos",
    q:"¿En qué se distinguen la coalición y la fusión de partidos políticos conforme a la LGPP?",
    o:["En la coalición los partidos pierden su registro individual; en la fusión lo conservan.",
       "La coalición es una alianza temporal para una elección, conservando cada partido su registro; la fusión es permanente y da origen a un nuevo partido o uno absorbe al otro.",
       "Ambas figuras son temporales y los partidos siempre conservan sus registros individuales."],
    c:1,
    ex:"Arts. 85–93 LGPP: la <strong>coalición</strong> es temporal (solo para la elección) y cada partido conserva su registro. La <strong>fusión</strong> es permanente: los partidos se integran en uno solo, ya sea uno absorbiendo al otro o creando uno nuevo, con pérdida del registro de los fusionados." },

  // ═══════════════════════════════════════════════════════════
  //  BLOQUE 2 · SISTEMA ELECTORAL MEXICANO
  // ═══════════════════════════════════════════════════════════

  // ── 2.1  Principios del sistema electoral  (1) ──
  { sa:"2.1", sal:"Principios del sistema electoral",
    ref:"CPEUM (2025), Art. 41, Base V",
    p:null, pt:null,
    q:"El Art. 41 CPEUM establece que la función electoral del INE se rige por siete principios. ¿Cuál es la diferencia entre los principios de <em>certeza</em> e <em>imparcialidad</em> en este contexto?",
    o:["La certeza se refiere a que las autoridades actúen sin favoritismos; la imparcialidad exige que los actos electorales sean verificables y predecibles.",
       "La certeza exige que todos los actos y datos electorales sean verificables, exactos y confiables; la imparcialidad exige que la autoridad electoral actúe sin favoritismos ni ventajas indebidas a ningún partido o candidato.",
       "Ambos principios son sinónimos y se aplican indistintamente en la función electoral."],
    c:1,
    ex:"La <strong>certeza</strong> garantiza que los actos electorales sean verificables y confiables (nadie debe dudar de los datos y procedimientos). La <strong>imparcialidad</strong> exige que la autoridad trate a todos los actores políticos sin favoritismos ni discriminación." },

  // ── 2.2  Tipos de sistemas electorales  (1) ──
  { sa:"2.2", sal:"Tipos de sistemas electorales",
    ref:"CPEUM (2025), Arts. 52–54; PRU (2016)",
    p:"México utiliza un sistema electoral mixto para la Cámara de Diputados. El principio de mayoría relativa se aplica en distritos uninominales y el de representación proporcional en circunscripciones plurinominales.", pt:"Sistema mixto mexicano",
    q:"¿Cuál es la cláusula de gobernabilidad o umbral de sobrerrepresentación que limita la representación proporcional de los partidos en la Cámara de Diputados conforme al Art. 54 CPEUM?",
    o:["Ningún partido puede tener más del 50% de los diputados salvo que lo haya obtenido en mayoría relativa.",
       "Ningún partido puede contar con más de 300 diputados por ambos principios, ni su representación puede exceder en 8 puntos porcentuales su porcentaje de votación nacional emitida.",
       "Los partidos que obtengan más del 40% de la votación tienen derecho a la mayoría absoluta de la Cámara."],
    c:1,
    ex:"El Art. 54, fracc. V CPEUM establece que ningún partido puede tener más de 300 diputados totales (mayoría relativa + RP), y que su porcentaje de curules no puede exceder en más de 8 puntos su porcentaje de votación nacional, salvo que la diferencia provenga de triunfos en mayoría relativa." },

  // ── 2.3  Autoridades electorales  (3) ──
  { sa:"2.3", sal:"Autoridades electorales",
    ref:"LGIPE (2024), Arts. 29–34; CPEUM Art. 41",
    p:null, pt:null,
    q:"¿Cuáles son las atribuciones del INE que lo distinguen como autoridad de <em>Estado</em> y no como autoridad de <em>gobierno</em>?",
    o:["El INE puede modificar las leyes electorales sin intervención del Poder Legislativo.",
       "El INE es un organismo público autónomo, no subordinado al Ejecutivo ni al Legislativo, con personalidad jurídica y patrimonio propios, lo que garantiza su independencia funcional.",
       "El INE es un órgano del Poder Judicial Federal con funciones administrativas."],
    c:1,
    ex:"El Art. 41 CPEUM y los Arts. 29–34 LGIPE establecen que el INE es un organismo público <strong>autónomo</strong>, con personalidad jurídica y patrimonio propios, cuya independencia del Ejecutivo y del Legislativo lo convierte en una autoridad de Estado y no de gobierno." },

  { sa:"2.3", sal:"Autoridades electorales",
    ref:"LGIPE (2024), Arts. 98–105",
    p:"Los OPLEs organizan las elecciones locales, pero bajo ciertos supuestos el INE puede asumir funciones que corresponden a los organismos locales.", pt:"OPLEs e INE",
    q:"¿En qué supuestos puede el INE atraer o asumir directamente las funciones de un OPLE conforme a la LGIPE?",
    o:["Solo cuando el OPLE solicita formalmente el apoyo del INE por falta de recursos.",
       "Cuando exista riesgo de que los principios rectores electorales no sean garantizados por el OPLE, o cuando lo solicite el propio OPLE o los partidos políticos.",
       "El INE no puede asumir funciones de los OPLEs en ningún caso; cada institución tiene competencia exclusiva."],
    c:1,
    ex:"La LGIPE reconoce la figura de la asunción y atracción de funciones: el INE puede asumir funciones del OPLE cuando exista riesgo para los principios rectores, o atraer casos específicos a petición del OPLE o los partidos, garantizando así la calidad del proceso electoral local." },

  { sa:"2.3", sal:"Autoridades electorales",
    ref:"LGMDE (2021); Fiscalía General de la República",
    p:null, pt:null,
    q:"¿Cuál es la diferencia entre las infracciones electorales administrativas que conoce el INE y los delitos electorales que investiga la FISEL?",
    o:["Son la misma categoría jurídica; solo difieren en qué autoridad los conoce.",
       "Las infracciones administrativas son conductas contrarias a la normativa electoral sancionadas por el INE con multas o amonestaciones; los delitos electorales son conductas tipificadas en la LGMDE que conllevan responsabilidad penal.",
       "Los delitos electorales son más leves que las infracciones administrativas."],
    c:1,
    ex:"Son categorías distintas: las <strong>infracciones administrativas</strong> (LGIPE) son conductas que el INE sanciona administrativamente (multas, pérdida de registro). Los <strong>delitos electorales</strong> (LGMDE) son conductas tipificadas penalmente que investiga la FISEL y que pueden implicar prisión." },

  // ── 2.4  Delitos electorales  (1) ──
  { sa:"2.4", sal:"Delitos electorales",
    ref:"LGMDE (2021), Arts. 7, 11 y 20",
    p:"La LGMDE tipifica como delito electoral diversas conductas realizadas por ciudadanos, servidores públicos, funcionarios electorales y ministros de culto.", pt:"Sujetos activos del delito electoral",
    q:"¿Cuál es la agravante específica que la LGMDE establece para los delitos electorales cometidos por servidores públicos en ejercicio de sus funciones?",
    o:["Se aplica la misma sanción que a los ciudadanos, sin distinción.",
       "La pena se aumenta hasta en una mitad adicional, además de la destitución del cargo e inhabilitación para ocupar cargos públicos.",
       "Solo se aplica una sanción administrativa sin consecuencias penales."],
    c:1,
    ex:"El Art. 20 LGMDE establece que cuando los delitos electorales sean cometidos por servidores públicos en ejercicio de sus funciones, las penas se aumentarán hasta en una mitad y se impondrán, además, la destitución e inhabilitación para desempeñar cargos públicos." },

  // ── 2.5  Candidaturas independientes  (1) ──
  { sa:"2.5", sal:"Candidaturas independientes",
    ref:"LGIPE (2024), Arts. 357–368",
    p:"Las candidaturas independientes fueron reconocidas en la CPEUM en 2012 y reglamentadas en la LGIPE para cargos federales.", pt:"Candidaturas independientes federales",
    q:"¿Cuál es el porcentaje del listado nominal que un aspirante a candidato independiente a Presidente de la República debe acreditar como apoyo ciudadano, y en cuántas entidades federativas debe distribuirse?",
    o:["El 1% del listado nominal a nivel nacional, sin requisito de distribución territorial.",
       "El 1% del listado nominal, con al menos el 1% en 17 entidades federativas.",
       "El 2% del listado nominal, distribuido en cuando menos la mitad de las circunscripciones."],
    c:1,
    ex:"El Art. 367 LGIPE establece que para Presidente de la República se requiere el respaldo del 1% del listado nominal de electores, debiendo incluir ciudadanos de al menos 17 entidades federativas, garantizando representación territorial." },

  // ── 2.6  Proceso Electoral Federal  (6) ──
  { sa:"2.6", sal:"Proceso Electoral Federal",
    ref:"LGIPE (2024), Arts. 227–230",
    p:"El proceso electoral federal ordinario se estructura en etapas sucesivas cuya secuencia es obligatoria para garantizar la validez de la elección.", pt:"Etapas del proceso electoral",
    q:"¿Cuál es la primera etapa del proceso electoral federal ordinario y qué actividades comprende principalmente?",
    o:["La jornada electoral; comprende la instalación de casillas y la recepción de votos.",
       "La etapa de preparación de la elección; comprende el registro de candidatos, la capacitación electoral, la preparación de la documentación y la integración de las mesas directivas de casilla.",
       "Los cómputos distritales; comprenden el conteo oficial de votos por los Consejos Distritales."],
    c:1,
    ex:"La etapa de preparación de la elección (Art. 229 LGIPE) es la primera y la más extensa; incluye la integración de los Consejos Distritales, el registro de candidatos, la capacitación de funcionarios de casilla, la producción de la documentación electoral y la integración de mesas directivas." },

  { sa:"2.6", sal:"Proceso Electoral Federal",
    ref:"LGIPE (2024), Arts. 389–401; REINE (2025)",
    p:null, pt:null,
    q:"¿Cuál es el valor legal del PREP frente a los resultados oficiales de la elección?",
    o:["El PREP tiene carácter definitivo; sus resultados son los oficiales de la jornada electoral.",
       "El PREP es una herramienta de información preliminar para la ciudadanía; no tiene efectos jurídicos y no sustituye a los cómputos distritales ni a las declaraciones de validez.",
       "El PREP tiene valor jurídico provisional que se confirma con los cómputos distritales."],
    c:1,
    ex:"El PREP (Arts. 389–401 LGIPE) es un sistema informático de difusión preliminar que opera la noche de la jornada. Carece de efectos jurídicos definitivos y no sustituye a los cómputos distritales ni a las declaraciones de validez realizadas por las autoridades competentes." },

  { sa:"2.6", sal:"Proceso Electoral Federal",
    ref:"LGIPE (2024), Arts. 311–328",
    p:"Los Cómputos Distritales son el procedimiento oficial de suma de resultados. Pueden incluir recuentos totales o parciales de votos bajo ciertas condiciones.", pt:"Cómputos Distritales y recuento",
    q:"¿En qué supuesto procede el recuento total de votos durante los Cómputos Distritales conforme a la LGIPE?",
    o:["Cuando cualquier partido político lo solicite sin necesidad de justificación.",
       "Cuando la diferencia entre el primero y el segundo lugar sea igual o menor al 1% del total de votos del distrito.",
       "Solo cuando el INE lo ordene de oficio por irregularidades en las actas."],
    c:1,
    ex:"El Art. 311 LGIPE establece que el recuento total procede cuando la diferencia entre el primero y el segundo lugar en un distrito sea de 1% o menos del total de la votación, garantizando que elecciones muy cerradas se verifiquen con exactitud." },

  { sa:"2.6", sal:"Proceso Electoral Federal",
    ref:"LGIPE (2024), Art. 251; REINE (2025)",
    p:null, pt:null,
    q:"¿Qué restricciones impone la ley a los servidores públicos durante las campañas electorales en relación con la propaganda gubernamental?",
    o:["No existen restricciones; la propaganda gubernamental puede continuar durante todo el proceso.",
       "Queda prohibida la difusión en medios de comunicación de propaganda gubernamental que implique promoción personalizada de servidores públicos durante las campañas y hasta la conclusión de la jornada.",
       "Solo se restringe la propaganda del Ejecutivo Federal, no la de gobiernos estatales."],
    c:1,
    ex:"El Art. 41, Base III, Apartado C CPEUM y el REINE prohíben la difusión de propaganda gubernamental personalizada de cualquier nivel de gobierno desde el inicio de las campañas hasta la conclusión de la jornada, para evitar que se use como ventaja electoral indebida." },

  { sa:"2.6", sal:"Proceso Electoral Federal",
    ref:"CPEUM (2025), Art. 53; LGIPE (2024)",
    p:null, pt:null,
    q:"¿Qué criterios constitucionales deben observarse para la distritación electoral, es decir, para dividir el territorio en 300 distritos uninominales?",
    o:["El criterio exclusivo es la superficie geográfica: todos los distritos deben tener la misma extensión territorial.",
       "Los criterios son equilibrio poblacional (que los distritos sean lo más igualitarios posible en número de habitantes), compacidad geográfica y respeto a los límites de las entidades federativas.",
       "Los distritos se delimitan únicamente por criterios históricos y no pueden modificarse."],
    c:1,
    ex:"Art. 53 CPEUM: la distritación se basa en el principio de igualdad poblacional (equilibrio demográfico), compacidad territorial y respeto a los límites de las entidades federativas, mediante el proceso de redistritación que realiza el INE." },

  { sa:"2.6", sal:"Proceso Electoral Federal",
    ref:"LGIPE (2024), Art. 251",
    p:null, pt:null,
    q:"¿Cuál es el período de veda de encuestas electorales y su fundamento en la legislación mexicana?",
    o:["Se prohíbe publicar encuestas durante los 3 días previos a la jornada electoral y hasta el cierre de las casillas, para no influir en la decisión del electorado.",
       "Se prohíbe publicar encuestas únicamente el día de la jornada electoral.",
       "No existe ninguna restricción legal a la publicación de encuestas en México."],
    c:0,
    ex:"El Art. 251 LGIPE y el Reglamento de Elecciones establecen una veda de 3 días previos a la elección para la publicación de encuestas de preferencia electoral, buscando preservar la libertad del voto y evitar efectos de arrastre o desmovilización en el electorado." },

  // ═══════════════════════════════════════════════════════════
  //  BLOQUE 3 · INSTITUTO NACIONAL ELECTORAL
  // ═══════════════════════════════════════════════════════════

  // ── 3.1  Conocimientos fundamentales del INE  (1) ──
  { sa:"3.1", sal:"Conocimientos fundamentales del INE",
    ref:"CPEUM (2025), Art. 41; DOF 10/02/2014; LGIPE (2024)",
    p:null, pt:null,
    q:"¿Cuáles son las principales atribuciones ampliadas que obtuvo el INE respecto del IFE al crearse mediante la reforma constitucional de 2014?",
    o:["Solo cambió el nombre de la institución; las atribuciones son idénticas a las del IFE.",
       "El INE asumió la facultad de organizar elecciones locales en ciertos supuestos, designar y remover a los consejeros de los OPLEs, y supervisar a los partidos políticos a nivel nacional y local.",
       "El INE perdió competencias en materia de fiscalización de partidos, que pasaron al SAT."],
    c:1,
    ex:"La reforma de 2014 amplió las atribuciones del INE respecto del IFE: puede organizar elecciones locales (asunción de funciones), designa a los consejeros de los OPLEs, fiscaliza a partidos a nivel nacional y local, y tiene atribuciones de atracción sobre procesos locales." },

  // ── 3.2  Órganos del INE  (5) ──
  { sa:"3.2", sal:"Órganos del INE",
    ref:"LGIPE (2024), Arts. 35–44",
    p:null, pt:null,
    q:"¿Cuál es el quórum necesario para que el Consejo General del INE sesione válidamente y cuántos votos se requieren para tomar resoluciones?",
    o:["Mayoría simple de consejeros presentes; resoluciones por mayoría de votos emitidos.",
       "La presencia de al menos 7 de los 11 consejeros electorales y las resoluciones se toman por mayoría de votos de los consejeros presentes, salvo los casos en que la ley exige mayoría calificada.",
       "La sesión requiere la asistencia de los 11 consejeros y las resoluciones por unanimidad."],
    c:1,
    ex:"El Art. 35 LGIPE establece que el Consejo General sesionará con la presencia de al menos 7 de sus consejeros electorales y las resoluciones se adoptarán por mayoría de votos de los presentes, con voto de calidad del Consejero Presidente en caso de empate, salvo mayorías calificadas especiales." },

  { sa:"3.2", sal:"Órganos del INE",
    ref:"LGIPE (2024), Arts. 91–100",
    p:null, pt:null,
    q:"¿Cuál es la diferencia funcional entre la Junta General Ejecutiva y la Secretaría Ejecutiva del INE?",
    o:["Son el mismo órgano con distinto nombre según la función que desempeñen.",
       "La Junta General Ejecutiva es el órgano colegiado permanente de coordinación técnico-ejecutiva; la Secretaría Ejecutiva es un cargo unipersonal cuyo titular preside la Junta y es el responsable ejecutivo de la institución.",
       "La Secretaría Ejecutiva tiene funciones jurisdiccionales; la Junta General Ejecutiva tiene funciones administrativas."],
    c:1,
    ex:"La Junta General Ejecutiva (Arts. 91–100 LGIPE) es el órgano colegiado que coordina a las Direcciones Ejecutivas; la Secretaría Ejecutiva es el cargo de su titular, quien actúa como máximo responsable ejecutivo del INE, convoca y preside la Junta y da fe de sus resoluciones." },

  { sa:"3.2", sal:"Órganos del INE",
    ref:"LGIPE (2024), Arts. 125–162",
    p:null, pt:null,
    q:"¿Cuál es la diferencia entre las Juntas Locales Ejecutivas y los Consejos Locales del INE a nivel estatal?",
    o:["Las Juntas son temporales; los Consejos son permanentes.",
       "Las Juntas Locales Ejecutivas son órganos permanentes de carácter técnico-ejecutivo; los Consejos Locales son órganos colegiados temporales que se instalan durante el proceso electoral para tomar decisiones de carácter normativo y directivo en la entidad.",
       "Ambos son órganos permanentes con las mismas funciones."],
    c:1,
    ex:"Los Arts. 125–162 LGIPE distinguen: las <strong>Juntas Locales Ejecutivas</strong> son permanentes y tienen funciones técnicas y operativas. Los <strong>Consejos Locales</strong> son temporales (se instalan durante el proceso electoral) y tienen funciones decisorias y directivas en la entidad federativa." },

  { sa:"3.2", sal:"Órganos del INE",
    ref:"LGIPE (2024), Art. 163 y ss.; CPEUM Art. 53",
    p:null, pt:null,
    q:"¿Cuál es la composición de un Consejo Distrital del INE y qué tipo de órgano es la Junta Distrital Ejecutiva?",
    o:["El Consejo Distrital es permanente e integrado por 5 consejeros; la Junta Distrital es temporal.",
       "El Consejo Distrital es un órgano temporal colegiado con un Consejero Presidente y 4 consejeros distritales que sesionan durante el proceso electoral; la Junta Distrital Ejecutiva es el órgano permanente técnico-operativo del distrito.",
       "Ambos son órganos permanentes con las mismas funciones en cada uno de los 300 distritos."],
    c:1,
    ex:"En cada uno de los 300 distritos: la <strong>Junta Distrital Ejecutiva</strong> es el órgano permanente que opera todo el año. El <strong>Consejo Distrital</strong> es el órgano temporal colegiado que se instala durante el proceso electoral y toma decisiones directivas, presidido por el Vocal Ejecutivo Distrital." },

  { sa:"3.2", sal:"Órganos del INE",
    ref:"LGIPE (2024), Arts. 83–90",
    p:null, pt:null,
    q:"¿Qué es la Contraloría General del INE y cuál es su importancia para la autonomía de la institución?",
    o:["Es un órgano interno dependiente del Consejo General sin autonomía técnica.",
       "Es el órgano interno de control del INE, con autonomía técnica y de gestión, encargado de fiscalizar el uso de los recursos y la actuación de los servidores del instituto, lo que refuerza la rendición de cuentas interna.",
       "Es un órgano externo designado por la Auditoría Superior de la Federación."],
    c:1,
    ex:"La Contraloría General del INE (Arts. 83–90 LGIPE) es el órgano interno de control con autonomía técnica y de gestión. Su titular es designado por la Cámara de Diputados, lo que garantiza su independencia del Consejo General y refuerza la transparencia y rendición de cuentas interna." },

  // ── 3.3  Servicio Profesional Electoral Nacional  (2) ──
  { sa:"3.3", sal:"Servicio Profesional Electoral Nacional",
    ref:"ESPEN (2024), Arts. 1–10",
    p:"El SPEN es el sistema de carrera del personal del INE y los OPLEs. Su diseño busca garantizar la profesionalización y la independencia del personal frente a influencias políticas.", pt:"Finalidad del SPEN",
    q:"¿Cuál es la finalidad constitucional y legal del Servicio Profesional Electoral Nacional (SPEN) más allá de ser un sistema de recursos humanos?",
    o:["Garantizar la lealtad política del personal del INE hacia los consejeros electorales en turno.",
       "Garantizar la profesionalización, imparcialidad e independencia del personal electoral mediante criterios objetivos de ingreso, evaluación y permanencia, asegurando la continuidad institucional.",
       "Facilitar la contratación temporal de personal durante los procesos electorales."],
    c:1,
    ex:"El SPEN tiene como finalidad constitucional garantizar que el personal que opera las elecciones (directivo, ejecutivo y técnico del INE y los OPLEs) sea profesional, imparcial e independiente, asegurando así la calidad y continuidad de la función electoral." },

  { sa:"3.3", sal:"Servicio Profesional Electoral Nacional",
    ref:"ESPEN (2024), Arts. 14–28",
    p:null, pt:null,
    q:"¿Cuáles son las etapas del proceso de ingreso al SPEN mediante concurso de oposición conforme al Estatuto?",
    o:["Inscripción, examen psicométrico y designación directa por el Consejero Presidente.",
       "Convocatoria pública, cumplimiento de requisitos documentales, examen de conocimientos, evaluación de habilidades y entrevista, con resolución del Comité del SPEN.",
       "Solo presentación de currículum vitae y entrevista con el director ejecutivo del área vacante."],
    c:1,
    ex:"El Estatuto del SPEN (Arts. 14–28) establece un proceso de concurso de oposición que incluye: convocatoria pública, verificación de requisitos, examen de conocimientos técnicos, evaluación de habilidades y competencias, entrevista final y resolución del Comité del SPEN, garantizando objetividad e imparcialidad." }

]; // fin BANCO_MODULO_C
