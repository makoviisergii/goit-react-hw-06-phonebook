import { ContactItem } from 'components/ContactItem';
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(state => state.contactsReducer.contacts);
  const filter = useSelector(state => state.contactsReducer.searchStr);

  return (
    <ul>
      {filter
        ? contacts
            .filter(contact => contact.name.toLowerCase().includes(filter))
            .map(contact => <ContactItem key={contact.id} contact={contact} />)
        : contacts.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
    </ul>
  );
};

// ContactList.propTypes = {
//   onDeleteUser: PropTypes.func.isRequired,
//   filter: PropTypes.string.isRequired,
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string,
//       name: PropTypes.string,
//       number: PropTypes.string,
//     }).isRequired
//   ),
// };
