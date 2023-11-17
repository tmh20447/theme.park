
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre> 
 _     _  _____  _       _              ______  _____   
| |   | |/ ___ \| |     | |        /\  |  ___ \(____ \  
| |__ | | |   | | |     | |       /  \ | |   | |_   \ \ 
|  __)| | |   | | |     | |      / /\ \| |   | | |   | |
| |   | | |___| | |_____| |_____| |__| | |   | | |__/ / 
|_|   |_|\_____/|_______)_______)______|_|   |_|_____/  
                                                       </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
