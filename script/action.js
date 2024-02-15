const node_containingMessages = document.getElementById('chatSelec_nodes')

const right_container = document.getElementById('rightSide')
const chat_container = document.getElementById('chat_container')
const message_nodes = document.getElementsByClassName('message_nodes')

const footer = document.getElementById('footer')
var text_input_field = document.getElementById('input_text_field')
const send_button = document.getElementById('send_button')
//
let chatVisible = false
node_containingMessages.addEventListener('click', function(){
    if (chatVisible){
        chat_container.style.visibility = 'hidden';
        for (let i = 0; i<message_nodes.length; i++){message_nodes[i].style.visibility = 'hidden'};
        footer.style.visibility = 'hidden'
    } else{
        chat_container.style.visibility = 'visible';
        for (let i = 0; i<message_nodes.length; i++){message_nodes[i].style.visibility = 'visible'};
        footer.style.visibility = 'visible'
    }
    chatVisible = !chatVisible;
});
// 
send_button.addEventListener('click', function(){
    const input_value = text_input_field.value
    const new_message_node = document.createElement('div');
    new_message_node.classList.add('message_nodes');
    new_message_node.innerHTML = input_value;
    chat_container.appendChild(new_message_node);
    text_input_field.value = '';
})