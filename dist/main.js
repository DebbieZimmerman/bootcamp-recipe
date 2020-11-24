const display = function () {
    const ingredient = $(input).val()
    $(input).val('')
    $.get(`/recipes/${ingredient}`, function (recipes) {
        renderer.render(recipes)
    })
}

$("#recipes-container").on("click", ".recipe-image", function() {
    alert($(this).siblings(".ingredients").find("li").html());
  })
  