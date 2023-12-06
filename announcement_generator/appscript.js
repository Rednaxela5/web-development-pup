function toggleMeetingOptions() {
    var modeOfLearning = document.querySelector('input[name="modeOfLearning"]:checked').value;
    var platform = document.getElementById('platform');
    var meetingPlatform = document.getElementById('meetingPlatform');
    var meetingLink = document.getElementById('meetingLink');
    var meetingId = document.getElementById('meetingID');
    var passcode = document.getElementById('passcode');
    var roomNumber = document.getElementById('roomNumber');

    if (modeOfLearning === 'online')
    {
        platform.style.display = 'block';
        meetingLink.style.display = 'block';
        meetingId.style.display = 'none';
        passcode.style.display = 'none';
        roomNumber.style.display = 'none';
        if (meetingPlatform.value === 'Zoom') 
        {
            meetingLink.style.display = 'block';
            meetingId.style.display = 'block';
            passcode.style.display = 'block';
            roomNumber.style.display = 'none';
        }
    }
    else if (modeOfLearning === 'faceToFace') 
    {
        roomNumber.style.display = 'block';
        platform.style.display = 'none';
        meetingLink.style.display = 'none';
        meetingId.style.display = 'none';
        passcode.style.display = 'none';
    }
}

// function changeZoom() {
//     var platform = document.getElementById('meetingPlatform');
//     var meetingLink = document.getElementById('meetingLink');
//     var meetingId = document.getElementById('meetingID');
//     var passcode = document.getElementById('passcode');
//     var roomNumber = document.getElementById('roomNumber');

//     if (platform.value === 'Zoom') {
//         meetingLink.style.display = 'block';
//         meetingId.style.display = 'block';
//         passcode.style.display = 'block';
//         roomNumber.style.display = 'none';
//     }
// }

document.addEventListener('DOMContentLoaded', function () {
    // Add event listener to subject dropdown
    document.getElementById('subject').addEventListener('change', updateMeetingOptions);

    // Add event listener to mode of learning radio buttons
    var modeOfLearningRadios = document.querySelectorAll('input[name="modeOfLearning"]');
    modeOfLearningRadios.forEach(function (radio) {
        radio.addEventListener('change', updateMeetingOptions);
    });

    // Add event listener to meeting platform dropdown
    document.getElementById('meetingPlatform').addEventListener('change', updateMeetingOptions);
});

function updateMeetingOptions() {
    var subject = document.getElementById('subject').value;
    var modeOfLearning = document.querySelector('input[name="modeOfLearning"]:checked').value;
    var meetingPlatform = document.getElementById('meetingPlatform').value;

    // Add your conditions here to update values based on subject, modeOfLearning, and meetingPlatform
    if (subject === "Database Administration" && modeOfLearning === "online") {
        document.getElementById('meetingLinkInput').value = "https://meet.google.com/xba-covq-owa";
    } else if (subject === "Web Development" && modeOfLearning === "online" && meetingPlatform === "Zoom") {
        document.getElementById('meetingLinkInput').value = "https://us04web.zoom.us/j/77588962416?pwd=bst9H59E6VaGafI19bhBI6soeRnzVv.1";
        document.getElementById('meetingIdInput').value = "775 8896 2416";
        document.getElementById('passcodeInput').value = "web";
    } else {
        // Reset values if no condition is met
        document.getElementById('meetingLinkInput').value = "";
        document.getElementById('meetingIdInput').value = "";
        document.getElementById('passcodeInput').value = "";
    }
}

function generateAnnouncement() {
    // var subject = document.getElementById('subject').value;
    // var what = document.getElementById('what').value;
    // var dateTime = document.getElementById('dateTime').value;
    // var modeOfLearning = document.querySelector('input[name="modeOfLearning"]:checked').value;
    // var platform = document.getElementById('meetingPlatform').value;
    // var meetingLink = document.getElementById('meetingLinkInput').value;
    // var meetingId = document.getElementById('meetingIdInput').value;
    // var passcode = document.getElementById('passcodeInput').value;

    var subject = document.getElementById('subject').value;
    var what = document.getElementById('what').value;
    var dateTime = document.getElementById('dateTime').value;
    var modeOfLearning = document.querySelector('input[name="modeOfLearning"]:checked').value;
    var platform = document.getElementById('meetingPlatform').value;
    var meetingLinkInput = document.getElementById('meetingLinkInput');
    var meetingIdInput = document.getElementById('meetingIdInput');
    var passcodeInput = document.getElementById('passcodeInput');
    var roomNumberInput = document.getElementById('roomNumberInput');
    var comments = document.getElementById('comments').value;
    
    // Set default values for meeting options
    var meetingLink = meetingLinkInput.value;
    var meetingId = meetingIdInput.value;
    var passcode = passcodeInput.value;

    // Check conditions and update meeting options accordingly
    if ((subject === "Database Administration") && (modeOfLearning === "online")) {
        meetingLink = "https://meet.google.com/xba-covq-owa";
    } else if ((subject === "Web Development") && (modeOfLearning === "online")) {
        platform = "Zoom";
        meetingLink = "https://us04web.zoom.us/j/77588962416?pwd=bst9H59E6VaGafI19bhBI6soeRnzVv.1";
        meetingId = "775 8896 2416";
        passcode = "web";
    }

    // Update the input values
    document.getElementById('meetingLinkInput').value = meetingLink;
    document.getElementById('meetingIdInput').value = meetingId;
    document.getElementById('passcodeInput').value = passcode;

    // meetingLinkInput.value = meetingLink;
    // meetingIdInput.value = meetingId;
    // passcodeInput.value = passcode;

    var announcement = `📌 𝗖𝗹𝗮𝘀𝘀 𝗔𝗻𝗻𝗼𝘂𝗻𝗰𝗲𝗺𝗲𝗻𝘁 📌\n`;
    announcement += `𝗦𝘂𝗯𝗷𝗲𝗰𝘁: ${subject}\n`;
    announcement += `𝗪𝗵𝗮𝘁: ${what}\n`;
    var formattedDateTime = new Date(dateTime).toLocaleString('en-US', { month: 'long', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true });
    announcement += `𝗪𝗵𝗲𝗻: ${formattedDateTime}\n`;
    announcement += `𝗠𝗼𝗱𝗲 𝗼𝗳 𝗟𝗲𝗮𝗿𝗻𝗶𝗻𝗴: ${modeOfLearning === 'online' ? 'Online' : 'Face to Face'}`;
    
    if (modeOfLearning === 'online') {
        announcement += `\n\n𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺: ${platform}\n𝗠𝗲𝗲𝘁𝗶𝗻𝗴 𝗟𝗶𝗻𝗸: ${meetingLink}`;

        if (platform === 'Zoom') {
            announcement += `\n𝗠𝗲𝗲𝘁𝗶𝗻𝗴 𝗜𝗗: ${meetingId}\n𝗣𝗮𝘀𝘀𝗰𝗼𝗱𝗲: ${passcode}`;
        }
    }
    if (modeOfLearning === 'faceToFace') {
        var roomNumber = roomNumberInput.value;
        announcement += `\n𝗥𝗼𝗼𝗺 𝗡𝘂𝗺𝗯𝗲𝗿: ${roomNumber}`;
    }
    if (comments !== '')
    {
        
        announcement += `\n\n${comments}`;
    }
    

    document.getElementById('announcement-result').innerText = announcement;
    document.getElementById('announcement-output').style.display = 'block';
}

function copyToClipboard() {
    var announcementResult = document.getElementById('announcement-result');
    var range = document.createRange();
    range.selectNode(announcementResult);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert('Announcement copied to clipboard!');
}