import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../redux/slice';

export const Filter = () => {
  // const handleChange = event => {
  //   onChangeInput(event.target.value);
  const searchStr = useSelector(state => state.searchReducer.searchStr);
  console.log(searchStr);

  const dispatch = useDispatch();

  return (
    <div>
      <ContactLabel>
        Find contacts by name
        <Contactinput
          type="text"
          placeholder="Type to search ..."
          value={searchStr}
          onChange={event => dispatch(changeFilter(event.target.value))}
        />
      </ContactLabel>
    </div>
  );
};

Filter.propTypes = {
  earchStr: PropTypes.string,
  onChangeInput: PropTypes.func.isRequired,
};
const ContactLabel = styled.label`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Contactinput = styled.input`
  height: 25px;
  width: 400px;
`;
