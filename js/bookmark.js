function ajaxBookmark(id, url, callback) {
    $.ajax({
        dataType: 'json',
        type: 'post',
        async: false,
        data: {
            id: id,
            _csrf: $("meta[name=csrf-token]").attr('content')
        },
        url: url,
        success: function (response) {
            callback(response);
        }
    });
}