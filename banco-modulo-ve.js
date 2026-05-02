/* ============================================================
   BANCO DE PREGUNTAS — Simulacro INE Vocalía Ejecutiva Distrital
   ============================================================
   - 40 preguntas organizadas por subárea (sa)
   - Estructura de cada pregunta:
       sa   : código de subárea (ej. "1.1", "4.1")
       sal  : etiqueta corta de la subárea
       area : área principal
       p    : pasaje/contexto (texto) o null
       pt   : título del pasaje o null
       q    : enunciado de la pregunta
       o    : array con las 3 opciones (A, B, C)
       c    : índice (0,1,2) de la opción correcta
       ex   : explicación que aparece tras responder
   ------------------------------------------------------------
   Para AGREGAR una pregunta: copia un objeto {...} completo
   dentro del array Q, respetando comas. La rotación global del
   simulacro se encargará de barajar orden y opciones.
   ============================================================ */

const Q = [

  /* ══════════════════════════════════
     1.1  PARTIDOS POLÍTICOS NACIONALES  (3)
  ══════════════════════════════════ */
  { sa:"1.1", sal:"Partidos políticos nacionales", area:"Participación política",
    p:null, pt:null,
    q:"¿Cuál es el requisito mínimo de votación que debe obtener un partido político nacional en una elección de diputados federales para conservar su registro?",
    o:["El 1% de la votación válida emitida en la elección de diputados por cualquiera de las vías",
       "El 3% de la votación válida emitida a nivel nacional en cualquiera de las elecciones federales ordinarias",
       "El 5% de la votación válida emitida únicamente en la elección de diputados por representación proporcional"],
    c:1,
    ex:"Conforme a la Ley General de Partidos Políticos (LGPP), un partido político nacional debe obtener al menos el 3% de la votación válida emitida en cualquiera de las elecciones federales ordinarias (Presidente, Senadores o Diputados) para conservar su registro. De no alcanzar ese umbral, pierde el registro al concluir el proceso electoral." },

  { sa:"1.1", sal:"Partidos políticos nacionales", area:"Participación política",
    p:null, pt:null,
    q:"¿Qué obligación de transparencia tienen los partidos políticos nacionales respecto al financiamiento que reciben del INE?",
    o:["Solo deben informar al Consejo General al final del ejercicio fiscal sin desglosar gastos",
       "Están obligados a presentar informes de ingresos y egresos, tanto anuales como de campaña, ante el INE, que los revisa y en su caso aplica sanciones por irregularidades",
       "No tienen obligación de transparencia porque el financiamiento es un derecho irrestricto establecido en la CPEUM"],
    c:1,
    ex:"La LGPP y la LGIPE establecen que los partidos políticos nacionales deben presentar informes anuales de ingresos y egresos, así como informes de precampaña y campaña. El INE, a través de la Unidad Técnica de Fiscalización, revisa dichos informes y puede imponer sanciones, incluyendo la pérdida del registro en casos graves de irregularidades en el manejo del financiamiento." },

  { sa:"1.1", sal:"Partidos políticos nacionales", area:"Participación política",
    p:null, pt:null,
    q:"¿Cuál es la diferencia entre el financiamiento público ordinario y el de campaña que reciben los partidos políticos nacionales?",
    o:["El ordinario se entrega mensualmente para actividades permanentes del partido; el de campaña se otorga exclusivamente durante el proceso electoral para gastos de campaña",
       "Ambos son equivalentes y se calculan con la misma fórmula, sin distinción alguna",
       "El financiamiento de campaña se financia con recursos privados donados por simpatizantes, no por el INE"],
    c:0,
    ex:"El financiamiento público ordinario se entrega mensualmente a los partidos para sus actividades permanentes (estructura, educación política, publicaciones). El financiamiento de campaña es adicional, se asigna durante el proceso electoral para sufragar gastos de precampaña y campaña, y se calcula conforme a las fórmulas establecidas en la LGPP y los acuerdos del Consejo General del INE." },

  /* ══════════════════════════════════
     1.2  CANDIDATURAS INDEPENDIENTES  (2)
  ══════════════════════════════════ */
  { sa:"1.2", sal:"Candidaturas independientes", area:"Participación política",
    p:null, pt:null,
    q:"¿Qué requisito fundamental debe cumplir un ciudadano para ser registrado como candidato independiente a Diputado federal?",
    o:["Presentar únicamente su credencial para votar vigente y una solicitud escrita al Consejo Distrital",
       "Obtener el apoyo ciudadano equivalente al 1% de la lista nominal de electores del distrito correspondiente, conforme al procedimiento y plazos establecidos en la LGIPE",
       "Contar con el aval de al menos tres partidos políticos que respalden su candidatura ante el INE"],
    c:1,
    ex:"La LGIPE establece que para ser candidato independiente a Diputado federal se requiere obtener el respaldo de un porcentaje de la lista nominal de electores de la demarcación (1% para diputados), acreditado mediante firmas y reunir los requisitos de elegibilidad. El INE verifica que el proceso de obtención de apoyos cumpla con las reglas de transparencia y límites de gasto establecidos." },

  { sa:"1.2", sal:"Candidaturas independientes", area:"Participación política",
    p:null, pt:null,
    q:"¿Cuál es el papel de la Junta Distrital Ejecutiva en el proceso de registro de candidaturas independientes a Diputado federal?",
    o:["La Junta Distrital no tiene participación; el registro lo realiza exclusivamente el Consejo General del INE",
       "La Junta Distrital apoya en la recepción y verificación inicial de los apoyos ciudadanos recolectados en el distrito, informa al Consejo Distrital y coordina acciones para garantizar la legalidad del proceso",
       "La Junta Distrital otorga o niega directamente el registro definitivo de la candidatura independiente"],
    c:1,
    ex:"Las Juntas Distritales tienen una función operativa en el proceso: apoyan la recepción de manifestaciones de intención, participan en la verificación de apoyos ciudadanos a nivel distrital y coordinan con el Consejo Distrital para garantizar que el proceso se desarrolle conforme a la normativa. El registro definitivo es competencia del Consejo Distrital o del Consejo General según el cargo." },

  /* ══════════════════════════════════
     2.1  SISTEMA DE MEDIOS DE IMPUGNACIÓN  (5)
  ══════════════════════════════════ */
  { sa:"2.1", sal:"Sistema de medios de impugnación en materia electoral", area:"Justicia electoral",
    p:null, pt:null,
    q:"¿Cuál es el objeto principal del Sistema de Medios de Impugnación en Materia Electoral (LGSMIME)?",
    o:["Sancionar penalmente a los funcionarios electorales que cometan irregularidades en la jornada",
       "Garantizar que los actos y resoluciones de las autoridades electorales se sujeten al principio de legalidad y proteger los derechos político-electorales de los ciudadanos",
       "Regular exclusivamente las impugnaciones de los partidos políticos sobre el financiamiento de campañas"],
    c:1,
    ex:"Conforme a la LGSMIME, el Sistema de Medios de Impugnación tiene por objeto garantizar que todos los actos y resoluciones electorales se sujeten al principio de legalidad, proteger el derecho de los ciudadanos a votar y ser votados, y asegurar la definitividad de los distintos actos y etapas de los procesos electorales." },

  { sa:"2.1", sal:"Sistema de medios de impugnación en materia electoral", area:"Justicia electoral",
    p:null, pt:null,
    q:"¿Qué es el Recurso de Revisión en materia electoral y ante qué autoridad se interpone?",
    o:["Es el medio impugnativo que se interpone ante el TEPJF para impugnar sentencias del Consejo General del INE",
       "Es el medio impugnativo que se interpone ante el Consejo General del INE para impugnar actos o resoluciones de los órganos desconcentrados, como las Juntas Distritales o Locales Ejecutivas",
       "Es un recurso exclusivo de los candidatos independientes para impugnar su no registro ante el Consejo Distrital"],
    c:1,
    ex:"El Recurso de Revisión es el medio de impugnación previsto en la LGSMIME para impugnar actos o resoluciones de los órganos desconcentrados del INE (Juntas Locales y Distritales). Se interpone ante el Consejo General del INE, que es la instancia jerárquica superior, y procede cuando el acto impugnado causa un agravio a partido o ciudadano dentro del proceso electoral." },

  { sa:"2.1", sal:"Sistema de medios de impugnación en materia electoral", area:"Justicia electoral",
    p:null, pt:null,
    q:"¿Qué diferencia existe entre el Recurso de Apelación y el Juicio de Inconformidad previstos en la LGSMIME?",
    o:["Son el mismo medio impugnativo con diferente nombre según el tipo de elección",
       "El Recurso de Apelación impugna actos del INE durante el proceso; el Juicio de Inconformidad impugna los resultados y la validez de las elecciones de Presidente, Senadores y Diputados",
       "El Juicio de Inconformidad es exclusivo para ciudadanos sin partido; el Recurso de Apelación es exclusivo para partidos políticos"],
    c:1,
    ex:"El Recurso de Apelación se utiliza para impugnar actos y resoluciones del INE que no sean resultados de cómputos distritales. El Juicio de Inconformidad, en cambio, es el medio específico para impugnar los resultados de los cómputos distritales y la validez de las elecciones federales. Ambos se tramitan ante el TEPJF." },

  { sa:"2.1", sal:"Sistema de medios de impugnación en materia electoral", area:"Justicia electoral",
    p:null, pt:null,
    q:"¿Cuál es el plazo general para interponer un Recurso de Revisión ante el INE conforme a la LGSMIME?",
    o:["30 días hábiles contados a partir del día siguiente en que se tenga conocimiento del acto impugnado",
       "4 días contados a partir del día siguiente a aquel en que se tenga conocimiento del acto o se hubiese notificado la resolución impugnada",
       "15 días naturales a partir de la publicación del acto en el Diario Oficial de la Federación"],
    c:1,
    ex:"La LGSMIME establece que el Recurso de Revisión debe interponerse dentro de los cuatro días siguientes al en que se tenga conocimiento del acto impugnado o se hubiese notificado la resolución. Este plazo breve responde a la necesidad de definitividad y certeza en los actos electorales, que no pueden permanecer indefinidamente impugnables." },

  { sa:"2.1", sal:"Sistema de medios de impugnación en materia electoral", area:"Justicia electoral",
    p:null, pt:null,
    q:"¿Qué es el Juicio para la Protección de los Derechos Político-Electorales del Ciudadano (JDC) y quién puede promoverlo?",
    o:["Es un recurso administrativo que solo pueden interponer los partidos políticos nacionales ante el INE",
       "Es un medio de impugnación jurisdiccional que puede promover cualquier ciudadano ante el TEPJF para proteger sus derechos de votar, ser votado, de asociación y de afiliación político-electoral",
       "Es un juicio exclusivo para impugnar sanciones del INE en materia de fiscalización de campañas"],
    c:1,
    ex:"El JDC es el instrumento de tutela jurisdiccional de los derechos político-electorales de los ciudadanos. Puede ser promovido por cualquier ciudadano ante el TEPJF cuando considere que un acto o resolución le viola sus derechos a votar, ser votado, asociarse o afiliarse. También procede para impugnar actos de los partidos que afecten los derechos de sus militantes." },

  /* ══════════════════════════════════
     2.2  VIOLENCIA POLÍTICA CONTRA LAS MUJERES  (2)
  ══════════════════════════════════ */
  { sa:"2.2", sal:"Violencia política contra las mujeres en razón de género", area:"Justicia electoral",
    p:null, pt:null,
    q:"¿Cómo define la Ley General de Acceso de las Mujeres a una Vida Libre de Violencia la violencia política contra las mujeres en razón de género?",
    o:["Como cualquier acto de discriminación cometido exclusivamente por partidos políticos durante campañas electorales",
       "Como toda acción u omisión de personas, servidores públicos o instituciones que, basada en razones de género, cause daño o sufrimiento a una o varias mujeres en el ejercicio de sus derechos políticos y electorales",
       "Como los actos de violencia física cometidos contra candidatas únicamente durante el periodo de campaña electoral"],
    c:1,
    ex:"La definición legal de violencia política contra las mujeres en razón de género abarca toda acción u omisión que, basada en el género, tenga por objeto o resultado menoscabar, anular, impedir o restringir el ejercicio de los derechos político-electorales de una mujer. Incluye actos simbólicos, psicológicos, económicos y físicos, y puede ser perpetrada por personas físicas, partidos, servidores públicos o instituciones." },

  { sa:"2.2", sal:"Violencia política contra las mujeres en razón de género", area:"Justicia electoral",
    p:null, pt:null,
    q:"¿Qué obligaciones tienen las Juntas Distritales Ejecutivas del INE frente a las quejas por violencia política contra las mujeres en razón de género?",
    o:["Ninguna; las quejas solo pueden presentarse ante el TEPJF directamente",
       "Deben recibir las quejas o denuncias, darles trámite inicial, y en su caso remitirlas a la instancia competente del INE, garantizando la perspectiva de género en el proceso",
       "Solo pueden actuar si la quejosa es candidata registrada por un partido político nacional"],
    c:1,
    ex:"Las Juntas Distritales, como órganos desconcentrados del INE, tienen obligaciones en la atención de quejas por violencia política de género: recibir y dar trámite inicial a las denuncias, garantizar la perspectiva de género en todas sus actuaciones, remitir el expediente a la instancia competente (Consejo General o autoridad jurisdiccional), y adoptar medidas cautelares para proteger a las víctimas conforme al Reglamento de Quejas del INE." },

  /* ══════════════════════════════════
     2.3  DELITOS ELECTORALES  (1)
  ══════════════════════════════════ */
  { sa:"2.3", sal:"Delitos electorales", area:"Justicia electoral",
    p:null, pt:null,
    q:"¿Qué conductas tipifica la Ley General en Materia de Delitos Electorales (LGMDE) como delitos electorales cometidos por servidores públicos?",
    o:["Únicamente el robo de material electoral el día de la jornada",
       "Entre otras: coaccionar a ciudadanos para que voten o no voten por algún candidato o partido, hacer proselitismo o presión en los lugares de votación, y destinar recursos públicos para apoyar campañas electorales de cualquier candidato o partido",
       "Solo la compra de votos si el servidor público actúa en nombre de un partido político"],
    c:1,
    ex:"La LGMDE tipifica diversas conductas de servidores públicos como delitos electorales: destinar recursos públicos para campañas, coaccionar el voto, hacer proselitismo o presión en lugares de votación, alterar documentos electorales, entre otras. La sanción incluye prisión, multa e inhabilitación para el ejercicio de cargos públicos, con penas agravadas cuando el responsable es servidor público electoral." },

  /* ══════════════════════════════════
     3.1  ÓRGANOS DESCONCENTRADOS  (5)
  ══════════════════════════════════ */
  { sa:"3.1", sal:"Órganos desconcentrados", area:"Instituto Nacional Electoral",
    p:null, pt:null,
    q:"¿Cuál es la estructura de la Junta Distrital Ejecutiva del INE conforme a la LGIPE?",
    o:["Está integrada por el Vocal Ejecutivo, el Vocal del Registro Federal de Electores y dos representantes de partidos políticos con voz y voto",
       "Está integrada por el Vocal Ejecutivo (quien la preside), el Vocal del Registro Federal de Electores, el Vocal de Organización Electoral, el Vocal de Capacitación Electoral y Educación Cívica, y la o el Vocal Secretaria/o",
       "Está presidida por el Consejero Electoral designado por el Consejo General para cada distrito"],
    c:1,
    ex:"Conforme al Art. 90 de la LGIPE, la Junta Distrital Ejecutiva está integrada por cinco Vocales: el Vocal Ejecutivo (quien la preside), el Vocal del Registro Federal de Electores, el Vocal de Organización Electoral, el Vocal de Capacitación Electoral y Educación Cívica, y el Vocal Secretario. Es el órgano ejecutivo del INE en el distrito." },

  { sa:"3.1", sal:"Órganos desconcentrados", area:"Instituto Nacional Electoral",
    p:null, pt:null,
    q:"¿Cuáles son las atribuciones del Vocal Ejecutivo de la Junta Distrital Ejecutiva del INE?",
    o:["Exclusivamente presidir las sesiones del Consejo Distrital y firmar actas; no tiene atribuciones ejecutivas propias",
       "Presidir la Junta Distrital, coordinar las actividades de los vocales, representar al INE en el distrito, ejecutar los acuerdos del Consejo Distrital y supervisar la administración de los recursos humanos, materiales y financieros del INE en la demarcación",
       "Únicamente designar a los funcionarios de casilla y supervisar la jornada electoral, sin intervenir en la gestión administrativa"],
    c:1,
    ex:"El Vocal Ejecutivo preside la Junta Distrital Ejecutiva y tiene amplias atribuciones: coordinar y supervisar las actividades de los demás vocales, representar al INE en el ámbito distrital, ejecutar los acuerdos del Consejo Distrital, y supervisar la administración de los recursos humanos, materiales y financieros. Es el responsable de la administración integral del órgano desconcentrado." },

  { sa:"3.1", sal:"Órganos desconcentrados", area:"Instituto Nacional Electoral",
    p:null, pt:null,
    q:"¿Qué es el Consejo Distrital y cuál es su relación con la Junta Distrital Ejecutiva?",
    o:["El Consejo Distrital y la Junta Distrital son el mismo órgano con distinto nombre según el periodo electoral",
       "El Consejo Distrital es el órgano de deliberación integrado por consejeros y representantes de partidos; la Junta Distrital Ejecutiva es el órgano ejecutivo permanente que implementa sus acuerdos y desarrolla las actividades del INE en el distrito",
       "El Consejo Distrital es superior jerárquico de la Junta Distrital Ejecutiva y puede remover a sus vocales directamente"],
    c:1,
    ex:"El Consejo Distrital es el órgano de dirección y deliberación del INE en el distrito durante los procesos electorales, integrado por consejeros y representantes de partidos. La Junta Distrital Ejecutiva es el órgano ejecutivo permanente, encabezado por el Vocal Ejecutivo, que implementa los acuerdos del Consejo y desarrolla las funciones del INE en el distrito de manera continua." },

  { sa:"3.1", sal:"Órganos desconcentrados", area:"Instituto Nacional Electoral",
    p:null, pt:null,
    q:"¿Qué regula el Reglamento de Sesiones para las Juntas Locales y Distritales Ejecutivas del INE?",
    o:["Únicamente las sesiones del Consejo Distrital durante el proceso electoral, no las reuniones de la Junta",
       "El procedimiento, quórum, convocatoria, desarrollo, votaciones y formalización de acuerdos de las sesiones de las Juntas Locales y Distritales Ejecutivas como órganos colegiados internos del INE",
       "Solo la forma en que el Vocal Ejecutivo convoca reuniones informativas con los partidos políticos"],
    c:1,
    ex:"El Reglamento de Sesiones para las Juntas Locales y Distritales Ejecutivas regula el funcionamiento colegiado de estos órganos: establece las reglas de convocatoria, quórum, orden del día, deliberación, votación y levantamiento de actas. Garantiza que las decisiones de las Juntas como órganos ejecutivos del INE se adopten con legalidad y transparencia." },

  { sa:"3.1", sal:"Órganos desconcentrados", area:"Instituto Nacional Electoral",
    p:null, pt:null,
    q:"¿Cuál es la diferencia principal entre una Junta Local Ejecutiva y una Junta Distrital Ejecutiva del INE?",
    o:["La Junta Local depende del Consejo General; la Junta Distrital depende directamente del TEPJF",
       "La Junta Local opera a nivel estatal y coordina a las Juntas Distritales de la entidad; la Junta Distrital opera en el ámbito del distrito uninominal y es la unidad operativa de base del INE",
       "No existe diferencia funcional; solo difieren en el nombre por razones históricas"],
    c:1,
    ex:"La estructura desconcentrada del INE tiene dos niveles: las Juntas Locales Ejecutivas operan a nivel estatal (una por entidad federativa) y coordinan las actividades de las Juntas Distritales de su entidad. Las Juntas Distritales Ejecutivas son las unidades operativas de base, ubicadas en cada uno de los 300 distritos electorales uninominales del país." },

  /* ══════════════════════════════════
     4.1  PROCEDIMIENTOS SUSTANTIVOS  (16)
  ══════════════════════════════════ */
  { sa:"4.1", sal:"Procedimientos sustantivos del proceso electoral", area:"Proceso electoral",
    p:null, pt:null,
    q:"¿Cuándo inicia formalmente el proceso electoral federal ordinario conforme a la LGIPE?",
    o:["El 1 de enero del año de la elección, con la publicación del calendario electoral en el DOF",
       "En septiembre del año previo a la elección, con la primera sesión del Consejo General del INE en que se declare el inicio del proceso",
       "El 1 de octubre del año previo a la elección, cuando el INE convoca públicamente el proceso"],
    c:1,
    ex:"Conforme al Art. 225 de la LGIPE, el proceso electoral federal ordinario inicia en septiembre del año previo al de la elección, con la primera sesión que el Consejo General celebre en ese mes, en la cual se declara formalmente el inicio del proceso. A partir de ese momento comienzan a correr todos los plazos y etapas del calendario electoral." },

  { sa:"4.1", sal:"Procedimientos sustantivos del proceso electoral", area:"Proceso electoral",
    p:null, pt:null,
    q:"¿Cuáles son las etapas del proceso electoral federal conforme a la LGIPE?",
    o:["Precampaña, campaña, jornada electoral y cómputo distrital únicamente",
       "Preparación de la elección, jornada electoral, resultados y declaraciones de validez, y dictamen y declaraciones de validez de la elección de Presidente",
       "Registro de candidatos, campaña, votación, cómputo y calificación, conforme al calendario del Consejo General"],
    c:1,
    ex:"La LGIPE establece cuatro etapas del proceso electoral federal: (1) preparación de la elección; (2) jornada electoral; (3) resultados y declaraciones de validez de las elecciones de Diputados y Senadores; y (4) dictamen y declaraciones de validez de la elección de Presidente de la República. Cada etapa tiene actos, plazos y responsables específicos." },

  { sa:"4.1", sal:"Procedimientos sustantivos del proceso electoral", area:"Proceso electoral",
    p:null, pt:null,
    q:"¿Qué es la Lista Nominal de Electores y cuál es su importancia en el proceso electoral?",
    o:["Es la relación de candidatos registrados por los partidos para cada elección",
       "Es la relación de ciudadanos inscritos en el Padrón Electoral que cuentan con credencial para votar vigente y tienen derecho a votar en cada sección electoral; es el instrumento fundamental para la instalación de casillas y el ejercicio del voto",
       "Es el registro de los funcionarios del INE habilitados para trabajar en cada proceso electoral"],
    c:1,
    ex:"La Lista Nominal de Electores es la relación de ciudadanos que cuentan con credencial para votar y están en condiciones de ejercer su derecho al sufragio. Se elabora por sección electoral y se imprime para cada casilla. Es el instrumento base para la instalación de casillas (solo se instala una por cada determinado número de electores en la lista), para la insaculación de funcionarios y para el control del voto durante la jornada." },

  { sa:"4.1", sal:"Procedimientos sustantivos del proceso electoral", area:"Proceso electoral",
    p:null, pt:null,
    q:"¿Qué es la insaculación de ciudadanos para integrar Mesas Directivas de Casilla?",
    o:["Es el proceso de contratación directa por el que el INE selecciona a sus funcionarios permanentes para laborar en las casillas",
       "Es el procedimiento aleatorio mediante el cual el INE selecciona, por sorteo, a los ciudadanos que integrarán las Mesas Directivas de Casilla, a partir de la Lista Nominal de Electores de cada sección",
       "Es la votación interna que realizan los partidos políticos para designar a sus representantes ante las casillas electorales"],
    c:1,
    ex:"La insaculación es el mecanismo aleatorio establecido en la LGIPE para garantizar la imparcialidad en la selección de ciudadanos que integrarán las Mesas Directivas de Casilla. Se realizan dos sorteos: el primero selecciona una muestra de ciudadanos para capacitarlos; el segundo, entre los capacitados, determina quiénes serán propietarios y suplentes de cada cargo en la mesa." },

  { sa:"4.1", sal:"Procedimientos sustantivos del proceso electoral", area:"Proceso electoral",
    p:null, pt:null,
    q:"¿Cuántos integrantes tiene una Mesa Directiva de Casilla y cuáles son sus cargos?",
    o:["Tres integrantes: Presidente, Secretario y un Escrutador",
       "Nueve integrantes: Presidente, dos Secretarios, tres Escrutadores y tres suplentes.",
       "Cinco integrantes: Presidente, Vicepresidente, Secretario y dos Escrutadores sin suplentes"],
    c:1,
    ex:"En procesos concurrentes, la Mesa Directiva de Casilla se integra por 9 ciudadanos: 6 propietarios (1 Presidente, 2 Secretarios y 3 Escrutadores) y 3 suplentes generales. Esta estructura permite el escrutinio y cómputo simultáneo de elecciones federales y locales." },

  { sa:"4.1", sal:"Procedimientos sustantivos del proceso electoral", area:"Proceso electoral",
    p:null, pt:null,
    q:"¿Qué es el cómputo distrital y cuándo se realiza?",
    o:["Es el conteo que realizan los funcionarios de casilla al cerrar la votación el día de la jornada electoral",
       "Es la suma de los resultados consignados en las actas de escrutinio y cómputo de casilla que realiza el Consejo Distrital el miércoles siguiente a la jornada electoral",
       "Es el recuento de votos que realiza el TEPJF cuando hay impugnaciones de los resultados de la elección"],
    c:1,
    ex:"El cómputo distrital es la operación aritmética por la cual el Consejo Distrital suma los resultados consignados en las actas de escrutinio y cómputo de todas las casillas del distrito. Se realiza el miércoles siguiente al día de la jornada electoral, comenzando a las 8:00 horas. El resultado del cómputo distrital determina los triunfos de mayoría relativa en el distrito." },

  { sa:"4.1", sal:"Procedimientos sustantivos del proceso electoral", area:"Proceso electoral",
    p:null, pt:null,
    q:"¿Qué es el Programa de Resultados Electorales Preliminares (PREP) y cuál es su naturaleza jurídica?",
    o:["Es el cómputo oficial definitivo de la elección publicado por el INE la noche del día de la jornada",
       "Es un mecanismo informático de información preliminar que el INE pone a disposición de la ciudadanía para dar a conocer tendencias de los resultados electorales; sus cifras no tienen carácter oficial",
       "Es el sistema mediante el cual el TEPJF publica las sentencias sobre la validez de la elección presidencial"],
    c:1,
    ex:"El PREP es un sistema de información que el INE opera para difundir, de manera oportuna, los resultados preliminares de la votación conforme se reciben y capturan las actas de escrutinio y cómputo. Sus cifras son informativas y no constituyen el cómputo oficial ni la declaración de validez de la elección. El cómputo oficial lo realizan los Consejos Distritales en las sesiones correspondientes." },

  { sa:"4.1", sal:"Procedimientos sustantivos del proceso electoral", area:"Proceso electoral",
    p:null, pt:null,
    q:"¿Qué son las casillas especiales y para qué ciudadanos se instalan?",
    o:["Son casillas de emergencia que se instalan cuando una casilla ordinaria no puede funcionar por causa de fuerza mayor",
       "Son casillas instaladas en puntos estratégicos para que voten los ciudadanos que el día de la jornada se encuentran fuera de su sección electoral por razones de tránsito o trabajo, y que solo pueden votar para Presidente de la República y Senadores",
       "Son casillas exclusivas para ciudadanos con discapacidad, instaladas en hospitales y centros de salud"],
    c:1,
    ex:"Las casillas especiales son instaladas por el INE en lugares de afluencia ciudadana (centrales camioneras, aeropuertos, plazas) para permitir que los ciudadanos que el día de la elección se encuentran fuera de su sección electoral ejerzan su derecho al voto. Conforme a la LGIPE, en estas casillas solo se puede votar para Presidente de la República y Senadores." },

  { sa:"4.1", sal:"Procedimientos sustantivos del proceso electoral", area:"Proceso electoral",
    p:null, pt:null,
    q:"¿Qué documentos integran el expediente de casilla al final de la jornada electoral?",
    o:["Únicamente el Acta de la Jornada Electoral y las boletas sobrantes",
       "El Acta de instalación, el Acta de la Jornada Electoral, las actas de escrutinio y cómputo por tipo de elección, el acta de incidentes, la lista nominal utilizada, los talones de boletas y demás documentación generada durante la jornada",
       "Solo las boletas utilizadas y el acta de cierre de votación firmada por el Presidente de Casilla"],
    c:1,
    ex:"El expediente de casilla es el conjunto de documentos que acreditan la legalidad de la jornada electoral en esa sección. Incluye el Acta de Instalación, el Acta de la Jornada Electoral, las actas de escrutinio y cómputo por cada tipo de elección, el Acta de Incidentes, la lista nominal utilizada, los talones de boletas inutilizadas y demás documentación. Su correcta integración es fundamental para evitar la nulidad de la votación." },

  { sa:"4.1", sal:"Procedimientos sustantivos del proceso electoral", area:"Proceso electoral",
    p:null, pt:null,
    q:"¿Qué es el voto anticipado y para qué grupos de ciudadanos se implementó en México?",
    o:["Es una modalidad de voto electrónico que permite votar por internet hasta 30 días antes de la jornada",
       "Es la modalidad que permite a los ciudadanos en prisión preventiva y a las personas con discapacidad grave ejercer su derecho al voto antes de la jornada electoral, conforme a lineamientos aprobados por el Consejo General del INE",
       "Es el voto por correo exclusivamente para ciudadanos mexicanos residentes en el extranjero"],
    c:1,
    ex:"El INE implementó el voto anticipado conforme a los lineamientos aprobados por el Consejo General para el Proceso Electoral Concurrente 2023-2024. Está dirigido principalmente a personas en prisión preventiva que conservan sus derechos político-electorales y a ciudadanos con movilidad reducida severa. Se realiza en fechas previas a la jornada electoral mediante procedimientos específicos de instalación y resguardo." },

  { sa:"4.1", sal:"Procedimientos sustantivos del proceso electoral", area:"Proceso electoral",
    p:null, pt:null,
    q:"¿Qué son los cómputos distritales para la elección del Poder Judicial de la Federación y qué normativa los regula?",
    o:["Son los mismos cómputos ordinarios de diputados, sin normativa especial adicional",
       "Son los cómputos que realizan los Consejos Distritales para contabilizar los resultados de la elección extraordinaria de Ministros, Magistrados y Jueces del Poder Judicial; se rigen por los lineamientos específicos que el Consejo General aprueba para ese proceso",
       "Son únicamente competencia del TEPJF y no intervienen los órganos desconcentrados del INE"],
    c:1,
    ex:"El Proceso Electoral Extraordinario del Poder Judicial de la Federación 2024-2025 implicó procedimientos especiales: cómputos distritales de Entidad Federativa, Circunscripción Plurinominal y Nacionales, regulados por los lineamientos que el Consejo General aprobó específicamente para ese proceso y que se desarrollan en las Juntas Distritales conforme a las instrucciones de la Junta Local correspondiente." },

  { sa:"4.1", sal:"Procedimientos sustantivos del proceso electoral", area:"Proceso electoral",
    p:null, pt:null,
    q:"¿Qué son las actas de escrutinio y cómputo y quién las elabora?",
    o:["Las elabora el INE en sus oficinas distritales una vez que recibe las urnas el día siguiente a la jornada",
       "Las elaboran los funcionarios de la Mesa Directiva de Casilla al concluir la votación, consignando en ellas el número de votos obtenidos por cada candidato, partido o coalición, y los votos nulos, para cada tipo de elección",
       "Las elaboran los representantes de los partidos políticos en presencia del Supervisor Electoral"],
    c:1,
    ex:"Las actas de escrutinio y cómputo son elaboradas por los propios funcionarios de la Mesa Directiva de Casilla una vez cerrada la votación. Se levanta un acta por cada tipo de elección (Presidente, Senadores, Diputados). Contienen el número de votos para cada opción, los votos nulos y los votos en blanco. Son los documentos primarios del resultado electoral y tienen presunción de legalidad." },

  { sa:"4.1", sal:"Procedimientos sustantivos del proceso electoral", area:"Proceso electoral",
    p:null, pt:null,
    q:"¿Cuál es la función de los Supervisores Electorales durante la preparación de la elección?",
    o:["Presidir las sesiones del Consejo Distrital y dar fe de los actos del proceso electoral en el distrito",
       "Supervisar el trabajo de los Capacitadores-Asistentes Electorales en campo, verificar el avance de la capacitación e integración de mesas, y reportar incidencias a la Junta Distrital",
       "Sustituir a los Vocales de la Junta Distrital en sus ausencias durante el proceso electoral"],
    c:1,
    ex:"Los Supervisores Electorales son personal temporal contratado por el INE para apoyar la preparación del proceso electoral. Su función principal es supervisar directamente en campo el trabajo de los Capacitadores-Asistentes Electorales (CAE): verifican el avance de visitas domiciliarias, la calidad de las capacitaciones, el cumplimiento de metas y reportan incidencias al Vocal de Capacitación Electoral de la Junta Distrital." },

  { sa:"4.1", sal:"Procedimientos sustantivos del proceso electoral", area:"Proceso electoral",
    p:null, pt:null,
    q:"¿Qué es el Voto de los Mexicanos Residentes en el Extranjero y qué modalidades contempla la LGIPE?",
    o:["Solo pueden votar para Presidente de la República mediante correo postal, sin otras modalidades",
       "Los mexicanos en el extranjero con credencial para votar pueden emitir su voto por correo postal, de forma electrónica por internet o en módulos consulares habilitados, para las elecciones de Presidente y, cuando corresponda, Senadores y gobernadores de entidades que lo prevean",
       "Solo pueden votar en los consulados mexicanos y únicamente para Presidente, con credencial emitida por la embajada"],
    c:1,
    ex:"La LGIPE contempla diversas modalidades para el voto de mexicanos en el extranjero: correo postal, voto electrónico por internet y voto en módulos consulares. Pueden votar para Presidente de la República y, según la normativa local, para Senadores y elecciones locales de entidades que han implementado este mecanismo. El INE administra el Listado Nominal de Electores Residentes en el Extranjero." },

  { sa:"4.1", sal:"Procedimientos sustantivos del proceso electoral", area:"Proceso electoral",
    p:null, pt:null,
    q:"¿Qué son las coaliciones electorales y bajo qué condiciones pueden formarse entre partidos políticos?",
    o:["Son alianzas informales sin regulación legal, formadas exclusivamente para el reparto de cargos públicos tras la elección",
       "Son acuerdos entre dos o más partidos políticos para postular candidatos comunes bajo una plataforma y emblema compartidos; deben registrarse ante el INE y sujetarse a los convenios de coalición aprobados conforme a los plazos y requisitos de la LGIPP",
       "Son fusiones definitivas de partidos que pierden su registro individual al coaligarse"],
    c:1,
    ex:"Las coaliciones son mecanismos de participación conjunta previstos en la LGPP. Dos o más partidos pueden coaligarse para postular candidatos comunes, debiendo registrar el convenio ante el INE dentro de los plazos establecidos en el calendario electoral. El convenio determina el emblema, la distribución de votos para efectos del financiamiento y la forma en que se contabilizarán los resultados electorales de los candidatos coaligados." },

  { sa:"4.1", sal:"Procedimientos sustantivos del proceso electoral", area:"Proceso electoral",
    p:null, pt:null,
    q:"¿Qué es la Declaración de Validez de la Elección de Diputados de Mayoría Relativa y quién la emite?",
    o:["La emite el INE a través del Consejo General al concluir el cómputo nacional de diputados por representación proporcional",
       "La emite el Consejo Distrital una vez realizado el cómputo distrital y, en su caso, resueltas las impugnaciones; con ella se certifica la validez de la elección en el distrito y se entrega la constancia de mayoría al candidato ganador",
       "La emite exclusivamente el TEPJF mediante sentencia firme, sin intervención del INE en ningún momento del proceso"],
    c:1,
    ex:"Una vez concluido el cómputo distrital y verificado que no existen impugnaciones pendientes que lo impidan, el Consejo Distrital emite la Declaración de Validez de la Elección y entrega la Constancia de Mayoría al candidato que obtuvo el mayor número de votos en el distrito. Si hay impugnaciones, el Consejo Distrital suspende la entrega de constancias hasta que el TEPJF resuelva, garantizando así la definitividad y legalidad del resultado." },

  /* ══════════════════════════════════
     5.1  RECURSOS FINANCIEROS Y MATERIALES  (4)
  ══════════════════════════════════ */
  { sa:"5.1", sal:"Recursos financieros y materiales", area:"Gestión administrativa institucional",
    p:null, pt:null,
    q:"¿Qué regula el Reglamento del INE en Materia de Adquisiciones, Arrendamientos de Bienes Muebles y Servicios?",
    o:["Exclusivamente la adquisición de material electoral (boletas, urnas, mamparas) durante los procesos electorales",
       "Los procedimientos, requisitos, montos y criterios para que el INE adquiera bienes muebles, arriende bienes o contrate servicios, garantizando legalidad, eficiencia y transparencia en el ejercicio del gasto público",
       "Solo la contratación de personal temporal (CAE, Supervisores) durante los procesos electorales"],
    c:1,
    ex:"El Reglamento del INE en Materia de Adquisiciones regula todos los procedimientos de compra, arrendamiento y contratación de servicios del Instituto. Establece los tipos de procedimientos (licitación pública, invitación a cuando menos tres personas, adjudicación directa), los montos que habilitan cada procedimiento, las excepciones permitidas y los controles de transparencia aplicables, en cumplimiento de la Ley de Adquisiciones y la normativa interna del INE." },

  { sa:"5.1", sal:"Recursos financieros y materiales", area:"Gestión administrativa institucional",
    p:null, pt:null,
    q:"¿Cuál es la función del Vocal de Secretario en la Junta Distrital Ejecutiva respecto a los recursos financieros?",
    o:["Solo elabora los informes mensuales de gasto; no tiene facultades de autorización ni supervisión",
       "Es responsable de la administración de los recursos humanos, financieros y materiales asignados a la Junta Distrital, supervisando el ejercicio del presupuesto, el control del inventario y el cumplimiento de las normas administrativas del INE",
       "Solo maneja la caja chica del distrito y no tiene responsabilidad sobre los recursos presupuestales"],
    c:1,
    ex:"La o el Vocal Secreatario es el responsable directo de la gestión administrativa del órgano desconcentrado. Sus funciones incluyen administrar el presupuesto asignado al distrito, controlar el inventario de bienes muebles, gestionar los recursos humanos (nómina, prestaciones, contratos temporales), y asegurarse de que el ejercicio del gasto se realice conforme a las normas administrativas, financieras y de adquisiciones del INE." },

  { sa:"5.1", sal:"Recursos financieros y materiales", area:"Gestión administrativa institucional",
    p:null, pt:null,
    q:"¿Qué establece el Manual de Normas Administrativas en Materia de Recursos Financieros del INE respecto al ejercicio presupuestal?",
    o:["Que el gasto puede ejercerse libremente siempre que no supere el presupuesto total asignado al órgano desconcentrado",
       "Los procedimientos, controles, registros contables, comprobación de gastos, manejo de fondos revolventes y criterios de austeridad que deben seguir los órganos desconcentrados para ejercer el presupuesto conforme a las disposiciones legales aplicables",
       "Solo las reglas para el manejo de viáticos y gastos de viaje del personal del INE"],
    c:1,
    ex:"El Manual de Normas Administrativas en Materia de Recursos Financieros del INE es el instrumento normativo interno que regula el ciclo presupuestal en los órganos del Instituto: desde la programación y presupuestación hasta el ejercicio, registro, control y comprobación del gasto. Incluye procedimientos para fondos revolventes, viáticos, pago de nómina y criterios de austeridad y disciplina presupuestal." },

  { sa:"5.1", sal:"Recursos financieros y materiales", area:"Gestión administrativa institucional",
    p:null, pt:null,
    q:"¿Qué obligaciones tiene la Junta Distrital Ejecutiva en materia de control del inventario de bienes muebles del INE?",
    o:["Ninguna; el control del inventario es exclusivo de la Junta Local Ejecutiva de la entidad",
       "Debe mantener actualizado el inventario de los bienes muebles asignados al distrito, registrar altas y bajas, realizar levantamientos físicos periódicos y reportar su situación a la Junta Local conforme a las normas administrativas del INE",
       "Solo debe reportar los bienes perdidos o robados; los demás movimientos no requieren registro formal"],
    c:1,
    ex:"Las Juntas Distritales tienen la obligación de administrar y controlar los bienes muebles que les son asignados: mantener el inventario actualizado, registrar cualquier alta, baja, transferencia o cambio de resguardatario, y realizar levantamientos físicos conforme a los calendarios establecidos por el INE. Esto garantiza el correcto ejercicio de los recursos públicos y la transparencia en el manejo del patrimonio institucional." },

  /* ══════════════════════════════════
     5.2  GESTIÓN DE RECURSOS HUMANOS EN EL INE  (2)
  ══════════════════════════════════ */
  { sa:"5.2", sal:"Gestión de recursos humanos en el INE", area:"Gestión administrativa institucional",
    p:null, pt:null,
    q:"¿Cómo clasifica el Estatuto del Servicio Profesional Electoral Nacional (SPEN) al cargo de Vocal Ejecutivo de Junta Distrital Ejecutiva?",
    o:["Como personal de libre designación por el Secretario Ejecutivo del INE, sin pertenecer al SPEN",
       "Como un cargo de la rama ejecutiva del SPEN, sujeto a ingreso por concurso de oposición, evaluación del desempeño, capacitación continua y permanencia conforme a los principios de mérito, imparcialidad y certeza",
       "Como personal de confianza designado directamente por el Consejo General sin requisitos de ingreso formales"],
    c:1,
    ex:"El Estatuto del SPEN clasifica al Vocal Ejecutivo dentro de la rama ejecutiva del Servicio Profesional Electoral Nacional. Esto implica que su ingreso es por concurso de oposición, está sujeto a evaluaciones periódicas del desempeño, tiene obligación de participar en programas de capacitación continua, y su permanencia depende del cumplimiento de los estándares de mérito, imparcialidad y certeza establecidos por el Comité del SPEN." },

  { sa:"5.2", sal:"Gestión de recursos humanos en el INE", area:"Gestión administrativa institucional",
    p:null, pt:null,
    q:"¿Qué obligaciones impone el Estatuto del SPEN al Vocal Ejecutivo respecto a la gestión de recursos humanos en su órgano desconcentrado?",
    o:["Solo debe reportar las incidencias de asistencia del personal; las decisiones de recursos humanos las toma exclusivamente la Junta Local",
       "Debe supervisar que el personal a su cargo sea evaluado conforme a los estándares del SPEN, promover su capacitación, garantizar condiciones laborales dignas, aplicar con imparcialidad las normas disciplinarias y fomentar un ambiente de trabajo que observe los principios del servicio electoral",
       "Puede contratar y despedir libremente al personal del distrito sin sujeción a procedimiento alguno"],
    c:1,
    ex:"El Estatuto del SPEN establece que los titulares de los órganos desconcentrados, como el Vocal Ejecutivo, deben asegurar que el personal a su cargo sea evaluado conforme a los estándares del servicio, promover su capacitación, garantizar condiciones laborales acordes a la dignidad del trabajo, aplicar con imparcialidad el régimen disciplinario y fomentar los principios de certeza, legalidad, independencia, imparcialidad, máxima publicidad y objetividad." }

];
