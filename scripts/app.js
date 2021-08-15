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
        gtag('send', 'event', 'Actions', 'Email', 'Viewed');
        break;
        case 'phone':
        document.getElementById('emailContactBox').value = '+91 8105275714'
        textBoxContainer.style.display = 'flex'
        gtag('send', 'event', 'Actions', 'MobilNumber', 'Viewed');
        break;        
    }
}

function copyToClipBoard(str) {
    str = str || document.getElementById('emailContactBox').value
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    gtag('send', 'event', 'Actions', 'MobilNumberOrEmail', 'Copied');
    alert("Copied !!!")
}

function trackResumedDownload() {
    gtag('send', 'event', 'Actions', 'ResumeDownloaded', 'linkClicked');
}

addMobileFooterTextBoxPanel()