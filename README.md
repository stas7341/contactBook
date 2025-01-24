Simple example of contact book web application. The application consists of a form with a single input field that allows searching for people by their name, age, phone number, or any combination thereof. As there is only a single input field, the application must do its best to parse the search terms entered by its users. John 33 should return all the people who are called John and are 33 years old, while 099373927 Smith should attempt to find a person with the supplied phone number whose name contains "Smith".

Should the search yield no results, the user should be presented with the message: No results, please review your search or try a different one

If the search did yield results, they should be presented to the user. Each result shown must include the following:

* Name
* Age
* Phone
* Address
* Portrait picture (png) 

There are some restrictions of query that could be used by searching the contacts:

const searchName = terms.filter(term => !(/^\d{1,20}$/.test(term)));
const searchPhone = terms.filter(term => /^\d{1,15}$/.test(term)  && term.length > 3);
const searchAge = terms.filter(term => (/^\d{1,3}$/.test(term) && term.length <= 3));
