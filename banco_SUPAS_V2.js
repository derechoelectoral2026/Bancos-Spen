/* ═══════════════════════════════════════════════════════
   BANCO SUPAS V2 — 40 preguntas
   Temas: Reglamento Interior INE · Reglamento Quejas y Denuncias · LGSMIME · CPEUM
   Exporta: BANCO_SUPAS_V2
═══════════════════════════════════════════════════════ */

const BANCO_SUPAS_V2 = [

  // Q1 — Art. 71 Reglamento Interior del INE
  { sa:"1.1", sal:"Reglamento Interior INE", area:"Normatividad Interna INE", t:"dir",
    sal2:"Art. 71 Reglamento Interior del INE",
    q:"¿A qué órgano del Instituto Nacional Electoral está adscrita la Unidad Técnica de lo Contencioso Electoral?",
    o:["A la Secretaría Ejecutiva", "A la Comisión de Quejas y Denuncias", "Al Consejo General"],
    c:0,
    ex:"Según el artículo 71 del Reglamento Interior del INE, la Unidad Técnica de lo Contencioso Electoral 'estará adscrita a la Secretaría Ejecutiva'." },

  // Q2 — Art. 71 Reglamento Interior del INE
  { sa:"1.1", sal:"Reglamento Interior INE", area:"Normatividad Interna INE", t:"dir",
    sal2:"Art. 71 Reglamento Interior del INE",
    q:"La Unidad Técnica de lo Contencioso Electoral tiene entre sus atribuciones sustanciar los procedimientos especiales sancionadores de manera oficiosa cuando se presenten denuncias por hechos relacionados con _______.",
    o:["violencia política contra las mujeres en razón de género", "infracciones a la normatividad electoral por parte de partidos políticos", "incumplimiento de obligaciones de servidores públicos y notarios"],
    c:0,
    ex:"Según el artículo 71 del Reglamento Interior del INE, la Unidad Técnica de lo Contencioso Electoral debe sustanciar el procedimiento especial sancionador de manera oficiosa o cuando se presenten denuncias por hechos relacionados con violencia política contra las mujeres en razón de género." },

  // Q3 — Art. 71 Reglamento Interior del INE
  { sa:"1.1", sal:"Reglamento Interior INE", area:"Normatividad Interna INE", t:"seq",
    sal2:"Art. 71 Reglamento Interior del INE",
    listadoTitle:"Ordena la secuencia correcta:",
    listado:["Remitir el expediente a la Sala Regional Especializada del Tribunal Electoral", "Sustanciar el procedimiento especial sancionador por denuncia o de manera oficiosa", "Agotar las diligencias de investigación", "Emitir acuerdos y oficios para dar trámite a las diligencias", "Efectuar gestiones para dar vista a autoridades hacendarias para cobro de multas"],
    q:"¿Cuál es la secuencia correcta que debe seguir la Unidad Técnica de lo Contencioso Electoral en el procedimiento especial sancionador?",
    o:["2, 4, 3, 1, 5", "4, 2, 1, 3, 5", "2, 1, 4, 5, 3"],
    c:0,
    ex:"Según el artículo 71, la Unidad primero sustancia los procedimientos especiales sancionadores, luego emite los acuerdos y oficios necesarios para tramitar las diligencias, después agota las diligencias de investigación, posteriormente remite el expediente a la Sala Regional Especializada una vez agotadas dichas diligencias, y finalmente efectúa las gestiones para el cobro de multas no pagadas." },

  // Q4 — Art. 71 Reglamento Interior del INE
  { sa:"1.1", sal:"Reglamento Interior INE", area:"Normatividad Interna INE", t:"rel",
    sal2:"Art. 71 Reglamento Interior del INE",
    relTitle:"Relacione los tipos de procedimientos con las acciones correspondientes que realiza la Unidad Técnica de lo Contencioso Electoral.",
    colA:{ title:"Tipo de procedimiento", items:["1. Procedimientos especiales sancionadores", "2. Procedimientos ordinarios sancionadores", "3. Procedimiento de remoción"] },
    colB:{ title:"Acción correspondiente", items:["a) Se remiten los proyectos de resolución a la Comisión de Quejas y Denuncias", "b) Se remiten los expedientes a la Sala Regional Especializada del Tribunal Electoral una vez agotadas las diligencias de investigación", "c) Se apoya al Secretario Ejecutivo en la sustanciación del procedimiento contra Consejeros Electorales de los Organismos Públicos Locales", "d) Se archivan definitivamente tras la emisión de acuerdos internos"] },
    q:"Seleccione la opción con las relaciones correctas:",
    o:["1a, 2b, 3c", "1b, 2a, 3c", "1c, 2d, 3a"],
    c:1,
    ex:"Según el artículo 71, los procedimientos especiales sancionadores se remiten a la Sala Regional Especializada una vez agotadas las diligencias de investigación, los procedimientos ordinarios tienen sus proyectos de resolución remitidos a la Comisión de Quejas y Denuncias, y en los procedimientos de remoción la Unidad apoya al Secretario Ejecutivo en la sustanciación contra Consejeros Electorales de los Organismos Públicos Locales." },

  // Q5 — Art. 3 Reglamento de Quejas y Denuncias del INE
  { sa:"1.2", sal:"Reglamento Quejas y Denuncias", area:"Normatividad Interna INE", t:"dir",
    sal2:"Art. 3 Reglamento de Quejas y Denuncias del INE",
    q:"¿Cuántos procedimientos se regulan en el Reglamento según el artículo 3?",
    o:["Tres procedimientos", "Dos procedimientos", "Cuatro procedimientos"],
    c:0,
    ex:"Según el artículo 3 del Reglamento de Quejas y Denuncias del INE, los procedimientos que se regulan son tres: I. El procedimiento sancionador ordinario, II. El procedimiento especial sancionador, únicamente en cuanto a su trámite y sustanciación, y III. El procedimiento para la adopción de medidas cautelares." },

  // Q6 — Art. 3 Reglamento de Quejas y Denuncias del INE
  { sa:"1.2", sal:"Reglamento Quejas y Denuncias", area:"Normatividad Interna INE", t:"dir",
    sal2:"Art. 3 Reglamento de Quejas y Denuncias del INE",
    q:"Los procedimientos sancionadores tienen como finalidad sustanciar las quejas y denuncias presentadas ante el Instituto, o aquéllas iniciadas de oficio, a efecto de que la autoridad competente determine la existencia o no de faltas a la normatividad electoral federal y, en su caso, _______",
    o:["imponga las sanciones que correspondan", "archive definitivamente el expediente", "traslade la competencia a otra autoridad"],
    c:0,
    ex:"En los procedimientos ordinarios sancionadores la autoridad competente debe determinar la existencia o no de faltas a la normatividad electoral federal y, en su caso, imponga las sanciones que correspondan, o bien, remita el expediente a la instancia competente." },

  // Q7 — Reglamento de Quejas y Denuncias del INE
  { sa:"1.2", sal:"Reglamento Quejas y Denuncias", area:"Normatividad Interna INE", t:"dir",
    sal2:"Reglamento de Quejas y Denuncias del INE",
    q:"¿Cuál es la función establecida en el Reglamento de Quejas y Denuncias del INE respecto a los procedimientos especiales sancionadores?",
    o:["Sustanciar el procedimiento y turnar el expediente a la Sala Regional Especializada para su resolución", "Resolver directamente el procedimiento sin intervención de otras instancias", "Remitir el expediente al Tribunal Electoral del Poder Judicial de la Federación"],
    c:0,
    ex:"Según el Reglamento de Quejas y Denuncias del INE, en el caso de los procedimientos especiales sancionadores se debe sustanciar el procedimiento y turnar el expediente a la Sala Regional Especializada para su resolución." },

  // Q8 — Art. 5 Reglamento de Quejas y Denuncias del INE
  { sa:"1.2", sal:"Reglamento Quejas y Denuncias", area:"Normatividad Interna INE", t:"rel",
    sal2:"Art. 5 Reglamento de Quejas y Denuncias del INE",
    relTitle:"Relacione cada procedimiento con el órgano competente correspondiente según el Reglamento de Quejas y Denuncias del INE.",
    colA:{ title:"Procedimiento", items:["1. Procedimiento sancionador ordinario", "2. Procedimiento especial sancionador", "3. Procedimiento para medidas cautelares"] },
    colB:{ title:"Competencia", items:["a) Sustanciado, tramitado y resuelto a nivel Central cuando se denuncie infracción de normas electorales que no sean materia del procedimiento especial", "b) Sustanciado y tramitado por la Unidad Técnica cuando se denuncie hipótesis del artículo 470 de la Ley General", "c) Conocido por los órganos del Instituto a nivel Central", "d) Resuelto exclusivamente por autoridades locales del INE"] },
    q:"Seleccione la opción con las relaciones correctas:",
    o:["1a, 2b, 3c", "1b, 2c, 3a", "1c, 2a, 3b"],
    c:0,
    ex:"Según el artículo 5 del Reglamento, el procedimiento sancionador ordinario es sustanciado, tramitado y resuelto a nivel Central (1a); el procedimiento especial sancionador es sustanciado y tramitado por la Unidad Técnica cuando se denuncie las hipótesis del artículo 470 de la Ley General (2b); y el procedimiento para medidas cautelares es conocido por los órganos del Instituto a nivel Central (3c)." },

  // Q9 — Art. 5, fracc. II, inc. a) Reglamento de Quejas y Denuncias del INE
  { sa:"1.2", sal:"Reglamento Quejas y Denuncias", area:"Normatividad Interna INE", t:"dir",
    sal2:"Art. 5, fracc. II, inc. a) Reglamento de Quejas y Denuncias del INE",
    q:"¿Qué tipo de propaganda puede denunciarse a nivel distrital durante el Proceso Electoral Federal según el Reglamento de Quejas y Denuncias del INE?",
    o:["La propaganda política impresa, pintada en bardas o cualquier otra diferente a la transmitida por radio o televisión", "Únicamente la propaganda transmitida por medios de comunicación masiva como radio y televisión", "Solamente la propaganda política impresa en medios gráficos oficiales"],
    c:0,
    ex:"Según el artículo 5, fracción II, inciso a) del Reglamento de Quejas y Denuncias del INE, a nivel distrital se puede denunciar la ubicación física o el contenido de propaganda política o electoral impresa, pintada en bardas, o de cualquiera diferente a la transmitida por radio o televisión." },

  // Q10 — Art. 5, fracc. II, inc. b) Reglamento de Quejas y Denuncias del INE
  { sa:"1.2", sal:"Reglamento Quejas y Denuncias", area:"Normatividad Interna INE", t:"dir",
    sal2:"Art. 5, fracc. II, inc. b) Reglamento de Quejas y Denuncias del INE",
    q:"¿Cuándo puede conocer a nivel distrital el INE de denuncias por actos anticipados de precampaña o campaña?",
    o:["Cuando durante el Proceso Electoral Federal el medio comisivo de la infracción sea diferente a radio o televisión", "Cuando durante el Proceso Electoral Federal el medio comisivo de la infracción sea únicamente radio o televisión", "Cuando fuera del Proceso Electoral Federal el medio comisivo de la infracción sea diferente a radio o televisión"],
    c:0,
    ex:"Según el Artículo 5, fracción II, inciso b) del Reglamento de Quejas y Denuncias del INE, a nivel distrital se puede denunciar actos anticipados de precampaña o campaña cuando durante el Proceso Electoral Federal el medio comisivo de la infracción sea diferente a radio o televisión." },

  // Q11 — Art. 5, fracc. II, inc. c) Reglamento de Quejas y Denuncias del INE
  { sa:"1.2", sal:"Reglamento Quejas y Denuncias", area:"Normatividad Interna INE", t:"dir",
    sal2:"Art. 5, fracc. II, inc. c) Reglamento de Quejas y Denuncias del INE",
    q:"¿En qué periodo está prohibida la difusión de propaganda gubernamental o institucional que puede ser denunciada a nivel distrital?",
    o:["A partir del inicio de las campañas electorales federales y hasta la conclusión de la Jornada Electoral", "Durante todo el año calendario en que se celebren elecciones federales", "Únicamente durante los 30 días previos a la Jornada Electoral"],
    c:0,
    ex:"Según el artículo 5, inciso II, apartado c) del Reglamento, la presunta difusión de propaganda gubernamental o institucional está prohibida a partir del inicio de las campañas electorales federales y hasta la conclusión de la Jornada Electoral." },

  // Q12 — Art. 5, fracc. II, inc. d) Reglamento de Quejas y Denuncias del INE
  { sa:"1.2", sal:"Reglamento Quejas y Denuncias", area:"Normatividad Interna INE", t:"dir",
    sal2:"Art. 5, fracc. II, inc. d) Reglamento de Quejas y Denuncias del INE",
    q:"¿Cuál es la competencia de nivel distrital durante el Proceso Electoral Federal respecto a la propaganda de autoridades públicas?",
    o:["Conocer denuncias sobre propaganda que implique promoción personal de servidores públicos, cuando el medio sea diferente a radio o televisión y se divulgue en territorio de un distrito determinado", "Conocer denuncias sobre cualquier tipo de propaganda de autoridades públicas transmitida exclusivamente por radio o televisión en el territorio distrital", "Conocer denuncias sobre propaganda institucional de entes públicos que no implique promoción personal, independientemente del medio utilizado"],
    c:0,
    ex:"Según el artículo 5, fracción II, inciso d) del Reglamento, la competencia distrital incluye denuncias sobre propaganda de autoridades y entes públicos que implique promoción personal de servidores públicos, siempre que el medio sea diferente a radio o televisión y la divulgación se realice en territorio de un distrito determinado." },

  // Q13 — Art. 5, fracc. II, inc. e) Reglamento de Quejas y Denuncias del INE
  { sa:"1.2", sal:"Reglamento Quejas y Denuncias", area:"Normatividad Interna INE", t:"dir",
    sal2:"Art. 5, fracc. II, inc. e) Reglamento de Quejas y Denuncias del INE",
    q:"¿Cuándo procede a nivel distrital la denuncia por difusión de propaganda calumniosa durante el Proceso Electoral Federal?",
    o:["Cuando el medio comisivo sea distinto a radio y televisión", "Únicamente cuando se utilicen medios de radio y televisión", "Solamente cuando se compruebe daño moral a los candidatos"],
    c:0,
    ex:"Según el Artículo 5, fracción II, inciso e) del Reglamento de Quejas y Denuncias del INE, a nivel distrital procede la denuncia por difusión de propaganda calumniosa siempre que el medio comisivo sea distinto a radio y televisión." },

  // Q14 — Art. 7, fracc. XVII Reglamento de Quejas y Denuncias del INE
  { sa:"1.2", sal:"Reglamento Quejas y Denuncias", area:"Normatividad Interna INE", t:"dir",
    sal2:"Art. 7, fracc. XVII Reglamento de Quejas y Denuncias del INE",
    q:"¿Cuál es el objetivo principal de las medidas cautelares según el Reglamento de Quejas y Denuncias del INE?",
    o:["Lograr el cese de los actos o hechos que pudieran constituir una infracción a la normatividad electoral para evitar daños irreparables hasta que se emita la resolución definitiva", "Sancionar definitivamente las infracciones a la normatividad electoral una vez comprobada la responsabilidad de los infractores", "Investigar y documentar las pruebas necesarias para sustentar las denuncias presentadas ante los órganos competentes"],
    c:0,
    ex:"Según el artículo 7, fracción XVII, las medidas cautelares tienen como finalidad lograr el cese de los actos o hechos que pudieran constituir una infracción a la normatividad electoral, con el objeto de evitar la producción de daños irreparables, la afectación de los principios que rigen los procesos electorales o la vulneración de los bienes jurídicos tutelados por las disposiciones contenidas en la normatividad electoral, hasta en tanto se emita la resolución definitiva." },

  // Q15 — Art. 7, fracc. XXIII Reglamento de Quejas y Denuncias del INE
  { sa:"1.2", sal:"Reglamento Quejas y Denuncias", area:"Normatividad Interna INE", t:"dir",
    sal2:"Art. 7, fracc. XXIII Reglamento de Quejas y Denuncias del INE",
    q:"¿Qué es una queja o denuncia según el Reglamento de Quejas y Denuncias del INE?",
    o:["Acto por medio del cual una persona física o moral hace del conocimiento del Instituto o de los Organismos Públicos Locales, hechos presuntamente violatorios de la normatividad electoral federal", "Procedimiento administrativo mediante el cual el INE investiga de oficio irregularidades en los procesos electorales federales y locales", "Mecanismo legal que permite a las autoridades electorales sancionar directamente a los partidos políticos por violaciones a la normatividad"],
    c:0,
    ex:"Según el artículo 7, fracción XXIII del Reglamento de Quejas y Denuncias del INE, la queja o denuncia se define como el acto por medio del cual una persona física o moral hace del conocimiento del Instituto o de los Organismos Públicos Locales, hechos presuntamente violatorios de la normatividad electoral federal." },

  // Q16 — Art. 109 CPEUM
  { sa:"1.1", sal:"CPEUM", area:"Normatividad Interna INE", t:"dir",
    sal2:"Art. 109 CPEUM",
    q:"¿Cuándo NO procede el juicio político contra los servidores públicos según el artículo 109 de la CPEUM?",
    o:["Por la mera expresión de ideas", "Cuando incurran en actos que perjudiquen intereses públicos fundamentales", "Cuando incurran en omisiones en el ejercicio de sus funciones"],
    c:0,
    ex:"El artículo 109 establece expresamente que 'No procede el juicio político por la mera expresión de ideas', lo cual constituye una excepción específica al procedimiento de juicio político." },

  // Q17 — Art. 109, fracc. II CPEUM
  { sa:"1.1", sal:"CPEUM", area:"Normatividad Interna INE", t:"dir",
    sal2:"Art. 109, fracc. II CPEUM",
    q:"¿Cuáles son las sanciones que establecen las leyes penales para los servidores públicos que incurran en enriquecimiento ilícito?",
    o:["El decomiso y la privación de la propiedad de los bienes, además de las otras penas que correspondan", "Únicamente la privación de la propiedad de los bienes adquiridos ilícitamente", "La inhabilitación para el servicio público y el pago de multas económicas"],
    c:0,
    ex:"El artículo 109, fracción II de la CPEUM establece expresamente que las leyes penales sancionarán con el decomiso y con la privación de la propiedad de dichos bienes, además de las otras penas que correspondan, para casos de enriquecimiento ilícito de servidores públicos." },

  // Q18 — Art. 9 Reglamento de Quejas y Denuncias del INE
  { sa:"1.2", sal:"Reglamento Quejas y Denuncias", area:"Normatividad Interna INE", t:"dir",
    sal2:"Art. 9 Reglamento de Quejas y Denuncias del INE",
    q:"Las notificaciones de los actos procesales comenzarán a surtir efectos _______ y se computarán a partir del día siguiente.",
    o:["el mismo día", "al día siguiente", "después de 24 horas"],
    c:0,
    ex:"Según el Artículo 9 del Reglamento de Quejas y Denuncias del INE, las notificaciones de los actos procesales que entrañan cumplimiento en un plazo en días comenzarán a surtir efectos el mismo día y se computarán a partir del día siguiente." },

  // Q19 — Art. 2 LGSMIME
  { sa:"2.1", sal:"LGSMIME", area:"Ley General SMIME", t:"rel",
    sal2:"Art. 2 LGSMIME",
    relTitle:"Relacione los medios de impugnación con su finalidad correspondiente.",
    colA:{ title:"Medio de impugnación", items:["1. Recurso de revisión", "2. Juicio de revisión constitucional electoral", "3. Juicio para dirimir conflictos laborales"] },
    colB:{ title:"Finalidad", items:["a) Garantizar la constitucionalidad de actos o resoluciones definitivos y firmes de las autoridades competentes de las entidades federativas", "b) Garantizar la legalidad de actos y resoluciones de la autoridad electoral federal", "c) Dirimir los conflictos o diferencias laborales entre el Instituto Nacional Electoral y sus servidores", "d) Garantizar la protección de los derechos político-electorales del ciudadano"] },
    q:"Seleccione la opción con las relaciones correctas:",
    o:["1a, 2b, 3d", "1b, 2a, 3c", "1c, 2d, 3a"],
    c:1,
    ex:"Según el artículo 2 de la LGSMIME: el recurso de revisión garantiza la legalidad de actos y resoluciones de la autoridad electoral federal; el juicio de revisión constitucional electoral garantiza la constitucionalidad de actos o resoluciones definitivos y firmes de las autoridades competentes de las entidades federativas; y el juicio para dirimir conflictos laborales tiene como finalidad resolver las diferencias laborales entre el INE y sus servidores." },

  // Q20 — Art. 7 LGSMIME
  { sa:"2.1", sal:"LGSMIME", area:"Ley General SMIME", t:"dir",
    sal2:"Art. 7 LGSMIME",
    q:"¿Cómo se computarán los plazos durante los procesos electorales cuando están señalados por días?",
    o:["Se considerarán de veinticuatro horas", "Se considerarán únicamente en días hábiles de lunes a viernes", "Se computarán únicamente en horario de oficina de 9:00 a 17:00 horas"],
    c:0,
    ex:"Conforme al artículo 7 de la LGSMIME, cuando los plazos están señalados por días durante los procesos electorales, éstos se considerarán de veinticuatro horas." },

  // Q21 — Art. 9 LGSMIME
  { sa:"2.1", sal:"LGSMIME", area:"Ley General SMIME", t:"rel",
    sal2:"Art. 9 LGSMIME",
    relTitle:"Relacione los requisitos formales con su descripción correspondiente según el artículo 9 de la Ley General del Sistema de Medios de Impugnación en Materia Electoral.",
    colA:{ title:"Requisito", items:["1. Identificación del responsable", "2. Fundamentación legal", "3. Acreditación de personalidad"] },
    colB:{ title:"Descripción", items:["a) Acompañar documentos necesarios para acreditar la personería del promovente", "b) Identificar el acto o resolución impugnado y al responsable del mismo", "c) Mencionar los preceptos presuntamente violados y razones por las que se solicite la no aplicación de leyes", "d) Señalar únicamente el domicilio particular del promovente"] },
    q:"Seleccione la opción con las relaciones correctas:",
    o:["1a, 2b, 3c", "1b, 2c, 3a", "1c, 2a, 3b"],
    c:1,
    ex:"Según el artículo 9: el inciso d) establece identificar el acto impugnado y al responsable del mismo; el inciso e) menciona señalar los preceptos presuntamente violados; y el inciso c) requiere acompañar documentos para acreditar la personería del promovente." },

  // Q22 — Art. 9 LGSMIME
  { sa:"2.1", sal:"LGSMIME", area:"Ley General SMIME", t:"dir",
    sal2:"Art. 9 LGSMIME",
    q:"Los medios de impugnación deberán presentarse por escrito ante la autoridad u órgano partidista señalado como _______ del acto o resolución impugnado.",
    o:["responsable", "competente", "ejecutor"],
    c:0,
    ex:"Según el artículo 9 de la LGSMIME, los medios de impugnación deberán presentarse por escrito ante la autoridad u órgano partidista señalado como responsable del acto o resolución impugnado." },

  // Q23 — Art. 10 LGSMIME
  { sa:"2.1", sal:"LGSMIME", area:"Ley General SMIME", t:"dir",
    sal2:"Art. 10 LGSMIME",
    q:"¿En cuál de los siguientes casos serán improcedentes los medios de impugnación previstos en la Ley General del Sistema de Medios de Impugnación en Materia Electoral?",
    o:["Cuando se pretenda impugnar actos que se hayan consumado de un modo irreparable", "Cuando se impugnen resoluciones que afecten directamente el interés jurídico del actor", "Cuando se agoten todas las instancias previas establecidas por las leyes federales o locales"],
    c:0,
    ex:"Según el artículo 10, inciso b), los medios de impugnación serán improcedentes cuando se pretenda impugnar actos o resoluciones que se hayan consumado de un modo irreparable, entre otros supuestos." },

  // Q25 — Art. 10 LGSMIME
  { sa:"2.1", sal:"LGSMIME", area:"Ley General SMIME", t:"seq",
    sal2:"Art. 10 LGSMIME",
    listadoTitle:"Ordena la secuencia correcta:",
    listado:["Cuando se pretenda impugnar resoluciones dictadas por las Salas del Tribunal en los medios de impugnación que son de su exclusiva competencia", "Cuando se pretenda impugnar la no conformidad a la Constitución de leyes federales o locales", "Cuando no se hayan agotado las instancias previas establecidas por las leyes", "Cuando se pretenda impugnar actos o resoluciones que no afecten el interés jurídico del actor", "Que el promovente carezca de legitimación en los términos de la presente ley", "Cuando en un mismo escrito se pretenda impugnar más de una elección", "Cuando en el medio de impugnación se solicite la no aplicación de una norma general cuya validez haya sido declarada por la Suprema Corte"],
    q:"¿Cuál es la secuencia correcta de las causales de improcedencia de los medios de impugnación según el artículo 10 de la Ley General del Sistema de Medios de Impugnación en Materia Electoral?",
    o:["4, 2, 6, 5, 3, 1, 7", "1, 7, 6, 3, 5, 4, 2", "2, 4, 5, 3, 6, 7, 1"],
    c:2,
    ex:"Según el artículo 10 de la ley, las causales de improcedencia siguen el orden alfabético establecido: a) impugnación de no conformidad constitucional de leyes, b) impugnación de actos que no afecten el interés jurídico del actor, c) falta de legitimación del promovente, d) no agotamiento de instancias previas, e) impugnación de más de una elección en el mismo escrito, f) solicitud de no aplicación de norma declarada válida por la SCJN, y g) impugnación de resoluciones de las Salas del Tribunal." },

  // Q26 — Art. 11 LGSMIME
  { sa:"2.1", sal:"LGSMIME", area:"Ley General SMIME", t:"dir",
    sal2:"Art. 11 LGSMIME",
    q:"¿En cuál de los siguientes supuestos NO procede el sobreseimiento según la Ley General del Sistema de Medios de Impugnación en Materia Electoral?",
    o:["Cuando el promovente se desista expresamente por escrito", "Cuando el ciudadano agraviado presente documentos adicionales para fortalecer su impugnación", "Cuando el ciudadano agraviado fallezca o sea suspendido o privado de sus derechos político-electorales"],
    c:1,
    ex:"Según el artículo 11 de la Ley, el sobreseimiento procede únicamente en cuatro casos específicos: desistimiento expreso del promovente, modificación o revocación del acto por la autoridad responsable, aparición de causal de improcedencia, y fallecimiento o suspensión de derechos del ciudadano agraviado. La presentación de documentos adicionales no está contemplada como causal de sobreseimiento." },

  // Q27 — Art. 14 LGSMIME
  { sa:"2.1", sal:"LGSMIME", area:"Ley General SMIME", t:"rel",
    sal2:"Art. 14 LGSMIME",
    relTitle:"Relacione los tipos de prueba con su clasificación correspondiente según el artículo 14 de la Ley General del Sistema de Medios de Impugnación en Materia Electoral.",
    colA:{ title:"Tipo de prueba", items:["1. Documentales públicas", "2. Presuncionales", "3. Técnicas"] },
    colB:{ title:"Características", items:["a) Incluyen tanto las legales como las humanas", "b) Son emitidas por autoridades o funcionarios públicos", "c) Comprenden medios tecnológicos y científicos de verificación", "d) Requieren ratificación ante notario público"] },
    q:"Seleccione la opción con las relaciones correctas:",
    o:["1a, 2b, 3c", "1b, 2a, 3c", "1c, 2b, 3a"],
    c:1,
    ex:"Según el artículo 14, las documentales públicas corresponden a documentos emitidos por autoridades (1b), las presuncionales incluyen tanto legales como humanas (2a), y las técnicas comprenden medios tecnológicos de verificación (3c). La opción d es un distractor que no se menciona en la ley." },

  // Q28 — Art. 14 LGSMIME
  { sa:"2.1", sal:"LGSMIME", area:"Ley General SMIME", t:"dir",
    sal2:"Art. 14 LGSMIME",
    q:"¿Cuáles son los tipos de pruebas que pueden ser ofrecidas y admitidas para la resolución de medios de impugnación según el artículo 14 de la Ley General del Sistema de Medios de Impugnación en Materia Electoral?",
    o:["Documentales públicas, testimoniales, periciales, presuncionales legales y técnicas", "Documentales privadas, confesionales, técnicas, presuncionales humanas y testimoniales", "Documentales públicas, documentales privadas, técnicas, presuncionales legales y humanas, e instrumental de actuaciones"],
    c:2,
    ex:"El artículo 14 establece expresamente que para la resolución de los medios de impugnación sólo podrán ser ofrecidas y admitidas las pruebas siguientes: a) Documentales públicas; b) Documentales privadas; c) Técnicas; d) Presuncionales legales y humanas; y e) Instrumental de actuaciones." },

  // Q29 — Art. 17 LGSMIME
  { sa:"2.1", sal:"LGSMIME", area:"Ley General SMIME", t:"dir",
    sal2:"Art. 17 LGSMIME",
    q:"¿Qué debe precisar la autoridad u órgano partidista al dar aviso de la presentación de un medio de impugnación?",
    o:["Actor, acto o resolución impugnado, fecha y hora exactas de su recepción", "Nombre del demandado, tipo de recurso, fecha de presentación y motivos de inconformidad", "Identificación del promovente, autoridad responsable, fundamentos legales y pretensiones"],
    c:0,
    ex:"Según el artículo 17 de la LGSMIME, la autoridad u órgano partidista debe dar aviso por la vía más expedita precisando: actor, acto o resolución impugnado, fecha y hora exactas de su recepción." },

  // Q30 — Art. 17 LGSMIME
  { sa:"2.1", sal:"LGSMIME", area:"Ley General SMIME", t:"dir",
    sal2:"Art. 17 LGSMIME",
    q:"La autoridad u órgano partidista que reciba un medio de impugnación deberá hacerlo del conocimiento público mediante cédula que durante un plazo de _______ se fije en los estrados respectivos.",
    o:["cuarenta y ocho horas", "noventa y seis horas", "setenta y dos horas"],
    c:2,
    ex:"Según el artículo 17 de la LGSMIME, la cédula debe fijarse durante un plazo de setenta y dos horas en los estrados respectivos o por cualquier otro procedimiento que garantice fehacientemente la publicidad del escrito." },

  // Q31 — Art. 19 LGSMIME
  { sa:"2.1", sal:"LGSMIME", area:"Ley General SMIME", t:"dir",
    sal2:"Art. 19 LGSMIME",
    q:"¿A quién corresponde turnar de inmediato el expediente recibido según el artículo 19 de la Ley General del Sistema de Medios de Impugnación en Materia Electoral?",
    o:["Al presidente de la Sala", "Al magistrado electoral designado", "Al secretario de la Sala competente"],
    c:1,
    ex:"Según el artículo 19, inciso a), el presidente de la Sala turnará de inmediato el expediente recibido a un magistrado electoral, por lo que es el magistrado electoral quien recibe el turno del expediente, no quien lo turna." },

  // Q32 — Art. 22 LGSMIME
  { sa:"2.1", sal:"LGSMIME", area:"Ley General SMIME", t:"dir",
    sal2:"Art. 22 LGSMIME",
    q:"¿Cuál de los siguientes elementos NO está expresamente requerido en las resoluciones o sentencias del Instituto Federal Electoral o del Tribunal Electoral del Poder Judicial de la Federación?",
    o:["El resumen de los hechos o puntos de derecho controvertidos", "Los fundamentos jurídicos", "La firma autógrafa de todos los magistrados que participaron en la deliberación"],
    c:2,
    ex:"Según el Artículo 22, las resoluciones deben contener únicamente los elementos enlistados en los incisos a) al f): fecha, lugar y órgano, resumen de hechos controvertidos, análisis de agravios y pruebas, fundamentos jurídicos, puntos resolutivos y plazo para cumplimiento. La firma autógrafa de magistrados no se menciona como requisito." },

  // Q33 — Art. 22 LGSMIME
  { sa:"2.1", sal:"LGSMIME", area:"Ley General SMIME", t:"dir",
    sal2:"Art. 22 LGSMIME",
    q:"Las resoluciones o sentencias que pronuncien el Instituto Federal Electoral o el Tribunal Electoral del Poder Judicial de la Federación deberán hacerse constar por escrito y contendrán, entre otros elementos, _______ así como el examen y valoración de las pruebas que resulten pertinentes.",
    o:["el resumen de los hechos controvertidos", "el análisis de los agravios", "los puntos resolutivos"],
    c:1,
    ex:"Según el artículo 22 de la LGSMIME, las resoluciones deben contener 'en su caso, el análisis de los agravios así como el examen y valoración de las pruebas que resulten pertinentes'." },

  // Q34 — Art. 22 LGSMIME
  { sa:"2.1", sal:"LGSMIME", area:"Ley General SMIME", t:"seq",
    sal2:"Art. 22 LGSMIME",
    listadoTitle:"Ordena la secuencia correcta:",
    listado:["Los puntos resolutivos", "La fecha, el lugar y el órgano o Sala que la dicta", "En su caso, el plazo para su cumplimiento", "El resumen de los hechos o puntos de derecho controvertidos", "Los fundamentos jurídicos", "En su caso, el análisis de los agravios así como el examen y valoración de las pruebas que resulten pertinentes"],
    q:"¿Cuál es la secuencia correcta que deben contener las resoluciones o sentencias según el artículo 22 de la Ley General del Sistema de Medios de Impugnación en Materia Electoral?",
    o:["2, 4, 6, 5, 1, 3", "4, 2, 5, 6, 3, 1", "2, 5, 4, 1, 6, 3"],
    c:0,
    ex:"Según el artículo 22, las resoluciones o sentencias deben contener en orden: a) La fecha, lugar y órgano; b) El resumen de hechos controvertidos; c) El análisis de agravios y valoración de pruebas; d) Los fundamentos jurídicos; e) Los puntos resolutivos; y f) El plazo para cumplimiento." },

  // Q35 — Art. 27, num. 1 LGSMIME
  { sa:"2.1", sal:"LGSMIME", area:"Ley General SMIME", t:"dir",
    sal2:"Art. 27, num. 1 LGSMIME",
    q:"¿Cuál es el plazo máximo para realizar las notificaciones personales según el artículo 27 de la Ley General del Sistema de Medios de Impugnación en Materia Electoral?",
    o:["A más tardar dentro de los tres días siguientes al en que se emitió el acto", "Dentro de las 24 horas posteriores a que se dictó la resolución o sentencia", "Al día siguiente al en que se emitió el acto o se dictó la resolución o sentencia"],
    c:2,
    ex:"Según el artículo 27, numeral 1, las notificaciones personales se harán al interesado a más tardar al día siguiente al en que se emitió el acto o se dictó la resolución o sentencia." },

  // Q36 — Art. 26 Reglamento de Quejas y Denuncias del INE
  { sa:"1.2", sal:"Reglamento Quejas y Denuncias", area:"Normatividad Interna INE", t:"dir",
    sal2:"Art. 26 Reglamento de Quejas y Denuncias del INE",
    q:"¿Cuáles son los elementos que NO constituyen objeto de prueba según el Reglamento de Quejas y Denuncias?",
    o:["El derecho, los hechos notorios o imposibles, y aquellos que hayan sido reconocidos", "Los hechos controvertidos y el material probatorio disponible", "Las alegaciones del denunciado y las invocaciones del quejoso"],
    c:0,
    ex:"De acuerdo con el artículo 26 del Reglamento, son objeto de prueba los hechos controvertidos, pero específicamente establece que 'No lo será el derecho, los hechos notorios o imposibles, ni aquellos que hayan sido reconocidos'." },

  // Q37 — Art. 26 Reglamento de Quejas y Denuncias del INE
  { sa:"1.2", sal:"Reglamento Quejas y Denuncias", area:"Normatividad Interna INE", t:"dir",
    sal2:"Art. 26 Reglamento de Quejas y Denuncias del INE",
    q:"Son objeto de prueba los hechos controvertidos, pero no lo será el derecho, los hechos notorios o imposibles, ni aquellos que hayan sido _______.",
    o:["reconocidos", "alegados", "controvertidos"],
    c:0,
    ex:"De acuerdo con el Artículo 26 del Reglamento de Quejas y Denuncias, son objeto de prueba los hechos controvertidos, pero no lo será el derecho, los hechos notorios o imposibles, ni aquellos que hayan sido reconocidos." },

  // Q38 — Art. 27, num. 4 LGSMIME
  { sa:"2.1", sal:"LGSMIME", area:"Ley General SMIME", t:"dir",
    sal2:"Art. 27, num. 4 LGSMIME",
    q:"¿Qué procedimiento debe seguir el funcionario responsable cuando el domicilio está cerrado o la persona se niega a recibir la cédula de notificación?",
    o:["Fijará la cédula junto con la copia del documento en un lugar visible del local, asentará la razón en autos y procederá a fijar la notificación en los estrados", "Regresará en otro momento hasta encontrar a la persona o hasta que el domicilio esté abierto para realizar la notificación personal", "Dejará únicamente la cédula en el buzón o debajo de la puerta y dará por concluida la diligencia"],
    c:0,
    ex:"Según el artículo 27, numeral 4, cuando el domicilio está cerrado o la persona se niega a recibir la cédula, el funcionario debe fijarla junto con la copia del auto, resolución o sentencia en un lugar visible del local, asentar la razón correspondiente en autos y proceder a fijar la notificación en los estrados." },

  // Q39 — Art. 76, inc. b) LGSMIME
  { sa:"2.1", sal:"LGSMIME", area:"Ley General SMIME", t:"dir",
    sal2:"Art. 76, inc. b) LGSMIME",
    q:"¿Cuál es el porcentaje mínimo de casillas no instaladas en un distrito que constituye causal de nulidad de una elección de diputado de mayoría relativa?",
    o:["Diez por ciento", "Veinte por ciento", "Treinta por ciento"],
    c:1,
    ex:"Según el artículo 76, inciso b) del Reglamento, es causal de nulidad cuando no se instale el veinte por ciento o más de las casillas en el distrito de que se trate y consecuentemente la votación no hubiere sido recibida." },

  // Q40 — Art. 77, inc. b) LGSMIME
  { sa:"2.1", sal:"LGSMIME", area:"Ley General SMIME", t:"dir",
    sal2:"Art. 77, inc. b) LGSMIME",
    q:"¿Cuál es el porcentaje mínimo de casillas que no se deben instalar en una entidad federativa para que constituya causal de nulidad en una elección de senadores?",
    o:["Diez por ciento", "Veinte por ciento", "Treinta por ciento"],
    c:1,
    ex:"Según el artículo 77, inciso b), es causal de nulidad cuando no se instale el veinte por ciento o más de las casillas en la entidad de que se trate y consecuentemente la votación no hubiere sido recibida." },

];