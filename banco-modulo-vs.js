/* ============================================================
   BANCO DE PREGUNTAS — Simulacro INE Vocalía Secretarial v3
   ============================================================
   - 40 preguntas organizadas por subárea (sa)
   - Estructura de cada pregunta:
       sa   : código de subárea (ej. "1.1", "4.2")
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
     1.1  MEDIOS DE IMPUGNACIÓN EN MATERIA ELECTORAL  (7)
  ══════════════════════════════════ */
  { sa:"1.1", sal:"Medios de impugnación en materia electoral", area:"Jurídico-electoral",
    p:null, pt:null,
    q:"¿Cuál es el ordenamiento que regula de manera específica los medios de impugnación en materia electoral federal?",
    o:["La Ley General de Instituciones y Procedimientos Electorales (LGIPE), exclusivamente",
       "La Ley General del Sistema de Medios de Impugnación en Materia Electoral (LGSMIME)",
       "El Código Federal de Procedimientos Civiles, aplicado de manera supletoria"],
    c:1,
    ex:"La Ley General del Sistema de Medios de Impugnación en Materia Electoral (LGSMIME) es el ordenamiento especializado que regula los juicios y recursos electorales, incluyendo recurso de revisión, apelación, juicio de inconformidad, reconsideración, juicio para la protección de los derechos político-electorales del ciudadano (JDC) y juicio de revisión constitucional. La LGIPE y el CFPC son aplicables sólo en lo no previsto por dicha ley." },

  { sa:"1.1", sal:"Medios de impugnación en materia electoral", area:"Jurídico-electoral",
    p:"El recurso de revisión es el medio de impugnación que se interpone contra actos o resoluciones de órganos del INE que no pongan fin a un procedimiento. Es competencia resolverlo el superior jerárquico de la autoridad que emitió el acto.",
    pt:"Recurso de revisión — fundamento",
    q:"¿Quién resuelve el recurso de revisión interpuesto contra un acto de una Junta Distrital Ejecutiva?",
    o:["El Tribunal Electoral del Poder Judicial de la Federación, Sala Superior",
       "La Junta Local Ejecutiva correspondiente, como superior jerárquico inmediato",
       "El Consejo General del INE de manera directa"],
    c:1,
    ex:"El recurso de revisión se resuelve por el superior jerárquico del órgano que emitió el acto. Tratándose de actos de una Junta Distrital Ejecutiva, corresponde resolver a la Junta Local Ejecutiva respectiva. La Vocalía Secretarial participa en la sustanciación del expediente, la elaboración del proyecto de resolución y la notificación." },

  { sa:"1.1", sal:"Medios de impugnación en materia electoral", area:"Jurídico-electoral",
    p:null, pt:null,
    q:"¿Cuál es el plazo general para interponer los medios de impugnación en materia electoral federal?",
    o:["Tres días hábiles contados a partir del día siguiente a la notificación del acto o resolución impugnada",
       "Cuatro días contados a partir del día siguiente a aquél en que se tenga conocimiento o se hubiera notificado el acto o resolución impugnada",
       "Quince días naturales contados desde la publicación del acto en el Diario Oficial de la Federación"],
    c:1,
    ex:"El artículo 8 de la LGSMIME establece que los medios de impugnación deberán presentarse dentro de los cuatro días contados a partir del día siguiente a aquél en que se tenga conocimiento del acto o resolución impugnada, o se hubiese notificado de conformidad con la ley aplicable. Durante los procesos electorales todos los días y horas son hábiles." },

  { sa:"1.1", sal:"Medios de impugnación en materia electoral", area:"Jurídico-electoral",
    p:null, pt:null,
    q:"En su carácter de fedatario del órgano desconcentrado, ¿qué función realiza el Vocal Secretario cuando se recibe en la Junta un medio de impugnación dirigido a autoridad jurisdiccional?",
    o:["Resolver el medio de impugnación en un plazo máximo de 24 horas",
       "Dar trámite conforme a la LGSMIME: hacer del conocimiento público mediante cédula durante 72 horas, recibir los terceros interesados, rendir el informe circunstanciado y remitir el expediente a la autoridad competente",
       "Rechazar el escrito si considera que carece de elementos suficientes"],
    c:1,
    ex:"Cuando se recibe un medio de impugnación, la autoridad responsable (no la que resuelve) debe: (1) publicar la cédula de difusión por 72 horas para que comparezcan terceros interesados, (2) recibir escritos de terceros, (3) elaborar el informe circunstanciado con las razones y fundamentos del acto impugnado, y (4) remitir el expediente completo a la autoridad jurisdiccional o administrativa que debe resolverlo. El Vocal Secretario coordina este trámite dentro de la Junta." },

  { sa:"1.1", sal:"Medios de impugnación en materia electoral", area:"Jurídico-electoral",
    p:null, pt:null,
    q:"¿Qué diferencia sustancial existe entre el Juicio para la Protección de los Derechos Político-Electorales del Ciudadano (JDC) y el recurso de apelación?",
    o:["No existe diferencia; ambos se resuelven por el mismo órgano y tienen el mismo objeto",
       "El JDC lo interponen ciudadanos que consideran violados sus derechos político-electorales (votar, ser votado, asociación, afiliación); la apelación la interponen partidos políticos y ciudadanos contra actos del INE en contextos distintos",
       "El JDC sólo procede en elecciones locales y la apelación sólo en elecciones federales"],
    c:1,
    ex:"El JDC (arts. 79-85 LGSMIME) es el medio para que el ciudadano impugne directamente actos que violen sus derechos político-electorales. El recurso de apelación (arts. 40-47 LGSMIME) procede contra resoluciones que recaigan a los recursos de revisión, actos o resoluciones del Consejo General del INE, del Secretario Ejecutivo y de otros órganos distintos. Ambos los resuelve el TEPJF pero con legitimación y supuestos distintos." },

  { sa:"1.1", sal:"Medios de impugnación en materia electoral", area:"Jurídico-electoral",
    p:null, pt:null,
    q:"¿En qué consiste el informe circunstanciado que rinde la autoridad responsable ante un medio de impugnación?",
    o:["Es una contestación facultativa que puede omitirse si la autoridad considera que el recurso es improcedente",
       "Es un documento obligatorio en el que la autoridad responsable expone las razones y fundamentos del acto impugnado, describe los hechos, precisa los preceptos aplicados y anexa constancias; se rinde al remitir el expediente al órgano resolutor",
       "Es un dictamen pericial que sólo rinde un experto externo designado por el Consejo General"],
    c:1,
    ex:"El informe circunstanciado es obligatorio y es el documento mediante el cual la autoridad responsable justifica su actuación ante la autoridad resolutora. Debe contener los hechos, los fundamentos legales del acto impugnado, las manifestaciones sobre las pretensiones del actor y los demás elementos útiles para resolver. La Vocalía Secretarial suele coordinar su elaboración en los órganos desconcentrados." },

  { sa:"1.1", sal:"Medios de impugnación en materia electoral", area:"Jurídico-electoral",
    p:null, pt:null,
    q:"¿Cuál es la consecuencia de que un medio de impugnación se presente fuera del plazo de cuatro días establecido en la LGSMIME?",
    o:["Se admite pero con apercibimiento de multa al promovente",
       "La autoridad lo desecha de plano por extemporáneo, salvo supuestos de excepción expresamente previstos en la ley (por ejemplo, ciertas causales del JDC)",
       "Se convierte automáticamente en queja administrativa ante el OIC"],
    c:1,
    ex:"La presentación oportuna es un requisito de procedencia. El medio presentado fuera de plazo se desecha de plano por extemporáneo. La LGSMIME prevé excepciones acotadas, sobre todo tratándose del JDC cuando se afectan derechos fundamentales del ciudadano y no hubo posibilidad material de impugnar en tiempo. El cómputo corre a partir del día siguiente a la notificación o conocimiento del acto." },

  /* ══════════════════════════════════
     1.2  OFICIALÍA ELECTORAL  (2)
  ══════════════════════════════════ */
  { sa:"1.2", sal:"Oficialía Electoral", area:"Jurídico-electoral",
    p:null, pt:null,
    q:"¿Qué es la Oficialía Electoral y quién la ejerce en el INE?",
    o:["Es una unidad administrativa dedicada a la atención al público en las Juntas, ejercida por el Vocal Ejecutivo",
       "Es la función de fe pública electoral, que ejerce el Secretario Ejecutivo del INE a nivel central y, en los órganos desconcentrados, los Vocales Secretarios de Junta Local y Distrital",
       "Es una notaría pública externa contratada por el INE para certificar hechos durante los procesos electorales"],
    c:1,
    ex:"La Oficialía Electoral es la facultad de dar fe pública respecto de actos de naturaleza electoral, conferida por la LGIPE al Secretario Ejecutivo del INE y, por delegación, a los Vocales Secretarios de las Juntas Local y Distrital. A través de ella se levantan actas circunstanciadas de hechos que pueden tener trascendencia para los procesos electorales o para procedimientos administrativos sancionadores." },

  { sa:"1.2", sal:"Oficialía Electoral", area:"Jurídico-electoral",
    p:"Un representante partidista acude a la Junta Distrital solicitando que un Vocal Secretario acuda a dar fe de que, en un mitin de un candidato, se están repartiendo despensas a cambio del voto.",
    pt:"Caso práctico — Oficialía Electoral",
    q:"¿Cómo debe proceder el Vocal Secretario ante esta petición de fe pública electoral?",
    o:["Debe negarse en todos los casos porque la Oficialía Electoral no puede intervenir fuera de las oficinas del INE",
       "Debe analizar la petición, y si está relacionada con hechos de trascendencia para los procesos electorales o procedimientos sancionadores, acudir al lugar, levantar acta circunstanciada describiendo los hechos que advierta directamente y remitir el acta al órgano competente para los efectos legales procedentes",
       "Debe resolver en el lugar si los hechos constituyen delito electoral y ordenar la detención de los involucrados"],
    c:1,
    ex:"El Vocal Secretario ejerce la fe pública electoral mediante actas circunstanciadas. Ante la petición, debe analizar si el hecho es de trascendencia electoral; si procede, acude al lugar, describe únicamente lo que percibe directamente por sus sentidos (sin hacer juicios de valor ni calificar jurídicamente la conducta) y remite el acta. Quien valora y sanciona los hechos es el órgano competente (Consejo, UTCE o autoridad jurisdiccional), no la Oficialía." },

  /* ══════════════════════════════════
     1.3  TRANSPARENCIA  (5)
  ══════════════════════════════════ */
  { sa:"1.3", sal:"Transparencia", area:"Jurídico-electoral",
    p:null, pt:null,
    q:"¿Cuál es el ordenamiento general que regula el derecho de acceso a la información pública aplicable al INE y a sus órganos desconcentrados?",
    o:["Exclusivamente la Ley Federal de Transparencia y Acceso a la Información Pública (LFTAIP)",
       "La Ley General de Transparencia y Acceso a la Información Pública (LGTAIP), complementada por la LFTAIP y por los reglamentos y lineamientos del propio INE en materia de transparencia",
       "El Estatuto del Servicio Profesional Electoral Nacional"],
    c:1,
    ex:"La LGTAIP es la ley marco aplicable a todos los sujetos obligados del país en materia de transparencia y acceso a la información. La LFTAIP desarrolla disposiciones para el ámbito federal. El INE, como organismo constitucional autónomo, además emite sus propios lineamientos y reglamentos que operativizan la obligación en sus órganos centrales y desconcentrados, siempre bajo el marco de ambas leyes." },

  { sa:"1.3", sal:"Transparencia", area:"Jurídico-electoral",
    p:null, pt:null,
    q:"¿Cuál es el plazo máximo ordinario que tiene un sujeto obligado para responder una solicitud de acceso a la información pública conforme a la LGTAIP?",
    o:["Tres días hábiles contados a partir de la recepción",
       "Veinte días hábiles contados a partir del día siguiente a la recepción de la solicitud, prorrogables por diez días hábiles más cuando existan razones fundadas y motivadas",
       "Sesenta días naturales sin posibilidad de prórroga"],
    c:1,
    ex:"La LGTAIP establece que la respuesta debe notificarse en un plazo que no exceda de 20 días hábiles desde el día siguiente a la presentación de la solicitud, con posibilidad de prorrogar hasta por 10 días hábiles adicionales cuando existan razones fundadas y motivadas. En las Juntas del INE, la Vocalía Secretarial suele ser el enlace operativo con la Unidad Técnica de Transparencia del Instituto." },

  { sa:"1.3", sal:"Transparencia", area:"Jurídico-electoral",
    p:null, pt:null,
    q:"¿En qué consiste la clasificación de la información como reservada dentro del marco de la LGTAIP?",
    o:["Es una decisión discrecional del titular de la Unidad para evitar atender solicitudes incómodas",
       "Es la restricción temporal del acceso a información que encuadra en los supuestos expresamente señalados en la ley, previa aplicación de la prueba de daño por parte del Comité de Transparencia, con una vigencia máxima que por regla general no excede de cinco años",
       "Es un mecanismo para destruir documentos antes de que sean consultados"],
    c:1,
    ex:"La información reservada es aquella que, mediante prueba de daño, el Comité de Transparencia determina que su difusión causaría un perjuicio mayor al beneficio del derecho de acceso. La reserva es temporal (como regla general hasta 5 años, con posibilidad de ampliarse excepcionalmente) y debe sustentarse en las causales taxativas de la LGTAIP. No es una decisión discrecional individual, sino colegiada y fundada." },

  { sa:"1.3", sal:"Transparencia", area:"Jurídico-electoral",
    p:null, pt:null,
    q:"¿Qué diferencia existe entre información reservada e información confidencial?",
    o:["Son sinónimos; la ley las trata de manera idéntica",
       "La reservada es información pública cuyo acceso se restringe temporalmente por causales previstas en la ley, previa prueba de daño; la confidencial se refiere a datos personales y a información entregada por particulares con carácter de confidencial, cuyo acceso no se limita por el tiempo sino por la naturaleza de los datos",
       "La reservada sólo aplica a autoridades y la confidencial sólo a particulares"],
    c:1,
    ex:"La información reservada es, en principio, pública, pero su acceso se restringe temporalmente por causales taxativas y previa prueba de daño. La información confidencial son los datos personales y aquella entregada por particulares con carácter de confidencial; no está sujeta a plazo y requiere consentimiento del titular o disociación de datos. Son dos categorías jurídicamente distintas de la clasificación." },

  { sa:"1.3", sal:"Transparencia", area:"Jurídico-electoral",
    p:null, pt:null,
    q:"¿Qué órgano resuelve los recursos de revisión interpuestos por particulares contra respuestas del INE a sus solicitudes de información?",
    o:["El Comité de Transparencia del propio INE, como última instancia",
       "El Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI)",
       "La Sala Superior del Tribunal Electoral del Poder Judicial de la Federación"],
    c:1,
    ex:"Cuando una persona no queda conforme con la respuesta del INE a su solicitud (por reserva, por incompetencia, por inexistencia, por entrega incompleta, etc.), puede interponer recurso de revisión ante el INAI, órgano garante a nivel nacional. El Comité de Transparencia resuelve la clasificación internamente, pero el recurso externo es competencia del INAI." },

  /* ══════════════════════════════════
     1.4  QUEJAS Y DENUNCIAS  (4)
  ══════════════════════════════════ */
  { sa:"1.4", sal:"Quejas y denuncias", area:"Jurídico-electoral",
    p:null, pt:null,
    q:"¿Cuál es la diferencia entre el procedimiento sancionador ordinario (PSO) y el procedimiento especial sancionador (PES)?",
    o:["No existe diferencia; ambos tienen los mismos plazos y autoridades que los resuelven",
       "El PSO se instruye fuera del proceso electoral y sobre infracciones que no requieren urgencia; el PES se sustancia durante el proceso electoral o por conductas relacionadas con propaganda, actos anticipados, calumnia y otras que requieren resolución ágil, con plazos más breves",
       "El PSO lo resuelve el OIC y el PES lo resuelve la Fiscalía Electoral"],
    c:1,
    ex:"El PSO y el PES son dos cauces sancionadores regulados en la LGIPE. El PSO tiene plazos más amplios y se aplica a conductas que no requieren resolución urgente. El PES se creó para atender conductas que por su naturaleza requieren respuesta rápida (propaganda, actos anticipados, infracciones durante proceso electoral, calumnia). El PES se sustancia ante el INE y resuelve la Sala Regional Especializada del TEPJF." },

  { sa:"1.4", sal:"Quejas y denuncias", area:"Jurídico-electoral",
    p:null, pt:null,
    q:"¿Quién es la autoridad competente para instruir el Procedimiento Especial Sancionador (PES) en el INE?",
    o:["El Consejo General del INE, que además lo resuelve",
       "La Unidad Técnica de lo Contencioso Electoral (UTCE) del INE instruye el procedimiento, y la Sala Regional Especializada del TEPJF dicta la resolución definitiva",
       "Exclusivamente las Juntas Distritales, que lo instruyen y resuelven localmente"],
    c:1,
    ex:"La LGIPE establece un esquema bifurcado: la UTCE del INE (con apoyo de los órganos desconcentrados) instruye el PES, integra el expediente, recibe pruebas y elabora el proyecto; la resolución definitiva la dicta la Sala Regional Especializada del TEPJF. En los órganos desconcentrados, el Vocal Secretario participa recibiendo denuncias, notificando y auxiliando en diligencias." },

  { sa:"1.4", sal:"Quejas y denuncias", area:"Jurídico-electoral",
    p:"Una ciudadana presenta ante la Junta Distrital una queja escrita en la que denuncia que un partido político colocó propaganda en inmuebles de uso público destinados a la educación, durante el proceso electoral federal.",
    pt:"Caso — recepción de denuncia",
    q:"¿Cómo debe proceder el Vocal Secretario como primera actuación?",
    o:["Desechar la queja porque los vocales no tienen facultades en materia de procedimientos sancionadores",
       "Recibir el escrito, levantar constancia de recepción con sello y fecha, verificar requisitos formales, remitir copia certificada a la UTCE del INE en el plazo establecido por la normativa, y dar seguimiento a las diligencias que esa Unidad ordene realizar en el distrito",
       "Convocar al partido denunciado y resolver en sesión del Consejo Distrital si la conducta es infracción"],
    c:1,
    ex:"El Vocal Secretario, en su carácter de secretario del Consejo Distrital, recibe las quejas y denuncias. Debe: (1) registrar formalmente la recepción, (2) verificar requisitos mínimos (identificación del promovente, hechos, pruebas), (3) remitir el expediente a la UTCE del INE en los plazos del Reglamento de Quejas y Denuncias, y (4) desahogar localmente las diligencias que la autoridad instructora ordene. No resuelve sobre el fondo." },

  { sa:"1.4", sal:"Quejas y denuncias", area:"Jurídico-electoral",
    p:null, pt:null,
    q:"¿Las medidas cautelares dentro de un procedimiento sancionador pueden ordenarse por los órganos desconcentrados del INE?",
    o:["Sí, cualquier Vocal Ejecutivo puede decretarlas unilateralmente",
       "No; las medidas cautelares las dicta, por regla general, la Comisión de Quejas y Denuncias del INE, a propuesta de la UTCE, para preservar la materia del procedimiento (por ejemplo, ordenar el retiro inmediato de propaganda infractora)",
       "Las medidas cautelares sólo pueden dictarse una vez concluido el procedimiento con resolución firme"],
    c:1,
    ex:"La competencia para decretar medidas cautelares corresponde a la Comisión de Quejas y Denuncias del INE, a propuesta de la UTCE. Estas medidas buscan preservar la materia del procedimiento y evitar daños irreparables (retiro de propaganda, suspensión de actos). Los órganos desconcentrados colaboran en la ejecución pero no en la decisión. La medida no prejuzga el fondo y es provisional." },

  /* ══════════════════════════════════
     1.5  VIOLENCIA POLÍTICA EN RAZÓN DE GÉNERO  (2)
  ══════════════════════════════════ */
  { sa:"1.5", sal:"Violencia política contra las mujeres en razón de género", area:"Jurídico-electoral",
    p:null, pt:null,
    q:"Conforme a la LGIPE y la Ley General de Acceso de las Mujeres a una Vida Libre de Violencia, ¿qué se entiende por violencia política contra las mujeres en razón de género (VPMRG)?",
    o:["Cualquier desacuerdo político entre un hombre y una mujer durante el proceso electoral",
       "Toda acción u omisión, incluida la tolerancia, basada en elementos de género y ejercida dentro de la esfera pública o privada, que tenga por objeto o resultado limitar, anular o menoscabar el ejercicio efectivo de los derechos políticos y electorales de una o varias mujeres",
       "Una infracción exclusivamente administrativa que sólo procede contra servidores públicos y nunca contra particulares"],
    c:1,
    ex:"La definición legal de VPMRG abarca acciones u omisiones basadas en elementos de género que limitan, anulan o menoscaban los derechos político-electorales de las mujeres. Puede ocurrir en el ámbito público o privado, antes, durante y después del proceso electoral, y puede cometerse por servidores públicos, partidos, candidatos, medios, particulares y otros agentes. Las reformas de 2020 fortalecieron el marco normativo para prevenirla, atenderla y sancionarla." },

  { sa:"1.5", sal:"Violencia política contra las mujeres en razón de género", area:"Jurídico-electoral",
    p:null, pt:null,
    q:"¿Qué vía procesal se utiliza en el INE para sancionar la violencia política contra las mujeres en razón de género cuando se comete durante un proceso electoral?",
    o:["Únicamente el juicio penal federal por delitos contra la vida",
       "El procedimiento especial sancionador (PES), con reglas específicas de protección a la víctima y con posibilidad de ordenar medidas cautelares y de protección",
       "Un juicio civil de daño moral en tribunales ordinarios"],
    c:1,
    ex:"El PES es la vía idónea en el ámbito electoral administrativo para sancionar la VPMRG cuando las conductas se relacionan con los procesos electorales o con el ejercicio de derechos político-electorales. Se aplican reglas específicas de perspectiva de género, protección a la víctima (reserva de identidad, evitar revictimización) y posibilidad de medidas cautelares y de protección que resuelve la Comisión de Quejas y Denuncias. Sin perjuicio de las vías penal o civil aplicables." },

  /* ══════════════════════════════════
     1.6  DELITOS ELECTORALES  (1)
  ══════════════════════════════════ */
  { sa:"1.6", sal:"Delitos electorales", area:"Jurídico-electoral",
    p:null, pt:null,
    q:"¿Qué autoridad es competente para investigar y perseguir los delitos electorales federales, y cuál es el ordenamiento que los tipifica?",
    o:["El INE, a través de la UTCE, conforme al Reglamento de Quejas y Denuncias",
       "La Fiscalía Especializada en Delitos Electorales (FEDE) de la Fiscalía General de la República, conforme a la Ley General en Materia de Delitos Electorales",
       "El Tribunal Electoral del Poder Judicial de la Federación, en primera y única instancia"],
    c:1,
    ex:"Los delitos electorales son materia penal: los tipifica la Ley General en Materia de Delitos Electorales y los investiga y persigue la Fiscalía Especializada en Delitos Electorales (FEDE), dependiente de la Fiscalía General de la República. El INE, incluidas sus Vocalías Secretariales, da vista a la FEDE cuando advierten hechos con posible carácter delictivo (compra de votos, coacción, uso indebido de recursos públicos, etc.), pero no investiga ni juzga delitos." },

  /* ══════════════════════════════════
     2.1  JUNTAS EJECUTIVAS  (3)
  ══════════════════════════════════ */
  { sa:"2.1", sal:"Juntas ejecutivas", area:"Órganos desconcentrados permanentes",
    p:null, pt:null,
    q:"¿Cómo se integran las Juntas Locales Ejecutivas del INE y cuál es el papel del Vocal Secretario dentro de ellas?",
    o:["Se integran por un Vocal Ejecutivo y tres Vocales; el Vocal Secretario sólo interviene en la recepción de correspondencia",
       "Se integran por Vocal Ejecutivo, Vocal Secretario, Vocal de Organización Electoral, Vocal del Registro Federal de Electores y Vocal de Capacitación Electoral y Educación Cívica; el Vocal Secretario es secretario de la Junta, da fe de los actos, lleva los libros y expedientes, y auxilia en todo lo jurídico-administrativo",
       "Se integran por siete Vocales elegidos por voto de la ciudadanía cada seis años"],
    c:1,
    ex:"Las Juntas Locales y Distritales Ejecutivas se integran por cinco integrantes permanentes: Vocal Ejecutivo (preside), Vocal Secretario, Vocal de Organización Electoral, Vocal del Registro Federal de Electores y Vocal de Capacitación Electoral y Educación Cívica. El Vocal Secretario es el secretario de la Junta: da fe de los acuerdos, lleva libros y expedientes, coordina la actuación jurídica y auxilia al Vocal Ejecutivo en lo administrativo." },

  { sa:"2.1", sal:"Juntas ejecutivas", area:"Órganos desconcentrados permanentes",
    p:null, pt:null,
    q:"Durante los procesos electorales, además de la Junta Ejecutiva, se instalan Consejos locales y distritales. ¿Qué función ejerce el Vocal Secretario respecto de estos Consejos?",
    o:["Ninguna; los Consejos son órganos totalmente independientes de las Juntas Ejecutivas",
       "Funge como Secretario del Consejo correspondiente: da fe de las sesiones, elabora el acta, lleva el libro de resoluciones y auxilia al Consejero Presidente (que es el propio Vocal Ejecutivo) en la conducción de los trabajos",
       "Funge como Consejero con derecho a voto deliberativo en todas las decisiones del Consejo"],
    c:1,
    ex:"Durante el proceso electoral, los Consejos Locales y Distritales se instalan con el Vocal Ejecutivo como Consejero Presidente, seis Consejeros Electorales y los representantes de partidos. El Vocal Secretario funge como Secretario del Consejo: da fe de los acuerdos, levanta el acta de sesiones, lleva el libro de resoluciones, asienta las votaciones y notifica. Participa con voz pero sin voto deliberativo." },

  { sa:"2.1", sal:"Juntas ejecutivas", area:"Órganos desconcentrados permanentes",
    p:null, pt:null,
    q:"¿Con qué periodicidad deben sesionar ordinariamente las Juntas Ejecutivas y de qué deja constancia el Vocal Secretario en cada sesión?",
    o:["Anualmente, mediante un informe entregado al Consejo General",
       "Por lo menos una vez al mes en sesión ordinaria, sin perjuicio de las extraordinarias que se convoquen; el Vocal Secretario levanta el acta respectiva con los acuerdos tomados y la firma junto con el Vocal Ejecutivo, conservándola en el libro de actas",
       "Cada seis años, al inicio y al final de cada proceso electoral federal"],
    c:1,
    ex:"Las Juntas Ejecutivas sesionan cuando menos una vez al mes de manera ordinaria y además celebran sesiones extraordinarias cuando es necesario. El Vocal Secretario, en su calidad de secretario de la Junta, levanta el acta de cada sesión, consigna los acuerdos, recaba firmas y conserva el libro de actas, que es parte de los libros oficiales del órgano desconcentrado." },

  /* ══════════════════════════════════
     3.1  RECURSOS FINANCIEROS Y MATERIALES  (4)
  ══════════════════════════════════ */
  { sa:"3.1", sal:"Recursos financieros y materiales", area:"Gestión administrativa electoral del INE",
    p:null, pt:null,
    q:"¿Cuál es el principal ordenamiento administrativo interno que regula el manejo de los recursos financieros, materiales y servicios generales en los órganos desconcentrados del INE?",
    o:["La LGIPE, exclusivamente",
       "El Manual de Normas Administrativas en Materia de Recursos Financieros, Materiales y Servicios Generales del INE, aprobado por la Junta General Ejecutiva, complementado por las Políticas y Lineamientos que de él derivan",
       "La Ley Federal de Presupuesto y Responsabilidad Hacendaria, únicamente"],
    c:1,
    ex:"El INE cuenta con un Manual de Normas Administrativas emitido por la Junta General Ejecutiva que regula de manera específica la operación de recursos financieros, materiales y servicios generales en todo el Instituto, incluyendo los órganos desconcentrados. Se complementa con políticas, lineamientos y la normativa federal aplicable (LFPRH, Ley de Adquisiciones, Ley de Disciplina Financiera, entre otras). El Vocal Secretario suele auxiliar al Vocal Ejecutivo en estos temas." },

  { sa:"3.1", sal:"Recursos financieros y materiales", area:"Gestión administrativa electoral del INE",
    p:null, pt:null,
    q:"¿Qué principios rigen el ejercicio del gasto en el INE, incluidos los órganos desconcentrados?",
    o:["Únicamente el principio de máxima discrecionalidad del Vocal Ejecutivo",
       "Legalidad, honradez, eficiencia, eficacia, economía, transparencia y rendición de cuentas, conforme al Art. 134 CPEUM y la normativa presupuestaria aplicable",
       "Reserva absoluta sobre el manejo del presupuesto, por tratarse de información clasificada"],
    c:1,
    ex:"El artículo 134 de la CPEUM establece los principios que rigen el manejo de los recursos públicos: legalidad, honradez, eficiencia, eficacia, economía, transparencia y rendición de cuentas. Estos principios se complementan con la Ley Federal de Presupuesto y Responsabilidad Hacendaria y con la normativa interna del INE. El gasto en los órganos desconcentrados debe sujetarse estrictamente a estos principios y al presupuesto autorizado." },

  { sa:"3.1", sal:"Recursos financieros y materiales", area:"Gestión administrativa electoral del INE",
    p:"La Junta Distrital requiere contratar un servicio de mantenimiento al inmueble donde opera, con cargo a su presupuesto autorizado. El monto se ubica dentro del rango que permite adjudicación directa conforme a la normativa.",
    pt:"Caso — procedimiento de contratación",
    q:"¿Qué procedimiento general debe seguirse aun cuando se trate de adjudicación directa?",
    o:["Basta con una orden verbal del Vocal Ejecutivo y el pago correspondiente",
       "Aun en adjudicación directa deben documentarse: la requisición justificada, la investigación de mercado con al menos tres cotizaciones (salvo casos excepcionales previstos en la normativa), el contrato o pedido, la entrega del bien o servicio, y la comprobación del gasto conforme a los lineamientos internos",
       "Se requiere licitación pública internacional en todos los casos, sin importar el monto"],
    c:1,
    ex:"La adjudicación directa, como cualquier otra modalidad, exige cumplir formalidades: requisición fundada, investigación de mercado para acreditar mejores condiciones (generalmente tres cotizaciones), documentación contractual, constancia de entrega y comprobación del gasto con documentos fiscales. La Vocalía Secretarial colabora en el soporte documental y en la revisión de aspectos jurídicos de los contratos. La motivación y el expediente protegen al órgano frente a observaciones de auditoría." },

  { sa:"3.1", sal:"Recursos financieros y materiales", area:"Gestión administrativa electoral del INE",
    p:null, pt:null,
    q:"¿Cuál es el propósito del inventario de bienes muebles e inmuebles en los órganos desconcentrados del INE?",
    o:["Es un trámite meramente estadístico sin consecuencias prácticas",
       "Llevar un registro actualizado y conciliado de los bienes propiedad del INE a cargo del órgano, para efectos de control patrimonial, resguardo individual, bajas, altas, traslados y rendición de cuentas ante los órganos fiscalizadores",
       "Determinar los impuestos que el INE debe pagar por sus bienes"],
    c:1,
    ex:"El inventario de bienes es un instrumento de control patrimonial. Permite saber qué bienes están a cargo del órgano, quién los resguarda (resguardo individual), su estado, ubicación y valor. Se concilia periódicamente con los registros contables centrales. Altas, bajas y transferencias deben documentarse. En auditorías y cambios de titulares (por ejemplo, al ingresar un nuevo Vocal Secretario) se realizan actas de entrega-recepción que incluyen el inventario." },

  /* ══════════════════════════════════
     3.2  GESTIÓN DE RECURSOS HUMANOS  (2)
  ══════════════════════════════════ */
  { sa:"3.2", sal:"Gestión de recursos humanos", area:"Gestión administrativa electoral del INE",
    p:null, pt:null,
    q:"¿Qué dos grandes grupos de personal integran la plantilla del INE y cuál es el régimen aplicable a cada uno?",
    o:["Personal de base y personal de confianza, ambos regulados por la Ley Federal del Trabajo",
       "Servicio Profesional Electoral Nacional (SPEN), regido por el Estatuto del SPEN; y Rama Administrativa, regida por el Estatuto del SPEN y por las normas de recursos humanos del INE con aplicación supletoria de la legislación laboral federal",
       "Sólo existe un grupo: los funcionarios electorales designados por el Consejo General"],
    c:1,
    ex:"El personal del INE se divide en dos grandes regímenes: (1) el Servicio Profesional Electoral Nacional (SPEN), que comprende cuerpos de la función ejecutiva y de la función técnica, con reglas de ingreso por concurso, permanencia, evaluación y ascenso específicas; y (2) la Rama Administrativa, que desempeña funciones de apoyo. Ambos grupos se rigen por el Estatuto del SPEN y la normativa interna, con aplicación supletoria de la legislación laboral cuando corresponde." },

  { sa:"3.2", sal:"Gestión de recursos humanos", area:"Gestión administrativa electoral del INE",
    p:null, pt:null,
    q:"¿Qué es la evaluación del desempeño en el Servicio Profesional Electoral Nacional y qué consecuencia puede tener?",
    o:["Un reconocimiento simbólico sin efectos en la trayectoria del miembro del Servicio",
       "Un instrumento anual obligatorio que mide el cumplimiento de metas individuales, colectivas y de competencias; sus resultados impactan en la permanencia, en los incentivos, en la readscripción y en los programas de formación y desarrollo del personal del SPEN",
       "Una prueba opcional que los miembros del Servicio pueden o no aceptar presentar"],
    c:1,
    ex:"La evaluación del desempeño es un elemento estructural del SPEN, obligatoria y anual, prevista en el Estatuto. Evalúa metas colectivas (de la Junta), individuales (por puesto) y competencias (clave, directivas, técnicas). Sus resultados tienen efectos reales: son requisito de permanencia; las calificaciones reiteradamente deficientes pueden dar lugar a la separación del Servicio; las destacadas abren la posibilidad de incentivos, readscripciones y desarrollo profesional." },

  /* ══════════════════════════════════
     4.1  CONSEJOS LOCALES Y DISTRITALES  (3)
  ══════════════════════════════════ */
  { sa:"4.1", sal:"Consejos locales y distritales", area:"Proceso electoral",
    p:null, pt:null,
    q:"¿Cómo se integran los Consejos Locales del INE durante el proceso electoral federal?",
    o:["Por un Consejero Presidente y diez Consejeros Electorales elegidos por voto popular",
       "Por un Consejero Presidente (que es el Vocal Ejecutivo de la Junta Local), seis Consejeros Electorales (con voz y voto), los Vocales de la Junta Local (con voz pero sin voto), representantes de partidos políticos nacionales (con voz pero sin voto) y un Secretario del Consejo (que es el Vocal Secretario de la Junta)",
       "Únicamente por representantes designados por los partidos políticos"],
    c:1,
    ex:"Los Consejos Locales se instalan durante el proceso electoral y se integran por: el Vocal Ejecutivo como Consejero Presidente, seis Consejeros Electorales con voz y voto, los demás Vocales de la Junta con voz pero sin voto, representantes partidistas (voz sin voto) y el Vocal Secretario como Secretario del Consejo. El Consejo toma decisiones colegiadas sobre aspectos del proceso en la entidad." },

  { sa:"4.1", sal:"Consejos locales y distritales", area:"Proceso electoral",
    p:null, pt:null,
    q:"¿Cuáles son algunas de las atribuciones de los Consejos Distritales durante el proceso electoral federal?",
    o:["Aprobar el presupuesto anual del INE y emitir lineamientos para toda la República",
       "Vigilar el proceso electoral en el distrito, aprobar la ubicación de las casillas, realizar los cómputos distritales de las elecciones, expedir las constancias que correspondan y conocer de los medios de impugnación de su competencia",
       "Designar magistrados del Tribunal Electoral y resolver controversias constitucionales"],
    c:1,
    ex:"Los Consejos Distritales son los órganos que, en su demarcación, vigilan y dan seguimiento al proceso electoral. Entre sus atribuciones destacan: aprobar la ubicación e integración de casillas, preparar los cómputos distritales (diputados federales, Presidencia en el componente distrital, senadores en la demarcación correspondiente), expedir constancias de mayoría a diputados federales, y conocer los medios de impugnación de su competencia conforme a la ley." },

  { sa:"4.1", sal:"Consejos locales y distritales", area:"Proceso electoral",
    p:"Durante el cómputo distrital, el Secretario del Consejo (Vocal Secretario) tiene funciones específicas relacionadas con la fe pública de los resultados.",
    pt:"Cómputo distrital",
    q:"¿Qué funciones específicas ejerce el Vocal Secretario como Secretario del Consejo Distrital durante la sesión de cómputo distrital?",
    o:["Dirige personalmente el cómputo y emite la resolución final de validez de la elección",
       "Da fe del desarrollo de la sesión, auxilia en la apertura de paquetes electorales en los casos previstos, levanta el acta circunstanciada de cómputo, asienta los resultados, los incidentes y las protestas, firma las actas de cómputo y tiene a su cargo la integración y resguardo del expediente que se remite a los órganos superiores",
       "Se encarga del conteo manual de cada voto sin intervención de los Consejeros"],
    c:1,
    ex:"El Vocal Secretario, como Secretario del Consejo Distrital, cumple un papel central durante el cómputo: da fe de las decisiones colegiadas, auxilia en la apertura de paquetes cuando procede (recuento parcial o total, paquetes con muestras de alteración, etc.), levanta el acta circunstanciada, asienta los resultados, los incidentes y las protestas, firma las actas, y custodia e integra los expedientes que se remiten a la Sala competente del TEPJF y a las demás instancias." },

  /* ══════════════════════════════════
     4.2  PROCEDIMIENTOS Y CANDIDATURAS  (7)
  ══════════════════════════════════ */
  { sa:"4.2", sal:"Procedimientos y candidaturas", area:"Proceso electoral",
    p:null, pt:null,
    q:"¿Cuáles son las etapas del proceso electoral federal conforme a la LGIPE?",
    o:["Preparación de la elección, jornada electoral, resultados y declaraciones de validez, y dictamen y declaraciones de validez de la elección de Presidente",
       "Una sola etapa denominada 'jornada electoral', que abarca desde la convocatoria hasta la entrega de constancias",
       "Campañas y conteo de votos, únicamente"],
    c:0,
    ex:"La LGIPE establece cuatro etapas: (1) Preparación de la elección (inicia con la primera sesión del Consejo General y termina al iniciar la jornada), (2) Jornada electoral (día de la elección), (3) Resultados y declaraciones de validez, y (4) Dictamen y declaraciones de validez de la elección de Presidente (que corresponde a la Sala Superior del TEPJF). Cada etapa tiene actos y plazos específicos." },

  { sa:"4.2", sal:"Procedimientos y candidaturas", area:"Proceso electoral",
    p:null, pt:null,
    q:"¿Quién es la autoridad competente para registrar las candidaturas a diputaciones federales por el principio de mayoría relativa?",
    o:["El Consejo Distrital correspondiente, que registra las candidaturas del distrito en el que se postulan",
       "El Consejo General del INE, sin intervención de los órganos desconcentrados",
       "La Sala Superior del TEPJF, como primera instancia"],
    c:0,
    ex:"Las candidaturas a diputaciones federales de mayoría relativa se registran ante el Consejo Distrital del distrito en que se postulan. El Consejo Distrital verifica requisitos de elegibilidad y cumplimiento de las reglas de paridad y postulación. Para las candidaturas de representación proporcional el registro se hace ante el Consejo General. El Vocal Secretario, como Secretario del Consejo Distrital, integra los expedientes de registro." },

  { sa:"4.2", sal:"Procedimientos y candidaturas", area:"Proceso electoral",
    p:null, pt:null,
    q:"¿Qué principio constitucional obliga a los partidos y coaliciones a postular candidaturas en condiciones de igualdad entre mujeres y hombres?",
    o:["El principio de máxima publicidad",
       "El principio de paridad de género, previsto en el Art. 41 CPEUM y desarrollado en la LGIPE, que exige postulaciones paritarias tanto horizontal como verticalmente, así como la aplicación de acciones afirmativas en favor de grupos históricamente subrepresentados",
       "El principio de libre autodeterminación de los partidos, sin regulación constitucional"],
    c:1,
    ex:"Desde la reforma constitucional de 'paridad en todo' (2019) y reformas legales posteriores, el Art. 41 CPEUM y la LGIPE obligan a partidos y coaliciones a observar paridad de género en las postulaciones, con dimensiones horizontal (entre fórmulas) y vertical (titular-suplente del mismo género). Adicionalmente se aplican acciones afirmativas para garantizar representación de pueblos indígenas, personas afromexicanas, jóvenes, personas con discapacidad, diversidad sexual y migrantes." },

  { sa:"4.2", sal:"Procedimientos y candidaturas", area:"Proceso electoral",
    p:null, pt:null,
    q:"¿Qué es una causal de nulidad de elección y cuál es el órgano competente para declararla?",
    o:["Es una infracción administrativa que sanciona el OIC del INE",
       "Es un supuesto previsto en la Constitución y en la LGSMIME que, de acreditarse, deja sin efectos los resultados de una elección; su declaración corresponde a las Salas del Tribunal Electoral del Poder Judicial de la Federación",
       "Es un acuerdo que emite el Consejo General del INE de manera discrecional"],
    c:1,
    ex:"Las causales de nulidad (por ejemplo, violación a principios constitucionales, rebase de topes de gasto en proporción determinante, compra o coacción del voto, uso de recursos públicos o religiosos, entre otras previstas) están reguladas en el Art. 41 CPEUM y en la LGSMIME. Su acreditación y declaración competen exclusivamente a las Salas del TEPJF en los juicios que se promuevan contra los resultados. El INE documenta y remite los elementos, pero no declara la nulidad." },

  { sa:"4.2", sal:"Procedimientos y candidaturas", area:"Proceso electoral",
    p:null, pt:null,
    q:"¿En qué supuestos procede el recuento total o parcial de votos en sede administrativa durante el cómputo distrital?",
    o:["Sólo cuando cualquier partido lo solicite sin motivación alguna",
       "Cuando los votos nulos sean mayores que la diferencia entre el primero y el segundo lugar; cuando existan inconsistencias evidentes en el acta; cuando el paquete electoral presente muestras de alteración; y cuando la diferencia entre primero y segundo lugar sea igual o menor a un punto porcentual y exista la petición respectiva, conforme a la LGIPE",
       "Únicamente cuando lo ordene la Suprema Corte de Justicia de la Nación"],
    c:1,
    ex:"La LGIPE prevé supuestos específicos para recuento en sede administrativa durante el cómputo distrital: acta inexistente o con errores evidentes, paquetes con muestras de alteración, votos nulos mayores a la diferencia entre primer y segundo lugar, y diferencia porcentual cerrada (1% o menor) con petición de parte. El recuento puede ser parcial (casilla por casilla de las impugnadas) o total. El Vocal Secretario da fe del procedimiento y levanta las actas." },

  { sa:"4.2", sal:"Procedimientos y candidaturas", area:"Proceso electoral",
    p:"Un partido solicita formalmente, durante el cómputo distrital, el recuento total de votos alegando que la diferencia entre primer y segundo lugar en la elección de diputados de mayoría relativa en ese distrito fue menor al 1%.",
    pt:"Caso — recuento total",
    q:"¿Cómo debe proceder el Consejo Distrital y qué papel cumple el Vocal Secretario?",
    o:["Negar el recuento de plano porque sólo se recuentan las actas con inconsistencias",
       "Verificar que se cumplan los supuestos legales (diferencia igual o menor a 1% y petición oportuna); en caso afirmativo, acordar el recuento total bajo las reglas del Reglamento de Elecciones; el Vocal Secretario da fe del procedimiento, coordina los grupos de trabajo, levanta actas circunstanciadas y asienta incidentes",
       "Remitir el asunto directamente al TEPJF sin resolver en sede administrativa"],
    c:1,
    ex:"Cumplidos los supuestos (diferencia ≤ 1% y petición oportuna), el Consejo Distrital debe acordar el recuento total. El procedimiento se desarrolla conforme al Reglamento de Elecciones, usualmente con grupos de trabajo instalados en el Consejo para abrir paquetes, verificar boletas y levantar nuevas actas por casilla. El Vocal Secretario, como Secretario del Consejo, da fe del desarrollo, coordina el trámite formal, levanta el acta circunstanciada final y asienta incidentes y protestas." },

  { sa:"4.2", sal:"Procedimientos y candidaturas", area:"Proceso electoral",
    p:null, pt:null,
    q:"¿Qué documento acredita formalmente el triunfo de una candidatura a diputación federal por mayoría relativa tras el cómputo distrital?",
    o:["Una notificación electrónica del PREP, automática el día de la jornada",
       "La Constancia de Mayoría y Validez expedida por el Consejo Distrital a la fórmula (propietario-suplente) que obtuvo el mayor número de votos y cumple los requisitos de elegibilidad",
       "Un oficio de la Secretaría de Gobernación"],
    c:1,
    ex:"Concluido el cómputo distrital y, en su caso, el recuento, el Consejo Distrital expide la Constancia de Mayoría y Validez a la fórmula ganadora (propietario y suplente) de la diputación federal de mayoría relativa, siempre que se cumplan los requisitos de elegibilidad. El Vocal Secretario, como Secretario del Consejo, levanta la constancia con los datos requeridos, recaba las firmas del Presidente y Secretario, y la entrega formalmente. La constancia es impugnable ante el TEPJF." }

];
