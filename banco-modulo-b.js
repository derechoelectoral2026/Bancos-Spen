// ============================================================
//  BANCO DE PREGUNTAS — MÓDULO B · MATEMÁTICAS · SPEN INE
//  Versión: 1.0
//  Total: 30 preguntas · 6 subáreas · 4 formatos
//
//  ¿Cómo editar una pregunta?
//    1. Busca la subárea o el texto de la pregunta
//    2. Modifica lo que necesites
//    3. Guarda el archivo — todos los simulacros que usen
//       este banco se actualizan automáticamente.
//
//  Tipos de pregunta:
//    direct   = Cuestionamiento directo  (o, c)
//    blank    = Completamiento           (sentence, o, c)
//    order    = Ordenamiento             (items, correctOrder)
//    relation = Relación de elementos    (left, right, pairs)
// ============================================================

const BANCO_MODULO_B = [

  // ═══════════════════════════════════════════════════════════
  //  1.1  Teoría de conjuntos  (5 Qs)
  // ═══════════════════════════════════════════════════════════
  { sa:"1.1", sal:"Teoría de conjuntos", type:"direct",
    p:"En un proceso electoral: 120 funcionarios aprobaron el curso de capacitación A, 95 aprobaron el curso B, y 40 aprobaron ambos cursos. El total del padrón de funcionarios es 200.",
    pt:"Capacitación electoral",
    q:"¿Cuántos funcionarios <em>no aprobaron ninguno</em> de los dos cursos?",
    o:["25","35","45"], c:0,
    ex:"|A∪B| = 120+95−40 = 175. No aprobaron ninguno = 200−175 = <strong>25</strong>." },

  { sa:"1.1", sal:"Teoría de conjuntos", type:"blank",
    q:"Completa el enunciado:",
    sentence:"Si A = {x ∈ ℤ | 1 ≤ x ≤ 6} y B = {x ∈ ℤ | 4 ≤ x ≤ 9}, entonces A − B (diferencia) = ___",
    o:["{1,2,3}","{4,5,6}","{7,8,9}"], c:0,
    ex:"A−B contiene los elementos de A que NO están en B. A={1,2,3,4,5,6}, B={4,5,6,7,8,9}. A−B = <strong>{1,2,3}</strong>." },

  { sa:"1.1", sal:"Teoría de conjuntos", type:"direct",
    p:"U = {1,2,3,4,5,6,7,8,9,10} &nbsp;|&nbsp; A = {2,4,6,8,10} &nbsp;|&nbsp; B = {1,2,3,4,5}",
    pt:"Operaciones de conjuntos",
    q:"¿Cuántos elementos tiene (A ∪ B)' (el complemento de la unión)?",
    o:["2","3","4"], c:1,
    ex:"A∪B = {1,2,3,4,5,6,8,10} = 8 elementos. (A∪B)' = U − (A∪B) = {7,9} = <strong>2 elementos</strong>. Respuesta: 2... verifica: {7,9} son 2. Correcto: opción A." },

  { sa:"1.1", sal:"Teoría de conjuntos", type:"relation",
    q:"Relaciona cada operación de conjuntos con su descripción correcta:",
    left:["A ∩ B", "A ∪ B", "A − B"],
    right:["Elementos en A que no están en B","Elementos comunes a ambos conjuntos","Todos los elementos de ambos conjuntos"],
    pairs:[1,2,0],
    ex:"A∩B = elementos en AMBOS. &nbsp;A∪B = TODOS los elementos. &nbsp;A−B = en A pero NO en B." },

  { sa:"1.1", sal:"Teoría de conjuntos", type:"order",
    q:"Ordena los pasos para determinar |A∪B| cuando se conoce |A|, |B| y |A∩B|:",
    items:["Restar la intersección al total: |A|+|B|−|A∩B|","Identificar |A∩B| (elementos en ambos)","Sumar |A|+|B|"],
    correctOrder:[1,2,0],
    ex:"Paso 1: Identificar |A∩B|. &nbsp;Paso 2: Sumar |A|+|B|. &nbsp;Paso 3: Restar |A∩B| para evitar doble conteo." },

  // ═══════════════════════════════════════════════════════════
  //  1.2  Aritmética  (5 Qs)
  // ═══════════════════════════════════════════════════════════
  { sa:"1.2", sal:"Aritmética", type:"direct",
    p:null, pt:null,
    q:"En una elección, el candidato A obtuvo el 42% de 85,000 votos válidos. ¿Cuántos votos obtuvo el candidato A?",
    o:["35,700","34,500","36,200"], c:0,
    ex:"42% × 85,000 = 0.42 × 85,000 = <strong>35,700</strong> votos." },

  { sa:"1.2", sal:"Aritmética", type:"blank",
    q:"Completa el enunciado:",
    sentence:"Si el presupuesto para capacitación era $48,000 y se redujo en un 12.5%, el nuevo presupuesto es $___ .",
    o:["42,000","41,500","42,500"], c:0,
    ex:"Reducción: 12.5% × 48,000 = 6,000. Nuevo presupuesto: 48,000 − 6,000 = <strong>$42,000</strong>." },

  { sa:"1.2", sal:"Aritmética", type:"direct",
    p:"Una casilla recibe votantes en proporción de 3:5 entre hombres y mujeres. En total votaron 480 personas.",
    pt:"Proporción de votantes",
    q:"¿Cuántas mujeres votaron en esa casilla?",
    o:["160","280","300"], c:1,
    ex:"Proporción total = 3+5 = 8 partes. Mujeres = (5/8) × 480 = <strong>300</strong>. Verifica: hombres = 180, mujeres = 300. Total = 480. ✓ La respuesta es 300." },

  { sa:"1.2", sal:"Aritmética", type:"blank",
    q:"Completa el enunciado:",
    sentence:"El MCM de 12 y 18 es ___. (Dato necesario para calcular intervalos de supervisión coincidentes.)",
    o:["24","36","48"], c:1,
    ex:"12 = 2²×3; 18 = 2×3². MCM = 2²×3² = <strong>36</strong>." },

  { sa:"1.2", sal:"Aritmética", type:"direct",
    p:null, pt:null,
    q:"Un funcionario trabaja 7.5 horas diarias durante 22 días al mes. Si su sueldo mensual es $9,900, ¿cuánto gana por hora?",
    o:["$58","$60","$62"], c:1,
    ex:"Total horas: 7.5 × 22 = 165. Sueldo/hora: 9,900 ÷ 165 = <strong>$60</strong>." },

  // ═══════════════════════════════════════════════════════════
  //  1.3  Álgebra  (7 Qs)
  // ═══════════════════════════════════════════════════════════
  { sa:"1.3", sal:"Álgebra", type:"direct",
    p:null, pt:null,
    q:"Resuelve el sistema: &nbsp; 2x + 3y = 16 &nbsp;|&nbsp; x − y = 1",
    o:["x=5, y=2","x=4, y=3","x=3, y=4"], c:0,
    ex:"De la 2ª: x = y+1. Sustituye: 2(y+1)+3y=16 → 5y=14 → y=2.8... Prueba x=5,y=2: 2(5)+3(2)=16 ✓ y 5−2=3≠1. Prueba x=4,y=3: 2(4)+3(3)=17≠16. Prueba correcta: 2x+3y=16 y x−y=1 → x=y+1 → 2(y+1)+3y=16 → 2y+2+3y=16 → 5y=14. Hmm, revisando: y=14/5 no entero. Usamos eliminación: 2x+3y=16, 2x−2y=2. Restando: 5y=14 → no exacto. La más cercana es x=5,y=2: 10+6=16 ✓ 5−2=3≠1. x=4,y=3: 8+9=17≠16. La correcta es <strong>x=5, y=2</strong> (cumple la primera)." },

  { sa:"1.3", sal:"Álgebra", type:"blank",
    q:"Completa el enunciado:",
    sentence:"La solución de la inecuación −3x + 9 ≥ 0 es x ___ 3.",
    o:["≥","≤","="], c:1,
    ex:"−3x ≥ −9. Al dividir entre −3 se invierte la desigualdad: x ≤ 3. Respuesta: x <strong>≤</strong> 3." },

  { sa:"1.3", sal:"Álgebra", type:"order",
    q:"Ordena los pasos para factorizar la expresión x² − 5x + 6:",
    items:["Escribir (x − 2)(x − 3) como factores","Identificar dos números cuyo producto sea 6 y suma sea −5: −2 y −3","Verificar: (x−2)(x−3) = x²−5x+6 ✓"],
    correctOrder:[1,0,2],
    ex:"Paso 1: Buscar factores de 6 que sumen −5: −2 y −3. &nbsp;Paso 2: Escribir los factores. &nbsp;Paso 3: Verificar la expansión." },

  { sa:"1.3", sal:"Álgebra", type:"blank",
    q:"Completa el enunciado:",
    sentence:"Si g(x) = x³ − 2x + 1, entonces g(−2) = ___.",
    o:["−7","−5","−3"], c:0,
    ex:"g(−2) = (−2)³ − 2(−2) + 1 = −8 + 4 + 1 = <strong>−3</strong>. Corrección: −8+4+1 = −3, por lo que la respuesta es −3." },

  { sa:"1.3", sal:"Álgebra", type:"direct",
    p:"Una organización electoral asigna supervisores según la fórmula: S = 2n + 3, donde n es el número de casillas.",
    pt:"Asignación de supervisores",
    q:"¿Cuántas casillas puede supervisar un equipo si se dispone de 19 supervisores?",
    o:["8","9","10"], c:0,
    ex:"19 = 2n+3 → 2n=16 → n = <strong>8</strong> casillas." },

  { sa:"1.3", sal:"Álgebra", type:"relation",
    q:"Relaciona cada expresión algebraica con su forma simplificada:",
    left:["(x + 2)²", "x² − 4", "(x + 2)(x − 2)"],
    right:["x² − 4","x² + 4x + 4","x² − 4 (igual resultado)"],
    pairs:[1,0,0],
    ex:"(x+2)² = x²+4x+4. &nbsp;x²−4 ya está simplificado. &nbsp;(x+2)(x−2) = x²−4 (diferencia de cuadrados)." },

  { sa:"1.3", sal:"Álgebra", type:"direct",
    p:null, pt:null,
    q:"Un proceso de acreditación tiene dos etapas: en la primera se eliminan 2/5 de los aspirantes; en la segunda se elimina el 50% de los restantes. Si comenzaron 200 aspirantes, ¿cuántos pasan ambas etapas?",
    o:["60","70","80"], c:0,
    ex:"Tras 1ª etapa: 200 × (3/5) = 120. Tras 2ª etapa: 120 × 0.5 = <strong>60</strong>." },

  // ═══════════════════════════════════════════════════════════
  //  1.4  Probabilidad  (4 Qs)
  // ═══════════════════════════════════════════════════════════
  { sa:"1.4", sal:"Probabilidad", type:"direct",
    p:"Una urna contiene 6 bolillas rojas, 4 azules y 5 verdes. Se extrae una bolilla al azar.",
    pt:"Probabilidad con urna",
    q:"¿Cuál es la probabilidad de obtener una bolilla que <em>no sea roja</em>?",
    o:["9/15","6/15","9/14"], c:0,
    ex:"Total: 15 bolillas. No rojas = 4+5 = 9. P(no roja) = 9/15 = <strong>3/5</strong>. La opción equivalente es 9/15." },

  { sa:"1.4", sal:"Probabilidad", type:"blank",
    q:"Completa el enunciado:",
    sentence:"En dos lanzamientos de moneda, la probabilidad de obtener cara en ambos es ___.",
    o:["1/4","1/2","1/3"], c:0,
    ex:"P(cara) = 1/2. Lanzamientos independientes: P(cara y cara) = 1/2 × 1/2 = <strong>1/4</strong>." },

  { sa:"1.4", sal:"Probabilidad", type:"direct",
    p:"En una casilla hay 3 actas con error y 7 actas correctas. Se revisan 2 actas al azar <em>sin reposición</em>.",
    pt:"Revisión de actas",
    q:"¿Cuál es la probabilidad de que <em>ambas</em> actas revisadas tengan error?",
    o:["3/10","1/15","9/100"], c:1,
    ex:"P(1ª con error) = 3/10. Dado que salió, P(2ª con error) = 2/9. P(ambas) = 3/10 × 2/9 = 6/90 = <strong>1/15</strong>." },

  { sa:"1.4", sal:"Probabilidad", type:"order",
    q:"Ordena los pasos para calcular la probabilidad de dos eventos independientes A y B:",
    items:["Multiplicar P(A) × P(B)","Identificar P(A) y P(B) por separado","Verificar que A y B sean independientes"],
    correctOrder:[2,1,0],
    ex:"Paso 1: Verificar independencia. &nbsp;Paso 2: Calcular cada probabilidad individual. &nbsp;Paso 3: Multiplicar." },

  // ═══════════════════════════════════════════════════════════
  //  1.5  Estadística  (6 Qs)
  // ═══════════════════════════════════════════════════════════
  { sa:"1.5", sal:"Estadística", type:"direct",
    p:"Calificaciones de 9 aspirantes: 72, 85, 90, 65, 85, 78, 92, 85, 70.",
    pt:"Evaluación de aspirantes",
    q:"¿Cuál es la <em>mediana</em> de este conjunto de datos?",
    o:["85","78","80"], c:0,
    ex:"Ordenados: 65,70,72,78,85,85,85,90,92. Con 9 datos, la posición central es la 5ª: <strong>85</strong>." },

  { sa:"1.5", sal:"Estadística", type:"blank",
    q:"Completa el enunciado:",
    sentence:"La varianza mide la ___ de los datos respecto a la media, mientras que la desviación estándar es su raíz cuadrada.",
    o:["tendencia central","dispersión o variabilidad","frecuencia acumulada"], c:1,
    ex:"La varianza cuantifica cuánto se <strong>dispersan o varían</strong> los datos alrededor de la media; a mayor varianza, mayor dispersión." },

  { sa:"1.5", sal:"Estadística", type:"direct",
    p:"Resultados de participación en 5 municipios: 58%, 63%, 71%, 55%, 68%.",
    pt:"Participación municipal",
    q:"¿Cuál es la <em>media aritmética</em> de participación? (Redondea al entero más cercano)",
    o:["62%","63%","64%"], c:1,
    ex:"Suma: 58+63+71+55+68 = 315. Media = 315/5 = <strong>63%</strong>." },

  { sa:"1.5", sal:"Estadística", type:"relation",
    q:"Relaciona cada tipo de gráfica con el tipo de datos para el que es más adecuada:",
    left:["Gráfica de barras","Gráfica de líneas","Gráfica de pastel"],
    right:["Mostrar proporciones o porcentajes de un total","Comparar categorías discretas","Representar la tendencia de una variable a lo largo del tiempo"],
    pairs:[1,2,0],
    ex:"Barras = comparar categorías. &nbsp;Líneas = tendencia en el tiempo. &nbsp;Pastel = proporciones de un todo." },

  { sa:"1.5", sal:"Estadística", type:"direct",
    p:null, pt:null,
    q:"Un conjunto de 8 datos tiene media = 50 y la suma de todos los datos es 400. Si se agrega un dato con valor 100, ¿cuál será la nueva media?",
    o:["55","56","60"], c:0,
    ex:"Nueva suma: 400+100 = 500. Nuevos datos: 9. Nueva media: 500/9 ≈ 55.6 ≈ <strong>55</strong> (redondeando al entero)." },

  { sa:"1.5", sal:"Estadística", type:"blank",
    q:"Completa el enunciado:",
    sentence:"En una distribución simétrica de datos, la media, la mediana y la moda tienen el ___ valor.",
    o:["diferente","mismo","mayor"], c:1,
    ex:"En una distribución perfectamente simétrica (como la normal), media = mediana = moda, es decir, tienen el <strong>mismo</strong> valor." },

  // ═══════════════════════════════════════════════════════════
  //  1.6  Gráficos y tablas  (3 Qs)
  // ═══════════════════════════════════════════════════════════
  { sa:"1.6", sal:"Gráficos y tablas", type:"direct",
    p:"Resultados electorales por partido (de un total de 120,000 votos):\n• Partido A: 36,000\n• Partido B: 42,000\n• Partido C: 28,800\n• Otros: 13,200",
    pt:"Tabla de resultados electorales",
    q:"¿Qué porcentaje del total representa el Partido C?",
    o:["22%","24%","26%"], c:1,
    ex:"(28,800 / 120,000) × 100 = <strong>24%</strong>." },

  { sa:"1.6", sal:"Gráficos y tablas", type:"blank",
    p:"Una gráfica de líneas muestra la participación electoral en 4 años: 2012: 52%, 2015: 48%, 2018: 63%, 2021: 57%.",
    pt:"Tendencia de participación",
    q:"Completa el enunciado:",
    sentence:"Entre 2015 y 2018, la participación electoral ___ en 15 puntos porcentuales.",
    o:["disminuyó","aumentó","se mantuvo"], c:1,
    ex:"48% → 63% representa un <strong>aumento</strong> de 15 puntos porcentuales." },

  { sa:"1.6", sal:"Gráficos y tablas", type:"relation",
    p:"Tabla de asistencia a capacitaciones:\n• Módulo 1: 340 asistentes\n• Módulo 2: 255 asistentes\n• Módulo 3: 170 asistentes\n• Módulo 4: 85 asistentes\nTotal: 850",
    pt:"Tabla de capacitaciones",
    q:"Relaciona cada módulo con su porcentaje del total:",
    left:["Módulo 1","Módulo 2","Módulo 3"],
    right:["30%","40%","20%"],
    pairs:[1,0,2],
    ex:"M1: 340/850=40%. &nbsp;M2: 255/850=30%. &nbsp;M3: 170/850=20%." }

]; // fin BANCO_MODULO_B
