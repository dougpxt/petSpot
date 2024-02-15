const right_container = document.getElementById('rightSide')
const chat_container = document.getElementById('chat_container')
const node_containingMessages = document.getElementById('chatSelec_nodes')
const message_nodes = document.getElementsByClassName('message_nodes')

const footer = document.getElementById('footer')
const send_button = document.getElementById('send_button')

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
