# databaseApiExample

Käytetään esimerkkiä staticApiExample pohjana ja muokataan sovellusta, niin että data haetaan tietokannasta.

<ol>
<li>Luo kansio databaseApiExample</li>
<li>Kopioi staticApiExamplen tiedostot em. kansioon</li>
<li>Asenna MySQL moduuli komennolla npm install mysql2</li>
<li>Luo tiedosto database.js, jossa konfiguroidaan yhteys tietokantaan</li>
<li>Muokataan book_model.js tiedostoa, niin että data haetaan tietokannasta ja tietokantaan voidaan lisätä, muokata ja poistaa dataa</li>
</ol>

## Tietokanta 

Käytetään tietokantaa library ja luodaan käyttäjä tunnus seuraavalla koodilla
<pre>
CREATE USER 'netuser'@'localhost' IDENTIFIED BY 'netpass';
GRANT ALL ON library.* TO 'netuser'@'localhost';
</pre>