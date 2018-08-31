async function getJson(url) {
  const jsonResponse = await fetch(url, {
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return jsonResponse.json();
}

function displayErrors(errors) {
  let resultsHtml = '';

  const totalErrors = errors.length.toString();
  const resultTotals = `<div class='row align-items-center'>` +
    `<div class='col'>` +
      `<span class='error-title'>Total Errors: ${totalErrors}</span>` +
      `<a id='toggle-content-panes' class='toggle-content-panes'>Show code.json and json-schema</a>` +
    `</div>` +
  `</div>`;

  for(let error of errors) {
    const list = `<ul class='error-data'>` +
      `<li class='error-item'><span>Error Type:</span> ${error.keyword}</li>` +
      `<li class='error-item'><span>Element Path:</span> ${error.dataPath}</li>` +
      `<li class='error-item'><span>Error Message:</span> ${error.message}</li>` +
      `</ul>`;

    resultsHtml += `<div class='row'>` +
      `<div class='col'>${list}</div>`+
      `</div>` +
      `<hr />`;
  }
  return resultTotals + resultsHtml;
}

module.exports = {
  getJson,
  displayErrors
}