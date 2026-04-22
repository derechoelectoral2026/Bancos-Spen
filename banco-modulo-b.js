// ============================================================
//  BANCO DE PREGUNTAS — MÓDULO B · MATEMÁTICAS · SPEN INE
//  Versión: 1.0
//  Total: 50 preguntas · 6 subáreas · 4 formatos
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
    o:["2","3","4"], c:0,
    ex:"A∪B = {1,2,3,4,5,6,8,10} = 8 elementos. (A∪B)' = U − (A∪B) = {7,9} = <strong>2 elementos</strong>." },

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
    o:["160","280","300"], c:2,
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
    p:"Resuelve el sistema: x + y = 7 &nbsp;|&nbsp; x − y = 1", pt:"Sistema de ecuaciones",
    q:"¿Cuál es la solución del sistema?",
    o:["x=4, y=3","x=3, y=4","x=5, y=2"], c:0,
    ex:"Sumando ambas ecuaciones: 2x=8 → x=4. Sustituyendo en x+y=7: 4+y=7 → y=3. Verificación: 4+3=7 ✓ y 4−3=1 ✓. Solución: <strong>x=4, y=3</strong>." },

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
    o:["−7","−5","−3"], c:2,
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

,{ sa:"1.1", sal:"Teoría de conjuntos", type:"direct",
   p:"En un distrito electoral: 80 observadores hablan inglés, 65 hablan francés y 25 hablan ambos idiomas. El total de observadores acreditados es 150.",
   pt:"Observadores acreditados",
   q:"¿Cuántos observadores <em>no hablan ninguno</em> de los dos idiomas?",
   o:["30","25","35"], c:0,
   ex:"|I∪F| = 80 + 65 − 25 = 120. No hablan ninguno = 150 − 120 = <strong>30</strong>." }

,{ sa:"1.1", sal:"Teoría de conjuntos", type:"blank",
   q:"Completa el enunciado:",
   sentence:"Si A = {2, 4, 6, 8} y B = {6, 8, 10, 12}, entonces A ∩ B = ___.",
   o:["{6, 8}","{2, 4, 6, 8, 10, 12}","{2, 4}"], c:0,
   ex:"La intersección contiene solo los elementos presentes en AMBOS conjuntos: <strong>{6, 8}</strong>." }

,{ sa:"1.1", sal:"Teoría de conjuntos", type:"order",
   q:"Ordena los pasos para resolver un problema de conjuntos con diagrama de Venn:",
   items:["Calcular el total de la unión y las regiones restantes","Ubicar los elementos de la intersección en la zona central","Identificar los conjuntos involucrados y los datos conocidos"],
   correctOrder:[2,1,0],
   ex:"Primero identificar datos → luego colocar la intersección → finalmente calcular las regiones y totales." }

// ═══════════════════════════════════════════════════════════
//  1.2  Aritmética  (+3 Qs)
// ═══════════════════════════════════════════════════════════
,{ sa:"1.2", sal:"Aritmética", type:"direct",
   p:null, pt:null,
   q:"Un padrón electoral creció de 420,000 a 483,000 inscritos en cuatro años. ¿Cuál fue el porcentaje de crecimiento?",
   o:["13%","15%","17%"], c:1,
   ex:"Crecimiento = 483,000 − 420,000 = 63,000. Porcentaje = (63,000 / 420,000) × 100 = <strong>15%</strong>." }

,{ sa:"1.2", sal:"Aritmética", type:"blank",
   q:"Completa el enunciado:",
   sentence:"Si se distribuyen 5,040 boletas entre 7 casillas en partes iguales, cada casilla recibe ___ boletas.",
   o:["720","630","810"], c:0,
   ex:"5,040 ÷ 7 = <strong>720</strong> boletas por casilla." }

