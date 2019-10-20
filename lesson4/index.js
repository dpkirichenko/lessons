
window.onload = function() {
    
    let searchInputClassName = 'header-search__input'
    let searchInputActiveClassName = 'header-search_active'
    let headerCreate = 'header__create'
    let headerDetailsMenu = 'header__details-menu'



    let searchInput = document.querySelector('.' + searchInputClassName)
    
    searchInput.onclick = function() {
        searchInput.parentElement.classList.add(searchInputActiveClassName)
    }


    document.onclick = function (e) {
        e = e || event;
        target = e.target || e.srcElement;
        if (target.className !== searchInputClassName) {
            searchInput.parentElement.classList.remove(searchInputActiveClassName)
        }
    }
}

    