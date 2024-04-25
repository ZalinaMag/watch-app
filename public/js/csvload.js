if (document.querySelector(".users-list")) {
  const userList = document.querySelector(".users-list");
  userList.innerHTML = `
  <input type="button" value="download CSV" onclick="downloadCSV()"></input>
  `;
}

async function downloadCSV() {
  const response = await fetch("/api/user");
  const allUsers = await response.json();
  console.log(allUsers);
  const csv = Papa.unparse(allUsers);

  const csvData = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  let csvURL = null;
  if (navigator.msSaveBlob) {
    csvURL = navigator.msSaveBlob(csvData, "download.csv");
  } else {
    csvURL = window.URL.createObjectURL(csvData);
  }

  const tempLink = document.createElement("a");
  tempLink.href = csvURL;
  tempLink.setAttribute("download", "download.csv");
  tempLink.click();
}
