const Renderer = function (recipes) {
    const source = $('#recipes-template').html()
    const template = Handlebars.compile(source)
    const newHTML = template({recipes})
    $('#recipes-container').empty().append(newHTML)
}