,{ sa:"1.2", sal:"Aritmética", type:"direct",
   p:"Tres funcionarios completan una revisión de archivos en 12, 18 y 36 horas respectivamente trabajando solos.",
   pt:"Eficiencia de trabajo conjunto",
   q:"Si los tres trabajan juntos al mismo tiempo, ¿en cuántas horas terminan la revisión?",
   o:["6 horas","8 horas","9 horas"], c:0,
   ex:"Tasa conjunta = 1/12 + 1/18 + 1/36 = 3/36 + 2/36 + 1/36 = 6/36 = 1/6. Tiempo = <strong>6 horas</strong>." }

// ═══════════════════════════════════════════════════════════
//  1.3  Álgebra  (+4 Qs)
// ═══════════════════════════════════════════════════════════
,{ sa:"1.3", sal:"Álgebra", type:"direct",
   p:null, pt:null,
   q:"La suma de dos números es 54 y su diferencia es 18. ¿Cuál es el mayor de los dos números?",
   o:["36","30","27"], c:0,
   ex:"x + y = 54 y x − y = 18. Sumando: 2x = 72 → x = <strong>36</strong>. (y = 18)." }

,{ sa:"1.3", sal:"Álgebra", type:"blank",
   q:"Completa el enunciado:",
   sentence:"Si un depósito se llena con c litros por minuto y ya tiene 120 litros, la cantidad total tras t minutos es ___.",
   o:["c · t","120 + c · t","120 · c · t"], c:1,
   ex:"Cantidad inicial + tasa × tiempo = <strong>120 + c · t</strong>. Es el modelo de función lineal con valor inicial." }

,{ sa:"1.3", sal:"Álgebra", type:"direct",
   p:"La tarifa de un servicio de mensajería es: $15 fijos más $3.50 por kilómetro recorrido.",
   pt:"Costo de mensajería",
   q:"¿Cuántos kilómetros se recorrieron si la factura fue de $64?",
   o:["12 km","13 km","14 km"], c:2,
   ex:"64 = 15 + 3.5k → 3.5k = 49 → k = 49/3.5 = <strong>14 km</strong>." }

,{ sa:"1.3", sal:"Álgebra", type:"relation",
   q:"Relaciona cada tipo de ecuación con su característica distintiva:",
   left:["Ecuación lineal","Ecuación cuadrática","Sistema de ecuaciones"],
   right:["Contiene la variable elevada al cuadrado como término de mayor grado","Agrupa dos o más ecuaciones con variables compartidas que deben satisfacerse simultáneamente","Contiene la variable solo elevada a la primera potencia"],
   pairs:[2,0,1],
   ex:"Lineal = variable a la 1ª potencia. Cuadrática = variable al cuadrado. Sistema = varias ecuaciones simultáneas." }

// ═══════════════════════════════════════════════════════════
//  1.4  Probabilidad  (+3 Qs)
// ═══════════════════════════════════════════════════════════
,{ sa:"1.4", sal:"Probabilidad", type:"direct",
   p:"En un proceso de selección de personal se tienen 5 candidatos aptos y 3 no aptos. Se elige uno al azar.",
   pt:"Selección de personal",
   q:"¿Cuál es la probabilidad de elegir a un candidato <em>apto</em>?",
   o:["3/8","5/8","5/3"], c:1,
   ex:"Total candidatos: 8. Aptos: 5. P(apto) = 5/8." }

,{ sa:"1.4", sal:"Probabilidad", type:"blank",
   q:"Completa el enunciado:",
   sentence:"Si la probabilidad de que un distrito supere el 60% de participación es 0.35, la probabilidad de que <em>no</em> lo supere es ___.",
   o:["0.35","0.65","0.70"], c:1,
   ex:"P(complemento) = 1 − 0.35 = <strong>0.65</strong>. El complemento de un evento cubre el resto del espacio muestral." }

,{ sa:"1.4", sal:"Probabilidad", type:"direct",
   p:"Se lanza un dado de 6 caras una vez.",
   pt:"Lanzamiento de dado",
   q:"¿Cuál es la probabilidad de obtener un número <em>par mayor que 2</em>?",
   o:["1/3","1/2","2/6"], c:0,
   ex:"Pares mayores que 2: {4, 6} → 2 casos favorables. P = 2/6 = <strong>1/3</strong>." }

