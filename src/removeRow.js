
function removeRow(id){
    const delTarget = document.getElementById(id)
    if (delTarget) delTarget.parentNode.removeChild(delTarget);
}

export default removeRow