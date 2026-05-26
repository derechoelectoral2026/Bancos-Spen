// ============================================================
//  BANCO DE PREGUNTAS — MÓDULO A · SPEN INE
//  Versión: 2.0 (estructura de paquetes según guía INE)
//  Total: 109 preguntas · 5 subáreas · 4 formatos
//
//  Comprensión lectora (54 preguntas en 9 paquetes):
//    • 1.1 Ámbito de estudio       → 3 paquetes × 6 Qs
//    • 1.2 Ámbito literario         → 3 paquetes × 6 Qs
//    • 1.3 Participación social     → 3 paquetes × 6 Qs
//  Redacción indirecta (55 preguntas sueltas):
//    • 2.1 Ámbito de estudio        → 28 Qs
//    • 2.2 Participación social     → 27 Qs
//
//  ¿Qué es un "paquete"?
//    Las 6 preguntas de un paquete comparten el mismo texto
//    (pTitle idéntico). El simulacro las elige juntas y las
//    presenta en orden, según marca la guía oficial del INE.
//
//  ¿Cómo agregar/editar?
//    • Para modificar: busca el id (id:1, id:2, etc.)
//    • Para sumar un texto nuevo en 1.1/1.2/1.3: agrega 6
//      preguntas con el MISMO pTitle y el MISMO passage.
//    • Para sumar preguntas sueltas en 2.1/2.2: cada una
//      con su propio pTitle y passage únicos.
//
//  Formatos:
//    A = Cuestionamiento directo   (opts, correct)
//    B = Completamiento            (opts, correct)
//    C = Ordenamiento              (items, correctOrder)
//    D = Relación de elementos     (leftItems, rightItems, correctPairs)
// ============================================================

