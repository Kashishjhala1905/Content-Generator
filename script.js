const topicInput = document.querySelector("#topic");
const fieldInput = document.querySelector("#field");
const languageInput = document.querySelector("#language");
const generateBtn = document.querySelector("#generateBtn");
const copyBtn = document.querySelector("#copyBtn");
const downloadBtn = document.querySelector("#downloadBtn");
const output = document.querySelector("#output");
const statusText = document.querySelector("#status");

let currentPlainText = "";

const languageNames = {
  english: "English",
  hindi: "Hindi",
  gujarati: "Gujarati",
  marathi: "Marathi",
  tamil: "Tamil",
  telugu: "Telugu",
  punjabi: "Punjabi",
  spanish: "Spanish",
  french: "French",
  german: "German",
};

const languageCodes = {
  english: "en",
  hindi: "hi",
  gujarati: "gu",
  marathi: "mr",
  tamil: "ta",
  telugu: "te",
  punjabi: "pa",
  spanish: "es",
  french: "fr",
  german: "de",
};

const fieldVocabulary = {
  english: {
    general: {
      subject: "research practice",
      method: "mixed-method research design",
      data: "academic publications, expert observations, and contextual evidence",
    },
    technology: {
      subject: "digital innovation",
      method: "system design and evaluative prototype analysis",
      data: "technical literature, system logs, user feedback, and performance indicators",
    },
    education: {
      subject: "teaching and learning practice",
      method: "classroom-based mixed-method research design",
      data: "learner performance records, teacher interviews, surveys, and observation notes",
    },
    healthcare: {
      subject: "health service improvement",
      method: "observational and analytical research design",
      data: "clinical records, patient feedback, practitioner interviews, and service indicators",
    },
    business: {
      subject: "organizational decision-making",
      method: "case-study and survey-based research design",
      data: "business reports, stakeholder interviews, market data, and operational metrics",
    },
    environment: {
      subject: "environmental sustainability",
      method: "field-based and analytical research design",
      data: "environmental records, policy documents, field observations, and stakeholder responses",
    },
    "social science": {
      subject: "social behavior and institutional practice",
      method: "qualitative and quantitative social research design",
      data: "survey responses, interview transcripts, policy documents, and demographic indicators",
    },
  },
  hindi: {
    general: {
      subject: "अनुसंधान अभ्यास",
      method: "मिश्रित-पद्धति अनुसंधान डिजाइन",
      data: "शैक्षणिक प्रकाशन, विशेषज्ञ अवलोकन और संदर्भगत प्रमाण",
    },
    technology: {
      subject: "डिजिटल नवाचार",
      method: "प्रणाली डिजाइन और मूल्यांकनात्मक प्रोटोटाइप विश्लेषण",
      data: "तकनीकी साहित्य, प्रणाली लॉग, उपयोगकर्ता प्रतिक्रिया और प्रदर्शन संकेतक",
    },
    education: {
      subject: "शिक्षण और अधिगम अभ्यास",
      method: "कक्षा-आधारित मिश्रित-पद्धति अनुसंधान डिजाइन",
      data: "विद्यार्थी प्रदर्शन अभिलेख, शिक्षक साक्षात्कार, सर्वेक्षण और अवलोकन टिप्पणियां",
    },
    healthcare: {
      subject: "स्वास्थ्य सेवा सुधार",
      method: "अवलोकनात्मक और विश्लेषणात्मक अनुसंधान डिजाइन",
      data: "नैदानिक अभिलेख, रोगी प्रतिक्रिया, चिकित्सक साक्षात्कार और सेवा संकेतक",
    },
    business: {
      subject: "संगठनात्मक निर्णय-निर्माण",
      method: "केस-स्टडी और सर्वेक्षण-आधारित अनुसंधान डिजाइन",
      data: "व्यावसायिक रिपोर्ट, हितधारक साक्षात्कार, बाजार डेटा और परिचालन मापदंड",
    },
    environment: {
      subject: "पर्यावरणीय स्थिरता",
      method: "क्षेत्र-आधारित और विश्लेषणात्मक अनुसंधान डिजाइन",
      data: "पर्यावरणीय अभिलेख, नीति दस्तावेज, क्षेत्रीय अवलोकन और हितधारक प्रतिक्रियाएं",
    },
    "social science": {
      subject: "सामाजिक व्यवहार और संस्थागत अभ्यास",
      method: "गुणात्मक और मात्रात्मक सामाजिक अनुसंधान डिजाइन",
      data: "सर्वेक्षण प्रतिक्रियाएं, साक्षात्कार प्रतिलेख, नीति दस्तावेज और जनसांख्यिकीय संकेतक",
    },
  },
  gujarati: {
    general: {
      subject: "સંશોધન પ્રથા",
      method: "મિશ્ર-પદ્ધતિ સંશોધન ડિઝાઇન",
      data: "શૈક્ષણિક પ્રકાશનો, નિષ્ણાત અવલોકનો અને સંદર્ભ આધારિત પુરાવા",
    },
    technology: {
      subject: "ડિજિટલ નવીનતા",
      method: "સિસ્ટમ ડિઝાઇન અને મૂલ્યાંકનાત્મક પ્રોટોટાઇપ વિશ્લેષણ",
      data: "ટેકનિકલ સાહિત્ય, સિસ્ટમ લોગ, વપરાશકર્તા પ્રતિસાદ અને કામગીરી સૂચકાંકો",
    },
    education: {
      subject: "શિક્ષણ અને અભ્યાસ પ્રથા",
      method: "વર્ગખંડ આધારિત મિશ્ર-પદ્ધતિ સંશોધન ડિઝાઇન",
      data: "વિદ્યાર્થી પ્રદર્શન નોંધો, શિક્ષક ઇન્ટરવ્યુ, સર્વેક્ષણ અને અવલોકન નોંધો",
    },
    healthcare: {
      subject: "આરોગ્ય સેવા સુધારણા",
      method: "અવલોકનાત્મક અને વિશ્લેષણાત્મક સંશોધન ડિઝાઇન",
      data: "ક્લિનિકલ રેકોર્ડ, દર્દી પ્રતિસાદ, પ્રેક્ટિશનર ઇન્ટરવ્યુ અને સેવા સૂચકાંકો",
    },
    business: {
      subject: "સંગઠનાત્મક નિર્ણય પ્રક્રિયા",
      method: "કેસ-સ્ટડી અને સર્વે આધારિત સંશોધન ડિઝાઇન",
      data: "વ્યવસાયિક અહેવાલો, હિતધારક ઇન્ટરવ્યુ, બજાર ડેટા અને કામગીરી માપદંડો",
    },
    environment: {
      subject: "પર્યાવરણીય સ્થિરતા",
      method: "ક્ષેત્ર આધારિત અને વિશ્લેષણાત્મક સંશોધન ડિઝાઇન",
      data: "પર્યાવરણ રેકોર્ડ, નીતિ દસ્તાવેજો, ક્ષેત્ર અવલોકનો અને હિતધારક પ્રતિસાદ",
    },
    "social science": {
      subject: "સામાજિક વર્તન અને સંસ્થાગત પ્રથા",
      method: "ગુણાત્મક અને પરિમાણાત્મક સામાજિક સંશોધન ડિઝાઇન",
      data: "સર્વે પ્રતિભાવો, ઇન્ટરવ્યુ લેખિત નોંધો, નીતિ દસ્તાવેજો અને લોકસાંખ્યિક સૂચકાંકો",
    },
  },
  spanish: {
    general: {
      subject: "practica investigativa",
      method: "diseno de investigacion de metodo mixto",
      data: "publicaciones academicas, observaciones de expertos y evidencia contextual",
    },
    technology: {
      subject: "innovacion digital",
      method: "diseno de sistemas y analisis evaluativo de prototipos",
      data: "literatura tecnica, registros del sistema, opiniones de usuarios e indicadores de rendimiento",
    },
    education: {
      subject: "practica de ensenanza y aprendizaje",
      method: "diseno de investigacion de metodo mixto basado en el aula",
      data: "registros de rendimiento estudiantil, entrevistas docentes, encuestas y notas de observacion",
    },
    healthcare: {
      subject: "mejora de los servicios de salud",
      method: "diseno de investigacion observacional y analitico",
      data: "registros clinicos, opiniones de pacientes, entrevistas a profesionales e indicadores de servicio",
    },
    business: {
      subject: "toma de decisiones organizacionales",
      method: "diseno de investigacion basado en estudios de caso y encuestas",
      data: "informes empresariales, entrevistas a partes interesadas, datos de mercado y metricas operativas",
    },
    environment: {
      subject: "sostenibilidad ambiental",
      method: "diseno de investigacion de campo y analitico",
      data: "registros ambientales, documentos de politica, observaciones de campo y respuestas de partes interesadas",
    },
    "social science": {
      subject: "comportamiento social y practica institucional",
      method: "diseno de investigacion social cualitativa y cuantitativa",
      data: "respuestas de encuestas, transcripciones de entrevistas, documentos de politica e indicadores demograficos",
    },
  },
  french: {
    general: {
      subject: "pratique de recherche",
      method: "conception de recherche a methodes mixtes",
      data: "publications academiques, observations d'experts et preuves contextuelles",
    },
    technology: {
      subject: "innovation numerique",
      method: "conception de systeme et analyse evaluative de prototype",
      data: "litterature technique, journaux systeme, retours d'utilisateurs et indicateurs de performance",
    },
    education: {
      subject: "pratique d'enseignement et d'apprentissage",
      method: "conception de recherche a methodes mixtes en contexte de classe",
      data: "resultats des apprenants, entretiens avec les enseignants, enquetes et notes d'observation",
    },
    healthcare: {
      subject: "amelioration des services de sante",
      method: "conception de recherche observationnelle et analytique",
      data: "dossiers cliniques, retours des patients, entretiens avec les praticiens et indicateurs de service",
    },
    business: {
      subject: "prise de decision organisationnelle",
      method: "conception de recherche par etude de cas et enquete",
      data: "rapports d'entreprise, entretiens avec les parties prenantes, donnees de marche et indicateurs operationnels",
    },
    environment: {
      subject: "durabilite environnementale",
      method: "conception de recherche de terrain et analytique",
      data: "dossiers environnementaux, documents de politique, observations de terrain et reponses des parties prenantes",
    },
    "social science": {
      subject: "comportement social et pratique institutionnelle",
      method: "conception de recherche sociale qualitative et quantitative",
      data: "reponses d'enquete, transcriptions d'entretiens, documents de politique et indicateurs demographiques",
    },
  },
};

