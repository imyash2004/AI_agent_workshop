import React from 'react';
import './SubtopicContent.css';

const SubtopicContent = ({ subtopic, topicTitle }) => {
  const { content, detailedContent } = subtopic;

  return (
    <div className="subtopic-content">
      <div className="subtopic-header">
        <div className="breadcrumb">
          <span className="topic-ref">{topicTitle}</span>
          <span className="separator">→</span>
          <span className="subtopic-id">{subtopic.id}</span>
        </div>
        <h1 className="subtopic-title">{subtopic.title}</h1>
      </div>

      <div className="content-body">
        {detailedContent ? (
          <div className="detailed-content">
            {detailedContent.mainDescription && (
              <div className="main-description" dangerouslySetInnerHTML={{ __html: detailedContent.mainDescription }} />
            )}
            {detailedContent.sections && detailedContent.sections.map((section, idx) => (
              <div key={idx} className="content-section">
                <h2>{section.title}</h2>
                <p dangerouslySetInnerHTML={{ __html: section.description }} />
                {section.points && (
                  <ul className="content-points">
                    {section.points.map((point, i) => (
                      <li key={i} dangerouslySetInnerHTML={{ __html: point }} />
                    ))}
                  </ul>
                )}
                {section.summary && (
                  <p className="section-summary" dangerouslySetInnerHTML={{ __html: section.summary }} />
                )}
              </div>
            ))}
            {detailedContent.examples && detailedContent.examples.map((example, idx) => (
              <div key={idx} className="examples-section">
                <h2>{example.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: example.description }} />
              </div>
            ))}
            {detailedContent.table && (
              <div className="table-section">
                <h2>Difference from Traditional Software</h2>
                <table className="comparison-table">
                  <thead>
                    <tr>
                      {detailedContent.table.headers.map((header, i) => (
                        <th key={i}>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {detailedContent.table.rows.map((row, i) => (
                      <tr key={i}>
                        {row.map((cell, j) => (
                          <td key={j}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {detailedContent.applicationsTable && (
              <div className="table-section">
                <h2>Practical Applications</h2>
                <table className="comparison-table">
                  <thead>
                    <tr>
                      {detailedContent.applicationsTable.headers.map((header, i) => (
                        <th key={i}>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {detailedContent.applicationsTable.rows.map((row, i) => (
                      <tr key={i}>
                        {row.map((cell, j) => (
                          <td key={j}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {detailedContent.benefits && (
              <div className="benefits-section">
                <h2>Benefits of Autonomous Agents</h2>
                <ul className="benefits-list">
                  {detailedContent.benefits.map((benefit, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: benefit }} />
                  ))}
                </ul>
              </div>
            )}
            {detailedContent.useCases && (
              <div className="usecases-section">
                <h2>Where It's Useful</h2>
                <ul className="usecases-list">
                  {detailedContent.useCases.map((useCase, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: useCase }} />
                  ))}
                </ul>
              </div>
            )}
            {detailedContent.summary && (
              <div className="summary-section">
                <h2>Summary</h2>
                <p dangerouslySetInnerHTML={{ __html: detailedContent.summary }} />
              </div>
            )}
          </div>
        ) : (
          <>
            {content.overview && (
              <div className="overview-section">
                <h2>Overview</h2>
                <p className="overview-text">{content.overview}</p>
              </div>
            )}

            {content.examples && (
              <div className="examples-section">
                <h2>Examples</h2>
                <ul className="examples-list">
                  {content.examples.map((example, index) => (
                    <li key={index} className="example-item">{example}</li>
                  ))}
                </ul>
              </div>
            )}

            {content.details && (
              <div className="details-section">
                <h2>Key Details</h2>
                <ul className="details-list">
                  {content.details.map((detail, index) => (
                    <li key={index} className="detail-item">{detail}</li>
                  ))}
                </ul>
              </div>
            )}

            {content.advantages && (
              <div className="advantages-section">
                <h2>Advantages</h2>
                <div className="advantages-grid">
                  {content.advantages.map((advantage, index) => (
                    <div key={index} className="advantage-card">
                      <h3>{advantage.title}</h3>
                      <p>{advantage.description}</p>
                      {advantage.example && (
                        <div className="advantage-example">
                          <strong>Example:</strong> {advantage.example}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {content.limitations && (
              <div className="limitations-section">
                <h2>Limitations</h2>
                <ul className="limitations-list">
                  {content.limitations.map((limitation, index) => (
                    <li key={index} className="limitation-item">{limitation}</li>
                  ))}
                </ul>
                {content.example && (
                  <div className="limitation-example">
                    <strong>Example:</strong> {content.example}
                  </div>
                )}
              </div>
            )}

            {content.benefits && (
              <div className="benefits-section">
                <h2>Benefits</h2>
                <ul className="benefits-list">
                  {content.benefits.map((benefit, index) => (
                    <li key={index} className="benefit-item">{benefit}</li>
                  ))}
                </ul>
              </div>
            )}

            {content.domains && (
              <div className="domains-section">
                <h2>Application Domains</h2>
                <div className="domains-grid">
                  {content.domains.map((domain, index) => (
                    <div key={index} className="domain-card">
                      <h3>{domain.title}</h3>
                      <p>{domain.description}</p>
                      {domain.example && (
                        <div className="domain-example">
                          <strong>Example:</strong> {domain.example}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {content.criteria && (
              <div className="criteria-section">
                <h2>Key Criteria</h2>
                <ul className="criteria-list">
                  {content.criteria.map((criterion, index) => (
                    <li key={index} className="criterion-item">{criterion}</li>
                  ))}
                </ul>
              </div>
            )}

            {content.scenarios && (
              <div className="scenarios-section">
                <h2>Scenarios</h2>
                <ul className="scenarios-list">
                  {content.scenarios.map((scenario, index) => (
                    <li key={index} className="scenario-item">{scenario}</li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default SubtopicContent;
