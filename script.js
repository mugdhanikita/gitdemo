//this is writen because the doicument will get ready first then the jquery code will execute
$(document).ready(function () {
    //your jquery code

    // console.log($);
    // console.log(jQuery);
    //the above two lines are same

    //syntax of jquer -> $('selector').action()
    //event
    //1. click()   2. hide()
    $('p').click();  //click on p

    $('p').click(function () {
        console.log('You clicked on p')
        //this can also be used as a selector
        $(this).hide()  //jispe click krege vahi hide hoga
    });  //do this when click on p


    // $('p').click(function(){
    //     alert('You clicked on p')
    //     $('p').hide()
    // }); 

    //ways to access selectors by using class and id
    //$(#id).action()
    //$(.class).action()

    //id selector
    $('#p1').click(function () {
        console.log('You clicked on p1')
        $(this).hide()
    })

    $('.p2').click(function () {
        console.log('You clicked on p2')
        $(this).hide()
    })

    //there are three main types of selectors in jquery
    //1. id selector
    //2. class selector
    //3. element selector

    //other selectors 
    $('*').click(function () {
        console.log("clicked")
    });  //clicks on all the elements

    $('p.odd').click(function () {
        console.log("clicked")  //clicks on odd p
    });

    $('p:first').click(function () {
        console.log("clicked")  //clicks on 1st p
    });

})



