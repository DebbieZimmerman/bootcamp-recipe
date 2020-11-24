const render = Renderer()

const display = function () {
    const ingredient = $(input).val()
    $(input).val('')
    $.get(`/recipes/${ingredient}`, function (recipes) {
        render(recipes)
    })
}