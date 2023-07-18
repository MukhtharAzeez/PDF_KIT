const PDFDocument = require('pdfkit');

function buildPDF(dataCallback, endCallback) {
  const doc = new PDFDocument({ bufferPages: true, font: 'Courier' });

  doc.on('data', dataCallback);
  doc.on('end', endCallback);

  doc.rect(50, 50, doc.page.width - 100, 50)
    .fillAndStroke('#002060','black')
    .fillColor('white')
    .fontSize(20)
    .text('PROCUREMENT ORDER SUMMARY', {
      align: 'center'
    });
  
  const address = "World Fish Aqua 24th Kovil Street Anna Nagar Chennai Chennai Tamil Nadu";
  const leftTriangleWidth = (doc.page.width - 100) / 2
  doc.rect(50, 100, leftTriangleWidth, 150)
    .stroke('black')
    .fillColor('black')
    .fontSize(12)
    .lineGap(5)
    .text(address, 55, 125, { width: leftTriangleWidth/2, align: 'left' });
    
  doc.rect((doc.page.width) / 2, 100, (doc.page.width - 100) / 2, 150)
    .stroke('black')

  // Finalize PDF file
  doc.end();
}

module.exports = { buildPDF };
