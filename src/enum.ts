//enum : set of fixed string ke ek jaygai rakha


//Without enum
// type UserRole = "Admin" | "Editor" | "Viewer";

// const canEdit = (role : UserRole) => {
//     if(role === "Admin" || role === "Editor"){
//         return true;
//     } else return false;
// }

// const result = canEdit("Admin")
// console.log(result);



// with enum
// type UserRole = "Admin" | "Editor" | "Viewer";

enum UserRole {
    Admin = "Admin",
    Editor = "Editor",
    Viewer = "Viewer"
}

const canEdit = (role : UserRole) => {
    if(role === UserRole.Admin || role === UserRole.Editor){
        return true;
    } else return false;
}

const result = canEdit(UserRole.Admin)
console.log(result);