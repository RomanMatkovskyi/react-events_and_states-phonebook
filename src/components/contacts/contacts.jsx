import s from './contacts.module.css';
import PropTypes from 'prop-types';

const Contacts = ({ data, onDelete }) => {
  return (
    <>
      {data.length === 0 ? (
        <p className={s.nocontacts}>No contacts found</p>
      ) : (
        <ul className={s.contactlist}>
          {data.map(({ id, name, number }) => (
            <li key={id} id={id} className={s.contactitem}>
              <p>
                {name}: {number}
              </p>
              <button
                type="button"
                className={s.deletebutton}
                onClick={() => onDelete(id)}
              >
                x
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

Contacts.propTypes = {
  data: PropTypes.array,
  onDelete: PropTypes.func,
};

export default Contacts;
