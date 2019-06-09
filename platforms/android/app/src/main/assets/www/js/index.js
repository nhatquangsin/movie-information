// // Click on a close button to hide the current list item
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//     close[i].onclick = function () {
//         var div = this.parentElement;
//         div.style.display = "none";
//     }
// }

// // Add a "checked" symbol when clicking on a list item
// var list = document.querySelector('ul');
// list.addEventListener('click', function (ev) {
//     if (ev.target.tagName === 'LI') {
//         ev.target.classList.toggle('checked');
//     }

//     todoList = todoList.map(item => {
//         if (item.id === parseInt(ev.target.id)) {
//             return {
//                 ...item,
//                 status: item.status === 'doing' ? 'done' : 'doing'
//             }
//         } else {
//             return item;
//         }
//     });

//     localStorage.setItem('todoList', JSON.stringify(todoList));
//     localStorage.setItem('count', count);
// }, false);

// // Create a new list item when clicking on the "Add" button
// function newElement() {
//     var li = document.createElement("li");
//     var inputValue = document.getElementById("myInput").value;
//     var t = document.createTextNode(inputValue);
//     li.appendChild(t);
//     li.id = count;
//     if (inputValue === '') {
//         alert("You must write something!");
//     } else {
//         todoList.push({
//             id: count++,
//             name: inputValue,
//             status: 'doing',
//         });
//         document.getElementById("myUL").appendChild(li);
//     }
//     document.getElementById("myInput").value = "";

//     var span = document.createElement("SPAN");
//     var txt = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.appendChild(txt);
//     li.appendChild(span);

//     for (i = 0; i < close.length; i++) {
//         close[i].onclick = function () {
//             var div = this.parentElement;
//             div.style.display = "none";
//         }
//     }
//     localStorage.setItem('todoList', JSON.stringify(todoList));
//     localStorage.setItem('count', count);
// }