const generators = {
  english(topic, context) {
    const titleTopic = toTitleCase(topic);
    return [
      section("Title", `${titleTopic}: A Research-Oriented Analysis of Current Practices, Challenges, and Future Directions`, true),
      section("Abstract", `This paper examines ${topic} as an important area of contemporary academic and professional concern. The study focuses on how ${topic} influences ${context.subject}, the major challenges associated with its implementation, and the possible outcomes that may emerge from a structured research approach. The paper adopts a clear analytical perspective by connecting existing scholarly ideas with a proposed methodology suitable for future investigation. It considers prior discussions on conceptual development, practical adoption, ethical responsibility, and measurable impact. The suggested approach combines literature analysis with empirical evidence collected through surveys, interviews, and document review. Expected findings indicate that ${topic} can improve decision-making, strengthen institutional practices, and support more effective outcomes when guided by evidence-based planning. However, the discussion also recognizes limitations such as resource constraints, data quality issues, stakeholder readiness, and contextual variation. The paper concludes that ${topic} requires continuous evaluation, responsible implementation, and interdisciplinary collaboration. By presenting a structured research framework, this study contributes to a clearer understanding of the topic and offers a foundation for future academic inquiry.`),
      section("Introduction", `${topic} has become a significant subject of research because it reflects changing needs, emerging opportunities, and new challenges within modern society. Academic interest in this area has increased as institutions, professionals, and communities seek reliable ways to improve outcomes through informed decision-making. The topic is relevant because it connects theoretical understanding with practical application, allowing researchers to examine both conceptual value and real-world impact.\n\nThe main problem addressed in this paper is the need for a structured understanding of ${topic}. While the topic has gained attention, many discussions remain fragmented or context-specific. A research-oriented analysis can help identify core factors, implementation barriers, and expected benefits. This paper therefore aims to generate a clear academic foundation by reviewing related ideas, proposing a suitable methodology, and discussing possible outcomes.`),
      section("Literature Review", `Existing literature generally shows that ${topic} is shaped by several connected streams of research. First, early conceptual studies emphasize the importance of defining the topic clearly and situating it within broader academic debates. These works suggest that strong theoretical framing is necessary before practical applications can be evaluated.\n\nSecond, implementation-focused research highlights the role of institutional readiness, stakeholder participation, and resource availability. Scholars in this area argue that even promising ideas may produce limited results when organizational structures are weak or when users are not adequately prepared.\n\nThird, evaluation-based studies focus on measurable outcomes. Prior work commonly recommends the use of indicators such as efficiency, accessibility, quality improvement, user satisfaction, and long-term sustainability. These studies show that research should not only describe ${topic}, but also assess its observable effects.\n\nFourth, ethical and social discussions stress the importance of fairness, transparency, accountability, and responsible practice. This body of work is especially important because academic research must consider both benefits and possible risks. Finally, recent interdisciplinary studies suggest that ${topic} can be better understood when evidence is drawn from multiple fields rather than from a single disciplinary perspective.`),
      section("Methodology", `A suitable methodology for studying ${topic} would use a ${context.method}. The study could begin with a systematic review of relevant academic sources to establish the theoretical background and identify research gaps. After this, primary data could be collected from selected participants who have direct knowledge or experience related to the topic.\n\nThe proposed system design may include three stages. The first stage is data collection, using ${context.data}. The second stage is data analysis, where qualitative responses are coded into themes and quantitative data are examined through descriptive statistics. The third stage is interpretation, where findings are compared with existing literature to determine whether the evidence supports or challenges prior assumptions.\n\nSampling should be purposive, focusing on participants or sources that are directly relevant to the research problem. Ethical considerations should include informed consent, confidentiality, transparent data handling, and unbiased reporting. This methodology would allow the researcher to produce balanced and reliable findings.`),
      section("Results & Discussion", `The expected results would likely show that ${topic} has meaningful potential to improve practice when it is implemented through a structured and evidence-based approach. Positive outcomes may include better decision-making, improved efficiency, stronger user engagement, and clearer strategic planning. The findings may also reveal that successful adoption depends on leadership support, stakeholder awareness, adequate resources, and continuous monitoring.\n\nAt the same time, the discussion is expected to identify several challenges. These may include limited infrastructure, lack of technical or professional training, inconsistent data quality, financial barriers, and resistance to change. The results may further suggest that the impact of ${topic} varies across contexts, meaning that one approach may not be equally effective in all settings.\n\nOverall, the discussion would emphasize that ${topic} should be understood as a dynamic research area. Its value depends not only on theoretical promise, but also on careful design, ethical responsibility, and practical adaptability.`),
      section("Conclusion", `This paper has presented a structured academic discussion of ${topic}, including its background, related literature, possible methodology, and expected outcomes. The analysis indicates that the topic is important because it connects scholarly inquiry with practical improvement. Existing research suggests that clear conceptual framing, stakeholder involvement, ethical awareness, and outcome-based evaluation are essential for meaningful progress.\n\nThe proposed methodology offers a practical way to investigate the topic through literature review, empirical data collection, and systematic analysis. Expected findings suggest that ${topic} can produce positive results, but only when implementation challenges are recognized and addressed. Future research should test the proposed framework in specific contexts and compare results across different settings. Such work would strengthen academic understanding and support more effective application in practice.`),
    ];
  },
  hindi(topic, context) {
    return [
      section("शीर्षक", `${topic}: वर्तमान प्रथाओं, चुनौतियों और भविष्य की दिशाओं का शोध-उन्मुख विश्लेषण`, true),
      section("सारांश", `यह शोधपत्र ${topic} को समकालीन शैक्षणिक और व्यावसायिक चिंता के एक महत्वपूर्ण क्षेत्र के रूप में जांचता है। अध्ययन इस बात पर केंद्रित है कि ${topic} ${context.subject} को कैसे प्रभावित करता है, इसके कार्यान्वयन से जुड़ी प्रमुख चुनौतियां क्या हैं, और एक संरचित अनुसंधान दृष्टिकोण से कौन से संभावित परिणाम सामने आ सकते हैं। यह शोधपत्र मौजूदा विद्वतापूर्ण विचारों को भविष्य के अध्ययन के लिए उपयुक्त प्रस्तावित पद्धति से जोड़ते हुए स्पष्ट विश्लेषणात्मक दृष्टिकोण अपनाता है। इसमें वैचारिक विकास, व्यावहारिक अपनाने, नैतिक उत्तरदायित्व और मापनीय प्रभाव से संबंधित पूर्व चर्चाओं को शामिल किया गया है। सुझाया गया दृष्टिकोण साहित्य विश्लेषण को सर्वेक्षण, साक्षात्कार और दस्तावेज समीक्षा से प्राप्त अनुभवजन्य प्रमाणों के साथ जोड़ता है। अपेक्षित निष्कर्ष बताते हैं कि ${topic} साक्ष्य-आधारित योजना के माध्यम से निर्णय-निर्माण, संस्थागत प्रथाओं और प्रभावी परिणामों को मजबूत कर सकता है। फिर भी, संसाधन सीमाएं, डेटा गुणवत्ता, हितधारक तैयारी और संदर्भगत विविधता जैसी बाधाएं भी महत्वपूर्ण हैं। अध्ययन निष्कर्ष देता है कि ${topic} के लिए निरंतर मूल्यांकन, जिम्मेदार कार्यान्वयन और अंतःविषय सहयोग आवश्यक है।`),
      section("परिचय", `${topic} आधुनिक समाज में बदलती आवश्यकताओं, उभरते अवसरों और नई चुनौतियों को दर्शाने के कारण एक महत्वपूर्ण शोध विषय बन गया है। इस क्षेत्र में शैक्षणिक रुचि इसलिए बढ़ी है क्योंकि संस्थाएं, पेशेवर और समुदाय सूचित निर्णय-निर्माण के माध्यम से बेहतर परिणाम प्राप्त करना चाहते हैं। यह विषय सैद्धांतिक समझ को व्यावहारिक अनुप्रयोग से जोड़ता है और शोधकर्ताओं को वैचारिक मूल्य तथा वास्तविक प्रभाव दोनों की जांच करने में सहायता देता है।\n\nइस शोधपत्र में संबोधित मुख्य समस्या ${topic} की संरचित समझ की आवश्यकता है। यद्यपि इस विषय ने ध्यान आकर्षित किया है, कई चर्चाएं अभी भी खंडित या संदर्भ-विशिष्ट हैं। शोध-उन्मुख विश्लेषण मुख्य कारकों, कार्यान्वयन बाधाओं और अपेक्षित लाभों की पहचान करने में सहायक हो सकता है।`),
      section("साहित्य समीक्षा", `उपलब्ध साहित्य सामान्यतः दर्शाता है कि ${topic} अनुसंधान की कई परस्पर जुड़ी धाराओं से प्रभावित है। प्रथम, प्रारंभिक वैचारिक अध्ययन विषय की स्पष्ट परिभाषा और उसे व्यापक अकादमिक बहसों में स्थापित करने के महत्व पर बल देते हैं। ये अध्ययन बताते हैं कि व्यावहारिक अनुप्रयोगों के मूल्यांकन से पहले मजबूत सैद्धांतिक आधार आवश्यक है।\n\nद्वितीय, कार्यान्वयन-केंद्रित शोध संस्थागत तैयारी, हितधारक भागीदारी और संसाधन उपलब्धता की भूमिका को रेखांकित करता है। इस क्षेत्र के विद्वानों का मत है कि यदि संगठनात्मक संरचनाएं कमजोर हों या उपयोगकर्ता पर्याप्त रूप से तैयार न हों, तो आशाजनक विचार भी सीमित परिणाम दे सकते हैं।\n\nतृतीय, मूल्यांकन-आधारित अध्ययन दक्षता, पहुंच, गुणवत्ता सुधार, उपयोगकर्ता संतुष्टि और दीर्घकालिक स्थिरता जैसे संकेतकों पर ध्यान देते हैं। चतुर्थ, नैतिक और सामाजिक चर्चाएं निष्पक्षता, पारदर्शिता, जवाबदेही और जिम्मेदार अभ्यास के महत्व को स्पष्ट करती हैं। अंततः, अंतःविषय अध्ययन बताते हैं कि ${topic} को कई क्षेत्रों के प्रमाणों से अधिक व्यापक रूप से समझा जा सकता है।`),
      section("कार्यप्रणाली", `${topic} के अध्ययन के लिए ${context.method} उपयुक्त हो सकता है। अध्ययन की शुरुआत संबंधित अकादमिक स्रोतों की व्यवस्थित समीक्षा से की जा सकती है, जिससे सैद्धांतिक पृष्ठभूमि और शोध अंतराल स्पष्ट होंगे। इसके बाद, विषय से प्रत्यक्ष अनुभव रखने वाले प्रतिभागियों से प्राथमिक डेटा एकत्र किया जा सकता है।\n\nप्रस्तावित प्रणाली डिजाइन में तीन चरण शामिल हो सकते हैं। पहला चरण डेटा संग्रह है, जिसमें ${context.data} का उपयोग किया जाएगा। दूसरा चरण डेटा विश्लेषण है, जहां गुणात्मक प्रतिक्रियाओं को विषयगत रूप से कोड किया जाएगा और मात्रात्मक डेटा का वर्णनात्मक सांख्यिकी से परीक्षण होगा। तीसरा चरण व्याख्या है, जिसमें निष्कर्षों की तुलना उपलब्ध साहित्य से की जाएगी।\n\nनमूना चयन उद्देश्यपूर्ण होना चाहिए। नैतिक विचारों में सूचित सहमति, गोपनीयता, पारदर्शी डेटा प्रबंधन और निष्पक्ष रिपोर्टिंग शामिल होनी चाहिए।`),
      section("परिणाम और चर्चा", `अपेक्षित परिणाम यह दिखा सकते हैं कि ${topic} संरचित और साक्ष्य-आधारित दृष्टिकोण के साथ लागू होने पर अभ्यास में महत्वपूर्ण सुधार कर सकता है। सकारात्मक परिणामों में बेहतर निर्णय-निर्माण, अधिक दक्षता, मजबूत उपयोगकर्ता सहभागिता और स्पष्ट रणनीतिक योजना शामिल हो सकते हैं। निष्कर्ष यह भी बता सकते हैं कि सफल अपनाने के लिए नेतृत्व समर्थन, हितधारक जागरूकता, पर्याप्त संसाधन और निरंतर निगरानी आवश्यक हैं।\n\nसाथ ही, चर्चा कई चुनौतियों की पहचान कर सकती है। इनमें सीमित आधारभूत संरचना, तकनीकी या पेशेवर प्रशिक्षण की कमी, असंगत डेटा गुणवत्ता, वित्तीय बाधाएं और परिवर्तन के प्रति प्रतिरोध शामिल हो सकते हैं। परिणाम यह भी संकेत दे सकते हैं कि ${topic} का प्रभाव विभिन्न संदर्भों में अलग-अलग हो सकता है।\n\nकुल मिलाकर, चर्चा यह रेखांकित करेगी कि ${topic} को एक गतिशील शोध क्षेत्र के रूप में समझा जाना चाहिए।`),
      section("निष्कर्ष", `इस शोधपत्र ने ${topic} पर इसकी पृष्ठभूमि, संबंधित साहित्य, संभावित कार्यप्रणाली और अपेक्षित परिणामों सहित एक संरचित अकादमिक चर्चा प्रस्तुत की है। विश्लेषण बताता है कि यह विषय महत्वपूर्ण है क्योंकि यह विद्वतापूर्ण जांच को व्यावहारिक सुधार से जोड़ता है। उपलब्ध शोध स्पष्ट वैचारिक आधार, हितधारक भागीदारी, नैतिक जागरूकता और परिणाम-आधारित मूल्यांकन को आवश्यक मानता है।\n\nप्रस्तावित कार्यप्रणाली साहित्य समीक्षा, अनुभवजन्य डेटा संग्रह और व्यवस्थित विश्लेषण के माध्यम से विषय की जांच करने का व्यावहारिक मार्ग प्रदान करती है। भविष्य के शोध को विशिष्ट संदर्भों में इस ढांचे का परीक्षण करना चाहिए और विभिन्न स्थितियों में परिणामों की तुलना करनी चाहिए।`),
    ];
  },
  gujarati(topic, context) {
    return [
      section("શીર્ષક", `${topic}: વર્તમાન પ્રથાઓ, પડકારો અને ભવિષ્ય દિશાઓનું સંશોધન-કેન્દ્રિત વિશ્લેષણ`, true),
      section("સારાંશ", `આ સંશોધન પેપર ${topic} ને આધુનિક શૈક્ષણિક અને વ્યાવસાયિક ચિંતાના મહત્વપૂર્ણ ક્ષેત્ર તરીકે તપાસે છે. અભ્યાસ એ બાબત પર ધ્યાન કેન્દ્રિત કરે છે કે ${topic} ${context.subject} ને કેવી રીતે અસર કરે છે, તેના અમલીકરણ સાથે જોડાયેલા મુખ્ય પડકારો કયા છે અને સુવ્યવસ્થિત સંશોધન અભિગમથી કયા સંભવિત પરિણામો મળી શકે છે. પેપર વર્તમાન શૈક્ષણિક વિચારોને ભવિષ્યના અભ્યાસ માટે યોગ્ય પદ્ધતિ સાથે જોડીને સ્પષ્ટ વિશ્લેષણાત્મક દૃષ્ટિકોણ અપનાવે છે. તેમાં વિચારધારાત્મક વિકાસ, વ્યવહારુ અપનાવ, નૈતિક જવાબદારી અને માપી શકાય તેવી અસર સંબંધિત પૂર્વ ચર્ચાઓનો સમાવેશ થાય છે. સૂચિત અભિગમ સાહિત્ય વિશ્લેષણને સર્વે, ઇન્ટરવ્યુ અને દસ્તાવેજ સમીક્ષા દ્વારા મળેલા અનુભવ આધારિત પુરાવા સાથે જોડે છે. અપેક્ષિત તારણો દર્શાવે છે કે ${topic} પુરાવા આધારિત આયોજન દ્વારા નિર્ણય પ્રક્રિયા, સંસ્થાગત પ્રથાઓ અને અસરકારક પરિણામોને મજબૂત બનાવી શકે છે. તેમ છતાં, સંસાધન મર્યાદા, ડેટા ગુણવત્તા, હિતધારક તૈયારી અને સંદર્ભ વૈવિધ્ય જેવા મુદ્દાઓ પણ મહત્વપૂર્ણ છે.`),
      section("પરિચય", `${topic} આધુનિક સમાજમાં બદલાતી જરૂરિયાતો, નવી તક અને નવા પડકારોને દર્શાવતું હોવાથી મહત્વપૂર્ણ સંશોધન વિષય બન્યું છે. આ ક્ષેત્રમાં શૈક્ષણિક રસ વધ્યો છે કારણ કે સંસ્થાઓ, વ્યાવસાયિકો અને સમુદાયો માહિતી આધારિત નિર્ણય પ્રક્રિયા દ્વારા સારા પરિણામો મેળવવા ઇચ્છે છે. આ વિષય સૈદ્ધાંતિક સમજને વ્યવહારુ ઉપયોગ સાથે જોડે છે અને સંશોધકોને વિચારધારાત્મક મૂલ્ય તથા વાસ્તવિક અસર બંને તપાસવાની તક આપે છે.\n\nઆ પેપરમાં ચર્ચાતી મુખ્ય સમસ્યા ${topic} ની સુવ્યવસ્થિત સમજની જરૂરિયાત છે. વિષય પર ધ્યાન વધ્યું હોવા છતાં ઘણી ચર્ચાઓ હજુ પણ વિખરાયેલી અથવા સંદર્ભ-વિશિષ્ટ છે. સંશોધન-કેન્દ્રિત વિશ્લેષણ મુખ્ય પરિબળો, અમલીકરણ અવરોધો અને અપેક્ષિત લાભોને ઓળખવામાં મદદરૂપ થઈ શકે છે.`),
      section("સાહિત્ય સમીક્ષા", `ઉપલબ્ધ સાહિત્ય સામાન્ય રીતે દર્શાવે છે કે ${topic} સંશોધનની અનેક જોડાયેલી દિશાઓથી ઘડાય છે. પ્રથમ, પ્રારંભિક વિચારધારાત્મક અભ્યાસો વિષયની સ્પષ્ટ વ્યાખ્યા અને તેને વ્યાપક શૈક્ષણિક ચર્ચામાં સ્થાન આપવાના મહત્વ પર ભાર મૂકે છે. આવા અભ્યાસો સૂચવે છે કે વ્યવહારુ ઉપયોગનું મૂલ્યાંકન કરતા પહેલાં મજબૂત સૈદ્ધાંતિક આધાર જરૂરી છે.\n\nબીજું, અમલીકરણ-કેન્દ્રિત સંશોધન સંસ્થાગત તૈયારી, હિતધારક ભાગીદારી અને સંસાધન ઉપલબ્ધતાની ભૂમિકા દર્શાવે છે. વિદ્વાનો માને છે કે સંગઠનાત્મક માળખું નબળું હોય અથવા વપરાશકર્તાઓ તૈયાર ન હોય તો સારા વિચારો પણ મર્યાદિત પરિણામ આપે છે.\n\nત્રીજું, મૂલ્યાંકન આધારિત અભ્યાસો કાર્યક્ષમતા, ઉપલબ્ધતા, ગુણવત્તા સુધારણા, વપરાશકર્તા સંતોષ અને લાંબા ગાળાની સ્થિરતા જેવા સૂચકાંકો પર ધ્યાન આપે છે. ચોથું, નૈતિક અને સામાજિક ચર્ચાઓ ન્યાય, પારદર્શિતા, જવાબદારી અને જવાબદાર પ્રથાના મહત્વને ઉજાગર કરે છે. અંતે, આંતરવિષયક અભ્યાસો સૂચવે છે કે ${topic} ને અનેક ક્ષેત્રોના પુરાવા દ્વારા વધુ સારી રીતે સમજવામાં આવી શકે છે.`),
      section("પદ્ધતિશાસ્ત્ર", `${topic} ના અભ્યાસ માટે ${context.method} યોગ્ય હોઈ શકે છે. અભ્યાસ સંબંધિત શૈક્ષણિક સ્ત્રોતોની વ્યવસ્થિત સમીક્ષા સાથે શરૂ થઈ શકે છે, જેથી સૈદ્ધાંતિક પૃષ્ઠભૂમિ અને સંશોધન ખામીઓ ઓળખી શકાય. ત્યારબાદ વિષય સાથે સીધો અનુભવ ધરાવતા ભાગીદારો પાસેથી પ્રાથમિક ડેટા એકત્ર કરી શકાય છે.\n\nપ્રસ્તાવિત સિસ્ટમ ડિઝાઇનમાં ત્રણ તબક્કા હોઈ શકે છે. પ્રથમ તબક્કો ડેટા સંગ્રહ છે, જેમાં ${context.data} નો ઉપયોગ થશે. બીજો તબક્કો ડેટા વિશ્લેષણ છે, જેમાં ગુણાત્મક પ્રતિભાવોને વિષયવાર કોડ કરવામાં આવશે અને પરિમાણાત્મક ડેટાનું વર્ણનાત્મક આંકડાશાસ્ત્ર દ્વારા વિશ્લેષણ થશે. ત્રીજો તબક્કો અર્થઘટન છે, જેમાં તારણોની તુલના ઉપલબ્ધ સાહિત્ય સાથે થશે.\n\nનમૂના પસંદગી હેતુપૂર્ણ હોવી જોઈએ. નૈતિક મુદ્દાઓમાં જાણકારીપૂર્વક સંમતિ, ગોપનીયતા, પારદર્શક ડેટા સંચાલન અને નિષ્પક્ષ અહેવાલનો સમાવેશ થવો જોઈએ.`),
      section("પરિણામો અને ચર્ચા", `અપેક્ષિત પરિણામો દર્શાવી શકે છે કે ${topic} સુવ્યવસ્થિત અને પુરાવા આધારિત અભિગમથી અમલમાં મૂકાય ત્યારે પ્રથામાં નોંધપાત્ર સુધારો લાવી શકે છે. સકારાત્મક પરિણામોમાં સારો નિર્ણય, વધેલી કાર્યક્ષમતા, મજબૂત વપરાશકર્તા જોડાણ અને સ્પષ્ટ વ્યૂહાત્મક આયોજનનો સમાવેશ થઈ શકે છે. તારણો એ પણ બતાવી શકે છે કે સફળ અપનાવ માટે નેતૃત્વ સહકાર, હિતધારક જાગૃતિ, પૂરતા સંસાધનો અને સતત દેખરેખ જરૂરી છે.\n\nચર્ચા સાથે સાથે અનેક પડકારોને પણ ઓળખી શકે છે. તેમાં મર્યાદિત માળખાકીય સુવિધા, તકનિકી અથવા વ્યાવસાયિક તાલીમનો અભાવ, અસંગત ડેટા ગુણવત્તા, નાણાકીય અવરોધો અને પરિવર્તન પ્રત્યેનો વિરોધ આવી શકે છે. પરિણામો સૂચવી શકે છે કે ${topic} ની અસર અલગ-અલગ સંદર્ભોમાં બદલાય છે.\n\nકુલ મળીને, ચર્ચા એ દર્શાવશે કે ${topic} ને ગતિશીલ સંશોધન ક્ષેત્ર તરીકે સમજવું જોઈએ.`),
      section("નિષ્કર્ષ", `આ પેપરે ${topic} વિષે તેની પૃષ્ઠભૂમિ, સંબંધિત સાહિત્ય, સંભવિત પદ્ધતિ અને અપેક્ષિત પરિણામો સહિત સુવ્યવસ્થિત શૈક્ષણિક ચર્ચા રજૂ કરી છે. વિશ્લેષણ દર્શાવે છે કે આ વિષય મહત્વપૂર્ણ છે કારણ કે તે શૈક્ષણિક તપાસને વ્યવહારુ સુધારણા સાથે જોડે છે. ઉપલબ્ધ સંશોધન સ્પષ્ટ વિચારધારાત્મક માળખું, હિતધારક ભાગીદારી, નૈતિક જાગૃતિ અને પરિણામ આધારિત મૂલ્યાંકનને આવશ્યક ગણાવે છે.\n\nસૂચિત પદ્ધતિ સાહિત્ય સમીક્ષા, અનુભવ આધારિત ડેટા સંગ્રહ અને વ્યવસ્થિત વિશ્લેષણ દ્વારા વિષયની તપાસ કરવાનો વ્યવહારુ માર્ગ આપે છે. ભવિષ્યના સંશોધનમાં આ માળખાને ચોક્કસ સંદર્ભોમાં તપાસવું અને વિવિધ પરિસ્થિતિઓમાં પરિણામોની તુલના કરવી જોઈએ.`),
    ];
  },
  spanish(topic, context) {
    return [
      section("Titulo", `${topic}: Analisis orientado a la investigacion sobre practicas actuales, desafios y direcciones futuras`, true),
      section("Resumen", `Este articulo examina ${topic} como un area importante de interes academico y profesional contemporaneo. El estudio se centra en como ${topic} influye en la ${context.subject}, cuales son los principales desafios asociados con su implementacion y que resultados pueden surgir de un enfoque de investigacion estructurado. El trabajo adopta una perspectiva analitica clara al conectar ideas academicas existentes con una metodologia propuesta para futuras investigaciones. Considera debates previos sobre desarrollo conceptual, adopcion practica, responsabilidad etica e impacto medible. El enfoque sugerido combina analisis de literatura con evidencia empirica obtenida mediante encuestas, entrevistas y revision documental. Los resultados esperados indican que ${topic} puede mejorar la toma de decisiones, fortalecer las practicas institucionales y apoyar resultados mas eficaces cuando se guia por una planificacion basada en evidencia. Sin embargo, tambien se reconocen limitaciones como restricciones de recursos, calidad de datos, preparacion de las partes interesadas y variacion contextual. El articulo concluye que ${topic} requiere evaluacion continua, implementacion responsable y colaboracion interdisciplinaria.`),
      section("Introduccion", `${topic} se ha convertido en un tema significativo de investigacion porque refleja necesidades cambiantes, oportunidades emergentes y nuevos desafios dentro de la sociedad moderna. El interes academico en esta area ha aumentado porque instituciones, profesionales y comunidades buscan formas confiables de mejorar resultados mediante decisiones informadas. El tema es relevante porque conecta la comprension teorica con la aplicacion practica.\n\nEl problema principal abordado en este articulo es la necesidad de una comprension estructurada de ${topic}. Aunque el tema ha recibido atencion, muchas discusiones siguen siendo fragmentadas o especificas de un contexto. Un analisis orientado a la investigacion puede ayudar a identificar factores centrales, barreras de implementacion y beneficios esperados.`),
      section("Revision de Literatura", `La literatura existente muestra generalmente que ${topic} esta formado por varias corrientes de investigacion conectadas. En primer lugar, los estudios conceptuales iniciales destacan la importancia de definir claramente el tema y situarlo dentro de debates academicos mas amplios. Estos trabajos sugieren que un marco teorico solido es necesario antes de evaluar aplicaciones practicas.\n\nEn segundo lugar, la investigacion centrada en la implementacion resalta el papel de la preparacion institucional, la participacion de las partes interesadas y la disponibilidad de recursos. Los especialistas sostienen que incluso las ideas prometedoras pueden producir resultados limitados cuando las estructuras organizacionales son debiles.\n\nEn tercer lugar, los estudios basados en evaluacion se enfocan en resultados medibles como eficiencia, accesibilidad, mejora de calidad, satisfaccion del usuario y sostenibilidad a largo plazo. En cuarto lugar, las discusiones eticas y sociales subrayan la justicia, la transparencia, la responsabilidad y la practica responsable. Finalmente, los estudios interdisciplinarios recientes sugieren que ${topic} se comprende mejor cuando la evidencia proviene de multiples campos.`),
      section("Metodologia", `Una metodologia adecuada para estudiar ${topic} podria utilizar un ${context.method}. El estudio podria comenzar con una revision sistematica de fuentes academicas relevantes para establecer el contexto teorico e identificar vacios de investigacion. Despues, se podrian recopilar datos primarios de participantes con conocimiento o experiencia directa sobre el tema.\n\nEl diseno propuesto puede incluir tres etapas. La primera etapa es la recopilacion de datos mediante ${context.data}. La segunda etapa es el analisis de datos, donde las respuestas cualitativas se codifican en temas y los datos cuantitativos se examinan con estadistica descriptiva. La tercera etapa es la interpretacion, donde los hallazgos se comparan con la literatura existente.\n\nEl muestreo debe ser intencional y centrarse en fuentes o participantes directamente relacionados con el problema de investigacion. Las consideraciones eticas deben incluir consentimiento informado, confidencialidad, manejo transparente de datos e informes imparciales.`),
      section("Resultados y Discusion", `Los resultados esperados probablemente mostraran que ${topic} tiene un potencial significativo para mejorar la practica cuando se implementa mediante un enfoque estructurado y basado en evidencia. Los resultados positivos pueden incluir mejor toma de decisiones, mayor eficiencia, mayor participacion de usuarios y planificacion estrategica mas clara. Tambien puede observarse que la adopcion exitosa depende del apoyo del liderazgo, la conciencia de las partes interesadas, recursos adecuados y monitoreo continuo.\n\nAl mismo tiempo, la discusion puede identificar varios desafios. Estos pueden incluir infraestructura limitada, falta de formacion tecnica o profesional, calidad de datos inconsistente, barreras financieras y resistencia al cambio. Los resultados tambien pueden sugerir que el impacto de ${topic} varia segun el contexto.\n\nEn general, la discusion enfatizaria que ${topic} debe entenderse como un area dinamica de investigacion.`),
      section("Conclusion", `Este articulo ha presentado una discusion academica estructurada sobre ${topic}, incluyendo su contexto, literatura relacionada, metodologia posible y resultados esperados. El analisis indica que el tema es importante porque conecta la investigacion academica con la mejora practica. La investigacion existente sugiere que el marco conceptual claro, la participacion de las partes interesadas, la conciencia etica y la evaluacion basada en resultados son esenciales.\n\nLa metodologia propuesta ofrece una forma practica de investigar el tema mediante revision de literatura, recopilacion de datos empiricos y analisis sistematico. La investigacion futura deberia probar este marco en contextos especificos y comparar resultados entre diferentes escenarios.`),
    ];
  },
  french(topic, context) {
    return [
      section("Titre", `${topic}: Analyse orientee recherche des pratiques actuelles, des defis et des orientations futures`, true),
      section("Resume", `Cet article examine ${topic} comme un domaine important de preoccupation academique et professionnelle contemporaine. L'etude porte sur la maniere dont ${topic} influence la ${context.subject}, sur les principaux defis lies a sa mise en oeuvre et sur les resultats possibles issus d'une approche de recherche structuree. L'article adopte une perspective analytique claire en reliant les idees scientifiques existantes a une methodologie proposee pour de futures recherches. Il prend en compte les discussions anterieures sur le developpement conceptuel, l'adoption pratique, la responsabilite ethique et l'impact mesurable. L'approche suggeree combine l'analyse de la litterature avec des preuves empiriques recueillies par enquetes, entretiens et examen documentaire. Les resultats attendus indiquent que ${topic} peut ameliorer la prise de decision, renforcer les pratiques institutionnelles et soutenir des resultats plus efficaces lorsqu'il est guide par une planification fondee sur des preuves. Toutefois, l'analyse reconnait aussi des limites telles que les contraintes de ressources, la qualite des donnees, la preparation des parties prenantes et la variation contextuelle. L'article conclut que ${topic} exige une evaluation continue, une mise en oeuvre responsable et une collaboration interdisciplinaire.`),
      section("Introduction", `${topic} est devenu un sujet de recherche important car il reflete des besoins changeants, des opportunites emergentes et de nouveaux defis dans la societe moderne. L'interet academique pour ce domaine a augmente parce que les institutions, les professionnels et les communautes recherchent des moyens fiables d'ameliorer les resultats grace a une prise de decision informee. Le sujet est pertinent car il relie la comprehension theorique a l'application pratique.\n\nLe probleme principal aborde dans cet article est la necessite d'une comprehension structuree de ${topic}. Bien que le sujet ait attire l'attention, de nombreuses discussions restent fragmentees ou propres a un contexte. Une analyse orientee recherche peut aider a identifier les facteurs centraux, les obstacles a la mise en oeuvre et les benefices attendus.`),
      section("Revue de Litterature", `La litterature existante montre generalement que ${topic} est faconne par plusieurs courants de recherche lies entre eux. Premierement, les etudes conceptuelles initiales soulignent l'importance de definir clairement le sujet et de le situer dans des debats academiques plus larges. Ces travaux suggerent qu'un cadrage theorique solide est necessaire avant d'evaluer les applications pratiques.\n\nDeuxiemement, la recherche axee sur la mise en oeuvre met en evidence le role de la preparation institutionnelle, de la participation des parties prenantes et de la disponibilite des ressources. Les chercheurs soutiennent que meme des idees prometteuses peuvent produire des resultats limites lorsque les structures organisationnelles sont faibles.\n\nTroisiemement, les etudes fondees sur l'evaluation se concentrent sur des resultats mesurables comme l'efficacite, l'accessibilite, l'amelioration de la qualite, la satisfaction des utilisateurs et la durabilite a long terme. Quatriemement, les discussions ethiques et sociales insistent sur l'equite, la transparence, la responsabilite et la pratique responsable. Enfin, les recherches interdisciplinaires recentes suggerent que ${topic} est mieux compris lorsque les preuves proviennent de plusieurs domaines.`),
      section("Methodologie", `Une methodologie appropriee pour etudier ${topic} pourrait utiliser une ${context.method}. L'etude pourrait commencer par une revue systematique des sources academiques pertinentes afin d'etablir le contexte theorique et d'identifier les lacunes de recherche. Ensuite, des donnees primaires pourraient etre recueillies aupres de participants ayant une connaissance ou une experience directe du sujet.\n\nLa conception proposee peut comprendre trois etapes. La premiere est la collecte de donnees a partir de ${context.data}. La deuxieme est l'analyse des donnees, ou les reponses qualitatives sont codees en themes et les donnees quantitatives sont examinees au moyen de statistiques descriptives. La troisieme est l'interpretation, ou les resultats sont compares a la litterature existante.\n\nL'echantillonnage doit etre raisonne et se concentrer sur les participants ou sources directement lies au probleme de recherche. Les considerations ethiques doivent inclure le consentement eclaire, la confidentialite, la gestion transparente des donnees et un rapport impartial.`),
      section("Resultats et Discussion", `Les resultats attendus montreraient probablement que ${topic} possede un potentiel significatif pour ameliorer la pratique lorsqu'il est mis en oeuvre par une approche structuree et fondee sur des preuves. Les effets positifs peuvent inclure une meilleure prise de decision, une efficacite accrue, un engagement plus fort des utilisateurs et une planification strategique plus claire. Les conclusions peuvent aussi montrer que l'adoption reussie depend du soutien du leadership, de la sensibilisation des parties prenantes, de ressources adequates et d'un suivi continu.\n\nEn meme temps, la discussion devrait identifier plusieurs defis. Ceux-ci peuvent inclure une infrastructure limitee, un manque de formation technique ou professionnelle, une qualite de donnees incoherente, des obstacles financiers et une resistance au changement. Les resultats peuvent egalement suggerer que l'impact de ${topic} varie selon les contextes.\n\nDans l'ensemble, la discussion soulignerait que ${topic} doit etre compris comme un domaine de recherche dynamique.`),
      section("Conclusion", `Cet article a presente une discussion academique structuree sur ${topic}, incluant son contexte, la litterature associee, une methodologie possible et les resultats attendus. L'analyse indique que le sujet est important parce qu'il relie l'enquete scientifique a l'amelioration pratique. Les recherches existantes suggerent qu'un cadrage conceptuel clair, la participation des parties prenantes, la conscience ethique et l'evaluation fondee sur les resultats sont essentiels.\n\nLa methodologie proposee offre une maniere pratique d'etudier le sujet par la revue de litterature, la collecte de donnees empiriques et l'analyse systematique. Les recherches futures devraient tester ce cadre dans des contextes specifiques et comparer les resultats entre differents environnements.`),
    ];
  },
};

