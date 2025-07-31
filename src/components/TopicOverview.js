import React from 'react';
import './TopicOverview.css';

const TopicOverview = ({ topic, onSubtopicClick }) => {
  return (
    <div className="topic-overview">
      <div className="topic-header">
        <div className="topic-number">{topic.id}</div>
        <h1 className="topic-title">{topic.title}</h1>
      </div>

      {topic.detailedContent && (
        <div className="detailed-content">
          <div className="main-description">
            <p dangerouslySetInnerHTML={{ __html: topic.detailedContent.mainDescription }}></p>
          </div>
          
          {topic.detailedContent.sections?.map((section, index) => (
            <div key={index} className="content-section">
              <h2>{section.title}</h2>
              <p dangerouslySetInnerHTML={{ __html: section.description }}></p>
              {section.points && (
                <ul className="content-points">
                  {section.points.map((point, pointIndex) => (
                    <li key={pointIndex} dangerouslySetInnerHTML={{ __html: point }}></li>
                  ))}
                </ul>
              )}
              {section.summary && (
                <p className="section-summary" dangerouslySetInnerHTML={{ __html: section.summary }}></p>
              )}
            </div>
          ))}

          {topic.detailedContent.examples && (
            <div className="examples-section">
              <h2>Key Real-World Examples</h2>
              <div className="examples-grid">
                {topic.detailedContent.examples.map((example, index) => (
                  <div key={index} className="example-card">
                    <h3>{example.title}</h3>
                    <p>{example.description}</p>
                  </div>
                ))}
              </div>
              {topic.detailedContent.examplesSummary && (
                <p className="examples-summary" dangerouslySetInnerHTML={{ __html: topic.detailedContent.examplesSummary }}></p>
              )}
            </div>
          )}

          {topic.detailedContent.impact && (
            <div className="impact-section">
              <h2>{topic.detailedContent.impact.title}</h2>
              <p dangerouslySetInnerHTML={{ __html: topic.detailedContent.impact.description }}></p>
              <ul className="impact-points">
                {topic.detailedContent.impact.points.map((point, index) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: point }}></li>
                ))}
              </ul>
              <p className="impact-summary" dangerouslySetInnerHTML={{ __html: topic.detailedContent.impact.summary }}></p>
            </div>
          )}
        </div>
      )}

      <div className="section-overview">
        <div className="overview-header">
          <div className="subtopics-count">{topic.subsections?.length || 0} subtopics</div>
        </div>
        
        <h2>Section Overview</h2>
        <p>This section covers {topic.subsections?.length || 0} key subtopics that will help you understand {topic.title.toLowerCase()}.</p>
        
        <h3>What you'll learn:</h3>
        <div className="subtopics-list">
          {topic.subsections?.map((subtopic) => (
            <div 
              key={subtopic.id} 
              className="subtopic-item"
              onClick={() => onSubtopicClick && onSubtopicClick(subtopic)}
            >
              <span className="subtopic-id">{subtopic.id}</span>
              <span className="subtopic-title">{subtopic.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopicOverview;
