var textBoxPanel = document.createElement('template');
function addMobileFooterTextBoxPanel() {
    var textBoxPanel = document.createElement('template');
    textBoxPanel.innerHTML = `<div class="text-box-container padding-bottom">
                            <input type="text" name="email" id="emailContactBox">
                            <div onclick="copyToClipBoard()">Copy</div>
                        </div>`
    textBoxPanel.content.firstChild.style.display = 'none'
    document.querySelector(".footer.mobile-only.primary-bg").prepend(textBoxPanel.content.firstChild)
}
function onFooterItemClick(option) {
    var textBoxContainer = document.querySelector(".footer .text-box-container")
    textBoxContainer.style.display = 'none'
    switch(option) {
        case 'email':
        document.getElementById('emailContactBox').value = 'MEJAC279@GMAIL.COM'
        textBoxContainer.style.display = 'flex'
        break;
        case 'phone':
        document.getElementById('emailContactBox').value = '+91 8105275714'
        textBoxContainer.style.display = 'flex'
        break;        
    }
}
function copyToClipBoard(value) {
    if(value) {
        document.getElementById('emailContactBox').value = value
    }
    document.getElementById('emailContactBox').select();
    document.getElementById('emailContactBox').setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Copied !!!")
}
addMobileFooterTextBoxPanel()