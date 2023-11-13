import './Sections.css';
import Proptypes from 'prop-types';

const Sections = (props) => {
  const { sections } = props;
  const haveSections = () => {
    return (
      <div className='list'>
      <p>Pretty soon you'll see here: </p>
      <ul>
      {
        sections.map((section, index) => {
          return (
            <li key={index}>
              {section}
            </li>
          )
        })
      }
      </ul>
    </div>
    )
  };
  return (
    <>
      {
        sections.length > 0 ?
        haveSections() :
        (<p> Without Sections </p>)
      }
    </>
  );
}

Sections.propTypes = {
  sections: Proptypes.array.isRequired
}

Sections.defaultProps = {
  sections: []
}

export default Sections;