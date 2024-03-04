import {db, set, push, ref, onChildAdded} from "./configfirebase.js";
//

const text_input_searchField = document.getElementById('text_input_searchField')
const chatSelec_container = document.getElementById('chatSelec_container')

const chat_container = document.getElementById('chat_container')

const text_input_messageField = document.getElementById('text_input_messageField')
const send_button = document.getElementById('send_button')


const visibility_property = document.getElementsByClassName('visibility_property')


const refUsersIds = ref(db, 'users/');

var messages = [];

let chatVisible = false
let messageRetrieved = false
//

window.onload = function() {
    setAllUsersAsContacts()
}

send_button.addEventListener('click', function(){
    const input_value = text_input_messageField.value;
    sendMessage(input_value, username);
    append_messageNode(input_value, username);
});
// 

export function writeUserData(username, email, pwd) {
    const min = 1000000000;
    const max = 9999999999;
    const userId = Math.floor(Math.random() * (max - min)) + min;

    set(ref(db, 'users/' + userId), {
        username: username,
        userId: userId,
        email: email,
        pwd: pwd,

        contacts: {}
    });
}

// function addContact(userId, contactName, contactId){
//     set(ref(db, 'users/' + userId + '/contacts/' + contactId), {
//         contactId: contactId,
//         contactName: contactName   
//     })
// }

export function setAllUsersAsContacts() {
    // Retrieve all users' data
    onChildAdded(refUsersIds, (snapshot) => {
        const userData = snapshot.val();
        const userId = snapshot.key;

        // Set each user as a contact for all other users
        onChildAdded(refUsersIds, (childSnapshot) => {
            const contactId = childSnapshot.key;
            if (contactId !== userId) { // Exclude the user itself as a contact
                addContact(userId, childSnapshot.val().username);
            }
        });
    });
}

function sendMessage(input_value, username, userId, email, contactId) {
    const newMessageRef = ref(db, 'users/' + userId + '/contacts/' + contactId + '/');
    const newMessage = push(newMessageRef);

    set(newMessage, {
        username: username,
        email: email,

        message: input_value
    });
}

function append_messageNode(input_value) {
    const new_message_node = document.createElement('div');
    new_message_node.classList.add('message_nodes');
    new_message_node.classList.add('visibility_property');
    
    text_input_messageField.value = '';
    
    new_message_node.textContent = input_value;
    
    chat_container.appendChild(new_message_node);
    
    for (let i = 0; i<visibility_property.length; i++){
        visibility_property[i].style.visibility = 'visible'};

    messages.push(input_value)
}


function loadMessage(userId, contacts){
    const MessageRef = ref(db, 'users/' + userId + '/contacts/');
    
    onChildAdded(MessageRef, (snapshot) => {
        var aux = ''
        const databaseMessages = snapshot.val();

        aux = `<p>${databaseMessages.message}</p>`

        const new_message_node = document.createElement('div');
        new_message_node.classList.add('message_nodes');
        new_message_node.classList.add('visibility_property');

        new_message_node.innerHTML = aux;
        chat_container.appendChild(new_message_node);
    })    
}


async function load_chatSelec_nodes(username){
    const listContacts = await getContacts(username)

    listContacts.forEach(contact => {
        var aux = `<p>${toString(contact)}</p>`

        const new_chatSelec_node = document.createElement('div');
        new_chatSelec_node.classList.add('chatSelec_nodes');
        new_chatSelec_node.classList.add('visibility_property');
    
        new_chatSelec_node.innerHTML = aux;

        chatSelec_container.appendChild(new_chatSelec_node)

        new_chatSelec_node.addEventListener('click', function(event) {
            if (messageRetrieved) {
                null;
            } else {
                loadMessage(username);
                messageRetrieved = !messageRetrieved;
            }
    
            if (chatVisible) {
                for (let i = 0; i < visibility_property.length; i++) {
                    visibility_property[i].style.visibility = 'hidden';
                }
            } else {
                for (let i = 0; i < visibility_property.length; i++) {
                    visibility_property[i].style.visibility = 'visible';
                }
            }
            chatVisible = !chatVisible;
        });
    });
}