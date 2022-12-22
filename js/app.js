window.addEventListener("DOMContentLoaded",()=>{


class Dropdown {
  constructor(selector, options){
    this.element = document.querySelector(selector);
    this.items = options.items;
    this.element.querySelector(".dropdown__label").innerHTML =
    this.items[0].label;
 

    let itemsHTML = this.items.map(function (item) {
      return `<li data-id = "${item.id}" class="dropdown__item">${item.label}</li>`;
    });
    itemsHTML = itemsHTML.join(" ")
    this.element.querySelector(".dropdown__items").innerHTML = itemsHTML;

    this.element.addEventListener('click',(e)=>{
      let target = e.target;
      if(target.classList.contains('dropdown__label')){
        if(this.element.classList.contains('open')){
          this.close();
        } else{
          this.open();
        }
      } else if(target.classList.contains('dropdown__item')){
        this.select(target.dataset.id);
      }
    });
  }


  select(id){
  const item =  this.items.find(function (i) {
    return i.id === id;
  })
  this.element.querySelector(".dropdown__label").innerHTML = item.label;
  this.close();
  }

  open(){
    this.element.classList.add('open');
  }

  close(){
   this.element.classList.remove("open");
  }
}


const dropdown = new Dropdown(".dropdown", {
  items: [
    { label: "Київ", id: "ky" },
    { label: "Одеса", id: "od" },
    { label: "Вінниця", id: "vin" },
  ],
});



});