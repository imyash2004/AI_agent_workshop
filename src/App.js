import React, { useState } from 'react';
import './App.css';
import { contentData } from './data/contentData';
import TableOfContents from './components/TableOfContents';
import ContentViewer from './components/ContentViewer';
import Navigation from './components/Navigation';

function App() {
  const [currentSection, setCurrentSection] = useState(null);
  const [showTOC, setShowTOC] = useState(true);

  // Flatten all sections and subsections for navigation
  const getAllItems = () => {
    const items = [];
    contentData.sections.forEach(section => {
      items.push({ type: 'section', ...section });
      section.subsections.forEach(subsection => {
        items.push({ type: 'subsection', ...subsection, parentId: section.id });
      });
    });
    return items;
  };

  const allItems = getAllItems();

  const getCurrentIndex = () => {
    if (!currentSection) return -1;
    return allItems.findIndex(item => 
      item.id === currentSection.id && item.type === currentSection.type
    );
  };

  const navigateToNext = () => {
    const currentIndex = getCurrentIndex();
    if (currentIndex < allItems.length - 1) {
      setCurrentSection(allItems[currentIndex + 1]);
    }
  };

  const navigateToPrevious = () => {
    const currentIndex = getCurrentIndex();
    if (currentIndex > 0) {
      setCurrentSection(allItems[currentIndex - 1]);
    }
  };

  const handleSectionSelect = (section, type = 'section') => {
    setCurrentSection({ ...section, type });
    setShowTOC(false);
  };

  const handleNavigateToSubsection = (subsectionId) => {
    // Find the subsection by ID
    const subsection = allItems.find(item => 
      item.id === subsectionId && item.type === 'subsection'
    );
    if (subsection) {
      setCurrentSection(subsection);
    }
  };

  const handleBackToTOC = () => {
    setShowTOC(true);
    setCurrentSection(null);
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>AI Agents Learning Platform</h1>
        {!showTOC && (
          <button className="toc-button" onClick={handleBackToTOC}>
            📋 Table of Contents
          </button>
        )}
      </header>
      
      <main className="app-main">
        {showTOC ? (
          <TableOfContents 
            contentData={contentData}
            onSectionSelect={handleSectionSelect}
          />
        ) : (
          <>
            <ContentViewer 
              currentSection={currentSection} 
              onNavigate={handleNavigateToSubsection}
            />
            <Navigation 
              onPrevious={navigateToPrevious}
              onNext={navigateToNext}
              hasPrevious={getCurrentIndex() > 0}
              hasNext={getCurrentIndex() < allItems.length - 1}
              currentIndex={getCurrentIndex()}
              totalItems={allItems.length}
            />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
