export const galleryIndex = (res, category)=>{
    let {products} = res.data
    let plantilla = "";
    products.forEach((value,index) => {
        plantilla += /*html*/`
        <section>
           <div class="section__front_page">
               <a href="views/detail.html?id=${value.asin}">
                   <img src="${value.product_photo}">
               </a>
               <img src="../storage/img/heart.svg">
           </div>
           <h5>${value.product_title}</h5>
           <small>${category}</small>
           <div class="section__price">
               <span>${value.product_price}</span>
               <div  class="price__score">
                   <img src="storage/img/star.svg">
                   <p>${(value.product_star_rating!=null) ? value.product_star_rating : 0}</p>
               </div>
           </div>
       </section>
       `;
    });
    return plantilla
};
export const galleryCategory = ({data: {product_photos}} = res)=>{
    return /*html*/`
        <article class="article__product">
            <div class="product__image">
                ${product_photos.map(value => `<div class="product__image__item"><img src="${value}"></div>`).join('')}
            </div>
            <div class="product__menu">
                <a href="../?id='fashion'">
                    <img src="../storage/img/back.svg">
                </a>
            </div>
        </article>`;
}

export const galleryCheckout = async (res) => {
    let plantilla = "";
    const sum = []
    res.forEach((dict) => {
        console.log(dict);
        if (dict.checkout) {
            let {data} = dict
            let descripcion = (data.product_title).substring(0, 17) + '...';
            let category = () => {
                let catg;
                if (data.category_path.length > 0) {
                    let firtsCategory = data.category_path[0];
                    if (typeof(firtsCategory.name) !== "undefined") {
                        catg = firtsCategory.name;
                    }
                } else {
                    catg = "";
                }
                return catg;
            };
            let contentFuction = category();
            plantilla +=/*html*/`
                    <div class="mm"><img src="../storage/img/img3.png" class="i"></div>
                    <div class="infofoto">
                        <span class="semibold">Modern light clothes</span>
                        <p class="regular">Dress modern</p>
                        <p class="semibold">$212.22</p>
                    </div>
                    <div class="sumres">
                        <div class="trespuntos">
                            <img src="../storage/img/Menupuntos.svg">
                            
                        </div>
                        <div class="seleccion">
                            <img src="../storage/img/Group 3245menos.svg">
                            <span> 4 </span>
                            <img src="../storage/img/Group 3247mas.svg">
                        </div> 
                    </div> 
                    `}
            else return;
        })
        return plantilla;
    };

export const priceCheckout = async (res) => {
    const sum = []
    res.forEach((dict) => {
        console.log(dict);
        if (dict.checkout) {
            let {data} = dict
            let num = parseFloat(data.product_price.replace('$',''))
            console.log(num);
            sum.push(num);
            console.log(sum)
        }
    })
    return sum;
}; 