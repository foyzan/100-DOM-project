const insert = document.querySelector("#insert");

window.addEventListener('keydown', function(event){

    insert.innerHTML = ` 
    <div class="color">
        <table>
          <tr>
            <th>key</th>
            <th>keycode</th>
            <th>code</th>
          </tr>
          <tr>
            <td>${event.key}</td>
            <td>${event.keycode}</td>
            <td>${event.code}</td>
            
          </tr>
          
        </table>
      </div>`
})