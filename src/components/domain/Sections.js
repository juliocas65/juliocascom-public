import './Sections.css';
import Proptypes from 'prop-types';

const Sections = (props) => {
  const { sections } = props;
  const handleSections = () => {
    return (
      <>
        <p>Pretty soon you'll see here: </p>
        <div className='list'>
          {
            sections.map((section, index) => {
              return (
                <div
                  key={index}
                  className="section">
                  {section}
                </div>
              )
            })
          }
        </div>
      </>
    )
  };
  return (
    <>
      {
        sections.length > 0 ?
        handleSections() :
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