function getURL(location,lvl,chair) {
    // aktuelle URL laden
    const url = new URL(window.location);

    // rueckgabeobjekt definieren
    url_params = {
        'location': false,
        'lvl':      false,
        'chair':    false
    };
    // params holen
    if (location !== false) {
        loc = url.searchParams.get("location");
        if(loc && loc !== '') {
            url_params['location'] = loc;
        }
    }

    if (lvl !== false) {
        l = url.searchParams.get("lvl");
        if(l && l !== '') {
            url_params['lvl'] = l;
        }
    }

    if (chair !== false) {
        c = url.searchParams.get("chair");
        if(c && c !== '') {
            url_params['chair'] = c;
        }
    }

    return url_params;
}

function setURL(location,lvl,chair,refresh) {
    // aktuelle URL laden
    const url = new URL(window.location);
    // gewuenschte Parameter setzen
    if (location !== false) {
        url.searchParams.set("location", location);
    }
    if (lvl !== false) {
        url.searchParams.set("lvl", lvl);
    }
    if (chair !== false) {
        url.searchParams.set("chair", chair);
    }
    // URL überschreiben (ohne reload)
    window.history.replaceState({}, '', url);
    // wenn gewuenscht Seite neuladen
    if (refresh) {
        window.location.reload();
    }
}

function isMobile() {
    // gibt TRUE zurueck, wenn mobiles Geraet identifiziert wird
    return /(android|bb\d+|meego).+mobile|android|ipad|playbook|silk|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4));
	}

function copy_share() {
    // TODO
    pos = getURL(true,true,true);
    if (pos['location'] !== false && pos['lvl'] !== false && pos['chair'] !== false) {
        text = "Ich sitze in der "+pos['location']+"-Bib in der Etage "+pos['lvl']+" an Platz "+pos['chair'];
        const url = new URL(window.location);
        if (isMobile()) {
            // share-funktion
            navigator.share({'text': text,'url':url.href}).then(() => {
                console.log('shared location');
              },() => {
                console.error('Failed to call share-mechanism');
              });
        }
        else {
            // copy-funktion
            navigator.clipboard.writeText(text + " - " + url.href).then(() => {
                console.log('copied location');
                document.getElementById('btn_cp').style.backgroundColor = 'green';
                setTimeout(() => {
                    document.getElementById('btn_cp').style.backgroundColor = 'unset';
                }, 1000);
              },() => {
                console.error('Failed to copy');
              });
        }
    }
}

function whereami(event) {
    chair = event.target;
    console.log(chair.id);

    // Farbe eines u.U. vorher ausgewaehlten Stuhls zuruecksetzen
    try {
        oldchair = getURL(false,false,true)['chair'];
        if (oldchair !== false) {
            document.getElementById(oldchair).style.fill = "#0000ff";
        }
    }
    catch(err) {
        console.log("konnte in url hinterlegten Stuhl nicht finden.")
    }

    setURL(getURL(true,false,false)['location'],false,chair.id,false)
    // TODO: muss ich hier auch lvl angeben???

    // gewaehlten Stuhl hervorheben
    document.getElementById(chair.id).style.fill = "#ff009b";

    // bannertext aktualisieren
    document.getElementById("location_text").innerHTML = "Sitzplatz: " + getURL(true,false,false)['location'] + ":\t" + chair.id;

}

function initDialog() {
    const showButton = document.querySelector("#btn_sel_bib");
    const favDialog = document.getElementById("dialog_bib");
    const selectEl = favDialog.querySelector("select");
    const confirmBtn = favDialog.querySelector("#dialog_conf");

    // "Show the dialog" button opens the <dialog> modally
    showButton.addEventListener("click", () => {
    favDialog.showModal();
    });

    // "Cancel" button closes the dialog without submitting because of [formmethod="dialog"], triggering a close event.
    favDialog.addEventListener("close", (e) => {
        if (favDialog.returnValue != "cancel") {
            setURL(favDialog.returnValue,"","",true);
        }
    });

    // Prevent the "confirm" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
    confirmBtn.addEventListener("click", (event) => {
    event.preventDefault();
    favDialog.close(selectEl.value);
    });
}

function init() {
    // alle Stuehle mit click-event ausstatten
    var elements = document.getElementsByClassName("rect_chair");
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', whereami, false);
    }
    // Stuhl (wenn vorhanden) hervorheben
    try {
        chair = getURL(false,false,true)['chair'];
        chair_color = document.getElementById(chair).style.fill;
        if (chair !== false && (
                chair_color == "#0000ff" || 
                chair_color == "#ff009b" ||
                chair_color == "rgb(0, 0, 255)" ||
                chair_color == "rgb(255, 0, 155)")) {
            document.getElementById(chair).style.fill = "#ff009b";
            document.getElementById("location_text").innerHTML = "Sitzplatz: " + getURL(true,false,false)['location'] + ":\t" + chair;
        }
    }
    catch(err) {
        console.log("konnte in url hinterlegten Stuhl nicht finden.")
    }
    // Dialog zur Bib-Auswahl definieren
    initDialog();
}

function lvlUpDown(updown) {
    lvl = getURL(false,true,false)['lvl'];
    if (lvl !== false && Number(lvl) !== NaN) {
        lvl = Number(lvl);
        if (updown) {
            setURL(false,lvl+1,false,true);
        }
        else {
            if (lvl-1 > -1) {
                setURL(false,lvl-1,false,true);
            }
        }
    }
}

/*
// dakrmode kommt später

function darkmode() {
    // background-color auf schwarz
    document.querySelector('body').style.backgroundColor = "#000000"

    // alle schwarzen elemente auf weiß
    const rects = document.querySelectorAll('[id^="rect"]');
    for (var i = 0; i < rects.length; i++) {
        rect_id = String(rects[i]).split("#")[1];
        if (document.getElementById(rect_id).style.fill == "#000000") {
            document.getElementById(rect_id).style.fill == "#FFFFFF";
        }
    }
}


*/