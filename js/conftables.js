    var table = $('#faucetslist').DataTable({
        'responsive': true,
		'pagingType': 'numbers',
        'pageLength': 20,
        'lengthMenu': [
            [10, 20, 50, 100, -1],
            [10, 20, 50, 100, 'All']
        ],
		'columnDefs': [
            {
                'targets': [ 0 ],
                'visible': false,
                'searchable': false
            },
        ],
        "language": {
            "zeroRecords": "<b>Sorry, notyet Faucet for this coin to display</b>", //changes words used
            "lengthMenu": "<b>_MENU_</b>", //changes words used
            "info": "<b>&raquo; _START_ to _END_ of _TOTAL_</b>", //changes words used
            "search": "", //changes words used originally - Search programs:
            "searchPlaceholder": "Search Faucet",
            "infoFiltered": "<b>(filtered from _MAX_ total Faucet)</b>"
        }
    });

    // table.column(1).visible(false);

    $('button').on('click', 'a', function() {

        table
            .columns(2)
            .search($(this).text())
            .draw();
    });

    $('button').on('click', 'a.all', function() {

        table
            .search('')
            .columns(2)
            .search('')
            .draw();
    });
	

