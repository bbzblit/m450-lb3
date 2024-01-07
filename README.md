# M450-lb3

# Einführung

Testroboter haben die Aufgabe die Qualität von Software zu überprüfen. Testroboter folgen einer vorgegebenen Liste von Tests. Dabei führen sie bestimmte Aktionen aus (z.B klicken auf einen Button) und überprüfen anschliessend das Ergebnis. 
Dabei sind Testroboter präzizer und schneller als wenn die Tests von Hand ausgeführt werden.

In diesem Projekt haben wir uns 3 verschiedene Testroboter angeschaut und deren Vor- und Nachteile verglichen. Dabei handelt es sich um folgende Testroboter:

## 1. Selenium
Selenium ist vermutlich der bekannteste Testroboter. Er ist Open Source und kann für verschiedene Programmiersprachen verwendet werden. Selenium kann auf extrem vielen Programmiersprachen wie Python, Java usw verwendet werden. Ebenfalls supported Selenium viele Verschiedene Browser. Selenium kann auf Windows, Linux, Mac Os und sogar Solaris verwendet werden. Selenium bietet ebenfalls eine IDE an, welche wir allerdings in diesem Projekt nicht verwendet werden. Selenium hat eine grosse Comunity und viele Resourcen mit denen man sich einfach einarbeiten kann. In unserem Fall haben wir Selenium mit Python verwendet. 

## 2. Playwright

Playwright ist eine relativ neue Open-Source-Bibliothek zum Testen von Webanwendungen. Sie wird von Microsoft entwickelt und unterstützt verschiedene Programmiersprachen, darunter JavaScript, TypeScript, Python und C#. Playwright benötigt im Gegensatz zu Selenium keine externen Webdriver, da diese bereits in der Bibliothek enthalten sind. Playwright unterstützt die Browser Chromium, Firefox und WebKit und kann auf Windows, Linux und Mac OS eingesetzt werden.

## 3. Puppeteer
Puppeteer ist eine weitere Open-Source-Bibliothek für das automatisierte Testen von Webanwendungen. Sie wird von Google entwickelt und unterstützt nur JavaScript. Puppeteer ist vor allem bekannt für seine Fähigkeit, Screenhots und PDFs von Webseiten zu erstellen. Wie Playwright kann es auch moderne Web-Frameworks testen. Puppeteer unterstützt grundsätzlich nur Chromium. Durch die Verwendung von Browserstack kann es allerdings auch mit Safari und Firefox verwendet werden. 

