// //Most comon click method.
// function clickBtn(){
//     const ClickMethod = document.getElementById('click_method');
//     ClickMethod.innerText = 'Added some text with the click method';
// }


// //direct clicking method
// document.getElementById('dircet_click_method').addEventListener('click', function(){
//     const directClick = document.getElementById('click_method');
//     directClick.innerText = "added some text with the direct click method";
    
// })


// //Upading input tag
// document.getElementById('input-btn').addEventListener('click', function(){
//     const inputField = document.getElementById('input-field');
//     const p = document.getElementById('click_method');
//     p.innerText = inputField.value;
//     inputField.value = ''
// })


//Making a comment box.

// document.getElementById('submit-button').addEventListener('click', function(){
//     const commentField = document.getElementById('new-comment');
    
//     let commentParagraph  = document.createElement('p');
//     commentParagraph.innerText = commentField.value;
 
    
//     const commentParent = document.getElementById('commnent-container');
//     console.log(commentParent);
//     commentParent.append(commentParagraph);
    
//     commentField.value = '';

// })

//delete h3
document.getElementById('delete-btn').addEventListener('click', function (){
    const itemDel = document.getElementById('secret-info').style.display = 'none';
})

//make bg colored.
document.getElementById('text-filed').addEventListener('focus', function() {
    document.body.style.background = 'coral';
})

//add blur on body,
document.getElementById('text-filed').addEventListener('blur', function() {
    document.body.style.background = 'white';
})

//keyDown
// document.getElementById('text-filed').addEventListener('keydown', function() {
//     const textValue = document.getElementById('text-filed')
//     console.log(textValue.value)
// })


//kewpress
// document.getElementById('text-filed').addEventListener('keypress', function() {
//     const textValue = document.getElementById('text-filed')
//     console.log(textValue.value)
// })

//keyup

// document.getElementById('text-filed').addEventListener('change', function() {
//         const textValue = document.getElementById('text-filed')
//         console.log(textValue.value)
//  })

// document.getElementById('text-filed').addEventListener('keyup', function() {
//             const textValue = document.getElementById('text-filed')
           
//             const EnabledeleteBtn = document.getElementById('delete-btn')

//             if(textValue.value == 'delete'){
                
//                EnabledeleteBtn.removeAttribute('disabled');
//             }
//             else{
//                EnabledeleteBtn.setAttribute('disabled', true);

//             }
//  })

 document.getElementById('text-filed').addEventListener('keyup', function(event) {
            
            if(event.target.value == 'delete'){

               document.getElementById('delete-btn').removeAttribute('disabled');
            }
            else{
                document.getElementById('delete-btn').setAttribute('disabled', true);

            }
        })