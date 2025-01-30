<h1>databaseApiExample</h1>

Käytetään esimerkkiä staticApiExample pohjana ja muokataan sovellusta, niin että data haetaan tietokannasta.

<ol>
<li>Luo kansio databaseApiExample</li>
<li>Kopioi staticApiExamplen tiedostot em. kansioon</li>
<li>Asenna MySQL moduuli komennolla npm install mysql2</li>
<li>Luo tiedosto database.js, jossa konfiguroidaan yhteys tietokantaan</li>
<li>Muokataan book_model.js tiedostoa, niin että data haetaan tietokannasta ja tietokantaan voidaan lisätä, muokata ja poistaa dataa</li>
</ol>

<h2>Tietokanta</h2> 

Käytetään tietokantaa library ja luodaan käyttäjä tunnus seuraavalla koodilla
<pre>
CREATE USER 'netuser'@'localhost' IDENTIFIED BY 'netpass';
GRANT ALL ON library.* TO 'netuser'@'localhost';
</pre>
<hr>
We will use the staticApiExample as a base and modify the application so that data is fetched from a database instead of a static array.

<ol> <li>Create a folder named <b>databaseApiExample</b>.</li> <li>Copy the files from **staticApiExample** into this new folder.</li> <li>Install the MySQL module by running the command: <pre>npm install mysql2</pre></li> <li>Create a new file named **database.js** to configure the database connection.</li> <li>Modify **book_model.js** so that data is retrieved from the database, and allow adding, updating, and deleting data.</li> </ol>

<h2>Database</h2>

We will use a database named library and create a user account with the following SQL commands:

<pre> 
CREATE USER 'netuser'@'localhost' IDENTIFIED BY 'netpass'; 
GRANT ALL ON library.* TO 'netuser'@'localhost'; 
</pre>
