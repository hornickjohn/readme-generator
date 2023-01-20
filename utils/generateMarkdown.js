// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {

}

//Creates a link to the license
function renderLicenseLink(license) {
  //TODO actually figure out the link
  return `[${license}]()`;
}

// Displays the hyperlinked license in license section
function renderLicenseSection(license) {
  if(license === "no license") {
    return "";
  } else {
    return `## License

${renderLicenseLink(license)}

`;
  }
}

//Renders any section that is just a string of content below a title
function renderGenericSection(name,content) {
  if(content === "") {
    return "";
  } else {
    return `## ${name}

${content}

`;
  }
}

// Fill table of contents with links to each section that will exist
function renderTableOfContents(data) {
  let rv = `## Table of Contents
  
`;
  if(data.description !== "") {
    rv += `* [Description](#description)
`;
  }
  if(data.installation !== "") {
    rv += `* [Installation](#installation)
`;
  }
  if(data.usage !== "") {
    rv += `* [Usage](#usage)
`;
  }
  if(data.contributing !== "") {
    rv += `* [Contributing](#contributing)
`;
  }
  if(data.tests !== "") {
    rv += `* [Tests](#tests)
`;
  }
  if(data.license !== "no license") {
    rv += `* [License](#license)
`;
  }
  if(data.email !== "" || data.username !== "") {
    rv += `* [Questions](#questions)
`;
  }
  rv += `
`;
  return rv;
}

//Put email and/or username in Questions section
function renderQuestionsSection(username,email) {
  if(username === "" && email === "") {
    return "";
  } else {
    return `## Questions

Contact with questions/comments:
* GitHub: [${username}](https://github.com/${username})
* Email: ${email}
    
`;
  }
}

//Pass the data around to section functions to render each part in order
function generateMarkdown(data) {
  return "# " + data.title + "\n\n" + 
  renderTableOfContents(data) + 
  renderGenericSection('Description',data.description) + 
  renderGenericSection('Installation',data.installation) + 
  renderGenericSection('Usage',data.usage) + 
  renderGenericSection('Contributing',data.contributing) + 
  renderGenericSection('Tests',data.tests) + 
  renderLicenseSection(data.license) + 
  renderQuestionsSection(data.username, data.email);  
}

module.exports = generateMarkdown;
