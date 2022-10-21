// Copyright (c) 2022, Tes Pheakdey and contributors
// For license information, please see license.txt

frappe.ui.form.on('Room List', {
	refresh: function(frm) {
			frm.add_custom_button('Click me', () => {
				location.href = "/app/room-list/new";
			})
		
	}
	
});
