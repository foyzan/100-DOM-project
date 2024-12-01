// 
// Select the element where the key information will be inserted
const insert = document.querySelector("#insert");

// Add an event listener for keydown events
window.addEventListener('keydown', function(event) {
    // Update the inner HTML of the insert element with the key information
    insert.innerHTML = ` 
    <div class="color">
        <table>
          <tr>
            <th>Key</th>
            <th>KeyCode</th>
            <th>Code</th>
          </tr>
          <tr>
            <td>${event.key}</td>
            <td>${event.keyCode}</td>
            <td>${event.code}</td>
          </tr>
        </table>
      </div>`;
});
