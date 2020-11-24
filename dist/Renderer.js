class Renderer {
    render (data) {
    const source = $('#recipes-template').html()
    const template = Handlebars.compile(source)
    const newHTML = template({data})
    $('#recipes-container').empty().append(newHTML)
}
}