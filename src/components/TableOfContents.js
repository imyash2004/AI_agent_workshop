import React from 'react';
import './TableOfContents.css';

const TableOfContents = ({ contentData, onSectionSelect }) => {
  return (
    <div className="table-of-contents">
      <div className="toc-header">
        <h2>{contentData.title}</h2>
        <div className="toc-subtitle">Interactive Learning Guide</div>
      </div>
      
      <div className="toc-content">
        {contentData.sections.map((section, index) => (
          <div key={section.id} className="toc-section">
            <div 
              className="section-header"
              onClick={() => onSectionSelect(section, 'section')}
            >
              <span className="section-number">{index + 1}</span>
              <div className="section-info">
                <h3 className="section-title">{section.title}</h3>
                <span className="section-duration">{section.duration}</span>
              </div>
              <span className="section-arrow">→</span>
            </div>
            
            <div className="subsections">
              {section.subsections.map((subsection) => (
                <div 
                  key={subsection.id}
                  className="subsection-item"
                  onClick={() => onSectionSelect(subsection, 'subsection')}
                >
                  <span className="subsection-id">{subsection.id}</span>
                  <span className="subsection-title">{subsection.title}</span>
                  <span className="subsection-arrow">→</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="toc-footer">
        <div className="learning-tip">
          💡 <strong>Learning Tip:</strong> Click on any topic or subtopic to dive deep into the content. Use the navigation buttons to move between sections seamlessly.
        </div>
      </div>
    </div>
  );
};

export default TableOfContents;
