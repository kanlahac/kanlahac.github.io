function changePage(pageNumber) {

    document.querySelectorAll('.page-content').forEach(function(page) {
        page.classList.remove('active');
    });

    const activePage = document.getElementById(`page_${pageNumber}`);
    if (activePage) {
        activePage.classList.add('active');
    }
    
    document.querySelectorAll('.pagination .page-item').forEach(function(item) {
        item.classList.remove('active');
    });
    document.querySelector(`.pagination .page-item:nth-child(${pageNumber})`).classList.add('active');
}

changePage(1);