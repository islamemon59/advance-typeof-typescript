//user enum modern way

// enum UserRole {
//     Admin = "Admin",
//     Editor = "Editor",
//     Viewer = "Viewer"
// }

const UserRole = {
  Admin: "Admin",
  Editor: "Editor",
  Viewer: "Viewer",
} as const;

/*

if we are use as const 
behind the scen it's look like that

{
  readonly modifier  Admin : "Admin",
   readonly modifier Editor : "Editor",
   readonly modifier Viewer: "Viewer"
}

if we use 
typeof UserRole 
behind the scen ts do that 
{
    Admin : "Admin",
    Editor : "Editor",
    Viewer: "Viewer"
}

if we use keyof typeof 
here also behind the scen ts do like that
"Admin" | "Editor" | Viewer

if Admin value is capitalized like ADMIN
then we need to use like that 

 typeof UserRole[keyof typeof UserRole]

 cause  

*/

const canEdit = (role: typeof UserRole[keyof typeof UserRole]) => {
  if (role === UserRole.Admin || role === UserRole.Editor) {
    return true;
  } else return false;
};

const result = canEdit(UserRole.Admin);
console.log(result);
