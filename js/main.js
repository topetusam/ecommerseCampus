import { getAllProductName} from "./module/detail/detail"

// let header__information = document.querySelector(".header__information")
// console.log(header__information);


let input__search = document.querySelector("#input_search"); 

input_search.addEventListener("change",async e => {
    let data = {search : e.target.value}
    let res = await getAllProductName(data);
    console.log(res);
});