const defaultLanguageContexts = {
  marathi: {
    subject: "संशोधन आणि व्यावहारिक प्रक्रिया",
    method: "मिश्र-पद्धती संशोधन रचना",
    data: "शैक्षणिक साहित्य, सर्वेक्षण प्रतिसाद, मुलाखती आणि दस्तऐवज समीक्षा",
  },
  tamil: {
    subject: "ஆராய்ச்சி மற்றும் நடைமுறை செயல்முறைகள்",
    method: "கலப்பு முறையிலான ஆராய்ச்சி வடிவமைப்பு",
    data: "கல்வியியல் இலக்கியம், கருத்துக்கணிப்பு பதில்கள், நேர்காணல்கள் மற்றும் ஆவண ஆய்வு",
  },
  telugu: {
    subject: "పరిశోధన మరియు ప్రాయోగిక ప్రక్రియలు",
    method: "మిశ్రమ-పద్ధతి పరిశోధన రూపకల్పన",
    data: "విద్యాసంబంధిత సాహిత్యం, సర్వే ప్రతిస్పందనలు, ఇంటర్వ్యూలు మరియు పత్రాల సమీక్ష",
  },
  punjabi: {
    subject: "ਖੋਜ ਅਤੇ ਵਿਹਾਰਕ ਪ੍ਰਕਿਰਿਆਵਾਂ",
    method: "ਮਿਸ਼ਰਤ-ਵਿਧੀ ਖੋਜ ਡਿਜ਼ਾਈਨ",
    data: "ਅਕਾਦਮਿਕ ਸਾਹਿਤ, ਸਰਵੇਖਣ ਜਵਾਬ, ਇੰਟਰਵਿਊ ਅਤੇ ਦਸਤਾਵੇਜ਼ ਸਮੀਖਿਆ",
  },
  german: {
    subject: "Forschungs- und Praxisprozesse",
    method: "Mixed-Methods-Forschungsdesign",
    data: "wissenschaftliche Literatur, Umfrageantworten, Interviews und Dokumentenanalysen",
  },
};

