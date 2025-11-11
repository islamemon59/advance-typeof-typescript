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
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "Admin";
    UserRole["Editor"] = "Editor";
    UserRole["Viewer"] = "Viewer";
})(UserRole || (UserRole = {}));
var canEdit = function (role) {
    if (role === UserRole.Admin || role === UserRole.Editor) {
        return true;
    }
    else
        return false;
};
var result = canEdit(UserRole.Admin);
console.log(result);
