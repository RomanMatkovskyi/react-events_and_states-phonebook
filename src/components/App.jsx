import { Component } from 'react';
import Form from './form/form';
import Contacts from './contacts/contacts';
import Filter from './filter/filter';
import { nanoid } from 'nanoid';

class App extends Component {
   state = {
   contacts: [],
   filter: '',
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmitForm = data => {
    let contactExists = false;
    this.state.contacts.forEach(contact => {
      if (contact.name.toLowerCase() === data.name.toLowerCase()) {
        contactExists = true;
        alert('This contact is already in your list');
      }
    });
    if (!contactExists) {
      const { name, number } = data;
      const newContact = { id: nanoid(), name, number };
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
        name: '',
        number: '',
      }));
    }
  };

  deleteContactHandler = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const filteredList = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return (
      <>
        <h1>Phonebook</h1>
        <Form handleSubmitForm={this.handleSubmitForm} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.handleInputChange} />
        <Contacts data={filteredList} onDelete={this.deleteContactHandler} />
      </>
    );
  }
}

export default App;
