# Copyright (c) 2022, Tes Pheakdey and contributors
# For license information, please see license.txt

from functools import total_ordering
import json
import frappe
from frappe.model.document import Document

class RoomList(Document):
	
	def validate(self):
		doc = frappe.get_doc('Properties Setting', self.property)
		if doc.max_room is frappe.db.count('Room List'):
			frappe.throw('''Max room only {}'''.format(doc.max_room))


