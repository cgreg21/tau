domReady(function(){
	

function initDB(){
	/* ?_=ts code for no cache mechanism */
	$.getScript(pb_dbsrc + "?_=ts2477874287", function(data, textStatus)
	{
		$("ul").filter(function(){return $(this).data("role")=="virtuallistview";}).addClass("vlLoadSuccess");
	  
		/* Set counts */
		nb_contacts = window[pb_dbtable].length;
		nb_groups = 0;
	
		Phonebook.pushContactsTitle("#all_contacts_header h1", "#" + "tmpl_contacts_title", nb_contacts);
		
		$("ul.ui-virtual-list-container").virtuallistview("create");
	});
};

/* All contacts list */
$("#all_contacts_queryInput").live( "input", function(events) {
	
	var query = "";
	query = ".*" + $(this).val();

	Phonebook.search(window[pb_dbtable], query, "#all_contacts_list");
});

$("#all_contacts_list li").live("click", function()
{
	Phonebook.getDetailview(window[pb_dbtable], $(this).data("pbid"));
});

/* Contacts list */
$("#contacts_list_queryInput").live( "input", function(events) {
	
	var query = "";
	query = ".*" + $(this).val();

	Phonebook.search(window[pb_dbtable], query, "#contacts_list_main");
});

$("#all_groups_list li.ui-li-expanded.ui-li-expand-transition-show").live("click", function(event)
{
	/* Get Title and count */
	var titleString = $(this).text();
	var selectedGroup = $(this).attr("id");
	var selectedSaveLocation = $(this).data("expanded-by");
	
	/* Make selected groups contacts list */
	var contacts_in_group = Phonebook.makeContactlist(window[pb_dbtable], window[pb_groupdbtable], selectedSaveLocation, selectedGroup);
	
	/* Push data and page transition */
	Phonebook.pushContactList("#contacts_list_page", "#contacts_list_header h1", "#contacts_list_main", titleString, contacts_in_group);
}); 

/* Groups page : Get group list */
$("#all_groups_page").bind("pagebeforecreate", function(){
	
	/* Set Group list's first item : All contacts (N) */
	Phonebook.pushContactsTitle("#All_contacts_on_groups_list span", "#"+"tmpl_contacts_title", nb_contacts);
	
	/* Make Group list data structure */
	var groupedList = Phonebook.makeGroupList(window[pb_groupdbtable]);
	
	Phonebook.pushGourpedList("#all_groups_list", "#tmpl_groups_expandable_savedLocationName", "#tmpl_groups_expandable_groupName", groupedList);
});

/* Start Phonebook App initialization */
initDB();

}); //End of Dom Ready