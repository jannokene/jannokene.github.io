const imageSources = [
    'maša.jpeg',
    'img1.jpeg',
    'img2.jpeg',
    'img3.jpeg',
    'jannokk.jpeg',
    'heart.png',
    'js.jpeg',
    's.jpeg',
    'ssjj.jpeg'
  ];
  
  function createImage() {
    const image = document.createElement('img');
    const randomIndex = Math.floor(Math.random() * imageSources.length);
    image.src = imageSources[randomIndex];
    image.style.left = `${Math.random() * 100}%`;
    image.style.top = `${Math.random() * 100}%`;
    image.style.animationDelay = `${Math.random() * 10}s`;
    document.getElementById('image-container').appendChild(image);
    image.addEventListener('animationend', () => {
      image.remove();
      createImage();
    });
  }
  
  createImage();


/////

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  const button = document.getElementById('shuffle-button');
  const display = document.getElementById('sentence-display');
  
  const sentences = [
    '03.11 - mulle tegi rõõmu, et Jannot kutsuti OP saatesse, niiii laheee! ja see, et sa jagasid, kuidas tunned seoses sünnipäeva segadusega ja ma julgesin vastu jagada, saame rääkida asjadest',
    '04.11 - mulle meeldib, millest ta unistab ja kuidas ta toob minus välja loomingulise poole. mulle meeldivad meie õhtused telefonikõned ja see tema uuesti nägemise vajadus. Mulle meeldib, et ta jagab mulle lugu, kuidas keegi teda Topsis suudles. Ta usaldus mulle ka täna saladuse, mida ta ei ole kellelegi teisele rääkinud',
    '05.11 - Janno, täna hommikul sa ütlesid, et tegelesid minuga, andsid mulle vihjeid, aga ei öelnud mida täpselt tegid. Mulle meeldib kui ta kiusab mind. ',
    '06.11 - mulle meeldib, et me mängisime koos sitaratast ja meil tekkis oma vaib, oma shittalk, selle tunde nimel ma elan',
    '07.11 - mulle meeldib kui toeks ta suudab olla minu sõbrannale, ta ütleb, et see on elementaarne, aga see on ilus. mulle meeldib, et ta teab, mis on NVC ja ta on selle kohta palju uurinud ja mõelnud! mulle meeldib, et ma saan teda usaldada ja talle rääkida oma hingeelu ja raskusi, ta ütleb et me oleme selles koos',
    '08.11 - mulle meeldib, et ma võin Janno varbavahesid katsuda ',
    '09.11 - mulle meeldib, et Jannole meeldib mulle asju teha... ja ta teeb seda väga hästi. ja mulle meeldib, et me saame koos mõelda sauna minemise peale ja et ta märkab ilusaid hetki',
    '10.11 - mulle meeldib, et me saame mõlemad kodust tööd teha koos',
    '11.11 - mulle meeldib, et joome öösel paljalt veini ja vaatame aknast välja',
    '12.11 - mulle meeldib kui Janno ema laua all Janno varvas puudutab minu varvast vaikselt ja salaja. Ja mulle meeldib, et saan sulle baaris joogi tellida ning sa tunned, et sa oled #blessed',
    '13.11 - mulle meeldib, et ma saan hommikul Janno kõrval ärgata peale unerohu võtmist ja mulle meeldib, et me õhtul tahame üksteist taas näha samal ajal. Mulle meeldib kui ta istub maha pesumasina ette, et hambaid pesta ja mulle meeldib hästi kõva häälega naerda ta kõrval nii, et naaber paneb muusikat kõvemaks',
    '14.11 - mulle meeldib, et ma saan talle Torupilli Selverist osta tulukestega jänese ja ta jagab mulle, et tal on 800 ühesendist ja et me sööme hommikuks muna sibulaga tiba tillukestest kaussidest. Ja mulle meeldib kui ma panen end riidesse siis ta suudleb mu rindu, kuna ta teab, et need on tundlikumad kui muidu. Ja mulle meeldib, et sa tead, et ma iga õhtu kirjutan siia midagi, aga sa ei tea veel, et ma kirjutan sinust ja sulle. Ja mulle meeldib, et ta meeldib mulle. ',
    '15.11 - mulle meeldib see, et me räägime, et nõnda tuli välja see, et me mõlemad arvasime, et sügavalt suudlemine on kummagi thing aga tegelikult ei ole kummagi, haha',
    '16.11 - mulle meeldib see, kuidas Janno oskab koondada minu mõtteid ja teha mulle pai, et mul oleks kergem olla.',
    '17.11 - mulle meeldib, et ma saan su öösel üles äratada, et sinuga armatseda.',
    '18.11 - mulle meeldib, et oskame võtta ka oma aja, aga siis ikkagi suhtleme edasi üksteisega',
    '19.11 - mulle meeldib Janno eest vannis hoolitseda ja talle lõigata laime kokteili sisse. Mulle meeldib, et ta näeb ja tunneb ära oma kummitused ning me saame neist rääkida. ',
    '20.11 - mulle meeldib, et saame sõita Lätist Tallinna poole ning koos mõelda kui hea meil oli üksteisega',
    '21.11 - mulle meeldib, kuidas Janno on öösel vaadanud minu videoid ja mulle saatnud kirjelduse, kuidas ta mind näeb. Mulle meeldib, et saame õhtul minna koos PÖFFile. Mulle meeldib, kuidas ta jagab enda instas minu kritseldusi.',
    '22.11 - mulle meeldib tõusta voodist välja umbes kell 18 õhtul koos Jannoga, mulle meeldib kui hästi ta tunneb mu keha, mulle meeldib, et ta küpsetab meile beyond meatiga burgereid',
    '23.11 - mulle meeldib kuidas ta enne lendu teeb mulle palju musisid ja ütleb, et juba igatseb mind.',
    '24.11 - mulle nii meeldib kuidas ta jagab reisimuljeid, on olemas, räägib ja tahab kuulda ka minust isegi kui mul paha tuju ',
    '25.11 - mulle meeldib, et minu konverentsi teemad pakuvad ka talle huvi ja et ma läksin lõunapausil wcsse, et temaga lihtsalt rääkida ja teiste eest peitu pugeda.',
    '26.11 - mulle meeldib, et ta usaldab mind oma korterisse täiesti üksi ja et kui ma saadan talle endast pildi siis ta ütleb ...milline naine.... ',
    '27.11 - mulle meeldis, et ma alustasin päeva sinuga lobisedes, kus ma olin oma peas halvas kohas ja lõpetasin oma päeva sinuga lobisedes, kus ma naeratasin sina peas',
    '28.11 - mulle meeldib, et ta ütleb, et ma olen ta lemmik inimene ja naerab kui ma olen saatnud talle enda väikseid koomikseid, mulle meeldib talle neid saata',
    '29.11 - mulle meeldib, et tal tekivad minust mõeldes ulmelised ideed... ',
    '30.11 - mulle meeldib see, et sa tulid türgist tagasi! sa tõid mulle nii lahedaid kingitusi, nii ilusa kaardipaki',
    '01.12 - me lihtsalt veetsime terve päeva üksteise embuses', 
    '02.12 - sa soovid mulle turvalist sõitu enne kui ma sõidan tallinnasse ',
    '03.12 - sa saadad mulle enda mälestustest pilte kui koristad nõmmel oma tuba, sa jagad minuga oma minevikku, sa annad minu sõbrannale oma miksri  ja mulle paned kõrvale kaardipakke',
    '04.12 - Janno, sa saatsid mulle Tartusse jõulukalendri šokolaadid ja sõitsid viimase rongiga tabiverre, et lihtsalt minuga koos olla, ütlesid mulle ennem, et ma ei sõidaks pimedas',
    '05.12 - tõid poest häid asju mulle ja hermanile, mulle meeldis see kuidas te kelgutasite ja mulle meeldis meie lõuna tabivere kohvikus, millele järgnes -vaikne tund-',
    '06.12 - mulle meeldis sind puudutada tallinn-tartu maanteel ja sinuga pärast hansis lõunat süüa ning sind pärast loodusmuuseumis aidata, sa käid lahedates kohtades ja teed lahedaid asju',
    '07.12 - meie tants tiiule ja robinile purjus peaga sinu juures, me oleme koos nii armsalt totakad nii purjus kui ka kaine peaga',
    '08.12 - aitäh, et lasid mul olla pohmakas ja käisid ise enda emaga lõunal ning pärast tulid mulle seltsi Hansi toiduga. Mulle meeldis sind pesta ja sind tunda enda selja taga ja ees. ',
    '09.12 - janno kinkis mu emale särgi ja see tegi meile mõlemale nii palju rõõmu, aitäh sulle',
    '10.12 - mulle meeldis sinuga laadal käia, meil oli lahe seal, me sobime ja me sobisime sinna. sa kohtusid mu isa ja õega. mulle meeldis, et ma sain sinuga koos redditit lugeda, et sulle pakuvad ka sellised teemad huvi... ',
    '11.12 - mulle meeldis et sa ütlesid et ma olen sulle sellel levelil atraktiivne, et sulle meeldib minu kantud särke kanda kuigi tegelikult sulle ei meeldi kantud särke kanda',
    '12.12 - mulle meeldib, et sa tutvustad mulle enda inimesi ja nad meeldivad mulle ja ma ka neile',
    '13.12 - mulle meeldib, et isegi kui sul on kiire, sa oled hea, lahke, sõbralik ja leiad aega, et mulle jagada',
    '14.12 - sinu kõrval raamatu lugemine. aitäh, et tulid mulle autoga järgi.',
    '15.12 - aitäh, et korraldasid oma emaga lõuna meile -> -saara on niiiii armas-. ja see tunne kui ma vaatan su silma kinos, näen sind ja me naeratame, me lähme poole filmi pealt ära, kuna meil ei ole rohkem vaja. Sa ütlesid mulle nii ilusti õhtul -sinuga on hea väljas käia, sa oled alati nii ilus ja armas- ja mul oli rõõm sulle nalja pakkuda vesteldes taksojuhiga käibefraasides ',
    '16.12 - aitäh, et lased olla mul kes ma olen, et sinu jaoks on minu õnn ja rõõm oluline, et ma olen sinu jaoks prioriteet, minu heaolu. See kuidas me naersime kui sa tõid mu koju ja ma läksin autost välja ja sa ei leidnud mind auto juurest, aga tegelikult olin su akna taga juba. See kuidas sa ütlesid hommikul, et sulle väga meeldis see, et ma müslidest rääkisin, sulle meeldib kuulata kui inimesed on kirglikud millegi osas või nagu nerdid. ',
    '17.12 - veetsime täna koos mu emaga lõuna, sõime klimbisuppi lõpuks kõik koos! jess! mulle nii meeldis, et sa tõid mulle väiksed jõulukarukesed, kuhu peale olid minu nimed kirjutatud... sa teed mulle armsaid kinke ja sa tahad olla osa minu elust, ma lasen sind enda kõige isiklikumasse ruumi, meie vahel on usaldus. Õhtul toimus meie esimene Scrabble lahing!!! mida fakki kui äge mäng meil oli, "harutate" jõudis su TOP punktiskoori lehele!!',
    '18.12 - osalesime täna koos Tallinna disainiturul, mulle nii meeldis olla sulle seal toeks, ma vaatasin sind heldinud pilguga kui su mõttetöö pani inimesed naerma ja kiitsid sind, minu boifriendi',
    '19.12 - mulle meeldis, et sa palud tervitada Hakut ja Edhat kui ma sinu juurest koju läksin',
    '23.12 - tabivere jõuluaeg. mulle meeldis see, kuidas me mängisime 6kesi Scrabblit ja sa tuletasid mulle vaikselt meelde, et mängu eesmärk on, et kõik naudiksid, sa tegid seda nii ilusti ja vaikselt ja see oli oluline, kuna ma ise ei märganud seda. see kuidas peale jõõõõõhkrat päeva sul on ikka energiat minu jaoks',
    '22.12 - käisime täna 3 koeraga jalutamas ja mulle nii meeldis see, kuidas sa olid minuga jalutades koos ning viskasid koertele oksakest; see kuidas me sodisime minu juures kingikarbile ',
    '21.12 - hommikusöögiüllatus ja "biotehaseäriski", appi mu esimene Scrabble võit, sa oled nii hea mängukaaslane',
    '20.12 - täna oli minu päev iseendaga ja sa lasid mul olla, mõistsid mu vajadust teha asju iseendale ja ei võtnud seda isiklikult, elementaarne, aga olen tänulik, et oled kes olid täna',
    '24.12 - meie hommik tabiveres, kuidas sa lõpuks jõudsid alles kolmanda rongi peale. ',
    '25.12 - sinu pervo tuju minuga, see et sul on selline tuju, et see eksisteerib sinus on lahe. sa viid mind maagilisele rännakule. ',
    '26.12 - ärkasin ja jõin su ema tehtud tassist kohvi, olen teretulnud su perre, mis on ilus tunne.',
    '27.12 - tegime täna KÕIKE koos ja ainuke hetk hommikul kui me ei olnud koos, kuna käisin koeri jalutamas, ajasid mul pea täitsa hulluks ja sõitsin kodu ning sinu kodu vahel umbes miljon korda. Peale lõunat tõi su ema meile pirukaid ja me võtsime ta vastu nagu MEIE koju, see oli ilus tunne. Sinu ja Haku saltod minu juures.',
    '28.12 - sa oled jõõõõhkralt hoolitsev kui ma istun sinu WCs vähemalt pool tundi. Sa tuled mulle õhtul külla ja vaatad kauni pilguga mu silmadesse ning ütled, et ma olen ingle, et sa saad nüüd kõigest aru, et mind tuleb hoida. Ma olen nii #blessed sinuga, et just sina näed minus seda. ',
    '29.12 - mulle meeldib kui sa mu temperatuuri mõõdad.',
    '30.12 - Palju õnne sünnipäevaks, mu kallis Janno! Mulle väga meeldis sulle seda veebilehte teha täna kella kolmeni hommikul ja lähen nüüd magama mõeldes kuidas ma selle selle üle annan, head ööd!'
  ];
  
  function shuffleSentences() {
    // Shuffle the array of sentences
    const shuffled = shuffle(sentences);
  
    // Select a random sentence from the shuffled array
    const selected = shuffled[Math.floor(Math.random() * shuffled.length)];
  
    // Display the selected sentence in the display element
    display.textContent = selected;
  }
  
  button.addEventListener('click', shuffleSentences);
  
////

