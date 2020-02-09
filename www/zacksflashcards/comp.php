<html>
  <head>
    <title>Zack's Flash Cards - Editor</title>
    <style type="text/css">
      .textbox {
        border: 2px outset blue;
      }
    </style>
    <script type="text/javascript"><!--
      function addRow() {
        rows = howMany()+1;
        table = document.getElementById("editorTableBody");
        {
        newRow = document.createElement("tr");
        newRow.setAttribute("id","tr"+rows);
        }{
        deleteButton = document.createElement("input");
        deleteButton.setAttribute("type","button");
        deleteButton.setAttribute("value","delete");
        deleteButton.setAttribute("onclick","remove(this)");
        }{
        newCell = document.createElement("td");
        newCell.setAttribute("width","55");
        }{
        newCell2 = document.createElement("td");
        newCell2.setAttribute("id","td"+rows+",1");
        newCell2.setAttribute("class","textbox");
        newCell2.setAttribute("contenteditable",true);
        }{
        newCell3 = document.createElement("td");
        newCell3.setAttribute("id","td"+rows+",2");
        newCell3.setAttribute("class","textbox");
        newCell3.setAttribute("contenteditable",true);
        }
        table.appendChild(newRow);
        newRow.appendChild(newCell);
        newCell.appendChild(deleteButton);
        newRow.appendChild(newCell2);
        newRow.appendChild(newCell3);
      }
      function remove(element) {
        element.setAttribute("value","\"THIS\" works.");
        theRow = element.parentNode.parentNode;
        theRow.parentNode.removeChild(theRow); //removeChild is the only remove method, so I needed to go to the parent first.
      }
      function howMany() {
        b = 1
        a = document.getElementById("tr1");
        while(a!=null) {
          b += 1
          a = document.getElementById("tr"+b);
        }
        return b-1;
      }
    --></script>
  </head>
  <body>
    <table width=100%>
      <tbody id="editorTableBody">
        <tr>
          <th width=55>
          <th width=50%>Question</td>
          <th>Answer</td>
        </tr>
        <tr id="tr1">
          <td width=55><input type="button" value="delete" onclick="remove(this)">
          <td width=50% class="textbox" contenteditable=true id="td1,1"></td>
          <td width=50% class="textbox" contenteditable=true id="td1,2"></td>
        </tr>
      </tbody>
    </table>
    <input type="button" value="Add Card" onclick="addRow()" />
  </body>
</html>