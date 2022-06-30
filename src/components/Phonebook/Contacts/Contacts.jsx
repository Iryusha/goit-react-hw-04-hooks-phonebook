import s from './Contacts.module.css';

const Contacts = ({ contacts, onRemoveContact }) => {
  return (
    <div>
      {contacts.map(contact => {
        return (
          <li key={contact.id} className={s.item}>
            {contact.name}: {contact.number}
            <button
              key={contact.id}
              name={contact.name}
              className={s.buttonDelete}
              type="button"
              onClick={() => onRemoveContact(contact.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </div>
  );
};
export default Contacts;