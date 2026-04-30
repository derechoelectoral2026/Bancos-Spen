/* ============================================================
   BANCO DE PREGUNTAS — Simulacro INE Vocalía RFE v1
   ============================================================
   - 50 preguntas organizadas por subárea (sa)
   - Estructura de cada pregunta:
       sa   : código de subárea (ej. "1.1", "2.5")
       sal  : etiqueta corta de la subárea
       area : área principal
       cx   : true si es de "relacionar columnas"
       p    : pasaje/contexto (texto) o null
       pt   : título del pasaje o null
       mt   : tabla HTML para preguntas de relacionar (o null)
       q    : enunciado de la pregunta
       o    : array con las 3 opciones (A, B, C)
       c    : índice (0,1,2) de la opción correcta
       ex   : explicación que aparece tras responder
   ------------------------------------------------------------
   Para AGREGAR una pregunta: copia un objeto {...} completo
   dentro del array Q, respetando comas. La aleatorización del
   simulacro se encargará de barajar orden y opciones.
   ============================================================ */

const Q=[

// ════════════════════════════════════════════
// 1. ESTRUCTURA DEL INE
// ════════════════════════════════════════════

// 1.1 DIRECCIONES EJECUTIVAS (1)
{sa:"1.1",sal:"Direcciones ejecutivas",area:"Estructura del INE",cx:false,
 p:null,pt:null,mt:null,
 q:"¿Cuál es la función principal de la Dirección Ejecutiva del Registro Federal de Electores (DERFE) dentro del INE?",
 o:["Organizar logísticamente la jornada electoral: ubicación de casillas, distribución de materiales y capacitación de funcionarios de casilla.",
    "Fiscalizar el origen y destino de los recursos financieros de los partidos políticos y candidatos.",
    "Administrar el Registro Federal de Electores: formación, depuración y actualización permanente del padrón electoral y las listas nominales."],
 c:2,ex:"La DERFE es responsable de la formación, mantenimiento, depuración y actualización del Registro Federal de Electores, así como del padrón electoral y las listas nominales de electores. Es el área sustantiva del cargo de Vocal del RFE."},

// 1.2 JUNTAS LOCALES Y DISTRITALES (2)
{sa:"1.2",sal:"Juntas locales y distritales ejecutivas",area:"Estructura del INE",cx:false,
 p:null,pt:null,mt:null,
 q:"¿Cuál es la diferencia entre una Junta Local Ejecutiva y una Junta Distrital Ejecutiva del INE?",
 o:["Son órganos equivalentes; la Junta Local opera solo en la Ciudad de México y la Distrital en los demás estados.",
    "La Junta Local Ejecutiva coordina y supervisa el trabajo de las Juntas Distritales en la entidad; la Junta Distrital Ejecutiva opera directamente en cada uno de los 300 distritos electorales federales.",
    "Las Juntas Locales son temporales (solo en proceso electoral); las Distritales son permanentes con rango superior."],
 c:1,ex:"La Junta Local Ejecutiva es el órgano desconcentrado permanente de nivel estatal que coordina a las 300 Juntas Distritales. Existen 32 (una por entidad federativa). Las Juntas Distritales operan en cada uno de los 300 distritos electorales federales uninominales."},

{sa:"1.2",sal:"Juntas locales y distritales ejecutivas",area:"Estructura del INE",cx:true,
 p:null,pt:null,
 mt:`<div class="match-table-wrap"><table class="match-table"><thead><tr><th colspan="2">Vocal de la Junta Distrital</th><th colspan="2">Función específica</th></tr></thead><tbody>
<tr><td>1.</td><td>Vocal Ejecutivo/a</td><td>a)</td><td>Actúa como secretario/a del Consejo Distrital; levanta actas y da fe de acuerdos</td></tr>
<tr><td>2.</td><td>Vocal Secretario/a</td><td>b)</td><td>Coordina la actualización del padrón y listas nominales en el distrito</td></tr>
<tr><td>3.</td><td>Vocal del RFE</td><td>c)</td><td>Preside la Junta y representa al INE en el distrito; responsable de la gestión operativa</td></tr>
</tbody></table></div>`,
 q:"Relacione cada vocal de la Junta Distrital Ejecutiva con su función específica:",
 o:["1c, 2a, 3b","1a, 2c, 3b","1b, 2a, 3c"],
 c:0,ex:"El Vocal Ejecutivo/a (1c) preside la Junta y representa al INE en el distrito. El Vocal Secretario/a (2a) actúa como secretario/a del Consejo Distrital durante el proceso electoral. El Vocal del RFE (3b) coordina la actualización del padrón y listas nominales en el distrito."},

// 1.3 CONSEJOS LOCALES Y DISTRITALES (3)
{sa:"1.3",sal:"Consejos locales y distritales",area:"Estructura del INE",cx:false,
 p:null,pt:null,mt:null,
 q:"¿Cuál es la diferencia entre la Junta Distrital Ejecutiva y el Consejo Distrital del INE en cuanto a su naturaleza y temporalidad?",
 o:["La Junta Distrital Ejecutiva es el órgano permanente de carácter técnico-ejecutivo; el Consejo Distrital es el órgano colegiado de decisión que se instala temporalmente durante el proceso electoral.",
    "Son el mismo órgano con dos nombres distintos según el periodo del año; ambos tienen igual jerarquía.",
    "El Consejo Distrital es el órgano permanente; la Junta Distrital solo opera durante la jornada electoral y luego se disuelve."],
 c:0,ex:"La Junta Distrital Ejecutiva es permanente y técnico-ejecutiva. El Consejo Distrital es temporal, se instala en octubre del año previo a la elección y está integrado por un Consejero Presidente y seis Consejeros Electorales Distritales con derecho a voto."},

{sa:"1.3",sal:"Consejos locales y distritales",area:"Estructura del INE",cx:false,
 p:null,pt:null,mt:null,
 q:"Durante las sesiones del Consejo Distrital, los representantes de los partidos políticos tienen voz pero no voto. ¿Por qué es relevante esta distinción?",
 o:["Para que los partidos no conozcan los acuerdos del Consejo antes de publicarse en el Diario Oficial.",
    "Para garantizar que las decisiones sean tomadas por consejeros ciudadanos imparciales, mientras los partidos expresan su posición y queda constancia de ello en acta.",
    "Para que los partidos puedan cobrar sus prerrogativas electorales sin rendir cuentas directas al INE."],
 c:1,ex:"La distinción voz-sin-voto protege la autonomía del INE: los consejeros ciudadanos deciden sin presión partidista, pero los partidos pueden expresarse y sus posiciones quedan en acta, garantizando transparencia."},

{sa:"1.3",sal:"Consejos locales y distritales",area:"Estructura del INE",cx:true,
 p:null,pt:null,
 mt:`<div class="match-table-wrap"><table class="match-table"><thead><tr><th colspan="2">Órgano o cargo distrital</th><th colspan="2">Característica</th></tr></thead><tbody>
<tr><td>1.</td><td>Junta Distrital Ejecutiva</td><td>a)</td><td>Se instala en octubre del año previo a la elección; integrado por un consejero presidente y seis consejeros electorales con voto</td></tr>
<tr><td>2.</td><td>Consejo Distrital</td><td>b)</td><td>Órgano permanente presidido por el Vocal Ejecutivo; carácter técnico-operativo</td></tr>
<tr><td>3.</td><td>Vocal Secretario/a</td><td>c)</td><td>Desempeña la secretaría del Consejo Distrital durante el proceso electoral</td></tr>
</tbody></table></div>`,
 q:"Relacione cada órgano o cargo distrital con su característica correcta:",
 o:["1b, 2a, 3c","1a, 2b, 3c","1c, 2a, 3b"],
 c:0,ex:"La Junta Distrital Ejecutiva (1b) es permanente y técnico-operativa. El Consejo Distrital (2a) es temporal y se instala antes de la elección. El Vocal Secretario/a (3c) actúa como secretario del Consejo Distrital durante el proceso."},


// ════════════════════════════════════════════
// 2. PROCESO ELECTORAL
// ════════════════════════════════════════════

// 2.1 ACTIVIDADES DE PREPARACIÓN (3)
{sa:"2.1",sal:"Actividades de preparación de la elección",area:"Proceso electoral",cx:false,
 p:null,pt:null,mt:null,
 q:"¿Cuál es la diferencia entre el Padrón Electoral y el Listado Nominal de Electores?",
 o:["Son sinónimos; ambos refieren exactamente a la misma base de datos del INE.",
    "El Padrón Electoral incluye a todos los ciudadanos mayores de 18 años; el Listado Nominal solo a quienes votaron en la elección federal anterior.",
    "El Padrón Electoral es la base de datos de todos los ciudadanos inscritos; el Listado Nominal contiene solo a quienes tienen credencial para votar vigente y pueden participar en una elección específica."],
 c:2,ex:"El Padrón Electoral es el registro de todos los ciudadanos que han solicitado su inscripción. El Listado Nominal se obtiene del Padrón y contiene solo a quienes tienen credencial para votar vigente; es el documento que se usa en casilla para verificar el derecho a votar."},

{sa:"2.1",sal:"Actividades de preparación de la elección",area:"Proceso electoral",cx:false,
 p:"Durante la etapa de preparación de la elección, el INE publica y distribuye el catálogo de casillas para que partidos políticos y ciudadanos puedan verificar la ubicación de cada una.",
 pt:"Aprobación y publicación de casillas",mt:null,
 q:"¿Qué puede hacer un partido político que considere que una casilla fue aprobada en un lugar que no cumple los requisitos legales?",
 o:["Presentar una inconformidad ante el Consejo Distrital dentro del plazo legal para que se modifique la ubicación.",
    "Acudir directamente ante el TEPJF mediante un Juicio de Revisión Constitucional (JRC) para impugnar la ubicación.",
    "No puede hacer nada; una vez aprobada por el Consejo Distrital, la decisión sobre casillas es definitiva e inapelable."],
 c:0,ex:"Los partidos pueden presentar inconformidades ante el Consejo Distrital respecto a la ubicación de casillas aprobadas, dentro de los plazos de la LGIPE. El Consejo debe resolver y, en su caso, modificar o ratificar la casilla."},

{sa:"2.1",sal:"Actividades de preparación de la elección",area:"Proceso electoral",cx:true,
 p:null,pt:null,
 mt:`<div class="match-table-wrap"><table class="match-table"><thead><tr><th colspan="2">Herramienta o instrumento</th><th colspan="2">Uso o propósito</th></tr></thead><tbody>
<tr><td>1.</td><td>Listado Nominal</td><td>a)</td><td>Reportar en tiempo real la instalación de casillas e incidencias durante la jornada</td></tr>
<tr><td>2.</td><td>SIJE</td><td>b)</td><td>Difundir datos preliminares de resultados la noche de la elección (sin valor jurídico definitivo)</td></tr>
<tr><td>3.</td><td>PREP</td><td>c)</td><td>Verificar en casilla que el ciudadano tiene credencial vigente y derecho a sufragar</td></tr>
</tbody></table></div>`,
 q:"Relacione cada herramienta electoral con su uso correcto:",
 o:["1c, 2a, 3b","1a, 2b, 3c","1b, 2c, 3a"],
 c:0,ex:"El Listado Nominal (1c) se usa en casilla para verificar el derecho a votar. El SIJE (2a) reporta incidencias en tiempo real de la jornada. El PREP (3b) difunde resultados preliminares sin valor jurídico definitivo."},

// 2.2 MODALIDADES DE VOTO ANTICIPADO (3)
{sa:"2.2",sal:"Modalidades de voto anticipado",area:"Proceso electoral",cx:false,
 p:null,pt:null,mt:null,
 q:"¿Qué diferencia existe entre el voto anticipado en domicilio y el voto en casillas especiales?",
 o:["El voto en domicilio es para ciudadanos con discapacidad o adultos mayores de 60 años que no pueden ir a su casilla; las casillas especiales son para ciudadanos que están fuera de su sección el día de la jornada.",
    "El voto en domicilio es para mexicanos residentes en el extranjero; las casillas especiales atienden exclusivamente a ciudadanos hospitalizados.",
    "Ambas modalidades sirven al mismo perfil de ciudadano; la diferencia es únicamente el método de entrega de la boleta."],
 c:0,ex:"El voto en domicilio atiende a ciudadanos con discapacidad o adultos mayores de 60 años que no pueden desplazarse. Las casillas especiales permiten votar a ciudadanos fuera de su sección por razones de trabajo o tránsito el día de la jornada."},

{sa:"2.2",sal:"Modalidades de voto anticipado",area:"Proceso electoral",cx:true,
 p:null,pt:null,
 mt:`<div class="match-table-wrap"><table class="match-table"><thead><tr><th colspan="2">Modalidad de voto</th><th colspan="2">Perfil del ciudadano que la usa</th></tr></thead><tbody>
<tr><td>1.</td><td>Voto anticipado en domicilio</td><td>a)</td><td>Ciudadano fuera de su sección electoral el día de la jornada (tránsito, trabajo)</td></tr>
<tr><td>2.</td><td>Casilla especial</td><td>b)</td><td>Ciudadano mexicano residente fuera del país, inscrito en la Lista Nominal del Extranjero</td></tr>
<tr><td>3.</td><td>Voto desde el extranjero</td><td>c)</td><td>Ciudadano con discapacidad o adulto mayor de 60 años que no puede desplazarse a votar</td></tr>
</tbody></table></div>`,
 q:"Relacione cada modalidad de voto con el perfil del ciudadano que tiene derecho a utilizarla:",
 o:["1c, 2a, 3b","1a, 2c, 3b","1b, 2a, 3c"],
 c:0,ex:"Voto en domicilio (1c): ciudadanos con discapacidad o adultos mayores de 60 años. Casilla especial (2a): ciudadanos fuera de su sección por trabajo o tránsito, con límite de 300 votos. Voto desde el extranjero (3b): mexicanos residentes en el extranjero inscritos en la Lista Nominal del Extranjero."},

{sa:"2.2",sal:"Modalidades de voto anticipado",area:"Proceso electoral",cx:false,
 p:null,pt:null,mt:null,
 q:"¿Cuál es el límite de votos que puede recibir una casilla especial y por qué existe ese límite?",
 o:["500 votos, para evitar largas filas en los puntos de alta afluencia electoral.",
    "1,000 boletas, para garantizar el derecho al voto de un mayor número de ciudadanos en tránsito, manteniendo un control operativo que permita realizar el escrutinio en un tiempo razonable.",
    "200 votos, límite establecido para equilibrar la carga de trabajo entre todas las casillas del distrito."],
 c:1,ex:"Conforme al Acuerdo INE/CG57/2025 y la LGIPE, cada casilla especial cuenta con 1,000 boletas. El límite garantiza que la Mesa Directiva pueda realizar el escrutinio y cómputo en un tiempo razonable dado que el proceso en estas casillas es más complejo."},

// 2.3 PROCESO ELECTORAL DEL PJF (1)
{sa:"2.3",sal:"Proceso electoral del Poder Judicial de la Federación",area:"Proceso electoral",cx:false,
 p:"La reforma judicial de 2024 implicó que, por primera vez en la historia de México, los cargos del Poder Judicial Federal serían electos por voto ciudadano directo.",
 pt:"Elecciones del PJF — reforma 2024",mt:null,
 q:"¿Cuál es el papel específico del INE en la organización de las elecciones de los integrantes del Poder Judicial Federal?",
 o:["El INE organiza íntegramente el proceso: convocatoria, registro de candidatos, logística de casillas, cómputos y declaración de validez.",
    "El INE solo presta apoyo logístico; la organización integral la conduce el Comité de Evaluación del PJF.",
    "El INE únicamente verifica la identidad de los candidatos propuestos por los Poderes de la Unión, sin organizar la jornada."],
 c:0,ex:"Tras la reforma de 2024, el INE asumió la organización completa de las elecciones judiciales: convocatoria, registro, logística, jornada, cómputos y declaración de validez, con el mismo marco normativo que las elecciones federales ordinarias."},

// 2.4 ATRIBUCIONES ESPECIALES DEL INE (3)
{sa:"2.4",sal:"Atribuciones especiales del INE",area:"Proceso electoral",cx:false,
 p:null,pt:null,mt:null,
 q:"¿En qué se distingue la 'atracción' de la 'delegación' como atribuciones especiales del INE respecto a los OPLEs?",
 o:["Son sinónimas; en ambos casos el INE reemplaza permanentemente al OPLE en todas sus funciones locales.",
    "En la delegación el INE transfiere de forma permanente sus funciones federales al OPLE; en la atracción el OPLE transfiere permanentemente sus funciones al INE.",
    "En la atracción el INE asume la organización de una elección local que corresponde al OPLE; en la delegación el INE encomienda al OPLE tareas de elecciones federales, bajo supervisión del INE."],
 c:2,ex:"La atracción opera de OPLE hacia INE: el INE toma el control de una elección local. La delegación opera de INE hacia OPLE: el INE le encomienda tareas concretas en elecciones federales. En ambos casos el INE mantiene la responsabilidad final."},

{sa:"2.4",sal:"Atribuciones especiales del INE",area:"Proceso electoral",cx:true,
 p:null,pt:null,
 mt:`<div class="match-table-wrap"><table class="match-table"><thead><tr><th colspan="2">Atribución especial del INE</th><th colspan="2">Descripción</th></tr></thead><tbody>
<tr><td>1.</td><td>Atracción</td><td>a)</td><td>INE → OPLE: encomienda tareas específicas de elecciones federales bajo supervisión del INE</td></tr>
<tr><td>2.</td><td>Delegación</td><td>b)</td><td>Fiscaliza origen, monto y destino de todos los recursos de partidos y candidatos</td></tr>
<tr><td>3.</td><td>Fiscalización</td><td>c)</td><td>OPLE → INE: el INE asume la organización de una elección local que correspondía al OPLE</td></tr>
</tbody></table></div>`,
 q:"Relacione cada atribución especial del INE con su descripción correcta:",
 o:["1c, 2a, 3b","1a, 2c, 3b","1b, 2a, 3c"],
 c:0,ex:"Atracción (1c): el INE toma el control de elecciones locales del OPLE. Delegación (2a): el INE encomienda tareas federales al OPLE bajo su supervisión. Fiscalización (3b): el INE revisa el origen, monto y destino de recursos de partidos y candidatos."},

{sa:"2.4",sal:"Atribuciones especiales del INE",area:"Proceso electoral",cx:false,
 p:null,pt:null,mt:null,
 q:"¿Qué son los tiempos oficiales en radio y televisión que administra el INE?",
 o:["El tiempo que el INE compra directamente a las cadenas de radio y TV para difundir propaganda del gobierno federal.",
    "Los espacios en radio y TV que el Estado tiene por ley y que el INE distribuye gratuitamente entre partidos, candidatos y la propia autoridad electoral para difusión político-electoral.",
    "Los minutos de cobertura informativa que los medios deben dedicar obligatoriamente a los partidos de manera proporcional."],
 c:1,ex:"El Art. 41 CPEUM otorga al Estado tiempos en radio y televisión. El INE administra y distribuye esos tiempos entre partidos, candidatos y el propio instituto para propaganda electoral, prohibiéndose la contratación privada de tiempo adicional durante campañas."},

// 2.5 ACTIVIDADES DEL DÍA DE LA JORNADA (7)
{sa:"2.5",sal:"Actividades del día de la jornada electoral",area:"Proceso electoral",cx:false,
 p:null,pt:null,mt:null,
 q:"¿Qué acciones debe realizar el Presidente de casilla antes de las 8:00 horas para garantizar la instalación?",
 o:["Verificar que tenga todos los materiales del paquete electoral, instalar la mampara, firmar el acta de instalación con los funcionarios presentes y declarar formalmente abierta la votación.",
    "Solo colocar la urna y esperar a que lleguen los demás funcionarios y representantes de partidos.",
    "Abrir el paquete electoral, contar individualmente todas las boletas y separarlas por tipo de elección antes de instalar la casilla."],
 c:0,ex:"El Presidente debe: verificar la presencia de al menos dos funcionarios más, abrir el paquete electoral, instalar mampara y urnas, firmar el acta de instalación con los funcionarios y representantes presentes, y declarar abierta la votación a las 8:00 horas."},

{sa:"2.5",sal:"Actividades del día de la jornada electoral",area:"Proceso electoral",cx:true,
 p:null,pt:null,
 mt:`<div class="match-table-wrap"><table class="match-table"><thead><tr><th colspan="2">Tipo de voto</th><th colspan="2">Definición y tratamiento en el escrutinio</th></tr></thead><tbody>
<tr><td>1.</td><td>Voto válido</td><td>a)</td><td>Representante de partido lo cuestiona durante el escrutinio; se separa y lo resuelve el Consejo Distrital</td></tr>
<tr><td>2.</td><td>Voto nulo</td><td>b)</td><td>La voluntad del ciudadano es inequívoca aunque la marca no esté exactamente dentro del recuadro</td></tr>
<tr><td>3.</td><td>Voto impugnado</td><td>c)</td><td>Tiene marcas para dos o más partidos, o carece de marca; se contabiliza separado sin asignarse a ningún partido</td></tr>
</tbody></table></div>`,
 q:"Relacione cada tipo de voto con su definición y tratamiento en el escrutinio:",
 o:["1b, 2c, 3a","1a, 2b, 3c","1c, 2a, 3b"],
 c:0,ex:"Voto válido (1b): la intención es inequívoca aunque la marca no esté en el recuadro. Voto nulo (2c): marcas para dos o más partidos o sin marca; se contabiliza por separado. Voto impugnado (3a): lo cuestiona un representante y lo resuelve el Consejo Distrital."},

{sa:"2.5",sal:"Actividades del día de la jornada electoral",area:"Proceso electoral",cx:false,
 p:null,pt:null,mt:null,
 q:"¿En qué casos puede un ciudadano ser rechazado en la casilla sin poder votar?",
 o:["Si llega después de las 18:00 horas y la fila ya se ha disuelto completamente.",
    "Si no porta su credencial para votar, o su nombre no aparece en el listado nominal, o en casilla especial ya se agotó el límite de 300 votos.",
    "Si el funcionario de casilla considera subjetivamente que el ciudadano está bajo efectos del alcohol o drogas."],
 c:1,ex:"Un ciudadano puede ser rechazado si: no presenta su credencial para votar, su nombre no aparece en el listado nominal de esa sección, o si en casilla especial ya se alcanzó el límite de 300 votos. No puede rechazarse por criterios subjetivos."},

{sa:"2.5",sal:"Actividades del día de la jornada electoral",area:"Proceso electoral",cx:false,
 p:null,pt:null,mt:null,
 q:"¿Qué debe hacer el Presidente de casilla si se presenta un incidente de alteración del orden durante la votación?",
 o:["Suspender definitivamente la votación e informar de inmediato al Consejo Distrital para que tome la decisión final.",
    "Solicitar el auxilio de la fuerza pública, registrar el incidente en el acta correspondiente y continuar la votación una vez restablecida la normalidad.",
    "Continuar la votación sin documentar el incidente para no generar alarma entre los demás votantes."],
 c:1,ex:"El Presidente debe solicitar el auxilio de la fuerza pública, documentar el incidente en el acta de incidentes y, restablecido el orden, continuar la votación. Solo se suspende definitivamente en casos extremos que impidan garantizar la seguridad."},

{sa:"2.5",sal:"Actividades del día de la jornada electoral",area:"Proceso electoral",cx:false,
 p:null,pt:null,mt:null,
 q:"¿Cuál es el procedimiento correcto cuando, al abrir una urna para el escrutinio, se encuentran boletas de una elección diferente?",
 o:["Separar las boletas por tipo de elección, contar cada grupo por separado y registrar el incidente en el acta, continuando el escrutinio normalmente.",
    "Anular automáticamente todos los votos de esa urna por error de procedimiento, sin mayor análisis.",
    "Mezclar todas las boletas y contarlas como válidas para la elección que corresponde a esa urna."],
 c:0,ex:"Si se encuentran boletas de otra elección en una urna, los funcionarios deben separarlas, registrar el incidente en el acta y continuar el escrutinio contando solo las boletas que correspondan a esa urna. Las boletas ajenas se registran como irregularidad pero no invalidan automáticamente el escrutinio."},

{sa:"2.5",sal:"Actividades del día de la jornada electoral",area:"Proceso electoral",cx:false,
 p:null,pt:null,mt:null,
 q:"¿Qué sucede si a las 8:00 horas solo se presenta el Presidente de casilla sin ningún otro funcionario?",
 o:["El Presidente debe instalar la casilla de forma unipersonal y abrir la votación para no retrasar el proceso.",
    "El Presidente debe esperar hasta las 8:30 horas; si no llegan más funcionarios, la casilla se declara no instalada y se notifica al Consejo Distrital.",
    "El Presidente de casilla puede designar a ciudadanos presentes en la fila como funcionarios suplentes para integrar la Mesa Directiva e instalar la casilla."],
 c:2,ex:"Cuando no se presentan funcionarios suficientes, el Presidente puede integrar la Mesa Directiva con ciudadanos presentes en la fila de votantes, en el orden que establece la LGIPE. Esta medida garantiza que la casilla pueda instalarse y la votación no se suspenda."},

{sa:"2.5",sal:"Actividades del día de la jornada electoral",area:"Proceso electoral",cx:false,
 p:null,pt:null,mt:null,
 q:"¿Qué documento acredita el cierre formal de la votación al final de la jornada electoral?",
 o:["El acta de escrutinio y cómputo, que resume los votos por partido y candidato.",
    "El acta de cierre de votación, firmada por los funcionarios de casilla y los representantes de partidos presentes.",
    "El PREP, que al generar el resultado preliminar da por concluida automáticamente la jornada."],
 c:1,ex:"El cierre formal de la votación se documenta en el acta de cierre de votación. Una vez firmada por los funcionarios de casilla y los representantes de partidos acreditados, se procede al escrutinio y cómputo. El PREP es un sistema de resultados preliminares, no un documento de cierre."},


// ════════════════════════════════════════════
// 3. JUSTICIA ELECTORAL
// ════════════════════════════════════════════

// 3.1 DELITOS EN MATERIA ELECTORAL (1)
{sa:"3.1",sal:"Delitos en materia electoral",area:"Justicia electoral",cx:false,
 p:"La Ley General en Materia de Delitos Electorales (LGMDE) tipifica conductas que pueden cometer distintos actores durante el proceso electoral.",
 pt:"Responsabilidad penal electoral",mt:null,
 q:"Un vocal del RFE filtra información del padrón electoral a un partido antes de su publicación oficial. ¿Qué tipo de responsabilidad enfrenta y ante qué autoridad?",
 o:["Solo responsabilidad administrativa ante el INE, con posible destitución del cargo y sanción económica.",
    "Responsabilidad civil únicamente, pues el daño es patrimonial para los partidos que no recibieron la información.",
    "Responsabilidad penal por delito electoral ante la FISEL-FGR, y también responsabilidad administrativa ante el INE; ambas son independientes y pueden concurrir."],
 c:2,ex:"Filtrar información del padrón es un delito electoral tipificado en la LGMDE. El funcionario enfrenta: 1) responsabilidad penal ante la FISEL (FGR), y 2) responsabilidad administrativa ante el INE. Ambas son independientes y pueden concurrir simultáneamente."},

// 3.2 MEDIOS DE IMPUGNACIÓN (2)
{sa:"3.2",sal:"Medios de impugnación en materia electoral",area:"Justicia electoral",cx:true,
 p:null,pt:null,
 mt:`<div class="match-table-wrap"><table class="match-table"><thead><tr><th colspan="2">Medio de impugnación</th><th colspan="2">Objeto y característica clave</th></tr></thead><tbody>
<tr><td>1.</td><td>RIN</td><td>a)</td><td>Impugna resultados en actas de cómputo distrital; plazo de 4 días naturales desde el cómputo</td></tr>
<tr><td>2.</td><td>JIN</td><td>b)</td><td>Protege derechos político-electorales individuales del ciudadano; lo interpone el propio ciudadano</td></tr>
<tr><td>3.</td><td>JDC</td><td>c)</td><td>Impugna actos del Consejo Distrital o Local durante la preparación del proceso electoral</td></tr>
</tbody></table></div>`,
 q:"Relacione cada medio de impugnación con su objeto y característica principal:",
 o:["1c, 2a, 3b","1a, 2c, 3b","1b, 2a, 3c"],
 c:0,ex:"El RIN (1c) impugna actos del Consejo Distrital durante la preparación del proceso. El JIN (2a) impugna resultados en actas de cómputo distrital con plazo de 4 días naturales. El JDC (3b) protege los derechos político-electorales individuales de los ciudadanos ante el TEPJF."},

{sa:"3.2",sal:"Medios de impugnación en materia electoral",area:"Justicia electoral",cx:false,
 p:null,pt:null,mt:null,
 q:"¿Cuál es el plazo para interponer un Juicio de Inconformidad (JIN) contra los resultados del cómputo distrital?",
 o:["Cuatro días naturales contados a partir del día siguiente a la conclusión del cómputo distrital.",
    "Diez días hábiles a partir de la publicación de los resultados en el Diario Oficial de la Federación.",
    "Treinta días naturales contados a partir de la jornada electoral."],
 c:0,ex:"Conforme al Art. 8 de la LGSMIME, el plazo para interponer medios de impugnación es de cuatro días naturales desde el día siguiente a aquel en que se tenga conocimiento del acto impugnado. Para el JIN, el plazo corre desde la conclusión del cómputo distrital."},

// 3.3 VIOLENCIA POLÍTICA CONTRA LAS MUJERES (4)
{sa:"3.3",sal:"Violencia política contra las mujeres en razón de género",area:"Justicia electoral",cx:false,
 p:null,pt:null,mt:null,
 q:"¿Qué elementos deben concurrir para que un acto se considere violencia política contra las mujeres en razón de género (VPMRG)?",
 o:["Que sea un acto físico de violencia ocurrido necesariamente durante una campaña electoral activa.",
    "Que sea cometido únicamente por hombres contra mujeres que sean candidatas a algún cargo de elección popular.",
    "Que la acción u omisión esté basada en el género de la víctima y tenga por objeto o resultado menoscabar, anular o impedir el ejercicio de sus derechos político-electorales."],
 c:2,ex:"La VPMRG requiere: 1) que el acto esté motivado por el género, y 2) que tenga por objeto o resultado afectar el ejercicio de derechos político-electorales de mujeres. Puede ser cometida por cualquier persona y no se limita al periodo de campaña."},

{sa:"3.3",sal:"Violencia política contra las mujeres en razón de género",area:"Justicia electoral",cx:false,
 p:"Una presidenta municipal recibe mensajes anónimos amenazantes que la presionan a renunciar a su cargo. Sus colaboradores varones no reciben este tipo de mensajes.",
 pt:"Caso de VPMRG",mt:null,
 q:"¿Este caso puede constituir violencia política contra las mujeres en razón de género? ¿Por qué?",
 o:["Sí, porque la presión para renunciar mediante amenazas, dirigida específicamente a ella por su género, tiene por objeto impedir el ejercicio de su cargo como autoridad electa.",
    "No, porque la VPMRG solo aplica durante la campaña electoral, no cuando la persona ya ejerce el cargo.",
    "No, porque al ser mensajes anónimos la ley exige identificar plenamente al agresor antes de calificar la conducta como VPMRG."],
 c:0,ex:"La VPMRG no se limita al periodo electoral; también protege a mujeres que ya ejercen cargos políticos. El hecho de que solo ella reciba amenazas (no sus colaboradores varones) es un indicador del componente de género. La presión para renunciar tiene por objeto impedir el ejercicio de su mandato."},

{sa:"3.3",sal:"Violencia política contra las mujeres en razón de género",area:"Justicia electoral",cx:false,
 p:null,pt:null,mt:null,
 q:"¿Qué protocolo deben tener los partidos políticos para atender la VPMRG y quién supervisa su cumplimiento?",
 o:["Los partidos no están obligados a tener protocolos específicos; basta con respetar la paridad de género en sus candidaturas.",
    "Los partidos deben contar con un protocolo para prevenir, atender y sancionar la VPMRG; el INE supervisa su existencia y cumplimiento, pudiendo imponer sanciones ante su ausencia o incumplimiento.",
    "El protocolo es voluntario y solo aplica a partidos que cuenten con más de diez legisladoras electas en el Congreso."],
 c:1,ex:"La LGPP y la LGIPE obligan a todos los partidos a incluir protocolos para prevenir y sancionar la VPMRG en sus estatutos. El INE verifica su existencia y aplicación; la ausencia o el incumplimiento pueden derivar en amonestaciones o multas."},

{sa:"3.3",sal:"Violencia política contra las mujeres en razón de género",area:"Justicia electoral",cx:true,
 p:null,pt:null,
 mt:`<div class="match-table-wrap"><table class="match-table"><thead><tr><th colspan="2">Vía de denuncia por VPMRG</th><th colspan="2">Consecuencia y autoridad resolutora</th></tr></thead><tbody>
<tr><td>1.</td><td>Queja electoral ante el INE</td><td>a)</td><td>Pena privativa de libertad si la conducta está tipificada como delito electoral; resuelve la FISEL-FGR</td></tr>
<tr><td>2.</td><td>Denuncia penal ante la FISEL</td><td>b)</td><td>Sanción administrativa: multa e inhabilitación al responsable; resuelve el INE o el TEPJF</td></tr>
<tr><td>3.</td><td>Ambas vías simultáneamente</td><td>c)</td><td>Es posible y legal; cada vía corre de forma independiente y sus consecuencias pueden acumularse</td></tr>
</tbody></table></div>`,
 q:"Relacione cada vía de denuncia por VPMRG con su consecuencia y autoridad competente:",
 o:["1b, 2a, 3c","1a, 2b, 3c","1c, 2a, 3b"],
 c:0,ex:"Queja ante el INE (1b): genera sanciones administrativas (multa, inhabilitación). Denuncia penal ante la FISEL (2a): puede resultar en pena privativa de libertad si hay delito electoral. Ambas vías (3c) pueden usarse simultáneamente ya que son independientes entre sí."},


// ════════════════════════════════════════════
// 4. PADRÓN ELECTORAL Y LISTA NOMINAL
// ════════════════════════════════════════════

// 4.1 FORMACIÓN Y ACTUALIZACIÓN DEL RFE (6)
{sa:"4.1",sal:"Formación y actualización del Registro Federal de Electores",area:"Padrón Electoral y lista nominal",cx:false,
 p:null,pt:null,mt:null,
 q:"¿Qué información integra el Registro Federal de Electores (RFE) para cada ciudadano inscrito?",
 o:["Solo el nombre completo, CURP y fotografía del ciudadano.",
    "El nombre, domicilio, datos biométricos (fotografía, firma, huellas digitales), CURP, folio y clave de elector.",
    "Únicamente nombre, domicilio y número de credencial para votar; los datos biométricos se resguardan en un sistema separado."],
 c:1,ex:"El RFE integra: nombre completo, domicilio, datos biométricos (fotografía, firma, huellas dactilares), CURP, folio y clave de elector. Esta base de datos permite identificar de forma segura a cada ciudadano inscrito y generar las listas nominales para cada elección."},

{sa:"4.1",sal:"Formación y actualización del Registro Federal de Electores",area:"Padrón Electoral y lista nominal",cx:false,
 p:null,pt:null,mt:null,
 q:"De acuerdo con el artículo 139 de la LGIPE, ¿cuándo deben solicitar su inscripción los ciudadanos que cumplan 18 años entre el 1 de diciembre y el día de los comicios?",
 o:["A más tardar el día 30 de noviembre previo a la elección.",
    "A partir de los 17 años y 10 meses de edad, para garantizar que la credencial esté lista antes de cumplir los 18 años.",
    "En los periodos de actualización entre enero y marzo del año electoral."],
 c:0,ex:"Según el Artículo 139, párrafo 2 de la LGIPE, los mexicanos que cumplan 18 años entre el 1 de diciembre y el día de la jornada electoral, deben solicitar su inscripción a más tardar el día 30 de noviembre previo a la elección.s."},

{sa:"4.1",sal:"Formación y actualización del Registro Federal de Electores",area:"Padrón Electoral y lista nominal",cx:false,
 p:"La depuración del padrón electoral es un proceso sistemático que realiza la DERFE para mantener la confiabilidad del registro.",
 pt:"Depuración del padrón electoral",mt:null,
 q:"¿Qué causas generan la baja de un ciudadano del padrón electoral?",
 o:["Solo el fallecimiento del ciudadano, ya que los demás supuestos requieren una resolución judicial previa.",
    "El fallecimiento, la pérdida de la ciudadanía por sentencia judicial firme, o la solicitud expresa del propio ciudadano.",
    "La mudanza a otro municipio, el vencimiento de la credencial para votar o no haber sufragado en dos elecciones consecutivas."],
 c:1,ex:"Las causas de baja del padrón son: fallecimiento del ciudadano (notificado por el Registro Civil o RENAPO), pérdida de la ciudadanía por resolución judicial firme, y solicitud expresa del ciudadano. La mudanza solo genera actualización de domicilio, no baja del padrón."},

{sa:"4.1",sal:"Formación y actualización del Registro Federal de Electores",area:"Padrón Electoral y lista nominal",cx:false,
 p:null,pt:null,mt:null,
 q:"¿Con qué periodicidad se corta el Padrón Electoral para generar el Listado Nominal que se usa en cada elección?",
 o:["El padrón se corta el 31 de enero del año de la elección; los trámites concluidos después de esa fecha no quedan reflejados en el listado nominal de esa elección.",
    "El padrón se corta el mismo día de la jornada electoral a las 18:00 horas, cuando cierran los módulos.",
    "No existe un corte; el listado nominal se actualiza en tiempo real hasta 24 horas antes de la jornada."],
 c:0,ex:"Conforme a la LGIPE, el padrón electoral se cierra el 31 de enero del año de la elección. Los ciudadanos que realicen trámites después de esa fecha quedarán registrados en el padrón pero no figurarán en el listado nominal de esa elección, sino en la siguiente."},

{sa:"4.1",sal:"Formación y actualización del Registro Federal de Electores",area:"Padrón Electoral y lista nominal",cx:false,
 p:null,pt:null,mt:null,
 q:"¿Qué es el Sistema de Información del Registro Federal de Electores (SIRE) y para qué sirve?",
 o:["Es el sistema que usan los funcionarios de casilla para verificar en tiempo real si un ciudadano tiene derecho a votar.",
    "Es la plataforma tecnológica de la DERFE que integra, procesa y actualiza los datos del padrón, las listas nominales y la geografía electoral.",
    "Es el nombre del portal web donde los ciudadanos pueden consultar si ya tienen su credencial para votar lista para recoger."],
 c:1,ex:"El SIRE es la plataforma tecnológica central de la DERFE que integra los datos del padrón electoral, las listas nominales, la cartografía y los movimientos del registro. Permite la actualización permanente y la generación de los documentos electorales que se usan en cada proceso electoral."},

{sa:"4.1",sal:"Formación y actualización del Registro Federal de Electores",area:"Padrón Electoral y lista nominal",cx:true,
 p:null,pt:null,
 mt:`<div class="match-table-wrap"><table class="match-table"><thead><tr><th colspan="2">Trámite ante el RFE</th><th colspan="2">Descripción y causal</th></tr></thead><tbody>
<tr><td>1.</td><td>Inscripción</td><td>a)</td><td>Ciudadano ya inscrito cambia de municipio, entidad o domicilio dentro de su sección</td></tr>
<tr><td>2.</td><td>Cambio de domicilio</td><td>b)</td><td>Ciudadano solicita corrección de datos incorrectos (nombre, fecha de nacimiento) en su registro</td></tr>
<tr><td>3.</td><td>Corrección de datos</td><td>c)</td><td>Ciudadano que no está en el padrón solicita su incorporación al registro por primera vez</td></tr>
</tbody></table></div>`,
 q:"Relacione cada trámite ante el Registro Federal de Electores con su descripción:",
 o:["1c, 2a, 3b","1a, 2c, 3b","1b, 2a, 3c"],
 c:0,ex:"Inscripción (1c): ciudadano nuevo que solicita incorporarse al padrón por primera vez. Cambio de domicilio (2a): ciudadano ya inscrito que actualiza su dirección al mudarse. Corrección de datos (3b): ciudadano que solicita corregir información incorrecta en su registro (nombre, fecha de nacimiento, etc.)."},

// 4.2 OPERACIÓN DE MÓDULOS (1)
{sa:"4.2",sal:"Operación de módulos para la atención ciudadana",area:"Padrón Electoral y lista nominal",cx:false,
 p:null,pt:null,mt:null,
 q:"¿Cuál es el modelo de atención ciudadana que implementa la DERFE en sus módulos y qué principio lo orienta?",
 o:["Un modelo reactivo que solo atiende trámites durante los periodos de actualización del padrón, orientado a la eficiencia operativa.",
    "Un modelo de atención permanente, orientado a la accesibilidad y al servicio continuo: los módulos atienden trámites de credencialización y actualización del padrón durante todo el año.",
    "Un modelo mixto donde los módulos físicos solo operan en elecciones federales; el resto del año la atención es exclusivamente digital."],
 c:1,ex:"La DERFE opera módulos permanentes de atención ciudadana que funcionan durante todo el año (no solo en periodos electorales). El modelo está orientado a la accesibilidad y al servicio continuo, permitiendo tramitar o actualizar la credencial para votar en cualquier momento."},

// 4.3 COMISIONES DE VIGILANCIA (2)
{sa:"4.3",sal:"Comisiones de vigilancia locales y distritales",area:"Padrón Electoral y lista nominal",cx:false,
 p:null,pt:null,mt:null,
 q:"¿Cuál es la función principal de las Comisiones de Vigilancia del Registro Federal de Electores?",
 o:["Supervisar la organización logística de la jornada electoral y vigilar que las casillas se instalen correctamente.",
    "Verificar que el padrón electoral y las listas nominales sean confiables y precisas; pueden formular observaciones y solicitar correcciones.",
    "Fiscalizar el uso de los recursos públicos que el INE destina a la actualización del padrón electoral."],
 c:1,ex:"Las Comisiones de Vigilancia (local y distrital) son organismos integrados por representantes de los partidos políticos cuya función es supervisar la confiabilidad y exactitud del Padrón Electoral y las Listas Nominales, formulando observaciones y solicitando los ajustes necesarios."},

{sa:"4.3",sal:"Comisiones de vigilancia locales y distritales",area:"Padrón Electoral y lista nominal",cx:false,
 p:null,pt:null,mt:null,
 q:"¿Quiénes integran las Comisiones de Vigilancia del Registro Federal de Electores y quién las preside?",
 o:["La preside el Vocal del RFE e integran representantes de todos los partidos políticos nacionales con registro.",
    "La preside el Vocal Ejecutivo de la Junta y la integran exclusivamente consejeros electorales ciudadanos.",
    "La integran solo los partidos con representación en el Congreso y la preside un representante del TEPJF."],
 c:0,ex:"Las Comisiones de Vigilancia del RFE son presididas por el Vocal del Registro Federal de Electores (a nivel distrital) o su equivalente a nivel local. Las integran representantes de todos los partidos políticos con registro nacional, quienes tienen derecho a formular observaciones y solicitar verificaciones del padrón."},

// 4.4 CARTOGRAFÍA ELECTORAL (1)
{sa:"4.4",sal:"Cartografía electoral",area:"Padrón Electoral y lista nominal",cx:false,
 p:null,pt:null,mt:null,
 q:"¿Qué es una sección electoral y cuál es su importancia para el Registro Federal de Electores?",
 o:["Es la unidad territorial básica en que se divide cada distrito electoral; a cada sección le corresponde un listado nominal específico y, normalmente, una casilla electoral ordinaria.",
    "Es sinónimo de distrito electoral; ambos términos designan la misma demarcación territorial.",
    "Es un área geográfica que coincide siempre con los límites municipales; su función es organizar las campañas electorales por zona."],
 c:0,ex:"La sección electoral es la unidad territorial mínima de la cartografía electoral. Cada sección tiene entre 50 y 1,500 electores inscritos en el padrón, tiene su propio listado nominal y es la base para la asignación de casillas. No coincide necesariamente con límites municipales."},

// ════════════════════════════════════════════
// PREGUNTAS ADICIONALES (anexo)
// ════════════════════════════════════════════

{
    "sa": "4.1", "sal": "Actualización del RFE", "area": "Padrón Electoral y lista nominal", "cx": false,
    "p": null, "pt": null, "mt": null,
    "q": "¿Cuál es el periodo ordinario de la Campaña Anual de Actualización del Padrón Electoral?",
    "o": ["Del 1 de septiembre al 15 de diciembre.", "Del 1 de enero al 31 de marzo.", "Todo el año de manera ininterrumpida."],
    "c": 0,
    "ex": "El Art. 138, párrafo 1 de la LGIPE, establece que del 1 de septiembre al 15 de diciembre el INE llevará a cabo la campaña anual para inscripción y actualización."
  },
  {
    "sa": "4.2", "sal": "Ubicación de casillas", "area": "Proceso Electoral", "cx": false,
    "p": null, "pt": null, "mt": null,
    "q": "¿Cuál es el orden de prelación para ubicar las casillas electorales según la ley?",
    "o": ["Edificios públicos, escuelas, domicilios particulares.", "Plazas públicas, domicilios particulares, escuelas.", "Escuelas, edificios públicos, domicilios particulares."],
    "c": 2,
    "ex": "El Art. 255 de la LGIPE indica que se preferirán escuelas y edificios públicos antes que domicilios particulares."
  },
  {
    "sa": "1.2", "sal": "Mesas Directivas", "area": "Estructura del INE", "cx": false,
    "p": null, "pt": null, "mt": null,
    "q": "En elecciones concurrentes, ¿cómo se integra la Mesa Directiva de Casilla única?",
    "o": ["1 Presidente, 1 Secretario, 2 Escrutadores y 3 Suplentes.", "1 Presidente, 2 Secretarios, 3 Escrutadores y 3 Suplentes.", "1 Presidente, 2 Secretarios, 2 Escrutadores y 2 Suplentes."],
    "c": 1,
    "ex": "Según el Art. 82, párrafo 2 de la LGIPE, para elecciones concurrentes la mesa se integra por 9 ciudadanos (incluyendo 3 escrutadores)."
  },
  {
    "sa": "4.2", "sal": "Representantes", "area": "Proceso Electoral", "cx": false,
    "p": null, "pt": null, "mt": null,
    "q": "¿Cuál es el plazo límite para que los partidos registren a sus representantes ante las mesas directivas de casilla?",
    "o": ["15 días antes de la elección.", "13 días antes de la elección.", "10 días antes de la elección."],
    "c": 1,
    "ex": "El Art. 262 de la LGIPE establece que el registro debe hacerse a más tardar 13 días antes del día de la elección."
  },
  {
    "sa": "5.3", "sal": "Justicia Electoral", "area": "Sesiones y Resoluciones", "cx": false,
    "p": null, "pt": null, "mt": null,
    "q": "En el Consejo General del INE, si hay un empate en una votación, ¿qué sucede?",
    "o": ["El Consejero Presidente tiene voto de calidad.", "Se repite la votación en la siguiente sesión.", "Se desecha el proyecto automáticamente."],
    "c": 0,
    "ex": "El Reglamento de Sesiones y la LGIPE otorgan al Consejero Presidente la facultad del voto de calidad en caso de empate."
  },
  {
    "sa": "4.2", "sal": "Propaganda", "area": "Proceso Electoral", "cx": false,
    "p": null, "pt": null, "mt": null,
    "q": "¿Cuándo deben retirarse los artículos de propaganda electoral que se encuentren cerca de las casillas?",
    "o": ["7 días antes de la jornada.", "3 días antes de la jornada.", "El mismo día de la jornada por la mañana."],
    "c": 1,
    "ex": "El Art. 210 de la LGIPE indica que la propaganda debe retirarse o blanquearse al menos 3 días antes de la jornada (inicio de la veda)."
  },
  {
    "sa": "4.2", "sal": "Observación Electoral", "area": "Proceso Electoral", "cx": false,
    "p": null, "pt": null, "mt": null,
    "q": "¿Quién tiene la facultad exclusiva de acreditar a los observadores electorales?",
    "o": ["Solo el Consejo General del INE.", "Los Consejos Locales y Distritales.", "El TEPJF."],
    "c": 1,
    "ex": "El Art. 217 de la LGIPE señala que la acreditación se solicita ante la presidencia del consejo local o distrital correspondiente."
  },
  {
    "sa": "4.2", "sal": "PREP", "area": "Proceso Electoral", "cx": false,
    "p": null, "pt": null, "mt": null,
    "q": "¿Qué información utiliza el PREP para su difusión?",
    "o": ["Los datos de las actas de escrutinio y cómputo.", "Los conteos rápidos del Comité Técnico.", "Los resultados finales de los cómputos distritales."],
    "c": 0,
    "ex": "El PREP se alimenta exclusivamente de la información asentada en las actas de escrutinio y cómputo de las casillas."
  },
  {
    "sa": "4.2", "sal": "Coaliciones", "area": "Partidos Políticos", "cx": false,
    "p": null, "pt": null, "mt": null,
    "q": "¿Cuál es la fecha límite para solicitar el registro de un convenio de coalición?",
    "o": ["Hasta 30 días antes del inicio de las precampañas.", "30 días antes del registro de candidatos.", "Hasta la fecha en que inicie la etapa de precampañas."],
    "c": 2,
    "ex": "La LGPP establece que el convenio debe presentarse a más tardar el día en que inicie la etapa de precampañas."
  },
  {
    "sa": "5.3", "sal": "SCJN", "area": "Justicia Electoral", "cx": false,
    "p": null, "pt": null, "mt": null,
    "q": "De acuerdo con la reforma vigente, ¿por cuántos integrantes se compone el Pleno de la SCJN?",
    "o": ["11 Ministros y Ministras.", "9 Ministros y Ministras.", "7 Ministros y Ministras."],
    "c": 1,
    "ex": "Conforme a la reforma judicial, el Pleno de la Suprema Corte se reduce de 11 a 9 integrantes."
  }

];
