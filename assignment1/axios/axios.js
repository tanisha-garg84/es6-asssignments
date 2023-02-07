const comments = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
      const data = response.data;
  
      $(".body")[$(".body").length-1].innerHTML += '<table class="table table-Secondary"></table>'
      let table = $("table")[$("table").length-1];
      createHeadingRow(table,Object.keys(data[0]));
      createDataRows(table,data);
  
    } catch (errors) {
      console.log(errors);
    }
  };
  
  function createHeadingRow(table,data) {
    let tablehead = table.createTBody();
    let row = tablehead.insertRow();
    for (let key of data) {
      if (key != "body") {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th); 
      }
    }
  }
  
  function createDataRows(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        if (key != "body") {
          let cell = row.insertCell();
          let text = document.createTextNode(element[key]);
          cell.appendChild(text); 
        }
      }
    }
  }
  comments();
     