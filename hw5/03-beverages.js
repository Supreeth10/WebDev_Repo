$(document).ready(function () {
  const url =
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";

  $("#results").css({
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
  });

  // Add your code here
  const addBookToDOM = (item) => {
    $("#results").append(
      $("<div>")
        .addClass("figure")
        .css({
          margin: "5px",
          height: "350px",
          width: "340px",
        })
        .append(
          $("<img>")
            .attr("src", `${item.strDrinkThumb}`)
            .attr("height", "250px")
            .attr("width", "320px")
        )
        .append($("<p>").attr("fontWeight", "bold").text(item.strDrink))
    );
  };

  const fetchData = (url) => {
    $.ajax({
      type: "GET",
      url: url,
      dataType: "JSON",
      success: (data) => {
        if (typeof data !== "undefined") {
          const arr = data.drinks.map((item) => addBookToDOM(item));
        } else ErrorHandler();
      },
      error: (error) => {
        ErrorHandler();
      },
      complete: () => {
        $("#loading").remove();
      },
    });
  };

  function ErrorHandler() {
    $("#results").append("<div>").text(`An error occurred. Please try again.`);
  }

  fetchData(url);
});