const BANCO_MODULO_A = [

// ═══════════════════════════════════════════════════════════
//  1.1  Comprensión lectora – Ámbito de estudio
//  3 paquetes de 6 preguntas (cada paquete = 1 texto)
//  En cada simulacro se eligen 2 paquetes = 12 preguntas
// ═══════════════════════════════════════════════════════════

// ─── PAQUETE 1.1·A: "El método científico y la objetividad" ───
{
  id:1, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"A",
  pTitle:"El método científico y la objetividad",
  passage:"La objetividad científica no implica que el investigador carezca de valores o perspectivas previas, sino que tiene la obligación de transparentar sus supuestos y someter sus conclusiones al escrutinio de la comunidad. La revisión por pares funciona como el mecanismo institucional que compensa la subjetividad inevitable del investigador individual: otros especialistas anónimos evalúan la solidez metodológica antes de la publicación. Sin embargo, este sistema no es infalible. La crisis de replicabilidad, evidenciada con fuerza desde 2011 en psicología y ciencias sociales, reveló que muchos estudios revisados y publicados no podían reproducirse cuando investigadores independientes repetían los experimentos. El problema no se reduce a fraudes individuales: apunta a deficiencias estructurales del propio proceso editorial, como el sesgo de publicación que favorece resultados positivos y novedosos. A esto se suma el sesgo de confirmación, que opera de forma inconsciente incluso en investigadores rigurosos, llevándolos a privilegiar la evidencia que respalda sus hipótesis previas. La ciencia, por tanto, no se sostiene en la pureza del investigador, sino en la red de controles colectivos que la rodean.",
  q:"Según el texto, ¿cuál es la función principal de la revisión por pares?",
  opts:["Eliminar por completo los valores personales del investigador.","Compensar institucionalmente la subjetividad individual mediante el escrutinio colectivo.","Garantizar que todas las conclusiones publicadas sean verdaderas y replicables."],
  correct:1, expl:"El texto afirma que la revisión por pares 'compensa la subjetividad inevitable del investigador individual', no que la elimine ni que garantice la verdad."
},
{
  id:2, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"B",
  pTitle:"El método científico y la objetividad",
  passage:"La objetividad científica no implica que el investigador carezca de valores o perspectivas previas, sino que tiene la obligación de transparentar sus supuestos y someter sus conclusiones al escrutinio de la comunidad. La revisión por pares funciona como el mecanismo institucional que compensa la subjetividad inevitable del investigador individual: otros especialistas anónimos evalúan la solidez metodológica antes de la publicación. Sin embargo, este sistema no es infalible. La crisis de replicabilidad, evidenciada con fuerza desde 2011 en psicología y ciencias sociales, reveló que muchos estudios revisados y publicados no podían reproducirse cuando investigadores independientes repetían los experimentos. El problema no se reduce a fraudes individuales: apunta a deficiencias estructurales del propio proceso editorial, como el sesgo de publicación que favorece resultados positivos y novedosos. A esto se suma el sesgo de confirmación, que opera de forma inconsciente incluso en investigadores rigurosos, llevándolos a privilegiar la evidencia que respalda sus hipótesis previas. La ciencia, por tanto, no se sostiene en la pureza del investigador, sino en la red de controles colectivos que la rodean.",
  q:"De acuerdo con el fragmento, el sesgo de confirmación es especialmente peligroso porque opera de manera ________ aun en investigadores rigurosos.",
  opts:["deliberada y abierta","inconsciente y silenciosa","manifiesta y fácilmente detectable"],
  correct:1, expl:"El texto dice expresamente que el sesgo de confirmación 'opera de forma inconsciente incluso en investigadores rigurosos'."
},
{
  id:3, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"A",
  pTitle:"El método científico y la objetividad",
  passage:"La objetividad científica no implica que el investigador carezca de valores o perspectivas previas, sino que tiene la obligación de transparentar sus supuestos y someter sus conclusiones al escrutinio de la comunidad. La revisión por pares funciona como el mecanismo institucional que compensa la subjetividad inevitable del investigador individual: otros especialistas anónimos evalúan la solidez metodológica antes de la publicación. Sin embargo, este sistema no es infalible. La crisis de replicabilidad, evidenciada con fuerza desde 2011 en psicología y ciencias sociales, reveló que muchos estudios revisados y publicados no podían reproducirse cuando investigadores independientes repetían los experimentos. El problema no se reduce a fraudes individuales: apunta a deficiencias estructurales del propio proceso editorial, como el sesgo de publicación que favorece resultados positivos y novedosos. A esto se suma el sesgo de confirmación, que opera de forma inconsciente incluso en investigadores rigurosos, llevándolos a privilegiar la evidencia que respalda sus hipótesis previas. La ciencia, por tanto, no se sostiene en la pureza del investigador, sino en la red de controles colectivos que la rodean.",
  q:"¿Cuál es la implicación más profunda de la crisis de replicabilidad según el texto?",
  opts:["Que algunos investigadores cometen fraude deliberadamente.","Que el proceso mismo de publicación académica presenta deficiencias estructurales.","Que la psicología debe abandonar el método experimental por completo."],
  correct:1, expl:"El texto descarta explícitamente la lectura individualista ('no se reduce a fraudes individuales') y apunta a 'deficiencias estructurales del propio proceso editorial'."
},
{
  id:4, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"D",
  pTitle:"El método científico y la objetividad",
  passage:"La objetividad científica no implica que el investigador carezca de valores o perspectivas previas, sino que tiene la obligación de transparentar sus supuestos y someter sus conclusiones al escrutinio de la comunidad. La revisión por pares funciona como el mecanismo institucional que compensa la subjetividad inevitable del investigador individual: otros especialistas anónimos evalúan la solidez metodológica antes de la publicación. Sin embargo, este sistema no es infalible. La crisis de replicabilidad, evidenciada con fuerza desde 2011 en psicología y ciencias sociales, reveló que muchos estudios revisados y publicados no podían reproducirse cuando investigadores independientes repetían los experimentos. El problema no se reduce a fraudes individuales: apunta a deficiencias estructurales del propio proceso editorial, como el sesgo de publicación que favorece resultados positivos y novedosos. A esto se suma el sesgo de confirmación, que opera de forma inconsciente incluso en investigadores rigurosos, llevándolos a privilegiar la evidencia que respalda sus hipótesis previas. La ciencia, por tanto, no se sostiene en la pureza del investigador, sino en la red de controles colectivos que la rodean.",
  q:"Relaciona cada concepto del texto con su descripción correcta.",
  leftItems:["Revisión por pares","Sesgo de confirmación","Sesgo de publicación"],
  rightItems:["Tendencia editorial a favorecer resultados positivos y novedosos","Mecanismo colectivo que compensa la subjetividad del investigador","Inclinación inconsciente a privilegiar evidencia que respalda la hipótesis propia"],
  correctPairs:[[0,1],[1,2],[2,0]],
  expl:"Revisión por pares = mecanismo colectivo; sesgo de confirmación = inclinación inconsciente del investigador; sesgo de publicación = filtro editorial hacia resultados positivos."
},
{
  id:5, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"A",
  pTitle:"El método científico y la objetividad",
  passage:"La objetividad científica no implica que el investigador carezca de valores o perspectivas previas, sino que tiene la obligación de transparentar sus supuestos y someter sus conclusiones al escrutinio de la comunidad. La revisión por pares funciona como el mecanismo institucional que compensa la subjetividad inevitable del investigador individual: otros especialistas anónimos evalúan la solidez metodológica antes de la publicación. Sin embargo, este sistema no es infalible. La crisis de replicabilidad, evidenciada con fuerza desde 2011 en psicología y ciencias sociales, reveló que muchos estudios revisados y publicados no podían reproducirse cuando investigadores independientes repetían los experimentos. El problema no se reduce a fraudes individuales: apunta a deficiencias estructurales del propio proceso editorial, como el sesgo de publicación que favorece resultados positivos y novedosos. A esto se suma el sesgo de confirmación, que opera de forma inconsciente incluso en investigadores rigurosos, llevándolos a privilegiar la evidencia que respalda sus hipótesis previas. La ciencia, por tanto, no se sostiene en la pureza del investigador, sino en la red de controles colectivos que la rodean.",
  q:"¿Cuál es la idea central del último enunciado del texto?",
  opts:["La ciencia debe exigir investigadores libres de cualquier valor o prejuicio.","La validez del conocimiento científico depende de los controles colectivos, no de la virtud individual.","La ciencia es imposible mientras existan sesgos cognitivos en los seres humanos."],
  correct:1, expl:"El cierre afirma que la ciencia 'no se sostiene en la pureza del investigador, sino en la red de controles colectivos que la rodean'."
},
{
  id:6, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"B",
  pTitle:"El método científico y la objetividad",
  passage:"La objetividad científica no implica que el investigador carezca de valores o perspectivas previas, sino que tiene la obligación de transparentar sus supuestos y someter sus conclusiones al escrutinio de la comunidad. La revisión por pares funciona como el mecanismo institucional que compensa la subjetividad inevitable del investigador individual: otros especialistas anónimos evalúan la solidez metodológica antes de la publicación. Sin embargo, este sistema no es infalible. La crisis de replicabilidad, evidenciada con fuerza desde 2011 en psicología y ciencias sociales, reveló que muchos estudios revisados y publicados no podían reproducirse cuando investigadores independientes repetían los experimentos. El problema no se reduce a fraudes individuales: apunta a deficiencias estructurales del propio proceso editorial, como el sesgo de publicación que favorece resultados positivos y novedosos. A esto se suma el sesgo de confirmación, que opera de forma inconsciente incluso en investigadores rigurosos, llevándolos a privilegiar la evidencia que respalda sus hipótesis previas. La ciencia, por tanto, no se sostiene en la pureza del investigador, sino en la red de controles colectivos que la rodean.",
  q:"El sesgo de publicación, según el texto, se manifiesta cuando las revistas favorecen los resultados ________.",
  opts:["nulos y poco originales","positivos y novedosos","replicados y consensuados"],
  correct:1, expl:"El texto define el sesgo de publicación como aquel 'que favorece resultados positivos y novedosos'."
},

// ─── PAQUETE 1.1·B: "Correlación, causalidad y validez metodológica" ───
{
  id:200, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"A",
  pTitle:"Correlación, causalidad y validez metodológica",
  passage:"Uno de los errores más frecuentes en la divulgación científica consiste en confundir correlación con causalidad. Que dos variables se muevan juntas no significa que una cause la otra: puede tratarse de coincidencia, de causalidad inversa, o —lo más común— de la influencia de una tercera variable llamada confusora, que opera sin ser observada y produce una asociación espuria entre las dos primeras. Por eso, en investigación empírica importa distinguir validez y confiabilidad. Un instrumento es confiable si arroja resultados consistentes al repetirse bajo las mismas condiciones; pero la confiabilidad no garantiza la validez. Un termómetro descalibrado mide con consistencia, una y otra vez, pero no mide correctamente la temperatura. La validez exige que el instrumento capture realmente el constructo que dice medir. Dentro de la validez, además, se distingue la validez interna —el grado en que las conclusiones causales del estudio están justificadas— de la validez externa o transferibilidad, que en la investigación cualitativa no busca generalizar estadísticamente sino permitir que el lector juzgue si las condiciones del estudio son comparables con las de su propio contexto.",
  q:"Según el texto, ¿cuál es el error que se comete cuando se concluye que A causa B solo porque ambas variables se mueven juntas?",
  opts:["Confundir validez con confiabilidad.","Confundir correlación con causalidad.","Confundir validez interna con validez externa."],
  correct:1, expl:"El texto identifica explícitamente la confusión entre correlación y causalidad como 'uno de los errores más frecuentes'."
},
{
  id:201, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"B",
  pTitle:"Correlación, causalidad y validez metodológica",
  passage:"Uno de los errores más frecuentes en la divulgación científica consiste en confundir correlación con causalidad. Que dos variables se muevan juntas no significa que una cause la otra: puede tratarse de coincidencia, de causalidad inversa, o —lo más común— de la influencia de una tercera variable llamada confusora, que opera sin ser observada y produce una asociación espuria entre las dos primeras. Por eso, en investigación empírica importa distinguir validez y confiabilidad. Un instrumento es confiable si arroja resultados consistentes al repetirse bajo las mismas condiciones; pero la confiabilidad no garantiza la validez. Un termómetro descalibrado mide con consistencia, una y otra vez, pero no mide correctamente la temperatura. La validez exige que el instrumento capture realmente el constructo que dice medir. Dentro de la validez, además, se distingue la validez interna —el grado en que las conclusiones causales del estudio están justificadas— de la validez externa o transferibilidad, que en la investigación cualitativa no busca generalizar estadísticamente sino permitir que el lector juzgue si las condiciones del estudio son comparables con las de su propio contexto.",
  q:"La variable que, sin ser observada, explica la asociación entre otras dos y produce una correlación espuria se denomina variable ________.",
  opts:["independiente","confusora","dependiente"],
  correct:1, expl:"El texto define como confusora a la 'tercera variable que opera sin ser observada y produce una asociación espuria entre las dos primeras'."
},
{
  id:202, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"D",
  pTitle:"Correlación, causalidad y validez metodológica",
  passage:"Uno de los errores más frecuentes en la divulgación científica consiste en confundir correlación con causalidad. Que dos variables se muevan juntas no significa que una cause la otra: puede tratarse de coincidencia, de causalidad inversa, o —lo más común— de la influencia de una tercera variable llamada confusora, que opera sin ser observada y produce una asociación espuria entre las dos primeras. Por eso, en investigación empírica importa distinguir validez y confiabilidad. Un instrumento es confiable si arroja resultados consistentes al repetirse bajo las mismas condiciones; pero la confiabilidad no garantiza la validez. Un termómetro descalibrado mide con consistencia, una y otra vez, pero no mide correctamente la temperatura. La validez exige que el instrumento capture realmente el constructo que dice medir. Dentro de la validez, además, se distingue la validez interna —el grado en que las conclusiones causales del estudio están justificadas— de la validez externa o transferibilidad, que en la investigación cualitativa no busca generalizar estadísticamente sino permitir que el lector juzgue si las condiciones del estudio son comparables con las de su propio contexto.",
  q:"Relaciona cada concepto con su definición.",
  leftItems:["Confiabilidad","Validez","Transferibilidad"],
  rightItems:["Posibilidad de que el lector juzgue si los resultados aplican a su propio contexto","Consistencia de los resultados al repetir la medición en las mismas condiciones","Correspondencia entre lo medido y el constructo que se dice medir"],
  correctPairs:[[0,1],[1,2],[2,0]],
  expl:"Confiabilidad = consistencia; validez = correspondencia con el constructo; transferibilidad = juicio del lector sobre la aplicabilidad."
},
{
  id:203, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"A",
  pTitle:"Correlación, causalidad y validez metodológica",
  passage:"Uno de los errores más frecuentes en la divulgación científica consiste en confundir correlación con causalidad. Que dos variables se muevan juntas no significa que una cause la otra: puede tratarse de coincidencia, de causalidad inversa, o —lo más común— de la influencia de una tercera variable llamada confusora, que opera sin ser observada y produce una asociación espuria entre las dos primeras. Por eso, en investigación empírica importa distinguir validez y confiabilidad. Un instrumento es confiable si arroja resultados consistentes al repetirse bajo las mismas condiciones; pero la confiabilidad no garantiza la validez. Un termómetro descalibrado mide con consistencia, una y otra vez, pero no mide correctamente la temperatura. La validez exige que el instrumento capture realmente el constructo que dice medir. Dentro de la validez, además, se distingue la validez interna —el grado en que las conclusiones causales del estudio están justificadas— de la validez externa o transferibilidad, que en la investigación cualitativa no busca generalizar estadísticamente sino permitir que el lector juzgue si las condiciones del estudio son comparables con las de su propio contexto.",
  q:"¿Qué ilustra el ejemplo del termómetro descalibrado?",
  opts:["Que un instrumento puede ser válido aunque no sea confiable.","Que un instrumento puede ser confiable aunque no sea válido.","Que un instrumento descalibrado es siempre inservible para la investigación."],
  correct:1, expl:"El termómetro descalibrado mide con consistencia (confiabilidad) pero no mide correctamente la temperatura (falta de validez)."
},
{
  id:204, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"B",
  pTitle:"Correlación, causalidad y validez metodológica",
  passage:"Uno de los errores más frecuentes en la divulgación científica consiste en confundir correlación con causalidad. Que dos variables se muevan juntas no significa que una cause la otra: puede tratarse de coincidencia, de causalidad inversa, o —lo más común— de la influencia de una tercera variable llamada confusora, que opera sin ser observada y produce una asociación espuria entre las dos primeras. Por eso, en investigación empírica importa distinguir validez y confiabilidad. Un instrumento es confiable si arroja resultados consistentes al repetirse bajo las mismas condiciones; pero la confiabilidad no garantiza la validez. Un termómetro descalibrado mide con consistencia, una y otra vez, pero no mide correctamente la temperatura. La validez exige que el instrumento capture realmente el constructo que dice medir. Dentro de la validez, además, se distingue la validez interna —el grado en que las conclusiones causales del estudio están justificadas— de la validez externa o transferibilidad, que en la investigación cualitativa no busca generalizar estadísticamente sino permitir que el lector juzgue si las condiciones del estudio son comparables con las de su propio contexto.",
  q:"En la investigación cualitativa, la transferibilidad depende de que el ________ evalúe si las condiciones del estudio son comparables con las de su propio contexto.",
  opts:["investigador original","lector o usuario de los resultados","comité editorial de la revista"],
  correct:1, expl:"El texto asigna explícitamente al lector la responsabilidad de juzgar la comparabilidad de los contextos."
},
{
  id:205, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"A",
  pTitle:"Correlación, causalidad y validez metodológica",
  passage:"Uno de los errores más frecuentes en la divulgación científica consiste en confundir correlación con causalidad. Que dos variables se muevan juntas no significa que una cause la otra: puede tratarse de coincidencia, de causalidad inversa, o —lo más común— de la influencia de una tercera variable llamada confusora, que opera sin ser observada y produce una asociación espuria entre las dos primeras. Por eso, en investigación empírica importa distinguir validez y confiabilidad. Un instrumento es confiable si arroja resultados consistentes al repetirse bajo las mismas condiciones; pero la confiabilidad no garantiza la validez. Un termómetro descalibrado mide con consistencia, una y otra vez, pero no mide correctamente la temperatura. La validez exige que el instrumento capture realmente el constructo que dice medir. Dentro de la validez, además, se distingue la validez interna —el grado en que las conclusiones causales del estudio están justificadas— de la validez externa o transferibilidad, que en la investigación cualitativa no busca generalizar estadísticamente sino permitir que el lector juzgue si las condiciones del estudio son comparables con las de su propio contexto.",
  q:"De acuerdo con el texto, ¿qué distingue a la validez interna de la validez externa?",
  opts:["La validez interna se refiere a la justificación de las conclusiones causales; la externa, a la aplicabilidad de los resultados a otros contextos.","La validez interna se mide en estudios cualitativos; la externa, solo en estudios cuantitativos.","La validez interna depende del lector; la externa, del investigador."],
  correct:0, expl:"El texto define la validez interna como 'el grado en que las conclusiones causales del estudio están justificadas' y la externa como la transferibilidad a otros contextos."
},

// ─── PAQUETE 1.1·C: "El protocolo y el marco teórico de la investigación" ───
{
  id:206, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"A",
  pTitle:"El protocolo y el marco teórico de la investigación",
  passage:"Toda investigación seria comienza antes de recolectar el primer dato: comienza en el protocolo. El protocolo de investigación es el documento que guía el proceso completo y refleja, en su orden interno, la lógica del método científico. Su primera sección es el planteamiento del problema, donde el investigador delimita qué pregunta busca responder y por qué importa hacerlo. Le sigue el marco teórico, que no es —como suele creerse— una simple recopilación de citas, sino una construcción argumentativa: justifica las decisiones metodológicas, sitúa el problema en el debate académico vigente y delimita el alcance conceptual del estudio. Solo después viene el diseño metodológico, donde se especifican técnicas de recolección y análisis, y finalmente el cronograma y el presupuesto. Esta secuencia no es burocrática: cada etapa condiciona la siguiente. Un marco teórico débil produce un diseño metodológico mal orientado; un diseño mal orientado produce datos que no responden a la pregunta original. Por eso, los paradigmas de investigación importan tanto: el positivista privilegia la cuantificación y la predicción; el interpretativo, la comprensión del significado que los actores dan a su realidad; el crítico, la transformación de estructuras sociales inequitativas. Cada uno define qué preguntas son legítimas y qué métodos las responden.",
  q:"Según el texto, ¿cuál es la concepción correcta del marco teórico?",
  opts:["Una recopilación ordenada de citas relevantes sobre el tema.","Una construcción argumentativa que justifica decisiones metodológicas y delimita el alcance del estudio.","Un resumen ejecutivo del estado del arte que se redacta al finalizar la investigación."],
  correct:1, expl:"El texto distingue explícitamente el marco teórico de una 'simple recopilación de citas' y lo define como 'una construcción argumentativa'."
},
{
  id:207, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"C",
  pTitle:"El protocolo y el marco teórico de la investigación",
  passage:"Toda investigación seria comienza antes de recolectar el primer dato: comienza en el protocolo. El protocolo de investigación es el documento que guía el proceso completo y refleja, en su orden interno, la lógica del método científico. Su primera sección es el planteamiento del problema, donde el investigador delimita qué pregunta busca responder y por qué importa hacerlo. Le sigue el marco teórico, que no es —como suele creerse— una simple recopilación de citas, sino una construcción argumentativa: justifica las decisiones metodológicas, sitúa el problema en el debate académico vigente y delimita el alcance conceptual del estudio. Solo después viene el diseño metodológico, donde se especifican técnicas de recolección y análisis, y finalmente el cronograma y el presupuesto. Esta secuencia no es burocrática: cada etapa condiciona la siguiente. Un marco teórico débil produce un diseño metodológico mal orientado; un diseño mal orientado produce datos que no responden a la pregunta original. Por eso, los paradigmas de investigación importan tanto: el positivista privilegia la cuantificación y la predicción; el interpretativo, la comprensión del significado que los actores dan a su realidad; el crítico, la transformación de estructuras sociales inequitativas. Cada uno define qué preguntas son legítimas y qué métodos las responden.",
  q:"Ordena las secciones del protocolo de investigación en la secuencia lógica que indica el texto.",
  items:["Cronograma y presupuesto","Planteamiento del problema","Diseño metodológico","Marco teórico"],
  correctOrder:[1,3,2,0],
  expl:"El texto presenta el orden: planteamiento del problema → marco teórico → diseño metodológico → cronograma y presupuesto."
},
{
  id:208, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"B",
  pTitle:"El protocolo y el marco teórico de la investigación",
  passage:"Toda investigación seria comienza antes de recolectar el primer dato: comienza en el protocolo. El protocolo de investigación es el documento que guía el proceso completo y refleja, en su orden interno, la lógica del método científico. Su primera sección es el planteamiento del problema, donde el investigador delimita qué pregunta busca responder y por qué importa hacerlo. Le sigue el marco teórico, que no es —como suele creerse— una simple recopilación de citas, sino una construcción argumentativa: justifica las decisiones metodológicas, sitúa el problema en el debate académico vigente y delimita el alcance conceptual del estudio. Solo después viene el diseño metodológico, donde se especifican técnicas de recolección y análisis, y finalmente el cronograma y el presupuesto. Esta secuencia no es burocrática: cada etapa condiciona la siguiente. Un marco teórico débil produce un diseño metodológico mal orientado; un diseño mal orientado produce datos que no responden a la pregunta original. Por eso, los paradigmas de investigación importan tanto: el positivista privilegia la cuantificación y la predicción; el interpretativo, la comprensión del significado que los actores dan a su realidad; el crítico, la transformación de estructuras sociales inequitativas. Cada uno define qué preguntas son legítimas y qué métodos las responden.",
  q:"Según el texto, la secuencia interna del protocolo no es burocrática porque cada etapa ________ a la siguiente.",
  opts:["sustituye","condiciona","contradice"],
  correct:1, expl:"El texto afirma que 'cada etapa condiciona la siguiente' y lo demuestra con la cadena marco teórico → diseño → datos."
},
{
  id:209, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"D",
  pTitle:"El protocolo y el marco teórico de la investigación",
  passage:"Toda investigación seria comienza antes de recolectar el primer dato: comienza en el protocolo. El protocolo de investigación es el documento que guía el proceso completo y refleja, en su orden interno, la lógica del método científico. Su primera sección es el planteamiento del problema, donde el investigador delimita qué pregunta busca responder y por qué importa hacerlo. Le sigue el marco teórico, que no es —como suele creerse— una simple recopilación de citas, sino una construcción argumentativa: justifica las decisiones metodológicas, sitúa el problema en el debate académico vigente y delimita el alcance conceptual del estudio. Solo después viene el diseño metodológico, donde se especifican técnicas de recolección y análisis, y finalmente el cronograma y el presupuesto. Esta secuencia no es burocrática: cada etapa condiciona la siguiente. Un marco teórico débil produce un diseño metodológico mal orientado; un diseño mal orientado produce datos que no responden a la pregunta original. Por eso, los paradigmas de investigación importan tanto: el positivista privilegia la cuantificación y la predicción; el interpretativo, la comprensión del significado que los actores dan a su realidad; el crítico, la transformación de estructuras sociales inequitativas. Cada uno define qué preguntas son legítimas y qué métodos las responden.",
  q:"Relaciona cada paradigma de investigación con su objetivo central según el texto.",
  leftItems:["Positivista","Interpretativo","Crítico"],
  rightItems:["Transformar estructuras sociales inequitativas","Cuantificar y predecir","Comprender el significado que los actores dan a su realidad"],
  correctPairs:[[0,0],[1,1],[2,2]],
  expl:"Positivista = cuantificar y predecir; Interpretativo = comprender significados; Crítico = transformar estructuras."
},
{
  id:210, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"A",
  pTitle:"El protocolo y el marco teórico de la investigación",
  passage:"Toda investigación seria comienza antes de recolectar el primer dato: comienza en el protocolo. El protocolo de investigación es el documento que guía el proceso completo y refleja, en su orden interno, la lógica del método científico. Su primera sección es el planteamiento del problema, donde el investigador delimita qué pregunta busca responder y por qué importa hacerlo. Le sigue el marco teórico, que no es —como suele creerse— una simple recopilación de citas, sino una construcción argumentativa: justifica las decisiones metodológicas, sitúa el problema en el debate académico vigente y delimita el alcance conceptual del estudio. Solo después viene el diseño metodológico, donde se especifican técnicas de recolección y análisis, y finalmente el cronograma y el presupuesto. Esta secuencia no es burocrática: cada etapa condiciona la siguiente. Un marco teórico débil produce un diseño metodológico mal orientado; un diseño mal orientado produce datos que no responden a la pregunta original. Por eso, los paradigmas de investigación importan tanto: el positivista privilegia la cuantificación y la predicción; el interpretativo, la comprensión del significado que los actores dan a su realidad; el crítico, la transformación de estructuras sociales inequitativas. Cada uno define qué preguntas son legítimas y qué métodos las responden.",
  q:"De acuerdo con el texto, los paradigmas de investigación importan porque cada uno define ________.",
  opts:["el presupuesto disponible para el estudio.","qué preguntas son legítimas y qué métodos las responden.","el cronograma y los plazos institucionales del proyecto."],
  correct:1, expl:"El cierre del texto afirma literalmente que cada paradigma 'define qué preguntas son legítimas y qué métodos las responden'."
},
{
  id:211, sub:"1.1", label:"Comprensión lectora – Ámbito de estudio", fmt:"B",
  pTitle:"El protocolo y el marco teórico de la investigación",
  passage:"Toda investigación seria comienza antes de recolectar el primer dato: comienza en el protocolo. El protocolo de investigación es el documento que guía el proceso completo y refleja, en su orden interno, la lógica del método científico. Su primera sección es el planteamiento del problema, donde el investigador delimita qué pregunta busca responder y por qué importa hacerlo. Le sigue el marco teórico, que no es —como suele creerse— una simple recopilación de citas, sino una construcción argumentativa: justifica las decisiones metodológicas, sitúa el problema en el debate académico vigente y delimita el alcance conceptual del estudio. Solo después viene el diseño metodológico, donde se especifican técnicas de recolección y análisis, y finalmente el cronograma y el presupuesto. Esta secuencia no es burocrática: cada etapa condiciona la siguiente. Un marco teórico débil produce un diseño metodológico mal orientado; un diseño mal orientado produce datos que no responden a la pregunta original. Por eso, los paradigmas de investigación importan tanto: el positivista privilegia la cuantificación y la predicción; el interpretativo, la comprensión del significado que los actores dan a su realidad; el crítico, la transformación de estructuras sociales inequitativas. Cada uno define qué preguntas son legítimas y qué métodos las responden.",
  q:"Un marco teórico débil, según el texto, produce un diseño metodológico ________ y, en consecuencia, datos que no responden a la pregunta original.",
  opts:["sobredimensionado","mal orientado","sobrefinanciado"],
  correct:1, expl:"El texto encadena: 'un marco teórico débil produce un diseño metodológico mal orientado; un diseño mal orientado produce datos que no responden a la pregunta original'."
},

// ═══════════════════════════════════════════════════════════
//  1.2  Comprensión lectora – Ámbito literario
//  3 paquetes de 6 preguntas (cada paquete = 1 texto)
//  En cada simulacro se eligen 2 paquetes = 12 preguntas
// ═══════════════════════════════════════════════════════════

// ─── PAQUETE 1.2·A: "El narrador y el perspectivismo en la novela moderna" ───
{
  id:13, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"A",
  pTitle:"El narrador y el perspectivismo en la novela moderna",
  passage:"Una de las apuestas más radicales de la narrativa contemporánea ha sido descentrar al narrador omnisciente, esa voz que durante el siglo XIX parecía contener la verdad completa del relato. La novela moderna, en cambio, multiplica los puntos de vista y juega con narradores cuya versión de los hechos el lector no puede aceptar sin reservas. Aparece así el narrador no confiable: una voz que, por limitaciones cognitivas, intereses personales o evidente parcialidad, obliga al lector a construir activamente la 'verdad' a partir de contradicciones y silencios del relato. El perspectivismo lleva esta operación un paso más allá: presenta un mismo hecho desde los puntos de vista de distintos personajes, frecuentemente contradictorios entre sí. La 'versión oficial' se relativiza y la realidad aparece como una construcción parcial, condicionada por quien la enuncia. A esta arquitectura se suma con frecuencia la ironía dramática: el lector sabe algo que el personaje ignora, y esa asimetría de información genera tensión, anticipación o humor, convirtiéndolo en cómplice del autor. La novela moderna ya no propone, entonces, un mundo descrito desde fuera, sino un campo de visiones parciales que el lector debe componer.",
  q:"Según el texto, ¿qué exige al lector la presencia de un narrador no confiable?",
  opts:["Aceptar la versión del narrador como la única verdad posible en la ficción.","Reconstruir activamente los hechos a partir de las contradicciones y silencios del relato.","Identificar la identidad real del autor para acceder a la verdad oculta del texto."],
  correct:1, expl:"El texto dice que el narrador no confiable 'obliga al lector a construir activamente la verdad a partir de contradicciones y silencios'."
},
{
  id:14, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"B",
  pTitle:"El narrador y el perspectivismo en la novela moderna",
  passage:"Una de las apuestas más radicales de la narrativa contemporánea ha sido descentrar al narrador omnisciente, esa voz que durante el siglo XIX parecía contener la verdad completa del relato. La novela moderna, en cambio, multiplica los puntos de vista y juega con narradores cuya versión de los hechos el lector no puede aceptar sin reservas. Aparece así el narrador no confiable: una voz que, por limitaciones cognitivas, intereses personales o evidente parcialidad, obliga al lector a construir activamente la 'verdad' a partir de contradicciones y silencios del relato. El perspectivismo lleva esta operación un paso más allá: presenta un mismo hecho desde los puntos de vista de distintos personajes, frecuentemente contradictorios entre sí. La 'versión oficial' se relativiza y la realidad aparece como una construcción parcial, condicionada por quien la enuncia. A esta arquitectura se suma con frecuencia la ironía dramática: el lector sabe algo que el personaje ignora, y esa asimetría de información genera tensión, anticipación o humor, convirtiéndolo en cómplice del autor. La novela moderna ya no propone, entonces, un mundo descrito desde fuera, sino un campo de visiones parciales que el lector debe componer.",
  q:"El perspectivismo narrativo subraya que la realidad representada es una construcción ________, al mostrar versiones contradictorias de un mismo hecho.",
  opts:["objetiva y verificable","parcial y condicionada por el punto de vista","universal y compartida por todos los personajes"],
  correct:1, expl:"El texto afirma que el perspectivismo 'relativiza la versión oficial' y muestra la realidad como 'una construcción parcial, condicionada por quien la enuncia'."
},
{
  id:15, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"A",
  pTitle:"El narrador y el perspectivismo en la novela moderna",
  passage:"Una de las apuestas más radicales de la narrativa contemporánea ha sido descentrar al narrador omnisciente, esa voz que durante el siglo XIX parecía contener la verdad completa del relato. La novela moderna, en cambio, multiplica los puntos de vista y juega con narradores cuya versión de los hechos el lector no puede aceptar sin reservas. Aparece así el narrador no confiable: una voz que, por limitaciones cognitivas, intereses personales o evidente parcialidad, obliga al lector a construir activamente la 'verdad' a partir de contradicciones y silencios del relato. El perspectivismo lleva esta operación un paso más allá: presenta un mismo hecho desde los puntos de vista de distintos personajes, frecuentemente contradictorios entre sí. La 'versión oficial' se relativiza y la realidad aparece como una construcción parcial, condicionada por quien la enuncia. A esta arquitectura se suma con frecuencia la ironía dramática: el lector sabe algo que el personaje ignora, y esa asimetría de información genera tensión, anticipación o humor, convirtiéndolo en cómplice del autor. La novela moderna ya no propone, entonces, un mundo descrito desde fuera, sino un campo de visiones parciales que el lector debe componer.",
  q:"¿Cuál es el rasgo definitorio de la ironía dramática según el texto?",
  opts:["El uso deliberado de un lenguaje figurado por parte del narrador.","La asimetría de información entre el lector y el personaje.","La existencia de un narrador que miente conscientemente al lector."],
  correct:1, expl:"El texto define la ironía dramática como la situación en la que 'el lector sabe algo que el personaje ignora', una asimetría de información."
},
{
  id:16, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"D",
  pTitle:"El narrador y el perspectivismo en la novela moderna",
  passage:"Una de las apuestas más radicales de la narrativa contemporánea ha sido descentrar al narrador omnisciente, esa voz que durante el siglo XIX parecía contener la verdad completa del relato. La novela moderna, en cambio, multiplica los puntos de vista y juega con narradores cuya versión de los hechos el lector no puede aceptar sin reservas. Aparece así el narrador no confiable: una voz que, por limitaciones cognitivas, intereses personales o evidente parcialidad, obliga al lector a construir activamente la 'verdad' a partir de contradicciones y silencios del relato. El perspectivismo lleva esta operación un paso más allá: presenta un mismo hecho desde los puntos de vista de distintos personajes, frecuentemente contradictorios entre sí. La 'versión oficial' se relativiza y la realidad aparece como una construcción parcial, condicionada por quien la enuncia. A esta arquitectura se suma con frecuencia la ironía dramática: el lector sabe algo que el personaje ignora, y esa asimetría de información genera tensión, anticipación o humor, convirtiéndolo en cómplice del autor. La novela moderna ya no propone, entonces, un mundo descrito desde fuera, sino un campo de visiones parciales que el lector debe componer.",
  q:"Relaciona cada recurso narrativo con su definición tal como aparece en el texto.",
  leftItems:["Narrador omnisciente","Narrador no confiable","Perspectivismo"],
  rightItems:["Multiplicación de puntos de vista contradictorios sobre un mismo hecho","Voz que parecía contener la verdad completa del relato","Voz cuyo testimonio el lector no puede aceptar sin reservas"],
  correctPairs:[[0,1],[1,2],[2,0]],
  expl:"Omnisciente = voz con la verdad completa; no confiable = voz dudosa; perspectivismo = multiplicación de puntos de vista."
},
{
  id:17, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"B",
  pTitle:"El narrador y el perspectivismo en la novela moderna",
  passage:"Una de las apuestas más radicales de la narrativa contemporánea ha sido descentrar al narrador omnisciente, esa voz que durante el siglo XIX parecía contener la verdad completa del relato. La novela moderna, en cambio, multiplica los puntos de vista y juega con narradores cuya versión de los hechos el lector no puede aceptar sin reservas. Aparece así el narrador no confiable: una voz que, por limitaciones cognitivas, intereses personales o evidente parcialidad, obliga al lector a construir activamente la 'verdad' a partir de contradicciones y silencios del relato. El perspectivismo lleva esta operación un paso más allá: presenta un mismo hecho desde los puntos de vista de distintos personajes, frecuentemente contradictorios entre sí. La 'versión oficial' se relativiza y la realidad aparece como una construcción parcial, condicionada por quien la enuncia. A esta arquitectura se suma con frecuencia la ironía dramática: el lector sabe algo que el personaje ignora, y esa asimetría de información genera tensión, anticipación o humor, convirtiéndolo en cómplice del autor. La novela moderna ya no propone, entonces, un mundo descrito desde fuera, sino un campo de visiones parciales que el lector debe componer.",
  q:"La ironía dramática convierte al lector en ________ del autor, porque comparten información que el personaje desconoce.",
  opts:["adversario","cómplice","sustituto"],
  correct:1, expl:"El texto afirma literalmente que la ironía dramática convierte al lector 'en cómplice del autor'."
},
{
  id:18, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"A",
  pTitle:"El narrador y el perspectivismo en la novela moderna",
  passage:"Una de las apuestas más radicales de la narrativa contemporánea ha sido descentrar al narrador omnisciente, esa voz que durante el siglo XIX parecía contener la verdad completa del relato. La novela moderna, en cambio, multiplica los puntos de vista y juega con narradores cuya versión de los hechos el lector no puede aceptar sin reservas. Aparece así el narrador no confiable: una voz que, por limitaciones cognitivas, intereses personales o evidente parcialidad, obliga al lector a construir activamente la 'verdad' a partir de contradicciones y silencios del relato. El perspectivismo lleva esta operación un paso más allá: presenta un mismo hecho desde los puntos de vista de distintos personajes, frecuentemente contradictorios entre sí. La 'versión oficial' se relativiza y la realidad aparece como una construcción parcial, condicionada por quien la enuncia. A esta arquitectura se suma con frecuencia la ironía dramática: el lector sabe algo que el personaje ignora, y esa asimetría de información genera tensión, anticipación o humor, convirtiéndolo en cómplice del autor. La novela moderna ya no propone, entonces, un mundo descrito desde fuera, sino un campo de visiones parciales que el lector debe componer.",
  q:"¿Cuál es la idea central del último enunciado del texto?",
  opts:["La novela moderna pretende describir el mundo con mayor objetividad que la novela del siglo XIX.","La novela moderna entrega visiones parciales que el lector debe componer activamente.","La novela moderna abandona al lector porque elimina todo punto de vista narrativo."],
  correct:1, expl:"El cierre sostiene que la novela moderna ya no es un mundo descrito desde fuera 'sino un campo de visiones parciales que el lector debe componer'."
},

// ─── PAQUETE 1.2·B: "Figuras retóricas y la lectura del lenguaje poético" ───
{
  id:212, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"A",
  pTitle:"Figuras retóricas y la lectura del lenguaje poético",
  passage:"Las figuras retóricas son procedimientos del lenguaje que apartan al discurso de su uso meramente referencial para dotarlo de expresividad. La tradición las divide en dos grandes familias. Las figuras de dicción operan sobre la forma sonora y gramatical: la aliteración repite sonidos para crear efectos musicales, el hipérbaton altera el orden lógico de la oración para enfatizar un elemento. Las figuras de pensamiento, en cambio, trabajan sobre el contenido semántico: la antítesis contrapone dos ideas opuestas en paralelo; la paradoja propone una afirmación aparentemente contradictoria que, leída con atención, revela una verdad profunda; el eufemismo sustituye una expresión dura por otra más suave; la metáfora identifica dos realidades distintas para iluminar una a través de la otra. Leer poesía exige, por tanto, no quedarse en la superficie literal del enunciado. Cuando un poeta escribe 'el mar se durmió en la arena', no informa de un hecho zoológico imposible: usa una personificación para sugerir calma, abandono o silencio. La figura no es ornamento prescindible: es el modo en que el lenguaje poético construye sentido.",
  q:"Según el texto, ¿qué distingue a las figuras de pensamiento de las figuras de dicción?",
  opts:["Las de pensamiento operan sobre el contenido semántico; las de dicción, sobre la forma sonora y gramatical.","Las de pensamiento son modernas; las de dicción, exclusivamente clásicas.","Las de pensamiento se usan solo en prosa; las de dicción, solo en poesía."],
  correct:0, expl:"El texto opone explícitamente las dos familias: dicción = forma sonora y gramatical; pensamiento = contenido semántico."
},
{
  id:213, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"D",
  pTitle:"Figuras retóricas y la lectura del lenguaje poético",
  passage:"Las figuras retóricas son procedimientos del lenguaje que apartan al discurso de su uso meramente referencial para dotarlo de expresividad. La tradición las divide en dos grandes familias. Las figuras de dicción operan sobre la forma sonora y gramatical: la aliteración repite sonidos para crear efectos musicales, el hipérbaton altera el orden lógico de la oración para enfatizar un elemento. Las figuras de pensamiento, en cambio, trabajan sobre el contenido semántico: la antítesis contrapone dos ideas opuestas en paralelo; la paradoja propone una afirmación aparentemente contradictoria que, leída con atención, revela una verdad profunda; el eufemismo sustituye una expresión dura por otra más suave; la metáfora identifica dos realidades distintas para iluminar una a través de la otra. Leer poesía exige, por tanto, no quedarse en la superficie literal del enunciado. Cuando un poeta escribe 'el mar se durmió en la arena', no informa de un hecho zoológico imposible: usa una personificación para sugerir calma, abandono o silencio. La figura no es ornamento prescindible: es el modo en que el lenguaje poético construye sentido.",
  q:"Relaciona cada figura de pensamiento con su mecanismo de significación.",
  leftItems:["Antítesis","Paradoja","Eufemismo"],
  rightItems:["Sustitución de una expresión dura por otra más suave","Contraposición de dos ideas opuestas en paralelo","Afirmación aparentemente contradictoria que revela una verdad profunda"],
  correctPairs:[[0,1],[1,2],[2,0]],
  expl:"Antítesis = oposición en paralelo; paradoja = contradicción aparente que revela verdad; eufemismo = suavizar lo duro."
},
{
  id:214, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"B",
  pTitle:"Figuras retóricas y la lectura del lenguaje poético",
  passage:"Las figuras retóricas son procedimientos del lenguaje que apartan al discurso de su uso meramente referencial para dotarlo de expresividad. La tradición las divide en dos grandes familias. Las figuras de dicción operan sobre la forma sonora y gramatical: la aliteración repite sonidos para crear efectos musicales, el hipérbaton altera el orden lógico de la oración para enfatizar un elemento. Las figuras de pensamiento, en cambio, trabajan sobre el contenido semántico: la antítesis contrapone dos ideas opuestas en paralelo; la paradoja propone una afirmación aparentemente contradictoria que, leída con atención, revela una verdad profunda; el eufemismo sustituye una expresión dura por otra más suave; la metáfora identifica dos realidades distintas para iluminar una a través de la otra. Leer poesía exige, por tanto, no quedarse en la superficie literal del enunciado. Cuando un poeta escribe 'el mar se durmió en la arena', no informa de un hecho zoológico imposible: usa una personificación para sugerir calma, abandono o silencio. La figura no es ornamento prescindible: es el modo en que el lenguaje poético construye sentido.",
  q:"En la frase 'el mar se durmió en la arena', el poeta atribuye una acción humana a un elemento natural: se trata de una ________.",
  opts:["aliteración","personificación","antítesis"],
  correct:1, expl:"El texto identifica explícitamente este recurso como personificación, una atribución de rasgos humanos a lo no humano."
},
{
  id:215, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"A",
  pTitle:"Figuras retóricas y la lectura del lenguaje poético",
  passage:"Las figuras retóricas son procedimientos del lenguaje que apartan al discurso de su uso meramente referencial para dotarlo de expresividad. La tradición las divide en dos grandes familias. Las figuras de dicción operan sobre la forma sonora y gramatical: la aliteración repite sonidos para crear efectos musicales, el hipérbaton altera el orden lógico de la oración para enfatizar un elemento. Las figuras de pensamiento, en cambio, trabajan sobre el contenido semántico: la antítesis contrapone dos ideas opuestas en paralelo; la paradoja propone una afirmación aparentemente contradictoria que, leída con atención, revela una verdad profunda; el eufemismo sustituye una expresión dura por otra más suave; la metáfora identifica dos realidades distintas para iluminar una a través de la otra. Leer poesía exige, por tanto, no quedarse en la superficie literal del enunciado. Cuando un poeta escribe 'el mar se durmió en la arena', no informa de un hecho zoológico imposible: usa una personificación para sugerir calma, abandono o silencio. La figura no es ornamento prescindible: es el modo en que el lenguaje poético construye sentido.",
  q:"De acuerdo con el texto, ¿qué función cumple la metáfora?",
  opts:["Sustituir una palabra dura por otra más suave para no ofender al lector.","Identificar dos realidades distintas para iluminar una a través de la otra.","Repetir sonidos consonantes para producir un efecto musical."],
  correct:1, expl:"El texto define la metáfora como aquella que 'identifica dos realidades distintas para iluminar una a través de la otra'."
},
{
  id:216, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"B",
  pTitle:"Figuras retóricas y la lectura del lenguaje poético",
  passage:"Las figuras retóricas son procedimientos del lenguaje que apartan al discurso de su uso meramente referencial para dotarlo de expresividad. La tradición las divide en dos grandes familias. Las figuras de dicción operan sobre la forma sonora y gramatical: la aliteración repite sonidos para crear efectos musicales, el hipérbaton altera el orden lógico de la oración para enfatizar un elemento. Las figuras de pensamiento, en cambio, trabajan sobre el contenido semántico: la antítesis contrapone dos ideas opuestas en paralelo; la paradoja propone una afirmación aparentemente contradictoria que, leída con atención, revela una verdad profunda; el eufemismo sustituye una expresión dura por otra más suave; la metáfora identifica dos realidades distintas para iluminar una a través de la otra. Leer poesía exige, por tanto, no quedarse en la superficie literal del enunciado. Cuando un poeta escribe 'el mar se durmió en la arena', no informa de un hecho zoológico imposible: usa una personificación para sugerir calma, abandono o silencio. La figura no es ornamento prescindible: es el modo en que el lenguaje poético construye sentido.",
  q:"El hipérbaton, según el texto, altera el ________ de la oración para enfatizar un elemento.",
  opts:["sonido","orden lógico","tono emocional"],
  correct:1, expl:"El texto define el hipérbaton como la figura que 'altera el orden lógico de la oración para enfatizar un elemento'."
},
{
  id:217, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"A",
  pTitle:"Figuras retóricas y la lectura del lenguaje poético",
  passage:"Las figuras retóricas son procedimientos del lenguaje que apartan al discurso de su uso meramente referencial para dotarlo de expresividad. La tradición las divide en dos grandes familias. Las figuras de dicción operan sobre la forma sonora y gramatical: la aliteración repite sonidos para crear efectos musicales, el hipérbaton altera el orden lógico de la oración para enfatizar un elemento. Las figuras de pensamiento, en cambio, trabajan sobre el contenido semántico: la antítesis contrapone dos ideas opuestas en paralelo; la paradoja propone una afirmación aparentemente contradictoria que, leída con atención, revela una verdad profunda; el eufemismo sustituye una expresión dura por otra más suave; la metáfora identifica dos realidades distintas para iluminar una a través de la otra. Leer poesía exige, por tanto, no quedarse en la superficie literal del enunciado. Cuando un poeta escribe 'el mar se durmió en la arena', no informa de un hecho zoológico imposible: usa una personificación para sugerir calma, abandono o silencio. La figura no es ornamento prescindible: es el modo en que el lenguaje poético construye sentido.",
  q:"¿Cuál es la idea central que cierra el texto sobre la función de las figuras retóricas?",
  opts:["Son adornos decorativos que el lector puede ignorar sin perder el sentido del poema.","Son el modo en que el lenguaje poético construye sentido, no un ornamento prescindible.","Son recursos exclusivos de la lírica que la prosa rechaza por completo."],
  correct:1, expl:"El texto concluye que 'la figura no es ornamento prescindible: es el modo en que el lenguaje poético construye sentido'."
},

// ─── PAQUETE 1.2·C: "El cuento breve: estructura, tensión y final" ───
{
  id:218, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"A",
  pTitle:"El cuento breve: estructura, tensión y final",
  passage:"Horacio Quiroga, en su célebre Decálogo del perfecto cuentista, escribió que el cuento es como una flecha: sale del arco con un destino preciso y no debe desviarse. La afirmación condensa una poética. A diferencia de la novela, que admite digresiones, personajes secundarios y mundos paralelos, el cuento breve exige economía: cada palabra debe contribuir al efecto único que el autor persigue. Su estructura clásica recorre cuatro momentos. Comienza con la situación inicial, donde se presentan personajes y entorno. Sigue el conflicto, la fuerza perturbadora que rompe el equilibrio inicial. A continuación viene el desarrollo, en el que la tensión crece y las posibilidades de resolución se reducen. Y, finalmente, el desenlace: el momento en que el conflicto se resuelve, casi siempre con un giro inesperado o una revelación que reordena retrospectivamente todo lo leído. Este 'efecto único' del cuento depende de que el lector llegue al final sin verlo venir y, al mismo tiempo, sienta que ese final era el único posible. Por eso los cuentistas trabajan los primeros párrafos con tanta atención: en el cuento, el comienzo y el final dialogan más que en cualquier otro género.",
  q:"Según el texto, ¿qué exige el cuento breve a diferencia de la novela?",
  opts:["Una extensión mínima de cien páginas para construir el efecto único.","Economía: cada palabra debe contribuir al efecto único del relato.","La presencia de múltiples narradores y subtramas paralelas."],
  correct:1, expl:"El texto opone novela y cuento y afirma que este último exige 'economía: cada palabra debe contribuir al efecto único que el autor persigue'."
},
{
  id:219, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"C",
  pTitle:"El cuento breve: estructura, tensión y final",
  passage:"Horacio Quiroga, en su célebre Decálogo del perfecto cuentista, escribió que el cuento es como una flecha: sale del arco con un destino preciso y no debe desviarse. La afirmación condensa una poética. A diferencia de la novela, que admite digresiones, personajes secundarios y mundos paralelos, el cuento breve exige economía: cada palabra debe contribuir al efecto único que el autor persigue. Su estructura clásica recorre cuatro momentos. Comienza con la situación inicial, donde se presentan personajes y entorno. Sigue el conflicto, la fuerza perturbadora que rompe el equilibrio inicial. A continuación viene el desarrollo, en el que la tensión crece y las posibilidades de resolución se reducen. Y, finalmente, el desenlace: el momento en que el conflicto se resuelve, casi siempre con un giro inesperado o una revelación que reordena retrospectivamente todo lo leído. Este 'efecto único' del cuento depende de que el lector llegue al final sin verlo venir y, al mismo tiempo, sienta que ese final era el único posible. Por eso los cuentistas trabajan los primeros párrafos con tanta atención: en el cuento, el comienzo y el final dialogan más que en cualquier otro género.",
  q:"Ordena los cuatro momentos de la estructura clásica del cuento, del primero al último.",
  items:["Desarrollo","Situación inicial","Desenlace","Conflicto"],
  correctOrder:[1,3,0,2],
  expl:"El orden es: situación inicial → conflicto → desarrollo → desenlace."
},
{
  id:220, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"B",
  pTitle:"El cuento breve: estructura, tensión y final",
  passage:"Horacio Quiroga, en su célebre Decálogo del perfecto cuentista, escribió que el cuento es como una flecha: sale del arco con un destino preciso y no debe desviarse. La afirmación condensa una poética. A diferencia de la novela, que admite digresiones, personajes secundarios y mundos paralelos, el cuento breve exige economía: cada palabra debe contribuir al efecto único que el autor persigue. Su estructura clásica recorre cuatro momentos. Comienza con la situación inicial, donde se presentan personajes y entorno. Sigue el conflicto, la fuerza perturbadora que rompe el equilibrio inicial. A continuación viene el desarrollo, en el que la tensión crece y las posibilidades de resolución se reducen. Y, finalmente, el desenlace: el momento en que el conflicto se resuelve, casi siempre con un giro inesperado o una revelación que reordena retrospectivamente todo lo leído. Este 'efecto único' del cuento depende de que el lector llegue al final sin verlo venir y, al mismo tiempo, sienta que ese final era el único posible. Por eso los cuentistas trabajan los primeros párrafos con tanta atención: en el cuento, el comienzo y el final dialogan más que en cualquier otro género.",
  q:"En la estructura del cuento, el conflicto es la fuerza perturbadora que rompe el ________ inicial.",
  opts:["clímax","equilibrio","desenlace"],
  correct:1, expl:"El texto define el conflicto como 'la fuerza perturbadora que rompe el equilibrio inicial'."
},
{
  id:221, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"D",
  pTitle:"El cuento breve: estructura, tensión y final",
  passage:"Horacio Quiroga, en su célebre Decálogo del perfecto cuentista, escribió que el cuento es como una flecha: sale del arco con un destino preciso y no debe desviarse. La afirmación condensa una poética. A diferencia de la novela, que admite digresiones, personajes secundarios y mundos paralelos, el cuento breve exige economía: cada palabra debe contribuir al efecto único que el autor persigue. Su estructura clásica recorre cuatro momentos. Comienza con la situación inicial, donde se presentan personajes y entorno. Sigue el conflicto, la fuerza perturbadora que rompe el equilibrio inicial. A continuación viene el desarrollo, en el que la tensión crece y las posibilidades de resolución se reducen. Y, finalmente, el desenlace: el momento en que el conflicto se resuelve, casi siempre con un giro inesperado o una revelación que reordena retrospectivamente todo lo leído. Este 'efecto único' del cuento depende de que el lector llegue al final sin verlo venir y, al mismo tiempo, sienta que ese final era el único posible. Por eso los cuentistas trabajan los primeros párrafos con tanta atención: en el cuento, el comienzo y el final dialogan más que en cualquier otro género.",
  q:"Relaciona cada momento de la estructura del cuento con lo que ocurre en él.",
  leftItems:["Situación inicial","Conflicto","Desenlace"],
  rightItems:["Aparece una fuerza perturbadora que rompe el equilibrio","Se resuelve la tensión, a menudo con un giro inesperado","Se presentan los personajes y el entorno"],
  correctPairs:[[0,2],[1,0],[2,1]],
  expl:"Situación inicial = presentación; conflicto = fuerza perturbadora; desenlace = resolución con giro."
},
{
  id:222, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"A",
  pTitle:"El cuento breve: estructura, tensión y final",
  passage:"Horacio Quiroga, en su célebre Decálogo del perfecto cuentista, escribió que el cuento es como una flecha: sale del arco con un destino preciso y no debe desviarse. La afirmación condensa una poética. A diferencia de la novela, que admite digresiones, personajes secundarios y mundos paralelos, el cuento breve exige economía: cada palabra debe contribuir al efecto único que el autor persigue. Su estructura clásica recorre cuatro momentos. Comienza con la situación inicial, donde se presentan personajes y entorno. Sigue el conflicto, la fuerza perturbadora que rompe el equilibrio inicial. A continuación viene el desarrollo, en el que la tensión crece y las posibilidades de resolución se reducen. Y, finalmente, el desenlace: el momento en que el conflicto se resuelve, casi siempre con un giro inesperado o una revelación que reordena retrospectivamente todo lo leído. Este 'efecto único' del cuento depende de que el lector llegue al final sin verlo venir y, al mismo tiempo, sienta que ese final era el único posible. Por eso los cuentistas trabajan los primeros párrafos con tanta atención: en el cuento, el comienzo y el final dialogan más que en cualquier otro género.",
  q:"¿Qué condición debe cumplir el desenlace del cuento para producir el 'efecto único' que describe el texto?",
  opts:["Que sea anunciado claramente desde la primera página para preparar al lector.","Que sorprenda al lector y, al mismo tiempo, parezca el único final posible.","Que deje el conflicto sin resolver para invitar a una segunda lectura."],
  correct:1, expl:"El texto afirma que el efecto único depende de que el lector llegue al final 'sin verlo venir y, al mismo tiempo, sienta que ese final era el único posible'."
},
{
  id:223, sub:"1.2", label:"Comprensión lectora – Ámbito literario", fmt:"B",
  pTitle:"El cuento breve: estructura, tensión y final",
  passage:"Horacio Quiroga, en su célebre Decálogo del perfecto cuentista, escribió que el cuento es como una flecha: sale del arco con un destino preciso y no debe desviarse. La afirmación condensa una poética. A diferencia de la novela, que admite digresiones, personajes secundarios y mundos paralelos, el cuento breve exige economía: cada palabra debe contribuir al efecto único que el autor persigue. Su estructura clásica recorre cuatro momentos. Comienza con la situación inicial, donde se presentan personajes y entorno. Sigue el conflicto, la fuerza perturbadora que rompe el equilibrio inicial. A continuación viene el desarrollo, en el que la tensión crece y las posibilidades de resolución se reducen. Y, finalmente, el desenlace: el momento en que el conflicto se resuelve, casi siempre con un giro inesperado o una revelación que reordena retrospectivamente todo lo leído. Este 'efecto único' del cuento depende de que el lector llegue al final sin verlo venir y, al mismo tiempo, sienta que ese final era el único posible. Por eso los cuentistas trabajan los primeros párrafos con tanta atención: en el cuento, el comienzo y el final dialogan más que en cualquier otro género.",
  q:"Según el texto, en el cuento el comienzo y el final ________ más que en cualquier otro género.",
  opts:["se contradicen","dialogan","se ignoran"],
  correct:1, expl:"El texto cierra afirmando que 'en el cuento, el comienzo y el final dialogan más que en cualquier otro género'."
},

// ═══════════════════════════════════════════════════════════
//  1.3  Comprensión lectora – Ámbito de participación social
//  3 paquetes de 6 preguntas (cada paquete = 1 texto)
//  En cada simulacro se elige 1 paquete = 6 preguntas
// ═══════════════════════════════════════════════════════════

// ─── PAQUETE 1.3·A: "Medios, agenda y posverdad en la opinión pública" ───
{
  id:25, sub:"1.3", label:"Comprensión lectora – Ámbito de participación social", fmt:"A",
  pTitle:"Medios, agenda y posverdad en la opinión pública",
  passage:"La teoría del establecimiento de agenda, o agenda setting, sostiene que los medios de comunicación no determinan qué piensa la gente, pero sí sobre qué piensa. Los temas que reciben más cobertura son los que el público percibe como más importantes; los que quedan fuera del relato mediático, sencillamente desaparecen del debate. Este poder de selección temática convierte a los medios en actores políticos, aunque se presenten como meros informadores. A esta dinámica clásica se ha sumado, en los últimos años, un fenómeno más profundo: la posverdad. En un entorno de posverdad, los hechos objetivos pierden capacidad de persuasión frente a las apelaciones a emociones y creencias personales. No se trata de que la verdad haya desaparecido —los datos siguen ahí, verificables— sino de que ha dejado de mover opiniones cuando colisiona con un sentimiento previo. La situación se complica con las llamadas burbujas de filtro: los algoritmos de redes sociales aprenden qué tipo de contenido genera reacción en cada usuario y le sirven cada vez más del mismo, lo que termina aislándolo en un ambiente informativo a la medida. El resultado es un ecosistema donde el ciudadano cree estar bien informado, pero solo accede a una porción cuidadosamente seleccionada de la realidad.",
  q:"¿Cuál es la distinción central que plantea la teoría del agenda setting?",
  opts:["Los medios determinan directamente las opiniones políticas de los ciudadanos.","Los medios no dictan las opiniones, pero sí definen qué temas se consideran relevantes.","Los medios son políticamente neutrales mientras se limiten a reportar hechos."],
  correct:1, expl:"El texto distingue 'qué piensa la gente' (opiniones) de 'sobre qué piensa' (temas); el poder mediático opera en este segundo nivel."
},
{
  id:26, sub:"1.3", label:"Comprensión lectora – Ámbito de participación social", fmt:"B",
  pTitle:"Medios, agenda y posverdad en la opinión pública",
  passage:"La teoría del establecimiento de agenda, o agenda setting, sostiene que los medios de comunicación no determinan qué piensa la gente, pero sí sobre qué piensa. Los temas que reciben más cobertura son los que el público percibe como más importantes; los que quedan fuera del relato mediático, sencillamente desaparecen del debate. Este poder de selección temática convierte a los medios en actores políticos, aunque se presenten como meros informadores. A esta dinámica clásica se ha sumado, en los últimos años, un fenómeno más profundo: la posverdad. En un entorno de posverdad, los hechos objetivos pierden capacidad de persuasión frente a las apelaciones a emociones y creencias personales. No se trata de que la verdad haya desaparecido —los datos siguen ahí, verificables— sino de que ha dejado de mover opiniones cuando colisiona con un sentimiento previo. La situación se complica con las llamadas burbujas de filtro: los algoritmos de redes sociales aprenden qué tipo de contenido genera reacción en cada usuario y le sirven cada vez más del mismo, lo que termina aislándolo en un ambiente informativo a la medida. El resultado es un ecosistema donde el ciudadano cree estar bien informado, pero solo accede a una porción cuidadosamente seleccionada de la realidad.",
  q:"Según el texto, en un entorno de posverdad los hechos no desaparecen, pero pierden su capacidad de ________ frente al impacto emocional.",
  opts:["verificación","persuasión","publicación"],
  correct:1, expl:"El texto afirma que en la posverdad los hechos 'han dejado de mover opiniones' y han perdido 'capacidad de persuasión'."
},
{
  id:27, sub:"1.3", label:"Comprensión lectora – Ámbito de participación social", fmt:"A",
  pTitle:"Medios, agenda y posverdad en la opinión pública",
  passage:"La teoría del establecimiento de agenda, o agenda setting, sostiene que los medios de comunicación no determinan qué piensa la gente, pero sí sobre qué piensa. Los temas que reciben más cobertura son los que el público percibe como más importantes; los que quedan fuera del relato mediático, sencillamente desaparecen del debate. Este poder de selección temática convierte a los medios en actores políticos, aunque se presenten como meros informadores. A esta dinámica clásica se ha sumado, en los últimos años, un fenómeno más profundo: la posverdad. En un entorno de posverdad, los hechos objetivos pierden capacidad de persuasión frente a las apelaciones a emociones y creencias personales. No se trata de que la verdad haya desaparecido —los datos siguen ahí, verificables— sino de que ha dejado de mover opiniones cuando colisiona con un sentimiento previo. La situación se complica con las llamadas burbujas de filtro: los algoritmos de redes sociales aprenden qué tipo de contenido genera reacción en cada usuario y le sirven cada vez más del mismo, lo que termina aislándolo en un ambiente informativo a la medida. El resultado es un ecosistema donde el ciudadano cree estar bien informado, pero solo accede a una porción cuidadosamente seleccionada de la realidad.",
  q:"¿Cómo funcionan las burbujas de filtro según el texto?",
  opts:["Bloquean por completo el acceso del usuario a información política controversial.","Aprenden qué contenido genera reacción y sirven más del mismo, aislando al usuario.","Obligan al usuario a verificar manualmente cada noticia antes de compartirla."],
  correct:1, expl:"El texto define las burbujas de filtro como algoritmos que 'aprenden qué tipo de contenido genera reacción' y 'sirven cada vez más del mismo'."
},
{
  id:28, sub:"1.3", label:"Comprensión lectora – Ámbito de participación social", fmt:"D",
  pTitle:"Medios, agenda y posverdad en la opinión pública",
  passage:"La teoría del establecimiento de agenda, o agenda setting, sostiene que los medios de comunicación no determinan qué piensa la gente, pero sí sobre qué piensa. Los temas que reciben más cobertura son los que el público percibe como más importantes; los que quedan fuera del relato mediático, sencillamente desaparecen del debate. Este poder de selección temática convierte a los medios en actores políticos, aunque se presenten como meros informadores. A esta dinámica clásica se ha sumado, en los últimos años, un fenómeno más profundo: la posverdad. En un entorno de posverdad, los hechos objetivos pierden capacidad de persuasión frente a las apelaciones a emociones y creencias personales. No se trata de que la verdad haya desaparecido —los datos siguen ahí, verificables— sino de que ha dejado de mover opiniones cuando colisiona con un sentimiento previo. La situación se complica con las llamadas burbujas de filtro: los algoritmos de redes sociales aprenden qué tipo de contenido genera reacción en cada usuario y le sirven cada vez más del mismo, lo que termina aislándolo en un ambiente informativo a la medida. El resultado es un ecosistema donde el ciudadano cree estar bien informado, pero solo accede a una porción cuidadosamente seleccionada de la realidad.",
  q:"Relaciona cada concepto del texto con su descripción correcta.",
  leftItems:["Agenda setting","Posverdad","Burbuja de filtro"],
  rightItems:["Aislamiento algorítmico del usuario en un ambiente informativo a la medida","Poder de los medios para definir sobre qué temas piensa el público","Pérdida de capacidad persuasiva de los hechos frente a las emociones"],
  correctPairs:[[0,1],[1,2],[2,0]],
  expl:"Agenda setting = qué temas debate el público; Posverdad = los hechos pierden persuasión; Burbuja de filtro = aislamiento algorítmico."
},
{
  id:29, sub:"1.3", label:"Comprensión lectora – Ámbito de participación social", fmt:"A",
  pTitle:"Medios, agenda y posverdad en la opinión pública",
  passage:"La teoría del establecimiento de agenda, o agenda setting, sostiene que los medios de comunicación no determinan qué piensa la gente, pero sí sobre qué piensa. Los temas que reciben más cobertura son los que el público percibe como más importantes; los que quedan fuera del relato mediático, sencillamente desaparecen del debate. Este poder de selección temática convierte a los medios en actores políticos, aunque se presenten como meros informadores. A esta dinámica clásica se ha sumado, en los últimos años, un fenómeno más profundo: la posverdad. En un entorno de posverdad, los hechos objetivos pierden capacidad de persuasión frente a las apelaciones a emociones y creencias personales. No se trata de que la verdad haya desaparecido —los datos siguen ahí, verificables— sino de que ha dejado de mover opiniones cuando colisiona con un sentimiento previo. La situación se complica con las llamadas burbujas de filtro: los algoritmos de redes sociales aprenden qué tipo de contenido genera reacción en cada usuario y le sirven cada vez más del mismo, lo que termina aislándolo en un ambiente informativo a la medida. El resultado es un ecosistema donde el ciudadano cree estar bien informado, pero solo accede a una porción cuidadosamente seleccionada de la realidad.",
  q:"¿Cuál es la idea central que cierra el texto?",
  opts:["Que el ciudadano contemporáneo accede a más información verificable que en cualquier época anterior.","Que el ciudadano cree estar bien informado, pero solo recibe una porción seleccionada de la realidad.","Que los medios tradicionales ya no influyen en la opinión pública por culpa de las redes sociales."],
  correct:1, expl:"El cierre del texto afirma que 'el ciudadano cree estar bien informado, pero solo accede a una porción cuidadosamente seleccionada de la realidad'."
},
{
  id:30, sub:"1.3", label:"Comprensión lectora – Ámbito de participación social", fmt:"B",
  pTitle:"Medios, agenda y posverdad en la opinión pública",
  passage:"La teoría del establecimiento de agenda, o agenda setting, sostiene que los medios de comunicación no determinan qué piensa la gente, pero sí sobre qué piensa. Los temas que reciben más cobertura son los que el público percibe como más importantes; los que quedan fuera del relato mediático, sencillamente desaparecen del debate. Este poder de selección temática convierte a los medios en actores políticos, aunque se presenten como meros informadores. A esta dinámica clásica se ha sumado, en los últimos años, un fenómeno más profundo: la posverdad. En un entorno de posverdad, los hechos objetivos pierden capacidad de persuasión frente a las apelaciones a emociones y creencias personales. No se trata de que la verdad haya desaparecido —los datos siguen ahí, verificables— sino de que ha dejado de mover opiniones cuando colisiona con un sentimiento previo. La situación se complica con las llamadas burbujas de filtro: los algoritmos de redes sociales aprenden qué tipo de contenido genera reacción en cada usuario y le sirven cada vez más del mismo, lo que termina aislándolo en un ambiente informativo a la medida. El resultado es un ecosistema donde el ciudadano cree estar bien informado, pero solo accede a una porción cuidadosamente seleccionada de la realidad.",
  q:"De acuerdo con el texto, el poder de selección temática convierte a los medios en actores ________ aunque se presenten como meros informadores.",
  opts:["comerciales","políticos","académicos"],
  correct:1, expl:"El texto afirma que el poder de selección temática 'convierte a los medios en actores políticos'."
},

// ─── PAQUETE 1.3·B: "Participación ciudadana y democracia directa" ───
{
  id:224, sub:"1.3", label:"Comprensión lectora – Ámbito de participación social", fmt:"A",
  pTitle:"Participación ciudadana y democracia directa",
  passage:"La democracia representativa, en la que los ciudadanos eligen a quienes deciden por ellos, ha sido el modelo dominante de los últimos dos siglos. Sin embargo, su legitimidad se ha visto cuestionada por una sensación creciente de distancia entre representantes y representados. Como respuesta, los sistemas democráticos modernos han incorporado mecanismos de democracia directa que permiten a los ciudadanos incidir en decisiones públicas más allá del voto periódico. El referéndum es el más conocido: una votación vinculante en la que la ciudadanía decide sobre una norma o un asunto de interés nacional. La consulta popular, por su parte, recaba la opinión de la población sobre un tema, pero su resultado no siempre obliga jurídicamente al gobierno. La iniciativa ciudadana invierte la dirección habitual del proceso legislativo: es la propia ciudadanía la que presenta una propuesta de ley ante el Congreso, reuniendo previamente un número determinado de firmas. Junto a estos mecanismos formales operan las organizaciones de la sociedad civil (OSC), que canalizan demandas, fiscalizan políticas públicas y producen información alternativa a la oficial. Su autonomía respecto al Estado y a los partidos políticos es condición necesaria para que funcionen como contrapeso democrático y no como apéndice del poder.",
  q:"Según el texto, ¿qué problema dio origen a la incorporación de mecanismos de democracia directa?",
  opts:["La eliminación legal del voto periódico en la mayoría de los países.","La sensación creciente de distancia entre representantes y representados.","La imposibilidad técnica de organizar elecciones generales en países grandes."],
  correct:1, expl:"El texto afirma que la legitimidad de la democracia representativa 'se ha visto cuestionada por una sensación creciente de distancia entre representantes y representados'."
},
{
  id:225, sub:"1.3", label:"Comprensión lectora – Ámbito de participación social", fmt:"D",
  pTitle:"Participación ciudadana y democracia directa",
  passage:"La democracia representativa, en la que los ciudadanos eligen a quienes deciden por ellos, ha sido el modelo dominante de los últimos dos siglos. Sin embargo, su legitimidad se ha visto cuestionada por una sensación creciente de distancia entre representantes y representados. Como respuesta, los sistemas democráticos modernos han incorporado mecanismos de democracia directa que permiten a los ciudadanos incidir en decisiones públicas más allá del voto periódico. El referéndum es el más conocido: una votación vinculante en la que la ciudadanía decide sobre una norma o un asunto de interés nacional. La consulta popular, por su parte, recaba la opinión de la población sobre un tema, pero su resultado no siempre obliga jurídicamente al gobierno. La iniciativa ciudadana invierte la dirección habitual del proceso legislativo: es la propia ciudadanía la que presenta una propuesta de ley ante el Congreso, reuniendo previamente un número determinado de firmas. Junto a estos mecanismos formales operan las organizaciones de la sociedad civil (OSC), que canalizan demandas, fiscalizan políticas públicas y producen información alternativa a la oficial. Su autonomía respecto al Estado y a los partidos políticos es condición necesaria para que funcionen como contrapeso democrático y no como apéndice del poder.",
  q:"Relaciona cada mecanismo con su descripción correcta según el texto.",
  leftItems:["Referéndum","Consulta popular","Iniciativa ciudadana"],
  rightItems:["Propuesta de ley presentada al Congreso por la propia ciudadanía","Votación vinculante en la que la ciudadanía decide sobre una norma o asunto nacional","Recolección de la opinión de la población cuyo resultado no siempre obliga al gobierno"],
  correctPairs:[[0,1],[1,2],[2,0]],
  expl:"Referéndum = vinculante; Consulta popular = no siempre vinculante; Iniciativa ciudadana = propuesta de ley desde la ciudadanía."
},
{
  id:226, sub:"1.3", label:"Comprensión lectora – Ámbito de participación social", fmt:"B",
  pTitle:"Participación ciudadana y democracia directa",
  passage:"La democracia representativa, en la que los ciudadanos eligen a quienes deciden por ellos, ha sido el modelo dominante de los últimos dos siglos. Sin embargo, su legitimidad se ha visto cuestionada por una sensación creciente de distancia entre representantes y representados. Como respuesta, los sistemas democráticos modernos han incorporado mecanismos de democracia directa que permiten a los ciudadanos incidir en decisiones públicas más allá del voto periódico. El referéndum es el más conocido: una votación vinculante en la que la ciudadanía decide sobre una norma o un asunto de interés nacional. La consulta popular, por su parte, recaba la opinión de la población sobre un tema, pero su resultado no siempre obliga jurídicamente al gobierno. La iniciativa ciudadana invierte la dirección habitual del proceso legislativo: es la propia ciudadanía la que presenta una propuesta de ley ante el Congreso, reuniendo previamente un número determinado de firmas. Junto a estos mecanismos formales operan las organizaciones de la sociedad civil (OSC), que canalizan demandas, fiscalizan políticas públicas y producen información alternativa a la oficial. Su autonomía respecto al Estado y a los partidos políticos es condición necesaria para que funcionen como contrapeso democrático y no como apéndice del poder.",
  q:"Según el texto, la iniciativa ciudadana invierte la dirección del proceso legislativo porque es la propia ________ la que presenta la propuesta de ley.",
  opts:["bancada partidaria","ciudadanía","Suprema Corte"],
  correct:1, expl:"El texto afirma que la iniciativa ciudadana 'invierte la dirección habitual del proceso legislativo' al ser 'la propia ciudadanía' quien presenta la propuesta."
},
{
  id:227, sub:"1.3", label:"Comprensión lectora – Ámbito de participación social", fmt:"A",
  pTitle:"Participación ciudadana y democracia directa",
  passage:"La democracia representativa, en la que los ciudadanos eligen a quienes deciden por ellos, ha sido el modelo dominante de los últimos dos siglos. Sin embargo, su legitimidad se ha visto cuestionada por una sensación creciente de distancia entre representantes y representados. Como respuesta, los sistemas democráticos modernos han incorporado mecanismos de democracia directa que permiten a los ciudadanos incidir en decisiones públicas más allá del voto periódico. El referéndum es el más conocido: una votación vinculante en la que la ciudadanía decide sobre una norma o un asunto de interés nacional. La consulta popular, por su parte, recaba la opinión de la población sobre un tema, pero su resultado no siempre obliga jurídicamente al gobierno. La iniciativa ciudadana invierte la dirección habitual del proceso legislativo: es la propia ciudadanía la que presenta una propuesta de ley ante el Congreso, reuniendo previamente un número determinado de firmas. Junto a estos mecanismos formales operan las organizaciones de la sociedad civil (OSC), que canalizan demandas, fiscalizan políticas públicas y producen información alternativa a la oficial. Su autonomía respecto al Estado y a los partidos políticos es condición necesaria para que funcionen como contrapeso democrático y no como apéndice del poder.",
  q:"De acuerdo con el texto, ¿cuál es la condición indispensable para que una OSC funcione como contrapeso democrático?",
  opts:["Recibir financiamiento estable del partido en el gobierno.","Mantener autonomía respecto al Estado y a los partidos políticos.","Estar inscrita en un registro internacional de organizaciones civiles."],
  correct:1, expl:"El texto afirma explícitamente que la autonomía respecto al Estado y a los partidos 'es condición necesaria para que funcionen como contrapeso democrático'."
},
{
  id:228, sub:"1.3", label:"Comprensión lectora – Ámbito de participación social", fmt:"B",
  pTitle:"Participación ciudadana y democracia directa",
  passage:"La democracia representativa, en la que los ciudadanos eligen a quienes deciden por ellos, ha sido el modelo dominante de los últimos dos siglos. Sin embargo, su legitimidad se ha visto cuestionada por una sensación creciente de distancia entre representantes y representados. Como respuesta, los sistemas democráticos modernos han incorporado mecanismos de democracia directa que permiten a los ciudadanos incidir en decisiones públicas más allá del voto periódico. El referéndum es el más conocido: una votación vinculante en la que la ciudadanía decide sobre una norma o un asunto de interés nacional. La consulta popular, por su parte, recaba la opinión de la población sobre un tema, pero su resultado no siempre obliga jurídicamente al gobierno. La iniciativa ciudadana invierte la dirección habitual del proceso legislativo: es la propia ciudadanía la que presenta una propuesta de ley ante el Congreso, reuniendo previamente un número determinado de firmas. Junto a estos mecanismos formales operan las organizaciones de la sociedad civil (OSC), que canalizan demandas, fiscalizan políticas públicas y producen información alternativa a la oficial. Su autonomía respecto al Estado y a los partidos políticos es condición necesaria para que funcionen como contrapeso democrático y no como apéndice del poder.",
  q:"Las OSC, según el texto, producen información ________ a la oficial y por eso pueden funcionar como contrapeso.",
  opts:["alternativa","idéntica","subordinada"],
  correct:0, expl:"El texto afirma que las OSC 'producen información alternativa a la oficial'."
},
{
  id:229, sub:"1.3", label:"Comprensión lectora – Ámbito de participación social", fmt:"C",
  pTitle:"Participación ciudadana y democracia directa",
  passage:"La democracia representativa, en la que los ciudadanos eligen a quienes deciden por ellos, ha sido el modelo dominante de los últimos dos siglos. Sin embargo, su legitimidad se ha visto cuestionada por una sensación creciente de distancia entre representantes y representados. Como respuesta, los sistemas democráticos modernos han incorporado mecanismos de democracia directa que permiten a los ciudadanos incidir en decisiones públicas más allá del voto periódico. El referéndum es el más conocido: una votación vinculante en la que la ciudadanía decide sobre una norma o un asunto de interés nacional. La consulta popular, por su parte, recaba la opinión de la población sobre un tema, pero su resultado no siempre obliga jurídicamente al gobierno. La iniciativa ciudadana invierte la dirección habitual del proceso legislativo: es la propia ciudadanía la que presenta una propuesta de ley ante el Congreso, reuniendo previamente un número determinado de firmas. Junto a estos mecanismos formales operan las organizaciones de la sociedad civil (OSC), que canalizan demandas, fiscalizan políticas públicas y producen información alternativa a la oficial. Su autonomía respecto al Estado y a los partidos políticos es condición necesaria para que funcionen como contrapeso democrático y no como apéndice del poder.",
  q:"Ordena estas funciones de las OSC tal como las menciona el texto, de la primera mencionada a la última.",
  items:["Producir información alternativa a la oficial","Canalizar demandas ciudadanas","Funcionar como contrapeso democrático","Fiscalizar políticas públicas"],
  correctOrder:[1,3,0,2],
  expl:"El texto enumera: canalizan demandas → fiscalizan políticas públicas → producen información alternativa → funcionan como contrapeso democrático."
},

// ─── PAQUETE 1.3·C: "Sistema electoral y principios de la función electoral en México" ───
{
  id:230, sub:"1.3", label:"Comprensión lectora – Ámbito de participación social", fmt:"A",
  pTitle:"Sistema electoral y principios de la función electoral en México",
  passage:"La organización de las elecciones en México descansa en un conjunto de principios rectores establecidos en la Constitución: certeza, legalidad, independencia, imparcialidad, máxima publicidad y objetividad. Estos principios no son lemas retóricos: son criterios operativos que orientan cada decisión del Instituto Nacional Electoral (INE) y de los organismos públicos locales. La certeza implica que todas las acciones electorales deben ser verificables y producir resultados confiables. La legalidad obliga a sujetar cada actuación al marco normativo vigente. La independencia exige que las autoridades electorales no respondan a presiones de partidos, gobiernos o intereses privados. La imparcialidad demanda un trato equitativo a todos los participantes, sin favoritismos. La máxima publicidad significa que la información electoral debe ser accesible al público salvo excepciones expresamente previstas en la ley. Y la objetividad obliga a decidir con base en hechos y no en preferencias. A estos principios se suma la paridad de género, incorporada con rango constitucional, que exige una representación igualitaria de mujeres y hombres en las candidaturas a cargos de elección popular. La aplicación conjunta de estos criterios busca garantizar que los procesos electorales sean reconocidos como legítimos por todos los actores, incluso por quienes pierden.",
  q:"Según el texto, ¿qué función cumplen los principios rectores de la función electoral?",
  opts:["Son lemas retóricos sin aplicación operativa en la organización de las elecciones.","Son criterios operativos que orientan cada decisión de las autoridades electorales.","Son recomendaciones internacionales no vinculantes para el INE."],
  correct:1, expl:"El texto afirma explícitamente que los principios 'no son lemas retóricos' sino 'criterios operativos que orientan cada decisión' del INE y los OPL."
},
{
  id:231, sub:"1.3", label:"Comprensión lectora – Ámbito de participación social", fmt:"D",
  pTitle:"Sistema electoral y principios de la función electoral en México",
  passage:"La organización de las elecciones en México descansa en un conjunto de principios rectores establecidos en la Constitución: certeza, legalidad, independencia, imparcialidad, máxima publicidad y objetividad. Estos principios no son lemas retóricos: son criterios operativos que orientan cada decisión del Instituto Nacional Electoral (INE) y de los organismos públicos locales. La certeza implica que todas las acciones electorales deben ser verificables y producir resultados confiables. La legalidad obliga a sujetar cada actuación al marco normativo vigente. La independencia exige que las autoridades electorales no respondan a presiones de partidos, gobiernos o intereses privados. La imparcialidad demanda un trato equitativo a todos los participantes, sin favoritismos. La máxima publicidad significa que la información electoral debe ser accesible al público salvo excepciones expresamente previstas en la ley. Y la objetividad obliga a decidir con base en hechos y no en preferencias. A estos principios se suma la paridad de género, incorporada con rango constitucional, que exige una representación igualitaria de mujeres y hombres en las candidaturas a cargos de elección popular. La aplicación conjunta de estos criterios busca garantizar que los procesos electorales sean reconocidos como legítimos por todos los actores, incluso por quienes pierden.",
  q:"Relaciona cada principio rector con su definición tal como aparece en el texto.",
  leftItems:["Certeza","Independencia","Máxima publicidad"],
  rightItems:["La información electoral debe ser accesible al público salvo excepciones de ley","Las acciones electorales deben ser verificables y producir resultados confiables","Las autoridades no deben responder a presiones de partidos, gobiernos o intereses privados"],
  correctPairs:[[0,1],[1,2],[2,0]],
  expl:"Certeza = verificabilidad y confiabilidad; Independencia = no responder a presiones externas; Máxima publicidad = accesibilidad de la información."
},
{
  id:232, sub:"1.3", label:"Comprensión lectora – Ámbito de participación social", fmt:"B",
  pTitle:"Sistema electoral y principios de la función electoral en México",
  passage:"La organización de las elecciones en México descansa en un conjunto de principios rectores establecidos en la Constitución: certeza, legalidad, independencia, imparcialidad, máxima publicidad y objetividad. Estos principios no son lemas retóricos: son criterios operativos que orientan cada decisión del Instituto Nacional Electoral (INE) y de los organismos públicos locales. La certeza implica que todas las acciones electorales deben ser verificables y producir resultados confiables. La legalidad obliga a sujetar cada actuación al marco normativo vigente. La independencia exige que las autoridades electorales no respondan a presiones de partidos, gobiernos o intereses privados. La imparcialidad demanda un trato equitativo a todos los participantes, sin favoritismos. La máxima publicidad significa que la información electoral debe ser accesible al público salvo excepciones expresamente previstas en la ley. Y la objetividad obliga a decidir con base en hechos y no en preferencias. A estos principios se suma la paridad de género, incorporada con rango constitucional, que exige una representación igualitaria de mujeres y hombres en las candidaturas a cargos de elección popular. La aplicación conjunta de estos criterios busca garantizar que los procesos electorales sean reconocidos como legítimos por todos los actores, incluso por quienes pierden.",
  q:"Según el texto, el principio de imparcialidad demanda un trato ________ a todos los participantes, sin favoritismos.",
  opts:["preferencial","equitativo","discrecional"],
  correct:1, expl:"El texto define la imparcialidad como aquella que 'demanda un trato equitativo a todos los participantes'."
},
{
  id:233, sub:"1.3", label:"Comprensión lectora – Ámbito de participación social", fmt:"A",
  pTitle:"Sistema electoral y principios de la función electoral en México",
  passage:"La organización de las elecciones en México descansa en un conjunto de principios rectores establecidos en la Constitución: certeza, legalidad, independencia, imparcialidad, máxima publicidad y objetividad. Estos principios no son lemas retóricos: son criterios operativos que orientan cada decisión del Instituto Nacional Electoral (INE) y de los organismos públicos locales. La certeza implica que todas las acciones electorales deben ser verificables y producir resultados confiables. La legalidad obliga a sujetar cada actuación al marco normativo vigente. La independencia exige que las autoridades electorales no respondan a presiones de partidos, gobiernos o intereses privados. La imparcialidad demanda un trato equitativo a todos los participantes, sin favoritismos. La máxima publicidad significa que la información electoral debe ser accesible al público salvo excepciones expresamente previstas en la ley. Y la objetividad obliga a decidir con base en hechos y no en preferencias. A estos principios se suma la paridad de género, incorporada con rango constitucional, que exige una representación igualitaria de mujeres y hombres en las candidaturas a cargos de elección popular. La aplicación conjunta de estos criterios busca garantizar que los procesos electorales sean reconocidos como legítimos por todos los actores, incluso por quienes pierden.",
  q:"¿Qué exige la paridad de género según el texto?",
  opts:["Que las mujeres encabecen todas las candidaturas a cargos de elección popular.","Una representación igualitaria de mujeres y hombres en las candidaturas a cargos de elección popular.","La creación de partidos políticos exclusivos para mujeres en los procesos locales."],
  correct:1, expl:"El texto define la paridad de género como la exigencia de 'una representación igualitaria de mujeres y hombres en las candidaturas a cargos de elección popular'."
},
{
  id:234, sub:"1.3", label:"Comprensión lectora – Ámbito de participación social", fmt:"B",
  pTitle:"Sistema electoral y principios de la función electoral en México",
  passage:"La organización de las elecciones en México descansa en un conjunto de principios rectores establecidos en la Constitución: certeza, legalidad, independencia, imparcialidad, máxima publicidad y objetividad. Estos principios no son lemas retóricos: son criterios operativos que orientan cada decisión del Instituto Nacional Electoral (INE) y de los organismos públicos locales. La certeza implica que todas las acciones electorales deben ser verificables y producir resultados confiables. La legalidad obliga a sujetar cada actuación al marco normativo vigente. La independencia exige que las autoridades electorales no respondan a presiones de partidos, gobiernos o intereses privados. La imparcialidad demanda un trato equitativo a todos los participantes, sin favoritismos. La máxima publicidad significa que la información electoral debe ser accesible al público salvo excepciones expresamente previstas en la ley. Y la objetividad obliga a decidir con base en hechos y no en preferencias. A estos principios se suma la paridad de género, incorporada con rango constitucional, que exige una representación igualitaria de mujeres y hombres en las candidaturas a cargos de elección popular. La aplicación conjunta de estos criterios busca garantizar que los procesos electorales sean reconocidos como legítimos por todos los actores, incluso por quienes pierden.",
  q:"El principio de objetividad obliga a las autoridades electorales a decidir con base en ________ y no en preferencias.",
  opts:["intuiciones","hechos","encuestas"],
  correct:1, expl:"El texto afirma que la objetividad 'obliga a decidir con base en hechos y no en preferencias'."
},
{
  id:235, sub:"1.3", label:"Comprensión lectora – Ámbito de participación social", fmt:"A",
  pTitle:"Sistema electoral y principios de la función electoral en México",
  passage:"La organización de las elecciones en México descansa en un conjunto de principios rectores establecidos en la Constitución: certeza, legalidad, independencia, imparcialidad, máxima publicidad y objetividad. Estos principios no son lemas retóricos: son criterios operativos que orientan cada decisión del Instituto Nacional Electoral (INE) y de los organismos públicos locales. La certeza implica que todas las acciones electorales deben ser verificables y producir resultados confiables. La legalidad obliga a sujetar cada actuación al marco normativo vigente. La independencia exige que las autoridades electorales no respondan a presiones de partidos, gobiernos o intereses privados. La imparcialidad demanda un trato equitativo a todos los participantes, sin favoritismos. La máxima publicidad significa que la información electoral debe ser accesible al público salvo excepciones expresamente previstas en la ley. Y la objetividad obliga a decidir con base en hechos y no en preferencias. A estos principios se suma la paridad de género, incorporada con rango constitucional, que exige una representación igualitaria de mujeres y hombres en las candidaturas a cargos de elección popular. La aplicación conjunta de estos criterios busca garantizar que los procesos electorales sean reconocidos como legítimos por todos los actores, incluso por quienes pierden.",
  q:"¿Cuál es el propósito final que persigue la aplicación conjunta de los principios rectores según el texto?",
  opts:["Reducir el costo administrativo de organizar elecciones a nivel local.","Garantizar que los procesos electorales sean reconocidos como legítimos por todos los actores, incluso por quienes pierden.","Sustituir progresivamente la democracia representativa por mecanismos de democracia directa."],
  correct:1, expl:"El cierre del texto afirma que la aplicación conjunta busca 'garantizar que los procesos electorales sean reconocidos como legítimos por todos los actores, incluso por quienes pierden'."
},

// ═══════════════════════════════════════════════════════════
//  2.1  Redacción indirecta – Ámbito de estudio  (15 Qs)
// ═══════════════════════════════════════════════════════════
{
  id:31, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"A",
  pTitle:"Conectores de Reformulación",
  passage:"Los conectores de reformulación permiten al autor reexpresar, aclarar o precisar una idea ya enunciada. Se dividen en explicativos ('es decir', 'o sea'), rectificativos ('mejor dicho', 'en realidad') y de distanciamiento ('en todo caso', 'de todos modos').",
  q:"En el enunciado 'El proyecto fue costoso; en realidad, resultó inviable financieramente', el conector 'en realidad' cumple una función ________.",
  opts:["consecutiva, al indicar consecuencia de lo anterior","rectificativa, al corregir o precisar la valoración previa","explicativa, al sintetizar lo dicho antes"],
  correct:1, expl:"'En realidad' es un conector rectificativo: no explica lo anterior, sino que lo corrige o reorienta hacia una valoración más precisa."
},
{
  id:32, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"B",
  pTitle:"Progresión Temática",
  passage:"Un texto bien construido mantiene una progresión temática coherente: la información conocida o tema se presenta antes que la información nueva o rema. En la progresión lineal, el rema de una oración se convierte en el tema de la siguiente, creando una cadena informativa continua.",
  q:"En una progresión temática lineal, la información nueva de una oración se convierte en el ________ de la oración siguiente.",
  opts:["rema o comentario también de la siguiente","tema o punto de partida de la siguiente","conector o enlace entre ambas"],
  correct:1, expl:"En la progresión lineal, el rema (información nueva) de una oración pasa a ser el tema (punto de partida) de la siguiente."
},
{
  id:33, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"D",
  pTitle:"Tipos de Discurso Referido",
  passage:"Cuando un texto reproduce las palabras de otro hablante, puede hacerlo de distintas formas que implican diferentes grados de fidelidad y responsabilidad del autor.",
  q:"Relaciona cada tipo de discurso referido con su característica.",
  leftItems:["Discurso directo","Discurso indirecto","Discurso indirecto libre"],
  rightItems:["Se funde con la voz del narrador sin marcas claras de separación","Reproduce literalmente las palabras entre comillas o guión","Parafrasea las palabras adaptando pronombres y tiempos verbales"],
  correctPairs:[[0,1],[1,2],[2,0]],
  expl:"Directo = cita literal con marcas gráficas; Indirecto = paráfrasis con cambio de persona/tiempo; Indirecto libre = fusión sin marca."
},
{
  id:34, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"A",
  pTitle:"Acentuación de Interrogativos y Relativos",
  passage:"Los pronombres y adverbios interrogativos y exclamativos llevan tilde diacrítica ('qué', 'cuál', 'cómo', 'dónde', 'cuándo') para distinguirlos de sus homófonos relativos o conjunciones ('que', 'cual', 'como', 'donde', 'cuando').",
  q:"En la oración 'No sé cómo llegó tan tarde', la tilde en 'cómo' indica que funciona como ________.",
  opts:["conjunción comparativa equivalente a 'igual que'","adverbio relativo que introduce una oración de relativo","interrogativo indirecto dentro de la oración subordinada"],
  correct:2, expl:"'No sé cómo llegó' contiene una interrogativa indirecta; 'cómo' con tilde es el interrogativo indirecto que introduce esa subordinada."
},
{
  id:35, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"C",
  pTitle:"Estructura del Texto Expositivo-Argumentativo",
  passage:"Un texto expositivo-argumentativo académico integra la presentación de información y la defensa de una postura mediante una estructura jerárquica de ideas.",
  q:"Ordena los componentes de un texto expositivo-argumentativo del primero al último.",
  items:["Conclusión que sintetiza y reafirma la tesis","Tesis y delimitación del tema","Refutación de la postura contraria","Argumentos con evidencias que sustentan la tesis"],
  correctOrder:[1,3,2,0],
  expl:"El orden es: Tesis/delimitación → Argumentos/evidencias → Refutación → Conclusión."
},
{
  id:36, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"B",
  pTitle:"La Nominalización en Textos Académicos",
  passage:"La nominalización consiste en transformar verbos o adjetivos en sustantivos ('analizar' → 'el análisis'; 'importante' → 'la importancia'). Es un rasgo dominante en el registro académico porque condensa información y crea distancia objetiva, aunque puede hacer el texto más denso y difícil de leer.",
  q:"La nominalización contribuye al registro académico porque ________ información y crea una distancia objetiva entre el autor y el contenido.",
  opts:["amplía y repite","condensa y formaliza","elimina y simplifica"],
  correct:1, expl:"El texto describe dos funciones de la nominalización: 'condensar información' y 'crear distancia objetiva', rasgos propios del discurso académico."
},
{
  id:37, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"A",
  pTitle:"Conectores Contraargumentativos",
  passage:"Los conectores contraargumentativos no solo oponen ideas; modulan el peso relativo de las dos proposiciones que relacionan. 'Aunque' y 'a pesar de que' conceden validez a un argumento pero lo subordinan al argumento principal. 'Sin embargo' y 'no obstante' contradicen de manera más radical la premisa anterior.",
  q:"En el enunciado 'Aunque la propuesta es innovadora, presenta riesgos legales insuperables', el conector 'aunque' ________.",
  opts:["concede validez a la innovación pero la subordina al peso del argumento sobre los riesgos.","niega completamente que la propuesta sea innovadora.","establece una consecuencia lógica de la innovación."],
  correct:0, expl:"'Aunque' es un conector concesivo: acepta la validez del primer argumento (innovación) pero lo subordina al segundo (riesgos legales)."
},
{
  id:38, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"B",
  pTitle:"El Punto y Coma",
  passage:"El punto y coma separa partes de una enumeración cuyos elementos ya contienen comas internas; también puede separar oraciones yuxtapuestas de cierta extensión cuando la relación entre ellas es más estrecha que la que justificaría un punto. Su uso incorrecto como sustituto del punto o la coma genera ambigüedad.",
  q:"En la enumeración 'Se contrató a tres ingenieros civiles, uno de Lima; dos arquitectos, ambos con experiencia en hospitales; y un especialista ambiental', el punto y coma se usa para ________ los elementos cuyas descripciones incluyen comas internas.",
  opts:["unir y fusionar","separar y delimitar con claridad","suprimir y eliminar"],
  correct:1, expl:"El punto y coma en enumeraciones complejas evita la ambigüedad que generaría usar solo comas cuando cada elemento ya contiene comas internas."
},
{
  id:39, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"D",
  pTitle:"Modos y Tiempos Verbales en Texto Académico",
  passage:"La selección del modo y tiempo verbal afecta el sentido y el registro de un texto académico. Cada combinación modo-tiempo expresa una relación epistémica distinta con los hechos referidos.",
  q:"Relaciona cada forma verbal con la función epistémica que cumple en textos académicos.",
  leftItems:["Presente de indicativo","Condicional simple","Subjuntivo presente"],
  rightItems:["Expresa hipótesis, posibilidad o recomendación con incertidumbre","Enuncia como cierto o habitual lo referido en el texto","Formula una afirmación hipotética o con distancia epistémica"],
  correctPairs:[[0,1],[1,2],[2,0]],
  expl:"Presente indicativo = enuncia como cierto; Condicional = hipótesis o distancia epistémica; Subjuntivo = posibilidad, duda o recomendación."
},
{
  id:40, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"A",
  pTitle:"Queísmo y Dequeísmo",
  passage:"El queísmo consiste en omitir indebidamente la preposición 'de' ante 'que' cuando la norma la exige ('Me alegro que vengas' por 'Me alegro de que vengas'). El dequeísmo es el error inverso: añadir 'de' donde no corresponde ('Dijo de que vendría' por 'Dijo que vendría'). Ambos fenómenos alteran la corrección normativa del español.",
  q:"¿Cuál de los siguientes enunciados incurre en queísmo?",
  opts:["Informó de que el informe estaba listo.","Se enteró de que habían modificado el reglamento.","Estoy segura que el proyecto será aprobado."],
  correct:2, expl:"'Estar seguro/a' exige 'de que' ('Estoy segura de que'); omitir 'de' es queísmo. Las otras opciones usan correctamente 'de que'."
},
{
  id:41, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"C",
  pTitle:"Jerarquía de Ideas en el Párrafo de Desarrollo",
  passage:"En un párrafo académico de desarrollo, las ideas no tienen el mismo peso: la idea principal sostiene el párrafo; las ideas secundarias la amplían; los ejemplos o datos la ilustran; el cierre la recapitula.",
  q:"Ordena los elementos del párrafo de desarrollo de mayor a menor jerarquía conceptual.",
  items:["Oración de cierre o recapitulación","Idea principal del párrafo","Ejemplo o dato ilustrativo","Idea secundaria de apoyo o ampliación"],
  correctOrder:[1,3,2,0],
  expl:"Jerarquía: Idea principal → Idea secundaria → Ejemplo/dato → Cierre/recapitulación."
},
{
  id:42, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"B",
  pTitle:"Concordancia en Construcciones con 'Se'",
  passage:"En las oraciones con 'se' impersonal, el verbo siempre va en tercera persona del singular sin importar el sustantivo que le siga. En cambio, en las oraciones con 'se' pasivo reflejo, el verbo concuerda en número con el sustantivo que hace de sujeto paciente.",
  q:"En 'Se venden departamentos', la forma 'venden' concuerda con 'departamentos' porque la construcción es un ________, no una oración impersonal.",
  opts:["infinitivo nominal con función adjetiva","pasivo reflejo donde 'departamentos' es sujeto paciente","gerundio de acción continua sin sujeto"],
  correct:1, expl:"'Se venden departamentos' es pasivo reflejo; 'departamentos' es el sujeto paciente y por eso el verbo concuerda en plural con él."
},
{
  id:43, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"A",
  pTitle:"Uso de 'Deber' vs. 'Deber de'",
  passage:"'Deber' seguido de infinitivo expresa obligación ('Debe entregar el informe'). 'Deber de' seguido de infinitivo expresa probabilidad o suposición ('Debe de estar cansado'). Esta distinción, aunque vacilante en el uso coloquial, es relevante en el registro formal escrito.",
  q:"En un documento institucional que establece normas, ¿cuál es la forma correcta para expresar una obligación?",
  opts:["'El personal debe de presentar su credencial al ingresar.'","'El personal debe presentar su credencial al ingresar.'","Ambas formas son equivalentes en el registro formal."],
  correct:1, expl:"'Deber + infinitivo' = obligación normativa. 'Deber de + infinitivo' = suposición. En un reglamento, la obligación requiere 'deber' sin 'de'."
},
{
  id:44, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"D",
  pTitle:"Funciones de los Signos de Puntuación en Textos Complejos",
  passage:"En textos académicos extensos, los signos de puntuación cumplen funciones jerárquicas distintas que van más allá de la simple pausa.",
  q:"Relaciona cada signo con la función que cumple en textos formales.",
  leftItems:["Paréntesis","Raya o guión largo","Corchetes"],
  rightItems:["Intercala aclaraciones del editor o información omitida en citas","Introduce incisos o aclaraciones con mayor énfasis que la coma","Encierra información accesoria que no altera el sentido principal"],
  correctPairs:[[0,2],[1,1],[2,0]],
  expl:"Paréntesis = información accesoria; Raya = inciso enfático; Corchetes = intervención editorial o interpolación en citas."
},
{
  id:45, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"B",
  pTitle:"El Resumen Académico",
  passage:"Un resumen académico eficaz no es una selección de frases del texto original sino una reescritura que captura la macroestructura del texto: la tesis, los argumentos principales y las conclusiones. Incluir detalles ilustrativos, ejemplos o datos secundarios representa un error de selección que resta eficiencia al resumen.",
  q:"Según el fragmento, incluir ejemplos o datos secundarios en un resumen es un error porque afecta su ________ al no capturar la macroestructura.",
  opts:["extensión y formato","eficiencia y precisión","ortografía y estilo"],
  correct:1, expl:"El texto dice que incluir detalles secundarios 'resta eficiencia al resumen'; el criterio central es capturar la macroestructura, no los detalles."
},

// ═══════════════════════════════════════════════════════════
//  2.2  Redacción indirecta – Ámbito de participación social  (15 Qs)
// ═══════════════════════════════════════════════════════════
{
  id:46, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"A",
  pTitle:"El Registro en Documentos Institucionales",
  passage:"El registro de un documento institucional debe calibrarse en función de dos variables: el destinatario y el propósito comunicativo. Un documento dirigido a la ciudadanía en general requiere un registro formal pero accesible; uno dirigido a autoridades de igual o mayor jerarquía puede ser más técnico. El error más frecuente es usar un registro inadecuado para el destinatario.",
  q:"¿Qué determina principalmente la selección del registro en un documento institucional según el texto?",
  opts:["La longitud del documento y el número de páginas.","El destinatario y el propósito comunicativo del documento.","La fecha de elaboración y el cargo del redactor."],
  correct:1, expl:"El texto identifica dos variables determinantes: 'el destinatario y el propósito comunicativo'; no menciona extensión ni cargo del redactor."
},
{
  id:47, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"C",
  pTitle:"Estructura del Informe de Actividades",
  passage:"El informe de actividades es el documento mediante el cual una institución o servidor público da cuenta de las acciones realizadas en un período determinado.",
  q:"Ordena los apartados del informe de actividades institucional en su secuencia correcta.",
  items:["Conclusiones y áreas de mejora identificadas","Presentación: período, institución y propósito del informe","Resultados y metas alcanzadas","Descripción de actividades realizadas por área o programa"],
  correctOrder:[1,3,2,0],
  expl:"El orden es: Presentación/contexto → Actividades por área → Resultados/metas → Conclusiones/áreas de mejora."
},
{
  id:48, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"B",
  pTitle:"Impersonalidad en la Redacción Institucional",
  passage:"La impersonalidad es un rasgo definitorio de la redacción institucional: evita atribuir acciones a personas concretas y privilegia construcciones pasivas o reflexivas ('se acordó', 'se determinó') o el uso de la institución como sujeto ('El Instituto resolvió'). Esta estrategia refuerza la imagen de la institución como entidad colectiva y objetiva.",
  q:"El uso de 'se acordó' en lugar de 'el director acordó' en un documento institucional refuerza la imagen de la institución como entidad ________ y objetiva.",
  opts:["individual y personalizada","colectiva y despersonalizada","informal y accesible"],
  correct:1, expl:"El texto señala que la impersonalidad 'refuerza la imagen de la institución como entidad colectiva y objetiva', no como decisión individual."
},
{
  id:49, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"D",
  pTitle:"Propósito de los Documentos de Difusión Ciudadana",
  passage:"Las instituciones producen distintos documentos para comunicarse con la ciudadanía según el tipo de acción que buscan promover o informar.",
  q:"Relaciona cada documento con su propósito comunicativo principal.",
  leftItems:["Convocatoria","Boletín informativo","Reglamento interno publicado"],
  rightItems:["Establecer normas obligatorias para la conducta en un ámbito específico","Convocar a la ciudadanía a participar en un proceso con requisitos y fechas","Difundir noticias, logros o actividades de la institución"],
  correctPairs:[[0,1],[1,2],[2,0]],
  expl:"Convocatoria = invita a participar con condiciones; Boletín = difunde noticias institucionales; Reglamento = establece normas obligatorias."
},
{
  id:50, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"A",
  pTitle:"La Transparencia Proactiva",
  passage:"La transparencia gubernamental puede ser reactiva —responder a solicitudes de acceso a la información— o proactiva —publicar información de oficio sin que nadie la solicite—. La transparencia proactiva es más eficaz para la rendición de cuentas porque no depende de que el ciudadano conozca qué preguntar ni cómo hacerlo.",
  q:"¿Por qué el texto considera más eficaz la transparencia proactiva que la reactiva?",
  opts:["Porque genera más solicitudes de información por parte de los ciudadanos.","Porque no depende del conocimiento previo del ciudadano para acceder a la información.","Porque reduce la carga de trabajo de las áreas de transparencia institucional."],
  correct:1, expl:"El texto señala que la proactiva es más eficaz porque 'no depende de que el ciudadano conozca qué preguntar ni cómo hacerlo', eliminando esa barrera."
},
{
  id:51, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"B",
  pTitle:"Lenguaje Ciudadano en Documentos Públicos",
  passage:"El lenguaje ciudadano o lenguaje claro es una corriente de modernización de los documentos públicos que exige sustituir el lenguaje burocrático y técnico por expresiones comprensibles para el ciudadano promedio. No implica banalizar el contenido, sino hacer accesible la información sin sacrificar precisión.",
  q:"El lenguaje ciudadano en documentos públicos busca hacer la información accesible sin ________ el contenido que comunica.",
  opts:["ampliar ni desarrollar","sacrificar la precisión ni banalizar","traducir ni simplificar"],
  correct:1, expl:"El texto precisa que el lenguaje claro 'no implica banalizar el contenido' ni perder precisión; el objetivo es la accesibilidad sin esos costos."
},
{
  id:52, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"C",
  pTitle:"Ciclo de la Rendición de Cuentas",
  passage:"La rendición de cuentas es un proceso cíclico que vincula la planeación institucional con la evaluación y el aprendizaje organizacional.",
  q:"Ordena las etapas del ciclo de rendición de cuentas institucional de la primera a la última.",
  items:["Evaluación de resultados y lecciones aprendidas","Definición de objetivos y metas institucionales","Presentación pública del informe de rendición de cuentas","Ejecución de acciones y registro de evidencias"],
  correctOrder:[1,3,2,0],
  expl:"El orden del ciclo es: Definición de objetivos → Ejecución/registro → Presentación del informe → Evaluación/lecciones aprendidas."
},
{
  id:53, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"A",
  pTitle:"El Acuerdo Institucional y su Seguimiento",
  passage:"Los acuerdos institucionales requieren tres elementos para garantizar su cumplimiento: acción específica redactada en infinitivo, responsable nominado con nombre o cargo, y fecha límite precisa. La ausencia de cualquiera de estos elementos convierte al acuerdo en una declaración de intención sin mecanismo de seguimiento posible.",
  q:"¿Cuál de los siguientes es un acuerdo institucional correctamente redactado?",
  opts:["Mejorar la comunicación con las áreas operativas durante el próximo trimestre.","Elaborar el diagnóstico de necesidades de capacitación: responsable Coordinación de RRHH, fecha límite: 30 de junio.","Se acordó que el equipo hará lo necesario para atender el problema señalado."],
  correct:1, expl:"Solo la opción C cumple los tres requisitos: acción en infinitivo ('elaborar'), responsable nominado ('Coordinación de RRHH') y fecha precisa ('30 de junio')."
},
{
  id:54, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"B",
  pTitle:"Género y Lenguaje Institucional",
  passage:"Las guías de lenguaje inclusivo para documentos institucionales proponen tres estrategias principales: el desdoblamiento ('los ciudadanos y las ciudadanas'), los sustantivos genéricos ('la ciudadanía', 'el personal'), y la reformulación de la oración para evitar el uso de un género específico. Ninguna estrategia es universalmente aplicable; la selección depende del contexto y la fluidez del texto.",
  q:"Según el texto, la elección de una estrategia de lenguaje inclusivo en documentos institucionales debe depender del ________ y la fluidez del texto resultante.",
  opts:["cargo jerárquico del redactor","contexto comunicativo y destinatario","número de páginas del documento"],
  correct:1, expl:"El texto señala que 'ninguna estrategia es universalmente aplicable' y que la selección depende del 'contexto y la fluidez del texto'."
},
{
  id:55, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"D",
  pTitle:"Tipos de Comunicación Institucional Externa",
  passage:"Las instituciones públicas utilizan distintos canales y formatos para comunicarse con sus diferentes audiencias externas según el propósito y la urgencia del mensaje.",
  q:"Relaciona cada formato con la audiencia y propósito para el que resulta más adecuado.",
  leftItems:["Comunicado de prensa","Informe anual de actividades","Oficio de respuesta a solicitud ciudadana"],
  rightItems:["Ciudadano que presentó una petición formal y espera respuesta oficial","Medios de comunicación para difundir un evento de interés público","Sociedad en general para dar cuenta de la gestión del año"],
  correctPairs:[[0,1],[1,2],[2,0]],
  expl:"Comunicado = difusión a medios; Informe anual = rendición de cuentas a la sociedad; Oficio de respuesta = ciudadano que solicitó formalmente."
},
{
  id:56, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"A",
  pTitle:"La Voz Pasiva en Reglamentos",
  passage:"Los reglamentos institucionales recurren frecuentemente a la voz pasiva ('será sancionado', 'quedan prohibidas') porque permite omitir el sujeto agente (quién sanciona) y concentrar la atención en la acción regulada y sus consecuencias. Esta impersonalidad es funcionalmente adecuada cuando el agente es la institución en su conjunto.",
  q:"¿Cuál es la ventaja funcional de usar voz pasiva en reglamentos según el fragmento?",
  opts:["Permite incluir más información en menos palabras.","Permite omitir el agente y centrar la norma en la acción y sus consecuencias.","Hace el texto más accesible para la ciudadanía en general."],
  correct:1, expl:"El texto explica que la pasiva 'permite omitir el sujeto agente y concentrar la atención en la acción regulada'; no menciona brevedad ni accesibilidad."
},
{
  id:57, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"C",
  pTitle:"Estructura de un Comunicado de Crisis Institucional",
  passage:"Cuando una institución enfrenta una crisis de imagen o un incidente grave, el comunicado de crisis debe seguir una estructura que priorice la transparencia y el control de daños.",
  q:"Ordena los elementos del comunicado de crisis institucional en su secuencia estratégica correcta.",
  items:["Acciones correctivas tomadas o en proceso","Reconocimiento del hecho o incidente ocurrido","Datos de contacto para seguimiento informativo","Expresión de compromiso institucional y cierre"],
  correctOrder:[1,0,3,2],
  expl:"Orden estratégico: Reconocimiento del hecho → Acciones correctivas → Compromiso/cierre → Datos de contacto para seguimiento."
},
{
  id:58, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"B",
  pTitle:"El Texto Argumentativo en el Ámbito Público",
  passage:"Un texto argumentativo dirigido al ámbito público debe equilibrar tres dimensiones retóricas: el logos (la argumentación racional sustentada en evidencias), el ethos (la credibilidad y autoridad del enunciador) y el pathos (la conexión emocional con la audiencia). El predominio excesivo de cualquiera de las tres en detrimento de las otras debilita la eficacia persuasiva del texto.",
  q:"Según el texto, usar solo argumentos emocionales sin evidencias debilita la eficacia persuasiva porque descuida la dimensión del ________.",
  opts:["pathos o conexión emocional con la audiencia","logos o argumentación racional sustentada en evidencias","ethos o credibilidad del enunciador"],
  correct:1, expl:"El texto dice que el 'predominio excesivo' de una dimensión 'en detrimento de las otras' debilita el texto; el exceso de pathos descuida el logos (argumentación racional)."
},
{
  id:59, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"D",
  pTitle:"Modelos de Pirámide Informativa",
  passage:"El periodismo y la comunicación institucional han desarrollado distintos modelos de organización de la información para atender necesidades diferentes.",
  q:"Relaciona cada modelo con su lógica de organización.",
  leftItems:["Pirámide invertida","Pirámide normal o clásica","Estructura en diamante"],
  rightItems:["Comienza con el contexto, desarrolla el conflicto central y termina con resolución","Inicia con lo más importante y añade detalles de menor relevancia","Comienza con un gancho, desarrolla el argumento y cierra con la tesis"],
  correctPairs:[[0,1],[1,0],[2,2]],
  expl:"Pirámide invertida = más importante primero; Pirámide normal = contexto → conflicto → resolución; Diamante = gancho → desarrollo → tesis."
},
{
  id:60, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"A",
  pTitle:"Presupuestos Participativos",
  passage:"Los presupuestos participativos son mecanismos en los que la ciudadanía decide directamente cómo asignar una parte del presupuesto público. Su implementación requiere documentos claros que expliquen las reglas del proceso, los montos disponibles y los criterios de elegibilidad de los proyectos. La calidad de estos documentos determina en gran medida la equidad de la participación.",
  q:"¿Por qué la calidad de los documentos de un presupuesto participativo afecta la equidad del proceso?",
  opts:["Porque documentos más extensos generan mayor participación ciudadana.","Porque documentos claros permiten que todos los ciudadanos comprendan las reglas y participen en condiciones iguales.","Porque el lenguaje técnico eleva la credibilidad institucional del proceso."],
  correct:1, expl:"El texto vincula directamente la calidad documental con la equidad: si los documentos son claros, todos pueden participar; si no, solo quienes entienden el lenguaje técnico."
},

// ═══════════════════════════════════════════════════════════
//  1.2  Comprensión lectora – Ámbito literario  (+5 Qs)
// ═══════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════
//  1.3  Comprensión lectora – Ámbito de participación social  (+5 Qs)
// ═══════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════
//  2.1  Redacción indirecta – Ámbito de estudio  (+5 Qs)
// ═══════════════════════════════════════════════════════════
{
  id:76, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"B",
  pTitle:"La Nota al Pie y la Cita Bibliográfica",
  passage:"En los textos académicos la nota al pie cumple dos funciones distintas: la nota de referencia remite al lector a la fuente de una afirmación específica, mientras que la nota de contenido desarrolla una idea secundaria que enriquecería el argumento pero interrumpiría el flujo del texto principal. Confundirlas produce documentos con notas excesivamente largas o referencias enterradas en el cuerpo principal.",
  q:"Según el texto, una nota que desarrolla información complementaria pero que interrumpiría el argumento central del párrafo es una nota de ________, no de referencia.",
  opts:["pie de página obligatoria","contenido o discursiva","bibliografía final"],
  correct:1, expl:"El texto distingue la nota de referencia (remite a fuente) de la nota de contenido (desarrolla idea secundaria sin romper el hilo); la que 'enriquecería el argumento pero interrumpiría el flujo' es la de contenido."
},
{
  id:77, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"A",
  pTitle:"La Coherencia Textual",
  passage:"La coherencia es la propiedad semántica del texto que garantiza su unidad de sentido: todos los enunciados deben contribuir al desarrollo del tema central y ninguno debe contradecir la información establecida previamente. Se distingue de la cohesión, que opera a nivel superficial mediante marcadores y conectores, mientras que la coherencia opera en el nivel profundo del significado global.",
  q:"¿En qué difiere la coherencia de la cohesión según el fragmento?",
  opts:["La coherencia usa conectores gramaticales; la cohesión opera en el nivel semántico profundo.","La coherencia opera en el nivel profundo del significado global; la cohesión usa mecanismos superficiales de enlace.","Coherencia y cohesión son sinónimos que designan la misma propiedad textual."],
  correct:1, expl:"El texto invierte el orden común de confusión: coherencia = nivel semántico profundo; cohesión = mecanismos superficiales (conectores). La opción A los invierte incorrectamente."
},
{
  id:78, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"C",
  pTitle:"Estructura del Artículo de Divulgación Científica",
  passage:"El artículo de divulgación traduce el conocimiento especializado para un público no experto, pero debe mantener la precisión factual y la honestidad sobre el estado del conocimiento.",
  q:"Ordena los elementos de un artículo de divulgación científica en su secuencia de redacción habitual.",
  items:["Conclusiones y proyecciones para el lector no especializado","Título llamativo y lead de enganche","Contexto y antecedentes del tema","Explicación del hallazgo o avance principal"],
  correctOrder:[1,2,3,0],
  expl:"La secuencia es: Título/lead → Contexto/antecedentes → Explicación del hallazgo → Conclusiones/proyecciones."
},
{
  id:79, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"D",
  pTitle:"Tipos de Párrafo según su Función",
  passage:"La eficacia de un texto académico depende en gran medida de reconocer la función de cada párrafo y construirlo de acuerdo con esa función.",
  q:"Relaciona cada tipo de párrafo con su función dentro del texto.",
  leftItems:["Párrafo de introducción","Párrafo de transición","Párrafo de conclusión"],
  rightItems:["Sintetiza los puntos clave y proyecta el significado de lo expuesto","Enuncia el tema, establece el contexto y anticipa la tesis","Conecta dos secciones del texto señalando el puente temático entre ellas"],
  correctPairs:[[0,1],[1,2],[2,0]],
  expl:"Introducción = enuncia tema y tesis; Transición = conecta secciones; Conclusión = sintetiza y proyecta."
},
{
  id:80, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"A",
  pTitle:"El Resumen Ejecutivo",
  passage:"El resumen ejecutivo es un documento autónomo que concentra los elementos esenciales de un informe extenso: problema o propósito, metodología aplicada, hallazgos principales y recomendaciones concretas. A diferencia del resumen o abstract académico, está orientado a tomadores de decisiones que pueden no leer el informe completo, por lo que el énfasis debe estar en las implicaciones prácticas y las acciones recomendadas.",
  q:"¿En qué se diferencia el resumen ejecutivo del abstract académico según el texto?",
  opts:["El resumen ejecutivo es más largo y detallado que el abstract.","El resumen ejecutivo enfatiza implicaciones prácticas para tomadores de decisiones; el abstract sintetiza el contenido para lectores académicos.","El resumen ejecutivo no incluye metodología, a diferencia del abstract."],
  correct:1, expl:"El texto distingue al resumen ejecutivo por su orientación a 'tomadores de decisiones' y énfasis en 'implicaciones prácticas y acciones'; no dice que sea más largo ni que excluya la metodología."
},

// ═══════════════════════════════════════════════════════════
//  2.2  Redacción indirecta – Ámbito de participación social  (+5 Qs)
// ═══════════════════════════════════════════════════════════
{
  id:81, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"C",
  pTitle:"Fases de la Consulta Pública",
  passage:"La consulta pública es un mecanismo institucional para incorporar la perspectiva ciudadana en la elaboración de normas o políticas antes de su adopción definitiva.",
  q:"Ordena las etapas de una consulta pública institucional en su secuencia correcta.",
  items:["Sistematización y análisis de las aportaciones recibidas","Convocatoria y difusión entre los grupos interesados","Publicación del informe de resultados y decisiones adoptadas","Periodo abierto para la recepción de comentarios y propuestas"],
  correctOrder:[1,3,0,2],
  expl:"La secuencia es: Convocatoria y difusión → Recepción de comentarios → Sistematización/análisis → Publicación del informe de resultados."
},
{
  id:82, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"A",
  pTitle:"La Transparencia Proactiva",
  passage:"La transparencia proactiva obliga a las instituciones a publicar información de interés público sin necesidad de que un ciudadano la solicite previamente. Su fundamento es que la información generada con recursos públicos pertenece a la sociedad y su divulgación no debería depender de la iniciativa individual. Este enfoque contrasta con el modelo reactivo, en el que la institución solo revela información cuando se lo exigen.",
  q:"¿Cuál es el argumento central que justifica la transparencia proactiva según el texto?",
  opts:["Que publicar información reduce la carga administrativa de atender solicitudes individuales.","Que la información generada con recursos públicos pertenece a la sociedad y su acceso no debe depender de que alguien la pida.","Que los ciudadanos tienen mayor interés en la información cuando ellos mismos la solicitan."],
  correct:1, expl:"El texto fundamenta la transparencia proactiva en que 'la información generada con recursos públicos pertenece a la sociedad'; la reducción de carga y el interés ciudadano no aparecen como argumentos."
},
{
  id:83, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"B",
  pTitle:"Redacción de Convocatorias Institucionales",
  passage:"Una convocatoria institucional eficaz debe responder con precisión a las preguntas: ¿quién puede participar? (requisitos de elegibilidad), ¿para qué? (objeto y objetivos), ¿cómo? (proceso y documentación), ¿cuándo? (fechas y plazos) y ¿dónde? (lugar o plataforma de registro). La omisión de cualquiera de estos elementos genera incertidumbre y reduce la participación o eleva las consultas al área organizadora.",
  q:"Según el texto, omitir los requisitos de elegibilidad en una convocatoria genera ________ entre los potenciales participantes respecto a si pueden o no inscribirse.",
  opts:["certeza y confianza","incertidumbre y dudas","interés y motivación"],
  correct:1, expl:"El texto señala que 'la omisión de cualquiera de estos elementos genera incertidumbre'; al faltar la elegibilidad, los interesados no saben si califican, lo que produce duda e incertidumbre."
},
{
  id:84, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"D",
  pTitle:"Documentos del Proceso Electoral",
  passage:"Los procesos electorales generan una amplia variedad de documentos institucionales, cada uno con funciones específicas dentro del ciclo democrático.",
  q:"Relaciona cada documento electoral con su función dentro del proceso.",
  leftItems:["Lista nominal de electores","Acta de escrutinio y cómputo","Convocatoria a elecciones"],
  rightItems:["Registra los resultados de la votación en cada casilla al cierre del proceso","Informa a la ciudadanía la fecha, tipo de elección y procedimiento para votar","Contiene el padrón de ciudadanos con credencial vigente habilitados para votar"],
  correctPairs:[[0,2],[1,0],[2,1]],
  expl:"Lista nominal = ciudadanos habilitados para votar; Acta de escrutinio = resultados de casilla; Convocatoria = informa fecha y procedimiento."
},
{
  id:85, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"A",
  pTitle:"El Informe de Gestión",
  passage:"El informe de gestión es el documento mediante el cual un servidor público o una institución dan cuenta de las acciones realizadas durante un período determinado en relación con los objetivos previamente establecidos. Para ser útil como herramienta de evaluación, debe articular claramente: los objetivos programados, las actividades ejecutadas, los indicadores de resultados alcanzados y las desviaciones respecto a la meta, acompañadas de su justificación.",
  q:"¿Cuál de los siguientes elementos mencionados en el texto diferencia a un informe de gestión de una simple lista de actividades realizadas?",
  opts:["La presentación cronológica de todas las acciones ejecutadas durante el período.","La articulación entre objetivos programados, resultados alcanzados y justificación de las desviaciones.","El uso de gráficas y tablas para visualizar los datos de manera atractiva."],
  correct:1, expl:"El texto especifica que para ser útil como herramienta de evaluación el informe debe articular objetivos, actividades, indicadores y desviaciones con su justificación; eso lo distingue de una mera lista de actividades."
},

// ═══════════════════════════════════════════════════════════
//  ▼▼▼  REACTIVOS EXTRA v1.1  (30 Qs adicionales)  ▼▼▼
//  Distribución: 1.1 (+6) · 1.2 (+6) · 1.3 (+3) ·
//                2.1 (+8) · 2.2 (+7)
// ═══════════════════════════════════════════════════════════

// ───── 1.1 Comprensión lectora – Ámbito de estudio (+6) ─────

// ───── 1.2 Comprensión lectora – Ámbito literario (+6) ─────

// ───── 1.3 Comprensión lectora – Ámbito de participación social (+3) ─────

// ───── 2.1 Redacción indirecta – Ámbito de estudio (+8) ─────
{
  id:101, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"A",
  pTitle:"Uso Correcto de la Tilde Diacrítica",
  passage:"La tilde diacrítica distingue palabras que se escriben igual pero tienen funciones gramaticales distintas. Así, 'tú' (pronombre) se diferencia de 'tu' (posesivo); 'él' (pronombre) de 'el' (artículo); y 'sí' (afirmación o pronombre reflexivo) de 'si' (conjunción condicional). El uso indebido o la omisión de esta tilde puede alterar el sentido de la oración.",
  q:"¿Cuál de los siguientes enunciados utiliza correctamente la tilde diacrítica?",
  opts:["Si tu vienes mañana, el equipo lo agradecerá mucho.","Si tú vienes mañana, el equipo lo agradecerá mucho.","Sí tú vienes mañana, él equipo lo agradecerá mucho."],
  correct:1, expl:"'Si' (conjunción) sin tilde, 'tú' (pronombre) con tilde, y 'el' (artículo) sin tilde. La opción A omite la tilde de 'tú'; la C añade tildes incorrectas a 'sí' y 'él'."
},
{
  id:102, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"B",
  pTitle:"Concordancia Sujeto-Verbo en Sujetos Compuestos",
  passage:"Cuando el sujeto está formado por dos o más sustantivos coordinados por 'y', el verbo concuerda en plural. Sin embargo, si los sustantivos refieren a una misma realidad o forman un concepto unitario, el verbo puede ir en singular. Asimismo, cuando el sujeto compuesto incluye personas gramaticales distintas, prevalece la primera persona sobre la segunda y la tercera.",
  q:"En la oración 'Tú y yo ________ encargados de la presentación', la forma verbal correcta es la de la primera persona del plural por prevalencia gramatical.",
  opts:["sois","somos","son"],
  correct:1, expl:"Con sujeto compuesto que mezcla 'tú' (2.ª) y 'yo' (1.ª), prevalece la primera persona del plural: 'somos'."
},
{
  id:103, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"D",
  pTitle:"Vicios Frecuentes de Redacción Académica",
  passage:"La redacción académica enfrenta vicios recurrentes que comprometen la precisión y la economía del discurso, afectando la credibilidad del autor y la legibilidad del texto.",
  q:"Relaciona cada vicio de redacción con su definición.",
  leftItems:["Pleonasmo","Cacofonía","Anfibología"],
  rightItems:["Repetición de sonidos desagradable al oído por proximidad de sílabas similares","Uso innecesario de palabras que añaden significados ya implícitos","Construcción que admite más de una interpretación, generando ambigüedad"],
  correctPairs:[[0,1],[1,0],[2,2]],
  expl:"Pleonasmo = redundancia innecesaria ('subir arriba'); Cacofonía = repetición sonora desagradable; Anfibología = ambigüedad sintáctica."
},
{
  id:104, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"C",
  pTitle:"Proceso de Revisión de un Texto Académico",
  passage:"La revisión de un texto académico no consiste en una sola lectura final, sino en pasadas sucesivas que atienden niveles distintos del escrito, desde lo macro hasta lo micro.",
  q:"Ordena las fases de revisión de un texto académico de mayor a menor nivel estructural.",
  items:["Revisión ortográfica y de signos de puntuación","Revisión de la estructura global y de la argumentación","Revisión léxica y de selección de vocabulario","Revisión de la cohesión y conectores entre párrafos"],
  correctOrder:[1,3,2,0],
  expl:"De mayor a menor: estructura global → cohesión entre párrafos → léxico → ortografía y puntuación."
},
{
  id:105, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"A",
  pTitle:"Conectores Adversativos y Concesivos",
  passage:"Los conectores adversativos ('pero', 'sin embargo', 'no obstante') introducen una idea que contrasta abiertamente con la anterior. Los concesivos ('aunque', 'a pesar de que', 'si bien') reconocen la validez parcial de un argumento previo antes de oponérsele. Confundirlos puede distorsionar la relación lógica que el autor quiere establecer entre dos enunciados.",
  q:"¿Cuál de las siguientes oraciones utiliza correctamente un conector concesivo?",
  opts:["No obstante el proyecto cumple los requisitos, será aprobado en la próxima sesión.","Si bien el proyecto presenta áreas de mejora, cumple con los requisitos mínimos para ser aprobado.","Pero el proyecto presenta áreas de mejora, será aprobado en la próxima sesión."],
  correct:1, expl:"'Si bien' es un conector concesivo que admite parcialmente el argumento (áreas de mejora) antes de oponerle la conclusión (cumple requisitos). En A, 'no obstante' se usa incorrectamente como concesivo."
},
{
  id:106, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"B",
  pTitle:"Uso de la Coma en Enumeraciones",
  passage:"Las comas separan los elementos de una enumeración simple, pero el último elemento se introduce con la conjunción 'y' sin coma previa. Cuando los elementos de la enumeración son a su vez frases extensas con comas internas, se recomienda separarlos con punto y coma para evitar la confusión sobre los límites de cada elemento.",
  q:"En una enumeración cuyos elementos contienen comas internas, la separación adecuada entre ellos es el ________ , para evitar ambigüedad sobre dónde termina cada elemento.",
  opts:["punto seguido","punto y coma","dos puntos"],
  correct:1, expl:"El texto recomienda 'punto y coma' cuando los elementos enumerados contienen a su vez comas internas."
},
{
  id:107, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"D",
  pTitle:"Modalidades del Discurso Académico",
  passage:"Los textos académicos adoptan distintas modalidades discursivas según el propósito comunicativo del autor, y el lector experto reconoce los rasgos de cada una para interpretar adecuadamente el contenido.",
  q:"Relaciona cada modalidad discursiva con su finalidad principal.",
  leftItems:["Expositiva","Argumentativa","Descriptiva"],
  rightItems:["Caracteriza un objeto, lugar o proceso enumerando sus rasgos","Defiende una tesis aportando razones para persuadir al lector","Presenta información organizada para que el lector la comprenda"],
  correctPairs:[[0,2],[1,1],[2,0]],
  expl:"Expositiva = informa para comprender; Argumentativa = persuade con razones; Descriptiva = caracteriza enumerando rasgos."
},
{
  id:108, sub:"2.1", label:"Redacción indirecta – Ámbito de estudio", fmt:"A",
  pTitle:"La Cita Indirecta",
  passage:"La cita indirecta consiste en parafrasear las ideas de otro autor con palabras propias, manteniendo la atribución mediante referencia al apellido y año. A diferencia de la cita directa, no se entrecomilla porque no reproduce literalmente el texto. Su exigencia es doble: respetar fielmente el significado del original y reformularlo con sintaxis y vocabulario distintos al de la fuente.",
  q:"¿Cuál es la doble exigencia de la cita indirecta según el fragmento?",
  opts:["Reproducir el texto entre comillas y proporcionar el número de página exacto.","Respetar fielmente el significado original y reformularlo con sintaxis y vocabulario propios.","Omitir la referencia bibliográfica para no interrumpir el flujo de lectura del texto."],
  correct:1, expl:"El texto identifica esa doble exigencia: 'respetar fielmente el significado del original y reformularlo con sintaxis y vocabulario distintos'."
},

// ───── 2.2 Redacción indirecta – Ámbito de participación social (+7) ─────
{
  id:109, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"A",
  pTitle:"Lenguaje Incluyente en Documentos Oficiales",
  passage:"El lenguaje incluyente busca visibilizar la presencia de mujeres y otros grupos tradicionalmente invisibilizados en el discurso institucional. No se reduce al uso del desdoblamiento ('los y las funcionarios y funcionarias'), que puede resultar reiterativo, sino que privilegia recursos como sustantivos colectivos ('el funcionariado', 'la ciudadanía'), construcciones impersonales ('quienes participen') y términos genéricos no marcados, cuando estos no excluyen.",
  q:"Según el texto, una redacción incluyente eficaz prioriza recursos como ________ frente al uso reiterado del desdoblamiento.",
  opts:["el masculino genérico exclusivo y la omisión de mujeres","los sustantivos colectivos y las construcciones impersonales","el desdoblamiento sistemático en cada oración del documento"],
  correct:1, expl:"El texto presenta los sustantivos colectivos ('funcionariado', 'ciudadanía') y las construcciones impersonales ('quienes participen') como recursos preferibles al desdoblamiento reiterativo."
},
{
  id:110, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"C",
  pTitle:"Estructura del Acta de Sesión",
  passage:"El acta de sesión es el documento que da fe de los acuerdos tomados en una reunión institucional. Su estructura sigue una secuencia formal que permite su consulta posterior y su valor probatorio.",
  q:"Ordena los apartados del acta de sesión institucional en su secuencia correcta.",
  items:["Acuerdos adoptados y votación de los asistentes","Apertura: lugar, fecha, hora y lista de asistencia","Cierre: hora de término y firmas de los participantes","Desahogo del orden del día y deliberaciones"],
  correctOrder:[1,3,0,2],
  expl:"El orden del acta es: Apertura → Desahogo del orden del día → Acuerdos y votación → Cierre y firmas."
},
{
  id:111, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"B",
  pTitle:"Redacción de Oficios",
  passage:"El oficio es un documento de comunicación entre instituciones o entre áreas internas que exige claridad, concisión y respeto al protocolo. Su estructura básica incluye encabezado con número de referencia y fecha, destinatario con cargo, asunto que sintetiza el contenido en una línea, cuerpo desarrollado en párrafos breves y cierre con despedida formal y firma de quien lo emite.",
  q:"Según el texto, el campo que sintetiza en una sola línea el contenido del oficio para facilitar su clasificación archivística es el ________ .",
  opts:["destinatario","asunto","cuerpo"],
  correct:1, expl:"El 'asunto' es definido como la línea que 'sintetiza el contenido en una línea'; cumple además función de clasificación documental."
},
{
  id:112, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"D",
  pTitle:"Tipos de Comunicación Institucional",
  passage:"La comunicación institucional emplea distintos géneros documentales según el destinatario, el grado de formalidad y el propósito de la interacción.",
  q:"Relaciona cada documento con su uso institucional habitual.",
  leftItems:["Memorándum","Circular","Boletín de prensa"],
  rightItems:["Comunicado dirigido a medios de comunicación con información de interés público","Comunicación interna breve sobre asuntos administrativos del personal","Comunicación con un mismo contenido dirigida simultáneamente a varios destinatarios"],
  correctPairs:[[0,1],[1,2],[2,0]],
  expl:"Memorándum = comunicación interna breve; Circular = mismo mensaje a múltiples destinatarios; Boletín de prensa = comunicado a medios."
},
{
  id:113, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"A",
  pTitle:"Redacción de Convenios Institucionales",
  passage:"Un convenio entre instituciones formaliza la voluntad de las partes para colaborar en un objetivo común. Su redacción debe incluir, como mínimo: la identificación precisa de las partes, la enumeración de los antecedentes que justifican el acuerdo, las declaraciones unilaterales de cada parte, las cláusulas con las obligaciones específicas y los mecanismos de seguimiento, vigencia y terminación. La omisión de cualquier obligación específica abre espacio a controversias en la ejecución.",
  q:"¿Qué riesgo concreto identifica el texto cuando un convenio omite especificar obligaciones?",
  opts:["Que las partes deban renegociar las declaraciones desde el principio del proceso.","Que se generen controversias durante la ejecución del convenio por falta de claridad.","Que el convenio pierda automáticamente su vigencia y deba volver a firmarse."],
  correct:1, expl:"El texto señala que la omisión de obligaciones específicas 'abre espacio a controversias en la ejecución'; ese es el riesgo identificado."
},
{
  id:114, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"B",
  pTitle:"Argumentación en Documentos de Política Pública",
  passage:"En documentos de política pública, la argumentación no se limita a defender una opción, sino que debe anticipar y responder a las objeciones más razonables que la propuesta puede recibir. Ignorar las contraargumentaciones previsibles debilita la fuerza persuasiva del documento, pues sugiere que el autor no ha considerado las dificultades de implementación o los costos de oportunidad asociados.",
  q:"Según el texto, un documento de política pública persuasivo debe anticipar y responder a las ________ razonables que su propuesta podría enfrentar.",
  opts:["felicitaciones y aprobaciones","objeciones y contraargumentaciones","cifras y estadísticas"],
  correct:1, expl:"El texto indica que la argumentación debe 'anticipar y responder a las objeciones más razonables'; ignorarlas debilita la fuerza persuasiva."
},
{
  id:115, sub:"2.2", label:"Redacción indirecta – Ámbito de participación social", fmt:"A",
  pTitle:"La Capacitación Electoral en Materiales Didácticos",
  passage:"Los materiales didácticos para la capacitación electoral están dirigidos a personas que serán funcionarias de casilla por un día y deben aprender procedimientos complejos en sesiones breves. Por ello, su redacción privilegia el uso de instrucciones secuenciales numeradas, ejemplos visuales que muestran los formatos correctos, lenguaje sencillo libre de tecnicismos jurídicos y resúmenes al cierre de cada sección. La precisión legal se conserva pero queda subordinada a la comprensión inmediata del lector no especialista.",
  q:"¿Cuál es el criterio editorial que prevalece en los materiales de capacitación electoral según el fragmento?",
  opts:["La exhaustividad jurídica con citas detalladas a la legislación electoral aplicable.","La comprensión inmediata del lector no especialista, mediante instrucciones secuenciales y lenguaje sencillo.","La extensión amplia del documento para abordar todas las hipótesis posibles del proceso electoral."],
  correct:1, expl:"El texto subordina explícitamente 'la precisión legal' a 'la comprensión inmediata del lector no especialista', mediante instrucciones, ejemplos y lenguaje sencillo."
}

]; // fin BANCO_MODULO_A
