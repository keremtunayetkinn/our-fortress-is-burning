/* Glossary tooltip system.
   Mark a term in HTML with: <button class="term" data-term="entropi">entropi</button>
   The button form is used so it is naturally keyboard-focusable. */

(function () {
  const TERMS = {
    tr: {
      'entropi':
        'Bir sistemin düzensizliğinin ölçüsü. Termodinamiğin İkinci Yasası’na göre kapalı bir sistemin entropisi zamanla artar; bu, geri döndürülemez bir akışı tanımlar.',
      'termodinamigin-ikinci-yasasi':
        'Isının kendiliğinden sıcaktan soğuğa aktığını ve kapalı bir sistemin entropisinin azalamayacağını söyleyen yasa. Zamanın tek yönlü oluşunun fiziksel temellerinden biridir.',
      'zamanin-oku':
        'Geçmişten geleceğe akan asimetrik zaman duygusunu fiziğin temel yasalarına bağlama girişimi. En yaygın aday entropinin artışıdır.',
      'isi-olumu':
        'Evrenin entropisinin azami değere ulaştığı ve hiçbir iş üretilemeyen termodinamik denge durumu için kullanılan terim. Fiziksel kesinliği tartışmalıdır; nüansları felsefe sayfasında açıklanır.',
      'ekpyrosis':
        'Stoacıların evrenin belirli aralıklarla ateşte yanıp yeniden doğduğu döngüsel kozmoloji öğretisi. Köklerini Herakleitos’un ateş kozmolojisinden alır.',
      'logos':
        'Herakleitos’ta evrenin akışını yöneten akıl-yasa ilkesi. Stoacılar bu kavramı doğanın rasyonel düzenini tarif etmek için devraldı.',
      'panteizm':
        'Tanrı ile evrenin (doğanın) bir ve aynı olduğunu öne süren görüş. Spinoza’nın "Tanrı veya Doğa" formülü en bilinen örnektir; ancak Spinoza’nın kesin olarak panteist olup olmadığı akademik tartışmadır.',
      'deus-sive-natura':
        'Latince "Tanrı veya Doğa". Spinoza’nın metafiziğinin omurgası: tek bir tözün hem zihin hem uzam olarak kavranabildiği bütün varlık.',
      'irade':
        'Schopenhauer’da (Wille) görünenin ardındaki kör, dinmek bilmez itki. Yaşamın acısının kaynağı olarak görür; sanat, özellikle müzik, ondan geçici kurtuluş sunar.',
      'amor-fati':
        'Latince "kaderi sevmek". Nietzsche’nin formülü: yaşananın hiçbirinin başka türlü olmasını dilememek; varlığa koşulsuz "evet" demek.',
      'bengi-donus':
        'Nietzsche’nin düşünce deneyi: ömrünün her ânını sonsuz kez aynen yeniden yaşamayı kabul edebilir misin? Cevap "evet" ise amor fati’ye ulaşmışsındır.',
      'nihilizm':
        'En yüksek değerlerin değersizleşmesi. Nietzsche için bir uçurum olduğu kadar aşılması gereken bir geçittir; pasif/aktif biçimleri vardır.',
      'kozmik-karamsarlik':
        'Varoluşun ya da insan bilincinin doğası gereği bir hata, bir fazlalık olduğunu öne süren felsefi tutum. Cioran ve Zapffe gibi yazarlarda izlenir.',
      'transandantalizm':
        'Doğayı ruhsal bir hakikatin görünümü olarak okuyan 19. yüzyıl Amerikan akımı (Emerson, Thoreau). Romantik etkilerle Agalloch’un lirik dilinde yankılanır.',
      'post-metal':
        'Atmosferik dokuları, uzun yapıları ve sözden çok hissi öne çıkaran çağdaş metal türü. Agalloch genellikle bu çatı altında anılır; ancak grup kendini tek bir etikete sıkıştırmaz.',
      'golge':
        'Bu sitede gölge, benliğin ölümü reddederek kendi etrafına ördüğü mimari için kullanılır. Sözcük Jung’dan (Aion, 1951) ödünç alınmıştır ama daha dar bir anlamla: ölüm-reddi temelli savunma yapıları. Becker’ın "ölümsüzlük projesi" ile Heidegger’in das Man’ı bu çizgide okunur.',
      'karakter':
        'Sitede gölgenin karşısına yerleştirilen kavram: doğanın akışıyla aynı tözden bir oluş. Karakterin "icabı" akışla bütünleşmektir; Spinoza’nın conatus’u, karakter söz konusu olduğunda, akışın bir biçimi olarak yaşanır.',
      'conatus':
        'Spinoza, Etika III/6–7: "her şey, kendi varlığında ısrar etmeye çabalar" (unaquaeque res, quantum in se est, in suo esse perseverare conatur). Bir modun fiili özüdür; tercih değil, modun kendisi olduğu için içkin eğilim. Sitenin "karakterin icabı" formülünün klasik temeli.',
      'negentropi':
        'Erwin Schrödinger’in What Is Life? (1944) eserinde önerdiği kavram: canlının biçimini koruyabilmek için çevresinden çektiği "negatif entropi". Canlı, yerel bir entropi gradyanıdır; ölüm bu gradyanın çevreyle dengelenmesidir.',
      'olum-korkusu':
        'Canlılara içgüdüsel olarak kazınmış, biçimin dağılmasına karşı geliştirilen savunmanın temeli. Sitede gölgenin "tohumu" olarak okunur: ölmemek için kurulan ilk savunma, zamanla bütün gölge yapılarının kale mimarisine dönüşür.',
      'olume-dogru-varlik':
        'Heidegger, Sein und Zeit §§46–53: Sein-zum-Tode. Dasein’in kendi sonluluğuyla ilişkisi. Gündelik (otantik olmayan) Dasein, ölümü "el"in (das Man) sesine emanet ederek ondan kaçar; otantik varoluş, ölümü en kendine ait imkân olarak üstlenir.'
    },
    en: {
      'entropi':
        'A measure of disorder in a system. By the Second Law of Thermodynamics, a closed system’s entropy tends to increase over time, defining an irreversible flow.',
      'termodinamigin-ikinci-yasasi':
        'The law stating that heat flows spontaneously from hot to cold and that the entropy of a closed system never decreases. One physical anchor of time’s one-way direction.',
      'zamanin-oku':
        'The attempt to ground the felt asymmetry between past and future in physics. The leading candidate is the increase of entropy.',
      'isi-olumu':
        'Term used for a final thermodynamic equilibrium of the universe in which entropy is maximised and no work can be done. Its physical certainty is contested; nuances are spelled out on the philosophy page.',
      'ekpyrosis':
        'The Stoic doctrine that the cosmos periodically dissolves into fire and is reborn. Its roots lie in Heraclitus’ fire-cosmology.',
      'logos':
        'In Heraclitus, the rational law-principle that governs the cosmic flux. The Stoics inherited the term to describe the rational order of nature.',
      'panteizm':
        'The view that God and the universe (nature) are one and the same. Spinoza’s "God or Nature" is its most famous formula, though whether Spinoza is strictly a pantheist is an open scholarly question.',
      'deus-sive-natura':
        'Latin for "God or Nature." The spine of Spinoza’s metaphysics: a single substance that can be conceived as either thought or extension.',
      'irade':
        'In Schopenhauer (Wille), the blind, restless drive beneath appearances. He sees it as the root of suffering; art — especially music — offers temporary release.',
      'amor-fati':
        'Latin for "love of fate." Nietzsche’s formula: to wish none of what has been to be otherwise; to say an unconditional yes to existence.',
      'bengi-donus':
        'Nietzsche’s thought experiment: could you affirm reliving every moment of your life identically, forever? If yes, you have reached amor fati.',
      'nihilizm':
        'The devaluation of the highest values. For Nietzsche, both an abyss and a passage to be crossed; it has passive and active forms.',
      'kozmik-karamsarlik':
        'The philosophical stance that existence, or human consciousness itself, is a kind of error or surplus. Found in writers like Cioran and Zapffe.',
      'transandantalizm':
        'A 19th-century American current (Emerson, Thoreau) reading nature as the visible face of a spiritual truth. Its Romantic echoes resonate in Agalloch’s lyrical idiom.',
      'post-metal':
        'A contemporary metal idiom built on atmospheric textures, long forms, and feeling over text. Agalloch are often filed here; the band itself resists single-label boxes.',
      'golge':
        'On this site, "shadow" names the architecture the self builds around itself by refusing death. The word is borrowed from Jung (Aion, 1951) in a narrower sense: defensive structures grounded in death-refusal. Becker’s "immortality project" and Heidegger’s das Man are read along this line.',
      'karakter':
        'The site’s counter-term to shadow: a becoming of the same substance as nature’s flow. Character’s "requirement" is to integrate with that flow; Spinoza’s conatus, when character is at issue, is lived as one of the flow’s forms.',
      'conatus':
        'Spinoza, Ethics III/6–7: "each thing, as far as it lies in itself, endeavors to persist in its being" (unaquaeque res, quantum in se est, in suo esse perseverare conatur). It is the actual essence of a mode — not a choice but an internal inclination because it is what the mode is. The classical ground for the site’s formula of "character’s requirement."',
      'negentropi':
        'A term introduced in Erwin Schrödinger’s What Is Life? (1944): the "negative entropy" a living being draws from its environment to hold its form. The living being is a local entropy gradient; death is that gradient equalising with its surroundings.',
      'olum-korkusu':
        'The instinctual fear of death coded into living beings — the base of every defense built against the scattering of form. On this site, it is read as the seed of the shadow: the first defense built against dying becomes, over time, the fortress-architecture of every shadow structure.',
      'olume-dogru-varlik':
        'Heidegger, Being and Time §§46–53: Sein-zum-Tode. Dasein’s relation to its own finitude. Everyday (inauthentic) Dasein flees death by handing it over to "the They" (das Man); authentic existence takes death up as its ownmost possibility.'
    },
    de: {
      'entropi':
        'Ein Maß für die Unordnung eines Systems. Nach dem Zweiten Hauptsatz der Thermodynamik nimmt die Entropie eines abgeschlossenen Systems mit der Zeit zu und definiert so einen irreversiblen Fluss.',
      'termodinamigin-ikinci-yasasi':
        'Das Gesetz, wonach Wärme von selbst von warm nach kalt fließt und die Entropie eines abgeschlossenen Systems niemals abnimmt. Ein physikalischer Anker für die Einbahnrichtung der Zeit.',
      'zamanin-oku':
        'Der Versuch, die empfundene Asymmetrie zwischen Vergangenheit und Zukunft in der Physik zu verankern. Der aussichtsreichste Kandidat ist die Zunahme der Entropie.',
      'isi-olumu':
        'Begriff für ein endgültiges thermodynamisches Gleichgewicht des Universums, in dem die Entropie maximal ist und keine Arbeit mehr verrichtet werden kann. Seine physikalische Gewissheit ist umstritten; die Nuancen werden auf der Philosophieseite dargelegt.',
      'ekpyrosis':
        'Die stoische Lehre, dass der Kosmos sich periodisch im Feuer auflöst und neu geboren wird. Ihre Wurzeln liegen in der Feuerkosmologie des Heraklit.',
      'logos':
        'Bei Heraklit das vernünftige Gesetzesprinzip, das den kosmischen Fluss lenkt. Die Stoiker übernahmen den Begriff für die rationale Ordnung der Natur.',
      'panteizm':
        'Die Auffassung, dass Gott und das Universum (die Natur) ein und dasselbe sind. Spinozas „Gott oder Natur“ ist die bekannteste Formel, doch ob Spinoza streng genommen Pantheist ist, bleibt eine offene Forschungsfrage.',
      'deus-sive-natura':
        'Lateinisch für „Gott oder Natur“. Das Rückgrat von Spinozas Metaphysik: eine einzige Substanz, die sich entweder als Denken oder als Ausdehnung begreifen lässt.',
      'irade':
        'Bei Schopenhauer (der Wille) der blinde, rastlose Drang hinter den Erscheinungen. Er sieht ihn als Wurzel des Leidens; die Kunst — besonders die Musik — bietet vorübergehende Erlösung.',
      'amor-fati':
        'Lateinisch für „Liebe zum Schicksal“. Nietzsches Formel: nichts von dem, was war, anders haben zu wollen; ein bedingungsloses Ja zum Dasein.',
      'bengi-donus':
        'Nietzsches Gedankenexperiment: Könntest du es bejahen, jeden Augenblick deines Lebens identisch und ewig zu wiederholen? Wenn ja, hast du den amor fati erreicht.',
      'nihilizm':
        'Die Entwertung der höchsten Werte. Für Nietzsche zugleich ein Abgrund und ein zu durchschreitender Übergang; er hat passive und aktive Formen.',
      'kozmik-karamsarlik':
        'Die philosophische Haltung, dass die Existenz oder das menschliche Bewusstsein selbst eine Art Irrtum oder Überschuss sei. Zu finden bei Autoren wie Cioran und Zapffe.',
      'transandantalizm':
        'Eine US-amerikanische Strömung des 19. Jahrhunderts (Emerson, Thoreau), die die Natur als sichtbares Antlitz einer geistigen Wahrheit liest. Ihre romantischen Anklänge hallen in Agallochs lyrischer Sprache wider.',
      'post-metal':
        'Ein zeitgenössisches Metal-Idiom, das auf atmosphärischen Texturen, langen Formen und Gefühl statt Text beruht. Agalloch werden oft hier eingeordnet; die Band selbst widersetzt sich einzelnen Etiketten.',
      'golge':
        'Auf dieser Seite benennt „Schatten“ die Architektur, die das Selbst um sich errichtet, indem es den Tod verweigert. Das Wort ist von Jung (Aion, 1951) in einem engeren Sinn entlehnt: Abwehrstrukturen, die in der Todesverweigerung gründen. Beckers „Unsterblichkeitsprojekt“ und Heideggers das Man werden in dieser Linie gelesen.',
      'karakter':
        'Der Gegenbegriff der Seite zum Schatten: ein Werden aus derselben Substanz wie der Fluss der Natur. Das „Erfordernis“ des Charakters ist es, mit diesem Fluss zu verschmelzen; Spinozas conatus wird, wenn es um den Charakter geht, als eine der Formen des Flusses gelebt.',
      'conatus':
        'Spinoza, Ethik III/6–7: „jedes Ding strebt, soweit es an ihm liegt, in seinem Sein zu verharren“ (unaquaeque res, quantum in se est, in suo esse perseverare conatur). Es ist das tatsächliche Wesen eines Modus — keine Wahl, sondern eine innere Neigung, weil es das ist, was der Modus ist. Die klassische Grundlage für die Formel der Seite vom „Erfordernis des Charakters“.',
      'negentropi':
        'Ein in Erwin Schrödingers What Is Life? (1944) eingeführter Begriff: die „negative Entropie“, die ein Lebewesen seiner Umgebung entzieht, um seine Form zu bewahren. Das Lebewesen ist ein lokaler Entropiegradient; der Tod ist der Ausgleich dieses Gradienten mit der Umgebung.',
      'olum-korkusu':
        'Die den Lebewesen instinktiv eingeprägte Todesangst — die Grundlage jeder Abwehr gegen die Zerstreuung der Form. Auf dieser Seite wird sie als Same des Schattens gelesen: die erste Abwehr gegen das Sterben wird mit der Zeit zur Festungsarchitektur jeder Schattenstruktur.',
      'olume-dogru-varlik':
        'Heidegger, Sein und Zeit §§46–53: Sein-zum-Tode. Daseins Verhältnis zu seiner eigenen Endlichkeit. Das alltägliche (uneigentliche) Dasein flieht den Tod, indem es ihn an „das Man“ übergibt; die eigentliche Existenz nimmt den Tod als ihre eigenste Möglichkeit auf sich.'
    },
    fr: {
      'entropi':
        'Une mesure du désordre d’un système. Selon le deuxième principe de la thermodynamique, l’entropie d’un système fermé tend à croître avec le temps, définissant un flux irréversible.',
      'termodinamigin-ikinci-yasasi':
        'Le principe selon lequel la chaleur passe spontanément du chaud au froid et selon lequel l’entropie d’un système fermé ne décroît jamais. L’un des ancrages physiques du sens unique du temps.',
      'zamanin-oku':
        'La tentative d’enraciner dans la physique l’asymétrie ressentie entre passé et futur. Le candidat principal est l’augmentation de l’entropie.',
      'isi-olumu':
        'Terme désignant un équilibre thermodynamique final de l’univers où l’entropie est maximale et où aucun travail ne peut plus être fourni. Sa certitude physique est contestée ; les nuances sont exposées sur la page philosophie.',
      'ekpyrosis':
        'La doctrine stoïcienne selon laquelle le cosmos se dissout périodiquement dans le feu puis renaît. Ses racines plongent dans la cosmologie ignée d’Héraclite.',
      'logos':
        'Chez Héraclite, le principe rationnel-loi qui gouverne le flux cosmique. Les stoïciens ont hérité du terme pour décrire l’ordre rationnel de la nature.',
      'panteizm':
        'La thèse selon laquelle Dieu et l’univers (la nature) ne font qu’un. Le « Dieu ou Nature » de Spinoza en est la formule la plus célèbre, même si savoir si Spinoza est strictement panthéiste reste une question savante ouverte.',
      'deus-sive-natura':
        'Latin pour « Dieu ou Nature ». La colonne vertébrale de la métaphysique de Spinoza : une substance unique qui peut être conçue soit comme pensée, soit comme étendue.',
      'irade':
        'Chez Schopenhauer (le Vouloir, Wille), l’élan aveugle et incessant sous les apparences. Il y voit la racine de la souffrance ; l’art — surtout la musique — en offre une délivrance passagère.',
      'amor-fati':
        'Latin pour « amour du destin ». La formule de Nietzsche : ne rien vouloir d’autre de ce qui a été ; dire un oui inconditionnel à l’existence.',
      'bengi-donus':
        'L’expérience de pensée de Nietzsche : pourrais-tu vouloir revivre chaque instant de ta vie à l’identique, éternellement ? Si oui, tu as atteint l’amor fati.',
      'nihilizm':
        'La dévaluation des valeurs les plus hautes. Pour Nietzsche, à la fois un abîme et un passage à franchir ; il a des formes passives et actives.',
      'kozmik-karamsarlik':
        'La position philosophique selon laquelle l’existence, ou la conscience humaine elle-même, serait une sorte d’erreur ou de surplus. On la trouve chez des auteurs comme Cioran et Zapffe.',
      'transandantalizm':
        'Un courant américain du XIXe siècle (Emerson, Thoreau) qui lit la nature comme le visage visible d’une vérité spirituelle. Ses échos romantiques résonnent dans l’idiome lyrique d’Agalloch.',
      'post-metal':
        'Un idiome metal contemporain fondé sur des textures atmosphériques, des formes longues et le ressenti plutôt que le texte. On y range souvent Agalloch ; le groupe lui-même refuse toute étiquette unique.',
      'golge':
        'Sur ce site, l’« ombre » nomme l’architecture que le soi bâtit autour de lui en refusant la mort. Le mot est emprunté à Jung (Aion, 1951) en un sens plus étroit : des structures défensives fondées sur le refus de la mort. Le « projet d’immortalité » de Becker et le das Man de Heidegger sont lus dans cette ligne.',
      'karakter':
        'Le contre-terme du site face à l’ombre : un devenir de la même substance que le flux de la nature. L’« exigence » du caractère est de s’intégrer à ce flux ; le conatus de Spinoza, lorsqu’il s’agit du caractère, se vit comme l’une des formes du flux.',
      'conatus':
        'Spinoza, Éthique III/6–7 : « chaque chose, autant qu’il est en elle, s’efforce de persévérer dans son être » (unaquaeque res, quantum in se est, in suo esse perseverare conatur). C’est l’essence actuelle d’un mode — non un choix mais une inclination interne, parce que c’est ce que le mode est. Le fondement classique de la formule du site sur l’« exigence du caractère ».',
      'negentropi':
        'Un terme introduit dans What Is Life? (1944) d’Erwin Schrödinger : la néguentropie, l’« entropie négative » qu’un être vivant puise dans son milieu pour conserver sa forme. Le vivant est un gradient local d’entropie ; la mort est l’égalisation de ce gradient avec son environnement.',
      'olum-korkusu':
        'La peur instinctive de la mort, inscrite dans les êtres vivants — la base de toute défense dressée contre la dispersion de la forme. Sur ce site, elle est lue comme la graine de l’ombre : la première défense contre le fait de mourir devient, avec le temps, l’architecture-forteresse de toute structure d’ombre.',
      'olume-dogru-varlik':
        'Heidegger, Être et Temps §§46–53 : Sein-zum-Tode, l’être-pour-la-mort. Le rapport du Dasein à sa propre finitude. Le Dasein quotidien (inauthentique) fuit la mort en la remettant au « On » (das Man) ; l’existence authentique assume la mort comme sa possibilité la plus propre.'
    },
    es: {
      'entropi':
        'Una medida del desorden de un sistema. Según la segunda ley de la termodinámica, la entropía de un sistema cerrado tiende a aumentar con el tiempo, definiendo un flujo irreversible.',
      'termodinamigin-ikinci-yasasi':
        'La ley que afirma que el calor fluye espontáneamente de lo caliente a lo frío y que la entropía de un sistema cerrado nunca disminuye. Uno de los anclajes físicos del sentido único del tiempo.',
      'zamanin-oku':
        'El intento de fundamentar en la física la asimetría percibida entre pasado y futuro. El candidato principal es el aumento de la entropía.',
      'isi-olumu':
        'Término para un equilibrio termodinámico final del universo en el que la entropía es máxima y ya no puede realizarse trabajo. Su certeza física es discutida; los matices se exponen en la página de filosofía.',
      'ekpyrosis':
        'La doctrina estoica según la cual el cosmos se disuelve periódicamente en el fuego y vuelve a nacer. Sus raíces están en la cosmología ígnea de Heráclito.',
      'logos':
        'En Heráclito, el principio racional-ley que gobierna el flujo cósmico. Los estoicos heredaron el término para describir el orden racional de la naturaleza.',
      'panteizm':
        'La idea de que Dios y el universo (la naturaleza) son uno y lo mismo. El «Dios o Naturaleza» de Spinoza es su fórmula más célebre, aunque si Spinoza es estrictamente panteísta sigue siendo una cuestión académica abierta.',
      'deus-sive-natura':
        'Latín para «Dios o Naturaleza». La columna vertebral de la metafísica de Spinoza: una única sustancia que puede concebirse como pensamiento o como extensión.',
      'irade':
        'En Schopenhauer (la Voluntad, Wille), el impulso ciego e incesante bajo las apariencias. Lo ve como la raíz del sufrimiento; el arte —en especial la música— ofrece una liberación pasajera.',
      'amor-fati':
        'Latín para «amor al destino». La fórmula de Nietzsche: no desear que nada de lo que ha sido fuera de otro modo; decir un sí incondicional a la existencia.',
      'bengi-donus':
        'El experimento mental de Nietzsche: ¿podrías afirmar revivir cada instante de tu vida de forma idéntica, eternamente? Si la respuesta es sí, has alcanzado el amor fati.',
      'nihilizm':
        'La devaluación de los valores más altos. Para Nietzsche, a la vez un abismo y un paso que hay que cruzar; tiene formas pasivas y activas.',
      'kozmik-karamsarlik':
        'La postura filosófica según la cual la existencia, o la propia conciencia humana, es una especie de error o excedente. Se encuentra en autores como Cioran y Zapffe.',
      'transandantalizm':
        'Una corriente estadounidense del siglo XIX (Emerson, Thoreau) que lee la naturaleza como el rostro visible de una verdad espiritual. Sus ecos románticos resuenan en el idioma lírico de Agalloch.',
      'post-metal':
        'Un idioma metal contemporáneo construido sobre texturas atmosféricas, formas largas y la sensación por encima del texto. A Agalloch se les suele situar aquí; la propia banda rehúye las etiquetas únicas.',
      'golge':
        'En este sitio, la «sombra» nombra la arquitectura que el yo construye a su alrededor al rechazar la muerte. La palabra se toma de Jung (Aion, 1951) en un sentido más estrecho: estructuras defensivas fundadas en el rechazo de la muerte. El «proyecto de inmortalidad» de Becker y el das Man de Heidegger se leen en esta línea.',
      'karakter':
        'El contratérmino del sitio frente a la sombra: un devenir de la misma sustancia que el flujo de la naturaleza. La «exigencia» del carácter es integrarse con ese flujo; el conatus de Spinoza, cuando se trata del carácter, se vive como una de las formas del flujo.',
      'conatus':
        'Spinoza, Ética III/6–7: «cada cosa, en cuanto está en ella, se esfuerza por perseverar en su ser» (unaquaeque res, quantum in se est, in suo esse perseverare conatur). Es la esencia actual de un modo: no una elección, sino una inclinación interna, porque es lo que el modo es. El fundamento clásico de la fórmula del sitio sobre la «exigencia del carácter».',
      'negentropi':
        'Un término introducido en What Is Life? (1944) de Erwin Schrödinger: la «entropía negativa» que un ser vivo extrae de su entorno para mantener su forma. El ser vivo es un gradiente local de entropía; la muerte es la igualación de ese gradiente con su entorno.',
      'olum-korkusu':
        'El miedo instintivo a la muerte grabado en los seres vivos: la base de toda defensa erigida contra la dispersión de la forma. En este sitio se lee como la semilla de la sombra: la primera defensa contra el morir se convierte, con el tiempo, en la arquitectura-fortaleza de toda estructura de sombra.',
      'olume-dogru-varlik':
        'Heidegger, Ser y tiempo §§46–53: Sein-zum-Tode, el ser-para-la-muerte. La relación del Dasein con su propia finitud. El Dasein cotidiano (inauténtico) huye de la muerte entregándola al «se» impersonal (das Man); la existencia auténtica asume la muerte como su posibilidad más propia.'
    },
    ru: {
      'entropi':
        'Мера беспорядка системы. Согласно второму закону термодинамики, энтропия замкнутой системы со временем стремится возрастать, задавая необратимый поток.',
      'termodinamigin-ikinci-yasasi':
        'Закон, согласно которому тепло самопроизвольно переходит от горячего к холодному, а энтропия замкнутой системы никогда не убывает. Один из физических якорей однонаправленности времени.',
      'zamanin-oku':
        'Попытка обосновать в физике ощущаемую асимметрию между прошлым и будущим. Главный кандидат — возрастание энтропии.',
      'isi-olumu':
        'Термин для конечного термодинамического равновесия Вселенной, при котором энтропия максимальна и работа более невозможна. Его физическая достоверность оспаривается; нюансы изложены на странице философии.',
      'ekpyrosis':
        'Стоическое учение о том, что космос периодически растворяется в огне и рождается заново. Его корни — в огненной космологии Гераклита.',
      'logos':
        'У Гераклита — разумный закон-принцип, управляющий космическим течением. Стоики переняли этот термин для описания разумного порядка природы.',
      'panteizm':
        'Воззрение, что Бог и Вселенная (природа) суть одно и то же. «Бог, или Природа» Спинозы — самая известная формула, хотя вопрос, является ли Спиноза пантеистом в строгом смысле, остаётся открытым научным спором.',
      'deus-sive-natura':
        'По-латыни «Бог, или Природа». Стержень метафизики Спинозы: единая субстанция, которую можно мыслить либо как мышление, либо как протяжённость.',
      'irade':
        'У Шопенгауэра (Воля, Wille) — слепое, неугомонное влечение за явлениями. Он видит в нём корень страдания; искусство — особенно музыка — даёт временное избавление.',
      'amor-fati':
        'По-латыни «любовь к судьбе». Формула Ницше: не желать, чтобы хоть что-то из бывшего было иным; безусловное «да» существованию.',
      'bengi-donus':
        'Мысленный эксперимент Ницше: смог бы ты принять то, чтобы переживать каждое мгновение своей жизни тождественно, вечно? Если да — ты достиг amor fati.',
      'nihilizm':
        'Обесценивание высших ценностей. Для Ницше это и бездна, и переход, который нужно пройти; у него есть пассивная и активная формы.',
      'kozmik-karamsarlik':
        'Философская позиция, согласно которой существование или само человеческое сознание есть своего рода ошибка или избыток. Встречается у таких авторов, как Чоран и Цапффе.',
      'transandantalizm':
        'Американское течение XIX века (Эмерсон, Торо), читающее природу как видимый лик духовной истины. Его романтические отголоски звучат в лирическом языке Agalloch.',
      'post-metal':
        'Современная метал-идиома, построенная на атмосферных фактурах, длинных формах и чувстве важнее текста. Agalloch часто относят сюда; сама группа сопротивляется единым ярлыкам.',
      'golge':
        'На этом сайте «тень» обозначает архитектуру, которую «я» возводит вокруг себя, отвергая смерть. Слово заимствовано у Юнга (Aion, 1951) в более узком смысле: защитные структуры, основанные на отрицании смерти. «Проект бессмертия» Беккера и das Man Хайдеггера читаются в этом ключе.',
      'karakter':
        'Контр-понятие сайта по отношению к тени: становление из той же субстанции, что и поток природы. «Требование» характера — слиться с этим потоком; conatus Спинозы, когда речь о характере, проживается как одна из форм потока.',
      'conatus':
        'Спиноза, Этика III/6–7: «всякая вещь, насколько это от неё зависит, стремится пребывать в своём бытии» (unaquaeque res, quantum in se est, in suo esse perseverare conatur). Это действительная сущность модуса — не выбор, а внутренняя склонность, ибо это и есть то, что́ модус есть. Классическое основание формулы сайта о «требовании характера».',
      'negentropi':
        'Понятие, введённое Эрвином Шрёдингером в книге What Is Life? (1944): «отрицательная энтропия», которую живое существо черпает из среды, чтобы удерживать свою форму. Живое — локальный градиент энтропии; смерть есть выравнивание этого градиента со средой.',
      'olum-korkusu':
        'Инстинктивный страх смерти, впечатанный в живые существа, — основа всякой защиты от рассеяния формы. На этом сайте он прочитан как семя тени: первая защита от умирания со временем становится крепостной архитектурой всякой структуры тени.',
      'olume-dogru-varlik':
        'Хайдеггер, Бытие и время §§46–53: Sein-zum-Tode, бытие-к-смерти. Отношение Dasein к собственной конечности. Повседневное (неподлинное) Dasein бежит от смерти, передавая её «das Man» (безличному «оно»); подлинное существование принимает смерть как наиболее своё возможное.'
    },
    ja: {
      'entropi':
        'システムの無秩序さの尺度。熱力学第二法則によれば、閉じた系のエントロピーは時間とともに増大する傾向があり、不可逆な流れを定める。',
      'termodinamigin-ikinci-yasasi':
        '熱は高温から低温へ自発的に流れ、閉じた系のエントロピーは決して減少しないとする法則。時間が一方向に進むことの物理的な根拠の一つ。',
      'zamanin-oku':
        '過去と未来のあいだに感じられる非対称性を物理学に根拠づけようとする試み。最有力の候補はエントロピーの増大である。',
      'isi-olumu':
        'エントロピーが最大となり、もはや仕事ができなくなる宇宙の最終的な熱力学的平衡を指す語。その物理的確実性には議論があり、ニュアンスは哲学のページで述べる。',
      'ekpyrosis':
        '宇宙が周期的に火のなかへ溶け、ふたたび生まれるとするストア派の教説。その源流はヘラクレイトスの火の宇宙論にある。',
      'logos':
        'ヘラクレイトスにおいて、宇宙の流転を司る理性＝法の原理。ストア派はこの語を受け継ぎ、自然の理性的秩序を表すのに用いた。',
      'panteizm':
        '神と宇宙（自然）は一にして同じであるとする見方。スピノザの「神すなわち自然」が最も有名な定式だが、スピノザを厳密に汎神論者と呼べるかは学問上の未解決の問いである。',
      'deus-sive-natura':
        'ラテン語で「神すなわち自然」。スピノザの形而上学の背骨であり、思惟としても延長としても捉えうる唯一の実体。',
      'irade':
        'ショーペンハウアー（意志、Wille）における、現象の背後にある盲目で休みなき衝動。彼はこれを苦の根源とみなし、芸術——とりわけ音楽——が一時的な解放をもたらすとした。',
      'amor-fati':
        'ラテン語で「運命への愛」。ニーチェの定式——あったことの何ひとつ別であってほしいと願わず、存在に無条件の「然り」を言うこと。',
      'bengi-donus':
        'ニーチェの思考実験——人生のあらゆる瞬間をそっくり同じまま永遠に繰り返すことを肯定できるか。もし「然り」と言えるなら、あなたは amor fati に到達している。',
      'nihilizm':
        '最高の諸価値が無価値になること。ニーチェにとっては深淵であると同時に踏み越えるべき通路であり、受動的な形と能動的な形がある。',
      'kozmik-karamsarlik':
        '存在、あるいは人間の意識そのものが一種の過ちないし余剰であるとする哲学的立場。シオランやツァップフェのような書き手に見られる。',
      'transandantalizm':
        '自然を霊的真理の可視の顔として読む19世紀アメリカの潮流（エマソン、ソロー）。そのロマン主義的な反響は Agalloch の抒情的な語法にこだまする。',
      'post-metal':
        '雰囲気的なテクスチャ、長尺の構成、そして言葉よりも感覚を前面に出す現代のメタルの語法。Agalloch はしばしばここに分類されるが、バンド自身は単一のレッテルを拒む。',
      'golge':
        '本サイトで「影」とは、自己が死を拒むことでみずからの周りに築く構築物を指す。語はユング（『アイオーン』1951年）から、より狭い意味で借りている——死の拒否に根ざした防御構造。ベッカーの「不死プロジェクト」やハイデガーの das Man はこの線で読まれる。',
      'karakter':
        '本サイトが影に対置する語。自然の流れと同じ実体からなる生成である。性格の「要請」はその流れと一体化することであり、スピノザの conatus は、性格に関しては、流れの一形態として生きられる。',
      'conatus':
        'スピノザ『エチカ』第三部定理6–7：「おのおのの物は、おのれのうちにあるかぎり、おのれの存在に固執しようと努める」（unaquaeque res, quantum in se est, in suo esse perseverare conatur）。それは様態の現実的本質であり——選択ではなく、それが様態そのものであるがゆえの内在的傾向である。本サイトの「性格の要請」という定式の古典的な基盤。',
      'negentropi':
        'エルヴィン・シュレーディンガー『生命とは何か』（1944年）で提案された概念。生命がその形を保つために環境から引き出す「負のエントロピー」。生命は局所的なエントロピー勾配であり、死とはその勾配が環境と均されることである。',
      'olum-korkusu':
        '生命に本能として刻まれた、形の散逸に抗して築かれるあらゆる防御の基盤。本サイトでは影の「種子」として読まれる——死なないために築かれた最初の防御は、やがてあらゆる影の構造の城砦の建築へと変わる。',
      'olume-dogru-varlik':
        'ハイデガー『存在と時間』§§46–53：Sein-zum-Tode、死へとかかわる存在。現存在（Dasein）が自らの有限性とかかわる仕方。日常の（非本来的な）現存在は、死を「世人（das Man）」の声に委ねて逃れる。本来的な実存は、死をもっとも自己に固有の可能性として引き受ける。'
    }
  };

  let currentLang = 'tr';
  let tooltipEl = null;
  let activeTerm = null;
  let hideTimer = null;

  function ensureTooltip() {
    if (tooltipEl) return tooltipEl;
    tooltipEl = document.createElement('div');
    tooltipEl.className = 'tooltip';
    tooltipEl.setAttribute('role', 'tooltip');
    tooltipEl.hidden = true;
    tooltipEl.id = 'fortress-tooltip';
    document.body.appendChild(tooltipEl);
    return tooltipEl;
  }

  function positionTooltip(target) {
    const t = ensureTooltip();
    const r = target.getBoundingClientRect();
    const docX = window.scrollX;
    const docY = window.scrollY;
    t.style.left = Math.max(8, r.left + docX) + 'px';
    t.style.top  = (r.bottom + docY + 8) + 'px';
    const tw = t.getBoundingClientRect();
    if (r.left + tw.width > window.innerWidth - 8) {
      t.style.left = Math.max(8, window.innerWidth - tw.width - 8 + docX) + 'px';
    }
  }

  function showTip(target) {
    clearTimeout(hideTimer);
    const key = target.dataset.term;
    const dict = TERMS[currentLang] || TERMS.tr;
    const def = dict[key];
    if (!def) return;
    const t = ensureTooltip();
    t.innerHTML =
      `<div class="tooltip-term">${escapeHtml(key)}</div>` +
      `<div class="tooltip-def">${escapeHtml(def)}</div>`;
    t.hidden = false;
    positionTooltip(target);
    target.setAttribute('aria-describedby', 'fortress-tooltip');
    activeTerm = target;
  }

  function hideTip() {
    if (!tooltipEl) return;
    tooltipEl.hidden = true;
    if (activeTerm) activeTerm.removeAttribute('aria-describedby');
    activeTerm = null;
  }

  function scheduleHide() {
    clearTimeout(hideTimer);
    hideTimer = setTimeout(hideTip, 120);
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function bind() {
    document.querySelectorAll('.term').forEach(el => {
      if (!el.hasAttribute('tabindex') && el.tagName !== 'BUTTON') el.tabIndex = 0;

      el.addEventListener('mouseenter', () => showTip(el));
      el.addEventListener('mouseleave', scheduleHide);
      el.addEventListener('focus', () => showTip(el));
      el.addEventListener('blur', scheduleHide);
      el.addEventListener('click', (e) => {
        if (tooltipEl && !tooltipEl.hidden && activeTerm === el) hideTip();
        else showTip(el);
        e.preventDefault();
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') hideTip();
    });
    window.addEventListener('scroll', hideTip, { passive: true });
    window.addEventListener('resize', hideTip);
  }

  document.addEventListener('lang:change', (e) => {
    currentLang = e.detail.lang;
    hideTip();
  });

  document.addEventListener('DOMContentLoaded', bind);
})();
