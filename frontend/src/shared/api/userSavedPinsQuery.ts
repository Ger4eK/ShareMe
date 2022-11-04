export const userSavedPinsQuery = (userId: string) => {
   const query = `*[_type == 'pin' && '${userId}' in save[].userId ] | order(_createdAt desc) {
     image{
       asset->{
         url
       }
     },
     _id,
     destination,
     postedBy->{
       _id,
       userName,
       image
     },
     save[]{
       postedBy->{
         _id,
         userName,
         image
       },
     },
   }`;
   return query;
 };