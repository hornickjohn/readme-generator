// Returns a displayable badge that links to the license
function renderLicenseBadge(license) {
  if(license === "No License") {
    return "";
  } else {
    let formattedLicense = 'License Badge Retrieval Error';
    if(license === "MIT License") {
      formattedLicense = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    } else if(license === "ISC License") {
      formattedLicense = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
    } else if(license === "IBM License") {
      formattedLicense = `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
    } else if(license === "Eclipse License") {
      formattedLicense = `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
    } else if(license === "Apache License") {
      formattedLicense = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    } else if(license === "Boost License") {
      formattedLicense = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
    }
    return formattedLicense + '\n\n';
  }
}

//Creates a link to the license
function renderLicenseLink(license) {
  if(license === "No License") {
    return "";
  } else {
    if(license === "MIT License") {
      return `[${license}](https://opensource.org/licenses/MIT)`;
    } else if(license === "ISC License") {
      return `[${license}](https://opensource.org/licenses/ISC)`;
    } else if(license === "IBM License") {
      return `[${license}](https://opensource.org/licenses/IPL-1.0)`;
    } else if(license === "Eclipse License") {
      return `[${license}](https://opensource.org/licenses/EPL-1.0)`;
    } else if(license === "Apache License") {
      return `[${license}](https://opensource.org/licenses/Apache-2.0)`;
    } else if(license === "Boost License") {
      return `[${license}](https://www.boost.org/LICENSE_1_0.txt)`;
    }
  }
}

// Displays the hyperlinked license in license section
function renderLicenseSection(license) {
  if(license === "No License") {
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
  if(data.license !== "No License") {
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
  renderLicenseBadge(data.license) + 
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
