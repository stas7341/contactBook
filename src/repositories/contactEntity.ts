import { Contact } from '../models/contact';
import { log } from '../utils/log';

const data = require('./contacts.json');

class ContactEntityRepo {
  protected contactEntity: Contact[] = [];

  constructor() {
    this.contactEntity = data;
  }

  getAll() {
    try {
      return this.contactEntity;
    } catch (error) {
      throw error;
    }
  }

  search(query: string) {
    try {

      return this.searchContacts(query, this.contactEntity);

    } catch (error) {
      throw error;
    }
  }

  getAge = (birthday: string): number => {
    const birthDate = new Date(birthday);
    const today = new Date();
    return today.getFullYear() - birthDate.getFullYear();
  };

  searchContacts = (query: string, contacts: Contact[]): Contact[] => {
    const terms = query.split(' ');

    const searchName = terms.filter(term => !(/^\d{1,20}$/.test(term)));
    const searchPhone = terms.filter(term => /^\d{1,15}$/.test(term)  && term.length > 3);
    const searchAge = terms.filter(term => (/^\d{1,3}$/.test(term) && term.length <= 3));

    log('from query it could be name: ', JSON.stringify(searchName));
    log('from query it could be phone: ', JSON.stringify(searchPhone));
    log('from query it could be age: ', JSON.stringify(searchAge));

    return contacts.filter((contact) => {

      const nameMatch = searchName.some((item) => contact.name.toLowerCase().includes(item.toLowerCase()));

      const phoneMatch = searchPhone.some((item) => contact.phone_number.includes(item));

      const ageMatch = searchAge.some((item) => {
        const age = parseInt(item, 10);
        return !isNaN(age) && this.getAge(contact.birthday) === age;
      });
      return nameMatch || phoneMatch || ageMatch;
    });
  };
}

export default new ContactEntityRepo();
