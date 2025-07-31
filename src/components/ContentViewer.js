import React from 'react';
import './ContentViewer.css';
import TopicOverview from './TopicOverview';
import SubtopicContent from './SubtopicContent';

const ContentViewer = ({ currentSection, onNavigate }) => {
  if (!currentSection) return null;

  const renderContent = () => {
    if (currentSection.type === 'section') {
      // Use TopicOverview component for main topics
      return (
        <TopicOverview 
          topic={currentSection} 
          onSubtopicClick={(subtopic) => onNavigate && onNavigate(subtopic.id)}
        />
      );
    }

    // Use SubtopicContent component for subtopics
    return (
      <SubtopicContent 
        subtopic={currentSection}
        topicTitle={currentSection.parentTitle || 'Topic'}
      />
    );
  };

  return (
    <div className="content-viewer">
      <div className="content-header">
        <div className="breadcrumb">
          <span className="section-id">{currentSection.id}</span>
          {currentSection.parentId && (
            <span className="parent-id">Part of Section {currentSection.parentId}</span>
          )}
        </div>
        <h1>{currentSection.title}</h1>
        {currentSection.type === 'section' && (
          <div className="section-meta">
            <span className="duration-badge">{currentSection.duration}</span>
          </div>
        )}
      </div>
      
      <div className="content-body">
        {renderContent()}
      </div>
    </div>
  );
};

export default ContentViewer;
