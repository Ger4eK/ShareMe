export const feedQuery = `*[_type == "pin"] | order(_createdAt desc) {
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
         _key,
         postedBy->{
           _id,
           userName,
           image
         },
       },
     } `;
