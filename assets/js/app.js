/**
 * passing variable
 */
let openFile  = $('#openFile'),
    fileInput = $('#fileInput'),
    showFileName  = $('#showFileName'),
    submitButton = $('#submitButton')

/**
 * button handler click
 */
openFile.click(function() {
    fileInput.click()
})

/**
 * input[type=file] handler change
 */
fileInput.change(function() {
    var showFiles = [];
    for (var i = 0; i < $(this).get(0).files.length; ++i) {
        showFiles.push($(this).get(0).files[i].name);
    }
    showFileName.val(showFiles);
})

/**
 * button type submit handler click
 */
submitButton.click(function() {
    event.preventDefault()

    let form = $('#formAJax')

    $.ajax({
        url: form.attr('action'),
        data: form.serialize(),
        // method: 'post',
        success: function() {
            alert('AJax Succcess ' + this.url + ' ' + this.data)
        },
        error: function () {
            alert('Ajax Error ' + this.url + ' ' + this.data)
        }
    })
})