# Browserstack
[BrowserStack](https://browserstack.com/) bietet Entwicklern eine cloudbasierte Testplattform, um ihre Websites und mobilen Anwendungen auf verschiedenen Betriebssystemen und Geräten zu testen. Es ermöglicht sowohl manuelle als auch automatisierte Tests. Browserstack unterstützt über 2000 verschiedene Browser und Geräte.

Wir haben in unserem Fall unsere Tests mit Browserstack durchgeführt. Dabei funktioniert das ganze genau so wie lokale Tests mit dem Unterschied, dass die Tests auf Servern von Browserstack ausgeführt werden. 

https://www.browserstack.com/automate

Dabei kann man einfach eine Website über mehrere Browser / Betriebsystem testen ohne diese selber zu besitzen. Das coole daran ist, dass Browserstack sogar mobile Geräte unterstützt. Wodurch wir unsere Tests auch auf IOs und Android Geräten ausführen konnten.

Zudem erstellt Browserstack am Ende eines Tests einen Report mit allen Informationen zu den Tests inklusive Screenshots/Video. Dadurch kann man extrem einfach nachvollziehen, was bei einem Test schief gelaufen ist. 

## Vorteile durch Browserstack
1. Tests über verschiedene Browser / Betriebsysteme / Geräte
2. Einfache Integration in CI/CD Pipeline
3. Isolierte Umgebung für Tests - Keine Abhängigkeiten zu anderen Programmen
4. Übersichtliche Reports mit Screenshots / Logs und Videos
5. Testen auf echten mobilen Geräten (die Iphones usw. auf Browserstack sind echte Geräte und keine Emulatoren)

## Nachteile durch Browserstack
1. Kostenpflichtig. Browserstack kommt mit hohen Kosten. Um Automatisierte Tests durchführen zu können muss man ca 250 CHF pro Monat bezahlen. 

# Testen der Applikation

In unserem Fall haben wir 4 verschiedene Tests durchgeführt

1. Testen ob die Webseite lädt
2. Testen ob die Welcome Message angezeigt wird und sie anschliessend temporär ausgeblendet wird
3. Testen ob die Welcome Message angezeigt wird und sie anschliessend permanent ausgeblendet wird
4. Testen ob der Button "Today" funktioniert

Dabei haben wir die Tests mit Selenium, Playwright und Puppeteer durchgeführt. 
Die Resultate sind unter folgendem Link zu finden:

1. [Selenium](https://automate.browserstack.com/dashboard/v2/public-build/enRBakNqeTRFWklBUk95Mm1ESUowSFJmTzFwR0RXLytnQ1lRSXVadVJEL3lnTFdlSlpqalFPQVZKZnlBZDh3ZVdoSjgwTzBVT0FPUUhBU3M1eTE3ZlE9PS0tMHlaV3NxMm1hTHNNZG5rK2Uxck1Fdz09--db9b9392b9479dd926cad82aa03a7fc2c17b10c9)
2. [Playwright](https://automate.browserstack.com/dashboard/v2/public-build/eXJ6cnBPOW0xTEhlbXlxVk5UT1N6TUcxVkdDaHpvS1h4b3BhaEpRMllwdG0rWVgyVzgwR3dMWVFRUVRIczZqQk1yUlgyMDhteWFqZWN1NEYzVFc4M1E9PS0tUzg0OWc2bnNhcG96aDVWbVRKWlk0UT09--033a4376aafe3e2d910f77fa9fdc7bf1cc5ad26f)
3. [Puppeteer](https://automate.browserstack.com/dashboard/v2/public-build/dlByUCsxM3dSZlRzVm9RbEgwU3JENGRUcFZ3am9ZWFk0VUY3WGcvLzdTNlVQRGcyOTI3Qi9OOTJWaEplUUNpTTYxM0U3b05PZmVQbkRWSGprZGVaQmc9PS0tSUVPbElhRFlPR1B4M29VY1Qwakg5QT09--d314b5b443baf203073c6c7cd4d2a7edb744039c)

# Vergleich der Testroboter

Die verschiedenen Frameworks liesen sich grundsätzlich alle sehr einfach einrichten. Dabei war es bei Selenium am einfachsten, auch Puppeteer ging relative einfach wobei es bei Puppeteer allerdings etwas mehr an Konfiguration brauchte. Playwright war am schwierigsten einzurichten. Zwar funktioniert es, allerdings hat die Browserstack Integration anfangs nicht fehlerfrei funktioniert. Jedoch konnte dieses Problem durch etwas Recherche gelöst werden.

## Selenium
Selenium war bei dem Tests unser persönlicher Favorit. Es ist extrem einfach zu verwendet, hat eine sehr gute Dokumentation und eine grosse Community.

Die Integration mit Browserstack war sehr einfach und gut Dokumentiert.

Zudem ist Selenium auch das einzige Framework auf Browserstack, welches auch in allen Programmiersprachen das Testen auf mobilen Geräten unterstützt. Es hat auch den grössten Support an verschiedenen Browsern. Es supported alle Betriebsysteme ab Windows XP (Release 2001) und Mac OS Snow Leopard (Release 2009).

Beim Thema Browsersupport ist Selenium auch klar der Gewinner. Es unterstützt alle gängigen Browser wie Chrome, Firefox, Safari, Edge und zusätzlich auch etwas ältere/unbeliebtere Browser wie IE und Opera.

## Playwright
Playwright funktioniert grundsätzlich sehr ähnlich wie Selenium. 
Ein sehr cooles Feature an Playwright ist, dass es keine externen Webdriver benötigt und ebenfalls auch headless funktioniert. Dieses Feature war zwar bei unserem Projekt nicht relevant, allerdings kann es vor allem in CI/CD Pipelines sehr nützlich sein.

Der Support von Betriebsystem in Browserstack ist dafür leider nicht so gut wie bei Selenium. Es unterstützt nur ab der Version Windows 10 und Mac OS Mojave. Zudem supportet es auch nur die Browser Safari, Chrome und Firefox und Edge. Allerdings sollte dies für die meisten Projekte problemlos ausreichen.

Ein grosser Vorteil von Playwright gegenüber Selenium ist, dass es sehr einfach ist mit Playwright abzuwarten bis ein Element auf der Webseite geladen ist. Während man bei Selenium jedes Mal darauf testen muss, ob ein Element nach einer Aktion bereits geladen ist, ist dies bei Playwright bereits in der Ladefunktion integriert.

```python
# Selenium
driver.get("https://stundenplan.bbzbl-it.de/")
WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, "myDynamicElement")))

# Playwright
page.goto('https://stundenplan.bbzbl-it.de/', wait_until='domcontentloaded') # Wait until page is loaded
```

## Puppeteer
Puppeteer ist ein JS Framework. Dadurch hat es natürlich den Vorteil, dass es sehr einfach in JS Projekte integriert werden kann. 

Der Support vom Betriebsystem in Browserstack ist etwas besser als bei Playwright. Es unterstützt ab der Version Windows 7 und Mac OS El Capitan. 

Beim Browsersupport muss man daher etwas stärkere Abstriche machen, da Puppeteer leider Safari nicht supportet. Das ist natürlich ein grosser Nachteil. da oftmals Webseiten auf Safari sich anders verhalten als auf Chrome oder Firefox.

Was wir dafür sehr cool an Puppeteer fanden ist, dass es sehr straight forward ist. 

Etwas schade ist, dass die Integration mit Browserstack nicht durch ein sdk sondern manuell durchgeführt werden muss. 


So musste ich eine eigene Run Funktion schreiben, welche dann die Tests ausführt; anschliessend dann wartet bis die Tests fertig sind und danach den Browser wieder schliesst und den nächsten Test startet.

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

# Fazit

In unserem Fall war Selenium der klare Gewinner. Es ist extrem einfach zu verwenden und hat eine sehr gute Dokumentation. Zudem lässt es sich durch Browserstack auch einfach mit mobilen Geräten verwenden.

Nichts desto trotz sind auch Playwright und Puppeteer sehr gute Frameworks. Sie sind beide relativ einfach zu verwenden und haben eine gute Dokumentation. 

Wenn man eine hohe Abdeckung an verschiedenen Browsern und Devices benötigt, sollte man definitiv Selenium verwenden. Ansonsten ist es hauptsächlich eine Frage des persönlichen Geschmacks und der Vorkentnisse im Projektteam.