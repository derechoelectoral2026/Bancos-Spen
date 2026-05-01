/* ============================================================
   BANCO DE PREGUNTAS — Simulacro INE Vocalía RFE v2 · Nivel Intermedio
   ============================================================
   - 51 preguntas organizadas por subárea (sa)
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
   dentro del array Q, respetando comas. La rotación global del
   simulacro se encargará de barajar orden y opciones.
   ============================================================ */

const Q=[

// 1.1
{sa:"1.1",sal:"Direcciones ejecutivas",area:"Estructura del INE",cx:false,p:null,pt:null,mt:null,
 q:"¿Cuál es la función principal de la Dirección Ejecutiva del Registro Federal de Electores (DERFE)?",
 o:["Organizar logísticamente la jornada electoral: casillas, materiales y capacitación de funcionarios.",
    "Fiscalizar el origen y destino de los recursos financieros de partidos políticos.",
    "Administrar el Registro Federal de Electores: formación, depuración y actualización del padrón y listas nominales."],
 c:2,ex:"La DERFE es responsable de la formación, mantenimiento, depuración y actualización del Registro Federal de Electores, así como del padrón electoral y las listas nominales. Es el área sustantiva del cargo de Vocal del RFE."},

// 1.2
{sa:"1.2",sal:"Juntas locales y distritales ejecutivas",area:"Estructura del INE",cx:false,p:null,pt:null,mt:null,
 q:"¿Cuál es la diferencia entre una Junta Local Ejecutiva y una Junta Distrital Ejecutiva del INE?",
 o:["Son órganos equivalentes; la Local opera solo en CDMX y la Distrital en los demás estados.",
    "La Junta Local coordina y supervisa a las Juntas Distritales en la entidad; la Junta Distrital opera en cada uno de los 300 distritos electorales federales.",
    "Las Juntas Locales son temporales (solo en proceso electoral); las Distritales son permanentes."],
 c:1,ex:"La Junta Local Ejecutiva es el órgano desconcentrado permanente de nivel estatal (32 en total). Las Juntas Distritales operan en cada uno de los 300 distritos electorales federales uninominales y dependen jerárquicamente de la Junta Local."},

{sa:"1.2",sal:"Juntas locales y distritales ejecutivas",area:"Estructura del INE",cx:true,p:null,pt:null,
 mt:`<div class="match-table-wrap"><table class="match-table"><thead><tr><th colspan="2">Vocal de la Junta Distrital</th><th colspan="2">Función específica</th></tr></thead><tbody>
<tr><td>1.</td><td>Vocal Ejecutivo/a</td><td>a)</td><td>Actúa como secretario/a del Consejo Distrital; levanta actas y da fe de acuerdos</td></tr>
<tr><td>2.</td><td>Vocal Secretario/a</td><td>b)</td><td>Coordina la actualización del padrón y listas nominales en el distrito</td></tr>
<tr><td>3.</td><td>Vocal del RFE</td><td>c)</td><td>Preside la Junta y representa al INE en el distrito; responsable de la gestión operativa</td></tr>
</tbody></table></div>`,
 q:"Relacione cada vocal de la Junta Distrital con su función específica:",
 o:["1c, 2a, 3b","1a, 2c, 3b","1b, 2a, 3c"],
 c:0,ex:"El Vocal Ejecutivo/a (1c) preside la Junta. El Vocal Secretario/a (2a) actúa como secretario/a del Consejo Distrital. El Vocal del RFE (3b) coordina la actualización del padrón y listas nominales."},

// 1.3
{sa:"1.3",sal:"Consejos locales y distritales",area:"Estructura del INE",cx:false,p:null,pt:null,mt:null,
 q:"¿Cuál es la diferencia entre la Junta Distrital Ejecutiva y el Consejo Distrital en cuanto a su naturaleza?",
 o:["La Junta es el órgano permanente técnico-ejecutivo; el Consejo Distrital es el órgano colegiado de decisión que se instala temporalmente durante el proceso electoral.",
    "Son el mismo órgano con dos nombres distintos; ambos tienen igual jerarquía.",
    "El Consejo Distrital es permanente; la Junta solo opera durante la jornada y luego se disuelve."],
 c:0,ex:"La Junta Distrital Ejecutiva es permanente y técnico-ejecutiva. El Consejo Distrital es temporal: se instala en octubre del año previo e integra un Consejero Presidente y seis Consejeros Electorales Distritales con voto."},

{sa:"1.3",sal:"Consejos locales y distritales",area:"Estructura del INE",cx:false,p:null,pt:null,mt:null,
 q:"Durante las sesiones del Consejo Distrital, los representantes de partidos tienen voz pero no voto. ¿Por qué?",
 o:["Para que los partidos no conozcan los acuerdos antes de publicarse en el DOF.",
    "Para garantizar que las decisiones sean tomadas por consejeros ciudadanos imparciales, mientras los partidos expresan su posición con constancia en acta.",
    "Para que los partidos cobren prerrogativas sin rendir cuentas al INE."],
 c:1,ex:"La distinción voz-sin-voto protege la autonomía del INE: los consejeros ciudadanos deciden sin presión partidista, pero los partidos se expresan y sus posiciones quedan en acta, garantizando transparencia."},

{sa:"1.3",sal:"Consejos locales y distritales",area:"Estructura del INE",cx:true,p:null,pt:null,
 mt:`<div class="match-table-wrap"><table class="match-table"><thead><tr><th colspan="2">Órgano o cargo distrital</th><th colspan="2">Característica</th></tr></thead><tbody>
<tr><td>1.</td><td>Junta Distrital Ejecutiva</td><td>a)</td><td>Se instala en octubre del año previo; un consejero presidente + seis consejeros electorales con voto</td></tr>
<tr><td>2.</td><td>Consejo Distrital</td><td>b)</td><td>Órgano permanente presidido por el Vocal Ejecutivo; carácter técnico-operativo</td></tr>
<tr><td>3.</td><td>Vocal Secretario/a</td><td>c)</td><td>Desempeña la secretaría del Consejo Distrital durante el proceso electoral</td></tr>
</tbody></table></div>`,
 q:"Relacione cada órgano con su característica:",
 o:["1b, 2a, 3c","1a, 2b, 3c","1c, 2a, 3b"],
 c:0,ex:"Junta Distrital (1b): permanente y técnico-operativa. Consejo Distrital (2a): temporal, se instala antes de la elección. Vocal Secretario/a (3c): actúa como secretario del Consejo durante el proceso."},

// 2.1
{sa:"2.1",sal:"Actividades de preparación de la elección",area:"Proceso electoral",cx:false,p:null,pt:null,mt:null,
 q:"¿Cuál es la diferencia entre el Padrón Electoral y el Listado Nominal de Electores?",
 o:["Son sinónimos; ambos refieren exactamente a la misma base de datos.",
    "El Padrón incluye a todos los ciudadanos mayores de 18 años; el Listado solo a quienes votaron en la elección anterior.",
    "El Padrón es la base de todos los ciudadanos inscritos; el Listado Nominal contiene solo a quienes tienen credencial vigente y pueden participar en una elección específica."],
 c:2,ex:"El Padrón Electoral es el registro de todos los ciudadanos inscritos. El Listado Nominal se obtiene del Padrón y contiene solo a quienes tienen credencial vigente; es el documento que se usa en casilla para verificar el derecho a votar."},

{sa:"2.1",sal:"Actividades de preparación de la elección",area:"Proceso electoral",cx:false,
 p:"El INE publica el catálogo de casillas para que partidos y ciudadanos verifiquen la ubicación.",
 pt:"Aprobación de casillas",mt:null,
 q:"¿Qué puede hacer un partido que considere que una casilla fue aprobada en un lugar sin requisitos legales?",
 o:["Presentar inconformidad ante el Consejo Distrital dentro del plazo legal.",
    "Acudir directamente al TEPJF mediante un JRC.",
    "No puede hacer nada; la decisión es definitiva e inapelable."],
 c:0,ex:"Los partidos pueden presentar inconformidades ante el Consejo Distrital respecto a la ubicación de casillas, dentro de los plazos de la LGIPE. El Consejo debe resolver y, en su caso, modificar o ratificar."},

{sa:"2.1",sal:"Actividades de preparación de la elección",area:"Proceso electoral",cx:true,p:null,pt:null,
 mt:`<div class="match-table-wrap"><table class="match-table"><thead><tr><th colspan="2">Herramienta electoral</th><th colspan="2">Uso o propósito</th></tr></thead><tbody>
<tr><td>1.</td><td>Listado Nominal</td><td>a)</td><td>Reportar en tiempo real la instalación de casillas e incidencias</td></tr>
<tr><td>2.</td><td>SIJE</td><td>b)</td><td>Difundir datos preliminares de resultados la noche de la elección (sin valor jurídico definitivo)</td></tr>
<tr><td>3.</td><td>PREP</td><td>c)</td><td>Verificar en casilla que el ciudadano tiene credencial vigente y derecho a votar</td></tr>
</tbody></table></div>`,
 q:"Relacione cada herramienta con su uso correcto:",
 o:["1c, 2a, 3b","1a, 2b, 3c","1b, 2c, 3a"],
 c:0,ex:"Listado Nominal (1c): verificar derecho a votar. SIJE (2a): reportar incidencias en tiempo real. PREP (3b): difundir resultados preliminares sin valor jurídico definitivo."},

// 2.2
{sa:"2.2",sal:"Modalidades de voto anticipado",area:"Proceso electoral",cx:false,p:null,pt:null,mt:null,
 q:"¿Qué diferencia existe entre el voto anticipado en domicilio y las casillas especiales?",
 o:["El voto en domicilio es para discapacitados o adultos mayores de 60 años; las casillas especiales son para ciudadanos fuera de su sección el día de la jornada.",
    "El voto en domicilio es para mexicanos en el extranjero; las casillas especiales para hospitalizados.",
    "Ambas modalidades atienden al mismo perfil; solo difiere el método de entrega de la boleta."],
 c:0,ex:"El voto en domicilio atiende a ciudadanos con discapacidad o adultos mayores de 60 años que no pueden desplazarse. Las casillas especiales permiten votar a ciudadanos fuera de su sección por trabajo o tránsito el día de la jornada."},

{sa:"2.2",sal:"Modalidades de voto anticipado",area:"Proceso electoral",cx:true,p:null,pt:null,
 mt:`<div class="match-table-wrap"><table class="match-table"><thead><tr><th colspan="2">Modalidad de voto</th><th colspan="2">Perfil del ciudadano</th></tr></thead><tbody>
<tr><td>1.</td><td>Voto anticipado en domicilio</td><td>a)</td><td>Ciudadano fuera de su sección el día de la jornada (tránsito, trabajo)</td></tr>
<tr><td>2.</td><td>Casilla especial</td><td>b)</td><td>Mexicano residente en el extranjero inscrito en la LNERE</td></tr>
<tr><td>3.</td><td>Voto desde el extranjero</td><td>c)</td><td>Ciudadano con discapacidad o adulto mayor de 60 años que no puede desplazarse</td></tr>
</tbody></table></div>`,
 q:"Relacione cada modalidad con el perfil del ciudadano que puede utilizarla:",
 o:["1c, 2a, 3b","1a, 2c, 3b","1b, 2a, 3c"],
 c:0,ex:"Voto en domicilio (1c): discapacidad o >60 años. Casilla especial (2a): fuera de sección por trabajo/tránsito, límite 300 votos. Voto extranjero (3b): mexicanos en el exterior inscritos en la LNERE."},

{sa:"2.2",sal:"Modalidades de voto anticipado",area:"Proceso electoral",cx:false,p:null,pt:null,mt:null,
 q:"¿Cuál es el límite de votos en una casilla especial y por qué existe?",
 o:["500 votos, para evitar largas filas.",
    "300 votos, para garantizar un escrutinio en tiempo razonable y mantener el control de boletas especiales.",
    "200 votos, para equilibrar la carga entre casillas del distrito."],
 c:1,ex:"Cada casilla especial tiene límite de 300 votos por elección. Una vez agotado, no recibe más votantes. El límite garantiza la integridad del escrutinio y el control del material electoral."},

// 2.3
{sa:"2.3",sal:"Proceso electoral del Poder Judicial de la Federación",area:"Proceso electoral",cx:false,
 p:"La reforma judicial de 2024 implicó que por primera vez los cargos del PJF serían electos por voto ciudadano directo.",
 pt:"Elecciones del PJF — reforma 2024",mt:null,
 q:"¿Cuál es el papel del INE en las elecciones de integrantes del Poder Judicial Federal?",
 o:["El INE organiza íntegramente: convocatoria, registro, logística, cómputos y declaración de validez.",
    "El INE solo presta apoyo logístico; la organización integral la conduce el Comité de Evaluación del PJF.",
    "El INE únicamente verifica la identidad de los candidatos propuestos por los Poderes de la Unión."],
 c:0,ex:"Tras la reforma de 2024, el INE asumió la organización completa de las elecciones judiciales con el mismo marco normativo que las elecciones federales ordinarias."},

// 2.4
{sa:"2.4",sal:"Atribuciones especiales del INE",area:"Proceso electoral",cx:false,p:null,pt:null,mt:null,
 q:"¿En qué se distingue la 'atracción' de la 'delegación' del INE respecto a los OPLEs?",
 o:["Son sinónimas; en ambos el INE reemplaza permanentemente al OPLE.",
    "En la delegación el INE transfiere permanentemente sus funciones al OPLE; en la atracción el OPLE transfiere permanentemente sus funciones al INE.",
    "En la atracción el INE asume la organización de una elección local del OPLE; en la delegación el INE encomienda al OPLE tareas de elecciones federales bajo su supervisión."],
 c:2,ex:"Atracción: OPLE → INE (INE toma control de elección local). Delegación: INE → OPLE (INE encomienda tareas federales al OPLE). En ambos casos el INE mantiene responsabilidad final."},

{sa:"2.4",sal:"Atribuciones especiales del INE",area:"Proceso electoral",cx:true,p:null,pt:null,
 mt:`<div class="match-table-wrap"><table class="match-table"><thead><tr><th colspan="2">Atribución especial del INE</th><th colspan="2">Descripción</th></tr></thead><tbody>
<tr><td>1.</td><td>Atracción</td><td>a)</td><td>INE → OPLE: encomienda tareas de elecciones federales al OPLE bajo supervisión del INE</td></tr>
<tr><td>2.</td><td>Delegación</td><td>b)</td><td>Fiscaliza origen, monto y destino de todos los recursos de partidos y candidatos</td></tr>
<tr><td>3.</td><td>Fiscalización</td><td>c)</td><td>OPLE → INE: el INE asume la organización de una elección local del OPLE</td></tr>
</tbody></table></div>`,
 q:"Relacione cada atribución especial del INE con su descripción:",
 o:["1c, 2a, 3b","1a, 2c, 3b","1b, 2a, 3c"],
 c:0,ex:"Atracción (1c): INE toma control de elecciones locales. Delegación (2a): INE encomienda tareas federales al OPLE. Fiscalización (3b): INE revisa recursos de partidos y candidatos."},

{sa:"2.4",sal:"Atribuciones especiales del INE",area:"Proceso electoral",cx:false,p:null,pt:null,mt:null,
 q:"¿Qué son los tiempos oficiales en radio y televisión que administra el INE?",
 o:["El tiempo que el INE compra para difundir propaganda del gobierno federal.",
    "Los espacios en radio y TV que el Estado tiene por ley y que el INE distribuye gratuitamente entre partidos, candidatos y la propia autoridad electoral.",
    "Los minutos de cobertura informativa que los medios deben dar obligatoriamente a los partidos."],
 c:1,ex:"El Art. 41 CPEUM otorga al Estado tiempos en radio y TV. El INE los administra y distribuye entre partidos, candidatos e instituto para propaganda electoral, prohibiéndose la contratación privada adicional durante campañas."},

// 2.5
{sa:"2.5",sal:"Actividades del día de la jornada electoral",area:"Proceso electoral",cx:false,p:null,pt:null,mt:null,
 q:"¿Qué acciones debe realizar el Presidente de casilla antes de las 8:00 horas?",
 o:["Verificar materiales, instalar mampara, firmar el acta de instalación con funcionarios presentes y declarar abierta la votación.",
    "Solo colocar la urna y esperar a que lleguen los demás funcionarios.",
    "Abrir el paquete, contar individualmente todas las boletas y separarlas por tipo de elección."],
 c:0,ex:"El Presidente debe: verificar presencia de al menos dos funcionarios más, abrir el paquete, instalar mampara y urnas, firmar el acta de instalación y declarar abierta la votación a las 8:00 horas."},

{sa:"2.5",sal:"Actividades del día de la jornada electoral",area:"Proceso electoral",cx:true,p:null,pt:null,
 mt:`<div class="match-table-wrap"><table class="match-table"><thead><tr><th colspan="2">Tipo de voto</th><th colspan="2">Definición y tratamiento en escrutinio</th></tr></thead><tbody>
<tr><td>1.</td><td>Voto válido</td><td>a)</td><td>Un representante lo cuestiona; se separa y resuelve el Consejo Distrital</td></tr>
<tr><td>2.</td><td>Voto nulo</td><td>b)</td><td>Voluntad inequívoca aunque la marca no esté exactamente en el recuadro</td></tr>
<tr><td>3.</td><td>Voto impugnado</td><td>c)</td><td>Marcas para dos o más partidos, o sin marca; se contabiliza separado</td></tr>
</tbody></table></div>`,
 q:"Relacione cada tipo de voto con su definición y tratamiento:",
 o:["1b, 2c, 3a","1a, 2b, 3c","1c, 2a, 3b"],
 c:0,ex:"Voto válido (1b): intención inequívoca. Voto nulo (2c): marcas múltiples o sin marca. Voto impugnado (3a): representante lo cuestiona y el Consejo Distrital resuelve."},

{sa:"2.5",sal:"Actividades del día de la jornada electoral",area:"Proceso electoral",cx:false,p:null,pt:null,mt:null,
 q:"¿En qué casos puede un ciudadano ser rechazado en la casilla?",
 o:["Si llega después de las 18:00 horas y la fila ya se disolvió.",
    "Si no porta su credencial, su nombre no aparece en el listado nominal, o en casilla especial ya se agotaron los 300 votos.",
    "Si el funcionario considera subjetivamente que está bajo efectos del alcohol."],
 c:1,ex:"Un ciudadano puede ser rechazado si: no presenta credencial, su nombre no aparece en el listado nominal o en casilla especial ya se alcanzó el límite de 300 votos. No puede rechazarse por criterios subjetivos."},

{sa:"2.5",sal:"Actividades del día de la jornada electoral",area:"Proceso electoral",cx:false,p:null,pt:null,mt:null,
 q:"¿Qué debe hacer el Presidente de casilla ante un incidente de alteración del orden?",
 o:["Suspender definitivamente la votación e informar al Consejo Distrital.",
    "Solicitar el auxilio de la fuerza pública, registrar el incidente en el acta y continuar la votación al restablecerse la normalidad.",
    "Continuar sin documentar el incidente para no generar alarma."],
 c:1,ex:"El Presidente solicita auxilio de la fuerza pública, documenta en el acta de incidentes y, restablecido el orden, continúa la votación. Solo suspende definitivamente en casos extremos que impidan garantizar la seguridad."},

{sa:"2.5",sal:"Actividades del día de la jornada electoral",area:"Proceso electoral",cx:false,p:null,pt:null,mt:null,
 q:"¿Qué documento acredita el cierre formal de la votación?",
 o:["El acta de escrutinio y cómputo.",
    "El acta de cierre de votación, firmada por los funcionarios y representantes de partidos presentes.",
    "El PREP, que al generar resultados preliminares da por concluida la jornada."],
 c:1,ex:"El cierre formal se documenta en el acta de cierre de votación, firmada por funcionarios y representantes. Después se procede al escrutinio. El PREP es un sistema de resultados preliminares, no un documento de cierre."},

{sa:"2.5",sal:"Actividades del día de la jornada electoral",area:"Proceso electoral",cx:false,p:null,pt:null,mt:null,
 q:"¿Qué sucede si a las 8:00 horas solo se presenta el Presidente de casilla sin ningún otro funcionario?",
 o:["Debe instalar la casilla de forma unipersonal para no retrasar el proceso.",
    "Debe esperar hasta las 8:30 h; si no llegan más funcionarios, la casilla se declara no instalada.",
    "Puede designar a ciudadanos presentes en la fila como funcionarios suplentes para integrar la Mesa Directiva."],
 c:2,ex:"Cuando no se presentan funcionarios suficientes, el Presidente puede integrar la Mesa con ciudadanos presentes en la fila, en el orden de la LGIPE. Esta medida garantiza que la casilla se instale y la votación no se suspenda."},

{sa:"2.5",sal:"Actividades del día de la jornada electoral",area:"Proceso electoral",cx:false,p:null,pt:null,mt:null,
 q:"¿Cuál es el procedimiento si al abrir una urna se encuentran boletas de una elección diferente?",
 o:["Separar las boletas por tipo de elección, contar cada grupo por separado y registrar el incidente en el acta.",
    "Anular automáticamente todos los votos de esa urna.",
    "Mezclar todas las boletas y contarlas como válidas para la elección de esa urna."],
 c:0,ex:"Se separan las boletas, se registra el incidente en el acta y se continúa el escrutinio contando solo las boletas que corresponden. Las boletas ajenas se registran como irregularidad pero no invalidan automáticamente el escrutinio."},

{sa:"2.5",sal:"Actividades del día de la jornada electoral",area:"Proceso electoral",cx:false,p:null,pt:null,mt:null,
 q:"¿Qué es el paquete electoral y cuál es su destino tras el escrutinio?",
 o:["El conjunto de materiales (boletas, listado nominal, actas) que se integra al cierre y se entrega al Consejo Distrital.",
    "La bolsa con boletas sobrantes que se destruye en la propia casilla.",
    "El informe que el Presidente envía digitalmente al Consejo General del INE."],
 c:0,ex:"El paquete electoral contiene toda la documentación de la casilla. Sellado y firmado, el Presidente lo entrega personalmente al Consejo Distrital, donde queda bajo custodia para el cómputo distrital."},

// 3.1
{sa:"3.1",sal:"Delitos en materia electoral",area:"Justicia electoral",cx:false,
 p:"La LGMDE tipifica conductas que pueden cometer distintos actores durante el proceso electoral.",
 pt:"Responsabilidad penal electoral",mt:null,
 q:"Un vocal del RFE filtra información del padrón a un partido antes de su publicación oficial. ¿Qué responsabilidad enfrenta?",
 o:["Solo responsabilidad administrativa ante el INE con posible destitución.",
    "Responsabilidad civil únicamente por daño patrimonial.",
    "Responsabilidad penal ante la FISEL-FGR y administrativa ante el INE; ambas independientes y pueden concurrir."],
 c:2,ex:"Filtrar información del padrón es delito electoral tipificado en la LGMDE. El funcionario enfrenta: 1) responsabilidad penal ante la FISEL (FGR), y 2) responsabilidad administrativa ante el INE. Ambas independientes y pueden concurrir."},

// 3.2
{sa:"3.2",sal:"Medios de impugnación en materia electoral",area:"Justicia electoral",cx:true,p:null,pt:null,
 mt:`<div class="match-table-wrap"><table class="match-table"><thead><tr><th colspan="2">Medio de impugnación</th><th colspan="2">Objeto y característica clave</th></tr></thead><tbody>
<tr><td>1.</td><td>RIN</td><td>a)</td><td>Impugna resultados en actas de cómputo distrital; plazo de 4 días naturales</td></tr>
<tr><td>2.</td><td>JIN</td><td>b)</td><td>Protege derechos político-electorales individuales del ciudadano</td></tr>
<tr><td>3.</td><td>JDC</td><td>c)</td><td>Impugna actos del Consejo Distrital o Local durante la preparación</td></tr>
</tbody></table></div>`,
 q:"Relacione cada medio de impugnación con su objeto y característica:",
 o:["1c, 2a, 3b","1a, 2c, 3b","1b, 2a, 3c"],
 c:0,ex:"RIN (1c): impugna actos del Consejo Distrital durante la preparación. JIN (2a): impugna resultados del cómputo distrital, plazo 4 días. JDC (3b): protege derechos político-electorales individuales."},

{sa:"3.2",sal:"Medios de impugnación en materia electoral",area:"Justicia electoral",cx:false,p:null,pt:null,mt:null,
 q:"¿Cuál es el plazo para interponer un Juicio de Inconformidad (JIN)?",
 o:["Cuatro días naturales contados a partir del día siguiente a la conclusión del cómputo distrital.",
    "Diez días hábiles a partir de la publicación en el DOF.",
    "Treinta días naturales a partir de la jornada electoral."],
 c:0,ex:"Conforme al Art. 8 LGSMIME, el plazo es de cuatro días naturales desde el día siguiente al que se tenga conocimiento del acto. Para el JIN corre desde la conclusión del cómputo distrital."},

// 3.3
{sa:"3.3",sal:"Violencia política contra las mujeres en razón de género",area:"Justicia electoral",cx:false,p:null,pt:null,mt:null,
 q:"¿Qué elementos deben concurrir para que un acto se considere VPMRG?",
 o:["Que sea un acto físico durante una campaña electoral activa.",
    "Que sea cometido únicamente por hombres contra candidatas.",
    "Que la acción u omisión esté basada en el género y tenga por objeto menoscabar el ejercicio de derechos político-electorales."],
 c:2,ex:"La VPMRG requiere: 1) motivación de género, y 2) objeto o resultado de afectar derechos político-electorales de mujeres. Puede ser cometida por cualquier persona y no se limita al periodo de campaña."},

{sa:"3.3",sal:"Violencia política contra las mujeres en razón de género",area:"Justicia electoral",cx:false,
 p:"Una presidenta municipal recibe mensajes amenazantes para renunciar. Sus colaboradores varones no los reciben.",
 pt:"Caso de VPMRG",mt:null,
 q:"¿Este caso puede constituir VPMRG?",
 o:["Sí, porque la presión mediante amenazas dirigida a ella por su género tiene por objeto impedir el ejercicio de su cargo.",
    "No, porque la VPMRG solo aplica durante la campaña, no cuando ya ejerce el cargo.",
    "No, porque al ser anónimos se requiere identificar al agresor antes de calificar la conducta."],
 c:0,ex:"La VPMRG protege también a mujeres que ejercen cargos políticos. Que solo ella reciba amenazas (no sus colaboradores varones) indica el componente de género. La presión para renunciar tiene por objeto impedir el ejercicio de su mandato."},

{sa:"3.3",sal:"Violencia política contra las mujeres en razón de género",area:"Justicia electoral",cx:false,p:null,pt:null,mt:null,
 q:"¿Qué protocolo deben tener los partidos para atender la VPMRG y quién supervisa su cumplimiento?",
 o:["Los partidos no están obligados; basta con respetar la paridad de género en candidaturas.",
    "Los partidos deben tener protocolo para prevenir, atender y sancionar la VPMRG; el INE supervisa y puede sancionar su ausencia o incumplimiento.",
    "El protocolo es voluntario y solo aplica a partidos con más de diez legisladoras electas."],
 c:1,ex:"La LGPP y la LGIPE obligan a todos los partidos a incluir protocolos contra la VPMRG en sus estatutos. El INE verifica su existencia y aplicación, pudiendo derivar en amonestaciones o multas."},

{sa:"3.3",sal:"Violencia política contra las mujeres en razón de género",area:"Justicia electoral",cx:true,p:null,pt:null,
 mt:`<div class="match-table-wrap"><table class="match-table"><thead><tr><th colspan="2">Vía de denuncia VPMRG</th><th colspan="2">Consecuencia y autoridad</th></tr></thead><tbody>
<tr><td>1.</td><td>Queja electoral ante el INE</td><td>a)</td><td>Pena privativa de libertad si es delito electoral; resuelve la FISEL-FGR</td></tr>
<tr><td>2.</td><td>Denuncia penal ante la FISEL</td><td>b)</td><td>Sanción administrativa: multa e inhabilitación; resuelve el INE o TEPJF</td></tr>
<tr><td>3.</td><td>Ambas vías simultáneamente</td><td>c)</td><td>Posible y legal; cada vía corre independiente y las consecuencias se acumulan</td></tr>
</tbody></table></div>`,
 q:"Relacione cada vía de denuncia por VPMRG con su consecuencia:",
 o:["1b, 2a, 3c","1a, 2b, 3c","1c, 2a, 3b"],
 c:0,ex:"Queja INE (1b): sanciones administrativas. Denuncia FISEL (2a): pena privativa de libertad. Ambas vías (3c): pueden usarse simultáneamente de forma independiente."},

// 4.1
{sa:"4.1",sal:"Formación y actualización del Registro Federal de Electores",area:"Padrón Electoral y lista nominal",cx:false,p:null,pt:null,mt:null,
 q:"¿Qué información integra el Registro Federal de Electores para cada ciudadano?",
 o:["Solo nombre, CURP y fotografía.",
    "Nombre, domicilio, datos biométricos (fotografía, firma, huellas), CURP, folio y clave de elector.",
    "Solo nombre, domicilio y número de credencial; los biométricos se resguardan separados."],
 c:1,ex:"El RFE integra: nombre completo, domicilio, datos biométricos (foto, firma, huellas dactilares), CURP, folio y clave de elector. Permite identificar con seguridad a cada ciudadano y generar las listas nominales."},

{sa:"4.1",sal:"Formación y actualización del Registro Federal de Electores",area:"Padrón Electoral y lista nominal",cx:false,p:null,pt:null,mt:null,
 q:"¿Cuándo puede un ciudadano tramitar su credencial para votar por primera vez?",
 o:["A los 18 años cumplidos, el mismo día de la elección.",
    "A partir de los 17 años y 10 meses de edad.",
    "Solo durante los periodos de actualización del padrón entre octubre y enero."],
 c:1,ex:"El trámite puede iniciarse desde los 17 años y 10 meses para que la credencial esté lista al cumplir 18 años. Los módulos permanentes atienden este trámite de forma continua, no solo en periodos electorales."},

{sa:"4.1",sal:"Formación y actualización del Registro Federal de Electores",area:"Padrón Electoral y lista nominal",cx:false,
 p:"La depuración del padrón es un proceso sistemático de la DERFE para mantener la confiabilidad del registro.",
 pt:"Depuración del padrón",mt:null,
 q:"¿Qué causas generan la baja de un ciudadano del padrón electoral?",
 o:["Solo el fallecimiento; los demás supuestos requieren resolución judicial previa.",
    "El fallecimiento, la pérdida de la ciudadanía por sentencia firme, o solicitud expresa del ciudadano.",
    "La mudanza, el vencimiento de la credencial o no haber sufragado en dos elecciones consecutivas."],
 c:1,ex:"Las causas de baja son: fallecimiento (notificado por Registro Civil o RENAPO), pérdida de ciudadanía por resolución judicial y solicitud expresa del ciudadano. La mudanza solo genera actualización de domicilio, no baja."},

{sa:"4.1",sal:"Formación y actualización del Registro Federal de Electores",area:"Padrón Electoral y lista nominal",cx:false,p:null,pt:null,mt:null,
 q:"¿Con qué periodicidad se corta el Padrón Electoral para el Listado Nominal de cada elección?",
 o:["El 31 de enero del año de la elección; los trámites después de esa fecha no se reflejan en esa elección.",
    "El mismo día de la jornada a las 18:00 horas.",
    "No existe corte; el listado se actualiza en tiempo real hasta 24 horas antes."],
 c:0,ex:"El padrón se cierra el 31 de enero del año de la elección. Los ciudadanos que tramiten después quedan en el padrón pero no en el listado nominal de esa elección, sino en la siguiente."},

{sa:"4.1",sal:"Formación y actualización del Registro Federal de Electores",area:"Padrón Electoral y lista nominal",cx:false,p:null,pt:null,mt:null,
 q:"¿Qué es el SIRE y para qué sirve?",
 o:["Sistema usado por funcionarios de casilla para verificar en tiempo real el derecho a votar.",
    "Plataforma tecnológica de la DERFE que integra, procesa y actualiza los datos del padrón, listas nominales y geografía electoral.",
    "Portal web donde los ciudadanos consultan si su credencial está lista para recoger."],
 c:1,ex:"El SIRE es la plataforma tecnológica central de la DERFE que integra padrón, listas nominales, cartografía y movimientos del registro. Permite la actualización permanente y la generación de documentos electorales."},

{sa:"4.1",sal:"Formación y actualización del Registro Federal de Electores",area:"Padrón Electoral y lista nominal",cx:true,p:null,pt:null,
 mt:`<div class="match-table-wrap"><table class="match-table"><thead><tr><th colspan="2">Trámite ante el RFE</th><th colspan="2">Descripción</th></tr></thead><tbody>
<tr><td>1.</td><td>Inscripción</td><td>a)</td><td>Ciudadano inscrito cambia de municipio, entidad o domicilio</td></tr>
<tr><td>2.</td><td>Cambio de domicilio</td><td>b)</td><td>Ciudadano solicita corrección de datos incorrectos en su registro</td></tr>
<tr><td>3.</td><td>Corrección de datos</td><td>c)</td><td>Ciudadano no inscrito solicita su incorporación por primera vez</td></tr>
</tbody></table></div>`,
 q:"Relacione cada trámite ante el RFE con su descripción:",
 o:["1c, 2a, 3b","1a, 2c, 3b","1b, 2a, 3c"],
 c:0,ex:"Inscripción (1c): incorporarse al padrón por primera vez. Cambio de domicilio (2a): actualizar dirección. Corrección de datos (3b): corregir información incorrecta (nombre, fecha de nacimiento)."},

// 4.2
{sa:"4.2",sal:"Operación de módulos para la atención ciudadana",area:"Padrón Electoral y lista nominal",cx:false,p:null,pt:null,mt:null,
 q:"¿Cuál es el modelo de atención ciudadana de la DERFE y qué principio lo orienta?",
 o:["Modelo reactivo solo durante periodos de actualización, orientado a la eficiencia operativa.",
    "Modelo permanente, orientado a la accesibilidad y servicio continuo durante todo el año.",
    "Modelo mixto: módulos físicos solo en elecciones federales; el resto del año solo atención digital."],
 c:1,ex:"La DERFE opera módulos permanentes durante todo el año. El modelo está orientado a la accesibilidad y servicio continuo, permitiendo tramitar o actualizar la credencial en cualquier momento."},

// 4.3
{sa:"4.3",sal:"Comisiones de vigilancia locales y distritales",area:"Padrón Electoral y lista nominal",cx:false,p:null,pt:null,mt:null,
 q:"¿Cuál es la función principal de las Comisiones de Vigilancia del RFE?",
 o:["Supervisar la logística de la jornada electoral y vigilar la instalación correcta de casillas.",
    "Verificar la confiabilidad del padrón y las listas nominales; pueden formular observaciones y solicitar correcciones.",
    "Fiscalizar los recursos que el INE destina a la actualización del padrón."],
 c:1,ex:"Las Comisiones de Vigilancia (local y distrital) están integradas por representantes de los partidos y supervisan la confiabilidad y exactitud del Padrón y las Listas Nominales, formulando observaciones y solicitando ajustes."},

{sa:"4.3",sal:"Comisiones de vigilancia locales y distritales",area:"Padrón Electoral y lista nominal",cx:false,p:null,pt:null,mt:null,
 q:"¿Quiénes integran las Comisiones de Vigilancia del RFE y quién las preside?",
 o:["Las preside el Vocal del RFE e integran representantes de todos los partidos con registro nacional.",
    "Las preside el Vocal Ejecutivo e integran exclusivamente consejeros electorales ciudadanos.",
    "Solo partidos con representación en el Congreso y las preside un representante del TEPJF."],
 c:0,ex:"Las preside el Vocal del RFE (a nivel distrital). Las integran representantes de todos los partidos con registro nacional, quienes pueden formular observaciones y solicitar verificaciones del padrón."},

// 4.4
{sa:"4.4",sal:"Cartografía electoral",area:"Padrón Electoral y lista nominal",cx:false,p:null,pt:null,mt:null,
 q:"¿Qué es una sección electoral y cuál es su importancia para el RFE?",
 o:["Es la unidad territorial básica de cada distrito; a cada sección le corresponde un listado nominal específico y normalmente una casilla ordinaria.",
    "Es sinónimo de distrito electoral; ambos designan la misma demarcación.",
    "Área geográfica que coincide con límites municipales; organiza las campañas electorales por zona."],
 c:0,ex:"La sección electoral es la unidad territorial mínima. Cada sección tiene entre 50 y 1,500 electores, su propio listado nominal y es la base para asignar casillas. No coincide necesariamente con límites municipales."},

// ════════════════════════════════════════════
// PREGUNTAS ADICIONALES — RFE detallado (10)
// ════════════════════════════════════════════

// 4.1 — Fechas límite de actualización
{sa:"4.1",sal:"Formación y actualización del Registro Federal de Electores",area:"Padrón Electoral y lista nominal",cx:false,p:null,pt:null,mt:null,
 q:"¿Cuál es la fecha límite anual para que los ciudadanos soliciten su inscripción al Padrón Electoral o la actualización de sus datos durante el año previo a la celebración de una elección federal ordinaria?",
 o:["31 de enero.",
    "15 de diciembre.",
    "El último día de febrero."],
 c:1,ex:"Art. 138.1 de la LGIPE. La campaña intensa de actualización concluye el 15 de diciembre del año previo a la elección."},

// 4.1 — Diferencia entre instrumentos registrales
{sa:"4.1",sal:"Formación y actualización del Registro Federal de Electores",area:"Padrón Electoral y lista nominal",cx:false,p:null,pt:null,mt:null,
 q:"¿Cuál es la diferencia técnica fundamental entre el Padrón Electoral y la Lista Nominal de Electores?",
 o:["El Padrón Electoral incluye a todos los ciudadanos que solicitaron su inscripción, mientras que la Lista Nominal solo contiene a quienes efectivamente recogieron su Credencial para Votar vigente.",
    "La Lista Nominal es el registro histórico de bajas y defunciones, y el Padrón Electoral es el documento usado en las casillas.",
    "El Padrón Electoral es de carácter público, mientras que la Lista Nominal está reservada exclusivamente para los partidos políticos."],
 c:0,ex:"Arts. 128 y 147 de la LGIPE. La Lista Nominal exige la obtención de la credencial para estar habilitado para votar."},

// 4.3 — Integración de Comisiones de Vigilancia
{sa:"4.3",sal:"Comisiones de vigilancia locales y distritales",area:"Padrón Electoral y lista nominal",cx:false,p:null,pt:null,mt:null,
 q:"¿Cómo están integradas las Comisiones de Vigilancia del Registro Federal de Electores (Nacional, Locales y Distritales)?",
 o:["Exclusivamente por Consejeros Electorales del INE y el Secretario Ejecutivo.",
    "Por el Vocal del RFE correspondiente (quien la preside), un representante por cada partido político nacional y un secretario.",
    "Por representantes del INE, del Tribunal Electoral y observadores ciudadanos."],
 c:1,ex:"Art. 158 de la LGIPE. Asegura la participación y vigilancia permanente de los partidos políticos en el RFE."},

// 4.2 — Reposición de Credencial sin cambio de datos
{sa:"4.2",sal:"Operación de módulos para la atención ciudadana",area:"Padrón Electoral y lista nominal",cx:false,p:null,pt:null,mt:null,
 q:"Si un ciudadano extravía su Credencial para Votar, pero no requiere ninguna modificación en sus datos personales o de domicilio, ¿hasta qué fecha puede solicitar una reposición en el año de la jornada electoral?",
 o:["Hasta 20 días antes de la elección.",
    "A más tardar el 31 de enero.",
    "A más tardar el último día de febrero."],
 c:2,ex:"Art. 147.1 de la LGIPE. Los trámites de reposición sin cambio de datos tienen como límite el último día de febrero."},

// 3.2 — JDC ante negativa de credencial
{sa:"3.2",sal:"Medios de impugnación en materia electoral",area:"Justicia electoral",cx:false,p:null,pt:null,mt:null,
 q:"¿Qué recurso jurisdiccional procede cuando a un ciudadano, habiendo cumplido con todos los requisitos y plazos, la Dirección Ejecutiva del RFE le niega la entrega de su Credencial para Votar?",
 o:["Juicio de Inconformidad (JIN).",
    "Juicio para la Protección de los Derechos Político-Electorales del Ciudadano (JDC).",
    "Recurso de Revisión (RR)."],
 c:1,ex:"Art. 143 de la LGIPE y Ley General del Sistema de Medios de Impugnación. Procede la instancia administrativa y, posteriormente, el JDC ante el TEPJF."},

// 4.1 — SIIRFE
{sa:"4.1",sal:"Formación y actualización del Registro Federal de Electores",area:"Padrón Electoral y lista nominal",cx:false,p:null,pt:null,mt:null,
 q:"¿Cuál es la plataforma tecnológica central de la DERFE que integra, procesa y actualiza sistemáticamente los datos del Padrón Electoral, las Listas Nominales y la cartografía electoral?",
 o:["Sistema Integral de Información del Registro Federal de Electores (SIIRFE).",
    "Sistema de Información Geográfica Electoral (SIGE).",
    "Red Nacional de Electores y Geografía (RNEG)."],
 c:0,ex:"Manuales de Operación de la DERFE. Es la herramienta fundamental que garantiza la actualización permanente y generación de documentos."},

// 4.4 — Aprobación del marco geográfico electoral
{sa:"4.4",sal:"Cartografía electoral",area:"Padrón Electoral y lista nominal",cx:false,p:null,pt:null,mt:null,
 q:"¿Qué órgano del INE tiene la atribución final de aprobar el marco geográfico electoral, que comprende la división del territorio en demarcaciones y distritos electorales?",
 o:["La Dirección Ejecutiva del Registro Federal de Electores.",
    "La Junta General Ejecutiva.",
    "El Consejo General del INE."],
 c:2,ex:"Art. 44, inciso l) de la LGIPE. El CG aprueba la distritación con base en los trabajos y propuestas técnicas de la DERFE y la JGE."},

// 4.2 — Vigencia de la Credencial
{sa:"4.2",sal:"Operación de módulos para la atención ciudadana",area:"Padrón Electoral y lista nominal",cx:false,p:null,pt:null,mt:null,
 q:"Conforme a la legislación electoral, ¿cuál es el periodo de vigencia máximo de la Credencial para Votar a partir del año de su emisión?",
 o:["6 años.",
    "10 años.",
    "12 años."],
 c:1,ex:"Art. 156.5 de la LGIPE. Pierden vigencia el 1 de enero del año siguiente al que se cumplan los 10 años."},

// 4.1 — Confidencialidad de datos registrales
{sa:"4.1",sal:"Formación y actualización del Registro Federal de Electores",area:"Padrón Electoral y lista nominal",cx:false,p:null,pt:null,mt:null,
 q:"¿Cuál es la naturaleza jurídica de los datos personales proporcionados por los ciudadanos al Padrón Electoral?",
 o:["Son estrictamente confidenciales y no pueden comunicarse o darse a conocer, salvo en juicios, recursos o por mandato de juez competente.",
    "Son públicos para fines de transparencia y cualquier ciudadano puede solicitar una copia en los módulos.",
    "Son reservados temporalmente, pero se vuelven de dominio público una vez pasada la jornada electoral."],
 c:0,ex:"Art. 126.3 de la LGIPE. Destaca el principio de máxima confidencialidad de los datos biométricos y personales."},

// 4.1 — Verificación Nacional Muestral
{sa:"4.1",sal:"Formación y actualización del Registro Federal de Electores",area:"Padrón Electoral y lista nominal",cx:false,p:null,pt:null,mt:null,
 q:"¿Cómo se denomina al procedimiento técnico y de campo que ordena la LGIPE para verificar la cobertura, calidad y actualización del Padrón Electoral a nivel nacional?",
 o:["Auditoría Externa de Partidos.",
    "Censo Electoral Nacional.",
    "Verificación Nacional Muestral."],
 c:2,ex:"Lineamientos del RFE y acuerdos del Consejo General. Es el mecanismo probabilístico para asegurar la consistencia y cobertura del padrón y lista nominal."}

];
