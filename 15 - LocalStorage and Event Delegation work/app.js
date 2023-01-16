const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = [];

function addItem(e) {
  e.preventDefault();
  const text = (this.querySelector("[name=item]")).value;
  const item = {
    text,
    done: false,
  };
  //console.log(item)
  items.push(item)
  this.reset();
}

addItems.addEventListener('submit',addItem)
// 07:00-da qaldim
