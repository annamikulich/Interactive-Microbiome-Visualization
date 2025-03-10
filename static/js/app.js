// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    console.log("Metadata for sample:", sample);
  
    // get the metadata field
    let metadata = data.metadata


    // Filter the metadata for the object with the desired sample number
    let resultArray = metadata.filter(sampleObj => sampleObj.id == +sample);
    let result = resultArray[0];


    // Use d3 to select the panel with id of `#sample-metadata`
    let panel = d3.select("#sample-metadata");


    // Use `.html("") to clear any existing metadata
    panel.html("")


    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.
    Object.entries(result).forEach(([key, value]) => {
      panel.append("p").text(`${key}: ${value}`);
    });

  });
}

// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    console.log("Building charts for sample:", sample);

    // Get the samples field
    let samples = data.samples;


    // Filter the samples for the object with the desired sample number
    let resultArray = samples.filter(sampleObj => sampleObj.id == +sample);
    let result = resultArray[0]; 


    // Get the otu_ids, otu_labels, and sample_values
    let otu_ids = result.otu_ids;
    let otu_labels = result.otu_labels;
    let sample_values = result.sample_values;


    // Build a Bubble Chart
    let bubbleData = [{
      x: otu_ids,
      y: sample_values, 
      text: otu_labels, 
      mode: "markers",
      marker: {
        size: sample_values,
        color: otu_ids,
        colorscale: "Earth"
      }
    }];
    
    let bubbleLayout = {
      title: "Bacteria Cultures Per Sample",
      xaxis: {title: "OTU ID"}, 
      yaxis: {title: "Numbers of Bacteria" },
      hovermode: "closest"
    };

    // Render the Bubble Chart
    Plotly.newPlot("bubble", bubbleData, bubbleLayout);


    // For the Bar Chart, map the otu_ids to a list of strings for your yticks
    let yticks = otu_ids.slice(0,10).map(otuID => `OTU ${otuID}`).reverse();


    let barData = [{
      y: yticks,
      x: sample_values.slice(0,10).reverse(),
      text: otu_labels.slice(0,10).reverse(),
      type: "bar", 
      orientation: "h"
    }];

    let barLayout = {
      title: "Top 10 Bacteria Cultures Found",
      margin: { l: 100, r: 50, t: 50, b: 50 },
      xaxis: { title: "Number of Bacteria" }
    };
    


    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately


    // Render the Bar Chart
    Plotly.newPlot("bar", barData, barLayout);

  });
}

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
  console.log ("Loaded Data:", data); 
  

    // Get the names field
    let sampleNames = data.names;
    console.log("Sample Names:", sampleNames);



    // Use d3 to select the dropdown with id of `#selDataset`
    let dropdown = d3.select("#selDataset");


    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.
    sampleNames.forEach(sample => {
      dropdown.append("option")
            .text(sample)
            .attr("value", sample);
    });


    // Get the first sample from the list
    let firstSample = sampleNames[0];
    console.log("First Sample:", firstSample);


    // Build charts and metadata panel with the first sample
    buildMetadata(firstSample);
    buildCharts(firstSample);
  });
}

// Function for event listener
function optionChanged(newSample) {
  console.log("New Sample Selected:", newSample);
  // Build charts and metadata panel each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);

}

// Initialize the dashboard
init();
