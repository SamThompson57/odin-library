function createAndInsertBook(id) {
    const container = document.createElement('div');
    
    // Here we are adding the elements of the row
    container.innerHTML = (
        '<div class="title"></div>' +
        '<div class="author"></div>' +
        '<div class="pages"></div>' +
        '<img class="read"></div>' +
        '<img class="delete"></div>'
    )
    
    container.setAttribute('id', id)
    container.setAttribute('class', 'tableRow')

    return container
}

export default createAndInsertBook