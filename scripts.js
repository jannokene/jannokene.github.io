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
    'tabivere jõuluaeg. mulle meeldis see, kuidas me mängisime 6kesi Scrabblit ja sa tuletasid mulle vaikselt meelde, et mängu eesmärk on, et kõik naudiksid, sa tegid seda nii ilusti ja vaikselt ja see oli oluline, kuna ma ise ei märganud seda. see kuidas peale jõõõõõhkrat päeva sul on ikka energiat minu jaoks. ',
    '22.12 - käisime täna 3 koeraga jalutamas ja mulle nii meeldis see, kuidas sa olid minuga jalutades koos ning viskasid koertele oksakest; see kuidas me sodisime minu juures kingikarbile ',
    '21.12 - hommikusöögiüllatus ja "biotehaseäriski", appi mu esimene Scrabble võit, sa oled nii hea mängukaaslane',
    '20.12 - täna oli minu päev iseendaga ja sa lasid mul olla, mõistsid mu vajadust teha asju iseendale ja ei võtnud seda isiklikult, elementaarne, aga olen tänulik, et oled kes olid täna',
    '19.12 - mulle meeldis, et sa palud tervitada Hakut ja Edhat kui ma sinu juurest koju läksin',
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
  