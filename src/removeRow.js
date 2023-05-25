function removeRow(id){
    const delTarget = document.querySelectorAll(`.row${id}`)
    console.log(delTarget)
    delTarget.forEach(element => element.remove());
}

export default removeRow