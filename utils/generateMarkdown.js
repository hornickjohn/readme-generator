// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return license + ".com or something lmao";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === "no license") {
    return "";
  } else {
    return `## License

${license} - ${renderLicenseLink(license)}

`;
  }
}

function renderGenericSection(name,content) {
  if(content === "") {
    return "";
  } else {
    return `## ${name}

${content}

`;
  }
}

function renderTableOfContents(data) {

}

function renderQuestions(username,email) {
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return "# " + data.title + "\n\n" + 
  renderTableOfContents(data) + 
  renderGenericSection('Description',data.description) + 
  renderGenericSection('Installation',data.installation) + 
  renderGenericSection('Usage',data.usage) + 
  renderGenericSection('Contributing',data.contributing) + 
  renderGenericSection('Tests',data.tests) + 
  renderLicenseSection(data.license);
}

module.exports = generateMarkdown;
