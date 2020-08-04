$(document).ready(function() {
    $("button").click(function() {
        if ($("button").text() == "☰") {
            $("button").text("X");
        } else {
            $("button").text("☰");
        }

        $("li").toggle("slow");
    });
});