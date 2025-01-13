function moveToSelected(element) {
    let selected = $(".selected");
    
    if (element === "next") {
        selected = selected.next().length ? selected.next() : $("#carousel div:first");
    } else if (element === "prev") {
        selected = selected.prev().length ? selected.prev() : $("#carousel div:last");
    }

    let next = selected.next().length ? selected.next() : $("#carousel div:first");
    let prev = selected.prev().length ? selected.prev() : $("#carousel div:last");
    let prevSecond = prev.prev().length ? prev.prev() : $("#carousel div:last");
    let nextSecond = next.next().length ? next.next() : $("#carousel div:first");

    $("#carousel div").removeClass();

    selected.addClass("selected");
    prev.addClass("prev");
    next.addClass("next");
    prevSecond.addClass("prevLeftSecond");
    nextSecond.addClass("nextRightSecond");

    nextSecond.nextAll().addClass('hideRight');
    prevSecond.prevAll().addClass('hideLeft');
}

// Event listeners for buttons
$('#prev').click(function () {
    moveToSelected('prev');
});

$('#next').click(function () {
    moveToSelected('next');
});

// Optional: Keydown event for keyboard navigation
$(document).keydown(function (e) {
    switch (e.which) {
        case 37: // left arrow
            moveToSelected('prev');
            break;
        case 39: // right arrow
            moveToSelected('next');
            break;
        default:
            return;
    }
    e.preventDefault();
});

