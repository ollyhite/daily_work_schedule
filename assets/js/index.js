var today = moment();

$("#month").val(today.format("MM"));
$("#day").val(today.format("DD"));
$("#year").val(today.format("YYYY"));
$(".save-notice").hide()

var currentHour = today.format("HH");
currentHour=parseInt(currentHour);
console.log("currentHour",currentHour);


//seclet class .each() 
//
// $(".schudle-form input").each(function(){
$(".schudle-form").find("input").each(function(){
    var inputID =$(this).attr('id').match(/[0-9]/g).join("")
    inputID=parseInt(inputID);
    // console.log(inputID);
    if(currentHour===inputID){
        $(this).addClass("currentTime");
    }else if(currentHour < inputID){
        $(this).addClass("futureTime")
    }else{
        $(this).addClass("pastTime")
    }
})

$("#input-09").val(localStorage.getItem("hour-09"))
$("#input-10").val(localStorage.getItem("hour-10"))
$("#input-11").val(localStorage.getItem("hour-11"))
$("#input-12").val(localStorage.getItem("hour-12"))
$("#input-13").val(localStorage.getItem("hour-13"))
$("#input-14").val(localStorage.getItem("hour-14"))
$("#input-15").val(localStorage.getItem("hour-15"))
$("#input-16").val(localStorage.getItem("hour-16"))
$("#input-17").val(localStorage.getItem("hour-17"))

function showNotice(){
    $(".save-notice").show()
    setTimeout(function() { 
            $(".save-notice").hide()
    }, 1000);
}

$("#btn-09").click(function(){
    var inputVal=$(this).siblings('input').val();
    console.log(inputVal);
    localStorage.setItem("hour-09",inputVal)
    showNotice();
})
$("#btn-10").click(function(){
    var inputVal=$(this).siblings('input').val();
    console.log(inputVal);
    localStorage.setItem("hour-10",inputVal)
    showNotice();


})
$("#btn-11").click(function(){
    var inputVal=$(this).siblings('input').val();
    console.log(inputVal);
    localStorage.setItem("hour-11",inputVal)
    showNotice();

})
$("#btn-12").click(function(){
    var inputVal=$(this).siblings('input').val();
    console.log(inputVal);
    localStorage.setItem("hour-12",inputVal)
    showNotice();


})
$("#btn-13").click(function(){
    var inputVal=$(this).siblings('input').val();
    console.log(inputVal);
    localStorage.setItem("hour-13",inputVal)
    showNotice();

})
$("#btn-14").click(function(){
    var inputVal=$(this).siblings('input').val();
    console.log(inputVal);
    localStorage.setItem("hour-14",inputVal)
    showNotice();


})
$("#btn-15").click(function(){
    var inputVal=$(this).siblings('input').val();
    console.log(inputVal);
    localStorage.setItem("hour-15",inputVal)
    showNotice();

})
$("#btn-16").click(function(){
    var inputVal=$(this).siblings('input').val();
    console.log(inputVal);
    localStorage.setItem("hour-16",inputVal)
    showNotice();

})
$("#btn-17").click(function(){
    var inputVal=$(this).siblings('input').val();
    console.log(inputVal);
    localStorage.setItem("hour-17",inputVal)
    showNotice();

})

$("#clear").click(function(){
    localStorage.clear();
    $(this).parent().siblings('.schudle-form').find("input").val("");
})

$("#download").click(function() {
    // hope the server sets Content-Disposition: attachment!
    html2canvas(document.querySelector('.schudle-form'), {
            onrendered: function(canvas) {
                console.log(canvas);
                document.body.appendChild(canvas);

            return Canvas2Image.saveAsPNG(canvas);
            }
        });

});

