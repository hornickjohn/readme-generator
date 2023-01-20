// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `[${license}]()`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === "no license") {
    return "";
  } else {
    return `## License

${renderLicenseLink(license)}

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

// TODO: Create a function to generate markdown for README
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
