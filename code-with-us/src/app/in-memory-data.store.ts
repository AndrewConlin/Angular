import { InMemoryDbService } from 'angular-in-memory-web-api';

import { createTestCustomers } from './test-data';

export class InMemoryDataStore implements InMemoryDbService {
  createDb() {
    const states = ['California', 'Illinois', 'Jalisco', 'Quebec', 'Florida'];

    return {
        customers: createTestCustomers(),
        states: states
      };
  }
}