Object.assign(generators, {
  marathi(topic, context) {
    return [
      section("शीर्षक", `${topic}: वर्तमान पद्धती, आव्हाने आणि भावी दिशा यांचे संशोधनाधारित विश्लेषण`, true),
      section("सारांश", `हा संशोधन लेख ${topic} या विषयाचा समकालीन शैक्षणिक आणि व्यावसायिक संदर्भात अभ्यास करतो. या अभ्यासात ${topic} ${context.subject} यावर कसा परिणाम करतो, अंमलबजावणीतील प्रमुख अडचणी कोणत्या आहेत आणि संरचित संशोधन पद्धतीद्वारे कोणते अपेक्षित परिणाम मिळू शकतात यावर लक्ष केंद्रित केले आहे. लेख विद्यमान शैक्षणिक विचार, नैतिक जबाबदारी, व्यावहारिक वापर आणि परिणाममापन यांना एकत्रित करतो. सुचविलेली पद्धत साहित्य समीक्षा, सर्वेक्षण, मुलाखती आणि दस्तऐवज विश्लेषण यांच्या साहाय्याने पुराव्यावर आधारित निष्कर्ष तयार करण्याचा प्रयत्न करते. अपेक्षित निष्कर्ष दर्शवितात की ${topic} निर्णयप्रक्रिया, संस्थात्मक कार्यक्षमता आणि दीर्घकालीन सुधारणा मजबूत करू शकतो. तथापि, संसाधनांची मर्यादा, डेटा गुणवत्तेतील फरक, हितधारकांची तयारी आणि संदर्भानुसार बदलणाऱ्या गरजा यांचा विचार करणे आवश्यक आहे. त्यामुळे ${topic} चा अभ्यास जबाबदार, पारदर्शक आणि सातत्यपूर्ण मूल्यांकनावर आधारित असावा.`),
      section("परिचय", `${topic} हा आधुनिक समाजातील बदलत्या गरजा, नवीन संधी आणि उद्भवणाऱ्या आव्हानांशी संबंधित महत्त्वाचा संशोधन विषय आहे. या क्षेत्रातील शैक्षणिक रस वाढण्याचे कारण म्हणजे संस्था, व्यावसायिक आणि समुदाय माहितीआधारित निर्णयांद्वारे अधिक चांगले परिणाम साधण्याचा प्रयत्न करीत आहेत.\n\nया लेखातील मुख्य समस्या म्हणजे ${topic} विषयी संरचित आणि संशोधनाधारित समज विकसित करणे. अनेक चर्चा अजूनही तुकड्यातुकड्यांत किंवा विशिष्ट संदर्भापुरत्या मर्यादित आहेत. त्यामुळे मूलभूत घटक, अंमलबजावणीतील अडथळे आणि अपेक्षित लाभ ओळखण्यासाठी सुसंगत विश्लेषण आवश्यक आहे.`),
      section("साहित्य समीक्षा", `विद्यमान साहित्य दर्शविते की ${topic} विविध संशोधन प्रवाहांनी घडविला आहे. प्रथम, संकल्पनात्मक अभ्यास विषयाची स्पष्ट व्याख्या आणि सैद्धांतिक चौकट महत्त्वाची असल्याचे सांगतात. द्वितीय, अंमलबजावणीवरील अभ्यास संस्थात्मक तयारी, हितधारकांचा सहभाग आणि संसाधनांची उपलब्धता यांवर भर देतात.\n\nतृतीय, मूल्यांकनाधारित संशोधन कार्यक्षमता, प्रवेशयोग्यता, गुणवत्तावाढ, वापरकर्ता समाधान आणि शाश्वत परिणाम यांसारख्या निर्देशकांचा वापर करण्याची सूचना करते. चतुर्थ, नैतिक अभ्यास पारदर्शकता, उत्तरदायित्व आणि न्याय्य वापर यांचे महत्त्व अधोरेखित करतात. अलीकडील अंतःविषय अभ्यास सूचित करतात की ${topic} अधिक चांगल्या प्रकारे समजण्यासाठी अनेक क्षेत्रांतील पुरावे एकत्र करणे उपयुक्त ठरते.`),
      section("कार्यपद्धती", `${topic} च्या अभ्यासासाठी ${context.method} वापरणे योग्य ठरेल. अभ्यासाची सुरुवात संबंधित शैक्षणिक साहित्याच्या व्यवस्थित समीक्षेने करता येईल, ज्यामुळे सैद्धांतिक पार्श्वभूमी आणि संशोधनातील उणिवा स्पष्ट होतील.\n\nप्रस्तावित रचनेत तीन टप्पे असू शकतात. पहिला टप्पा डेटा संकलनाचा आहे, ज्यात ${context.data} वापरले जाईल. दुसऱ्या टप्प्यात गुणात्मक प्रतिसादांचे विषयवार विश्लेषण आणि परिमाणात्मक डेटाचे वर्णनात्मक सांख्यिकीय परीक्षण केले जाईल. तिसऱ्या टप्प्यात निष्कर्षांची तुलना पूर्वीच्या साहित्याशी केली जाईल. नैतिक बाबींमध्ये माहितीपूर्व संमती, गोपनीयता आणि निष्पक्ष अहवाल यांचा समावेश असावा.`),
      section("निकाल आणि चर्चा", `अपेक्षित निकाल दर्शवू शकतात की ${topic} पुराव्यांवर आधारित नियोजनासह राबविल्यास व्यावहारिक सुधारणा घडवू शकतो. चांगली निर्णयप्रक्रिया, अधिक कार्यक्षमता, वापरकर्त्यांचा वाढलेला सहभाग आणि स्पष्ट धोरणात्मक नियोजन हे सकारात्मक परिणाम असू शकतात.\n\nतथापि, मर्यादित पायाभूत सुविधा, प्रशिक्षणाचा अभाव, विसंगत डेटा गुणवत्ता, आर्थिक अडथळे आणि बदलास विरोध अशा समस्या दिसू शकतात. चर्चा यावर भर देईल की ${topic} चे परिणाम प्रत्येक संदर्भात समान नसतात. त्यामुळे स्थानिक गरजा, उपलब्ध संसाधने आणि सतत मूल्यांकन यांचा विचार करणे आवश्यक आहे.`),
      section("निष्कर्ष", `या लेखात ${topic} या विषयाची पार्श्वभूमी, साहित्य, कार्यपद्धती आणि अपेक्षित परिणाम यांसह संरचित शैक्षणिक चर्चा करण्यात आली. विश्लेषणातून दिसते की हा विषय शैक्षणिक चौकशी आणि व्यावहारिक सुधारणा यांना जोडतो.\n\nसुचविलेली कार्यपद्धती साहित्य समीक्षा, अनुभवजन्य डेटा संकलन आणि प्रणालीबद्ध विश्लेषणाद्वारे विषयाचा अभ्यास करण्याचा व्यावहारिक मार्ग देते. भविष्यातील संशोधनाने ही चौकट विविध संदर्भांत तपासावी आणि तुलनात्मक निष्कर्ष विकसित करावेत.`),
    ];
  },
  tamil(topic, context) {
    return [
      section("தலைப்பு", `${topic}: நடப்பு நடைமுறைகள், சவால்கள் மற்றும் எதிர்கால திசைகள் குறித்த ஆராய்ச்சி சார்ந்த பகுப்பாய்வு`, true),
      section("சுருக்கம்", `இந்த ஆய்வுக் கட்டுரை ${topic} என்பதை சமகால கல்வியியல் மற்றும் தொழில்முறை முக்கியத்துவம் கொண்ட ஆய்வு துறையாக ஆராய்கிறது. ${topic} ${context.subject} மீது எவ்வாறு தாக்கம் செலுத்துகிறது, அதன் செயல்படுத்தலில் உள்ள முக்கிய சவால்கள் என்ன, மேலும் கட்டமைக்கப்பட்ட ஆராய்ச்சி அணுகுமுறையின் மூலம் எந்த எதிர்பார்க்கப்படும் விளைவுகள் உருவாகலாம் என்பதைக் கவனத்தில் கொள்கிறது. இக்கட்டுரை கோட்பாட்டு விவாதங்கள், நடைமுறை ஏற்றுக்கொள்ளல், நெறிமுறை பொறுப்பு மற்றும் அளவிடத்தக்க தாக்கம் ஆகியவற்றை இணைக்கிறது. பரிந்துரைக்கப்படும் அணுகுமுறை இலக்கிய ஆய்வு, கருத்துக்கணிப்பு, நேர்காணல் மற்றும் ஆவண ஆய்வு மூலம் ஆதார அடிப்படையிலான புரிதலை உருவாக்குகிறது. எதிர்பார்க்கப்படும் முடிவுகள் ${topic} முடிவெடுப்பு, நிறுவன நடைமுறை மற்றும் நீண்டகால மேம்பாட்டை வலுப்படுத்த முடியும் என்பதைக் காட்டுகின்றன. இருப்பினும், வளங்களின் குறைவு, தரவு தரம், பங்குதாரர் தயார்நிலை மற்றும் சூழல் மாறுபாடு போன்ற சவால்கள் கவனிக்கப்பட வேண்டும்.`),
      section("அறிமுகம்", `${topic} நவீன சமுதாயத்தின் மாறும் தேவைகள், உருவாகும் வாய்ப்புகள் மற்றும் புதிய சவால்களுடன் தொடர்புடைய முக்கியமான ஆய்வு பொருளாக உள்ளது. நிறுவனங்கள், தொழில்முறை நிபுணர்கள் மற்றும் சமூகங்கள் தகவல் சார்ந்த முடிவுகள் மூலம் சிறந்த விளைவுகளை அடைய முயலுவதால் இந்த துறையில் கல்வியியல் ஆர்வம் அதிகரித்துள்ளது.\n\nஇந்த கட்டுரையின் மையப் பிரச்சினை ${topic} குறித்த கட்டமைக்கப்பட்ட புரிதலை உருவாக்குவதுதான். பல விவாதங்கள் இன்னும் துண்டிக்கப்பட்டவையாக அல்லது குறிப்பிட்ட சூழலுக்குள் மட்டுமே காணப்படுகின்றன. ஆகவே, முக்கிய காரணிகள், செயல்படுத்தல் தடைகள் மற்றும் எதிர்பார்க்கப்படும் பயன்களை அடையாளம் காண ஆய்வு சார்ந்த அணுகுமுறை தேவைப்படுகிறது.`),
      section("இலக்கிய ஆய்வு", `இருக்கும் இலக்கியம் ${topic} பல இணைந்த ஆராய்ச்சி நோக்குகளால் உருவாகியுள்ளது என்பதைக் காட்டுகிறது. முதலில், கருத்தியல் ஆய்வுகள் பொருளை தெளிவாக வரையறுத்து பரந்த கல்வியியல் விவாதத்தில் அமைப்பதன் அவசியத்தை வலியுறுத்துகின்றன. இரண்டாவது, செயல்படுத்தல் மையமான ஆய்வுகள் நிறுவனத் தயார்நிலை, பங்குதாரர் பங்கேற்பு மற்றும் வளங்களின் கிடைப்பை முக்கியமாகக் காண்கின்றன.\n\nமூன்றாவது, மதிப்பீட்டு ஆய்வுகள் செயல்திறன், அணுகல், தர மேம்பாடு, பயனர் திருப்தி மற்றும் நீடித்த நிலைத்தன்மை போன்ற அளவுகோல்களை பரிந்துரைக்கின்றன. நான்காவது, நெறிமுறை மற்றும் சமூக விவாதங்கள் நியாயம், வெளிப்படைத்தன்மை, பொறுப்புத்தன்மை மற்றும் பொறுப்பான நடைமுறையை வலியுறுத்துகின்றன. சமீபத்திய இடைத் துறை ஆய்வுகள் ${topic} பல துறைகளின் ஆதாரங்கள் மூலம் சிறப்பாகப் புரிந்துகொள்ள முடியும் என்று கூறுகின்றன.`),
      section("ஆய்வுமுறை", `${topic} ஆய்வுக்கு ${context.method} பயன்படுத்தலாம். ஆய்வு தொடர்புடைய கல்வியியல் ஆதாரங்களின் முறையான மதிப்பாய்வுடன் தொடங்கலாம். இதன் மூலம் கோட்பாட்டு பின்னணி மற்றும் ஆய்வு இடைவெளிகள் தெளிவாகும்.\n\nமுன்மொழியப்பட்ட வடிவமைப்பு மூன்று கட்டங்களைக் கொண்டிருக்கலாம். முதல் கட்டம் தரவு சேகரிப்பு; இதில் ${context.data} பயன்படுத்தப்படும். இரண்டாவது கட்டம் தரவு பகுப்பாய்வு; இதில் தரமான பதில்கள் கருப்பொருள்களாக குறியிடப்படும் மற்றும் அளவியல் தரவு விளக்க புள்ளியியலால் ஆய்வு செய்யப்படும். மூன்றாவது கட்டம் விளக்கம்; இதில் முடிவுகள் முந்தைய இலக்கியத்துடன் ஒப்பிடப்படும். நெறிமுறை அம்சங்களில் அறிவிக்கப்பட்ட சம்மதம், ரகசியம், வெளிப்படையான தரவு கையாளல் மற்றும் சார்பற்ற அறிக்கை அடங்கும்.`),
      section("முடிவுகள் மற்றும் விவாதம்", `எதிர்பார்க்கப்படும் முடிவுகள் ${topic} ஆதார அடிப்படையிலான திட்டமிடலுடன் செயல்படுத்தப்படும் போது நடைமுறையில் முக்கிய மேம்பாட்டை ஏற்படுத்த முடியும் என்பதைக் காட்டலாம். சிறந்த முடிவெடுப்பு, அதிக செயல்திறன், வலுவான பயனர் பங்கேற்பு மற்றும் தெளிவான மூலோபாய திட்டமிடல் ஆகியவை நல்ல விளைவுகளாக இருக்கலாம்.\n\nஅதே நேரத்தில், வரையறுக்கப்பட்ட அடித்தளம், தொழில்நுட்ப அல்லது தொழில்முறை பயிற்சி குறைவு, தரவு தரத்தின் மாறுபாடு, நிதி தடைகள் மற்றும் மாற்றத்திற்கான எதிர்ப்பு போன்ற சவால்கள் இருக்கலாம். ${topic} இன் தாக்கம் சூழலுக்கு ஏற்ப மாறும் என்பதையும் விவாதம் காட்டும்.`),
      section("தீர்மானம்", `இந்த கட்டுரை ${topic} குறித்த பின்னணி, தொடர்புடைய இலக்கியம், ஆய்வுமுறை மற்றும் எதிர்பார்க்கப்படும் விளைவுகள் ஆகியவற்றை உள்ளடக்கிய கட்டமைக்கப்பட்ட கல்வியியல் விவாதத்தை வழங்கியுள்ளது. ஆய்வு, இந்த பொருள் கல்வியியல் ஆராய்ச்சியையும் நடைமுறை மேம்பாட்டையும் இணைக்கிறது என்பதை காட்டுகிறது.\n\nமுன்மொழியப்பட்ட ஆய்வுமுறை இலக்கிய ஆய்வு, அனுபவத் தரவு சேகரிப்பு மற்றும் முறையான பகுப்பாய்வு மூலம் பொருளை ஆய்வு செய்யும் நடைமுறை வழியை வழங்குகிறது. எதிர்கால ஆய்வுகள் இந்த வடிவமைப்பை பல்வேறு சூழல்களில் சோதித்து ஒப்பீட்டு முடிவுகளை உருவாக்க வேண்டும்.`),
    ];
  },
  telugu(topic, context) {
    return [
      section("శీర్షిక", `${topic}: ప్రస్తుత పద్ధతులు, సవాళ్లు మరియు భవిష్యత్ దిశలపై పరిశోధనాధారిత విశ్లేషణ`, true),
      section("సారాంశం", `ఈ పరిశోధనా పత్రం ${topic} ను సమకాలీన విద్యా మరియు వృత్తిపరమైన ప్రాధాన్యం కలిగిన అంశంగా పరిశీలిస్తుంది. ${topic} ${context.subject} పై ఎలా ప్రభావం చూపుతుంది, దాని అమలులోని ప్రధాన సవాళ్లు ఏమిటి, మరియు నిర్మిత పరిశోధనా విధానం ద్వారా ఏ ఫలితాలు ఆశించవచ్చో ఈ అధ్యయనం పరిశీలిస్తుంది. ఈ పత్రం సిద్ధాంతాత్మక చర్చలు, ప్రాయోగిక అమలు, నైతిక బాధ్యత మరియు కొలవగల ప్రభావాన్ని అనుసంధానిస్తుంది. సూచించిన విధానం సాహిత్య సమీక్ష, సర్వేలు, ఇంటర్వ్యూలు మరియు పత్రాల విశ్లేషణ ద్వారా ఆధారపూర్వక అవగాహనను అభివృద్ధి చేస్తుంది. ఆశించిన ఫలితాలు ${topic} నిర్ణయ ప్రక్రియ, సంస్థాగత పద్ధతులు మరియు దీర్ఘకాలిక మెరుగుదలలను బలోపేతం చేయగలదని సూచిస్తాయి. అయితే వనరుల పరిమితి, డేటా నాణ్యత, భాగస్వాముల సిద్ధత మరియు సందర్భ భేదాలు కూడా పరిగణించాలి.`),
      section("పరిచయం", `${topic} ఆధునిక సమాజంలోని మారుతున్న అవసరాలు, కొత్త అవకాశాలు మరియు సవాళ్లతో సంబంధం కలిగిన ముఖ్యమైన పరిశోధనా అంశంగా మారింది. సంస్థలు, నిపుణులు మరియు సమాజాలు సమాచార ఆధారిత నిర్ణయాల ద్వారా మెరుగైన ఫలితాలను సాధించాలనుకోవడంతో ఈ రంగంపై విద్యా ఆసక్తి పెరిగింది.\n\nఈ పత్రంలో ప్రధాన సమస్య ${topic} గురించి నిర్మితమైన అవగాహన అవసరం. ఈ అంశం చర్చకు వచ్చినప్పటికీ, అనేక చర్చలు ఇంకా విభిన్నంగా లేదా నిర్దిష్ట సందర్భాలకు పరిమితంగా ఉన్నాయి. అందువల్ల ప్రధాన కారకాలు, అమలు అడ్డంకులు మరియు ఆశించిన ప్రయోజనాలను గుర్తించడానికి పరిశోధనాధారిత విశ్లేషణ అవసరం.`),
      section("సాహిత్య సమీక్ష", `ఉన్న సాహిత్యం ${topic} అనేక అనుసంధానమైన పరిశోధనా ప్రవాహాల ద్వారా రూపుదిద్దుకుందని చూపిస్తుంది. మొదట, భావనాత్మక అధ్యయనాలు అంశాన్ని స్పష్టంగా నిర్వచించడం మరియు విస్తృత విద్యా చర్చలో ఉంచడం ముఖ్యమని చెబుతాయి. రెండవది, అమలుపై దృష్టి పెట్టిన అధ్యయనాలు సంస్థాగత సిద్ధత, భాగస్వాముల పాల్గొనడం మరియు వనరుల లభ్యతను ప్రధానంగా చూస్తాయి.\n\nమూడవది, మూల్యాంకన అధ్యయనాలు సామర్థ్యం, ప్రాప్యత, నాణ్యత మెరుగుదల, వినియోగదారుల సంతృప్తి మరియు దీర్ఘకాలిక స్థిరత్వం వంటి సూచికలను ప్రతిపాదిస్తాయి. నాలుగవది, నైతిక మరియు సామాజిక చర్చలు పారదర్శకత, బాధ్యత మరియు న్యాయమైన అమలును ప్రాముఖ్యంగా పేర్కొంటాయి. అంతరశాఖ అధ్యయనాలు ${topic} ను అనేక రంగాల ఆధారాలతో మెరుగ్గా అర్థం చేసుకోవచ్చని సూచిస్తాయి.`),
      section("పద్ధతి", `${topic} అధ్యయనానికి ${context.method} అనుకూలంగా ఉంటుంది. సంబంధిత విద్యా మూలాల వ్యవస్థబద్ధ సమీక్షతో అధ్యయనం ప్రారంభించవచ్చు. దీని ద్వారా సిద్ధాంతాత్మక నేపథ్యం మరియు పరిశోధన లోపాలు స్పష్టమవుతాయి.\n\nప్రతిపాదిత రూపకల్పనలో మూడు దశలు ఉండవచ్చు. మొదటి దశ డేటా సేకరణ; ఇందులో ${context.data} ఉపయోగిస్తారు. రెండవ దశ డేటా విశ్లేషణ; ఇందులో గుణాత్మక సమాధానాలను అంశాలుగా వర్గీకరిస్తారు మరియు పరిమాణాత్మక డేటాను వివరణాత్మక గణాంకాలతో పరిశీలిస్తారు. మూడవ దశ వ్యాఖ్యానం; ఇందులో ఫలితాలను ఉన్న సాహిత్యంతో పోలుస్తారు. నైతిక అంశాలలో అవగాహనతో సమ్మతి, గోప్యత మరియు నిష్పక్షపాత నివేదిక ఉండాలి.`),
      section("ఫలితాలు మరియు చర్చ", `ఆశించిన ఫలితాలు ${topic} ఆధారపూర్వక ప్రణాళికతో అమలైతే ప్రాయోగిక మెరుగుదలకు దోహదపడుతుందని చూపవచ్చు. మెరుగైన నిర్ణయాలు, అధిక సామర్థ్యం, వినియోగదారుల పాల్గొనడం మరియు స్పష్టమైన వ్యూహాత్మక ప్రణాళిక వంటి ప్రయోజనాలు కనిపించవచ్చు.\n\nఅదే సమయంలో, పరిమిత మౌలిక వసతులు, సాంకేతిక లేదా వృత్తిపరమైన శిక్షణలో లోపం, అసమాన డేటా నాణ్యత, ఆర్థిక అడ్డంకులు మరియు మార్పుకు వ్యతిరేకత వంటి సవాళ్లు ఉండవచ్చు. ${topic} ప్రభావం సందర్భానుసారం మారుతుందని చర్చ సూచిస్తుంది.`),
      section("ముగింపు", `ఈ పత్రం ${topic} గురించి నేపథ్యం, సంబంధిత సాహిత్యం, సాధ్యమైన పద్ధతి మరియు ఆశించిన ఫలితాలతో కూడిన నిర్మిత విద్యా చర్చను అందించింది. విశ్లేషణ ప్రకారం ఈ అంశం విద్యా పరిశోధనను ప్రాయోగిక మెరుగుదలతో అనుసంధానిస్తుంది.\n\nప్రతిపాదిత పద్ధతి సాహిత్య సమీక్ష, అనుభవాధారిత డేటా సేకరణ మరియు వ్యవస్థబద్ధ విశ్లేషణ ద్వారా అంశాన్ని పరిశీలించే మార్గాన్ని అందిస్తుంది. భవిష్యత్ పరిశోధనలు ఈ రూపకల్పనను విభిన్న సందర్భాల్లో పరీక్షించి పోలిక ఆధారిత ఫలితాలను అభివృద్ధి చేయాలి.`),
    ];
  },
  punjabi(topic, context) {
    return [
      section("ਸਿਰਲੇਖ", `${topic}: ਮੌਜੂਦਾ ਅਭਿਆਸਾਂ, ਚੁਣੌਤੀਆਂ ਅਤੇ ਭਵਿੱਖੀ ਦਿਸ਼ਾਵਾਂ ਦਾ ਖੋਜ-ਕੇਂਦ੍ਰਿਤ ਵਿਸ਼ਲੇਸ਼ਣ`, true),
      section("ਸਾਰ", `ਇਹ ਖੋਜ ਪੇਪਰ ${topic} ਨੂੰ ਆਧੁਨਿਕ ਅਕਾਦਮਿਕ ਅਤੇ ਪੇਸ਼ਾਵਰ ਮਹੱਤਵ ਵਾਲੇ ਵਿਸ਼ੇ ਵਜੋਂ ਜਾਂਚਦਾ ਹੈ। ਅਧਿਐਨ ਇਸ ਗੱਲ ਤੇ ਧਿਆਨ ਦਿੰਦਾ ਹੈ ਕਿ ${topic} ${context.subject} ਨੂੰ ਕਿਵੇਂ ਪ੍ਰਭਾਵਿਤ ਕਰਦਾ ਹੈ, ਇਸ ਦੀ ਲਾਗੂ ਕਰਨ ਦੀ ਪ੍ਰਕਿਰਿਆ ਵਿੱਚ ਮੁੱਖ ਚੁਣੌਤੀਆਂ ਕੀ ਹਨ, ਅਤੇ ਇੱਕ ਸੰਰਚਿਤ ਖੋਜ ਪਹੁੰਚ ਰਾਹੀਂ ਕਿਹੜੇ ਸੰਭਾਵਿਤ ਨਤੀਜੇ ਮਿਲ ਸਕਦੇ ਹਨ। ਇਹ ਪੇਪਰ ਸਿਧਾਂਤਕ ਵਿਚਾਰਾਂ, ਵਿਹਾਰਕ ਅਪਣਾਉਣ, ਨੈਤਿਕ ਜ਼ਿੰਮੇਵਾਰੀ ਅਤੇ ਮਾਪਯੋਗ ਪ੍ਰਭਾਵ ਨੂੰ ਜੋੜਦਾ ਹੈ। ਸੁਝਾਈ ਗਈ ਪਹੁੰਚ ਸਾਹਿਤ ਸਮੀਖਿਆ, ਸਰਵੇਖਣ, ਇੰਟਰਵਿਊ ਅਤੇ ਦਸਤਾਵੇਜ਼ ਵਿਸ਼ਲੇਸ਼ਣ ਰਾਹੀਂ ਸਬੂਤ-ਅਧਾਰਿਤ ਸਮਝ ਵਿਕਸਿਤ ਕਰਦੀ ਹੈ। ਉਮੀਦ ਕੀਤੇ ਨਤੀਜੇ ਦਰਸਾਉਂਦੇ ਹਨ ਕਿ ${topic} ਫੈਸਲਾ-ਲੈਣ, ਸੰਸਥਾਗਤ ਅਭਿਆਸ ਅਤੇ ਲੰਬੇ ਸਮੇਂ ਦੀ ਸੁਧਾਰ ਪ੍ਰਕਿਰਿਆ ਨੂੰ ਮਜ਼ਬੂਤ ਕਰ ਸਕਦਾ ਹੈ। ਫਿਰ ਵੀ, ਸਰੋਤਾਂ ਦੀ ਘਾਟ, ਡਾਟਾ ਗੁਣਵੱਤਾ, ਹਿੱਸੇਦਾਰ ਤਿਆਰੀ ਅਤੇ ਸੰਦਰਭਕ ਫਰਕਾਂ ਨੂੰ ਧਿਆਨ ਵਿੱਚ ਰੱਖਣਾ ਜ਼ਰੂਰੀ ਹੈ।`),
      section("ਜਾਣ-ਪਛਾਣ", `${topic} ਆਧੁਨਿਕ ਸਮਾਜ ਦੀਆਂ ਬਦਲਦੀਆਂ ਲੋੜਾਂ, ਨਵੀਆਂ ਸੰਭਾਵਨਾਵਾਂ ਅਤੇ ਉਭਰਦੀਆਂ ਚੁਣੌਤੀਆਂ ਨਾਲ ਜੁੜਿਆ ਮਹੱਤਵਪੂਰਨ ਖੋਜ ਵਿਸ਼ਾ ਹੈ। ਸੰਸਥਾਵਾਂ, ਪੇਸ਼ਾਵਰਾਂ ਅਤੇ ਸਮੁਦਾਇ ਜਾਣਕਾਰੀ-ਅਧਾਰਿਤ ਫੈਸਲਿਆਂ ਰਾਹੀਂ ਵਧੀਆ ਨਤੀਜੇ ਪ੍ਰਾਪਤ ਕਰਨ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰ ਰਹੇ ਹਨ, ਜਿਸ ਕਾਰਨ ਇਸ ਖੇਤਰ ਵਿੱਚ ਅਕਾਦਮਿਕ ਰੁਚੀ ਵਧੀ ਹੈ।\n\nਇਸ ਪੇਪਰ ਦੀ ਮੁੱਖ ਸਮੱਸਿਆ ${topic} ਬਾਰੇ ਸੰਰਚਿਤ ਸਮਝ ਵਿਕਸਿਤ ਕਰਨ ਦੀ ਲੋੜ ਹੈ। ਕਈ ਚਰਚਾਵਾਂ ਅਜੇ ਵੀ ਟੁਕੜਿਆਂ ਵਿੱਚ ਜਾਂ ਖਾਸ ਸੰਦਰਭਾਂ ਤੱਕ ਸੀਮਿਤ ਹਨ। ਇਸ ਲਈ ਕੇਂਦਰੀ ਕਾਰਕਾਂ, ਲਾਗੂ ਕਰਨ ਦੀਆਂ ਰੁਕਾਵਟਾਂ ਅਤੇ ਉਮੀਦ ਕੀਤੇ ਲਾਭਾਂ ਦੀ ਪਛਾਣ ਲਈ ਖੋਜ-ਅਧਾਰਿਤ ਵਿਸ਼ਲੇਸ਼ਣ ਲਾਜ਼ਮੀ ਹੈ।`),
      section("ਸਾਹਿਤ ਸਮੀਖਿਆ", `ਉਪਲਬਧ ਸਾਹਿਤ ਦਿਖਾਉਂਦਾ ਹੈ ਕਿ ${topic} ਕਈ ਜੁੜੀਆਂ ਹੋਈਆਂ ਖੋਜ ਧਾਰਾਵਾਂ ਰਾਹੀਂ ਬਣਦਾ ਹੈ। ਪਹਿਲਾਂ, ਧਾਰਣਾਤਮਕ ਅਧਿਐਨ ਵਿਸ਼ੇ ਦੀ ਸਪਸ਼ਟ ਪਰਿਭਾਸ਼ਾ ਅਤੇ ਮਜ਼ਬੂਤ ਸਿਧਾਂਤਕ ਢਾਂਚੇ ਦੀ ਲੋੜ ਤੇ ਜ਼ੋਰ ਦਿੰਦੇ ਹਨ। ਦੂਜਾ, ਲਾਗੂ ਕਰਨ-ਕੇਂਦ੍ਰਿਤ ਖੋਜ ਸੰਸਥਾਗਤ ਤਿਆਰੀ, ਹਿੱਸੇਦਾਰ ਭਾਗੀਦਾਰੀ ਅਤੇ ਸਰੋਤ ਉਪਲਬਧਤਾ ਨੂੰ ਮਹੱਤਵਪੂਰਨ ਮੰਨਦੀ ਹੈ।\n\nਤੀਜਾ, ਮੁਲਾਂਕਣ-ਅਧਾਰਿਤ ਅਧਿਐਨ ਕਾਰਗੁਜ਼ਾਰੀ, ਪਹੁੰਚ, ਗੁਣਵੱਤਾ ਸੁਧਾਰ, ਉਪਭੋਗਤਾ ਸੰਤੁਸ਼ਟੀ ਅਤੇ ਲੰਬੇ ਸਮੇਂ ਦੀ ਸਥਿਰਤਾ ਵਰਗੇ ਸੂਚਕਾਂ ਦੀ ਸਿਫਾਰਸ਼ ਕਰਦੇ ਹਨ। ਚੌਥਾ, ਨੈਤਿਕ ਅਤੇ ਸਮਾਜਿਕ ਵਿਚਾਰ ਨਿਆਂ, ਪਾਰਦਰਸ਼ਤਾ, ਜ਼ਿੰਮੇਵਾਰੀ ਅਤੇ ਜਵਾਬਦੇਹ ਅਭਿਆਸ ਦੀ ਮਹੱਤਤਾ ਦੱਸਦੇ ਹਨ। ਅੰਤਰ-ਵਿਭਾਗੀ ਅਧਿਐਨ ਸੁਝਾਉਂਦੇ ਹਨ ਕਿ ${topic} ਨੂੰ ਕਈ ਖੇਤਰਾਂ ਦੇ ਸਬੂਤਾਂ ਨਾਲ ਵਧੀਆ ਤਰੀਕੇ ਨਾਲ ਸਮਝਿਆ ਜਾ ਸਕਦਾ ਹੈ।`),
      section("ਵਿਧੀ", `${topic} ਦੇ ਅਧਿਐਨ ਲਈ ${context.method} ਵਰਤੀ ਜਾ ਸਕਦੀ ਹੈ। ਅਧਿਐਨ ਸੰਬੰਧਿਤ ਅਕਾਦਮਿਕ ਸਰੋਤਾਂ ਦੀ ਵਿਵਸਥਿਤ ਸਮੀਖਿਆ ਨਾਲ ਸ਼ੁਰੂ ਹੋ ਸਕਦਾ ਹੈ, ਜਿਸ ਨਾਲ ਸਿਧਾਂਤਕ ਪਿਛੋਕੜ ਅਤੇ ਖੋਜ ਖਾਲੀਪਣ ਸਪਸ਼ਟ ਹੋਣਗੇ।\n\nਪ੍ਰਸਤਾਵਿਤ ਡਿਜ਼ਾਈਨ ਵਿੱਚ ਤਿੰਨ ਪੜਾਅ ਹੋ ਸਕਦੇ ਹਨ। ਪਹਿਲਾ ਪੜਾਅ ਡਾਟਾ ਇਕੱਠਾ ਕਰਨਾ ਹੈ, ਜਿਸ ਵਿੱਚ ${context.data} ਵਰਤਿਆ ਜਾਵੇਗਾ। ਦੂਜਾ ਪੜਾਅ ਡਾਟਾ ਵਿਸ਼ਲੇਸ਼ਣ ਹੈ, ਜਿੱਥੇ ਗੁਣਾਤਮਕ ਜਵਾਬਾਂ ਨੂੰ ਥੀਮਾਂ ਵਿੱਚ ਕੋਡ ਕੀਤਾ ਜਾਵੇਗਾ ਅਤੇ ਮਾਤਰਾਤਮਕ ਡਾਟਾ ਵਰਣਨਾਤਮਕ ਅੰਕੜਿਆਂ ਨਾਲ ਜਾਂਚਿਆ ਜਾਵੇਗਾ। ਤੀਜਾ ਪੜਾਅ ਵਿਆਖਿਆ ਹੈ। ਨੈਤਿਕ ਮਾਮਲਿਆਂ ਵਿੱਚ ਜਾਣਕਾਰੀਪੂਰਵਕ ਸਹਿਮਤੀ, ਗੋਪਨੀਯਤਾ ਅਤੇ ਨਿਰਪੱਖ ਰਿਪੋਰਟਿੰਗ ਸ਼ਾਮਲ ਹੋਣੀ ਚਾਹੀਦੀ ਹੈ।`),
      section("ਨਤੀਜੇ ਅਤੇ ਚਰਚਾ", `ਉਮੀਦ ਕੀਤੇ ਨਤੀਜੇ ਦਿਖਾ ਸਕਦੇ ਹਨ ਕਿ ${topic} ਜਦੋਂ ਸਬੂਤ-ਅਧਾਰਿਤ ਯੋਜਨਾ ਨਾਲ ਲਾਗੂ ਕੀਤਾ ਜਾਂਦਾ ਹੈ ਤਾਂ ਅਭਿਆਸ ਵਿੱਚ ਮਹੱਤਵਪੂਰਨ ਸੁਧਾਰ ਕਰ ਸਕਦਾ ਹੈ। ਵਧੀਆ ਫੈਸਲਾ-ਲੈਣ, ਵਧੀਕ ਕਾਰਗੁਜ਼ਾਰੀ, ਮਜ਼ਬੂਤ ਉਪਭੋਗਤਾ ਭਾਗੀਦਾਰੀ ਅਤੇ ਸਪਸ਼ਟ ਰਣਨੀਤਿਕ ਯੋਜਨਾ ਸਕਾਰਾਤਮਕ ਨਤੀਜੇ ਹੋ ਸਕਦੇ ਹਨ।\n\nਨਾਲ ਹੀ, ਸੀਮਿਤ ਢਾਂਚਾ, ਤਕਨੀਕੀ ਜਾਂ ਪੇਸ਼ਾਵਰ ਸਿਖਲਾਈ ਦੀ ਘਾਟ, ਅਸੰਗਤ ਡਾਟਾ ਗੁਣਵੱਤਾ, ਵਿੱਤੀ ਰੁਕਾਵਟਾਂ ਅਤੇ ਬਦਲਾਅ ਵਿਰੁੱਧ ਵਿਰੋਧ ਵਰਗੀਆਂ ਚੁਣੌਤੀਆਂ ਸਾਹਮਣੇ ਆ ਸਕਦੀਆਂ ਹਨ। ਚਰਚਾ ਦਰਸਾਏਗੀ ਕਿ ${topic} ਦਾ ਪ੍ਰਭਾਵ ਵੱਖ-ਵੱਖ ਸੰਦਰਭਾਂ ਵਿੱਚ ਬਦਲ ਸਕਦਾ ਹੈ।`),
      section("ਨਿਸ਼ਕਰਸ਼", `ਇਸ ਪੇਪਰ ਨੇ ${topic} ਬਾਰੇ ਪਿਛੋਕੜ, ਸੰਬੰਧਿਤ ਸਾਹਿਤ, ਸੰਭਾਵਿਤ ਵਿਧੀ ਅਤੇ ਉਮੀਦ ਕੀਤੇ ਨਤੀਜਿਆਂ ਸਮੇਤ ਸੰਰਚਿਤ ਅਕਾਦਮਿਕ ਚਰਚਾ ਪੇਸ਼ ਕੀਤੀ ਹੈ। ਵਿਸ਼ਲੇਸ਼ਣ ਦਿਖਾਉਂਦਾ ਹੈ ਕਿ ਇਹ ਵਿਸ਼ਾ ਅਕਾਦਮਿਕ ਜਾਂਚ ਅਤੇ ਵਿਹਾਰਕ ਸੁਧਾਰ ਨੂੰ ਜੋੜਦਾ ਹੈ।\n\nਸੁਝਾਈ ਗਈ ਵਿਧੀ ਸਾਹਿਤ ਸਮੀਖਿਆ, ਅਨੁਭਵਾਤਮਕ ਡਾਟਾ ਸੰਗ੍ਰਹਿ ਅਤੇ ਵਿਵਸਥਿਤ ਵਿਸ਼ਲੇਸ਼ਣ ਰਾਹੀਂ ਵਿਸ਼ੇ ਦੀ ਜਾਂਚ ਕਰਨ ਦਾ ਵਿਆਵਹਾਰਿਕ ਰਸਤਾ ਦਿੰਦੀ ਹੈ। ਭਵਿੱਖੀ ਖੋਜ ਨੂੰ ਇਸ ਢਾਂਚੇ ਨੂੰ ਵੱਖ-ਵੱਖ ਸੰਦਰਭਾਂ ਵਿੱਚ ਪਰਖਣਾ ਚਾਹੀਦਾ ਹੈ।`),
    ];
  },
  german(topic, context) {
    return [
      section("Titel", `${topic}: Eine forschungsorientierte Analyse aktueller Praktiken, Herausforderungen und Zukunftsperspektiven`, true),
      section("Abstract", `Diese Arbeit untersucht ${topic} als ein wichtiges Thema gegenwartiger akademischer und beruflicher Debatten. Im Mittelpunkt steht, wie ${topic} ${context.subject} beeinflusst, welche zentralen Herausforderungen bei der Umsetzung entstehen und welche Ergebnisse durch einen strukturierten Forschungsansatz erwartet werden konnen. Die Arbeit verbindet bestehende wissenschaftliche Ideen mit einer geeigneten Methodik fur weitere Untersuchungen. Berucksichtigt werden konzeptionelle Entwicklung, praktische Anwendung, ethische Verantwortung und messbare Wirkungen. Der vorgeschlagene Ansatz kombiniert Literaturauswertung mit empirischen Daten aus Umfragen, Interviews und Dokumentenanalysen. Erwartete Ergebnisse deuten darauf hin, dass ${topic} Entscheidungsprozesse verbessern, institutionelle Praktiken starken und nachhaltige Verbesserungen unterstutzen kann, wenn die Umsetzung evidenzbasiert geplant wird. Gleichzeitig mussen Ressourcenbegrenzungen, Datenqualitat, Bereitschaft der Beteiligten und kontextuelle Unterschiede beachtet werden. Die Studie kommt zu dem Schluss, dass ${topic} kontinuierliche Evaluation, verantwortliche Anwendung und interdisziplinare Zusammenarbeit erfordert.`),
      section("Einleitung", `${topic} ist zu einem bedeutenden Forschungsthema geworden, weil es veranderte gesellschaftliche Anforderungen, neue Chancen und aktuelle Herausforderungen widerspiegelt. Das akademische Interesse an diesem Bereich wachst, da Institutionen, Fachkrafte und Gemeinschaften bessere Ergebnisse durch informierte Entscheidungen erreichen wollen.\n\nDas zentrale Problem dieser Arbeit besteht darin, ein strukturiertes Verstandnis von ${topic} zu entwickeln. Obwohl das Thema zunehmend Beachtung findet, bleiben viele Diskussionen fragmentiert oder stark kontextabhangig. Eine forschungsorientierte Analyse kann helfen, Kernfaktoren, Umsetzungsbarrieren und erwartete Vorteile klarer zu bestimmen.`),
      section("Literaturubersicht", `Die vorhandene Literatur zeigt, dass ${topic} durch mehrere miteinander verbundene Forschungslinien gepragt ist. Erstens betonen konzeptionelle Studien die Bedeutung einer klaren Definition und einer soliden theoretischen Einordnung. Zweitens hebt umsetzungsorientierte Forschung institutionelle Bereitschaft, Beteiligung relevanter Akteure und Ressourcenverfugbarkeit hervor.\n\nDrittens konzentrieren sich evaluative Studien auf messbare Ergebnisse wie Effizienz, Zuganglichkeit, Qualitatsverbesserung, Nutzerzufriedenheit und langfristige Nachhaltigkeit. Viertens betonen ethische und soziale Debatten Fairness, Transparenz, Verantwortlichkeit und verantwortungsvolle Praxis. Neuere interdisziplinare Arbeiten legen nahe, dass ${topic} besser verstanden werden kann, wenn Erkenntnisse aus mehreren Fachbereichen zusammengefuhrt werden.`),
      section("Methodik", `Zur Untersuchung von ${topic} eignet sich ein ${context.method}. Die Studie konnte mit einer systematischen Auswertung relevanter wissenschaftlicher Quellen beginnen, um den theoretischen Hintergrund und bestehende Forschungslucken zu bestimmen.\n\nDas vorgeschlagene Forschungsdesign umfasst drei Phasen. Die erste Phase ist die Datenerhebung unter Nutzung von ${context.data}. Die zweite Phase ist die Datenanalyse, bei der qualitative Antworten thematisch codiert und quantitative Daten mit deskriptiven Statistiken untersucht werden. Die dritte Phase ist die Interpretation, in der die Ergebnisse mit der bestehenden Literatur verglichen werden. Ethische Anforderungen umfassen informierte Zustimmung, Vertraulichkeit, transparente Datenverarbeitung und unvoreingenommene Berichterstattung.`),
      section("Ergebnisse und Diskussion", `Die erwarteten Ergebnisse durften zeigen, dass ${topic} ein erhebliches Potenzial zur Verbesserung praktischer Ablaufe besitzt, wenn es strukturiert und evidenzbasiert umgesetzt wird. Positive Wirkungen konnen bessere Entscheidungsfindung, hohere Effizienz, starkere Nutzerbeteiligung und klarere strategische Planung umfassen.\n\nGleichzeitig konnen mehrere Herausforderungen sichtbar werden. Dazu gehoren begrenzte Infrastruktur, fehlende technische oder berufliche Schulung, uneinheitliche Datenqualitat, finanzielle Hindernisse und Widerstand gegen Veranderungen. Die Diskussion wurde daher betonen, dass die Wirkung von ${topic} je nach Kontext unterschiedlich ausfallen kann und kontinuierlich bewertet werden sollte.`),
      section("Fazit", `Diese Arbeit hat eine strukturierte akademische Diskussion zu ${topic} vorgelegt, einschliesslich Hintergrund, Literatur, moglicher Methodik und erwarteter Ergebnisse. Die Analyse zeigt, dass das Thema wissenschaftliche Untersuchung mit praktischer Verbesserung verbindet.\n\nDie vorgeschlagene Methodik bietet einen praktikablen Weg, ${topic} durch Literaturauswertung, empirische Datenerhebung und systematische Analyse zu untersuchen. Zukünftige Forschung sollte den Ansatz in spezifischen Kontexten testen und Ergebnisse zwischen unterschiedlichen Umgebungen vergleichen.`),
    ];
  },
});

