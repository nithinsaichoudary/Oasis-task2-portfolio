document.getElementById("downloadButton").addEventListener("click", function() {
    // Replace "path/to/your/pdf/file.pdf" with the actual path to your PDF file
    var pdfFilePath = "pdf/Resume.pdf";
    
    fetch(pdfFilePath)
        .then(response => response.blob())
        .then(blob => {
            // Create a temporary anchor element
            var link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            
            // Set the "download" attribute to specify the filename
            link.download = "Resume.pdf";
            
            // Append the anchor element to the body
            document.body.appendChild(link);
            
            // Trigger the click event on the anchor element
            link.click();
            
            // Remove the anchor element from the body
            document.body.removeChild(link);
        })
        .catch(error => {
            console.error("Failed to download the PDF:", error);
        });
});
