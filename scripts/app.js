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
        gtag('event', 'emailViewed', {
            'event_category' : 'header_footer_actions',
            'event_label' : 'emailViewed'
        });        
        break;
        case 'phone':
        document.getElementById('emailContactBox').value = '+91 8105275714'
        textBoxContainer.style.display = 'flex'
        gtag('event', 'mobileNumberViewed', {
            'event_category' : 'header_footer_actions',
            'event_label' : 'mobileNumberViewed'
        });                
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
    var event = (str === 'mejac279@gmail.com') ? 'EmailCopied' : 'MobileNumberCopied'
    gtag('event', event, {
        'event_category' : 'header_footer_actions',
        'event_label' : event
    });                 
    alert("Copied !!!")
}

function trackResumedDownload() {
    gtag('event', 'ResumeDownloaded', {
        'event_category' : 'header_footer_actions',
        'event_label' : 'ResumeDownloaded'
    });            
}

function blogReadClicked(blogTitle) {
    gtag('event', 'BlogReadClicked', {
        'event_category' : 'blog_actions',
        'event_label' : blogTitle
    });            
}

function flipWatch(watchBtn) {
    var watch = watchBtn.parentElement.children[0]
    var watchUrlSections = watch.src.split('/')
    watchUrlSections[watchUrlSections.length-1] = (watchUrlSections[watchUrlSections.length-1] === 'front.png') ? 'back.png' : 'front.png'
    watch.src = watchUrlSections.join('/')
}

addMobileFooterTextBoxPanel()

console.log("Itna bada hogya... Byah nahi hua tumhara ???")