function section(heading, body, titleClass = false) {
  return { heading, body, titleClass };
}

function toTitleCase(value) {
  return value
    .toLowerCase()
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function sanitizeTopic(value) {
  return value.replace(/\s+/g, " ").trim();
}

function getContext(language) {
  const vocabulary = fieldVocabulary[language];

  if (vocabulary) {
    return vocabulary[fieldInput.value] || vocabulary.general;
  }

  return defaultLanguageContexts[language] || fieldVocabulary.english.general;
}

const stopWords = new Set([
  "a",
  "an",
  "and",
  "are",
  "as",
  "at",
  "by",
  "for",
  "from",
  "in",
  "into",
  "is",
  "of",
  "on",
  "or",
  "the",
  "to",
  "with",
  "using",
  "use",
  "impact",
  "role",
  "study",
]);

const topicSignals = {
  technology: ["ai", "artificial", "machine", "data", "digital", "software", "cyber", "blockchain", "cloud", "automation"],
  education: ["education", "learning", "student", "teacher", "school", "college", "classroom", "curriculum"],
  healthcare: ["health", "medical", "patient", "hospital", "clinical", "disease", "nursing", "mental"],
  environment: ["climate", "environment", "sustainability", "pollution", "energy", "water", "agriculture", "waste"],
  business: ["business", "market", "finance", "customer", "employee", "management", "startup", "supply"],
  social: ["social", "community", "gender", "poverty", "culture", "policy", "migration", "governance"],
};

const topicBanks = {
  technology: {
    lens: "technical adoption and human oversight",
    stakeholder: "users, developers, and institutional decision-makers",
    setting: "digitally enabled organizations",
    evidence: "system performance records, usability responses, and implementation reports",
    metric: "accuracy, reliability, usability, and operational efficiency",
    challenge: "algorithmic bias, privacy risk, limited technical capacity, and integration complexity",
    contribution: "a practical model for responsible digital implementation",
  },
  education: {
    lens: "learner engagement and instructional effectiveness",
    stakeholder: "students, teachers, academic leaders, and curriculum designers",
    setting: "formal and blended learning environments",
    evidence: "student achievement records, classroom observations, teacher interviews, and learner surveys",
    metric: "learning outcomes, participation, retention, and learner satisfaction",
    challenge: "unequal access, teacher readiness, assessment reliability, and learner diversity",
    contribution: "an evidence-based framework for improving teaching and learning practice",
  },
  healthcare: {
    lens: "service quality, patient safety, and care accessibility",
    stakeholder: "patients, clinicians, health administrators, and caregivers",
    setting: "clinical and community health contexts",
    evidence: "patient feedback, clinical indicators, practitioner interviews, and service records",
    metric: "care quality, response time, patient satisfaction, and safety outcomes",
    challenge: "confidentiality, resource pressure, clinical risk, and uneven access to care",
    contribution: "a responsible model for improving health service delivery",
  },
  environment: {
    lens: "sustainability, resilience, and policy implementation",
    stakeholder: "local communities, policy makers, environmental agencies, and industry actors",
    setting: "regional environmental and policy contexts",
    evidence: "environmental indicators, field observations, policy documents, and stakeholder responses",
    metric: "resource efficiency, emission reduction, ecological impact, and community resilience",
    challenge: "policy gaps, cost constraints, ecological uncertainty, and public participation",
    contribution: "a context-sensitive framework for sustainable action",
  },
  business: {
    lens: "organizational performance and strategic decision-making",
    stakeholder: "managers, employees, customers, investors, and operational teams",
    setting: "competitive organizational environments",
    evidence: "market reports, operational metrics, stakeholder interviews, and customer feedback",
    metric: "productivity, customer satisfaction, cost efficiency, and strategic adaptability",
    challenge: "market uncertainty, resource allocation, change resistance, and data reliability",
    contribution: "a decision-support framework for organizational improvement",
  },
  social: {
    lens: "social equity, participation, and institutional accountability",
    stakeholder: "community members, public institutions, civil society groups, and policy actors",
    setting: "community and public policy contexts",
    evidence: "survey responses, interview narratives, demographic indicators, and policy records",
    metric: "inclusion, access, participation, trust, and social impact",
    challenge: "social inequality, cultural variation, policy inconsistency, and representation gaps",
    contribution: "a socially grounded framework for inclusive practice",
  },
  general: {
    lens: "practical relevance and evidence-based development",
    stakeholder: "researchers, practitioners, institutions, and affected users",
    setting: "real-world institutional contexts",
    evidence: "academic literature, stakeholder responses, documents, and contextual observations",
    metric: "effectiveness, feasibility, quality, and long-term value",
    challenge: "limited evidence, contextual variation, resource constraints, and implementation uncertainty",
    contribution: "a structured framework for future research and practical application",
  },
};

function getTopicKeywords(topic) {
  const words = topic
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 2 && !stopWords.has(word));

  return [...new Set(words)].slice(0, 5);
}

