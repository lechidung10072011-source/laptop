const REAL_API_URL = "https://githubusercontent.com" + new Date().getTime();

async function renderProducts() {
    const productContainer = document.getElementById("product-container");
    if (!productContainer) return;

    try {
        const response = await fetch(REAL_API_URL);
        
        if (!response.ok) {
            throw new Error(response.status);
        }

        const laptops = await response.json();
        productContainer.innerHTML = "";

        laptops.forEach(laptop => {
            const cardHtml = `
                <div class="col-12 col-md-6 col-lg-3"> 
                    <div class="card h-100 shadow-sm border-0 product-card"> 
                        <div class="img-container text-center pt-3"> 
                            <img src="${laptop.image}" class="card-img-top p-2" alt="${laptop.name}" style="max-height: 180px; object-fit: contain;"> 
                        </div> 
                        <div class="card-body d-flex flex-column"> 
                            <h5 class="card-title fw-bold text-dark">${laptop.name}</h5> 
                            <p class="card-text text-muted small">${laptop.specs}</p> 
                            <div class="mt-auto"> 
                                <span class="text-danger fw-bold fs-5 d-block mb-2">$${laptop.price}</span> 
                                <button class="btn btn-dark btn-sm w-100 py-2"> Add to Cart </button> 
                            </div> 
                        </div> 
                    </div> 
                </div>
            `;
            productContainer.insertAdjacentHTML("beforeend", cardHtml);
        });

    } catch (error) {
        console.error(error);
        productContainer.innerHTML = `<p class="text-center text-danger w-100 my-5">Lỗi kết nối dữ liệu hệ thống.</p>`;
    }
}

document.addEventListener("DOMContentLoaded", renderProducts);
