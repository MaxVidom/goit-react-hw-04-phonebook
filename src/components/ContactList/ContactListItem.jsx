import PropTypes from 'prop-types';

export default function ContactListItem({ name, number, onDeleteContact }) {
  return (
    <li>
      {name}: {number}
      <button onClick={onDeleteContact}>Delete</button>
    </li>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
