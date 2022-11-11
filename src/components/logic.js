const loadReq = () => {
  const url =
    "https://docs.google.com/spreadsheets/d/1Dni_Njxhs1dorEpyFJ9WEdiU9CF75i1ehm70j_LBleE/gviz/tq?";
  const output = document.querySelector(".output");

  fetch(url)
    .then((res) => res.text())
    .then((rep) => {
      const data = JSON.parse(rep.substring(47).slice(0, -2));
      const row = document.createElement("tr");
      row.classList.add("headerList");
      output.append(row);
      data.table.cols.forEach((heading) => {
        const cell = document.createElement("td");
        cell.textContent = heading.label;
        row.append(cell);
      });
      data.table.rows.forEach((main) => {
        const container = document.createElement("tr");
        output.append(container);
        //console.log(main.c);
        main.c.forEach((ele) => {
          const cell = document.createElement("td");
          cell.textContent = ele.v;
          container.append(cell);
        });
      });
    });
};

export default loadReq;
