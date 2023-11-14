import './Sections.css';
import Proptypes from 'prop-types';
import { NavLink } from 'react-router-dom';

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
                <NavLink
                  to={section.link}
                  className="link">
                  <div
                    key={index}
                    className="section">
                    {section.name}
                  </div>
                </NavLink>
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