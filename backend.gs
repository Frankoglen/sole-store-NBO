// SOLE Backend - Google Apps Script
// Instructions: Paste this entirely into extensions -> Apps Script in your Google Sheet.
// Deploy as "Web App" accessible to "Anyone" and copy the resulting URL into your index.html.

const SHEET_ID = '1-qBwFRvV1C_P8N6Xz5SVv909mAI6pedeRVWQj4yMU8A';
const NOTIFICATION_EMAIL = 'glenfranco33@gmail.com';

function doGet(e) {
  try {
    var sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName('Products');
    // If you don't have a "Products" tab, the code will fail here. Please create one with columns: ID, Name, Price, Tag, Image, Description
    var data = sheet.getDataRange().getValues();
    var headers = data[0];
    var products = [];
    
    // Convert rows to JSON objects based on header names
    for (var i = 1; i < data.length; i++) {
      var row = data[i];
      var product = {};
      for (var j = 0; j < headers.length; j++) {
        var key = headers[j];
        var val = row[j];
  
        // 💡 Automatic Google Drive Image Link Conversion
        if (key === 'Image') {
           val = toDirectDriveLink(val);
        }
  
        product[key] = val;
      }
      products.push(product);
    }
    
    // Return standard JSON response
    return ContentService.createTextOutput(JSON.stringify({ status: 'success', data: products }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName('Orders');
    
    // Because simple fetch with POST JSON can trigger CORS preflight logic (which Apps Script poorly handles),
    // we use "text/plain" headers from the frontend and parse the JSON string back to an object.
    var orderData = JSON.parse(e.postData.contents);
    
    var timestamp = new Date();
    var orderId = 'NBO-' + Math.floor(10000 + Math.random() * 90000);
    
    // Prepare the new row (Ensure your "Orders" tab has 10 columns to match this)
    var orderRow = [
      timestamp,
      orderId,
      orderData.name,
      orderData.phone,
      orderData.location,
      orderData.delivery_zone,
      orderData.product_name,
      orderData.size,
      orderData.total_price,
      orderData.notes || ''
    ];
    
    // Append to the sheet
    sheet.appendRow(orderRow);
    
    // Dispatch Email Notification
    sendEmailNotification(orderId, orderData);
    
    return ContentService.createTextOutput(JSON.stringify({ status: 'success', orderId: orderId }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function sendEmailNotification(orderId, orderData) {
  var subject = "🛍️ NEW SOLE ORDER: " + orderId;
  var body = "🛍️ NEW SOLE ORDER: " + orderId + "\n\n" +
                "👤 Name: " + orderData.name + "\n" +
                "📞 Phone: " + orderData.phone + "\n" +
                "📍 Area: " + orderData.location + "\n" +
                "🚚 Zone: " + orderData.delivery_zone + "\n" +
                "👟 Product: " + orderData.product_name + " (Size: " + orderData.size + ")\n" +
                "💰 Total: KES " + orderData.total_price + "\n" +
                "📝 Notes: " + (orderData.notes || 'None');
                
  try {
    MailApp.sendEmail(NOTIFICATION_EMAIL, subject, body);
  } catch (e) {
    // Graceful fail so the order sheet still processes
  }
}

// 💡 Helper function to convert Google Drive "view" links to direct image links
function toDirectDriveLink(url) {
  if (!url || typeof url !== 'string') return url;
  if (!url.includes('drive.google.com')) return url;
  
  // Extract ID using regex (handles /d/ID/view, /file/d/ID, and ?id=ID)
  var match = url.match(/\/d\/(.+?)(\/|$|\?)/) || url.match(/id=(.+?)(&|$)/);
  if (match && match[1]) {
    return "https://lh3.googleusercontent.com/d/" + match[1];
  }
  return url;
}
