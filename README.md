# DocumentUploadApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.19.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Alkalmazás elkészítése

A kapott feladat 5 részből állt. Nekem ebből az elsőt és a második felét sikerült teljesítenem.
A projekt létrehozásakor az Angular8-at választottam, mert nem volt még vele dolgom és gondoltam itt az ideje megtanulni használni.
A projet felépítésében azt a mappaszerkezetet készítettem el, amelyet az eddigi projektjeimen megszoktam, ami a következő: A fő module a 'core module', itt helyezkedik
el a layout alapja, az authorizációs service, és itt kéne hogy helyet kapjanak a guardok, interceptorok is. És általában ezen keresztül zajlik a felhasználókezelés.
Ezen kívül a többi feature is module-okba szerveztem.
Az első feladatot Bootstrappel oldottam meg. A másodikhoz láttam a használható technológia listából, hogy NgRx-et kéne használnom.
Ezzel eddig még nekem nem volt dolgom, úgyhogy most kipróbáltam. Azért is tudtam ilyen rövid idő alatt
csupán ennyit megoldani. De rendkívül tanulságos feladat volt. Jelenleg a fejlesztésben addig jutottam a belépésen 
kívül,  hogy a file feltöltés mockolódik és még csak a képeket menti el localstorageba, de vissza még képként még nem tölti.

## Hogyan csináltam volna tovább
A tervem az volt, hogy két féle fájltípust lehessen feltölteni: pdf-et vagy valamilyen formátumú képet. 
Ezeket a feltöltés után kártyákon jelenítettem volna meg, kép esetében a kártyán a kis képpel, pdf esetén pedig
a pdf ikonja lett volna látható. A kártyák felé vitt egérrel előtűnt volna a menüje, ezen belül lehetett volna másolni, törölni, stb.
Későbbiekben a mappába rendezést az új fájl felvétele gomb alatti részen oldottam volna meg. Lett volna ott egy új mappa gomb.
A képek menüjében pedig az áthelyezéssel lehetett volna megadni, hogy melyik mappába akarjuk tenni. Ezek után a mappákra kattintva
jelenítettem volna meg a bennük levő file-okat. Továbbá lett volna egy gomb, amely az összes feltöltött file-t mutatta volna meg.
