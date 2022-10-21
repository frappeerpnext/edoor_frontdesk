frappe.listview_settings['Room List'] = {
    button: {
        show(doc) {
            
            return doc.room_name;
        },
        get_label() {
            return 'View';
        },
        get_description(doc) {
            return __('View {0}', [`${doc.room_name}`])
        },
        action(doc) {
            frappe.set_route('room-list', doc.room_name);
        },
        get_form_link(doc) {
            // override the form route for this doc
            console.log(doc)
        },
    },
    
    onload(listview) {
        console.log(listview)
        
    },
}