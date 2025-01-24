Simple example of contact book web application. The application consists of a form with a single input field that allows searching for people by their name, age, phone number, or any combination thereof. As there is only a single input field, the application must do its best to parse the search terms entered by its users. John 33 should return all the people who are called John and are 33 years old, while 099373927 Smith should attempt to find a person with the supplied phone number whose name contains "Smith".

If the search yield no results, the user should be presented with the message: No results, please review your search or try a different one

If the search did yield results, they will be presented to the user. Each result will include the following:

* Name
* Age
* Phone
* Address
* Portrait picture (png) 

How to run:

* git clone https://github.com/stas7341/contactBook.git
* cd contactBook
* npm i
* you can change the port listening by add .env by #echo "PORT=8180" >> .env
* npm run start (ts-node) or npm run build
* npm run start:dist
* go to 'http://localhost:8180/'


There are some restrictions of query that could be used by searching the contacts, try for example:

### 8589246 Lou Gardner

