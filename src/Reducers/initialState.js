export const initialState = {
    auth : {
        isAuth : false,
        user : null,
        message : null
    },
    document : {
        docID  :"",
        uID : "",
        skinCode : ""
    },
    contactDetails : {
        
        fName:"",
        lName:"",
        professionalSummary:"",
        Email:"",
        phone:"",
        profession:"",
        street:"",
        city:"",
        state:"",
        country:"",
        pincode:""
        
    },
    educationDetails:{
        collegeName:"",
        degree:"",
        cgpa:"",
        eduCity:"",
        eduState:"",
        graduationMonth:"",
        graduationYear:""
    }
}