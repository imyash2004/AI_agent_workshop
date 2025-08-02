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

            {/* Render custom points for 2.1 and similar detailedContent */}
            {detailedContent.points && Array.isArray(detailedContent.points) && (
              <div className="subtopic-llm-limitations">
                {detailedContent.points.map((point, idx) => (
                  <div key={idx} className="llm-point">
                    <div className="llm-point-title">{point.title}</div>
                    <div className="llm-point-desc">{point.description}</div>
                    {point.bullets && (
                      <ul className="llm-bullets">
                        {point.bullets.map((bullet, i) => (
                          <li key={i}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                    {point.example && (
                      <div className="llm-example"><strong>Example:</strong> {point.example}</div>
                    )}
                    {point.result && (
                      <div className="llm-result"><strong>Result:</strong> {point.result}</div>
                    )}
                  </div>
                ))}
              </div>
            )}
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
            
            {detailedContent.summaryTable && (
              <div className="table-section">
                <h2>{detailedContent.summaryTable.title}</h2>
                <table className="comparison-table">
                  <thead>
                    <tr>
                      {detailedContent.summaryTable.headers.map((header, i) => (
                        <th key={i}>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {detailedContent.summaryTable.rows.map((row, i) => (
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
            
            {detailedContent.conclusion && (
              <div className="conclusion-section">
                <h2>Conclusion</h2>
                <p dangerouslySetInnerHTML={{ __html: detailedContent.conclusion }} />
              </div>
            )}

            {/* Special flowchart for 6.1 Decision Cycle */}
            {detailedContent.flowchart && subtopic.id === "6.1" && (
              <div className="decision-cycle-flowchart">
                <h2>{detailedContent.flowchart.title}</h2>
                <div className="flowchart-container">
                  <div className="flowchart-stages">
                    {detailedContent.flowchart.stages.map((stage, index) => (
                      <div key={index} className="flowchart-stage">
                        <div className="stage-number">{index + 1}</div>
                        <div className="stage-text">{stage}</div>
                        {index < detailedContent.flowchart.stages.length - 1 && (
                          <div className="stage-arrow">→</div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="flowchart-loop-connection">
                    <div className="loop-line"></div>
                    <div className="loop-arrow-right">→</div>
                    <div className="loop-text">Loop back to Goal Interpretation</div>
                    <div className="loop-arrow-left">←</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <>
            {/* {content.overview && (
              <div className="overview-section">
                <h2>Overview</h2>
                <p className="overview-text">{content.overview}</p>
              </div>
            )} */}

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

              {/* Agentic Advantages Comparison Intro Block for 2.2 */}
        {subtopic.id === "2.2" && (
          <div className="agentic-advantages-intro">
            <h1>2.2 Agentic Advantages Comparison</h1>
            <p>
              AI agents represent a significant advancement over traditional LLM interfaces by enabling structured, goal-driven, and adaptable task execution. This section highlights the key comparative advantages that make agents more suitable for real-world applications.
            </p>
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

        {/* Scalability & Efficiency Benefits Intro Block for 2.3 */}
        {subtopic.id === "2.3" && (
          <div className="scalability-efficiency-intro">
            <h1>2.3 Scalability & Efficiency Benefits</h1>
            <p>
              One of the most compelling reasons to adopt agentic systems over traditional LLM usage is their ability to scale operations and deliver consistent performance with high efficiency. AI agents are designed to operate autonomously, repeatedly, and reliably—making them well-suited for enterprise-scale applications and continuous task automation.
            </p>
            <div className="scalability-benefits-list">
              <div className="scalability-benefit">
                <h2>1. Parallel Task Execution</h2>
                <p>Agents can be deployed in large numbers to run multiple tasks in parallel across users, workflows, or processes.</p>
                <div className="benefit-example"><strong>Example:</strong> A fleet of customer service agents can handle thousands of support tickets simultaneously, each operating independently while adhering to business rules and escalation protocols.</div>
                <div className="benefit-note">This parallelism enables organizations to serve more users at lower cost and with faster response times, without increasing human overhead.</div>
              </div>
              <div className="scalability-benefit">
                <h2>2. 24/7 Operation</h2>
                <p>Agents are not constrained by working hours, fatigue, or context switching. They can run continuously without performance degradation.</p>
                <div className="benefit-example"><strong>Example:</strong> A system monitoring agent can track server health in real time, detect anomalies, and initiate recovery protocols at any time of day, without human supervision.</div>
                <div className="benefit-note">This ensures constant availability and reliability, particularly in time-critical or global systems.</div>
              </div>
              <div className="scalability-benefit">
                <h2>3. Consistent Decision-Making</h2>
                <p>Unlike human operators, agents apply rules and reasoning consistently, unaffected by bias, distraction, or emotional factors.</p>
                <div className="benefit-example"><strong>Example:</strong> A financial analysis agent can assess investment portfolios using the same evaluation criteria every time, ensuring uniformity and reducing errors.</div>
                <div className="benefit-note">This consistency is crucial in regulated environments where standardized decision-making is essential.</div>
              </div>
              <div className="scalability-benefit">
                <h2>4. Resource Optimization</h2>
                <p>Agents can intelligently prioritize tasks, allocate computational resources, and avoid redundant effort.</p>
                <div className="benefit-example"><strong>Example:</strong> A project coordination agent may delay low-priority tasks in favor of urgent requests, dynamically balancing system load for optimal throughput.</div>
                <div className="benefit-note">This leads to improved operational efficiency and better use of computational and organizational resources.</div>
              </div>
              <div className="scalability-benefit">
                <h2>5. Cost Efficiency at Scale</h2>
                <p>With initial setup and minimal maintenance, agents can handle workloads that would otherwise require large teams of human workers.</p>
                <div className="benefit-example"><strong>Example:</strong> A document processing pipeline powered by agents can extract, summarize, and organize legal or medical files at scale, significantly reducing turnaround time and manual labor costs.</div>
                <div className="benefit-note">This allows organizations to scale operations without scaling headcount.</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubtopicContent;