function inferTopicType(topic, selectedField) {
  const normalized = topic.toLowerCase();
  const matches = Object.entries(topicSignals).map(([type, terms]) => ({
    type,
    score: terms.filter((term) => normalized.includes(term)).length,
  }));
  const best = matches.sort((a, b) => b.score - a.score)[0];

  if (best && best.score > 0) return best.type;
  if (topicBanks[selectedField]) return selectedField;
  return "general";
}

function createTopicProfile(topic) {
  const type = inferTopicType(topic, fieldInput.value);
  const bank = topicBanks[type] || topicBanks.general;
  const keywords = getTopicKeywords(topic);
  const focusTerms = keywords.length ? keywords.join(", ") : topic;

  return {
    ...bank,
    type,
    focusTerms,
    centralQuestion: `how ${topic} can be understood, evaluated, and improved in ${bank.setting}`,
  };
}

const topicParagraphTemplates = {
  english(profile) {
    return {
      introduction: `In this specific study, the topic is examined through the lens of ${profile.lens}. Particular attention is given to ${profile.focusTerms}, because these elements shape how the topic is understood in ${profile.setting}.`,
      literature: `A topic-specific reading of prior work would therefore focus on ${profile.evidence}. This evidence can help explain how ${profile.stakeholder} experience the issue and why earlier findings may differ across contexts.`,
      methodology: `The central research question may be framed as ${profile.centralQuestion}. The study should measure ${profile.metric} while also recording contextual factors that may affect interpretation.`,
      discussion: `For this topic, the most important expected challenge is ${profile.challenge}. The discussion should therefore compare positive outcomes with these risks rather than assuming that implementation will produce uniform benefits.`,
      conclusion: `The main contribution of this study would be ${profile.contribution}. This makes the generated paper more directly connected to the selected topic rather than only offering a general academic overview.`,
    };
  },
  hindi(profile) {
    return {
      introduction: `इस विशिष्ट अध्ययन में विषय को ${profile.lens} के दृष्टिकोण से देखा गया है। विशेष ध्यान ${profile.focusTerms} पर दिया गया है, क्योंकि ये तत्व विषय को वास्तविक संदर्भ में समझने के तरीके को प्रभावित करते हैं।`,
      literature: `विषय-विशेष साहित्य समीक्षा में ${profile.evidence} पर ध्यान देना उपयोगी होगा। इससे यह समझने में सहायता मिलेगी कि संबंधित हितधारक इस मुद्दे का अनुभव कैसे करते हैं और विभिन्न संदर्भों में निष्कर्ष क्यों बदलते हैं।`,
      methodology: `मुख्य शोध प्रश्न यह हो सकता है कि ${profile.centralQuestion}. अध्ययन में ${profile.metric} को मापना चाहिए और उन संदर्भगत कारकों को भी दर्ज करना चाहिए जो व्याख्या को प्रभावित कर सकते हैं।`,
      discussion: `इस विषय के लिए प्रमुख अपेक्षित चुनौती ${profile.challenge} है। इसलिए चर्चा में सकारात्मक परिणामों की तुलना संभावित जोखिमों से करनी चाहिए।`,
      conclusion: `इस अध्ययन का मुख्य योगदान ${profile.contribution} होगा। इससे तैयार सामग्री केवल सामान्य विवरण न रहकर चुने गए विषय से अधिक सीधे जुड़ती है।`,
    };
  },
  gujarati(profile) {
    return {
      introduction: `આ વિશિષ્ટ અભ્યાસમાં વિષયને ${profile.lens} ના દૃષ્ટિકોણથી જોવામાં આવ્યો છે. ખાસ ધ્યાન ${profile.focusTerms} પર આપવામાં આવ્યું છે, કારણ કે આ તત્વો વાસ્તવિક સંદર્ભમાં વિષયની સમજને ઘડે છે.`,
      literature: `વિષય-કેન્દ્રિત સાહિત્ય સમીક્ષામાં ${profile.evidence} પર ધ્યાન આપવું ઉપયોગી રહેશે. તે હિતધારકો મુદ્દાનો અનુભવ કેવી રીતે કરે છે અને વિવિધ સંદર્ભોમાં તારણો કેમ બદલાય છે તે સમજાવવામાં મદદ કરશે.`,
      methodology: `મુખ્ય સંશોધન પ્રશ્ન એવો હોઈ શકે કે ${profile.centralQuestion}. અભ્યાસમાં ${profile.metric} માપવા સાથે અર્થઘટનને અસર કરતા સંદર્ભ પરિબળો પણ નોંધવા જોઈએ.`,
      discussion: `આ વિષય માટે સૌથી મહત્વપૂર્ણ અપેક્ષિત પડકાર ${profile.challenge} છે. તેથી ચર્ચાએ સકારાત્મક પરિણામો અને જોખમો બંનેને સંતુલિત રીતે જોવું જોઈએ.`,
      conclusion: `આ અભ્યાસનું મુખ્ય યોગદાન ${profile.contribution} હશે. તેથી ઉત્પન્ન થયેલ લેખ સામાન્ય અવલોકન કરતાં પસંદ કરેલા વિષય સાથે વધુ સીધો જોડાય છે.`,
    };
  },
  marathi(profile) {
    return {
      introduction: `या विशिष्ट अभ्यासात विषयाकडे ${profile.lens} या दृष्टिकोनातून पाहिले आहे. ${profile.focusTerms} याकडे विशेष लक्ष दिले आहे, कारण हे घटक प्रत्यक्ष संदर्भात विषयाची समज घडवतात.`,
      literature: `विषय-विशिष्ट साहित्य समीक्षेत ${profile.evidence} यावर लक्ष केंद्रित करणे उपयुक्त ठरेल. यामुळे हितधारक हा मुद्दा कसा अनुभवतात आणि विविध संदर्भांत निष्कर्ष का बदलतात हे स्पष्ट होऊ शकते.`,
      methodology: `मुख्य संशोधन प्रश्न असा मांडता येईल की ${profile.centralQuestion}. अभ्यासात ${profile.metric} मोजणे आणि अर्थ लावण्यावर परिणाम करणारे संदर्भ घटक नोंदवणे आवश्यक आहे.`,
      discussion: `या विषयातील प्रमुख अपेक्षित आव्हान ${profile.challenge} आहे. त्यामुळे चर्चेत सकारात्मक परिणामांसह संभाव्य जोखमींचाही विचार केला पाहिजे.`,
      conclusion: `या अभ्यासाचे मुख्य योगदान ${profile.contribution} असेल. त्यामुळे तयार केलेला मजकूर केवळ सामान्य न राहता निवडलेल्या विषयाशी थेट जोडला जातो.`,
    };
  },
  tamil(profile) {
    return {
      introduction: `இந்த குறிப்பிட்ட ஆய்வில் பொருள் ${profile.lens} என்ற கோணத்தில் அணுகப்படுகிறது. ${profile.focusTerms} மீது சிறப்பு கவனம் செலுத்தப்படுகிறது, ஏனெனில் இவை உண்மையான சூழலில் பொருளின் புரிதலை வடிவமைக்கின்றன.`,
      literature: `பொருள் சார்ந்த இலக்கிய ஆய்வில் ${profile.evidence} கவனிக்கப்பட வேண்டும். இது பங்குதாரர்கள் பிரச்சினையை எவ்வாறு அனுபவிக்கிறார்கள் மற்றும் முடிவுகள் சூழலுக்கு ஏற்ப ஏன் மாறுகின்றன என்பதைக் காட்டும்.`,
      methodology: `மைய ஆய்வு கேள்வி ${profile.centralQuestion} என அமைக்கலாம். ஆய்வு ${profile.metric} என்பதை அளவிடுவதோடு விளக்கத்தை பாதிக்கும் சூழல் காரணிகளையும் பதிவு செய்ய வேண்டும்.`,
      discussion: `இந்த பொருளுக்கான முக்கிய எதிர்பார்க்கப்படும் சவால் ${profile.challenge} ஆகும். எனவே விவாதம் நல்ல விளைவுகளையும் சாத்தியமான ஆபத்துகளையும் சமநிலையுடன் பார்க்க வேண்டும்.`,
      conclusion: `இந்த ஆய்வின் முக்கிய பங்களிப்பு ${profile.contribution} ஆகும். இதனால் உருவாகும் கட்டுரை பொதுவான விளக்கமாக இல்லாமல் தேர்ந்தெடுக்கப்பட்ட பொருளுடன் நேரடியாக இணைகிறது.`,
    };
  },
  telugu(profile) {
    return {
      introduction: `ఈ ప్రత్యేక అధ్యయనంలో అంశాన్ని ${profile.lens} కోణంలో పరిశీలిస్తారు. ${profile.focusTerms} పై ప్రత్యేక దృష్టి ఉంటుంది, ఎందుకంటే ఇవి వాస్తవ సందర్భంలో అంశం ఎలా అర్థం చేసుకోవాలో ప్రభావితం చేస్తాయి.`,
      literature: `అంశానికి సంబంధించిన సాహిత్య సమీక్షలో ${profile.evidence} పై దృష్టి పెట్టాలి. ఇది భాగస్వాములు సమస్యను ఎలా అనుభవిస్తారు మరియు వివిధ సందర్భాల్లో ఫలితాలు ఎందుకు మారుతాయి అనే విషయాన్ని చూపిస్తుంది.`,
      methodology: `ముఖ్య పరిశోధన ప్రశ్నను ${profile.centralQuestion} గా రూపొందించవచ్చు. అధ్యయనం ${profile.metric} ను కొలవడంతో పాటు వివరణను ప్రభావితం చేసే సందర్భ కారకాలను నమోదు చేయాలి.`,
      discussion: `ఈ అంశానికి ప్రధానంగా ఎదురయ్యే సవాలు ${profile.challenge}. కాబట్టి చర్చ సానుకూల ఫలితాలు మరియు సాధ్యమైన ప్రమాదాలను సమతుల్యంగా పరిశీలించాలి.`,
      conclusion: `ఈ అధ్యయనం యొక్క ప్రధాన కృషి ${profile.contribution}. అందువల్ల సృష్టించిన పత్రం సాధారణ వివరణ కాకుండా ఎంచుకున్న అంశంతో నేరుగా అనుసంధానమవుతుంది.`,
    };
  },
  punjabi(profile) {
    return {
      introduction: `ਇਸ ਖਾਸ ਅਧਿਐਨ ਵਿੱਚ ਵਿਸ਼ੇ ਨੂੰ ${profile.lens} ਦੇ ਨਜ਼ਰੀਏ ਨਾਲ ਦੇਖਿਆ ਗਿਆ ਹੈ। ${profile.focusTerms} ਤੇ ਖਾਸ ਧਿਆਨ ਦਿੱਤਾ ਗਿਆ ਹੈ, ਕਿਉਂਕਿ ਇਹ ਤੱਤ ਅਸਲ ਸੰਦਰਭ ਵਿੱਚ ਵਿਸ਼ੇ ਦੀ ਸਮਝ ਨੂੰ ਪ੍ਰਭਾਵਿਤ ਕਰਦੇ ਹਨ।`,
      literature: `ਵਿਸ਼ਾ-ਕੇਂਦ੍ਰਿਤ ਸਾਹਿਤ ਸਮੀਖਿਆ ਵਿੱਚ ${profile.evidence} ਤੇ ਧਿਆਨ ਦੇਣਾ ਲਾਭਕਾਰੀ ਹੋਵੇਗਾ। ਇਸ ਨਾਲ ਇਹ ਸਮਝਣ ਵਿੱਚ ਮਦਦ ਮਿਲੇਗੀ ਕਿ ਹਿੱਸੇਦਾਰ ਮੁੱਦੇ ਨੂੰ ਕਿਵੇਂ ਅਨੁਭਵ ਕਰਦੇ ਹਨ ਅਤੇ ਨਤੀਜੇ ਸੰਦਰਭ ਅਨੁਸਾਰ ਕਿਉਂ ਬਦਲਦੇ ਹਨ।`,
      methodology: `ਮੁੱਖ ਖੋਜ ਪ੍ਰਸ਼ਨ ਇਹ ਹੋ ਸਕਦਾ ਹੈ ਕਿ ${profile.centralQuestion}. ਅਧਿਐਨ ਵਿੱਚ ${profile.metric} ਮਾਪਣ ਦੇ ਨਾਲ ਉਹ ਸੰਦਰਭਕ ਕਾਰਕ ਵੀ ਦਰਜ ਕਰਨੇ ਚਾਹੀਦੇ ਹਨ ਜੋ ਵਿਆਖਿਆ ਨੂੰ ਪ੍ਰਭਾਵਿਤ ਕਰਦੇ ਹਨ।`,
      discussion: `ਇਸ ਵਿਸ਼ੇ ਲਈ ਮੁੱਖ ਉਮੀਦ ਕੀਤੀ ਚੁਣੌਤੀ ${profile.challenge} ਹੈ। ਇਸ ਲਈ ਚਰਚਾ ਵਿੱਚ ਸਕਾਰਾਤਮਕ ਨਤੀਜਿਆਂ ਅਤੇ ਸੰਭਾਵਿਤ ਜੋਖਮਾਂ ਦੋਵਾਂ ਦੀ ਤੁਲਨਾ ਹੋਣੀ ਚਾਹੀਦੀ ਹੈ।`,
      conclusion: `ਇਸ ਅਧਿਐਨ ਦਾ ਮੁੱਖ ਯੋਗਦਾਨ ${profile.contribution} ਹੋਵੇਗਾ। ਇਸ ਨਾਲ ਤਿਆਰ ਪੇਪਰ ਆਮ ਵੇਰਵੇ ਦੀ ਬਜਾਏ ਚੁਣੇ ਵਿਸ਼ੇ ਨਾਲ ਸਿੱਧੇ ਤੌਰ ਤੇ ਜੁੜਦਾ ਹੈ।`,
    };
  },
  spanish(profile) {
    return {
      introduction: `En este estudio especifico, el tema se analiza desde la perspectiva de ${profile.lens}. Se presta especial atencion a ${profile.focusTerms}, porque estos elementos influyen en la forma en que el tema se entiende en contextos reales.`,
      literature: `Una revision de literatura centrada en el tema deberia examinar ${profile.evidence}. Esta evidencia puede explicar como los actores involucrados experimentan el problema y por que los hallazgos cambian entre contextos.`,
      methodology: `La pregunta central de investigacion puede formularse como ${profile.centralQuestion}. El estudio debe medir ${profile.metric} y registrar factores contextuales que puedan afectar la interpretacion.`,
      discussion: `Para este tema, el desafio esperado mas importante es ${profile.challenge}. Por ello, la discusion debe comparar los resultados positivos con los riesgos posibles.`,
      conclusion: `La contribucion principal del estudio seria ${profile.contribution}. Esto conecta el articulo generado directamente con el tema seleccionado.`,
    };
  },
  french(profile) {
    return {
      introduction: `Dans cette etude specifique, le sujet est examine sous l'angle de ${profile.lens}. Une attention particuliere est accordee a ${profile.focusTerms}, car ces elements influencent la comprehension du sujet dans des contextes reels.`,
      literature: `Une revue de litterature centree sur le sujet devrait examiner ${profile.evidence}. Ces preuves peuvent expliquer comment les acteurs concernes vivent la question et pourquoi les resultats varient selon les contextes.`,
      methodology: `La question centrale de recherche peut etre formulee ainsi: ${profile.centralQuestion}. L'etude doit mesurer ${profile.metric} et relever les facteurs contextuels susceptibles d'influencer l'interpretation.`,
      discussion: `Pour ce sujet, le principal defi attendu est ${profile.challenge}. La discussion doit donc comparer les effets positifs avec les risques possibles.`,
      conclusion: `La contribution principale de cette etude serait ${profile.contribution}. Cela relie le document produit plus directement au sujet choisi.`,
    };
  },
  german(profile) {
    return {
      introduction: `In dieser spezifischen Studie wird das Thema aus der Perspektive von ${profile.lens} betrachtet. Besonderes Augenmerk gilt ${profile.focusTerms}, da diese Elemente das Verstandnis des Themas in realen Kontexten pragen.`,
      literature: `Eine themenspezifische Literaturubersicht sollte ${profile.evidence} untersuchen. Diese Evidenz kann erklaren, wie beteiligte Akteure das Problem erleben und warum Ergebnisse je nach Kontext variieren.`,
      methodology: `Die zentrale Forschungsfrage kann lauten: ${profile.centralQuestion}. Die Studie sollte ${profile.metric} messen und zugleich Kontextfaktoren erfassen, die die Interpretation beeinflussen konnen.`,
      discussion: `Fur dieses Thema besteht die wichtigste erwartete Herausforderung in ${profile.challenge}. Die Diskussion sollte daher positive Ergebnisse mit moglichen Risiken vergleichen.`,
      conclusion: `Der zentrale Beitrag der Studie ware ${profile.contribution}. Dadurch ist der erzeugte Text direkter mit dem gewahlten Thema verbunden.`,
    };
  },
};

