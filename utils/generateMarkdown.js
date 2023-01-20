// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return license + ".com or something";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === "no license") {
    return "";
  } else {
    return `## <a name="License"></a> License

${license} - ${renderLicenseLink(license)}

`;
  }
}

function renderGenericSection(name,content) {
  if(content === "") {
    return "";
  } else {
    return `## <a name="${name}"></a> ${name}

${content}

`;
  }
}

function renderTableOfContents(data) {
  let rv = `## Table of Contents
  
`;
  if(data.description !== "") {
    rv += `* [Description](#Description)
`;
  }
  if(data.installation !== "") {
    rv += `* [Installation](#Installation)
`;
  }
  if(data.usage !== "") {
    rv += `* [Usage](#Usage)
`;
  }
  if(data.contributing !== "") {
    rv += `* [Contributing](#Contributing)
`;
  }
  if(data.tests !== "") {
    rv += `* [Tests](#Tests)
`;
  }
  if(data.license !== "no license") {
    rv += `* [License](#License)
`;
  }
  if(data.email !== "" || data.username !== "") {
    rv += `* [Questions](#Questions)
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
    return `## <a name="Questions"></a> Questions

Contact with questions/comments:
GitHub Username: ${username}
Email: ${email}
    
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