// ═══════════════════════════════════════════════════════════
//  1.5  Estadística  (+4 Qs)
// ═══════════════════════════════════════════════════════════
,{ sa:"1.5", sal:"Estadística", type:"direct",
   p:"Puntajes de 7 funcionarios en una prueba de conocimientos: 80, 75, 90, 80, 85, 70, 80.",
   pt:"Prueba de conocimientos",
   q:"¿Cuál es la <em>moda</em> de los puntajes?",
   o:["75","80","85"], c:1,
   ex:"El valor que se repite con mayor frecuencia (3 veces) es <strong>80</strong>." }

,{ sa:"1.5", sal:"Estadística", type:"blank",
   q:"Completa el enunciado:",
   sentence:"Un conjunto de datos con rango (diferencia entre máximo y mínimo) igual a cero indica que todos los valores son ___.",
   o:["distintos entre sí","iguales","mayores que la media"], c:1,
   ex:"Rango = máximo − mínimo. Si el rango es 0, entonces máximo = mínimo, lo que significa que todos los datos son <strong>iguales</strong>." }

,{ sa:"1.5", sal:"Estadística", type:"direct",
   p:"En una encuesta de satisfacción aplicada a 200 ciudadanos: 90 respondieron 'muy satisfecho', 70 'satisfecho', 30 'neutral' y 10 'insatisfecho'.",
   pt:"Encuesta de satisfacción",
   q:"¿Qué porcentaje de ciudadanos respondió 'satisfecho' o 'muy satisfecho'?",
   o:["75%","80%","85%"], c:1,
   ex:"Satisfechos o muy satisfechos: 90 + 70 = 160. Porcentaje: (160/200) × 100 = <strong>80%</strong>." }

,{ sa:"1.5", sal:"Estadística", type:"order",
   q:"Ordena los pasos para calcular la media aritmética de un conjunto de datos:",
   items:["Dividir la suma entre el número total de datos","Identificar todos los valores del conjunto","Sumar todos los valores"],
   correctOrder:[1,2,0],
   ex:"Paso 1: Identificar todos los valores. Paso 2: Sumarlos. Paso 3: Dividir entre n." }

// ═══════════════════════════════════════════════════════════
//  1.6  Gráficos y tablas  (+3 Qs)
// ═══════════════════════════════════════════════════════════
,{ sa:"1.6", sal:"Gráficos y tablas", type:"direct",
   p:"Tabla de votos nulos por sección:\n• Sección 01: 45\n• Sección 02: 60\n• Sección 03: 30\n• Sección 04: 15\nTotal: 150",
   pt:"Votos nulos por sección",
   q:"¿Qué sección representa el 40% del total de votos nulos?",
   o:["Sección 01","Sección 02","Sección 03"], c:1,
   ex:"40% de 150 = 60. La Sección 02 tiene exactamente <strong>60 votos nulos</strong>." }

,{ sa:"1.6", sal:"Gráficos y tablas", type:"blank",
   p:"Una gráfica de barras muestra la asistencia a cuatro foros ciudadanos: Foro A: 320, Foro B: 480, Foro C: 400, Foro D: 240.",
   pt:"Asistencia a foros ciudadanos",
   q:"Completa el enunciado:",
   sentence:"El foro con mayor asistencia superó al de menor asistencia en ___ participantes.",
   o:["140","200","240"], c:2,
   ex:"Mayor: Foro B = 480. Menor: Foro D = 240. Diferencia = 480 − 240 = <strong>240</strong> participantes." }

,{ sa:"1.6", sal:"Gráficos y tablas", type:"relation",
   q:"Relaciona cada elemento de una gráfica con su función dentro de la misma:",
   left:["Título","Eje Y (vertical)","Leyenda"],
   right:["Indica qué representa cada color, barra o línea cuando hay más de una serie de datos","Describe el contenido general de la gráfica","Muestra la escala de la variable cuantitativa medida"],
   pairs:[1,2,0],
   ex:"Título = describe el contenido. Eje Y = escala cuantitativa. Leyenda = identifica cada serie de datos." }

]; // fin BANCO_MODULO_B
