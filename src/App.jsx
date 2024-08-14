import React, { useState } from 'react';
import Invoice from './Print/Invoice';
import { renderToStaticMarkup } from 'react-dom/server';

function App() {
  const [htmlContent, setHtmlContent] = useState('');

  const handlePrint = async () => {
    // Convert the Invoice component to static HTML markup
    const html = renderToStaticMarkup(<Invoice />);
    setHtmlContent(html);

    // Open a new window and print the compiled HTML
    const printWindow = window.open('', '_blank');
    printWindow.document.open();
    printWindow.document.write(html);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className='bg-red'>
      <button onClick={handlePrint}>Print Invoice</button>
    </div>
  );
}

export default App;
