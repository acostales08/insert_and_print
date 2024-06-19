jQuery(document).ready(() => {
    $(document).ready(function() {
        let eData = [];
        for (let i = 1; i <= 5; i++) {
            $("#studentCode" + i).autocomplete({
                source: function(request, response) {
                    $.ajax({
                        url: "helper.php?isFetch=true",
                        type: "GET",
                        dataType: "json",
                        success: function(data) {
                            eData = $.map(data, function(value) {
                                return value.studentcode;
                            });
                            var result = $.ui.autocomplete.filter(eData, request.term);
                            response(result);
                        }
                    });
                }
            });
        }
    
        let fData = [];
        for (let i = 1; i <= 2; i++) {
            $("#txtFetch" + i).autocomplete({
                source: function(request, response) {
                    $.ajax({
                        url: "helper.php?isFetcher=true",
                        type: "GET",
                        dataType: "json",
                        success: function(data) {
                            fData = $.map(data, function(value) {
                                return value.fetcherCode;
                            });
                            var result = $.ui.autocomplete.filter(fData, request.term);
                            response(result);
                            console.log(result);
                        }
                    });
                }
            });
        }
    });
    

    $('#btnSubmit').on('click', function() {
        var fetcherCode = $('#txtfetcherCode').val();
        var fetcherName = $('#txtfetcherName').val();
        var contactNum = $('#txtContactNum').val();
        var regDate = $('#txtregDate').val();
        var isActive = $('#activeStatus').is(':checked') ? 1 : 0;

        var students = [];
        for (var i = 1; i <= 5; i++) {
            var studentCode = $('#studentCode' + i).val();
            var relation = $('#relation' + i).val();
            if (studentCode && relation) {
                students.push({
                    studentCode: studentCode,
                    relation: relation,
                    fetcherCode: fetcherCode,
                });
            }
        }

        const data = {
            isTrue: true,
            fetcherCode: fetcherCode,
            fetcherName: fetcherName,
            contactNum: contactNum,
            regDate: regDate,
            isActive: isActive,
            students: students
        }
        console.log(data)

        $.ajax({
            url: 'insert.php',
            method: 'POST',
            data: data,
            success: ((response) => {
                console.log(response);
                location.reload();
            }),
            error: ((xhr, status, error) =>  {
                alert('An error occurred: ' + error);
            })
        });
    });

});
