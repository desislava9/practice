function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const searchInputRef = document.getElementById("searchField");
   const tableRows = document.querySelectorAll("tbody tr");
   function onClick() {
     let searchText = searchInputRef.value ;
     for (let tableRow of tableRows) {
      let tableData = tableRow.querySelectorAll("td");
      for (let data of tableData) {
        if (data.textContent.includes(searchText)) {
         tableRow.classList.add("select");
         break;
        } else {
         tableRow.classList.remove("select");
        }
      }
     }
   searchInputRef.value = "";
   }
}