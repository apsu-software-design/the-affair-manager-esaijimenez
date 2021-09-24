//Esai Jimenez
//9-20-21
//CSCI-4602
//Assignment 2: Affair Manager Program


export class AffairManager{
    //adds a member by pushing a name and email into an array.
    addMember(name, email){
        let nameArr = new Array();
        nameArr.push(name);
        

        let emailArr = new Array();
        emailArr.push(email);
    };
    //adds an affair by pushing affairName, zipcode, and date to their respective arrays.
    addAffair(affairName, zipcode, date){
        let affairNameArr = new Array();
        affairNameArr.push(affairName);

        let zipcodeArr = new Array();
        zipcodeArr.push(zipcode);

        let dateArr = new Array();
        dateArr.push(date);
    }
    //adds an organization to an array of organizations
    addOrganization(organizationName){
        let organizationNameArr = new Array();
        organizationNameArr.push(organizationName);
    };
    //adds member to an affair given its memberName.
    addMemberToAffair(memberName, affairName){
        affairName.push(memberName);
    };
    //adds an affair to an organization given its affairName.
    addAffairToOrganization(affairName, organizationName){
        organizationName.push(affairName);
    };
    
    findMemberNames(query){
        return query;
    };
    findAffairNames(query){
        return query;
    };
    findOrganizationNames(query){
        return query;
    };
    //modifies the affair title given its affairName.
    modifyAffair(affairName, newTitle){
        affairName.push(newTitle);
        
        newTitle = new Array();
        for(var i = 0; i<newTitle.length;i++){
            newTitle[i]=i;
        }
    };
    //retrieves all the members inside an affair given the affairName.
    getMembers(affairName){
        
        for(var i = 0; i<affairName.length;i++){
            affairName[i]=i;
            console.log(affairName[i]);
        }
    };
}

