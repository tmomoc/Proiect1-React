# Proiect1-React
## Cerințe de implementat

1. Adăugați două proprietăți noi pentru fiecare user: salariu și imagine. Dați valori pentru acestea și afișați-le pe ecran.
2. Adăugați un nou input de tip culoare. La schimbarea culorii lui, culoarea textului pentru întreaga aplicație se va schimba.
3. Creați două componente noi, numite PostList și PostItem. PostList va fi o listă de componente de tip PostItem. În componenta PostList, atunci când este afișată pe ecran, faceți un request catre endpoint-ul /posts, de pe JSON placeholder, afișând datele preluate. Practic, o singură dată veți face request către url-ul https://jsonplaceholder.typicode.com/posts.
4. Creați două butoane: Afișează useri și Afișează postări. Implicit, vor fi afișați userii. La click pe oricare din cele două butoane, va fi actualizată lista afișată pe ecran. Dacă dăm click pe butonul Afișează useri va fi afișată lista userilor, dacă dăm click pe Afișează postări va fi afișată lista postărilor.
5. Adăugați pe fiecare user un buton de ștergere.
6.  puțină validare a datelor. Spre exemplu, să nu poată fi introdus un nume gol, iar emailul să conțină caracterele '@' și '.' .
7. Stilizați aplicația, astfel încât să arate mai frumos.