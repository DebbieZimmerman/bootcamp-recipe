class Renderer {
    constructor () {
            }
    render = (recipes) => {
    const source = $('#recipes-template').html()
    const template = Handlebars.compile(source)
    const newHTML = template({recipes})
    $('#recipes-container').empty().append(newHTML)
    }
}

const renderer = new Renderer