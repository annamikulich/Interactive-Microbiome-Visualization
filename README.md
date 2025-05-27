# Microbiome Dashboard (D3.js)

An interactive dashboard built with D3.js for exploring bacterial biodiversity in human belly buttons. This project uses JSON-formatted microbiome data and renders bar charts, bubble charts, and metadata panels dynamically based on user selection.

## 🌱 Project Overview

- **Frontend**: HTML/CSS + D3.js
- **Data Source**: `samples.json` (static JSON file)
- **Key Features**:
  - Dropdown selector for test subject ID
  - Interactive bar chart (Top 10 bacterial cultures)
  - Bubble chart for all OTU samples
  - Dynamic demographic info panel

## 📁 Structure
├── index.html # Main HTML structure
├── static/
│ ├── css/style.css # Custom styles
│ ├── js/app.js # D3 logic and interactivity
├── data/samples.json # Microbiome dataset

## ⚙️ Technologies Used

- [D3.js v5](https://d3js.org/)
- HTML5, CSS3
- JSON (static backend)
- Bootstrap (optional)

## 📸 Sample Output

### Bar Chart (Top 10 OTUs)
![Bar Chart](static/images/bar_chart_sample.png)

## 🚀 Getting Started

1. Clone the repo  

Open index.html in your browser
(No server required since data is local)
📌 License

MIT License — feel free to reuse with attribution.
