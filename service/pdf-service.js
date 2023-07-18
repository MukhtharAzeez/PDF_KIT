const PDFDocument = require('pdfkit');

function buildPDF(dataCallback, endCallback) {
  const doc = new PDFDocument({ bufferPages: true, font: 'Helvetica' });

  doc.on('data', dataCallback);
  doc.on('end', endCallback);

  const pageHeight = doc.page.height
  let currentHeight = 0
  // Main Rectangle
  const mainTitleStyle = {
    font: 'Helvetica-Bold',
    fontSize: 20,
    align: 'center',
  };

  doc.rect(50, 50, doc.page.width - 100, 50)
    .fillAndStroke('#002060', 'black')
    .fillColor('white')
    .fontSize(20)
    .font('Helvetica-Bold')
    .text('PROCUREMENT ORDER SUMMARY', mainTitleStyle);

  // Left and Right child Rectangles 
  const sellerDetails = "World Fish Aqua 24th Kovil Street Anna Nagar Chennai Chennai Tamil Nadu ";
  const orderDetails = "Supplier: Dheeran,466W VWV, Bharathi Road Second Street, Chinnaiyan Colony, Perambur, Chennai, Tamil Nadu600039, IndiaReference: Dheeran/15062022/002Date/Warehouse/Raised By: 15/Jun/2022,NA,Aqua(8686868686)"
  const leftRectangleWidth = (doc.page.width - 100) / 2
  const rightRectangleWidth = leftRectangleWidth

  const sellerDetailsTextOptions = {
    width: leftRectangleWidth * (1 / 3),
    align: 'left',
  };

  const orderDetailsTextOptions = {
    width: leftRectangleWidth - 10,
    align: 'right',
  };

  const sellerDetailsTextHeight = doc.heightOfString(sellerDetails, sellerDetailsTextOptions);
  const leftRectangleHeight = (sellerDetailsTextHeight + 20) / 2;

  const orderDetailsTextHeight = doc.heightOfString(orderDetails, orderDetailsTextOptions);
  const rightRectangleHeight = (orderDetailsTextHeight + 20) / 2;

  // To make sure height of both rectangle is same
  let heightOfBoth = leftRectangleHeight > rightRectangleHeight ? leftRectangleHeight : rightRectangleHeight;

  doc.rect(50, 100, leftRectangleWidth, heightOfBoth)
    .stroke('black')
    .fillColor('black')
    .fontSize(10)
    .lineGap(8)
    .font('Helvetica')
    .text(sellerDetails, 55, 125, sellerDetailsTextOptions);

  doc.rect((doc.page.width) / 2, 100, rightRectangleWidth, heightOfBoth)
    .stroke('black')
    .fillColor('black')
    .fontSize(10)
    .lineGap(8)
    .font('Helvetica')
    .text(orderDetails, leftRectangleWidth + 55, 125, orderDetailsTextOptions);

  const orderDetailsOfOrders = {
    "S.No": 1,
    "Category": "Fish(Taipila)",
    "Unit": "KG",
    "Quantity": "500",
    "Rate INR": 24000.00,
    "Total Amounr INR": 400.00,
    "order_c": 52.00,
    "id": 1,
  }

  const tableHeaders = ['S.No', 'Category', 'Unit', 'Quantity', 'Rate INR', 'Total Amount INR', 'order_c', 'id'];
  const tableData = [
    [3, 'Fish(testingFish) kjfjldkjlajflds lkfjdlsajlfjldsaj fdsfadasfasdfasdf', 'KG', '35', '500', '450000', '540000', '1'],
    [1, 'Fish(testingFish)', 'KG', '35', '500', '450000', '540000', '1'],
    [2, 'Fish(testingFish)', 'KG', '35', '500', '450000', '540000', '1'],
    [3, 'Fish(testingFish)', 'KG', '35', '500', '450000', '540000', '1'],
    [3, 'Fish(testingFish)', 'KG', '35', '500', '450000', '540000', '1'],
    [3, 'Fish(testingFish)', 'KG', '35', '500', '450000', '540000', '1'],
    [3, 'Fish(testingFish)', 'KG', '35', '500', '450000', '540000', '1'],
    [3, 'Fish(testingFish)', 'KG', '35', '500', '450000', '540000', '1'],
    [3, 'Fish(testingFish)', 'KG', '35', '500', '450000', '540000', '1'],
    [3, 'Fish(testingFish)', 'KG', '35', '500', '450000', '540000', '1'],
    [3, 'Fish(testingFish)adfafadsfasdfasdfadsfasdfasdf', 'KG', '35', '500', '450000', '540000', '1'],
    [3, 'Fish(testingFish)', 'KG', '35', '500', '450000', '540000', '1'],
    [3, 'Fish(testingFish)', 'KG', '35', '500', '450000', '540000', '1'],
    [3, 'Fish(testingFish)', 'KG', '35', '500', '450000', '540000', '1'],
    [3, 'Fish(testingFish)', 'KG', '35', '500', '450000', '540000', '1'],
    [3, 'Fish(testingFish)', 'KG', '35', '500', '450000', '540000', '1'],
    [3, 'Fish(testingFish)', 'KG', '35', '500', '450000', '540000', '1'],
    [3, 'Fish(testingFish)', 'KG', '35', '500', '450000', '540000', '1'],
    [3, 'Fish(testingFish)', 'KG', '35', '500', '450000', '540000', '1'],
    [3, 'Fish(testingFish)', 'KG', '35', '500', '450000', '540000', '1'],
    [3, 'Fish(testingFish) fdasfasdfasfasdfasdf', 'KG', '35', '500', '450000', '540000', '1'],
    [3, 'Fish(testingFish)', 'KG', '35', '500', '450000', '540000', '1'],
    [3, 'Fish(testingFish)', 'KG', '35', '500', '450000', '540000', '1'],
    [3, 'Fish(testingFish)', 'KG', '35', '500', '450000', '540000', '1'],
    [3, 'Fish(testingFish)', 'KG', '35', '500', '450000', '540000', '1'],
    [3, 'Fish(testingFish)', 'KG', '35', '500', '450000', '540000', '1'],
    [3, 'Fish(testingFish)', 'KG', '35', '500', '450000', '540000', '1'],
    [3, 'Fish(testingFish)', 'KG', '35', '500', '450000', '540000', '1'],
    [3, 'Fish(testingFish)', 'KG', '35', '500', '450000', '540000', '1'],
    [3, 'Fish(testingFish)', 'KG', '35', '500', '450000', '540000', '1'],
    [3, 'Fish(testingFish)', 'KG', '35', '500', '450000', '540000', '1'],
    [3, 'Fish(testingFish)', 'KG', '35', '500', '450000', '540000', '1'],
    [4, 'Fish(testingFish)', 'KG', '35', '500', '450000', '540000', '1']
  ]

  const tableOptions = {
    x: 50,
    y: heightOfBoth + 100,
    columnWidths: [], // Adjust the column widths as needed
    rowHeight: 50, // Adjust the row height as needed
    fontSize: 12
  };


  for (let columnIndex = 0; columnIndex < tableHeaders.length; columnIndex++) {
    const headerText = tableHeaders[columnIndex].toString();
    const headerWidth = doc.widthOfString(headerText, { fontSize: tableOptions.fontSize }) + 20;
    tableOptions.columnWidths.push(headerWidth + 9.14);
  }

  let eachColumnStarting = 0;
  for (let columnIndex = 0; columnIndex < tableHeaders.length; columnIndex++) {
    const availableWidth = tableOptions.columnWidths[columnIndex] - 10;


    doc.rect(tableOptions.x + eachColumnStarting, tableOptions.y, tableOptions.columnWidths[columnIndex], 20)
      .stroke('black')
      .fillColor('black')
      .fillOpacity(1)
      .text(tableHeaders[columnIndex], tableOptions.x + 5 + eachColumnStarting, tableOptions.y + 5, {
        width: availableWidth,
        height: 20,
        align: 'left',
        valign: 'top',
        lineGap: 5,
        fontSize: tableOptions.fontSize
      });

    eachColumnStarting += tableOptions.columnWidths[columnIndex];
  }
  currentHeight = heightOfBoth + 120

  let currentRow = 0; // Start with the first row after the headers
  for (let rowIndex = 0; rowIndex < tableData.length; rowIndex++) {
    const rowData = tableData[rowIndex];

    // Reset the starting position for each row
    eachColumnStarting = 0;

    // Iterate over each column in the row
    for (let columnIndex = 0; columnIndex < rowData.length; columnIndex++) {

      const cellValue = rowData[columnIndex].toString();
      if (columnIndex === 0) {
        const contentHeight = doc.heightOfString(rowData[1].toString(), {
          width: tableOptions.columnWidths[1] - 10,
          align: 'left',
          lineGap: 5,
          fontSize: tableOptions.fontSize
        });
        tableOptions.rowHeight = contentHeight + 10
        // console.log(columnIndex , contentHeight)
      }
      const cellWidth = tableOptions.columnWidths[columnIndex];

      // To add extra page if current page is Full
      if (currentHeight >= pageHeight - 100) {
        doc.addPage()
        currentHeight = 50
        currentRow = 1;
        tableOptions.y = 30
      }

      doc.rect(
        tableOptions.x + eachColumnStarting, // X-coordinate of the cell
        // tableOptions.y + currentRow * tableOptions.rowHeight , // Y-coordinate of the cell
        currentHeight,
        cellWidth, // Width of the cell
        tableOptions.rowHeight // Height of the cell
      )
        .stroke('black')
        .fillColor('black')
        .fillOpacity(1)
        .text(cellValue, tableOptions.x + 5 + eachColumnStarting, tableOptions.y + 30, {
          width: cellWidth - 10,
          height: tableOptions.rowHeight,
          align: 'left',
          valign: 'top',
          lineGap: 5,
          fontSize: tableOptions.fontSize
        });

      eachColumnStarting += cellWidth;
    }
    currentHeight += tableOptions.rowHeight;
    tableOptions.y += tableOptions.rowHeight
    currentRow++; // Move to the next row
  }




  // Finalize PDF file
  doc.end();
}

module.exports = { buildPDF };