const localizedProfileText = {
  hindi: {
    lens: "साक्ष्य-आधारित उपयोग और सामाजिक प्रभाव",
    evidence: "साहित्य, सर्वेक्षण, साक्षात्कार और संदर्भगत अभिलेख",
    metric: "प्रभावशीलता, उपयोगिता, पहुंच, गुणवत्ता और दीर्घकालिक मूल्य",
    challenge: "संसाधन सीमाएं, संदर्भगत भिन्नता, डेटा गुणवत्ता और कार्यान्वयन अनिश्चितता",
    contribution: "चयनित विषय के लिए संदर्भ-संवेदनशील शोध ढांचा",
    centralQuestionPrefix: "चयनित संदर्भ में इस विषय को कैसे समझा, मापा और सुधारा जा सकता है",
  },
  gujarati: {
    lens: "પુરાવા આધારિત ઉપયોગ અને સામાજિક અસર",
    evidence: "સાહિત્ય, સર્વેક્ષણ, ઇન્ટરવ્યુ અને સંદર્ભ આધારિત નોંધો",
    metric: "અસરકારકતા, ઉપયોગિતા, ઉપલબ્ધતા, ગુણવત્તા અને લાંબા ગાળાનું મૂલ્ય",
    challenge: "સંસાધન મર્યાદા, સંદર્ભ વૈવિધ્ય, ડેટા ગુણવત્તા અને અમલીકરણ અનિશ્ચિતતા",
    contribution: "પસંદ કરેલા વિષય માટે સંદર્ભ-સંવેદનશીલ સંશોધન માળખું",
    centralQuestionPrefix: "પસંદ કરેલા સંદર્ભમાં આ વિષયને કેવી રીતે સમજવો, માપવો અને સુધારવો",
  },
  marathi: {
    lens: "पुराव्याधारित वापर आणि सामाजिक परिणाम",
    evidence: "साहित्य, सर्वेक्षण, मुलाखती आणि संदर्भाधारित नोंदी",
    metric: "प्रभावशीलता, उपयोगिता, प्रवेश, गुणवत्ता आणि दीर्घकालीन मूल्य",
    challenge: "संसाधन मर्यादा, संदर्भातील फरक, डेटा गुणवत्ता आणि अंमलबजावणीतील अनिश्चितता",
    contribution: "निवडलेल्या विषयासाठी संदर्भ-संवेदनशील संशोधन चौकट",
    centralQuestionPrefix: "निवडलेल्या संदर्भात हा विषय कसा समजून, मोजून आणि सुधारता येईल",
  },
  tamil: {
    lens: "ஆதார அடிப்படையிலான பயன்பாடு மற்றும் சமூக தாக்கம்",
    evidence: "இலக்கியம், கருத்துக்கணிப்புகள், நேர்காணல்கள் மற்றும் சூழல் பதிவுகள்",
    metric: "செயல்திறன், பயன்பாடு, அணுகல், தரம் மற்றும் நீண்டகால மதிப்பு",
    challenge: "வளக் குறைவு, சூழல் மாறுபாடு, தரவு தரம் மற்றும் செயல்படுத்தல் நிச்சயமின்மை",
    contribution: "தேர்ந்தெடுக்கப்பட்ட பொருளுக்கான சூழல் உணர்வுள்ள ஆராய்ச்சி வடிவமைப்பு",
    centralQuestionPrefix: "தேர்ந்தெடுக்கப்பட்ட சூழலில் இந்த பொருளை எவ்வாறு புரிந்து, அளந்து, மேம்படுத்தலாம்",
  },
  telugu: {
    lens: "ఆధారపూర్వక వినియోగం మరియు సామాజిక ప్రభావం",
    evidence: "సాహిత్యం, సర్వేలు, ఇంటర్వ్యూలు మరియు సందర్భ రికార్డులు",
    metric: "ప్రభావితత్వం, ఉపయోగకరత, ప్రాప్యత, నాణ్యత మరియు దీర్ఘకాలిక విలువ",
    challenge: "వనరుల పరిమితులు, సందర్భ భేదాలు, డేటా నాణ్యత మరియు అమలు అనిశ్చితి",
    contribution: "ఎంచుకున్న అంశానికి సందర్భ-సున్నితమైన పరిశోధన రూపకల్పన",
    centralQuestionPrefix: "ఎంచుకున్న సందర్భంలో ఈ అంశాన్ని ఎలా అర్థం చేసుకోవాలి, కొలవాలి మరియు మెరుగుపరచాలి",
  },
  punjabi: {
    lens: "ਸਬੂਤ-ਅਧਾਰਿਤ ਵਰਤੋਂ ਅਤੇ ਸਮਾਜਿਕ ਪ੍ਰਭਾਵ",
    evidence: "ਸਾਹਿਤ, ਸਰਵੇਖਣ, ਇੰਟਰਵਿਊ ਅਤੇ ਸੰਦਰਭਕ ਰਿਕਾਰਡ",
    metric: "ਪ੍ਰਭਾਵਸ਼ੀਲਤਾ, ਵਰਤੋਂਯੋਗਤਾ, ਪਹੁੰਚ, ਗੁਣਵੱਤਾ ਅਤੇ ਲੰਬੇ ਸਮੇਂ ਦਾ ਮੁੱਲ",
    challenge: "ਸਰੋਤ ਸੀਮਾਵਾਂ, ਸੰਦਰਭਕ ਫਰਕ, ਡਾਟਾ ਗੁਣਵੱਤਾ ਅਤੇ ਲਾਗੂ ਕਰਨ ਦੀ ਅਨਿਸ਼ਚਿਤਤਾ",
    contribution: "ਚੁਣੇ ਗਏ ਵਿਸ਼ੇ ਲਈ ਸੰਦਰਭ-ਸੰਵੇਦਨਸ਼ੀਲ ਖੋਜ ਢਾਂਚਾ",
    centralQuestionPrefix: "ਚੁਣੇ ਸੰਦਰਭ ਵਿੱਚ ਇਸ ਵਿਸ਼ੇ ਨੂੰ ਕਿਵੇਂ ਸਮਝਿਆ, ਮਾਪਿਆ ਅਤੇ ਸੁਧਾਰਿਆ ਜਾ ਸਕਦਾ ਹੈ",
  },
  spanish: {
    lens: "uso basado en evidencia e impacto social",
    evidence: "literatura, encuestas, entrevistas y registros contextuales",
    metric: "efectividad, utilidad, acceso, calidad y valor a largo plazo",
    challenge: "limitaciones de recursos, variacion contextual, calidad de datos e incertidumbre de implementacion",
    contribution: "un marco de investigacion sensible al contexto para el tema seleccionado",
    centralQuestionPrefix: "como puede entenderse, medirse y mejorarse este tema en el contexto seleccionado",
  },
  french: {
    lens: "usage fonde sur des preuves et impact social",
    evidence: "litterature, enquetes, entretiens et donnees contextuelles",
    metric: "efficacite, utilite, acces, qualite et valeur a long terme",
    challenge: "contraintes de ressources, variation contextuelle, qualite des donnees et incertitude de mise en oeuvre",
    contribution: "un cadre de recherche sensible au contexte pour le sujet choisi",
    centralQuestionPrefix: "comment ce sujet peut etre compris, mesure et ameliore dans le contexte choisi",
  },
  german: {
    lens: "evidenzbasierte Nutzung und gesellschaftliche Wirkung",
    evidence: "Literatur, Umfragen, Interviews und kontextbezogene Aufzeichnungen",
    metric: "Wirksamkeit, Nutzbarkeit, Zuganglichkeit, Qualitat und langfristiger Wert",
    challenge: "Ressourcenbegrenzungen, kontextuelle Unterschiede, Datenqualitat und Umsetzungsunsicherheit",
    contribution: "ein kontextsensibles Forschungsmodell fur das gewahlte Thema",
    centralQuestionPrefix: "wie dieses Thema im gewahlten Kontext verstanden, gemessen und verbessert werden kann",
  },
};

