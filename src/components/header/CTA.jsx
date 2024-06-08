import React from 'react';
import CV from '../../assets/cv.pdf';

const CTA = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = CV;
    link.download = 'cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='cta'>
      <button onClick={handleDownload} className='btn'>Download CV</button>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  );
}

export default CTA;
