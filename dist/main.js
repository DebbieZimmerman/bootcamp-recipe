const display = function () {
    const ingredient = $(input).val()
    $(input).val('')
    $.get(`/recipes/${ingredient}`, function (recipes) {
        renderer.render(recipes)
    })
}