function localizeProfile(profile, language) {
  const localized = localizedProfileText[language];

  if (!localized) return profile;

  return {
    ...profile,
    ...localized,
    centralQuestion: localized.centralQuestionPrefix,
  };
}

function addTopicSpecificContent(sections, language, profile) {
  const template = topicParagraphTemplates[language] || topicParagraphTemplates.english;
  const additions = template(localizeProfile(profile, language));
  const targets = [
    [2, additions.introduction],
    [3, additions.literature],
    [4, additions.methodology],
    [5, additions.discussion],
    [6, additions.conclusion],
  ];

  targets.forEach(([index, paragraph]) => {
    if (sections[index] && paragraph) {
      sections[index].body = `${sections[index].body}\n\n${paragraph}`;
    }
  });

  return sections;
}

function buildPaper(topic) {
  const language = languageInput.value;
  const context = getContext(language);
  const generator = generators[language] || generators.english;
  const profile = createTopicProfile(topic);

  return addTopicSpecificContent(generator(topic, context), language, profile);
}

function renderPaper(sections) {
  output.innerHTML = "";
  output.lang = languageCodes[languageInput.value] || "en";

  sections.forEach((item) => {
    const heading = document.createElement("h2");
    heading.textContent = item.heading;
    output.appendChild(heading);

    item.body.split("\n\n").forEach((paragraph) => {
      const element = document.createElement("p");
      element.textContent = paragraph;

      if (item.titleClass) {
        element.className = "paper-title";
      }

      output.appendChild(element);
    });
  });
}

function sectionsToText(sections) {
  return sections.map((item) => `${item.heading}\n\n${item.body}`).join("\n\n");
}

function generateContent() {
  const topic = sanitizeTopic(topicInput.value);

  if (!topic) {
    statusText.textContent = "Please enter a research topic.";
    topicInput.focus();
    return;
  }

  const sections = buildPaper(topic);
  renderPaper(sections);
  currentPlainText = sectionsToText(sections);
  copyBtn.disabled = false;
  downloadBtn.disabled = false;
  statusText.textContent = `Academic research draft generated in ${languageNames[languageInput.value]}.`;
}

async function copyOutput() {
  if (!currentPlainText) return;

  await navigator.clipboard.writeText(currentPlainText);
  statusText.textContent = "Generated content copied.";
}

function downloadOutput() {
  if (!currentPlainText) return;

  const blob = new Blob([currentPlainText], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const topic = sanitizeTopic(topicInput.value).toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const language = languageInput.value;

  link.href = url;
  link.download = `${topic || "research-paper"}-${language}-draft.txt`;
  link.click();
  URL.revokeObjectURL(url);
  statusText.textContent = "Text file downloaded.";
}

generateBtn.addEventListener("click", generateContent);
copyBtn.addEventListener("click", copyOutput);
downloadBtn.addEventListener("click", downloadOutput);

topicInput.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
    generateContent();
  }
});
