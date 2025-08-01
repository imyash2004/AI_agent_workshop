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

          {topic.detailedContent.limitationsTable && (
            <div className="limitations-table-section">
              <h2>LLM Limitations and Their Impact</h2>
              <table className="comparison-table">
                <thead>
                  <tr>
                    {topic.detailedContent.limitationsTable.headers.map((header, index) => (
                      <th key={index}>{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {topic.detailedContent.limitationsTable.rows.map((row, index) => (
                    <tr key={index}>
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="table-note">These limitations restrict LLMs to static, one-time answers, making them unsuitable for tasks requiring decision-making, iteration, or environmental feedback.</p>
            </div>
          )}

          {/* {topic.id === "2" && (
            <div className="agentic-advantages-intro">
              <h1>2.2 Agentic Advantages Comparison</h1>
              <p>
                AI agents represent a significant advancement over traditional LLM interfaces by enabling structured, goal-driven, and adaptable task execution. This section highlights the key comparative advantages that make agents more suitable for real-world applications.
              </p>
            </div>
          )} */}

          {topic.detailedContent.comparisonTable && (
            <div className="comparison-table-section">
              <h2>{topic.detailedContent.comparisonTable.title}</h2>
              <table className="comparison-table">
                <thead>
                  <tr>
                    {topic.detailedContent.comparisonTable.headers.map((header, index) => (
                      <th key={index}>{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {topic.detailedContent.comparisonTable.rows.map((row, index) => (
                    <tr key={index}>
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} dangerouslySetInnerHTML={{ __html: cell }}></td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {topic.detailedContent.practicalExample && (
            <div className="practical-example-section">
              <h2>{topic.detailedContent.practicalExample.title}</h2>
              <table className="comparison-table">
                <thead>
                  <tr>
                    {topic.detailedContent.practicalExample.headers.map((header, index) => (
                      <th key={index}>{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {topic.detailedContent.practicalExample.rows.map((row, index) => (
                    <tr key={index}>
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="example-note">In this scenario, an agent is not just a responder—it's a functional, context-aware assistant capable of performing meaningful actions over time.</p>
            </div>
          )}

          {topic.detailedContent.strategicImportance && (
            <div className="strategic-importance-section">
              <h2>{topic.detailedContent.strategicImportance.title}</h2>
              <p dangerouslySetInnerHTML={{ __html: topic.detailedContent.strategicImportance.description }}></p>
              <ul className="strategic-points">
                {topic.detailedContent.strategicImportance.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
              <p className="strategic-impact" dangerouslySetInnerHTML={{ __html: topic.detailedContent.strategicImportance.impact }}></p>
            </div>
          )}

          {topic.detailedContent.summary && (
            <div className="content-summary">
              <h2>Summary</h2>
              <p dangerouslySetInnerHTML={{ __html: topic.detailedContent.summary }}></p>
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

      <div className="overview-section">
        <h2>Overview</h2>
        <p>Key advantages that agents provide over traditional LLMs</p>
      </div>

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
