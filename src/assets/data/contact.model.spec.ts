import { Contact } from './contact.model';

describe('Contact', () => {
  it('should create an instance', () => {
    const contact: Contact = {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Hello'
    };
    expect(contact).toBeTruthy();
  });
});
