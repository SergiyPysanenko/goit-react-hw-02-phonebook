
import styles from './ContactList.module.css'


const ContactList = ({ contacts, onDeleteContact }) => (
    <ul className={styles.contactList}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li className={styles.li} key={id}>
            <span className={styles.contactName}>{name}:</span>
            <span className={styles.contactNumber}>{number}</span>
            <button
              className={styles.contactDeleteButton}
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );


export default ContactList;