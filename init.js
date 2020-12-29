(function() { 

/*****************************************/
/*     globale Variablen fuer die App     */
/*****************************************/

var filters = ["Redakteur eines Boulevardmagazins",
               "Kind, das zum ersten Mal heimlich im Internet surft",
               "Inhaber eines erfolgreichen Social Media Accounts",
               "Studierende, die Themen für ihre Bachelorarbeit recherchieren",
               "Marketingabteilung, die nach eine Möglichkeit sucht, ein Startup-Unternehmen zu bewerben",
               "Interessierte werdende Mütter, die im Internet recherchieren",
               "Neuer Bewohner einer Großstadt, der eine Plakatwerbung wahrnimmt",
               "Meinungsführer einer radikalen Gruppe",
               "Senioren, die täglich ihre Zeitung aufmerksam lesen",
               "Autor eines Buches über ein aktuelles politisches Thema",
               "Interviewer, der Schicksale von Menschen betrachtet",
               "Lokalpolitiker, der nach einem Aufhänger für seine bevorstehende Rede sucht"
			   ];
var tipps = ["Benenne den konkreten Ort, an dem das Bild dokumentiert wurde, um überzeugend zu sein.",
             "Versetze dich in beteiligte Personen und überlege dir, warum sie involviert sein könnten.",
             "Welches einschneidende geografische Ereignis könnte auf dem Foto zu sehen sein?",
             "Wie würdest du einem Freund oder einer Freundin von dem Ereignis auf dem Foto berichten? ",
             "Welches Unternehmen könnte in das Geschehen involviert sein?",
             "Verwende viele ausdrucksstarke Adjektive, um deine Story emotional wirken zu lassen.",
             "Verknüpfe deine Story mit einem politischen Ereignis, das zur selben Zeit stattgefunden hat.",
             "Erzähle deine Story aus der Sicht einer konkret betroffenen Person.",
             "Binde in deine Story Namen von konkreten Personen ein.",
             "Berichte von einem Verbrechen, das in Zusammenhang mit dem gezeigten Foto gebracht werden könnte.",
             "Komme auf den Punkt. Erzähle überzeugend und selbstbewusst. Maximal drei Sätze.",
             "Integriere in deine Story eine Moral, die von dem Ereignis abgeleitet werden könnte.",
             "Wer könnte von der Veröffentlichung des Bildes profitieren?",
             "Binde eine Rede in deine Geschichte ein. Was würdest du sagen, wenn du vor einer großen Menschenmenge stehen würdest? ",
             "Mit welcher Intention könnte das Foto veröffentlicht werden?",
             "Erzähle von einer Liebesgeschichte, die im Kontext des Bildes steht.",
             "Nenne viele Details, die deine Geschichte glaubwür-dig erscheinen lassen.",
             "Binde in deine Geschichte die Gefühle involvierter Personen ein.",
             "Aus welchem historischen Kontext könnte das Bild stammen?",
             "Erzähle von einem Hindernis, das überwunden werden konnte, um die Zuhörer deiner Geschichte in deinen Bann zu schlagen.",
             "Nenne die Quellen, aus denen das Foto stammt. Authentische Quellen lassen deine Geschichte überzeugend wirken.",
             "Flechte die Perspektive eines Kindes in deine Geschichte ein.",
             "Verwende möglichst viele Fachbegriffe, um überzeugend zu sein.",
             "Erzähle aus der Ich-Perspektive. Versetze dich in eine involvierte Person hinein. ",
             "Wer könnte das Foto aufgenommen haben? Was hat die Person mit dem Ereignis zu tun?",
             "Wie könnte eine Werbung für das Foto aussehen?",
             "Erzähle so, als wärst du als Reporter beteiligt gewesen.",
             "Binde in deine Geschichte das Schicksal eines Kindes ein, um deine Zuhörer stärker zu berühren.",
             "Nenne ein seriöses Portal, das einen Bericht über das Foto veröffentlicht hat.",
             "Involviere in deine Geschichte einen dramatischen Tod, der schockieren könnte.",
             "Welche Person könnte die Geschichte zum Bild publiziert haben?",
             "Binde eine Heldengeschichte ein.",
             "Erzähle deine Geschichte in im Stile eines Nachrichtenportals und bemühe dich, sachlich zu sprechen.",
             "Welcher Konflikt könnte bezüglich dieses Bildes entstehen?",
             "Nenne Gegenargumente und widerlege sie, um deine Geschichte zu unterstützen.",
             "Verwende Wörter wie „erstmals“ und „plötzlich“.",
             "Nenne mehrere Quellen, die von dem Foto berichtet haben könnten.",
             "Nimm in deine Geschichte offenen Fragen auf.",
             "Gehe genau auf das Bild ein und erläutere anhand von Details, was geschehen ist.",
             "Baue in deine Geschichte Dialoge von Personen ein, die mit dem Bild zu tun haben. ",
             "Erzähle von den Reaktionen, die das Bild ausgelöst hat.",
             "Erzähle deine Geschichte so, dass du auf einen Höhepunkt zusteuerst.",
             "Verwende viele beschreibende Adjektive.",
             "Erzähle von Schicksalen einzelner Personen, die am Ende alle auf ein gemeinsames Schicksal zusteuern."
             ];

/************************************************/
/*                  Start                       */
/************************************************/

document.getElementById("host-button").addEventListener('click',function(){
	//let ownWord = decodeURI(window.location.hash).split('/')[0];
	let index = Math.floor(Math.random() * filters.length);
    let filter = filters[index];
	
    document.getElementById("info-div").innerHTML = "<h3>Du bist die Zielgruppe:</h3><br> <p>"+filter+"</p>";
});

document.getElementById("autor-button").addEventListener('click',function(){
	let index1 = Math.floor(Math.random() * tipps.length);
    let tipp1 = tipps[index1];
	let index2 = Math.floor(Math.random() * tipps.length);
    let tipp2 = tipps[index2];
	
    document.getElementById("info-div").innerHTML = "<h3>Baue mind. einen Tipp in deine Geschichte ein</h3><br> <p>"+tipp1+"</p><br><p>"+tipp2+"</p>";
});

/************************************************/
/*                  Ende                        */
/************************************************/

}) ();
