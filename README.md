# M450-lb3

- [M450-lb3](#m450-lb3)
- [1 Einleitung](#1-einleitung)
- [Programmcode](#programmcode)
- [3 Tool Auswahl](#3-tool-auswahl)
  - [3.1 Selenium](#31-selenium)
  - [3.2 Playwright](#32-playwright)
  - [3.3 Puppeteer](#33-puppeteer)
  - [3.4 Browserstack](#34-browserstack)
    - [Vorteile durch Browserstack](#vorteile-durch-browserstack)
    - [Nachteile durch Browserstack](#nachteile-durch-browserstack)
- [4. Testen unserer Applikation](#4-testen-unserer-applikation)
- [Vergleich der Testroboter](#vergleich-der-testroboter)
  - [4.1 Selenium](#41-selenium)
  - [4.2 Playwright](#42-playwright)
  - [4.3 Puppeteer](#43-puppeteer)
- [5. Fazit](#5-fazit)
- [6. Reflexion](#6-reflexion)
- [7. Bonus Schwachstelle](#7-bonus-schwachstelle)


# 1 Einleitung

Testroboter haben die Aufgabe, die Qualität der Software zu überprüfen. Testroboter folgen
einer vorgegebenen Liste von Tests. Dabei führen sie bestimmte Aktionen aus (z.B. klicken
auf einen Button) und überprüfen anschliessend das Ergebnis. Dabei sind Testroboter
präziser und schneller, als wenn die Tests von Hand ausgeführt werden.
Wir haben uns für dieses Thema entschieden, weil wir automatisierte Tests und Testroboter
spannend finden. Ausserdem hatten war schon ein wenig Erfahrung mit Selenium
vorhanden.

# Programmcode
Als Grundlage haben wir uns dazu entschieden, unseren [Stundenplan](https://stundenplan.bbzbl-it.dev) zu verwenden. Dabei
handelt es sich um eine verbesserte Implementierung des offiziellen [BBZBL Stundenplan](https://bbzbl.ch/stundenplan).

# 3 Tool Auswahl
In diesem Projekt haben wir uns 3 verschiedene Testroboter ausgesucht und deren Vor- und
Nachteile verglichen. Dabei handelt es sich um folgende Testroboter:

## 3.1 Selenium
Selenium ist vermutlich der bekannteste Testroboter. Er ist Open-Source und kann mit
enorm vielen Programmiersprachen wie z.B. Python, Java usw. verwendet werden.
Ebenfalls unterstützt Selenium viele verschiedene Browser. Selenium kann auf Windows,
Linux, MacOS und sogar Solaris verwendet werden. Daneben bietet Selenium ebenfalls eine
IDE an, welche wir in diesem Projekt allerdings nicht verwendet haben. Selenium hat eine
grosse Community und viele Ressourcen, mit denen man sich einfach einarbeiten kann. In
unserem Fall haben wir Selenium mit Python verwendet.

## 3.2 Playwright
Playwright ist eine relativ neue Open-Source-Bibliothek zum Testen von Webanwendungen.
Sie wird von Microsoft entwickelt und unterstützt verschiedene Programmiersprachen,
darunter JavaScript, TypeScript, Python und C#. Playwright benötigt im Gegensatz zu
Selenium keine externen Webdriver, da diese bereits in der Bibliothek enthalten sind.
Playwright unterstützt die Browser Chromium, Firefox und WebKit und kann auf Windows,
Linux und Mac OS eingesetzt werden.


## 3.3 Puppeteer
Puppeteer ist eine weitere Open-Source-Bibliothek für das automatisierte Testen von
Webanwendungen. Sie wird von Google entwickelt und unterstützt nur JavaScript.
Puppeteer ist vor allem bekannt für seine Fähigkeit, Screenshots und PDFs von Webseiten
zu erstellen. Man kann genau so wie mit Playwright ebenfalls moderne Web-Frameworks
testen. Puppeteer unterstützt grundsätzlich nur Chromium, allerdings kann durch die
Verwendung von Browserstack auch Safari und Firefox verwendet werden.


## 3.4 Browserstack
[BrowserStack](https://browserstack.com/) bietet Entwicklern eine cloudbasierte Testplattform, um ihre Websites und
mobilen Anwendungen auf diversen Betriebssystemen und Geräten zu testen. Es ermöglicht
sowohl manuelle als auch automatisierte Tests. Browserstack unterstützt über 3000+
verschiedene Geräte und Browser.

Wir haben in unserem Fall unsere Tests mit Browserstack durchgeführt. Dabei funktioniert
das Ganze genau so wie lokale Tests mit dem Unterschied, dass die Tests auf Servern von
[Browserstack](https://www.browserstack.com/automate) ausgeführt werden.

Dabei kann man einfach eine Website über einen Browser auf einem externen Gerät testen,
ohne dieses Gerät selber zu besitzen. Das grossartige daran ist, dass Browserstack sogar
mobile Geräte unterstützt, wodurch wir unsere Tests auch auf iOS und Android Geräten
testen konnten.
Zudem erstellt Browserstack am Ende eines Tests einen Report mit allen Informationen zu
den Tests, inklusive Screenshots / Videoaufnahme. Dadurch kann man sehr einfach
nachvollziehen, was bei einem Test schief gelaufen ist.

### Vorteile durch Browserstack
- Tests über verschiedene Browser / Betriebssysteme / Geräte
- Einfache Integration in CI/CD Pipeline
- Isolierte Umgebung für Tests - Keine Abhängigkeiten zu anderen Programmen
- Übersichtliche Reports mit Screenshots / Logs und Videos
- Testen auf echten Geräten (die Testgeräte auf Browserstack sind echte Geräte und
keine Emulatoren)
### Nachteile durch Browserstack
- Kostenpflichtig. Die Benutzung von Browserstack ist mit eher hohen Kosten
verbunden. Um automatisierte Tests durchführen zu können, muss man ca. 250 CHF
im Monat bezahlen.

# 4. Testen unserer Applikation

In unserem Fall haben wir jeweils vier verschiedene Tests durchgeführt:
1. Testen, ob die Webseite lädt.
2. Testen, ob die Willkommensnachricht angezeigt wird und sie anschliessend temporär
ausgeblendet wird.
3. Testen, ob die Willkommensnachricht angezeigt wird und sie anschliessend
permanent ausgeblendet wird.
4. Testen, ob der Button “Today” funktioniert.
Dabei haben wir die Tests mit Selenium, Playwright und Puppeteer durchgeführt. Die

Resultate sind unter den folgenden Links zu finden:


1. [Selenium](https://automate.browserstack.com/dashboard/v2/public-build/enRBakNqeTRFWklBUk95Mm1ESUowSFJmTzFwR0RXLytnQ1lRSXVadVJEL3lnTFdlSlpqalFPQVZKZnlBZDh3ZVdoSjgwTzBVT0FPUUhBU3M1eTE3ZlE9PS0tMHlaV3NxMm1hTHNNZG5rK2Uxck1Fdz09--db9b9392b9479dd926cad82aa03a7fc2c17b10c9)
2. [Playwright](https://automate.browserstack.com/dashboard/v2/public-build/eXJ6cnBPOW0xTEhlbXlxVk5UT1N6TUcxVkdDaHpvS1h4b3BhaEpRMllwdG0rWVgyVzgwR3dMWVFRUVRIczZqQk1yUlgyMDhteWFqZWN1NEYzVFc4M1E9PS0tUzg0OWc2bnNhcG96aDVWbVRKWlk0UT09--033a4376aafe3e2d910f77fa9fdc7bf1cc5ad26f)
3. [Puppeteer](https://automate.browserstack.com/dashboard/v2/public-build/dlByUCsxM3dSZlRzVm9RbEgwU3JENGRUcFZ3am9ZWFk0VUY3WGcvLzdTNlVQRGcyOTI3Qi9OOTJWaEplUUNpTTYxM0U3b05PZmVQbkRWSGprZGVaQmc9PS0tSUVPbElhRFlPR1B4M29VY1Qwakg5QT09--d314b5b443baf203073c6c7cd4d2a7edb744039c)

# Vergleich der Testroboter

## 4.1 Selenium
Selenium war bei den Tests unser persönlicher Favorit. Es ist sehr einfach zu verwenden,
hat eine sehr gute Dokumentation und hinter der Testsoftware steht eine grosse Community.
Die Integration mit Browserstack war sehr einfach und ebenfalls gut dokumentiert.

Zudem ist Selenium auch das einzige Framework auf Browserstack, welches auch in allen
Programmiersprachen das Testen auf mobilen Geräten unterstützt. Es unterstützt zudem
alle Betriebssysteme ab Windows XP (Release 2001) und Mac OS Snow Leopard (Release
2009). Bezüglich dem Thema Browsersupport ist Selenium auch klar der Gewinner. Es
unterstützt alle gängigen Browser wie Chrome, Firefox, Safari, Edge und zusätzlich auch
etwas ältere / unbeliebtere Browser wie IE und Opera.

<table>
  <tr>
   <td>Kriterium

   </td>
   <td>Bewertung

   </td>
   <td>Bemerkung

   </td>
  </tr>
  <tr>
   <td>Device Support

   </td>
   <td>★★★★★

   </td>
   <td>-

   </td>
  </tr>
  <tr>
   <td>Ressourcen & Dokumentation

   </td>
   <td>★★★★★

   </td>
   <td>-

   </td>
  </tr>
  <tr>
   <td>Lernkurve

   </td>
   <td>★★★★☆

   </td>
   <td>Sehr einfach zu lernen, allerdings werden gewisse Funktionen komplizierter gelöst als bei alternativen Frameworks

   </td>
  </tr>
  <tr>
   <td>Setup

   </td>
   <td>★★★★☆ 

   </td>
   <td>Webdriver sind nicht im Sourcecode enthalten, was durchaus Vorteile haben kann, allerdings verkompliziert dass das Setup

   </td>
  </tr>
</table>

## 4.2 Playwright
Playwright funktioniert grundsätzlich sehr ähnlich wie Selenium. Ein sehr nützliches Feature an Playwright ist, dass es keine externen Webdriver benötigt und ebenfalls headless funktioniert. Dieses Feature war zwar bei unserem Projekt nicht relevant, allerdings kann es vor allem in CI/CD Pipelines sehr nützlich sein.

Der Support der Betriebssysteme in Browserstack ist dafür leider nicht so gut wie bei Selenium. Es unterstützt Windows erst ab der Version Windows 10 und bei MacOS aber der Version Mojave. Zudem unterstützt es auch nur die Browser Safari, Chrome und Firefox und Edge. Allerdings sollte dies für die meisten Projekte problemlos ausreichen.

Ein grosser Vorteil von Playwright gegenüber Selenium ist, dass es sehr einfach ist, mit Playwright abzuwarten, bis ein Element auf der Webseite geladen ist, während man bei Selenium jedes Mal darauf testen muss, ob ein Element nach einer Aktion bereits geladen ist.



```python
# Selenium
driver.get("https://stundenplan.bbzbl-it.de/")
WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, "myDynamicElement")))

# Playwright
page.goto('https://stundenplan.bbzbl-it.de/', wait_until='domcontentloaded') # Wait until page is loaded
```


<table>

   <td>Kriterium

   </td>
   <td>Bewertung

   </td>
   <td>Bemerkung

   </td>
  <tr>
   <td>Device Support

   </td>
   <td>★★★☆☆

   </td>
   <td>Keine Mobile Devices, nur neuere Betriebssysteme

   </td>
  </tr>
  <tr>
   <td>Ressourcen & Dokumentation

   </td>
   <td>★★★★☆

   </td>
   <td>Community ist deutlich kleiner als die von Selenium

   </td>
  </tr>
  <tr>
   <td>Lernkurve

   </td>
   <td>★★★★☆

   </td>
   <td>Anfänglich etwas schwer allerdings sehr einfach zu lernen

   </td>
  </tr>
  <tr>
   <td>Setup

   </td>
   <td>★★★★★

   </td>
   <td>Webdriver sind nicht im Sourcecode enthalten, was durchaus Vorteile haben kann, allerdings verkompliziert dass das Setup

   </td>
  </tr>
</table>


## 4.3 Puppeteer
Puppeteer ist ein JavaScript-Framework, das sich problemlos in JS-Projekte integrieren lässt. Der Betriebssystem-Support in Browserstack ist im Vergleich zu Playwright etwas besser und umfasst Windows 7 und Mac OS El Capitan ab der Version. Ein Nachteil von Puppeteer besteht jedoch darin, dass es Safari nicht unterstützt, was beim Testen von Websites, die sich auf Safari anders verhalten als auf Chrome oder Firefox, zu Einschränkungen führt.

Trotzdem zeichnet sich Puppeteer durch seine Benutzerfreundlichkeit aus. Die direkte Handhabung ist besonders positiv. Allerdings ist es bedauerlich, dass die Integration mit Browserstack nicht über ein SDK, sondern manuell erfolgen muss. In meinem Fall musste ich eine eigene Run-Funktion erstellen, die die Tests durchführt. Anschließend wartet sie darauf, dass die Tests abgeschlossen sind, schließt den Browser und startet den nächsten Test.


```javascript
async function run() {
  for (const cap of capabilities) {
    
    cap['browserstack.username'] = process.env.BROWSERSTACK_USERNAME;
    cap['browserstack.accessKey'] = process.env.BROWSERSTACK_ACCESS_KEY;

    console.log(`Running test on ${cap.os} ${cap.os_version} ${cap.browser} ${cap.browser_version}`);
    
    const browser = await puppeteer.connect({
      browserWSEndpoint: `wss://cdp.browserstack.com/puppeteer?caps=${encodeURIComponent(JSON.stringify(cap))}`, 

      defaultViewport: { width: 1100, height: 768}
    },);
  
    await main(browser);

    await browser.close();

    console.log(`Test finished on ${cap.os} ${cap.os_version} ${cap.browser} ${cap.browser_version}`);
  }
}
```


<table>
  <tr>
   <td>Kriterium
   </td>
   <td>Bewertung
   </td>
   <td>Bemerkung
   </td>
  </tr>
  <tr>
   <td>Device Support
   </td>
   <td>★★★☆☆
   </td>
   <td>Ausreichender Betriebsystem Support allerdings kein Safari
   </td>
  </tr>
  <tr>
   <td>Ressourcen & Dokumentation
   </td>
   <td>★★★★☆
   </td>
   <td>-
   </td>
  </tr>
  <tr>
   <td>Lernkurve
   </td>
   <td>★★★★★
   </td>
   <td>-
   </td>
  </tr>
  <tr>
   <td>Setup
   </td>
   <td>★★★★★
   </td>
   <td>-
   </td>
  </tr>
</table>



# 5. Fazit

In unserem Fall war Selenium der klare Gewinner. Es ist extrem einfach zu verwenden und hat eine sehr gute Dokumentation. Zudem lässt es sich durch Browserstack auch einfacher mit mobilen Geräten verwenden.

Nichts desto trotz sind auch Playwright und Puppeteer sehr gute Frameworks. Sie sind beide relativ einfach zu verwenden und sind ebenfalls gut dokumentiert.

Wenn man eine hohe Abdeckung an verschiedenen Browsern und Geräten benötigt, sollte man definitiv Selenium verwenden. Ansonsten ist es hauptsächlich eine Frage des persönlichen Geschmacks und der Vorkenntnisse im Projektteam.

# 6. Reflexion
Wir konnten in dieser Projektarbeit die verschiedensten Testroboter verwenden und miteinander vergleichen. Dabei haben wir erste Eindrücke von den Testrobotern erhalten, was uns dabei helfen wird, in einer zukünftigen Projektarbeit einen Testroboter auszuwählen, mit dem wir gut und effizient arbeiten können.

Wir konnten in dieser Projektarbeit zusätzlich ebenfalls erste Eindrücke zum Automatisieren von Cross-Platform-Tests auf Browserstack erhalten. Wir finden die Idee hinter Browserstack sehr gut und denken, dass es definitiv einen grossen Vorteil hat, seine Testroboter mithilfe von Browserstack auszutesten. 


# 7. Bonus Schwachstelle

Wir haben versucht, möglichst herauszufinden, wo die Grenzen von den einzelnen Frameworks liegen. Dabei haben wir bei Selenium und Puppeteer keine Einschränkungen / Schwachstellen gefunden. Bei Playwright sieht es allerdings ein wenig anders aus.

Playwright selber hat keine Schwachstelle, allerdings das SDK von Browserstack. Dieses SDK hat eigentlich die Aufgabe, die Tests mit dem Remote Browser zu verbinden. Dies funktioniert grundsätzlich auch einwandfrei. Das Problem besteht nur darin, dass Playwright ein Standard-Timeout besitzt. Dies ist auch gut in der [Dokumentation](https://playwright.dev/python/docs/api/class-browsertype#browser-type-connect-over-cdp) ersichtlich.  Bei der connect_over_cdp Methode liegt dieses Timeout bei ganzen 30 Sekunden. Normalerweise macht dies durchaus Sinn, da 30 Sekunden mehr als ausreichend sein sollten, um einen Browser zu verbinden. Das Problem liegt nun darin, dass man bei Browserstack nur eine bestimmte Anzahl an parallel laufenden Browsern haben darf (In unserem Fall ist das ein Browser). Alle weiteren Startversuche werden in eine Queue gestellt, wo diese auch bleiben, bis der vorherige Browser geschlossen wurde. 

Das SDK versucht am Anfang von den Tests alle Browser zu starten und zu verbinden. Da nur ein Browser starten kann, können sich die anderen Browser nun nicht verbinden. Nach Ablauf der 30 Sekunden wird dann ein Fehler ausgeworfen, wodurch die Tests fehlschlagen. 

Das Problem kann man auf den folgenden zwei uns bekannten Arten Lösen:
Man kauft sich mehr parallele Browser → Was mit sehr hohen Kosten verbunden ist.
Man eröffnet einen Issue bei Browserstack in der Hoffnung, dass dieses Problem im SDK gelöst wird.

Wir haben uns für zweiteres entschieden und hoffen, dass dadurch anderen Personen das lange Debuggen erspart bleibt. 
