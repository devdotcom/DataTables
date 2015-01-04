// DataTables init
$(document).ready( function() {
	var table = $("#datatable").dataTable( {
		"language" : {
			"lengthMenu" : "Records per page _MENU_",
			"zeroRecords" : "Nothing found - sorry",
			"info" : "Page _PAGE_ of _PAGES_",
			"infoEmpty" : "No records available",
			"infoFiltered" : ""
		},
		scrollY : 400,
		"ajax" : "data.xsp",
		"columns" : [ {
			"data" : "lastname"
		}, {
			"data" : "firstname"
		}, {
			"data" : "address"
		}, {
			"data" : "zip"
		}, {
			"data" : "city"
		}, {
			"data" : "country"
		} ]

	});

})