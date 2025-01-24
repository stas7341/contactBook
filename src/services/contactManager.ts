import * as Console from 'console';
import ContactEntityInstance from '../repositories/contactEntity';
import { log } from '../utils/log';

class ContactManagerService {

  static getAllContact = async () => {
    log('called search contact');
    return ContactEntityInstance.getAll();
  };

  static findContact = (searchQuery: string) => {
    log('called search contact: ', searchQuery);
    const result = ContactEntityInstance.search(searchQuery.toLowerCase());
    log('found: ', JSON.stringify(result));
    return result;
  };

}

export default ContactManagerService;
