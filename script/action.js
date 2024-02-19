import {db, set, ref} from "./configfirebase.js";
//

const chatSelec_nodes = document.getElementById('chatSelec_nodes')

const chat_container = document.getElementById('chat_container')

const visibility_property = document.getElementsByClassName('visibility_property')
const send_button = document.getElementById('send_button')
//

let chatVisible = false
chatSelec_nodes.addEventListener('click', function(){
    if (chatVisible){
        for (let i = 0; i<visibility_property.length; i++){visibility_property[i].style.visibility = 'hidden'};
    } else{
        for (let i = 0; i<visibility_property.length; i++){visibility_property[i].style.visibility = 'visible'};
    }
    chatVisible = !chatVisible;

});

send_button.addEventListener('click', function(){
    const new_message_node = document.createElement('div');
    new_message_node.classList.add('message_nodes');
    new_message_node.classList.add('visibility_property')
    
    const input_value = text_input_field.value;
    new_message_node.textContent = input_value;

    chat_container.appendChild(new_message_node);
    text_input_field.value = '';

    for (let i = 0; i<visibility_property.length; i++){
        visibility_property[i].style.visibility = 'visible'};
    sendMessage(input_value);
});
// 

function sendMessage(input_value, userId, username, email, imageUrl) {
    // event.preventDefault();
    
    // console.log(input_value);

  set(ref(db, 'users/' + userId), {
    // username: username,
    // email: email,
    // profile_picture : imageUrl,
    message: input_value
  });
}