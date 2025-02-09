# FAQ zu Biblimap
Biblimap ist ein kleines Tool, welches unter möglichst wenig Entwicklungsaufwand einen gewissen Nutzen erbringen soll: Die Anzeige des Sitzplatzes, auf dem mensch in der Bib sitzt.

### Fragen (und Antwtorten)

#### Warum sind nicht alle Leipziger Bibliotheken vorhanden?

Um Grundrisse hier im Tool anzeigen zu können, braucht es.... die Grundrisse. Diese muss ich raussuchen, oder selbst erstellen. Das braucht Zeit. Eröffne gerne ein Issue auf GitHub, wenn du Beitragen, oder mir mitteilen willst, dass ein Grundriss fehlt.

#### Kannst du Bibliothek XY ergänzen?

Du kannst dazu gerne ein Issue auf GitHub eröffnen. Noch besser wäre es, wenn du Bibliotheken anfragen könntest uns die Grundrisse zu geben, damit wir sie hier einbinden können.

#### Ich habe einen Fehler gefunden!

Bitte eröffne ein Issue auf GitHub, wenn es noch kein\*e Andere\*r gemacht hat. Danke!

#### Folgendes Feature fehlt: XY!

Bitte eröffne ein Issue auf GitHub, wenn es noch kein\*e Andere\*r gemacht hat. Danke!

#### Ich möchte das Projekt für eine andere Universität / Stadt nutzen

Auf GitHub liegt der Source Code dieses Projekts. Feel free es weiterzuverwenden. Eine gute Doku gibt es derzeit noch nicht, aber ich helfe gerne weiter.

### Über die Implementierung

Die Umsetzung ist sehr einfach gehalten. Keine Frameworks, keine Berechnungen im Backend. Nur HTML, CSS und JavaScript (leider) auf einem Apache2-Server.

Es erfolgt auch kein Webtracking und keine Werbung, es gibt keine Cookies und keine Anfragen zu anderen Servern. Toll, oder? Allerdings gibbt es natürlich Logfiles auf den Servern, in welchen einige Daten temporär gesammelt werden. Siehe Datenschutzerklärung.

Falls jemensch Lust hat die jquery-Nutzung und die Nutzung von SVG-ViewBoxen zu optimieren, würde ich mich freuen. Schätzungsweise sind 50% des Codes bloat und können weg.

### Hilfebereich

Falls als Webserver Apache2 zum Einsatz kommt, kann es sein, dass der symlink von /icons zu /usr/share/apache2/icons/ in der Datei "/etc/apache2/mods-available/alias.conf" angepasst werden muss, da es sonst zu Umleitungsfehlern kommt. Ich habe in der Datei den Eintrag zu /apache-icons geändert und mit systemctl restart apache2 den service neugestartet.