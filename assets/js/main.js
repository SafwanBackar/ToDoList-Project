// Slashing out todo
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed")
})
// X button to remove the todo
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(300, function () {
        $(this).remove()
    });
    event.stopPropagation();
})

//  Adding new todo via input
$("input").keypress(function (event) {
    if (event.which === 13) {
        var toDoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa-solid fa-trash-can' ></i ></span >" + toDoText + "</li>")
    }
})
// Togging '+' icon
$(".fa-plus").click(function (eve) {
    $('input').fadeToggle()
})
