import * as React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const ProfileCard = ({ id }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/auth/user`, {
      method: "POST",
      body: JSON.stringify({
        userId: id,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        setUser(json);
      })
      .catch((error) => console.error("Fetch error:", error));
  }, [id]);

  if (!user) return <Typography>Loading...</Typography>;

  return (
    <Card sx={{ maxWidth: 345, marginBottom: 2 }}>
      <CardHeader title={user.PetName} />
      <CardMedia
        component="img"
        height="194"
        image={user.image}
        alt={user.PetName}
      />
      <CardContent>
        <Typography variant="h6" sx={{ color: "text.secondary" }}>
          Pet Parent: {user.name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Pets Breed: {user.Pet}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Pets Birthdate: {user.PetBirthdate}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {user.PetDescription}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;

// const ProfileCard = () => {
//   const [data, setData] = React.useState([]);

//   useEffect(() => {
//     fetch("http://localhost:3000/users")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then((json) => {
//         console.log(json);
//         if (json?.users) setData(json.users);
//       })
//       .catch((error) => console.error("Fetch error:", error));
//   }, []);

//   if (data.length < 0) return <Typography>Loading...</Typography>;

//   return data?.map((users) => (
//     <Card key={users.id} sx={{ maxWidth: 345, marginBottom: 2 }}>
//       <CardHeader title={users.PetName} />
//       <CardMedia
//         component="img"
//         height="194"
//         image={users.image}
//         alt={users.PetName}
//       />
//       <CardContent>
//         <Typography variant="header2" sx={{ color: "text.secondary" }}>
//           Pet Parent: {users.Name}
//         </Typography>
//         <Typography variant="body2" sx={{ color: "text.secondary" }}>
//           Pets Breed: {users.Pet}
//         </Typography>
//         <Typography variant="body2" sx={{ color: "text.secondary" }}>
//           Pets Birthdate: {users.PetBirthdate}
//         </Typography>
//       </CardContent>
//       <CardContent>
//         <Typography variant="body2" sx={{ color: "text.secondary" }}>
//           {users.PetDescription}
//         </Typography>
//       </CardContent>
//     </Card>
//   ));
// };

// export default ProfileCard;
